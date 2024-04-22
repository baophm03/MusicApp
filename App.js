import React from 'react';
import TopBar from './components/TopBar';
import InforMusic from './components/InforMusic';
import TimeBar from './components/TimeBar';
import ControlBar from './components/ControlBar';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';

const MusicPlayer = () => {
  return (    
    <View style={styles.container}>
      {/* Thanh Top */}
      <TopBar/>
      {/* Thông tin bài hát */}
      <InforMusic/>
      {/* Thanh thời gian */}
      <TimeBar/>
      {/* Thanh chức năng */}
      <ControlBar/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingTop: 40,
  },
});

export default MusicPlayer;
