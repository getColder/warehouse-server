"use strict";(self["webpackChunkwarehouse_manage"]=self["webpackChunkwarehouse_manage"]||[]).push([[895],{6895:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-card",{staticClass:"login-container"},[r("el-form",{ref:"form",attrs:{model:e.form,"status-icon":"",rules:e.rules,"label-width":"“100px”"}},[r("h3",{staticClass:"login_title"},[e._v("系统登陆")]),r("el-form-item",{staticClass:"username",attrs:{label:"用户名","label-width":"80px",prop:"username"}},[r("el-input",{attrs:{type:"input",placeholder:"请输入账号"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),r("el-form-item",{attrs:{label:"密码","label-width":"80px",prop:"password"}},[r("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),r("el-form-item",{staticClass:"login_submit"},[r("el-button",{staticClass:"login-submit",attrs:{type:"primary"},on:{click:e.login}},[e._v("登录")])],1)],1)],1)},o=[],a=(r(3025),r(7303)),n={name:"login",data(){return{form:{},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,message:"用户名长度不能小于3位",blur:""}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{login:function(){(0,a.r7)(this.form).then((e=>{2e4===e.data.code?(console.log(e.headers.authorization),this.$store.commit("clearMenu"),this.$store.commit("clearToken"),this.$store.commit("setMenu",e.data.menu),this.$store.commit("setToken",e.headers.authorization),this.$store.commit("addMenu",this.$router),this.$router.push({name:"home"})):this.$message.warning("密码或账户错误！")})).catch((e=>{this.$message.warning("密码或账户错误！")}))}}},i=n,u=r(1001),l=(0,u.Z)(i,s,o,!1,null,"a4a2c5fa",null),m=l.exports},7303:function(e,t,r){r.d(t,{fC:function(){return c},wz:function(){return d},Yu:function(){return m},r7:function(){return l},QG:function(){return p},tR:function(){return g},$G:function(){return h}});var s=r(6166),o=r.n(s),a={baseUrl:{dev:"/api/",pro:""}};const n=a.baseUrl.pro;class i{constructor(e){this.baseUrl=e}getInsideConfig(){const e={baseUrl:this.baseUrl};return e}interceptors(e){e.interceptors.request.use((e=>e),(e=>Promise.reject(e))),e.interceptors.response.use((e=>e),(e=>Promise.reject(e)))}request(e){const t=o().create();return e={...this.getInsideConfig(),...e},this.interceptors(t),t(e)}}var u=new i(n);const l=e=>u.request({url:"/permission/getMenu",method:"post",data:e,headers:{Authorization:localStorage.getItem("very")}}),m=()=>u.request({url:"/home/getData",headers:{Authorization:localStorage.getItem("very")}}),c=e=>u.request({url:"/warehouse/createItem",method:"post",data:e,headers:{Authorization:localStorage.getItem("very")}}),h=e=>u.request({url:"/warehouse/updateItem",method:"post",data:e,headers:{Authorization:localStorage.getItem("very")}}),d=e=>u.request({url:"/warehouse/deleteItem",method:"post",data:e,headers:{Authorization:localStorage.getItem("very")}}),p=e=>u.request({url:"/warehouse/stock-in",method:"post",data:e,headers:{Authorization:localStorage.getItem("very")}}),g=e=>u.request({url:"/warehouse/stock-out",method:"post",data:e,headers:{Authorization:localStorage.getItem("very")}})}}]);
//# sourceMappingURL=895.c2813c86.js.map