(()=>{var e={860:e=>{"use strict";e.exports=require("express")},17:e=>{"use strict";e.exports=require("path")}},r={};function t(s){var o=r[s];if(void 0!==o)return o.exports;var n=r[s]={exports:{}};return e[s](n,n.exports,t),n.exports}(()=>{const e=t(17),r=t(860),s=r(),o=__dirname,n=e.join(o,"index.html");s.use(r.static(o)),s.get("/",((e,r)=>{r.sendFile(n)}));const i=process.env.PORT||3e3;s.listen(i,(()=>{console.log(`app listening on port ${i}`)}))})()})();