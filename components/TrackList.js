import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TrackFavorite from './TrackFavorite';
import TrackListAll from './TrackListAll';

const Tab = createMaterialTopTabNavigator();

function TrackList() {
    return (
        <Tab.Navigator>
             <Tab.Screen name="Tất cả" component={TrackListAll} />
             <Tab.Screen name="Bài hát yêu thích" component={TrackFavorite} />
        </Tab.Navigator>
    );
}

export default TrackList;

