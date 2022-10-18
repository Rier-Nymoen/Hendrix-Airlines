import styled from 'styled-components';
import {Form} from 'formik';
import axios from 'axios';

export const FormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const FormColumn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  //background-color: lightgrey;
`;

export const initialValues = {
    email: '',
    password: '',
    fname: '',
    mname: '',
    lname: ''
}

export const onSubmit = async (signinData, { setSubmitting, setFieldError }) => {
    setSubmitting(true);
    try {
        const response = await axios.post('http://localhost:5000/accounts', signinData);

        if (response.status !== 201) {
            alert('API Status Error: ' + response.status);
        }
        // else if (response.data.length === 0) {
        //     setFieldError('email', 'Email not found');
        // }
        // else if (response.data[0].password !== signinData.password) {
        //     setFieldError('password', 'Incorrect password');
        // }
        else {
            alert('Created account.');
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
