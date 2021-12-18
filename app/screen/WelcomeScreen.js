import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import AppButton from '../components/AppButton';

import AppText from '../components/AppText';
import colors from '../config/colors';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            blurRadius={7}
            style={styles.background}
            source={require("../assets/welcome1.jpg")}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/logo1.jpg")} />
                <AppText>You can sell and buy your product that you want.</AppText>
            </View>
            <AppButton title="login"/>
            <AppButton title="register" color="secondary"/>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    logoContainer: {
        position: 'absolute',
        top: 50,
        alignItems: 'center'
    },
    logo: {
        marginBottom: 20,
        width: 200,
        height: 200
    },
    btn1: {
        width: '70%',
        height: 60,
        backgroundColor: '#60c7d0',
        position: 'absolute',
        bottom: '25%',
        right: 0
    },
    btn2: {
        width: '70%',
        height: 60,
        backgroundColor: '#60c7d0',
        position: 'absolute',
        bottom: '15%',
        left: 0
    }
})
export default WelcomeScreen;