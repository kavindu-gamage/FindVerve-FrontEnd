import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SaveIcon from "@mui/icons-material/Save";
import { Box, Button, Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import profile1 from "../../assets/images/profiles/profile1.png";
import { Layout } from "../../layouts/Layout";
import {
  arrowStyle,
  cancelButtonStyle,
  changeButtonStyle,
  frameStyle,
  imageBoxStyle,
  leftMenuStyle,
  mainSectionStyles,
  mainStyles,
  mainTitleStyle,
  pImageStyle,
  removeButtonStyle,
  saveButtonStyle,
  subStyles,
  subTitleStyle,
  textStyle,
  titleStyle,
} from "./EditProfileStyles";

export default function EditProfile() {
  const menuButtons = [
    { text: "General Information", path: "/general" },
    { text: "About", path: "/about" },
    { text: "Working Experience", path: "/experience" },
    { text: "Skills", path: "/skills" },
    { text: "Education", path: "/education" },
  ];
  const navigate = useNavigate();
  return (
    <Layout>
      <form>
        <Box sx={mainStyles}>
          <Box sx={subStyles}>
            <Box sx={mainSectionStyles}>
              <Stack direction="row" spacing={2} justifyContent="flex-start">
                <IconButton sx={arrowStyle} onClick={() => navigate("/")}>
                  <ArrowBackIcon />
                </IconButton>
                <Typography variant="h4" sx={mainTitleStyle}>
                  Edit Profile
                </Typography>
              </Stack>
              <Stack direction="row" spacing={3} justifyContent="flex-end">
                <Button variant="outlined" sx={cancelButtonStyle}>
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  sx={saveButtonStyle}
                  startIcon={<SaveIcon />}
                >
                  Save
                </Button>
              </Stack>
            </Box>

            <Stack direction="row">
      <Stack spacing={2}>
        {menuButtons.map((button, index) => (
          <MenuItem
            key={index}
            onClick={() => navigate(button.path)}
            sx={leftMenuStyle}
          >
            <Typography sx={textStyle}>{button.text}</Typography>
          </MenuItem>
        ))}
      </Stack>
      <Stack spacing={2}>
        <Box id="general" sx={frameStyle}>
          <Typography sx={titleStyle}>General Information</Typography>
          <Typography sx={subTitleStyle}>Avatar</Typography>
          <Box sx={imageBoxStyle}>
            <img src={profile1} alt="logo" style={pImageStyle} />
            <Button variant="text" sx={changeButtonStyle}>Change</Button>
            <Button variant="text" sx={removeButtonStyle}>Remove</Button>
          </Box>
          <Box>

          </Box>
        </Box>
        <div id="about">
          <Typography sx={titleStyle}>About</Typography>
          {/* Add details content for "About" here */}
        </div>
      </Stack>
    </Stack>
          </Box>
        </Box>
      </form>
    </Layout>
  );
}
