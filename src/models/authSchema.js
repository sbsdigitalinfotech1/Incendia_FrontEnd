import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required*"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required*"),
  email: Yup.string().email("Invalid email").required("Required*"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Invalid phone no")
    .required("Required*"),
  password: Yup.string()
    .min(8, "Min 8 characters required")
    .required("Required*"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password not matched")
    .required("Required*"),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required*"),
  password: Yup.string()
    .min(8, "Min 8 characters required")
    .required("Required*"),
});

export const ForgetSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required*"),
});

export const ResetSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Min 8 characters required")
    .required("Required*"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password not matched")
    .required("Required*"),
});

export const ShippingSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required*"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required*"),
  email: Yup.string().email("Invalid email").required("Required*"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Invalid phone no")
    .required("Required*"),
  pincode: Yup.string().matches(/^\d{6}$/, "Invalid phone no")
  .required("Required*"),
  town: Yup.string().email("Invalid email").required("Required*"),
  district: Yup.string().required("Required*"),
  state: Yup.string().required("Required*"),
  Address: Yup.string().min(4, "Too Short!").required("Required*"),
});
