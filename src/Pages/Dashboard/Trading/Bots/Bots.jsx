import { Box, Chip, Typography } from "@mui/material";
import theme from "../../../../Utils/Theme";
import BotEditModal from "./EditModal";
import React from "react";

const Bots = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const data = [
    {
      one: "Fast Trader",
      two: "MACD: 293",
      three: "Moving 200 26%",
      four: (
        <Chip
          onClick={handleOpen}
          label="Open & Edit"
          sx={{
            color: "#D1D3EB",
            bgcolor: "#34395C",
            fontWeight: "400",
            fontSize: "12px",
            height: "24px",
          }}
        />
      ),
      failed: (
        <Chip
          label="Delete"
          sx={{
            color: "white",
            bgcolor: "#EE5253",
            fontWeight: "400",
            fontSize: "12px",
            height: "24px",
          }}
        />
      ),
    },
    {
      one: "Fast Buy",
      two: "MACD: 293",
      three: "Moving 200 26%",
      four: (
        <Chip
          onClick={handleOpen}
          label="Open & Edit"
          sx={{
            color: "#D1D3EB",
            bgcolor: "#34395C",
            fontWeight: "400",
            fontSize: "12px",
            height: "24px",
          }}
        />
      ),
      failed: (
        <Chip
          label="Delete"
          sx={{
            color: "white",
            bgcolor: "#EE5253",
            fontWeight: "400",
            fontSize: "12px",
            height: "24px",
          }}
        />
      ),
    },
    {
      one: "Buy Loop",
      two: "MACD: 293",
      three: "Moving 200 26%",
      four: (
        <Chip
          onClick={handleOpen}
          label="Open & Edit"
          sx={{
            color: "#D1D3EB",
            bgcolor: "#34395C",
            fontWeight: "400",
            fontSize: "12px",
            height: "24px",
          }}
        />
      ),
      failed: (
        <Chip
          label="Delete"
          sx={{
            color: "white",
            bgcolor: "#EE5253",
            fontWeight: "400",
            fontSize: "12px",
            height: "24px",
          }}
        />
      ),
    },
    {
      one: "Momentum",
      two: "MACD: 293",
      three: "Moving 200 26%",
      four: (
        <Chip
          onClick={handleOpen}
          label="Open & Edit"
          sx={{
            color: "#D1D3EB",
            bgcolor: "#34395C",
            fontWeight: "400",
            fontSize: "12px",
            height: "24px",
          }}
        />
      ),
      failed: (
        <Chip
          label="Delete"
          sx={{
            color: "white",
            bgcolor: "#EE5253",
            fontWeight: "400",
            fontSize: "12px",
            height: "24px",
          }}
        />
      ),
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
          Bots List
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
            gridTemplateColumns: "2fr 1fr 2fr 1fr 0fr",
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
          <Typography variant="body2">{item.three}</Typography>
          <Box>{item.four}</Box>
          <Box>{item.failed}</Box>
        </Box>
      ))}

      <BotEditModal open={open} handleClose={handleClose} />
    </>
  );
};

export default Bots;
