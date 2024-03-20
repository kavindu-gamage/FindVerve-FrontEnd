import { Box, Stack, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { frameStyle, leftMenuStyle, subTitleStyle, textStyle, titleStyle } from "./MenuListStyles";

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
    <Stack direction="row" >
        <Stack spacing={2}>
          {menuButtons.map((button, index) => (
            <MenuItem key={index} onClick={() => navigate(button.path)} sx={leftMenuStyle} >
              <Typography sx={textStyle} >{button.text}</Typography>
            </MenuItem>
          ))}
        </Stack>
        <Stack spacing={2}>
        <Box id="general" sx={frameStyle}>
          <Typography sx={titleStyle}>General Information</Typography>
          <Typography sx={subTitleStyle}>Avatar</Typography>
          <stack>
            
          </stack>
        </Box>
        <div id="about">
          <Typography sx={titleStyle}>About</Typography>
          {/* Add details content for "About" here */}
        </div>
        </Stack>
    </Stack>
  );
}
