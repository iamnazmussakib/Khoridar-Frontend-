import { useFormikContext } from 'formik';
import React from 'react';
import AppButton from './AppButton';

function FormSubmitBtn({title}) {
    const {handleSubmit} = useFormikContext();
    return (
        <AppButton onPress={handleSubmit} title={title} color='secondary' />
    );
}

export default FormSubmitBtn;