import * as yup from "yup";


export const bookingSchema = yup.object({
  sourceAirport: yup.string().required("Required").min(3, "Invalid Airport").max(3, "Invalid Airport"),
  destinationAirport: yup.string().required("Required").min(3, "Invalid Airport").max(3, "Invalid Airport"),
  departDate: yup.date().typeError("Invalid Date").nullable().required("Required"),
  passengerSelect : yup.string().required("Required").max(1, "Field too long")
});