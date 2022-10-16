import React from 'react';
import {signupSchema} from "./validationSchema";
import {Field, Formik} from "formik";
import TextField from '@mui/material/TextField';
import {SignupButton} from "../SignupElements";
import {FormikForm, initialValues, onSubmit} from "./FormElements";

const SignupForm = () => {
    return (
        <Formik
            validateOnChange={true}
            initialValues={initialValues}
            validationSchema={signupSchema}
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
                <SignupButton disabled={isSubmitting} type="submit">Sign Up</SignupButton>
            </FormikForm>
            )}
        </Formik>
    );
};

export default SignupForm;