import { styled } from "@mui/material";

export const Container = styled("div")(() => ({
  width: "100%",
//   padding: "0px 10px",
  boxSizing: "border-box",
}));

export const Row = styled("div")(() => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  padding: "0px",
}));

export const Box1 = styled("div")(({ theme }) => ({
  height: " auto",
  padding: "15px 10px",
  color: 'white',
  border: `1px solid ${theme.palette.outline.main}`,
  borderRadius: "10px",
  width: "100%",
  flex: "1 260px",
  maxWidth: "calc(25% - 8px)",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  "&:nth-of-type(1)": {
    background: "linear-gradient(to top, #157760, #52ad73)",
    ":hover": {
      background:'transparent'
    }
  },
  [theme.breakpoints.down("lg")]: {
    maxWidth: "calc(33.33% - 20px)",
  },
  [theme.breakpoints.down("md")]: {
    maxWidth: "calc(50% - 20px)", 
    marginBottom: "10px",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "calc(100% - 20px)", 
    marginBottom: "10px",
  },
  ":hover": {
    background: "linear-gradient(to top, #157760, #52ad73)",
    transition : "all 0.5s ease",
  }
}));

export const BottomOverviewRow = styled('div')(({theme}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '12px',
  alignItems: 'center',
  width: '100%',

  [theme.breakpoints.down("sm")]: {
    display: 'flex',
    flexDirection: 'column-reverse',
    marginTop: '10px',
    gap: '20px',
  },

  [theme.breakpoints.down("md")]: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10px',
    gap: '20px',
  },
}))

export const TransactionWrapper = styled("div")(({theme}) => ({
  width: '66.6%',

  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}))

export const CircleChartWrapper = styled("div")(({theme}) => ({
  width: "34.4%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}))