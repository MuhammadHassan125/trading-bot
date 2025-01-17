import { Box, Button, Checkbox, MenuItem, Typography } from "@mui/material";
import theme from "../../../Utils/Theme";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import {
  AddressField,
  NetworkOption,
  NetworkSelect,
  WithdrawButton,
} from "./index.styles";
import React from "react";
import { useNavigate } from "react-router-dom";

const LeftContent = () => {
  const [network, setNetwork] = React.useState("BTC");

  const handleCopyAddress = () => {
    navigator.clipboard.writeText("SlfKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_3aQsswc");
  };

  const navigate = useNavigate();
  
  const handleWithdraw = () => {
    navigate("/deposit");
  };
  return (
    <Box sx={{ width: "60%" }}>
      <Typography
        variant="h3"
        sx={{
          color: theme.palette.textLight.main,
          fontSize: "20px",
          mb: 3,
        }}
        gutterBottom
      >
        Withdraw Address
      </Typography>
      <Box sx={{ mb: 3, position: "relative" }}>
        <AddressField
          fullWidth
          value="SlfKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_3aQsswc"
          InputProps={{
            endAdornment: (
              <Button onClick={handleCopyAddress}>
                <ContentCopyIcon sx={{ color: "white" }} />
              </Button>
            ),
          }}
        />
      </Box>

      <Typography
        variant="h3"
        sx={{
          color: theme.palette.textDark.main,
          fontSize: "13px",
          mb: 1,
          fontWeight: 400,
        }}
      >
        Select Coin
      </Typography>

      <NetworkSelect
        fullWidth
        value={network}
        onChange={(e) => setNetwork(e.target.value)}
      >
        <MenuItem
          value="BTC"
          sx={{
            backgroundColor: "transparent",
            fontSize: "13px",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              component="img"
              src="/images/BIT.png"
              sx={{ width: 24, height: 24 }}
            />
            Bitcoin
          </Box>
        </MenuItem>
      </NetworkSelect>

      <Typography
        variant="h3"
        sx={{
          color: theme.palette.textLight.main,
          fontSize: "22px",
          mt: 3,
        }}
        gutterBottom
      >
        Transfer Network
      </Typography>

      <Typography
        variant="p"
        sx={{
          color: theme.palette.textDark.main,
          fontSize: "13px",
          mb: 1,
          fontWeight: 400,
        }}
        gutterBottom
      >
        Select Network
      </Typography>
      <NetworkOption>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Checkbox
            defaultChecked
            sx={{
              color: "green",
              "&.Mui-checked": {
                color: "green",
              },
            }}
          />{" "}
          <Box>
            <Typography sx={{ fontWeight: "bold", fontSize:'14px' }}>BSC</Typography>
            <Typography variant="caption" color={theme.palette.textLight.main}>
              BNB Smart Chain (BEP20)
            </Typography>
          </Box>
        </Box>
        <Typography color={theme.palette.textLight.main}>
          Fee: <span style={{ fontWeight: "bold", fontSize:'14px' }}>1.47%</span>
        </Typography>
      </NetworkOption>

      <NetworkOption>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Checkbox
            sx={{
              color: "green",
              "&.Mui-checked": {
                color: "green",
              },
            }}
          />{" "}
          <Box>
            <Typography sx={{ fontWeight: "bold", fontSize:'14px' }}>Tether</Typography>
            <Typography variant="caption" color={theme.palette.textLight.main}>
              OMNI
            </Typography>
          </Box>
        </Box>
        <Typography color={theme.palette.textLight.main}>
          Fee: <span style={{ fontWeight: "bold", fontSize:'14px' }}>1.47%</span>
        </Typography>
      </NetworkOption>

      <NetworkOption>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Checkbox
            sx={{
              color: "green",
              "&.Mui-checked": {
                color: "green",
              },
            }}
          />{" "}
          <Box>
            <Typography sx={{ fontWeight: "bold", fontSize:'14px' }}>Tron</Typography>
            <Typography variant="caption" color={theme.palette.textLight.main}>
              TRC20 ( TRX )
            </Typography>
          </Box>
        </Box>
        <Typography color={theme.palette.textLight.main}>
          Fee: <span style={{ fontWeight: "bold", fontSize:'14px' }}>1.47%</span>
        </Typography>
      </NetworkOption>
      <WithdrawButton fullWidth sx={{ mt: 3 }} onClick={handleWithdraw}>
        Withdraw
      </WithdrawButton>
    </Box>
  );
};

export default LeftContent;
