if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,r)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let u={};const o=s=>l(s,i),c={module:{uri:i},exports:u,require:o};e[i]=Promise.all(n.map((s=>c[s]||o(s)))).then((s=>(r(...s),u)))}}define(["./workbox-6567b62a"],(function(s){"use strict";s.setCacheNameDetails({prefix:"bookshelf"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/css/about.d64671df.css",revision:null},{url:"/css/app.90776d3d.css",revision:null},{url:"/css/chunk-vendors.8a42e1de.css",revision:null},{url:"/img/gps.ed381574.png",revision:null},{url:"/img/logo.b6287d07.png",revision:null},{url:"/img/marker_black.74df38ac.png",revision:null},{url:"/img/marker_blue.98c44b99.png",revision:null},{url:"/index.html",revision:"2fbede0b523b5db18da2e2920ee17a40"},{url:"/js/24.637b7161.js",revision:null},{url:"/js/249.2696ecd2.js",revision:null},{url:"/js/700.bf99d5a1.js",revision:null},{url:"/js/71.cf6c5815.js",revision:null},{url:"/js/791.1424bff9.js",revision:null},{url:"/js/886.99679832.js",revision:null},{url:"/js/about.17352271.js",revision:null},{url:"/js/app.51237bc5.js",revision:null},{url:"/js/chunk-vendors.f54a8987.js",revision:null},{url:"/manifest.json",revision:"9bbf111972fba8feabe0f36b3cbff445"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
