(function(){var e={6255:function(e,n,t){"use strict";var r=t(9299),o=t.n(r),u=(t(6992),t(8674),t(9601),t(7727),t(8309),t(8935)),i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],c={name:"App"},f=c,l=t(1001),s=(0,l.Z)(f,i,a,!1,null,null,null),d=s.exports,m=(t(1539),t(8783),t(3948),t(2809));u["default"].use(m.Z);var p=[{path:"/",name:"Main",component:function(){return t.e(202).then(t.bind(t,5202))},redirect:"home",children:[{path:"/login",name:"login",component:function(){return t.e(698).then(t.bind(t,1698))}}]}],h=new m.Z({mode:"history",routes:p}),v=h,g=t(4665),b=t(4479),y=(t(4553),t(8862),t(4747),t(1249),t(329)),k={state:{isCollapse:!0,tabsList:[{path:"/",name:"home",label:"首页",icon:"home"}],currentMenu:null,menu:[]},mutations:{collapseMenu:function(e){e.isCollapse=!e.isCollapse},selectMenu:function(e,n){if("home"!==n.name){e.currentMenu=n;var t=e.tabsList.findIndex((function(e){return e.name===n.name}));-1===t&&e.tabsList.push(n)}else e.currentMenu=null},setMenu:function(e,n){e.menu=n,y.Z.set("menu",JSON.stringify(n))},clearMenu:function(e,n){e.menu=[],y.Z.remove("menu")},addMenu:function(e,n){if(y.Z.get("menu")){var r=JSON.parse(y.Z.get("menu"));e.menu=r;var o=[];r.forEach((function(e){e.children?(e.children=e.children.map((function(e){return e.component=function(){return t(1229)("./".concat(e.url,".vue"))},e})),o.push.apply(o,(0,b.Z)(e.children))):(e.component=function(){return t(1229)("./".concat(e.url,".vue"))},o.push(e))})),console.log(o),o.forEach((function(e){n.addRoute("Main",e)}))}}}},w={state:{token:""},mutations:{setToken:function(e,n){e.token=n,y.Z.set("token",n)},clearToken:function(e){e.token="",y.Z.remove("token")},getToken:function(e){e.token=e.token||y.Z.get("token")}}};u["default"].use(g.ZP);var O=new g.ZP.Store({modules:{tab:k,user:w}}),C=t(6166),E=t.n(C),M=t(3025),T=t.n(M),j=(t(2222),t(3290),{createItem:function(e){},updateItem:function(e){}});T().mock(/\/warehouse\/add/,"post",j.createItem),T().mock(/\/warehouse\/edit/,"post",j.updateItem),u["default"].use(o()),u["default"].prototype.$http=E(),u["default"].config.productionTip=!1,v.beforeEach((function(e,n,t){O.commit("getToken");var r=O.state.user.token;r||"login"===e.name?r&&"login"===e.name?t({name:"home"}):t():t({name:"login"})})),new u["default"]({store:O,router:v,render:function(e){return e(d)},created:function(){O.commit("addMenu",v)}}).$mount("#app")},1229:function(e,n,t){var r={"./Main.vue":[5202,202],"./home/index.vue":[3816,79,816],"./login/index.vue":[1698,698],"./other/pageOne.vue":[1070,70],"./other/pageTwo.vue":[3474,474],"./user/index.vue":[4297,340],"./warehouse/index.vue":[2395,79,395]};function o(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],o=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t(o)}))}o.keys=function(){return Object.keys(r)},o.id=1229,e.exports=o}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var u=n[r]={id:r,loaded:!1,exports:{}};return e[r].call(u.exports,u,u.exports,t),u.loaded=!0,u.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,u){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],u=e[l][2];for(var a=!0,c=0;c<r.length;c++)(!1&u||i>=u)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(a=!1,u<i&&(i=u));if(a){e.splice(l--,1);var f=o();void 0!==f&&(n=f)}}return n}u=u||0;for(var l=e.length;l>0&&e[l-1][2]>u;l--)e[l]=e[l-1];e[l]=[r,o,u]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"-legacy."+{70:"c2bd4960",79:"a8f466cc",202:"d85814d7",340:"55d80cba",395:"5a3c76e4",474:"8d434441",698:"05f70684",816:"c8afe434"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{202:"8e7eeed3",395:"8295e1a0",698:"a959efe1",816:"98132d2a"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="warehouse-manage:";t.l=function(r,o,u,i){if(e[r])e[r].push(o);else{var a,c;if(void 0!==u)for(var f=document.getElementsByTagName("script"),l=0;l<f.length;l++){var s=f[l];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==n+u){a=s;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",n+u),a.src=r),e[r]=[o];var d=function(n,t){a.onerror=a.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(t)})),n)return n(t)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.p="/"}(),function(){var e=function(e,n,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var u=function(u){if(o.onerror=o.onload=null,"load"===u.type)t();else{var i=u&&("load"===u.type?"missing":u.type),a=u&&u.target&&u.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=a,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=u,o.href=n,document.head.appendChild(o),o},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],u=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(u===e||u===n))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],u=o.getAttribute("data-href");if(u===e||u===n)return o}},r=function(r){return new Promise((function(o,u){var i=t.miniCssF(r),a=t.p+i;if(n(i,a))return o();e(r,a,o,u)}))},o={143:0};t.f.miniCss=function(e,n){var t={202:1,395:1,698:1,816:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var u=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=u);var i=t.p+t.u(n),a=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var u=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;a.message="Loading chunk "+n+" failed.\n("+u+": "+i+")",a.name="ChunkLoadError",a.type=u,a.request=i,o[1](a)}};t.l(i,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,u,i=r[0],a=r[1],c=r[2],f=0;if(i.some((function(n){return 0!==e[n]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(c)var l=c(t)}for(n&&n(r);f<i.length;f++)u=i[f],t.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return t.O(l)},r=self["webpackChunkwarehouse_manage"]=self["webpackChunkwarehouse_manage"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(6255)}));r=t.O(r)})();
//# sourceMappingURL=app-legacy.2dc76a68.js.map