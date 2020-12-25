(this.webpackJsonpairquality=this.webpackJsonpairquality||[]).push([[0],{26:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(3),c=a.n(r),i=a(16),s=a.n(i),l=(a(26),a(19)),u=a(4),o=a.n(u),d=a(5),h=(a(28),a(29),function(e){var t=e.message,a=e.location,r=a.city,c=a.state,i=a.country,s="".concat(c,",");return r===c&&(s=""),Object(n.jsxs)("div",{className:"header-container",children:[Object(n.jsx)("img",{id:"image-header",src:"./images/title.png",alt:""}),Object(n.jsxs)("h3",{id:"header-title",children:[t," ",r,", ",s," ",i,"  "]})]})}),j=function(e){var t=e.airMetricsStore,a={city:t.city,state:t.state,country:t.country};return Object(n.jsx)(h,{message:"Welcome to AirQual, You are nearby",location:a})},b=a(20),v=(a(32),function(e){return Object(n.jsx)(b.a,{className:"content",sizes:[100,100],gutterSize:5,direction:"horizontal",children:e.children})}),p=(a(33),a(34),a(7),function(e){var t=e.label,a=e.value;return Object(n.jsx)("div",{className:"card",children:Object(n.jsxs)("h1",{children:[Object(n.jsx)("span",{className:"enclosed",children:t}),a]})})}),f=function(e){var t=e.label,a=e.value;return Object(n.jsx)("div",{className:"card width-extend",children:Object(n.jsxs)("h1",{children:[Object(n.jsx)("span",{className:"enclosed",children:t}),a]})})},g=function(e){var t=e.data,a=e.type,r=t.squareCard,c=t.rectangleCard;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{className:"heading",children:a}),Object(n.jsx)("div",{className:"outer",children:Object(n.jsxs)("div",{className:"wrapper",children:[r.map((function(e,t){return Object(n.jsx)(p,{label:e.label,value:e.value},t)})),c.map((function(e,t){return Object(n.jsx)(f,{label:e.label,value:e.value},t)}))]})})]})},m="./images/weather",x={cloud:"".concat(m,"/cloud.png"),sunny:"".concat(m,"/sunny.png"),snow:"".concat(m,"/snow.png"),thunder:"".concat(m,"/thunder.png"),night:"".concat(m,"/night.png"),clear:"".concat(m,"/clear.png")},O=function(e){return"01d"===e?x.sunny:"01n"===e?x.night:"02d"===e||"02n"===e?x.clear:"03d"===e||"04d"===e?x.cloud:"09d"===e||"10d"===e||"10n"===e||"11d"===e?x.thunder:"13d"===e?x.snow:x.clear},y=function(e){var t=e.data,a=e.label,r=t.hu,c=t.ic,i=t.pr,s=t.tp,l=t.ws,u={backgroundImage:"url(".concat(O(c),")")},o={squareCard:[{label:"Temperature",value:"".concat(s,"\xb0c")},{label:"Wind Speed",value:"".concat(l,"m/s")},{label:"Atmospheric Pressure",value:"".concat(i,"hPa")},{label:"Humidity",value:"".concat(r,"%")}],rectangleCard:[]};return Object(n.jsx)("div",{style:u,children:Object(n.jsx)(g,{type:a,data:o})})},w=(a(35),"./images/pollution"),S={green:{imagePath:"".concat(w,"/green.png"),level:"Green"},moderate:{imagePath:"".concat(w,"/moderate.png"),level:"Moderate"},unhealthy:{imagePath:"".concat(w,"/unhealthy.png"),level:"Unhealthy"},unhealthySensitive:{imagePath:"".concat(w,"/unhealthySensitive.png"),level:"Unhealthy For Sensitive Groups"},veryUnhealthy:{imagePath:"".concat(w,"/veryUnhealthy.png"),level:"Very Unhealthy"},hazardous:{imagePath:"".concat(w,"/hazardous.png"),level:"Hazardous"}},P={p2:"PM2.5",p1:"PM10",o3:"O3",n2:"NO2",s2:"SO2",co:"CO"},k=function(e){var t=e.data,a=e.label,r=t.aqius,c=t.mainus,i=P[c],s=function(e){return e>=0&&e<=50?S.green:e>=51&&e<=100?S.moderate:e>=101&&e<=150?S.unhealthySensitive:e>=151&&e<=200?S.unhealthy:e>=201&&e<=300?S.veryUnhealthy:e>=301&&e<=500?S.hazardous:S.moderate}(r),l=s.imagePath,u=s.level,o={backgroundImage:"url(".concat(l,")")},d={squareCard:[{label:"Quality index",value:"".concat(r," US AQI")},{label:"Main Pollutant",value:i}],rectangleCard:[{label:"Pollution level",value:u}]};return Object(n.jsxs)("div",{style:o,children:[Object(n.jsx)(g,{type:a,data:d}),Object(n.jsx)("div",{id:"imageView-horizontal",children:Object(n.jsx)("img",{alt:"",id:"image-horizontal-info",src:"./images/pollution/faces.png"})}),Object(n.jsx)("div",{id:"imageView-vertical",children:Object(n.jsx)("img",{alt:"",id:"image-vertical-info",src:"./images/pollution/vertical_faces.png"})})]})},M=(a(36),function(e){var t=e.airMetricsStore.current,a="Weather",r="Pollution",c=t.weather,i=t.pollution;return Object(n.jsxs)("div",{className:"Metrics",children:[Object(n.jsx)("div",{id:"infoView-horizontal",children:Object(n.jsxs)(v,{children:[Object(n.jsx)(y,{data:c,label:a}),Object(n.jsx)(k,{data:i,label:r})]})}),Object(n.jsxs)("div",{id:"infoView-vertictal",children:[Object(n.jsx)(y,{data:c,label:a}),Object(n.jsx)(k,{data:i,label:r})]})]})}),N=(a(37),a(59)),z=function(){var e=Object(d.a)(o.a.mark((function e(t,a){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:if(!(r=e.sent).data){e.next=7;break}return e.next=6,a(r.data.coords);case 6:n=e.sent;case 7:return e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),C=function(e){var t=e.GeoLocationService,a=e.AirQualityMetricService,c=Object(r.useState)({}),i=Object(l.a)(c,2),s=i[0],u=i[1];Object(r.useEffect)((function(){(function(){var e=Object(d.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(t,a);case 2:n=e.sent,u(n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return Object(n.jsx)("div",{className:"home",children:Object.keys(s).length>0?Object(n.jsxs)("div",{children:[Object(n.jsx)(j,{airMetricsStore:s}),Object(n.jsx)(M,{airMetricsStore:s})]}):Object(n.jsx)(N.a,{size:250})})},U=function(){var e=Object(d.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=function(){return new Promise((function(e,t){return navigator.geolocation.getCurrentPosition(e,t)}))},e.next=4,t();case 4:return a=e.sent,e.abrupt("return",{success:!0,err:null,data:a});case 8:return e.prev=8,e.t0=e.catch(0),console.error(e.t0.message),e.abrupt("return",{success:!1,err:e.t0,data:{}});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),q=a(18),A=a.n(q),Q=function(){var e=Object(d.a)(o.a.mark((function e(){var t,a,n,r,c=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:{},e.prev=1,a=t.latitude,n=t.longitude,e.next=5,A.a.get("".concat("https://api.airvisual.com","/v2/nearest_city?lat=").concat(a,"&lon=").concat(n,"&key=").concat("f627ba91-a50c-430e-b4d9-8f7b829cb9f3"));case 5:if(!(r=e.sent).data||"success"!==r.data.status){e.next=8;break}return e.abrupt("return",{success:!0,error:null,data:r.data.data});case 8:throw new Error("Error in api end point");case 11:return e.prev=11,e.t0=e.catch(1),console.log("err",e.t0),e.abrupt("return",{success:!1,error:e.t0,data:{}});case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}(),V=function(){return Object(n.jsx)(C,{GeoLocationService:U,AirQualityMetricService:Q})};s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(V,{})}),document.getElementById("root"))},7:function(e,t,a){}},[[57,1,2]]]);
//# sourceMappingURL=main.fe7f976b.chunk.js.map