import React, { useEffect, useState, useRef } from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MusicPlayer from './components/MusicPlayer';
import TrackList from './components/TrackList';
import { FavoriteTracksProvider } from './components/FavoriteTracksContext'; // Hoặc đường dẫn đến file FavoriteTracksContext.js của bạn

const Tab = createBottomTabNavigator();

const App = () => {
  const [favoriteTracks, setFavoriteTracks] = useState([]);

  return (
    <SafeAreaProvider>
      <FavoriteTracksProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Music Player') {
                  iconName = focused
                    ? require('./assets/Images/home.png')
                    : require('./assets/Images/home.png');
                } else if (route.name === 'Danh Sách') {
                  iconName = focused
                    ? require('./assets/Images/list.png')
                    : require('./assets/Images/list.png');
                }

                return <Image source={iconName} style={{ width: size, height: size, tintColor: color }} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            }}
          >
            <Tab.Screen name="Music Player">
              {(props) => <MusicPlayer {...props} favoriteTracks={favoriteTracks} setFavoriteTracks={setFavoriteTracks} />}
            </Tab.Screen>
            <Tab.Screen name="Danh Sách" component={TrackList} />
          </Tab.Navigator>
        </NavigationContainer>
      </FavoriteTracksProvider>
    </SafeAreaProvider>
  );
};

export default App;