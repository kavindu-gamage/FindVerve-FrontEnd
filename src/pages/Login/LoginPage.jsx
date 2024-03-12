import { Box, Grid } from "@mui/material";
import CoverView from "../../components/organisms/LoginScreen/CoverView/CoverView";
import {
    leftGridStyles,
    mainGridStyles,
    mainStyles,
    rightGridStyles,
} from "./LoginPageStyle";

export default function LoginPage() {
  return (
    <Box sx={mainStyles}>
      <Grid container sx={mainGridStyles}>
        <Grid item xs={12} sm={12} md={6} sx={leftGridStyles}>
            
        </Grid>
        <Grid item xs={12} sm={12} md={6} sx={rightGridStyles} >
            <CoverView/>
        </Grid>
      </Grid>
    </Box>
  );
}
