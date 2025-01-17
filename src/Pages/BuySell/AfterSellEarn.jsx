import { Modal, Box, Button, Typography, Stack } from "@mui/material";
import theme from "../../Utils/Theme";

function AfterSellEarn({ open, handleClose }) {
  return (
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
          mt={2}
          sx={{
            textAlign: "center",
            fontSize: "19px",
            fontWeight: "400",
            color: theme.palette.textDark.main,
          }}
        >
          You just earn <span style={{ color: "#00D483" }}>0.02343,00</span> BTC
        </Typography>
        <Typography
          variant="h4"
          mt={2}
          sx={{
            textAlign: "center",
            fontSize: "15px",
            fontWeight: "400",
            color: theme.palette.textLight.main,
          }}
        >
          See history
        </Typography>

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
            Dismiss
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}

export default AfterSellEarn;
