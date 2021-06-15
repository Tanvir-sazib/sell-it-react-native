import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import AppPicker from './app/components/AppPicker';
import AppTextInput from './app/components/AppTextInput';
import Card from './app/components/Card';
import Icon from './app/components/Icon';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';
import ListItems from './app/components/ListItems';
import Screen from './app/components/Screen';
import AccountScreen from './app/Screens/AccountScreen';
import ListingDetailsScreen from './app/Screens/ListingDetailsScreen';
import ListingEditScreen from './app/Screens/ListingEditScreen';
import ListingsScreen from './app/Screens/ListingsScreen';
import LoginScreen from './app/Screens/LoginScreen';
import MessagesScreen from './app/Screens/MessagesScreen';
import ViewImage from './app/Screens/ViewImage';
import WelcomeScreen from './app/Screens/WelcomeScreen';

export default function App() {
  const [imageUris, setImageUris] = useState([])

  const handleAdd = uri => {
    setImageUris([...imageUris, uri])
  }
  const handleRemove = uri => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  }

  return (

    <Screen>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
    </Screen>


  );
}

