import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import DatePickerForTransaction from "./DatePicker";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import theme from "../../Utils/Theme";

const TransactionChart = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const rowStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "20px",
    marginLeft: "10px",
  };

  const buttonGroupStyle = {
    display: "flex",
    gap: "10px",
  };

  const [series] = useState([
    {
      data: [210, 220, 160, 200, 220, 220, 250],
    },
    {
      data: [150, 190, 260, 220, 240, 220, 210],
    },
  ]);

  const [options] = useState({
    chart: {
      type: "area",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    grid: {
      show: true,
      borderColor: theme.palette.outline.main,
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      categories: ["1", "5", "10", "15", "20", "25", "30"],
      labels: {
        style: {
          colors: ["#8e8e8e"],
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      min: 140,
      tickAmount: 3,
      labels: {
        formatter: function (value) {
          return value + "M";
        },
        style: {
          fontSize: "12px",
          fontWeight: 400,
          colors: ["#8e8e8e"],
        },
      },
    },
    legend: {
      show: false,
    },
    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex }) {
        return `
                    <div style="
                        background-color: #2E3B52; 
                        padding: 10px; 
                        // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                        text-align: center;
                    ">
                        <div style="font-size: 13px; color: #81C784;">This Month</div>
                        <div style="font-size: 22px; font-weight: bold; color:white;">$${series[seriesIndex][dataPointIndex]}</div>
                        <div style="font-size: 12px; color: #A0A0A0;">04 May</div>
                    </div>
                `;
      },
    },
  });

  return (
    <div>
      <div style={rowStyle}>
        <div style={{ color: theme.palette.textDark.main, fontWeight: 500, fontSize: "18px" }}>
          Total Transactions
        </div>
        <div style={buttonGroupStyle}>
          <div
            style={{ display: "flex", alignItems: "center", padding: "5px" }}
          >
            <img src="/images/right-arrow.png" />
            <p
              style={{
                fontSize: "14px",
                color: theme.palette.textDark.main,
                marginLeft: "5px",
              }}
            >
              Value
            </p>
          </div>

          <div
            style={{ display: "flex", alignItems: "center", padding: "5px" }}
          >
            <img src="/images/right-arrow-left.png" />
            <p
              style={{
                fontSize: "14px",
                color: theme.palette.textDark.main,
                marginLeft: "5px",
              }}
            >
              Contract Value
            </p>
          </div>

          <div
            style={{ display: "flex", alignItems: "center", padding: "5px" }}
          >
            <p
              style={{
                fontSize: "14px",
                color: theme.palette.textLight.main,
                marginLeft: "5px",
              }}
            >
              Previous Month
            </p>
          </div>

          <div
            style={{ display: "flex", alignItems: "center", padding: "5px" }}
          >
            <DatePickerForTransaction />
          </div>

          <div
            style={{ display: "flex", alignItems: "center", padding: "5px" }}
          >
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleMenuClick}
              sx={{
                border: `1px solid ${theme.palette.outline.main}`,
              }}
            >
              <MoreVertIcon sx={{ color: "#00D483" }} />
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
          </div>
        </div>
      </div>

      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default TransactionChart;
