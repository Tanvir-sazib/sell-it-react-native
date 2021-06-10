import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import colors from '../config/colors';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            blurRadius={7}
            source={require('../assets/bg-1.jpg')}
            style={styles.background}
        >

            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo-red.png')} />
                <AppText>Sell What You Don't Need</AppText>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton
                    title='Login'
                    onPress={() => { console.log('tapped') }}
                    color={colors.primary}
                />
                <AppButton
                    title='Register'
                    onPress={() => { console.log('reg tapped') }}
                    color={colors.secondary}
                />
            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    logo: {
        width: 100,
        height: 100,
        marginBottom: 20
    },
    buttonContainer: {
        padding: 10,
        width: '100%'
    },
    logoContainer: {
        position: 'absolute',
        top: 80,
        alignItems: 'center'
    }
})

export default WelcomeScreen;