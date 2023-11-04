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
import { ListBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from "react-router-dom";
import $ from 'jquery';
import jQuery from 'jquery';
window.jQuery = jQuery;
window.$ = $;


function LbApp() {
    const [items, setItems] = useState([]);

    const navigate = useNavigate();

    const handleClick = event => {
        navigate("/home");
    };

    React.useEffect(() => {

    }, [])

    //-----DATA AREA-------------------------------//

    let groupA = [
        { "Name": "Australia", "Code": "AU" },
        { "Name": "Bermuda", "Code": "BM" },
        { "Name": "Canada", "Code": "CA" },
        { "Name": "Cameroon", "Code": "CM" },
        { "Name": "Denmark", "Code": "DK" },
        { "Name": "France", "Code": "FR" },
        { "Name": "Finland", "Code": "FI" },
        { "Name": "Germany", "Code": "DE" },
        { "Name": "Hong Kong", "Code": "HK" }
    ];
    let groupB = [
        { "Name": "India", "Code": "IN" },
        { "Name": "Italy", "Code": "IT" },
        { "Name": "Japan", "Code": "JP" },
        { "Name": "Mexico", "Code": "MX" },
        { "Name": "Norway", "Code": "NO" },
        { "Name": "Poland", "Code": "PL" },
        { "Name": "Switzerland", "Code": "CH" },
        { "Name": "United Kingdom", "Code": "GB" },
        { "Name": "United States", "Code": "US" }
    ];
    let fields = { text: "Name" };
    let toolbar = { items: ["moveUp", "moveDown", "moveTo", "moveFrom", "moveAllTo", "moveAllFrom"] };

    //-----DATAEND-------------------------------// 

    //-----END-------------------------------//

    return (
        <div className="rowC">
            <div className="listbox1">
                <ListBoxComponent dataSource={groupA} fields={fields} scope="#listbox" toolbarSettings={toolbar} /></div>
            <div className="listbox2">
                <ListBoxComponent id="listbox" dataSource={groupB} fields={fields} />
            </div>
        </div>
    );
}
;
export default LbApp;

