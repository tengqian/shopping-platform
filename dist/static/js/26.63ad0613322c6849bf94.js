webpackJsonp([26],{"04rP":function(e,t,s){(e.exports=s("BkJT")(!1)).push([e.i,"\n.dashboard-editor-container[data-v-e2644c94] {\n  padding: 20px;\n  width: 100%;\n}\n",""])},"8xEa":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("dVeB"),o=s("L870"),i=s("Odk1"),n={props:{permission:{type:Object,default:{}}},data:function(){return{permissionForm:{id:"",name:"",projectId:0,pid:0,notes:""},projectList:[],roleList:[],authorityList:[],rules:{name:[{required:!0,message:"请输入角色名称",trigger:"blur"},{min:3,max:50,message:"长度在 3 到 50个字符",trigger:"blur"}],notes:[{required:!0,message:"请输入权限描述",trigger:"blur"},{min:3,max:10,message:"长度在 3 到 10个字符",trigger:"blur"}],projectId:[{required:!0,message:"请选择项目",trigger:"change"}]}}},created:function(){this.permissionForm=this.permission},watch:{permission:function(){this.permissionForm=this.permission}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){e&&(t.permissionForm.id?Object(o.g)(t.permissionForm).then(function(e){Object(r.Message)({message:"权限修改成功~",type:"success",duration:3e3})}).catch(function(e){408===e.status?t.$router.push("/408"):Object(r.Message)({message:e,type:"error",duration:3e3})}):Object(o.f)(t.permissionForm).then(function(e){Object(r.Message)({message:"权限添加成功~",type:"success",duration:3e3})}).catch(function(e){408===e.status?t.$router.push("/408"):Object(r.Message)({message:e,type:"error",duration:3e3})}),t.$emit("close"))})},closeDialog:function(e){this.$emit("close")},getProjectList:function(){var e=this;Object(i.d)().then(function(t){e.projectList=t.dataObject.projectsList}).catch(function(t){e.$router.push("/408")})},changeProject:function(e){var t=this;Object(i.c)(e).then(function(e){t.authorityList=e.dataObject.authoritiesList,console.log(t.authorityList)}).catch(function(e){408===e.status?t.$router.push("/408"):Object(r.Message)({message:e,type:"error",duration:3e3})})}},mounted:function(){this.getProjectList(),this.permissionForm.projectId&&this.changeProject(this.permissionForm.projectId)}},a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"dashboard-editor-container"},[s("el-form",{ref:"permissionForm",staticClass:"demo-ruleForm",attrs:{model:e.permissionForm,rules:e.rules,"label-width":"100px"}},[s("el-form-item",{attrs:{label:"权限名称",prop:"name"}},[s("el-input",{model:{value:e.permissionForm.name,callback:function(t){e.$set(e.permissionForm,"name",t)},expression:"permissionForm.name"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"权限描述",prop:"notes"}},[s("el-input",{model:{value:e.permissionForm.notes,callback:function(t){e.$set(e.permissionForm,"notes",t)},expression:"permissionForm.notes"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"所属项目",prop:"projectId"}},[s("el-select",{attrs:{placeholder:"选择项目"},on:{change:e.changeProject},model:{value:e.permissionForm.projectId,callback:function(t){e.$set(e.permissionForm,"projectId",t)},expression:"permissionForm.projectId"}},e._l(e.projectList,function(e){return s("el-option",{key:e.id,attrs:{label:e.projectName,value:e.id}})}))],1),e._v(" "),s("el-form-item",{attrs:{label:"上级权限"}},[s("el-select",{attrs:{placeholder:"选择上级权限"},model:{value:e.permissionForm.pid,callback:function(t){e.$set(e.permissionForm,"pid",t)},expression:"permissionForm.pid"}},e._l(e.authorityList,function(e){return s("el-option",{key:e.id,attrs:{label:e.notes,value:e.id}})}))],1),e._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("permissionForm")}}},[e._v("保存")])],1)],1)],1)},staticRenderFns:[]};var c=s("/Xao")(n,a,!1,function(e){s("qr4j")},"data-v-e2644c94",null);t.default=c.exports},qr4j:function(e,t,s){var r=s("04rP");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);s("8bSs")("c620fe28",r,!0)}});