import { ToastUtility } from '@syncfusion/ej2-react-notifications';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, DateTime, Tooltip, DataLabel, LineSeries, Crosshair } from '@syncfusion/ej2-react-charts';
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

  function GetYearStat2(year) {
    const SERVICE_URI = `https://localhost:7069/DS/GetYearStat2?year=${year}`;

    axios
      .get(`${SERVICE_URI}`)
      .then((response) => {
        console.log(response);
        console.log(response.data);

        var dataPush = [];

        response.data.map((v) => {

          var yearM = v.yearMonth;
          var amounts = [];

          v.items.map((v2) => {
            amounts.push(v2.amount);
          })
          dataPush.push({
            x: new Date(yearM),
            y: amounts[0],
            y1: amounts[1],
            y2: amounts[2],
            y3: amounts[3],
          })
        })

        console.log(dataPush);

        setData(dataPush);
        successShow();
      })
      .catch(error => {
        console.log(error);
        dangerShow(`${error.message}: ${error.response?.data}`);
      });
  }

  React.useEffect(() => {
    GetYearStat2(2023);
  }, [])

  let data2 = [
    { x: new Date(2016, 0, 1), y: 181, y1: 0, y1: 145 },
    { x: new Date(2016, 0, 2), y: 58, y1: 24, y1: 126 }
  ];

  const primaryxAxis = { valueType: 'DateTime', crosshairTooltip: { enable: true } };
  const primaryyAxis = { crosshairTooltip: { enable: true } };
  const crosshair = { enable: true };

  const marker = {
    visible: true
  };

  return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} crosshair={crosshair}>
    <Inject services={[LineSeries, Legend, Tooltip, DataLabel, Crosshair, DateTime]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={data} xName='x' yName='y' type='Line' marker={marker}>
      </SeriesDirective>
      <SeriesDirective dataSource={data} xName='x' yName='y1' type='Line' marker={marker}>
      </SeriesDirective>
      <SeriesDirective dataSource={data} xName='x' yName='y2' type='Line' marker={marker}>
      </SeriesDirective>
      <SeriesDirective dataSource={data} xName='x' yName='y3' type='Line' marker={marker}>
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>;
}
;
export default App;