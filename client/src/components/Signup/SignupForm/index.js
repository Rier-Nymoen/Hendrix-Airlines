import React from 'react';
import {signupSchema} from "./validationSchema";
import {Formik} from "formik";
import {SignupButton} from "../SignupElements";
import {
    FormikForm,
    initialValues,
    onSubmit,
    FormColumn,
    TextBox,
    SuffixSelect,
    DOBSelect,
    GenderSelect,
    CountrySelect,
    StateSelect
} from "./FormElements";


const SignupForm = () => {
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
                    <CountrySelect name="country" />
                    <TextBox name="address" label="Address"/>
                    <TextBox name="address2" label="Address 2"/>
                </FormColumn>
                <FormColumn>
                    <TextBox name="city" label="City"/>
                    <StateSelect name="state" />
                    <TextBox name="zip" label="Zip Code"/>
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