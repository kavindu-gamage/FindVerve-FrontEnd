import styled from "@emotion/styled";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Container, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo/FindVerve.png";
import { logoStyle, menuIconsStyle, navBarStyle, navButtonStyle } from "./NavBarStyle";

// import logo from "../../../assets/images/logo/FindVerve.png";

export default function NavBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const NavButton = styled(Button)(navButtonStyle);
  const navButtons = [
    { text: "Home", path: "/" },
    { text: "All Jobs", path: "/all-jobs" },
    { text: "Companies", path: "/companies" },
    { text: "Career Advices", path: "/career-advices" },
  ];
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" style={navBarStyle}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {navButtons.map((button, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{button.text}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <img src={logo} alt="logo" style={logoStyle} />
          <Box style={menuIconsStyle}>
            <Stack direction="row" spacing={2}>
              {navButtons.map((button, index) => (
                <NavButton
                  key={index}
                  variant="text"
                  disableElevation
                  onClick={() => navigate(button.path)}
                >
                  {button.text}
                </NavButton>
              ))}
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
