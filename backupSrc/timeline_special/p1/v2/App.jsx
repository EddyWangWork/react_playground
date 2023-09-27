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
      <title>CodePen - timeline</title>
      {/* partial:index.partial.html */}
      <Helmet>
        <script type="application/javascript" src="./App.js" />
      </Helmet>
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
      <div className="timeline-container" id="timeline-1">
        <div className="timeline-header">
          <h2 className="timeline-header__title">Mustafa Kemal Atatürk</h2>
          <h3 className="timeline-header__subtitle">FATHER OF THE TURKS</h3>
        </div>
        <div className="timeline">
          <div className="timeline-item" data-text="FATHER OF THE TURKS">
            <div className="timeline__content">
              <img className="timeline__img" src="https://media.gettyimages.com/id/515354418/photo/mustafa-kemal-atat%C3%BCrk-founder-of-the-turkish-republic-with-army-officers-3-6-1923-this-photo.jpg?s=612x612&w=0&k=20&c=NIkEewOibMR4ttX5uVsTaw97DgH24RWDUi4A8hnOmec=" />
              <h2 className="timeline__content-title">1881</h2>
              <p className="timeline__content-desc">He was born in 1881 (probably in the spring) in Salonica, then an Ottoman city, now inGreece. His father Ali Riza, a customs official turned lumber merchant, died when Mustafawas still a boy. His mother Zubeyde, adevout and strong-willed woman, raised him and his sister.</p>
            </div>
          </div>
          <div className="timeline-item" data-text="FATHER OF THE TURKS">
            <div className="timeline__content"><img className="timeline__img" src="http://gazetemanifesto.com/wp-content/uploads/2015/11/mustafa-kemal.jpg" />
              <h2 className="timeline__content-title">1893</h2>
              <p className="timeline__content-desc">First enrolled in a traditionalreligious school, he soon switched to a modern school. In 1893, he entered a military highschool where his mathematics teacher gave him the second name Kemal (meaning perfection)in recognition of young Mustafa's superior achievement.</p>
            </div>
          </div>
          <div className="timeline-item" data-text="FATHER OF THE TURKS">
            <div className="timeline__content"><img className="timeline__img" src="https://media.gettyimages.com/id/515411614/photo/9-11-1926-constantinople-turkey-his-excellency-mustafa-kemal-pasha-head-of-the-turkish.jpg?s=612x612&w=0&k=20&c=L-XLm4HB1CI1wcPjLKkQkhai9px95L2kh9L9pspJZF8=" />
              <h2 className="timeline__content-title">1905</h2>
              <p className="timeline__content-desc">In 1905, Mustafa Kemal graduated from the War Academy in Istanbul with the rank of Staff Captain. Posted in Damascus, he started with several colleagues, a clandestinesociety called "Homeland and Freedom" to fight against the Sultan'sdespotism.</p>
            </div>
          </div>
          <div className="timeline-item" data-text="FATHER OF THE TURKS">
            <div className="timeline__content"><img className="timeline__img" src="http://cdn.yemek.com/uploads/2014/11/ataturk-10-kasim.jpg" />
              <h2 className="timeline__content-title">1908</h2>
              <p className="timeline__content-desc">In 1908 he helped the group of officers who toppled the Sultan. Mustafa Kemal'scareer flourished as he won his heroism in the far corners of the Ottoman Empire,including Albania and Tripoli. He also briefly served as a staff officer in Salonica andIstanbul and as a military attache in Sofia.</p>
            </div>
          </div>
          <div className="timeline-item" data-text="FATHER OF THE TURKS">
            <div className="timeline__content"><img className="timeline__img" src="http://ataturk.istanbul.gov.tr/GalleryLibrary/12.jpg" />
              <h2 className="timeline__content-title">1915</h2>
              <p className="timeline__content-desc">In 1915, when Dardanelles campaign was launched, Colonel Mustafa Kemal became anational hero by winning successive victories and finally repelling the invaders.</p>
            </div>
          </div>
          <div className="timeline-item" data-text="FATHER OF THE TURKS">
            <div className="timeline__content"><img className="timeline__img" src="https://media.gettyimages.com/id/541050131/photo/kemal-atatuerk12-03-1881-politiker-tuerkei-am-rande-eines-pferderennens-1928.jpg?s=612x612&w=0&k=20&c=uwi4F9HBMMnyNsqGIwJNMmlVN8dkEVf98cqmn6PtG7E=" />
              <h2 className="timeline__content-title">1916</h2>
              <p className="timeline__content-desc">Promotedto general in 1916, at age 35, he liberated two major provinces in eastern Turkey thatyear. In the next two years, he served as commander of several Ottoman armies inPalestine, Aleppo, and elsewhere, achieving another major victory by stopping the enemyadvance at Aleppo.</p>
            </div>
          </div>
          <div className="timeline-item" data-text="FATHER OF THE TURKS">
            <div className="timeline__content"><img className="timeline__img" src="https://media.gettyimages.com/id/537142279/photo/kemal-atatuerk-politiker-tuerkei-verlaesst-das-abgeordnetenhaus-in-ankara-1928.jpg?s=612x612&w=0&k=20&c=oi6O1tgbkNMWbFvurtDBg-psNf3MeDlhkieLVVUgnso=" />
              <h2 className="timeline__content-title">1919</h2>
              <p className="timeline__content-desc">On May 19, 1919, Mustafa Kemal Pasha landed in the Black Sea port of Samsun to startthe War of Independence. In defiance of the Sultan's government, he rallied a liberationarmy in Anatolia and convened the Congress of Erzurum and Sivas which established thebasis for the new national effort under his leadership.</p>
            </div>
          </div>
          <div className="timeline-item" data-text="FATHER OF THE TURKS">
            <div className="timeline__content"><img className="timeline__img" src="https://media.gettyimages.com/id/515411274/photo/photo-shows-his-excellency-mustafa-kemal-ataturk-and-his-officers-smyrna.jpg?s=612x612&w=0&k=20&c=F5l1llvvHHNVp_YBdJqHnKtzgcPNAtfWkjdRkoKSbqw=" />
              <h2 className="timeline__content-title">1920</h2>
              <p className="timeline__content-desc">
                On April 23, 1920, the GrandNational Assembly was inaugurated. Mustafa Kemal Pasha was elected to its Presidency.
                Fighting on many fronts, he led his forces to victory against rebels and invadingarmies. Following the Turkish triumph at the two major battles at Inonu in Western Turkey,the Grand National Assembly conferred on Mustafa Kemal Pasha the title ofCommander-in-Chief with the rank of Marshal.
              </p>
            </div>
          </div>
          <div className="timeline-item" data-text="FATHER OF THE TURKS">
            <div className="timeline__content"><img className="timeline__img" src="https://media.gettyimages.com/id/141554745/photo/general-mustafa-kemal-ataturk-future-president-of-the-republic-of-turkey-posing-with-some.jpg?s=612x612&w=0&k=20&c=_LJam5TBES7reUBx3bQdJdffgvFLitz29IXX15UihSU=" />
              <h2 className="timeline__content-title">1922</h2>
              <p className="timeline__content-desc">At the end of August 1922, the Turkish armieswon their ultimate victory. Within a few weeks, the Turkish mainland was completelyliberated, the armistice signed, and the rule of the Ottoman dynasty abolished</p>
            </div>
          </div>
          <div className="timeline-item" data-text="FATHER OF THE TURKS">
            <div className="timeline__content"><img className="timeline__img" src="https://media.gettyimages.com/id/2660081/photo/turkish-general-and-statesman-mustafa-kemal-ataturk-reviewing-his-troops-during-the-war-of.jpg?s=612x612&w=0&k=20&c=deia_2iBPcbQgQIrqpL5KJM7mU9p4KGSMjCN0_ZPvdA=" />
              <h2 className="timeline__content-title">1923</h2>
              <p className="timeline__content-desc">In July 1923, the national government signed the Lausanne Treaty with Great Britain,France, Greece, Italy, and others. In mid-October, Ankara became the capital of the new Turkish State. On October 29, the Republic was proclaimed and Mustafa Kemal Pasha wasunanimously elected President of the Republic.</p>
            </div>
          </div>
          <div className="timeline-item" data-text="FATHER OF THE TURKS">
            <div className="timeline__content"><img className="timeline__img" src="https://pbs.twimg.com/media/Cw69H8pXUAEaSqa.jpg" />
              <h2 className="timeline__content-title">1934</h2>
              <p className="timeline__content-desc">
                The account of Atatürk's fifteen year Presidency is a saga of dramatic modernization.With indefatigable determination, he created a new political and legal system, abolished the Caliphate and made both government and education secular, gave equal rights to women,changed the alphabet and the attire, and advanced the arts and the sciences, agricultureand industry.
                In 1934, when the surname law was adopted, the national parliament gave him the name <i><strong>"Atatürk" (Father of the Turks)</strong></i>
              </p>
            </div>
          </div>
          <div className="timeline-item" data-text="FATHER OF THE TURKS">
            <div className="timeline__content"><img className="timeline__img" src="https://media.gettyimages.com/id/515450476/photo/ancara-turkey-kemal-pasha-president-of-turkey-seen-on-the-tribunal-of-the-new-parliament.jpg?s=612x612&w=0&k=20&c=uQ3xR6zp7bJs3a2hfcRBA5kjNDyUI0pj-XfBHmwP1u0=" />
              <h2 className="timeline__content-title">1938</h2>
              <p className="timeline__content-desc">On November 10, 1938, following an illness of a few months, the national liberator and the Father of modern Turkey died. But his legacy to his people and to the world endures.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="demo-footer"><a href="http://www.turkishnews.com/Ataturk/life.htm" target="_blank">Source/Kaynak</a></div>
      {/* partial */}
    </div>
  );
}
;
export default App;

