// FavoriteTracksList.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import MusicPlayer from './MusicPlayer'; 

const FavoriteTracksList = () => {
  const [favoriteTracks, setFavoriteTracks] = useState([]);

  useEffect(() => {
    const fetchFavoriteTracks = async () => {
      const tracks = await getFavoriteTracks();
      setFavoriteTracks(tracks);
    };

    fetchFavoriteTracks();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.artist}>{item.artist}</Text>
      {/* Thêm các thông tin khác của bài hát nếu cần */}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteTracks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  artist: {
    fontSize: 16,
  },
});

export default FavoriteTracksList;
