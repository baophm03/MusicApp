import React, { useContext, useEffect, useState, useRef } from 'react';
import TrackPlayer, { State, Event, useTrackPlayerEvents, useProgress } from 'react-native-track-player';
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated } from 'react-native';
import tracks from '../components/tracks';
import FavoriteTracksContext from './FavoriteTracksContext'; // Import context

TrackPlayer.updateOptions({
  stopWithApp: false,
  capabilities: [TrackPlayer.CAPABILITY_PLAY, TrackPlayer.CAPABILITY_PAUSE],
  compactCapabilities: [
    TrackPlayer.CAPABILITY_PLAY,
    TrackPlayer.CAPABILITY_PAUSE,
  ],
});

const MusicPlayer = () => {

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const spinValue = useRef(new Animated.Value(0)).current;
  const [isFavorited, setIsFavorited] = useState(false);
  const { favoriteTracks, setFavoriteTracks } = useContext(FavoriteTracksContext);


  const setUpTrackPlayer = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add(tracks);

  };
  useEffect(() => {
    if (currentTrack && Array.isArray(favoriteTracks)) {
      setIsFavorited(favoriteTracks.includes(currentTrack.id));
    }
  }, [favoriteTracks, currentTrack]);

  useEffect(() => {
    const initializePlayer = async () => {
      await setUpTrackPlayer(); // Đợi khởi tạo xong
      startRotation();

    };

    initializePlayer();

    return () => TrackPlayer.destroy();
  }, []);

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async (event) => {

    if (event.type === Event.PlaybackTrackChanged && event.nextTrack != null) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      setCurrentTrack(track);
    }
  });

  //hàm dừng phát nhạc khi bấm pause/play
  const togglePlayPause = async () => {
    const currentState = await TrackPlayer.getState();
    if (currentState === State.Playing) {
      await TrackPlayer.pause();
      setIsPlaying(false);
    } else {
      await TrackPlayer.play();
      setIsPlaying(true);
    }
  };

  // Hàm làm ảnh xoay 360 độ
  const startRotation = () => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 25000,
        easing: linearEasing,
        useNativeDriver: false,
      })
    ).start();
  };

  const linearEasing = (value) => value;

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  // Hàm chuyển đổi thời gian từ giây sang định dạng "hh:mm:ss"
  function secondsToMMSS(seconds) {
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  }

  const time = useProgress();
  const time1 = roundNumber(time.position);
  const time2 = roundNumber(time.duration);

  function roundNumber(number) {
    return number % 1 < 0.5 ? Math.floor(number) : Math.ceil(number);
  }

  const thoigianbatdau = secondsToMMSS(time1);
  const thoigianketthuc = secondsToMMSS(time2);

  const handleToggleFavorite = () => {
    if (isFavorited) {
      // Nếu bài hát đã được yêu thích, xóa khỏi danh sách
      setFavoriteTracks(favoriteTracks.filter(trackId => trackId !== currentTrack.id));
    } else {
      // Nếu bài hát chưa được yêu thích, thêm vào danh sách
      setFavoriteTracks([...favoriteTracks, currentTrack.id]);
    }
    setIsFavorited(!isFavorited); // Đảo ngược trạng thái yêu thích
  };

  return (
    <View style={styles.container}>

      {/* Ảnh bìa bài hát */}
      {currentTrack && (
        <Animated.Image
          style={[styles.albumArt, { transform: [{ rotate: spin }] }]}
          source={currentTrack.artwork}
        />
      )}

      {/* Thông tin bài hát*/}
      <View style={styles.barthongtinbaihat}>
        <TouchableOpacity>
          <Image
            style={{ width: 20, height: 20 }} // Tùy chỉnh kích thước của icon
            source={require('../assets/Images/share.png')} // Đường dẫn đến icon trong thiết bị của bạn
          />
        </TouchableOpacity>

        <View style={styles.thongtinbaihat}>
          {currentTrack && (
            <>
              <Text style={{ fontSize: 22, textAlign: 'center', fontWeight: 'bold', color: 'black' }}>{currentTrack.title}</Text>
              <Text style={{ fontSize: 15, color: 'black' }}>{currentTrack.artist}</Text>
            </>
          )}
        </View>

        <TouchableOpacity onPress={handleToggleFavorite}>
          <Image
            style={{ width: 20, height: 20 }} // Tùy chỉnh kích thước của icon
            source={isFavorited ? require('../assets/Images/heart2.png') : require('../assets/Images/heart.png')} />
        </TouchableOpacity>
      </View>

      {/* Khung hiển thị thời gian */}
      <View style={styles.khungthoigian}>
        <View style={styles.thanhthoigian}>
          <View style={[styles.thanhthoigianTrang, { width: `${(time1 / time2) * 100}%` }]} />
          <View style={[styles.cucthoigian]} />
          <View style={[styles.thanhthoigianXanh, { width: `${((time2 - time1) / time2) * 100}%` }]} />
        </View>

        <View style={styles.thanhthoigian2}>
          <Text style={styles.thoigianbatdau}>{thoigianbatdau}</Text>
          <Text style={styles.thoigianketthuc}>{thoigianketthuc}</Text>
        </View>
      </View>

      {/* Thanh chức năng */}
      <View style={styles.thanhchucnang}>
        <TouchableOpacity style={{ padding: 20 }} onPress={() => TrackPlayer.skipToPrevious()}>
          <Image
            style={{ width: 30, height: 30 }} // Tùy chỉnh kích thước của icon
            source={require('../assets/Images/Previous.png')} // Đường dẫn đến icon trong thiết bị của bạn
          />
        </TouchableOpacity>

        <TouchableOpacity style={{ padding: 30 }} onPress={togglePlayPause}>
          <Image
            style={{ width: 60, height: 60 }} // Tùy chỉnh kích thước của icon
            source={isPlaying ? require('../assets/Images/pause.png') : require('../assets/Images/play.png')} // Đường dẫn đến icon trong thiết bị của bạn
          />
        </TouchableOpacity>

        <TouchableOpacity style={{ padding: 20 }} onPress={() => TrackPlayer.skipToNext()}>
          <Image
            style={{ width: 30, height: 30 }} // Tùy chỉnh kích thước của icon
            source={require('../assets/Images/next.png')} // Đường dẫn đến icon trong thiết bị của bạn
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    backgroundColor: 'rgba(1, 1, 1, 0.2)',
  },

  albumArt: {
    alignItems: 'center',
    margin: 30,
    borderRadius: 200,
    width: 330,
    height: 330,
  },
  barthongtinbaihat: {
    paddingTop: 40,
    paddingBottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignItems: 'center',
  },
  thongtinbaihat: {
    alignItems: 'center',
    textAlign: 'center',
  },

  thanhthoigian: {
    width: '86%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  thanhthoigianTrang: {
    backgroundColor: 'white',
    height: 5,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  cucthoigian: {
    backgroundColor: 'white',
    height: 15,
    width: 15,
    borderRadius: 20,
  },
  thanhthoigianXanh: {
    backgroundColor: 'rgba(128, 128, 128, 0.3)',
    height: 5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  thanhthoigian2: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
  },
  thoigianbatdau: {
    fontSize: 14,
  },
  thoigianketthuc: {
    fontSize: 14,
  },
  thanhchucnang: {
    paddingTop: 30,
    paddingBottom: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default MusicPlayer;