import React from 'react';
import {signupSchema} from "./validationSchema";
import {Formik} from "formik";
import {SignupButton} from "../SignupElements";
import {
    FormikForm,
    initialValues,
    FormColumn,
    SuffixSelect,
    DOBSelect,
    GenderSelect,
    StateSelect
} from "./FormElements";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {TextBox, PassBox} from "../../FormFields";


const SignupForm = () => {
    const navigate = useNavigate();

    const onSubmit = async (signupData, { setSubmitting }) => {
        setSubmitting(true);
        let data = {...signupData}
        delete data.confirm_password;
        data.dob = `${data.dob.getFullYear()}-${data.dob.getMonth() + 1}-${data.dob.getDate()}`
        try {
            const response = await axios.post('http://localhost:5000/accounts', data);

            if (response.status !== 201) {
                alert("Email already in use.");
            }
            else {
                alert('Account successfully created!');
                navigate('/sign-in');
            }
        }
        catch (error) {
            alert("Email already in use.");
        }

        setSubmitting(false);
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
                    <SuffixSelect name="suffix"/>
                </FormColumn>
                <FormColumn>
                    <DOBSelect name="dob"/>
                    <GenderSelect name="gender"/>
                    <TextBox name="phone" label="Phone Number"/>
                </FormColumn>
                <FormColumn>
                    <TextBox name="address" label="Address"/>
                    <TextBox name="address2" label="Address 2"/>
                    <TextBox name="city" label="City"/>
                </FormColumn>
                <FormColumn>
                    <StateSelect name="state" />
                    <TextBox name="zip" label="Zip Code"/>
                </FormColumn>
                <FormColumn>
                    <TextBox name="email" label="Email"/>
                    <PassBox name="password" label="Password"/>
                    <PassBox name="confirm_password" label="Confirm Password"/>
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