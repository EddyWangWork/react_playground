import Chart from "react-apexcharts";

function Donut() {

    let chartOptions = {
        options: {
            series: [44, 55, 13, 33],
            labels: ['Apple', 'Mango', 'Orange', 'Watermelon'],
            legend: {
                position: "bottom",
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
                                    return `${sum}k`
                                },
                            },
                            value: {
                                show: true,
                                fontFamily: "Inter, sans-serif",
                                offsetY: -20,
                                formatter: function (value) {
                                    return value + "k"
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
            width="350"
        />
    );
}
;
export default Donut;

