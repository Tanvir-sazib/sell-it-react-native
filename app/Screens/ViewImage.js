import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
function ViewImage(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons size={30} name="close" color='white' />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons size={35} name="trash-can-outline" color='white' />
            </View>
            <Image
                resizeMode='contain'
                style={styles.image} source={require('../assets/chair.jpg')}>

            </Image >
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1
    },
    image: {
        width: "100%",
        height: '100%',
    },
    closeIcon: {
        position: 'absolute',
        top: 30,
        left: 30

    },
    deleteIcon: {

        position: 'absolute',
        top: 30,
        right: 30
    }
})
export default ViewImage;