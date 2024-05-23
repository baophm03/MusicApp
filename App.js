import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MusicPlayer from './components/MusicPlayer';
import TrackList from './components/TrackList';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
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

              // You can return any component that you like here!
              return <Image source={iconName} style={{ width: size, height: size, tintColor: color }} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Music Player" component={MusicPlayer} />
          <Tab.Screen name="Danh Sách" component={TrackList} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
