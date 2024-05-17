import React, { useEffect, useState } from 'react';
import TrackPlayer, { State, Event, useTrackPlayerEvents, useProgress } from 'react-native-track-player';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import tracks from './tracks';

TrackPlayer.updateOptions({
  stopWithApp: false,
  capabilities: [TrackPlayer.CAPABILITY_PLAY, TrackPlayer.CAPABILITY_PAUSE],
  compactCapabilities: [
    TrackPlayer.CAPABILITY_PLAY,
    TrackPlayer.CAPABILITY_PAUSE,
  ],
});

// Hàm chuyển đổi thời gian từ giây sang định dạng "hh:mm:ss"
function secondsToMMSS(seconds) {
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
}

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);

  const setUpTrackPlayer = async () => {
    try {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.add(tracks);
      console.log('Tracks added');
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setUpTrackPlayer();

    return () => TrackPlayer.destroy();
  }, []);

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async (event) => {
    if (event.type === Event.PlaybackTrackChanged && event.nextTrack != null) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      setCurrentTrack(track);
    }
  });

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

  const time = useProgress();

  const time1 = roundNumber(time.position);
  const time2 = roundNumber(time.duration);
  function roundNumber(number) {
    // Làm tròn số về phía trước nếu phần thập phân nhỏ hơn 0.5, ngược lại làm tròn về phía sau
    return number % 1 < 0.5 ? Math.floor(number) : Math.ceil(number);
  }


  const thoigianbatdau = secondsToMMSS(time1);
  const thoigianketthuc = secondsToMMSS(time2);
  return (
    <View style={styles.container}>
      {/* Thanh thông tin */}
      <View style={styles.topbar}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Nhạc Nhẽo</Text>
        </View>
      </View>

      {/* Ảnh bìa bài hát */}
      {currentTrack && (
        <Image style={styles.albumArt} source={currentTrack.artwork} />
      )}

      {/* Bar thông tin bài hát*/}
      <View style={styles.barthongtinbaihat}>

        <TouchableOpacity>
          <Image style={{ width: 20, height: 20 }} // Tùy chỉnh kích thước của icon
            source={require('./assets/Images/share.png')} // Đường dẫn đến icon trong thiết bị của bạn
          />
        </TouchableOpacity>

        {/* Thông tin bài hát*/}
        <View style={styles.thongtinbaihat}>
          {currentTrack && (
            <>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black'}}>{currentTrack.title}</Text>
              <Text style={styles.artist}>{currentTrack.artist}</Text>
            </>
          )}
        </View>

        <TouchableOpacity>
          <Image style={{ width: 20, height: 20 }} // Tùy chỉnh kích thước của icon
            source={require('./assets/Images/heart.png')} // Đường dẫn đến icon trong thiết bị của bạn
          />
        </TouchableOpacity>
      </View>

      {/* Khung hiển thị thời gian */}
      <View style={styles.khungthoigian}>
      <View style={styles.thanhthoigian}>
          <View style={[styles.thanhthoigianDo, { width: `${(time1 / time2) * 100}%` }]} />
          <View style={[styles.thanhthoigianXanh, { width: `${((time2 - time1) / time2) * 100}%` }]} />
        </View>

        <View style={styles.thanhthoigian2}>
          <Text style={styles.thoigianbatdau}>{(thoigianbatdau)}</Text>
          <Text style={styles.thoigianketthuc}>{(thoigianketthuc)}</Text>
        </View>
      </View>

      {/* Thanh chức năng */}
      <View style={styles.thanhchucnang}>
        <TouchableOpacity style={{ padding: 20 }}
          onPress={() => TrackPlayer.skipToPrevious()}>
          <Image style={{ width: 30, height: 30 }} // Tùy chỉnh kích thước của icon
            source={require('./assets/Images/Previous.png')} // Đường dẫn đến icon trong thiết bị của bạn
          />
        </TouchableOpacity>

        <TouchableOpacity style={{ padding: 30 }} onPress={togglePlayPause}>
          <Image style={{ width: 60, height: 60 }} // Tùy chỉnh kích thước của icon
            source={isPlaying ? require('./assets/Images/pause.png') : require('./assets/Images/play.png')} // Đường dẫn đến icon trong thiết bị của bạn
          />
        </TouchableOpacity>

        <TouchableOpacity style={{ padding: 20 }}
          onPress={() => TrackPlayer.skipToNext()}>
          <Image style={{ width: 30, height: 30 }} // Tùy chỉnh kích thước của icon
            source={require('./assets/Images/next.png')} // Đường dẫn đến icon trong thiết bị của bạn
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
    backgroundColor: 'pink',
  },
  topbar: {
    paddingTop: 10,
    paddingBottom: 40,
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
    width: 230,
  },
  khungthoigian: {
    marginTop: 20,
    width: '90%',
  },
  thanhthoigian: {
    flexDirection: 'row',
  },
  thanhthoigianDo: {
    backgroundColor: 'red',
    height: 5,
    borderRadius: 2.5,
  },
  thanhthoigianXanh: {
    backgroundColor: 'lightgreen',
    height: 5,
    borderRadius: 2.5,
  },
  thanhthoigian2: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 5,
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