import { Formik } from 'formik';
import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import * as Yup from 'yup'

import FormField from '../components/FormField';
import FormSubmitBtn from '../components/FormSubmitBtn';

const validationForm = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(6).label('Password')
})

function Login(props) {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../assets/logo1.jpg')} />
            <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={values => console.log(values)}
                validationSchema={validationForm}
            >
                {()=>(
                    <>
                        <FormField 
                           autoCapitalize='none'
                           autoCurrect={false}
                           keyboardType='email-address'
                           textContentType='emailAddress'
                           icon='email'
                           placeholder='Email'
                           name='email'
                        />
                        <FormField 
                           autoCapitalize='none'
                           autoCurrect={false}
                           textContentType='password'
                           icon='lock'
                           placeholder='Password'
                           name='password'
                        />
                        <FormSubmitBtn title='Login' />
                    </>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    img: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 30
    }
})

export default Login;