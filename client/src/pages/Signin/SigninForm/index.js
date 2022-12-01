import React, {useContext} from 'react';
import {signinSchema} from "./validationSchema";
import {Formik} from "formik";
import {SigninButton} from "../SigninElements";
import {FormikForm, initialValues} from "./FormElements";
import {UserContext} from "../../../components/UserContext";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {PassBox, TextBox} from "../../../components/FormFields";


const SigninForm = () => {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const onSubmit = async (signinData, { setSubmitting, setFieldError }) => {
        setSubmitting(true);

        try {
            const response = await axios.get('http://localhost:5005/accounts/' + signinData.email);
            console.log("response:", response)
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
                <TextBox name="email" label="Email" />
                <PassBox name="password" label="Password" />
                <SigninButton disabled={isSubmitting} type="submit">Sign In</SigninButton>
            </FormikForm>
            )}
        </Formik>
    );
};

export default SigninForm;