(function(e){function t(t){for(var r,o,i=t[0],c=t[1],l=t[2],s=0,f=[];s<i.length;s++)o=i[s],a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);h&&h(t);while(f.length)f.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={1:0},a={1:0},u=[];function i(e){return c.p+"js/"+({0:"en",2:"lang-en-json"}[e]||e)+"."+{0:"b1664a5a",2:"545920e4"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={0:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({0:"en",2:"lang-en-json"}[e]||e)+"."+{0:"3d424941",2:"31d6cfe0"}[e]+".css",o=c.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var i=a[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===o))return t()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){i=s[u],l=i.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.request=r,n(a)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=u);var l,s=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.src=i(e),l=function(t){f.onerror=f.onload=null,clearTimeout(h);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");u.type=r,u.request=o,n[1](u)}a[e]=void 0}};var h=setTimeout(function(){l({type:"timeout",target:f})},12e4);f.onerror=f.onload=l,s.appendChild(f)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var h=s;u.push([0,3]),n()})({"+K3J":function(e){e.exports={meta:"展览会网站",home:{search:{placeholder:"搜索"},foot:{btn1:"首页",btn2:"产品分类"}},type:{loading:"加载中...",foot:{btn1:"首页",btn2:"产品分类"}},products:{loading:"加载中...",foot:{btn1:"首页",btn2:"品牌介绍",btn3:"购买渠道"}},introduct:{code:{des1:"长按识别二维码",des2:"关注公众号"},foot:{btn1:"首页",btn2:"品牌介绍",btn3:"购买渠道"}},buy:{foot:{btn1:"首页",btn2:"品牌介绍",btn3:"购买渠道"}},detail:{title:"商品描述",foot:{btn1:"首页",btn2:"品牌介绍",btn3:"购买渠道"}}}},0:function(e,t,n){e.exports=n("Vtdi")},BFHj:function(e){e.exports=[{name:"English",des:"EN",lang:"en"},{name:"中文",des:"中文",lang:"zh"}]},Vtdi:function(e,t,n){"use strict";n.r(t);n("Oyvg"),n("pIFo"),n("yt8O"),n("VRzm");var r,o=n("Kw5r"),a=n("jE9Z"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],c=(n("KKXr"),{mounted:function(){var e=this;document.querySelector(".body-loading").style.display="none";var t=this.$store.getters.getLanList,n="zh";setTimeout(function(){var r=e.$route.path.split("/")[1];t.some(function(e){if(e.lang===r)return n=r,!0;r=""}),e.$store.dispatch({type:"setLanguage",language:n}),e.$store.dispatch({type:"setPath",path:r})},200)}}),l=c,s=n("KHd+"),f=Object(s["a"])(l,u,i,!1,null,null,null),h=f.exports,p=(n("91GP"),n("yT7P")),g=(n("f3/d"),n("RW0V"),n("rGqo"),n("BFHj")),d=n("qGEu"),m={zh:function(e){return function(t){return n.e(0).then(function(){return t(n("/soz")("./".concat(e,".vue")))}.bind(null,n)).catch(n.oe)}},en:function(e){return function(t){return n.e(0).then(function(){return t(n("/soz")("./".concat(e,".vue")))}.bind(null,n)).catch(n.oe)}}},v=function(e,t){return m[e](t)},y=function(e){var t=[];function n(e,n,r){var o={path:e.path.slice(1),meta:{title:e.title||e.name,description:e.description,lang:n},name:e.name,component:v(n,e.component)};t[r].children.push(o)}return Object.keys(e).forEach(function(r,o){var a=e[r];t.push({path:"/".concat(r),redirect:"/",component:v(r,"Index"),children:[]}),a.forEach(function(e){n(e,r,o)})}),t},b=y(d);if(r=localStorage.getItem("ZEALAND_LANGUAGE"),!r){var E=(navigator.language||navigator.browserLanguage).toLowerCase();r="en",0===E.indexOf("zh")&&(r="zh"),0===E.indexOf("en")&&(r="en")}var w=Object(p["a"])({},b[0]);w.path="";var A=w.children.map(function(e){var t=Object.assign({},e);return t.name=t.name+"default",t});w.children=A,b.unshift(w);var L=0;g.forEach(function(e,t){e.lang===r&&(L=t)}),r=g[L].lang,localStorage.setItem("ZEALAND_LANGUAGE",r),b=b.concat([{path:"*",redirect:"/"}]);var N=b,x=n("L2JU"),j=(n("Z2Ku"),n("qSUR")),O=function(){var e,t="default";return e=function(){Array.prototype.slice;var e,n,r,o,a=Array.prototype.shift,u=Array.prototype.unshift,i={},c=function(e,t){for(var n,r=0,o=e.length;r<o;r++){var a=e[r];n=t.call(a,r,a)}return n};return e=function(e,t,n){n[e]||(n[e]=[]),n[e].push(t)},r=function(e,t,n){if(t[e])if(n)for(var r=t[e].length;r>=0;r--)t[e][r]===n&&t[e].splice(r,1);else t[e]=[]},n=function(){var e=a.call(arguments),t=a.call(arguments),n=arguments,r=this,o=e[t];if(o&&o.length)return c(o,function(){this.apply(r,n)})},o=function(o){o=o||t;var a={},l=[],s={listen:function(t,n,r){e(t,n,a),null!==l&&("last"===r?l.length&&l.pop()():c(l,function(){this()}),l=null)},one:function(e,t,n){r(e,a),this.listen(e,t,n)},remove:function(e,t){r(e,a,t)},trigger:function(){var e,t,r=this;return u.call(arguments,a),t=arguments,e=function(){return n.apply(r,t)},l?l.push(e):e()}};return o?i[o]?i[o]:i[o]=s:s},{create:o,one:function(e,t,n){var r=this.create();r.one(e,t,n)},remove:function(e,t){var n=this.create();n.remove(e,t)},listen:function(e,t,n){var r=this.create();r.listen(e,t,n)},trigger:function(){var e=this.create();e.trigger.apply(this,arguments)}}}(),e}(),z=O,P=n("+K3J");window.subscribe=z,o["a"].use(j["a"]);var G={zh:P},S=new j["a"]({locale:"zh",fallbackLocale:"zh",messages:G}),_=["zh"];function T(e){return S.locale=e,localStorage.setItem("ZEALAND",e),document.querySelector("#app").className="language-".concat(e),document.querySelector("html").setAttribute("lang",e),document.querySelector(".body-loading").style.display="none",window.subscribe.trigger("languageChange",e),e}function C(e){return S.locale!==e?(document.querySelector(".body-loading").style.display="",_.includes(e)?Promise.resolve(T(e)):n("xrXN")("./".concat(e,".json")).then(function(t){return S.setLocaleMessage(e,t),_.push(e),T(e)})):Promise.resolve(e)}var H=n("uXAG"),q=n("kfSD"),M=n.n(q),k=n("tFmz"),B=n.n(k);o["a"].use(x["a"]);var D=new x["a"].Store({state:{language:"",lanList:g,login:!1,path:"/"},getters:{getLanguage:function(e){return e.language},getLanList:function(e){return e.lanList},getPath:function(e){return e.path},getLogin:function(e){return e.login}},mutations:{LANGUAGE_CHANGE:function(e,t){e.language=t.language,C(e.language).then(function(){console.log("language change",t.language)}),"en"===t.language?H["a"].use("en-US",M.a):H["a"].use("zh-CN",B.a)},PATH_CHANGE:function(e,t){e.path=t.path},LOGIN_CHANGE:function(e,t){e.login=t.login,window.subscribe.trigger("login",t)}},actions:{setLanguage:function(e,t){var n=e.commit;n("LANGUAGE_CHANGE",t)},setPath:function(e,t){var n=e.commit;n("PATH_CHANGE",t)},setLogin:function(e,t){var n=e.commit;n("LOGIN_CHANGE",t)}}});n("hZCq");o["a"].use(H["c"]),window.subscribe=z,window.version="0.0.1",Date.prototype.format=function(e){var t={"y+":this.getFullYear(),"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var n in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),t)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[n]:("00"+t[n]).substr((""+t[n]).length)));return e};var $=new a["a"]({mode:"hash",routes:N,scrollBehavior:function(e,t,n){return n||{x:0,y:0}}});$.beforeEach(function(e,t,n){n()}),o["a"].use(a["a"]),new o["a"]({i18n:S,store:D,router:$,render:function(e){return e(h)}}).$mount("#app")},qGEu:function(e){e.exports={zh:[{name:"home-zh",path:"/",component:"Home"},{name:"type-zh",path:"/type",component:"Type"},{name:"product-zh",path:"/product",component:"Product"},{name:"introduce-zh",path:"/introduce",component:"Introduce"},{name:"buy-zh",path:"/buy",component:"Buy"},{name:"detail-zh",path:"/detail",component:"Detail"}],en:[{name:"home-en",path:"/",component:"Home"},{name:"type-en",path:"/type",component:"Type"},{name:"product-en",path:"/product",component:"Product"},{name:"introduce-en",path:"/introduce",component:"Introduce"},{name:"buy-en",path:"/buy",component:"Buy"},{name:"detail-en",path:"/detail",component:"Detail"}]}},xrXN:function(e,t,n){var r={"./en.json":["B/52",2],"./zh.json":["+K3J"]};function o(e){var t=r[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){var e=t[0];return n.t(e,3)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(r)},o.id="xrXN",e.exports=o}});
//# sourceMappingURL=app.eef09275.js.map