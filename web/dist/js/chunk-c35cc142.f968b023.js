(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c35cc142"],{"02b5":function(t,e,s){},"0a6e":function(t,e,s){"use strict";s("02b5")},a25c:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("Topbar"),s("div",{staticClass:"installer"},[s("el-card",{staticStyle:{padding:"40px"},attrs:{shadow:"never"}},[s("el-steps",{staticClass:"step",attrs:{active:t.step,"finish-status":"success"}},[s("el-step",{attrs:{title:"配置数据库"}}),s("el-step",{attrs:{title:"配置管理员账号"}}),s("el-step",{attrs:{title:"安装完成"}})],1),s("el-form",{directives:[{name:"show",rawName:"v-show",value:t.stepShown(0),expression:"stepShown(0)"}],staticClass:"form",attrs:{model:t.form.database,"label-width":"100px"}},[s("el-form-item",{attrs:{label:"数据库类型",prop:"driver"}},[s("el-radio-group",{model:{value:t.form.database.driver,callback:function(e){t.$set(t.form.database,"driver",e)},expression:"form.database.driver"}},[s("el-radio",{attrs:{label:"sqlite3"}}),s("el-radio",{attrs:{label:"mysql"}}),s("el-radio",{attrs:{label:"postgres"}}),s("el-radio",{attrs:{label:"mssql"}})],1)],1),s("el-form-item",{attrs:{label:"DSN",prop:"dsn"}},[s("el-input",{model:{value:t.form.database.dsn,callback:function(e){t.$set(t.form.database,"dsn",e)},expression:"form.database.dsn"}})],1),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:function(e){t.step++}}},[t._v("下一步")])],1)],1),s("el-form",{directives:[{name:"show",rawName:"v-show",value:t.stepShown(1),expression:"stepShown(1)"}],ref:"form",staticClass:"form",attrs:{model:t.form.administrator,rules:t.rules,"label-width":"100px"}},[s("el-form-item",{attrs:{label:"管理员账号",prop:"email"}},[s("el-input",{model:{value:t.form.administrator.email,callback:function(e){t.$set(t.form.administrator,"email",e)},expression:"form.administrator.email"}})],1),s("el-form-item",{attrs:{label:"管理员密码",prop:"password"}},[s("el-input",{attrs:{type:"password"},model:{value:t.form.administrator.password,callback:function(e){t.$set(t.form.administrator,"password",e)},expression:"form.administrator.password"}})],1),s("el-form-item",{attrs:{label:"密码确认",prop:"passwordr"}},[s("el-input",{attrs:{type:"password"},model:{value:t.form.administrator.passwordr,callback:function(e){t.$set(t.form.administrator,"passwordr",e)},expression:"form.administrator.passwordr"}})],1),s("el-form-item",[s("el-button",{on:{click:function(e){t.step--}}},[t._v("上一步")]),s("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("form")}}},[t._v("开始安装")])],1)],1),s("div",{directives:[{name:"show",rawName:"v-show",value:t.stepShown(3),expression:"stepShown(3)"}],staticStyle:{"text-align":"center"}},[s("h3",{staticStyle:{"margin-bottom":"50px"}},[t._v("恭喜！ZPan安装成功啦~")]),s("el-button",{attrs:{type:"primary"},on:{click:t.toSignin}},[t._v("去登录")])],1)],1)],1)],1)},r=[],o=s("0b47"),i={components:{Topbar:o["a"]},data:function(){var t=this,e=function(e,s,a){s?(""!==t.form.administrator.passwordr&&t.$refs.form.validateField("passwordr"),a()):a(new Error("请输入密码"))},s=function(e,s,a){s?s!==t.form.administrator.password?a(new Error("两次输入密码不一致!")):a():a(new Error("请再次输入密码"))};return{step:0,dsns:{sqlite3:"zpan.db",mysql:"user:pass@tcp(127.0.0.1:3306)/zpan?charset=utf8mb4&parseTime=True&loc=Local",postgres:"host=localhost user=admin password=admin dbname=zpan port=9920 sslmode=disable TimeZone=Asia/Shanghai",mssql:"sqlserver://zpan:LoremIpsum86@localhost:9930?database=zpan"},form:{database:{driver:"sqlite3",dsn:"zpan.db"},administrator:{email:"admin@zpan.space"}},rules:{email:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],password:[{validator:e,trigger:"blur",required:!0}],passwordr:[{validator:s,trigger:"blur",required:!0}]}}},watch:{"form.database.driver":function(t,e){this.form.database.dsn=this.dsns[t]}},computed:{},methods:{stepShown:function(t){return this.step==t},submitForm:function(t){var e=this;this.$refs[t].validate((function(t){console.log(t),t?(console.log(e.form),e.$zpan.System.installDatabase(e.form.database).then((function(t){setTimeout((function(){e.$zpan.System.createAdministrator(e.form.administrator).then((function(){e.$message({type:"success",message:"安装成功"}),e.step++,e.step++}))}),1e3)}))):console.log("error submit!!")}))},toSignin:function(){this.$router.push({name:"signin",params:{email:this.form.administrator.email}})}}},n=i,l=(s("0a6e"),s("2877")),m=Object(l["a"])(n,a,r,!1,null,null,null);e["default"]=m.exports}}]);