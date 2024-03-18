import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SaveIcon from "@mui/icons-material/Save";
import { Box, Button, Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import {
  arrowStyle,
  cancelButtonStyle,
  saveButtonStyle,
  subStyles,
  titleStyle
} from "./MainSectionStyles";

export default function MainSection() {
  const navigate = useNavigate();
  return (
    <Box sx={subStyles}>
      <Stack direction="row" spacing={2} justifyContent="flex-start">
        <IconButton sx={arrowStyle} onClick={() => navigate("/")}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h4" sx={titleStyle}>
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
  );
}
