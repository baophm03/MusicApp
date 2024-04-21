import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';

const MusicPlayer = () => {
  return (    
   <View style={styles.container}>

      {/* Thanh thông tin */}
      <View style={styles.topbar}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Zing Mp3</Text>
      </View>

      {/* Ảnh bìa bài hát */}
      <Image style={styles.albumArt}
        source={require('./assets/Images/minhyeunhaudi.jpg')}
      />
      
      <View style={styles.barthongtinbaihat}>

        <TouchableOpacity style={{padding:15}}>
          <Image style={{ width: 20, height: 20 }} // Tùy chỉnh kích thước của icon
            source={require('./assets/Images/share.png')} // Đường dẫn đến icon trong thiết bị của bạn
          />
        </TouchableOpacity>

        <View style={styles.thongtinbaihat}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Mình Yêu Nhau Đi</Text>
          <Text style={styles.artist}>Bích Phương</Text>
        </View>

        <TouchableOpacity style={{padding:15}}>
          <Image style={{ width: 20, height: 20 }} // Tùy chỉnh kích thước của icon
            source={require('./assets/Images/heart.png')} // Đường dẫn đến icon trong thiết bị của bạn
          />
        </TouchableOpacity>
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
      <View style={styles.thanhchucnang}>
        <TouchableOpacity style={{padding:15}}>
          <Image style={{ width: 30, height: 30 }} // Tùy chỉnh kích thước của icon
            source={require('./assets/Images/return.png')} // Đường dẫn đến icon trong thiết bị của bạn
          />
        </TouchableOpacity>

        <TouchableOpacity style={{padding:20}}>
          <Image style={{width: 60, height: 60 }} // Tùy chỉnh kích thước của icon
            source={require('./assets/Images/play.png')} // Đường dẫn đến icon trong thiết bị của bạn
          />
        </TouchableOpacity>

        <TouchableOpacity style={{padding:15}}>
          <Image style={{width: 30, height: 30}} // Tùy chỉnh kích thước của icon
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
    paddingTop: 40,
  },

  albumArt:{
    alignItems: 'center',
    margin: 30,
    borderRadius: 200,
    width: 300,
    height: 300,
  },
  barthongtinbaihat:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  thongtinbaihat:{
    alignItems: 'center',
    width: 230,
  },
  thanhthoigian2: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  thanhchucnang:{
    flexDirection:'row',
    alignItems: 'center',
  },
});

export default MusicPlayer;
