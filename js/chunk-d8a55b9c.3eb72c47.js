(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d8a55b9c"],{"0b49":function(t,e,o){"use strict";var a=o("6579"),n=o.n(a);n.a},6579:function(t,e,o){},cacf:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"cases"},[o("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.openDialog()}}},[t._v("新增用户")]),o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{border:"",data:t.tableData}},[o("el-table-column",{attrs:{prop:"Id",label:"序号",width:"180"}}),o("el-table-column",{attrs:{prop:"Key",label:"键",width:"180"}}),o("el-table-column",{attrs:{prop:"Content",label:"值"}}),o("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(o){return t.handleEdit(e.$index,e.row)}}}),o("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:function(o){return t.handleDelete(e.$index,e.row)}}})]}}])})],1),o("el-dialog",{attrs:{title:"案例编辑",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[o("el-form",{attrs:{model:t.formData}},[o("el-form-item",{attrs:{label:"数据键","label-width":t.formLabelWidth}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:t.formData.Key,callback:function(e){t.$set(t.formData,"Key",e)},expression:"formData.Key"}})],1),o("el-form-item",{attrs:{label:"数据键","label-width":t.formLabelWidth}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:t.formData.Content,callback:function(e){t.$set(t.formData,"Content",e)},expression:"formData.Content"}})],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleCreateOrModify()}}},[t._v("确 定")])],1)],1)],1)},n=[],l={data:function(){return{loading:!1,dialogFormVisible:!1,formLabelWidth:"120px",tableData:[],formData:{Id:0,Key:"",Content:"",CreateTime:new Date},options:{}}},mounted:function(){var t="Browser "+sessionStorage.getItem("token");this.options={headers:{Authorization:t}},this.loadData()},methods:{loadData:function(){},openDialog:function(){this.formData.Id=0,this.formData.Key="",this.formData.Content="",this.formData.CreateTime=new Date,this.dialogFormVisible=!0},handleCreateOrModify:function(){window.console.log(this.formData)},handleEdit:function(t,e){window.console.log(t,e),this.formData=e,this.dialogFormVisible=!0},handleDelete:function(t,e){window.console.log(t,e)},dateFormat:function(t){var e=new Date(t.CreateTime);return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()}}},i=l,r=(o("0b49"),o("2877")),s=Object(r["a"])(i,a,n,!1,null,"cd2c26fa",null);e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-d8a55b9c.3eb72c47.js.map