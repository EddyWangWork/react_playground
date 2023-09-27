import { ToastUtility } from '@syncfusion/ej2-react-notifications';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, StackingColumnSeries } from '@syncfusion/ej2-react-charts';
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

  React.useEffect(() => {
    GetYearStat(2023);
  }, [])

  let stackColumndata = [
    { x: '2014', y: 111.1, y1: 76.9, y2: 66.1, y3: 34.1 },
    { x: '2015', y: 127.3, y1: 99.5, y2: 79.3, y3: 38.2 },
    { x: '2016', y: 143.4, y1: 121.7, y2: 91.3, y3: 44.0 },
    { x: '2017', y: 159.9, y1: 142.5, y2: 102.4, y3: 51.6 },
    { x: '2018', y: 175.4, y1: 166.7, y2: 112.9, y3: 61.9 },
    { x: '2019', y: 189.0, y1: 182.9, y2: 122.4, y3: 71.5 },
    { x: '2020', y: 202.7, y1: 197.3, y2: 120.9, y3: 82.0 }
  ];

  const primaryxAxis = { title: 'Years', interval: 1, valueType: 'Category' };
  const primaryyAxis = {
    title: 'Sales in Billions', minimum: 0, maximum: 500, interval: 50,
    labelFormat: '{value}B'
  };
  return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Mobile Game Market by Country'>
    <Inject services={[StackingColumnSeries, Legend, Tooltip, DataLabel, Category]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={data} xName='x' yName='y' name='Jan' type='StackingColumn'>
      </SeriesDirective>
      <SeriesDirective dataSource={data} xName='x' yName='y1' name='Feb' type='StackingColumn'>
      </SeriesDirective>
      <SeriesDirective dataSource={data} xName='x' yName='y2' name='Mar' type='StackingColumn'>
      </SeriesDirective>
      <SeriesDirective dataSource={data} xName='x' yName='y3' name='Apr' type='StackingColumn'>
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>;
}
;
export default App;