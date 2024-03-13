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
      fontSize: 14,
    },
    ["& :: placeholder"]: {
      color: "primary.light",
      opacity: 1.5,
    },
    "& .MuiInputLabel-root": { 
        color: "info.main",
      },
    pb: 2,
  };