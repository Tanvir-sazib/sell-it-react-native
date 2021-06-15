import { useFormikContext } from 'formik';
import React from 'react';
import { ErrorMessage } from '../forms';
import AppPicker from '../AppPicker';

const AppFormPicker = ({ items, width, numberOfColum, PickerItemComponent, name, placeholder }) => {
    const { setFieldValue, touched, errors, values } = useFormikContext();
    return (
        <>
            <AppPicker
                items={items}
                onSelectedItem={(item) => setFieldValue(name, item)}
                numberOfColum={numberOfColum}
                placeholder={placeholder}
                PickerItemComponent={PickerItemComponent}
                selectedItem={values[name]}
                width={width}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
};

export default AppFormPicker;