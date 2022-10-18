import React from 'react';
import {signupSchema} from "./validationSchema";
import {Formik, useField} from "formik";
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {SignupButton} from "../SignupElements";
import {FormikForm, initialValues, onSubmit, FormColumn} from "./FormElements";

const SignupForm = () => {
    const TextBox = ({ ...props }) => {
        const [field, meta] = useField(props);
        return (
            <TextField
                variant="outlined"
                type="input"
                helperText={meta.error && meta.touched ? meta.error: " "}
                error={!!(meta.error && meta.touched)}
                {...field}
                {...props} />
        );
    };

    return (
        <Formik
            validateOnChange={true}
            initialValues={initialValues}
            validationSchema={signupSchema}
            onSubmit={onSubmit}>
            {({ isSubmitting }) => (
            <FormikForm>
                <FormColumn>
                    <TextBox name="fname" label="First Name"/>
                    <TextBox name="mname" label="Middle Name"/>
                    <TextBox name="lname" label="Last Name"/>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Age"
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormColumn>
                <FormColumn>
                    <TextBox name="email" label="Email"/>
                    <TextBox name="password" label="Password"/>
                </FormColumn>
                <FormColumn>
                    <SignupButton disabled={isSubmitting} type="submit">Sign Up</SignupButton>
                </FormColumn>
            </FormikForm>
            )}
        </Formik>
    );
};

export default SignupForm;