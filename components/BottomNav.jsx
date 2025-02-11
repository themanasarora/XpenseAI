import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import home from '../assets/home.png';
import card from '../assets/cards';
import { useNavigation } from '@react-navigation/native';

const BottomNav = ({ hideView }) => {
    const navigation = useNavigation();
    const handleClick = () => {
      hideView();
    };
    const [selectedIcon, setSelectedIcon] = useState('home');

    const handleIconPress = (iconName) => {
        setSelectedIcon(iconName);
        if (iconName === 'home') {
            navigation.navigate('Home', { animation: 'none' });
        } else if (iconName === 'statics') {
            navigation.navigate('Statistic');
        } else if (iconName === 'card') {
            navigation.navigate('Wallet');
        }
    };

    const getIconContainerStyle = (iconName) => {
        if (iconName === selectedIcon) {
            return { ...styles.iconContainer, backgroundColor: '#1D0F3B' };
        }
        return styles.iconContainer;
    };

    return (
        <View style={styles.BottomNav}>
            <TouchableOpacity onPress={() => handleIconPress('home')}>
                <View style={getIconContainerStyle('home')}>
                    <Image style={styles.navicon} source={home} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleIconPress('statics')}>
                <View style={getIconContainerStyle('statics')}>
                    <Image style={styles.navicon} source={statics} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleIconPress('card')}>
                <View style={getIconContainerStyle('card')}>
                    <Image style={styles.navicon} source={card} />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default BottomNav;

const styles = StyleSheet.create({
    BottomNav: {
        alignSelf: 'center',
        width: '70%',
        height: 60,
        backgroundColor: '#A172F8',
        borderRadius: 70,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    navicon: {
        height: 25,
        width: 25,
    },
    iconContainer: {
        borderRadius: 40,
        height: 45,
        width: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
