import styled from 'styled-components'
import { Form} from 'formik';


export const FormikForm = styled(Form)`
    
    display : flex;
    flex-direction : row;
    justify-content : center;
    align-items : center;
    height: 100%;
    width: 100%;
    position : absolute;
    gap : 30px;
    




`;

export const initialValues =
{
    origin : '',
    destination : '',
    date : '',
    passengers : '1'

};
