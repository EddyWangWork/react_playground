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
import Layout2App from '../src/layout/Layout2App';
import Layout3App from '../src/layout/Layout3App';
import TabApp from '../src/tab/TabApp';
import ButtonLoaderApp from '../src/component/ButtonLoaderApp';
import ApexCharts from '../src/apexcharts/ApexCharts';
import TWTab from '../src/tailwindcss/TWTab';
import EGToast from '../src/evergreen/EGToast';
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
        <Route path="/" element={<ApexCharts />} />
        {/* <Route path="home" element={<TLApp />} />
        <Route path="food" element={<Food />} />
        <Route path="listbox" element={<LbApp />} />
        <Route path="layout" element={<Layout2App />} />
        <Route path="book" element={<TLBookApp />} />
        <Route path="tab" element={<TabApp />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
;
export default App;

