import { ToastUtility } from '@syncfusion/ej2-react-notifications';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, DateTime, Tooltip, DataLabel, LineSeries, Crosshair } from '@syncfusion/ej2-react-charts';
import axios from "axios";
import * as React from 'react';
import { useState } from "react";
import { Chrono } from "react-chrono";
import Slider from "react-slick";
import Moment from 'moment';

function App() {
  const [data, setData] = useState("");

  function successShow() {
    ToastUtility.show('Load successfully', 'Success', 2000);
  }

  function dangerShow(e) {
    ToastUtility.show(e, 'Error', 2000);
  }

  React.useEffect(() => {
    //getCardTitles();
  }, [])

  //-----DATA AREA-------------------------------//

  const datass = [
    {
      title: "25 July 1940",
      cardTitle: "The Battle of Britain",
    },
    {
      title: "June 1941 2",
      cardTitle: "Operation Barbarossa 2",
    },
    {
      title: "June 1941 3",
      cardTitle: "Operation Barbarossa 3",
    }];

  const dataCardTitles = [
    {
      "title": "01-08-2023 Tuesday",
      "cardTitle": "day:1"
    },
    {
      "title": "02-08-2023 Wednesday",
      "cardTitle": "day:2"
    },
    {
      "title": "03-08-2023 Thursday",
      "cardTitle": "day:3"
    },
    {
      "title": "04-08-2023 Friday",
      "cardTitle": "day:4"
    }
  ]
  const trip = [{ id: 1, name: 'Brazil', From: '2023-08-01', To: '2023-08-04' }];
  const tripDetailType = [{ id: 1, name: 'flight' }];
  const tripDetail = [{ id: 1, tripid: 1, tripdetailtypeid: 1, date: '2023-08-01', name: '2023-08-01 11:00 - Depart' }];
  const tripDetailDto = [
    {
      date: '2023-08-01',
      tripDetail: [
        {
          detailPart: [
            {
              tripcontName: 'flight',
              tripcontDetail: [
                { name: '2023-08-01 11:00 - Depart' },
                { name: '2023-08-01 14:00 - Arrived' }
              ]
            },
            {
              tripcontName: 'breakfast',
              tripcontDetail: [
                { name: 'West UN' },
                { name: 'Nasi bambom' }
              ]
            },
            {
              tripcontName: 'lunch',
              tripcontDetail: [
                { name: 'Mee goreng' }
              ]
            }
          ]
        },
        {
          detailPart: [
            {
              tripcontName: 'dinner',
              tripcontDetail: [
                { name: 'mee goreng 222' }
              ]
            }
          ]
        }
      ]
    },
    {
      date: '2023-08-02',
      tripDetail: [
        {
          detailPart: [
            {
              tripcontName: 'flight',
              tripcontDetail: [
                { name: '-' }
              ]
            },
            {
              tripcontName: 'breakfast',
              tripcontDetail: [
                { name: 'Hotel' },
                { name: 'Nasi lemak' }
              ]
            },
            {
              tripcontName: 'lunch',
              tripcontDetail: [
                { name: '-' }
              ]
            }
          ]
        },
        {
          detailPart: [
            {
              tripcontName: 'dinner',
              tripcontDetail: [
                { name: '-' }
              ]
            }
          ]
        }
      ]
    }
  ]

  //-----END-------------------------------//

  const getCardTitles = () => {
    const cardInfos = []
    const timeDifference = Math.abs(new Date(trip[0].To) - new Date(trip[0].From));
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); //3 days
    for (let i = 0; i < daysRemaining + 1; i++) {
      let cDate = new Date(trip[0].From);
      cDate.setDate(cDate.getDate() + i);
      let title = (Moment(cDate).format('DD-MM-yyyy dddd'));
      let cardTitle = `day:${i + 1}`
      cardInfos.push({ title: title, cardTitle: cardTitle })
    }
    console.log(cardInfos);
  }

  const getcard3 = () => {
    return tripDetailDto.map((v, i) => (
      <div key={i}>
        {v.tripDetail.map((v2, i) => (
          <div key={i} style={{ margin: `10px`, display: `flex`, flexDirection: `row`, justifyContent: `center` }}>
            <div className="e-card e-card-horizontal" style={{ width: `900px` }}>
              {v2.detailPart.map((v3, i) => (
                <div key={i} className="e-card-stacked">
                  <div className="e-card-header">
                    <div className="e-card-header-caption">
                      <div className="e-card-header-title">{v3.tripcontName}</div>
                    </div>
                  </div>
                  <div className="e-card-content">
                    <ul className='ul2'>
                      {v3.tripcontDetail.map((v4, i) => (
                        <li key={i}>{v4.name}</li>
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

  const cards = () => {
    return (
      <div style={{ margin: `10px`, display: `flex`, flexDirection: `row`, justifyContent: `center` }}>
        <div className="e-card e-card-horizontal" style={{ width: `900px` }}>
          <div className="e-card-stacked">
            <div className="e-card-header">
              <div className="e-card-header-caption">
                <div className="e-card-header-title">Philips Trimmer</div>
              </div>
            </div>
            <div className="e-card-content">
              <ul className='ul2'>
                <li>asdsddadsdsds1212d</li>
                <li>asdsdda23124dsdsdsd</li>
                <li>asds12412ddadsdsdsd</li>
                <li>asds12412ddadsdsdsd</li>
                <li>asds12412ddadsdsdsd</li>
                <li> <a href='google.com'>Google</a></li>
              </ul>
            </div>
          </div>

          <div className="e-card-stacked">
            <div className="e-card-header">
              <div className="e-card-header-caption">
                <div className="e-card-header-title">Philips Trimmer</div>
              </div>
            </div>
            <div className="e-card-content">
            </div>
          </div>

          <div className="e-card-stacked">
            <div className="e-card-header">
              <div className="e-card-header-caption">
                <div className="e-card-header-title">Philips Trimmer</div>
              </div>
            </div>
            <div className="e-card-content">
              Powered by the innovative DuraPower Technology which optimizes power consumption, Philips trimmers are designed to last longer
              than 4 ordinary trimmers.
            </div>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Chrono
        //items={datass}
        items={dataCardTitles}
        mode="VERTICAL"
        slideShow
      >
        {getcard3()}
      </Chrono>
    </div>
  );
}
;
export default App;

