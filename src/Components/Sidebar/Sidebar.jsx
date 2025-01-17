import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import { CenteredTab, CustomTab, CustomTabList } from "./Sidebar.styles";
import ProgressBar from "./ProgressBar/ProgressBar";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Sidebar = () => {
  const [value, setValue] = React.useState("1");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const theme = useTheme();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        width: "100%",
        typography: "body1",
        p: 1,
        backgroundColor: "#23273F",
        borderRadius: "8px",
      }}
    >
      <TabContext value={value} >
        <Box sx={{ border: 'none' }}>
          <CustomTabList
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            <CustomTab label="Orderbook" value="1" Mui-selected={false} textColor="primary"/>
            <CenteredTab label="Transactions" value="2" />
            <Box
              sx={{ display: "flex", alignItems: "center", marginLeft: "auto" }}
            >
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
          </CustomTabList>
        </Box>
        <TabPanel value="1" sx={{ p: 1.5, pt: 1, pb: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              color: theme.palette.textLight.main,
              marginBottom: "5px",
            }}
          >
            <Typography variant="p">Price</Typography>
            <Typography variant="p">Quantity</Typography>
            <Typography variant="p">Total</Typography>
          </Box>
          <ProgressBar value={60} />
        </TabPanel>
        <TabPanel value="2" sx={{ p: 1.5 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              color: theme.palette.textLight.main,
              marginBottom: "5px",
            }}
          >
            <Typography variant="p">Price</Typography>
            <Typography variant="p">Quantity</Typography>
            <Typography variant="p">Total</Typography>
          </Box>
          <ProgressBar value={60} />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default Sidebar;
