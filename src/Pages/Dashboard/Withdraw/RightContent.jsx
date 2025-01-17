import { Box, Typography } from "@mui/material";
import theme from "../../../Utils/Theme";

const RightContent = () => {
  return (
    <>
      <Typography
        variant="h3"
        sx={{
          color: theme.palette.textLight.main,
          fontSize: "22px",
          mb: 3,
        }}
        gutterBottom
      >
        Wallet Info
      </Typography>
      <Box sx={{ mb: 3 }}>
        <Typography
          sx={{
            color: theme.palette.textDark.main,
            fontWeight: 500,
            fontSize:'13px'
          }}
        >
          Bitcoin (BTC)
        </Typography>

        <Box
          sx={{
            border: `1px solid ${theme.palette.outline.main}`,
            borderRadius: "16px",
            padding: "16px",
            display: "flex",
            alignItems: "center",
            gap: 4,
            mt: 1,
          }}
        >
          <img src="/images/BIT.png" alt="BTC" />
          <Box>
            <Typography
              variant="p"
              sx={{ color: theme.palette.textLight.main, fontSize: "13px" }}
            >
              Current balance
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: theme.palette.textDark.main,
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              0.18974635
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{
            color: theme.palette.textDark.main,
            fontWeight: 500,
            fontSize:'13px'
          }}
        >
          Ethereum (ETH)
        </Typography>
        <Box
          sx={{
            border: `1px solid ${theme.palette.outline.main}`,
            borderRadius: "16px",
            padding: "16px",
            display: "flex",
            alignItems: "center",
            gap: 4,
            mt: 1,
          }}
        >
          <img src="/images/BIT.png" alt="BTC" />
          <Box>
            <Typography
              variant="p"
              sx={{ color: theme.palette.textLight.main, fontSize: "13px" }}
            >
              Current balance
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: theme.palette.textDark.main,
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              0.18974635
            </Typography>
          </Box>
        </Box>{" "}
      </Box>
    </>
  );
};

export default RightContent;
