(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fda260a"],{"408b":function(t,s,a){},"48ca":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"login"},[a("div",{attrs:{id:"nav"}},[t._v(" FoodPocket 食物口袋 ")]),a("div",{staticClass:"wrap"},[a("div",{staticClass:"container"},[a("form",{staticClass:"form",on:{submit:function(s){return s.preventDefault(),t.signin(s)}}},[a("h2",[t._v("會員登入")]),a("div",{staticClass:"group"},[a("label",{attrs:{for:"user_id"}},[t._v("帳號")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",id:"user_id",placeholder:"請輸入帳號"},domProps:{value:t.username},on:{input:function(s){s.target.composing||(t.username=s.target.value)}}})]),a("div",{staticClass:"group"},[a("label",{attrs:{for:"user_password"}},[t._v("密碼")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"user_password",placeholder:"請輸入密碼"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})]),a("div",{staticClass:"login-group"},[a("button",{staticClass:"btn btn-dark",attrs:{type:"button"},on:{click:t.clear}},[t._v("取消")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("登入")])])])])])])},o=[],n={data:function(){return{username:"",password:""}},methods:{clear:function(){this.username="",this.password=""},signin:function(){var t=this,s="https://brycehuang.com/api/rest/loginAccount/",a=this;console.log(s);var e=new FormData;e.append("username",a.username),e.append("password",a.password),this.$http.post(s,e).then((function(s){if(console.log(s.data),"successful"===s.data.result){var a=s.data.data.token;console.log(a),t.$cookies.set("token",a),t.$router.push("/foodpocket")}else window.alert("帳號或密碼輸入錯誤，請再試一次"),t.password=""}))}}},r=n,i=(a("eb1b"),a("2877")),u=Object(i["a"])(r,e,o,!1,null,"03981952",null);s["default"]=u.exports},eb1b:function(t,s,a){"use strict";var e=a("408b"),o=a.n(e);o.a}}]);
//# sourceMappingURL=chunk-0fda260a.d6db41c4.js.map