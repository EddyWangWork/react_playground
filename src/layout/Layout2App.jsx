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


function Layout2App() {
    let dataAInitial = [
        { "Name": "Australia", "type": 1 },
        { "Name": "Bermuda", "type": 1 },
        { "Name": "Canada", "type": 1 }
    ];
    let dataBInitial = [
        { "Name": "India", "type": 2 },
        { "Name": "Italy", "type": 2 }
    ];

    const [dataA, setdataA] = useState(dataAInitial);
    const [dataB, setdataB] = useState(dataBInitial);
    const [dataC, setdataC] = useState([...dataAInitial, ...dataBInitial]);
    const [amountA, setamountA] = useState(1);
    const [amountB, setamountB] = useState(1);

    let refA = useRef(null);
    let refB = useRef(null);

    React.useEffect(() => {
        getAmount();
        $('.e-listbox-tool').on("click", function () {
            getAmount();
        });
    }, [])

    //-----DATA AREA-------------------------------//

    let dataSource = [
        { "Name": "Australia", "Amount": 10 },
        { "Name": "Bermuda", "Amount": 20 },
        { "Name": "Canada", "Amount": 30 },
        { "Name": "India", "Amount": 40 },
        { "Name": "Italy", "Amount": 50 }
    ]

    let fields = { text: "Name" };
    let toolbar = { items: ["moveTo", "moveFrom", "moveAllTo", "moveAllFrom"] };

    /*asddddddddddddddddddddddddddddd*/

    const getAmount = () => {
        var arrayA = dataSource.filter((x) => refA.current.listData.some(y => y.Name === x.Name));
        var arrayB = dataSource.filter((x) => refB.current.listData.some(y => y.Name === x.Name));

        arrayA.map((v, k) => {
            v.type = 1;
        })

        arrayB.map((v, k) => {
            v.type = 2;
        })

        var arrayC = [...arrayA, ...arrayB].sort((a, b) => a.Name > b.Name ? 1 : -1);

        var totalA = arrayA.reduce((a, v) => a = a + v.Amount, 0)
        var totalB = arrayB.reduce((a, v) => a = a + v.Amount, 0)

        setdataA(arrayA);
        setdataB(arrayB)
        setdataC(arrayC)

        setamountA(totalA);
        setamountB(totalB);
    }

    const listboxA = () => {
        return (
            <div className="listbox1">
                <ListBoxComponent ref={refA} sortOrder={true} height={250} dataSource={dataA} fields={fields} scope="#listbox" toolbarSettings={toolbar} />
            </div>
        )
    }

    const listboxB = () => {
        return (
            <div className="listbox2 listbox1">
                <ListBoxComponent ref={refB} sortOrder={true} height={250} id="listbox" dataSource={dataB} fields={fields} />
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

    const tableC = () => {
        return (
            <div class="relative overflow-x-auto">
                <table class="w-full text-2xl text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-2xl text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3 rounded-l-lg">
                                Product name
                            </th>
                            <th scope="col" class="px-6 py-3 rounded-r-lg">
                                Price(A)
                            </th>
                            <th scope="col" class="px-6 py-3 rounded-l-lg">
                                Product name
                            </th>
                            <th scope="col" class="px-6 py-3 rounded-r-lg">
                                Price(B)
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataC.map((v, k) => {
                            return (
                                <tr key={k} class="bg-white dark:bg-gray-800">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {v.Name}
                                    </th>
                                    <td class="px-6 py-4">
                                        {dataSource.find(x => x.Name == v.Name && v.type == 1)?.Amount ?? 0}
                                    </td>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {v.Name}
                                    </th>
                                    <td class="px-6 py-4">
                                        {dataSource.find(x => x.Name == v.Name && v.type == 2)?.Amount ?? 0}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                    <tfoot>
                        <tr class="font-semibold text-gray-900 dark:text-white">
                            <th scope="row" class="px-6 py-3 text-xl">Total</th>
                            <td class="px-6 py-3">{amountA}</td>
                            <td></td>
                            <td class="px-6 py-3">{amountB}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }

    //-----DATAEND-------------------------------// 

    //-----END-------------------------------//

    return (
        <div>
            <div class="grid grid-cols-2 gap-6 py-5">
                <div class="pl-10 col-span-2">{box5()}</div>
                <div className=' pl-10'>{listboxA()}</div>
                <div>{listboxB()}</div>
                <div class="pl-10 col-span-2">{tableC()}</div>
                {/* <div class="pl-10 pr-24">{tableA()}</div>
                <div class="pr-10">{tableB()}</div> */}
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
export default Layout2App;

