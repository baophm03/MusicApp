import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const InforMusic = () => {
  return (
    <View style={styles.container}>

      {/* Ảnh bìa bài hát */}
      <Image style={styles.albumArt}
        source={require('../assets/Images/minhyeunhaudi.jpg')}
      />

      <View style={styles.barthongtinbaihat}>

        <TouchableOpacity style={{ padding: 15 }}>
          <Image style={{ width: 20, height: 20 }} // Tùy chỉnh kích thước của icon
            source={require('../assets/Images/share.png')} // Đường dẫn đến icon trong thiết bị của bạn
          />
        </TouchableOpacity>

        <View style={styles.thongtinbaihat}>
          <View style={styles.tenbaihat}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Mình Yêu Nhau Đi</Text>
          </View>
          <View style={styles.tencasi}>
            <Text>Bích Phương</Text>
          </View>
        </View>

        <TouchableOpacity style={{ padding: 15 }}>
          <Image style={{ width: 20, height: 20 }} // Tùy chỉnh kích thước của icon
            source={require('../assets/Images/heart.png')} // Đường dẫn đến icon trong thiết bị của bạn
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
    paddingTop: 40,
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
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  thongtinbaihat: {
    alignItems: 'center',
    width: 270,
  }
});

export default InforMusic;
