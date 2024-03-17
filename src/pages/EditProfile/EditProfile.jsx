import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../layouts/Layout";
import {
    arrowStyle,
    leftGridStyles,
    mainStyles,
    rightGridStyles,
    titleStyle,
} from "./EditProfileStyles";

export default function EditProfile() {
  const navigate = useNavigate();
  return (
    <Layout>
      <Box sx={mainStyles}>
        <Stack direction="row" spacing={2} sx={leftGridStyles}>
          <IconButton sx={arrowStyle} onClick={() => navigate("/")}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h4" sx={titleStyle}>
            Edit Profile
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2} sx={rightGridStyles}>
          <Button variant="outlined" sx={cancelButtonStyle}>Cancel</Button>
          <Button variant="contained" sx={saveButtonStyle}>Save</Button>
        </Stack>
      </Box>
    </Layout>
  );
}
