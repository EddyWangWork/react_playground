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
import './TLApp.css';
import $ from 'jquery';
import jQuery from 'jquery';
window.jQuery = jQuery;
window.$ = $;


function TLApp() {
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
                <script type="application/javascript" src="./TLApp3.js" />
                <script type="application/javascript" src="./TLApp2.js" />
                <script type="application/javascript" src="./TLApp.js" />
                {/* <script type="application/javascript" src="./TLApp2.js" /> */}
            </Helmet>
            <section className="cd-horizontal-timeline">
                <div className="timeline">
                    <div className="events-wrapper">
                        <div className="events">
                            <ol>
                                <li><a href="#0" data-date="16/01/2014" className="selected">16 Jan</a></li>
                                <li><a href="#0" data-date="28/02/2014">28 Feb</a></li>
                                <li><a href="#0" data-date="20/04/2014">20 Mar</a></li>
                                <li><a href="#0" data-date="20/05/2014">20 May</a></li>
                                <li><a href="#0" data-date="09/07/2014">09 Jul</a></li>
                                <li><a href="#0" data-date="30/08/2014">30 Aug</a></li>
                                <li><a href="#0" data-date="15/09/2014">15 Sep</a></li>
                                <li><a href="#0" data-date="01/11/2014">01 Nov</a></li>
                                <li><a href="#0" data-date="10/12/2014">10 Dec</a></li>
                                <li><a href="#0" data-date="19/01/2015">29 Jan</a></li>
                                <li><a href="#0" data-date="03/03/2015">3 Mar</a></li>
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
                                <li className="selected" data-date="16/01/2014">
                                    <h2>Horizontal Timeline</h2>
                                    <em>January 16th, 2014</em>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                                    </p>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li data-date="28/02/2014">
                                    <h2>Event title here</h2>
                                    <em>February 28th, 2014</em>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                                    </p>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li data-date="20/04/2014">
                                    <h2>Event title here</h2>
                                    <em>March 20th, 2014</em>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                                    </p>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li data-date="20/05/2014">
                                    <h2>Event title here</h2>
                                    <em>May 20th, 2014</em>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                                    </p>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li data-date="09/07/2014">
                                    <h2>Event title here</h2>
                                    <em>July 9th, 2014</em>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                                    </p>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li data-date="30/08/2014">
                                    <h2>Event title here</h2>
                                    <em>August 30th, 2014</em>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                                    </p>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li data-date="15/09/2014">
                                    <h2>Event title here</h2>
                                    <em>September 15th, 2014</em>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                                    </p>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li data-date="01/11/2014">
                                    <h2>Event title here</h2>
                                    <em>November 1st, 2014</em>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                                    </p>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li data-date="10/12/2014">
                                    <h2>Event title here</h2>
                                    <em>December 10th, 2014</em>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                                    </p>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li data-date="19/01/2015">
                                    <h2>Event title here</h2>
                                    <em>January 19th, 2015</em>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                                    </p>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li data-date="03/03/2015">
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
export default TLApp;

