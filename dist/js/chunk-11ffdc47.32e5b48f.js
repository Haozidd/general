(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11ffdc47"],{"32a6":function(e,t,n){},"333d":function(e,t,n){"use strict";var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"pagination"},[t("button",{staticClass:"last",attrs:{disabled:1===e.pageNo},on:{click:function(t){return e.jump(e.pageNo+-1)}}},[t("span",[e._v("上一页")])]),t("button",{directives:[{name:"show",rawName:"v-show",value:e.beginAndEndNumber.begin>1,expression:"beginAndEndNumber.begin>1"}],on:{click:function(t){return e.jump(1)}}},[e._v("1")]),t("button",{directives:[{name:"show",rawName:"v-show",value:e.beginAndEndNumber.begin>2,expression:"beginAndEndNumber.begin>2"}],attrs:{disabled:""}},[e._v("···")]),e._l(e.beginAndEndNumber.pagesContinuous,(function(n,a){return t("button",{key:a,class:{currentPage:e.pageNo===e.beginAndEndNumber.begin+a},on:{click:function(t){return e.jump(e.beginAndEndNumber.begin+a)}}},[e._v(" "+e._s(e.beginAndEndNumber.begin+a)+" ")])})),t("button",{directives:[{name:"show",rawName:"v-show",value:e.beginAndEndNumber.begin+e.pagesContinuous-1<e.pagesTotal-1,expression:"beginAndEndNumber.begin+pagesContinuous-1<pagesTotal-1"}],attrs:{disabled:""}},[e._v("···")]),t("button",{directives:[{name:"show",rawName:"v-show",value:e.beginAndEndNumber.begin+e.pagesContinuous-1<e.pagesTotal,expression:"beginAndEndNumber.begin+pagesContinuous-1<pagesTotal"}],on:{click:function(t){return e.jump(e.pagesTotal)}}},[e._v(e._s(e.pagesTotal))]),t("button",{attrs:{disabled:e.pageNo===e.pagesTotal},on:{click:function(t){return e.jump(e.pageNo+1)}}},[e._v("下一页")]),t("button",{style:{marginLeft:"30px",background:"transparent"}},[e._v("共 "+e._s(e.goodsTotal)+" 条")])],2)},i=[],s={name:"Pagination",props:["pageSize","goodsTotal","pagesContinuous"],data(){return{pageNo:1}},methods:{jump(e){this.pageNo=e,this.$emit("buttonJump",e)}},computed:{pagesTotal(){return Math.ceil(this.goodsTotal/this.pageSize)},beginAndEndNumber(){let e,t,{pagesTotal:n,pagesContinuous:a,pageNo:i}=this;return n<a&&(e=1,t=n,a=n),e=i-Math.floor(a/2),e<1&&(e=1),e+a>n&&(e=n-a+1),{begin:e,end:t,pagesContinuous:a}}}},o=s,l=(n("df9c"),n("2877")),r=Object(l["a"])(o,a,i,!1,null,"9cf908ba",null);t["a"]=r.exports},"61f1":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{height:"100%"},attrs:{id:"studentList"}},[t("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline,size:"medium"}},[t("el-form-item",{attrs:{label:""}},[t("el-input",{attrs:{placeholder:"请输入你要查询的名字"},model:{value:e.formInline.name,callback:function(t){e.$set(e.formInline,"name",t)},expression:"formInline.name"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.clickEvent("search")}}},[e._v("查询")]),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.clickEvent("get")}}},[e._v("重置")])],1)],1),t("el-table",{staticStyle:{width:"100%",height:"100%"},attrs:{data:e.sliceTableData,border:""}},[t("el-table-column",{attrs:{prop:"id",label:"Id",align:"center"}}),t("el-table-column",{attrs:{prop:"name",label:"姓名",align:"center"}}),t("el-table-column",{attrs:{prop:"age",label:"年龄",align:"center"}}),t("el-table-column",{attrs:{prop:"sex_text",label:"性别",align:"center"}}),t("el-table-column",{attrs:{prop:"number",label:"学号",align:"center"}}),t("el-table-column",{attrs:{prop:"class",label:"班级",align:"center"}}),t("el-table-column",{attrs:{prop:"state_text",label:"状态",align:"center"}}),t("el-table-column",{attrs:{prop:"address",label:"地址",align:"center"}}),t("el-table-column",{attrs:{prop:"phone",label:"电话",align:"center"}}),t("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(n){return[t("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(t){return e.clickEvent("delete",n.row.id)}}},[e._v("删除")])]}}])})],1),t("Pagination",{attrs:{"goods-total":e.total,"page-size":e.pageSize,"pages-continuous":3},on:{buttonJump:e.buttonJump}})],1)},i=[],s=n("333d"),o=n("2f62"),l={name:"",components:{Pagination:s["a"]},data(){return{pageNo:1,pageSize:5,formInline:{name:""}}},mounted(){this.getData()},computed:{...Object(o["b"])({tableData:e=>e.studentList.studentList,total:e=>e.studentList.total}),sliceTableData(){return this.tableData.slice((this.pageNo-1)*this.pageSize,this.pageNo*this.pageSize)}},methods:{getData(e){this.$store.dispatch("getStudentList",e)},clickEvent(e,t){switch(e){case"search":this.getData(this.formInline);break;case"get":this.getData();break;case"delete":this.$store.dispatch("deleteStudentData",t);break}},buttonJump(e){this.pageNo=e}}},r=l,u=(n("b545"),n("2877")),c=Object(u["a"])(r,a,i,!1,null,"2d9742b2",null);t["default"]=c.exports},"83c7":function(e,t,n){},b545:function(e,t,n){"use strict";n("32a6")},df9c:function(e,t,n){"use strict";n("83c7")}}]);
//# sourceMappingURL=chunk-11ffdc47.32e5b48f.js.map