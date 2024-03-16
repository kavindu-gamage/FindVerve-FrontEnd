import { Box } from "@mui/material";
import illustration1 from "../../../../assets/images/Login/ills1.png";
import { boxStyle, coverImageStyle } from "./CoverViewStyle";

export default function CoverView() {
  return (
    <Box sx={boxStyle}>
      <img src={illustration1} alt="illustration1" style={coverImageStyle} />
    </Box>
  );
}
