import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const ControlBar = () => {
  return (
    <View style={styles.thanhchucnang}>
      <TouchableOpacity style={{padding:15}}>
        <Image style={{ width: 30, height: 30 }} // Tùy chỉnh kích thước của icon
          source={require('../assets/Images/return.png')} // Đường dẫn đến icon trong thiết bị của bạn
        />
      </TouchableOpacity>

      <TouchableOpacity style={{padding:20}}>
        <Image style={{width: 60, height: 60 }} // Tùy chỉnh kích thước của icon
          source={require('../assets/Images/play.png')} // Đường dẫn đến icon trong thiết bị của bạn
        />
      </TouchableOpacity>

      <TouchableOpacity style={{padding:15}}>
        <Image style={{width: 30, height: 30}} // Tùy chỉnh kích thước của icon
          source={require('../assets/Images/next.png')} // Đường dẫn đến icon trong thiết bị của bạn
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  thanhchucnang:{
    flexDirection:'row',
    alignItems: 'center',
  },
});

export default ControlBar;
