(()=>{"use strict";var e={740:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([e.id,"html,\nbody {\n  padding: 0;\n  margin: 0;\n}\nbody {\n  color: rgb(35, 35, 35);\n  font-family: sans-serif;\n  background-color: rgb(241, 245, 247);\n  text-align: center;\n}\n\nheader {\n  display: flex;\n  height: 50px;\n  width: 100%;\n  top: 0;\n  margin: 0 auto;\n  align-items: center;\n  justify-content: center;\n  background-color: rgb(176, 203, 224);\n}\n\n.headline {\n  color: rgb(75, 73, 73);\n}\n\n.bot {\n  padding-bottom: 15px;\n}\n.noticeMessage {\n  margin-top: 0px;\n}\n.weatherMessage {\n  margin-top: 0px;\n}\n.weatherMessage.bot {\n  margin-top: 10px;\n}\n.wrapper {\n  width: 500px;\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: white;\n  flex-direction: column;\n}\n.mailStr {\n  line-height: 25px;\n}\ninput {\n  margin-bottom: 10px;\n}\n.inputButton {\n  margin-bottom: 20px;\n}\n@media screen and (max-width: 500px) {\n  .wrapper {\n    width: 330px;\n  }\n  p\n  {\n      font-size: 12px;\n  }\n}\n",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);o&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),n.push(u))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=o.base?s[0]+o.base:s[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var p=t(d),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=r(m,o);o.byIndex=c,n.splice(c,0,{identifier:d,updater:f,references:1})}i.push(d)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=o(e,r),l=0;l<a.length;l++){var u=t(a[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),s=t.n(c),l=t(216),u=t.n(l),d=t(589),p=t.n(d),m=t(740),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=u(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var g={send:function(e){return new Promise((function(n,t){e.nocache=Math.floor(1e6*Math.random()+1),e.Action="Send";var o=JSON.stringify(e);g.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?",o,(function(e){n(e)}))}))},ajaxPost:function(e,n,t){var o=g.createCORSRequest("POST",e);o.setRequestHeader("Content-type","application/x-www-form-urlencoded"),o.onload=function(){var e=o.responseText;null!=t&&t(e)},o.send(n)},ajax:function(e,n){var t=g.createCORSRequest("GET",e);t.onload=function(){var e=t.responseText;null!=n&&n(e)},t.send()},createCORSRequest:function(e,n){var t=new XMLHttpRequest;return"withCredentials"in t?t.open(e,n,!0):"undefined"!=typeof XDomainRequest?(t=new XDomainRequest).open(e,n):t=null,t}};const h=g,v=function(e,n){const t=(new Date).getUTCHours();fetch(`https://api.open-meteo.com/v1/forecast?latitude=${e}&longitude=${n}&hourly=precipitation`).then((e=>e.json())).then((e=>function(e,n){const t=document.getElementById("notice"),o=document.getElementById("weather1"),r=document.getElementById("weather2"),a=e.hourly.precipitation[n],i=e.hourly.precipitation[n+1];(a>0||i>0)&&(t.innerHTML="現在傘が必要です！",alert("雨が降りそうです！\nお出かけするなら傘を持って行きましょう！"),localStorage.mail?(console.log("メールアドレスが存在します"),h.send({SecureToken:"ae028fb3-b547-4a18-a17d-4d37e680ee63",To:localStorage.mail,From:"umbrella.remainder@gmail.com",Subject:"雨が降りそうです！",Body:"お出かけ途中に失礼します！\n1時間以内に雨が降りそうですので、傘を持っていきませんか？"}).then((e=>{console.log("メールを送信完了しました！\nmessage:",e)}))):console.log("メールアドレスが存在しません"),navigator.geolocation.clearWatch(y),console.log("位置情報の追跡を中止しました")),o.innerHTML="現在の降水量: "+a+" mm",r.innerHTML="1時間後の降水量: "+i+" mm"}(e,t)))};var y;let x={count:0,lastTime:0};const b={enableHighAccuracy:!0,timeout:1e11,maximumAge:0};let w={latitude:null,longitude:null,speed:null};function T(e){console.log("位置情報の取得に成功"),++x.count;let n=~~(new Date/1e3);if(x.lastTime+3>n)return!1;w.latitude=e.coords.latitude,w.longitude=e.coords.longitude,w.speed=e.coords.speed,w.speed>=.8&&v(w.latitude,w.longitude)}function S(e){console.error({0:"原因不明のエラーが発生しました",1:"位置情報の取得が許可されませんでした",2:"電波状況などで位置情報が取得できませんでした",3:"位置情報の取得に時間がかかりすぎたためタイムアウトしました"}[e.code])}console.log("位置情報を取得しています"),y=navigator.geolocation.watchPosition(T,S,b),document.getElementById("mail_button").addEventListener("click",(function(){let e=document.getElementById("mail_field").value;!e.match(/.+@.+\..+/)&&e?alert("メールアドレスの形式が間違っています\nメールアドレスをご確認ください"):e.match(/.+@.+\..+/)&&(console.log("メールアドレスを保存しました"),localStorage.setItem("mail",e),document.getElementById("mail_field").value="")}))})()})();