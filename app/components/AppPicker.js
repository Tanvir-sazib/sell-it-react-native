import React, { useState } from 'react';
import { Button, FlatList, Modal, StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors';
import defaultStyles from '../config/styles'
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';

const AppPicker = ({ icon,
    width = '100%',
    items,
    numberOfColum,
    placeholder,
    PickerItemComponent = PickerItem,
    selectedItem,
    onSelectedItem, }) => {
    const [modalVisible, seTmodalVisible] = useState(false)
    return (
        <>
            <TouchableWithoutFeedback onPress={() => seTmodalVisible(true)}>
                <View style={[styles.container, width = { width }]}>

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
                        numColumns={numberOfColum}
                        renderItem={({ item }) => (
                            <PickerItemComponent
                                item={item}
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
        padding: 15,
        marginVertical: 15,

    },
    text: {
        flex: 1,
    },
    icon: {
        marginRight: 10
    },


})
export default AppPicker;