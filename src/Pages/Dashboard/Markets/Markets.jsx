import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TransactionChart from "../../../Components/Charts/TransactionChart";
import {
  Container,
  Row,
  Box1,
} from "../index.styles";
import { Box, Typography } from "@mui/material";
import TransactionsTable from "../../../Components/Charts/TransactionTable";
import theme from "../../../Utils/Theme";

const Markets = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const cardData = [
    {
      currency: "/images/dollar.png",
      title: "Dollar",
      bHeading: "Total Balance",
      balance: "$ 11.827,42",
    },
    {
      currency: "/images/bitcoin.png",
      title: "Bitcoin",
      bHeading: "Total Transactions",
      balance: "$ 132.827,42",
    },
    {
      currency: "/images/bitcoin.png",
      title: "Dollar",
      bHeading: "Total Balance",
      balance: "$ 11.827,42",
    },
    {
      currency: "/images/bitcoin.png",
      title: "Dollar",
      bHeading: "Total Balance",
      balance: "$ 11.827,42",
    },
  ];

  return (
    <div style={{ display: "flex" }}>
      {/* <Oderbook /> */}
      <Container>
        <Row>
          {cardData.map((item, index) => (
            <Box1 key={index}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <img
                    src={item.currency}
                    style={{ width: "30px", height: "30px" }}
                  />
                  <Typography
                    variant="h4"
                    sx={{ fontSize: "15px", fontWeight: 500, color:theme.palette.textDark.main }}
                  >
                    {item.title}
                  </Typography>
                </Box>

                <IconButton
                  aria-label="more"
                  aria-controls="long-menu"
                  aria-haspopup="true"
                  onClick={handleMenuClick}
                >
                  <MoreVertIcon sx={{ color: "white" }} />
                </IconButton>
                <Menu
                  id="long-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Option 3</MenuItem>
                </Menu>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  mt: 2,
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <Typography
                    variant="h4"
                    sx={{ fontSize: "13px", fontWeight: 300 }}
                  >
                    {item.bHeading}
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{ fontSize: "18px", fontWeight: 700 }}
                  >
                    {item.balance}
                  </Typography>
                </Box>

                <Box>
                  <img src="/images/card-bar.png" />
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <img src="/images/up.png" /> <p>+12,5%</p>
                  </Box>
                </Box>
              </Box>
            </Box1>
          ))}
        </Row>

        <TransactionChart />

            <TransactionsTable />
      </Container>
    </div>
  );
};

export default Markets;
