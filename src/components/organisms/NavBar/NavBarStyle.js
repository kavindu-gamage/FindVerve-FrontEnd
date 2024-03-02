import { theme } from "../../../theme/Theme";

export const logoStyle = {
  display: {
    xs: "none",
    md: "flex",
  },
  width: "10%",
  height: "auto",
};

export const navBarStyle = {
  color: theme.palette.primary.main,
};

export const navButtonStyle = {
  textTransform: "none",
  color: theme.palette.primary.light,
  backgroundColor: "transparent",
  fontWeight: "bold",
  fontSize: 15,
  "&:hover": {
    color: theme.palette.secondary.main,
  },
};

export const menuIconsStyle = {
  flexGrow: 1,
  display: {
    xs: "none",
    md: "flex",
  },
};
