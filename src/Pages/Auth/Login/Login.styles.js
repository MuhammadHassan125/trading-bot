import { styled } from "@mui/material";

export const GradientButton = styled("button")(() => ({
    background: "linear-gradient(#00D483, #157760)",
    color: "white",
    border: "none",
    borderRadius: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background 0.3s ease",
    width: "100%",
    height: "50px",
    margin: "20px 0px",
    "&:hover": {
      background: "linear-gradient(#157760, #00D483)",
    },
    "&:focus": {
      outline: "none",
    },
  }));

export const FormWrapper = styled("form")(() => ({
  marginTop: "30px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  }));