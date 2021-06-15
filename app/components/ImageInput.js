import React, { useEffect } from 'react';
import { StyleSheet, View, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

import colors from '../config/colors'

const ImageInput = ({ imageUri, onChangeImage }) => {
    const requestPermission = async () => {
        const result = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        const { granted } = await ImagePicker.requestCameraRollPermissionsAsync()
        if (!granted) {
            alert("You need to enable permission to access the camera roll.")
        }
    }
    useEffect(() => {
        requestPermission()
    }, [])

    const handlePress = async () => {
        if (!imageUri) selectImage();
        else {
            Alert.alert('Delete', 'Are you sure you want to delete this item?', [{ text: 'Yes', onPress: () => onChangeImage(null) },
            { text: "No" }])
        }

    }
    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5
            });
            if (!result.cancelled) onChangeImage(result.uri);
        } catch (error) {
            console.log("Error in getting image", error);
        }
    }
    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri && <MaterialCommunityIcons name='camera' color={colors.medium} size={50} />}
                {imageUri && <Image style={styles.image} source={{ uri: imageUri }} />}
            </View>
        </TouchableWithoutFeedback>
    );
};
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: colors.light,
        borderRadius: 15,
        height: 100,
        justifyContent: "center",
        width: 100,
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: "100%"
    }
})
export default ImageInput;