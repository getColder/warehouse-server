"use strict";(self["webpackChunkwarehouse_manage"]=self["webpackChunkwarehouse_manage"]||[]).push([[17],{2017:function(t,e,a){a.r(e),a.d(e,{default:function(){return p}});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",{staticClass:"home",attrs:{gutter:20}},[a("el-col",{attrs:{span:5}},[a("el-card",{staticClass:"user-card",attrs:{shadow:"hover"}},[a("div",{staticClass:"user",attrs:{slot:"header"},slot:"header"},[a("img",{attrs:{width:"125px",height:"125px",src:t.userImg}}),a("div",{staticClass:"user-info"},[a("h1",{staticClass:"name"},[t._v("Admin")]),a("p",{staticClass:"access"},[t._v("超级管理员")])])]),a("div",{staticClass:"login-info"},[a("p",[t._v("上次登录时间: "),a("span",[t._v("2022-4-1")])]),a("p",[t._v("上次登录地点: "),a("span",[t._v("贵阳")])])])])],1),a("el-col",{attrs:{span:17}},[a("div",{staticClass:"search-bar"},[a("el-input",{staticStyle:{width:"92%"},attrs:{size:"mini"}}),a("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("搜索")])],1),a("el-card",{staticClass:"data-card"},[a("el-table",{attrs:{data:t.tableData,"max-height":"330px"}},t._l(t.tableLabel,(function(t,e){return a("el-table-column",{key:e,attrs:{prop:e,label:t}})})),1)],1)],1)],1),a("el-row",{staticClass:"info",attrs:{gutter:0}},[a("el-col",{attrs:{span:8}},[a("el-card",{attrs:{shadow:"hover"}},[a("div",{ref:"itemGroupChart",staticClass:"item-group-graph"})])],1),a("el-col",{attrs:{span:7}},[a("el-card",{attrs:{shadow:"hover"}},[a("div",{ref:"itemDistributionChart",staticClass:"item-group-d-graph"})])],1),a("el-col",{attrs:{span:7}},[a("el-card",{attrs:{shadow:"hover"}},[a("div",{ref:"itemStockChart",staticClass:"item-stock-graph"})])],1)],1)],1)},s=[],o=a(7303),i=a(1079),l={name:"home",data(){return{userImg:a(3526),tableData:[],tableLabel:{name:"存货名称",number:"数量",pcs:"单位",group:"分组"}}},mounted(){(0,o.Yu)().then((t=>{const{code:e,data:a}=t.data;if(2e4===e){this.tableData=a.tableData;const t={grid:{left:"10%"},tooltip:{trigger:"axis"},xAxis:{type:"category",data:a.itemGroupData.map((t=>t.group)),axisLine:{lineStyle:{color:"#ff2510"}},axisLabel:{interval:0,color:"#333"}},yAxis:[{type:"value",axisLine:{lineStyle:{color:"#b35510"}},axisLabel:{interval:0,color:"#333"}}],color:["#2ec7c9"],series:[{name:"分组数量",data:a.itemGroupData.map((t=>({value:t.number,itemStyle:{color:t.color}}))),type:"bar",itemStyle:{shadowColor:"#999",opacity:.6,borderWidth:3,borderType:"solid",borderRadius:3,shadowBlur:3}}]},e=i.S1(this.$refs.itemGroupChart);e.setOption(t);const r={tooltip:{trigger:"item"},color:a.itemGroupData.map((t=>t.color)),series:[{data:a.itemGroupData.map((t=>({name:t.group,value:t.number}))),type:"pie",itemStyle:{shadowColor:"#999",opacity:.6,borderWidth:3,borderType:"solid",barBorderRadius:3,shadowBlur:3}}]},s=i.S1(this.$refs.itemDistributionChart);s.setOption(r);const o={tooltip:{trigger:"axis"},xAxis:{type:"category",data:a.itemStockData.date,axisLine:{lineStyle:{color:"#ff2510"}},axisLabel:{interval:0,color:"#333"}},yAxis:{},series:[{name:"入库",data:a.itemStockData.in,type:"line"},{name:"出库",data:a.itemStockData.out,type:"line"}]},l=i.S1(this.$refs.itemStockChart);l.setOption(o)}console.log(t)})).catch((t=>{console.log(t,"错误")}))}},n=l,c=a(1001),u=(0,c.Z)(n,r,s,!1,null,null,null),p=u.exports},7303:function(t,e,a){a.d(e,{Yu:function(){return d},r7:function(){return p}});var r=a(6166),s=a.n(r),o={baseUrl:{dev:"/api/",pro:""}};const i=o.baseUrl.pro;class l{constructor(t){this.baseUrl=t}getInsideConfig(){const t={baseUrl:this.baseUrl};return t}interceptors(t){t.interceptors.request.use((t=>t),(t=>Promise.reject(t))),t.interceptors.response.use((t=>t),(t=>Promise.reject(t)))}request(t){const e=s().create();return console.log(this.getInsideConfig()),t={...this.getInsideConfig(),...t},console.log(t),this.interceptors(e),e(t)}}var n=new l(i);const c=document.cookie.split(";").filter((t=>t.indexOf("VerifyT")>=0))[0];console.log(c);let u={Authorization:"string"===typeof c?c.slice(8):""};const p=t=>n.request({url:"/permission/getMenu",method:"post",data:t,headers:u}),d=()=>n.request({url:"/home/data",headers:u})},3526:function(t,e,a){t.exports=a.p+"img/avatar.bc1961ea.jpeg"}}]);
//# sourceMappingURL=17.7ac800b7.js.map