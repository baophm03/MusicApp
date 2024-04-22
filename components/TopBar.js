import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

const TopBar = () => {
    return (
        <View style={styles.topbar}>

            <TouchableOpacity onPress={() => onPress()}
            style={{ padding: 15 }}>
                <Image style={{ width: 20, height: 20 }} // Tùy chỉnh kích thước của icon
                    source={require('../assets/Images/Option.png')} // Đường dẫn đến icon trong thiết bị của bạn
                />
            </TouchableOpacity>

            <View style={{alignItems: 'center', justifyContent: 'center', width: 270}}>
                <Text style={{ fontSize: 15, fontWeight: 'bold'}}>Nhạc Nhẽo</Text>
            </View>
            
            <TouchableOpacity style={{ padding: 15 }}>
                <Image style={{ width: 20, height: 20 }} // Tùy chỉnh kích thước của icon
                    source={require('../assets/Images/Question_mark.png')} // Đường dẫn đến icon trong thiết bị của bạn
                />
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    topbar: {
        flexDirection: 'row',
    },
});

export default TopBar;
