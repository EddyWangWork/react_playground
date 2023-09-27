import { ToastUtility } from '@syncfusion/ej2-react-notifications';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, DateTime, Tooltip, DataLabel, LineSeries, Crosshair } from '@syncfusion/ej2-react-charts';
import axios from "axios";
import * as React from 'react';
import { useState } from "react";
import { Chrono } from "react-chrono";
import Slider from "react-slick";
import Moment from 'moment';
import { Helmet } from "react-helmet";
import $ from 'jquery';
import jQuery from 'jquery';
import Swiper from 'swiper';
import _ from 'lodash';

window.Swiper = Swiper;
window.jQuery = jQuery;
window.$ = $;
window.moment = Moment;

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
    const SERVICE_URI = 'https://localhost:7069/Trip/getTripsV2';

    axios
      .get(`${SERVICE_URI}`)
      .then((response) => {
        console.log(response.data);
        let titles = []
        var firstTrip = response.data[0]
        firstTrip.tripDtos.map((v, i) => {
          let title = (Moment(v.date).format('DD-MM-yyyy dddd'));
          let cardTitle = `day:${i + 1}`;
          titles.push({ title: title, cardTitle: cardTitle })
        })
        setData2(titles);
        //getCardInfo();
      })
      .catch(error => {
        dangerShow(error.response.data)
      });
  }

  function getCardInfo() {
    const SERVICE_URI = 'https://localhost:7069/Trip/getTripsV2';

    axios
      .get(`${SERVICE_URI}`)
      .then((response) => {
        console.log(response.data);
        var firstTrip = response.data[0]
        console.log(firstTrip.tripDtos);
        setData(firstTrip.tripDtos);
        successShow();
      })
      .catch(error => {
        dangerShow(error.response.data);
      });
  }

  React.useEffect(() => {
    // getCardInfo();
    // getTitlesApi();
  }, [])

  //-----DATA AREA-------------------------------//

  const dummyData = [
    {
      "name": "Brazil",
      "tripDtos": [
        {
          "date": "2023-08-01T00:00:00",
          "tripDetailDtos": [
            {
              "tripDetailTypesInfo": [
                {
                  "typeName": "Flight",
                  "typeValue": [
                    "Depart:1200 - Arrived: 1500"
                  ]
                },
                {
                  "typeName": "Breakfast",
                  "typeValue": [
                    "-"
                  ]
                },
                {
                  "typeName": "Dinner",
                  "typeValue": [
                    "-"
                  ]
                }
              ]
            }
          ]
        },
        {
          "date": "2023-08-02T00:00:00",
          "tripDetailDtos": [
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
                  "typeName": "Dinner",
                  "typeValue": [
                    "-"
                  ]
                }
              ]
            }
          ]
        },
        {
          "date": "2023-08-03T00:00:00",
          "tripDetailDtos": [
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
                  "typeName": "Dinner",
                  "typeValue": [
                    "-"
                  ]
                }
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
        {v.tripDetailDtos.map((v2, i) => (
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
                      {v3.typeValues.map((v4, i) => {
                        // <li key={i}><a href={v4.typeVTypeLink} target='self'>{v4.typeValue}</a></li>
                        if (v4.typeVTypeLink != '') {
                          return <li key={i}><a href={v4.typeVTypeLink} target='self'>{v4.typeValue}</a></li>
                        }
                        else {
                          return <li key={i}>{v4.typeValue}</li>
                        }
                      })}
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
    <div>
      <meta charSet="UTF-8" />
      <title>CodePen - Demo: calendarize</title>
      {/* partial:index.partial.html */}
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap" rel="stylesheet" />
      <Helmet>
        <script type="application/javascript" src={`./App.js`} />
      </Helmet>
      <fieldset>
        <div className="input">
          <label htmlFor="lang">Language:</label>
          <select id="lang" defaultValue={'en'}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
          </select>
        </div>
        <div className="input">
          <label htmlFor="month">Month:</label>
          <select id="month" defaultValue={0}>
            <option value={0}>January</option>
            <option value={1}>February</option>
            <option value={2}>March</option>
            <option value={3}>April</option>
            <option value={4}>May</option>
            <option value={5}>June</option>
            <option value={6}>July</option>
            <option value={7}>August</option>
            <option value={8}>September</option>
            <option value={9}>October</option>
            <option value={10}>November</option>
            <option value={11}>December</option>
          </select>
          <input id="year" type="number" min={1900} max={2100} step={1} defaultValue={2019} />
        </div>
        <div className="input">
          <label htmlFor="offset">Week Start:</label>
          <select id="offset" defaultValue={0}>
            <option value={0}>Sunday</option>
            <option value={1}>Monday</option>
            <option value={2}>Tuesday</option>
            <option value={3}>Wednesday</option>
            <option value={4}>Thursday</option>
            <option value={5}>Friday</option>
            <option value={6}>Saturday</option>
          </select>
        </div>
      </fieldset>
      <div id="calendar">
        <div className="labels" />
        <div className="dates" />
      </div>
      <a id="github" href="https://github.com/lukeed/calendarize" target="_blank">GitHub</a>
      {/* partial */}
    </div>
  );
}
;
export default App;

