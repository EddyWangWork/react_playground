import Chart from "react-apexcharts";

function Donut() {

    const dataValue = {
        "name": [
            "Commitment",
            "Family",
            "Grocery",
            "EWallet",
            "Food",
            "Petrol",
            "Other",
            "Ikea",
            "Shopee",
            "Entertainment",
            "DIY",
            "Kitchen"
        ],
        "amount": [
            3168.72,
            906.42,
            878.60,
            600.00,
            345.90,
            171.74,
            151.55,
            114.30,
            89.71,
            55.00,
            21.60,
            12.0
        ]
    }


    let chartOptions = {
        options: {
            series: dataValue.amount,
            labels: dataValue.name,
            legend: {
                position: "left",
                // horizontalAlign: 'center',
                fontFamily: "Inter, sans-serif",
                fontSize: '11%',
                formatter: function (val, opts) {
                    return val + " - " + opts.w.globals.series[opts.seriesIndex]
                }
            },
            stroke: {
                colors: ["transparent"],
                lineCap: "",
            },
            dataLabels: {
                enabled: true
            },
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: true,
                            name: {
                                show: true,
                                fontFamily: "Inter, sans-serif",
                                offsetY: 20,
                            },
                            total: {
                                showAlways: true,
                                show: true,
                                label: "Unique visitors",
                                fontFamily: "Inter, sans-serif",
                                formatter: function (w) {
                                    const sum = w.globals.seriesTotals.reduce((a, b) => {
                                        return a + b
                                    }, 0)
                                    return `${sum}`
                                },
                            },
                            value: {
                                show: true,
                                fontFamily: "Inter, sans-serif",
                                offsetY: -20,
                                formatter: function (value) {
                                    return value
                                },
                            },
                        },
                        size: "80%",
                    },
                },
            }
        },
    };

    return (
        <Chart
            options={chartOptions.options}
            series={chartOptions.options.series}
            type="donut"
            width="500"
        />
    );
}
;
export default Donut;

