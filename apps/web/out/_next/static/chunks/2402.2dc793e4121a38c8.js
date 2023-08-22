"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2402],{22402:function(e,r,t){t.r(r);var i=t(70865),n=t(26297),a=t(87394),d=t(52322),o=t(2784),l=t(73921),s=t(40167),u=t(55754),c=t(67262),F=t(758),g=t(35506);r.default=function(e){var r=e.data,t=e.setValue,b=e.setLabel,E=(0,n.Z)(e,["data","setValue","setLabel"]),D=(0,c.Fg)().theme,f=(0,l.$G)().currentLanguage.locale,p=(0,o.useRef)(null),C=(0,a.Z)((0,o.useState)(),2),v=C[0],m=C[1],B=(0,o.useCallback)(function(){var e;v&&(null==p?void 0:null===(e=p.current)||void 0===e?void 0:e.parentElement)&&(v.resize(p.current.parentElement.clientWidth-32,250),v.timeScale().fitContent(),v.timeScale().scrollToPosition(0,!1))},[v,p]);return(0,o.useEffect)(function(){return window.addEventListener("resize",B),function(){return window.removeEventListener("resize",B)}},[!0,p,B]),(0,o.useEffect)(function(){var e;if(!v&&r&&(null==p?void 0:null===(e=p.current)||void 0===e?void 0:e.parentElement)){var t=(0,s.C2)(p.current,{height:250,width:p.current.parentElement.clientWidth-32,layout:{backgroundColor:"transparent",textColor:D.colors.textSubtle,fontFamily:"Kanit, sans-serif",fontSize:12},rightPriceScale:{scaleMargins:{top:.1,bottom:.1},borderVisible:!1},timeScale:{borderVisible:!1,secondsVisible:!0,tickMarkFormatter:function(e){return(0,u.Z)(1e3*e,"MM/dd h:mm a")}},watermark:{visible:!1},grid:{horzLines:{visible:!1},vertLines:{visible:!1}},crosshair:{horzLine:{visible:!1,labelVisible:!1},mode:1,vertLine:{visible:!0,labelVisible:!1,style:3,width:1,color:D.colors.textSubtle,labelBackgroundColor:D.colors.primary}}});t.timeScale().fitContent(),m(t)}},[v,r,t,D]),(0,o.useEffect)(function(){if(v&&r){var e=v.addCandlestickSeries({upColor:g.dw.success,downColor:g.dw.failure,borderDownColor:g.dw.failure,borderUpColor:g.dw.success,wickDownColor:g.dw.failure,wickUpColor:g.dw.success});e.setData(r),v.applyOptions({layout:{textColor:D.isDark?g._5.textSubtle:g.C0.textSubtle}}),v.subscribeCrosshairMove(function(r){if((null==p?void 0:p.current)&&(void 0===r||void 0===r.time||r&&r.point&&r.point.x<0||r&&r.point&&r.point.x>p.current.clientWidth||r&&r.point&&r.point.y<0||r&&r.point&&r.point.y>250))t&&t(void 0),b&&b(void 0);else if(e&&r){var i=r.time,n=new Date(1e3*i),a="".concat(n.toLocaleString(f,{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit",timeZone:"UTC"})," (UTC)"),d=r.seriesPrices.get(e);t&&t(null==d?void 0:d.open),b&&b(a)}})}},[f,v,r,t,b,D]),(0,d.jsxs)(d.Fragment,{children:[!v&&(0,d.jsx)(F.PK,{}),(0,d.jsx)("div",(0,i.Z)({ref:p,id:"candle-chart"},E))]})}},35506:function(e,r,t){t.d(r,{C0:function(){return o},_5:function(){return l},dw:function(){return a}});var i=t(70865),n=t(96670),a={white:"white",failure:"#ED4B9E",failure33:"#ED4B9E33",primary:"#1FC7D4",primary0f:"#1FC7D40f",primary3D:"#1FC7D43D",primaryBright:"#53DEE9",primaryDark:"#0098A1",success:"#31D0AA",success19:"#31D0AA19",warning:"#FFB237",warning2D:"#ED4B9E2D",warning33:"#ED4B9E33"},d={binance:"#F0B90B",overlay:"#452a7a",gold:"#FFC700",silver:"#B2B2B2",bronze:"#E7974D"},o=(0,n.Z)((0,i.Z)({},a,d),{secondary:"#7645D9",secondary80:"#7645D980",background:"#FAF9FA",backgroundDisabled:"#E9EAEB",backgroundAlt:"#FFFFFF",backgroundAlt2:"rgba(255, 255, 255, 0.7)",cardBorder:"#E7E3EB",contrast:"#191326",dropdown:"#F6F6F6",dropdownDeep:"#EEEEEE",invertedContrast:"#FFFFFF",input:"#eeeaf4",inputSecondary:"#d7caec",tertiary:"#EFF4F5",text:"#280D5F",text99:"#280D5F99",textDisabled:"#BDC2C4",textSubtle:"#7A6EAA",disabled:"#E9EAEB",gradientBubblegum:"linear-gradient(139.73deg, #E5FDFF 0%, #F3EFFF 100%)",gradientInverseBubblegum:"linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)",gradientCardHeader:"linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",gradientBlue:"linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",gradientViolet:"linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",gradientVioletAlt:"linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",gradientGold:"linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",gradientBold:"linear-gradient(#53DEE9, #7645D9)"}),l=(0,n.Z)((0,i.Z)({},a,d),{secondary:"#9A6AFF",secondary80:"#9A6AFF80",background:"#08060B",backgroundDisabled:"#3c3742",backgroundAlt:"#27262c",backgroundAlt2:"rgba(39, 38, 44, 0.7)",cardBorder:"#383241",contrast:"#FFFFFF",dropdown:"#1E1D20",dropdownDeep:"#100C18",invertedContrast:"#191326",input:"#372F47",inputSecondary:"#262130",primaryDark:"#0098A1",tertiary:"#353547",text:"#F4EEFF",text99:"#F4EEFF99",textDisabled:"#666171",textSubtle:"#B8ADD2",disabled:"#524B63",gradientBubblegum:"linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",gradientInverseBubblegum:"linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",gradientCardHeader:"linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",gradientBlue:"linear-gradient(180deg, #00707F 0%, #19778C 100%)",gradientViolet:"linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",gradientVioletAlt:"linear-gradient(180deg, #434575 0%, #66578D 100%)",gradientGold:"linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",gradientBold:"linear-gradient(#53DEE9, #9A6AFF)"})}}]);
//# sourceMappingURL=2402.2dc793e4121a38c8.js.map