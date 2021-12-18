import { useFormikContext } from 'formik';
import React from 'react';
import AppInput from './AppInput';
import ErrorMsg from './ErrorMsg';

function FormField({name, ...otherProps}) {
    const {handleChange, setFieldTouched, errors, touched} = useFormikContext();
    return (
        <>
            <AppInput
                onChangeText={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
                {...otherProps}
            />
            <ErrorMsg error={errors[name]} touched={touched[name]} />
        </>
    );
}

export default FormField;