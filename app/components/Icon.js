import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Icon = ({ name, size = 40, backGroundColor = 'black', iconColor = 'white' }) => {
    return (
        <View style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: backGroundColor,
            justifyContent: 'center',
            alignItems: 'center'

        }}>
            <MaterialCommunityIcons
                name={name}
                color={iconColor}
                size={size * 0.5}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    icon: {


    }
})

export default Icon;