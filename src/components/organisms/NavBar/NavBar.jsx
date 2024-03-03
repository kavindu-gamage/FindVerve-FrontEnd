import styled from "@emotion/styled";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Container, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo/FindVerve.png";
import {
  lBoxStyle,
  logoStyle,
  mBoxStyle,
  navBarStyle,
  navButtonStyle,
  navMenuStyle,
  navSideMenuStyle,
} from "./NavBarStyle";

// import logo from "../../../assets/images/logo/FindVerve.png";

export default function NavBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const NavButton = styled(Button)(navButtonStyle);

  const navButtons = [
    { text: "Home", path: "/" },
    { text: "All Jobs", path: "/all-jobs" },
    { text: "Companies", path: "/companies" },
    { text: "Career Advices", path: "/career-advices" },
  ];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" style={navBarStyle}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={lBoxStyle}>
            <img src={logo} alt="logo" style={logoStyle} />
          </Box>
          <Box sx={navSideMenuStyle}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
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
                <MenuItem key={index} onClick={() => navigate(button.path)}>
                  <Typography textAlign="center">{button.text}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={navMenuStyle}>
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
          <Box sx={mBoxStyle}>
            <img src={logo} alt="logo" style={logoStyle} />
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
