import React from 'react';
import { StyleSheet } from 'react-native';
import * as yup from 'yup'
import CategoryPickerItem from '../components/CategoryPickerItem';
import { AppForm, AppFormField, AppFormPicker, SubmitButton } from '../components/forms';
import Screen from '../components/Screen';

const validationSchema = yup.object().shape({
    title: yup.string().required().min(1).label('Title'),
    price: yup.number().required().min(1).max(100000).label('Price'),
    description: yup.string().label("Description"),
    category: yup.object().required().nullable().label("Category")
});

const categories = [
    { label: "Furniture", value: 1, backgroundColor: "tomato", icon: "lamp" },
    { label: "Clothing", value: 2, backgroundColor: "green", icon: "shoe-heel" },
    { label: "Camera", value: 4, backgroundColor: "#5e8b7e", icon: "camera" },
    { label: "Games", value: 5, backgroundColor: "#f5a962", icon: "cards-club" },
    { label: "Cars", value: 6, backgroundColor: "#c84b31", icon: "car" },
    { label: "Sports", value: 7, backgroundColor: "#39a6a3", icon: "basketball" },
    { label: "Movies & Music", value: 8, backgroundColor: "#f54748", icon: "filmstrip" },
    { label: "Books", value: 9, backgroundColor: "#00ead3", icon: "book-open" },
    { label: "Others", value: 10, backgroundColor: "#d5dbb3", icon: "cart-arrow-up" },

]
const ListingEditScreen = () => {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title: '',
                    price: '',
                    description: '',
                    category: null,
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField maxLength={255} name="title" placeholder="Title" />
                <AppFormField
                    keyboardType='numeric'
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                    width={120}
                />
                <AppFormPicker
                    items={categories}
                    name='category'
                    placeholder="Category"
                    PickerItemComponent={CategoryPickerItem}
                    width={150}
                    numberOfColum={3}
                />
                <AppFormField
                    maxLength={255}
                    multiline
                    name='description'
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="Post" />

            </AppForm>
        </Screen>
    );
};
const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})

export default ListingEditScreen;