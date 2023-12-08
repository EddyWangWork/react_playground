import Chart from "react-apexcharts";

function APBar() {

    const dataValue = {
        credit: [
            6266.95,
            12906.95,
            8123.63,
            10290.32,
            1614.87,
            16056.54,
            8003.77,
            7984.51,
            10921.45,
            9489.69,
            0.00
        ],
        debit: [
            13578.34,
            8268.05,
            12945.82,
            11293.66,
            14119.98,
            11013.58,
            6515.54,
            8897.60,
            11274.89,
            7700.50,
            4962.44
        ],
        cashflow: [
            -7311.39,
            4638.90,
            -4822.19,
            -1003.34,
            -12505.11,
            5042.96,
            1488.23,
            -913.09,
            -353.44,
            1789.19,
            -4962.44
        ]
    }

    let chartOptions = {
        options: {
            series: [{
                name: 'Credit',
                data: dataValue.credit
            }, {
                name: 'Debit',
                data: dataValue.debit
            }, {
                name: 'Free Cash Flow',
                data: dataValue.cashflow
            }],
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Dec'],
            },
            yaxis: {
                title: {
                    text: '$'
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val
                    }
                }
            }
        },
    };

    return (
        <Chart
            options={chartOptions.options}
            series={chartOptions.options.series}
            type="bar"
            width="800"
        />
    );
}
;
export default APBar;

