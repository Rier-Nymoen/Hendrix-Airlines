import * as yup from "yup";


export const bookingSchema = yup.object({
  airport: yup.string().required("Required").min(3, "Invalid Airport").max(3, "Invalid Airport"),
});