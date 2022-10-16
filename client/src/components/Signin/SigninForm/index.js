import React from 'react';
import {signinSchema} from "./validationSchema";
import {Field, Formik} from "formik";
import TextField from '@mui/material/TextField';
import {SigninButton} from "../SigninElements";
import {FormikForm, initialValues, onSubmit} from "./FormElements";


// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
//
// function BasicDatePicker() {
//   const [value, setValue] = React.useState(null);
//
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DatePicker
//         label="Departure Date"
//         value={value}
//         onChange={(newValue) => {
//           setValue(newValue);
//         }}
//         renderInput={(params) => <TextField {...params} />}
//       />
//     </LocalizationProvider>
//   );
// }

const SigninForm = () => {
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
            </FormikForm>
            )}
        </Formik>
    );
};

export default SigninForm;