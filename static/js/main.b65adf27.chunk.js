(this.webpackJsonpairquality=this.webpackJsonpairquality||[]).push([[0],{26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(3),c=n.n(r),i=n(16),s=n.n(i),u=(n(26),n(19)),l=n(4),o=n.n(l),d=n(5),h=(n(28),n(29),function(e){var t=e.message,n=e.location,r=n.city,c=n.state,i=n.country,s="".concat(c,",");return r===c&&(s=""),Object(a.jsxs)("div",{className:"header-container",children:[Object(a.jsx)("img",{id:"image-header",src:"./images/title.png",alt:""}),Object(a.jsxs)("h3",{id:"header-title",children:[t," ",r,", ",s," ",i,"  "]})]})}),j=function(e){var t=e.airMetricsStore,n={city:t.city,state:t.state,country:t.country};return Object(a.jsx)(h,{message:"Welcome to AirQual, You are nearby",location:n})},b=n(20),p=(n(32),function(e){return Object(a.jsx)(b.a,{className:"content",sizes:[100,100],gutterSize:5,direction:"horizontal",children:e.children})}),v=(n(33),n(34),n(7),function(e){var t=e.label,n=e.value;return Object(a.jsx)("div",{className:"card",children:Object(a.jsxs)("h1",{children:[Object(a.jsx)("span",{className:"enclosed",children:t}),n]})})}),f=function(e){var t=e.label,n=e.value;return Object(a.jsx)("div",{className:"card width-extend",children:Object(a.jsxs)("h1",{children:[Object(a.jsx)("span",{className:"enclosed",children:t}),n]})})},g=function(e){var t=e.data,n=e.type,r=t.squareCard,c=t.rectangleCard;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{className:"heading",children:n}),Object(a.jsx)("div",{className:"outer",children:Object(a.jsxs)("div",{className:"wrapper",children:[r.map((function(e,t){return Object(a.jsx)(v,{label:e.label,value:e.value},t)})),c.map((function(e,t){return Object(a.jsx)(f,{label:e.label,value:e.value},t)}))]})})]})},m="./images/weather",x={cloud:"".concat(m,"/cloud.png"),sunny:"".concat(m,"/sunny.png"),snow:"".concat(m,"/snow.png"),thunder:"".concat(m,"/thunder.png"),night:"".concat(m,"/night.png"),clear:"".concat(m,"/clear.png")},O=function(e){return"01d"===e?x.sunny:"01n"===e?x.night:"02d"===e||"02n"===e?x.clear:"03d"===e||"04d"===e?x.cloud:"09d"===e||"10d"===e||"10n"===e||"11d"===e?x.thunder:"13d"===e?x.snow:x.clear},y=function(e){var t=e.data,n=e.label,r=t.hu,c=t.ic,i=t.pr,s=t.tp,u=t.ws,l={backgroundImage:"url(".concat(O(c),")")},o={squareCard:[{label:"Temperature",value:"".concat(s,"\xb0c")},{label:"Wind Speed",value:"".concat(u,"m/s")},{label:"Atmospheric Pressure",value:"".concat(i,"hPa")},{label:"Humidity",value:"".concat(r,"%")}],rectangleCard:[]};return Object(a.jsx)("div",{style:l,children:Object(a.jsx)(g,{type:n,data:o})})},w=(n(35),"./images/pollution"),S={green:{imagePath:"".concat(w,"/green.png"),level:"Green"},moderate:{imagePath:"".concat(w,"/moderate.png"),level:"Moderate"},unhealthy:{imagePath:"".concat(w,"/unhealthy.png"),level:"Unhealthy"},unhealthySensitive:{imagePath:"".concat(w,"/unhealthySensitive.png"),level:"Unhealthy For Sensitive Groups"},veryUnhealthy:{imagePath:"".concat(w,"/veryUnhealthy.png"),level:"Very Unhealthy"},hazardous:{imagePath:"".concat(w,"/hazardous.png"),level:"Hazardous"}},P={p2:"PM2.5",p1:"PM10",o3:"O3",n2:"NO2",s2:"SO2",co:"CO"},k=function(e){var t=e.data,n=e.label,r=t.aqius,c=t.mainus,i=P[c],s=function(e){return e>=0&&e<=50?S.green:e>=51&&e<=100?S.moderate:e>=101&&e<=150?S.unhealthySensitive:e>=151&&e<=200?S.unhealthy:e>=201&&e<=300?S.veryUnhealthy:e>=301&&e<=500?S.hazardous:S.moderate}(r),u=s.imagePath,l=s.level,o={backgroundImage:"url(".concat(u,")")},d={squareCard:[{label:"Quality index",value:"".concat(r," US AQI")},{label:"Main Pollutant",value:i}],rectangleCard:[{label:"Pollution level",value:l}]};return Object(a.jsxs)("div",{style:o,children:[Object(a.jsx)(g,{type:n,data:d}),Object(a.jsx)("img",{alt:"",id:"image-pollution-info",src:"./images/pollution/faces.png"})]})},M=(n(36),function(e){var t=e.airMetricsStore.current,n=t.weather,r=t.pollution;return Object(a.jsx)("div",{className:"Metrics",children:Object(a.jsxs)(p,{children:[Object(a.jsx)(y,{data:n,label:"Weather"}),Object(a.jsx)(k,{data:r,label:"Pollution"})]})})}),N=(n(37),n(59)),z=function(){var e=Object(d.a)(o.a.mark((function e(t,n){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:if(!(r=e.sent).data){e.next=7;break}return e.next=6,n(r.data.coords);case 6:a=e.sent;case 7:return e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),C=function(e){var t=e.GeoLocationService,n=e.AirQualityMetricService,c=Object(r.useState)({}),i=Object(u.a)(c,2),s=i[0],l=i[1];Object(r.useEffect)((function(){(function(){var e=Object(d.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(t,n);case 2:a=e.sent,l(a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return Object(a.jsx)("div",{className:"home",children:Object.keys(s).length>0?Object(a.jsxs)("div",{children:[Object(a.jsx)(j,{airMetricsStore:s}),Object(a.jsx)(M,{airMetricsStore:s})]}):Object(a.jsx)(N.a,{size:250})})},U=function(){var e=Object(d.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=function(){return new Promise((function(e,t){return navigator.geolocation.getCurrentPosition(e,t)}))},e.next=4,t();case 4:return n=e.sent,e.abrupt("return",{success:!0,err:null,data:n});case 8:return e.prev=8,e.t0=e.catch(0),console.error(e.t0.message),e.abrupt("return",{success:!1,err:e.t0,data:{}});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),q=n(18),A=n.n(q),Q=function(){var e=Object(d.a)(o.a.mark((function e(){var t,n,a,r,c=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:{},e.prev=1,n=t.latitude,a=t.longitude,e.next=5,A.a.get("".concat("http://api.airvisual.com","/v2/nearest_city?lat=").concat(n,"&lon=").concat(a,"&key=").concat("f627ba91-a50c-430e-b4d9-8f7b829cb9f3"));case 5:if(!(r=e.sent).data||"success"!==r.data.status){e.next=8;break}return e.abrupt("return",{success:!0,error:null,data:r.data.data});case 8:throw new Error("Error in api end point");case 11:return e.prev=11,e.t0=e.catch(1),console.log("err",e.t0),e.abrupt("return",{success:!1,error:e.t0,data:{}});case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}(),E=function(){return Object(a.jsx)(C,{GeoLocationService:U,AirQualityMetricService:Q})};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(E,{})}),document.getElementById("root"))},7:function(e,t,n){}},[[57,1,2]]]);
//# sourceMappingURL=main.b65adf27.chunk.js.map