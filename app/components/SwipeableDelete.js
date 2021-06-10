import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'


const SwipeableDelete = ({ onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.delete}>
                <MaterialCommunityIcons
                    name='trash-can'
                    size={35}
                    color='white'
                />
            </View>
        </TouchableWithoutFeedback>
    );
};
const styles = StyleSheet.create({
    delete: {
        backgroundColor: 'red',
        width: 70,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default SwipeableDelete;