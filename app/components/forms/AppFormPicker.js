import { useFormikContext } from 'formik';
import React from 'react';
import { ErrorMessage } from '../forms';
import AppPicker from '../AppPicker';

const AppFormPicker = ({ items, name, placeholder }) => {
    const { setFieldValue, touched, errors, values } = useFormikContext();
    return (
        <>
            <AppPicker
                items={items}
                onSelectedItem={(item) => setFieldValue(name, item)}
                placeholder={placeholder}
                selectedItem={values[name]}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
};

export default AppFormPicker;