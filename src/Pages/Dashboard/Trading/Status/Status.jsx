import { Box, Chip, Typography } from "@mui/material";
import theme from "../../../../Utils/Theme";

export const Btn = ({ name }) => {
  return (
    <Chip
      label={name}
      sx={{
        color: `${
          name === "Active"
            ? "#00D483"
            : name === "Failed"
            ? "#EE5253"
            : name === "Turn Off" || name === "Try Again"
            ? "#D1D3EB"
            : "#F7CC5F"
        }`,
        bgcolor: `${
          name === "Active"
            ? "#00D4831A"
            : name === "Failed"
            ? "#EE52531A"
            : name === "Turn Off" || name === "Try Again"
            ? "#34395C"
            : "#F7CC5F1A"
        }`,
        fontWeight: "400",
        fontSize: "12px",
        height: "24px",
      }}
    />
  );
};

const Status = () => {
  const data = [
    {
      one: "Fast Trader",
      two: "Limit Order: 15",
      three: "8 Transactions",
      four: <Btn name="Active" />,
      failed: <Btn name="Turn Off" />,
    },
    {
      one: "Fast Buy",
      two: "Limit Order: 10",
      three: "5 Transactions",
      four: <Btn name="Active" />,
      failed: <Btn name="Turn Off" />,
    },
    {
      one: "Buy Loop",
      two: "Limit Order: 15",
      three: "5 Transactions",
      four: <Btn name="Failed" />,
      failed: <Btn name="Try Again" />,
    },
    {
      one: "Momentum",
      two: "Limit Order: 15",
      three: "12 Transactions",
      four: <Btn name="Awaiting" />,
      failed: <Btn name="Turn On" />,
    },
  ];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: "20px",
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{ color: theme.palette.textDark.main, fontSize: "17px" }}
        >
          Bots List Status
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.textDark.main,
            fontSize: "14px",
            fontWeight: "400",
          }}
        >
          Showing 4 of 4
        </Typography>
      </Box>

      {data.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "grid",
            gridTemplateColumns: "2fr 2fr 1fr 0fr",
            justifyContent: "space-between",
            alignItems: "center",
            color: theme.palette.textDark.main,
            border: `1px solid ${theme.palette.outline.main}`,
            padding: "13px 15px",
            borderRadius: "12px",
            mb: "10px",
            gap: "10px",
          }}
        >
          <Typography variant="body2">{item.one}</Typography>
          <Typography variant="body2">{item.two}</Typography>
          <Box>{item.four}</Box>
          <Box>{item.failed}</Box>
        </Box>
      ))}
    </>
  );
};

export default Status;
