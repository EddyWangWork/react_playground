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
import { DashboardLayoutComponent } from '@syncfusion/ej2-react-layouts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from "react-router-dom";
import $ from 'jquery';
import jQuery from 'jquery';
window.jQuery = jQuery;
window.$ = $;


function LayoutApp() {
    const [countA, setcountA] = useState(1);
    const [countB, setcountB] = useState(1);
    const [amountA, setamountA] = useState(1);
    const [amountB, setamountB] = useState(1);

    let refA;
    let refB;

    const navigate = useNavigate();

    const handleClick = event => {
        navigate("/home");
    };

    React.useEffect(() => {
        $('.e-listbox-tool').on("click", function () {
            getAmount();
        });
    }, [])

    //-----DATA AREA-------------------------------//

    // let groupA = [
    //     { "Name": "Australia", "Code": "AU" },
    //     { "Name": "Bermuda", "Code": "BM" },
    //     { "Name": "Canada", "Code": "CA" },
    //     { "Name": "Cameroon", "Code": "CM" },
    //     { "Name": "Denmark", "Code": "DK" },
    //     { "Name": "France", "Code": "FR" },
    //     { "Name": "Finland", "Code": "FI" },
    //     { "Name": "Germany", "Code": "DE" },
    //     { "Name": "Hong Kong", "Code": "HK" }
    // ];
    // let groupB = [
    //     { "Name": "India", "Code": "IN" },
    //     { "Name": "Italy", "Code": "IT" },
    //     { "Name": "Japan", "Code": "JP" },
    //     { "Name": "Mexico", "Code": "MX" },
    //     { "Name": "Norway", "Code": "NO" },
    //     { "Name": "Poland", "Code": "PL" },
    //     { "Name": "Switzerland", "Code": "CH" },
    //     { "Name": "United Kingdom", "Code": "GB" },
    //     { "Name": "United States", "Code": "US" }
    // ];

    let dataSource = [
        { "Name": "Australia", "Amount": 10 },
        { "Name": "Bermuda", "Amount": 20 },
        { "Name": "Canada", "Amount": 30 },
        { "Name": "India", "Amount": 40 },
        { "Name": "Italy", "Amount": 50 }
    ]

    let groupA = [
        { "Name": "Australia" },
        { "Name": "Bermuda" },
        { "Name": "Canada" }
    ];
    let groupB = [
        { "Name": "India" },
        { "Name": "Italy" }
    ];
    let fields = { text: "Name" };
    let toolbar = { items: ["moveUp", "moveDown", "moveTo", "moveFrom", "moveAllTo", "moveAllFrom"] };

    /*asddddddddddddddddddddddddddddd*/

    const getAmount = () => {
        var arrayA = dataSource.filter((x) => groupA.some(y => y.Name === x.Name));
        var arrayB = dataSource.filter((x) => groupB.some(y => y.Name === x.Name));

        var totalA = arrayA.reduce((a, v) => a = a + v.Amount, 0)
        var totalB = arrayB.reduce((a, v) => a = a + v.Amount, 0)

        setcountA(arrayA.length);
        setamountA(totalA);

        setcountB(arrayB.length);
        setamountB(totalB);

        console.log('getAmount');
        console.log(refA);
        console.log(refA?.listData);
        console.log(refB?.listData);

        // console.log(countA);
        // console.log(countB);
        // console.log(totalA);
        // console.log(totalB);
    }

    const listboxA = () => {
        return (
            <div className="listbox1 pl-10">
                <ListBoxComponent ref={a => refA = a} height={250} dataSource={groupA} fields={fields} scope="#listbox" toolbarSettings={toolbar} />
            </div>
        )
    }

    const listboxB = () => {
        return (
            <div className="listbox2 listbox1 pr-10">
                <ListBoxComponent ref={a => refB = a} height={250} id="listbox" dataSource={groupB} fields={fields} />
                {/* <ListBoxComponent ref={b => refB = b} actionComplete={() => { getAmount() }} height={250} id="listbox" dataSource={groupB} fields={fields} /> */}
            </div>
        )
    }

    const box3 = () => {
        return (
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-2xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Value
                            </th>
                        </tr>
                    </thead>
                    <tbody class="text-xl">
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Item
                            </th>
                            <td class="px-6 py-4">
                                {countA}
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Total
                            </th>
                            <td class="px-6 py-4">
                                {amountA}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    const box4 = () => {
        return (
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-2xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Value
                            </th>
                        </tr>
                    </thead>
                    <tbody class="text-xl">
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Item
                            </th>
                            <td class="px-6 py-4">
                                {countB}
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Total
                            </th>
                            <td class="px-6 py-4">
                                {amountB}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    const box5 = () => {
        return (
            <div href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
        )
    }

    //-----DATAEND-------------------------------// 

    //-----END-------------------------------//

    return (
        <div>
            <div class="grid grid-cols-2 gap-6 py-5">
                <div class="pl-10 col-span-2">{box5()}</div>
                <div class="...">{listboxA()}</div>
                <div class="...">{listboxB()}</div>
                <div class="pl-10 pr-24">{box3()}</div>
                <div class="pr-10">{box4()}</div>
            </div>
        </div>




        // <div class="grid gap-4 grid-cols-2 grid-rows-3">
        //     <div class="col-span-full">{box5()}</div>
        //     <div>{listboxA()}</div>
        //     <div>{listboxB()}</div>
        //     <div className='pl-10 pr-24'>{box3()}</div>
        //     <div className='pr-10'>{box3()}</div>
        // </div>
    );
}
;
export default LayoutApp;

