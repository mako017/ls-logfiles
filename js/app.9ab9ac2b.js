(function(t){function e(e){for(var i,a,l=e[0],c=e[1],o=e[2],u=0,p=[];u<l.length;u++)a=l[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);g&&g(e);while(p.length)p.shift()();return s.push.apply(s,o||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,l=1;l<n.length;l++){var c=n[l];0!==r[c]&&(i=!1)}i&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},r={app:0},s=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var g=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";var i=n("85ec"),r=n.n(i);r.a},"160f":function(t,e,n){},"3f04":function(t,e,n){},"4b72":function(t,e,n){"use strict";var i=n("c3af"),r=n.n(i);r.a},"85ec":function(t,e,n){},c3af:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("SlideShow",{attrs:{msg:"Welcome to Your Vue.js + TypeScript App"}})],1)},s=[],a=n("d4ec"),l=n("bee2"),c=n("262e"),o=n("2caf"),g=n("9ab4"),u=n("60a3"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"slide-container"},[t.showPrompt&&t.currentPrompt?n("Slide",{attrs:{html:t.currentPrompt}}):n("Slide",{attrs:{html:t.currentPageHTML}})],1),n("div",{staticClass:"button-container"},[t.currentPage-1>=1?n("button",{staticClass:"left",on:{click:t._decrementPage}},[t._v("Zurück")]):t._e(),n("button",{staticClass:"right",on:{click:t._incrementPage}},[t._v(t._s(t.contBtn))])])])},m=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"root"},[n("div",{staticClass:"container",domProps:{innerHTML:t._s(t.html)}})])},f=[],h=function(t){Object(c["a"])(n,t);var e=Object(o["a"])(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return n}(u["c"]);Object(g["a"])([Object(u["b"])()],h.prototype,"html",void 0),h=Object(g["a"])([u["a"]],h);var v=h,b=v,P=(n("e491"),n("2877")),y=Object(P["a"])(b,d,f,!1,null,null,null),O=y.exports,j=n("2f62"),w=function(t){Object(c["a"])(n,t);var e=Object(o["a"])(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return Object(l["a"])(n,[{key:"_decrementPage",value:function(){if(!(this.currentPage<1)){var t=(new Date).getTime(),e=t-this.timestamp;this.timestamp=t,this.appendLog(e+":PrevPage;"),this.decrementPage()}}},{key:"_incrementPage",value:function(){if(this.currentPage+1>=this.pagesLength)confirm("Bist Du sicher, dass Du das Lernprogramm beenden möchtest?")&&this.sendResults();else{var t=(new Date).getTime(),e=t-this.timestamp;this.timestamp=t,this.appendLog(e+":NextPage;"),this.incrementPage()}}},{key:"mounted",value:function(){this.timestamp=(new Date).getTime()}}]),n}(u["c"]);w=Object(g["a"])([Object(u["a"])({components:{Slide:O},methods:Object(j["b"])(["decrementPage","incrementPage","appendLog","sendResults"]),computed:Object(j["c"])(["currentPageHTML","currentPage","currentPrompt","logData","pagesLength","contBtn","showPrompt"])})],w);var B=w,_=B,L=(n("4b72"),Object(P["a"])(_,p,m,!1,null,"46b9b592",null)),S=L.exports,x=function(t){Object(c["a"])(n,t);var e=Object(o["a"])(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return Object(l["a"])(n,[{key:"mounted",value:function(){this.getURL()}}]),n}(u["c"]);x=Object(g["a"])([Object(u["a"])({components:{SlideShow:S},methods:Object(j["b"])(["getURL"])})],x);var C=x,k=C,D=(n("034f"),Object(P["a"])(k,r,s,!1,null,null,null)),T=D.exports,R={allPages:[{id:0,type:"default",html:'\n\t\t\t<div class="big-img"><img src="https://lets-test.it/other/ls-logfiles/img/Bild0.png" /></div>\n\t\t\t'},{id:1,type:"default",html:'\n\t\t\t<div class="big-img"><img src="https://lets-test.it/other/ls-logfiles/img/Bild1.png" /></div>\n\t\t\t',prompt:'\n\t\t\t<div class="big-img"><img src="https://lets-test.it/other/ls-logfiles/img/Bild1_mit.png" /></div>\n\t\t\t'},{id:2,type:"default",html:'\n\t\t\t<div class="big-img"><img src="https://lets-test.it/other/ls-logfiles/img/Bild2.png" /></div>\n\t\t\t'},{id:3,type:"default",html:'\n\t\t\t<div class="big-img"><img src="https://lets-test.it/other/ls-logfiles/img/Bild3.png" /></div>\n\t\t\t'},{id:4,type:"default",html:'\n\t\t\t<div class="big-img"><img src="https://lets-test.it/other/ls-logfiles/img/Bild4.png" /></div>\n\t\t\t',prompt:'\n\t\t\t<div class="big-img"><img src="https://lets-test.it/other/ls-logfiles/img/Bild4_mit.png" /></div>\n\t\t\t'},{id:5,type:"default",html:'\n\t\t\t<div class="big-img"><img src="https://lets-test.it/other/ls-logfiles/img/Bild5.png" /></div>\n\t\t\t'},{id:6,type:"default",html:'\n\t\t\t<div class="big-img"><img src="https://lets-test.it/other/ls-logfiles/img/Bild6.png" /></div>\n\t\t\t'},{id:7,type:"default",html:'\n\t\t\t<div class="big-img"><img src="https://lets-test.it/other/ls-logfiles/img/Bild7.png" /></div>\n\t\t\t'},{id:8,type:"default",html:'\n\t\t\t<div class="big-img"><img src="https://lets-test.it/other/ls-logfiles/img/Bild8.png" /></div>\n\t\t\t'},{id:9,type:"default",html:'\n\t\t\t<div class="big-img"><img src="https://lets-test.it/other/ls-logfiles/img/Bild9.png" /></div>\n\t\t\t',prompt:'\n\t\t\t<div class="big-img"><img src="https://lets-test.it/other/ls-logfiles/img/Bild9_mit.png" /></div>\n\t\t\t'},{id:10,type:"default",html:'\n\t\t\t<div class="big-img"><img src="https://lets-test.it/other/ls-logfiles/img/Bild10.png" /></div>\n\t\t\t'},{id:11,type:"default",html:'\n\t\t\t<div class="big-img"><img src="https://lets-test.it/other/ls-logfiles/img/Bild11.png" /></div>\n\t\t\t'},{id:12,type:"default",html:'\n\t\t\t<div class="big-img"><img src="https://lets-test.it/other/ls-logfiles/img/Bild12.png" /></div>\n\t\t\t'},{id:13,type:"default",html:'\n\t\t\t<div class="big-img"><img src="https://lets-test.it/other/ls-logfiles/img/Bild13.png" /></div>\n\t\t\t',prompt:'\n\t\t\t<div class="big-img"><img src="https://lets-test.it/other/ls-logfiles/img/Bild13_mit.png" /></div>\n\t\t\t'}],currentPage:0,contBtn:"Weiter"},M={currentPageHTML:function(t){return t.allPages[t.currentPage].html},currentPage:function(t){return t.currentPage},currentPrompt:function(t){return t.allPages[t.currentPage].prompt},pagesLength:function(t){return t.allPages.length},contBtn:function(t){return t.contBtn}},V={decrementPage:function(t){var e=t.commit,n=R.currentPage-1;n<0||(e("changeBtn","Weiter"),e("changePage",n))},incrementPage:function(t){var e=t.commit,n=R.currentPage+1;n==R.allPages.length-1&&e("changeBtn","Fertig"),n>=R.allPages.length||e("changePage",n)}},H={changePage:function(t,e){return t.currentPage=e},changeBtn:function(t,e){return t.contBtn=e}},U={state:R,getters:M,actions:V,mutations:H},$=(n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("841c"),n("ddb0"),n("2b3d"),n("96cf"),n("1da1")),E=n("bc3a"),J=n.n(E),W={VPCode:"testVP",grp:1,logData:""},G={VP:function(t){return t.VPCode},showPrompt:function(t){return 1==t.grp},logData:function(t){return t.logData}},N={appendLog:function(t,e){var n=t.commit,i=W.logData+e;n("mutateLog",i)},getURL:function(t){var e=t.commit,n=window.location.search,i=new URLSearchParams(n);i.has("grp")&&e("mutateGrp",i.get("grp")),i.has("vp")&&e("mutateVPCode",i.get("vp"))},sendResults:function(){var t=Object($["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,J.a.post("/other/ls-logfiles/php/mysql.php",JSON.stringify(W));case 2:t.sent,window.location.replace("https://google.com");case 4:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},q={mutateLog:function(t,e){return t.logData=e},mutateGrp:function(t,e){return t.grp=e},mutateVPCode:function(t,e){return t.VPCode=e}},A={state:W,getters:G,actions:N,mutations:q};i["a"].use(j["a"]);var F=new j["a"].Store({modules:{pages:U,participant:A}});i["a"].config.productionTip=!1,n("160f"),new i["a"]({store:F,render:function(t){return t(T)}}).$mount("#app")},e491:function(t,e,n){"use strict";var i=n("3f04"),r=n.n(i);r.a}});
//# sourceMappingURL=app.9ab9ac2b.js.map