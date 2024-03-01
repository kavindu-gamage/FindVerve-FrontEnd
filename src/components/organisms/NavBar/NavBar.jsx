import styled from "@emotion/styled";
import { Button, Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo/FindVerve.png";
import { logoStyle, navBarStyle, navButtonStyle } from "./NavBarStyle";

// import logo from "../../../assets/images/logo/FindVerve.png";

export default function NavBar() {
  const navigate = useNavigate();
  const NavButton = styled(Button)(navButtonStyle);

  return (
    <AppBar position="fixed" style={navBarStyle}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logo} alt="logo" style={logoStyle} />
          <NavButton
            variant="text"
            disableElevation
            onClick={() => navigate("/dashboard")}
          >
            Home
          </NavButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
