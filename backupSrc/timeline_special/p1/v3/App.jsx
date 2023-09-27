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

  const dataNav = [
    { name: '111' },
    { name: '222' },
    { name: '333' }
  ]

  const dataContent = [
    {
      imgName: 'https://media.gettyimages.com/id/515354418/photo/mustafa-kemal-atat%C3%BCrk-founder-of-the-turkish-republic-with-army-officers-3-6-1923-this-photo.jpg?s=612x612&w=0&k=20&c=NIkEewOibMR4ttX5uVsTaw97DgH24RWDUi4A8hnOmec=',
      dataT: '1881',
      title: '1881',
      desc: 'He was born in 1881 (probably in the spring) in Salonica, then an Ottoman city, now inGreece. His father Ali Riza, a customs official turned lumber merchant, died when Mustafawas still a boy. His mother Zubeyde, adevout and strong-willed woman, raised him and his sister.'
    },
    {
      imgName: 'http://gazetemanifesto.com/wp-content/uploads/2015/11/mustafa-kemal.jpg',
      dataT: '1893',
      title: '1893',
      desc: `First enrolled in a traditionalreligious school, he soon switched to a modern school. In 1893, he entered a military highschool where his mathematics teacher gave him the second name Kemal (meaning perfection)in recognition of young Mustafa's superior achievement.`
    },
    {
      imgName: 'https://media.gettyimages.com/id/515411614/photo/9-11-1926-constantinople-turkey-his-excellency-mustafa-kemal-pasha-head-of-the-turkish.jpg?s=612x612&w=0&k=20&c=L-XLm4HB1CI1wcPjLKkQkhai9px95L2kh9L9pspJZF8=',
      dataT: '1905',
      title: '1905',
      desc: `In 1905, Mustafa Kemal graduated from the War Academy in Istanbul with the rank of Staff Captain. Posted in Damascus, he started with several colleagues, a clandestinesociety called "Homeland and Freedom" to fight against the Sultan'sdespotism.`
    }
  ]

  const getNav = () => {
    return (
      <nav className="timeline__nav">
        <ul>
          {dataNav.map((v, i) => {
            return <li key={i}><span>{v.name}</span></li>
          })}
        </ul>
      </nav>
    )
  }

  const getContent = () => {
    return (
      <div className="timeline-container" id="timeline-1">
        <div className="timeline-header">
          <h2 className="timeline-header__title">Mustafa Kemal Atatürk</h2>
          <h3 className="timeline-header__subtitle">FATHER OF THE TURKS</h3>
        </div>
        <div className="timeline">
          {dataContent.map((v, i) => {
            return <div key={i} className="timeline-item" data-text={v.dataT}>
              <div className="timeline__content">
                <img className="timeline__img" src={v.imgName} />
                <h2 className="timeline__content-title">{v.title}</h2>
                <p className="timeline__content-desc">{v.desc}</p>
              </div>
            </div>
          })}
        </div>
      </div >
    )
  }

  //-----END-------------------------------//

  return (
    <div>
      <meta charSet="UTF-8" />
      <title>CodePen - timeline</title>
      {/* partial:index.partial.html */}
      <Helmet>
        <script type="application/javascript" src="./App.js" />
      </Helmet>
      {getNav()}
      {getContent()}
      <div className="demo-footer"><a href="http://www.turkishnews.com/Ataturk/life.htm" target="_blank">Source/Kaynak</a></div>
      {/* partial */}
    </div>
  );
}
;
export default App;

