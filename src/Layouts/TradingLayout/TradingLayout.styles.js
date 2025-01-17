import { styled } from "@mui/material";
import theme from "../../Utils/Theme";

export const LayoutWrapper = styled("main")(({ theme }) => ({
  padding: "10px",
  backgroundColor: theme.palette.primary.main,
  width: "100%",
  height: "100%",
}));

export const TradingHeaderWrapper = styled("header")(() => ({
  width: "100%",
  height: "60px",
  backgroundColor: "white",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const TradingBottomContent = styled("div")(() => ({
  width: "100%",
  height: "calc(100% - 65px)",
  marginTop:'5px',
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: "12px",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.up("sm")]: {
    flexDirection: "column-reverse",
  },

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

export const TradingSidebarWrapper = styled("div")(({ theme }) => ({
  minWidth: "22%",
  height: "70vh",
  backgroundColor: theme.palette.secondary.main,
  borderRadius: "16px",
  overflowY: "auto",
  scrollbarWidth: "none",
  msOverflowStyle: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },

  [theme.breakpoints.down("sm")]: {
    minWidth: "100%",
  },
}));

export const TradingContentWrapper = styled("div")(({theme}) => ({
  width: "100%",
  height: "70vh",
  borderRadius: "16px",
  backgroundColor: theme.palette.secondary.main,
  overflowY: "auto",
  scrollbarWidth: "none",
  msOverflowStyle: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
}));
