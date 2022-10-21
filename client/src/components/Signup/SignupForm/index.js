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
                    <TextBox name="fname" type="input" label="First Name"/>
                    <TextBox name="mname" type="input" label="Middle Name"/>
                    <TextBox name="lname" type="input" label="Last Name"/>
                    <SuffixSelect name="suffix"/>
                </FormColumn>
                <FormColumn>
                    <DOBSelect name="dob"/>
                    <GenderSelect name="gender"/>
                    <TextBox name="phone" type="input" label="Phone Number"/>
                </FormColumn>
                <FormColumn>
                    <TextBox name="address" type="input" label="Address"/>
                    <TextBox name="address2" type="input" label="Address 2"/>
                    <TextBox name="city" type="input" label="City"/>
                </FormColumn>
                <FormColumn>
                    <StateSelect name="state" />
                    <TextBox name="zip" type="input" label="Zip Code"/>
                </FormColumn>
                <FormColumn>
                    <TextBox name="email" type="input" label="Email"/>
                    <TextBox name="password" type="password" label="Password"/>
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