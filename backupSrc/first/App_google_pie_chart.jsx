import { ToastUtility } from '@syncfusion/ej2-react-notifications';
import axios from "axios";
import * as React from 'react';
import { useState } from "react";
import { Chart } from "react-google-charts";

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

        const resArray = [];
        resArray.push([`DS`, `USD`]);
        response.data.map((v, i) => {
          resArray.push([v.dsItemName, v.amount]);
        })
        console.log(resArray);
        setData(resArray);
        successShow();
      })
      .catch(error => {
        console.log(error);
        dangerShow(`${error.message}: ${error.response?.data}`);
      });
  }

  React.useEffect(() => {
    getTransactionGroupStat(2);
  }, [])

  const options = {
    title: "Expenses",
    is3D: true,
    pieSliceText: 'label',
    height: 500
  }

  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}
;
export default App;