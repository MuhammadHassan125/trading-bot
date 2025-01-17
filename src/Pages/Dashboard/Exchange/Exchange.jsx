import { useState } from "react";
import {
  Box,
  Typography,
  Select,
  MenuItem,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import { styled } from "@mui/material/styles";
import theme from "../../../Utils/Theme";
import { useNavigate } from "react-router-dom";

const CoinSelect = styled(Select)(({ theme }) => ({
  backgroundColor: "#34395C",
  color: theme.palette.textDark.main,
  width: "100%",
  padding: "10 12px",
  fontSize: "14px",
  borderRadius: "16px",
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiSelect-icon": {
    color: theme.palette.textDark.main,
  },
}));

const AmountField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#34395C",
    color: theme.palette.textDark.main,
    padding: "0 12px",
    fontSize: "14px",
    borderRadius: "16px",
    "& fieldset": {
      border: "none",
    },
  },
  "& .MuiOutlinedInput-input": {
    color: theme.palette.textDark.main,
  },
}));

const ExchangeWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  padding: "15px",
  boxSizing: "border-box",
  backgroundColor: theme.palette.secondary.main,
  height: "100%",
}));

export default function CryptoExchange() {
  const [fromCoin, setFromCoin] = useState("ETH");
  const [toCoin, setToCoin] = useState("BTC");
  const [fromAmount, setFromAmount] = useState("11.1987865456");
  const [toAmount, setToAmount] = useState("0.1987865456");

  const walletInfo = {
    available: "$107,508.37",
    rate: "1.00 = 3.23",
    fee: "1317",
  };

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/exchange-save");
  };

  return (
    <ExchangeWrapper>
      <Typography
        variant="h5"
        sx={{ mb: 3, color: theme.palette.textLight.main, fontWeight: "bold" }}
      >
        Operation
      </Typography>

      <Box sx={{ display: "flex", gap: 2, position: "relative", mb: 4 }}>
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ mb: 1, color:theme.palette.textDark.main, fontSize: "14px" }}>Select Coin</Typography>
          <CoinSelect
            value={fromCoin}
            onChange={(e) => setFromCoin(e.target.value)}
          >
            <MenuItem value="ETH">
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, fontSize: "14px", }}>
              <Box component="img"  src="/images/ETH.png"  sx={{ fontSize: "0.2rem", width: "1.2rem" }}/>
                ETH • Ethereum
              </Box>
            </MenuItem>
          </CoinSelect>
          <AmountField
            fullWidth
            value={fromAmount}
            onChange={(e) => setFromAmount(e.target.value)}
            sx={{ mt: 2 }}
          />
        </Box>

        <IconButton
          sx={{
            position: "absolute",
            zIndex: 1,
            left: "50%",
            top: "60%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#157760",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#00B77E",
            },
          }}
        >
          <SwapHorizIcon />
        </IconButton>

        <Box sx={{ flex: 1 }}>
          <Typography sx={{ mb: 1, color:theme.palette.textDark.main, fontSize: "14px" }}>Select Coin</Typography>
          <CoinSelect
            value={toCoin}
            onChange={(e) => setToCoin(e.target.value)}
          >
            <MenuItem value="BTC">
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, fontSize: "14px", }}>
                <Box component="img"  src="/images/BIT.png"  sx={{ fontSize: "0.2rem", width: "1.2rem" }}/>
                BTC • Bitcoin
              </Box>
            </MenuItem>
          </CoinSelect>
          <AmountField
            fullWidth
            value={toAmount}
            onChange={(e) => setToAmount(e.target.value)}
            sx={{ mt: 2 }}
          />
        </Box>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          sx={{
            mb: 2,
            color: theme.palette.textLight.main,
            fontWeight: "bold",
          }}
        >
          Wallet Info
        </Typography>

        <Box sx={{ color: theme.palette.textDark.main, fontSize: "14px", display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="p">Available: {walletInfo.available}</Typography>
          <Typography variant="p">Rate: {walletInfo.rate}</Typography>
          <Typography variant="p">Fee: {walletInfo.fee}</Typography>
        </Box>
      </Box>

      <Button
        variant="contained"
        sx={{
          bgcolor: "#00D483",
          padding: "7px 0",
          width: "120px",
          borderRadius: "16px",
          textTransform: "capitalize",
          border: `1px solid ${theme.palette.outline.main}`,
          "&:hover": { opacity: 0.8 },
          my: 3,
        }}
        onClick={handleNavigation}
      >
        Exchange
      </Button>
    </ExchangeWrapper>
  );
}
