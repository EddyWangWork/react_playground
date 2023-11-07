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
// import Aboutus from '../src/aboutus/Aboutus';
import Food from '../src/foods/Food';
// import TimelineApp from '../src/timeline/TimelineApp';
// import StackedLine from '../src/chart/stackedLine';
// import CardApp from '../src/component/CardApp';
import TLApp from '../src/timelineNew/TLApp';
import TLBookApp from '../src/timelineBook/TLBookApp';
import LbApp from '../src/listbox/LbApp';
import LayoutApp from '../src/layout/LayoutApp';
// import SwiperApp from '../src/swiper/SwiperApp';
// import ProgressButtonApp from '../src/component/ProgressButtonApp';
// import HorizontalScroll from "react-scroll-horizontal";


function App() {
  const [items, setItems] = useState([]);

  React.useEffect(() => {

  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutApp />} />
        <Route path="home" element={<TLApp />} />
        <Route path="food" element={<Food />} />
        <Route path="listbox" element={<LbApp />} />
        <Route path="layout" element={<LayoutApp />} />
        <Route path="book" element={<TLBookApp />} />
      </Routes>
    </BrowserRouter>
  );
}
;
export default App;

