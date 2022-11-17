import React, {useContext} from 'react'
import {confirmation_numSchema} from './validationSchema';
import {Formik} from "formik";
import {ConfirmationNumButton} from "../ConfirmationNumElements";
import {FormikForm, initialValues} from "./FormElements";
import {UserContext} from "../../UserContext";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {TextBox} from "../../FormFields";

const ConfirmationNumForm = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const onSubmit = async (confirmation_numData, { setSubmitting, setFieldError }) => {
      setSubmitting(true);

      try {
          const response = await axios.get('http://localhost:5005/trips/' + confirmation_numData.confirmation_num);

          if (response.status !== 200) {
              alert('API Status Error: ' + response.status);
          } else if (response.data.length === 0) {
              setFieldError('confirmation_num', 'Confirmation Number not found');
          } else {
              setUser(response.data[0]);
              navigate('/');
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



// const ConfirmationNumForm = () => {
//   const { setTrip } = useContext(TripContext);
//   const navigate = useNavigate();
//   //const {trip} = useContext(TripContext);
//   //const [confirmation_no, setConfirmationNo] = useState("");

//   const onSubmit = async (confirmation_noData, { setSubmitting, setFieldError }) => {
//     setSubmitting(true);

//     try {
//       const response = await axios.get('http://localhost:5005/trip/' + confirmation_noData.confirmation_no);

//       if (response.status !== 200) {
//         alert('API Status Error: ' + response.status);
//       } else if (response.data.length === 0) {
//         setFieldError('confirmation_no', 'Confirmation Number not found');
//       } else {
//         setUser(response.data[0]);
//         navigate('/');
//       }
//     }
//     catch (error) {
//       alert(error);
//     }

//     setSubmitting(false);
//   }

//   return (
//     <div>
//       <form action="">
//         <div className='form-group'>
//           <label htmlFor='confirmation_no'>Confirmation Number</label>
//           <input value={confirmation_no} onChange={e => setConfirmationNo(e.target.value)} id="confirmation_no" className='form-control' type="text" />
//         </div>
//       </form>
//     </div>
//   )
// }

// export default ConfirmationNumForm