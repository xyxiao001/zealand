(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[0],{"/soz":function(t,n,i){var s={"./Buy.vue":"VOyy","./Detail.vue":"yEu0","./Home.vue":"u1G+","./Index.vue":"1QRf","./Introduce.vue":"/v3f","./Product.vue":"0vFH","./Type.vue":"dOCX"};function e(t){var n=a(t);return i(n)}function a(t){var n=s[t];if(!(n+1)){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}return n}e.keys=function(){return Object.keys(s)},e.resolve=a,t.exports=e,e.id="/soz"},"/v3f":function(t,n,i){"use strict";i.r(n);var s=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("main",{staticClass:"introduce"},[i("img",{attrs:{src:t.baseUrl+"common/p1.png",alt:""}}),i("p",{staticClass:"title"},[t._v("\n    品牌介绍\n  ")]),i("p",{staticClass:"des"},[t._v("\n    安佳隶属于恒天然集团，拥有130多年的悠久历\n    史，是恒天然旗下的旗舰品牌。\n  ")]),i("p",{staticClass:"des"},[t._v("\n    恒天然牧场和工厂都建在纯净天然的新西兰，通\n    过严格掌控“从牧场到餐桌”供应链的每一步，确\n    保进口到中国的产品质量符合中国食品安全国家\n    标准，让源于牛奶的营养菁华滋养每个家庭的健\n    康生活。在上百年的发展历程中，安佳一直致力\n    产品革新与开发，现在已经成长为一个全球性品\n    牌。通过遍布世界的销售网络，如今安佳在全球\n    生产和销售500多种不同的产品。多年以来，安\n    佳始终致力于研发及生产各种高品质的乳制品以\n    满足大众和专业市场的需求，其业务覆盖消费品\n    牌以及餐饮服务等多个领域。\n  ")]),i("p",{staticClass:"des"},[t._v("\n    在消费品牌方面，安佳纯牛奶、儿童牛奶、奶\n    粉，以及黄油、淡奶油、芝士等产品帮助满足全\n    家人对于每日营养的需要；在餐饮服务方面，安\n    佳品牌为烘焙店、餐厅、酒店和快餐店提供黄\n    油、淡奶油、芝士等高品质乳制品和餐饮解决方\n    案。\n  ")]),i("img",{staticClass:"code",attrs:{src:t.baseUrl+"common/code.png",alt:""}}),i("p",[t._v(t._s(t.options.code.des1))]),i("p",[t._v(t._s(t.options.code.des2))]),i("div",{staticClass:"foot-menu"},[i("router-link",{attrs:{to:{path:t.path+"/"}}},[t._v(t._s(t.options.foot.btn1))]),i("router-link",{attrs:{to:{path:t.path+"/introduce?id="+t.id}}},[t._v(t._s(t.options.foot.btn2))]),i("router-link",{attrs:{to:{path:t.path+"/buy?id="+t.id}}},[t._v(t._s(t.options.foot.btn3))])],1)])},e=[],a=(i("yt8O"),i("VRzm"),{data:function(){return{id:"",baseUrl:"/"}},computed:{options:function(){return this.$t("introduct")},path:function(){return this.$store.getters.getPath}},components:{},methods:{},mounted:function(){var t="";this.$route.query.id&&(t=this.$route.query.id),this.id=t}}),r=a,o=(i("7DZY"),i("KHd+")),d=Object(o["a"])(r,s,e,!1,null,"f77e3714",null);n["default"]=d.exports},"0vFH":function(t,n,i){"use strict";i.r(n);var s=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("main",{staticClass:"product"},[i("img",{staticClass:"product-img",attrs:{src:t.baseUrl+"common/p1.png",alt:""}}),i("header-search"),i("van-pull-refresh",{on:{refresh:function(n){t.refresh()}},model:{value:t.pull,callback:function(n){t.pull=n},expression:"pull"}},[i("section",{staticClass:"show-list"},t._l(t.list,function(n){return i("a",{key:n.id,staticClass:"show-item",on:{click:function(i){t.go(n.id)}}},[i("img",{attrs:{src:t.baseUrl+"common/"+n.img,alt:""}}),i("p",[t._v(t._s(n.name))])])}))]),i("div",{staticClass:"foot-menu"},[i("router-link",{attrs:{to:{path:t.path+"/"}}},[t._v(t._s(t.options.foot.btn1))]),i("router-link",{attrs:{to:{path:t.path+"/introduce?id="+t.id}}},[t._v(t._s(t.options.foot.btn2))]),i("router-link",{attrs:{to:{path:t.path+"/buy?id="+t.id}}},[t._v(t._s(t.options.foot.btn3))])],1)],1)},e=[],a=(i("yt8O"),i("VRzm"),i("76VC")),r=i("uXAG"),o={data:function(){return{baseUrl:"/",id:1,pull:!1,page:1,list:[],default:[{id:1,name:"安佳调制乳粉安佳高钙全脂中老年成人青少年学生奶粉",img:"item3.png"},{id:2,name:"新西兰制造 酸奶粉香草味",img:"item1.png"},{id:3,name:"新西兰制造 酸奶粉草莓味",img:"item2.png"},{id:4,name:"新西兰制造 酸奶草莓味",img:"item1.png"}]}},computed:{options:function(){return this.$t("products")},path:function(){return this.$store.getters.getPath}},components:{headerSearch:a["a"]},methods:{getList:function(){var t=this,n=this.list;0===n.length&&(this.showToast(),setTimeout(function(){t.list=t.default,t.clearToast(),t.pull=!1},1e3))},showToast:function(){r["b"].loading({duration:0,mask:!0,message:this.options.loading})},clearToast:function(){r["b"].clear()},go:function(t){this.$router.push("".concat(this.path,"/detail?id=").concat(t))},refresh:function(){this.page=1,this.list=[],this.getList()}},mounted:function(){var t="";this.$route.query.id&&(t=this.$route.query.id),this.id=t,this.getList()}},d=o,l=(i("nKPA"),i("CSZz"),i("KHd+")),c=Object(l["a"])(d,s,e,!1,null,"2a138aa4",null);n["default"]=c.exports},"1QRf":function(t,n,i){"use strict";i.r(n);var s=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"new-zealand"},[i("router-view")],1)},e=[],a=(i("yt8O"),i("VRzm"),{data:function(){return{baseUrl:"/",loading:!1}},computed:{lang:function(){return this.$store.getters.getLanguage},login:function(){return this.$store.getters.getLogin}},watch:{lang:function(){document.title=this.$t("meta")}},components:{},methods:{},mounted:function(){var t=this;document.body.addEventListener("touchstart",function(){}),window.subscribe.listen("languageChange",function(){document.title=t.$t("meta")})}}),r=a,o=(i("nFus"),i("KHd+")),d=Object(o["a"])(r,s,e,!1,null,null,null);n["default"]=d.exports},"76VC":function(t,n,i){"use strict";var s=function(){var t=this,n=this,i=n.$createElement,s=n._self._c||i;return s("header",[s("router-link",{attrs:{to:{path:n.path+"/"}}},[s("img",{staticClass:"logo",attrs:{src:""+n.baseUrl+n.lang+"/logo-small.png",alt:"logo"}})]),s("label",{staticClass:"search"},[s("van-icon",{attrs:{name:"search"}}),s("input",{directives:[{name:"model",rawName:"v-model",value:n.keywords,expression:"keywords"}],attrs:{type:"text",placeholder:n.options.search.placeholder},domProps:{value:n.keywords},on:{keyup:function(t){return"button"in t||!n._k(t.keyCode,"enter",13,t.key,"Enter")?n.search(t):null},input:function(t){t.target.composing||(n.keywords=t.target.value)}}})],1),s("p",{staticClass:"language",on:{click:function(){return t.showList=!0}}},[s("span",[n._v(n._s(this.langName))]),s("i",{staticClass:"iconfont icon-arrowdown-copy"})]),s("van-popup",{attrs:{position:"bottom"},model:{value:n.showList,callback:function(t){n.showList=t},expression:"showList"}},[s("section",{staticClass:"lang-list"},n._l(n.langList,function(t){return s("a",{key:t.name,on:{click:function(i){n.changeLanguage(t.lang)}}},[n._v("\n        "+n._s(t.name)+"\n      ")])}))])],1)},e=[],a=(i("f3/d"),i("rGqo"),{data:function(){return{baseUrl:"/",showList:!1,keywords:""}},computed:{lang:function(){return this.$store.getters.getLanguage},langList:function(){return this.$store.getters.getLanList},path:function(){return this.$store.getters.getPath},options:function(){return this.$t("home")},langName:function(){var t=this,n=this.langList,i="中文";return n.forEach(function(n){n.lang===t.lang&&(i=n.name)}),i}},methods:{search:function(){console.log("search"),this.$emit("search",this.keywords)},changeLanguage:function(t){this.$store.dispatch({type:"setLanguage",language:t}),this.showList=!1}}}),r=a,o=(i("HTWa"),i("KHd+")),d=Object(o["a"])(r,s,e,!1,null,"c56fa6ae",null);n["a"]=d.exports},"7DZY":function(t,n,i){"use strict";var s=i("vIz8"),e=i.n(s);e.a},"7u04":function(t,n,i){},CSZz:function(t,n,i){"use strict";var s=i("iCcC"),e=i.n(s);e.a},HTWa:function(t,n,i){"use strict";var s=i("fatY"),e=i.n(s);e.a},UxXJ:function(t,n,i){"use strict";var s=i("WQ8c"),e=i.n(s);e.a},VOyy:function(t,n,i){"use strict";i.r(n);var s=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("main",{staticClass:"buy"},[i("img",{attrs:{src:t.baseUrl+"common/p1.png",alt:""}}),i("p",{staticClass:"title"},[t._v("\n    购买渠道\n  ")]),i("section",{staticClass:"buy-list"},t._l(t.list,function(n){return i("a",{key:n.id,staticClass:"buy-item",attrs:{href:n.url}},[i("img",{attrs:{src:t.baseUrl+"common/"+n.img,alt:""}}),i("p",[i("span",[t._v(t._s(n.name))]),i("span",[t._v(t._s(n.showUrl))])])])})),i("div",{staticClass:"foot-menu"},[i("router-link",{attrs:{to:{path:t.path+"/"}}},[t._v(t._s(t.options.foot.btn1))]),i("router-link",{attrs:{to:{path:t.path+"/introduce?id="+t.id}}},[t._v(t._s(t.options.foot.btn2))]),i("router-link",{attrs:{to:{path:t.path+"/buy?id="+t.id}}},[t._v(t._s(t.options.foot.btn3))])],1)])},e=[],a=(i("yt8O"),i("VRzm"),{data:function(){return{id:"",baseUrl:"/",list:[{id:1,name:"anchor安佳官方旗舰店",showUrl:"www.anchor.tmall.com",img:"b1.png",url:"https://anchor.tmall.com/?spm=a220m.6910245.0.0.1c617afe6vbUk6&shop_id=103716573"},{id:2,name:"安佳牛奶京东自营旗舰店",showUrl:"www.mall.jd.com",img:"b2.png",url:"https://mall.jd.com/index-1000014486.html"}]}},computed:{options:function(){return this.$t("introduct")},path:function(){return this.$store.getters.getPath}},components:{},methods:{},mounted:function(){var t="";this.$route.query.id&&(t=this.$route.query.id),this.id=t}}),r=a,o=(i("eUSO"),i("KHd+")),d=Object(o["a"])(r,s,e,!1,null,"52c92054",null);n["default"]=d.exports},WQ8c:function(t,n,i){},ZXfc:function(t,n,i){"use strict";var s=i("7u04"),e=i.n(s);e.a},dOCX:function(t,n,i){"use strict";i.r(n);var s=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("main",{staticClass:"type"},[i("header-search"),i("section",{staticClass:"type-list"},[i("van-tabs",{attrs:{swipeable:""},model:{value:t.index,callback:function(n){t.index=n},expression:"index"}},t._l(t.tabList,function(n){return i("van-tab",{key:n.id,attrs:{title:n.name}},[i("van-pull-refresh",{on:{refresh:function(i){t.refresh(n)}},model:{value:t.pull,callback:function(n){t.pull=n},expression:"pull"}},[i("section",{staticClass:"show-list"},t._l(n.list,function(n){return i("a",{key:n.id,staticClass:"show-item",on:{click:function(i){t.go(n.id)}}},[i("img",{attrs:{src:t.baseUrl+"common/"+n.img,alt:""}}),i("p",[t._v(t._s(n.name))])])}))])],1)}))],1),i("div",{staticClass:"foot-menu"},[i("router-link",{attrs:{to:{path:t.path+"/"}}},[t._v(t._s(t.options.foot.btn1))]),i("router-link",{attrs:{to:{path:t.path+"/type"}}},[t._v(t._s(t.options.foot.btn2))])],1)],1)},e=[],a=(i("yt8O"),i("VRzm"),i("76VC")),r=i("uXAG"),o={data:function(){return{index:0,baseUrl:"/",pull:!1,tabList:[{id:1,name:"乳制品",pull:!1,list:[]},{id:2,name:"果蔬",pull:!1,list:[]},{id:3,name:"蜂蜜",pull:!1,list:[]},{id:4,name:"肉制品",pull:!1,list:[]},{id:5,name:"服装",pull:!1,list:[]},{id:6,name:"电器",pull:!1,list:[]}],default:[{id:1,name:"安佳调制乳粉安佳高钙全脂中老年成人青少年学生奶粉",img:"item3.png"},{id:2,name:"新西兰制造 酸奶粉香草味",img:"item1.png"},{id:3,name:"新西兰制造 酸奶粉草莓味",img:"item2.png"},{id:4,name:"新西兰制造 酸奶草莓味",img:"item1.png"}]}},computed:{options:function(){return this.$t("type")},path:function(){return this.$store.getters.getPath}},watch:{index:function(t){var n=this.tabList[t].list;0===n.length&&this.getList(),this.pull=!1}},components:{headerSearch:a["a"]},methods:{refresh:function(t){var n=this;this.$nextTick(function(){t.list=[],n.getList()})},getList:function(){var t=this,n=this.tabList[this.index];0===n.list.length&&(this.showToast(),setTimeout(function(){n.list=t.default,t.clearToast(),t.pull=!1},1e3))},showToast:function(){r["b"].loading({duration:0,mask:!0,message:this.options.loading})},clearToast:function(){r["b"].clear()},go:function(t){this.$router.push("".concat(this.path,"/detail?id=").concat(t))}},mounted:function(){this.getList()}},d=o,l=(i("ZXfc"),i("KHd+")),c=Object(l["a"])(d,s,e,!1,null,"5f64b368",null);n["default"]=c.exports},eUSO:function(t,n,i){"use strict";var s=i("s4MT"),e=i.n(s);e.a},fatY:function(t,n,i){},iCcC:function(t,n,i){},jlES:function(t,n,i){"use strict";var s=i("qDXo"),e=i.n(s);e.a},nFus:function(t,n,i){"use strict";var s=i("rPx3"),e=i.n(s);e.a},nKPA:function(t,n,i){"use strict";var s=i("wxxR"),e=i.n(s);e.a},qDXo:function(t,n,i){},rPx3:function(t,n,i){},s4MT:function(t,n,i){},"u1G+":function(t,n,i){"use strict";i.r(n);var s=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("main",{staticClass:"home"},[i("header-search"),i("van-swipe",{attrs:{autoplay:5e3}},t._l(t.swiperList,function(n){return i("van-swipe-item",{key:n.id},[i("section",{staticClass:"swiper"},[i("img",{attrs:{src:t.baseUrl+"common/"+n.img,alt:""}})])])})),i("section",{staticClass:"brand-wrapper"},[i("section",{ref:"brandList",staticClass:"brand-list"},t._l(t.brandList,function(n){return i("section",{key:n.id,staticClass:"brand-item"},[i("p",{staticClass:"title"},[t._v(t._s(n.key))]),i("section",{staticClass:"item-list"},t._l(n.list,function(n){return i("router-link",{key:n.id,attrs:{to:{path:t.path+"/product?id="+n.id}}},[i("img",{attrs:{src:t.baseUrl+"common/"+n.img,alt:""}})])}))])})),i("section",{ref:"menu",staticClass:"brand-menu"},t._l(t.brandList,function(n){return i("a",{key:n.id,on:{click:function(i){t.go(n.top)}}},[t._v("\n        "+t._s(n.key)+"\n      ")])}))]),i("div",{staticClass:"foot-menu"},[i("router-link",{attrs:{to:{path:t.path+"/"}}},[t._v(t._s(t.options.foot.btn1))]),i("router-link",{attrs:{to:{path:t.path+"/type"}}},[t._v(t._s(t.options.foot.btn2))])],1)],1)},e=[],a=(i("pIFo"),i("rGqo"),i("yt8O"),i("VRzm"),i("76VC")),r={data:function(){return{baseUrl:"/",swiperList:[{id:1,img:"s1.jpg"},{id:2,img:"s2.jpg"}],brandList:[{key:"A",list:[{id:1,img:"brand1.png"},{id:2,img:"brand2.png"},{id:3,img:"brand3.png"}]},{key:"B",list:[{id:1,img:"brand1.png"},{id:2,img:"brand2.png"},{id:3,img:"brand3.png"}]},{key:"C",list:[{id:1,img:"brand1.png"},{id:2,img:"brand2.png"},{id:3,img:"brand3.png"}]},{key:"D",list:[{id:1,img:"brand1.png"},{id:2,img:"brand1.png"},{id:3,img:"brand1.png"}]},{key:"E",list:[{id:1,img:"brand1.png"},{id:2,img:"brand1.png"},{id:3,img:"brand1.png"}]},{key:"F",list:[{id:1,img:"brand1.png"},{id:2,img:"brand1.png"},{id:3,img:"brand1.png"}]},{key:"G",list:[{id:1,img:"brand1.png"},{id:2,img:"brand1.png"},{id:3,img:"brand1.png"}]},{key:"H",list:[{id:1,img:"brand1.png"},{id:2,img:"brand1.png"},{id:3,img:"brand1.png"}]},{key:"I",list:[{id:1,img:"brand1.png"},{id:2,img:"brand1.png"},{id:3,img:"brand1.png"}]},{key:"J",list:[{id:1,img:"brand1.png"},{id:2,img:"brand1.png"},{id:3,img:"brand1.png"}]},{key:"K",list:[{id:1,img:"brand1.png"},{id:2,img:"brand1.png"},{id:3,img:"brand1.png"}]},{key:"L",list:[{id:1,img:"brand1.png"},{id:2,img:"brand1.png"},{id:3,img:"brand1.png"}]},{key:"M",list:[{id:1,img:"brand1.png"},{id:2,img:"brand1.png"},{id:3,img:"brand1.png"}]},{key:"N",list:[{id:1,img:"brand1.png"},{id:2,img:"brand1.png"},{id:3,img:"brand1.png"}]},{key:"O",list:[{id:1,img:"brand1.png"},{id:2,img:"brand1.png"},{id:3,img:"brand1.png"}]},{key:"P",list:[{id:1,img:"brand1.png"},{id:2,img:"brand1.png"},{id:3,img:"brand1.png"}]},{key:"Q",list:[{id:1,img:"brand1.png"},{id:2,img:"brand1.png"},{id:3,img:"brand1.png"}]},{key:"R",list:[{id:1,img:"brand1.png"},{id:2,img:"brand1.png"},{id:3,img:"brand1.png"}]},{key:"S",list:[{id:1,img:"brand1.png"},{id:2,img:"brand1.png"},{id:3,img:"brand1.png"}]},{key:"T",list:[{id:1,img:"brand1.png"},{id:2,img:"brand1.png"},{id:3,img:"brand1.png"}]},{key:"U",list:[{id:1,img:"brand1.png"},{id:2,img:"brand1.png"},{id:3,img:"brand1.png"}]},{key:"V",list:[{id:1,img:"brand1.png"},{id:2,img:"brand1.png"},{id:3,img:"brand1.png"}]},{key:"W",list:[{id:1,img:"brand1.png"},{id:2,img:"brand1.png"},{id:3,img:"brand1.png"}]},{key:"X",list:[{id:1,img:"brand1.png"},{id:2,img:"brand1.png"},{id:3,img:"brand1.png"}]},{key:"Y",list:[{id:1,img:"brand1.png"},{id:2,img:"brand1.png"},{id:3,img:"brand1.png"}]},{key:"Z",list:[{id:1,img:"brand1.png"},{id:2,img:"brand1.png"},{id:3,img:"brand1.png"}]}]}},computed:{options:function(){return this.$t("home")},path:function(){return this.$store.getters.getPath}},components:{headerSearch:a["a"]},methods:{updateView:function(){var t=this,n=Array.prototype.slice.call(this.$refs.brandList.childNodes);n.forEach(function(n,i){t.brandList[i].height=parseInt(window.getComputedStyle(n).height.replace("px","")),t.brandList[i].top=n.offsetTop})},go:function(t){this.goScroll(t)},goScroll:function(t){var n,i=this;n=window.requestAnimationFrame?window.requestAnimationFrame:setTimeout(function(t){t()},17);var s=0,e=window.scrollY,a=t-e,r=20,o=function t(){var o=i.run(s,e,a,r);window.scrollTo(0,o),s+=1,s<=r&&n(t)};o()},run:function(t,n,i,s){return i*(t/=s)*t+n}},mounted:function(){var t=this;window.onscroll=function(){var n=window.scrollY;t.$refs.menu.style.position=n>260?"fixed":"absolute",t.updateView()}},destroyed:function(){window.onscroll=null}},o=r,d=(i("jlES"),i("KHd+")),l=Object(d["a"])(o,s,e,!1,null,"22dc1ebe",null);n["default"]=l.exports},vIz8:function(t,n,i){},wxxR:function(t,n,i){},yEu0:function(t,n,i){"use strict";i.r(n);var s=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("main",{staticClass:"detail"},[i("header-search"),i("van-swipe",{attrs:{autoplay:5e3}},t._l(t.swiperList,function(n){return i("van-swipe-item",{key:n.id},[i("section",{staticClass:"swiper"},[i("img",{attrs:{src:t.baseUrl+"common/"+n.img,alt:""}})])])})),i("p",{staticClass:"name"},[t._v("\n    新西兰原装进口成人奶粉 安佳（Anchor）全脂奶粉 调制乳粉 900g罐装\n  ")]),i("section",{staticClass:"desc"},[t._m(0),i("section",{staticClass:"desc-list"},[i("img",{attrs:{src:t.baseUrl+"common/des1.jpg",alt:""}}),i("img",{attrs:{src:t.baseUrl+"common/des2.jpg",alt:""}}),i("img",{attrs:{src:t.baseUrl+"common/des3.jpg",alt:""}}),i("img",{attrs:{src:t.baseUrl+"common/des4.jpg",alt:""}}),i("img",{attrs:{src:t.baseUrl+"common/des5.jpg",alt:""}}),i("img",{attrs:{src:t.baseUrl+"common/des6.jpg",alt:""}}),i("img",{attrs:{src:t.baseUrl+"common/des7.jpg",alt:""}}),i("img",{attrs:{src:t.baseUrl+"common/des8.jpg",alt:""}})])]),i("div",{staticClass:"foot-menu"},[i("router-link",{attrs:{to:{path:t.path+"/"}}},[t._v(t._s(t.options.foot.btn1))]),i("router-link",{attrs:{to:{path:t.path+"/introduce?id="+t.pid}}},[t._v(t._s(t.options.foot.btn2))]),i("router-link",{attrs:{to:{path:t.path+"/buy?id="+t.pid}}},[t._v(t._s(t.options.foot.btn3))])],1)],1)},e=[function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("p",{staticClass:"title"},[i("span",{staticClass:"border-left"}),i("span",[t._v("商品描述")]),i("span",{staticClass:"border-right"})])}],a=(i("yt8O"),i("VRzm"),i("76VC")),r={data:function(){return{baseUrl:"/",id:"",pid:"",swiperList:[{id:1,img:"d1.jpg"},{id:2,img:"d2.jpg"},{id:3,img:"d3.jpg"}]}},computed:{options:function(){return this.$t("detail")},path:function(){return this.$store.getters.getPath}},components:{headerSearch:a["a"]},methods:{},mounted:function(){var t="",n="";this.$route.query.id&&(t=this.$route.query.id),this.$route.query.pid&&(n=this.$route.query.pid),this.id=t,this.pid=n}},o=r,d=(i("UxXJ"),i("KHd+")),l=Object(d["a"])(o,s,e,!1,null,"00a48cf1",null);n["default"]=l.exports}}]);
//# sourceMappingURL=en.b1664a5a.js.map