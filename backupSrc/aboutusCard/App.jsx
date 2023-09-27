import { ToastUtility } from '@syncfusion/ej2-react-notifications';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, DateTime, Tooltip, DataLabel, LineSeries, Crosshair } from '@syncfusion/ej2-react-charts';
import axios from "axios";
import * as React from 'react';
import { useRef, useState } from "react";
import { Chrono } from "react-chrono";
import Slider from "react-slick";
import Moment from 'moment';
import { Helmet } from "react-helmet";
import HorizontalScroll from "react-scroll-horizontal";
import $ from 'jquery';
import jQuery from 'jquery';
window.jQuery = jQuery;
window.$ = $;


function App() {
  const [items, setItems] = useState([]);

  React.useEffect(() => {

  }, [])

  //-----DATA AREA-------------------------------//

  //-----DATAEND-------------------------------// 

  //-----END-------------------------------//

  return (
    <div className='bodyClass'>
      <meta charSet="UTF-8" />
      <title>CodePen - About Us Pop-Out Effect</title>
      {/* partial:index.partial.html */}
      <div className="person">
        <div className="container">
          <div className="container-inner">
            <img className="circle" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdMf-V_b-UwWA_ULn4gCLBvd0wjWUKr-fp2A&usqp=CAU' />
            <img className="img img1" src='./history.png' />
          </div>
        </div>
        <div className="divider" />
        <div className="name">Alma</div>
        <div className="title">Product Manager</div>
      </div>
      <div className="person">
        <div className="container">
          <div className="container-inner">
            <img className="circle" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlPZ3_HIGpo6bDRAzeJe5WY5f1GaPmVwF8Kg&usqp=CAU' />
            <img className="img img2" src='./food.png' />
          </div>
        </div>
        <div className="divider" />
        <div className="name">Irma</div>
        <div className="title">Senior Developer</div>
      </div>
      {/* partial */}
    </div>
  );
}
;
export default App;

