import React from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import Chart from "./Chart/Chart";
import {
  ChartContainer,
  ClickableImage,
  Header,
  HeaderInner,
  PublishBtn,
  RightSide,
} from "./index.styles";
import Status from "./Status/Status";
import Bots from "./Bots/Bots";
import AskForBuySell from "../../BuySell/AskForBuySell";
import { useLocation } from "react-router-dom";

const TabPanel = ({ value, index, children }) => {
  return value === index && <Box sx={{ p: 2 }}>{children}</Box>;
};

export default function Trading() {
  const [tabValue, setTabValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === "/buy-sell") {
      handleOpen();
    }
  }, [location.pathname]);

  return (
    <ChartContainer>
      {/* Header Tabs */}
      <Header>
        <HeaderInner>
          <Tabs
            value={tabValue}
            onChange={(e, newValue) => setTabValue(newValue)}
            textColor="inherit"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#00D483"
              }
            }}          >
            <Tab label="Status" sx={{ color: "#8f9bb3" }} />
            <Tab label="Bots" sx={{ color: "#8f9bb3" }} />
            <Tab label="New Bot" sx={{ color: "#8f9bb3" }} disabled />
            <Tab label="Add Alert" sx={{ color: "#8f9bb3" }} disabled />
            <Tab label="Chart" sx={{ color: "#fff" }} />
          </Tabs>
        </HeaderInner>

        <RightSide>
          <ClickableImage src="/images/Candlestick Chart.png" />
          <ClickableImage src="/images/Combo Chart.png" />
          <ClickableImage src="/images/Reply All Arrow.png" />
          <ClickableImage src="/images/Reply All Arrow (1).png" />
          <ClickableImage src="/images/Camera.png" />
          <PublishBtn>Publish</PublishBtn>
        </RightSide>
      </Header>

      {/* Tab Panels */}
      <TabPanel value={tabValue} index={0} >
        <Typography variant="body1" sx={{ color: "#fff" }}>
          <Status />
        </Typography>
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <Typography variant="body1" sx={{ color: "#fff" }}>
          <Bots />
        </Typography>
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        <Typography variant="body1" sx={{ color: "#fff" }}>
          New Bot content goes here.
        </Typography>
      </TabPanel>
      <TabPanel value={tabValue} index={3}>
        <Typography variant="body1" sx={{ color: "#fff" }}>
          Add Alert content goes here.
        </Typography>
      </TabPanel>
      <TabPanel value={tabValue} index={4}>
        <Chart />
      </TabPanel>

      <AskForBuySell
        open={open}
        handleClose={handleClose}
      />

      {/* <BuyModel /> */}
    </ChartContainer>
  );
}
