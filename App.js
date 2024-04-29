import React, { useEffect } from 'react';
import TrackPlayer from 'react-native-track-player'
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';

const tracks = [
  {
    id: 1,
    url: require('./assets/Musics/noitinhyeubatdau.mp3'),
    title: 'Nơi tình yêu bắt đầu',
  },
  {
    id: 2,
    url: require('./assets/Musics/noitinhyeubatdau.mp3'),
    title: 'Blues Beat',
  },
];

TrackPlayer.updateOptions({
  stopWithApp: false,
  capabilities: [TrackPlayer.CAPABILITY_PLAY, TrackPlayer.CAPABILITY_PAUSE],
  compactCapabilities: [
    TrackPlayer.CAPABILITY_PLAY,
    TrackPlayer.CAPABILITY_PAUSE,
  ],
});

const MusicPlayer = () => {
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

  return (
    <View style={styles.container}>

      {/* Thanh thông tin */}
      <View style={styles.topbar}>
        <View style={{ alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Nhạc Nhẽo</Text>
        </View>
      </View>

      {/* Ảnh bìa bài hát */}
      <Image style={styles.albumArt}
        source={require('./assets/Images/minhyeunhaudi.jpg')}
      />

      <View style={styles.barthongtinbaihat}>

        <TouchableOpacity style={{ padding: 15 }}>
          <Image style={{ width: 20, height: 20 }} // Tùy chỉnh kích thước của icon
            source={require('./assets/Images/share.png')} // Đường dẫn đến icon trong thiết bị của bạn
          />
        </TouchableOpacity>

        <View style={styles.thongtinbaihat}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Mình Yêu Nhau Đi</Text>
          <Text style={styles.artist}>Bích Phương</Text>
        </View>

        <TouchableOpacity style={{ padding: 15 }}>
          <Image style={{ width: 20, height: 20 }} // Tùy chỉnh kích thước của icon
            source={require('./assets/Images/heart.png')} // Đường dẫn đến icon trong thiết bị của bạn
          />
        </TouchableOpacity>
      </View>

      {/* Khung hiển thị thời gian */}
      <View style={styles.khungthoigian}>
        <View style={styles.thanhthoigian}>
          <View style={[styles.thanhthoigianDo, { flex: 3 }]} />
          <View style={[styles.thanhthoigianXanh, { flex: 1 }]} />
        </View>

        <View style={styles.thanhthoigian2}>
          <Text style={styles.thoigianbatdau}>0:03</Text>
          <Text style={styles.thoigianketthuc}>3:23</Text>
        </View>
      </View>

      {/* Thanh chức năng */}
      <View style={styles.thanhchucnang}>
        <TouchableOpacity style={{ padding: 15 }}
          onPress={() => TrackPlayer.skipToPrevious()}>
          <Image style={{ width: 30, height: 30 }} // Tùy chỉnh kích thước của icon
            source={require('./assets/Images/Previous.png')} // Đường dẫn đến icon trong thiết bị của bạn
          />
        </TouchableOpacity>

        <TouchableOpacity style={{ padding: 15 }}
          onPress={() => TrackPlayer.play()}>
          <Image style={{ width: 30, height: 30 }} // Tùy chỉnh kích thước của icon
            source={require('./assets/Images/play.png')} // Đường dẫn đến icon trong thiết bị của bạn
          />
        </TouchableOpacity>

        <TouchableOpacity style={{ padding: 15 }}
          onPress={() => TrackPlayer.pause()}>
          <Image style={{ width: 30, height: 30 }} // Tùy chỉnh kích thước của icon
            source={require('./assets/Images/pause.png')} // Đường dẫn đến icon trong thiết bị của bạn
          />
        </TouchableOpacity>

        <TouchableOpacity style={{ padding: 15 }}
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
  },

  albumArt: {
    alignItems: 'center',
    margin: 30,
    borderRadius: 200,
    width: 300,
    height: 300,
  },
  barthongtinbaihat: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  thongtinbaihat: {
    alignItems: 'center',
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
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default MusicPlayer;