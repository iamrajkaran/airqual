(this.webpackJsonpairquality=this.webpackJsonpairquality||[]).push([[0],{24:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(3),c=a.n(r),i=a(15),s=a.n(i),l=(a(24),a(18)),o=a(2),u=a.n(o),d=a(4),h=(a(26),a(27),function(e){var t=e.message,a=e.location,r=a.city,c=a.state,i=a.country,s="".concat(c,","),l={backgroundImage:"url(".concat("/images/title.png",")")};return r===c&&(s=""),Object(n.jsx)("div",{className:"col-md-12",style:l,children:Object(n.jsxs)("h3",{id:"header-title",children:[t," ",r,", ",s," ",i,"  "]})})}),j=function(e){var t=e.airMetricsStore,a={city:t.city,state:t.state,country:t.country};return Object(n.jsx)(h,{message:"Welcome to AirQual, You are nearby",location:a})},b=(a(28),a(29),a(6),function(e){var t=e.label,a=e.value;return Object(n.jsx)("div",{className:"card",children:Object(n.jsxs)("h1",{children:[Object(n.jsx)("span",{className:"enclosed",children:t}),a]})})}),v=function(e){var t=e.label,a=e.value;return Object(n.jsx)("div",{className:"card width-extend",children:Object(n.jsxs)("h1",{children:[Object(n.jsx)("span",{className:"enclosed",children:t}),a]})})},p=function(e){var t=e.data,a=e.type,r=t.squareCard,c=t.rectangleCard;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h3",{className:"heading",children:a}),Object(n.jsx)("div",{className:"outer",children:Object(n.jsxs)("div",{className:"wrapper",children:[r.map((function(e,t){return Object(n.jsx)(b,{label:e.label,value:e.value},t)})),c.map((function(e,t){return Object(n.jsx)(v,{label:e.label,value:e.value},t)}))]})})]})},m="./images/weather",g={cloud:"".concat(m,"/cloud.png"),sunny:"".concat(m,"/sunny.png"),snow:"".concat(m,"/snow.png"),thunder:"".concat(m,"/thunder.png"),night:"".concat(m,"/night.png"),clear:"".concat(m,"/clear.png")},f=function(e){return"01d"===e?g.sunny:"01n"===e?g.night:"02d"===e||"02n"===e?g.clear:"03d"===e||"04d"===e?g.cloud:"09d"===e||"10d"===e||"10n"===e||"11d"===e?g.thunder:"13d"===e?g.snow:g.clear},x=function(e){var t=e.data,a=e.label,r=t.hu,c=t.ic,i=t.pr,s=t.tp,l=t.ws,o={backgroundImage:"url(".concat(f(c),")")},u={squareCard:[{label:"Temperature",value:"".concat(s,"\xb0c")},{label:"Wind Speed",value:"".concat(l,"m/s")},{label:"Atmospheric Pressure",value:"".concat(i,"hPa")},{label:"Humidity",value:"".concat(r,"%")}],rectangleCard:[]};return Object(n.jsx)("div",{style:o,class:"metrics-info",children:Object(n.jsx)(p,{type:a,data:u})})},O=(a(30),"./images/pollution"),y={green:{imagePath:"".concat(O,"/green.png"),level:"Green"},moderate:{imagePath:"".concat(O,"/moderate.png"),level:"Moderate"},unhealthy:{imagePath:"".concat(O,"/unhealthy.png"),level:"Unhealthy"},unhealthySensitive:{imagePath:"".concat(O,"/unhealthySensitive.png"),level:"Unhealthy For Sensitive Groups"},veryUnhealthy:{imagePath:"".concat(O,"/veryUnhealthy.png"),level:"Very Unhealthy"},hazardous:{imagePath:"".concat(O,"/hazardous.png"),level:"Hazardous"}},w={p2:"PM2.5",p1:"PM10",o3:"O3",n2:"NO2",s2:"SO2",co:"CO"},S=function(e){var t=e.data,a=e.label,r=t.aqius,c=t.mainus,i=w[c],s=function(e){return e>=0&&e<=50?y.green:e>=51&&e<=100?y.moderate:e>=101&&e<=150?y.unhealthySensitive:e>=151&&e<=200?y.unhealthy:e>=201&&e<=300?y.veryUnhealthy:e>=301&&e<=500?y.hazardous:y.moderate}(r),l=s.imagePath,o=s.level,u={backgroundImage:"url(".concat(l,")")},d={squareCard:[{label:"Quality index",value:"".concat(r," US")},{label:"Main Pollutant",value:i}],rectangleCard:[{label:"Pollution level",value:o}]};return Object(n.jsxs)("div",{style:u,class:"metrics-info",children:[Object(n.jsx)(p,{type:a,data:d}),Object(n.jsx)("div",{id:"imageView-horizontal",children:Object(n.jsx)("img",{alt:"",id:"image-horizontal-info",src:"./images/pollution/faces.png"})}),Object(n.jsx)("div",{id:"imageView-vertical",children:Object(n.jsx)("img",{alt:"",id:"image-vertical-info",src:"./images/pollution/vertical_faces.png"})})]})},N=(a(31),function(e){var t=e.airMetricsStore.current,a=t.weather,r=t.pollution;return Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-md-6 padding-zero",children:Object(n.jsx)(x,{data:a,label:"Weather"})}),Object(n.jsx)("div",{className:"col-md-6 padding-zero",children:Object(n.jsx)(S,{data:r,label:"Pollution"})})]})}),P=(a(32),a(58)),k=function(){var e=Object(d.a)(u.a.mark((function e(t,a){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:if(!(r=e.sent).data){e.next=7;break}return e.next=6,a(r.data.coords);case 6:n=e.sent;case 7:return e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),M=function(e){var t=e.GeoLocationService,a=e.AirQualityMetricService,c=Object(r.useState)({}),i=Object(l.a)(c,2),s=i[0],o=i[1];Object(r.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(t,a);case 2:n=e.sent,o(n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return Object(n.jsx)("div",{className:"home",children:Object.keys(s).length>0?Object(n.jsxs)("div",{className:"container-fluid",children:[Object(n.jsx)("div",{className:"row app-header",children:Object(n.jsx)(j,{airMetricsStore:s})}),Object(n.jsx)("div",{className:"row app-body",children:Object(n.jsx)(N,{airMetricsStore:s})})]}):Object(n.jsx)(P.a,{size:250})})},z=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=function(){return new Promise((function(e,t){return navigator.geolocation.getCurrentPosition(e,t)}))},e.next=4,t();case 4:return a=e.sent,e.abrupt("return",{success:!0,err:null,data:a});case 8:return e.prev=8,e.t0=e.catch(0),console.error(e.t0.message),e.abrupt("return",{success:!1,err:e.t0,data:{}});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),C=a(17),U=a.n(C),q=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a,n,r,c=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:{},e.prev=1,a=t.latitude,n=t.longitude,e.next=5,U.a.get("".concat("https://api.airvisual.com","/v2/nearest_city?lat=").concat(a,"&lon=").concat(n,"&key=").concat("f627ba91-a50c-430e-b4d9-8f7b829cb9f3"));case 5:if(!(r=e.sent).data||"success"!==r.data.status){e.next=8;break}return e.abrupt("return",{success:!0,error:null,data:r.data.data});case 8:throw new Error("Error in api end point");case 11:return e.prev=11,e.t0=e.catch(1),console.log("err",e.t0),e.abrupt("return",{success:!1,error:e.t0,data:{}});case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}(),A=function(){return Object(n.jsx)(M,{GeoLocationService:z,AirQualityMetricService:q})};a(55);s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(A,{})}),document.getElementById("root"))},6:function(e,t,a){}},[[56,1,2]]]);
//# sourceMappingURL=main.50cbc80b.chunk.js.map