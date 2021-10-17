(()=>{"use strict";var e={2318:(e,r,t)=>{var n=t(8880),o=t(1659),a=t(3673);function i(e,r,t,n,o,i){const s=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(s)}const s=(0,a.aZ)({name:"App"});s.render=i;const u=s;var c=t(7083),l=t(9582);t(71);const p=[{path:"/",component:()=>Promise.all([t.e(736),t.e(710)]).then(t.bind(t,8710)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(702)]).then(t.bind(t,2702))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([t.e(736),t.e(193)]).then(t.bind(t,2193))}],d=p,f=(0,c.BC)((function(){const e=l.r5,r=(0,l.p7)({scrollBehavior:()=>({left:0,top:0}),routes:d,history:e("")});return r}));async function v(e,r){const t="function"===typeof f?await f({}):f,n=e(u);return n.use(o.Z,r),{app:n,router:t}}const h={config:{}};async function b({app:e,router:r}){e.use(r),e.mount("#q-app")}v(n.ri,h).then(b)}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var a=r[n]={exports:{}};return e[n](a,a.exports,t),a.exports}t.m=e,(()=>{var e=[];t.O=(r,n,o,a)=>{if(!n){var i=1/0;for(l=0;l<e.length;l++){for(var[n,o,a]=e[l],s=!0,u=0;u<n.length;u++)(!1&a||i>=a)&&Object.keys(t.O).every((e=>t.O[e](n[u])))?n.splice(u--,1):(s=!1,a<i&&(i=a));if(s){e.splice(l--,1);var c=o();void 0!==c&&(r=c)}}return r}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[n,o,a]}})(),(()=>{t.n=e=>{var r=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(r,{a:r}),r}})(),(()=>{t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((r,n)=>(t.f[n](e,r),r)),[]))})(),(()=>{t.u=e=>"js/"+e+"."+{193:"4f43a556",702:"725396be",710:"0bd2ae5b"}[e]+".js"})(),(()=>{t.miniCssF=e=>"css/"+{143:"app",736:"vendor"}[e]+"."+{143:"31d6cfe0",736:"a14e89e4"}[e]+".css"})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r)})(),(()=>{var e={},r="crewrest:";t.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var s,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var p=c[l];if(p.getAttribute("src")==n||p.getAttribute("data-webpack")==r+a){s=p;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",r+a),s.src=n),e[n]=[o];var d=(r,t)=>{s.onerror=s.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(t))),r)return r(t)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),u&&document.head.appendChild(s)}}})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.p=""})(),(()=>{var e={143:0};t.f.j=(r,n)=>{var o=t.o(e,r)?e[r]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((t,n)=>o=e[r]=[t,n]));n.push(o[2]=a);var i=t.p+t.u(r),s=new Error,u=n=>{if(t.o(e,r)&&(o=e[r],0!==o&&(e[r]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+r+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};t.l(i,u,"chunk-"+r,r)}},t.O.j=r=>0===e[r];var r=(r,n)=>{var o,a,[i,s,u]=n,c=0;if(i.some((r=>0!==e[r]))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(u)var l=u(t)}for(r&&r(n);c<i.length;c++)a=i[c],t.o(e,a)&&e[a]&&e[a][0](),e[i[c]]=0;return t.O(l)},n=self["webpackChunkcrewrest"]=self["webpackChunkcrewrest"]||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})();var n=t.O(void 0,[736],(()=>t(2318)));n=t.O(n)})();