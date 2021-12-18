import { Formik } from 'formik';
import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import * as Yup from 'yup'

import FormField from '../components/FormField';
import FormFieldPicker from '../components/FormFieldPicker';
import FormImagePicker from '../components/FormImagePicker';
import FormSubmitBtn from '../components/FormSubmitBtn';

const validationForm = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(1000000).label('Price'),
    desc: Yup.string().label('Desc'),
    cats: Yup.object().required().nullable().label('Cats'),
    images: Yup.array().min(1, 'Please select atleast one image')
})
const categories = [
    {label: 'Furniture', id: 1},
    {label: 'Clothing', id: 2},
    {label: 'Cameras', id: 3}
]
function AddListing(props) {
    return (
        <View style={styles.container}>
            <Formik
                initialValues={{title: "", price: "", desc: "", cats: null, images: []}}
                onSubmit={values => console.log(values)}
                validationSchema={validationForm}
            >
                {()=>(
                    <>
                        <FormImagePicker name="images" />
                        <FormField
                           maxLength={255} 
                           placeholder='Title'
                           name='title'
                        />
                        <FormField 
                            keyboardType='numeric'
                            maxLength={10}
                            placeholder='Price'
                            name='price'
                        />
                        <FormFieldPicker 
                            items={categories}
                            placeholder='Category'
                            name='cats'
                        />
                        <FormField
                            maxLength={255}
                            multiline
                            numberOfLines={3}
                            placeholder='Description'
                            name='desc'
                        />
                        <FormSubmitBtn title='Add Item' />
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

export default AddListing;