import React from "react";
import { Box, Button, MenuItem, Typography } from "@mui/material";
import { ScannerBox, Wrapper } from "./index.styles";
import theme from "../../../Utils/Theme";
import { AddressField, NetworkSelect } from "../Withdraw/index.styles";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const Deposite = () => {
  const [network, setNetwork] = React.useState("BTC");

  const handleCopyAddress = () => {
    navigator.clipboard.writeText("SlfKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_3aQsswc");
  };

  return (
    <Wrapper>
      <Box sx={{ width: "50%" }}>
        {/* top heading  */}
        <Typography
          variant="h3"
          sx={{
            color: theme.palette.textLight.main,
            fontSize: "20px",
            fontWeight: "bold",
            mb: 3,
          }}
          gutterBottom
        >
          Deposit Address
        </Typography>

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
              fontSize:'13px',
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
            color: theme.palette.textDark.main,
            fontSize: "13px",
            mb: 1,
            mt: 3,
            fontWeight: 400,
          }}
        >
          Select Network
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
              fontSize:'13px',
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
              BNB Smart Chain
            </Box>
          </MenuItem>
        </NetworkSelect>

        {/* top heading  */}
        <Typography
          variant="h3"
          sx={{
            color: theme.palette.textLight.main,
            fontSize: "20px",
            fontWeight: "bold",
            my: 3,
          }}
          gutterBottom
        >
          Deposit Address{" "}
        </Typography>

        <ScannerBox>
          <Box component="img" src="/images/QR Code.png" />

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
        </ScannerBox>

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems:'center', color: theme.palette.textLight.main, fontSize:'14px', mt:2 }}>
            <p>Minimum deposit</p>
            <p>0.00001 BTC</p>
        </Box>

        <ul style={{ color: theme.palette.textDark.main, fontSize:'13px', marginTop:'25px', marginLeft:'20px' }}>
            <li>Select wallet</li>
            <li>Check out the deposit address before confirm</li>
            <li>Expected arrival after 15 network confirmations</li>
            <li>Do not send NFTs to this address. <span style={{color:'#00D483'}}>Learn how to deposit NFTs</span></li>
        </ul>
      </Box>
    </Wrapper>
  );
};

export default Deposite;
