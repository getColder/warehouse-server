"use strict";(self["webpackChunkwarehouse_manage"]=self["webpackChunkwarehouse_manage"]||[]).push([[980],{2980:function(e,t,r){r.r(t),r.d(t,{default:function(){return c}});var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-card",{staticClass:"login-container"},[r("el-form",{ref:"form",attrs:{model:e.form,"status-icon":"",rules:e.rules,"label-width":"“100px”"}},[r("h3",{staticClass:"login_title"},[e._v("系统登陆")]),r("el-form-item",{staticClass:"username",attrs:{label:"用户名","label-width":"80px",prop:"username"}},[r("el-input",{attrs:{type:"input",placeholder:"请输入账号"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),r("el-form-item",{attrs:{label:"密码","label-width":"80px",prop:"password"}},[r("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),r("el-form-item",{staticClass:"login_submit"},[r("el-button",{staticClass:"login-submit",attrs:{type:"primary"},on:{click:e.login}},[e._v("登录")])],1)],1)],1)},a=[],o=(r(3025),r(7303)),n={name:"login",data(){return{form:{},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,message:"用户名长度不能小于3位",blur:""}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{login:function(){(0,o.r7)(this.form).then((e=>{2e4===e.data.code?(console.log(e),localStorage["very"]=e.headers.Authorization,this.$store.commit("clearMenu"),this.$store.commit("setMenu",e.data.menu),this.$store.commit("setToken",e.data.token),this.$store.commit("addMenu",this.$router),this.$router.push({name:"home"})):this.$message.warning("密码或账户错误！")})).catch((e=>{this.$message.warning("密码或账户错误！")}))}}},i=n,l=r(1001),u=(0,l.Z)(i,s,a,!1,null,"82ce8182",null),c=u.exports},7303:function(e,t,r){r.d(t,{Yu:function(){return c},r7:function(){return u}});var s=r(6166),a=r.n(s),o={baseUrl:{dev:"/api/",pro:""}};const n=o.baseUrl.pro;class i{constructor(e){this.baseUrl=e}getInsideConfig(){const e={baseUrl:this.baseUrl};return e}interceptors(e){e.interceptors.request.use((e=>e),(e=>Promise.reject(e))),e.interceptors.response.use((e=>e),(e=>Promise.reject(e)))}request(e){const t=a().create();return e={...this.getInsideConfig(),...e},this.interceptors(t),t(e)}}var l=new i(n);const u=e=>l.request({url:"/permission/getMenu",method:"post",data:e,headers:{Autorization:`Bearer ${localStorage[window]}`}}),c=()=>l.request({url:"/home/getData",headers:{Autorization:`Bearer ${localStorage[window]}`}})}}]);
//# sourceMappingURL=980.4f6b03f2.js.map