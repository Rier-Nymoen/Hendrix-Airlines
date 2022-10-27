import React, {useContext} from 'react';
import {signinSchema} from "./validationSchema";
import {Field, Formik} from "formik";
import {TextField} from '@mui/material';
import {SigninButton} from "../SigninElements";
import {FormikForm, initialValues} from "./FormElements";
import {UserContext} from "../../UserContext";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const SigninForm = () => {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const onSubmit = async (signinData, { setSubmitting, setFieldError }) => {
        setSubmitting(true);

        try {
            const response = await axios.get('http://localhost:5000/accounts/' + signinData.email);

            if (response.status !== 200) {
                alert('API Status Error: ' + response.status);
            } else if (response.data.length === 0) {
                setFieldError('email', 'Email not found');
            } else if (response.data[0].password !== signinData.password) {
                setFieldError('password', 'Incorrect password');
            } else {
                setUser(response.data[0]);
                navigate('/');
            }
        }
        catch (error) {
            alert(error);
        }

        setSubmitting(false);
    };

    return (
        <Formik
            validateOnChange={true}
            initialValues={initialValues}
            validationSchema={signinSchema}
            onSubmit={onSubmit}>{({ values, isSubmitting, errors, touched }) => (
            <FormikForm>
                <Field
                    name="email"
                    type="input"
                    label="Email"
                    helperText={errors.email && touched.email ? errors.email : " "}
                    error={!!(errors.email && touched.email)}
                    variant="outlined"
                    as={TextField}/>
                <Field
                    name="password"
                    type="password"
                    label="Password"
                    helperText={errors.password && touched.password ? errors.password: " "}
                    error={!!(errors.password && touched.password ? errors.password: "")}
                    variant="outlined"
                    as={TextField}/>
                {/*<pre>{JSON.stringify(values, null, 2)}</pre>*/}
                {/*<pre>{JSON.stringify(errors, null, 2)}</pre>*/}
                <SigninButton disabled={isSubmitting} type="submit">Sign In</SigninButton>
                {/*<BasicDatePicker />*/}
            </FormikForm>
            )}
        </Formik>
    );
};

export default SigninForm;