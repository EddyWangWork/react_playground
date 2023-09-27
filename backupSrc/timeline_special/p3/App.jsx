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

window.Swiper = Swiper;
window.jQuery = jQuery;
window.$ = $;



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
    <div>
      <meta charSet="UTF-8" />
      <title>CodePen - Responsive slider timeline with Swiper</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/css/swiper.min.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800" /><link rel="stylesheet" href="./style.css" />
      {/* partial:index.partial.html */}
      <div className="container">
        <h1 className="title">Responsive Slider Timeline</h1>
        <div className="timeline">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide" style={{ backgroundImage: 'url(https://unsplash.it/1920/500?image=11' }} data-year={2011}>
                <div className="swiper-slide-content"><span className="timeline-year">2011</span>
                  <h4 className="timeline-title">Our nice super title</h4>
                  <p className="timeline-text">Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
              <div className="swiper-slide" style={{ backgroundImage: 'url(https://unsplash.it/1920/500?image=12' }} data-year={2012}>
                <div className="swiper-slide-content"><span className="timeline-year">2012</span>
                  <h4 className="timeline-title">Our nice super title</h4>
                  <p className="timeline-text">Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
              <div className="swiper-slide" style={{ backgroundImage: 'url(https://unsplash.it/1920/500?image=13' }} data-year={2013}>
                <div className="swiper-slide-content"><span className="timeline-year">2013</span>
                  <h4 className="timeline-title">Our nice super title</h4>
                  <p className="timeline-text">Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
              <div className="swiper-slide" style={{ backgroundImage: 'url(https://unsplash.it/1920/500?image=14' }} data-year={2014}>
                <div className="swiper-slide-content"><span className="timeline-year">2014</span>
                  <h4 className="timeline-title">Our nice super title</h4>
                  <p className="timeline-text">Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
              <div className="swiper-slide" style={{ backgroundImage: 'url(https://unsplash.it/1920/500?image=15' }} data-year={2015}>
                <div className="swiper-slide-content"><span className="timeline-year">2015</span>
                  <h4 className="timeline-title">Our nice super title</h4>
                  <p className="timeline-text">Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
              <div className="swiper-slide" style={{ backgroundImage: 'url(https://unsplash.it/1920/500?image=16' }} data-year={2016}>
                <div className="swiper-slide-content"><span className="timeline-year">2016</span>
                  <h4 className="timeline-title">Our nice super title</h4>
                  <p className="timeline-text">Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
            </div>
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
            <div className="swiper-pagination" />
          </div>
        </div>
      </div>
      {/* partial */}
      <Helmet>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/js/swiper.min.js'></script>
        <script type="application/javascript" src={`./App.js`} />
      </Helmet>
    </div>
  );
}
;
export default App;

