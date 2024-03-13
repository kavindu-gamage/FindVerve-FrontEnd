import { Box, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { formBodyStyle, loginInputStyle } from "./LoginViewStyle";

export default function LoginView() {


  const validationSchema = yup.object({
    email: yup.string().required("Email is required"),
    password: yup
      .string()
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    // onSubmit: (values) => {
    //   alert(JSON.stringify(values, null, 2));
    // },
    // onSubmit: (values) => {
    //   handleCustomSubmit(values);
    // },
  });
  console.log("abc", formik.values);
  return (
    <Box width="60%">
      <form onSubmit={formik.handleSubmit} style={formBodyStyle}>
        <TextField
          id="email"
          name="email"
          placeholder="example.email@gmail.com"
          value={formik.values.email}
          variant="filled"
          label="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={loginInputStyle}
          defaultValue="Normal"
          fullWidth
        />

        <TextField
          id="password"
          name="password"
          placeholder="Password"
          type="password"
          label="Password"
          variant="filled"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          sx={loginInputStyle}
          defaultValue="Normal"
          fullWidth
        />
        <Box width="100%">
          
        </Box>
      </form>
    </Box>
  );
}
