import { ToastUtility } from '@syncfusion/ej2-react-notifications';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, DateTime, Tooltip, DataLabel, LineSeries, Crosshair } from '@syncfusion/ej2-react-charts';
import axios from "axios";
import * as React from 'react';
import { useRef, useState } from "react";
import { Chrono } from "react-chrono";
import Slider from "react-slick";
import Moment from 'moment';
import { Helmet } from "react-helmet";
import './Food.css';
import HorizontalScroll from "react-scroll-horizontal";
import $ from 'jquery';
import jQuery from 'jquery';
window.jQuery = jQuery;
window.$ = $;


function Food() {
  const [items, setItems] = useState([]);

  let refSarawak = useRef(null);

  let refRice = useRef(null);
  let refMee = useRef(null);
  let refMoi = useRef(null);


  function successShow() {
    ToastUtility.show('Load successfully', 'Success', 2000);
  }

  function dangerShow(e) {
    ToastUtility.show(e, 'Error', 2000);
  }

  React.useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      setIsActiveClass(items.title);
    }
    else {
      console.log('setDefault');
      setDefault();
    }
  }, [])

  //-----DATA AREA-------------------------------//

  //-----NASI-------------------------------//

  const dataContentSarawakRice = [
    {
      imgName: 'https://scontent.fkul15-1.fna.fbcdn.net/v/t39.30808-6/379863428_3580151655555969_8984106708386957058_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=bvBk5PbdOK4AX8IKMif&_nc_ht=scontent.fkul15-1.fna&oh=00_AfA6MwqfMIAI0qO-8SEkXCe_avCIpSXB7MqlipcmNsGTtQ&oe=651148FA',
      dataT: '侨众茶室',
      url: 'https://www.facebook.com/groups/foodhunter.borneo/permalink/5821572181279169/?mibextid=9R9pXO',
      title: '鸡饭',
      desc: `我真的喜欢吃鸡饭，这家鸡饭真的顶呱呱👍
      鸡肉嫩滑，烧鸡香，白鸡滑，而且老板自称无骨鸡饭，当然没有骨头所以我可以放肆的大吃，所以不喜欢吃骨头的朋友一定不要错过，鸡肉底部铺上了一排的芽菜也是加分，鸡饭粒粒分明，辣椒辣的很爽，综合评分有9分，真心推荐
      店名 侨众茶室
      摊位 阿叻芽菜无骨鸡饭
      地点 洪清河路的正宗鸡饭对面
      时间 9AM - 1:30pm Sunday off`
    },
    {
      imgName: 'https://scontent.fkul15-1.fna.fbcdn.net/v/t39.30808-6/379863428_3580151655555969_8984106708386957058_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=bvBk5PbdOK4AX8IKMif&_nc_ht=scontent.fkul15-1.fna&oh=00_AfA6MwqfMIAI0qO-8SEkXCe_avCIpSXB7MqlipcmNsGTtQ&oe=651148FA',
      dataT: '侨众茶室',
      url: 'https://www.facebook.com/groups/foodhunter.borneo/permalink/5821572181279169/?mibextid=9R9pXO',
      title: '鸡饭2',
      desc: `我真的喜欢吃鸡饭，这家鸡饭真的顶呱呱👍
      鸡肉嫩滑，烧鸡香，白鸡滑，而且老板自称无骨鸡饭，当然没有骨头所以我可以放肆的大吃，所以不喜欢吃骨头的朋友一定不要错过，鸡肉底部铺上了一排的芽菜也是加分，鸡饭粒粒分明，辣椒辣的很爽，综合评分有9分，真心推荐
      店名 侨众茶室
      摊位 阿叻芽菜无骨鸡饭
      地点 洪清河路的正宗鸡饭对面
      时间 9AM - 1:30pm Sunday off`
    },
    {
      imgName: 'https://scontent.fkul15-1.fna.fbcdn.net/v/t39.30808-6/379863428_3580151655555969_8984106708386957058_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=bvBk5PbdOK4AX8IKMif&_nc_ht=scontent.fkul15-1.fna&oh=00_AfA6MwqfMIAI0qO-8SEkXCe_avCIpSXB7MqlipcmNsGTtQ&oe=651148FA',
      dataT: '侨众茶室',
      url: 'https://www.facebook.com/groups/foodhunter.borneo/permalink/5821572181279169/?mibextid=9R9pXO',
      title: '鸡饭3',
      desc: `我真的喜欢吃鸡饭，这家鸡饭真的顶呱呱👍
      鸡肉嫩滑，烧鸡香，白鸡滑，而且老板自称无骨鸡饭，当然没有骨头所以我可以放肆的大吃，所以不喜欢吃骨头的朋友一定不要错过，鸡肉底部铺上了一排的芽菜也是加分，鸡饭粒粒分明，辣椒辣的很爽，综合评分有9分，真心推荐
      店名 侨众茶室
      摊位 阿叻芽菜无骨鸡饭
      地点 洪清河路的正宗鸡饭对面
      时间 9AM - 1:30pm Sunday off`
    },
    {
      imgName: 'https://scontent.fkul15-1.fna.fbcdn.net/v/t39.30808-6/379863428_3580151655555969_8984106708386957058_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=bvBk5PbdOK4AX8IKMif&_nc_ht=scontent.fkul15-1.fna&oh=00_AfA6MwqfMIAI0qO-8SEkXCe_avCIpSXB7MqlipcmNsGTtQ&oe=651148FA',
      dataT: '侨众茶室',
      url: 'https://www.facebook.com/groups/foodhunter.borneo/permalink/5821572181279169/?mibextid=9R9pXO',
      title: '鸡饭4',
      desc: `我真的喜欢吃鸡饭，这家鸡饭真的顶呱呱👍
      鸡肉嫩滑，烧鸡香，白鸡滑，而且老板自称无骨鸡饭，当然没有骨头所以我可以放肆的大吃，所以不喜欢吃骨头的朋友一定不要错过，鸡肉底部铺上了一排的芽菜也是加分，鸡饭粒粒分明，辣椒辣的很爽，综合评分有9分，真心推荐
      店名 侨众茶室
      摊位 阿叻芽菜无骨鸡饭
      地点 洪清河路的正宗鸡饭对面
      时间 9AM - 1:30pm Sunday off`
    },
    {
      imgName: 'https://scontent.fkul15-1.fna.fbcdn.net/v/t39.30808-6/379863428_3580151655555969_8984106708386957058_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=bvBk5PbdOK4AX8IKMif&_nc_ht=scontent.fkul15-1.fna&oh=00_AfA6MwqfMIAI0qO-8SEkXCe_avCIpSXB7MqlipcmNsGTtQ&oe=651148FA',
      dataT: '侨众茶室',
      url: 'https://www.facebook.com/groups/foodhunter.borneo/permalink/5821572181279169/?mibextid=9R9pXO',
      title: '鸡饭5',
      desc: `我真的喜欢吃鸡饭，这家鸡饭真的顶呱呱👍
      鸡肉嫩滑，烧鸡香，白鸡滑，而且老板自称无骨鸡饭，当然没有骨头所以我可以放肆的大吃，所以不喜欢吃骨头的朋友一定不要错过，鸡肉底部铺上了一排的芽菜也是加分，鸡饭粒粒分明，辣椒辣的很爽，综合评分有9分，真心推荐
      店名 侨众茶室
      摊位 阿叻芽菜无骨鸡饭
      地点 洪清河路的正宗鸡饭对面
      时间 9AM - 1:30pm Sunday off`
    },
    {
      imgName: 'https://scontent.fkul15-1.fna.fbcdn.net/v/t39.30808-6/379863428_3580151655555969_8984106708386957058_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=bvBk5PbdOK4AX8IKMif&_nc_ht=scontent.fkul15-1.fna&oh=00_AfA6MwqfMIAI0qO-8SEkXCe_avCIpSXB7MqlipcmNsGTtQ&oe=651148FA',
      dataT: '侨众茶室',
      url: 'https://www.facebook.com/groups/foodhunter.borneo/permalink/5821572181279169/?mibextid=9R9pXO',
      title: '鸡饭6',
      desc: `我真的喜欢吃鸡饭，这家鸡饭真的顶呱呱👍
      鸡肉嫩滑，烧鸡香，白鸡滑，而且老板自称无骨鸡饭，当然没有骨头所以我可以放肆的大吃，所以不喜欢吃骨头的朋友一定不要错过，鸡肉底部铺上了一排的芽菜也是加分，鸡饭粒粒分明，辣椒辣的很爽，综合评分有9分，真心推荐
      店名 侨众茶室
      摊位 阿叻芽菜无骨鸡饭
      地点 洪清河路的正宗鸡饭对面
      时间 9AM - 1:30pm Sunday off`
    },
    {
      imgName: 'https://scontent.fkul15-1.fna.fbcdn.net/v/t39.30808-6/379863428_3580151655555969_8984106708386957058_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=bvBk5PbdOK4AX8IKMif&_nc_ht=scontent.fkul15-1.fna&oh=00_AfA6MwqfMIAI0qO-8SEkXCe_avCIpSXB7MqlipcmNsGTtQ&oe=651148FA',
      dataT: '侨众茶室',
      url: 'https://www.facebook.com/groups/foodhunter.borneo/permalink/5821572181279169/?mibextid=9R9pXO',
      title: '鸡饭7',
      desc: `我真的喜欢吃鸡饭，这家鸡饭真的顶呱呱👍
      鸡肉嫩滑，烧鸡香，白鸡滑，而且老板自称无骨鸡饭，当然没有骨头所以我可以放肆的大吃，所以不喜欢吃骨头的朋友一定不要错过，鸡肉底部铺上了一排的芽菜也是加分，鸡饭粒粒分明，辣椒辣的很爽，综合评分有9分，真心推荐
      店名 侨众茶室
      摊位 阿叻芽菜无骨鸡饭
      地点 洪清河路的正宗鸡饭对面
      时间 9AM - 1:30pm Sunday off`
    },
    {
      imgName: 'https://scontent.fkul15-1.fna.fbcdn.net/v/t39.30808-6/379863428_3580151655555969_8984106708386957058_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=bvBk5PbdOK4AX8IKMif&_nc_ht=scontent.fkul15-1.fna&oh=00_AfA6MwqfMIAI0qO-8SEkXCe_avCIpSXB7MqlipcmNsGTtQ&oe=651148FA',
      dataT: '侨众茶室',
      url: 'https://www.facebook.com/groups/foodhunter.borneo/permalink/5821572181279169/?mibextid=9R9pXO',
      title: '鸡饭8',
      desc: `我真的喜欢吃鸡饭，这家鸡饭真的顶呱呱👍
      鸡肉嫩滑，烧鸡香，白鸡滑，而且老板自称无骨鸡饭，当然没有骨头所以我可以放肆的大吃，所以不喜欢吃骨头的朋友一定不要错过，鸡肉底部铺上了一排的芽菜也是加分，鸡饭粒粒分明，辣椒辣的很爽，综合评分有9分，真心推荐
      店名 侨众茶室
      摊位 阿叻芽菜无骨鸡饭
      地点 洪清河路的正宗鸡饭对面
      时间 9AM - 1:30pm Sunday off`
    },
    {
      imgName: 'https://scontent.fkul15-1.fna.fbcdn.net/v/t39.30808-6/373295626_6669865329747964_8069101720046998769_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=XhLClmx7RrkAX8A3n2q&_nc_ht=scontent.fkul15-1.fna&oh=00_AfCK5S_nl9D351meVmRLUaq_qq2OVRB_uqssfHVpm8LqYA&oe=6510B765',
      dataT: '青草路安美食中心 Green Road Onn Food Corner',
      url: 'https://www.facebook.com/groups/foodhunter.borneo/permalink/5795882943848093/?mibextid=9R9pXO',
      title: '鸡饭',
      desc: `什么⁉️ RM 3 鸡饭 ⁉️ 哪里 ‼️
      没想到 2023 年这个年代还能找到 又 PI 又 QI 的鸡饭 🐔 重点是份量还不少呢！！🤤
      另外，还有 RM 4 LAKSA 🍜 加虾的也才 RM 6，太便宜了吧！很想问老板这样不会亏钱吗 😂 赶紧约上朋友去吃早午餐吧！！
      📍地点：青草路安美食中心 Green Road Onn Food Corner 
      ⏰ 营业时间：早上 5点 至 下午 5/6点
      再来就是幸运抽奖活动，送出 Borneo Sonic Music Festival VIP 2 DAY PASS 的入门票！！🎉🎉🎉
      只需寻找古晋 RM 5 以内的美食，发进群里，你就有机会赢取这个入门票了！
      📌 规则如下：
      1）食物以及摊位或者店名的照片
      2）食物的价格
      3）地点
      4）Hashtag #foodhunter2023省钱计划`
    },
    {
      imgName: 'https://scontent.fkul15-1.fna.fbcdn.net/v/t39.30808-6/366314987_612299991011872_7122685307005384625_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5614bc&_nc_ohc=3h_YK1EvB68AX8WgY5Z&_nc_ht=scontent.fkul15-1.fna&oh=00_AfBRqixIJ9nJHeKyoqowADgLgYLA_A6HH8sqm_ArMZNGxQ&oe=6510CA8A',
      dataT: 'Ken Salad Chicken Rice',
      url: 'https://www.facebook.com/100066956294584/posts/623282589913612/?mibextid=9R9pXO',
      title: '沙叻炸鸡饭',
      desc: `古晋人超级推荐的沙叻炸鸡饭，超级的好吃！
      这家的炸鸡简直令人欲罢不能！外皮酥脆，肉质饱满多汁，每一口都很juicy。上桌时还保持热乎乎的状态，再搭配粒粒分明且香喷喷的油饭，简直让人欲罢不能。更令人惊喜的是，这么美味又丰盛的沙叻炸鸡饭，价格非常公道！还等什么呢？赶紧过来尝尝吧！
      【Ken Salad Chicken Rice】
      地址：Lot 9705, Jalan Pending, Three Hills Park, 93450 Kuching, Sarawak
      时间：630am - 430pm（星期日休息）`
    },
    {
      imgName: 'https://scontent.fkul15-1.fna.fbcdn.net/v/t39.30808-6/366028401_833041768476330_5543852219414578152_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5614bc&_nc_ohc=qFbCZtfSOpsAX9y1Gdu&_nc_ht=scontent.fkul15-1.fna&oh=00_AfAGv79FXGKIm4na935mycfTOwftNvMdI88qQc0QdLzq1Q&oe=6511CF00',
      dataT: '明吉 King Centre 的天一美食家',
      url: 'https://www.facebook.com/100053115431502/posts/833041898476317/?mibextid=K8Wfd2',
      title: '炸鸡扒饭',
      desc: `古晋美食 | 天一美食-明吉
      🌟 超值又美味！🌟吃过都懂 ～😋
      在物价飞涨的今天，找到良心商家真的像是宝藏！天一美食-明吉就是这样的存在！每一道菜肴都充满了美食的诚意，绝对是让你吃得开心又满足的好地方！
      便宜，好吃又美味 ！ 
      你吃过的人都知道，这里的美味无法抗拒，所以每天都吸引着大批食客前来品尝！
      📍 地点：明吉 King Centre 的天一美食家`
    },
    {
      imgName: 'https://scontent.fkul15-1.fna.fbcdn.net/v/t39.30808-6/363435982_299558792484887_5687181084475208280_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=vovG_TuJRmcAX_sjth9&_nc_ht=scontent.fkul15-1.fna&oh=00_AfCAbn6o9Vkglc9_C0GYrRa2OfU1aibRPeH6ktO4RQ3WwQ&oe=6510E60E',
      dataT: 'Blossom Cafe @ 三哩 @ Wisma Naim对面',
      url: 'https://www.facebook.com/groups/foodhunter.borneo/permalink/5642341832535539/?mibextid=9R9pXO',
      title: '南乳三层肉饭',
      desc: `RM13吃到饱饱的…😋😋芒果鸡, 黄梨鸡, 南乳三层肉, 包菜和鸡蛋😋😋😋满满看不到饭了
      📍Blossom Cafe @ 三哩 @ Wisma Naim对面罢了`
    },
    {
      imgName: 'https://scontent.fkul15-1.fna.fbcdn.net/v/t39.30808-6/370892382_315290264245073_4170221454777273130_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=isAW_mCAn7gAX84DI9e&_nc_ht=scontent.fkul15-1.fna&oh=00_AfB7ZyKxf6Mool4P-_Nue7aXhLJeqXuDJTK6AAyMqygLRA&oe=6510AEF6',
      dataT: '烧肉王 @ Gala Street Mall @ Galacity',
      url: 'https://www.facebook.com/groups/foodhunter.borneo/permalink/5742377632531958/?mibextid=9R9pXO',
      title: '烧肉饭',
      desc: `开了有一段时间…每次都爆满人…终于来尝试到这间食物了…烧肉很Crispy😋😋😋`
    },
    {
      imgName: 'https://scontent.fkul15-1.fna.fbcdn.net/v/t39.30808-6/375461156_10159942762666947_2433423214495019170_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=_qKj-N7u-6wAX_mlC9r&_nc_ht=scontent.fkul15-1.fna&oh=00_AfDQEX6ISfRoUhY0kvsCYRhGNOGbsGy1Q-46W67BU8NtiQ&oe=6510C1EB',
      dataT: '31°C Food Station.',
      url: 'https://www.facebook.com/groups/foodhunter.borneo/permalink/5768668179902903/?mibextid=9R9pXO',
      title: '擂茶',
      desc: `有没有人吃擂茶是整碗汤倒进去搅拌吃的，这个以前在三里三川楼后面大手的擂茶，现在搬来三里的3iC咖啡店，要吃苦的人可以交代加苦一点。`
    },
    {
      imgName: 'https://scontent.fkul15-1.fna.fbcdn.net/v/t39.30808-6/367739176_10159904363206947_6369287512264546252_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=Do-iCSD0m50AX8oP3Tb&_nc_ht=scontent.fkul15-1.fna&oh=00_AfBE3e2_lPQ0Ld7ed2xWoSlTKYIjKULS9up9_6EG9lPNqw&oe=6512298A',
      dataT: 'Little Tea Cafe.',
      url: 'https://www.facebook.com/groups/foodhunter.borneo/permalink/5707365416033180/?mibextid=9R9pXO',
      title: '炒马尼菜蛋饭',
      desc: `有没有马尼菜lover看过来，午餐这边吃，City mall的露天market对面，面向着后面草丛的单层店屋角头间，Little Tea Cafe，炒马尼菜蛋饭，够油但是不腻，配饭好吃，马尼菜米粉也是够火候，如果是幼的米粉更棒，价钱也亲民❤️`
    }
  ]

  //-----NOODLE-------------------------------//

  const dataContentSarawakNoodle = [
    {
      imgName: 'https://scontent.fkul15-1.fna.fbcdn.net/v/t39.30808-6/370638149_6490008081090493_2355979107841501256_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=lsR0kf5rcGEAX-oHZHd&_nc_ht=scontent.fkul15-1.fna&oh=00_AfASBESaoeLMmZ99h3WQPh61zxCa-LAmCH4NPahHkuG0ug&oe=65107B60',
      dataT: 'The Car Salon',
      url: 'https://www.facebook.com/groups/foodhunter.borneo/permalink/5740637339372654/?mibextid=9R9pXO',
      title: '炒甜面',
      desc: `这摊真是绝！不爱吃炒甜面的我都会吃了😋
      就在青草路的洗车店 傍晚就会变咖啡店☕️
      入口香喷喷的炒甜面 是咸中带着微微的甜❤️
      软滑的炒面 精妙地吸收了锅气和酱料味道！
      里边鸡蛋和豆芽 也为这道甜面增添层次感～
      无论吃什么炒煮 必加一颗我爱的荷包蛋🍳！
      再来必点上冰镇柠檬茶🍋 Ice Lemon Tea！
      泡得很不一样 喝了凉爽舒服！感觉清新😘
      📍炒豆芽粿条,面,米粉@ 青草路The Car Salon`
    },
    {
      imgName: 'https://scontent.fkul15-1.fna.fbcdn.net/v/t39.30808-6/371975493_10231006390333427_3150325602143875249_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=gutHBtyLamcAX8fHOFH&_nc_ht=scontent.fkul15-1.fna&oh=00_AfCKKS5KpVuD370EZxOYXfiSBJc9CXIYQrJw3dD8xdhSmw&oe=65112C3D',
      dataT: '榮大茶室 Yong Tai Cafe',
      url: 'https://www.facebook.com/groups/foodhunter.borneo/permalink/5756596864443368/?mibextid=9R9pXO',
      title: '乾撈麵',
      desc: `週末到新堯灣老街吃早餐好多人 😍
      第一次吃到超級豪華版的乾撈麵 🍜
      搭配的蝦很大而且肉丸也很好吃 🦐
      配料滿滿自己一人吃真的很多 🍲
      到石隆門走走的話就有多一個早餐選項 🌿
      ❤️🧡💛💚
      🏡 榮大茶室 Yong Tai Cafe`
    },
    {
      imgName: 'https://scontent.fkul15-1.fna.fbcdn.net/v/t39.30808-6/377559013_3612142089021769_9015676489869535600_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=q1Ocnm8mecIAX9GLsc1&_nc_ht=scontent.fkul15-1.fna&oh=00_AfA9JYH6rJxrGP7I9SqnNaYqDZ4g0VKcqpkvGtY_utJddA&oe=6510B6F9',
      dataT: 'Lian Jun Cafe BDC',
      url: 'https://www.facebook.com/groups/kuchingfoodheaven/permalink/10161129674379726/?mibextid=9R9pXO',
      title: 'tomato noodle',
      desc: `Nice tomato noodle crispy.and.soft types at Lian Jun Cafe BDC.`
    },
    {
      imgName: 'https://scontent.fkul15-1.fna.fbcdn.net/v/t39.30808-6/367466038_10230978111826482_7789232152514874994_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=Wg2spcQ2J-oAX_n8Dld&_nc_ht=scontent.fkul15-1.fna&oh=00_AfCkE-93LktQXSKxiWiLS5j_-IAPpMIVmua4y5p-dCfPtA&oe=65105A5F',
      dataT: '沒有名字的木屋',
      url: 'https://www.facebook.com/groups/foodhunter.borneo/permalink/5743010249135363/?mibextid=9R9pXO',
      title: '哥羅麵',
      desc: `這裡的辣椒和Sambal很好吃而且任你吃 🌶️
      放紅的哥羅麵很有古早味的純樸香氣推薦 🍜
      還有古早味的瓶裝飲料滿滿的懷舊 🧃
      他們的地方很簡陋是小木屋而已 ⛱️
      從石角下來靠近尖山在路邊就可以看到 🌿
      營業時間大致上就是早上到午餐時段 🌳
      如果你有經過不妨來體驗木屋吃麵 🪴
      ❤️🧡💛💚
      🏡 沒有名字的木屋`
    },
    {
      imgName: 'https://scontent.fkul15-1.fna.fbcdn.net/v/t39.30808-6/362926076_826608245786349_2469667127005891449_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5614bc&_nc_ohc=8Aa9zdMzgYEAX9gLlj1&_nc_ht=scontent.fkul15-1.fna&oh=00_AfA7gj0j8yWk2P5ytZG6yTsZMvMo9Ln7WpFQzq_V6QmuOA&oe=6510BB0B',
      dataT: '八点地炸云吞',
      url: 'https://www.facebook.com/100053115431502/posts/826608412452999/?mibextid=9R9pXO',
      title: '茄汁炸面',
      desc: `八点地炸云吞，古晋老字号，住家著名美食！🥟🌟
      尝试一下酥脆可口的茄汁炸云吞，淋上美味的番茄酱，要在云吞变软前迅速品尝，才能尽享其风味！😋
      此外，八点地还提供茄汁炸面、茄汁果条、炸云吞和哥罗面等美味选择。
      🏠 住家名称：八点地炸云吞
      ⏰ 营业时间：晚上6时30分至晚上11时（星期一休息）
      📍 地址：Kampung Stutong Baru, 93350 古晋, 砂拉越。`
    }
  ]

  //-----Porridge-------------------------------//

  const dataContentSarawakPorridge = [
    {
      imgName: 'https://scontent.fkul15-1.fna.fbcdn.net/v/t39.30808-6/363408536_2579758042180374_4977864639312476310_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=HZ0nACL4HRwAX-ZxnZ0&_nc_ht=scontent.fkul15-1.fna&oh=00_AfCuhREzyorxXm0Cjn9sN5wMMVEzrlsXcXwUY3SD5mm6gw&oe=6510B3D2',
      dataT: 'Lao Ya Keng',
      url: 'https://www.facebook.com/groups/foodhunter.borneo/permalink/5639486032821119/?mibextid=9R9pXO',
      title: '粥',
      desc: `Late night runs to Lao Ya Keng for porridge is what almost everyone has done at least once in their life HAHA
      Late night craving for porridge and the first place I go to will ALWAYS be here🥰 It has a special place in my heart cause got lots of memories sini heh❤️ Their porridge gives you a comforting feeling too🏡 Lagi they fast AF (if not many people lah lmaoo). My fav is eating the porridge with an egg cause it looks pretty AND tastes delicious HAHA. Feed both my eyes and mouth✨
      Do drop more supper places for me to visit tho. Don’t get me wrong. I love the place but I can’t keep eating porridge all the time yall HAHA😂😂
      🏪粥Porridge
      📍Lao Ya Keng @ Carpenter Street (Opposite the temple)
      ⏰I have no idea. I know they also open at night, like lateeee at night oof`
    }
  ]

  //-----DATAEND-------------------------------// 

  const setIsActiveClass = (title) => {
    switch (title) {
      case 'arice':
        refRice.current.classList = ['isactive'];
        refMee.current.classList = [''];
        refMoi.current.classList = [''];
        break;
      case 'anoodle':
        refRice.current.classList = [''];
        refMee.current.classList = ['isactive'];
        refMoi.current.classList = [''];
        break;
      default:
        refRice.current.classList = [''];
        refMee.current.classList = [''];
        refMoi.current.classList = ['isactive'];
    }
  }

  const setValueLocation = (e) => {

  }

  const setValue = (e) => {
    e.preventDefault();
    var nav = {};
    var content = {};
    var nav1 = [];
    var nav2 = [];
    var nav3 = [];

    dataContentSarawakRice.map((v, i) => {
      nav1.push({ name: v.title });
    });

    dataContentSarawakNoodle.map((v, i) => {
      nav2.push({ name: v.title });
    });

    dataContentSarawakPorridge.map((v, i) => {
      nav3.push({ name: v.title });
    });

    switch (e.target.id) {
      case 'arice':
        nav = nav1;
        content = dataContentSarawakRice;
        break;
      case 'anoodle':
        nav = nav2;
        content = dataContentSarawakNoodle;
        break;
      default:
        nav = nav3;
        content = dataContentSarawakPorridge;
    }

    var items =
    {
      title: e.target.id,
      nav: nav,
      content: content
    }
    localStorage.setItem('items', JSON.stringify(items));
    window.location.reload();
  };

  const setDefault = () => {
    var navDefault = [];
    dataContentSarawakRice.map((v, i) => {
      navDefault.push({ name: v.title });
    });

    var items =
    {
      title: 'arice',
      nav: navDefault,
      content: dataContentSarawakRice
    }
    localStorage.setItem('items', JSON.stringify(items));
  }

  const getTopNavLocation = () => {
    return (
      <nav className='topnavlocation'>
        <ul>
          <li>
            <a id='asarawak' ref={refSarawak} href="#" onClick={setValueLocation}>Sarawak</a>
          </li>
        </ul>
      </nav >
    )
  }

  const getTopNav = () => {
    return (
      <nav className='topnav'>
        <ul>
          <li>
            <a id='arice' ref={refRice} href="#" onClick={setValue}>饭</a>
          </li>
          <li>
            <a id='anoodle' ref={refMee} href="#" onClick={setValue}>面</a>
          </li>
          <li>
            <a id='aporridge' ref={refMoi} href="#" onClick={setValue}>粥</a>
          </li>
        </ul>
      </nav>
    )
  }

  const getNav = () => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (!items) return setDefault();

    const nav = [];

    items.content.map((v, i) => {
      nav.push({ name: v.title });
    });

    return (
      <nav className="timeline__nav">
        <ul>
          {nav.map((v, i) => {
            return <li key={i}><span>{v.name}</span></li>
          })}
        </ul>
      </nav>
    )
  }

  const getScrollNav = () => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (!items) return setDefault();

    const nav = [];

    items.content.map((v, i) => {
      nav.push({ name: v.title });
    });

    return (
      <div className="stories">
        <HorizontalScroll className="scroll" reverseScroll={true}>
          {nav.map((v, i) => {
            return <div className='story' key={i}>{v.name}</div>
          })}
        </HorizontalScroll>
      </div>
    )
  }

  const getContent = () => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (!items) return setDefault();

    return (
      <div className="timeline-container" id="timeline-1">
        {getTopNavLocation()}
        {getTopNav()}
        <div className="timeline-header">
          <h2 className="timeline-header__title">Mustafa Kemal Atatürk</h2>
          <h3 className="timeline-header__subtitle">FATHER OF THE TURKS</h3>
        </div>
        <div className="timeline">
          {items.content.map((v, i) => {
            return <div key={i} className="timeline-item" data-text={v.dataT}>
              <div className="timeline__content">
                <a href={v.url} target="_blank"><img className="timeline__img" src={v.imgName} /></a>
                <h2 className="timeline__content-title">{v.title}</h2>
                <p className="timeline__content-desc">
                  {v.desc}
                </p>
              </div>
            </div>
          })}
        </div>
      </div >
    )
  }

  //-----END-------------------------------//

  return (
    <div>
      <meta charSet="UTF-8" />
      <title>CodePen - timeline</title>
      {/* partial:index.partial.html */}
      <Helmet>
        <script type="application/javascript" src="../food/App.js" />
      </Helmet>
      {getScrollNav()}
      {/* {getScroll()} */}
      {/* {getTopNavLocation()} */}
      {/* {getTopNav()} */}
      {/* {getNav()} */}
      {getContent()}
      {/* partial */}
    </div>
  );
}
;
export default Food;

