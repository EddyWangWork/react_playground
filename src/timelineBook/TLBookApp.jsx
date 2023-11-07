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
        <div className='containerTest'>
            <meta charSet="UTF-8" />
            <title>CodePen - horizontal timeline</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css" />
            <Helmet>
                <script type="application/javascript" src="./TLBook/TLBookApp.js" />
            </Helmet>
            <div id='divImage' className='bg-fixed boxTest blur bg-contain bg-center imageStyle'>
            </div>
            <div class="boxTest overlayTest">
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
                                        <img hidden src="https://p4.itc.cn/images01/20210315/c981a1f3d9d44787bdcba9324be9d01d.jpeg" />
                                        <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white/60 dark:border-gray-700/15">
                                            <h2 className='text-[#E3A008]'>黄巾起义</h2>
                                            <em>建寧元年 168</em>
                                            <p>
                                                话说天下大势，分久必合，合久必分。周末七国分争，并入于秦。及秦灭之后，楚、汉分争，又并入于汉。汉朝自高祖斩白蛇而起义，一统天下，后来光武中兴，传至献帝，遂分为三国。推其致乱之由，殆始于桓、灵二帝。桓帝禁锢善类，崇信宦官。及桓帝崩，灵帝即位，大将军窦武、太傅陈蕃共相辅佐。时有宦官曹节等弄权，窦武、陈蕃谋诛之，机事不密，反为所害，中涓自此愈横。
                                            </p>
                                        </div>
                                    </li>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <li data-date="02/01/1900">
                                        <img hidden src="https://res.9game.cn/community/forum/202309/01/174440yo66fztbhztoda7r.jpg" />
                                        <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white/60 dark:border-gray-700/15">
                                            <h2 className='text-[#222c64]'>十常侍</h2>
                                            <em>建宁二年四月望日</em>
                                            <p>
                                                建宁二年四月望日，帝御温德殿。方升座，殿角狂风骤起。只见一条大青蛇，从梁上飞将下来，蟠于椅上。帝惊倒，左右急救入宫，百官俱奔避。须臾，蛇不见了。忽然大雷大雨，加以冰雹，落到半夜方止，坏却房屋无数。建宁四年二月，洛阳地震；又海水泛溢，沿海居民，尽被大浪卷入海中。光和元年，雌鸡化雄。六月朔，黑气十余丈，飞入温德殿中。秋七月，有虹现于玉堂；五原山岸，尽皆崩裂。种种不祥，非止一端。帝下诏问群臣以灾异之由，议郎蔡邕上疏，以为蜺堕鸡化，乃妇寺干政之所致，言颇切直。帝览奏叹息，因起更衣。曹节在后窃视，悉宣告左右；遂以他事陷邕于罪，放归田里。后张让、赵忠、封谞、段珪、曹节、侯览、蹇硕、程旷、夏恽、郭胜十人朋比为奸，号为“十常侍”。帝尊信张让，呼为“阿父”。朝政日非，以致天下人心思乱，盗贼蜂起。
                                            </p>
                                        </div>
                                    </li>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <li data-date="03/01/1900">
                                        <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white/60 dark:border-gray-700/15">
                                            <h2 className='text-[#205063]'>太平要术</h2>
                                            <img hidden src="https://pic.pimg.tw/vincecarter0315/1571125544-1876558789.png" />
                                            <em>张角,张宝,张梁</em>
                                            <p>
                                                时巨鹿郡有兄弟三人，一名张角，一名张宝，一名张梁。那张角本是个不第秀才，因入山采药，遇一老人，碧眼童颜，手执藜杖，唤角至一洞中，以天书三卷授之，曰：“此名《太平要术》，汝得之，当代天宣化，普救世人；若萌异心，必获恶报。”角拜问姓名。老人曰：“吾乃南华老仙也。”言讫，化阵清风而去。角得此书，晓夜攻习，能呼风唤雨，号为“太平道人”。中平元年正月内，疫气流行，张角散施符水，为人治病，自称“大贤良师”。角有徒弟五百余人，云游四方，皆能书符念咒。次后徒众日多，角乃立三十六方，大方万余人，小方六七千，各立渠帅，称为将军；讹言：“苍天已死，黄天当立；岁在甲子，天下大吉。”令人各以白土书“甲子”二字于家中大门上。青、幽、徐、冀、荆、扬、兖、豫八州之人，家家侍奉大贤良师张角名字。角遣其党马元义，暗赍金帛，结交中涓封谞，以为内应。角与二弟商议曰：“至难得者，民心也。今民心已顺，若不乘势取天下，诚为可惜。”遂一面私造黄旗，约期举事；一面使弟子唐周，驰书报封谞。唐周乃径赴省中告变。帝召大将军何进调兵擒马元义，斩之；次收封谞等一干人下狱。张角闻知事露，星夜举兵，自称“天公将军”，张宝称“地公将军”，张梁称“人公将军”。申言于众曰：“今汉运将终，大圣人出。汝等皆宜顺天从正，以乐太平。”四方百姓，裹黄巾从张角反者四五十万。贼势浩大，官军望风而靡。何进奏帝火速降诏，令各处备御，讨贼立功。一面遣中郎将卢植、皇甫嵩、朱儁，各引精兵、分三路讨之。
                                            </p>
                                        </div>
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
            </div>
            {/* partial */}
        </div>
    );
}
;
export default TLBookApp;

