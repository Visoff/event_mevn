(function(){"use strict";var e={742:function(e,t,r){var n=r(963),a=r(252);const i={class:"main"};function o(e,t,r,n,o,s){const c=(0,a.up)("frame_father"),v=(0,a.up)("NavBar");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",i,[(0,a.Wm)(c,{activeFrame:o.activeFrame},null,8,["activeFrame"])]),o.show_navigation?((0,a.wg)(),(0,a.j4)(v,{key:0,frames:o.frames,activeFrame:o.activeFrame,setActiveFrame:s.setActiveFrame},null,8,["frames","activeFrame","setActiveFrame"])):(0,a.kq)("",!0)],64)}const s={class:"NavBar"},c=(0,a._)("div",{class:"placeholder"},null,-1);function v(e,t,r,n,i,o){const v=(0,a.up)("NavButton");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("nav",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.frames,((e,t)=>((0,a.wg)(),(0,a.j4)(v,{key:e,setActiveFrame:r.setActiveFrame,id:t,name:e.name,active:t==r.activeFrame,icon:e.icon},null,8,["setActiveFrame","id","name","active","icon"])))),128))]),c])}var u=r(577);const l=["src"];function m(e,t,r,n,i,o){return(0,a.wg)(),(0,a.iD)("div",{class:"NavButton",onClick:t[0]||(t[0]=(...e)=>o.click&&o.click(...e))},[(0,a._)("img",{src:r.icon,class:(0,u.C_)({active:r.active})},null,10,l),(0,a._)("div",null,(0,u.zw)(r.name),1)])}var f={props:["icon","name","active","id","setActiveFrame"],data(){return{}},methods:{click(){this.setActiveFrame(this.id)}}},d=r(744);const p=(0,d.Z)(f,[["render",m]]);var g=p,h={props:["frames","activeFrame","setActiveFrame"],components:{NavButton:g},data(){return{list:[1,2,3,4,5]}}};const w=(0,d.Z)(h,[["render",v]]);var F=w;const _={class:"frameFrather"};function k(e,t,r,n,i,o){const s=(0,a.up)("news"),c=(0,a.up)("chats"),v=(0,a.up)("schedule"),u=(0,a.up)("profile");return(0,a.wg)(),(0,a.iD)("div",_,[0==r.activeFrame?((0,a.wg)(),(0,a.j4)(s,{key:0})):(0,a.kq)("",!0),1==r.activeFrame?((0,a.wg)(),(0,a.j4)(c,{key:1})):(0,a.kq)("",!0),2==r.activeFrame?((0,a.wg)(),(0,a.j4)(s,{key:2})):(0,a.kq)("",!0),3==r.activeFrame?((0,a.wg)(),(0,a.j4)(v,{key:3})):(0,a.kq)("",!0),4==r.activeFrame?((0,a.wg)(),(0,a.j4)(u,{key:4})):(0,a.kq)("",!0)])}function y(e,t,r,n,i,o){return(0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.posts,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e},(0,u.zw)(e),1)))),128)}var b={name:"news-page",data(){return{posts:[]}},mounted(){}};const j=(0,d.Z)(b,[["render",y]]);var A=j;function O(e,t,r,n,a,i){return" 456 "}var D={name:"chats-page"};const Z=(0,d.Z)(D,[["render",O]]);var q=Z;function B(e,t,r,n,a,i){return" 789 "}var C={name:"schedule-page"};const N=(0,d.Z)(C,[["render",B]]);var H=N;const x={class:"profile-page"},z={class:"upper"},S={class:"name"},Y=(0,a._)("div",{class:"details"}," По образованию: лох ",-1),K=(0,a._)("div",{class:"quick-interactions"},[(0,a._)("div"),(0,a._)("div"),(0,a._)("div"),(0,a._)("div"),(0,a._)("div")],-1);function P(e,t,r,n,i,o){const s=(0,a.up)("icon");return(0,a.wg)(),(0,a.iD)("div",x,[(0,a._)("div",z,[(0,a.Wm)(s),(0,a._)("div",S,(0,u.zw)(i.user.name),1)]),Y,K])}const T=r(218);var W={name:"profile-page",data(){return{user:{icon:void 0,name:"Викештий"}}},mounted(){T.get("https://visoff.ru/api/db/select/user/").then((e=>{console.log(e.data)}))}};const E=(0,d.Z)(W,[["render",P]]);var Q=E,G={props:["activeFrame"],components:{news:A,chats:q,schedule:H,profile:Q}};const I=(0,d.Z)(G,[["render",k]]);var J=I;const L=r(218);L.get("https://visoff.ru/api/");var M={name:"App",components:{frame_father:J,NavBar:F},data(){return{show_navigation:!0,frames:[{name:"Лента",icon:"https://visoff.ru/ecosystem/svg/arrow.svg"},{name:"Чаты",icon:"https://visoff.ru/ecosystem/svg/arrow.svg"},{name:"Qr",icon:"https://visoff.ru/ecosystem/svg/arrow.svg"},{name:"Расписание",icon:"https://visoff.ru/ecosystem/svg/arrow.svg"},{name:"Провиль",icon:"https://visoff.ru/ecosystem/svg/arrow.svg"}],activeFrame:0,user_id:null}},mounted(){console.log(localStorage),localStorage.CityHeroes_user_id&&(this.user_id=localStorage.CityHeroes_user_id)},methods:{setActiveFrame(e){this.activeFrame=e}}};const R=(0,d.Z)(M,[["render",o]]);var U=R;(0,n.ri)(U).mount("#app")}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(t,n,a,i){if(!n){var o=1/0;for(u=0;u<e.length;u++){n=e[u][0],a=e[u][1],i=e[u][2];for(var s=!0,c=0;c<n.length;c++)(!1&i||o>=i)&&Object.keys(r.O).every((function(e){return r.O[e](n[c])}))?n.splice(c--,1):(s=!1,i<o&&(o=i));if(s){e.splice(u--,1);var v=a();void 0!==v&&(t=v)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,a,i]}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,i,o=n[0],s=n[1],c=n[2],v=0;if(o.some((function(t){return 0!==e[t]}))){for(a in s)r.o(s,a)&&(r.m[a]=s[a]);if(c)var u=c(r)}for(t&&t(n);v<o.length;v++)i=o[v],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(u)},n=self["webpackChunkmevn"]=self["webpackChunkmevn"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(742)}));n=r.O(n)})();
//# sourceMappingURL=app.3beece0f.js.map