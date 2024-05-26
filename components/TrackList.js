import React, { useContext, useEffect, useState, useRef } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TrackFavorite from './TrackFavorite';
import TrackListAll from './TrackListAll';
import FavoriteTracksContext from './FavoriteTracksContext'; // Import context

const Tab = createMaterialTopTabNavigator();

function TrackList() {
    return (
        <FavoriteTracksContext.Consumer>
            {({ favoriteTracks }) => (
                <Tab.Navigator>
                    <Tab.Screen name="Tất cả" component={TrackListAll} />
                    <Tab.Screen name="Bài hát yêu thích">
                        {(props) => <TrackFavorite {...props} favoriteTracks={favoriteTracks} />}
                    </Tab.Screen>
                </Tab.Navigator>
            )}
        </FavoriteTracksContext.Consumer>
    );
}

export default TrackList;