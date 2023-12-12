import Chart from "react-apexcharts";

function APBar2() {

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
                data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
            }],
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                    'United States', 'China', 'Germany'
                ],
            }
        },
    };

    return (
        <Chart
            options={chartOptions.options}
            series={chartOptions.options.series}
            type="bar"
            width="500"
        />
    );
}
;
export default APBar2;

