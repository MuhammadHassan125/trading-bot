import { styled } from "@mui/material";
import { Box } from "@mui/material";

export const ProgressContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.secondary.main,
  overflow: "hidden",
  position: "relative",
}));

export const ProgressBarRed = styled(Box)(() => ({
  height: "30px",
  backgroundColor: "#412d42",
  position: "absolute",
  top: 0,
  left: 0,
}));

export const ProgressBarGreen = styled(Box)(() => ({
  height: "30px",
  backgroundColor: "#1e4149",
  position: "absolute",
  top: 0,
  left: 0,
}));

export const ProgressValues = styled(Box)(() => ({
  fontSize: "13px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "25px",
  position: "relative",
  zIndex: 1,
  width: "100%",
}));

export const ProgressLeftRed = styled(Box)(({ theme }) => ({
  textAlign: "left",
  color: theme.palette.danger.main,
}));

export const ProgressLeftGreen = styled(Box)(({ theme }) => ({
  textAlign: "left",
  color: theme.palette.textGreen.main,
}));

export const ProgressCenter = styled(Box)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.textDark.main,
}));

export const ProgressRight = styled(Box)(({ theme }) => ({
  textAlign: "right",
  color: theme.palette.textDark.main,
}));

export const CenterHeading = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "100%",
  height: "58px",
  boxSizing: "border-box",
  padding: 0,
  margin: 0,

}));

export const LeftChild = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  flex: "0 1 auto",
  margin: 0,
  padding: 0,
  color: "#00D483",
}));

export const RightChild = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  flex: "0 1 auto",
  margin: 0,
  padding: 0,
  color: "#00D483",
}));
