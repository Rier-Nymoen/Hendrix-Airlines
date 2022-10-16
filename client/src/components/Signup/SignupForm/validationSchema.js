import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const signupSchema = yup.object({
  email: yup.string().email("Must be a valid e-mail address").required("Required").max(100, "Field too long"),
  password: yup.string().matches(passwordRules, "Must be a valid password").required("Required").max(100, "Field too long")
});
