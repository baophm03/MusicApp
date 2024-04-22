import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const SeekBar = () => {
  return (
    <View style={styles.khungthoigian}>
      <View style={styles.thanhthoigian}>
        <View style={[styles.thanhthoigianDo, {flex: 3}]} />
        <View style={[styles.thanhthoigianXanh, {flex: 1}]} />
      </View>

      <View style={styles.thanhthoigian2}>
        <Text style={styles.thoigianbatdau}>0:03</Text>
        <Text style={styles.thoigianketthuc}>3:23</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  khungthoigian:{
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
});

export default SeekBar;
