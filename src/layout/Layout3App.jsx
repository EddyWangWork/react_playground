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


function Layout3App() {
    const [dataA, setdataA] = useState([]);
    const [amountA, setamountA] = useState(1);
    const [amountB, setamountB] = useState(1);
    const [result, setresult] = useState([]);

    const [totalbudget, settotalbudget] = useState([]);
    const [totalexpenses, settotalexpenses] = useState([]);
    const [totalresult, settotalresult] = useState([]);

    React.useEffect(() => {
        getAmount();
    }, [])

    //-----DATA AREA-------------------------------//

    let dataBudget = [
        { 'date': '2023-01-01', 'amount': 7000 },
        { 'date': '2023-02-01', 'amount': 7500 },
        { 'date': '2023-03-01', 'amount': 7500 }
    ]

    let dataSource = [
        { 'date': '2023-01-01', "Name": "drink1", "Amount": 10 },
        { 'date': '2023-01-01', "Name": "drink2", "Amount": 20 },
        { 'date': '2023-01-01', "Name": "drink3", "Amount": 30 },
        { 'date': '2023-01-01', "Name": "drink4", "Amount": 40 },
        { 'date': '2023-01-01', "Name": "drink5", "Amount": 50 },

        { 'date': '2023-02-01', "Name": "food1", "Amount": 1000 },
        { 'date': '2023-02-01', "Name": "food2", "Amount": 1500 },
        { 'date': '2023-02-01', "Name": "food3", "Amount": 3500 },
        { 'date': '2023-02-01', "Name": "food4", "Amount": 4500 },
        { 'date': '2023-02-01', "Name": "food5", "Amount": 5500 },

        { 'date': '2023-03-01', "Name": "phone1", "Amount": 110 },
        { 'date': '2023-03-01', "Name": "phone2", "Amount": 120 },
        { 'date': '2023-03-01', "Name": "phone3", "Amount": 130 },
        { 'date': '2023-03-01', "Name": "phone4", "Amount": 140 },
        { 'date': '2023-03-01', "Name": "phone5", "Amount": 150 }
    ]

    const getAmount = () => {
        let result = [];
        dataBudget.map((v, k) => {
            var dataFilter = dataSource.filter((x) => x.date == v.date);
            var expenses = dataFilter.reduce((a, v) => a = a + v.Amount, 0);
            var total = v.amount - expenses;

            result.push({ 'date': v.date, 'budget': v.amount, 'expenses': expenses, 'total': total })
        })
        console.log(result);
        setresult(result);

        var totalbudget = result.reduce((a, v) => a = a + v.budget, 0);
        var totalexpenses = result.reduce((a, v) => a = a + v.expenses, 0);
        var totalresult = result.reduce((a, v) => a = a + v.total, 0);

        settotalbudget(totalbudget);
        settotalexpenses(totalexpenses);
        settotalresult(totalresult);
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
                                Month
                            </th>
                            <th scope="col" class="px-6 py-3 rounded-r-lg">
                                Budget
                            </th>
                            <th scope="col" class="px-6 py-3 rounded-l-lg">
                                Expenses
                            </th>
                            <th scope="col" class="px-6 py-3 rounded-l-lg">
                                Total
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {result.map((v, k) => {
                            return (
                                <tr key={k} class="bg-white dark:bg-gray-800">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {v.date}
                                    </th>
                                    <td class="px-6 py-4">
                                        {v.budget}
                                    </td>
                                    <td class="px-6 py-4">
                                        {v.expenses}
                                    </td>
                                    <td class="px-6 py-4">
                                        {v.total}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                    <tfoot>
                        <tr class="font-semibold text-gray-900 dark:text-white">
                            <th scope="row" class="px-6 py-3 text-xl">Total</th>
                            <td class="px-6 py-3">{totalbudget}</td>
                            <td class="px-6 py-3">{totalexpenses}</td>
                            <td class="px-6 py-3">{totalresult}</td>
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
                <div class="pl-10 col-span-2">{tableC()}</div>
            </div>
        </div>
    );
}
;
export default Layout3App;

