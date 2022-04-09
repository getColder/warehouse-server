"use strict";(self["webpackChunkwarehouse_manage"]=self["webpackChunkwarehouse_manage"]||[]).push([[395],{2395:function(e,t,a){a.r(t),a.d(t,{default:function(){return _}});var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"manager"},[a("el-dialog",{attrs:{title:"add"===e.operateType?"新增项目":"更改项目",visible:e.isShow},on:{"update:visible":function(t){e.isShow=t}}},[a("common-form",{ref:"form",attrs:{formLabel:e.operateFormLabel,form:e.operateForm,inline:!0}}),a("div",{staticClass:"dialog-foot",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.isShow=!1}}},[e._v("取消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.confirm}},[e._v("确认")])],1)],1),a("div",{staticClass:"manager-header"},[a("el-button",{staticStyle:{"margin-bottom":"20px"},attrs:{type:"success",size:"mini"},on:{click:e.addItem}},[e._v("新增项目")]),a("common-form",{ref:"form",attrs:{formLabel:e.formLabel,form:e.searchForm,inline:!0}},[a("el-button",{attrs:{type:"primary"},on:{click:e.getList}},[e._v("搜索")])],1)],1),a("common-table",{attrs:{tableData:e.tableData,tableLabel:e.tableLabel,config:e.config},on:{changePage:function(t){return e.getList()},edit:function(t){return e.editItem()},delete:function(t){return e.deleteItem()}}})],1)},o=[],r=(a(1079),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"form",attrs:{"label-width":"100px",model:e.form,inline:e.inline}},[e._l(e.formLabel,(function(t){return a("el-form-item",{key:t.label,attrs:{label:t.label}},["input"===t.type?a("el-input",{attrs:{placeholder:"请输入"+t.label},model:{value:e.form[t.model],callback:function(a){e.$set(e.form,t.model,a)},expression:"form[item.model]"}}):e._e(),"switch"===t.type?a("el-switch",{model:{value:e.form[t.model],callback:function(a){e.$set(e.form,t.model,a)},expression:"form[item.model]"}}):e._e(),"date"===t.type?a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:e.form[t.model],callback:function(a){e.$set(e.form,t.model,a)},expression:"form[item.model]"}}):e._e(),"select"===t.type?a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form[t.model],callback:function(a){e.$set(e.form,t.model,a)},expression:"form[item.model]"}},e._l(t.opts,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1):e._e()],1)})),a("el-form-item",[e._t("default")],2)],2)}),n=[],i={name:"commonForm",props:{formLabel:Array,form:Object,inline:Boolean},data(){return{}}},s=i,m=a(1001),c=(0,m.Z)(s,r,n,!1,null,null,null),p=c.exports,u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"common-table"},[a("el-card",{staticClass:"table-view"},[a("el-table",{staticClass:"table-body-view",attrs:{data:e.tableData,height:"90%",stripe:""}},[e._l(e.tableLabel,(function(t){return a("el-table-column",{key:t.prop,attrs:{"show-overflow-tooltip":"",label:t.label,width:t.width?t.width:125,"header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(l){return[a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(l.row[t.prop]))])]}}],null,!0)})})),a("el-table-column",{attrs:{label:"操作","header-align":"center",align:"center","min-width":"180"}},[a("el-button",{attrs:{size:"mini"},on:{click:e.handleEdit}},[e._v("编辑")]),a("el-button",{attrs:{size:"mini",type:"warning"},on:{click:e.handleDelete}},[e._v("删除")]),a("el-button",{attrs:{size:"mini",type:"primay"},on:{click:e.handleEdit}},[e._v("入库")]),a("el-button",{attrs:{size:"mini",type:"primay"},on:{click:e.handleEdit}},[e._v("出库")])],1)],2),a("el-pagination",{staticClass:"pager",attrs:{layout:"prev, pager, next",total:e.config.total,"current-page":e.config.page,"page-size":20},on:{"update:currentPage":function(t){return e.$set(e.config,"page",t)},"update:current-page":function(t){return e.$set(e.config,"page",t)},"current-page":e.changePage}})],1)],1)},d=[],f={name:"CommonTable",data(){return{}},props:{tableData:Array,tableLabel:Array,config:Object},methods:{handleEdit(e){this.$emit("edit",e)},handleDelete(e){this.$emit("delete",e)},changePage(e){this.$emit("changePage",e)}}},b=f,h=(0,m.Z)(b,u,d,!1,null,null,null),g=h.exports,y={name:"warehouse",components:{CommonForm:p,CommonTable:g},data(){return{operateType:"add",isShow:!1,operateFormLabel:[{model:"name",label:"项目名称",type:"input"},{model:"number",label:"数量",type:"input"},{model:"pcs",label:"计量单位",type:"input"},{model:"group",label:"分组",type:"select",opts:[{label:"分组1",value:"g1"},{label:"分组2",value:"g2"}]}],operateForm:{name:"",number:"",psc:""},formLabel:[{model:"keyword",label:"",type:"input"}],searchForm:{keyword:""},tableLabel:[{prop:"item",label:"项目名称",width:"250"},{prop:"number",label:"存量",width:"150"},{prop:"pcs",label:"单位",width:"150"},{prop:"group",label:"分组",width:"250"}],tableData:Array(40).fill({item:"物品1",number:"5",pcs:"个",group:"分组1"}),config:{page:1,total:20}}},methods:{confirm(){"add"===this.operateType?this.$http.post("/warehouse/add",this.operateForm,(e=>{console.log(e),this.isShow=!1})):"edit"===this.operateType&&this.$http.post("/warehouse/edit",this.operateForm,(e=>{console.log(e),this.isShow=!1}))},addItem(){this.isShow=!0,this.operateType="add"},getList(){}}},v=y,w=(0,m.Z)(v,l,o,!1,null,null,null),_=w.exports}}]);
//# sourceMappingURL=395.2a66daee.js.map