import * as yup from "yup";

export const passengerSchema = yup.object({
  fname: yup.string().required("Required").max(100, "Field too long"),
  mname: yup.string().max(100, "Field too long"),
  lname: yup.string().required("Required").max(100, "Field too long"),
  dob: yup.date().typeError("Invalid Date").nullable().required("Required"),
  gender: yup.string().required("Required"),
  state: yup.string().nullable().required("Required"),
  bags : yup.number().required("Required")
});