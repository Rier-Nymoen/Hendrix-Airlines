import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const signupSchema = yup.object({
  email: yup.string().email("Must be a valid e-mail address").required("Required").max(30, "Field too long"),
  password: yup.string().matches(passwordRules, "Must be a valid password").required("Required").max(40, "Field too long"),
  fname: yup.string().required("Required").max(30, "Field too long"),
  mname: yup.string().max(30, "Field too long"),
  lname: yup.string().required("Required").max(30, "Field too long"),
  suffix: yup.string().max(10, "Field too long"),
  dob: yup.date().typeError("Invalid Date").nullable().required("Required"),
  gender: yup.string().required("Required").max(1, "Field too long"),
  address: yup.string().required("Required").max(100, "Field too long"),
  address2: yup.string().max(100, "Field too long"),
  city: yup.string().required("Required").max(30, "Field too long"),
  state: yup.string().nullable().required("Required").max(30, "Field too long"),
  zip: yup.string().required("Required").matches(/^[0-9]+$/, "Invalid Zip").min(5, "Invalid Zip").max(5, "Invalid Zip"),
  phone: yup.string().required("Required").max(20, "Field too long"),
  confirm_password: yup.string().required("Required").oneOf([yup.ref('password')], 'Passwords must match')
});
