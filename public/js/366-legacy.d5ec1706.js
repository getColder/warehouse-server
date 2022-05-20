(self["webpackChunkwarehouse_manage"]=self["webpackChunkwarehouse_manage"]||[]).push([[366],{1366:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-card",{staticClass:"login-container"},[r("el-form",{ref:"form",attrs:{model:e.form,"status-icon":"",rules:e.rules,"label-width":"“100px”"}},[r("h3",{staticClass:"login_title"},[e._v("系统登陆")]),r("el-form-item",{staticClass:"username",attrs:{label:"用户名","label-width":"80px",prop:"username"}},[r("el-input",{attrs:{type:"input",placeholder:"请输入账号"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),r("el-form-item",{attrs:{label:"密码","label-width":"80px",prop:"password"}},[r("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),r("el-form-item",{staticClass:"login_submit"},[r("el-button",{staticClass:"login-submit",attrs:{type:"primary"},on:{click:e.login}},[e._v("登录")])],1)],1)],1)},o=[],u=r(609),i={name:"login",data:function(){return{form:{},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,message:"用户名长度不能小于3位",blur:""}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{login:function(){var e=this;(0,u.r7)(this.form).then((function(t){2e4===t.data.code?(e.$store.commit("clearMenu"),e.$store.commit("clearToken"),e.$store.commit("setMenu",t.data.menu),e.$store.commit("setToken",t.headers.authorization),e.$store.commit("addMenu",e.$router),e.$router.push({name:"home"}),e.$message.success("登录成功")):e.$message.warning("密码或账户错误！")})).catch((function(t){console.log("登陆失败",t),e.$message.warning("密码或账户错误！",t)}))}}},s=i,a=r(1001),c=(0,a.Z)(s,n,o,!1,null,"aee449e4",null),l=c.exports},9337:function(e,t,r){var n=r(2109),o=r(9781),u=r(3887),i=r(5656),s=r(1236),a=r(6135);n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(e){var t,r,n=i(e),o=s.f,c=u(n),l={},f=0;while(c.length>f)r=o(n,t=c[f++]),void 0!==r&&a(l,t,r);return l}})},609:function(e,t,r){"use strict";r.d(t,{fC:function(){return b},wz:function(){return v},Yu:function(){return w},ex:function(){return g},hI:function(){return p},r7:function(){return m},tM:function(){return O},g5:function(){return j},QG:function(){return k},tR:function(){return C},Co:function(){return h},$G:function(){return y}});var n=r(3019);r(1703);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,r){return t&&u(e.prototype,t),r&&u(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}r(1539);var s=r(6166),a=r.n(s),c={baseUrl:{dev:"/api/",pro:""}},l=c.baseUrl.pro,f=function(){function e(t){o(this,e),this.baseUrl=t}return i(e,[{key:"getInsideConfig",value:function(){var e={baseUrl:this.baseUrl};return e}},{key:"interceptors",value:function(e){e.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),e.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}))}},{key:"request",value:function(e){var t=a().create();return e=(0,n.Z)((0,n.Z)({},this.getInsideConfig()),e),this.interceptors(t),t(e)}}]),e}(),d=new f(l),m=function(e){return d.request({url:"/permission/getMenu",method:"post",data:e,headers:{Authorization:window.getCookie("very")}})},p=function(){return d.request({url:"/groups/getGroupList",headers:{Authorization:window.getCookie("very")}})},h=function(e){return d.request({url:"/groups/submitGroupList",method:"post",data:e,headers:{Authorization:window.getCookie("very")}})},g=function(){return d.request({url:"/groups/getGroup",headers:{Authorization:window.getCookie("very")}})},w=function(){return d.request({url:"/home/getData",headers:{Authorization:window.getCookie("very")}})},b=function(e){return d.request({url:"/warehouse/createItem",method:"post",data:e,headers:{Authorization:window.getCookie("very")}})},y=function(e){return d.request({url:"/warehouse/updateItem",method:"post",data:e,headers:{Authorization:window.getCookie("very")}})},v=function(e){return d.request({url:"/warehouse/deleteItem",method:"post",data:e,headers:{Authorization:window.getCookie("very")}})},k=function(e){return d.request({url:"/warehouse/stock-in",method:"post",data:e,headers:{Authorization:window.getCookie("very")}})},C=function(e){return d.request({url:"/warehouse/stock-out",method:"post",data:e,headers:{Authorization:window.getCookie("very")}})},O=function(e){return d.request({url:"/stock-record/get-list-by-date",method:"post",data:e,headers:{Authorization:window.getCookie("very")}})},j=function(){return d.request({url:"/stock-record/get-list-by-latest?drange=7",method:"get",headers:{Authorization:window.getCookie("very")}})}},3019:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});r(7941),r(2526),r(7327),r(1539),r(5003),r(4747),r(9337);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}}}]);
//# sourceMappingURL=366-legacy.d5ec1706.js.map