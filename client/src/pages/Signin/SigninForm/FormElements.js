import styled from 'styled-components';
import {Form} from 'formik';


export const FormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const initialValues = {
        email: '',
        password: '',
}


// axios.post('http://localhost:5005/users',
// 	signinData).then(res => {
// 		if (res.status === 201) {
// 		    alert('User successfully created');
//         }
//         else {
// 		    Promise.reject()
//         }
// 	}).catch(err => alert('Something went wrong'))
