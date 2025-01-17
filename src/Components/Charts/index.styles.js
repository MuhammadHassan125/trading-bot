import { Box, Chip, styled, TableCell, TableContainer } from "@mui/material";

export const CustomTableContainer = styled(TableContainer)(() => ({
  border: "1px solid gray",
  borderRadius: "14px",
  overflow: "hidden",
  overflowX: "auto",
}));

export const TradingCustomTableContainer = styled(TableContainer)(() => ({
  overflow: "hidden",
  overflowX: "auto",
}));

export const OrangeChip = styled(Chip)(() => ({
  backgroundColor: "#383742",
  color: "#F7CC5F",
  "& .MuiChip-label": {
    color: "#F7CC5F",
  },
}));

export const GreenChip = styled(Chip)(() => ({
  backgroundColor: "#1f3846",
  color: "#00D483",
  "& .MuiChip-label": {
    color: "#00D483",
  },
}));

export const CloseChip = styled(Chip)(() => ({
  backgroundColor: "#34395C",
  color: "#D1D3EB",
  "& .MuiChip-label": {
    color: "#D1D3EB",
  },
}));

export const RedChip = styled(Chip)(() => ({
  backgroundColor: "#372b41",
  color: "#EE5253",
  "& .MuiChip-label": {
    color: "#EE5253",
  },
}));

export const CustomTableCell = styled(TableCell)(() => ({
  border: "none",
  color: "#fff",
}));

// circular chart styles

export const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  borderRadius: "12px",
  padding: "20px 24px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "8px",
  width: "100%",
  height: "400px",
}));

export const CircularProgressContainer = styled(Box)({
  position: "relative",
  width: "280px",
  height: "280px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
