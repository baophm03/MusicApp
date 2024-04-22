import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const TopBar = () => {
    return (
        <View>
            <View style={styles.topbar}>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Zing Mp3</Text>
            </View>
        </View>

    );
};
const styles = StyleSheet.create({

});

export default TopBar;
