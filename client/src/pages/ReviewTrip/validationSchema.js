import * as yup from "yup";

export const passengerSchema = yup.object({
  fname: yup.string().required("Required").max(30, "Field too long"),
  mname: yup.string().max(30, "Field too long"),
  lname: yup.string().required("Required").max(30, "Field too long"),
  dob: yup.date().typeError("Invalid Date").nullable().required("Required"),
  gender: yup.string().required("Required").max(1, "Field too long"),
  state: yup.string().nullable().required("Required").max(30, "Field too long"),
  bags : yup.number().required("Required")
});

export const cardSchema = yup.object({
  name: yup.string().required("Required").max(50, "Field too long"),
  card_number: yup.string().required("Required").matches(/^[0-9]+$/, "Only Digits Allowed").min(16, "Must be 16 digits").max(16, "Too Long"),
  exp_date: yup.date().typeError("Invalid Date").nullable().required("Required"),
  cvv: yup.string().required("Required").matches(/^[0-9]+$/, "Only Digits Allowed").min(3, "Must be 3 digits").max(3, "Too Long"),
  zip: yup.string().required("Required").matches(/^[0-9]+$/, "Invalid Zip").min(5, "Invalid Zip").max(5, "Invalid Zip")
});