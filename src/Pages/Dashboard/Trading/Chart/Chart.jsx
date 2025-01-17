import ReactApexChart from "react-apexcharts";
import theme from "../../../../Utils/Theme";

export default function Chart() {
  const series = [
    {
      data: [
        // Original data expanded 3x with similar patterns
        { x: new Date(2016, 1, 1), y: [51.98, 56.29, 51.59, 53.85] },
        { x: new Date(2016, 1, 2), y: [53.85, 57.00, 52.00, 54.50] },
        { x: new Date(2016, 1, 3), y: [54.50, 58.00, 53.00, 55.00] },
        { x: new Date(2016, 1, 4), y: [55.00, 59.00, 54.00, 56.00] },
        { x: new Date(2016, 1, 5), y: [56.00, 60.00, 55.00, 57.00] },
        { x: new Date(2016, 1, 6), y: [57.00, 61.00, 56.00, 58.00] },
        { x: new Date(2016, 1, 7), y: [58.00, 62.00, 57.00, 59.00] },
        { x: new Date(2016, 1, 8), y: [59.00, 55.00, 58.00, 56.00] },
        { x: new Date(2016, 1, 9), y: [56.00, 57.00, 55.00, 57.50] },
        { x: new Date(2016, 1, 10), y: [57.50, 63.00, 56.00, 60.00] },
        { x: new Date(2016, 1, 11), y: [60.00, 66.00, 59.00, 63.00] },
        { x: new Date(2016, 1, 12), y: [63.00, 65.00, 62.00, 64.00] },
        { x: new Date(2016, 1, 13), y: [64.00, 59.00, 63.00, 61.00] },
        { x: new Date(2016, 1, 14), y: [61.00, 62.50, 60.00, 61.50] },
        { x: new Date(2016, 1, 15), y: [61.50, 68.00, 60.00, 65.00] },
        { x: new Date(2016, 1, 16), y: [65.00, 70.00, 64.00, 67.00] },
        { x: new Date(2016, 1, 17), y: [67.00, 64.00, 66.00, 65.00] },
        { x: new Date(2016, 1, 18), y: [65.00, 67.00, 64.00, 66.50] },
        { x: new Date(2016, 1, 19), y: [66.50, 72.00, 65.00, 70.00] },
        { x: new Date(2016, 1, 20), y: [70.00, 71.50, 69.00, 71.00] },
        { x: new Date(2016, 1, 21), y: [71.00, 60.00, 70.00, 62.00] },
        { x: new Date(2016, 1, 22), y: [62.00, 63.50, 61.00, 62.50] },
        { x: new Date(2016, 1, 23), y: [62.50, 73.00, 61.50, 70.00] },
        { x: new Date(2016, 1, 24), y: [70.00, 75.00, 69.00, 73.00] },
  
        // Additional data starts here
        { x: new Date(2016, 1, 25), y: [73.00, 80.00, 72.00, 78.00] },
        { x: new Date(2016, 1, 26), y: [78.00, 82.00, 77.00, 80.50] },
        { x: new Date(2016, 1, 27), y: [80.50, 85.00, 79.00, 82.00] },
        { x: new Date(2016, 1, 28), y: [82.00, 83.00, 81.00, 82.50] },
        { x: new Date(2016, 1, 29), y: [82.50, 88.00, 81.50, 85.00] },
        { x: new Date(2016, 2, 1), y: [85.00, 90.00, 84.00, 89.00] },
        { x: new Date(2016, 2, 2), y: [89.00, 95.00, 88.00, 92.00] },
        { x: new Date(2016, 2, 3), y: [92.00, 97.00, 91.00, 95.00] },
        { x: new Date(2016, 2, 4), y: [95.00, 100.00, 94.00, 99.00] },
        { x: new Date(2016, 2, 5), y: [99.00, 105.00, 98.00, 102.00] },
        { x: new Date(2016, 2, 6), y: [102.00, 108.00, 101.00, 106.00] },
        { x: new Date(2016, 2, 7), y: [106.00, 115.00, 105.00, 110.00] },
        { x: new Date(2016, 2, 8), y: [110.00, 120.00, 109.00, 115.00] },
        { x: new Date(2016, 2, 9), y: [115.00, 125.00, 114.00, 120.00] },
        { x: new Date(2016, 2, 10), y: [120.00, 130.00, 119.00, 125.00] },
        { x: new Date(2016, 2, 11), y: [125.00, 135.00, 124.00, 130.00] },
        { x: new Date(2016, 2, 12), y: [130.00, 140.00, 129.00, 135.00] },
        { x: new Date(2016, 2, 13), y: [135.00, 145.00, 134.00, 140.00] },
        { x: new Date(2016, 2, 14), y: [140.00, 150.00, 139.00, 145.00] },

        
      ],
    },
  ];
  

  const options = {
    chart: {
      type: "candlestick",
      height: 450,
      toolbar: {
        show: false, // Toolbar ko hide kiya
      },
      background: "transparent", 
    },
    grid: {
      borderColor: "#2a3146",
    },
    xaxis: {
      type: "datetime",
      labels: {
        style: {
          colors: theme.palette.textDark.main
        },
        datetimeFormatter: {
          hour: "HH:mm",
        },
      },
      axisBorder: {
        color: "#2a3146",
      },
      axisTicks: {
        color: "#2a3146",
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: theme.palette.textDark.main
        },
        formatter: (value) => value.toFixed(2),
      },
      axisBorder: {
        color: "#2a3146",
      },

    },
    plotOptions: {
      candlestick: {
        barWidth: "60%",
        colors: {
          upward: "#00D483", // Green for upward
          downward: "#EE5253", // Red for downward
        },
        wick: {
          useFillColor: true,
        },
      },
    },
  };

  return (
    <div id="chart" style={{transform:'translateY(-6%)', borderRadius:'10px', border:'1px solid #2a3146'}}>
      <ReactApexChart options={options} series={series} type="candlestick" height={360} />
    </div>
  );
}
