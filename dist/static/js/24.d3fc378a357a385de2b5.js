webpackJsonp([24],{"+cvd":function(e,t,i){"use strict";t.a=function(e){return Object(c.a)({url:s.a.GET_CITICES_LIST_URL,method:"post",data:{provinceId:e}})},t.b=function(e){return Object(c.a)({url:s.a.GET_SAVE_CITICES_URL,method:"post",data:e})},t.c=function(e){return Object(c.a)({url:s.a.GET_UPDATE_CITICES_URL,method:"post",data:e})};var c=i("vLgD"),s=i("FN8c")},Af2s:function(e,t,i){(e.exports=i("BkJT")(!1)).push([e.i,"\n.dashboard-editor-container[data-v-0395bb6e] {\n  padding: 20px;\n  width: 100%;\n}\n",""])},QatA:function(e,t,i){var c=i("Af2s");"string"==typeof c&&(c=[[e.i,c,""]]),c.locals&&(e.exports=c.locals);i("8bSs")("6cf76e48",c,!0)},v4Q3:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=i("dVeB"),s=i("+cvd"),r={props:{citices:{type:Object,default:{}}},data:function(){return{citicesForm:{id:"",name:"",provinceId:0,areaCode:"",seq:0,status:0,longitude:"",latitude:""},rules:{name:[{required:!0,message:"请输入市名称",trigger:"blur"},{min:2,max:5,message:"长度在 2 到 5个字符",trigger:"blur"}],areaCode:[{required:!0,message:"请输入身份证号编号",trigger:"blur"},{min:2,max:2,message:"长度 2 个字符",trigger:"blur"}]}}},created:function(){this.citicesForm=this.citices},watch:{citices:function(){}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){e&&(t.citicesForm.id?Object(s.c)(t.citicesForm).then(function(e){Object(c.Message)({message:"市修改成功~",type:"success",duration:3e3}),t.$emit("closeCitices")}).catch(function(e){t.$emit("closeCitices"),408===e.status?t.$router.push("/408"):Object(c.Message)({message:e,type:"error",duration:3e3})}):Object(s.b)(t.citicesForm).then(function(e){Object(c.Message)({message:"市添加成功~",type:"success",duration:3e3}),t.$emit("closeCitices")}).catch(function(e){t.$emit("closeCitices"),408===e.status?t.$router.push("/408"):Object(c.Message)({message:e,type:"error",duration:3e3})}))})}},mounted:function(){}},o={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"dashboard-editor-container"},[i("el-form",{ref:"citicesForm",staticClass:"demo-ruleForm",attrs:{model:e.citicesForm,rules:e.rules,"label-width":"100px"}},[i("el-form-item",{attrs:{label:"市名称",prop:"name"}},[i("el-input",{model:{value:e.citicesForm.name,callback:function(t){e.$set(e.citicesForm,"name",t)},expression:"citicesForm.name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"省份id",prop:"provinceId"}},[i("el-input",{attrs:{disabled:!0},model:{value:e.citicesForm.provinceId,callback:function(t){e.$set(e.citicesForm,"provinceId",t)},expression:"citicesForm.provinceId"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"省份名称",prop:"provinceName"}},[i("el-input",{attrs:{disabled:!0},model:{value:e.citicesForm.provinceName,callback:function(t){e.$set(e.citicesForm,"provinceName",t)},expression:"citicesForm.provinceName"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"身份证号编号",prop:"areaCode"}},[i("el-input",{model:{value:e.citicesForm.areaCode,callback:function(t){e.$set(e.citicesForm,"areaCode",t)},expression:"citicesForm.areaCode"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"排序",prop:"seq"}},[i("el-input",{model:{value:e.citicesForm.seq,callback:function(t){e.$set(e.citicesForm,"seq",t)},expression:"citicesForm.seq"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"经度",prop:"longitude"}},[i("el-input",{model:{value:e.citicesForm.longitude,callback:function(t){e.$set(e.citicesForm,"longitude",t)},expression:"citicesForm.longitude"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"纬度",prop:"latitude"}},[i("el-input",{model:{value:e.citicesForm.latitude,callback:function(t){e.$set(e.citicesForm,"latitude",t)},expression:"citicesForm.latitude"}})],1),e._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("citicesForm")}}},[e._v("保存")])],1)],1)],1)},staticRenderFns:[]};var a=i("/Xao")(r,o,!1,function(e){i("QatA")},"data-v-0395bb6e",null);t.default=a.exports}});