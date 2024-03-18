import { Stack, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { leftMenuStyle, textStyle } from "./MenuListStyles";

export default function MenuList() {
  const navigate = useNavigate();
  const menuButtons = [
    { text: "General Information", path: "/general" },
    { text: "About", path: "/about" },
    { text: "Working Experience", path: "/experience" },
    { text: "Skills", path: "/skills" },
    { text: "Education", path: "/education" },
  ];
  
  return (
    <Stack direction="row">
        <Stack spacing={2}>
          {menuButtons.map((button, index) => (
            <MenuItem key={index} onClick={() => navigate(button.path)} sx={leftMenuStyle} >
              <Typography sx={textStyle} >{button.text}</Typography>
            </MenuItem>
          ))}
        </Stack>
        <Stack>
        <div id="general">
          <Typography variant="h4">General Information</Typography>
          {/* Add details content for "General Information" here */}
        </div>
        <div id="about">
          <Typography variant="h4">About</Typography>
          {/* Add details content for "About" here */}
        </div>
        </Stack>
    </Stack>
  );
}
