import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Box, Button, TextField } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { userLogin } from "../../../../redux/actions/authAction";
import {
  formBodyStyle,
  loginButtonStyle,
  loginInputStyle,
} from "./LoginViewStyle";


export default function LoginView() {

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  //const { isAuthenticated, isLoading, error } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const handleCustomSubmit = async (data, {resetForm}) => {
    // console.log(data);
    dispatch(userLogin(data));
    resetForm();
  };

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
    onSubmit: (values, {resetForm}) => {
      handleCustomSubmit(values, {resetForm});
    },
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
          placeholder="Enter at least 8+ characters"
          type={showPassword ? 'text' : 'password'}
          label="Password"
          variant="filled"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleTogglePasswordVisibility}
                  onMouseDown={(e) => e.preventDefault()}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={loginInputStyle}
          defaultValue="Normal"
          fullWidth
        />
        <Box width="100%">
          <Button fullWidth type="submit" sx={loginButtonStyle}>
            Sign in
          </Button>
        </Box>
      </form>
    </Box>
  );
}
