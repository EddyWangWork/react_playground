import { ToastUtility } from '@syncfusion/ej2-react-notifications';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, DateTime, Tooltip, DataLabel, LineSeries, Crosshair } from '@syncfusion/ej2-react-charts';
import axios from "axios";
import * as React from 'react';
import { useState } from "react";
import { Chrono } from "react-chrono";
import Slider from "react-slick";
import Moment from 'moment';

function App() {
  const [data1, setData] = useState([]);
  const [data2, setData2] = useState([]);

  function successShow() {
    ToastUtility.show('Load successfully', 'Success', 2000);
  }

  function dangerShow(e) {
    ToastUtility.show(e, 'Error', 2000);
  }

  const getTitlesApi = async () => {
    const SERVICE_URI = 'https://localhost:7069/WeatherForecast';

    axios
      .get(`${SERVICE_URI}`)
      .then((response) => {
        let titles = []
        response.data.map((v, i) => {
          let title = (Moment(v.date).format('DD-MM-yyyy dddd'));
          let cardTitle = `day:${i + 1}`;
          titles.push({ title: title, cardTitle: cardTitle })
        })
        setData2(titles);
        getCardInfo();
      })
      .catch(error => {
        dangerShow(error.response.data)
      });
  }

  function getCardInfo() {
    const SERVICE_URI = 'https://localhost:7069/WeatherForecast';

    axios
      .get(`${SERVICE_URI}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        successShow();
      })
      .catch(error => {
        dangerShow(error.response.data);
      });
  }

  React.useEffect(() => {
    getTitlesApi();
  }, [])

  //-----DATA AREA-------------------------------//

  const dummyData = [
    {
      "date": "2023-08-01T00:00:00",
      "tripDetailPartsDto": [
        {
          "tripDetailTypesInfo": [
            {
              "typeName": "Flight",
              "typeValue": [
                "KUL -> KLIA2 DEPART:1100"
              ]
            },
            {
              "typeName": "Breakfast",
              "typeValue": [
                "Nasi Lemak",
                "Nasi Lemak 2.0"
              ]
            },
            {
              "typeName": "Lunch",
              "typeValue": [
                "ABC Seafood"
              ]
            }
          ]
        },
        {
          "tripDetailTypesInfo": [
            {
              "typeName": "Dinner",
              "typeValue": [
                "West Kopitiam"
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2023-08-02T00:00:00",
      "tripDetailPartsDto": [
        {
          "tripDetailTypesInfo": [
            {
              "typeName": "Flight",
              "typeValue": [
                "-"
              ]
            },
            {
              "typeName": "Breakfast",
              "typeValue": [
                "Hotel"
              ]
            },
            {
              "typeName": "Lunch",
              "typeValue": [
                "DEF Seafood"
              ]
            }
          ]
        },
        {
          "tripDetailTypesInfo": [
            {
              "typeName": "Dinner",
              "typeValue": [
                "Wonderful"
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2023-08-03T00:00:00",
      "tripDetailPartsDto": [
        {
          "tripDetailTypesInfo": [
            {
              "typeName": "Flight",
              "typeValue": [
                "-"
              ]
            },
            {
              "typeName": "Breakfast",
              "typeValue": [
                "-"
              ]
            },
            {
              "typeName": "Lunch",
              "typeValue": [
                "Lunch day3"
              ]
            }
          ]
        },
        {
          "tripDetailTypesInfo": [
            {
              "typeName": "Dinner",
              "typeValue": [
                "Dinner 44"
              ]
            }
          ]
        }
      ]
    }
  ]

  //-----END-------------------------------//

  const getcard3 = () => {
    return data1.map((v, i) => (
      <div key={i}>
        {v.tripDetailPartsDto.map((v2, i) => (
          <div key={i} style={{ margin: `10px`, display: `flex`, flexDirection: `row`, justifyContent: `center` }}>
            <div className="e-card e-card-horizontal" style={{ width: `900px` }}>
              {v2.tripDetailTypesInfo.map((v3, i) => (
                <div key={i} className="e-card-stacked">
                  <div className="e-card-header">
                    <div className="e-card-header-caption">
                      <div className="e-card-header-title">{v3.typeName}</div>
                    </div>
                  </div>
                  <div className="e-card-content">
                    <ul className='ul2'>
                      {v3.typeValue.map((v4, i) => (
                        <li key={i}>{v4}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    ))
  }

  return (
    <div className="App">
      {
        data2.length > 0 ?
          <Chrono
            items={data2}
            mode="VERTICAL"
            slideShow
          >
            {getcard3()}
          </Chrono>
          :
          <h3>no data</h3>
      }
    </div>
  );
}
;
export default App;

