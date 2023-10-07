import { ToastUtility } from '@syncfusion/ej2-react-notifications';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, DateTime, Tooltip, DataLabel, LineSeries, Crosshair } from '@syncfusion/ej2-react-charts';
import axios from "axios";
import * as React from 'react';
import { useRef, useState } from "react";
import { Chrono } from "react-chrono";
import Slider from "react-slick";
import Moment from 'moment';
import { Helmet } from "react-helmet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutus from '../src/aboutus/Aboutus';
import Food from '../src/foods/Food';
import TimelineApp from '../src/timeline/TimelineApp';
import HorizontalScroll from "react-scroll-horizontal";
import $ from 'jquery';
import jQuery from 'jquery';
window.jQuery = jQuery;
window.$ = $;


function App() {
  const [items, setItems] = useState([]);

  React.useEffect(() => {

  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Aboutus />} />
        <Route path="home" element={<TimelineApp />} />
      </Routes>
    </BrowserRouter>
  );
}
;
export default App;

