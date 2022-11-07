import * as yup from "yup";

export const confirmation_numSchema = yup.object({
  confirmation_num: yup.string().required("Required").min(6, "Invalid Confirmation Number").max(6, "Invalid Confirmation Number"),
});