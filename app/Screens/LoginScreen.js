import { Formik } from 'formik';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import * as yup from 'yup';


import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from "../components/forms";



const validationSchema = yup.object().shape({
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().min(4).label("Password")
})
const LoginScreen = () => {
    return (
        <Screen style={styles.screen}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')}></Image>
            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name='email'
                    placeholder='Email'
                    textContentType='emailAddress'

                />

                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder='Password'
                    secureTextEntry
                    textContentType='password'
                />

                <SubmitButton title="Login" />

            </AppForm>

        </Screen>
    );
};
const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
    },
    screen: {
        padding: 5
    }
})
export default LoginScreen;