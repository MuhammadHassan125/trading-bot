import { Box, styled, Typography } from "@mui/material";
import { IoMdTime } from "react-icons/io";
const AfterExchange = () => {
  const ExchangeWrapper = styled("div")(({ theme }) => ({
    width: "100%",
    padding: "15px 20px",
    boxSizing: "border-box",
    backgroundColor: theme.palette.secondary.main,
    height: "100%",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  }));

  const ContentMain = styled("div")(() => ({
    display: "flex",
    gap: "30px",
    alignContent: "center",
    color: "#8F92A1",
    fontSize: "14px",
    marginBottom: "35px",
  }));

  return (
    <ExchangeWrapper>
      <ContentMain>
        <Box
          sx={{
            width: "4%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="/images/drop-icon.png" />
        </Box>

        <Box sx={{ display: "flex", width: "100%", alignItems: "flex-start" }}>
          <Box sx={{ width: "90%" }}>
            <Typography variant="p" sx={{ fontWeight: 600, color: "#EE5253" }}>
              Drop Tendence Alert
            </Typography>
            <Typography sx={{ width: "90%", fontSize: "13px", mt: 0.7 }}>
              Lorem ipsum dolor sit amet consectetur. Sed bibendum vestibulum
              dis viverra tempor et aliquam. Metus in amet risus condimentum
              convallis semper.
            </Typography>
          </Box>

          <Box
            sx={{
              width: { xs: "30%", md: "10%" },
              mt: 0.5,
              alignItems: "center",
              display: "flex",
              gap: "5px",
            }}
          >
            <IoMdTime style={{ fontSize: "16px" }} />{" "}
            <p style={{ fontSize: "13px" }}>23 min ago</p>
          </Box>
        </Box>
      </ContentMain>

      <ContentMain>
        <Box
          sx={{
            width: "4%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="/images/eth-icon.png" />
        </Box>

        <Box sx={{ display: "flex", width: "100%", alignItems: "flex-start" }}>
          <Box sx={{ width: "90%" }}>
            <Typography sx={{ fontWeight: 600, color: "#92ECA2" }}>
              Ethereum Buy Alert
            </Typography>
            <Typography sx={{ width: "90%", fontSize: "13px", mt: 0.7 }}>
              Lorem ipsum dolor sit amet consectetur. Sed bibendum vestibulum
              dis viverra tempor et aliquam. Metus in amet risus condimentum
              convallis semper.
            </Typography>
          </Box>

          <Box
            sx={{
              width: { xs: "30%", md: "10%" },
              mt: 0.5,
              alignItems: "center",
              display: "flex",
              gap: "5px",
            }}
          >
            <IoMdTime style={{ fontSize: "16px" }} />{" "}
            <p style={{ fontSize: "13px" }}>23 min ago</p>
          </Box>
        </Box>
      </ContentMain>

      <ContentMain>
        <Box
          sx={{
            width: "4%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="/images/drop-icon.png" />
        </Box>

        <Box sx={{ display: "flex", width: "100%", alignItems: "flex-start" }}>
          <Box sx={{ width: "90%" }}>
            <Typography sx={{ fontWeight: 600, color: "#EE5253" }}>
              Drop Tendence Alert
            </Typography>
            <Typography sx={{ width: "90%", fontSize: "13px", mt: 0.7 }}>
              Lorem ipsum dolor sit amet consectetur. Sed bibendum vestibulum
              dis viverra tempor et aliquam. Metus in amet risus condimentum
              convallis semper.
            </Typography>
          </Box>

          <Box
            sx={{
              width: { xs: "30%", md: "10%" },
              mt: 0.5,
              alignItems: "center",
              display: "flex",
              gap: "5px",
            }}
          >
            <IoMdTime style={{ fontSize: "16px" }} />{" "}
            <p style={{ fontSize: "13px" }}>23 min ago</p>
          </Box>
        </Box>
      </ContentMain>
    </ExchangeWrapper>
  );
};

export default AfterExchange;
