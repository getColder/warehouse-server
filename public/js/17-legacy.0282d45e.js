(self["webpackChunkwarehouse_manage"]=self["webpackChunkwarehouse_manage"]||[]).push([[17],{2017:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return p}});var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-row",{staticClass:"home",attrs:{gutter:20}},[r("el-col",{attrs:{span:5}},[r("el-card",{staticClass:"user-card",attrs:{shadow:"hover"}},[r("div",{staticClass:"user",attrs:{slot:"header"},slot:"header"},[r("img",{attrs:{width:"125px",height:"125px",src:t.userImg}}),r("div",{staticClass:"user-info"},[r("h1",{staticClass:"name"},[t._v("Admin")]),r("p",{staticClass:"access"},[t._v("超级管理员")])])]),r("div",{staticClass:"login-info"},[r("p",[t._v("上次登录时间: "),r("span",[t._v("2022-4-1")])]),r("p",[t._v("上次登录地点: "),r("span",[t._v("贵阳")])])])])],1),r("el-col",{attrs:{span:17}},[r("div",{staticClass:"search-bar"},[r("el-input",{staticStyle:{width:"92%"},attrs:{size:"mini"}}),r("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("搜索")])],1),r("el-card",{staticClass:"data-card"},[r("el-table",{attrs:{data:t.tableData,"max-height":"330px"}},t._l(t.tableLabel,(function(t,e){return r("el-table-column",{key:e,attrs:{prop:e,label:t}})})),1)],1)],1)],1),r("el-row",{staticClass:"info",attrs:{gutter:0}},[r("el-col",{attrs:{span:8}},[r("el-card",{attrs:{shadow:"hover"}},[r("div",{ref:"itemGroupChart",staticClass:"item-group-graph"})])],1),r("el-col",{attrs:{span:7}},[r("el-card",{attrs:{shadow:"hover"}},[r("div",{ref:"itemDistributionChart",staticClass:"item-group-d-graph"})])],1),r("el-col",{attrs:{span:7}},[r("el-card",{attrs:{shadow:"hover"}},[r("div",{ref:"itemStockChart",staticClass:"item-stock-graph"})])],1)],1)],1)},n=[],i=(r(1249),r(609)),o=r(1079),s={name:"home",data:function(){return{userImg:r(3526),tableData:[],tableLabel:{name:"存货名称",number:"数量",pcs:"单位",group:"分组"}}},mounted:function(){var t=this;(0,i.Yu)().then((function(e){var r=e.data,a=r.code,n=r.data;if(2e4===a){t.tableData=n.tableData;var i={grid:{left:"10%"},tooltip:{trigger:"axis"},xAxis:{type:"category",data:n.itemGroupData.map((function(t){return t.group})),axisLine:{lineStyle:{color:"#ff2510"}},axisLabel:{interval:0,color:"#333"}},yAxis:[{type:"value",axisLine:{lineStyle:{color:"#b35510"}},axisLabel:{interval:0,color:"#333"}}],color:["#2ec7c9"],series:[{name:"分组数量",data:n.itemGroupData.map((function(t){return{value:t.number,itemStyle:{color:t.color}}})),type:"bar",itemStyle:{shadowColor:"#999",opacity:.6,borderWidth:3,borderType:"solid",borderRadius:3,shadowBlur:3}}]},s=o.S1(t.$refs.itemGroupChart);s.setOption(i);var c={tooltip:{trigger:"item"},color:n.itemGroupData.map((function(t){return t.color})),series:[{data:n.itemGroupData.map((function(t){return{name:t.group,value:t.number}})),type:"pie",itemStyle:{shadowColor:"#999",opacity:.6,borderWidth:3,borderType:"solid",barBorderRadius:3,shadowBlur:3}}]},l=o.S1(t.$refs.itemDistributionChart);l.setOption(c);var u={tooltip:{trigger:"axis"},xAxis:{type:"category",data:n.itemStockData.date,axisLine:{lineStyle:{color:"#ff2510"}},axisLabel:{interval:0,color:"#333"}},yAxis:{},series:[{name:"入库",data:n.itemStockData.in,type:"line"},{name:"出库",data:n.itemStockData.out,type:"line"}]},p=o.S1(t.$refs.itemStockChart);p.setOption(u)}console.log(e)})).catch((function(t){console.log(t,"错误")}))}},c=s,l=r(1001),u=(0,l.Z)(c,a,n,!1,null,null,null),p=u.exports},9337:function(t,e,r){var a=r(2109),n=r(9781),i=r(3887),o=r(5656),s=r(1236),c=r(6135);a({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,r,a=o(t),n=s.f,l=i(a),u={},p=0;while(l.length>p)r=n(a,e=l[p++]),void 0!==r&&c(u,e,r);return u}})},609:function(t,e,r){"use strict";r.d(e,{Yu:function(){return m},r7:function(){return b}});r(7327),r(1539),r(4916),r(3123),r(7042);var a=r(3019);r(1703);function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function o(t,e,r){return e&&i(t.prototype,e),r&&i(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}var s=r(6166),c=r.n(s),l={baseUrl:{dev:"/api/",pro:""}},u=l.baseUrl.pro,p=function(){function t(e){n(this,t),this.baseUrl=e}return o(t,[{key:"getInsideConfig",value:function(){var t={baseUrl:this.baseUrl};return t}},{key:"interceptors",value:function(t){t.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),t.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)}))}},{key:"request",value:function(t){var e=c().create();return console.log(this.getInsideConfig()),t=(0,a.Z)((0,a.Z)({},this.getInsideConfig()),t),console.log(t),this.interceptors(e),e(t)}}]),t}(),f=new p(u),d=document.cookie.split(";").filter((function(t){return t.indexOf("VerifyT")>=0}))[0],h={Authorization:"string"===typeof d?d.slice(8):""},b=function(t){return f.request({url:"/permission/getMenu",method:"post",data:t,headers:h})},m=function(){return f.request({url:"/home/data",headers:h})}},3526:function(t,e,r){"use strict";t.exports=r.p+"img/avatar.bc1961ea.jpeg"},3019:function(t,e,r){"use strict";r.d(e,{Z:function(){return i}});r(7941),r(2526),r(7327),r(1539),r(5003),r(4747),r(9337);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}}}]);
//# sourceMappingURL=17-legacy.0282d45e.js.map