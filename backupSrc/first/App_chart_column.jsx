import { ToastUtility } from '@syncfusion/ej2-react-notifications';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, ColumnSeries } from '@syncfusion/ej2-react-charts';
import axios from "axios";
import * as React from 'react';
import { useState } from "react";

function App() {
  const [data, setData] = useState("");

  function successShow() {
    ToastUtility.show('Load successfully', 'Success', 2000);
  }

  function dangerShow(e) {
    ToastUtility.show(e, 'Error', 2000);
  }

  function GetYearStat(year) {
    const SERVICE_URI = `https://localhost:7069/DS/GetYearStat?year=${year}`;

    axios
      .get(`${SERVICE_URI}`)
      .then((response) => {
        console.log(response);

        var reassd = [];

        //reassd.push({ x: 'Education', y: 45, y1: 15, y2: 45, y3: 195 });

        response.data.map((v) => {
          reassd.push({
            x: v.dsItemName,
            y: +v.amounts[0].toFixed(0),
            y1: +v.amounts[1].toFixed(0),
            y2: +v.amounts[2].toFixed(0),
            y3: +v.amounts[3].toFixed(0),
          })
        })

        console.log(reassd);

        setData(reassd);
        successShow();
      })
      .catch(error => {
        console.log(error);
        dangerShow(`${error.message}: ${error.response?.data}`);
      });
  }

  // let chartData = [
  //   { x: 'Food', y: 90, y1: 40, y2: 70, y3: 120 },
  //   { x: 'Transport', y: 80, y1: 90, y2: 110, y3: 70 },
  //   { x: 'Medical', y: 50, y1: 80, y2: 120, y3: 50 },
  //   { x: 'Clothes', y: 70, y1: 30, y2: 60, y3: 180 },
  //   { x: 'Personal Care', y: 30, y1: 80, y2: 80, y3: 30 },
  //   { x: 'Books', y: 10, y1: 40, y2: 30, y3: 270 },
  //   { x: 'Fitness', y: 100, y1: 30, y2: 70, y3: 40 },
  //   { x: 'Electricity', y: 55, y1: 95, y2: 55, y3: 75 },
  //   { x: 'Tax', y: 20, y1: 50, y2: 40, y3: 65 },
  //   { x: 'Pet Care', y: 40, y1: 20, y2: 80, y3: 95 },
  //   { x: 'Education', y: 45, y1: 15, y2: 45, y3: 195 },
  //   { x: 'Entertainment', y: 75, y1: 45, y2: 65, y3: 115 }
  // ]

  let columnData = [
    { country: "USA", gold: 50, silver: 41 },
    { country: "China", gold: 40, silver: 45 },
    { country: "Japan", gold: 70, silver: 48 },
    { country: "Australia", gold: 60, silver: 50 },
    { country: "France", gold: 50, silver: 35 },
    { country: "Germany", gold: 40, silver: 28 },
    { country: "Italy", gold: 40, silver: 30 },
    { country: "Sweden", gold: 30, silver: 25 }
  ];

  React.useEffect(() => {
    GetYearStat(2023);
  }, [])

  const primaryxAxis = { valueType: 'Category', title: 'Countries' };
  const primaryyAxis = { minimum: 0, maximum: 200, interval: 20, title: 'Expenses' };

  return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Olympic Medals'>
    <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={data} xName='x' yName='y' name='Jan' type='Column'>
      </SeriesDirective>
      <SeriesDirective dataSource={data} xName='x' yName='y1' name='Feb' type='Column'>
      </SeriesDirective>
      <SeriesDirective dataSource={data} xName='x' yName='y2' name='Mar' type='Column'>
      </SeriesDirective>
      <SeriesDirective dataSource={data} xName='x' yName='y3' name='Apr' type='Column'>
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>;
}
;
export default App;