import { ToastUtility } from '@syncfusion/ej2-react-notifications';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationDataLabel } from '@syncfusion/ej2-react-charts';
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

  function getTransactionGroupStat(dstypeid) {
    const SERVICE_URI = `https://localhost:7069/DS/GetTransactionGroupStat?dstypeid=${dstypeid}`;

    axios
      .get(`${SERVICE_URI}`)
      .then((response) => {
        console.log(response);

        var total = response.data.reduce((a, b) => a = a + b.amount, 0)
        console.log(total);

        response.data.map((v) => {
          v.per = ((v.amount / total) * 100).toFixed(2);
        })
        console.log(response.data);

        setData(response.data);
        successShow();
      })
      .catch(error => {
        console.log(error);
        dangerShow(`${error.message}: ${error.response?.data}`);
      });
  }

  const template = chartTemplate;
  const datalabel = { visible: true, name: 'text', position: 'Outside', template: template };
  function chartTemplate(args) {
    return (<div id="templateWrap">
      <div>{args.point.x}</div>
      <div>{args.point.y}%</div>
    </div>);
  }

  React.useEffect(() => {
    getTransactionGroupStat(2);
  }, [])

  return <AccumulationChartComponent id='charts' enableSmartLabels='true'>
    <Inject services={[AccumulationDataLabel]} />
    <AccumulationSeriesCollectionDirective>
      <AccumulationSeriesDirective dataSource={data} xName='dsItemName' yName='per' dataLabel={datalabel}></AccumulationSeriesDirective>
    </AccumulationSeriesCollectionDirective>
  </AccumulationChartComponent>;
}
;
export default App;