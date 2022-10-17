import styled from 'styled-components';
import {Form} from 'formik';
import axios from 'axios';

export const FormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const initialValues = {
        email: '',
        password: '',
}

export const onSubmit = async (signinData, { setSubmitting, setFieldError }) => {
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
            alert('Logged in');
        }
    }
	catch (error) {
        alert(error);
    }

    setSubmitting(false);
};

// axios.post('http://localhost:5000/users',
// 	signinData).then(res => {
// 		if (res.status === 201) {
// 		    alert('User successfully created');
//         }
//         else {
// 		    Promise.reject()
//         }
// 	}).catch(err => alert('Something went wrong'))
