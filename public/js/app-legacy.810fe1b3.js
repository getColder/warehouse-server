(function(){var e={6255:function(e,n,t){"use strict";var o=t(9299),r=t.n(o),u=(t(6992),t(8674),t(9601),t(7727),t(8309),t(8935)),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},i=[],c={name:"App"},l=c,s=t(1001),f=(0,s.Z)(l,a,i,!1,null,null,null),d=f.exports,m=(t(1539),t(8783),t(3948),t(2809));u["default"].use(m.Z);var p=[{path:"/",name:"Main",component:function(){return t.e(202).then(t.bind(t,5202))},redirect:"home",children:[{path:"/login",name:"login",component:function(){return t.e(570).then(t.bind(t,7570))}}]}],h=new m.Z({mode:"history",routes:p}),g=h,v=t(4665),b=t(4479),y=(t(4553),t(8862),t(4747),t(1249),t(329)),k={state:{isCollapse:!0,tabsList:[{path:"/",name:"home",label:"首页",icon:"home"}],currentMenu:null,menu:[]},mutations:{collapseMenu:function(e){e.isCollapse=!e.isCollapse},selectMenu:function(e,n){if("home"!==n.name){e.currentMenu=n;var t=e.tabsList.findIndex((function(e){return e.name===n.name}));-1===t&&e.tabsList.push(n)}else e.currentMenu=null},setMenu:function(e,n){e.menu=n,y.Z.set("menu",JSON.stringify(n))},clearMenu:function(e,n){e.menu=[],y.Z.remove("menu")},addMenu:function(e,n){if(y.Z.get("menu")){var o=JSON.parse(y.Z.get("menu"));e.menu=o;var r=[];o.forEach((function(e){e.children?(e.children=e.children.map((function(e){return e.component=function(){return t(1229)("./".concat(e.url,".vue"))},e})),r.push.apply(r,(0,b.Z)(e.children))):(e.component=function(){return t(1229)("./".concat(e.url,".vue"))},r.push(e))})),console.log(r),r.forEach((function(e){n.addRoute("Main",e)}))}}}},w={state:{token:""},mutations:{setToken:function(e,n){e.token=n,y.Z.set("token",n)},clearToken:function(e){e.token="",y.Z.remove("token")},getToken:function(e){e.token=e.token||y.Z.get("token")}}};u["default"].use(v.ZP);var O=new v.ZP.Store({modules:{tab:k,user:w}}),E=t(6166),M=t.n(E),x=t(3025),C=t.n(x),D=(t(2222),t(3290),[]),T={getStatisticalData:function(){for(var e=0;e<7;e++)D.push(C().mock({"苹果":C().Random.float(100,8e3,0,0),vivo:C().Random.float(100,8e3,0,0),oppo:C().Random.float(100,8e3,0,0),"魅族":C().Random.float(100,8e3,0,0),"三星":C().Random.float(100,8e3,0,0),"小米":C().Random.float(100,8e3,0,0)}));return{code:2e4,data:{tableData:[{name:"调压箱RX. DN50 X 80",pcs:"台",number:3,group:"材料"},{name:"双放射PE球阀De110",pcs:"个",number:1,group:"材料"},{name:"PE燃气管材De90",pcs:"米",number:100,group:"材料"},{name:"DN80管",pcs:"米",number:3,group:"材料"},{name:"热熔弯头De110",pcs:"个",number:5,group:"材料"},{name:"热熔等径三角 De110",pcs:"个",number:5,group:"材料"},{name:"热熔等径四角 De110",pcs:"个",number:15,group:"材料"}],itemGroupData:[{group:"材料",number:35,color:"#7f6542"},{group:"组件",number:15,color:"#e61320"},{group:"成品",number:70,color:"#e69f00"},{group:"其他",number:45,color:"#2050f0"}],itemStockData:{date:["2022/03/25"].concat(Array(4).fill("")).concat(["2022/04/05"]),in:[10,70,60,20,90,90],out:[90,70,90,80,30,60]}}}}},S={createItem:function(e){},updateItem:function(e){}},N={getMenu:function(e){var n=JSON.parse(e.body),t=n.username,o=n.password;return"admin"===t&&"123456"===o?{code:2e4,token:123,menu:[{path:"/home",name:"home",label:"首页",icon:"s-home",url:"home/index"},{path:"/warehouse",name:"warehouse",label:"仓库",icon:"s-shop",url:"warehouse/index"},{path:"/user",name:"user",label:"用户管理",icon:"user",url:"user/index"},{label:"其他",icon:"location",children:[{path:"/page1",name:"page1",label:"页面1",icon:"setting",url:"other/pageOne"},{path:"/page2",name:"page2",label:"页面2",icon:"setting",url:"other/pageTwo"}]}]}:"user"===t&&"12345"===o?{code:2e4,token:125553,menu:[{path:"/home",name:"home",label:"首页",icon:"s-home",url:"home/index"}]}:void 0}};C().mock("/home/getData",T.getStatisticalData),C().mock(/\/warehouse\/add/,"post",S.createItem),C().mock(/\/warehouse\/edit/,"post",S.updateItem),C().mock(/permission\/getMenu/,"post",N.getMenu),u["default"].use(r()),u["default"].prototype.$http=M(),u["default"].config.productionTip=!1,g.beforeEach((function(e,n,t){O.commit("getToken");var o=O.state.user.token;o||"login"===e.name?o&&"login"===e.name?t({name:"home"}):t():t({name:"login"})})),new u["default"]({store:O,router:g,render:function(e){return e(d)},created:function(){O.commit("addMenu",g)}}).$mount("#app")},1229:function(e,n,t){var o={"./Main.vue":[5202,202],"./home/index.vue":[1839,79,839],"./login/index.vue":[7570,570],"./other/pageOne.vue":[1070,70],"./other/pageTwo.vue":[3474,474],"./user/index.vue":[4297,340],"./warehouse/index.vue":[2395,79,395]};function r(e){if(!t.o(o,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=o[e],r=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t(r)}))}r.keys=function(){return Object.keys(o)},r.id=1229,e.exports=r}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var u=n[o]={id:o,loaded:!1,exports:{}};return e[o].call(u.exports,u,u.exports,t),u.loaded=!0,u.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,u){if(!o){var a=1/0;for(s=0;s<e.length;s++){o=e[s][0],r=e[s][1],u=e[s][2];for(var i=!0,c=0;c<o.length;c++)(!1&u||a>=u)&&Object.keys(t.O).every((function(e){return t.O[e](o[c])}))?o.splice(c--,1):(i=!1,u<a&&(a=u));if(i){e.splice(s--,1);var l=r();void 0!==l&&(n=l)}}return n}u=u||0;for(var s=e.length;s>0&&e[s-1][2]>u;s--)e[s]=e[s-1];e[s]=[o,r,u]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"-legacy."+{70:"c2bd4960",79:"a8f466cc",202:"d85814d7",340:"55d80cba",395:"5a3c76e4",474:"8d434441",570:"feb2f418",839:"75f48083"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{202:"8e7eeed3",395:"8295e1a0",570:"e39d2e1d",839:"98132d2a"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="warehouse-manage:";t.l=function(o,r,u,a){if(e[o])e[o].push(r);else{var i,c;if(void 0!==u)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var f=l[s];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==n+u){i=f;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,t.nc&&i.setAttribute("nonce",t.nc),i.setAttribute("data-webpack",n+u),i.src=o),e[o]=[r];var d=function(n,t){i.onerror=i.onload=null,clearTimeout(m);var r=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(t)})),n)return n(t)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.p="/"}(),function(){var e=function(e,n,t,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var u=function(u){if(r.onerror=r.onload=null,"load"===u.type)t();else{var a=u&&("load"===u.type?"missing":u.type),i=u&&u.target&&u.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=i,r.parentNode.removeChild(r),o(c)}};return r.onerror=r.onload=u,r.href=n,document.head.appendChild(r),r},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],u=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(u===e||u===n))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],u=r.getAttribute("data-href");if(u===e||u===n)return r}},o=function(o){return new Promise((function(r,u){var a=t.miniCssF(o),i=t.p+a;if(n(a,i))return r();e(o,i,r,u)}))},r={143:0};t.f.miniCss=function(e,n){var t={202:1,395:1,570:1,839:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var u=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=u);var a=t.p+t.u(n),i=new Error,c=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var u=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;i.message="Loading chunk "+n+" failed.\n("+u+": "+a+")",i.name="ChunkLoadError",i.type=u,i.request=a,r[1](i)}};t.l(a,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,u,a=o[0],i=o[1],c=o[2],l=0;if(a.some((function(n){return 0!==e[n]}))){for(r in i)t.o(i,r)&&(t.m[r]=i[r]);if(c)var s=c(t)}for(n&&n(o);l<a.length;l++)u=a[l],t.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return t.O(s)},o=self["webpackChunkwarehouse_manage"]=self["webpackChunkwarehouse_manage"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(6255)}));o=t.O(o)})();
//# sourceMappingURL=app-legacy.810fe1b3.js.map