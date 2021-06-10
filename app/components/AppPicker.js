import React, { useState } from 'react';
import { Button, FlatList, Modal, StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors';
import defaultStyles from '../config/styles'
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';

const AppPicker = ({ icon, items, placeholder, selectedItem, onSelectedItem }) => {
    const [modalVisible, seTmodalVisible] = useState(false)
    return (
        <>
            <TouchableWithoutFeedback onPress={() => seTmodalVisible(true)}>
                <View style={styles.container}>
                    {icon &&
                        <MaterialCommunityIcons
                            name={icon}
                            size={20}
                            color={colors.medium}
                            style={styles.icon} />}
                    <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
                    <MaterialCommunityIcons
                        name='chevron-down'
                        size={20}
                        color={colors.medium}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType='slide'>
                <Screen>
                    <Button title='close' onPress={() => seTmodalVisible(false)} />
                    <FlatList
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({ item }) => (
                            <PickerItem
                                label={item.label}
                                onPress={() => {
                                    seTmodalVisible(false);
                                    onSelectedItem(item)
                                }}

                            />
                        )}
                    />
                </Screen>
            </Modal>
        </>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.light,
        borderRadius: 25,
        width: '100%',
        padding: 15,
        marginVertical: 15

    },
    text: {
        flex: 1,
    },
    icon: {
        marginRight: 10
    },


})
export default AppPicker;