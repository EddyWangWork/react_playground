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
import HScrollGrid from 'react-horizontal-scroll-grid';
import $ from 'jquery';
import jQuery from 'jquery';
window.jQuery = jQuery;
window.$ = $;


function App() {
  const [items, setItems] = useState([]);

  let refSarawak = useRef(null);

  let refRice = useRef(null);
  let refMee = useRef(null);
  let refMoi = useRef(null);


  function successShow() {
    ToastUtility.show('Load successfully', 'Success', 2000);
  }

  function dangerShow(e) {
    ToastUtility.show(e, 'Error', 2000);
  }

  React.useEffect(() => {
  }, [])

  /*Start*/



  //-----END-------------------------------//

  return (
    <div className="stories">
      <HorizontalScroll className="scroll" reverseScroll={true}>
        <div className="story">1</div>
        <div className="story">2</div>
        <div className="story">3</div>
        <div className="story">4</div>
        <div className="story">5</div>
        <div className="story">6</div>
        <div className="story">7</div>
        <div className="story">8</div>
        <div className="story">9</div>
        <div className="story">10</div>
        <div className="story">11</div>
        <div className="story">12</div>
        <div className="story">13</div>
        <div className="story">14</div>
        <div className="story">15</div>
        <div className="story">16</div>
        <div className="story">17</div>
      </HorizontalScroll>
    </div>
  );
}
;
export default App;

