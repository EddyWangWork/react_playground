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
      <title>CodePen - Responsive Schedule of Events</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" />
      <link rel="stylesheet" href="./style.css" />
      {/* partial:index.partial.html */}
      <ul className="main">
        <li className="date">
          <h3>Dec 18</h3>
          <p>Schedule of Events</p>
        </li>
        <li className="events">
          <ul className="events-detail">
            <li>
              <a href="#">
                <span className="event-time">2:00pm - </span>
                <span className="event-name">Kickoff Ceremony</span>
                <br />
                <span className="event-location">Headquarters</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="event-time">2:00pm - </span>
                <span className="event-name">Kickoff Ceremony</span>
                <br />
                <span className="event-location">Headquarters</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="event-time">2:00pm - </span>
                <span className="event-name">Kickoff Ceremony</span>
                <br />
                <span className="event-location">Headquarters</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="event-time">2:00pm - </span>
                <span className="event-name">Kickoff Ceremony</span>
                <br />
                <span className="event-location">Headquarters</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="event-time">2:00pm - </span>
                <span className="event-name">Kickoff Ceremony</span>
                <br />
                <span className="event-location">Headquarters</span>
              </a>
            </li>
          </ul>
        </li>
        <li className="date">
          <h3>Dec 19</h3>
          <p>Schedule of Events</p>
        </li>
        <li className="events cf">
          <ul className="events-detail">
            <li>
              <a href="#">
                <span className="event-time">2:00pm - </span>
                <span className="event-name">Kickoff Ceremony</span>
                <br />
                <span className="event-location">Headquarters</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="event-time">2:00pm - </span>
                <span className="event-name">Kickoff Ceremony</span>
                <br />
                <span className="event-location">Headquarters</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="event-time">2:00pm - </span>
                <span className="event-name">Kickoff Ceremony</span>
                <br />
                <span className="event-location">Headquarters</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="event-time">2:00pm - </span>
                <span className="event-name">Kickoff Ceremony</span>
                <br />
                <span className="event-location">Headquarters</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="event-time">2:00pm - </span>
                <span className="event-name">Kickoff Ceremony</span>
                <br />
                <span className="event-location">Headquarters</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
      {/* partial */}
    </div>
  );
}
;
export default App;

