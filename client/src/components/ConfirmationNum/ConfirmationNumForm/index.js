import React, {useState} from 'react'
import {confirmation_numSchema} from './validationSchema';
import {Formik} from "formik";
import {ConfirmationNumButton} from "../ConfirmationNumElements";
import {FormikForm, initialValues} from "./FormElements";
import axios from 'axios';
import {TextBox} from "../../FormFields";

const ConfirmationNumForm = ({setTrip}) => {

    const onSubmit = async (confirmation_numData, { setSubmitting, setFieldError }) => {
      setSubmitting(true);

      try {
          const response = await axios.get('http://localhost:5005/trips/confirmation_no/' + confirmation_numData.confirmation_num);

          if (response.status !== 200) {
              alert('API Status Error: ' + response.status);
          } else if (response.data.length === 0) {
              setFieldError('confirmation_num', 'Confirmation Number not found');
          } else {
              setTrip(response.data[0]);
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
          validationSchema={confirmation_numSchema}
          onSubmit={onSubmit}>{({ values, isSubmitting, errors, touched }) => (
          <FormikForm>
              <TextBox name="confirmation_num" label="Confirmation Number" />
              <ConfirmationNumButton disabled={isSubmitting} type="submit">Check Trip</ConfirmationNumButton>
          </FormikForm>
          )}
      </Formik>
    );
};

export default ConfirmationNumForm;