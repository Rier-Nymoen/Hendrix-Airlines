import * as yup from "yup";


export const bookingSchema = yup.object({
  sourceAirport: yup.string().required("Required").min(3, "Invalid Airport").max(3, "Invalid Airport"),
  destinationAirport: yup.string().required("Required").min(3, "Invalid Airport").max(3, "Invalid Airport"),

});