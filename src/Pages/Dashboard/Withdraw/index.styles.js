import { Box, Button, Select, styled, TextField } from "@mui/material";
import theme from "../../../Utils/Theme";

export const Container = styled("div")(() => ({
    width: "100%",
    height: "calc(100% - 60px)",
    padding: "0px 10px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-between",
    
  }));
  
  export const LeftInfo = styled("div")(({ theme }) => ({
    width: "68%",
    height: "89vh",
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "16px",
    padding: "16px",
    float: "left",
    overflowY: "auto",
  }));
  
  export const RightInfo = styled("div")(({ theme }) => ({
    width: "31%",
    height: "89vh",
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "16px",
    padding: "16px",
    float: "right",
  }));
  

  
  export const AddressField = styled(TextField)({
    border: `1px solid ${theme.palette.outline.main}`,
    outline:'none',
    fontSize:'12px',
    borderRadius: "16px",
    "& .MuiOutlinedInput-root": {
      color: theme.palette.textDark.main,
      border: "none",
      "&:hover .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
    },
  });
  
  export const NetworkSelect = styled(Select)({
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.textDark.main,
    borderRadius: "16px",
    fontSize: "13px",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.outline.main,
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.outline.main,
    },
    "& .MuiSvgIcon-root": {
      color: theme.palette.textDark.main,
    },
  });
  
  export const WithdrawButton = styled(Button)({
    backgroundColor: "#00dc94",
    color: "white",
    width: "160px",
    padding: "9px 0",
    borderRadius: "20px",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#00b377",
    },
  });
  
  export const NetworkOption = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5px 12px",
    marginBottom: "8px",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.textDark.main,
    border: `1px solid ${theme.palette.outline.main}`,
    borderRadius: "16px",
    marginTop: "16px",
  
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.outline.main,
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.outline.main,
    },
    "& .MuiSvgIcon-root": {
      color: theme.palette.textDark.main,
    },
  });