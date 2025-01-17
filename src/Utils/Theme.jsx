import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    fontFamily: "Inter, sans-serif",
    primary: {
      main: "#191C2F",
    },
    secondary: {
      main: "#23273F",
    },
    danger: {
      main: "#ff0000",
    },
    textPrimary: {
      main: "#FFFFFF",
    },
    textDark: {
      main: "#D1D3EB",
    },
    textGreen:{
      main:"#92ECA2"
    },
    textLight: {
      main: '#707298'
    },
    outline:{
      main: '#34395C'
    }
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    
    h2: {
      fontSize: "3.6rem",
      fontWeight: 700,
    },

    h3:{
      fontSize: "2.2rem",
      fontWeight: 600
    },
    p: {
      fontSize: "14px",
      fontWeight: 400
    }
  },
});

export default theme;
