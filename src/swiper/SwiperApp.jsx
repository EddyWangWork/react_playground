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
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from "react-router-dom";
import $ from 'jquery';
import jQuery from 'jquery';
window.jQuery = jQuery;
window.$ = $;


function SwiperApp() {
    const [items, setItems] = useState([]);

    const navigate = useNavigate();

    const handleClick = event => {
        navigate("/home");
    };

    React.useEffect(() => {

    }, [])

    //-----DATA AREA-------------------------------//

    //-----DATAEND-------------------------------// 

    //-----END-------------------------------//

    return (
        <Swiper className="mySwiper">
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
    );
}
;
export default SwiperApp;

