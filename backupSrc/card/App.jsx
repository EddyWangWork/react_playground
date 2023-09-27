import { ToastUtility } from '@syncfusion/ej2-react-notifications';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, DateTime, Tooltip, DataLabel, LineSeries, Crosshair } from '@syncfusion/ej2-react-charts';
import axios from "axios";
import * as React from 'react';
import { useState } from "react";
import { Chrono } from "react-chrono";
import Slider from "react-slick";

function App() {
  const [data, setData] = useState("");

  function successShow() {
    ToastUtility.show('Load successfully', 'Success', 2000);
  }

  function dangerShow(e) {
    ToastUtility.show(e, 'Error', 2000);
  }

  function GetYearStat2(year) {
    const SERVICE_URI = `https://localhost:7069/DS/GetYearStat2?year=${year}`;

    axios
      .get(`${SERVICE_URI}`)
      .then((response) => {
        console.log(response);
        console.log(response.data);

        var dataPush = [];

        response.data.map((v) => {

          var yearM = v.yearMonth;
          var amounts = [];

          v.items.map((v2) => {
            amounts.push(v2.amount);
          })
          dataPush.push({
            x: new Date(yearM),
            y: amounts[0],
            y1: amounts[1],
            y2: amounts[2],
            y3: amounts[3],
          })
        })

        console.log(dataPush);

        setData(dataPush);
        successShow();
      })
      .catch(error => {
        console.log(error);
        dangerShow(`${error.message}: ${error.response?.data}`);
      });
  }

  React.useEffect(() => {
    //GetYearStat2(2023);
  }, [])

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  const datass = [
    {
      title: 'Timeline title 1',
      cardTitle: 'Card Title 1',
      items: [
        {
          cardTitle: 'nested card title 1',
          cardDetailedText:
            '*asdasdsadd *asdasdasdasd *fasfsafafs',
        },
        { cardTitle: 'nested card title 2' },
        { cardTitle: 'nested card title 3' },
        { cardTitle: 'nested card title 4' },
      ],
    },
    {
      title: "25 July 1940",
      cardTitle: "The Battle of Britain",
      cardSubtitle: `RAF Spitfire pilots scramble for their planes`,
      cardDetailedText: `After France’s surrender in June 1940, Churchill told the British people, “Hitler knows that he will have to break us in this island or lose the war”. To mount a successful invasion, the Germans had to gain air superiority. The first phase of the battle began on 10 July with Luftwaffe attacks on shipping in the Channel.
        The following month, RAF Fighter Command airfields and aircraft factories came under attack. Under the dynamic direction of Lord Beaverbrook, production of Spitfire and Hurricane fighters increased, and despite its losses in pilots and planes, the RAF was never as seriously weakened as the Germans supposed.`
    },
    {
      title: "June 1941",
      cardTitle: "Operation Barbarossa",
      cardSubtitle: `A column of Red Army prisoners taken during the first days of the German invasion`,
      cardDetailedText: `Since the 1920s, Hitler had seen Russia, with its immense natural resources, as the principal target for conquest and expansion. It would provide, he believed, the necessary ‘Lebensraum’, or living space, for the German people. And by conquering Russia, Hitler would also destroy the “Jewish pestilential creed of Bolshevism”. His non-aggression pact with Stalin in August 1939 he regarded as a mere temporary expedient.
        Barely a month after the fall of France, and while the Battle of Britain was being fought, Hitler started planning for the Blitzkrieg campaign against Russia, which began on 22 June 1941. Despite repeated warnings, Stalin was taken by surprise, and for the first few months the Germans achieved spectacular victories, capturing huge swathes of land and hundreds of thousands of prisoners. But they failed to take Moscow or Leningrad before winter set in.
        On 5/6 December, the Red Army launched a counter-offensive which removed the immediate threat to the Soviet capital. It also brought the German high command to the brink of a catastrophic military crisis. Hitler stepped in and took personal command. His intervention was decisive and he later boasted, “That we overcame this winter and are today in a position again to proceed victoriously… is solely attributable to the bravery of the soldiers at the front and my firm will to hold out…”`
    },
    {
      title: "June 1941",
      cardTitle: "Operation Barbarossa",
      cardSubtitle: `A column of Red Army prisoners taken during the first days of the German invasion`,
      cardDetailedText: `Since the 1920s, Hitler had seen Russia, with its immense natural resources, as the principal target for conquest and expansion. It would provide, he believed, the necessary ‘Lebensraum’, or living space, for the German people. And by conquering Russia, Hitler would also destroy the “Jewish pestilential creed of Bolshevism”. His non-aggression pact with Stalin in August 1939 he regarded as a mere temporary expedient.
        Barely a month after the fall of France, and while the Battle of Britain was being fought, Hitler started planning for the Blitzkrieg campaign against Russia, which began on 22 June 1941. Despite repeated warnings, Stalin was taken by surprise, and for the first few months the Germans achieved spectacular victories, capturing huge swathes of land and hundreds of thousands of prisoners. But they failed to take Moscow or Leningrad before winter set in.
        On 5/6 December, the Red Army launched a counter-offensive which removed the immediate threat to the Soviet capital. It also brought the German high command to the brink of a catastrophic military crisis. Hitler stepped in and took personal command. His intervention was decisive and he later boasted, “That we overcame this winter and are today in a position again to proceed victoriously… is solely attributable to the bravery of the soldiers at the front and my firm will to hold out…”`
    }
  ];

  return (
    <div style={{ margin: `50px`, display: `flex`, flexDirection: `row`, justifyContent: `center` }}>
      <div className="e-card e-card-horizontal" style={{ width: `900px` }}>
        <img src="./Code.png" alt="Sample" style={{ height: `180px` }} />
        <div className="e-card-stacked">
          <div className="e-card-header">
            <div className="e-card-header-caption">
              <div className="e-card-header-title">Philips Trimmer</div>
            </div>
          </div>
          <div className="e-card-content">
            <ul className='ul2'>
              <li>asdsddadsdsds1212d</li>
              <li>asdsdda23124dsdsdsd</li>
              <li>asds12412ddadsdsdsd</li>
            </ul>
          </div>
        </div>
        <div className="e-card-stacked">
          <div className="e-card-header">
            <div className="e-card-header-caption">
              <div className="e-card-header-title">Philips Trimmer</div>
            </div>
          </div>
          <div className="e-card-content">

          </div>
        </div>
        <div className="e-card-stacked">
          <div className="e-card-header">
            <div className="e-card-header-caption">
              <div className="e-card-header-title">Philips Trimmer</div>
            </div>
          </div>
          <div className="e-card-content">
            Powered by the innovative DuraPower Technology which optimizes power consumption, Philips trimmers are designed to last longer
            than 4 ordinary trimmers.
          </div>
        </div>
      </div>
    </div>
  );
}
;
export default App;

