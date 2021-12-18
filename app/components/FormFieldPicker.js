import { useFormikContext } from 'formik';
import React from 'react';
import AppInputPicker from './AppInputPicker';
import ErrorMsg from './ErrorMsg';

function FormFieldPicker({name, items, placeholder}) {
    const {setFieldValue, errors, values, touched} = useFormikContext();
    return (
        <>
            <AppInputPicker
                items={items} 
                placeholder={placeholder}
                onSelectedItem={(item) => setFieldValue(name, item)}
                selectedItem={values[name]}
            />
            <ErrorMsg error={errors[name]} touched={touched[name]} />
        </>
    );
}

export default FormFieldPicker;