import Chart from 'react-apexcharts';

const ApexChart = () => {
    const chartOptions = {
        chart: {
            height: 140,
            type: 'line',
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },
        stroke: {
            width: 2,
            curve: 'smooth',
        },
        grid: {
            show: false,
        },
        xaxis: {
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            show: false,
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                gradientToColors: ['#FDD835'],
                shadeIntensity: 1,
                type: 'horizontal',
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100],
            },
        },
    };

    const chartSeries = [
        {
            name: 'Sales',
            data: [4, 10, 4, 10],
        },
    ];

    return (
        <div
            style={{
                overflow: 'hidden', // Scrollbars کو ہٹانے کے لیے
                width: '100%',
                padding: 0,
                margin: 0,
            }}
        >
            <div
                id="chart"
                style={{
                    padding: 0,
                    margin: 0,
                }}
            >
                <Chart
                    options={chartOptions}
                    series={chartSeries}
                    type="line"
                    height={60}
                    width="100%" // Width کو فٹ کرنے کے لیے
                />
            </div>
            <div
                id="html-dist"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    marginTop: '-5px', // Unnecessary spacing کو کم کرنے کے لیے
                }}
            >
                <img src="/images/up.png" width={12} height={12} alt="Up icon" />
                <p style={{ fontSize: '12px', color: 'white', margin: 0 }}>+12,5%</p>
            </div>
        </div>
    );
};

export default ApexChart;
