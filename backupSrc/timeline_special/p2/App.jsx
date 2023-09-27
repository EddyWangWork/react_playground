import { ToastUtility } from '@syncfusion/ej2-react-notifications';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, DateTime, Tooltip, DataLabel, LineSeries, Crosshair } from '@syncfusion/ej2-react-charts';
import axios from "axios";
import * as React from 'react';
import { useState } from "react";
import { Chrono } from "react-chrono";
import Slider from "react-slick";
import Moment from 'moment';
import { Helmet } from "react-helmet";
import $ from 'jquery';
import jQuery from 'jquery';
window.jQuery = jQuery;
window.$ = $;


function App() {
  const [data1, setData] = useState([]);
  const [data2, setData2] = useState([]);

  function successShow() {
    ToastUtility.show('Load successfully', 'Success', 2000);
  }

  function dangerShow(e) {
    ToastUtility.show(e, 'Error', 2000);
  }

  const getTitlesApi = async () => {
    const SERVICE_URI = 'https://localhost:7069/WeatherForecast';

    axios
      .get(`${SERVICE_URI}`)
      .then((response) => {
        let titles = []
        response.data.map((v, i) => {
          let title = (Moment(v.date).format('DD-MM-yyyy dddd'));
          let cardTitle = `day:${i + 1}`;
          titles.push({ title: title, cardTitle: cardTitle })
        })
        setData2(titles);
        getCardInfo();
      })
      .catch(error => {
        dangerShow(error.response.data)
      });
  }

  function getCardInfo() {
    const SERVICE_URI = 'https://localhost:7069/WeatherForecast';

    axios
      .get(`${SERVICE_URI}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        successShow();
      })
      .catch(error => {
        dangerShow(error.response.data);
      });
  }

  React.useEffect(() => {
  }, [])

  return (
    <div>
      <meta charSet="UTF-8" />
      <title>CodePen - Scroll Timeline (jQuery)</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" /><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" />
      <link rel="stylesheet" href="./style.css" />
      {/* partial:index.partial.html */}
      <Helmet>
        <script type="application/javascript" src="./App.js" />
      </Helmet>
      <article className="timeline">
        <nav className="timeline__nav">
          <ul>
            <li><span>1993</span></li>
            <li><span>1994</span></li>
            <li><span>1995</span></li>
            <li><span>1996</span></li>
            <li><span>1997</span></li>
            <li><span>1998</span></li>
            <li><span>1999</span></li>
            <li><span>2000</span></li>
            <li><span>2001</span></li>
            <li><span>2002</span></li>
            <li><span>2003</span></li>
            <li><span>2004</span></li>
            <li><span>2005</span></li>
            <li><span>2006</span></li>
            <li><span>2007</span></li>
            <li><span>2008</span></li>
            <li><span>2009</span></li>
            <li><span>2010</span></li>
            <li><span>2011</span></li>
            <li><span>2012</span></li>
            <li><span>2013</span></li>
            <li><span>2014</span></li>
            <li><span>2015</span></li>
            <li><span>2016</span></li>
            <li><span>2017</span></li>
            <li><span>2018</span></li>
          </ul>
        </nav>
        <section className="timeline__section">
          <div className="wrapper">
            <h2 className="milestone">1993</h2>
            <p>По сути, стратегия позиционирования определяет рекламный макет. Маркетинговая активность отражает медиаплан, не считаясь с затратами. Общество потребления переворачивает ролевой поведенческий таргетинг.</p>
            <p>Рекламный блок, суммируя приведенные примеры, развивает межличностный отраслевой стандарт. Надо сказать, что бюджет на размещение изменяет из ряда вон выходящий креатив, отвоевывая рыночный сегмент. Баланс спроса и предложения интегрирована.</p>
            <p>Дело в том, что креатив ускоряет бренд. Бренд, на первый взгляд, многопланово создает имидж. Узнавание бренда, конечно, разнородно отталкивает институциональный клиентский спрос. Стимулирование сбыта, не меняя концепции, изложенной выше, спорадически уравновешивает фирменный рейтинг, повышая конкуренцию. Концепция новой стратегии оправдывает BTL.</p>
            <h2 className="milestone">1994</h2>
            <p>По сути, стратегия позиционирования определяет рекламный макет. Маркетинговая активность отражает медиаплан, не считаясь с затратами. Общество потребления переворачивает ролевой поведенческий таргетинг.</p>
            <p>Рекламный блок, суммируя приведенные примеры, развивает межличностный отраслевой стандарт. Надо сказать, что бюджет на размещение изменяет из ряда вон выходящий креатив, отвоевывая рыночный сегмент. Баланс спроса и предложения интегрирована.</p>
            <p>Дело в том, что креатив ускоряет бренд. Бренд, на первый взгляд, многопланово создает имидж. Узнавание бренда, конечно, разнородно отталкивает институциональный клиентский спрос. Стимулирование сбыта, не меняя концепции, изложенной выше, спорадически уравновешивает фирменный рейтинг, повышая конкуренцию. Концепция новой стратегии оправдывает BTL.</p>
            <h2 className="milestone">1995</h2>
            <p>По сути, стратегия позиционирования определяет рекламный макет. Маркетинговая активность отражает медиаплан, не считаясь с затратами. Общество потребления переворачивает ролевой поведенческий таргетинг.</p>
            <p>Рекламный блок, суммируя приведенные примеры, развивает межличностный отраслевой стандарт. Надо сказать, что бюджет на размещение изменяет из ряда вон выходящий креатив, отвоевывая рыночный сегмент. Баланс спроса и предложения интегрирована.</p>
            <p>Дело в том, что креатив ускоряет бренд. Бренд, на первый взгляд, многопланово создает имидж. Узнавание бренда, конечно, разнородно отталкивает институциональный клиентский спрос. Стимулирование сбыта, не меняя концепции, изложенной выше, спорадически уравновешивает фирменный рейтинг, повышая конкуренцию. Концепция новой стратегии оправдывает BTL.</p>
            <h2 className="milestone">1996</h2>
            <p>По сути, стратегия позиционирования определяет рекламный макет. Маркетинговая активность отражает медиаплан, не считаясь с затратами. Общество потребления переворачивает ролевой поведенческий таргетинг.</p>
            <p>Рекламный блок, суммируя приведенные примеры, развивает межличностный отраслевой стандарт. Надо сказать, что бюджет на размещение изменяет из ряда вон выходящий креатив, отвоевывая рыночный сегмент. Баланс спроса и предложения интегрирована.</p>
            <p>Дело в том, что креатив ускоряет бренд. Бренд, на первый взгляд, многопланово создает имидж. Узнавание бренда, конечно, разнородно отталкивает институциональный клиентский спрос. Стимулирование сбыта, не меняя концепции, изложенной выше, спорадически уравновешивает фирменный рейтинг, повышая конкуренцию. Концепция новой стратегии оправдывает BTL.</p>
            <h2 className="milestone">1997</h2>
            <p>По сути, стратегия позиционирования определяет рекламный макет. Маркетинговая активность отражает медиаплан, не считаясь с затратами. Общество потребления переворачивает ролевой поведенческий таргетинг.</p>
            <p>Рекламный блок, суммируя приведенные примеры, развивает межличностный отраслевой стандарт. Надо сказать, что бюджет на размещение изменяет из ряда вон выходящий креатив, отвоевывая рыночный сегмент. Баланс спроса и предложения интегрирована.</p>
            <p>Дело в том, что креатив ускоряет бренд. Бренд, на первый взгляд, многопланово создает имидж. Узнавание бренда, конечно, разнородно отталкивает институциональный клиентский спрос. Стимулирование сбыта, не меняя концепции, изложенной выше, спорадически уравновешивает фирменный рейтинг, повышая конкуренцию. Концепция новой стратегии оправдывает BTL.</p>
            <h2 className="milestone">1998</h2>
            <p>По сути, стратегия позиционирования определяет рекламный макет. Маркетинговая активность отражает медиаплан, не считаясь с затратами. Общество потребления переворачивает ролевой поведенческий таргетинг.</p>
            <p>Рекламный блок, суммируя приведенные примеры, развивает межличностный отраслевой стандарт. Надо сказать, что бюджет на размещение изменяет из ряда вон выходящий креатив, отвоевывая рыночный сегмент. Баланс спроса и предложения интегрирована.</p>
            <p>Дело в том, что креатив ускоряет бренд. Бренд, на первый взгляд, многопланово создает имидж. Узнавание бренда, конечно, разнородно отталкивает институциональный клиентский спрос. Стимулирование сбыта, не меняя концепции, изложенной выше, спорадически уравновешивает фирменный рейтинг, повышая конкуренцию. Концепция новой стратегии оправдывает BTL.</p>
            <h2 className="milestone">1999</h2>
            <p>По сути, стратегия позиционирования определяет рекламный макет. Маркетинговая активность отражает медиаплан, не считаясь с затратами. Общество потребления переворачивает ролевой поведенческий таргетинг.</p>
            <p>Рекламный блок, суммируя приведенные примеры, развивает межличностный отраслевой стандарт. Надо сказать, что бюджет на размещение изменяет из ряда вон выходящий креатив, отвоевывая рыночный сегмент. Баланс спроса и предложения интегрирована.</p>
            <p>Дело в том, что креатив ускоряет бренд. Бренд, на первый взгляд, многопланово создает имидж. Узнавание бренда, конечно, разнородно отталкивает институциональный клиентский спрос. Стимулирование сбыта, не меняя концепции, изложенной выше, спорадически уравновешивает фирменный рейтинг, повышая конкуренцию. Концепция новой стратегии оправдывает BTL.</p>
            <h2 className="milestone">2000</h2>
            <p>По сути, стратегия позиционирования определяет рекламный макет. Маркетинговая активность отражает медиаплан, не считаясь с затратами. Общество потребления переворачивает ролевой поведенческий таргетинг.</p>
            <p>Рекламный блок, суммируя приведенные примеры, развивает межличностный отраслевой стандарт. Надо сказать, что бюджет на размещение изменяет из ряда вон выходящий креатив, отвоевывая рыночный сегмент. Баланс спроса и предложения интегрирована.</p>
            <p>Дело в том, что креатив ускоряет бренд. Бренд, на первый взгляд, многопланово создает имидж. Узнавание бренда, конечно, разнородно отталкивает институциональный клиентский спрос. Стимулирование сбыта, не меняя концепции, изложенной выше, спорадически уравновешивает фирменный рейтинг, повышая конкуренцию. Концепция новой стратегии оправдывает BTL.</p>
            <h2 className="milestone">2001</h2>
            <p>По сути, стратегия позиционирования определяет рекламный макет. Маркетинговая активность отражает медиаплан, не считаясь с затратами. Общество потребления переворачивает ролевой поведенческий таргетинг.</p>
            <p>Рекламный блок, суммируя приведенные примеры, развивает межличностный отраслевой стандарт. Надо сказать, что бюджет на размещение изменяет из ряда вон выходящий креатив, отвоевывая рыночный сегмент. Баланс спроса и предложения интегрирована.</p>
            <p>Дело в том, что креатив ускоряет бренд. Бренд, на первый взгляд, многопланово создает имидж. Узнавание бренда, конечно, разнородно отталкивает институциональный клиентский спрос. Стимулирование сбыта, не меняя концепции, изложенной выше, спорадически уравновешивает фирменный рейтинг, повышая конкуренцию. Концепция новой стратегии оправдывает BTL.</p>
            <h2 className="milestone">2002</h2>
            <p>По сути, стратегия позиционирования определяет рекламный макет. Маркетинговая активность отражает медиаплан, не считаясь с затратами. Общество потребления переворачивает ролевой поведенческий таргетинг.</p>
            <p>Рекламный блок, суммируя приведенные примеры, развивает межличностный отраслевой стандарт. Надо сказать, что бюджет на размещение изменяет из ряда вон выходящий креатив, отвоевывая рыночный сегмент. Баланс спроса и предложения интегрирована.</p>
            <p>Дело в том, что креатив ускоряет бренд. Бренд, на первый взгляд, многопланово создает имидж. Узнавание бренда, конечно, разнородно отталкивает институциональный клиентский спрос. Стимулирование сбыта, не меняя концепции, изложенной выше, спорадически уравновешивает фирменный рейтинг, повышая конкуренцию. Концепция новой стратегии оправдывает BTL.</p>
            <h2 className="milestone">2003</h2>
            <p>По сути, стратегия позиционирования определяет рекламный макет. Маркетинговая активность отражает медиаплан, не считаясь с затратами. Общество потребления переворачивает ролевой поведенческий таргетинг.</p>
            <p>Рекламный блок, суммируя приведенные примеры, развивает межличностный отраслевой стандарт. Надо сказать, что бюджет на размещение изменяет из ряда вон выходящий креатив, отвоевывая рыночный сегмент. Баланс спроса и предложения интегрирована.</p>
            <p>Дело в том, что креатив ускоряет бренд. Бренд, на первый взгляд, многопланово создает имидж. Узнавание бренда, конечно, разнородно отталкивает институциональный клиентский спрос. Стимулирование сбыта, не меняя концепции, изложенной выше, спорадически уравновешивает фирменный рейтинг, повышая конкуренцию. Концепция новой стратегии оправдывает BTL.</p>
            <h2 className="milestone">2004</h2>
            <p>По сути, стратегия позиционирования определяет рекламный макет. Маркетинговая активность отражает медиаплан, не считаясь с затратами. Общество потребления переворачивает ролевой поведенческий таргетинг.</p>
            <p>Рекламный блок, суммируя приведенные примеры, развивает межличностный отраслевой стандарт. Надо сказать, что бюджет на размещение изменяет из ряда вон выходящий креатив, отвоевывая рыночный сегмент. Баланс спроса и предложения интегрирована.</p>
            <p>Дело в том, что креатив ускоряет бренд. Бренд, на первый взгляд, многопланово создает имидж. Узнавание бренда, конечно, разнородно отталкивает институциональный клиентский спрос. Стимулирование сбыта, не меняя концепции, изложенной выше, спорадически уравновешивает фирменный рейтинг, повышая конкуренцию. Концепция новой стратегии оправдывает BTL.</p>
            <h2 className="milestone">2005</h2>
            <p>По сути, стратегия позиционирования определяет рекламный макет. Маркетинговая активность отражает медиаплан, не считаясь с затратами. Общество потребления переворачивает ролевой поведенческий таргетинг.</p>
            <p>Рекламный блок, суммируя приведенные примеры, развивает межличностный отраслевой стандарт. Надо сказать, что бюджет на размещение изменяет из ряда вон выходящий креатив, отвоевывая рыночный сегмент. Баланс спроса и предложения интегрирована.</p>
            <p>Дело в том, что креатив ускоряет бренд. Бренд, на первый взгляд, многопланово создает имидж. Узнавание бренда, конечно, разнородно отталкивает институциональный клиентский спрос. Стимулирование сбыта, не меняя концепции, изложенной выше, спорадически уравновешивает фирменный рейтинг, повышая конкуренцию. Концепция новой стратегии оправдывает BTL.</p>
            <h2 className="milestone">2006</h2>
            <p>По сути, стратегия позиционирования определяет рекламный макет. Маркетинговая активность отражает медиаплан, не считаясь с затратами. Общество потребления переворачивает ролевой поведенческий таргетинг.</p>
            <p>Рекламный блок, суммируя приведенные примеры, развивает межличностный отраслевой стандарт. Надо сказать, что бюджет на размещение изменяет из ряда вон выходящий креатив, отвоевывая рыночный сегмент. Баланс спроса и предложения интегрирована.</p>
            <p>Дело в том, что креатив ускоряет бренд. Бренд, на первый взгляд, многопланово создает имидж. Узнавание бренда, конечно, разнородно отталкивает институциональный клиентский спрос. Стимулирование сбыта, не меняя концепции, изложенной выше, спорадически уравновешивает фирменный рейтинг, повышая конкуренцию. Концепция новой стратегии оправдывает BTL.</p>
            <h2 className="milestone">2007</h2>
            <p>По сути, стратегия позиционирования определяет рекламный макет. Маркетинговая активность отражает медиаплан, не считаясь с затратами. Общество потребления переворачивает ролевой поведенческий таргетинг.</p>
            <p>Рекламный блок, суммируя приведенные примеры, развивает межличностный отраслевой стандарт. Надо сказать, что бюджет на размещение изменяет из ряда вон выходящий креатив, отвоевывая рыночный сегмент. Баланс спроса и предложения интегрирована.</p>
            <p>Дело в том, что креатив ускоряет бренд. Бренд, на первый взгляд, многопланово создает имидж. Узнавание бренда, конечно, разнородно отталкивает институциональный клиентский спрос. Стимулирование сбыта, не меняя концепции, изложенной выше, спорадически уравновешивает фирменный рейтинг, повышая конкуренцию. Концепция новой стратегии оправдывает BTL.</p>
            <h2 className="milestone">2008</h2>
            <p>По сути, стратегия позиционирования определяет рекламный макет. Маркетинговая активность отражает медиаплан, не считаясь с затратами. Общество потребления переворачивает ролевой поведенческий таргетинг.</p>
            <p>Рекламный блок, суммируя приведенные примеры, развивает межличностный отраслевой стандарт. Надо сказать, что бюджет на размещение изменяет из ряда вон выходящий креатив, отвоевывая рыночный сегмент. Баланс спроса и предложения интегрирована.</p>
            <p>Дело в том, что креатив ускоряет бренд. Бренд, на первый взгляд, многопланово создает имидж. Узнавание бренда, конечно, разнородно отталкивает институциональный клиентский спрос. Стимулирование сбыта, не меняя концепции, изложенной выше, спорадически уравновешивает фирменный рейтинг, повышая конкуренцию. Концепция новой стратегии оправдывает BTL.</p>
            <h2 className="milestone">2009</h2>
            <p>По сути, стратегия позиционирования определяет рекламный макет. Маркетинговая активность отражает медиаплан, не считаясь с затратами. Общество потребления переворачивает ролевой поведенческий таргетинг.</p>
            <p>Рекламный блок, суммируя приведенные примеры, развивает межличностный отраслевой стандарт. Надо сказать, что бюджет на размещение изменяет из ряда вон выходящий креатив, отвоевывая рыночный сегмент. Баланс спроса и предложения интегрирована.</p>
            <p>Дело в том, что креатив ускоряет бренд. Бренд, на первый взгляд, многопланово создает имидж. Узнавание бренда, конечно, разнородно отталкивает институциональный клиентский спрос. Стимулирование сбыта, не меняя концепции, изложенной выше, спорадически уравновешивает фирменный рейтинг, повышая конкуренцию. Концепция новой стратегии оправдывает BTL.</p>
            <h2 className="milestone">2010</h2>
            <p>По сути, стратегия позиционирования определяет рекламный макет. Маркетинговая активность отражает медиаплан, не считаясь с затратами. Общество потребления переворачивает ролевой поведенческий таргетинг.</p>
            <p>Рекламный блок, суммируя приведенные примеры, развивает межличностный отраслевой стандарт. Надо сказать, что бюджет на размещение изменяет из ряда вон выходящий креатив, отвоевывая рыночный сегмент. Баланс спроса и предложения интегрирована.</p>
            <p>Дело в том, что креатив ускоряет бренд. Бренд, на первый взгляд, многопланово создает имидж. Узнавание бренда, конечно, разнородно отталкивает институциональный клиентский спрос. Стимулирование сбыта, не меняя концепции, изложенной выше, спорадически уравновешивает фирменный рейтинг, повышая конкуренцию. Концепция новой стратегии оправдывает BTL.</p>
            <h2 className="milestone">2011</h2>
            <p>По сути, стратегия позиционирования определяет рекламный макет. Маркетинговая активность отражает медиаплан, не считаясь с затратами. Общество потребления переворачивает ролевой поведенческий таргетинг.</p>
            <p>Рекламный блок, суммируя приведенные примеры, развивает межличностный отраслевой стандарт. Надо сказать, что бюджет на размещение изменяет из ряда вон выходящий креатив, отвоевывая рыночный сегмент. Баланс спроса и предложения интегрирована.</p>
            <p>Дело в том, что креатив ускоряет бренд. Бренд, на первый взгляд, многопланово создает имидж. Узнавание бренда, конечно, разнородно отталкивает институциональный клиентский спрос. Стимулирование сбыта, не меняя концепции, изложенной выше, спорадически уравновешивает фирменный рейтинг, повышая конкуренцию. Концепция новой стратегии оправдывает BTL.</p>
            <h2 className="milestone">2012</h2>
            <p>По сути, стратегия позиционирования определяет рекламный макет. Маркетинговая активность отражает медиаплан, не считаясь с затратами. Общество потребления переворачивает ролевой поведенческий таргетинг.</p>
            <p>Рекламный блок, суммируя приведенные примеры, развивает межличностный отраслевой стандарт. Надо сказать, что бюджет на размещение изменяет из ряда вон выходящий креатив, отвоевывая рыночный сегмент. Баланс спроса и предложения интегрирована.</p>
            <p>Дело в том, что креатив ускоряет бренд. Бренд, на первый взгляд, многопланово создает имидж. Узнавание бренда, конечно, разнородно отталкивает институциональный клиентский спрос. Стимулирование сбыта, не меняя концепции, изложенной выше, спорадически уравновешивает фирменный рейтинг, повышая конкуренцию. Концепция новой стратегии оправдывает BTL.</p>
            <h2 className="milestone">2013</h2>
            <p>По сути, стратегия позиционирования определяет рекламный макет. Маркетинговая активность отражает медиаплан, не считаясь с затратами. Общество потребления переворачивает ролевой поведенческий таргетинг.</p>
            <p>Рекламный блок, суммируя приведенные примеры, развивает межличностный отраслевой стандарт. Надо сказать, что бюджет на размещение изменяет из ряда вон выходящий креатив, отвоевывая рыночный сегмент. Баланс спроса и предложения интегрирована.</p>
            <p>Дело в том, что креатив ускоряет бренд. Бренд, на первый взгляд, многопланово создает имидж. Узнавание бренда, конечно, разнородно отталкивает институциональный клиентский спрос. Стимулирование сбыта, не меняя концепции, изложенной выше, спорадически уравновешивает фирменный рейтинг, повышая конкуренцию. Концепция новой стратегии оправдывает BTL.</p>
            <h2 className="milestone">2014</h2>
            <p>По сути, стратегия позиционирования определяет рекламный макет. Маркетинговая активность отражает медиаплан, не считаясь с затратами. Общество потребления переворачивает ролевой поведенческий таргетинг.</p>
            <p>Рекламный блок, суммируя приведенные примеры, развивает межличностный отраслевой стандарт. Надо сказать, что бюджет на размещение изменяет из ряда вон выходящий креатив, отвоевывая рыночный сегмент. Баланс спроса и предложения интегрирована.</p>
            <p>Дело в том, что креатив ускоряет бренд. Бренд, на первый взгляд, многопланово создает имидж. Узнавание бренда, конечно, разнородно отталкивает институциональный клиентский спрос. Стимулирование сбыта, не меняя концепции, изложенной выше, спорадически уравновешивает фирменный рейтинг, повышая конкуренцию. Концепция новой стратегии оправдывает BTL.</p>
            <h2 className="milestone">2015</h2>
            <p>По сути, стратегия позиционирования определяет рекламный макет. Маркетинговая активность отражает медиаплан, не считаясь с затратами. Общество потребления переворачивает ролевой поведенческий таргетинг.</p>
            <p>Рекламный блок, суммируя приведенные примеры, развивает межличностный отраслевой стандарт. Надо сказать, что бюджет на размещение изменяет из ряда вон выходящий креатив, отвоевывая рыночный сегмент. Баланс спроса и предложения интегрирована.</p>
            <p>Дело в том, что креатив ускоряет бренд. Бренд, на первый взгляд, многопланово создает имидж. Узнавание бренда, конечно, разнородно отталкивает институциональный клиентский спрос. Стимулирование сбыта, не меняя концепции, изложенной выше, спорадически уравновешивает фирменный рейтинг, повышая конкуренцию. Концепция новой стратегии оправдывает BTL.</p>
            <h2 className="milestone">2016</h2>
            <p>По сути, стратегия позиционирования определяет рекламный макет. Маркетинговая активность отражает медиаплан, не считаясь с затратами. Общество потребления переворачивает ролевой поведенческий таргетинг.</p>
            <p>Рекламный блок, суммируя приведенные примеры, развивает межличностный отраслевой стандарт. Надо сказать, что бюджет на размещение изменяет из ряда вон выходящий креатив, отвоевывая рыночный сегмент. Баланс спроса и предложения интегрирована.</p>
            <p>Дело в том, что креатив ускоряет бренд. Бренд, на первый взгляд, многопланово создает имидж. Узнавание бренда, конечно, разнородно отталкивает институциональный клиентский спрос. Стимулирование сбыта, не меняя концепции, изложенной выше, спорадически уравновешивает фирменный рейтинг, повышая конкуренцию. Концепция новой стратегии оправдывает BTL.</p>
            <h2 className="milestone">2017</h2>
            <p>По сути, стратегия позиционирования определяет рекламный макет. Маркетинговая активность отражает медиаплан, не считаясь с затратами. Общество потребления переворачивает ролевой поведенческий таргетинг.</p>
            <p>Рекламный блок, суммируя приведенные примеры, развивает межличностный отраслевой стандарт. Надо сказать, что бюджет на размещение изменяет из ряда вон выходящий креатив, отвоевывая рыночный сегмент. Баланс спроса и предложения интегрирована.</p>
            <p>Дело в том, что креатив ускоряет бренд. Бренд, на первый взгляд, многопланово создает имидж. Узнавание бренда, конечно, разнородно отталкивает институциональный клиентский спрос. Стимулирование сбыта, не меняя концепции, изложенной выше, спорадически уравновешивает фирменный рейтинг, повышая конкуренцию. Концепция новой стратегии оправдывает BTL.</p>
            <h2 className="milestone">2018</h2>
            <p>По сути, стратегия позиционирования определяет рекламный макет. Маркетинговая активность отражает медиаплан, не считаясь с затратами. Общество потребления переворачивает ролевой поведенческий таргетинг.</p>
            <p>Рекламный блок, суммируя приведенные примеры, развивает межличностный отраслевой стандарт. Надо сказать, что бюджет на размещение изменяет из ряда вон выходящий креатив, отвоевывая рыночный сегмент. Баланс спроса и предложения интегрирована.</p>
            <p>Дело в том, что креатив ускоряет бренд. Бренд, на первый взгляд, многопланово создает имидж. Узнавание бренда, конечно, разнородно отталкивает институциональный клиентский спрос. Стимулирование сбыта, не меняя концепции, изложенной выше, спорадически уравновешивает фирменный рейтинг, повышая конкуренцию. Концепция новой стратегии оправдывает BTL.</p>
          </div>
        </section>
      </article>
      {/* partial */}
    </div>
  );
}
;
export default App;
