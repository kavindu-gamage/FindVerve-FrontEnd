import { theme } from "../../../theme/Theme";

export const logoStyle = {
  width: "35%",
  height: "auto",
};

export const navBarStyle = {
  color: theme.palette.primary.main,
  boxShadow: "none",
};

export const navButtonStyle = {
  textTransform: "none",
  color: theme.palette.primary.light,
  backgroundColor: "transparent",
  fontWeight: 500,
  fontSize: 15,
  "&:hover": {
    color: theme.palette.secondary.main,
  },
};

export const navMenuStyle = {
  flexGrow: 1,
  display: {
    xs: "none",
    md: "flex",
  },
};

export const navSideMenuStyle = {
  flexGrow: 1,
  display: {
    xs: "flex",
    md: "none",
  },
};

export const lBoxStyle = {
  display: {
    xs: "none",
    md: "flex",
  },
  mr: -27,
};
export const mBoxStyle = {
  display: {
    xs: "flex",
    md: "none",
  },
  mr: 1,
};
