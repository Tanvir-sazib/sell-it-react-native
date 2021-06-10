import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

const PickerItem = ({ label, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.item}>
                <AppText>{label}</AppText>
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    item: {
        padding: 20,
        backgroundColor: colors.light
    }
})
export default PickerItem;