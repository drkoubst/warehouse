(function(e){function t(t){for(var a,u,o=t[0],l=t[1],b=t[2],_=0,s=[];_<o.length;_++)u=o[_],Object.prototype.hasOwnProperty.call(c,u)&&c[u]&&s.push(c[u][0]),c[u]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);i&&i(t);while(s.length)s.shift()();return r.push.apply(r,b||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var l=n[o];0!==c[l]&&(a=!1)}a&&(r.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},c={app:0},r=[];function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var b=0;b<o.length;b++)t(o[b]);var i=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"210e":function(module,__webpack_exports__,__webpack_require__){"use strict";var _utils_ajax_api__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("a510"),_components_showContent__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("ebcc");__webpack_exports__["a"]={components:{showContent:_components_showContent__WEBPACK_IMPORTED_MODULE_1__["a"]},data:function(){return{form:{buildname:""},datas:""}},methods:{goBack:function(){location.href="/"},onSubmit:function onSubmit(){var _this=this,data=_utils_ajax_api__WEBPACK_IMPORTED_MODULE_0__["a"].search_by_build_name(this.form.buildname);data.then((function(response){_this.datas=eval(response["data"]["data"]),console.log(_this.datas)}))}}}},"384f":function(module,__webpack_exports__,__webpack_require__){"use strict";var _utils_ajax_api__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("a510");__webpack_exports__["a"]={name:"overviewshow",data:function(){return{tableData:"",timer:"",freshvalue:!0}},methods:{getOverView:function getOverView(){var _this=this;1==this.freshvalue&&_utils_ajax_api__WEBPACK_IMPORTED_MODULE_0__["a"].get_over_view().then((function(response){if(200===response.status){var newData=eval(response.data.data);newData!==_this.tableData&&(_this.tableData=newData)}}))}},computed:{},mounted:function(){this.timer=setInterval(this.getOverView,3e3)},beforeUnmount:function(){clearInterval(this.timer)}}},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function c(e,t){var n=Object(a["M"])("router-view");return Object(a["D"])(),Object(a["i"])(n)}const r={};r.render=c;var u=r,o=n("6c02"),l=Object(a["l"])("首页"),b=Object(a["l"])("name"),i=Object(a["l"])("buildname"),_=Object(a["l"])("sessionid");function s(e,t,n,c,r,u){var o=Object(a["M"])("el-alert"),s=Object(a["M"])("el-divider"),O=Object(a["M"])("el-col"),d=Object(a["M"])("el-menu-item"),j=Object(a["M"])("el-menu"),m=Object(a["M"])("overviewshow"),f=Object(a["M"])("el-row");return Object(a["D"])(),Object(a["i"])(a["b"],null,[Object(a["m"])(o,{title:"date  管理平台",type:"success"}),Object(a["m"])(s),Object(a["m"])(f,null,{default:Object(a["ab"])((function(){return[Object(a["m"])(O,{span:4}),Object(a["m"])(O,{span:16,style:{margin:"0 auto"}},{default:Object(a["ab"])((function(){return[Object(a["m"])(j,{"default-active":e.activeIndex,class:"el-menu-demo",mode:"horizontal",onSelect:u.handleSelect},{default:Object(a["ab"])((function(){return[Object(a["m"])(d,{index:"1"},{default:Object(a["ab"])((function(){return[l]})),_:1}),Object(a["m"])(d,{index:"2"},{default:Object(a["ab"])((function(){return[b]})),_:1}),Object(a["m"])(d,{index:"3"},{default:Object(a["ab"])((function(){return[i]})),_:1}),Object(a["m"])(d,{index:"4"},{default:Object(a["ab"])((function(){return[_]})),_:1})]})),_:1},8,["default-active","onSelect"]),Object(a["m"])(m)]})),_:1}),Object(a["m"])(O,{span:4})]})),_:1})],64)}var O=Object(a["eb"])("data-v-a405342a");Object(a["G"])("data-v-a405342a");var d=Object(a["l"])("video url");Object(a["E"])();var j=O((function(e,t,n,c,r,u){var o=Object(a["M"])("el-switch"),l=Object(a["M"])("el-form-item"),b=Object(a["M"])("el-link"),i=Object(a["M"])("el-form"),_=Object(a["M"])("el-table-column"),s=Object(a["M"])("el-table");return Object(a["D"])(),Object(a["i"])(a["b"],null,[Object(a["m"])(o,{modelValue:r.freshvalue,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.freshvalue=e}),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"]),Object(a["m"])(s,{data:r.tableData,style:{width:"100%"}},{default:O((function(){return[Object(a["m"])(_,{type:"expand"},{default:O((function(e){return[Object(a["m"])(i,{"label-position":"left",inline:"",class:"demo-table-expand"},{default:O((function(){return[Object(a["m"])(l,{label:"build_name : "},{default:O((function(){return[Object(a["m"])("span",null,Object(a["Q"])(e.row.build_name),1)]})),_:2},1024),Object(a["m"])(l,{label:"status_ind : "},{default:O((function(){return[Object(a["m"])("span",null,Object(a["Q"])(e.row.status_ind),1)]})),_:2},1024),Object(a["m"])(l,{label:"session_id : "},{default:O((function(){return[Object(a["m"])("span",null,Object(a["Q"])(e.row.session_id),1)]})),_:2},1024),Object(a["m"])(l,{label:"video_url : "},{default:O((function(){return[Object(a["m"])(b,{underline:!1,href:e.row.video_url},{default:O((function(){return[d]})),_:2},1032,["href"])]})),_:2},1024),Object(a["m"])(l,{label:"duration : "},{default:O((function(){return[Object(a["m"])("span",null,Object(a["Q"])(e.row.duration),1)]})),_:2},1024),Object(a["m"])(l,{label:"ltime : "},{default:O((function(){return[Object(a["m"])("span",null,Object(a["Q"])(e.row.ltime),1)]})),_:2},1024)]})),_:2},1024)]})),_:1}),Object(a["m"])(_,{label:"ltime",prop:"ltime"}),Object(a["m"])(_,{label:"name",prop:"name"}),Object(a["m"])(_,{label:"build_name",prop:"build_name"}),Object(a["m"])(_,{label:"status_ind",prop:"status_ind"})]})),_:1},8,["data"])],64)})),m=n("384f");n("be9c");m["a"].render=j,m["a"].__scopeId="data-v-a405342a";var f=m["a"],p={components:{overviewshow:f},methods:{handleSelect:function(e,t){2==t[0]&&(location.href="/search/name"),3==t[0]&&(location.href="/search/buildname"),4==t[0]&&(location.href="/search/sessionid")}}};p.render=s;var h=p,v=(n("b0c0"),Object(a["m"])("div",{style:{width:"100%",height:"2rem"}},null,-1)),M=Object(a["l"])("搜索");function w(e,t,n,c,r,u){var o=Object(a["M"])("el-col"),l=Object(a["M"])("el-page-header"),b=Object(a["M"])("el-row"),i=Object(a["M"])("el-header"),_=Object(a["M"])("el-aside"),s=Object(a["M"])("el-input"),O=Object(a["M"])("el-form-item"),d=Object(a["M"])("el-button"),j=Object(a["M"])("el-form"),m=Object(a["M"])("el-main"),f=Object(a["M"])("showContent"),p=Object(a["M"])("el-container");return Object(a["D"])(),Object(a["i"])(p,null,{default:Object(a["ab"])((function(){return[Object(a["m"])(i,null,{default:Object(a["ab"])((function(){return[v,Object(a["m"])(b,null,{default:Object(a["ab"])((function(){return[Object(a["m"])(o,{span:4}),Object(a["m"])(o,{span:8},{default:Object(a["ab"])((function(){return[Object(a["m"])(l,{title:"首页",onBack:u.goBack,content:"Name 搜索页"},null,8,["onBack"])]})),_:1}),Object(a["m"])(o,{span:4})]})),_:1})]})),_:1}),Object(a["m"])(b,{gutter:20},{default:Object(a["ab"])((function(){return[Object(a["m"])(o,{span:4},{default:Object(a["ab"])((function(){return[Object(a["m"])(_)]})),_:1}),Object(a["m"])(o,{span:16},{default:Object(a["ab"])((function(){return[Object(a["m"])(m,null,{default:Object(a["ab"])((function(){return[Object(a["m"])(j,{ref:"form",model:r.form,"label-width":"80px"},{default:Object(a["ab"])((function(){return[Object(a["m"])(O,{label:"Name "},{default:Object(a["ab"])((function(){return[Object(a["m"])(s,{modelValue:r.form.name,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.form.name=e})},null,8,["modelValue"])]})),_:1}),Object(a["m"])(O,null,{default:Object(a["ab"])((function(){return[Object(a["m"])(d,{type:"primary",onClick:u.onSubmit},{default:Object(a["ab"])((function(){return[M]})),_:1},8,["onClick"])]})),_:1})]})),_:1},8,["model"])]})),_:1}),Object(a["bb"])(Object(a["m"])(f,{datas:r.datas},null,8,["datas"]),[[a["X"],""!=r.datas]])]})),_:1})]})),_:1})]})),_:1})}var y=n("83da");y["a"].render=w;var k=y["a"],D=Object(a["m"])("div",{style:{width:"100%",height:"2rem"}},null,-1),E=Object(a["l"])("搜索");function g(e,t,n,c,r,u){var o=Object(a["M"])("el-col"),l=Object(a["M"])("el-page-header"),b=Object(a["M"])("el-row"),i=Object(a["M"])("el-header"),_=Object(a["M"])("el-aside"),s=Object(a["M"])("el-input"),O=Object(a["M"])("el-form-item"),d=Object(a["M"])("el-button"),j=Object(a["M"])("el-form"),m=Object(a["M"])("el-main"),f=Object(a["M"])("showContent"),p=Object(a["M"])("el-container");return Object(a["D"])(),Object(a["i"])(p,null,{default:Object(a["ab"])((function(){return[Object(a["m"])(i,null,{default:Object(a["ab"])((function(){return[D,Object(a["m"])(b,null,{default:Object(a["ab"])((function(){return[Object(a["m"])(o,{span:4}),Object(a["m"])(o,{span:8},{default:Object(a["ab"])((function(){return[Object(a["m"])(l,{title:"首页",onBack:u.goBack,content:"Build Name 搜索页"},null,8,["onBack"])]})),_:1}),Object(a["m"])(o,{span:4})]})),_:1})]})),_:1}),Object(a["m"])(b,{gutter:20},{default:Object(a["ab"])((function(){return[Object(a["m"])(o,{span:4},{default:Object(a["ab"])((function(){return[Object(a["m"])(_)]})),_:1}),Object(a["m"])(o,{span:16},{default:Object(a["ab"])((function(){return[Object(a["m"])(m,null,{default:Object(a["ab"])((function(){return[Object(a["m"])(j,{ref:"form",model:r.form,"label-width":"80px"},{default:Object(a["ab"])((function(){return[Object(a["m"])(O,{label:"Build Name "},{default:Object(a["ab"])((function(){return[Object(a["m"])(s,{modelValue:r.form.buildname,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.form.buildname=e})},null,8,["modelValue"])]})),_:1}),Object(a["m"])(O,null,{default:Object(a["ab"])((function(){return[Object(a["m"])(d,{type:"primary",onClick:u.onSubmit},{default:Object(a["ab"])((function(){return[E]})),_:1},8,["onClick"])]})),_:1})]})),_:1},8,["model"])]})),_:1}),Object(a["bb"])(Object(a["m"])(f,{datas:r.datas},null,8,["datas"]),[[a["X"],""!=r.datas]])]})),_:1})]})),_:1})]})),_:1})}var P=n("210e");P["a"].render=g;var x=P["a"],C=Object(a["m"])("div",{style:{width:"100%",height:"2rem"}},null,-1),B=Object(a["l"])("搜索");function I(e,t,n,c,r,u){var o=Object(a["M"])("el-col"),l=Object(a["M"])("el-page-header"),b=Object(a["M"])("el-row"),i=Object(a["M"])("el-header"),_=Object(a["M"])("el-aside"),s=Object(a["M"])("el-input"),O=Object(a["M"])("el-form-item"),d=Object(a["M"])("el-button"),j=Object(a["M"])("el-form"),m=Object(a["M"])("el-main"),f=Object(a["M"])("el-container");return Object(a["D"])(),Object(a["i"])(f,null,{default:Object(a["ab"])((function(){return[Object(a["m"])(i,null,{default:Object(a["ab"])((function(){return[C,Object(a["m"])(b,null,{default:Object(a["ab"])((function(){return[Object(a["m"])(o,{span:4}),Object(a["m"])(o,{span:8},{default:Object(a["ab"])((function(){return[Object(a["m"])(l,{title:"首页",onBack:u.goBack,content:"Session Id 搜索页"},null,8,["onBack"])]})),_:1}),Object(a["m"])(o,{span:4})]})),_:1})]})),_:1}),Object(a["m"])(b,{gutter:20},{default:Object(a["ab"])((function(){return[Object(a["m"])(o,{span:4},{default:Object(a["ab"])((function(){return[Object(a["m"])(_)]})),_:1}),Object(a["m"])(o,{span:16},{default:Object(a["ab"])((function(){return[Object(a["m"])(m,null,{default:Object(a["ab"])((function(){return[Object(a["m"])(j,{ref:"form",model:r.form,"label-width":"80px"},{default:Object(a["ab"])((function(){return[Object(a["m"])(O,{label:"Session Id "},{default:Object(a["ab"])((function(){return[Object(a["m"])(s,{modelValue:r.form.sessionid,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.form.sessionid=e})},null,8,["modelValue"])]})),_:1}),Object(a["m"])(O,null,{default:Object(a["ab"])((function(){return[Object(a["m"])(d,{type:"primary",onClick:u.onSubmit},{default:Object(a["ab"])((function(){return[B]})),_:1},8,["onClick"])]})),_:1})]})),_:1},8,["model"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})}var S={data:function(){return{form:{sessionid:""}}},methods:{goBack:function(){location.href="/"},onSubmit:function(){console.info(this.form.sessionid)}}};S.render=I;var U=S,T=[{path:"/",name:"index",component:h},{path:"/search/name",name:"name",component:k},{path:"/search/buildname",component:x},{path:"/search/sessionid",component:U}],V=Object(o["a"])({history:Object(o["b"])(window.location.path),routes:T}),K=V,L=n("3fd4"),A=(n("7dd6"),Object(a["h"])(u));A.use(K),A.use(L["a"]),A.mount("#app")},"83da":function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("b0c0"),core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__),_utils_ajax_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("a510"),_components_showContent__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("ebcc");__webpack_exports__["a"]={components:{showContent:_components_showContent__WEBPACK_IMPORTED_MODULE_2__["a"]},data:function(){return{form:{name:""},datas:""}},methods:{goBack:function(){location.href="/"},onSubmit:function onSubmit(){var _this=this,data=_utils_ajax_api__WEBPACK_IMPORTED_MODULE_1__["a"].search_by_name(this.form.name);data.then((function(response){_this.datas=eval(response["data"]["data"]),console.log(_this.datas)}))}}}},a510:function(e,t,n){"use strict";n("d3b7");var a=n("bc3a"),c=n.n(a),r=c.a.create();r.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",r.interceptors.request.use((function(e){return e}),(function(e){return Promise.error(e)})),r.interceptors.response.use((function(e){return 200===e.status?Promise.resolve(e):Promise.reject(e)}),(function(e){var t=e.response;return t?Promise.reject(t):window.navigator.onLine?Promise.reject(e):void 0}));var u=r,o={hosturl:window.location.origin},l={search_by_name:function(e){return u.get("".concat(o.hosturl,"/v1/search_by_name/")+e)},search_by_build_name:function(e){return u.get("".concat(o.hosturl,"/v1/search_by_build_name/")+e)},get_over_view:function(){return u.get("".concat(o.hosturl,"/v1/over_view"))}};t["a"]=l},be9c:function(e,t,n){"use strict";n("d1b6")},d1b6:function(e,t,n){},ebcc:function(e,t,n){"use strict";n("b0c0");var a=n("7a23"),c=Object(a["eb"])("data-v-59720a1e");Object(a["G"])("data-v-59720a1e");var r=Object(a["m"])("br",null,null,-1),u=Object(a["l"])(" status_ind : "),o=Object(a["m"])("br",null,null,-1),l=Object(a["m"])("br",null,null,-1),b=Object(a["l"])(" build_name : "),i=Object(a["m"])("br",null,null,-1);Object(a["E"])();var _=c((function(e,t,n,_,s,O){var d=Object(a["M"])("el-button"),j=Object(a["M"])("el-link"),m=Object(a["M"])("el-divider"),f=Object(a["M"])("el-card");return Object(a["D"])(),Object(a["i"])(f,{class:"box-card"},{header:c((function(){return[]})),default:c((function(){return[(Object(a["D"])(!0),Object(a["i"])(a["b"],null,Object(a["K"])(n.datas,(function(e){return Object(a["D"])(),Object(a["i"])("div",{key:e,class:"text item"},[Object(a["l"])(" name : "+Object(a["Q"])(e["name"])+" ",1),r,u,Object(a["bb"])(Object(a["m"])(d,{type:"primary",size:"mini",onClick:function(t){return O.openvideo_url(e["video_url"])}},{default:c((function(){return[Object(a["l"])(Object(a["Q"])(e["status_ind"]),1)]})),_:2},1032,["onClick"]),[[a["X"],"running"===e["status_ind"]]]),Object(a["bb"])(Object(a["m"])(d,{type:"success",size:"mini",disabled:""},{default:c((function(){return[Object(a["l"])(Object(a["Q"])(e["status_ind"]),1)]})),_:2},1536),[[a["X"],"completed"===e["status_ind"]]]),o,Object(a["l"])(" duration : "+Object(a["Q"])(e["duration"])+" ",1),l,b,Object(a["m"])(j,{underline:!1,href:O.search_by_build_name(e["build_name"])},{default:c((function(){return[Object(a["l"])(Object(a["Q"])(e["build_name"]),1)]})),_:2},1032,["href"]),i,Object(a["l"])(" session_id : "+Object(a["Q"])(e["session_id"])+" ",1),Object(a["m"])(m)])})),128))]})),_:1})})),s={name:"showContent",props:["datas"],methods:{openvideo_url:function(e){window.open(e,"_blank").location},search_by_build_name:function(e){return"/search_by_build_name/"+e},delete_by_session_id:function(e){return"/delete_by_session_id/"+e}}};s.render=_,s.__scopeId="data-v-59720a1e";t["a"]=s}});
//# sourceMappingURL=app.4a80942d.js.map