(self["webpackChunkwarehouse_manage"]=self["webpackChunkwarehouse_manage"]||[]).push([[839],{3839:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-card",[r("el-table",{attrs:{data:e.tableData,"max-height":"vh0.7",title:"出入库记录",stripe:"true"}},[r("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",{staticClass:"notePanel"},[e._v(e._s(t.row.note))])]}}])}),r("el-table-column",{attrs:{label:"日期"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("i",{staticClass:"el-icon-time"}),e._v(" "+e._s(t.row.time)+" ")]}}])}),e._l(e.stockInfo,(function(e,t){return r("el-table-column",{key:t,attrs:{prop:t,label:e,width:t}})}))],2)],1)],1)},o=[],u=(r(1532),r(1539),r(8783),r(3948),r(4747),r(609)),i={name:"pageOne",data:function(){return{tableLabel:{name:"存货名称",time:"日期",operate:"操作",number:"数量",remain:"剩余",pcs:"单位",group:"所属组"},tableData:[]}},mounted:function(){var e=this;(0,u.tM)().then((function(t){var r=t.data,n=r.code,o=r.data;if(2e4===n){var u=(new Map).set("stockin","入库").set("stockout","出库").set("stockNew","新增").set("stockUpdate","编辑").set("stockDelete","删除");o.tableData.forEach((function(e){e.operate=u.get(e.operate),e.time=new Date(e.time).toLocaleString()})),e.tableData=o.tableData.reverse()}})).catch((function(e){console.log(e,"错误")}))},computed:{stockInfo:function(){var e={};return Object.assign(e,this.tableLabel),delete e.time,e}}},a=i,s=r(1001),c=(0,s.Z)(a,n,o,!1,null,"6d93adfe",null),l=c.exports},9337:function(e,t,r){var n=r(2109),o=r(9781),u=r(3887),i=r(5656),a=r(1236),s=r(6135);n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(e){var t,r,n=i(e),o=a.f,c=u(n),l={},f=0;while(c.length>f)r=o(n,t=c[f++]),void 0!==r&&s(l,t,r);return l}})},609:function(e,t,r){"use strict";r.d(t,{fC:function(){return m},wz:function(){return y},Yu:function(){return g},ex:function(){return b},hI:function(){return p},r7:function(){return h},tM:function(){return C},g5:function(){return j},QG:function(){return k},tR:function(){return O},Co:function(){return w},$G:function(){return v}});var n=r(3019);r(1703);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,r){return t&&u(e.prototype,t),r&&u(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}r(1539);var a=r(6166),s=r.n(a),c={baseUrl:{dev:"/api/",pro:""}},l=c.baseUrl.pro,f=function(){function e(t){o(this,e),this.baseUrl=t}return i(e,[{key:"getInsideConfig",value:function(){var e={baseUrl:this.baseUrl};return e}},{key:"interceptors",value:function(e){e.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),e.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}))}},{key:"request",value:function(e){var t=s().create();return e=(0,n.Z)((0,n.Z)({},this.getInsideConfig()),e),this.interceptors(t),t(e)}}]),e}(),d=new f(l),h=function(e){return d.request({url:"/permission/getMenu",method:"post",data:e,headers:{Authorization:window.getCookie("very")}})},p=function(){return d.request({url:"/groups/getGroupList",headers:{Authorization:window.getCookie("very")}})},w=function(e){return d.request({url:"/groups/submitGroupList",method:"post",data:e,headers:{Authorization:window.getCookie("very")}})},b=function(){return d.request({url:"/groups/getGroup",headers:{Authorization:window.getCookie("very")}})},g=function(){return d.request({url:"/home/getData",headers:{Authorization:window.getCookie("very")}})},m=function(e){return d.request({url:"/warehouse/createItem",method:"post",data:e,headers:{Authorization:window.getCookie("very")}})},v=function(e){return d.request({url:"/warehouse/updateItem",method:"post",data:e,headers:{Authorization:window.getCookie("very")}})},y=function(e){return d.request({url:"/warehouse/deleteItem",method:"post",data:e,headers:{Authorization:window.getCookie("very")}})},k=function(e){return d.request({url:"/warehouse/stock-in",method:"post",data:e,headers:{Authorization:window.getCookie("very")}})},O=function(e){return d.request({url:"/warehouse/stock-out",method:"post",data:e,headers:{Authorization:window.getCookie("very")}})},C=function(e){return d.request({url:"/stock-record/get-list-by-date",method:"post",data:e,headers:{Authorization:window.getCookie("very")}})},j=function(){return d.request({url:"/stock-record/get-list-by-latest?drange=7",method:"get",headers:{Authorization:window.getCookie("very")}})}},3019:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});r(7941),r(2526),r(7327),r(1539),r(5003),r(4747),r(9337);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}}}]);
//# sourceMappingURL=839-legacy.19c2f4f3.js.map