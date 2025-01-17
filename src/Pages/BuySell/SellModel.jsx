import React from "react";
import {
  Modal,
  Box,
  Button,
  Typography,
  TextField,
  Stack,
  InputAdornment,
} from "@mui/material";
import theme from "../../Utils/Theme";
import AfterSellEarn from "./AfterSellEarn";

function SellModel({ open, handleClose }) {
  const [quantity, setQuantity] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [profitEarned, setProfitEarned] = React.useState(false);
  const handleSellEthClick = () => {
    handleClose(); 
    setProfitEarned(true); 
  };

  const handleEarnModelClose = () => {
    setProfitEarned(false);
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
          width: "400px",
          outline: "none",
          bgcolor: theme.palette.secondary.main,
          borderRadius: 4,
          p: 4,
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <Typography
          variant="h2"
          mb={2}
          sx={{
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "800",
            color: theme.palette.textLight.main,
          }}
        >
          Sell Ethereum
        </Typography>

        <Box
  sx={{
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }}
>
  <Typography sx={{ color: theme.palette.textDark.main }}>Price</Typography>
  <TextField
    variant="outlined"
    value={price}
    onChange={(e) => setPrice(e.target.value)}
    fullWidth
    type="number"
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <img
            src="/images/BIT.png"
            alt="Price Icon"
            style={{
              width: "20px",
              height: "20px",
            }}
          />
        </InputAdornment>
      ),
    }}
    sx={{
      bgcolor: "transparent",
      borderRadius: "8px",
      width: "78%",
      "& .MuiOutlinedInput-root": {
        borderRadius: "8px",
        border: `1px solid ${theme.palette.outline.main}`,
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.outline.main,
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.primary.main,
        },
      },
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.outline.main,
      },
      "& .MuiOutlinedInput-input": {
        color: theme.palette.textDark.main,
        fontSize: "16px",
        fontWeight: "500",
      },
    }}
  />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              color: theme.palette.textDark.main,
              fontSize: "13px",
              display: "flex",
              gap: "10px",
              alignItems: "end",
            }}
          >
            <p style={{ color: theme.palette.textLight.main }}>Best Price</p>{" "}
            <span style={{ color: "#F7CC5F" }}>0.07543198 BTC</span>
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: theme.palette.textDark.main }}>
            Amount
          </Typography>
          <TextField
            variant="outlined"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            fullWidth
            type="number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img
                    src="/images/ETH.png"
                    alt="Price Icon"
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                  />
                </InputAdornment>
              ),
            }}
            sx={{
              bgcolor: "transparent",
              borderRadius: "8px",
              width: "78%",
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                border: `1px solid ${theme.palette.outline.main}`,
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: theme.palette.outline.main,
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: theme.palette.primary.main, // Focused state outline color
                },
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.outline.main,
              },
              "& .MuiOutlinedInput-input": {
                color: theme.palette.textDark.main,
                fontSize: "16px",
                fontWeight: "500",
              },
              "& .MuiInputLabel-root": {
                color: theme.palette.textDark.main,
              },
              "&:hover .MuiInputLabel-root": {
                color: theme.palette.outline.main,
              },
              "&.Mui-focused .MuiInputLabel-root": {
                color: theme.palette.outline.main,
              },
            }}
          />
        </Box>

        <Stack
          direction="row"
          spacing={2}
          justifyContent={"space-between"}
          mt={2}
          width={"100%"}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Typography
              sx={{ fontSize: "13px", color: theme.palette.textLight.main }}
            >
              Fee{" "}
              <span style={{ color: theme.palette.textDark.main }}>
                0.00000123 BTC
              </span>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Typography
              sx={{ fontSize: "13px", color: theme.palette.textLight.main }}
            >
              Total{" "}
              <span style={{ color: theme.palette.textDark.main }}>
                0.00000123 BTC
              </span>
            </Typography>
          </Box>
        </Stack>

        <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
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
              color: "white",
              "&:hover": { opacity: 0.8 },
            }}
            onClick={handleSellEthClick}
          >
            Sell ETH
          </Button>
        </Stack>
      </Box>

    </Modal>
      <AfterSellEarn open={profitEarned} handleClose={handleEarnModelClose} />
    </>
  );
}

export default SellModel;
