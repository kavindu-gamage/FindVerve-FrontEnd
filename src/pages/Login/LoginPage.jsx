import { Box, Grid, Typography } from "@mui/material";
import CoverView from "../../components/organisms/LoginScreen/CoverView/CoverView";
import LoginView from "../../components/organisms/LoginScreen/LoginView/LoginView";
import {
  leftGridStyles,
  mainGridStyles,
  mainHeader,
  mainStyles,
  rightGridStyles,
} from "./LoginPageStyle";

export default function LoginPage() {
  return (
    <Box sx={mainStyles}>
      <Grid container sx={mainGridStyles}>
        <Grid item xs={12} sm={12} md={6.5} sx={leftGridStyles}>
          <Typography variant="h3" sx={mainHeader}>
            Sign in
          </Typography>
          <LoginView />
        </Grid>
        <Grid item xs={12} sm={12} md={5.5} sx={rightGridStyles}>
          <CoverView />
        </Grid>
      </Grid>
    </Box>
  );
}
