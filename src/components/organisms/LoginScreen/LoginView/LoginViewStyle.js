export const formBodyStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const loginInputStyle = {
  //width:"400px",
  ["& fieldset"]: {
    borderRadius: 2,
    borderColor: "secondary.main",
  },
  "& input": {
    textAlign: "left",
    fontSize: 16,
    height: "2.5rem",
  },
  ["& :: placeholder"]: {
    color: "primary.light",
    opacity: 1.5,
  },
  "& .MuiInputLabel-root": {
    fontSize: 18,
    color: "info.main",
  },

  pb: 2,
};

export const loginButtonStyle = {
  fontWeight: 60,
  fontSize: 18,
  textTransform: "none",
  borderRadius: 2,
  backgroundColor: "secondary.main",
  "&: hover": {
    backgroundColor: "secondary.main",
  },
  height: "4rem",
};
