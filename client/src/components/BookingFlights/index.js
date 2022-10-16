import {React, useState} from 'react'

import { TextField} from '@mui/material'
import {Formik, Field, Form, useFormik, useField} from 'formik'
import { FormikForm, initialValues } from './BookingFlights';
import { onSubmit } from '../Signin/SigninForm/FormElements';
import axios from 'axios';

// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";




//   const DatePickerField = ({ ...props }) => {
//   const { setFieldValue } = useFormikContext();
//   const [field] = useField(props);
//   return (
//     <DatePicker
//       {...field}
//       {...props}
//       selected={(field.value && new Date(field.value)) || null}
//       onChange={val => {
//         setFieldValue(field.name, val);
//       }}
//     />
//   );
// };

const Booking = () => {

    const [mapTest, changeFlight] = useState();

    const formikObject = useFormik({
        initialValues: {
            //properties for initialValues correspond to name attribute of individual fields
            name: '',
            email: '',
            airport: ''
        },
        onSubmit: async values => {
            console.log('Form data: ', values)
            const res = await axios.get('http://localhost:5000/book/' + values.airport)
            console.log('Form', res.data)
            const mapTest = res.data.map(object => <h1>object.flightno</h1>)
            console.log('MapTest: ', mapTest)
           //    window.location.replace('/');


        }
    })

   // console.log('Form values', formikObject.values)
    return(
        <>

        <div>
            <form onSubmit ={formikObject.handleSubmit}>
                <label htmlFor='name'>Name</label>   
                 {/*formik will automatically track theses valeus for us now*/}
                <input type='text' id='name' name='name' onChange={formikObject.handleChange}value={formikObject.values.name}/>
                <label htmlFor='email'>Email</label>
                <input type='text' id='email' name='email' onChange={formikObject.handleChange}value={formikObject.values.email}/>
                <label htmlFor='airport'>airport</label>
                <input type='text' id='airport' name='airport' onChange={formikObject.handleChange}value={formikObject.values.airport}/>

                 {/*Clicking button automatically calls the onSubmit for formik*/}
                 <button>submit</button>
            </form>
        </div>

        {/* <Formik initialValues={initialValues}>
        {({ values, isSubmitting, errors, touched}) => (

            <FormikForm>
                <Field 
                
                name = "origin"
                label = "From"
                type = "input"
                variant = "outlined"

                as={TextField}


                />
                               

            </FormikForm>   
            
        )}
        </Formik> */}
           
                    </>
        
    )

}

export default Booking;
