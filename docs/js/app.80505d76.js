(function(t){function e(e){for(var r,o,s=e[0],c=e[1],l=e[2],d=0,f=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},i=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/utilidades-vzla/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("router-view")],1)],1)},i=[],o={name:"Home"},s=o,c=a("2877"),l=a("6544"),u=a.n(l),d=a("7496"),f=a("f6c4"),b=Object(c["a"])(s,n,i,!1,null,null,null),p=b.exports;u()(b,{VApp:d["a"],VMain:f["a"]});var m=a("8c4f"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-main",[a("menu-superior"),a("section",{staticClass:"text-center"},[0==t.loadingUSD&&0==t.loadingBTC?a("v-overlay",[a("v-progress-circular",{attrs:{size:50,color:"primary",indeterminate:""}})],1):t._e()],1),a("v-container",[a("v-row",[a("v-col",{attrs:{"offset-lg":"4","offset-md":"4","offset-sm":"3",col:"4",sm:"6",md:"4",lg:"4",xl:"4"}},[1==t.loadingUSD&&1==t.loadingBTC?a("v-card",[a("v-card-title",[t._v(" Convertidor BTC a Bs ")]),a("v-card-text",[t._v(" Tasa del BTC al día de : "+t._s(t.timestamp)+" "),a("br"),t._v(" 1 BTC = "+t._s(Intl.NumberFormat("de-DE").format(t.btcObject.USD.rate_float))+" USD "),a("br"),t._v(" 1 USD = "+t._s(Intl.NumberFormat("de-DE").format(t.usdObject.localbitcoin_ref))+" Bs ")]),a("v-form",{ref:"form",staticClass:"mx-5 pb-5",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{label:"BTC",required:"",type:"number"},on:{keyup:function(e){return t.switchera("BTC")}},model:{value:t.btc,callback:function(e){t.btc=e},expression:"btc"}}),a("v-text-field",{attrs:{label:"USD",required:"",type:"number"},on:{keyup:function(e){return t.switchera("USD")}},model:{value:t.usd,callback:function(e){t.usd=e},expression:"usd"}}),a("v-text-field",{attrs:{label:"Bs",required:"",type:"number"},on:{keyup:function(e){return t.switchera("Bs")}},model:{value:t.bs,callback:function(e){t.bs=e},expression:"bs"}})],1),a("v-card-subtitle",[t._v(" Las tasas de cambio fueron obtenidas de las apis de "),a("a",{attrs:{href:"https://api.coindesk.com/v1/bpi/currentprice.json"}},[t._v("Coindesk")]),t._v(" y "),a("a",{attrs:{href:"https://s3.amazonaws.com/dolartoday/data.json"}},[t._v("DolarToday")])])],1):t._e()],1)],1)],1)],1)},h=[],g=(a("b680"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("v-app-bar",{attrs:{color:"indigo darken-1",dark:""}},[a("v-toolbar-title",[t._v("Calculadora BTC")])],1)],1)}),_=[],y={data:function(){return{drawer:!1}}},w=y,C=a("40dc"),j=a("2a7f"),T=Object(c["a"])(w,g,_,!1,null,null,null),x=T.exports;u()(T,{VAppBar:C["a"],VToolbarTitle:j["a"]});var B=a("bc3a"),O=a.n(B),S={name:"Home",components:{MenuSuperior:x},watch:{$route:{immediate:!0,handler:function(t){document.title=t.meta.title||"Some Default Title"}}},mounted:function(){this.getNow(),this.obtenerPrecioBTC(),this.obtenerPrecioUSD()},data:function(){return{btcSwitch:!1,bsSwitch:!1,usdSwitch:!1,btc:0,usd:0,bs:0,loadingBTC:!1,loadingUSD:!1,btcObject:{},usdObject:{},valid:!0,name:"",numericRules:[function(t){return!!t||"Este campo es requerido"}],email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],select:null,items:["Item 1","Item 2","Item 3","Item 4"],checkbox:!1,timestamp:""}},methods:{validate:function(){this.$refs.form.validate()},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()},obtenerPrecioUSD:function(){var t=this;O.a.get("https://s3.amazonaws.com/dolartoday/data.json").then((function(e){t.usdObject=e.data.USD,t.loadingUSD=!0}))},obtenerPrecioBTC:function(){var t=this;O.a.get("https://api.coindesk.com/v1/bpi/currentprice.json").then((function(e){t.btcObject=e.data.bpi,t.loadingBTC=!0}))},getNow:function(){var t=new Date,e=t.getDate()+"-"+(t.getMonth()+1)+"-"+t.getFullYear(),a=t.getHours(),r=t.getMinutes(),n=a>=12?"pm":"am";a%=12,a=a||12,r=r<10?"0"+r:r;var i=a+":"+r+" "+n,o=e+" "+i;this.timestamp=o},switchera:function(t){switch(t){case"BTC":this.usd=this.btcObject.USD.rate_float*this.btc,this.bs=this.usdObject.localbitcoin_ref*this.usd,this.usd=this.usd.toFixed(2),this.bs=this.bs.toFixed(2);break;case"USD":this.btc=this.usd/this.btcObject.USD.rate_float,this.bs=this.usdObject.localbitcoin_ref*this.usd,this.bs=this.bs.toFixed(2);break;case"Bs":this.usd=this.bs/this.usdObject.localbitcoin_ref,this.btc=this.usd/this.btcObject.USD.rate_float,this.usd=this.usd.toFixed(2);break;default:break}}}},D=S,k=(a("a025"),a("b0af")),V=a("99d9"),U=a("62ad"),P=a("a523"),F=a("4bd4"),M=a("a797"),E=a("490a"),$=a("0fd9"),z=a("8654"),I=Object(c["a"])(D,v,h,!1,null,null,null),q=I.exports;u()(I,{VCard:k["a"],VCardSubtitle:V["a"],VCardText:V["b"],VCardTitle:V["c"],VCol:U["a"],VContainer:P["a"],VForm:F["a"],VMain:f["a"],VOverlay:M["a"],VProgressCircular:E["a"],VRow:$["a"],VTextField:z["a"]}),r["a"].use(m["a"]);var N=[{path:"/",name:"BTC a Bs / Bs a BTC",component:q,meta:{title:"BTC a Bs / Bs a BTC"}}],H=new m["a"]({mode:"history",base:"/utilidades-vzla/",routes:N}),R=H,A=a("f309");r["a"].use(A["a"]);var J=new A["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:R,vuetify:J,render:function(t){return t(p)}}).$mount("#app")},6537:function(t,e,a){},a025:function(t,e,a){"use strict";var r=a("6537"),n=a.n(r);n.a}});
//# sourceMappingURL=app.80505d76.js.map