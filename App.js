import React from 'react';
import { Button } from 'react-native';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const MusicPlayer = () => {
  return (
    <View style={styles.container}>
      {/* Thanh thông tin */}
      <View style={styles.topbar}>
        <Text style={styles.tenlogo}>Zing Mp3</Text>
      </View>

      {/* Ảnh bìa bài hát 
      <Image
        style={styles.albumArt}
        source={require('./assets/Images/minhyeunhaudi.jpg')}
      />
      */}
      <View style={styles.thongtinbaihat}>
        <Text style={styles.songTitle}>Mình Yêu Nhau Đi</Text>
        <Text style={styles.artist}>Bích Phương</Text>
      </View>

      {/* Khung hiển thị thời gian */}
      <View style={styles.khungthoigian}>
        <View style={styles.thanhthoigian}>
          {/*Thanh thoi gian code o day*/}
        </View>

        <View style={styles.thanhthoigian2}>
          <Text style={styles.thoigianbatdau}>0:03</Text>
          <Text style={styles.thoigianketthuc}>3:23</Text>
        </View>
      </View>

      {/* Thanh chức năng */}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={require('./assets/Images/minhyeunhaudi.jpg')} // Đường dẫn đến icon trong thiết bị của bạn
            style={{ width: 30, height: 30, marginRight: 10 }} // Tùy chỉnh kích thước của icon
          />
          <Text>Press me</Text>
        </TouchableOpacity>
      </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thanhthoigian2: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default MusicPlayer;
