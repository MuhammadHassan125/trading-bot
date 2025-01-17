import {
  Modal,
  Box,
  Button,
  Typography,
  Stack,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import theme from "../../Utils/Theme";
import React from "react";
import BuyModel from "./BuyModel";
import SellModel from "./SellModel";

function AskForBuySell({ open, handleClose }) {
  const [selectedCoin, setSelectedCoin] = React.useState("");
  const [buyModelOpen, setBuyModelOpen] = React.useState(false);
  const [SellModelOpen, setSellModelOpen] = React.useState(false);

  const handleChange = (event) => {
    setSelectedCoin(event.target.value);
  };

  const handleBuyClick = () => {
    handleClose();
    setBuyModelOpen(true);
  };

  const handleBuyModelClose = () => {
    setBuyModelOpen(false);
  };

  const handleSellClick = () => {
    handleClose();
    setSellModelOpen(true);
  };

  const handleSellModelClose = () => {
    setSellModelOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "450px",
            outline: "none",
            bgcolor: theme.palette.secondary.main,
            borderRadius: 4,
            p: 4,
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
          }}
        >
          <img
            src="/images/buy-icon.png"
            alt="Buy Icon"
            style={{ marginLeft: "25px", width: "150px", height: "120px" }}
          />
          <Typography
            variant="h2"
            mb={2}
            sx={{
              textAlign: "center",
              fontSize: "19px",
              fontWeight: "500",
              color: theme.palette.textDark.main,
            }}
          >
            Select Coin{" "}
          </Typography>

          <FormControl fullWidth>
            <InputLabel
              id="coin-select-label"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "16px",
                fontWeight: "500",
                color: theme.palette.textDark.main,
              }}
            >
              <img
                src="/images/BIT.png"
                alt="BTC"
                style={{ width: "20px", height: "20px" }}
              />
              BTC - Bitcoin
            </InputLabel>
            <Select
              labelId="coin-select-label"
              value={selectedCoin}
              onChange={handleChange}
              sx={{
                bgcolor: "transparent",
                borderRadius: "8px",
                color: theme.palette.textDark.main,
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: theme.palette.outline.main, // Normal border color
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: theme.palette.primary.main, // Border color on hover
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: theme.palette.primary.main, // Border color on focus
                },
                "& .MuiSelect-icon": {
                  color: "white", // Dropdown icon color
                },
              }}
            >
              <MenuItem value="Bitcoin">Bitcoin</MenuItem>
              <MenuItem value="Ethereum">Ethereum</MenuItem>
              <MenuItem value="Litecoin">Litecoin</MenuItem>
              <MenuItem value="Ripple">Ripple</MenuItem>
            </Select>
          </FormControl>

          <Stack direction="row" spacing={2} justifyContent="center" mt={4}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#34395C",
                padding: "8px 0",
                width: "120px",
                borderRadius: "20px",
                textTransform: "capitalize",
                border: `1px solid ${theme.palette.outline.main}`,
                "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
              }}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#EE5253",
                padding: "8px 0",
                width: "120px",
                borderRadius: "20px",
                textTransform: "capitalize",
                border: `1px solid ${theme.palette.outline.main}`,
                color: "white",
                "&:hover": { opacity: 0.9 },
              }}
              onClick={handleSellClick}
            >
              Sell
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#00D483",
                padding: "8px 0",
                width: "120px",
                borderRadius: "20px",
                textTransform: "capitalize",
                border: `1px solid ${theme.palette.outline.main}`,
                color: "white",
                "&:hover": { bgcolor: "#00cc7d" },
              }}
              onClick={handleBuyClick}
            >
              Buy
            </Button>
          </Stack>
        </Box>
      </Modal>

      {/* Naya Modal */}
      <BuyModel open={buyModelOpen} handleClose={handleBuyModelClose} />
      <SellModel open={SellModelOpen} handleClose={handleSellModelClose} />
    </>
  );
}

export default AskForBuySell;
