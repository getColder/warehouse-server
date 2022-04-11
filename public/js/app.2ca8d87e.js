(function(){var e={6255:function(e,n,t){"use strict";var r=t(9299),o=t.n(r),u=t(8935),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},i=[],c={name:"App"},l=c,s=t(1001),f=(0,s.Z)(l,a,i,!1,null,null,null),d=f.exports,m=t(2809);u["default"].use(m.Z);const p=[{path:"/",name:"Main",component:()=>t.e(202).then(t.bind(t,5202)),redirect:"home",children:[{path:"/login",name:"login",component:()=>t.e(195).then(t.bind(t,6195))}]}],h=new m.Z({mode:"history",routes:p});var v=h,g=t(4665),b=t(329),y={state:{isCollapse:!0,tabsList:[{path:"/",name:"home",label:"首页",icon:"home"}],currentMenu:null,menu:[]},mutations:{collapseMenu(e){e.isCollapse=!e.isCollapse},selectMenu(e,n){if("home"!==n.name){e.currentMenu=n;const t=e.tabsList.findIndex((e=>e.name===n.name));-1===t&&e.tabsList.push(n)}else e.currentMenu=null},setMenu(e,n){e.menu=n,b.Z.set("menu",JSON.stringify(n))},clearMenu(e,n){e.menu=[],b.Z.remove("menu")},addMenu(e,n){if(!b.Z.get("menu"))return;const r=JSON.parse(b.Z.get("menu"));e.menu=r;const o=[];r.forEach((e=>{e.children?(e.children=e.children.map((e=>(e.component=()=>t(1229)(`./${e.url}.vue`),e))),o.push(...e.children)):(e.component=()=>t(1229)(`./${e.url}.vue`),o.push(e))})),console.log(o),o.forEach((e=>{n.addRoute("Main",e)}))}}},k={state:{token:""},mutations:{setToken(e,n){e.token=n,b.Z.set("token",n)},clearToken(e){e.token="",b.Z.remove("token")},getToken(e){e.token=e.token||b.Z.get("token")}}};u["default"].use(g.ZP);var w=new g.ZP.Store({modules:{tab:y,user:k}}),O=t(6166),E=t.n(O),C=t(3025),D=t.n(C);let M=[];var T={getStatisticalData:()=>{for(let e=0;e<7;e++)M.push(D().mock({"苹果":D().Random.float(100,8e3,0,0),vivo:D().Random.float(100,8e3,0,0),oppo:D().Random.float(100,8e3,0,0),"魅族":D().Random.float(100,8e3,0,0),"三星":D().Random.float(100,8e3,0,0),"小米":D().Random.float(100,8e3,0,0)}));return{code:2e4,data:{tableData:[{name:"调压箱RX. DN50 X 80",pcs:"台",number:3,group:"材料"},{name:"双放射PE球阀De110",pcs:"个",number:1,group:"材料"},{name:"PE燃气管材De90",pcs:"米",number:100,group:"材料"},{name:"DN80管",pcs:"米",number:3,group:"材料"},{name:"热熔弯头De110",pcs:"个",number:5,group:"材料"},{name:"热熔等径三角 De110",pcs:"个",number:5,group:"材料"},{name:"热熔等径四角 De110",pcs:"个",number:15,group:"材料"}],itemGroupData:[{group:"材料",number:35,color:"#7f6542"},{group:"组件",number:15,color:"#e61320"},{group:"成品",number:70,color:"#e69f00"},{group:"其他",number:45,color:"#2050f0"}],itemStockData:{date:["2022/03/25"].concat(Array(4).fill("")).concat(["2022/04/05"]),in:[10,70,60,20,90,90],out:[90,70,90,80,30,60]}}}}},S={createItem:e=>{},updateItem:e=>{}};D().mock("/home/getData",T.getStatisticalData),D().mock(/\/warehouse\/add/,"post",S.createItem),D().mock(/\/warehouse\/edit/,"post",S.updateItem),u["default"].use(o()),u["default"].prototype.$http=E(),u["default"].config.productionTip=!1,v.beforeEach(((e,n,t)=>{w.commit("getToken");const r=w.state.user.token;r||"login"===e.name?r&&"login"===e.name?t({name:"home"}):t():t({name:"login"})})),new u["default"]({store:w,router:v,render:e=>e(d),created(){w.commit("addMenu",v)}}).$mount("#app")},1229:function(e,n,t){var r={"./Main.vue":[5202,202],"./home/index.vue":[2017,79,17],"./login/index.vue":[6195,195],"./other/pageOne.vue":[1070,70],"./other/pageTwo.vue":[3474,474],"./user/index.vue":[4297,340],"./warehouse/index.vue":[2395,79,395]};function o(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],o=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t(o)}))}o.keys=function(){return Object.keys(r)},o.id=1229,e.exports=o}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var u=n[r]={exports:{}};return e[r].call(u.exports,u,u.exports,t),u.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,u){if(!r){var a=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],u=e[s][2];for(var i=!0,c=0;c<r.length;c++)(!1&u||a>=u)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(i=!1,u<a&&(a=u));if(i){e.splice(s--,1);var l=o();void 0!==l&&(n=l)}}return n}u=u||0;for(var s=e.length;s>0&&e[s-1][2]>u;s--)e[s]=e[s-1];e[s]=[r,o,u]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{17:"98ba87f6",70:"c2bd4960",79:"726df9f3",195:"d41660da",202:"295cc161",340:"55d80cba",395:"2a66daee",474:"8d434441"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{17:"98132d2a",195:"9b269a4e",202:"8e7eeed3",395:"8295e1a0"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="warehouse-manage:";t.l=function(r,o,u,a){if(e[r])e[r].push(o);else{var i,c;if(void 0!==u)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var f=l[s];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==n+u){i=f;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,t.nc&&i.setAttribute("nonce",t.nc),i.setAttribute("data-webpack",n+u),i.src=r),e[r]=[o];var d=function(n,t){i.onerror=i.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(t)})),n)return n(t)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e=function(e,n,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var u=function(u){if(o.onerror=o.onload=null,"load"===u.type)t();else{var a=u&&("load"===u.type?"missing":u.type),i=u&&u.target&&u.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=i,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=u,o.href=n,document.head.appendChild(o),o},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],u=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(u===e||u===n))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],u=o.getAttribute("data-href");if(u===e||u===n)return o}},r=function(r){return new Promise((function(o,u){var a=t.miniCssF(r),i=t.p+a;if(n(a,i))return o();e(r,i,o,u)}))},o={143:0};t.f.miniCss=function(e,n){var t={17:1,195:1,202:1,395:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var u=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=u);var a=t.p+t.u(n),i=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var u=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+n+" failed.\n("+u+": "+a+")",i.name="ChunkLoadError",i.type=u,i.request=a,o[1](i)}};t.l(a,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,u,a=r[0],i=r[1],c=r[2],l=0;if(a.some((function(n){return 0!==e[n]}))){for(o in i)t.o(i,o)&&(t.m[o]=i[o]);if(c)var s=c(t)}for(n&&n(r);l<a.length;l++)u=a[l],t.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return t.O(s)},r=self["webpackChunkwarehouse_manage"]=self["webpackChunkwarehouse_manage"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(6255)}));r=t.O(r)})();
//# sourceMappingURL=app.2ca8d87e.js.map