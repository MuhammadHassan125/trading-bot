import { styled } from "@mui/material";
import theme from "../../../Utils/Theme";

export const Wrapper = styled("div")(() => ({
    width: "100%",
    padding: "15px",
    boxSizing: "border-box",
    backgroundColor:theme.palette.secondary.main,
    height:'100%',
    overflowY: "auto",
}));

export const ScannerBox = styled("div")(() => ({
    width: "100%",
    padding: "15px",
    borderRadius: "16px",
    backgroundColor:theme.palette.secondary.main,
    display:'flex',
    alignItems:'center',
    gap:'25px',
    border: `1px solid ${theme.palette.outline.main}`,
    fontSize:'14px',
}))