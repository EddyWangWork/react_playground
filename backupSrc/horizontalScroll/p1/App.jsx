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

  function successShow() {
    ToastUtility.show('Load successfully', 'Success', 2000);
  }

  function dangerShow(e) {
    ToastUtility.show(e, 'Error', 2000);
  }

  React.useEffect(() => {

  }, [])

  //-----DATA AREA-------------------------------//


  //-----DATAEND-------------------------------// 

  const keys = [1, 2, 3, 4, 5, 6];
  const cards = keys.map(elem => <li key={elem}> Test </li>);
  //-----END-------------------------------//

  return (
    <>
      <HScrollGrid
        gridWidth={400}
        gridHeight={100}
        cardWidth={100}
        backgroundColor="antiquewhite"
      >
        {cards}
      </HScrollGrid>

      <HScrollGrid
        gridWidth={700}
        gridHeight={100}
        cardWidth={200}
        backgroundColor="antiquewhite"
      >
        {cards}
      </HScrollGrid>

      <HScrollGrid
        gridWidth={1000}
        gridHeight={300}
        cardWidth={400}
        backgroundColor="#ecf2a7"
      >
        {cards}
      </HScrollGrid>
    </>
  )
}
;
export default App;

