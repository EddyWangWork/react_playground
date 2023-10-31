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
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import './TLBookApp.css';
import $ from 'jquery';
import jQuery from 'jquery';
window.jQuery = jQuery;
window.$ = $;


function TLBookApp() {
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
        <div>
            <meta charSet="UTF-8" />
            <title>CodePen - horizontal timeline</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css" />
            {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" /> */}
            {/* <link rel="stylesheet" href="./style.css" /> */}
            {/* partial:index.partial.html */}
            <Helmet>
                {/* <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/js/swiper.min.js"></script> */}
                {/* <script type="application/javascript" src="./TLApp/TLApp3.js" />
                <script type="application/javascript" src="./TLApp/TLApp2.js" /> */}
                {/* <script type="application/javascript" src="./TLApp/TLApp3.js" />
                <script type="application/javascript" src="./TLApp/TLApp2.js" /> */}
                <script type="application/javascript" src="./TLBook/TLBookApp.js" />
                {/* <script type="application/javascript" src="./TLApp2.js" /> */}
            </Helmet>
            <section className="cd-horizontal-timeline">
                <div className="timeline">
                    <div className="events-wrapper">
                        <div className="events">
                            <ol>
                                <li><a href="#0" data-date="01/01/1900" className="selected"><div>黄巾起义<br />(168年)</div></a></li>
                                <li><a href="#0" data-date="02/01/1900">28 Feb</a></li>
                                <li><a href="#0" data-date="03/01/1900">20 Mar</a></li>
                                <li><a href="#0" data-date="04/01/1900">20 May</a></li>
                                <li><a href="#0" data-date="05/01/1900">09 Jul</a></li>
                                <li><a href="#0" data-date="06/01/1900">30 Aug</a></li>
                                <li><a href="#0" data-date="07/01/1900">15 Sep</a></li>
                                <li><a href="#0" data-date="08/01/1900">01 Nov</a></li>
                                <li><a href="#0" data-date="09/01/1900">10 Dec</a></li>
                                <li><a href="#0" data-date="10/01/1900">29 Jan</a></li>
                                <li><a href="#0" data-date="11/01/1900">3 Mar</a></li>
                            </ol>
                            <span className="filling-line" aria-hidden="true" />
                        </div> {/* .events */}
                    </div> {/* .events-wrapper */}
                    <ul className="cd-timeline-navigation">
                        <li><a href="#0" className="prev inactive">Prev</a></li>
                        <li><a href="#0" className="next">Next</a></li>
                    </ul> {/* .cd-timeline-navigation */}
                </div> {/* .timeline */}
                <div className="events-content">
                    <ol>
                        <Swiper
                            className="mySwiper"
                            mousewheel={true}
                        >
                            <SwiperSlide>
                                <li className="selected" data-date="01/01/1900">
                                    <h2>黄巾起义</h2>
                                    <em>建寧元年 168</em>
                                    <p>
                                        话说天下大势，分久必合，合久必分。周末七国分争，并入于秦。及秦灭之后，楚、汉分争，又并入于汉。汉朝自高祖斩白蛇而起义，一统天下，后来光武中兴，传至献帝，遂分为三国。推其致乱之由，殆始于桓、灵二帝。桓帝禁锢善类，崇信宦官。及桓帝崩，灵帝即位，大将军窦武、太傅陈蕃共相辅佐。时有宦官曹节等弄权，窦武、陈蕃谋诛之，机事不密，反为所害，中涓自此愈横。
                                    </p>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li data-date="02/01/1900">
                                    <h2>Event title here</h2>
                                    <em>February 28th, 2014</em>
                                    <p>
                                        建宁二年四月望日，帝御温德殿。方升座，殿角狂风骤起。只见一条大青蛇，从梁上飞将下来，蟠于椅上。帝惊倒，左右急救入宫，百官俱奔避。须臾，蛇不见了。忽然大雷大雨，加以冰雹，落到半夜方止，坏却房屋无数。建宁四年二月，洛阳地震；又海水泛溢，沿海居民，尽被大浪卷入海中。光和元年，雌鸡化雄。六月朔，黑气十余丈，飞入温德殿中。秋七月，有虹现于玉堂；五原山岸，尽皆崩裂。种种不祥，非止一端。帝下诏问群臣以灾异之由，议郎蔡邕上疏，以为蜺堕鸡化，乃妇寺干政之所致，言颇切直。帝览奏叹息，因起更衣。曹节在后窃视，悉宣告左右；遂以他事陷邕于罪，放归田里。后张让、赵忠、封谞、段珪、曹节、侯览、蹇硕、程旷、夏恽、郭胜十人朋比为奸，号为“十常侍”。帝尊信张让，呼为“阿父”。朝政日非，以致天下人心思乱，盗贼蜂起。
                                    </p>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li data-date="03/01/1900">
                                    <h2>Event title here</h2>
                                    <em>March 20th, 2014</em>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                                    </p>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li data-date="04/01/1900">
                                    <h2>Event title here</h2>
                                    <em>May 20th, 2014</em>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                                    </p>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li data-date="05/01/1900">
                                    <h2>Event title here</h2>
                                    <em>July 9th, 2014</em>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                                    </p>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li data-date="06/01/1900">
                                    <h2>Event title here</h2>
                                    <em>August 30th, 2014</em>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                                    </p>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li data-date="07/01/1900">
                                    <h2>Event title here</h2>
                                    <em>September 15th, 2014</em>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                                    </p>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li data-date="08/01/1900">
                                    <h2>Event title here</h2>
                                    <em>November 1st, 2014</em>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                                    </p>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li data-date="09/01/1900">
                                    <h2>Event title here</h2>
                                    <em>December 10th, 2014</em>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                                    </p>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li data-date="10/01/1900">
                                    <h2>Event title here</h2>
                                    <em>January 19th, 2015</em>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                                    </p>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li data-date="11/01/1900">
                                    <h2>Event title here</h2>
                                    <em>March 3rd, 2015</em>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                                    </p>
                                </li>
                            </SwiperSlide>
                        </Swiper>
                    </ol>
                </div> {/* .events-content */}
            </section>
            {/* partial */}
        </div>
    );
}
;
export default TLBookApp;

