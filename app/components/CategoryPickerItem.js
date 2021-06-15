import React from 'react';
import { StyleSheet, TouchableOpacity, TouchableOpacityBase, View } from 'react-native';
import AppText from './AppText';
import Icon from './Icon';

const CategoryPickerItem = ({ item, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Icon style={styles.icons} backGroundColor={item.backgroundColor}
                name={item.icon}
                size={70}
            />
            <AppText style={styles.text}>{item.label}</AppText>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 15,
        alignItems: "center",
        width: 33
    },
    icons: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        textAlign: "center",
        paddingTop: 5
    }
})
export default CategoryPickerItem;