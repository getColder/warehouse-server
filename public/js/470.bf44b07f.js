"use strict";(self["webpackChunkwarehouse_manage"]=self["webpackChunkwarehouse_manage"]||[]).push([[470],{9470:function(e,t,r){r.r(t),r.d(t,{default:function(){return c}});var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-card",{staticClass:"login-container"},[r("el-form",{ref:"form",attrs:{model:e.form,"status-icon":"",rules:e.rules,"label-width":"“100px”"}},[r("h3",{staticClass:"login_title"},[e._v("系统登陆")]),r("el-form-item",{staticClass:"username",attrs:{label:"用户名","label-width":"80px",prop:"username"}},[r("el-input",{attrs:{type:"input",placeholder:"请输入账号"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),r("el-form-item",{attrs:{label:"密码","label-width":"80px",prop:"password"}},[r("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),r("el-form-item",{staticClass:"login_submit"},[r("el-button",{staticClass:"login-submit",attrs:{type:"primary"},on:{click:e.login}},[e._v("登录")])],1)],1)],1)},o=[],n=(r(3025),r(7303)),a={name:"login",data(){return{form:{},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,message:"用户名长度不能小于3位",blur:""}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{login:function(){(0,n.r7)(this.form).then((e=>{2e4===e.data.code?(console.log(e),(0,n.Ec)({Autorization:e.headers.Authorization}),this.$store.commit("clearMenu"),this.$store.commit("setMenu",e.data.menu),this.$store.commit("setToken",e.data.token),this.$store.commit("addMenu",this.$router),this.$router.push({name:"home"})):this.$message.warning("密码或账户错误！")})).catch((e=>{console.log(e),this.$message.warning("密码或账户错误！")}))}}},i=a,l=r(1001),u=(0,l.Z)(i,s,o,!1,null,"7779b95b",null),c=u.exports},7303:function(e,t,r){r.d(t,{Yu:function(){return d},r7:function(){return m},Ec:function(){return c}});var s=r(6166),o=r.n(s),n={baseUrl:{dev:"/api/",pro:""}};const a=n.baseUrl.pro;class i{constructor(e){this.baseUrl=e}getInsideConfig(){const e={baseUrl:this.baseUrl};return e}interceptors(e){e.interceptors.request.use((e=>e),(e=>Promise.reject(e))),e.interceptors.response.use((e=>e),(e=>Promise.reject(e)))}request(e){const t=o().create();return console.log(this.getInsideConfig()),e={...this.getInsideConfig(),...e},console.log(e),this.interceptors(t),t(e)}}var l=new i(a);let u={Authorization:""|document.cookie.split(";").filter((e=>e.indexOf("VerifyT")[0]>=0))};const c=e=>{u=e},m=e=>l.request({url:"/permission/getMenu",method:"post",data:e,headers:u}),d=()=>l.request({url:"/home/data",headers:u})}}]);
//# sourceMappingURL=470.bf44b07f.js.map