import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const MusicPlayer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <Text style={styles.time}>15:40</Text>
        {/* Thêm các biểu tượng trạng thái khác ở đây */}
      </View>
      <Text style={styles.playingFrom}>PHÁT TỪ Bài hát yêu thích</Text>
      <Image
        style={styles.albumArt}
        source={{ uri: 'đường_dẫn_ảnh_album' }}
      />
      <Text style={styles.songTitle}>Mình Yêu Nhau Đi</Text>
      <Text style={styles.artist}>Bích Phương</Text>
      <View style={styles.controls}>
        {/* Thêm các nút điều khiển nhạc ở đây */}
      </View>
      <View style={styles.audioScrubber}>
        <Text style={styles.currentTime}>0:03</Text>
        <View style={styles.scrubberBar}></View>
        <Text style={styles.totalTime}>3:23</Text>
      </View>
      <Text style={styles.adText}>Tận hưởng âm nhạc không quảng cáo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Thêm các định dạng phong cách khác ở đây
});

export default MusicPlayer;
