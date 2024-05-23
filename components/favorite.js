// trackfavorite.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITE_TRACKS_KEY = 'favoriteTracks';

export const getFavoriteTracks = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(FAVORITE_TRACKS_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error("Error getting favorite tracks:", e);
    return [];
  }
};

export const addFavoriteTrack = async (track) => {
  const favorites = await getFavoriteTracks();
  if (!favorites.some(t => t.id === track.id)) { // Kiểm tra xem bài hát đã có trong danh sách chưa
    favorites.push(track);
    try {
      await AsyncStorage.setItem(FAVORITE_TRACKS_KEY, JSON.stringify(favorites));
    } catch (e) {
      console.error("Error adding favorite track:", e);
    }
  }
};

export const removeFavoriteTrack = async (trackId) => {
  let favorites = await getFavoriteTracks();
  favorites = favorites.filter(t => t.id !== trackId); 
  try {
    await AsyncStorage.setItem(FAVORITE_TRACKS_KEY, JSON.stringify(favorites));
  } catch (e) {
    console.error("Error removing favorite track:", e);
  }
};
