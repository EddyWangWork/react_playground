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
import GridLayout from "react-grid-layout";

import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

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

  React.useEffect(() => {
    getEventsDates();
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

  const eventsdaysFinal = {};

  const eventsdays = [
    '2023-08-11',
    '2023-08-12',
    '2023-09-08',
  ]

  const getEventsDates = () => {

    scheduleList.map((v) => {
      v.sList.map((v2) => {
        eventsdaysFinal[v2.sDate] = [];
      })
    })

    // eventsdays.map((v) => {
    //   eventsdaysFinal[v] = [];
    // })

    window.eventDates = eventsdaysFinal;
  }

  const scheduleList = [
    {
      month: 'Aug',
      year: '2023',
      sList: [
        {
          sDate: '2023-08-11',
          sLocation: 'Brazil',
          sType: 'travel'
        },
        {
          sDate: '2023-08-12',
          sLocation: 'Brazil',
          sType: 'travel'
        },
        {
          sDate: '2023-08-13',
          sLocation: 'Brazil',
          sType: 'travel'
        },
      ]
    },
    {
      month: 'Sept',
      year: '2023',
      sList: [
        {
          sDate: '2023-09-08',
          sLocation: 'Italy',
          sType: 'travel'
        }
      ]
    },
  ] //$('#2023-08-11 .event-time').css("color", "blue")

  const getSchedule = () => {
    return (
      <ul className="main">
        {scheduleList.map((v) => {
          return <>
            <li className="date">
              <h3>{v.month}</h3>
              <p>{v.year}</p>
            </li>
            <li className="events">
              <ul className="events-detail">
                {v.sList.map((v2 => {
                  return <li id={v2.sDate}>
                    <a href="#">
                      <span className="event-time">{v2.sDate} - </span>
                      <span className="event-name">{v2.sLocation}</span>
                      <br />
                      <span className="event-location">{v2.sType}</span>
                    </a>
                  </li>
                }))}
              </ul>
            </li>
          </>
        })}
      </ul>
    )
  }

  //-----END-------------------------------//

  return (
    <div className="flex-container">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,800,900" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css" />
      <Helmet>
        <script type="text/javascript">
          {
            `            
            var eventDates = eventDates
            `
          }
        </script>
        {/* <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js'></script>
        <script src='https://cdn.jsdelivr.net/npm/flatpickr'></script> */}
        <script type="application/javascript" src={`./App.js`} />
      </Helmet>
      <div className='custom-scrollbar' style={{ maxHeight: '500px', overflowY: 'scroll' }}>
        {getSchedule()}
        {/* partial */}
      </div>
      <div>
        <div className="cal-modal-container">
          <div className="cal-modal">
            <h3>UPCOMING EVENTS</h3>
            <div id="calendar">
              <div className="placeholder" />
              <div className="calendar-events">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
;
export default App;

