import styled from 'styled-components'
import { Form } from 'formik';

export const FormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const initialValues = {
  confirmation_num: '',
}