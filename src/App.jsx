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
// import Food from '../src/foods/Food';
// import TimelineApp from '../src/timeline/TimelineApp';
// import StackedLine from '../src/chart/stackedLine';
// import CardApp from '../src/component/CardApp';
// import TLApp from '../src/timelineNew/TLApp';
// import TLBookApp from '../src/timelineBook/TLBookApp';
// import LbApp from '../src/listbox/LbApp';
// import LayoutApp from '../src/layout/LayoutApp';
// import Layout2App from '../src/layout/Layout2App';
// import Layout3App from '../src/layout/Layout3App';
// import TabApp from '../src/tab/TabApp';
// import ButtonLoaderApp from '../src/component/ButtonLoaderApp';
import ApexCharts from '../src/apexcharts/ApexCharts';
// import TWTab from '../src/tailwindcss/TWTab';
// import EGToast from '../src/evergreen/EGToast';
import NCard from '../src/next/NCard';
import NTable from '../src/next/NTable';
import NTable2 from '../src/next/NTable2';

import ELCard from '../src/elastic/ELCard';
import ELTabs from '../src/elastic/ELTabs';
import ELStat from '../src/elastic/ELStat';
import ELCombo from '../src/elastic/ELCombo';

import MATable from '../src/material/MATable';

// import MUICard from '../src/mui/MUICard';
// import SwiperApp from '../src/swiper/SwiperApp';
// import ProgressButtonApp from '../src/component/ProgressButtonApp';
// import HorizontalScroll from "react-scroll-horizontal";


function App() {
  const [items, setItems] = useState([]);

  React.useEffect(() => {

  }, [])

  return (
    <div class="grid grid-cols-1 gap-6 py-5">
      {/* <div class="pl-10"><MATable /></div> */}
      <div class="pl-10"><ELCombo /></div>
      {/* <div class="pl-10"><NTable2 /></div>
      <div class="pl-10"><NTable /></div>
      <div class="pl-10"><ELStat /></div>
      <div class="pl-10"><ELTabs /></div>
      <div class="pl-10"><ELCard /></div> */}
      {/* <div class="pl-10"><ApexCharts /></div> */}
    </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<MUICard />} />
    //     {/* <Route path="home" element={<TLApp />} />
    //     <Route path="food" element={<Food />} />
    //     <Route path="listbox" element={<LbApp />} />
    //     <Route path="layout" element={<Layout2App />} />
    //     <Route path="book" element={<TLBookApp />} />
    //     <Route path="tab" element={<TabApp />} /> */}
    //   </Routes>
    // </BrowserRouter>
  );
}
;
export default App;

