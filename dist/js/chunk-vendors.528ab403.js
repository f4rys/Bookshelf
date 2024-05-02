"use strict";(self["webpackChunkbookshelf"]=self["webpackChunkbookshelf"]||[]).push([[504],{6743:function(e,t,n){n.d(t,{$L:function(){return B},$g:function(){return x},A4:function(){return f},Am:function(){return Z},As:function(){return q},Cv:function(){return z},FA:function(){return $},Fy:function(){return S},Hk:function(){return s},I9:function(){return ee},Im:function(){return Q},K3:function(){return c},KA:function(){return u},Ku:function(){return ue},OE:function(){return le},T9:function(){return E},Tj:function(){return b},Uj:function(){return h},XA:function(){return C},ZQ:function(){return k},bD:function(){return Y},cY:function(){return I},dI:function(){return ae},eX:function(){return M},g:function(){return U},gR:function(){return K},gz:function(){return ne},hp:function(){return te},jZ:function(){return A},kH:function(){return X},kj:function(){return ce},lT:function(){return P},lV:function(){return O},nr:function(){return D},qc:function(){return W},sr:function(){return N},tD:function(){return ie},u:function(){return d},vA:function(){return r},yU:function(){return T},yw:function(){return G},zW:function(){return L}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},r=function(e,t){if(!e)throw s(t)},s=function(e){return new Error("Firebase Database ("+i.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},o=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296===(64512&r)&&i+1<e.length&&56320===(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},a=function(e){const t=[];let n=0,i=0;while(n<e.length){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[i++]=String.fromCharCode(55296+(c>>10)),t[i++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const t=e[r],s=r+1<e.length,o=s?e[r+1]:0,a=r+2<e.length,c=a?e[r+2]:0,l=t>>2,u=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),i.push(n[l],n[u],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const t=n[e.charAt(r++)],s=r<e.length,o=s?n[e.charAt(r)]:0;++r;const a=r<e.length,c=a?n[e.charAt(r)]:64;++r;const u=r<e.length,h=u?n[e.charAt(r)]:64;if(++r,null==t||null==o||null==c||null==h)throw new l;const d=t<<2|o>>4;if(i.push(d),64!==c){const e=o<<4&240|c>>2;if(i.push(e),64!==h){const e=c<<6&192|h;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const u=function(e){const t=o(e);return c.encodeByteArray(t,!0)},h=function(e){return u(e).replace(/\./g,"")},d=function(e){try{return c.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function f(e){return p(void 0,e)}function p(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&g(n)&&(e[n]=p(e[n],t[n]));return e}function g(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _=()=>m().__FIREBASE_DEFAULTS__,v=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},y=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&d(e[1]);return t&&JSON.parse(t)},w=()=>{try{return _()||v()||y()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},b=e=>{var t,n;return null===(n=null===(t=w())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},T=e=>{const t=b(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},E=()=>{var e;return null===(e=w())||void 0===e?void 0:e.config},C=e=>{var t;return null===(t=w())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class I{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",r=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[h(JSON.stringify(n)),h(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function A(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(k())}function R(){var e;const t=null===(e=w())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(i){return!1}}function N(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function O(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function P(){const e=k();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function x(){return!0===i.NODE_CLIENT||!0===i.NODE_ADMIN}function D(){return!R()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function L(){try{return"object"===typeof indexedDB}catch(e){return!1}}function M(){return new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const F="FirebaseError";class U extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=F,Object.setPrototypeOf(this,U.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$.prototype.create)}}class ${constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?j(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`,a=new U(i,o,n);return a}}function j(e,t){return e.replace(V,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}const V=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(e){return JSON.parse(e)}function q(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H=function(e){let t={},n={},i={},r="";try{const s=e.split(".");t=B(d(s[0])||""),n=B(d(s[1])||""),r=s[2],i=n["d"]||{},delete n["d"]}catch(s){}return{header:t,claims:n,data:i,signature:r}},z=function(e){const t=H(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},W=function(e){const t=H(e).claims;return"object"===typeof t&&!0===t["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function K(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function G(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function Q(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function X(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function Y(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(J(n)&&J(s)){if(!Y(n,s))return!1}else if(n!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function J(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Z(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function ee(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function te(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"===typeof e)for(let u=0;u<16;u++)n[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)n[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const e=n[u-3]^n[u-8]^n[u-14]^n[u-16];n[u]=4294967295&(e<<1|e>>>31)}let i,r,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let u=0;u<80;u++){u<40?u<20?(i=c^o&(a^c),r=1518500249):(i=o^a^c,r=1859775393):u<60?(i=o&a|c&(o|a),r=2400959708):(i=o^a^c,r=3395469782);const e=(s<<5|s>>>27)+i+l+r+n[u]&4294967295;l=c,c=a,a=4294967295&(o<<30|o>>>2),o=s,s=e}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const r=this.buf_;let s=this.inbuf_;while(i<t){if(0===s)while(i<=n)this.compress_(e,i),i+=this.blockSize;if("string"===typeof e){while(i<t)if(r[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else while(i<t)if(r[s]=e[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let i=0;i<5;i++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[i]>>t&255,++n;return e}}function ie(e,t){const n=new re(e,t);return n.subscribe.bind(n)}class re{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=se(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=oe),void 0===i.error&&(i.error=oe),void 0===i.complete&&(i.complete=oe);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function se(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function oe(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ce=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);if(s>=55296&&s<=56319){const t=s-55296;i++,r(i<e.length,"Surrogate pair missing trail surrogate.");const n=e.charCodeAt(i)-56320;s=65536+(t<<10)+n}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},le=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ue(e){return e&&e._delegate?e._delegate:e}},953:function(e,t,n){n.d(t,{BA:function(){return $e},C4:function(){return y},EW:function(){return Ne},Gc:function(){return ve},IG:function(){return Se},IJ:function(){return Le},KR:function(){return De},Kh:function(){return _e},Pr:function(){return Ve},QW:function(){return Be},R1:function(){return Ue},X2:function(){return h},bl:function(){return w},fE:function(){return Ee},g8:function(){return be},hZ:function(){return O},i9:function(){return xe},jr:function(){return u},ju:function(){return Ce},o5:function(){return l},u4:function(){return N},uY:function(){return a},ux:function(){return Ie},yC:function(){return o}});var i=n(33);
/**
* @vue/reactivity v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let r,s;class o{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=r,!e&&r&&(this.index=(r.scopes||(r.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=r;try{return r=this,e()}finally{r=t}}else 0}on(){r=this}off(){r=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function a(e){return new o(e)}function c(e,t=r){t&&t.active&&t.effects.push(e)}function l(){return r}function u(e){r&&r.cleanups.push(e)}class h{constructor(e,t,n,i){this.fn=e,this.trigger=t,this.scheduler=n,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,c(this,i)}get dirty(){if(2===this._dirtyLevel||3===this._dirtyLevel){this._dirtyLevel=1,y();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(d(t.computed),this._dirtyLevel>=4))break}1===this._dirtyLevel&&(this._dirtyLevel=0),w()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=m,t=s;try{return m=!0,s=this,this._runnings++,f(this),this.fn()}finally{p(this),this._runnings--,s=t,m=e}}stop(){var e;this.active&&(f(this),p(this),null==(e=this.onStop)||e.call(this),this.active=!1)}}function d(e){return e.value}function f(e){e._trackId++,e._depsLength=0}function p(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)g(e.deps[t],e);e.deps.length=e._depsLength}}function g(e,t){const n=e.get(t);void 0!==n&&t._trackId!==n&&(e.delete(t),0===e.size&&e.cleanup())}let m=!0,_=0;const v=[];function y(){v.push(m),m=!1}function w(){const e=v.pop();m=void 0===e||e}function b(){_++}function T(){_--;while(!_&&C.length)C.shift()()}function E(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const n=e.deps[e._depsLength];n!==t?(n&&g(n,e),e.deps[e._depsLength++]=t):e._depsLength++}}const C=[];function I(e,t,n){b();for(const i of e.keys()){let n;i._dirtyLevel<t&&(null!=n?n:n=e.get(i)===i._trackId)&&(i._shouldSchedule||(i._shouldSchedule=0===i._dirtyLevel),i._dirtyLevel=t),i._shouldSchedule&&(null!=n?n:n=e.get(i)===i._trackId)&&(i.trigger(),i._runnings&&!i.allowRecurse||2===i._dirtyLevel||(i._shouldSchedule=!1,i.scheduler&&C.push(i.scheduler)))}T()}const S=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},k=new WeakMap,A=Symbol(""),R=Symbol("");function N(e,t,n){if(m&&s){let t=k.get(e);t||k.set(e,t=new Map);let i=t.get(n);i||t.set(n,i=S((()=>t.delete(n)))),E(s,i,void 0)}}function O(e,t,n,r,s,o){const a=k.get(e);if(!a)return;let c=[];if("clear"===t)c=[...a.values()];else if("length"===n&&(0,i.cy)(e)){const e=Number(r);a.forEach(((t,n)=>{("length"===n||!(0,i.Bm)(n)&&n>=e)&&c.push(t)}))}else switch(void 0!==n&&c.push(a.get(n)),t){case"add":(0,i.cy)(e)?(0,i.yI)(n)&&c.push(a.get("length")):(c.push(a.get(A)),(0,i.CE)(e)&&c.push(a.get(R)));break;case"delete":(0,i.cy)(e)||(c.push(a.get(A)),(0,i.CE)(e)&&c.push(a.get(R)));break;case"set":(0,i.CE)(e)&&c.push(a.get(A));break}b();for(const i of c)i&&I(i,4,void 0);T()}function P(e,t){var n;return null==(n=k.get(e))?void 0:n.get(t)}const x=(0,i.pD)("__proto__,__v_isRef,__isVue"),D=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(i.Bm)),L=M();function M(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Ie(this);for(let t=0,r=this.length;t<r;t++)N(n,"get",t+"");const i=n[t](...e);return-1===i||!1===i?n[t](...e.map(Ie)):i}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){y(),b();const n=Ie(this)[t].apply(this,e);return T(),w(),n}})),e}function F(e){(0,i.Bm)(e)||(e=String(e));const t=Ie(this);return N(t,"has",e),t.hasOwnProperty(e)}class U{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){const r=this._isReadonly,s=this._isShallow;if("__v_isReactive"===t)return!r;if("__v_isReadonly"===t)return r;if("__v_isShallow"===t)return s;if("__v_raw"===t)return n===(r?s?pe:fe:s?de:he).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=(0,i.cy)(e);if(!r){if(o&&(0,i.$3)(L,t))return Reflect.get(L,t,n);if("hasOwnProperty"===t)return F}const a=Reflect.get(e,t,n);return((0,i.Bm)(t)?D.has(t):x(t))?a:(r||N(e,"get",t),s?a:xe(a)?o&&(0,i.yI)(t)?a:a.value:(0,i.Gv)(a)?r?ye(a):_e(a):a)}}class $ extends U{constructor(e=!1){super(!1,e)}set(e,t,n,r){let s=e[t];if(!this._isShallow){const t=Te(s);if(Ee(n)||Te(n)||(s=Ie(s),n=Ie(n)),!(0,i.cy)(e)&&xe(s)&&!xe(n))return!t&&(s.value=n,!0)}const o=(0,i.cy)(e)&&(0,i.yI)(t)?Number(t)<e.length:(0,i.$3)(e,t),a=Reflect.set(e,t,n,r);return e===Ie(r)&&(o?(0,i.$H)(n,s)&&O(e,"set",t,n,s):O(e,"add",t,n)),a}deleteProperty(e,t){const n=(0,i.$3)(e,t),r=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&O(e,"delete",t,void 0,r),s}has(e,t){const n=Reflect.has(e,t);return(0,i.Bm)(t)&&D.has(t)||N(e,"has",t),n}ownKeys(e){return N(e,"iterate",(0,i.cy)(e)?"length":A),Reflect.ownKeys(e)}}class j extends U{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const V=new $,B=new j,q=new $(!0),H=e=>e,z=e=>Reflect.getPrototypeOf(e);function W(e,t,n=!1,r=!1){e=e["__v_raw"];const s=Ie(e),o=Ie(t);n||((0,i.$H)(t,o)&&N(s,"get",t),N(s,"get",o));const{has:a}=z(s),c=r?H:n?Ae:ke;return a.call(s,t)?c(e.get(t)):a.call(s,o)?c(e.get(o)):void(e!==s&&e.get(t))}function K(e,t=!1){const n=this["__v_raw"],r=Ie(n),s=Ie(e);return t||((0,i.$H)(e,s)&&N(r,"has",e),N(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function G(e,t=!1){return e=e["__v_raw"],!t&&N(Ie(e),"iterate",A),Reflect.get(e,"size",e)}function Q(e){e=Ie(e);const t=Ie(this),n=z(t),i=n.has.call(t,e);return i||(t.add(e),O(t,"add",e,e)),this}function X(e,t){t=Ie(t);const n=Ie(this),{has:r,get:s}=z(n);let o=r.call(n,e);o||(e=Ie(e),o=r.call(n,e));const a=s.call(n,e);return n.set(e,t),o?(0,i.$H)(t,a)&&O(n,"set",e,t,a):O(n,"add",e,t),this}function Y(e){const t=Ie(this),{has:n,get:i}=z(t);let r=n.call(t,e);r||(e=Ie(e),r=n.call(t,e));const s=i?i.call(t,e):void 0,o=t.delete(e);return r&&O(t,"delete",e,void 0,s),o}function J(){const e=Ie(this),t=0!==e.size,n=void 0,i=e.clear();return t&&O(e,"clear",void 0,void 0,n),i}function Z(e,t){return function(n,i){const r=this,s=r["__v_raw"],o=Ie(s),a=t?H:e?Ae:ke;return!e&&N(o,"iterate",A),s.forEach(((e,t)=>n.call(i,a(e),a(t),r)))}}function ee(e,t,n){return function(...r){const s=this["__v_raw"],o=Ie(s),a=(0,i.CE)(o),c="entries"===e||e===Symbol.iterator&&a,l="keys"===e&&a,u=s[e](...r),h=n?H:t?Ae:ke;return!t&&N(o,"iterate",l?R:A),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function te(e){return function(...t){return"delete"!==e&&("clear"===e?void 0:this)}}function ne(){const e={get(e){return W(this,e)},get size(){return G(this)},has:K,add:Q,set:X,delete:Y,clear:J,forEach:Z(!1,!1)},t={get(e){return W(this,e,!1,!0)},get size(){return G(this)},has:K,add:Q,set:X,delete:Y,clear:J,forEach:Z(!1,!0)},n={get(e){return W(this,e,!0)},get size(){return G(this,!0)},has(e){return K.call(this,e,!0)},add:te("add"),set:te("set"),delete:te("delete"),clear:te("clear"),forEach:Z(!0,!1)},i={get(e){return W(this,e,!0,!0)},get size(){return G(this,!0)},has(e){return K.call(this,e,!0)},add:te("add"),set:te("set"),delete:te("delete"),clear:te("clear"),forEach:Z(!0,!0)},r=["keys","values","entries",Symbol.iterator];return r.forEach((r=>{e[r]=ee(r,!1,!1),n[r]=ee(r,!0,!1),t[r]=ee(r,!1,!0),i[r]=ee(r,!0,!0)})),[e,n,t,i]}const[ie,re,se,oe]=ne();function ae(e,t){const n=t?e?oe:se:e?re:ie;return(t,r,s)=>"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_raw"===r?t:Reflect.get((0,i.$3)(n,r)&&r in t?n:t,r,s)}const ce={get:ae(!1,!1)},le={get:ae(!1,!0)},ue={get:ae(!0,!1)};const he=new WeakMap,de=new WeakMap,fe=new WeakMap,pe=new WeakMap;function ge(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function me(e){return e["__v_skip"]||!Object.isExtensible(e)?0:ge((0,i.Zf)(e))}function _e(e){return Te(e)?e:we(e,!1,V,ce,he)}function ve(e){return we(e,!1,q,le,de)}function ye(e){return we(e,!0,B,ue,fe)}function we(e,t,n,r,s){if(!(0,i.Gv)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=me(e);if(0===a)return e;const c=new Proxy(e,2===a?r:n);return s.set(e,c),c}function be(e){return Te(e)?be(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Te(e){return!(!e||!e["__v_isReadonly"])}function Ee(e){return!(!e||!e["__v_isShallow"])}function Ce(e){return!!e&&!!e["__v_raw"]}function Ie(e){const t=e&&e["__v_raw"];return t?Ie(t):e}function Se(e){return Object.isExtensible(e)&&(0,i.yQ)(e,"__v_skip",!0),e}const ke=e=>(0,i.Gv)(e)?_e(e):e,Ae=e=>(0,i.Gv)(e)?ye(e):e;class Re{constructor(e,t,n,i){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this["__v_isReadonly"]=!1,this.effect=new h((()=>e(this._value)),(()=>Pe(this,2===this.effect._dirtyLevel?2:3))),this.effect.computed=this,this.effect.active=this._cacheable=!i,this["__v_isReadonly"]=n}get value(){const e=Ie(this);return e._cacheable&&!e.effect.dirty||!(0,i.$H)(e._value,e._value=e.effect.run())||Pe(e,4),Oe(e),e.effect._dirtyLevel>=2&&Pe(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Ne(e,t,n=!1){let r,s;const o=(0,i.Tn)(e);o?(r=e,s=i.tE):(r=e.get,s=e.set);const a=new Re(r,s,o||!s,n);return a}function Oe(e){var t;m&&s&&(e=Ie(e),E(s,null!=(t=e.dep)?t:e.dep=S((()=>e.dep=void 0),e instanceof Re?e:void 0),void 0))}function Pe(e,t=4,n){e=Ie(e);const i=e.dep;i&&I(i,t,void 0)}function xe(e){return!(!e||!0!==e.__v_isRef)}function De(e){return Me(e,!1)}function Le(e){return Me(e,!0)}function Me(e,t){return xe(e)?e:new Fe(e,t)}class Fe{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ie(e),this._value=t?e:ke(e)}get value(){return Oe(this),this._value}set value(e){const t=this.__v_isShallow||Ee(e)||Te(e);e=t?e:Ie(e),(0,i.$H)(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:ke(e),Pe(this,4,e))}}function Ue(e){return xe(e)?e.value:e}function $e(e){return(0,i.Tn)(e)?e():Ue(e)}const je={get:(e,t,n)=>Ue(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const r=e[t];return xe(r)&&!xe(n)?(r.value=n,!0):Reflect.set(e,t,n,i)}};function Ve(e){return be(e)?e:new Proxy(e,je)}function Be(e){const t=(0,i.cy)(e)?new Array(e.length):{};for(const n in e)t[n]=He(e,n);return t}class qe{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this.__v_isRef=!0}get value(){const e=this._object[this._key];return void 0===e?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return P(Ie(this._object),this._key)}}function He(e,t,n){const i=e[t];return xe(i)?i:new qe(e,t,n)}},641:function(e,t,n){n.d(t,{$u:function(){return Me},$y:function(){return K},CE:function(){return cn},Df:function(){return we},EW:function(){return Qn},FK:function(){return Xt},Fv:function(){return wn},Gt:function(){return _t},Gy:function(){return ue},K9:function(){return Vt},Lk:function(){return pn},MZ:function(){return ye},OW:function(){return me},Q3:function(){return bn},QP:function(){return de},Qi:function(){return L},RG:function(){return He},SS:function(){return $e},Tb:function(){return We},WQ:function(){return vt},Wv:function(){return ln},bF:function(){return gn},bo:function(){return oe},dY:function(){return v},eW:function(){return yn},g2:function(){return z},h:function(){return Xn},hi:function(){return Ue},jt:function(){return M},k6:function(){return F},nI:function(){return On},pI:function(){return qe},pM:function(){return be},pR:function(){return pe},qL:function(){return o},rE:function(){return Yn},sV:function(){return De},uX:function(){return nn},v6:function(){return In},wB:function(){return te},xo:function(){return Fe}});var i=n(953),r=n(33);function s(e,t,n,i){try{return i?e(...i):e()}catch(r){a(r,t,n)}}function o(e,t,n,i){if((0,r.Tn)(e)){const o=s(e,t,n,i);return o&&(0,r.yL)(o)&&o.catch((e=>{a(e,t,n)})),o}if((0,r.cy)(e)){const r=[];for(let s=0;s<e.length;s++)r.push(o(e[s],t,n,i));return r}}function a(e,t,n,r=!0){const o=t?t.vnode:null;if(t){let r=t.parent;const o=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,o,a))return;r=r.parent}const c=t.appContext.config.errorHandler;if(c)return(0,i.C4)(),s(c,null,10,[e,o,a]),void(0,i.bl)()}c(e,n,o,r)}function c(e,t,n,i=!0){console.error(e)}let l=!1,u=!1;const h=[];let d=0;const f=[];let p=null,g=0;const m=Promise.resolve();let _=null;function v(e){const t=_||m;return e?t.then(this?e.bind(this):e):t}function y(e){let t=d+1,n=h.length;while(t<n){const i=t+n>>>1,r=h[i],s=S(r);s<e||s===e&&r.pre?t=i+1:n=i}return t}function w(e){h.length&&h.includes(e,l&&e.allowRecurse?d+1:d)||(null==e.id?h.push(e):h.splice(y(e.id),0,e),b())}function b(){l||u||(u=!0,_=m.then(A))}function T(e){const t=h.indexOf(e);t>d&&h.splice(t,1)}function E(e){(0,r.cy)(e)?f.push(...e):p&&p.includes(e,e.allowRecurse?g+1:g)||f.push(e),b()}function C(e,t,n=(l?d+1:0)){for(0;n<h.length;n++){const t=h[n];if(t&&t.pre){if(e&&t.id!==e.uid)continue;0,h.splice(n,1),n--,t()}}}function I(e){if(f.length){const e=[...new Set(f)].sort(((e,t)=>S(e)-S(t)));if(f.length=0,p)return void p.push(...e);for(p=e,g=0;g<p.length;g++)p[g]();p=null,g=0}}const S=e=>null==e.id?1/0:e.id,k=(e,t)=>{const n=S(e)-S(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function A(e){u=!1,l=!0,h.sort(k);r.tE;try{for(d=0;d<h.length;d++){const e=h[d];e&&!1!==e.active&&s(e,null,14)}}finally{d=0,h.length=0,I(e),l=!1,_=null,(h.length||f.length)&&A(e)}}function R(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||r.MZ;let s=n;const a=t.startsWith("update:"),c=a&&t.slice(7);if(c&&c in i){const e=`${"modelValue"===c?"model":c}Modifiers`,{number:t,trim:o}=i[e]||r.MZ;o&&(s=n.map((e=>(0,r.Kg)(e)?e.trim():e))),t&&(s=n.map(r.bB))}let l;let u=i[l=(0,r.rU)(t)]||i[l=(0,r.rU)((0,r.PT)(t))];!u&&a&&(u=i[l=(0,r.rU)((0,r.Tg)(t))]),u&&o(u,e,6,s);const h=i[l+"Once"];if(h){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,o(h,e,6,s)}}function N(e,t,n=!1){const i=t.emitsCache,s=i.get(e);if(void 0!==s)return s;const o=e.emits;let a={},c=!1;if(!(0,r.Tn)(e)){const i=e=>{const n=N(e,t,!0);n&&(c=!0,(0,r.X$)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return o||c?((0,r.cy)(o)?o.forEach((e=>a[e]=null)):(0,r.X$)(a,o),(0,r.Gv)(e)&&i.set(e,a),a):((0,r.Gv)(e)&&i.set(e,null),null)}function O(e,t){return!(!e||!(0,r.Mp)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,r.$3)(e,t[0].toLowerCase()+t.slice(1))||(0,r.$3)(e,(0,r.Tg)(t))||(0,r.$3)(e,t))}let P=null,x=null;function D(e){const t=P;return P=e,x=e&&e.type.__scopeId||null,t}function L(e){x=e}function M(){x=null}function F(e,t=P,n){if(!t)return e;if(e._n)return e;const i=(...n)=>{i._d&&on(-1);const r=D(t);let s;try{s=e(...n)}finally{D(r),i._d&&on(1)}return s};return i._n=!0,i._c=!0,i._d=!0,i}function U(e){const{type:t,vnode:n,proxy:i,withProxy:s,propsOptions:[o],slots:c,attrs:l,emit:u,render:h,renderCache:d,props:f,data:p,setupState:g,ctx:m,inheritAttrs:_}=e,v=D(e);let y,w;try{if(4&n.shapeFlag){const e=s||i,t=e;y=Tn(h.call(t,e,d,f,g,p,m)),w=l}else{const e=t;0,y=Tn(e.length>1?e(f,{attrs:l,slots:c,emit:u}):e(f,null)),w=t.props?l:$(l)}}catch(T){en.length=0,a(T,e,1),y=gn(Jt)}let b=y;if(w&&!1!==_){const e=Object.keys(w),{shapeFlag:t}=b;e.length&&7&t&&(o&&e.some(r.CP)&&(w=j(w,o)),b=vn(b,w))}return n.dirs&&(b=vn(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),y=b,D(v),y}const $=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,r.Mp)(n))&&((t||(t={}))[n]=e[n]);return t},j=(e,t)=>{const n={};for(const i in e)(0,r.CP)(i)&&i.slice(9)in t||(n[i]=e[i]);return n};function V(e,t,n){const{props:i,children:r,component:s}=e,{props:o,children:a,patchFlag:c}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!r&&!a||a&&a.$stable)||i!==o&&(i?!o||B(i,o,l):!!o);if(1024&c)return!0;if(16&c)return i?B(i,o,l):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==i[n]&&!O(l,n))return!0}}return!1}function B(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(t[s]!==e[s]&&!O(n,s))return!0}return!1}function q({vnode:e,parent:t},n){while(t){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.el=e.el),i!==e)break;(e=t.vnode).el=n,t=t.parent}}const H="components";function z(e,t){return G(H,e,!0,t)||e}const W=Symbol.for("v-ndc");function K(e){return(0,r.Kg)(e)?G(H,e,!1)||e:e||W}function G(e,t,n=!0,i=!1){const s=P||Nn;if(s){const n=s.type;if(e===H){const e=Kn(n,!1);if(e&&(e===t||e===(0,r.PT)(t)||e===(0,r.ZH)((0,r.PT)(t))))return n}const o=Q(s[e]||n[e],t)||Q(s.appContext[e],t);return!o&&i?n:o}}function Q(e,t){return e&&(e[t]||e[(0,r.PT)(t)]||e[(0,r.ZH)((0,r.PT)(t))])}const X=e=>e.__isSuspense;function Y(e,t){t&&t.pendingBranch?(0,r.cy)(e)?t.effects.push(...e):t.effects.push(e):E(e)}const J=Symbol.for("v-scx"),Z=()=>{{const e=vt(J);return e}};const ee={};function te(e,t,n){return ne(e,t,n)}function ne(e,t,{immediate:n,deep:a,flush:c,once:l,onTrack:u,onTrigger:h}=r.MZ){if(t&&l){const e=t;t=(...t)=>{e(...t),S()}}const d=Nn,f=e=>!0===a?e:se(e,!1===a?1:void 0);let p,g,m=!1,_=!1;if((0,i.i9)(e)?(p=()=>e.value,m=(0,i.fE)(e)):(0,i.g8)(e)?(p=()=>f(e),m=!0):(0,r.cy)(e)?(_=!0,m=e.some((e=>(0,i.g8)(e)||(0,i.fE)(e))),p=()=>e.map((e=>(0,i.i9)(e)?e.value:(0,i.g8)(e)?f(e):(0,r.Tn)(e)?s(e,d,2):void 0))):p=(0,r.Tn)(e)?t?()=>s(e,d,2):()=>(g&&g(),o(e,d,3,[y])):r.tE,t&&a){const e=p;p=()=>se(e())}let v,y=e=>{g=C.onStop=()=>{s(e,d,4),g=C.onStop=void 0}};if($n){if(y=r.tE,t?n&&o(t,d,3,[p(),_?[]:void 0,y]):p(),"sync"!==c)return r.tE;{const e=Z();v=e.__watcherHandles||(e.__watcherHandles=[])}}let b=_?new Array(e.length).fill(ee):ee;const T=()=>{if(C.active&&C.dirty)if(t){const e=C.run();(a||m||(_?e.some(((e,t)=>(0,r.$H)(e,b[t]))):(0,r.$H)(e,b)))&&(g&&g(),o(t,d,3,[e,b===ee?void 0:_&&b[0]===ee?[]:b,y]),b=e)}else C.run()};let E;T.allowRecurse=!!t,"sync"===c?E=T:"post"===c?E=()=>jt(T,d&&d.suspense):(T.pre=!0,d&&(T.id=d.uid),E=()=>w(T));const C=new i.X2(p,r.tE,E),I=(0,i.o5)(),S=()=>{C.stop(),I&&(0,r.TF)(I.effects,C)};return t?n?T():b=C.run():"post"===c?jt(C.run.bind(C),d&&d.suspense):C.run(),v&&v.push(S),S}function ie(e,t,n){const i=this.proxy,s=(0,r.Kg)(e)?e.includes(".")?re(i,e):()=>i[e]:e.bind(i,i);let o;(0,r.Tn)(t)?o=t:(o=t.handler,n=t);const a=Dn(this),c=ne(s,o.bind(i),n);return a(),c}function re(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function se(e,t,n=0,s){if(!(0,r.Gv)(e)||e["__v_skip"])return e;if(t&&t>0){if(n>=t)return e;n++}if(s=s||new Set,s.has(e))return e;if(s.add(e),(0,i.i9)(e))se(e.value,t,n,s);else if((0,r.cy)(e))for(let i=0;i<e.length;i++)se(e[i],t,n,s);else if((0,r.vM)(e)||(0,r.CE)(e))e.forEach((e=>{se(e,t,n,s)}));else if((0,r.Qd)(e))for(const i in e)se(e[i],t,n,s);return e}function oe(e,t){if(null===P)return e;const n=Wn(P)||P.proxy,i=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,o,a,c=r.MZ]=t[s];e&&((0,r.Tn)(e)&&(e={mounted:e,updated:e}),e.deep&&se(o),i.push({dir:e,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return e}function ae(e,t,n,r){const s=e.dirs,a=t&&t.dirs;for(let c=0;c<s.length;c++){const l=s[c];a&&(l.oldValue=a[c].value);let u=l.dir[r];u&&((0,i.C4)(),o(u,n,8,[e.el,l,e,t]),(0,i.bl)())}}const ce=Symbol("_leaveCb"),le=Symbol("_enterCb");function ue(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return De((()=>{e.isMounted=!0})),Fe((()=>{e.isUnmounting=!0})),e}const he=[Function,Array],de={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:he,onEnter:he,onAfterEnter:he,onEnterCancelled:he,onBeforeLeave:he,onLeave:he,onAfterLeave:he,onLeaveCancelled:he,onBeforeAppear:he,onAppear:he,onAfterAppear:he,onAppearCancelled:he},fe={name:"BaseTransition",props:de,setup(e,{slots:t}){const n=On(),r=ue();return()=>{const s=t.default&&we(t.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){let e=!1;for(const t of s)if(t.type!==Jt){0,o=t,e=!0;break}}const a=(0,i.ux)(e),{mode:c}=a;if(r.isLeaving)return _e(o);const l=ve(o);if(!l)return _e(o);const u=me(l,a,r,n);ye(l,u);const h=n.subTree,d=h&&ve(h);if(d&&d.type!==Jt&&!hn(l,d)){const e=me(d,a,r,n);if(ye(d,e),"out-in"===c)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,!1!==n.update.active&&(n.effect.dirty=!0,n.update())},_e(o);"in-out"===c&&l.type!==Jt&&(e.delayLeave=(e,t,n)=>{const i=ge(r,d);i[String(d.key)]=d,e[ce]=()=>{t(),e[ce]=void 0,delete u.delayedLeave},u.delayedLeave=n})}return o}}},pe=fe;function ge(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function me(e,t,n,i){const{appear:s,mode:a,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:_,onAppear:v,onAfterAppear:y,onAppearCancelled:w}=t,b=String(e.key),T=ge(n,e),E=(e,t)=>{e&&o(e,i,9,t)},C=(e,t)=>{const n=t[1];E(e,t),(0,r.cy)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},I={mode:a,persisted:c,beforeEnter(t){let i=l;if(!n.isMounted){if(!s)return;i=_||l}t[ce]&&t[ce](!0);const r=T[b];r&&hn(e,r)&&r.el[ce]&&r.el[ce](),E(i,[t])},enter(e){let t=u,i=h,r=d;if(!n.isMounted){if(!s)return;t=v||u,i=y||h,r=w||d}let o=!1;const a=e[le]=t=>{o||(o=!0,E(t?r:i,[e]),I.delayedLeave&&I.delayedLeave(),e[le]=void 0)};t?C(t,[e,a]):a()},leave(t,i){const r=String(e.key);if(t[le]&&t[le](!0),n.isUnmounting)return i();E(f,[t]);let s=!1;const o=t[ce]=n=>{s||(s=!0,i(),E(n?m:g,[t]),t[ce]=void 0,T[r]===e&&delete T[r])};T[r]=e,p?C(p,[t,o]):o()},clone(e){return me(e,t,n,i)}};return I}function _e(e){if(Ee(e))return e=vn(e),e.children=null,e}function ve(e){if(!Ee(e))return e;const{shapeFlag:t,children:n}=e;if(n){if(16&t)return n[0];if(32&t&&(0,r.Tn)(n.default))return n.default()}}function ye(e,t){6&e.shapeFlag&&e.component?ye(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function we(e,t=!1,n){let i=[],r=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Xt?(128&o.patchFlag&&r++,i=i.concat(we(o.children,t,a))):(t||o.type!==Jt)&&i.push(null!=a?vn(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}
/*! #__NO_SIDE_EFFECTS__ */function be(e,t){return(0,r.Tn)(e)?(()=>(0,r.X$)({name:e.name},t,{setup:e}))():e}const Te=e=>!!e.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const Ee=e=>e.type.__isKeepAlive;RegExp,RegExp;function Ce(e,t){return(0,r.cy)(e)?e.some((e=>Ce(e,t))):(0,r.Kg)(e)?e.split(",").includes(t):!!(0,r.gd)(e)&&e.test(t)}function Ie(e,t){ke(e,"a",t)}function Se(e,t){ke(e,"da",t)}function ke(e,t,n=Nn){const i=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(Oe(t,i,n),n){let e=n.parent;while(e&&e.parent)Ee(e.parent.vnode)&&Ae(i,t,n,e),e=e.parent}}function Ae(e,t,n,i){const s=Oe(t,e,i,!0);Ue((()=>{(0,r.TF)(i[t],s)}),n)}function Re(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Ne(e){return 128&e.shapeFlag?e.ssContent:e}function Oe(e,t,n=Nn,r=!1){if(n){const s=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;(0,i.C4)();const s=Dn(n),a=o(t,n,e,r);return s(),(0,i.bl)(),a});return r?s.unshift(a):s.push(a),a}}const Pe=e=>(t,n=Nn)=>(!$n||"sp"===e)&&Oe(e,((...e)=>t(...e)),n),xe=Pe("bm"),De=Pe("m"),Le=Pe("bu"),Me=Pe("u"),Fe=Pe("bum"),Ue=Pe("um"),$e=Pe("sp"),je=Pe("rtg"),Ve=Pe("rtc");function Be(e,t=Nn){Oe("ec",e,t)}function qe(e,t,n,i){let s;const o=n&&n[i];if((0,r.cy)(e)||(0,r.Kg)(e)){s=new Array(e.length);for(let n=0,i=e.length;n<i;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if((0,r.Gv)(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,o&&o[n])));else{const n=Object.keys(e);s=new Array(n.length);for(let i=0,r=n.length;i<r;i++){const r=n[i];s[i]=t(e[r],r,i,o&&o[i])}}else s=[];return n&&(n[i]=s),s}function He(e,t,n={},i,r){if(P.isCE||P.parent&&Te(P.parent)&&P.parent.isCE)return"default"!==t&&(n.name=t),gn("slot",n,i&&i());let s=e[t];s&&s._c&&(s._d=!1),nn();const o=s&&ze(s(n)),a=ln(Xt,{key:n.key||o&&o.key||`_${t}`},o||(i?i():[]),o&&1===e._?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function ze(e){return e.some((e=>!un(e)||e.type!==Jt&&!(e.type===Xt&&!ze(e.children))))?e:null}function We(e,t){const n={};for(const i in e)n[t&&/[A-Z]/.test(i)?`on:${i}`:(0,r.rU)(i)]=e[i];return n}const Ke=e=>e?Mn(e)?Wn(e)||e.proxy:Ke(e.parent):null,Ge=(0,r.X$)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ke(e.parent),$root:e=>Ke(e.root),$emit:e=>e.emit,$options:e=>it(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,w(e.update)}),$nextTick:e=>e.n||(e.n=v.bind(e.proxy)),$watch:e=>ie.bind(e)}),Qe=(e,t)=>e!==r.MZ&&!e.__isScriptSetup&&(0,r.$3)(e,t),Xe={get({_:e},t){if("__v_skip"===t)return!0;const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:l,appContext:u}=e;let h;if("$"!==t[0]){const i=c[t];if(void 0!==i)switch(i){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(Qe(s,t))return c[t]=1,s[t];if(o!==r.MZ&&(0,r.$3)(o,t))return c[t]=2,o[t];if((h=e.propsOptions[0])&&(0,r.$3)(h,t))return c[t]=3,a[t];if(n!==r.MZ&&(0,r.$3)(n,t))return c[t]=4,n[t];Je&&(c[t]=0)}}const d=Ge[t];let f,p;return d?("$attrs"===t&&(0,i.u4)(e.attrs,"get",""),d(e)):(f=l.__cssModules)&&(f=f[t])?f:n!==r.MZ&&(0,r.$3)(n,t)?(c[t]=4,n[t]):(p=u.config.globalProperties,(0,r.$3)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:i,setupState:s,ctx:o}=e;return Qe(s,t)?(s[t]=n,!0):i!==r.MZ&&(0,r.$3)(i,t)?(i[t]=n,!0):!(0,r.$3)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:s,propsOptions:o}},a){let c;return!!n[a]||e!==r.MZ&&(0,r.$3)(e,a)||Qe(t,a)||(c=o[0])&&(0,r.$3)(c,a)||(0,r.$3)(i,a)||(0,r.$3)(Ge,a)||(0,r.$3)(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,r.$3)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ye(e){return(0,r.cy)(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}let Je=!0;function Ze(e){const t=it(e),n=e.proxy,s=e.ctx;Je=!1,t.beforeCreate&&tt(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:c,watch:l,provide:u,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:g,updated:m,activated:_,deactivated:v,beforeDestroy:y,beforeUnmount:w,destroyed:b,unmounted:T,render:E,renderTracked:C,renderTriggered:I,errorCaptured:S,serverPrefetch:k,expose:A,inheritAttrs:R,components:N,directives:O,filters:P}=t,x=null;if(h&&et(h,s,x),c)for(const i in c){const e=c[i];(0,r.Tn)(e)&&(s[i]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,r.Gv)(t)&&(e.data=(0,i.Kh)(t))}if(Je=!0,a)for(const i in a){const e=a[i],t=(0,r.Tn)(e)?e.bind(n,n):(0,r.Tn)(e.get)?e.get.bind(n,n):r.tE;0;const o=!(0,r.Tn)(e)&&(0,r.Tn)(e.set)?e.set.bind(n):r.tE,c=Qn({get:t,set:o});Object.defineProperty(s,i,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(l)for(const i in l)nt(l[i],s,n,i);if(u){const e=(0,r.Tn)(u)?u.call(n):u;Reflect.ownKeys(e).forEach((t=>{_t(t,e[t])}))}function D(e,t){(0,r.cy)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&tt(d,e,"c"),D(xe,f),D(De,p),D(Le,g),D(Me,m),D(Ie,_),D(Se,v),D(Be,S),D(Ve,C),D(je,I),D(Fe,w),D(Ue,T),D($e,k),(0,r.cy)(A))if(A.length){const t=e.exposed||(e.exposed={});A.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});E&&e.render===r.tE&&(e.render=E),null!=R&&(e.inheritAttrs=R),N&&(e.components=N),O&&(e.directives=O)}function et(e,t,n=r.tE){(0,r.cy)(e)&&(e=ct(e));for(const s in e){const n=e[s];let o;o=(0,r.Gv)(n)?"default"in n?vt(n.from||s,n.default,!0):vt(n.from||s):vt(n),(0,i.i9)(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e}):t[s]=o}}function tt(e,t,n){o((0,r.cy)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function nt(e,t,n,i){const s=i.includes(".")?re(n,i):()=>n[i];if((0,r.Kg)(e)){const n=t[e];(0,r.Tn)(n)&&te(s,n)}else if((0,r.Tn)(e))te(s,e.bind(n));else if((0,r.Gv)(e))if((0,r.cy)(e))e.forEach((e=>nt(e,t,n,i)));else{const i=(0,r.Tn)(e.handler)?e.handler.bind(n):t[e.handler];(0,r.Tn)(i)&&te(s,i,e)}else 0}function it(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,c=o.get(t);let l;return c?l=c:s.length||n||i?(l={},s.length&&s.forEach((e=>rt(l,e,a,!0))),rt(l,t,a)):l=t,(0,r.Gv)(t)&&o.set(t,l),l}function rt(e,t,n,i=!1){const{mixins:r,extends:s}=t;s&&rt(e,s,n,!0),r&&r.forEach((t=>rt(e,t,n,!0)));for(const o in t)if(i&&"expose"===o);else{const i=st[o]||n&&n[o];e[o]=i?i(e[o],t[o]):t[o]}return e}const st={data:ot,props:ht,emits:ht,methods:ut,computed:ut,beforeCreate:lt,created:lt,beforeMount:lt,mounted:lt,beforeUpdate:lt,updated:lt,beforeDestroy:lt,beforeUnmount:lt,destroyed:lt,unmounted:lt,activated:lt,deactivated:lt,errorCaptured:lt,serverPrefetch:lt,components:ut,directives:ut,watch:dt,provide:ot,inject:at};function ot(e,t){return t?e?function(){return(0,r.X$)((0,r.Tn)(e)?e.call(this,this):e,(0,r.Tn)(t)?t.call(this,this):t)}:t:e}function at(e,t){return ut(ct(e),ct(t))}function ct(e){if((0,r.cy)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function lt(e,t){return e?[...new Set([].concat(e,t))]:t}function ut(e,t){return e?(0,r.X$)(Object.create(null),e,t):t}function ht(e,t){return e?(0,r.cy)(e)&&(0,r.cy)(t)?[...new Set([...e,...t])]:(0,r.X$)(Object.create(null),Ye(e),Ye(null!=t?t:{})):t}function dt(e,t){if(!e)return t;if(!t)return e;const n=(0,r.X$)(Object.create(null),e);for(const i in t)n[i]=lt(e[i],t[i]);return n}function ft(){return{app:null,config:{isNativeTag:r.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pt=0;function gt(e,t){return function(n,i=null){(0,r.Tn)(n)||(n=(0,r.X$)({},n)),null==i||(0,r.Gv)(i)||(i=null);const s=ft(),o=new WeakSet;let a=!1;const c=s.app={_uid:pt++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:Yn,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,r.Tn)(e.install)?(o.add(e),e.install(c,...t)):(0,r.Tn)(e)&&(o.add(e),e(c,...t))),c},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),c},component(e,t){return t?(s.components[e]=t,c):s.components[e]},directive(e,t){return t?(s.directives[e]=t,c):s.directives[e]},mount(r,o,l){if(!a){0;const u=gn(n,i);return u.appContext=s,!0===l?l="svg":!1===l&&(l=void 0),o&&t?t(u,r):e(u,r,l),a=!0,c._container=r,r.__vue_app__=c,Wn(u.component)||u.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return s.provides[e]=t,c},runWithContext(e){const t=mt;mt=c;try{return e()}finally{mt=t}}};return c}}let mt=null;function _t(e,t){if(Nn){let n=Nn.provides;const i=Nn.parent&&Nn.parent.provides;i===n&&(n=Nn.provides=Object.create(i)),n[e]=t}else 0}function vt(e,t,n=!1){const i=Nn||P;if(i||mt){const s=i?null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:mt._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,r.Tn)(t)?t.call(i&&i.proxy):t}else 0}const yt={},wt=()=>Object.create(yt),bt=e=>Object.getPrototypeOf(e)===yt;function Tt(e,t,n,r=!1){const s={},o=wt();e.propsDefaults=Object.create(null),Ct(e,t,s,o);for(const i in e.propsOptions[0])i in s||(s[i]=void 0);n?e.props=r?s:(0,i.Gc)(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function Et(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=e,l=(0,i.ux)(o),[u]=e.propsOptions;let h=!1;if(!(s||c>0)||16&c){let i;Ct(e,t,o,a)&&(h=!0);for(const s in l)t&&((0,r.$3)(t,s)||(i=(0,r.Tg)(s))!==s&&(0,r.$3)(t,i))||(u?!n||void 0===n[s]&&void 0===n[i]||(o[s]=It(u,l,s,void 0,e,!0)):delete o[s]);if(a!==l)for(const e in a)t&&(0,r.$3)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let i=0;i<n.length;i++){let s=n[i];if(O(e.emitsOptions,s))continue;const c=t[s];if(u)if((0,r.$3)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const t=(0,r.PT)(s);o[t]=It(u,l,t,c,e,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,i.hZ)(e.attrs,"set","")}function Ct(e,t,n,s){const[o,a]=e.propsOptions;let c,l=!1;if(t)for(let i in t){if((0,r.SU)(i))continue;const u=t[i];let h;o&&(0,r.$3)(o,h=(0,r.PT)(i))?a&&a.includes(h)?(c||(c={}))[h]=u:n[h]=u:O(e.emitsOptions,i)||i in s&&u===s[i]||(s[i]=u,l=!0)}if(a){const t=(0,i.ux)(n),s=c||r.MZ;for(let i=0;i<a.length;i++){const c=a[i];n[c]=It(o,t,c,s[c],e,!(0,r.$3)(s,c))}}return l}function It(e,t,n,i,s,o){const a=e[n];if(null!=a){const e=(0,r.$3)(a,"default");if(e&&void 0===i){const e=a.default;if(a.type!==Function&&!a.skipFactory&&(0,r.Tn)(e)){const{propsDefaults:r}=s;if(n in r)i=r[n];else{const o=Dn(s);i=r[n]=e.call(null,t),o()}}else i=e}a[0]&&(o&&!e?i=!1:!a[1]||""!==i&&i!==(0,r.Tg)(n)||(i=!0))}return i}function St(e,t,n=!1){const i=t.propsCache,s=i.get(e);if(s)return s;const o=e.props,a={},c=[];let l=!1;if(!(0,r.Tn)(e)){const i=e=>{l=!0;const[n,i]=St(e,t,!0);(0,r.X$)(a,n),i&&c.push(...i)};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}if(!o&&!l)return(0,r.Gv)(e)&&i.set(e,r.Oj),r.Oj;if((0,r.cy)(o))for(let h=0;h<o.length;h++){0;const e=(0,r.PT)(o[h]);kt(e)&&(a[e]=r.MZ)}else if(o){0;for(const e in o){const t=(0,r.PT)(e);if(kt(t)){const n=o[e],i=a[t]=(0,r.cy)(n)||(0,r.Tn)(n)?{type:n}:(0,r.X$)({},n);if(i){const e=Nt(Boolean,i.type),n=Nt(String,i.type);i[0]=e>-1,i[1]=n<0||e<n,(e>-1||(0,r.$3)(i,"default"))&&c.push(t)}}}}const u=[a,c];return(0,r.Gv)(e)&&i.set(e,u),u}function kt(e){return"$"!==e[0]&&!(0,r.SU)(e)}function At(e){if(null===e)return"null";if("function"===typeof e)return e.name||"";if("object"===typeof e){const t=e.constructor&&e.constructor.name;return t||""}return""}function Rt(e,t){return At(e)===At(t)}function Nt(e,t){return(0,r.cy)(t)?t.findIndex((t=>Rt(t,e))):(0,r.Tn)(t)&&Rt(t,e)?0:-1}const Ot=e=>"_"===e[0]||"$stable"===e,Pt=e=>(0,r.cy)(e)?e.map(Tn):[Tn(e)],xt=(e,t,n)=>{if(t._n)return t;const i=F(((...e)=>Pt(t(...e))),n);return i._c=!1,i},Dt=(e,t,n)=>{const i=e._ctx;for(const s in e){if(Ot(s))continue;const n=e[s];if((0,r.Tn)(n))t[s]=xt(s,n,i);else if(null!=n){0;const e=Pt(n);t[s]=()=>e}}},Lt=(e,t)=>{const n=Pt(t);e.slots.default=()=>n},Mt=(e,t)=>{const n=e.slots=wt();if(32&e.vnode.shapeFlag){const e=t._;e?((0,r.X$)(n,t),(0,r.yQ)(n,"_",e)):Dt(t,n)}else t&&Lt(e,t)},Ft=(e,t,n)=>{const{vnode:i,slots:s}=e;let o=!0,a=r.MZ;if(32&i.shapeFlag){const e=t._;e?n&&1===e?o=!1:((0,r.X$)(s,t),n||1!==e||delete s._):(o=!t.$stable,Dt(t,s)),a=t}else t&&(Lt(e,t),a={default:1});if(o)for(const r in s)Ot(r)||null!=a[r]||delete s[r]};function Ut(e,t,n,o,a=!1){if((0,r.cy)(e))return void e.forEach(((e,i)=>Ut(e,t&&((0,r.cy)(t)?t[i]:t),n,o,a)));if(Te(o)&&!a)return;const c=4&o.shapeFlag?Wn(o.component)||o.component.proxy:o.el,l=a?null:c,{i:u,r:h}=e;const d=t&&t.r,f=u.refs===r.MZ?u.refs={}:u.refs,p=u.setupState;if(null!=d&&d!==h&&((0,r.Kg)(d)?(f[d]=null,(0,r.$3)(p,d)&&(p[d]=null)):(0,i.i9)(d)&&(d.value=null)),(0,r.Tn)(h))s(h,u,12,[l,f]);else{const t=(0,r.Kg)(h),s=(0,i.i9)(h);if(t||s){const i=()=>{if(e.f){const n=t?(0,r.$3)(p,h)?p[h]:f[h]:h.value;a?(0,r.cy)(n)&&(0,r.TF)(n,c):(0,r.cy)(n)?n.includes(c)||n.push(c):t?(f[h]=[c],(0,r.$3)(p,h)&&(p[h]=f[h])):(h.value=[c],e.k&&(f[e.k]=h.value))}else t?(f[h]=l,(0,r.$3)(p,h)&&(p[h]=l)):s&&(h.value=l,e.k&&(f[e.k]=l))};l?(i.id=-1,jt(i,n)):i()}else 0}}function $t(){"boolean"!==typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&((0,r.We)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const jt=Y;function Vt(e){return Bt(e)}function Bt(e,t){$t();const n=(0,r.We)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:l,createComment:u,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:g=r.tE,insertStaticContent:m}=e,_=(e,t,n,i=null,r=null,s=null,o=void 0,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!hn(e,t)&&(i=J(e),K(e,r,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:h}=t;switch(l){case Yt:v(e,t,n,i);break;case Jt:y(e,t,n,i);break;case Zt:null==e&&b(t,n,i,o);break;case Xt:D(e,t,n,i,r,s,o,a,c);break;default:1&h?k(e,t,n,i,r,s,o,a,c):6&h?L(e,t,n,i,r,s,o,a,c):(64&h||128&h)&&l.process(e,t,n,i,r,s,o,a,c,te)}null!=u&&r&&Ut(u,e&&e.ref,s,t||e,!t)},v=(e,t,n,i)=>{if(null==e)s(t.el=l(t.children),n,i);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},y=(e,t,n,i)=>{null==e?s(t.el=u(t.children||""),n,i):t.el=e.el},b=(e,t,n,i)=>{[e.el,e.anchor]=m(e.children,t,n,i,e.el,e.anchor)},E=({el:e,anchor:t},n,i)=>{let r;while(e&&e!==t)r=p(e),s(e,n,i),e=r;s(t,n,i)},S=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},k=(e,t,n,i,r,s,o,a,c)=>{"svg"===t.type?o="svg":"math"===t.type&&(o="mathml"),null==e?A(t,n,i,r,s,o,a,c):O(e,t,r,s,o,a,c)},A=(e,t,n,i,o,l,u,h)=>{let f,p;const{props:g,shapeFlag:m,transition:_,dirs:v}=e;if(f=e.el=c(e.type,l,g&&g.is,g),8&m?d(f,e.children):16&m&&N(e.children,f,null,i,o,qt(e,l),u,h),v&&ae(e,null,i,"created"),R(f,e,e.scopeId,u,i),g){for(const t in g)"value"===t||(0,r.SU)(t)||a(f,t,null,g[t],l,e.children,i,o,Y);"value"in g&&a(f,"value",null,g.value,l),(p=g.onVnodeBeforeMount)&&Sn(p,i,e)}v&&ae(e,null,i,"beforeMount");const y=zt(o,_);y&&_.beforeEnter(f),s(f,t,n),((p=g&&g.onVnodeMounted)||y||v)&&jt((()=>{p&&Sn(p,i,e),y&&_.enter(f),v&&ae(e,null,i,"mounted")}),o)},R=(e,t,n,i,r)=>{if(n&&g(e,n),i)for(let s=0;s<i.length;s++)g(e,i[s]);if(r){let n=r.subTree;if(t===n){const t=r.vnode;R(e,t,t.scopeId,t.slotScopeIds,r.parent)}}},N=(e,t,n,i,r,s,o,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=a?En(e[l]):Tn(e[l]);_(null,c,t,n,i,r,s,o,a)}},O=(e,t,n,i,s,o,c)=>{const l=t.el=e.el;let{patchFlag:u,dynamicChildren:h,dirs:f}=t;u|=16&e.patchFlag;const p=e.props||r.MZ,g=t.props||r.MZ;let m;if(n&&Ht(n,!1),(m=g.onVnodeBeforeUpdate)&&Sn(m,n,t,e),f&&ae(t,e,n,"beforeUpdate"),n&&Ht(n,!0),h?P(e.dynamicChildren,h,l,n,i,qt(t,s),o):c||B(e,t,l,null,n,i,qt(t,s),o,!1),u>0){if(16&u)x(l,t,p,g,n,i,s);else if(2&u&&p.class!==g.class&&a(l,"class",null,g.class,s),4&u&&a(l,"style",p.style,g.style,s),8&u){const r=t.dynamicProps;for(let t=0;t<r.length;t++){const o=r[t],c=p[o],u=g[o];u===c&&"value"!==o||a(l,o,c,u,s,e.children,n,i,Y)}}1&u&&e.children!==t.children&&d(l,t.children)}else c||null!=h||x(l,t,p,g,n,i,s);((m=g.onVnodeUpdated)||f)&&jt((()=>{m&&Sn(m,n,t,e),f&&ae(t,e,n,"updated")}),i)},P=(e,t,n,i,r,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.el&&(c.type===Xt||!hn(c,l)||70&c.shapeFlag)?f(c.el):n;_(c,l,u,null,i,r,s,o,!0)}},x=(e,t,n,i,s,o,c)=>{if(n!==i){if(n!==r.MZ)for(const l in n)(0,r.SU)(l)||l in i||a(e,l,n[l],null,c,t.children,s,o,Y);for(const l in i){if((0,r.SU)(l))continue;const u=i[l],h=n[l];u!==h&&"value"!==l&&a(e,l,h,u,c,t.children,s,o,Y)}"value"in i&&a(e,"value",n.value,i.value,c)}},D=(e,t,n,i,r,o,a,c,u)=>{const h=t.el=e?e.el:l(""),d=t.anchor=e?e.anchor:l("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:g}=t;g&&(c=c?c.concat(g):g),null==e?(s(h,n,i),s(d,n,i),N(t.children||[],n,d,r,o,a,c,u)):f>0&&64&f&&p&&e.dynamicChildren?(P(e.dynamicChildren,p,n,r,o,a,c),(null!=t.key||r&&t===r.subTree)&&Wt(e,t,!0)):B(e,t,n,d,r,o,a,c,u)},L=(e,t,n,i,r,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?r.ctx.activate(t,n,i,o,c):M(t,n,i,r,s,o,c):F(e,t,c)},M=(e,t,n,i,r,s,o)=>{const a=e.component=Rn(e,i,r);if(Ee(e)&&(a.ctx.renderer=te),jn(a),a.asyncDep){if(r&&r.registerDep(a,$),!e.el){const e=a.subTree=gn(Jt);y(null,e,t,n)}}else $(a,e,t,n,r,s,o)},F=(e,t,n)=>{const i=t.component=e.component;if(V(e,t,n)){if(i.asyncDep&&!i.asyncResolved)return void j(i,t,n);i.next=t,T(i.update),i.effect.dirty=!0,i.update()}else t.el=e.el,i.vnode=t},$=(e,t,n,s,o,a,c)=>{const l=()=>{if(e.isMounted){let{next:t,bu:n,u:i,parent:s,vnode:u}=e;{const n=Gt(e);if(n)return t&&(t.el=u.el,j(e,t,c)),void n.asyncDep.then((()=>{e.isUnmounted||l()}))}let h,d=t;0,Ht(e,!1),t?(t.el=u.el,j(e,t,c)):t=u,n&&(0,r.DY)(n),(h=t.props&&t.props.onVnodeBeforeUpdate)&&Sn(h,s,t,u),Ht(e,!0);const p=U(e);0;const g=e.subTree;e.subTree=p,_(g,p,f(g.el),J(g),e,o,a),t.el=p.el,null===d&&q(e,p.el),i&&jt(i,o),(h=t.props&&t.props.onVnodeUpdated)&&jt((()=>Sn(h,s,t,u)),o)}else{let i;const{el:c,props:l}=t,{bm:u,m:h,parent:d}=e,f=Te(t);if(Ht(e,!1),u&&(0,r.DY)(u),!f&&(i=l&&l.onVnodeBeforeMount)&&Sn(i,d,t),Ht(e,!0),c&&ie){const n=()=>{e.subTree=U(e),ie(c,e.subTree,e,o,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const i=e.subTree=U(e);0,_(null,i,n,s,e,o,a),t.el=i.el}if(h&&jt(h,o),!f&&(i=l&&l.onVnodeMounted)){const e=t;jt((()=>Sn(i,d,e)),o)}(256&t.shapeFlag||d&&Te(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&jt(e.a,o),e.isMounted=!0,t=n=s=null}},u=e.effect=new i.X2(l,r.tE,(()=>w(h)),e.scope),h=e.update=()=>{u.dirty&&u.run()};h.id=e.uid,Ht(e,!0),h()},j=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,Et(e,t.props,r,n),Ft(e,t.children,n),(0,i.C4)(),C(e),(0,i.bl)()},B=(e,t,n,i,r,s,o,a,c=!1)=>{const l=e&&e.children,u=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void z(l,h,n,i,r,s,o,a,c);if(256&f)return void H(l,h,n,i,r,s,o,a,c)}8&p?(16&u&&Y(l,r,s),h!==l&&d(n,h)):16&u?16&p?z(l,h,n,i,r,s,o,a,c):Y(l,r,s,!0):(8&u&&d(n,""),16&p&&N(h,n,i,r,s,o,a,c))},H=(e,t,n,i,s,o,a,c,l)=>{e=e||r.Oj,t=t||r.Oj;const u=e.length,h=t.length,d=Math.min(u,h);let f;for(f=0;f<d;f++){const i=t[f]=l?En(t[f]):Tn(t[f]);_(e[f],i,n,null,s,o,a,c,l)}u>h?Y(e,s,o,!0,!1,d):N(t,n,i,s,o,a,c,l,d)},z=(e,t,n,i,s,o,a,c,l)=>{let u=0;const h=t.length;let d=e.length-1,f=h-1;while(u<=d&&u<=f){const i=e[u],r=t[u]=l?En(t[u]):Tn(t[u]);if(!hn(i,r))break;_(i,r,n,null,s,o,a,c,l),u++}while(u<=d&&u<=f){const i=e[d],r=t[f]=l?En(t[f]):Tn(t[f]);if(!hn(i,r))break;_(i,r,n,null,s,o,a,c,l),d--,f--}if(u>d){if(u<=f){const e=f+1,r=e<h?t[e].el:i;while(u<=f)_(null,t[u]=l?En(t[u]):Tn(t[u]),n,r,s,o,a,c,l),u++}}else if(u>f)while(u<=d)K(e[u],s,o,!0),u++;else{const p=u,g=u,m=new Map;for(u=g;u<=f;u++){const e=t[u]=l?En(t[u]):Tn(t[u]);null!=e.key&&m.set(e.key,u)}let v,y=0;const w=f-g+1;let b=!1,T=0;const E=new Array(w);for(u=0;u<w;u++)E[u]=0;for(u=p;u<=d;u++){const i=e[u];if(y>=w){K(i,s,o,!0);continue}let r;if(null!=i.key)r=m.get(i.key);else for(v=g;v<=f;v++)if(0===E[v-g]&&hn(i,t[v])){r=v;break}void 0===r?K(i,s,o,!0):(E[r-g]=u+1,r>=T?T=r:b=!0,_(i,t[r],n,null,s,o,a,c,l),y++)}const C=b?Kt(E):r.Oj;for(v=C.length-1,u=w-1;u>=0;u--){const e=g+u,r=t[e],d=e+1<h?t[e+1].el:i;0===E[u]?_(null,r,n,d,s,o,a,c,l):b&&(v<0||u!==C[v]?W(r,n,d,2):v--)}}},W=(e,t,n,i,r=null)=>{const{el:o,type:a,transition:c,children:l,shapeFlag:u}=e;if(6&u)return void W(e.component.subTree,t,n,i);if(128&u)return void e.suspense.move(t,n,i);if(64&u)return void a.move(e,t,n,te);if(a===Xt){s(o,t,n);for(let e=0;e<l.length;e++)W(l[e],t,n,i);return void s(e.anchor,t,n)}if(a===Zt)return void E(e,t,n);const h=2!==i&&1&u&&c;if(h)if(0===i)c.beforeEnter(o),s(o,t,n),jt((()=>c.enter(o)),r);else{const{leave:e,delayLeave:i,afterLeave:r}=c,a=()=>s(o,t,n),l=()=>{e(o,(()=>{a(),r&&r()}))};i?i(o,a,l):l()}else s(o,t,n)},K=(e,t,n,i=!1,r=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&Ut(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const f=1&u&&d,p=!Te(e);let g;if(p&&(g=o&&o.onVnodeBeforeUnmount)&&Sn(g,t,e),6&u)X(e.component,n,i);else{if(128&u)return void e.suspense.unmount(n,i);f&&ae(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,r,te,i):l&&(s!==Xt||h>0&&64&h)?Y(l,t,n,!1,!0):(s===Xt&&384&h||!r&&16&u)&&Y(c,t,n),i&&G(e)}(p&&(g=o&&o.onVnodeUnmounted)||f)&&jt((()=>{g&&Sn(g,t,e),f&&ae(e,null,t,"unmounted")}),n)},G=e=>{const{type:t,el:n,anchor:i,transition:r}=e;if(t===Xt)return void Q(n,i);if(t===Zt)return void S(e);const s=()=>{o(n),r&&!r.persisted&&r.afterLeave&&r.afterLeave()};if(1&e.shapeFlag&&r&&!r.persisted){const{leave:t,delayLeave:i}=r,o=()=>t(n,s);i?i(e.el,s,o):o()}else s()},Q=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},X=(e,t,n)=>{const{bum:i,scope:s,update:o,subTree:a,um:c}=e;i&&(0,r.DY)(i),s.stop(),o&&(o.active=!1,K(a,e,t,n)),c&&jt(c,t),jt((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Y=(e,t,n,i=!1,r=!1,s=0)=>{for(let o=s;o<e.length;o++)K(e[o],t,n,i,r)},J=e=>6&e.shapeFlag?J(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el);let Z=!1;const ee=(e,t,n)=>{null==e?t._vnode&&K(t._vnode,null,null,!0):_(t._vnode||null,e,t,null,null,null,n),Z||(Z=!0,C(),I(),Z=!1),t._vnode=e},te={p:_,um:K,m:W,r:G,mt:M,mc:N,pc:B,pbc:P,n:J,o:e};let ne,ie;return t&&([ne,ie]=t(te)),{render:ee,hydrate:ne,createApp:gt(ee,ne)}}function qt({type:e,props:t},n){return"svg"===n&&"foreignObject"===e||"mathml"===n&&"annotation-xml"===e&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Ht({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function zt(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Wt(e,t,n=!1){const i=e.children,s=t.children;if((0,r.cy)(i)&&(0,r.cy)(s))for(let r=0;r<i.length;r++){const e=i[r];let t=s[r];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[r]=En(s[r]),t.el=e.el),n||Wt(e,t)),t.type===Yt&&(t.el=e.el)}}function Kt(e){const t=e.slice(),n=[0];let i,r,s,o,a;const c=e.length;for(i=0;i<c;i++){const c=e[i];if(0!==c){if(r=n[n.length-1],e[r]<c){t[i]=r,n.push(i);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[i]=n[s-1]),n[s]=i)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}function Gt(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Gt(t)}const Qt=e=>e.__isTeleport;const Xt=Symbol.for("v-fgt"),Yt=Symbol.for("v-txt"),Jt=Symbol.for("v-cmt"),Zt=Symbol.for("v-stc"),en=[];let tn=null;function nn(e=!1){en.push(tn=e?null:[])}function rn(){en.pop(),tn=en[en.length-1]||null}let sn=1;function on(e){sn+=e}function an(e){return e.dynamicChildren=sn>0?tn||r.Oj:null,rn(),sn>0&&tn&&tn.push(e),e}function cn(e,t,n,i,r,s){return an(pn(e,t,n,i,r,s,!0))}function ln(e,t,n,i,r){return an(gn(e,t,n,i,r,!0))}function un(e){return!!e&&!0===e.__v_isVNode}function hn(e,t){return e.type===t.type&&e.key===t.key}const dn=({key:e})=>null!=e?e:null,fn=({ref:e,ref_key:t,ref_for:n})=>("number"===typeof e&&(e=""+e),null!=e?(0,r.Kg)(e)||(0,i.i9)(e)||(0,r.Tn)(e)?{i:P,r:e,k:t,f:!!n}:e:null);function pn(e,t=null,n=null,i=0,s=null,o=(e===Xt?0:1),a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&dn(t),ref:t&&fn(t),scopeId:x,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:P};return c?(Cn(l,n),128&o&&e.normalize(l)):n&&(l.shapeFlag|=(0,r.Kg)(n)?8:16),sn>0&&!a&&tn&&(l.patchFlag>0||6&o)&&32!==l.patchFlag&&tn.push(l),l}const gn=mn;function mn(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==W||(e=Jt),un(e)){const i=vn(e,t,!0);return n&&Cn(i,n),sn>0&&!a&&tn&&(6&i.shapeFlag?tn[tn.indexOf(e)]=i:tn.push(i)),i.patchFlag|=-2,i}if(Gn(e)&&(e=e.__vccOpts),t){t=_n(t);let{class:e,style:n}=t;e&&!(0,r.Kg)(e)&&(t.class=(0,r.C4)(e)),(0,r.Gv)(n)&&((0,i.ju)(n)&&!(0,r.cy)(n)&&(n=(0,r.X$)({},n)),t.style=(0,r.Tr)(n))}const c=(0,r.Kg)(e)?1:X(e)?128:Qt(e)?64:(0,r.Gv)(e)?4:(0,r.Tn)(e)?2:0;return pn(e,t,n,s,o,c,a,!0)}function _n(e){return e?(0,i.ju)(e)||bt(e)?(0,r.X$)({},e):e:null}function vn(e,t,n=!1){const{props:i,ref:s,patchFlag:o,children:a}=e,c=t?In(i||{},t):i,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&dn(c),ref:t&&t.ref?n&&s?(0,r.cy)(s)?s.concat(fn(t)):[s,fn(t)]:fn(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Xt?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&vn(e.ssContent),ssFallback:e.ssFallback&&vn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l}function yn(e=" ",t=0){return gn(Yt,null,e,t)}function wn(e,t){const n=gn(Zt,null,e);return n.staticCount=t,n}function bn(e="",t=!1){return t?(nn(),ln(Jt,null,e)):gn(Jt,null,e)}function Tn(e){return null==e||"boolean"===typeof e?gn(Jt):(0,r.cy)(e)?gn(Xt,null,e.slice()):"object"===typeof e?En(e):gn(Yt,null,String(e))}function En(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:vn(e)}function Cn(e,t){let n=0;const{shapeFlag:i}=e;if(null==t)t=null;else if((0,r.cy)(t))n=16;else if("object"===typeof t){if(65&i){const n=t.default;return void(n&&(n._c&&(n._d=!1),Cn(e,n()),n._c&&(n._d=!0)))}{n=32;const i=t._;i||bt(t)?3===i&&P&&(1===P.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=P}}else(0,r.Tn)(t)?(t={default:t,_ctx:P},n=32):(t=String(t),64&i?(n=16,t=[yn(t)]):n=8);e.children=t,e.shapeFlag|=n}function In(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const e in i)if("class"===e)t.class!==i.class&&(t.class=(0,r.C4)([t.class,i.class]));else if("style"===e)t.style=(0,r.Tr)([t.style,i.style]);else if((0,r.Mp)(e)){const n=t[e],s=i[e];!s||n===s||(0,r.cy)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=i[e])}return t}function Sn(e,t,n,i=null){o(e,t,7,[n,i])}const kn=ft();let An=0;function Rn(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||kn,a={uid:An++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new i.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:St(s,o),emitsOptions:N(s,o),emit:null,emitted:null,propsDefaults:r.MZ,inheritAttrs:s.inheritAttrs,ctx:r.MZ,data:r.MZ,props:r.MZ,attrs:r.MZ,slots:r.MZ,refs:r.MZ,setupState:r.MZ,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=R.bind(null,a),e.ce&&e.ce(a),a}let Nn=null;const On=()=>Nn||P;let Pn,xn;{const e=(0,r.We)(),t=(t,n)=>{let i;return(i=e[t])||(i=e[t]=[]),i.push(n),e=>{i.length>1?i.forEach((t=>t(e))):i[0](e)}};Pn=t("__VUE_INSTANCE_SETTERS__",(e=>Nn=e)),xn=t("__VUE_SSR_SETTERS__",(e=>$n=e))}const Dn=e=>{const t=Nn;return Pn(e),e.scope.on(),()=>{e.scope.off(),Pn(t)}},Ln=()=>{Nn&&Nn.scope.off(),Pn(null)};function Mn(e){return 4&e.vnode.shapeFlag}let Fn,Un,$n=!1;function jn(e,t=!1){t&&xn(t);const{props:n,children:i}=e.vnode,r=Mn(e);Tt(e,n,r,t),Mt(e,i);const s=r?Vn(e,t):void 0;return t&&xn(!1),s}function Vn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Xe);const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?zn(e):null,c=Dn(e);(0,i.C4)();const l=s(o,e,0,[e.props,n]);if((0,i.bl)(),c(),(0,r.yL)(l)){if(l.then(Ln,Ln),t)return l.then((n=>{Bn(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=l}else Bn(e,l,t)}else qn(e,t)}function Bn(e,t,n){(0,r.Tn)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,r.Gv)(t)&&(e.setupState=(0,i.Pr)(t)),qn(e,n)}function qn(e,t,n){const s=e.type;if(!e.render){if(!t&&Fn&&!s.render){const t=s.template||it(e).template;if(t){0;const{isCustomElement:n,compilerOptions:i}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,r.X$)((0,r.X$)({isCustomElement:n,delimiters:o},i),a);s.render=Fn(t,c)}}e.render=s.render||r.tE,Un&&Un(e)}{const t=Dn(e);(0,i.C4)();try{Ze(e)}finally{(0,i.bl)(),t()}}}const Hn={get(e,t){return(0,i.u4)(e,"get",""),e[t]}};function zn(e){const t=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,Hn),slots:e.slots,emit:e.emit,expose:t}}function Wn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,i.Pr)((0,i.IG)(e.exposed)),{get(t,n){return n in t?t[n]:n in Ge?Ge[n](e):void 0},has(e,t){return t in e||t in Ge}}))}function Kn(e,t=!0){return(0,r.Tn)(e)?e.displayName||e.name:e.name||t&&e.__name}function Gn(e){return(0,r.Tn)(e)&&"__vccOpts"in e}const Qn=(e,t)=>{const n=(0,i.EW)(e,t,$n);return n};function Xn(e,t,n){const i=arguments.length;return 2===i?(0,r.Gv)(t)&&!(0,r.cy)(t)?un(t)?gn(e,null,[t]):gn(e,t):gn(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&un(n)&&(n=[n]),gn(e,t,n))}const Yn="3.4.25"},3751:function(e,t,n){n.d(t,{D$:function(){return Te},Ef:function(){return ke},F:function(){return ue},Jo:function(){return ye},XX:function(){return Se},eB:function(){return p}});var i=n(641),r=n(33),s=n(953);
/**
* @vue/runtime-dom v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const o="http://www.w3.org/2000/svg",a="http://www.w3.org/1998/Math/MathML",c="undefined"!==typeof document?document:null,l=c&&c.createElement("template"),u={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const r="svg"===t?c.createElementNS(o,e):"mathml"===t?c.createElementNS(a,e):c.createElement(e,n?{is:n}:void 0);return"select"===e&&i&&null!=i.multiple&&r.setAttribute("multiple",i.multiple),r},createText:e=>c.createTextNode(e),createComment:e=>c.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>c.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,r,s){const o=n?n.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling)){while(1)if(t.insertBefore(r.cloneNode(!0),n),r===s||!(r=r.nextSibling))break}else{l.innerHTML="svg"===i?`<svg>${e}</svg>`:"mathml"===i?`<math>${e}</math>`:e;const r=l.content;if("svg"===i||"mathml"===i){const e=r.firstChild;while(e.firstChild)r.appendChild(e.firstChild);r.removeChild(e)}t.insertBefore(r,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},h="transition",d="animation",f=Symbol("_vtc"),p=(e,{slots:t})=>(0,i.h)(i.pR,y(e),t);p.displayName="Transition";const g={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},m=p.props=(0,r.X$)({},i.QP,g),_=(e,t=[])=>{(0,r.cy)(e)?e.forEach((e=>e(...t))):e&&e(...t)},v=e=>!!e&&((0,r.cy)(e)?e.some((e=>e.length>1)):e.length>1);function y(e){const t={};for(const r in e)r in g||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=o,appearActiveClass:u=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=w(s),y=m&&m[0],b=m&&m[1],{onBeforeEnter:I,onEnter:k,onEnterCancelled:A,onLeave:R,onLeaveCancelled:O,onBeforeAppear:P=I,onAppear:x=k,onAppearCancelled:D=A}=t,L=(e,t,n)=>{E(e,t?h:c),E(e,t?u:a),n&&n()},M=(e,t)=>{e._isLeaving=!1,E(e,d),E(e,p),E(e,f),t&&t()},F=e=>(t,n)=>{const r=e?x:k,s=()=>L(t,e,n);_(r,[t,s]),C((()=>{E(t,e?l:o),T(t,e?h:c),v(r)||S(t,i,y,s)}))};return(0,r.X$)(t,{onBeforeEnter(e){_(I,[e]),T(e,o),T(e,a)},onBeforeAppear(e){_(P,[e]),T(e,l),T(e,u)},onEnter:F(!1),onAppear:F(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>M(e,t);T(e,d),T(e,f),N(),C((()=>{e._isLeaving&&(E(e,d),T(e,p),v(R)||S(e,i,b,n))})),_(R,[e,n])},onEnterCancelled(e){L(e,!1),_(A,[e])},onAppearCancelled(e){L(e,!0),_(D,[e])},onLeaveCancelled(e){M(e),_(O,[e])}})}function w(e){if(null==e)return null;if((0,r.Gv)(e))return[b(e.enter),b(e.leave)];{const t=b(e);return[t,t]}}function b(e){const t=(0,r.Ro)(e);return t}function T(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e[f]||(e[f]=new Set)).add(t)}function E(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const n=e[f];n&&(n.delete(t),n.size||(e[f]=void 0))}function C(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let I=0;function S(e,t,n,i){const r=e._endId=++I,s=()=>{r===e._endId&&i()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=k(e,t);if(!o)return i();const l=o+"end";let u=0;const h=()=>{e.removeEventListener(l,d),s()},d=t=>{t.target===e&&++u>=c&&h()};setTimeout((()=>{u<c&&h()}),a+1),e.addEventListener(l,d)}function k(e,t){const n=window.getComputedStyle(e),i=e=>(n[e]||"").split(", "),r=i(`${h}Delay`),s=i(`${h}Duration`),o=A(r,s),a=i(`${d}Delay`),c=i(`${d}Duration`),l=A(a,c);let u=null,f=0,p=0;t===h?o>0&&(u=h,f=o,p=s.length):t===d?l>0&&(u=d,f=l,p=c.length):(f=Math.max(o,l),u=f>0?o>l?h:d:null,p=u?u===h?s.length:c.length:0);const g=u===h&&/\b(transform|all)(,|$)/.test(i(`${h}Property`).toString());return{type:u,timeout:f,propCount:p,hasTransform:g}}function A(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>R(t)+R(e[n]))))}function R(e){return"auto"===e?0:1e3*Number(e.slice(0,-1).replace(",","."))}function N(){return document.body.offsetHeight}function O(e,t,n){const i=e[f];i&&(t=(t?[t,...i]:[...i]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const P=Symbol("_vod"),x=Symbol("_vsh");const D=Symbol("");const L=/(^|;)\s*display\s*:/;function M(e,t,n){const i=e.style,s=(0,r.Kg)(n);let o=!1;if(n&&!s){if(t)if((0,r.Kg)(t))for(const e of t.split(";")){const t=e.slice(0,e.indexOf(":")).trim();null==n[t]&&U(i,t,"")}else for(const e in t)null==n[e]&&U(i,e,"");for(const e in n)"display"===e&&(o=!0),U(i,e,n[e])}else if(s){if(t!==n){const e=i[D];e&&(n+=";"+e),i.cssText=n,o=L.test(n)}}else t&&e.removeAttribute("style");P in e&&(e[P]=o?i.display:"",e[x]&&(i.display="none"))}const F=/\s*!important$/;function U(e,t,n){if((0,r.cy)(n))n.forEach((n=>U(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=V(e,t);F.test(n)?e.setProperty((0,r.Tg)(i),n.replace(F,""),"important"):e[i]=n}}const $=["Webkit","Moz","ms"],j={};function V(e,t){const n=j[t];if(n)return n;let i=(0,r.PT)(t);if("filter"!==i&&i in e)return j[t]=i;i=(0,r.ZH)(i);for(let r=0;r<$.length;r++){const n=$[r]+i;if(n in e)return j[t]=n}return t}const B="http://www.w3.org/1999/xlink";function q(e,t,n,i,s){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(B,t.slice(6,t.length)):e.setAttributeNS(B,t,n);else{const i=(0,r.J$)(t);null==n||i&&!(0,r.Y2)(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function H(e,t,n,i,s,o,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,s,o),void(e[t]=null==n?"":n);const c=e.tagName;if("value"===t&&"PROGRESS"!==c&&!c.includes("-")){const i="OPTION"===c?e.getAttribute("value")||"":e.value,r=null==n?"":n;return i===r&&"_value"in e||(e.value=r),null==n&&e.removeAttribute(t),void(e._value=n)}let l=!1;if(""===n||null==n){const i=typeof e[t];"boolean"===i?n=(0,r.Y2)(n):null==n&&"string"===i?(n="",l=!0):"number"===i&&(n=0,l=!0)}try{e[t]=n}catch(u){0}l&&e.removeAttribute(t)}function z(e,t,n,i){e.addEventListener(t,n,i)}function W(e,t,n,i){e.removeEventListener(t,n,i)}const K=Symbol("_vei");function G(e,t,n,i,r=null){const s=e[K]||(e[K]={}),o=s[t];if(i&&o)o.value=i;else{const[n,a]=X(t);if(i){const o=s[t]=ee(i,r);z(e,n,o,a)}else o&&(W(e,n,o,a),s[t]=void 0)}}const Q=/(?:Once|Passive|Capture)$/;function X(e){let t;if(Q.test(e)){let n;t={};while(n=e.match(Q))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,r.Tg)(e.slice(2));return[n,t]}let Y=0;const J=Promise.resolve(),Z=()=>Y||(J.then((()=>Y=0)),Y=Date.now());function ee(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,i.qL)(te(e,n.value),t,5,[e])};return n.value=e,n.attached=Z(),n}function te(e,t){if((0,r.cy)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const ne=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,ie=(e,t,n,i,s,o,a,c,l)=>{const u="svg"===s;"class"===t?O(e,i,u):"style"===t?M(e,n,i):(0,r.Mp)(t)?(0,r.CP)(t)||G(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):re(e,t,i,u))?H(e,t,i,o,a,c,l):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),q(e,t,i,u))};function re(e,t,n,i){if(i)return"innerHTML"===t||"textContent"===t||!!(t in e&&ne(t)&&(0,r.Tn)(n));if("spellcheck"===t||"draggable"===t||"translate"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}return(!ne(t)||!(0,r.Kg)(n))&&t in e}
/*! #__NO_SIDE_EFFECTS__ */
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;const se=new WeakMap,oe=new WeakMap,ae=Symbol("_moveCb"),ce=Symbol("_enterCb"),le={name:"TransitionGroup",props:(0,r.X$)({},m,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,i.nI)(),r=(0,i.Gy)();let o,a;return(0,i.$u)((()=>{if(!o.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!pe(o[0].el,n.vnode.el,t))return;o.forEach(he),o.forEach(de);const i=o.filter(fe);N(),i.forEach((e=>{const n=e.el,i=n.style;T(n,t),i.transform=i.webkitTransform=i.transitionDuration="";const r=n[ae]=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",r),n[ae]=null,E(n,t))};n.addEventListener("transitionend",r)}))})),()=>{const c=(0,s.ux)(e),l=y(c);let u=c.tag||i.FK;if(o=[],a)for(let e=0;e<a.length;e++){const t=a[e];t.el&&t.el instanceof Element&&(o.push(t),(0,i.MZ)(t,(0,i.OW)(t,l,r,n)),se.set(t,t.el.getBoundingClientRect()))}a=t.default?(0,i.Df)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,i.MZ)(t,(0,i.OW)(t,l,r,n))}return(0,i.bF)(u,null,a)}}};le.props;const ue=le;function he(e){const t=e.el;t[ae]&&t[ae](),t[ce]&&t[ce]()}function de(e){oe.set(e,e.el.getBoundingClientRect())}function fe(e){const t=se.get(e),n=oe.get(e),i=t.left-n.left,r=t.top-n.top;if(i||r){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${i}px,${r}px)`,t.transitionDuration="0s",e}}function pe(e,t,n){const i=e.cloneNode(),r=e[f];r&&r.forEach((e=>{e.split(/\s+/).forEach((e=>e&&i.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&i.classList.add(e))),i.style.display="none";const s=1===t.nodeType?t:t.parentNode;s.appendChild(i);const{hasTransform:o}=k(i);return s.removeChild(i),o}const ge=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,r.cy)(t)?e=>(0,r.DY)(t,e):t};function me(e){e.target.composing=!0}function _e(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ve=Symbol("_assign"),ye={created(e,{modifiers:{lazy:t,trim:n,number:i}},s){e[ve]=ge(s);const o=i||s.props&&"number"===s.props.type;z(e,t?"change":"input",(t=>{if(t.target.composing)return;let i=e.value;n&&(i=i.trim()),o&&(i=(0,r.bB)(i)),e[ve](i)})),n&&z(e,"change",(()=>{e.value=e.value.trim()})),t||(z(e,"compositionstart",me),z(e,"compositionend",_e),z(e,"change",_e))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:s}},o){if(e[ve]=ge(o),e.composing)return;const a=!s&&"number"!==e.type||/^0\d/.test(e.value)?e.value:(0,r.bB)(e.value),c=null==t?"":t;if(a!==c){if(document.activeElement===e&&"range"!==e.type){if(n)return;if(i&&e.value.trim()===c)return}e.value=c}}};const we=["ctrl","shift","alt","meta"],be={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>we.some((n=>e[`${n}Key`]&&!t.includes(n)))},Te=(e,t)=>{const n=e._withMods||(e._withMods={}),i=t.join(".");return n[i]||(n[i]=(n,...i)=>{for(let e=0;e<t.length;e++){const i=be[t[e]];if(i&&i(n,t))return}return e(n,...i)})},Ee=(0,r.X$)({patchProp:ie},u);let Ce;function Ie(){return Ce||(Ce=(0,i.K9)(Ee))}const Se=(...e)=>{Ie().render(...e)},ke=(...e)=>{const t=Ie().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=Re(e);if(!i)return;const s=t._component;(0,r.Tn)(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,Ae(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function Ae(e){return e instanceof SVGElement?"svg":"function"===typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function Re(e){if((0,r.Kg)(e)){const t=document.querySelector(e);return t}return e}},33:function(e,t,n){
/**
* @vue/shared v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function i(e,t){const n=new Set(e.split(","));return t?e=>n.has(e.toLowerCase()):e=>n.has(e)}n.d(t,{$3:function(){return f},$H:function(){return F},BH:function(){return z},BX:function(){return ne},Bm:function(){return b},C4:function(){return Y},CE:function(){return g},CP:function(){return l},DY:function(){return U},Gv:function(){return T},J$:function(){return Z},Kg:function(){return w},MZ:function(){return r},Mp:function(){return c},NO:function(){return a},Oj:function(){return s},PT:function(){return P},Qd:function(){return k},Ro:function(){return V},SU:function(){return R},TF:function(){return h},Tg:function(){return D},Tn:function(){return y},Tr:function(){return W},We:function(){return q},X$:function(){return u},Y2:function(){return ee},ZH:function(){return L},Zf:function(){return S},bB:function(){return j},cy:function(){return p},gd:function(){return v},pD:function(){return i},rU:function(){return M},tE:function(){return o},u3:function(){return ie},vM:function(){return m},v_:function(){return re},yI:function(){return A},yL:function(){return E},yQ:function(){return $}});const r={},s=[],o=()=>{},a=()=>!1,c=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),l=e=>e.startsWith("onUpdate:"),u=Object.assign,h=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},d=Object.prototype.hasOwnProperty,f=(e,t)=>d.call(e,t),p=Array.isArray,g=e=>"[object Map]"===I(e),m=e=>"[object Set]"===I(e),_=e=>"[object Date]"===I(e),v=e=>"[object RegExp]"===I(e),y=e=>"function"===typeof e,w=e=>"string"===typeof e,b=e=>"symbol"===typeof e,T=e=>null!==e&&"object"===typeof e,E=e=>(T(e)||y(e))&&y(e.then)&&y(e.catch),C=Object.prototype.toString,I=e=>C.call(e),S=e=>I(e).slice(8,-1),k=e=>"[object Object]"===I(e),A=e=>w(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,R=i(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),N=e=>{const t=Object.create(null);return n=>{const i=t[n];return i||(t[n]=e(n))}},O=/-(\w)/g,P=N((e=>e.replace(O,((e,t)=>t?t.toUpperCase():"")))),x=/\B([A-Z])/g,D=N((e=>e.replace(x,"-$1").toLowerCase())),L=N((e=>e.charAt(0).toUpperCase()+e.slice(1))),M=N((e=>{const t=e?`on${L(e)}`:"";return t})),F=(e,t)=>!Object.is(e,t),U=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},$=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},j=e=>{const t=parseFloat(e);return isNaN(t)?e:t},V=e=>{const t=w(e)?Number(e):NaN;return isNaN(t)?e:t};let B;const q=()=>B||(B="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const H="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",z=i(H);function W(e){if(p(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],r=w(i)?X(i):W(i);if(r)for(const e in r)t[e]=r[e]}return t}if(w(e)||T(e))return e}const K=/;(?![^(]*\))/g,G=/:([^]+)/,Q=/\/\*[^]*?\*\//g;function X(e){const t={};return e.replace(Q,"").split(K).forEach((e=>{if(e){const n=e.split(G);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function Y(e){let t="";if(w(e))t=e;else if(p(e))for(let n=0;n<e.length;n++){const i=Y(e[n]);i&&(t+=i+" ")}else if(T(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const J="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Z=i(J);function ee(e){return!!e||""===e}function te(e,t){if(e.length!==t.length)return!1;let n=!0;for(let i=0;n&&i<e.length;i++)n=ne(e[i],t[i]);return n}function ne(e,t){if(e===t)return!0;let n=_(e),i=_(t);if(n||i)return!(!n||!i)&&e.getTime()===t.getTime();if(n=b(e),i=b(t),n||i)return e===t;if(n=p(e),i=p(t),n||i)return!(!n||!i)&&te(e,t);if(n=T(e),i=T(t),n||i){if(!n||!i)return!1;const r=Object.keys(e).length,s=Object.keys(t).length;if(r!==s)return!1;for(const n in e){const i=e.hasOwnProperty(n),r=t.hasOwnProperty(n);if(i&&!r||!i&&r||!ne(e[n],t[n]))return!1}}return String(e)===String(t)}function ie(e,t){return e.findIndex((e=>ne(e,t)))}const re=e=>w(e)?e:null==e?"":p(e)||T(e)&&(e.toString===C||!y(e.toString))?JSON.stringify(e,se,2):String(e),se=(e,t)=>t&&t.__v_isRef?se(e,t.value):g(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n],i)=>(e[oe(t,i)+" =>"]=n,e)),{})}:m(t)?{[`Set(${t.size})`]:[...t.values()].map((e=>oe(e)))}:b(t)?oe(t):!T(t)||p(t)||k(t)?t:String(t),oe=(e,t="")=>{var n;return b(e)?`Symbol(${null!=(n=e.description)?n:t})`:e}},454:function(e,t,n){var i={};n.r(i),n.d(i,{afterMain:function(){return E},afterRead:function(){return w},afterWrite:function(){return S},applyStyles:function(){return L},arrow:function(){return ae},auto:function(){return c},basePlacements:function(){return l},beforeMain:function(){return b},beforeRead:function(){return v},beforeWrite:function(){return C},bottom:function(){return s},clippingParents:function(){return d},computeStyles:function(){return fe},createPopper:function(){return ut},createPopperBase:function(){return ct},createPopperLite:function(){return dt},detectOverflow:function(){return De},end:function(){return h},eventListeners:function(){return me},flip:function(){return Ue},hide:function(){return Be},left:function(){return a},main:function(){return T},modifierPhases:function(){return k},offset:function(){return ze},placements:function(){return _},popper:function(){return p},popperGenerator:function(){return at},popperOffsets:function(){return Ke},preventOverflow:function(){return Xe},read:function(){return y},reference:function(){return g},right:function(){return o},start:function(){return u},top:function(){return r},variationPlacements:function(){return m},viewport:function(){return f},write:function(){return I}});var r="top",s="bottom",o="right",a="left",c="auto",l=[r,s,o,a],u="start",h="end",d="clippingParents",f="viewport",p="popper",g="reference",m=l.reduce((function(e,t){return e.concat([t+"-"+u,t+"-"+h])}),[]),_=[].concat(l,[c]).reduce((function(e,t){return e.concat([t,t+"-"+u,t+"-"+h])}),[]),v="beforeRead",y="read",w="afterRead",b="beforeMain",T="main",E="afterMain",C="beforeWrite",I="write",S="afterWrite",k=[v,y,w,b,T,E,C,I,S];function A(e){return e?(e.nodeName||"").toLowerCase():null}function R(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function N(e){var t=R(e).Element;return e instanceof t||e instanceof Element}function O(e){var t=R(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function P(e){if("undefined"===typeof ShadowRoot)return!1;var t=R(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function x(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},i=t.attributes[e]||{},r=t.elements[e];O(r)&&A(r)&&(Object.assign(r.style,n),Object.keys(i).forEach((function(e){var t=i[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))}function D(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var i=t.elements[e],r=t.attributes[e]||{},s=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]),o=s.reduce((function(e,t){return e[t]="",e}),{});O(i)&&A(i)&&(Object.assign(i.style,o),Object.keys(r).forEach((function(e){i.removeAttribute(e)})))}))}}var L={name:"applyStyles",enabled:!0,phase:"write",fn:x,effect:D,requires:["computeStyles"]};function M(e){return e.split("-")[0]}var F=Math.max,U=Math.min,$=Math.round;function j(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function V(){return!/^((?!chrome|android).)*safari/i.test(j())}function B(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var i=e.getBoundingClientRect(),r=1,s=1;t&&O(e)&&(r=e.offsetWidth>0&&$(i.width)/e.offsetWidth||1,s=e.offsetHeight>0&&$(i.height)/e.offsetHeight||1);var o=N(e)?R(e):window,a=o.visualViewport,c=!V()&&n,l=(i.left+(c&&a?a.offsetLeft:0))/r,u=(i.top+(c&&a?a.offsetTop:0))/s,h=i.width/r,d=i.height/s;return{width:h,height:d,top:u,right:l+h,bottom:u+d,left:l,x:l,y:u}}function q(e){var t=B(e),n=e.offsetWidth,i=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-i)<=1&&(i=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:i}}function H(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&P(n)){var i=t;do{if(i&&e.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function z(e){return R(e).getComputedStyle(e)}function W(e){return["table","td","th"].indexOf(A(e))>=0}function K(e){return((N(e)?e.ownerDocument:e.document)||window.document).documentElement}function G(e){return"html"===A(e)?e:e.assignedSlot||e.parentNode||(P(e)?e.host:null)||K(e)}function Q(e){return O(e)&&"fixed"!==z(e).position?e.offsetParent:null}function X(e){var t=/firefox/i.test(j()),n=/Trident/i.test(j());if(n&&O(e)){var i=z(e);if("fixed"===i.position)return null}var r=G(e);P(r)&&(r=r.host);while(O(r)&&["html","body"].indexOf(A(r))<0){var s=z(r);if("none"!==s.transform||"none"!==s.perspective||"paint"===s.contain||-1!==["transform","perspective"].indexOf(s.willChange)||t&&"filter"===s.willChange||t&&s.filter&&"none"!==s.filter)return r;r=r.parentNode}return null}function Y(e){var t=R(e),n=Q(e);while(n&&W(n)&&"static"===z(n).position)n=Q(n);return n&&("html"===A(n)||"body"===A(n)&&"static"===z(n).position)?t:n||X(e)||t}function J(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Z(e,t,n){return F(e,U(t,n))}function ee(e,t,n){var i=Z(e,t,n);return i>n?n:i}function te(){return{top:0,right:0,bottom:0,left:0}}function ne(e){return Object.assign({},te(),e)}function ie(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var re=function(e,t){return e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e,ne("number"!==typeof e?e:ie(e,l))};function se(e){var t,n=e.state,i=e.name,c=e.options,l=n.elements.arrow,u=n.modifiersData.popperOffsets,h=M(n.placement),d=J(h),f=[a,o].indexOf(h)>=0,p=f?"height":"width";if(l&&u){var g=re(c.padding,n),m=q(l),_="y"===d?r:a,v="y"===d?s:o,y=n.rects.reference[p]+n.rects.reference[d]-u[d]-n.rects.popper[p],w=u[d]-n.rects.reference[d],b=Y(l),T=b?"y"===d?b.clientHeight||0:b.clientWidth||0:0,E=y/2-w/2,C=g[_],I=T-m[p]-g[v],S=T/2-m[p]/2+E,k=Z(C,S,I),A=d;n.modifiersData[i]=(t={},t[A]=k,t.centerOffset=k-S,t)}}function oe(e){var t=e.state,n=e.options,i=n.element,r=void 0===i?"[data-popper-arrow]":i;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r),r))&&H(t.elements.popper,r)&&(t.elements.arrow=r)}var ae={name:"arrow",enabled:!0,phase:"main",fn:se,effect:oe,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ce(e){return e.split("-")[1]}var le={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ue(e,t){var n=e.x,i=e.y,r=t.devicePixelRatio||1;return{x:$(n*r)/r||0,y:$(i*r)/r||0}}function he(e){var t,n=e.popper,i=e.popperRect,c=e.placement,l=e.variation,u=e.offsets,d=e.position,f=e.gpuAcceleration,p=e.adaptive,g=e.roundOffsets,m=e.isFixed,_=u.x,v=void 0===_?0:_,y=u.y,w=void 0===y?0:y,b="function"===typeof g?g({x:v,y:w}):{x:v,y:w};v=b.x,w=b.y;var T=u.hasOwnProperty("x"),E=u.hasOwnProperty("y"),C=a,I=r,S=window;if(p){var k=Y(n),A="clientHeight",N="clientWidth";if(k===R(n)&&(k=K(n),"static"!==z(k).position&&"absolute"===d&&(A="scrollHeight",N="scrollWidth")),c===r||(c===a||c===o)&&l===h){I=s;var O=m&&k===S&&S.visualViewport?S.visualViewport.height:k[A];w-=O-i.height,w*=f?1:-1}if(c===a||(c===r||c===s)&&l===h){C=o;var P=m&&k===S&&S.visualViewport?S.visualViewport.width:k[N];v-=P-i.width,v*=f?1:-1}}var x,D=Object.assign({position:d},p&&le),L=!0===g?ue({x:v,y:w},R(n)):{x:v,y:w};return v=L.x,w=L.y,f?Object.assign({},D,(x={},x[I]=E?"0":"",x[C]=T?"0":"",x.transform=(S.devicePixelRatio||1)<=1?"translate("+v+"px, "+w+"px)":"translate3d("+v+"px, "+w+"px, 0)",x)):Object.assign({},D,(t={},t[I]=E?w+"px":"",t[C]=T?v+"px":"",t.transform="",t))}function de(e){var t=e.state,n=e.options,i=n.gpuAcceleration,r=void 0===i||i,s=n.adaptive,o=void 0===s||s,a=n.roundOffsets,c=void 0===a||a,l={placement:M(t.placement),variation:ce(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,he(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,he(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var fe={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:de,data:{}},pe={passive:!0};function ge(e){var t=e.state,n=e.instance,i=e.options,r=i.scroll,s=void 0===r||r,o=i.resize,a=void 0===o||o,c=R(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&l.forEach((function(e){e.addEventListener("scroll",n.update,pe)})),a&&c.addEventListener("resize",n.update,pe),function(){s&&l.forEach((function(e){e.removeEventListener("scroll",n.update,pe)})),a&&c.removeEventListener("resize",n.update,pe)}}var me={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:ge,data:{}},_e={left:"right",right:"left",bottom:"top",top:"bottom"};function ve(e){return e.replace(/left|right|bottom|top/g,(function(e){return _e[e]}))}var ye={start:"end",end:"start"};function we(e){return e.replace(/start|end/g,(function(e){return ye[e]}))}function be(e){var t=R(e),n=t.pageXOffset,i=t.pageYOffset;return{scrollLeft:n,scrollTop:i}}function Te(e){return B(K(e)).left+be(e).scrollLeft}function Ee(e,t){var n=R(e),i=K(e),r=n.visualViewport,s=i.clientWidth,o=i.clientHeight,a=0,c=0;if(r){s=r.width,o=r.height;var l=V();(l||!l&&"fixed"===t)&&(a=r.offsetLeft,c=r.offsetTop)}return{width:s,height:o,x:a+Te(e),y:c}}function Ce(e){var t,n=K(e),i=be(e),r=null==(t=e.ownerDocument)?void 0:t.body,s=F(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),o=F(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),a=-i.scrollLeft+Te(e),c=-i.scrollTop;return"rtl"===z(r||n).direction&&(a+=F(n.clientWidth,r?r.clientWidth:0)-s),{width:s,height:o,x:a,y:c}}function Ie(e){var t=z(e),n=t.overflow,i=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+i)}function Se(e){return["html","body","#document"].indexOf(A(e))>=0?e.ownerDocument.body:O(e)&&Ie(e)?e:Se(G(e))}function ke(e,t){var n;void 0===t&&(t=[]);var i=Se(e),r=i===(null==(n=e.ownerDocument)?void 0:n.body),s=R(i),o=r?[s].concat(s.visualViewport||[],Ie(i)?i:[]):i,a=t.concat(o);return r?a:a.concat(ke(G(o)))}function Ae(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Re(e,t){var n=B(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function Ne(e,t,n){return t===f?Ae(Ee(e,n)):N(t)?Re(t,n):Ae(Ce(K(e)))}function Oe(e){var t=ke(G(e)),n=["absolute","fixed"].indexOf(z(e).position)>=0,i=n&&O(e)?Y(e):e;return N(i)?t.filter((function(e){return N(e)&&H(e,i)&&"body"!==A(e)})):[]}function Pe(e,t,n,i){var r="clippingParents"===t?Oe(e):[].concat(t),s=[].concat(r,[n]),o=s[0],a=s.reduce((function(t,n){var r=Ne(e,n,i);return t.top=F(r.top,t.top),t.right=U(r.right,t.right),t.bottom=U(r.bottom,t.bottom),t.left=F(r.left,t.left),t}),Ne(e,o,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function xe(e){var t,n=e.reference,i=e.element,c=e.placement,l=c?M(c):null,d=c?ce(c):null,f=n.x+n.width/2-i.width/2,p=n.y+n.height/2-i.height/2;switch(l){case r:t={x:f,y:n.y-i.height};break;case s:t={x:f,y:n.y+n.height};break;case o:t={x:n.x+n.width,y:p};break;case a:t={x:n.x-i.width,y:p};break;default:t={x:n.x,y:n.y}}var g=l?J(l):null;if(null!=g){var m="y"===g?"height":"width";switch(d){case u:t[g]=t[g]-(n[m]/2-i[m]/2);break;case h:t[g]=t[g]+(n[m]/2-i[m]/2);break;default:}}return t}function De(e,t){void 0===t&&(t={});var n=t,i=n.placement,a=void 0===i?e.placement:i,c=n.strategy,u=void 0===c?e.strategy:c,h=n.boundary,m=void 0===h?d:h,_=n.rootBoundary,v=void 0===_?f:_,y=n.elementContext,w=void 0===y?p:y,b=n.altBoundary,T=void 0!==b&&b,E=n.padding,C=void 0===E?0:E,I=ne("number"!==typeof C?C:ie(C,l)),S=w===p?g:p,k=e.rects.popper,A=e.elements[T?S:w],R=Pe(N(A)?A:A.contextElement||K(e.elements.popper),m,v,u),O=B(e.elements.reference),P=xe({reference:O,element:k,strategy:"absolute",placement:a}),x=Ae(Object.assign({},k,P)),D=w===p?x:O,L={top:R.top-D.top+I.top,bottom:D.bottom-R.bottom+I.bottom,left:R.left-D.left+I.left,right:D.right-R.right+I.right},M=e.modifiersData.offset;if(w===p&&M){var F=M[a];Object.keys(L).forEach((function(e){var t=[o,s].indexOf(e)>=0?1:-1,n=[r,s].indexOf(e)>=0?"y":"x";L[e]+=F[n]*t}))}return L}function Le(e,t){void 0===t&&(t={});var n=t,i=n.placement,r=n.boundary,s=n.rootBoundary,o=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,u=void 0===c?_:c,h=ce(i),d=h?a?m:m.filter((function(e){return ce(e)===h})):l,f=d.filter((function(e){return u.indexOf(e)>=0}));0===f.length&&(f=d);var p=f.reduce((function(t,n){return t[n]=De(e,{placement:n,boundary:r,rootBoundary:s,padding:o})[M(n)],t}),{});return Object.keys(p).sort((function(e,t){return p[e]-p[t]}))}function Me(e){if(M(e)===c)return[];var t=ve(e);return[we(e),t,we(t)]}function Fe(e){var t=e.state,n=e.options,i=e.name;if(!t.modifiersData[i]._skip){for(var l=n.mainAxis,h=void 0===l||l,d=n.altAxis,f=void 0===d||d,p=n.fallbackPlacements,g=n.padding,m=n.boundary,_=n.rootBoundary,v=n.altBoundary,y=n.flipVariations,w=void 0===y||y,b=n.allowedAutoPlacements,T=t.options.placement,E=M(T),C=E===T,I=p||(C||!w?[ve(T)]:Me(T)),S=[T].concat(I).reduce((function(e,n){return e.concat(M(n)===c?Le(t,{placement:n,boundary:m,rootBoundary:_,padding:g,flipVariations:w,allowedAutoPlacements:b}):n)}),[]),k=t.rects.reference,A=t.rects.popper,R=new Map,N=!0,O=S[0],P=0;P<S.length;P++){var x=S[P],D=M(x),L=ce(x)===u,F=[r,s].indexOf(D)>=0,U=F?"width":"height",$=De(t,{placement:x,boundary:m,rootBoundary:_,altBoundary:v,padding:g}),j=F?L?o:a:L?s:r;k[U]>A[U]&&(j=ve(j));var V=ve(j),B=[];if(h&&B.push($[D]<=0),f&&B.push($[j]<=0,$[V]<=0),B.every((function(e){return e}))){O=x,N=!1;break}R.set(x,B)}if(N)for(var q=w?3:1,H=function(e){var t=S.find((function(t){var n=R.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return O=t,"break"},z=q;z>0;z--){var W=H(z);if("break"===W)break}t.placement!==O&&(t.modifiersData[i]._skip=!0,t.placement=O,t.reset=!0)}}var Ue={name:"flip",enabled:!0,phase:"main",fn:Fe,requiresIfExists:["offset"],data:{_skip:!1}};function $e(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function je(e){return[r,o,s,a].some((function(t){return e[t]>=0}))}function Ve(e){var t=e.state,n=e.name,i=t.rects.reference,r=t.rects.popper,s=t.modifiersData.preventOverflow,o=De(t,{elementContext:"reference"}),a=De(t,{altBoundary:!0}),c=$e(o,i),l=$e(a,r,s),u=je(c),h=je(l);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}var Be={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Ve};function qe(e,t,n){var i=M(e),s=[a,r].indexOf(i)>=0?-1:1,c="function"===typeof n?n(Object.assign({},t,{placement:e})):n,l=c[0],u=c[1];return l=l||0,u=(u||0)*s,[a,o].indexOf(i)>=0?{x:u,y:l}:{x:l,y:u}}function He(e){var t=e.state,n=e.options,i=e.name,r=n.offset,s=void 0===r?[0,0]:r,o=_.reduce((function(e,n){return e[n]=qe(n,t.rects,s),e}),{}),a=o[t.placement],c=a.x,l=a.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[i]=o}var ze={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:He};function We(e){var t=e.state,n=e.name;t.modifiersData[n]=xe({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var Ke={name:"popperOffsets",enabled:!0,phase:"read",fn:We,data:{}};function Ge(e){return"x"===e?"y":"x"}function Qe(e){var t=e.state,n=e.options,i=e.name,c=n.mainAxis,l=void 0===c||c,h=n.altAxis,d=void 0!==h&&h,f=n.boundary,p=n.rootBoundary,g=n.altBoundary,m=n.padding,_=n.tether,v=void 0===_||_,y=n.tetherOffset,w=void 0===y?0:y,b=De(t,{boundary:f,rootBoundary:p,padding:m,altBoundary:g}),T=M(t.placement),E=ce(t.placement),C=!E,I=J(T),S=Ge(I),k=t.modifiersData.popperOffsets,A=t.rects.reference,R=t.rects.popper,N="function"===typeof w?w(Object.assign({},t.rects,{placement:t.placement})):w,O="number"===typeof N?{mainAxis:N,altAxis:N}:Object.assign({mainAxis:0,altAxis:0},N),P=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,x={x:0,y:0};if(k){if(l){var D,L="y"===I?r:a,$="y"===I?s:o,j="y"===I?"height":"width",V=k[I],B=V+b[L],H=V-b[$],z=v?-R[j]/2:0,W=E===u?A[j]:R[j],K=E===u?-R[j]:-A[j],G=t.elements.arrow,Q=v&&G?q(G):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:te(),ne=X[L],ie=X[$],re=Z(0,A[j],Q[j]),se=C?A[j]/2-z-re-ne-O.mainAxis:W-re-ne-O.mainAxis,oe=C?-A[j]/2+z+re+ie+O.mainAxis:K+re+ie+O.mainAxis,ae=t.elements.arrow&&Y(t.elements.arrow),le=ae?"y"===I?ae.clientTop||0:ae.clientLeft||0:0,ue=null!=(D=null==P?void 0:P[I])?D:0,he=V+se-ue-le,de=V+oe-ue,fe=Z(v?U(B,he):B,V,v?F(H,de):H);k[I]=fe,x[I]=fe-V}if(d){var pe,ge="x"===I?r:a,me="x"===I?s:o,_e=k[S],ve="y"===S?"height":"width",ye=_e+b[ge],we=_e-b[me],be=-1!==[r,a].indexOf(T),Te=null!=(pe=null==P?void 0:P[S])?pe:0,Ee=be?ye:_e-A[ve]-R[ve]-Te+O.altAxis,Ce=be?_e+A[ve]+R[ve]-Te-O.altAxis:we,Ie=v&&be?ee(Ee,_e,Ce):Z(v?Ee:ye,_e,v?Ce:we);k[S]=Ie,x[S]=Ie-_e}t.modifiersData[i]=x}}var Xe={name:"preventOverflow",enabled:!0,phase:"main",fn:Qe,requiresIfExists:["offset"]};function Ye(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Je(e){return e!==R(e)&&O(e)?Ye(e):be(e)}function Ze(e){var t=e.getBoundingClientRect(),n=$(t.width)/e.offsetWidth||1,i=$(t.height)/e.offsetHeight||1;return 1!==n||1!==i}function et(e,t,n){void 0===n&&(n=!1);var i=O(t),r=O(t)&&Ze(t),s=K(t),o=B(e,r,n),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(i||!i&&!n)&&(("body"!==A(t)||Ie(s))&&(a=Je(t)),O(t)?(c=B(t,!0),c.x+=t.clientLeft,c.y+=t.clientTop):s&&(c.x=Te(s))),{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function tt(e){var t=new Map,n=new Set,i=[];function r(e){n.add(e.name);var s=[].concat(e.requires||[],e.requiresIfExists||[]);s.forEach((function(e){if(!n.has(e)){var i=t.get(e);i&&r(i)}})),i.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||r(e)})),i}function nt(e){var t=tt(e);return k.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}function it(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}function rt(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}var st={placement:"bottom",modifiers:[],strategy:"absolute"};function ot(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function at(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,i=void 0===n?[]:n,r=t.defaultOptions,s=void 0===r?st:r;return function(e,t,n){void 0===n&&(n=s);var r={placement:"bottom",orderedModifiers:[],options:Object.assign({},st,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},o=[],a=!1,c={state:r,setOptions:function(n){var o="function"===typeof n?n(r.options):n;u(),r.options=Object.assign({},s,r.options,o),r.scrollParents={reference:N(e)?ke(e):e.contextElement?ke(e.contextElement):[],popper:ke(t)};var a=nt(rt([].concat(i,r.options.modifiers)));return r.orderedModifiers=a.filter((function(e){return e.enabled})),l(),c.update()},forceUpdate:function(){if(!a){var e=r.elements,t=e.reference,n=e.popper;if(ot(t,n)){r.rects={reference:et(t,Y(n),"fixed"===r.options.strategy),popper:q(n)},r.reset=!1,r.placement=r.options.placement,r.orderedModifiers.forEach((function(e){return r.modifiersData[e.name]=Object.assign({},e.data)}));for(var i=0;i<r.orderedModifiers.length;i++)if(!0!==r.reset){var s=r.orderedModifiers[i],o=s.fn,l=s.options,u=void 0===l?{}:l,h=s.name;"function"===typeof o&&(r=o({state:r,options:u,name:h,instance:c})||r)}else r.reset=!1,i=-1}}},update:it((function(){return new Promise((function(e){c.forceUpdate(),e(r)}))})),destroy:function(){u(),a=!0}};if(!ot(e,t))return c;function l(){r.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,i=void 0===n?{}:n,s=e.effect;if("function"===typeof s){var a=s({state:r,name:t,instance:c,options:i}),l=function(){};o.push(a||l)}}))}function u(){o.forEach((function(e){return e()})),o=[]}return c.setOptions(n).then((function(e){!a&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}var ct=at(),lt=[me,Ke,fe,L,ze,Ue,Xe,ae,Be],ut=at({defaultModifiers:lt}),ht=[me,Ke,fe,L],dt=at({defaultModifiers:ht});
/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const ft=new Map,pt={set(e,t,n){ft.has(e)||ft.set(e,new Map);const i=ft.get(e);i.has(t)||0===i.size?i.set(t,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)},get(e,t){return ft.has(e)&&ft.get(e).get(t)||null},remove(e,t){if(!ft.has(e))return;const n=ft.get(e);n.delete(t),0===n.size&&ft.delete(e)}},gt=1e6,mt=1e3,_t="transitionend",vt=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,((e,t)=>`#${CSS.escape(t)}`))),e),yt=e=>null===e||void 0===e?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),wt=e=>{do{e+=Math.floor(Math.random()*gt)}while(document.getElementById(e));return e},bt=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const i=Number.parseFloat(t),r=Number.parseFloat(n);return i||r?(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*mt):0},Tt=e=>{e.dispatchEvent(new Event(_t))},Et=e=>!(!e||"object"!==typeof e)&&("undefined"!==typeof e.jquery&&(e=e[0]),"undefined"!==typeof e.nodeType),Ct=e=>Et(e)?e.jquery?e[0]:e:"string"===typeof e&&e.length>0?document.querySelector(vt(e)):null,It=e=>{if(!Et(e)||0===e.getClientRects().length)return!1;const t="visible"===getComputedStyle(e).getPropertyValue("visibility"),n=e.closest("details:not([open])");if(!n)return t;if(n!==e){const t=e.closest("summary");if(t&&t.parentNode!==n)return!1;if(null===t)return!1}return t},St=e=>!e||e.nodeType!==Node.ELEMENT_NODE||(!!e.classList.contains("disabled")||("undefined"!==typeof e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled"))),kt=e=>{if(!document.documentElement.attachShadow)return null;if("function"===typeof e.getRootNode){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?kt(e.parentNode):null},At=()=>{},Rt=e=>{e.offsetHeight},Nt=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Ot=[],Pt=e=>{"loading"===document.readyState?(Ot.length||document.addEventListener("DOMContentLoaded",(()=>{for(const e of Ot)e()})),Ot.push(e)):e()},xt=()=>"rtl"===document.documentElement.dir,Dt=e=>{Pt((()=>{const t=Nt();if(t){const n=e.NAME,i=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=i,e.jQueryInterface)}}))},Lt=(e,t=[],n=e)=>"function"===typeof e?e(...t):n,Mt=(e,t,n=!0)=>{if(!n)return void Lt(e);const i=5,r=bt(t)+i;let s=!1;const o=({target:n})=>{n===t&&(s=!0,t.removeEventListener(_t,o),Lt(e))};t.addEventListener(_t,o),setTimeout((()=>{s||Tt(t)}),r)},Ft=(e,t,n,i)=>{const r=e.length;let s=e.indexOf(t);return-1===s?!n&&i?e[r-1]:e[0]:(s+=n?1:-1,i&&(s=(s+r)%r),e[Math.max(0,Math.min(s,r-1))])},Ut=/[^.]*(?=\..*)\.|.*/,$t=/\..*/,jt=/::\d+$/,Vt={};let Bt=1;const qt={mouseenter:"mouseover",mouseleave:"mouseout"},Ht=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function zt(e,t){return t&&`${t}::${Bt++}`||e.uidEvent||Bt++}function Wt(e){const t=zt(e);return e.uidEvent=t,Vt[t]=Vt[t]||{},Vt[t]}function Kt(e,t){return function n(i){return nn(i,{delegateTarget:e}),n.oneOff&&tn.off(e,i.type,t),t.apply(e,[i])}}function Gt(e,t,n){return function i(r){const s=e.querySelectorAll(t);for(let{target:o}=r;o&&o!==this;o=o.parentNode)for(const a of s)if(a===o)return nn(r,{delegateTarget:o}),i.oneOff&&tn.off(e,r.type,t,n),n.apply(o,[r])}}function Qt(e,t,n=null){return Object.values(e).find((e=>e.callable===t&&e.delegationSelector===n))}function Xt(e,t,n){const i="string"===typeof t,r=i?n:t||n;let s=en(e);return Ht.has(s)||(s=e),[i,r,s]}function Yt(e,t,n,i,r){if("string"!==typeof t||!e)return;let[s,o,a]=Xt(t,n,i);if(t in qt){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};o=e(o)}const c=Wt(e),l=c[a]||(c[a]={}),u=Qt(l,o,s?n:null);if(u)return void(u.oneOff=u.oneOff&&r);const h=zt(o,t.replace(Ut,"")),d=s?Gt(e,n,o):Kt(e,o);d.delegationSelector=s?n:null,d.callable=o,d.oneOff=r,d.uidEvent=h,l[h]=d,e.addEventListener(a,d,s)}function Jt(e,t,n,i,r){const s=Qt(t[n],i,r);s&&(e.removeEventListener(n,s,Boolean(r)),delete t[n][s.uidEvent])}function Zt(e,t,n,i){const r=t[n]||{};for(const[s,o]of Object.entries(r))s.includes(i)&&Jt(e,t,n,o.callable,o.delegationSelector)}function en(e){return e=e.replace($t,""),qt[e]||e}const tn={on(e,t,n,i){Yt(e,t,n,i,!1)},one(e,t,n,i){Yt(e,t,n,i,!0)},off(e,t,n,i){if("string"!==typeof t||!e)return;const[r,s,o]=Xt(t,n,i),a=o!==t,c=Wt(e),l=c[o]||{},u=t.startsWith(".");if("undefined"===typeof s){if(u)for(const n of Object.keys(c))Zt(e,c,n,t.slice(1));for(const[n,i]of Object.entries(l)){const r=n.replace(jt,"");a&&!t.includes(r)||Jt(e,c,o,i.callable,i.delegationSelector)}}else{if(!Object.keys(l).length)return;Jt(e,c,o,s,r?n:null)}},trigger(e,t,n){if("string"!==typeof t||!e)return null;const i=Nt(),r=en(t),s=t!==r;let o=null,a=!0,c=!0,l=!1;s&&i&&(o=i.Event(t,n),i(e).trigger(o),a=!o.isPropagationStopped(),c=!o.isImmediatePropagationStopped(),l=o.isDefaultPrevented());const u=nn(new Event(t,{bubbles:a,cancelable:!0}),n);return l&&u.preventDefault(),c&&e.dispatchEvent(u),u.defaultPrevented&&o&&o.preventDefault(),u}};function nn(e,t={}){for(const[i,r]of Object.entries(t))try{e[i]=r}catch(n){Object.defineProperty(e,i,{configurable:!0,get(){return r}})}return e}function rn(e){if("true"===e)return!0;if("false"===e)return!1;if(e===Number(e).toString())return Number(e);if(""===e||"null"===e)return null;if("string"!==typeof e)return e;try{return JSON.parse(decodeURIComponent(e))}catch(t){return e}}function sn(e){return e.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))}const on={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${sn(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${sn(t)}`)},getDataAttributes(e){if(!e)return{};const t={},n=Object.keys(e.dataset).filter((e=>e.startsWith("bs")&&!e.startsWith("bsConfig")));for(const i of n){let n=i.replace(/^bs/,"");n=n.charAt(0).toLowerCase()+n.slice(1,n.length),t[n]=rn(e.dataset[i])}return t},getDataAttribute(e,t){return rn(e.getAttribute(`data-bs-${sn(t)}`))}};class an{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,t){const n=Et(t)?on.getDataAttribute(t,"config"):{};return{...this.constructor.Default,..."object"===typeof n?n:{},...Et(t)?on.getDataAttributes(t):{},..."object"===typeof e?e:{}}}_typeCheckConfig(e,t=this.constructor.DefaultType){for(const[n,i]of Object.entries(t)){const t=e[n],r=Et(t)?"element":yt(t);if(!new RegExp(i).test(r))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${i}".`)}}}const cn="5.3.3";class ln extends an{constructor(e,t){super(),e=Ct(e),e&&(this._element=e,this._config=this._getConfig(t),pt.set(this._element,this.constructor.DATA_KEY,this))}dispose(){pt.remove(this._element,this.constructor.DATA_KEY),tn.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,t,n=!0){Mt(e,t,n)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return pt.get(Ct(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"===typeof t?t:null)}static get VERSION(){return cn}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}const un=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&"#"!==n?n.trim():null}return t?t.split(",").map((e=>vt(e))).join(","):null},hn={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter((e=>e.matches(t)))},parents(e,t){const n=[];let i=e.parentNode.closest(t);while(i)n.push(i),i=i.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;while(n){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;while(n){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((e=>`${e}:not([tabindex^="-"])`)).join(",");return this.find(t,e).filter((e=>!St(e)&&It(e)))},getSelectorFromElement(e){const t=un(e);return t&&hn.findOne(t)?t:null},getElementFromSelector(e){const t=un(e);return t?hn.findOne(t):null},getMultipleElementsFromSelector(e){const t=un(e);return t?hn.find(t):[]}},dn=(e,t="hide")=>{const n=`click.dismiss${e.EVENT_KEY}`,i=e.NAME;tn.on(document,n,`[data-bs-dismiss="${i}"]`,(function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),St(this))return;const r=hn.getElementFromSelector(this)||this.closest(`.${i}`),s=e.getOrCreateInstance(r);s[t]()}))},fn="alert",pn="bs.alert",gn=`.${pn}`,mn=`close${gn}`,_n=`closed${gn}`,vn="fade",yn="show";class wn extends ln{static get NAME(){return fn}close(){const e=tn.trigger(this._element,mn);if(e.defaultPrevented)return;this._element.classList.remove(yn);const t=this._element.classList.contains(vn);this._queueCallback((()=>this._destroyElement()),this._element,t)}_destroyElement(){this._element.remove(),tn.trigger(this._element,_n),this.dispose()}static jQueryInterface(e){return this.each((function(){const t=wn.getOrCreateInstance(this);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}dn(wn,"close"),Dt(wn);const bn="button",Tn="bs.button",En=`.${Tn}`,Cn=".data-api",In="active",Sn='[data-bs-toggle="button"]',kn=`click${En}${Cn}`;class An extends ln{static get NAME(){return bn}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(In))}static jQueryInterface(e){return this.each((function(){const t=An.getOrCreateInstance(this);"toggle"===e&&t[e]()}))}}tn.on(document,kn,Sn,(e=>{e.preventDefault();const t=e.target.closest(Sn),n=An.getOrCreateInstance(t);n.toggle()})),Dt(An);const Rn="swipe",Nn=".bs.swipe",On=`touchstart${Nn}`,Pn=`touchmove${Nn}`,xn=`touchend${Nn}`,Dn=`pointerdown${Nn}`,Ln=`pointerup${Nn}`,Mn="touch",Fn="pen",Un="pointer-event",$n=40,jn={endCallback:null,leftCallback:null,rightCallback:null},Vn={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Bn extends an{constructor(e,t){super(),this._element=e,e&&Bn.isSupported()&&(this._config=this._getConfig(t),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return jn}static get DefaultType(){return Vn}static get NAME(){return Rn}dispose(){tn.off(this._element,Nn)}_start(e){this._supportPointerEvents?this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX):this._deltaX=e.touches[0].clientX}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),Lt(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=$n)return;const t=e/this._deltaX;this._deltaX=0,t&&Lt(t>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(tn.on(this._element,Dn,(e=>this._start(e))),tn.on(this._element,Ln,(e=>this._end(e))),this._element.classList.add(Un)):(tn.on(this._element,On,(e=>this._start(e))),tn.on(this._element,Pn,(e=>this._move(e))),tn.on(this._element,xn,(e=>this._end(e))))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===Fn||e.pointerType===Mn)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const qn="carousel",Hn="bs.carousel",zn=`.${Hn}`,Wn=".data-api",Kn="ArrowLeft",Gn="ArrowRight",Qn=500,Xn="next",Yn="prev",Jn="left",Zn="right",ei=`slide${zn}`,ti=`slid${zn}`,ni=`keydown${zn}`,ii=`mouseenter${zn}`,ri=`mouseleave${zn}`,si=`dragstart${zn}`,oi=`load${zn}${Wn}`,ai=`click${zn}${Wn}`,ci="carousel",li="active",ui="slide",hi="carousel-item-end",di="carousel-item-start",fi="carousel-item-next",pi="carousel-item-prev",gi=".active",mi=".carousel-item",_i=gi+mi,vi=".carousel-item img",yi=".carousel-indicators",wi="[data-bs-slide], [data-bs-slide-to]",bi='[data-bs-ride="carousel"]',Ti={[Kn]:Zn,[Gn]:Jn},Ei={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Ci={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Ii extends ln{constructor(e,t){super(e,t),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=hn.findOne(yi,this._element),this._addEventListeners(),this._config.ride===ci&&this.cycle()}static get Default(){return Ei}static get DefaultType(){return Ci}static get NAME(){return qn}next(){this._slide(Xn)}nextWhenVisible(){!document.hidden&&It(this._element)&&this.next()}prev(){this._slide(Yn)}pause(){this._isSliding&&Tt(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?tn.one(this._element,ti,(()=>this.cycle())):this.cycle())}to(e){const t=this._getItems();if(e>t.length-1||e<0)return;if(this._isSliding)return void tn.one(this._element,ti,(()=>this.to(e)));const n=this._getItemIndex(this._getActive());if(n===e)return;const i=e>n?Xn:Yn;this._slide(i,t[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&tn.on(this._element,ni,(e=>this._keydown(e))),"hover"===this._config.pause&&(tn.on(this._element,ii,(()=>this.pause())),tn.on(this._element,ri,(()=>this._maybeEnableCycle()))),this._config.touch&&Bn.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const n of hn.find(vi,this._element))tn.on(n,si,(e=>e.preventDefault()));const e=()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),Qn+this._config.interval))},t={leftCallback:()=>this._slide(this._directionToOrder(Jn)),rightCallback:()=>this._slide(this._directionToOrder(Zn)),endCallback:e};this._swipeHelper=new Bn(this._element,t)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=Ti[e.key];t&&(e.preventDefault(),this._slide(this._directionToOrder(t)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const t=hn.findOne(gi,this._indicatorsElement);t.classList.remove(li),t.removeAttribute("aria-current");const n=hn.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);n&&(n.classList.add(li),n.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=t||this._config.defaultInterval}_slide(e,t=null){if(this._isSliding)return;const n=this._getActive(),i=e===Xn,r=t||Ft(this._getItems(),n,i,this._config.wrap);if(r===n)return;const s=this._getItemIndex(r),o=t=>tn.trigger(this._element,t,{relatedTarget:r,direction:this._orderToDirection(e),from:this._getItemIndex(n),to:s}),a=o(ei);if(a.defaultPrevented)return;if(!n||!r)return;const c=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(s),this._activeElement=r;const l=i?di:hi,u=i?fi:pi;r.classList.add(u),Rt(r),n.classList.add(l),r.classList.add(l);const h=()=>{r.classList.remove(l,u),r.classList.add(li),n.classList.remove(li,u,l),this._isSliding=!1,o(ti)};this._queueCallback(h,n,this._isAnimated()),c&&this.cycle()}_isAnimated(){return this._element.classList.contains(ui)}_getActive(){return hn.findOne(_i,this._element)}_getItems(){return hn.find(mi,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return xt()?e===Jn?Yn:Xn:e===Jn?Xn:Yn}_orderToDirection(e){return xt()?e===Yn?Jn:Zn:e===Yn?Zn:Jn}static jQueryInterface(e){return this.each((function(){const t=Ii.getOrCreateInstance(this,e);if("number"!==typeof e){if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}else t.to(e)}))}}tn.on(document,ai,wi,(function(e){const t=hn.getElementFromSelector(this);if(!t||!t.classList.contains(ci))return;e.preventDefault();const n=Ii.getOrCreateInstance(t),i=this.getAttribute("data-bs-slide-to");return i?(n.to(i),void n._maybeEnableCycle()):"next"===on.getDataAttribute(this,"slide")?(n.next(),void n._maybeEnableCycle()):(n.prev(),void n._maybeEnableCycle())})),tn.on(window,oi,(()=>{const e=hn.find(bi);for(const t of e)Ii.getOrCreateInstance(t)})),Dt(Ii);const Si="collapse",ki="bs.collapse",Ai=`.${ki}`,Ri=".data-api",Ni=`show${Ai}`,Oi=`shown${Ai}`,Pi=`hide${Ai}`,xi=`hidden${Ai}`,Di=`click${Ai}${Ri}`,Li="show",Mi="collapse",Fi="collapsing",Ui="collapsed",$i=`:scope .${Mi} .${Mi}`,ji="collapse-horizontal",Vi="width",Bi="height",qi=".collapse.show, .collapse.collapsing",Hi='[data-bs-toggle="collapse"]',zi={parent:null,toggle:!0},Wi={parent:"(null|element)",toggle:"boolean"};class Ki extends ln{constructor(e,t){super(e,t),this._isTransitioning=!1,this._triggerArray=[];const n=hn.find(Hi);for(const i of n){const e=hn.getSelectorFromElement(i),t=hn.find(e).filter((e=>e===this._element));null!==e&&t.length&&this._triggerArray.push(i)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return zi}static get DefaultType(){return Wi}static get NAME(){return Si}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(qi).filter((e=>e!==this._element)).map((e=>Ki.getOrCreateInstance(e,{toggle:!1})))),e.length&&e[0]._isTransitioning)return;const t=tn.trigger(this._element,Ni);if(t.defaultPrevented)return;for(const o of e)o.hide();const n=this._getDimension();this._element.classList.remove(Mi),this._element.classList.add(Fi),this._element.style[n]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(Fi),this._element.classList.add(Mi,Li),this._element.style[n]="",tn.trigger(this._element,Oi)},r=n[0].toUpperCase()+n.slice(1),s=`scroll${r}`;this._queueCallback(i,this._element,!0),this._element.style[n]=`${this._element[s]}px`}hide(){if(this._isTransitioning||!this._isShown())return;const e=tn.trigger(this._element,Pi);if(e.defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,Rt(this._element),this._element.classList.add(Fi),this._element.classList.remove(Mi,Li);for(const i of this._triggerArray){const e=hn.getElementFromSelector(i);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([i],!1)}this._isTransitioning=!0;const n=()=>{this._isTransitioning=!1,this._element.classList.remove(Fi),this._element.classList.add(Mi),tn.trigger(this._element,xi)};this._element.style[t]="",this._queueCallback(n,this._element,!0)}_isShown(e=this._element){return e.classList.contains(Li)}_configAfterMerge(e){return e.toggle=Boolean(e.toggle),e.parent=Ct(e.parent),e}_getDimension(){return this._element.classList.contains(ji)?Vi:Bi}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(Hi);for(const t of e){const e=hn.getElementFromSelector(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}}_getFirstLevelChildren(e){const t=hn.find($i,this._config.parent);return hn.find(e,this._config.parent).filter((e=>!t.includes(e)))}_addAriaAndCollapsedClass(e,t){if(e.length)for(const n of e)n.classList.toggle(Ui,!t),n.setAttribute("aria-expanded",t)}static jQueryInterface(e){const t={};return"string"===typeof e&&/show|hide/.test(e)&&(t.toggle=!1),this.each((function(){const n=Ki.getOrCreateInstance(this,t);if("string"===typeof e){if("undefined"===typeof n[e])throw new TypeError(`No method named "${e}"`);n[e]()}}))}}tn.on(document,Di,Hi,(function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();for(const t of hn.getMultipleElementsFromSelector(this))Ki.getOrCreateInstance(t,{toggle:!1}).toggle()})),Dt(Ki);const Gi="dropdown",Qi="bs.dropdown",Xi=`.${Qi}`,Yi=".data-api",Ji="Escape",Zi="Tab",er="ArrowUp",tr="ArrowDown",nr=2,ir=`hide${Xi}`,rr=`hidden${Xi}`,sr=`show${Xi}`,or=`shown${Xi}`,ar=`click${Xi}${Yi}`,cr=`keydown${Xi}${Yi}`,lr=`keyup${Xi}${Yi}`,ur="show",hr="dropup",dr="dropend",fr="dropstart",pr="dropup-center",gr="dropdown-center",mr='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',_r=`${mr}.${ur}`,vr=".dropdown-menu",yr=".navbar",wr=".navbar-nav",br=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Tr=xt()?"top-end":"top-start",Er=xt()?"top-start":"top-end",Cr=xt()?"bottom-end":"bottom-start",Ir=xt()?"bottom-start":"bottom-end",Sr=xt()?"left-start":"right-start",kr=xt()?"right-start":"left-start",Ar="top",Rr="bottom",Nr={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Or={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Pr extends ln{constructor(e,t){super(e,t),this._popper=null,this._parent=this._element.parentNode,this._menu=hn.next(this._element,vr)[0]||hn.prev(this._element,vr)[0]||hn.findOne(vr,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Nr}static get DefaultType(){return Or}static get NAME(){return Gi}toggle(){return this._isShown()?this.hide():this.show()}show(){if(St(this._element)||this._isShown())return;const e={relatedTarget:this._element},t=tn.trigger(this._element,sr,e);if(!t.defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(wr))for(const e of[].concat(...document.body.children))tn.on(e,"mouseover",At);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(ur),this._element.classList.add(ur),tn.trigger(this._element,or,e)}}hide(){if(St(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){const t=tn.trigger(this._element,ir,e);if(!t.defaultPrevented){if("ontouchstart"in document.documentElement)for(const e of[].concat(...document.body.children))tn.off(e,"mouseover",At);this._popper&&this._popper.destroy(),this._menu.classList.remove(ur),this._element.classList.remove(ur),this._element.setAttribute("aria-expanded","false"),on.removeDataAttribute(this._menu,"popper"),tn.trigger(this._element,rr,e)}}_getConfig(e){if(e=super._getConfig(e),"object"===typeof e.reference&&!Et(e.reference)&&"function"!==typeof e.reference.getBoundingClientRect)throw new TypeError(`${Gi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if("undefined"===typeof i)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;"parent"===this._config.reference?e=this._parent:Et(this._config.reference)?e=Ct(this._config.reference):"object"===typeof this._config.reference&&(e=this._config.reference);const t=this._getPopperConfig();this._popper=ut(e,this._menu,t)}_isShown(){return this._menu.classList.contains(ur)}_getPlacement(){const e=this._parent;if(e.classList.contains(dr))return Sr;if(e.classList.contains(fr))return kr;if(e.classList.contains(pr))return Ar;if(e.classList.contains(gr))return Rr;const t="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return e.classList.contains(hr)?t?Er:Tr:t?Ir:Cr}_detectNavbar(){return null!==this._element.closest(yr)}_getOffset(){const{offset:e}=this._config;return"string"===typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"===typeof e?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(on.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...Lt(this._config.popperConfig,[e])}}_selectMenuItem({key:e,target:t}){const n=hn.find(br,this._menu).filter((e=>It(e)));n.length&&Ft(n,t,e===tr,!n.includes(t)).focus()}static jQueryInterface(e){return this.each((function(){const t=Pr.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}static clearMenus(e){if(e.button===nr||"keyup"===e.type&&e.key!==Zi)return;const t=hn.find(_r);for(const n of t){const t=Pr.getInstance(n);if(!t||!1===t._config.autoClose)continue;const i=e.composedPath(),r=i.includes(t._menu);if(i.includes(t._element)||"inside"===t._config.autoClose&&!r||"outside"===t._config.autoClose&&r)continue;if(t._menu.contains(e.target)&&("keyup"===e.type&&e.key===Zi||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const s={relatedTarget:t._element};"click"===e.type&&(s.clickEvent=e),t._completeHide(s)}}static dataApiKeydownHandler(e){const t=/input|textarea/i.test(e.target.tagName),n=e.key===Ji,i=[er,tr].includes(e.key);if(!i&&!n)return;if(t&&!n)return;e.preventDefault();const r=this.matches(mr)?this:hn.prev(this,mr)[0]||hn.next(this,mr)[0]||hn.findOne(mr,e.delegateTarget.parentNode),s=Pr.getOrCreateInstance(r);if(i)return e.stopPropagation(),s.show(),void s._selectMenuItem(e);s._isShown()&&(e.stopPropagation(),s.hide(),r.focus())}}tn.on(document,cr,mr,Pr.dataApiKeydownHandler),tn.on(document,cr,vr,Pr.dataApiKeydownHandler),tn.on(document,ar,Pr.clearMenus),tn.on(document,lr,Pr.clearMenus),tn.on(document,ar,mr,(function(e){e.preventDefault(),Pr.getOrCreateInstance(this).toggle()})),Dt(Pr);const xr="backdrop",Dr="fade",Lr="show",Mr=`mousedown.bs.${xr}`,Fr={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Ur={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class $r extends an{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return Fr}static get DefaultType(){return Ur}static get NAME(){return xr}show(e){if(!this._config.isVisible)return void Lt(e);this._append();const t=this._getElement();this._config.isAnimated&&Rt(t),t.classList.add(Lr),this._emulateAnimation((()=>{Lt(e)}))}hide(e){this._config.isVisible?(this._getElement().classList.remove(Lr),this._emulateAnimation((()=>{this.dispose(),Lt(e)}))):Lt(e)}dispose(){this._isAppended&&(tn.off(this._element,Mr),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(Dr),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=Ct(e.rootElement),e}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),tn.on(e,Mr,(()=>{Lt(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(e){Mt(e,this._getElement(),this._config.isAnimated)}}const jr="focustrap",Vr="bs.focustrap",Br=`.${Vr}`,qr=`focusin${Br}`,Hr=`keydown.tab${Br}`,zr="Tab",Wr="forward",Kr="backward",Gr={autofocus:!0,trapElement:null},Qr={autofocus:"boolean",trapElement:"element"};class Xr extends an{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Gr}static get DefaultType(){return Qr}static get NAME(){return jr}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),tn.off(document,Br),tn.on(document,qr,(e=>this._handleFocusin(e))),tn.on(document,Hr,(e=>this._handleKeydown(e))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,tn.off(document,Br))}_handleFocusin(e){const{trapElement:t}=this._config;if(e.target===document||e.target===t||t.contains(e.target))return;const n=hn.focusableChildren(t);0===n.length?t.focus():this._lastTabNavDirection===Kr?n[n.length-1].focus():n[0].focus()}_handleKeydown(e){e.key===zr&&(this._lastTabNavDirection=e.shiftKey?Kr:Wr)}}const Yr=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Jr=".sticky-top",Zr="padding-right",es="margin-right";class ts{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Zr,(t=>t+e)),this._setElementAttributes(Yr,Zr,(t=>t+e)),this._setElementAttributes(Jr,es,(t=>t-e))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Zr),this._resetElementAttributes(Yr,Zr),this._resetElementAttributes(Jr,es)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,n){const i=this.getWidth(),r=e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+i)return;this._saveInitialAttribute(e,t);const r=window.getComputedStyle(e).getPropertyValue(t);e.style.setProperty(t,`${n(Number.parseFloat(r))}px`)};this._applyManipulationCallback(e,r)}_saveInitialAttribute(e,t){const n=e.style.getPropertyValue(t);n&&on.setDataAttribute(e,t,n)}_resetElementAttributes(e,t){const n=e=>{const n=on.getDataAttribute(e,t);null!==n?(on.removeDataAttribute(e,t),e.style.setProperty(t,n)):e.style.removeProperty(t)};this._applyManipulationCallback(e,n)}_applyManipulationCallback(e,t){if(Et(e))t(e);else for(const n of hn.find(e,this._element))t(n)}}const ns="modal",is="bs.modal",rs=`.${is}`,ss=".data-api",os="Escape",as=`hide${rs}`,cs=`hidePrevented${rs}`,ls=`hidden${rs}`,us=`show${rs}`,hs=`shown${rs}`,ds=`resize${rs}`,fs=`click.dismiss${rs}`,ps=`mousedown.dismiss${rs}`,gs=`keydown.dismiss${rs}`,ms=`click${rs}${ss}`,_s="modal-open",vs="fade",ys="show",ws="modal-static",bs=".modal.show",Ts=".modal-dialog",Es=".modal-body",Cs='[data-bs-toggle="modal"]',Is={backdrop:!0,focus:!0,keyboard:!0},Ss={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class ks extends ln{constructor(e,t){super(e,t),this._dialog=hn.findOne(Ts,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new ts,this._addEventListeners()}static get Default(){return Is}static get DefaultType(){return Ss}static get NAME(){return ns}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||this._isTransitioning)return;const t=tn.trigger(this._element,us,{relatedTarget:e});t.defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(_s),this._adjustDialog(),this._backdrop.show((()=>this._showElement(e))))}hide(){if(!this._isShown||this._isTransitioning)return;const e=tn.trigger(this._element,as);e.defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(ys),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated()))}dispose(){tn.off(window,rs),tn.off(this._dialog,rs),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new $r({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Xr({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const t=hn.findOne(Es,this._dialog);t&&(t.scrollTop=0),Rt(this._element),this._element.classList.add(ys);const n=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,tn.trigger(this._element,hs,{relatedTarget:e})};this._queueCallback(n,this._dialog,this._isAnimated())}_addEventListeners(){tn.on(this._element,gs,(e=>{e.key===os&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())})),tn.on(window,ds,(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),tn.on(this._element,ps,(e=>{tn.one(this._element,fs,(t=>{this._element===e.target&&this._element===t.target&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(_s),this._resetAdjustments(),this._scrollBar.reset(),tn.trigger(this._element,ls)}))}_isAnimated(){return this._element.classList.contains(vs)}_triggerBackdropTransition(){const e=tn.trigger(this._element,cs);if(e.defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,n=this._element.style.overflowY;"hidden"===n||this._element.classList.contains(ws)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(ws),this._queueCallback((()=>{this._element.classList.remove(ws),this._queueCallback((()=>{this._element.style.overflowY=n}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),n=t>0;if(n&&!e){const e=xt()?"paddingLeft":"paddingRight";this._element.style[e]=`${t}px`}if(!n&&e){const e=xt()?"paddingRight":"paddingLeft";this._element.style[e]=`${t}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each((function(){const n=ks.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof n[e])throw new TypeError(`No method named "${e}"`);n[e](t)}}))}}tn.on(document,ms,Cs,(function(e){const t=hn.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),tn.one(t,us,(e=>{e.defaultPrevented||tn.one(t,ls,(()=>{It(this)&&this.focus()}))}));const n=hn.findOne(bs);n&&ks.getInstance(n).hide();const i=ks.getOrCreateInstance(t);i.toggle(this)})),dn(ks),Dt(ks);const As="offcanvas",Rs="bs.offcanvas",Ns=`.${Rs}`,Os=".data-api",Ps=`load${Ns}${Os}`,xs="Escape",Ds="show",Ls="showing",Ms="hiding",Fs="offcanvas-backdrop",Us=".offcanvas.show",$s=`show${Ns}`,js=`shown${Ns}`,Vs=`hide${Ns}`,Bs=`hidePrevented${Ns}`,qs=`hidden${Ns}`,Hs=`resize${Ns}`,zs=`click${Ns}${Os}`,Ws=`keydown.dismiss${Ns}`,Ks='[data-bs-toggle="offcanvas"]',Gs={backdrop:!0,keyboard:!0,scroll:!1},Qs={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Xs extends ln{constructor(e,t){super(e,t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Gs}static get DefaultType(){return Qs}static get NAME(){return As}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown)return;const t=tn.trigger(this._element,$s,{relatedTarget:e});if(t.defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||(new ts).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Ls);const n=()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Ds),this._element.classList.remove(Ls),tn.trigger(this._element,js,{relatedTarget:e})};this._queueCallback(n,this._element,!0)}hide(){if(!this._isShown)return;const e=tn.trigger(this._element,Vs);if(e.defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Ms),this._backdrop.hide();const t=()=>{this._element.classList.remove(Ds,Ms),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new ts).reset(),tn.trigger(this._element,qs)};this._queueCallback(t,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const e=()=>{"static"!==this._config.backdrop?this.hide():tn.trigger(this._element,Bs)},t=Boolean(this._config.backdrop);return new $r({className:Fs,isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?e:null})}_initializeFocusTrap(){return new Xr({trapElement:this._element})}_addEventListeners(){tn.on(this._element,Ws,(e=>{e.key===xs&&(this._config.keyboard?this.hide():tn.trigger(this._element,Bs))}))}static jQueryInterface(e){return this.each((function(){const t=Xs.getOrCreateInstance(this,e);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}tn.on(document,zs,Ks,(function(e){const t=hn.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),St(this))return;tn.one(t,qs,(()=>{It(this)&&this.focus()}));const n=hn.findOne(Us);n&&n!==t&&Xs.getInstance(n).hide();const i=Xs.getOrCreateInstance(t);i.toggle(this)})),tn.on(window,Ps,(()=>{for(const e of hn.find(Us))Xs.getOrCreateInstance(e).show()})),tn.on(window,Hs,(()=>{for(const e of hn.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(e).position&&Xs.getOrCreateInstance(e).hide()})),dn(Xs),Dt(Xs);const Ys=/^aria-[\w-]*$/i,Js={"*":["class","dir","id","lang","role",Ys],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Zs=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),eo=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,to=(e,t)=>{const n=e.nodeName.toLowerCase();return t.includes(n)?!Zs.has(n)||Boolean(eo.test(e.nodeValue)):t.filter((e=>e instanceof RegExp)).some((e=>e.test(n)))};function no(e,t,n){if(!e.length)return e;if(n&&"function"===typeof n)return n(e);const i=new window.DOMParser,r=i.parseFromString(e,"text/html"),s=[].concat(...r.body.querySelectorAll("*"));for(const o of s){const e=o.nodeName.toLowerCase();if(!Object.keys(t).includes(e)){o.remove();continue}const n=[].concat(...o.attributes),i=[].concat(t["*"]||[],t[e]||[]);for(const t of n)to(t,i)||o.removeAttribute(t.nodeName)}return r.body.innerHTML}const io="TemplateFactory",ro={allowList:Js,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},so={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},oo={entry:"(string|element|function|null)",selector:"(string|element)"};class ao extends an{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return ro}static get DefaultType(){return so}static get NAME(){return io}getContent(){return Object.values(this._config.content).map((e=>this._resolvePossibleFunction(e))).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[i,r]of Object.entries(this._config.content))this._setContent(e,r,i);const t=e.children[0],n=this._resolvePossibleFunction(this._config.extraClass);return n&&t.classList.add(...n.split(" ")),t}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[t,n]of Object.entries(e))super._typeCheckConfig({selector:t,entry:n},oo)}_setContent(e,t,n){const i=hn.findOne(n,e);i&&(t=this._resolvePossibleFunction(t),t?Et(t)?this._putElementInTemplate(Ct(t),i):this._config.html?i.innerHTML=this._maybeSanitize(t):i.textContent=t:i.remove())}_maybeSanitize(e){return this._config.sanitize?no(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return Lt(e,[this])}_putElementInTemplate(e,t){if(this._config.html)return t.innerHTML="",void t.append(e);t.textContent=e.textContent}}const co="tooltip",lo=new Set(["sanitize","allowList","sanitizeFn"]),uo="fade",ho="modal",fo="show",po=".tooltip-inner",go=`.${ho}`,mo="hide.bs.modal",_o="hover",vo="focus",yo="click",wo="manual",bo="hide",To="hidden",Eo="show",Co="shown",Io="inserted",So="click",ko="focusin",Ao="focusout",Ro="mouseenter",No="mouseleave",Oo={AUTO:"auto",TOP:"top",RIGHT:xt()?"left":"right",BOTTOM:"bottom",LEFT:xt()?"right":"left"},Po={allowList:Js,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},xo={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Do extends ln{constructor(e,t){if("undefined"===typeof i)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e,t),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return Po}static get DefaultType(){return xo}static get NAME(){return co}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),tn.off(this._element.closest(go),mo,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const e=tn.trigger(this._element,this.constructor.eventName(Eo)),t=kt(this._element),n=(t||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!n)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:r}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(r.append(i),tn.trigger(this._element,this.constructor.eventName(Io))),this._popper=this._createPopper(i),i.classList.add(fo),"ontouchstart"in document.documentElement)for(const o of[].concat(...document.body.children))tn.on(o,"mouseover",At);const s=()=>{tn.trigger(this._element,this.constructor.eventName(Co)),!1===this._isHovered&&this._leave(),this._isHovered=!1};this._queueCallback(s,this.tip,this._isAnimated())}hide(){if(!this._isShown())return;const e=tn.trigger(this._element,this.constructor.eventName(bo));if(e.defaultPrevented)return;const t=this._getTipElement();if(t.classList.remove(fo),"ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))tn.off(i,"mouseover",At);this._activeTrigger[yo]=!1,this._activeTrigger[vo]=!1,this._activeTrigger[_o]=!1,this._isHovered=null;const n=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),tn.trigger(this._element,this.constructor.eventName(To)))};this._queueCallback(n,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){const t=this._getTemplateFactory(e).toHtml();if(!t)return null;t.classList.remove(uo,fo),t.classList.add(`bs-${this.constructor.NAME}-auto`);const n=wt(this.constructor.NAME).toString();return t.setAttribute("id",n),this._isAnimated()&&t.classList.add(uo),t}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new ao({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[po]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(uo)}_isShown(){return this.tip&&this.tip.classList.contains(fo)}_createPopper(e){const t=Lt(this._config.placement,[this,e,this._element]),n=Oo[t.toUpperCase()];return ut(this._element,e,this._getPopperConfig(n))}_getOffset(){const{offset:e}=this._config;return"string"===typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"===typeof e?t=>e(t,this._element):e}_resolvePossibleFunction(e){return Lt(e,[this._element])}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:e=>{this._getTipElement().setAttribute("data-popper-placement",e.state.placement)}}]};return{...t,...Lt(this._config.popperConfig,[t])}}_setListeners(){const e=this._config.trigger.split(" ");for(const t of e)if("click"===t)tn.on(this._element,this.constructor.eventName(So),this._config.selector,(e=>{const t=this._initializeOnDelegatedTarget(e);t.toggle()}));else if(t!==wo){const e=t===_o?this.constructor.eventName(Ro):this.constructor.eventName(ko),n=t===_o?this.constructor.eventName(No):this.constructor.eventName(Ao);tn.on(this._element,e,this._config.selector,(e=>{const t=this._initializeOnDelegatedTarget(e);t._activeTrigger["focusin"===e.type?vo:_o]=!0,t._enter()})),tn.on(this._element,n,this._config.selector,(e=>{const t=this._initializeOnDelegatedTarget(e);t._activeTrigger["focusout"===e.type?vo:_o]=t._element.contains(e.relatedTarget),t._leave()}))}this._hideModalHandler=()=>{this._element&&this.hide()},tn.on(this._element.closest(go),mo,this._hideModalHandler)}_fixTitle(){const e=this._element.getAttribute("title");e&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout((()=>{this._isHovered&&this.show()}),this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout((()=>{this._isHovered||this.hide()}),this._config.delay.hide))}_setTimeout(e,t){clearTimeout(this._timeout),this._timeout=setTimeout(e,t)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const t=on.getDataAttributes(this._element);for(const n of Object.keys(t))lo.has(n)&&delete t[n];return e={...t,..."object"===typeof e&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=!1===e.container?document.body:Ct(e.container),"number"===typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),"number"===typeof e.title&&(e.title=e.title.toString()),"number"===typeof e.content&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={};for(const[t,n]of Object.entries(this._config))this.constructor.Default[t]!==n&&(e[t]=n);return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(e){return this.each((function(){const t=Do.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}Dt(Do);const Lo="popover",Mo=".popover-header",Fo=".popover-body",Uo={...Do.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},$o={...Do.DefaultType,content:"(null|string|element|function)"};class jo extends Do{static get Default(){return Uo}static get DefaultType(){return $o}static get NAME(){return Lo}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[Mo]:this._getTitle(),[Fo]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each((function(){const t=jo.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}Dt(jo);const Vo="scrollspy",Bo="bs.scrollspy",qo=`.${Bo}`,Ho=".data-api",zo=`activate${qo}`,Wo=`click${qo}`,Ko=`load${qo}${Ho}`,Go="dropdown-item",Qo="active",Xo='[data-bs-spy="scroll"]',Yo="[href]",Jo=".nav, .list-group",Zo=".nav-link",ea=".nav-item",ta=".list-group-item",na=`${Zo}, ${ea} > ${Zo}, ${ta}`,ia=".dropdown",ra=".dropdown-toggle",sa={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},oa={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class aa extends ln{constructor(e,t){super(e,t),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return sa}static get DefaultType(){return oa}static get NAME(){return Vo}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=Ct(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,"string"===typeof e.threshold&&(e.threshold=e.threshold.split(",").map((e=>Number.parseFloat(e)))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(tn.off(this._config.target,Wo),tn.on(this._config.target,Wo,Yo,(e=>{const t=this._observableSections.get(e.target.hash);if(t){e.preventDefault();const n=this._rootElement||window,i=t.offsetTop-this._element.offsetTop;if(n.scrollTo)return void n.scrollTo({top:i,behavior:"smooth"});n.scrollTop=i}})))}_getNewObserver(){const e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver((e=>this._observerCallback(e)),e)}_observerCallback(e){const t=e=>this._targetLinks.get(`#${e.target.id}`),n=e=>{this._previousScrollData.visibleEntryTop=e.target.offsetTop,this._process(t(e))},i=(this._rootElement||document.documentElement).scrollTop,r=i>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=i;for(const s of e){if(!s.isIntersecting){this._activeTarget=null,this._clearActiveClass(t(s));continue}const e=s.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(r&&e){if(n(s),!i)return}else r||e||n(s)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=hn.find(Yo,this._config.target);for(const t of e){if(!t.hash||St(t))continue;const e=hn.findOne(decodeURI(t.hash),this._element);It(e)&&(this._targetLinks.set(decodeURI(t.hash),t),this._observableSections.set(t.hash,e))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(Qo),this._activateParents(e),tn.trigger(this._element,zo,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains(Go))hn.findOne(ra,e.closest(ia)).classList.add(Qo);else for(const t of hn.parents(e,Jo))for(const e of hn.prev(t,na))e.classList.add(Qo)}_clearActiveClass(e){e.classList.remove(Qo);const t=hn.find(`${Yo}.${Qo}`,e);for(const n of t)n.classList.remove(Qo)}static jQueryInterface(e){return this.each((function(){const t=aa.getOrCreateInstance(this,e);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}))}}tn.on(window,Ko,(()=>{for(const e of hn.find(Xo))aa.getOrCreateInstance(e)})),Dt(aa);const ca="tab",la="bs.tab",ua=`.${la}`,ha=`hide${ua}`,da=`hidden${ua}`,fa=`show${ua}`,pa=`shown${ua}`,ga=`click${ua}`,ma=`keydown${ua}`,_a=`load${ua}`,va="ArrowLeft",ya="ArrowRight",wa="ArrowUp",ba="ArrowDown",Ta="Home",Ea="End",Ca="active",Ia="fade",Sa="show",ka="dropdown",Aa=".dropdown-toggle",Ra=".dropdown-menu",Na=`:not(${Aa})`,Oa='.list-group, .nav, [role="tablist"]',Pa=".nav-item, .list-group-item",xa=`.nav-link${Na}, .list-group-item${Na}, [role="tab"]${Na}`,Da='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',La=`${xa}, ${Da}`,Ma=`.${Ca}[data-bs-toggle="tab"], .${Ca}[data-bs-toggle="pill"], .${Ca}[data-bs-toggle="list"]`;class Fa extends ln{constructor(e){super(e),this._parent=this._element.closest(Oa),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),tn.on(this._element,ma,(e=>this._keydown(e))))}static get NAME(){return ca}show(){const e=this._element;if(this._elemIsActive(e))return;const t=this._getActiveElem(),n=t?tn.trigger(t,ha,{relatedTarget:e}):null,i=tn.trigger(e,fa,{relatedTarget:t});i.defaultPrevented||n&&n.defaultPrevented||(this._deactivate(t,e),this._activate(e,t))}_activate(e,t){if(!e)return;e.classList.add(Ca),this._activate(hn.getElementFromSelector(e));const n=()=>{"tab"===e.getAttribute("role")?(e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),tn.trigger(e,pa,{relatedTarget:t})):e.classList.add(Sa)};this._queueCallback(n,e,e.classList.contains(Ia))}_deactivate(e,t){if(!e)return;e.classList.remove(Ca),e.blur(),this._deactivate(hn.getElementFromSelector(e));const n=()=>{"tab"===e.getAttribute("role")?(e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),tn.trigger(e,da,{relatedTarget:t})):e.classList.remove(Sa)};this._queueCallback(n,e,e.classList.contains(Ia))}_keydown(e){if(![va,ya,wa,ba,Ta,Ea].includes(e.key))return;e.stopPropagation(),e.preventDefault();const t=this._getChildren().filter((e=>!St(e)));let n;if([Ta,Ea].includes(e.key))n=t[e.key===Ta?0:t.length-1];else{const i=[ya,ba].includes(e.key);n=Ft(t,e.target,i,!0)}n&&(n.focus({preventScroll:!0}),Fa.getOrCreateInstance(n).show())}_getChildren(){return hn.find(La,this._parent)}_getActiveElem(){return this._getChildren().find((e=>this._elemIsActive(e)))||null}_setInitialAttributes(e,t){this._setAttributeIfNotExists(e,"role","tablist");for(const n of t)this._setInitialAttributesOnChild(n)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);const t=this._elemIsActive(e),n=this._getOuterElement(e);e.setAttribute("aria-selected",t),n!==e&&this._setAttributeIfNotExists(n,"role","presentation"),t||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const t=hn.getElementFromSelector(e);t&&(this._setAttributeIfNotExists(t,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(t,"aria-labelledby",`${e.id}`))}_toggleDropDown(e,t){const n=this._getOuterElement(e);if(!n.classList.contains(ka))return;const i=(e,i)=>{const r=hn.findOne(e,n);r&&r.classList.toggle(i,t)};i(Aa,Ca),i(Ra,Sa),n.setAttribute("aria-expanded",t)}_setAttributeIfNotExists(e,t,n){e.hasAttribute(t)||e.setAttribute(t,n)}_elemIsActive(e){return e.classList.contains(Ca)}_getInnerElement(e){return e.matches(La)?e:hn.findOne(La,e)}_getOuterElement(e){return e.closest(Pa)||e}static jQueryInterface(e){return this.each((function(){const t=Fa.getOrCreateInstance(this);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}))}}tn.on(document,ga,Da,(function(e){["A","AREA"].includes(this.tagName)&&e.preventDefault(),St(this)||Fa.getOrCreateInstance(this).show()})),tn.on(window,_a,(()=>{for(const e of hn.find(Ma))Fa.getOrCreateInstance(e)})),Dt(Fa);const Ua="toast",$a="bs.toast",ja=`.${$a}`,Va=`mouseover${ja}`,Ba=`mouseout${ja}`,qa=`focusin${ja}`,Ha=`focusout${ja}`,za=`hide${ja}`,Wa=`hidden${ja}`,Ka=`show${ja}`,Ga=`shown${ja}`,Qa="fade",Xa="hide",Ya="show",Ja="showing",Za={animation:"boolean",autohide:"boolean",delay:"number"},ec={animation:!0,autohide:!0,delay:5e3};class tc extends ln{constructor(e,t){super(e,t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return ec}static get DefaultType(){return Za}static get NAME(){return Ua}show(){const e=tn.trigger(this._element,Ka);if(e.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(Qa);const t=()=>{this._element.classList.remove(Ja),tn.trigger(this._element,Ga),this._maybeScheduleHide()};this._element.classList.remove(Xa),Rt(this._element),this._element.classList.add(Ya,Ja),this._queueCallback(t,this._element,this._config.animation)}hide(){if(!this.isShown())return;const e=tn.trigger(this._element,za);if(e.defaultPrevented)return;const t=()=>{this._element.classList.add(Xa),this._element.classList.remove(Ja,Ya),tn.trigger(this._element,Wa)};this._element.classList.add(Ja),this._queueCallback(t,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Ya),super.dispose()}isShown(){return this._element.classList.contains(Ya)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t;break}if(t)return void this._clearTimeout();const n=e.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){tn.on(this._element,Va,(e=>this._onInteraction(e,!0))),tn.on(this._element,Ba,(e=>this._onInteraction(e,!1))),tn.on(this._element,qa,(e=>this._onInteraction(e,!0))),tn.on(this._element,Ha,(e=>this._onInteraction(e,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each((function(){const t=tc.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}dn(tc),Dt(tc)},7917:function(){},3723:function(e,t,n){n.d(t,{k:function(){return s}});var i,r=function(){return Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))};function s(e,t){void 0===t&&(t={});var n=t.registrationOptions;void 0===n&&(n={}),delete t.registrationOptions;var s=function(e){var n=[],i=arguments.length-1;while(i-- >0)n[i]=arguments[i+1];t&&t[e]&&t[e].apply(t,n)};"serviceWorker"in navigator&&i.then((function(){r()?(c(e,s,n),navigator.serviceWorker.ready.then((function(e){s("ready",e)})).catch((function(e){return o(s,e)}))):(a(e,s,n),navigator.serviceWorker.ready.then((function(e){s("ready",e)})).catch((function(e){return o(s,e)})))}))}function o(e,t){navigator.onLine||e("offline"),e("error",t)}function a(e,t,n){navigator.serviceWorker.register(e,n).then((function(e){t("registered",e),e.waiting?t("updated",e):e.onupdatefound=function(){t("updatefound",e);var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?t("updated",e):t("cached",e))}}})).catch((function(e){return o(t,e)}))}function c(e,t,n){fetch(e).then((function(i){404===i.status?(t("error",new Error("Service worker not found at "+e)),l()):-1===i.headers.get("content-type").indexOf("javascript")?(t("error",new Error("Expected "+e+" to have javascript content-type, but received "+i.headers.get("content-type"))),l()):a(e,t,n)})).catch((function(e){return o(t,e)}))}function l(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){return o(emit,e)}))}"undefined"!==typeof window&&(i="undefined"!==typeof Promise?new Promise((function(e){return window.addEventListener("load",e)})):{then:function(e){return window.addEventListener("load",e)}})},6262:function(e,t){t.A=(e,t)=>{const n=e.__vccOpts||e;for(const[i,r]of t)n[i]=r;return n}},9928:function(e,t,n){n.d(t,{MF:function(){return _e},j6:function(){return de},xZ:function(){return fe},om:function(){return he},Sx:function(){return ye},Wp:function(){return ve},KO:function(){return we}});var i=n(5125),r=n(3424),s=n(6743);const o=(e,t)=>t.some((t=>e instanceof t));let a,c;function l(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,g=new WeakMap;function m(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(T(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),g.set(t,e),t}function _(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)}));d.set(e,t)}let v={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return T(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function y(e){v=e(v)}function w(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(e)?function(...t){return e.apply(E(this),t),T(h.get(this))}:function(...t){return T(e.apply(E(this),t))}:function(t,...n){const i=e.call(E(this),t,...n);return f.set(i,t.sort?t.sort():[t]),T(i)}}function b(e){return"function"===typeof e?w(e):(e instanceof IDBTransaction&&_(e),o(e,l())?new Proxy(e,v):e)}function T(e){if(e instanceof IDBRequest)return m(e);if(p.has(e))return p.get(e);const t=b(e);return t!==e&&(p.set(e,t),g.set(t,e)),t}const E=e=>g.get(e);function C(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=T(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(T(o.result),e.oldVersion,e.newVersion,T(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),r&&e.addEventListener("versionchange",(e=>r(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const I=["get","getKey","getAll","getAllKeys","count"],S=["put","add","delete","clear"],k=new Map;function A(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(k.get(t))return k.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=S.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!I.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return k.set(t,s),s}y((e=>({...e,get:(t,n,i)=>A(t,n)||e.get(t,n,i),has:(t,n)=>!!A(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class R{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(N(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function N(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const O="@firebase/app",P="0.10.2",x=new r.Vy("@firebase/app"),D="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",F="@firebase/app-check-compat",U="@firebase/app-check",$="@firebase/auth",j="@firebase/auth-compat",V="@firebase/database",B="@firebase/database-compat",q="@firebase/functions",H="@firebase/functions-compat",z="@firebase/installations",W="@firebase/installations-compat",K="@firebase/messaging",G="@firebase/messaging-compat",Q="@firebase/performance",X="@firebase/performance-compat",Y="@firebase/remote-config",J="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",ie="firebase",re="10.11.1",se="[DEFAULT]",oe={[O]:"fire-core",[D]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[U]:"fire-app-check",[F]:"fire-app-check-compat",[$]:"fire-auth",[j]:"fire-auth-compat",[V]:"fire-rtdb",[B]:"fire-rtdb-compat",[q]:"fire-fn",[H]:"fire-fn-compat",[z]:"fire-iid",[W]:"fire-iid-compat",[K]:"fire-fcm",[G]:"fire-fcm-compat",[Q]:"fire-perf",[X]:"fire-perf-compat",[Y]:"fire-rc",[J]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[ie]:"fire-js-all"},ae=new Map,ce=new Map,le=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){x.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function he(e){const t=e.name;if(le.has(t))return x.debug(`There were multiple attempts to register component ${t}.`),!1;le.set(t,e);for(const n of ae.values())ue(n,e);for(const n of ce.values())ue(n,e);return!0}function de(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function fe(e){return void 0!==e.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const pe={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},ge=new s.FA("app","Firebase",pe);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class me{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ge.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _e=re;function ve(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const r=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),o=r.name;if("string"!==typeof o||!o)throw ge.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.T9)()),!n)throw ge.create("no-options");const a=ae.get(o);if(a){if((0,s.bD)(n,a.options)&&(0,s.bD)(r,a.config))return a;throw ge.create("duplicate-app",{appName:o})}const c=new i.h1(o);for(const i of le.values())c.addComponent(i);const l=new me(n,r,c);return ae.set(o,l),l}function ye(e=se){const t=ae.get(e);if(!t&&e===se&&(0,s.T9)())return ve();if(!t)throw ge.create("no-app",{appName:e});return t}function we(e,t,n){var r;let s=null!==(r=oe[e])&&void 0!==r?r:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void x.warn(e.join(" "))}he(new i.uA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const be="firebase-heartbeat-database",Te=1,Ee="firebase-heartbeat-store";let Ce=null;function Ie(){return Ce||(Ce=C(be,Te,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Ee)}catch(n){console.warn(n)}}}}).catch((e=>{throw ge.create("idb-open",{originalErrorMessage:e.message})}))),Ce}async function Se(e){try{const t=await Ie(),n=t.transaction(Ee),i=await n.objectStore(Ee).get(Ae(e));return await n.done,i}catch(t){if(t instanceof s.g)x.warn(t.message);else{const e=ge.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});x.warn(e.message)}}}async function ke(e,t){try{const n=await Ie(),i=n.transaction(Ee,"readwrite"),r=i.objectStore(Ee);await r.put(t,Ae(e)),await i.done}catch(n){if(n instanceof s.g)x.warn(n.message);else{const e=ge.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});x.warn(e.message)}}}function Ae(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re=1024,Ne=2592e6;class Oe{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new De(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;const n=this.container.getProvider("platform-logger").getImmediate(),i=n.getPlatformInfoString(),r=Pe();if((null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==r&&!this._heartbeatsCache.heartbeats.some((e=>e.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Ne})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=Pe(),{heartbeatsToSend:n,unsentEntries:i}=xe(this._heartbeatsCache.heartbeats),r=(0,s.Uj)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Pe(){const e=new Date;return e.toISOString().substring(0,10)}function xe(e,t=Re){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),Le(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Le(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class De{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.zW)()&&(0,s.eX)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Se(this.app);return(null===e||void 0===e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ke(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ke(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Le(e){return(0,s.Uj)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(e){he(new i.uA("platform-logger",(e=>new R(e)),"PRIVATE")),he(new i.uA("heartbeat",(e=>new Oe(e)),"PRIVATE")),we(O,P,e),we(O,P,"esm2017"),we("fire-js","")}Me("")},5125:function(e,t,n){n.d(t,{h1:function(){return l},uA:function(){return r}});var i=n(6743);class r{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new i.cY;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),i=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[r,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(r);n===e&&s.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3424:function(e,t,n){n.d(t,{$b:function(){return r},Vy:function(){return l}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=[];var r;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(r||(r={}));const s={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=a[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}},2904:function(e,t,n){var i=n(9928),r=n(5125),s=n(6743),o=n(3424);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a=new Map,c={activated:!1,tokenObservers:[]},l={initialized:!1,enabled:!1};function u(e){return a.get(e)||Object.assign({},c)}function h(){return l}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d="https://content-firebaseappcheck.googleapis.com/v1",f="exchangeDebugToken",p={OFFSET_DURATION:3e5,RETRIAL_MIN_WAIT:3e4,RETRIAL_MAX_WAIT:96e4};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class g{constructor(e,t,n,i,r){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=n,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch((()=>{}))}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new s.cY,this.pending.promise.catch((e=>{})),await m(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new s.cY,this.pending.promise.catch((e=>{})),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch((()=>{}))}catch(t){this.retryPolicy(t)?this.process(!1).catch((()=>{})):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const e=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),e}}}function m(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",["throttled"]:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},v=new s.FA("appCheck","AppCheck",_);function y(e){if(!u(e).activated)throw v.create("use-before-activation",{appName:e.name})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function w({url:e,body:t},n){const i={"Content-Type":"application/json"},r=n.getImmediate({optional:!0});if(r){const e=await r.getHeartbeatsHeader();e&&(i["X-Firebase-Client"]=e)}const s={method:"POST",body:JSON.stringify(t),headers:i};let o,a;try{o=await fetch(e,s)}catch(h){throw v.create("fetch-network-error",{originalErrorMessage:null===h||void 0===h?void 0:h.message})}if(200!==o.status)throw v.create("fetch-status-error",{httpStatus:o.status});try{a=await o.json()}catch(h){throw v.create("fetch-parse-error",{originalErrorMessage:null===h||void 0===h?void 0:h.message})}const c=a.ttl.match(/^([\d.]+)(s)$/);if(!c||!c[2]||isNaN(Number(c[1])))throw v.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${a.ttl}`});const l=1e3*Number(c[1]),u=Date.now();return{token:a.token,expireTimeMillis:u+l,issuedAtTimeMillis:u}}function b(e,t){const{projectId:n,appId:i,apiKey:r}=e.options;return{url:`${d}/projects/${n}/apps/${i}:${f}?key=${r}`,body:{debug_token:t}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T="firebase-app-check-database",E=1,C="firebase-app-check-store";let I=null;function S(){return I||(I=new Promise(((e,t)=>{try{const n=indexedDB.open(T,E);n.onsuccess=t=>{e(t.target.result)},n.onerror=e=>{var n;t(v.create("storage-open",{originalErrorMessage:null===(n=e.target.error)||void 0===n?void 0:n.message}))},n.onupgradeneeded=e=>{const t=e.target.result;switch(e.oldVersion){case 0:t.createObjectStore(C,{keyPath:"compositeKey"})}}}catch(n){t(v.create("storage-open",{originalErrorMessage:null===n||void 0===n?void 0:n.message}))}})),I)}function k(e,t){return A(R(e),t)}async function A(e,t){const n=await S(),i=n.transaction(C,"readwrite"),r=i.objectStore(C),s=r.put({compositeKey:e,value:t});return new Promise(((e,t)=>{s.onsuccess=t=>{e()},i.onerror=e=>{var n;t(v.create("storage-set",{originalErrorMessage:null===(n=e.target.error)||void 0===n?void 0:n.message}))}}))}function R(e){return`${e.options.appId}-${e.name}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N=new o.Vy("@firebase/app-check");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){return(0,s.zW)()?k(e,t).catch((e=>{N.warn(`Failed to write token to IndexedDB. Error: ${e}`)})):Promise.resolve()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function P(){const e=h();return e.enabled}async function x(){const e=h();if(e.enabled&&e.token)return e.token.promise;throw Error("\n            Can't get debug token in production mode.\n        ")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const D={error:"UNKNOWN_ERROR"};function L(e){return s.K3.encodeString(JSON.stringify(e),!1)}async function M(e,t=!1){const n=e.app;y(n);const i=u(n);let r,s=i.token;if(s&&!q(s)&&(i.token=void 0,s=void 0),!s){const e=await i.cachedTokenPromise;e&&(q(e)?s=e:await O(n,void 0))}if(!t&&s&&q(s))return{token:s.token};let o,a=!1;if(P()){i.exchangeTokenPromise||(i.exchangeTokenPromise=w(b(n,await x()),e.heartbeatServiceProvider).finally((()=>{i.exchangeTokenPromise=void 0})),a=!0);const t=await i.exchangeTokenPromise;return await O(n,t),i.token=t,{token:t.token}}try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally((()=>{i.exchangeTokenPromise=void 0})),a=!0),s=await u(n).exchangeTokenPromise}catch(c){"appCheck/throttled"===c.code?N.warn(c.message):N.error(c),r=c}return s?r?o=q(s)?{token:s.token,internalError:r}:H(r):(o={token:s.token},i.token=s,await O(n,s)):o=H(r),a&&B(n,o),o}async function F(e){const t=e.app;y(t);const{provider:n}=u(t);if(P()){const n=await x(),{token:i}=await w(b(t,n),e.heartbeatServiceProvider);return{token:i}}{const{token:e}=await n.getToken();return{token:e}}}function U(e,t,n,i){const{app:r}=e,s=u(r),o={next:n,error:i,type:t};if(s.tokenObservers=[...s.tokenObservers,o],s.token&&q(s.token)){const t=s.token;Promise.resolve().then((()=>{n({token:t.token}),j(e)})).catch((()=>{}))}s.cachedTokenPromise.then((()=>j(e)))}function $(e,t){const n=u(e),i=n.tokenObservers.filter((e=>e.next!==t));0===i.length&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function j(e){const{app:t}=e,n=u(t);let i=n.tokenRefresher;i||(i=V(e),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function V(e){const{app:t}=e;return new g((async()=>{const n=u(t);let i;if(i=n.token?await M(e,!0):await M(e),i.error)throw i.error;if(i.internalError)throw i.internalError}),(()=>!0),(()=>{const e=u(t);if(e.token){let t=e.token.issuedAtTimeMillis+.5*(e.token.expireTimeMillis-e.token.issuedAtTimeMillis)+3e5;const n=e.token.expireTimeMillis-3e5;return t=Math.min(t,n),Math.max(0,t-Date.now())}return 0}),p.RETRIAL_MIN_WAIT,p.RETRIAL_MAX_WAIT)}function B(e,t){const n=u(e).tokenObservers;for(const r of n)try{"EXTERNAL"===r.type&&null!=t.error?r.error(t.error):r.next(t)}catch(i){}}function q(e){return e.expireTimeMillis-Date.now()>0}function H(e){return{token:L(D),error:e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=u(this.app);for(const t of e)$(this.app,t.next);return Promise.resolve()}}function W(e,t){return new z(e,t)}function K(e){return{getToken:t=>M(e,t),getLimitedUseToken:()=>F(e),addTokenListener:t=>U(e,"INTERNAL",t),removeTokenListener:t=>$(e.app,t)}}const G="@firebase/app-check",Q="0.8.3";const X="app-check",Y="app-check-internal";function J(){(0,i.om)(new r.uA(X,(e=>{const t=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat");return W(t,n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider(Y).initialize()}))),(0,i.om)(new r.uA(Y,(e=>{const t=e.getProvider("app-check").getImmediate();return K(t)}),"PUBLIC").setInstantiationMode("EXPLICIT")),(0,i.KO)(G,Q)}J()},223:function(e,t,n){n.d(t,{Sx:function(){return i.Sx},Wp:function(){return i.Wp}});var i=n(9928),r="firebase",s="10.11.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,i.KO)(r,s,"app")},6015:function(e,t,n){n.d(t,{HF:function(){return Et},F0:function(){return Yt},hk:function(){return Pi},iM:function(){return Zt},eJ:function(){return Mt},xI:function(){return Qi},Gt:function(){return In},Nu:function(){return Ge},iZ:function(){return Ut},x9:function(){return Ft},df:function(){return $n},CI:function(){return jt}});var i=n(9928),r=n(6743),s=n(3424);function o(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var a=n(5125);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=c,u=new r.FA("auth","Firebase",c()),h=new s.Vy("@firebase/auth");function d(e,...t){h.logLevel<=s.$b.WARN&&h.warn(`Auth (${i.MF}): ${e}`,...t)}function f(e,...t){h.logLevel<=s.$b.ERROR&&h.error(`Auth (${i.MF}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e,...t){throw y(e,...t)}function g(e,...t){return y(e,...t)}function m(e,t,n){const i=Object.assign(Object.assign({},l()),{[t]:n}),s=new r.FA("auth","Firebase",i);return s.create(t,{appName:e.name})}function _(e){return m(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function v(e,t,n){const i=n;if(!(t instanceof i))throw i.name!==t.constructor.name&&p(e,"argument-error"),m(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function y(e,...t){if("string"!==typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return u.create(e,...t)}function w(e,t,...n){if(!e)throw y(t,...n)}function b(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function T(e,t){e||b(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function C(){return"http:"===I()||"https:"===I()}function I(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(C()||(0,r.sr)()||"connection"in navigator))||navigator.onLine}function k(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e,t){this.shortDelay=e,this.longDelay=t,T(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.jZ)()||(0,r.lV)()}get(){return S()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e,t){T(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["INVALID_LOGIN_CREDENTIALS"]:"invalid-credential",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},P=new A(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function D(e,t,n,i,s={}){return L(e,s,(async()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});const a=(0,r.Am)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),N.fetch()(F(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))}))}async function L(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},O),t);try{const t=new $(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw j(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw j(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw j(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw j(e,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(e,a,o);p(e,a)}}catch(s){if(s instanceof r.g)throw s;p(e,"network-request-failed",{message:String(s)})}}async function M(e,t,n,i,r={}){const s=await D(e,t,n,i,r);return"mfaPendingCredential"in s&&p(e,"multi-factor-auth-required",{_serverResponse:s}),s}function F(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?R(e.config,r):`${e.config.apiScheme}://${r}`}function U(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ${constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(g(this.auth,"network-request-failed"))),P.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function j(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=g(e,t,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e){return void 0!==e&&void 0!==e.enterprise}class B{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return U(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(e,t){return D(e,"GET","/v2/recaptchaConfig",x(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e,t){return D(e,"POST","/v1/accounts:delete",t)}async function z(e,t){return D(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,t=!1){const n=(0,r.Ku)(e),i=await n.getIdToken(t),s=Q(i);w(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:W(G(s.auth_time)),issuedAtTime:W(G(s.iat)),expirationTime:W(G(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function G(e){return 1e3*Number(e)}function Q(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.u)(n);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(s){return f("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function X(e){const t=Q(e);return w(t,"internal-error"),w("undefined"!==typeof t.exp,"internal-error"),w("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r.g&&J(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function J({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=W(this.lastLoginAt),this.creationTime=W(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function te(e){var t;const n=e.auth,i=await e.getIdToken(),r=await Y(e,z(n,{idToken:i}));w(null===r||void 0===r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?re(s.providerUserInfo):[],a=ie(e.providerData,o),c=e.isAnonymous,l=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!c&&l,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ee(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function ne(e){const t=(0,r.Ku)(e);await te(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ie(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function re(e){return e.map((e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function se(e,t){const n=await L(e,{},(async()=>{const n=(0,r.Am)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=F(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",N.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function oe(e,t){return D(e,"POST","/v2/accounts:revokeToken",x(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){w(e.idToken,"internal-error"),w("undefined"!==typeof e.idToken,"internal-error"),w("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):X(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){w(0!==e.length,"internal-error");const t=X(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(w(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await se(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new ae;return n&&(w("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(w("string"===typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(w("number"===typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ae,this.toJSON())}_performRefresh(){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,t){w("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class le{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Z(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ee(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Y(this,this.stsTokenManager.getToken(this.auth,e));return w(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return K(this,e)}reload(){return ne(this)}_assign(e){this!==e&&(w(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new le(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await te(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,i.xZ)(this.auth.app))return Promise.reject(_(this.auth));const e=await this.getIdToken();return await Y(this,H(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,_=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:y,isAnonymous:b,providerData:T,stsTokenManager:E}=t;w(v&&E,e,"internal-error");const C=ae.fromJSON(this.name,E);w("string"===typeof v,e,"internal-error"),ce(u,e.name),ce(h,e.name),w("boolean"===typeof y,e,"internal-error"),w("boolean"===typeof b,e,"internal-error"),ce(d,e.name),ce(f,e.name),ce(p,e.name),ce(g,e.name),ce(m,e.name),ce(_,e.name);const I=new le({uid:v,auth:e,email:h,emailVerified:y,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:C,createdAt:m,lastLoginAt:_});return T&&Array.isArray(T)&&(I.providerData=T.map((e=>Object.assign({},e)))),g&&(I._redirectEventId=g),I}static async _fromIdTokenResponse(e,t,n=!1){const i=new ae;i.updateFromServerResponse(t);const r=new le({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await te(r),r}static async _fromGetAccountInfoResponse(e,t,n){const i=t.users[0];w(void 0!==i.localId,"internal-error");const r=void 0!==i.providerUserInfo?re(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(null===r||void 0===r?void 0:r.length),o=new ae;o.updateFromIdToken(n);const a=new le({uid:i.localId,auth:e,stsTokenManager:o,isAnonymous:s}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new ee(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(null===r||void 0===r?void 0:r.length)};return Object.assign(a,c),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue=new Map;function he(e){T(e instanceof Function,"Expected a class definition");let t=ue.get(e);return t?(T(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ue.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}de.type="NONE";const fe=de;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(e,t,n){return`firebase:${e}:${t}:${n}`}class ge{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=pe(this.userKey,i.apiKey,r),this.fullPersistenceKey=pe("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?le._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ge(he(fe),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||he(fe);const s=pe(n,e.config.apiKey,e.name);let o=null;for(const l of t)try{const t=await l._get(s);if(t){const n=le._fromJSON(e,t);l!==r&&(o=n),r=l;break}}catch(c){}const a=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(c){}}))),new ge(r,e,n)):new ge(r,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(we(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(_e(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Te(t))return"Blackberry";if(Ee(t))return"Webos";if(ve(t))return"Safari";if((t.includes("chrome/")||ye(t))&&!t.includes("edge/"))return"Chrome";if(be(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function _e(e=(0,r.ZQ)()){return/firefox\//i.test(e)}function ve(e=(0,r.ZQ)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ye(e=(0,r.ZQ)()){return/crios\//i.test(e)}function we(e=(0,r.ZQ)()){return/iemobile/i.test(e)}function be(e=(0,r.ZQ)()){return/android/i.test(e)}function Te(e=(0,r.ZQ)()){return/blackberry/i.test(e)}function Ee(e=(0,r.ZQ)()){return/webos/i.test(e)}function Ce(e=(0,r.ZQ)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ie(e=(0,r.ZQ)()){var t;return Ce(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Se(){return(0,r.lT)()&&10===document.documentMode}function ke(e=(0,r.ZQ)()){return Ce(e)||be(e)||Ee(e)||Te(e)||/windows phone/i.test(e)||we(e)}function Ae(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(e,t=[]){let n;switch(e){case"Browser":n=me((0,r.ZQ)());break;case"Worker":n=`${me((0,r.ZQ)())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.MF}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{const i=e(t);n(i)}catch(r){i(r)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oe(e,t={}){return D(e,"GET","/v2/passwordPolicy",x(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe=6;class xe{constructor(e){var t,n,i,r;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:Pe,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(i=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==i?i:"",this.forceUpgradeOnSignin=null!==(r=e.forceUpgradeOnSignin)&&void 0!==r&&r,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,i,r,s,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(i=a.containsLowercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(r=a.containsUppercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Me(this),this.idTokenSubscription=new Me(this),this.beforeStateQueue=new Ne(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=he(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await ge.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(r){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await z(this,{idToken:e}),n=await le._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if((0,i.xZ)(this.app)){const e=this.app.settings.authIdToken;return e?new Promise((t=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(e).then(t,t)))})):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==i||!(null===o||void 0===o?void 0:o.user)||(r=o.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(o)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await te(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=k()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if((0,i.xZ)(this.app))return Promise.reject(_(this));const t=e?(0,r.Ku)(e):null;return t&&w(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&w(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(0,i.xZ)(this.app)?Promise.reject(_(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return(0,i.xZ)(this.app)?Promise.reject(_(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(he(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Oe(this),t=new xe(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.FA("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};null!=this.tenantId&&(n.tenantId=this.tenantId),await oe(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&he(e)||this._popupRedirectResolver;w(t,this,"argument-error"),this.redirectPersistenceManager=await ge.create(this,[he(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"===typeof t?t:t.next.bind(t);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(w(o,this,"internal-error"),o.then((()=>{s||r(this.currentUser)})),"function"===typeof t){const r=e.addObserver(t,n,i);return()=>{s=!0,r()}}{const n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Re(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&d(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function Le(e){return(0,r.Ku)(e)}class Me{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.tD)((e=>this.observer=e))}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fe={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ue(e){Fe=e}function $e(e){return Fe.loadJS(e)}function je(){return Fe.recaptchaEnterpriseScript}function Ve(){return Fe.gapiScript}function Be(e){return`__${e}${Math.floor(1e6*Math.random())}`}const qe="recaptcha-enterprise",He="NO_RECAPTCHA";class ze{constructor(e){this.type=qe,this.auth=Le(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{q(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((i=>{if(void 0!==i.recaptchaKey){const n=new B(i);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function i(t,n,i){const r=window.grecaptcha;V(r)?r.enterprise.ready((()=>{r.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(He)}))})):i(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,r)=>{n(this.auth).then((n=>{if(!t&&V(window.grecaptcha))i(n,e,r);else{if("undefined"===typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));let t=je();0!==t.length&&(t+=n),$e(t).then((()=>{i(n,e,r)})).catch((e=>{r(e)}))}})).catch((e=>{r(e)}))}))}}async function We(e,t,n,i=!1){const r=new ze(e);let s;try{s=await r.verify(n)}catch(a){s=await r.verify(n,!0)}const o=Object.assign({},t);return i?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ke(e,t,n,i){var r;if(null===(r=e._getRecaptchaConfig())||void 0===r?void 0:r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await We(e,t,n,"getOobCode"===n);return i(e,r)}return i(e,t).catch((async r=>{if("auth/missing-recaptcha-token"===r.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const r=await We(e,t,n,"getOobCode"===n);return i(e,r)}return Promise.reject(r)}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ge(e,t){const n=(0,i.j6)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if((0,r.bD)(i,null!==t&&void 0!==t?t:{}))return e;p(e,"already-initialized")}const s=n.initialize({options:t});return s}function Qe(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(he);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null===t||void 0===t?void 0:t.popupRedirectResolver)}function Xe(e,t,n){const i=Le(e);w(i._canInitEmulator,i,"emulator-config-failed"),w(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Ye(t),{host:o,port:a}=Je(t),c=null===a?"":`:${a}`;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||et()}function Ye(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Je(e){const t=Ye(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const e=r[1];return{host:e,port:Ze(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:Ze(t)}}}function Ze(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function et(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return b("not implemented")}_getIdTokenResponse(e){return b("not implemented")}_linkToIdToken(e,t){return b("not implemented")}_getReauthenticationResolver(e){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(e,t){return D(e,"POST","/v1/accounts:signUp",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function it(e,t){return M(e,"POST","/v1/accounts:signInWithPassword",x(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function rt(e,t){return M(e,"POST","/v1/accounts:signInWithEmailLink",x(e,t))}async function st(e,t){return M(e,"POST","/v1/accounts:signInWithEmailLink",x(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends tt{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new ot(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new ot(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ke(e,t,"signInWithPassword",it);case"emailLink":return rt(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ke(e,n,"signUpPassword",nt);case"emailLink":return st(e,{idToken:t,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function at(e,t){return M(e,"POST","/v1/accounts:signInWithIdp",x(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct="http://localhost";class lt extends tt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new lt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=o(t,["providerId","signInMethod"]);if(!n||!i)return null;const s=new lt(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return at(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,at(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,at(e,t)}buildRequest(){const e={requestUri:ct,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.Am)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ut(e,t){return D(e,"POST","/v1/accounts:sendVerificationCode",x(e,t))}async function ht(e,t){return M(e,"POST","/v1/accounts:signInWithPhoneNumber",x(e,t))}async function dt(e,t){const n=await M(e,"POST","/v1/accounts:signInWithPhoneNumber",x(e,t));if(n.temporaryProof)throw j(e,"account-exists-with-different-credential",n);return n}const ft={["USER_NOT_FOUND"]:"user-not-found"};async function pt(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return M(e,"POST","/v1/accounts:signInWithPhoneNumber",x(e,n),ft)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt extends tt{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new gt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new gt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return ht(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return dt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return pt(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new gt({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _t(e){const t=(0,r.I9)((0,r.hp)(e))["link"],n=t?(0,r.I9)((0,r.hp)(t))["deep_link_id"]:null,i=(0,r.I9)((0,r.hp)(e))["deep_link_id"],s=i?(0,r.I9)((0,r.hp)(i))["link"]:null;return s||i||n||t||e}class vt{constructor(e){var t,n,i,s,o,a;const c=(0,r.I9)((0,r.hp)(e)),l=null!==(t=c["apiKey"])&&void 0!==t?t:null,u=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=mt(null!==(i=c["mode"])&&void 0!==i?i:null);w(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=_t(e);try{return new vt(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yt{constructor(){this.providerId=yt.PROVIDER_ID}static credential(e,t){return ot._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=vt.parseLink(t);return w(n,"argument-error"),ot._fromEmailAndCode(e,n.code,n.tenantId)}}yt.PROVIDER_ID="password",yt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",yt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends wt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tt extends bt{constructor(){super("facebook.com")}static credential(e){return lt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Tt.credential(e.oauthAccessToken)}catch(t){return null}}}Tt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Tt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Et extends bt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return lt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Et.credential(t,n)}catch(i){return null}}}Et.GOOGLE_SIGN_IN_METHOD="google.com",Et.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ct extends bt{constructor(){super("github.com")}static credential(e){return lt._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ct.credential(e.oauthAccessToken)}catch(t){return null}}}Ct.GITHUB_SIGN_IN_METHOD="github.com",Ct.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class It extends bt{constructor(){super("twitter.com")}static credential(e,t){return lt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return It.credential(t,n)}catch(i){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function St(e,t){return M(e,"POST","/v1/accounts:signUp",x(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It.TWITTER_SIGN_IN_METHOD="twitter.com",It.PROVIDER_ID="twitter.com";class kt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const r=await le._fromIdTokenResponse(e,n,i),s=At(n),o=new kt({user:r,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=At(n);return new kt({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function At(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rt extends r.g{constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Rt.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Rt(e,t,n,i)}}function Nt(e,t,n,i){const r="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return r.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Rt._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ot(e,t,n=!1){const i=await Y(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return kt._forOperation(e,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Pt(e,t,n=!1){const{auth:r}=e;if((0,i.xZ)(r.app))return Promise.reject(_(r));const s="reauthenticate";try{const i=await Y(e,Nt(r,s,t,e),n);w(i.idToken,r,"internal-error");const o=Q(i.idToken);w(o,r,"internal-error");const{sub:a}=o;return w(e.uid===a,r,"user-mismatch"),kt._forOperation(e,s,i)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&p(r,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xt(e,t,n=!1){if((0,i.xZ)(e.app))return Promise.reject(_(e));const r="signIn",s=await Nt(e,r,t),o=await kt._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(o.user),o}async function Dt(e,t){return xt(Le(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Lt(e){const t=Le(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Mt(e,t,n){if((0,i.xZ)(e.app))return Promise.reject(_(e));const r=Le(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},o=Ke(r,s,"signUpPassword",St),a=await o.catch((t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Lt(e),t})),c=await kt._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function Ft(e,t,n){return(0,i.xZ)(e.app)?Promise.reject(_(e)):Dt((0,r.Ku)(e),yt.credential(t,n)).catch((async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Lt(e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(e,t,n,i){return(0,r.Ku)(e).onIdTokenChanged(t,n,i)}function $t(e,t,n){return(0,r.Ku)(e).beforeAuthStateChanged(t,n)}function jt(e){return(0,r.Ku)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Vt(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:start",x(e,t))}function Bt(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:finalize",x(e,t))}function qt(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:start",x(e,t))}function Ht(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:finalize",x(e,t))}new WeakMap;const zt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(zt,"1"),this.storage.removeItem(zt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(){const e=(0,r.ZQ)();return ve(e)||Ce(e)}const Gt=1e3,Qt=10;class Xt extends Wt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Kt()&&Ae(),this.fallbackToPolling=ke(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);Se()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Qt):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Gt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xt.type="LOCAL";const Yt=Xt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends Wt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Jt.type="SESSION";const Zt=Jt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new tn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async e=>e(t.origin,r))),a=await en(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nn(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn.receivers=[];class rn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const c=nn("",20);i.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(l),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(){return window}function on(e){sn().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(){return"undefined"!==typeof sn()["WorkerGlobalScope"]&&"function"===typeof sn()["importScripts"]}async function cn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function ln(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function un(){return an()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn="firebaseLocalStorageDb",dn=1,fn="firebaseLocalStorage",pn="fbase_key";class gn{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function mn(e,t){return e.transaction([fn],t?"readwrite":"readonly").objectStore(fn)}function _n(){const e=indexedDB.deleteDatabase(hn);return new gn(e).toPromise()}function vn(){const e=indexedDB.open(hn,dn);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(fn,{keyPath:pn})}catch(i){n(i)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(fn)?t(n):(n.close(),await _n(),t(await vn()))}))}))}async function yn(e,t,n){const i=mn(e,!0).put({[pn]:t,value:n});return new gn(i).toPromise()}async function wn(e,t){const n=mn(e,!1).get(t),i=await new gn(n).toPromise();return void 0===i?null:i.value}function bn(e,t){const n=mn(e,!0).delete(t);return new gn(n).toPromise()}const Tn=800,En=3;class Cn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await vn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>En)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return an()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tn._getInstance(un()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await cn(),!this.activeServiceWorker)return;this.sender=new rn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&ln()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vn();return await yn(e,zt,"1"),await bn(e,zt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>yn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>wn(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>bn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=mn(e,!1).getAll();return new gn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Tn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Cn.type="LOCAL";const In=Cn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(e,t){return D(e,"POST","/v2/accounts/mfaSignIn:start",x(e,t))}function kn(e,t){return D(e,"POST","/v2/accounts/mfaSignIn:finalize",x(e,t))}function An(e,t){return D(e,"POST","/v2/accounts/mfaSignIn:finalize",x(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Be("rcb"),new A(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Rn="recaptcha";async function Nn(e,t,n){var i;const r=await n.verify();try{let s;if(w("string"===typeof r,e,"argument-error"),w(n.type===Rn,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){w("enroll"===t.type,e,"internal-error");const n=await Vt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{w("signin"===t.type,e,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;w(n,e,"missing-multi-factor-info");const o=await Sn(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await ut(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class On{constructor(e){this.providerId=On.PROVIDER_ID,this.auth=Le(e)}verifyPhoneNumber(e,t){return Nn(this.auth,e,(0,r.Ku)(t))}static credential(e,t){return gt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return On.credentialFromTaggedObject(t)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?gt._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Pn(e,t){return t?he(t):(w(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */On.PROVIDER_ID="phone",On.PHONE_SIGN_IN_METHOD="phone";class xn extends tt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return at(e,this._buildIdpRequest())}_linkToIdToken(e,t){return at(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return at(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Dn(e){return xt(e.auth,new xn(e),e.bypassAuthState)}function Ln(e){const{auth:t,user:n}=e;return w(n,t,"internal-error"),Pt(n,new xn(e),e.bypassAuthState)}async function Mn(e){const{auth:t,user:n}=e;return w(n,t,"internal-error"),Ot(n,new xn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Dn;case"linkViaPopup":case"linkViaRedirect":return Mn;case"reauthViaPopup":case"reauthViaRedirect":return Ln;default:p(this.auth,"internal-error")}}resolve(e){T(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){T(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=new A(2e3,1e4);async function $n(e,t,n){if((0,i.xZ)(e.app))return Promise.reject(g(e,"operation-not-supported-in-this-environment"));const r=Le(e);v(e,t,wt);const s=Pn(r,n),o=new jn(r,"signInViaPopup",t,s);return o.executeNotNull()}class jn extends Fn{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,jn.currentPopupAction&&jn.currentPopupAction.cancel(),jn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return w(e,this.auth,"internal-error"),e}async onExecution(){T(1===this.filter.length,"Popup operations only handle one event");const e=nn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(g(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(g(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(g(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Un.get())};e()}}jn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Vn="pendingRedirect",Bn=new Map;class qn extends Fn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Bn.get(this.auth._key());if(!e){try{const t=await Hn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Bn.set(this.auth._key(),e)}return this.bypassAuthState||Bn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Hn(e,t){const n=Kn(t),i=Wn(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}function zn(e,t){Bn.set(e._key(),t)}function Wn(e){return he(e._redirectPersistence)}function Kn(e){return pe(Vn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gn(e,t,n=!1){if((0,i.xZ)(e.app))return Promise.reject(_(e));const r=Le(e),s=Pn(r,t),o=new qn(r,s,n),a=await o.execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qn=6e5;class Xn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Zn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Jn(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(g(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Qn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yn(e))}saveEventToCache(e){this.cachedEventUids.add(Yn(e)),this.lastProcessedEventTime=Date.now()}}function Yn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Jn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Zn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ei(e,t={}){return D(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ni=/^https?/;async function ii(e){if(e.config.emulator)return;const{authorizedDomains:t}=await ei(e);for(const i of t)try{if(ri(i))return}catch(n){}p(e,"unauthorized-domain")}function ri(e){const t=E(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!ni.test(n))return!1;if(ti.test(e))return i===e;const r=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+r+"|"+r+")$","i");return s.test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=new A(3e4,6e4);function oi(){const e=sn().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function ai(e){return new Promise(((t,n)=>{var i,r,s;function o(){oi(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{oi(),n(g(e,"network-request-failed"))},timeout:si.get()})}if(null===(r=null===(i=sn().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=sn().gapi)||void 0===s?void 0:s.load)){const t=Be("iframefcb");return sn()[t]=()=>{gapi.load?o():n(g(e,"network-request-failed"))},$e(`${Ve()}?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw ci=null,e}))}let ci=null;function li(e){return ci=ci||ai(e),ci}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=new A(5e3,15e3),hi="__/auth/iframe",di="emulator/auth/iframe",fi={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pi=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gi(e){const t=e.config;w(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?R(t,di):`https://${e.config.authDomain}/${hi}`,s={apiKey:t.apiKey,appName:e.name,v:i.MF},o=pi.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,r.Am)(s).slice(1)}`}async function mi(e){const t=await li(e),n=sn().gapi;return w(n,e,"internal-error"),t.open({where:document.body,url:gi(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fi,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=g(e,"network-request-failed"),s=sn().setTimeout((()=>{i(r)}),ui.get());function o(){sn().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{i(r)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vi=500,yi=600,wi="_blank",bi="http://localhost";class Ti{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Ei(e,t,n,i=vi,s=yi){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const l=Object.assign(Object.assign({},_i),{width:i.toString(),height:s.toString(),top:o,left:a}),u=(0,r.ZQ)().toLowerCase();n&&(c=ye(u)?wi:n),_e(u)&&(t=t||bi,l.scrollbars="yes");const h=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(Ie(u)&&"_self"!==c)return Ci(t||"",c),new Ti(null);const d=window.open(t||"",c,h);w(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Ti(d)}function Ci(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii="__/auth/handler",Si="emulator/auth/handler",ki=encodeURIComponent("fac");async function Ai(e,t,n,s,o,a){w(e.config.authDomain,e,"auth-domain-config-required"),w(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:i.MF,eventId:o};if(t instanceof wt){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,r.Im)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof bt){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const l=c;for(const i of Object.keys(l))void 0===l[i]&&delete l[i];const u=await e._getAppCheckToken(),h=u?`#${ki}=${encodeURIComponent(u)}`:"";return`${Ri(e)}?${(0,r.Am)(l).slice(1)}${h}`}function Ri({config:e}){return e.emulator?R(e,Si):`https://${e.authDomain}/${Ii}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni="webStorageSupport";class Oi{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zt,this._completeRedirectFn=Gn,this._overrideRedirectResult=zn}async _openPopup(e,t,n,i){var r;T(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");const s=await Ai(e,t,n,E(),i);return Ei(e,s,nn())}async _openRedirect(e,t,n,i){await this._originValidation(e);const r=await Ai(e,t,n,E(),i);return on(r),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(T(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await mi(e),n=new Xn(e);return t.register("authEvent",(t=>{w(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const i=n.onEvent(t.authEvent);return{status:i?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Ni,{type:Ni},(n=>{var i;const r=null===(i=null===n||void 0===n?void 0:n[0])||void 0===i?void 0:i[Ni];void 0!==r&&t(!!r),p(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ii(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ke()||ve()||Ce()}}const Pi=Oi;class xi{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return b("unexpected MultiFactorSessionType")}}}class Di extends xi{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Di(e)}_finalizeEnroll(e,t,n){return Bt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return kn(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Li{constructor(){}static assertion(e){return Di._fromCredential(e)}}Li.FACTOR_ID="phone";class Mi{static assertionForEnrollment(e,t){return Fi._fromSecret(e,t)}static assertionForSignIn(e,t){return Fi._fromEnrollmentId(e,t)}static async generateSecret(e){var t;const n=e;w("undefined"!==typeof(null===(t=n.user)||void 0===t?void 0:t.auth),"internal-error");const i=await qt(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return Ui._fromStartTotpMfaEnrollmentResponse(i,n.user.auth)}}Mi.FACTOR_ID="totp";class Fi extends xi{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new Fi(t,void 0,e)}static _fromEnrollmentId(e,t){return new Fi(t,e)}async _finalizeEnroll(e,t,n){return w("undefined"!==typeof this.secret,e,"argument-error"),Ht(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){w(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return An(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Ui{constructor(e,t,n,i,r,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=r}static _fromStartTotpMfaEnrollmentResponse(e,t){return new Ui(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let i=!1;return($i(e)||$i(t))&&(i=!0),i&&($i(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),$i(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function $i(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var ji="@firebase/auth",Vi="1.7.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bi{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Hi(e){(0,i.om)(new a.uA("auth",((t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;w(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Re(e)},l=new De(i,r,s,c);return Qe(l,n),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const i=e.getProvider("auth-internal");i.initialize()}))),(0,i.om)(new a.uA("auth-internal",(e=>{const t=Le(e.getProvider("auth").getImmediate());return(e=>new Bi(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KO)(ji,Vi,qi(e)),(0,i.KO)(ji,Vi,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=300,Wi=(0,r.XA)("authIdTokenMaxAge")||zi;let Ki=null;const Gi=e=>async t=>{const n=t&&await t.getIdTokenResult(),i=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Wi)return;const r=null===n||void 0===n?void 0:n.token;Ki!==r&&(Ki=r,await fetch(e,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Qi(e=(0,i.Sx)()){const t=(0,i.j6)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Ge(e,{popupRedirectResolver:Pi,persistence:[In,Yt,Zt]}),s=(0,r.XA)("authTokenSyncURL");if(s&&"boolean"===typeof isSecureContext&&isSecureContext){const e=new URL(s,location.origin);if(location.origin===e.origin){const t=Gi(e.toString());$t(n,t,(()=>t(n.currentUser))),Ut(n,(e=>t(e)))}}const o=(0,r.Tj)("auth");return o&&Xe(n,`http://${o}`),n}function Xi(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}Ue({loadJS(e){return new Promise(((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=g("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",Xi().appendChild(i)}))},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Hi("Browser")},6430:function(e,t,n){n.d(t,{Ci:function(){return Eh},Dc:function(){return br},C3:function(){return dd},hq:function(){return hd},rJ:function(){return fh},H9:function(){return ph},x7:function(){return rd},GG:function(){return od},aU:function(){return _h},BN:function(){return ad},mZ:function(){return cd}});var i,r=n(9928),s=n(5125),o=n(3424),a=n(6743),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},l={},u=u||{},h=c||self;function d(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function f(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function p(e){return Object.prototype.hasOwnProperty.call(e,g)&&e[g]||(e[g]=++m)}var g="closure_uid_"+(1e9*Math.random()>>>0),m=0;function _(e,t,n){return e.call.apply(e.bind,arguments)}function v(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function y(e,t,n){return y=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?_:v,y.apply(null,arguments)}function w(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function b(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[n].apply(e,r)}}function T(){this.s=this.s,this.o=this.o}var E=0;T.prototype.s=!1,T.prototype.sa=function(){this.s||(this.s=!0,this.N(),0==E)||p(this)},T.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const C=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function I(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function S(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(d(t)){const n=e.length||0,i=t.length||0;e.length=n+i;for(let r=0;r<i;r++)e[n+r]=t[r]}else e.push(t)}}function k(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};h.addEventListener("test",e,t),h.removeEventListener("test",e,t)}catch(n){}return e}();function R(e){return/^[\s\xa0]*$/.test(e)}function N(){var e=h.navigator;return e&&(e=e.userAgent)?e:""}function O(e){return-1!=N().indexOf(e)}function P(e){return P[" "](e),e}function x(e,t){var n=wi;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}P[" "]=function(){};var D,L,M=O("Opera"),F=O("Trident")||O("MSIE"),U=O("Edge"),$=U||F,j=O("Gecko")&&!(-1!=N().toLowerCase().indexOf("webkit")&&!O("Edge"))&&!(O("Trident")||O("MSIE"))&&!O("Edge"),V=-1!=N().toLowerCase().indexOf("webkit")&&!O("Edge");function B(){var e=h.document;return e?e.documentMode:void 0}e:{var q="",H=function(){var e=N();return j?/rv:([^\);]+)(\)|;)/.exec(e):U?/Edge\/([\d\.]+)/.exec(e):F?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):V?/WebKit\/(\S+)/.exec(e):M?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(H&&(q=H?H[1]:""),F){var z=B();if(null!=z&&z>parseFloat(q)){D=String(z);break e}}D=q}if(h.document&&F){var W=B();L=W||(parseInt(D,10)||void 0)}else L=void 0;var K=L;function G(e,t){if(k.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(j){e:{try{P(t.nodeName);var r=!0;break e}catch(s){}r=!1}r||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:Q[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&G.$.h.call(this)}}b(G,k);var Q={2:"touch",3:"pen",4:"mouse"};G.prototype.h=function(){G.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var X="closure_listenable_"+(1e6*Math.random()|0),Y=0;function J(e,t,n,i,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.la=r,this.key=++Y,this.fa=this.ia=!1}function Z(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function ee(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function te(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function ne(e){const t={};for(const n in e)t[n]=e[n];return t}const ie="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function re(e,t){let n,i;for(let r=1;r<arguments.length;r++){for(n in i=arguments[r],i)e[n]=i[n];for(let t=0;t<ie.length;t++)n=ie[t],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function se(e){this.src=e,this.g={},this.h=0}function oe(e,t){var n=t.type;if(n in e.g){var i,r=e.g[n],s=C(r,t);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Z(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ae(e,t,n,i){for(var r=0;r<e.length;++r){var s=e[r];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==i)return r}return-1}se.prototype.add=function(e,t,n,i,r){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=ae(e,t,i,r);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new J(t,this.src,s,!!i,r),t.ia=n,e.push(t)),t};var ce="closure_lm_"+(1e6*Math.random()|0),le={};function ue(e,t,n,i,r){if(i&&i.once)return fe(e,t,n,i,r);if(Array.isArray(t)){for(var s=0;s<t.length;s++)ue(e,t[s],n,i,r);return null}return n=we(n),e&&e[X]?e.O(t,n,f(i)?!!i.capture:!!i,r):he(e,t,n,!1,i,r)}function he(e,t,n,i,r,s){if(!t)throw Error("Invalid event type");var o=f(r)?!!r.capture:!!r,a=ve(e);if(a||(e[ce]=a=new se(e)),n=a.add(t,n,i,o,s),n.proxy)return n;if(i=de(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)A||(r=o),void 0===r&&(r=!1),e.addEventListener(t.toString(),i,r);else if(e.attachEvent)e.attachEvent(me(t.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return n}function de(){function e(n){return t.call(e.src,e.listener,n)}const t=_e;return e}function fe(e,t,n,i,r){if(Array.isArray(t)){for(var s=0;s<t.length;s++)fe(e,t[s],n,i,r);return null}return n=we(n),e&&e[X]?e.P(t,n,f(i)?!!i.capture:!!i,r):he(e,t,n,!0,i,r)}function pe(e,t,n,i,r){if(Array.isArray(t))for(var s=0;s<t.length;s++)pe(e,t[s],n,i,r);else i=f(i)?!!i.capture:!!i,n=we(n),e&&e[X]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=ae(s,n,i,r),-1<n&&(Z(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=ve(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ae(t,n,i,r)),(n=-1<e?t[e]:null)&&ge(n))}function ge(e){if("number"!==typeof e&&e&&!e.fa){var t=e.src;if(t&&t[X])oe(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(me(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=ve(t))?(oe(n,e),0==n.h&&(n.src=null,t[ce]=null)):Z(e)}}}function me(e){return e in le?le[e]:le[e]="on"+e}function _e(e,t){if(e.fa)e=!0;else{t=new G(t,this);var n=e.listener,i=e.la||e.src;e.ia&&ge(e),e=n.call(i,t)}return e}function ve(e){return e=e[ce],e instanceof se?e:null}var ye="__closure_events_fn_"+(1e9*Math.random()>>>0);function we(e){return"function"===typeof e?e:(e[ye]||(e[ye]=function(t){return e.handleEvent(t)}),e[ye])}function be(){T.call(this),this.i=new se(this),this.S=this,this.J=null}function Te(e,t){var n,i=e.J;if(i)for(n=[];i;i=i.J)n.push(i);if(e=e.S,i=t.type||t,"string"===typeof t)t=new k(t,e);else if(t instanceof k)t.target=t.target||e;else{var r=t;t=new k(i,e),re(t,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];r=Ee(o,i,!0,t)&&r}if(o=t.g=e,r=Ee(o,i,!0,t)&&r,r=Ee(o,i,!1,t)&&r,n)for(s=0;s<n.length;s++)o=t.g=n[s],r=Ee(o,i,!1,t)&&r}function Ee(e,t,n,i){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&oe(e.i,o),r=!1!==a.call(c,i)&&r}}return r&&!i.defaultPrevented}b(be,T),be.prototype[X]=!0,be.prototype.removeEventListener=function(e,t,n,i){pe(this,e,t,n,i)},be.prototype.N=function(){if(be.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Z(n[i]);delete t.g[e],t.h--}}this.J=null},be.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},be.prototype.P=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};var Ce=h.JSON.stringify;class Ie{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Se(){var e=De;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class ke{constructor(){this.h=this.g=null}add(e,t){const n=Ae.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Ae=new Ie((()=>new Re),(e=>e.reset()));class Re{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Ne(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Oe(e){h.setTimeout((()=>{throw e}),0)}let Pe,xe=!1,De=new ke,Le=()=>{const e=h.Promise.resolve(void 0);Pe=()=>{e.then(Me)}};var Me=()=>{for(var e;e=Se();){try{e.h.call(e.g)}catch(n){Oe(n)}var t=Ae;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}xe=!1};function Fe(e,t){be.call(this),this.h=e||1,this.g=t||h,this.j=y(this.qb,this),this.l=Date.now()}function Ue(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function $e(e,t,n){if("function"===typeof e)n&&(e=y(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=y(e.handleEvent,e)}return 2147483647<Number(t)?-1:h.setTimeout(e,t||0)}function je(e){e.g=$e((()=>{e.g=null,e.i&&(e.i=!1,je(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}b(Fe,be),i=Fe.prototype,i.ga=!1,i.T=null,i.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Te(this,"tick"),this.ga&&(Ue(this),this.start()))}},i.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},i.N=function(){Fe.$.N.call(this),Ue(this),delete this.g};class Ve extends T{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:je(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Be(e){T.call(this),this.h=e,this.g={}}b(Be,T);var qe=[];function He(e,t,n,i){Array.isArray(n)||(n&&(qe[0]=n.toString()),n=qe);for(var r=0;r<n.length;r++){var s=ue(t,n[r],i||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function ze(e){ee(e.g,(function(e,t){this.g.hasOwnProperty(t)&&ge(e)}),e),e.g={}}function We(){this.g=!0}function Ke(e,t,n,i,r,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+t+"\n"+n+"\n"+o}))}function Ge(e,t,n,i,r,s,o){e.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function Qe(e,t,n,i){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+Ye(e,n)+(i?" "+i:"")}))}function Xe(e,t){e.info((function(){return"TIMEOUT: "+t}))}function Ye(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return Ce(n)}catch(a){return t}}Be.prototype.N=function(){Be.$.N.call(this),ze(this)},Be.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},We.prototype.Ea=function(){this.g=!1},We.prototype.info=function(){};var Je={},Ze=null;function et(){return Ze=Ze||new be}function tt(e){k.call(this,Je.Ta,e)}function nt(e){const t=et();Te(t,new tt(t))}function it(e,t){k.call(this,Je.STAT_EVENT,e),this.stat=t}function rt(e){const t=et();Te(t,new it(t,e))}function st(e,t){k.call(this,Je.Ua,e),this.size=t}function ot(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){e()}),t)}Je.Ta="serverreachability",b(tt,k),Je.STAT_EVENT="statevent",b(it,k),Je.Ua="timingevent",b(st,k);var at={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ct={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function lt(){}function ut(e){return e.h||(e.h=e.i())}function ht(){}lt.prototype.h=null;var dt,ft={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function pt(){k.call(this,"d")}function gt(){k.call(this,"c")}function mt(){}function _t(e,t,n,i){this.l=e,this.j=t,this.m=n,this.W=i||1,this.U=new Be(this),this.P=yt,e=$?125:void 0,this.V=new Fe(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new vt}function vt(){this.i=null,this.g="",this.h=!1}b(pt,k),b(gt,k),b(mt,lt),mt.prototype.g=function(){return new XMLHttpRequest},mt.prototype.i=function(){return{}},dt=new mt;var yt=45e3,wt={},bt={};function Tt(e,t,n){e.L=1,e.A=Ht($t(t)),e.u=n,e.S=!0,Et(e,null)}function Et(e,t){e.G=Date.now(),kt(e),e.B=$t(e.A);var n=e.B,i=e.W;Array.isArray(i)||(i=[String(i)]),rn(n.i,"t",i),e.o=0,n=e.l.J,e.h=new vt,e.g=li(e.l,n?t:null,!e.u),0<e.O&&(e.M=new Ve(y(e.Pa,e,e.g),e.O)),He(e.U,e.g,"readystatechange",e.nb),t=e.I?ne(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),nt(),Ke(e.j,e.v,e.B,e.m,e.W,e.u)}function Ct(e){return!!e.g&&("GET"==e.v&&2!=e.L&&e.l.Ha)}function It(e,t,n){let i,r=!0;for(;!e.J&&e.o<n.length;){if(i=St(e,n),i==bt){4==t&&(e.s=4,rt(14),r=!1),Qe(e.j,e.m,null,"[Incomplete Response]");break}if(i==wt){e.s=4,rt(15),Qe(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}Qe(e.j,e.m,i,null),Pt(e,i)}Ct(e)&&0!=e.o&&(e.h.g=e.h.g.slice(e.o),e.o=0),4!=t||0!=n.length||e.h.h||(e.s=1,rt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),ti(t),t.M=!0,rt(11))):(Qe(e.j,e.m,n,"[Invalid Chunked Response]"),Ot(e),Nt(e))}function St(e,t){var n=e.o,i=t.indexOf("\n",n);return-1==i?bt:(n=Number(t.substring(n,i)),isNaN(n)?wt:(i+=1,i+n>t.length?bt:(t=t.slice(i,i+n),e.o=i+n,t)))}function kt(e){e.Y=Date.now()+e.P,At(e,e.P)}function At(e,t){if(null!=e.C)throw Error("WatchDog timer not null");e.C=ot(y(e.lb,e),t)}function Rt(e){e.C&&(h.clearTimeout(e.C),e.C=null)}function Nt(e){0==e.l.H||e.J||ri(e.l,e)}function Ot(e){Rt(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,Ue(e.V),ze(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Pt(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||dn(n.i,e)))if(!e.K&&dn(n.i,e)&&3==n.H){try{var i=n.Ja.g.parse(t)}catch(l){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;ii(n),Wn(n)}ei(n),rt(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&0==n.A&&!n.v&&(n.v=ot(y(n.ib,n),6e3));if(1>=hn(n.i)&&n.oa){try{n.oa()}catch(l){}n.oa=void 0}}else oi(n,11)}else if((e.K||n.g==e)&&ii(n),!R(t))for(r=n.Ja.g.parse(t),t=0;t<r.length;t++){let l=r[t];if(n.V=l[0],l=l[1],2==n.H)if("c"==l[0]){n.K=l[1],n.pa=l[2];const t=l[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));const r=l[4];null!=r&&(n.Ga=r,n.l.info("SVER="+n.Ga));const u=l[5];null!=u&&"number"===typeof u&&0<u&&(i=1.5*u,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=i.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(fn(s,s.h),s.h=null))}if(i.F){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.Da=e,qt(i.I,i.F,e))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=e;if(i.wa=ci(i,i.J?i.pa:null,i.Y),o.K){pn(i.i,o);var a=o,c=i.L;c&&a.setTimeout(c),a.C&&(Rt(a),kt(a)),i.g=o}else Zn(i);0<n.j.length&&Gn(n)}else"stop"!=l[0]&&"close"!=l[0]||oi(n,7);else 3==n.H&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?oi(n,7):zn(n):"noop"!=l[0]&&n.h&&n.h.Aa(l),n.A=0)}nt(4)}catch(l){}}function xt(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(d(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}for(i in t=[],n=0,e)t[n++]=e[i];return t}function Dt(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(d(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const i in e)t[n++]=i;return t}}}function Lt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(d(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=Dt(e),i=xt(e),r=i.length,s=0;s<r;s++)t.call(void 0,i[s],n&&n[s],e)}i=_t.prototype,i.setTimeout=function(e){this.P=e},i.nb=function(e){e=e.target;const t=this.M;t&&3==Un(e)?t.l():this.Pa(e)},i.Pa=function(e){try{if(e==this.g)e:{const u=Un(this.g);var t=this.g.Ia();const d=this.g.da();if(!(3>u)&&(3!=u||$||this.g&&(this.h.h||this.g.ja()||$n(this.g)))){this.J||4!=u||7==t||nt(8==t||0>=d?3:2),Rt(this);var n=this.g.da();this.ca=n;t:if(Ct(this)){var i=$n(this.g);e="";var r=i.length,s=4==Un(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Ot(this),Nt(this);var o="";break t}this.h.i=new h.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:s&&t==r-1});i.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,Ge(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(a)){var l=a;break t}}l=null}if(!(n=l)){this.i=!1,this.s=3,rt(12),Ot(this),Nt(this);break e}Qe(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Pt(this,n)}this.S?(It(this,u,o),$&&this.i&&3==u&&(He(this.U,this.V,"tick",this.mb),this.V.start())):(Qe(this.j,this.m,o,null),Pt(this,o)),4==u&&Ot(this),this.i&&!this.J&&(4==u?ri(this.l,this):(this.i=!1,kt(this)))}else jn(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),Ot(this),Nt(this)}}}catch(u){}},i.mb=function(){if(this.g){var e=Un(this.g),t=this.g.ja();this.o<t.length&&(Rt(this),It(this,e,t),this.i&&4!=e&&kt(this))}},i.cancel=function(){this.J=!0,Ot(this)},i.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(Xe(this.j,this.B),2!=this.L&&(nt(),rt(17)),Ot(this),this.s=2,Nt(this)):At(this,this.Y-e)};var Mt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ft(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),r=null;if(0<=i){var s=e[n].substring(0,i);r=e[n].substring(i+1)}else s=e[n];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ut(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ut){this.h=e.h,jt(this,e.j),this.s=e.s,this.g=e.g,Vt(this,e.m),this.l=e.l;var t=e.i,n=new Zt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Bt(this,n),this.o=e.o}else e&&(t=String(e).match(Mt))?(this.h=!1,jt(this,t[1]||"",!0),this.s=zt(t[2]||""),this.g=zt(t[3]||"",!0),Vt(this,t[4]),this.l=zt(t[5]||"",!0),Bt(this,t[6]||"",!0),this.o=zt(t[7]||"")):(this.h=!1,this.i=new Zt(null,this.h))}function $t(e){return new Ut(e)}function jt(e,t,n){e.j=n?zt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Vt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Bt(e,t,n){t instanceof Zt?(e.i=t,on(e.i,e.h)):(n||(t=Wt(t,Yt)),e.i=new Zt(t,e.h))}function qt(e,t,n){e.i.set(t,n)}function Ht(e){return qt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function zt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Wt(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Kt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Kt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Ut.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Wt(t,Gt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Wt(t,Gt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Wt(n,"/"==n.charAt(0)?Xt:Qt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Wt(n,Jt)),e.join("")};var Gt=/[#\/\?@]/g,Qt=/[#\?:]/g,Xt=/[#\?]/g,Yt=/[#\?@]/g,Jt=/#/g;function Zt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function en(e){e.g||(e.g=new Map,e.h=0,e.i&&Ft(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function tn(e,t){en(e),t=sn(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function nn(e,t){return en(e),t=sn(e,t),e.g.has(t)}function rn(e,t,n){tn(e,t),0<n.length&&(e.i=null,e.g.set(sn(e,t),I(n)),e.h+=n.length)}function sn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function on(e,t){t&&!e.j&&(en(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(tn(this,t),rn(this,n,e))}),e)),e.j=t}i=Zt.prototype,i.add=function(e,t){en(this),this.i=null,e=sn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},i.forEach=function(e,t){en(this),this.g.forEach((function(n,i){n.forEach((function(n){e.call(t,n,i,this)}),this)}),this)},i.ta=function(){en(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){const r=e[i];for(let e=0;e<r.length;e++)n.push(t[i])}return n},i.Z=function(e){en(this);let t=[];if("string"===typeof e)nn(this,e)&&(t=t.concat(this.g.get(sn(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},i.set=function(e,t){return en(this),this.i=null,e=sn(this,e),nn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},i.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t},i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];const s=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var r=s;""!==o[i]&&(r+="="+encodeURIComponent(String(o[i]))),e.push(r)}}return this.i=e.join("&")};var an=class{constructor(e,t){this.g=e,this.map=t}};function cn(e){this.l=e||ln,h.PerformanceNavigationTiming?(e=h.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(h.g&&h.g.Ka&&h.g.Ka()&&h.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ln=10;function un(e){return!!e.h||!!e.g&&e.g.size>=e.j}function hn(e){return e.h?1:e.g?e.g.size:0}function dn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function fn(e,t){e.g?e.g.add(t):e.h=t}function pn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function gn(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return I(e.i)}cn.prototype.cancel=function(){if(this.i=gn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var mn=class{stringify(e){return h.JSON.stringify(e,void 0)}parse(e){return h.JSON.parse(e,void 0)}};function _n(){this.g=new mn}function vn(e,t,n){const i=n||"";try{Lt(e,(function(e,n){let r=e;f(e)&&(r=Ce(e)),t.push(i+n+"="+encodeURIComponent(r))}))}catch(r){throw t.push(i+"type="+encodeURIComponent("_badmap")),r}}function yn(e,t){const n=new We;if(h.Image){const i=new Image;i.onload=w(wn,n,i,"TestLoadImage: loaded",!0,t),i.onerror=w(wn,n,i,"TestLoadImage: error",!1,t),i.onabort=w(wn,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=w(wn,n,i,"TestLoadImage: timeout",!1,t),h.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=e}else t(!1)}function wn(e,t,n,i,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(i)}catch(s){}}function bn(e){this.l=e.ec||null,this.j=e.ob||!1}function Tn(e,t){be.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=En,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}b(bn,lt),bn.prototype.g=function(){return new Tn(this.l,this.j)},bn.prototype.i=function(e){return function(){return e}}({}),b(Tn,be);var En=0;function Cn(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function In(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Sn(e)}function Sn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}i=Tn.prototype,i.open=function(e,t){if(this.readyState!=En)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Sn(this)},i.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||h).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},i.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,In(this)),this.readyState=En},i.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Sn(this)),this.g&&(this.readyState=3,Sn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Cn(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},i.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?In(this):Sn(this),3==this.readyState&&Cn(this)}},i.Za=function(e){this.g&&(this.response=this.responseText=e,In(this))},i.Ya=function(e){this.g&&(this.response=e,In(this))},i.ka=function(){this.g&&In(this)},i.setRequestHeader=function(e,t){this.v.append(e,t)},i.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Tn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var kn=h.JSON.parse;function An(e){be.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Rn,this.L=this.M=!1}b(An,be);var Rn="",Nn=/^https?$/i,On=["POST","PUT"];function Pn(e){return F&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function xn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Dn(e),Mn(e)}function Dn(e){e.F||(e.F=!0,Te(e,"complete"),Te(e,"error"))}function Ln(e){if(e.h&&"undefined"!=typeof u&&(!e.C[1]||4!=Un(e)||2!=e.da()))if(e.v&&4==Un(e))$e(e.La,0,e);else if(Te(e,"readystatechange"),4==Un(e)){e.h=!1;try{const a=e.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=0===a){var r=String(e.I).match(Mt)[1]||null;!r&&h.self&&h.self.location&&(r=h.self.location.protocol.slice(0,-1)),i=!Nn.test(r?r.toLowerCase():"")}n=i}if(n)Te(e,"complete"),Te(e,"success");else{e.m=6;try{var s=2<Un(e)?e.g.statusText:""}catch(o){s=""}e.j=s+" ["+e.da()+"]",Dn(e)}}finally{Mn(e)}}}function Mn(e,t){if(e.g){Fn(e);const i=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Te(e,"ready");try{i.onreadystatechange=r}catch(n){}}}function Fn(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(h.clearTimeout(e.A),e.A=null)}function Un(e){return e.g?e.g.readyState:0}function $n(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Rn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(Xi){return null}}function jn(e){const t={};e=(e.g&&2<=Un(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<e.length;i++){if(R(e[i]))continue;var n=Ne(e[i]);const r=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=t[r]||[];t[r]=s,s.push(n)}te(t,(function(e){return e.join(", ")}))}function Vn(e){let t="";return ee(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Bn(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=Vn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):qt(e,t,n))}function qn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Hn(e){this.Ga=0,this.j=[],this.l=new We,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=qn("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=qn("baseRetryDelayMs",5e3,e),this.hb=qn("retryDelaySeedMs",1e4,e),this.eb=qn("forwardChannelMaxRetries",2,e),this.xa=qn("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new cn(e&&e.concurrentRequestLimit),this.Ja=new _n,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function zn(e){if(Kn(e),3==e.H){var t=e.W++,n=$t(e.I);if(qt(n,"SID",e.K),qt(n,"RID",t),qt(n,"TYPE","terminate"),Yn(e,n),t=new _t(e,e.l,t),t.L=2,t.A=Ht($t(n)),n=!1,h.navigator&&h.navigator.sendBeacon)try{n=h.navigator.sendBeacon(t.A.toString(),"")}catch(i){}!n&&h.Image&&((new Image).src=t.A,n=!0),n||(t.g=li(t.l,null),t.g.ha(t.A)),t.G=Date.now(),kt(t)}ai(e)}function Wn(e){e.g&&(ti(e),e.g.cancel(),e.g=null)}function Kn(e){Wn(e),e.u&&(h.clearTimeout(e.u),e.u=null),ii(e),e.i.cancel(),e.m&&("number"===typeof e.m&&h.clearTimeout(e.m),e.m=null)}function Gn(e){if(!un(e.i)&&!e.m){e.m=!0;var t=e.Na;Pe||Le(),xe||(Pe(),xe=!0),De.add(t,e),e.C=0}}function Qn(e,t){return!(hn(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=t.F.concat(e.j),!0):!(1==e.H||2==e.H||e.C>=(e.cb?0:e.eb))&&(e.m=ot(y(e.Na,e,t),si(e,e.C)),e.C++,!0))}function Xn(e,t){var n;n=t?t.m:e.W++;const i=$t(e.I);qt(i,"SID",e.K),qt(i,"RID",n),qt(i,"AID",e.V),Yn(e,i),e.o&&e.s&&Bn(i,e.o,e.s),n=new _t(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Jn(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),fn(e.i,n),Tt(n,i,t)}function Yn(e,t){e.na&&ee(e.na,(function(e,n){qt(t,n,e)})),e.h&&Lt({},(function(e,n){qt(t,n,e)}))}function Jn(e,t,n){n=Math.min(e.j.length,n);var i=e.h?y(e.h.Va,e.h,e):null;e:{var r=e.j;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=r[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=r[a].g;const c=r[a].map;if(n-=t,0>n)t=Math.max(0,r[a].g-100),o=!1;else try{vn(c,e,"req"+n+"_")}catch(s){i&&i(c)}}if(o){i=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,i}function Zn(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Pe||Le(),xe||(Pe(),xe=!0),De.add(t,e),e.A=0}}function ei(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=ot(y(e.Ma,e),si(e,e.A)),e.A++,!0)}function ti(e){null!=e.B&&(h.clearTimeout(e.B),e.B=null)}function ni(e){e.g=new _t(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=$t(e.wa);qt(t,"RID","rpc"),qt(t,"SID",e.K),qt(t,"AID",e.V),qt(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&qt(t,"TO",e.qa),qt(t,"TYPE","xmlhttp"),Yn(e,t),e.o&&e.s&&Bn(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=Ht($t(t)),n.u=null,n.S=!0,Et(n,e)}function ii(e){null!=e.v&&(h.clearTimeout(e.v),e.v=null)}function ri(e,t){var n=null;if(e.g==t){ii(e),ti(e),e.g=null;var i=2}else{if(!dn(e.i,t))return;n=t.F,pn(e.i,t),i=1}if(0!=e.H)if(t.i)if(1==i){n=t.u?t.u.length:0,t=Date.now()-t.G;var r=e.C;i=et(),Te(i,new st(i,n)),Gn(e)}else Zn(e);else if(r=t.s,3==r||0==r&&0<t.ca||!(1==i&&Qn(e,t)||2==i&&ei(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),r){case 1:oi(e,5);break;case 4:oi(e,10);break;case 3:oi(e,6);break;default:oi(e,2)}}function si(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function oi(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var i=y(e.pb,e);n||(n=new Ut("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||jt(n,"https"),Ht(n)),yn(n.toString(),i)}else rt(2);e.H=0,e.h&&e.h.za(t),ai(e),Kn(e)}function ai(e){if(e.H=0,e.ma=[],e.h){const t=gn(e.i);0==t.length&&0==e.j.length||(S(e.ma,t),S(e.ma,e.j),e.i.i.length=0,I(e.j),e.j.length=0),e.h.ya()}}function ci(e,t,n){var i=n instanceof Ut?$t(n):new Ut(n);if(""!=i.g)t&&(i.g=t+"."+i.g),Vt(i,i.m);else{var r=h.location;i=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var s=new Ut(null);i&&jt(s,i),t&&(s.g=t),r&&Vt(s,r),n&&(s.l=n),i=s}return n=e.F,t=e.Da,n&&t&&qt(i,n,t),qt(i,"VER",e.ra),Yn(e,i),i}function li(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new An(new bn({ob:n})):new An(e.va),t.Oa(e.J),t}function ui(){}function hi(){if(F&&!(10<=Number(K)))throw Error("Environmental error: no available transport.")}function di(e,t){be.call(this),this.g=new Hn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!R(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!R(t)&&(this.g.F=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new gi(this)}function fi(e){pt.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function pi(){gt.call(this),this.status=1}function gi(e){this.g=e}function mi(){this.blockSize=-1}function _i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function vi(e,t,n){n||(n=0);var i=Array(16);if("string"===typeof t)for(var r=0;16>r;++r)i[r]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],r=e.g[2];var s=e.g[3],o=t+(s^n&(r^s))+i[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(r^t&(n^r))+i[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=r+(n^s&(t^n))+i[2]+606105819&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(t^r&(s^t))+i[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(s^n&(r^s))+i[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(r^t&(n^r))+i[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=r+(n^s&(t^n))+i[6]+2821735955&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(t^r&(s^t))+i[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(s^n&(r^s))+i[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(r^t&(n^r))+i[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=r+(n^s&(t^n))+i[10]+4294925233&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(t^r&(s^t))+i[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(s^n&(r^s))+i[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(r^t&(n^r))+i[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=r+(n^s&(t^n))+i[14]+2792965006&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(t^r&(s^t))+i[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(r^s&(n^r))+i[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(t^n))+i[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(s^t))+i[11]+643717713&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(r^s))+i[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^s&(n^r))+i[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(t^n))+i[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(s^t))+i[15]+3634488961&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(r^s))+i[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^s&(n^r))+i[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(t^n))+i[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(s^t))+i[3]+4107603335&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(r^s))+i[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^s&(n^r))+i[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(t^n))+i[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(s^t))+i[7]+1735328473&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(r^s))+i[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(n^r^s)+i[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^r)+i[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=r+(s^t^n)+i[11]+1839030562&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^t)+i[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^s)+i[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^r)+i[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=r+(s^t^n)+i[7]+4139469664&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^t)+i[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^s)+i[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^r)+i[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=r+(s^t^n)+i[3]+3572445317&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^t)+i[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^s)+i[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^r)+i[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=r+(s^t^n)+i[15]+530742520&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^t)+i[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(r^(n|~s))+i[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~r))+i[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~n))+i[14]+2878612391&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~t))+i[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~s))+i[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~r))+i[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~n))+i[10]+4293915773&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~t))+i[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~s))+i[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~r))+i[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~n))+i[6]+2734768916&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~t))+i[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~s))+i[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~r))+i[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~n))+i[2]+718787259&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~t))+i[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+r&4294967295,e.g[3]=e.g[3]+s&4294967295}function yi(e,t){this.h=t;for(var n=[],i=!0,r=e.length-1;0<=r;r--){var s=0|e[r];i&&s==t||(n[r]=s,i=!1)}this.g=n}i=An.prototype,i.Oa=function(e){this.M=e},i.ha=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():dt.g(),this.C=this.u?ut(this.u):ut(dt),this.g.onreadystatechange=y(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){return void xn(this,s)}if(e=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else{if("function"!==typeof i.keys||"function"!==typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const e of i.keys())n.set(e,i.get(e))}i=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),r=h.FormData&&e instanceof h.FormData,!(0<=C(On,t))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Fn(this),0<this.B&&((this.L=Pn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=y(this.ua,this)):this.A=$e(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){xn(this,s)}},i.ua=function(){"undefined"!=typeof u&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Te(this,"timeout"),this.abort(8))},i.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Te(this,"complete"),Te(this,"abort"),Mn(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Mn(this,!0)),An.$.N.call(this)},i.La=function(){this.s||(this.G||this.v||this.l?Ln(this):this.kb())},i.kb=function(){Ln(this)},i.isActive=function(){return!!this.g},i.da=function(){try{return 2<Un(this)?this.g.status:-1}catch(e){return-1}},i.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},i.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),kn(t)}},i.Ia=function(){return this.m},i.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},i=Hn.prototype,i.ra=8,i.H=1,i.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const r=new _t(this,this.l,e);let s=this.s;if(this.U&&(s?(s=ne(s),re(s,this.U)):s=this.U),null!==this.o||this.O||(r.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){var i=this.j[n];if(i="__data__"in i.map&&(i=i.map.__data__,"string"===typeof i)?i.length:void 0,void 0===i)break;if(t+=i,4096<t){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Jn(this,r,t),n=$t(this.I),qt(n,"RID",e),qt(n,"CVER",22),this.F&&qt(n,"X-HTTP-Session-Id",this.F),Yn(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Vn(s)))+"&"+t:this.o&&Bn(n,this.o,s)),fn(this.i,r),this.bb&&qt(n,"TYPE","init"),this.P?(qt(n,"$req",t),qt(n,"SID","null"),r.aa=!0,Tt(r,n,null)):Tt(r,n,t),this.H=2}}else 3==this.H&&(e?Xn(this,e):0==this.j.length||un(this.i)||Xn(this))},i.Ma=function(){if(this.u=null,ni(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=ot(y(this.jb,this),e)}},i.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,rt(10),Wn(this),ni(this))},i.ib=function(){null!=this.v&&(this.v=null,Wn(this),ei(this),rt(19))},i.pb=function(e){e?(this.l.info("Successfully pinged google.com"),rt(2)):(this.l.info("Failed to ping google.com"),rt(1))},i.isActive=function(){return!!this.h&&this.h.isActive(this)},i=ui.prototype,i.Ba=function(){},i.Aa=function(){},i.za=function(){},i.ya=function(){},i.isActive=function(){return!0},i.Va=function(){},hi.prototype.g=function(e,t){return new di(e,t)},b(di,be),di.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;rt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=ci(e,null,e.Y),Gn(e)},di.prototype.close=function(){zn(this.g)},di.prototype.u=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ce(e),e=n);t.j.push(new an(t.fb++,e)),3==t.H&&Gn(t)},di.prototype.N=function(){this.g.h=null,delete this.j,zn(this.g),delete this.g,di.$.N.call(this)},b(fi,pt),b(pi,gt),b(gi,ui),gi.prototype.Ba=function(){Te(this.g,"a")},gi.prototype.Aa=function(e){Te(this.g,new fi(e))},gi.prototype.za=function(e){Te(this.g,new pi)},gi.prototype.ya=function(){Te(this.g,"b")},b(_i,mi),_i.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},_i.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,i=this.m,r=this.h,s=0;s<t;){if(0==r)for(;s<=n;)vi(this,e,s),s+=this.blockSize;if("string"===typeof e){for(;s<t;)if(i[r++]=e.charCodeAt(s++),r==this.blockSize){vi(this,i),r=0;break}}else for(;s<t;)if(i[r++]=e[s++],r==this.blockSize){vi(this,i),r=0;break}}this.h=r,this.i+=t},_i.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var i=0;32>i;i+=8)e[n++]=this.g[t]>>>i&255;return e};var wi={};function bi(e){return-128<=e&&128>e?x(e,(function(e){return new yi([0|e],0>e?-1:0)})):new yi([0|e],0>e?-1:0)}function Ti(e){if(isNaN(e)||!isFinite(e))return Ii;if(0>e)return Ni(Ti(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=Ci;return new yi(t,0)}function Ei(e,t){if(0==e.length)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if("-"==e.charAt(0))return Ni(Ei(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Ti(Math.pow(t,8)),i=Ii,r=0;r<e.length;r+=8){var s=Math.min(8,e.length-r),o=parseInt(e.substring(r,r+s),t);8>s?(s=Ti(Math.pow(t,s)),i=i.R(s).add(Ti(o))):(i=i.R(n),i=i.add(Ti(o)))}return i}var Ci=4294967296,Ii=bi(0),Si=bi(1),ki=bi(16777216);function Ai(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function Ri(e){return-1==e.h}function Ni(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new yi(n,~e.h).add(Si)}function Oi(e,t){return e.add(Ni(t))}function Pi(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function xi(e,t){this.g=e,this.h=t}function Di(e,t){if(Ai(t))throw Error("division by zero");if(Ai(e))return new xi(Ii,Ii);if(Ri(e))return t=Di(Ni(e),t),new xi(Ni(t.g),Ni(t.h));if(Ri(t))return t=Di(e,Ni(t)),new xi(Ni(t.g),t.h);if(30<e.g.length){if(Ri(e)||Ri(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Si,i=t;0>=i.X(e);)n=Li(n),i=Li(i);var r=Mi(n,1),s=Mi(i,1);for(i=Mi(i,2),n=Mi(n,2);!Ai(i);){var o=s.add(i);0>=o.X(e)&&(r=r.add(n),s=o),i=Mi(i,1),n=Mi(n,1)}return t=Oi(e,r.R(t)),new xi(r,t)}for(r=Ii;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),s=Ti(n),o=s.R(t);Ri(o)||0<o.X(e);)n-=i,s=Ti(n),o=s.R(t);Ai(s)&&(s=Si),r=r.add(s),e=Oi(e,o)}return new xi(r,e)}function Li(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.D(i)<<1|e.D(i-1)>>>31;return new yi(n,e.h)}function Mi(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,r=[],s=0;s<i;s++)r[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new yi(r,e.h)}i=yi.prototype,i.ea=function(){if(Ri(this))return-Ni(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var i=this.D(n);e+=(0<=i?i:Ci+i)*t,t*=Ci}return e},i.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Ai(this))return"0";if(Ri(this))return"-"+Ni(this).toString(e);for(var t=Ti(Math.pow(e,6)),n=this,i="";;){var r=Di(n,t).g;n=Oi(n,r.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=r,Ai(n))return s+i;for(;6>s.length;)s="0"+s;i=s+i}},i.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},i.X=function(e){return e=Oi(this,e),Ri(e)?-1:Ai(e)?0:1},i.abs=function(){return Ri(this)?Ni(this):this},i.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,r=0;r<=t;r++){var s=i+(65535&this.D(r))+(65535&e.D(r)),o=(s>>>16)+(this.D(r)>>>16)+(e.D(r)>>>16);i=o>>>16,s&=65535,o&=65535,n[r]=o<<16|s}return new yi(n,-2147483648&n[n.length-1]?-1:0)},i.R=function(e){if(Ai(this)||Ai(e))return Ii;if(Ri(this))return Ri(e)?Ni(this).R(Ni(e)):Ni(Ni(this).R(e));if(Ri(e))return Ni(this.R(Ni(e)));if(0>this.X(ki)&&0>e.X(ki))return Ti(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<e.g.length;r++){var s=this.D(i)>>>16,o=65535&this.D(i),a=e.D(r)>>>16,c=65535&e.D(r);n[2*i+2*r]+=o*c,Pi(n,2*i+2*r),n[2*i+2*r+1]+=s*c,Pi(n,2*i+2*r+1),n[2*i+2*r+1]+=o*a,Pi(n,2*i+2*r+1),n[2*i+2*r+2]+=s*a,Pi(n,2*i+2*r+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new yi(n,0)},i.gb=function(e){return Di(this,e).h},i.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)&e.D(i);return new yi(n,this.h&e.h)},i.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)|e.D(i);return new yi(n,this.h|e.h)},i.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)^e.D(i);return new yi(n,this.h^e.h)},hi.prototype.createWebChannel=hi.prototype.g,di.prototype.send=di.prototype.u,di.prototype.open=di.prototype.m,di.prototype.close=di.prototype.close,at.NO_ERROR=0,at.TIMEOUT=8,at.HTTP_ERROR=6,ct.COMPLETE="complete",ht.EventType=ft,ft.OPEN="a",ft.CLOSE="b",ft.ERROR="c",ft.MESSAGE="d",be.prototype.listen=be.prototype.O,An.prototype.listenOnce=An.prototype.P,An.prototype.getLastError=An.prototype.Sa,An.prototype.getLastErrorCode=An.prototype.Ia,An.prototype.getStatus=An.prototype.da,An.prototype.getResponseJson=An.prototype.Wa,An.prototype.getResponseText=An.prototype.ja,An.prototype.send=An.prototype.ha,An.prototype.setWithCredentials=An.prototype.Oa,_i.prototype.digest=_i.prototype.l,_i.prototype.reset=_i.prototype.reset,_i.prototype.update=_i.prototype.j,yi.prototype.add=yi.prototype.add,yi.prototype.multiply=yi.prototype.R,yi.prototype.modulo=yi.prototype.gb,yi.prototype.compare=yi.prototype.X,yi.prototype.toNumber=yi.prototype.ea,yi.prototype.toString=yi.prototype.toString,yi.prototype.getBits=yi.prototype.D,yi.fromNumber=Ti,yi.fromString=Ei;var Fi=l.createWebChannelTransport=function(){return new hi},Ui=l.getStatEventTarget=function(){return et()},$i=l.ErrorCode=at,ji=l.EventType=ct,Vi=l.Event=Je,Bi=l.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},qi=l.FetchXmlHttpFactory=bn,Hi=l.WebChannel=ht,zi=l.XhrIo=An,Wi=l.Md5=_i,Ki=l.Integer=yi;const Gi="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Qi.UNAUTHENTICATED=new Qi(null),Qi.GOOGLE_CREDENTIALS=new Qi("google-credentials-uid"),Qi.FIRST_PARTY=new Qi("first-party-uid"),Qi.MOCK_USER=new Qi("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Xi="10.11.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi=new o.Vy("@firebase/firestore");function Ji(){return Yi.logLevel}function Zi(e,...t){if(Yi.logLevel<=o.$b.DEBUG){const n=t.map(nr);Yi.debug(`Firestore (${Xi}): ${e}`,...n)}}function er(e,...t){if(Yi.logLevel<=o.$b.ERROR){const n=t.map(nr);Yi.error(`Firestore (${Xi}): ${e}`,...n)}}function tr(e,...t){if(Yi.logLevel<=o.$b.WARN){const n=t.map(nr);Yi.warn(`Firestore (${Xi}): ${e}`,...n)}}function nr(e){if("string"==typeof e)return e;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(e){return JSON.stringify(e)}(e)}catch(t){return e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(e="Unexpected state"){const t=`FIRESTORE (${Xi}) INTERNAL ASSERTION FAILED: `+e;throw er(t),new Error(t)}function rr(e,t){e||ir()}function sr(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ar extends a.g{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ur{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Qi.UNAUTHENTICATED)))}shutdown(){}}class hr{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class dr{constructor(e){this.t=e,this.currentUser=Qi.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let r=new cr;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new cr,e.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const t=r;e.enqueueRetryable((async()=>{await t.promise,await i(this.currentUser)}))},o=e=>{Zi("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Zi("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new cr)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Zi("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(rr("string"==typeof t.accessToken),new lr(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return rr(null===e||"string"==typeof e),new Qi(e)}}class fr{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Qi.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class pr{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new fr(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(Qi.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class gr{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mr{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const n=e=>{null!=e.error&&Zi("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.R;return this.R=e.token,Zi("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const i=e=>{Zi("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit((e=>i(e))),setTimeout((()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?i(e):Zi("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(rr("string"==typeof e.token),this.R=e.token,new gr(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _r(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=_r(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<t&&(n+=e.charAt(i[r]%e.length))}return n}}function yr(e,t){return e<t?-1:e>t?1:0}function wr(e,t,n){return e.length===t.length&&e.every(((e,i)=>n(e,t[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class br{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ar(or.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ar(or.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ar(or.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ar(or.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return br.fromMillis(Date.now())}static fromDate(e){return br.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new br(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?yr(this.nanoseconds,e.nanoseconds):yr(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Tr(e)}static min(){return new Tr(new br(0,0))}static max(){return new Tr(new br(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,t,n){void 0===t?t=0:t>e.length&&ir(),void 0===n?n=e.length-t:n>e.length-t&&ir(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Er.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Er?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const n=e.get(i),r=t.get(i);if(n<r)return-1;if(n>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Cr extends Er{construct(e,t,n){return new Cr(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new ar(or.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Cr(t)}static emptyPath(){return new Cr([])}}const Ir=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Sr extends Er{construct(e,t,n){return new Sr(e,t,n)}static isValidIdentifier(e){return Ir.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Sr.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Sr(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const r=()=>{if(0===n.length)throw new ar(or.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;i<e.length;){const t=e[i];if("\\"===t){if(i+1===e.length)throw new ar(or.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new ar(or.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?(s=!s,i++):"."!==t||s?(n+=t,i++):(r(),i++)}if(r(),s)throw new ar(or.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Sr(t)}static emptyPath(){return new Sr([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e){this.path=e}static fromPath(e){return new kr(Cr.fromString(e))}static fromName(e){return new kr(Cr.fromString(e).popFirst(5))}static empty(){return new kr(Cr.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Cr.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Cr.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new kr(new Cr(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}Ar.UNKNOWN_ID=-1;function Rr(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,r=Tr.fromTimestamp(1e9===i?new br(n+1,0):new br(n,i));return new Or(r,kr.empty(),t)}function Nr(e){return new Or(e.readTime,e.key,-1)}class Or{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Or(Tr.min(),kr.empty(),-1)}static max(){return new Or(Tr.max(),kr.empty(),-1)}}function Pr(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=kr.comparator(e.documentKey,t.documentKey),0!==n?n:yr(e.largestBatchId,t.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}const xr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Dr{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lr(e){if(e.code!==or.FAILED_PRECONDITION||e.message!==xr)throw e;Zi("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ir(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Mr(((n,i)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,i)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Mr?t:Mr.resolve(t)}catch(e){return Mr.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Mr.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Mr.reject(t)}static resolve(e){return new Mr(((t,n)=>{t(e)}))}static reject(e){return new Mr(((t,n)=>{n(e)}))}static waitFor(e){return new Mr(((t,n)=>{let i=0,r=0,s=!1;e.forEach((e=>{++i,e.next((()=>{++r,s&&r===i&&t()}),(e=>n(e)))})),s=!0,r===i&&t()}))}static or(e){let t=Mr.resolve(!1);for(const n of e)t=t.next((e=>e?Mr.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,i)=>{n.push(t.call(this,e,i))})),this.waitFor(n)}static mapArray(e,t){return new Mr(((n,i)=>{const r=e.length,s=new Array(r);let o=0;for(let a=0;a<r;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===r&&n(s)}),(e=>i(e)))}}))}static doWhile(e,t){return new Mr(((n,i)=>{const r=()=>{!0===e()?t().next((()=>{r()}),i):n()};r()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ur(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $r{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ie(e),this.se=e=>t.writeSequenceNumber(e))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}function jr(e){return null==e}function Vr(e){return 0===e&&1/e==-1/0}function Br(e){return"number"==typeof e&&Number.isInteger(e)&&!Vr(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$r.oe=-1;const qr=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Hr=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],zr=Hr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wr(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Kr(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Gr(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,t){this.comparator=e,this.root=t||Yr.EMPTY}insert(e,t){return new Qr(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Yr.BLACK,null,null))}remove(e){return new Qr(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Yr.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(0===i)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xr(this.root,e,this.comparator,!0)}}class Xr{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Yr{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:Yr.RED,this.left=null!=i?i:Yr.EMPTY,this.right=null!=r?r:Yr.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,r){return new Yr(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Yr.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return Yr.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Yr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Yr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ir();if(this.right.isRed())throw ir();const e=this.left.check();if(e!==this.right.check())throw ir();return e+(this.isRed()?0:1)}}Yr.EMPTY=null,Yr.RED=!0,Yr.BLACK=!1,Yr.EMPTY=new class{constructor(){this.size=0}get key(){throw ir()}get value(){throw ir()}get color(){throw ir()}get left(){throw ir()}get right(){throw ir()}copy(e,t,n,i,r){return this}insert(e,t,n){return new Yr(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jr{constructor(e){this.comparator=e,this.data=new Qr(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Zr(this.data.getIterator())}getIteratorFrom(e){return new Zr(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Jr))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(e,i))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Jr(this.comparator);return t.data=e,t}}class Zr{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class es{constructor(e){this.fields=e,e.sort(Sr.comparator)}static empty(){return new es([])}unionWith(e){let t=new Jr(Sr.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new es(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return wr(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ns{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new ts("Invalid base64 string: "+e):e}}(e);return new ns(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new ns(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return yr(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ns.EMPTY_BYTE_STRING=new ns("");const is=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rs(e){if(rr(!!e),"string"==typeof e){let t=0;const n=is.exec(e);if(rr(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:ss(e.seconds),nanos:ss(e.nanos)}}function ss(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function os(e){return"string"==typeof e?ns.fromBase64String(e):ns.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function cs(e){const t=e.mapValue.fields.__previous_value__;return as(t)?cs(t):t}function ls(e){const t=rs(e.mapValue.fields.__local_write_time__.timestampValue);return new br(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,t,n,i,r,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class hs{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new hs("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof hs&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function fs(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?as(e)?4:Ss(e)?9007199254740991:10:ir()}function ps(e,t){if(e===t)return!0;const n=fs(e);if(n!==fs(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ls(e).isEqual(ls(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=rs(e.timestampValue),i=rs(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return os(e.bytesValue).isEqual(os(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return ss(e.geoPointValue.latitude)===ss(t.geoPointValue.latitude)&&ss(e.geoPointValue.longitude)===ss(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return ss(e.integerValue)===ss(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=ss(e.doubleValue),i=ss(t.doubleValue);return n===i?Vr(n)===Vr(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9:return wr(e.arrayValue.values||[],t.arrayValue.values||[],ps);case 10:return function(e,t){const n=e.mapValue.fields||{},i=t.mapValue.fields||{};if(Wr(n)!==Wr(i))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===i[r]||!ps(n[r],i[r])))return!1;return!0}(e,t);default:return ir()}}function gs(e,t){return void 0!==(e.values||[]).find((e=>ps(e,t)))}function ms(e,t){if(e===t)return 0;const n=fs(e),i=fs(t);if(n!==i)return yr(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return yr(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=ss(e.integerValue||e.doubleValue),i=ss(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3:return _s(e.timestampValue,t.timestampValue);case 4:return _s(ls(e),ls(t));case 5:return yr(e.stringValue,t.stringValue);case 6:return function(e,t){const n=os(e),i=os(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),i=t.split("/");for(let r=0;r<n.length&&r<i.length;r++){const e=yr(n[r],i[r]);if(0!==e)return e}return yr(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=yr(ss(e.latitude),ss(t.latitude));return 0!==n?n:yr(ss(e.longitude),ss(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],i=t.values||[];for(let r=0;r<n.length&&r<i.length;++r){const e=ms(n[r],i[r]);if(e)return e}return yr(n.length,i.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===ds.mapValue&&t===ds.mapValue)return 0;if(e===ds.mapValue)return 1;if(t===ds.mapValue)return-1;const n=e.fields||{},i=Object.keys(n),r=t.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let o=0;o<i.length&&o<s.length;++o){const e=yr(i[o],s[o]);if(0!==e)return e;const t=ms(n[i[o]],r[s[o]]);if(0!==t)return t}return yr(i.length,s.length)}(e.mapValue,t.mapValue);default:throw ir()}}function _s(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return yr(e,t);const n=rs(e),i=rs(t),r=yr(n.seconds,i.seconds);return 0!==r?r:yr(n.nanos,i.nanos)}function vs(e){return ys(e)}function ys(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=rs(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return os(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return kr.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const i of e.values||[])n?n=!1:t+=",",t+=ys(i);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",i=!0;for(const r of t)i?i=!1:n+=",",n+=`${r}:${ys(e.fields[r])}`;return n+"}"}(e.mapValue):ir()}function ws(e){return!!e&&"integerValue"in e}function bs(e){return!!e&&"arrayValue"in e}function Ts(e){return!!e&&"nullValue"in e}function Es(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Cs(e){return!!e&&"mapValue"in e}function Is(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Kr(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Is(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Is(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Ss(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ks{constructor(e){this.value=e}static empty(){return new ks({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Cs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Is(t)}setAll(e){let t=Sr.emptyPath(),n={},i=[];e.forEach(((e,r)=>{if(!t.isImmediateParentOf(r)){const e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=r.popLast()}e?n[r.lastSegment()]=Is(e):i.push(r.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,n,i)}delete(e){const t=this.field(e.popLast());Cs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ps(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];Cs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){Kr(t,((t,n)=>e[t]=n));for(const i of n)delete e[i]}clone(){return new ks(Is(this.value))}}function As(e){const t=[];return Kr(e.fields,((e,n)=>{const i=new Sr([e]);if(Cs(n)){const e=As(n.mapValue).fields;if(0===e.length)t.push(i);else for(const n of e)t.push(i.child(n))}else t.push(i)})),new es(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Rs{constructor(e,t,n,i,r,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=r,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Rs(e,0,Tr.min(),Tr.min(),Tr.min(),ks.empty(),0)}static newFoundDocument(e,t,n,i){return new Rs(e,1,t,Tr.min(),n,i,0)}static newNoDocument(e,t){return new Rs(e,2,t,Tr.min(),Tr.min(),ks.empty(),0)}static newUnknownDocument(e,t){return new Rs(e,3,t,Tr.min(),Tr.min(),ks.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Tr.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ks.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ks.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Tr.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Rs&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Rs(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,t){this.position=e,this.inclusive=t}}function Os(e,t,n){let i=0;for(let r=0;r<e.position.length;r++){const s=t[r],o=e.position[r];if(i=s.field.isKeyField()?kr.comparator(kr.fromName(o.referenceValue),n.key):ms(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function Ps(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ps(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ds(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{}class Ms extends Ls{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Hs(e,t,n):"array-contains"===t?new Gs(e,n):"in"===t?new Qs(e,n):"not-in"===t?new Xs(e,n):"array-contains-any"===t?new Ys(e,n):new Ms(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new zs(e,n):new Ws(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(ms(t,this.value)):null!==t&&fs(this.value)===fs(t)&&this.matchesComparison(ms(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return ir()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Fs extends Ls{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Fs(e,t)}matches(e){return Us(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Us(e){return"and"===e.op}function $s(e){return js(e)&&Us(e)}function js(e){for(const t of e.filters)if(t instanceof Fs)return!1;return!0}function Vs(e){if(e instanceof Ms)return e.field.canonicalString()+e.op.toString()+vs(e.value);if($s(e))return e.filters.map((e=>Vs(e))).join(",");{const t=e.filters.map((e=>Vs(e))).join(",");return`${e.op}(${t})`}}function Bs(e,t){return e instanceof Ms?function(e,t){return t instanceof Ms&&e.op===t.op&&e.field.isEqual(t.field)&&ps(e.value,t.value)}(e,t):e instanceof Fs?function(e,t){return t instanceof Fs&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,i)=>e&&Bs(n,t.filters[i])),!0)}(e,t):void ir()}function qs(e){return e instanceof Ms?function(e){return`${e.field.canonicalString()} ${e.op} ${vs(e.value)}`}(e):e instanceof Fs?function(e){return e.op.toString()+" {"+e.getFilters().map(qs).join(" ,")+"}"}(e):"Filter"}class Hs extends Ms{constructor(e,t,n){super(e,t,n),this.key=kr.fromName(n.referenceValue)}matches(e){const t=kr.comparator(e.key,this.key);return this.matchesComparison(t)}}class zs extends Ms{constructor(e,t){super(e,"in",t),this.keys=Ks("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Ws extends Ms{constructor(e,t){super(e,"not-in",t),this.keys=Ks("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Ks(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>kr.fromName(e.referenceValue)))}class Gs extends Ms{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return bs(t)&&gs(t.arrayValue,this.value)}}class Qs extends Ms{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&gs(this.value.arrayValue,t)}}class Xs extends Ms{constructor(e,t){super(e,"not-in",t)}matches(e){if(gs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!gs(this.value.arrayValue,t)}}class Ys extends Ms{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!bs(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>gs(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,t=null,n=[],i=[],r=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.ue=null}}function Zs(e,t=null,n=[],i=[],r=null,s=null,o=null){return new Js(e,t,n,i,r,s,o)}function eo(e){const t=sr(e);if(null===t.ue){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>Vs(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),jr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>vs(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>vs(e))).join(",")),t.ue=e}return t.ue}function to(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Ds(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Bs(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ps(e.startAt,t.startAt)&&Ps(e.endAt,t.endAt)}function no(e){return kr.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class io{constructor(e,t=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ro(e,t,n,i,r,s,o,a){return new io(e,t,n,i,r,s,o,a)}function so(e){return new io(e)}function oo(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function ao(e){return null!==e.collectionGroup}function co(e){const t=sr(e);if(null===t.ce){t.ce=[];const e=new Set;for(const r of t.explicitOrderBy)t.ce.push(r),e.add(r.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc",i=function(e){let t=new Jr(Sr.comparator);return e.filters.forEach((e=>{e.getFlattenedFilters().forEach((e=>{e.isInequality()&&(t=t.add(e.field))}))})),t}(t);i.forEach((i=>{e.has(i.canonicalString())||i.isKeyField()||t.ce.push(new xs(i,n))})),e.has(Sr.keyField().canonicalString())||t.ce.push(new xs(Sr.keyField(),n))}return t.ce}function lo(e){const t=sr(e);return t.le||(t.le=uo(t,co(e))),t.le}function uo(e,t){if("F"===e.limitType)return Zs(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map((e=>{const t="desc"===e.dir?"asc":"desc";return new xs(e.field,t)}));const n=e.endAt?new Ns(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ns(e.startAt.position,e.startAt.inclusive):null;return Zs(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}}function ho(e,t,n){return new io(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function fo(e,t){return to(lo(e),lo(t))&&e.limitType===t.limitType}function po(e){return`${eo(lo(e))}|lt:${e.limitType}`}function go(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>qs(e))).join(", ")}]`),jr(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>vs(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>vs(e))).join(",")),`Target(${t})`}(lo(e))}; limitType=${e.limitType})`}function mo(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):kr.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of co(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const i=Os(e,t,n);return e.inclusive?i<=0:i<0}(e.startAt,co(e),t))&&!(e.endAt&&!function(e,t,n){const i=Os(e,t,n);return e.inclusive?i>=0:i>0}(e.endAt,co(e),t))}(e,t)}function _o(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function vo(e){return(t,n)=>{let i=!1;for(const r of co(e)){const e=yo(r,t,n);if(0!==e)return e;i=i||r.field.isKeyField()}return 0}}function yo(e,t,n){const i=e.field.isKeyField()?kr.comparator(t.key,n.key):function(e,t,n){const i=t.data.field(e),r=n.data.field(e);return null!==i&&null!==r?ms(i,r):ir()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return ir()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[i,r]of n)if(this.equalsFn(i,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(void 0===i)return this.inner[n]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return 1===n.length?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Kr(this.inner,((t,n)=>{for(const[i,r]of n)e(i,r)}))}isEmpty(){return Gr(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo=new Qr(kr.comparator);function To(){return bo}const Eo=new Qr(kr.comparator);function Co(...e){let t=Eo;for(const n of e)t=t.insert(n.key,n);return t}function Io(e){let t=Eo;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function So(){return Ao()}function ko(){return Ao()}function Ao(){return new wo((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Ro=new Qr(kr.comparator),No=new Jr(kr.comparator);function Oo(...e){let t=No;for(const n of e)t=t.add(n);return t}const Po=new Jr(yr);function xo(){return Po}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vr(t)?"-0":t}}function Lo(e){return{integerValue:""+e}}function Mo(e,t){return Br(t)?Lo(t):Do(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(){this._=void 0}}function Uo(e,t,n){return e instanceof Vo?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&as(t)&&(t=cs(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Bo?qo(e,t):e instanceof Ho?zo(e,t):function(e,t){const n=jo(e,t),i=Ko(n)+Ko(e.Pe);return ws(n)&&ws(e.Pe)?Lo(i):Do(e.serializer,i)}(e,t)}function $o(e,t,n){return e instanceof Bo?qo(e,t):e instanceof Ho?zo(e,t):n}function jo(e,t){return e instanceof Wo?function(e){return ws(e)||function(e){return!!e&&"doubleValue"in e}(e)}(t)?t:{integerValue:0}:null}class Vo extends Fo{}class Bo extends Fo{constructor(e){super(),this.elements=e}}function qo(e,t){const n=Go(t);for(const i of e.elements)n.some((e=>ps(e,i)))||n.push(i);return{arrayValue:{values:n}}}class Ho extends Fo{constructor(e){super(),this.elements=e}}function zo(e,t){let n=Go(t);for(const i of e.elements)n=n.filter((e=>!ps(e,i)));return{arrayValue:{values:n}}}class Wo extends Fo{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Ko(e){return ss(e.integerValue||e.doubleValue)}function Go(e){return bs(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,t){this.field=e,this.transform=t}}function Xo(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Bo&&t instanceof Bo||e instanceof Ho&&t instanceof Ho?wr(e.elements,t.elements,ps):e instanceof Wo&&t instanceof Wo?ps(e.Pe,t.Pe):e instanceof Vo&&t instanceof Vo}(e.transform,t.transform)}class Yo{constructor(e,t){this.version=e,this.transformResults=t}}class Jo{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Jo}static exists(e){return new Jo(void 0,e)}static updateTime(e){return new Jo(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zo(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class ea{}function ta(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new ha(e.key,Jo.none()):new oa(e.key,e.data,Jo.none());{const n=e.data,i=ks.empty();let r=new Jr(Sr.comparator);for(let e of t.fields)if(!r.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?i.delete(e):i.set(e,t),r=r.add(e)}return new aa(e.key,i,new es(r.toArray()),Jo.none())}}function na(e,t,n){e instanceof oa?function(e,t,n){const i=e.value.clone(),r=la(e.fieldTransforms,t,n.transformResults);i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):e instanceof aa?function(e,t,n){if(!Zo(e.precondition,t))return void t.convertToUnknownDocument(n.version);const i=la(e.fieldTransforms,t,n.transformResults),r=t.data;r.setAll(ca(e)),r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function ia(e,t,n,i){return e instanceof oa?function(e,t,n,i){if(!Zo(e.precondition,t))return n;const r=e.value.clone(),s=ua(e.fieldTransforms,i,t);return r.setAll(s),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null}(e,t,n,i):e instanceof aa?function(e,t,n,i){if(!Zo(e.precondition,t))return n;const r=ua(e.fieldTransforms,i,t),s=t.data;return s.setAll(ca(e)),s.setAll(r),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,i):function(e,t,n){return Zo(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function ra(e,t){let n=null;for(const i of e.fieldTransforms){const e=t.data.field(i.field),r=jo(i.transform,e||null);null!=r&&(null===n&&(n=ks.empty()),n.set(i.field,r))}return n||null}function sa(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&wr(e,t,((e,t)=>Xo(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class oa extends ea{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class aa extends ea{constructor(e,t,n,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function ca(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}})),t}function la(e,t,n){const i=new Map;rr(e.length===n.length);for(let r=0;r<n.length;r++){const s=e[r],o=s.transform,a=t.data.field(s.field);i.set(s.field,$o(o,a,n[r]))}return i}function ua(e,t,n){const i=new Map;for(const r of e){const e=r.transform,s=n.data.field(r.field);i.set(r.field,Uo(e,s,t))}return i}class ha extends ea{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class da extends ea{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const t=this.mutations[i];t.key.isEqual(e.key)&&na(t,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=ia(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=ia(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=ko();return this.mutations.forEach((i=>{const r=e.get(i.key),s=r.overlayedDocument;let o=this.applyToLocalView(s,r.mutatedFields);o=t.has(i.key)?null:o;const a=ta(s,o);null!==a&&n.set(i.key,a),s.isValidDocument()||s.convertToNoDocument(Tr.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Oo())}isEqual(e){return this.batchId===e.batchId&&wr(this.mutations,e.mutations,((e,t)=>sa(e,t)))&&wr(this.baseMutations,e.baseMutations,((e,t)=>sa(e,t)))}}class pa{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){rr(e.mutations.length===n.length);let i=function(){return Ro}();const r=e.mutations;for(let s=0;s<r.length;s++)i=i.insert(r[s].key,n[s].version);return new pa(e,t,n,i)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ma{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _a,va;function ya(e){switch(e){default:return ir();case or.CANCELLED:case or.UNKNOWN:case or.DEADLINE_EXCEEDED:case or.RESOURCE_EXHAUSTED:case or.INTERNAL:case or.UNAVAILABLE:case or.UNAUTHENTICATED:return!1;case or.INVALID_ARGUMENT:case or.NOT_FOUND:case or.ALREADY_EXISTS:case or.PERMISSION_DENIED:case or.FAILED_PRECONDITION:case or.ABORTED:case or.OUT_OF_RANGE:case or.UNIMPLEMENTED:case or.DATA_LOSS:return!0}}function wa(e){if(void 0===e)return er("GRPC error has no .code"),or.UNKNOWN;switch(e){case _a.OK:return or.OK;case _a.CANCELLED:return or.CANCELLED;case _a.UNKNOWN:return or.UNKNOWN;case _a.DEADLINE_EXCEEDED:return or.DEADLINE_EXCEEDED;case _a.RESOURCE_EXHAUSTED:return or.RESOURCE_EXHAUSTED;case _a.INTERNAL:return or.INTERNAL;case _a.UNAVAILABLE:return or.UNAVAILABLE;case _a.UNAUTHENTICATED:return or.UNAUTHENTICATED;case _a.INVALID_ARGUMENT:return or.INVALID_ARGUMENT;case _a.NOT_FOUND:return or.NOT_FOUND;case _a.ALREADY_EXISTS:return or.ALREADY_EXISTS;case _a.PERMISSION_DENIED:return or.PERMISSION_DENIED;case _a.FAILED_PRECONDITION:return or.FAILED_PRECONDITION;case _a.ABORTED:return or.ABORTED;case _a.OUT_OF_RANGE:return or.OUT_OF_RANGE;case _a.UNIMPLEMENTED:return or.UNIMPLEMENTED;case _a.DATA_LOSS:return or.DATA_LOSS;default:return ir()}}(va=_a||(_a={}))[va.OK=0]="OK",va[va.CANCELLED=1]="CANCELLED",va[va.UNKNOWN=2]="UNKNOWN",va[va.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",va[va.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",va[va.NOT_FOUND=5]="NOT_FOUND",va[va.ALREADY_EXISTS=6]="ALREADY_EXISTS",va[va.PERMISSION_DENIED=7]="PERMISSION_DENIED",va[va.UNAUTHENTICATED=16]="UNAUTHENTICATED",va[va.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",va[va.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",va[va.ABORTED=10]="ABORTED",va[va.OUT_OF_RANGE=11]="OUT_OF_RANGE",va[va.UNIMPLEMENTED=12]="UNIMPLEMENTED",va[va.INTERNAL=13]="INTERNAL",va[va.UNAVAILABLE=14]="UNAVAILABLE",va[va.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let ba=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea=new Ki([4294967295,4294967295],0);function Ca(e){const t=Ta().encode(e),n=new Wi;return n.update(t),new Uint8Array(n.digest())}function Ia(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),i=t.getUint32(4,!0),r=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Ki([n,i],0),new Ki([r,s],0)]}class Sa{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new ka(`Invalid padding: ${t}`);if(n<0)throw new ka(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new ka(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new ka(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Ki.fromNumber(this.Ie)}Ee(e,t,n){let i=e.add(t.multiply(Ki.fromNumber(n)));return 1===i.compare(Ea)&&(i=new Ki([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ie)return!1;const t=Ca(e),[n,i]=Ia(t);for(let r=0;r<this.hashCount;r++){const e=this.Ee(n,i,r);if(!this.de(e))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),s=new Sa(r,i,t);return n.forEach((e=>s.insert(e))),s}insert(e){if(0===this.Ie)return;const t=Ca(e),[n,i]=Ia(t);for(let r=0;r<this.hashCount;r++){const e=this.Ee(n,i,r);this.Ae(e)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class ka extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,t,n,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,Ra.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Aa(Tr.min(),i,new Qr(yr),To(),Oo())}}class Ra{constructor(e,t,n,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Ra(n,t,Oo(),Oo(),Oo())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,t,n,i){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=i}}class Oa{constructor(e,t){this.targetId=e,this.me=t}}class Pa{constructor(e,t,n=ns.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class xa{constructor(){this.fe=0,this.ge=Ma(),this.pe=ns.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=Oo(),t=Oo(),n=Oo();return this.ge.forEach(((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:ir()}})),new Ra(this.pe,this.ye,e,t,n)}ve(){this.we=!1,this.ge=Ma()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,rr(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Da{constructor(e){this.Le=e,this.Be=new Map,this.ke=To(),this.qe=La(),this.Qe=new Qr(yr)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,(t=>{const n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.ve(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:ir()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach(((e,n)=>{this.ze(n)&&t(n)}))}He(e){const t=e.targetId,n=e.me.count,i=this.Je(t);if(i){const r=i.target;if(no(r))if(0===n){const e=new kr(r.path);this.Ue(t,e,Rs.newNoDocument(e,Tr.min()))}else rr(1===n);else{const i=this.Ye(t);if(i!==n){const n=this.Ze(e),r=n?this.Xe(n,e,i):1;if(0!==r){this.je(t);const e=2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,e)}null==ba||ba.et(function(e,t,n,i,r){var s,o,a,c,l,u;const h={localCacheCount:e,existenceFilterCount:t.count,databaseId:n.database,projectId:n.projectId},d=t.unchangedNames;return d&&(h.bloomFilter={applied:0===r,hashCount:null!==(s=null==d?void 0:d.hashCount)&&void 0!==s?s:0,bitmapLength:null!==(c=null===(a=null===(o=null==d?void 0:d.bits)||void 0===o?void 0:o.bitmap)||void 0===a?void 0:a.length)&&void 0!==c?c:0,padding:null!==(u=null===(l=null==d?void 0:d.bits)||void 0===l?void 0:l.padding)&&void 0!==u?u:0,mightContain:e=>{var t;return null!==(t=null==i?void 0:i.mightContain(e))&&void 0!==t&&t}}),h}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i,e.me,this.Le.tt(),n,r))}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:r=0}=t;let s,o;try{s=os(n).toUint8Array()}catch(e){if(e instanceof ts)return tr("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{o=new Sa(s,i,r)}catch(e){return tr(e instanceof ka?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===o.Ie?null:o}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let i=0;return n.forEach((n=>{const r=this.Le.tt(),s=`projects/${r.projectId}/databases/${r.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.Ue(t,n,null),i++)})),i}rt(e){const t=new Map;this.Be.forEach(((n,i)=>{const r=this.Je(i);if(r){if(n.current&&no(r.target)){const t=new kr(r.target.path);null!==this.ke.get(t)||this.it(i,t)||this.Ue(i,t,Rs.newNoDocument(t,e))}n.be&&(t.set(i,n.Ce()),n.ve())}}));let n=Oo();this.qe.forEach(((e,t)=>{let i=!0;t.forEachWhile((e=>{const t=this.Je(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(i=!1,!1)})),i&&(n=n.add(e))})),this.ke.forEach(((t,n)=>n.setReadTime(e)));const i=new Aa(e,t,this.Qe,this.ke,n);return this.ke=To(),this.qe=La(),this.Qe=new Qr(yr),i}$e(e,t){if(!this.ze(e))return;const n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new xa,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Jr(yr),this.qe=this.qe.insert(e,t)),t}ze(e){const t=null!==this.Je(e);return t||Zi("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new xa),this.Le.getRemoteKeysForTarget(e).forEach((t=>{this.Ue(e,t,null)}))}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function La(){return new Qr(kr.comparator)}function Ma(){return new Qr(kr.comparator)}const Fa=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),Ua=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),$a=(()=>{const e={and:"AND",or:"OR"};return e})();class ja{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Va(e,t){return e.useProto3Json||jr(t)?t:{value:t}}function Ba(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function qa(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Ha(e,t){return Ba(e,t.toTimestamp())}function za(e){return rr(!!e),Tr.fromTimestamp(function(e){const t=rs(e);return new br(t.seconds,t.nanos)}(e))}function Wa(e,t){return Ka(e,t).canonicalString()}function Ka(e,t){const n=function(e){return new Cr(["projects",e.projectId,"databases",e.database])}(e).child("documents");return void 0===t?n:n.child(t)}function Ga(e){const t=Cr.fromString(e);return rr(_c(t)),t}function Qa(e,t){return Wa(e.databaseId,t.path)}function Xa(e,t){const n=Ga(t);if(n.get(1)!==e.databaseId.projectId)throw new ar(or.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new ar(or.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new kr(ec(n))}function Ya(e,t){return Wa(e.databaseId,t)}function Ja(e){const t=Ga(e);return 4===t.length?Cr.emptyPath():ec(t)}function Za(e){return new Cr(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ec(e){return rr(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function tc(e,t,n){return{name:Qa(e,t),fields:n.value.mapValue.fields}}function nc(e,t){let n;if("targetChange"in t){t.targetChange;const i=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:ir()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],s=function(e,t){return e.useProto3Json?(rr(void 0===t||"string"==typeof t),ns.fromBase64String(t||"")):(rr(void 0===t||t instanceof Buffer||t instanceof Uint8Array),ns.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?or.UNKNOWN:wa(e.code);return new ar(t,e.message||"")}(o);n=new Pa(i,r,s,a||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const r=Xa(e,i.document.name),s=za(i.document.updateTime),o=i.document.createTime?za(i.document.createTime):Tr.min(),a=new ks({mapValue:{fields:i.document.fields}}),c=Rs.newFoundDocument(r,s,o,a),l=i.targetIds||[],u=i.removedTargetIds||[];n=new Na(l,u,c.key,c)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const r=Xa(e,i.document),s=i.readTime?za(i.readTime):Tr.min(),o=Rs.newNoDocument(r,s),a=i.removedTargetIds||[];n=new Na([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const r=Xa(e,i.document),s=i.removedTargetIds||[];n=new Na([],s,r,null)}else{if(!("filter"in t))return ir();{t.filter;const e=t.filter;e.targetId;const{count:i=0,unchangedNames:r}=e,s=new ma(i,r),o=e.targetId;n=new Oa(o,s)}}return n}function ic(e,t){let n;if(t instanceof oa)n={update:tc(e,t.key,t.value)};else if(t instanceof ha)n={delete:Qa(e,t.key)};else if(t instanceof aa)n={update:tc(e,t.key,t.data),updateMask:mc(t.fieldMask)};else{if(!(t instanceof da))return ir();n={verify:Qa(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Vo)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Bo)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ho)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Wo)return{fieldPath:t.field.canonicalString(),increment:n.Pe};throw ir()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Ha(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:ir()}(e,t.precondition)),n}function rc(e,t){return e&&e.length>0?(rr(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?za(e.updateTime):za(t);return n.isEqual(Tr.min())&&(n=za(t)),new Yo(n,e.transformResults||[])}(e,t)))):[]}function sc(e,t){return{documents:[Ya(e,t.path)]}}function oc(e,t){const n={structuredQuery:{}},i=t.path;let r;null!==t.collectionGroup?(r=i,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(r=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=Ya(e,r);const s=function(e){if(0!==e.length)return gc(Fs.create(e,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const o=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:fc(e.field),direction:uc(e.dir)}}(e)))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Va(e,t.limit);return null!==a&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(e){return{before:e.inclusive,values:e.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{_t:n,parent:r}}function ac(e){let t=Ja(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){rr(1===i);const e=n.from[0];e.allDescendants?r=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=lc(e);return t instanceof Fs&&$s(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=function(e){return e.map((e=>function(e){return new xs(pc(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)))}(n.orderBy));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,jr(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Ns(n,t)}(n.startAt));let l=null;return n.endAt&&(l=function(e){const t=!e.before,n=e.values||[];return new Ns(n,t)}(n.endAt)),ro(t,r,o,s,a,"F",c,l)}function cc(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ir()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}function lc(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=pc(e.unaryFilter.field);return Ms.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=pc(e.unaryFilter.field);return Ms.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=pc(e.unaryFilter.field);return Ms.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=pc(e.unaryFilter.field);return Ms.create(r,"!=",{nullValue:"NULL_VALUE"});default:return ir()}}(e):void 0!==e.fieldFilter?function(e){return Ms.create(pc(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ir()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Fs.create(e.compositeFilter.filters.map((e=>lc(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return ir()}}(e.compositeFilter.op))}(e):ir()}function uc(e){return Fa[e]}function hc(e){return Ua[e]}function dc(e){return $a[e]}function fc(e){return{fieldPath:e.canonicalString()}}function pc(e){return Sr.fromServerFormat(e.fieldPath)}function gc(e){return e instanceof Ms?function(e){if("=="===e.op){if(Es(e.value))return{unaryFilter:{field:fc(e.field),op:"IS_NAN"}};if(Ts(e.value))return{unaryFilter:{field:fc(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Es(e.value))return{unaryFilter:{field:fc(e.field),op:"IS_NOT_NAN"}};if(Ts(e.value))return{unaryFilter:{field:fc(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fc(e.field),op:hc(e.op),value:e.value}}}(e):e instanceof Fs?function(e){const t=e.getFilters().map((e=>gc(e)));return 1===t.length?t[0]:{compositeFilter:{op:dc(e.op),filters:t}}}(e):ir()}function mc(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function _c(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,t,n,i,r=Tr.min(),s=Tr.min(),o=ns.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new vc(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new vc(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new vc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new vc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e){this.ut=e}}function wc(e){const t=ac({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?ho(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bc{constructor(){}ht(e,t){this.Pt(e,t),t.It()}Pt(e,t){if("nullValue"in e)this.Tt(t,5);else if("booleanValue"in e)this.Tt(t,10),t.Et(e.booleanValue?1:0);else if("integerValue"in e)this.Tt(t,15),t.Et(ss(e.integerValue));else if("doubleValue"in e){const n=ss(e.doubleValue);isNaN(n)?this.Tt(t,13):(this.Tt(t,15),Vr(n)?t.Et(0):t.Et(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Tt(t,20),"string"==typeof n&&(n=rs(n)),t.dt(`${n.seconds||""}`),t.Et(n.nanos||0)}else if("stringValue"in e)this.At(e.stringValue,t),this.Rt(t);else if("bytesValue"in e)this.Tt(t,30),t.Vt(os(e.bytesValue)),this.Rt(t);else if("referenceValue"in e)this.ft(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Tt(t,45),t.Et(n.latitude||0),t.Et(n.longitude||0)}else"mapValue"in e?Ss(e)?this.Tt(t,Number.MAX_SAFE_INTEGER):(this.gt(e.mapValue,t),this.Rt(t)):"arrayValue"in e?(this.yt(e.arrayValue,t),this.Rt(t)):ir()}At(e,t){this.Tt(t,25),this.wt(e,t)}wt(e,t){t.dt(e)}gt(e,t){const n=e.fields||{};this.Tt(t,55);for(const i of Object.keys(n))this.At(i,t),this.Pt(n[i],t)}yt(e,t){const n=e.values||[];this.Tt(t,50);for(const i of n)this.Pt(i,t)}ft(e,t){this.Tt(t,37),kr.fromName(e).path.forEach((e=>{this.Tt(t,60),this.wt(e,t)}))}Tt(e,t){e.Et(t)}Rt(e){e.Et(2)}}bc.St=new bc;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tc{constructor(){this.on=new Ec}addToCollectionParentIndex(e,t){return this.on.add(t),Mr.resolve()}getCollectionParents(e,t){return Mr.resolve(this.on.getEntries(t))}addFieldIndex(e,t){return Mr.resolve()}deleteFieldIndex(e,t){return Mr.resolve()}deleteAllFieldIndexes(e){return Mr.resolve()}createTargetIndexes(e,t){return Mr.resolve()}getDocumentsMatchingTarget(e,t){return Mr.resolve(null)}getIndexType(e,t){return Mr.resolve(0)}getFieldIndexes(e,t){return Mr.resolve([])}getNextCollectionGroupToUpdate(e){return Mr.resolve(null)}getMinOffset(e,t){return Mr.resolve(Or.min())}getMinOffsetFromCollectionGroup(e,t){return Mr.resolve(Or.min())}updateCollectionGroup(e,t,n){return Mr.resolve()}updateIndexEntries(e,t){return Mr.resolve()}}class Ec{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new Jr(Cr.comparator),r=!i.has(n);return this.index[t]=i.add(n),r}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new Jr(Cr.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Cc{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Cc(e,Cc.DEFAULT_COLLECTION_PERCENTILE,Cc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Cc.DEFAULT_COLLECTION_PERCENTILE=10,Cc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Cc.DEFAULT=new Cc(41943040,Cc.DEFAULT_COLLECTION_PERCENTILE,Cc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Cc.DISABLED=new Cc(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ic{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Ic(0)}static Nn(){return new Ic(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sc{constructor(){this.changes=new wo((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Rs.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Mr.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kc{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(n=i,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&ia(n.mutation,e,es.empty(),br.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Oo()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Oo()){const i=So();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,n).next((e=>{let t=Co();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=So();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Oo())))}populateOverlays(e,t,n){const i=[];return n.forEach((e=>{t.has(e)||i.push(e)})),this.documentOverlayCache.getOverlays(e,i).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,i){let r=To();const s=Ao(),o=function(){return Ao()}();return t.forEach(((e,t)=>{const o=n.get(t.key);i.has(t.key)&&(void 0===o||o.mutation instanceof aa)?r=r.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),ia(o.mutation,t,o.mutation.getFieldMask(),br.now())):s.set(t.key,es.empty())})),this.recalculateAndSaveOverlays(e,r).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new kc(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Ao();let i=new Qr(((e,t)=>e-t)),r=Oo();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const r of e)r.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||es.empty();o=r.applyToLocalView(s,o),n.set(e,o);const a=(i.get(r.batchId)||Oo()).add(e);i=i.insert(r.batchId,a)}))})).next((()=>{const s=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,c=i.value,l=ko();c.forEach((e=>{if(!r.has(e)){const i=ta(t.get(e),n.get(e));null!==i&&l.set(e,i),r=r.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,l))}return Mr.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n,i){return function(e){return kr.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ao(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next((r=>{const s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-r.size):Mr.resolve(So());let o=-1,a=r;return s.next((t=>Mr.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(t)?Mr.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,r))).next((()=>this.computeViews(e,a,t,Oo()))).next((e=>({batchId:o,changes:Io(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new kr(t)).next((e=>{let t=Co();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){const r=t.collectionGroup;let s=Co();return this.indexManager.getCollectionParents(e,r).next((o=>Mr.forEach(o,(o=>{const a=function(e,t){return new io(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,o.child(r));return this.getDocumentsMatchingCollectionQuery(e,a,n,i).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r,i)))).next((e=>{r.forEach(((t,n)=>{const i=n.getKey();null===e.get(i)&&(e=e.insert(i,Rs.newInvalidDocument(i)))}));let n=Co();return e.forEach(((e,i)=>{const s=r.get(e);void 0!==s&&ia(s.mutation,i,es.empty(),br.now()),mo(t,i)&&(n=n.insert(e,i))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,t){return Mr.resolve(this.ur.get(t))}saveBundleMetadata(e,t){return this.ur.set(t.id,function(e){return{id:e.id,version:e.version,createTime:za(e.createTime)}}(t)),Mr.resolve()}getNamedQuery(e,t){return Mr.resolve(this.cr.get(t))}saveNamedQuery(e,t){return this.cr.set(t.name,function(e){return{name:e.name,query:wc(e.bundledQuery),readTime:za(e.readTime)}}(t)),Mr.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(){this.overlays=new Qr(kr.comparator),this.lr=new Map}getOverlay(e,t){return Mr.resolve(this.overlays.get(t))}getOverlays(e,t){const n=So();return Mr.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,i)=>{this.lt(e,t,i)})),Mr.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.lr.get(n);return void 0!==i&&(i.forEach((e=>this.overlays=this.overlays.remove(e))),this.lr.delete(n)),Mr.resolve()}getOverlaysForCollection(e,t,n){const i=So(),r=t.length+1,s=new kr(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===r&&e.largestBatchId>n&&i.set(e.getKey(),e)}return Mr.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let r=new Qr(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=r.get(e.largestBatchId);null===t&&(t=So(),r=r.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=So(),a=r.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=i)break;return Mr.resolve(o)}lt(e,t,n){const i=this.overlays.get(n.key);if(null!==i){const e=this.lr.get(i.largestBatchId).delete(n.key);this.lr.set(i.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new ga(t,n));let r=this.lr.get(t);void 0===r&&(r=Oo(),this.lr.set(t,r)),this.lr.set(t,r.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(){this.hr=new Jr(Pc.Pr),this.Ir=new Jr(Pc.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,t){const n=new Pc(e,t);this.hr=this.hr.add(n),this.Ir=this.Ir.add(n)}Er(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.dr(new Pc(e,t))}Ar(e,t){e.forEach((e=>this.removeReference(e,t)))}Rr(e){const t=new kr(new Cr([])),n=new Pc(t,e),i=new Pc(t,e+1),r=[];return this.Ir.forEachInRange([n,i],(e=>{this.dr(e),r.push(e.key)})),r}Vr(){this.hr.forEach((e=>this.dr(e)))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const t=new kr(new Cr([])),n=new Pc(t,e),i=new Pc(t,e+1);let r=Oo();return this.Ir.forEachInRange([n,i],(e=>{r=r.add(e.key)})),r}containsKey(e){const t=new Pc(e,0),n=this.hr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Pc{constructor(e,t){this.key=e,this.gr=t}static Pr(e,t){return kr.comparator(e.key,t.key)||yr(e.gr,t.gr)}static Tr(e,t){return yr(e.gr,t.gr)||kr.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.pr=1,this.yr=new Jr(Pc.Pr)}checkEmpty(e){return Mr.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,i){const r=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new fa(r,t,n,i);this.mutationQueue.push(s);for(const o of i)this.yr=this.yr.add(new Pc(o.key,r)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Mr.resolve(s)}lookupMutationBatch(e,t){return Mr.resolve(this.wr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.Sr(n),r=i<0?0:i;return Mr.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return Mr.resolve(0===this.mutationQueue.length?-1:this.pr-1)}getAllMutationBatches(e){return Mr.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Pc(t,0),i=new Pc(t,Number.POSITIVE_INFINITY),r=[];return this.yr.forEachInRange([n,i],(e=>{const t=this.wr(e.gr);r.push(t)})),Mr.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Jr(yr);return t.forEach((e=>{const t=new Pc(e,0),i=new Pc(e,Number.POSITIVE_INFINITY);this.yr.forEachInRange([t,i],(e=>{n=n.add(e.gr)}))})),Mr.resolve(this.br(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let r=n;kr.isDocumentKey(r)||(r=r.child(""));const s=new Pc(new kr(r),0);let o=new Jr(yr);return this.yr.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===i&&(o=o.add(e.gr)),!0)}),s),Mr.resolve(this.br(o))}br(e){const t=[];return e.forEach((e=>{const n=this.wr(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){rr(0===this.Dr(t.batchId,"removed")),this.mutationQueue.shift();let n=this.yr;return Mr.forEach(t.mutations,(i=>{const r=new Pc(i.key,t.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.yr=n}))}Fn(e){}containsKey(e,t){const n=new Pc(t,0),i=this.yr.firstAfterOrEqual(n);return Mr.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,Mr.resolve()}Dr(e,t){return this.Sr(e)}Sr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}wr(e){const t=this.Sr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e){this.Cr=e,this.docs=function(){return new Qr(kr.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),r=i?i.size:0,s=this.Cr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Mr.resolve(n?n.document.mutableCopy():Rs.newInvalidDocument(t))}getEntries(e,t){let n=To();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Rs.newInvalidDocument(e))})),Mr.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let r=To();const s=t.path,o=new kr(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||Pr(Nr(o),n)<=0||(i.has(o.key)||mo(t,o))&&(r=r.insert(o.key,o.mutableCopy()))}return Mr.resolve(r)}getAllFromCollectionGroup(e,t,n,i){ir()}vr(e,t){return Mr.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Lc(this)}getSize(e){return Mr.resolve(this.size)}}class Lc extends Sc{constructor(e){super(),this._r=e}applyChanges(e){const t=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?t.push(this._r.addEntry(e,i)):this._r.removeEntry(n)})),Mr.waitFor(t)}getFromCache(e,t){return this._r.getEntry(e,t)}getAllFromCache(e,t){return this._r.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e){this.persistence=e,this.Fr=new wo((e=>eo(e)),to),this.lastRemoteSnapshotVersion=Tr.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Oc,this.targetCount=0,this.Nr=Ic.On()}forEachTarget(e,t){return this.Fr.forEach(((e,n)=>t(n))),Mr.resolve()}getLastRemoteSnapshotVersion(e){return Mr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Mr.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),Mr.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Mr&&(this.Mr=t),Mr.resolve()}kn(e){this.Fr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Nr=new Ic(t),this.highestTargetId=t),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,t){return this.kn(t),this.targetCount+=1,Mr.resolve()}updateTargetData(e,t){return this.kn(t),Mr.resolve()}removeTargetData(e,t){return this.Fr.delete(t.target),this.Or.Rr(t.targetId),this.targetCount-=1,Mr.resolve()}removeTargets(e,t,n){let i=0;const r=[];return this.Fr.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Fr.delete(s),r.push(this.removeMatchingKeysForTargetId(e,o.targetId)),i++)})),Mr.waitFor(r).next((()=>i))}getTargetCount(e){return Mr.resolve(this.targetCount)}getTargetData(e,t){const n=this.Fr.get(t)||null;return Mr.resolve(n)}addMatchingKeys(e,t,n){return this.Or.Er(t,n),Mr.resolve()}removeMatchingKeys(e,t,n){this.Or.Ar(t,n);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach((t=>{r.push(i.markPotentiallyOrphaned(e,t))})),Mr.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Or.Rr(t),Mr.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Or.mr(t);return Mr.resolve(n)}containsKey(e,t){return Mr.resolve(this.Or.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,t){this.Lr={},this.overlays={},this.Br=new $r(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new Mc(this),this.indexManager=new Tc,this.remoteDocumentCache=function(e){return new Dc(e)}((e=>this.referenceDelegate.Qr(e))),this.serializer=new yc(t),this.Kr=new Rc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Nc,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Lr[e.toKey()];return n||(n=new xc(t,this.referenceDelegate),this.Lr[e.toKey()]=n),n}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,t,n){Zi("MemoryPersistence","Starting transaction:",e);const i=new Uc(this.Br.next());return this.referenceDelegate.$r(),n(i).next((e=>this.referenceDelegate.Ur(i).next((()=>e)))).toPromise().then((e=>(i.raiseOnCommittedEvent(),e)))}Wr(e,t){return Mr.or(Object.values(this.Lr).map((n=>()=>n.containsKey(e,t))))}}class Uc extends Dr{constructor(e){super(),this.currentSequenceNumber=e}}class $c{constructor(e){this.persistence=e,this.Gr=new Oc,this.zr=null}static jr(e){return new $c(e)}get Hr(){if(this.zr)return this.zr;throw ir()}addReference(e,t,n){return this.Gr.addReference(n,t),this.Hr.delete(n.toString()),Mr.resolve()}removeReference(e,t,n){return this.Gr.removeReference(n,t),this.Hr.add(n.toString()),Mr.resolve()}markPotentiallyOrphaned(e,t){return this.Hr.add(t.toString()),Mr.resolve()}removeTarget(e,t){this.Gr.Rr(t.targetId).forEach((e=>this.Hr.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Hr.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}$r(){this.zr=new Set}Ur(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Mr.forEach(this.Hr,(n=>{const i=kr.fromPath(n);return this.Jr(e,i).next((e=>{e||t.removeEntry(i,Tr.min())}))})).next((()=>(this.zr=null,t.apply(e))))}updateLimboDocument(e,t){return this.Jr(e,t).next((e=>{e?this.Hr.delete(t.toString()):this.Hr.add(t.toString())}))}Qr(e){return 0}Jr(e,t){return Mr.or([()=>Mr.resolve(this.Gr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Wr(e,t)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jc{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.ki=n,this.qi=i}static Qi(e,t){let n=Oo(),i=Oo();for(const r of t.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new jc(e,t.fromCache,n,i)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=function(){return(0,a.nr)()?8:Fr((0,a.ZQ)())>0?6:4}()}initialize(e,t){this.Gi=e,this.indexManager=t,this.Ki=!0}getDocumentsMatchingQuery(e,t,n,i){const r={result:null};return this.zi(e,t).next((e=>{r.result=e})).next((()=>{if(!r.result)return this.ji(e,t,i,n).next((e=>{r.result=e}))})).next((()=>{if(r.result)return;const n=new Vc;return this.Hi(e,t,n).next((i=>{if(r.result=i,this.$i)return this.Ji(e,t,n,i.size)}))})).next((()=>r.result))}Ji(e,t,n,i){return n.documentReadCount<this.Ui?(Ji()<=o.$b.DEBUG&&Zi("QueryEngine","SDK will not create cache indexes for query:",go(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),Mr.resolve()):(Ji()<=o.$b.DEBUG&&Zi("QueryEngine","Query:",go(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Wi*i?(Ji()<=o.$b.DEBUG&&Zi("QueryEngine","The SDK decides to create cache indexes for query:",go(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,lo(t))):Mr.resolve())}zi(e,t){if(oo(t))return Mr.resolve(null);let n=lo(t);return this.indexManager.getIndexType(e,n).next((i=>0===i?null:(null!==t.limit&&1===i&&(t=ho(t,null,"F"),n=lo(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((i=>{const r=Oo(...i);return this.Gi.getDocuments(e,r).next((i=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.Yi(t,i);return this.Zi(t,s,r,n.readTime)?this.zi(e,ho(t,null,"F")):this.Xi(e,s,t,n)}))))})))))}ji(e,t,n,i){return oo(t)||i.isEqual(Tr.min())?Mr.resolve(null):this.Gi.getDocuments(e,n).next((r=>{const s=this.Yi(t,r);return this.Zi(t,s,n,i)?Mr.resolve(null):(Ji()<=o.$b.DEBUG&&Zi("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),go(t)),this.Xi(e,s,t,Rr(i,-1)).next((e=>e)))}))}Yi(e,t){let n=new Jr(vo(e));return t.forEach(((t,i)=>{mo(e,i)&&(n=n.add(i))})),n}Zi(e,t,n,i){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const r="F"===e.limitType?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Hi(e,t,n){return Ji()<=o.$b.DEBUG&&Zi("QueryEngine","Using full collection scan to execute query:",go(t)),this.Gi.getDocumentsMatchingQuery(e,t,Or.min(),n)}Xi(e,t,n,i){return this.Gi.getDocumentsMatchingQuery(e,n,i).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,t,n,i){this.persistence=e,this.es=t,this.serializer=i,this.ts=new Qr(yr),this.ns=new wo((e=>eo(e)),to),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(n)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ac(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.ts)))}}function Hc(e,t,n,i){return new qc(e,t,n,i)}async function zc(e,t){const n=sr(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let i;return n.mutationQueue.getAllMutationBatches(e).next((r=>(i=r,n.os(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const r=[],s=[];let o=Oo();for(const e of i){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({_s:e,removedBatchIds:r,addedBatchIds:s})))}))}))}function Wc(e,t){const n=sr(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const i=t.batch.keys(),r=n.ss.newChangeBuffer({trackRemovals:!0});return function(e,t,n,i){const r=n.batch,s=r.keys();let o=Mr.resolve();return s.forEach((e=>{o=o.next((()=>i.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);rr(null!==s),t.version.compareTo(s)<0&&(r.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),i.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,r)))}(n,e,t,r).next((()=>r.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Oo();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,i)))}))}function Kc(e){const t=sr(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.qr.getLastRemoteSnapshotVersion(e)))}function Gc(e,t){const n=sr(e),i=t.snapshotVersion;let r=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.ss.newChangeBuffer({trackRemovals:!0});r=n.ts;const o=[];t.targetChanges.forEach(((s,a)=>{const c=r.get(a);if(!c)return;o.push(n.qr.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.qr.addMatchingKeys(e,s.addedDocuments,a))));let l=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?l=l.withResumeToken(ns.EMPTY_BYTE_STRING,Tr.min()).withLastLimboFreeSnapshotVersion(Tr.min()):s.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(s.resumeToken,i)),r=r.insert(a,l),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,l,s)&&o.push(n.qr.updateTargetData(e,l))}));let a=To(),c=Oo();if(t.documentUpdates.forEach((i=>{t.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,i))})),o.push(Qc(e,s,t.documentUpdates).next((e=>{a=e.us,c=e.cs}))),!i.isEqual(Tr.min())){const t=n.qr.getLastRemoteSnapshotVersion(e).next((t=>n.qr.setTargetsMetadata(e,e.currentSequenceNumber,i)));o.push(t)}return Mr.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.ts=r,e)))}function Qc(e,t,n){let i=Oo(),r=Oo();return n.forEach((e=>i=i.add(e))),t.getEntries(e,i).next((e=>{let i=To();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(r=r.add(n)),s.isNoDocument()&&s.version.isEqual(Tr.min())?(t.removeEntry(n,s.readTime),i=i.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),i=i.insert(n,s)):Zi("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{us:i,cs:r}}))}function Xc(e,t){const n=sr(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function Yc(e,t){const n=sr(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let i;return n.qr.getTargetData(e,t).next((r=>r?(i=r,Mr.resolve(i)):n.qr.allocateTargetId(e).next((r=>(i=new vc(t,r,"TargetPurposeListen",e.currentSequenceNumber),n.qr.addTargetData(e,i).next((()=>i)))))))})).then((e=>{const i=n.ts.get(e.targetId);return(null===i||e.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(e.targetId,e),n.ns.set(t,e.targetId)),e}))}async function Jc(e,t,n){const i=sr(e),r=i.ts.get(t),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,(e=>i.persistence.referenceDelegate.removeTarget(e,r)))}catch(e){if(!Ur(e))throw e;Zi("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}i.ts=i.ts.remove(t),i.ns.delete(r.target)}function Zc(e,t,n){const i=sr(e);let r=Tr.min(),s=Oo();return i.persistence.runTransaction("Execute query","readwrite",(e=>function(e,t,n){const i=sr(e),r=i.ns.get(n);return void 0!==r?Mr.resolve(i.ts.get(r)):i.qr.getTargetData(t,n)}(i,e,lo(t)).next((t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,i.qr.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>i.es.getDocumentsMatchingQuery(e,t,n?r:Tr.min(),n?s:Oo()))).next((e=>(el(i,_o(t),e),{documents:e,ls:s})))))}function el(e,t,n){let i=e.rs.get(t)||Tr.min();n.forEach(((e,t)=>{t.readTime.compareTo(i)>0&&(i=t.readTime)})),e.rs.set(t,i)}class tl{constructor(){this.activeTargetIds=xo()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nl{constructor(){this.eo=new tl,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,t,n){this.no[e]=t}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new tl,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{ro(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){Zi("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){Zi("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sl=null;function ol(){return null===sl?sl=function(){return 268435456+Math.round(2147483648*Math.random())}():sl++,"0x"+sl.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const al={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.lo()}send(e){this.co(e)}Vo(){this.Po()}mo(){this.To()}fo(e){this.Ao(e)}po(e){this.Ro(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll="WebChannelConnection";class ul extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.yo=t+"://"+e.host,this.wo=`projects/${n}/databases/${i}`,this.So="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${i}`}get bo(){return!1}Do(e,t,n,i,r){const s=ol(),o=this.Co(e,t.toUriEncodedString());Zi("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.wo,"x-goog-request-params":this.So};return this.vo(a,i,r),this.Fo(e,o,a,n).then((t=>(Zi("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw tr("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}Mo(e,t,n,i,r,s){return this.Do(e,t,n,i,r)}vo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Xi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}Co(e,t){const n=al[e];return`${this.yo}/v1/${t}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Fo(e,t,n,i){const r=ol();return new Promise(((s,o)=>{const a=new zi;a.setWithCredentials(!0),a.listenOnce(ji.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case $i.NO_ERROR:const t=a.getResponseJson();Zi(ll,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(t)),s(t);break;case $i.TIMEOUT:Zi(ll,`RPC '${e}' ${r} timed out`),o(new ar(or.DEADLINE_EXCEEDED,"Request time out"));break;case $i.HTTP_ERROR:const n=a.getStatus();if(Zi(ll,`RPC '${e}' ${r} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(or).indexOf(t)>=0?t:or.UNKNOWN}(t.status);o(new ar(e,t.message))}else o(new ar(or.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new ar(or.UNAVAILABLE,"Connection failed."));break;default:ir()}}finally{Zi(ll,`RPC '${e}' ${r} completed.`)}}));const c=JSON.stringify(i);Zi(ll,`RPC '${e}' ${r} sending request:`,i),a.send(t,"POST",c,n,15)}))}xo(e,t,n){const i=ol(),r=[this.yo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Fi(),o=Ui(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new qi({})),this.vo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const l=r.join("");Zi(ll,`Creating RPC '${e}' stream ${i}: ${l}`,a);const u=s.createWebChannel(l,a);let h=!1,d=!1;const f=new cl({co:t=>{d?Zi(ll,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(h||(Zi(ll,`Opening RPC '${e}' stream ${i} transport.`),u.open(),h=!0),Zi(ll,`RPC '${e}' stream ${i} sending:`,t),u.send(t))},lo:()=>u.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return p(u,Hi.EventType.OPEN,(()=>{d||(Zi(ll,`RPC '${e}' stream ${i} transport opened.`),f.Vo())})),p(u,Hi.EventType.CLOSE,(()=>{d||(d=!0,Zi(ll,`RPC '${e}' stream ${i} transport closed`),f.fo())})),p(u,Hi.EventType.ERROR,(t=>{d||(d=!0,tr(ll,`RPC '${e}' stream ${i} transport errored:`,t),f.fo(new ar(or.UNAVAILABLE,"The operation could not be completed")))})),p(u,Hi.EventType.MESSAGE,(t=>{var n;if(!d){const r=t.data[0];rr(!!r);const s=r,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Zi(ll,`RPC '${e}' stream ${i} received error:`,o);const t=o.status;let n=function(e){const t=_a[e];if(void 0!==t)return wa(t)}(t),r=o.message;void 0===n&&(n=or.INTERNAL,r="Unknown error status: "+t+" with message "+o.message),d=!0,f.fo(new ar(n,r)),u.close()}else Zi(ll,`RPC '${e}' stream ${i} received:`,r),f.po(r)}})),p(o,Vi.STAT_EVENT,(t=>{t.stat===Bi.PROXY?Zi(ll,`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===Bi.NOPROXY&&Zi(ll,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{f.mo()}),0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(e){return new ja(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,t,n=1e3,i=1.5,r=6e4){this.si=e,this.timerId=t,this.Oo=n,this.No=i,this.Lo=r,this.Bo=0,this.ko=null,this.qo=Date.now(),this.reset()}reset(){this.Bo=0}Qo(){this.Bo=this.Lo}Ko(e){this.cancel();const t=Math.floor(this.Bo+this.$o()),n=Math.max(0,Date.now()-this.qo),i=Math.max(0,t-n);i>0&&Zi("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Bo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.ko=this.si.enqueueAfterDelay(this.timerId,i,(()=>(this.qo=Date.now(),e()))),this.Bo*=this.No,this.Bo<this.Oo&&(this.Bo=this.Oo),this.Bo>this.Lo&&(this.Bo=this.Lo)}Uo(){null!==this.ko&&(this.ko.skipDelay(),this.ko=null)}cancel(){null!==this.ko&&(this.ko.cancel(),this.ko=null)}$o(){return(Math.random()-.5)*this.Bo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,t,n,i,r,s,o,a){this.si=e,this.Wo=n,this.Go=i,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.zo=0,this.jo=null,this.Ho=null,this.stream=null,this.Jo=new fl(e,t)}Yo(){return 1===this.state||5===this.state||this.Zo()}Zo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Xo()}async stop(){this.Yo()&&await this.close(0)}e_(){this.state=0,this.Jo.reset()}t_(){this.Zo()&&null===this.jo&&(this.jo=this.si.enqueueAfterDelay(this.Wo,6e4,(()=>this.n_())))}r_(e){this.i_(),this.stream.send(e)}async n_(){if(this.Zo())return this.close(0)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}async close(e,t){this.i_(),this.s_(),this.Jo.cancel(),this.zo++,4!==e?this.Jo.reset():t&&t.code===or.RESOURCE_EXHAUSTED?(er(t.toString()),er("Using maximum backoff delay to prevent overloading the backend."),this.Jo.Qo()):t&&t.code===or.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.o_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(t)}o_(){}auth(){this.state=1;const e=this.__(this.zo),t=this.zo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.zo===t&&this.a_(e,n)}),(t=>{e((()=>{const e=new ar(or.UNKNOWN,"Fetching auth token failed: "+t.message);return this.u_(e)}))}))}a_(e,t){const n=this.__(this.zo);this.stream=this.c_(e,t),this.stream.ho((()=>{n((()=>this.listener.ho()))})),this.stream.Io((()=>{n((()=>(this.state=2,this.Ho=this.si.enqueueAfterDelay(this.Go,1e4,(()=>(this.Zo()&&(this.state=3),Promise.resolve()))),this.listener.Io())))})),this.stream.Eo((e=>{n((()=>this.u_(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Xo(){this.state=5,this.Jo.Ko((async()=>{this.state=0,this.start()}))}u_(e){return Zi("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}__(e){return t=>{this.si.enqueueAndForget((()=>this.zo===e?t():(Zi("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class gl extends pl{constructor(e,t,n,i,r,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,s),this.serializer=r}c_(e,t){return this.connection.xo("Listen",e,t)}onMessage(e){this.Jo.reset();const t=nc(this.serializer,e),n=function(e){if(!("targetChange"in e))return Tr.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Tr.min():t.readTime?za(t.readTime):Tr.min()}(e);return this.listener.l_(t,n)}h_(e){const t={};t.database=Za(this.serializer),t.addTarget=function(e,t){let n;const i=t.target;if(n=no(i)?{documents:sc(e,i)}:{query:oc(e,i)._t},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=qa(e,t.resumeToken);const i=Va(e,t.expectedCount);null!==i&&(n.expectedCount=i)}else if(t.snapshotVersion.compareTo(Tr.min())>0){n.readTime=Ba(e,t.snapshotVersion.toTimestamp());const i=Va(e,t.expectedCount);null!==i&&(n.expectedCount=i)}return n}(this.serializer,e);const n=cc(this.serializer,e);n&&(t.labels=n),this.r_(t)}P_(e){const t={};t.database=Za(this.serializer),t.removeTarget=e,this.r_(t)}}class ml extends pl{constructor(e,t,n,i,r,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,s),this.serializer=r,this.I_=!1}get T_(){return this.I_}start(){this.I_=!1,this.lastStreamToken=void 0,super.start()}o_(){this.I_&&this.E_([])}c_(e,t){return this.connection.xo("Write",e,t)}onMessage(e){if(rr(!!e.streamToken),this.lastStreamToken=e.streamToken,this.I_){this.Jo.reset();const t=rc(e.writeResults,e.commitTime),n=za(e.commitTime);return this.listener.d_(n,t)}return rr(!e.writeResults||0===e.writeResults.length),this.I_=!0,this.listener.A_()}R_(){const e={};e.database=Za(this.serializer),this.r_(e)}E_(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>ic(this.serializer,e)))};this.r_(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.V_=!1}m_(){if(this.V_)throw new ar(or.FAILED_PRECONDITION,"The client has already been terminated.")}Do(e,t,n,i){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.connection.Do(e,Ka(t,n),i,r,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===or.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ar(or.UNKNOWN,e.toString())}))}Mo(e,t,n,i,r){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.Mo(e,Ka(t,n),i,s,o,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===or.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ar(or.UNKNOWN,e.toString())}))}terminate(){this.V_=!0,this.connection.terminate()}}class vl{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){0===this.g_&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve()))))}D_(e){"Online"===this.state?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,"Online"===e&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(er(t),this.y_=!1):Zi("OnlineStateTracker",t)}C_(){null!==this.p_&&(this.p_.cancel(),this.p_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,t,n,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=r,this.O_.ro((e=>{n.enqueueAndForget((async()=>{Al(this)&&(Zi("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=sr(e);t.M_.add(4),await bl(t),t.N_.set("Unknown"),t.M_.delete(4),await wl(t)}(this))}))})),this.N_=new vl(n,i)}}async function wl(e){if(Al(e))for(const t of e.x_)await t(!0)}async function bl(e){for(const t of e.x_)await t(!1)}function Tl(e,t){const n=sr(e);n.F_.has(t.targetId)||(n.F_.set(t.targetId,t),kl(n)?Sl(n):Kl(n).Zo()&&Cl(n,t))}function El(e,t){const n=sr(e),i=Kl(n);n.F_.delete(t),i.Zo()&&Il(n,t),0===n.F_.size&&(i.Zo()?i.t_():Al(n)&&n.N_.set("Unknown"))}function Cl(e,t){if(e.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Tr.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Kl(e).h_(t)}function Il(e,t){e.L_.xe(t),Kl(e).P_(t)}function Sl(e){e.L_=new Da({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>e.F_.get(t)||null,tt:()=>e.datastore.serializer.databaseId}),Kl(e).start(),e.N_.w_()}function kl(e){return Al(e)&&!Kl(e).Yo()&&e.F_.size>0}function Al(e){return 0===sr(e).M_.size}function Rl(e){e.L_=void 0}async function Nl(e){e.N_.set("Online")}async function Ol(e){e.F_.forEach(((t,n)=>{Cl(e,t)}))}async function Pl(e,t){Rl(e),kl(e)?(e.N_.D_(t),Sl(e)):e.N_.set("Unknown")}async function xl(e,t,n){if(e.N_.set("Online"),t instanceof Pa&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const i of t.targetIds)e.F_.has(i)&&(await e.remoteSyncer.rejectListen(i,n),e.F_.delete(i),e.L_.removeTarget(i))}(e,t)}catch(n){Zi("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Dl(e,n)}else if(t instanceof Na?e.L_.Ke(t):t instanceof Oa?e.L_.He(t):e.L_.We(t),!n.isEqual(Tr.min()))try{const t=await Kc(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.L_.rt(t);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const r=e.F_.get(i);r&&e.F_.set(i,r.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const i=e.F_.get(t);if(!i)return;e.F_.set(t,i.withResumeToken(ns.EMPTY_BYTE_STRING,i.snapshotVersion)),Il(e,t);const r=new vc(i.target,t,n,i.sequenceNumber);Cl(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Zi("RemoteStore","Failed to raise snapshot:",t),await Dl(e,t)}}async function Dl(e,t,n){if(!Ur(t))throw t;e.M_.add(1),await bl(e),e.N_.set("Offline"),n||(n=()=>Kc(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Zi("RemoteStore","Retrying IndexedDB access"),await n(),e.M_.delete(1),await wl(e)}))}function Ll(e,t){return t().catch((n=>Dl(e,n,t)))}async function Ml(e){const t=sr(e),n=Gl(t);let i=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;Fl(t);)try{const e=await Xc(t.localStore,i);if(null===e){0===t.v_.length&&n.t_();break}i=e.batchId,Ul(t,e)}catch(e){await Dl(t,e)}$l(t)&&jl(t)}function Fl(e){return Al(e)&&e.v_.length<10}function Ul(e,t){e.v_.push(t);const n=Gl(e);n.Zo()&&n.T_&&n.E_(t.mutations)}function $l(e){return Al(e)&&!Gl(e).Yo()&&e.v_.length>0}function jl(e){Gl(e).start()}async function Vl(e){Gl(e).R_()}async function Bl(e){const t=Gl(e);for(const n of e.v_)t.E_(n.mutations)}async function ql(e,t,n){const i=e.v_.shift(),r=pa.from(i,t,n);await Ll(e,(()=>e.remoteSyncer.applySuccessfulWrite(r))),await Ml(e)}async function Hl(e,t){t&&Gl(e).T_&&await async function(e,t){if(function(e){return ya(e)&&e!==or.ABORTED}(t.code)){const n=e.v_.shift();Gl(e).e_(),await Ll(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Ml(e)}}(e,t),$l(e)&&jl(e)}async function zl(e,t){const n=sr(e);n.asyncQueue.verifyOperationInProgress(),Zi("RemoteStore","RemoteStore received new credentials");const i=Al(n);n.M_.add(3),await bl(n),i&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.M_.delete(3),await wl(n)}async function Wl(e,t){const n=sr(e);t?(n.M_.delete(2),await wl(n)):t||(n.M_.add(2),await bl(n),n.N_.set("Unknown"))}function Kl(e){return e.B_||(e.B_=function(e,t,n){const i=sr(e);return i.m_(),new gl(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{ho:Nl.bind(null,e),Io:Ol.bind(null,e),Eo:Pl.bind(null,e),l_:xl.bind(null,e)}),e.x_.push((async t=>{t?(e.B_.e_(),kl(e)?Sl(e):e.N_.set("Unknown")):(await e.B_.stop(),Rl(e))}))),e.B_}function Gl(e){return e.k_||(e.k_=function(e,t,n){const i=sr(e);return i.m_(),new ml(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(e.datastore,e.asyncQueue,{ho:()=>Promise.resolve(),Io:Vl.bind(null,e),Eo:Hl.bind(null,e),A_:Bl.bind(null,e),d_:ql.bind(null,e)}),e.x_.push((async t=>{t?(e.k_.e_(),await Ml(e)):(await e.k_.stop(),e.v_.length>0&&(Zi("RemoteStore",`Stopping write stream with ${e.v_.length} pending writes`),e.v_=[]))}))),e.k_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ql{constructor(e,t,n,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new cr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,r){const s=Date.now()+n,o=new Ql(e,t,s,i,r);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ar(or.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xl(e,t){if(er("AsyncQueue",`${t}: ${e}`),Ur(e))return new ar(or.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e){this.comparator=e?(t,n)=>e(t,n)||kr.comparator(t.key,n.key):(e,t)=>kr.comparator(e.key,t.key),this.keyedMap=Co(),this.sortedSet=new Qr(this.comparator)}static emptySet(e){return new Yl(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Yl))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(!e.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Yl;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(){this.q_=new Qr(kr.comparator)}track(e){const t=e.doc.key,n=this.q_.get(t);n?0!==e.type&&3===n.type?this.q_=this.q_.insert(t,e):3===e.type&&1!==n.type?this.q_=this.q_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.q_=this.q_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.q_=this.q_.remove(t):1===e.type&&2===n.type?this.q_=this.q_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):ir():this.q_=this.q_.insert(t,e)}Q_(){const e=[];return this.q_.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Zl{constructor(e,t,n,i,r,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,i,r){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new Zl(e,t,Yl.emptySet(t),s,n,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some((e=>e.G_()))}}class tu{constructor(){this.queries=new wo((e=>po(e)),fo),this.onlineState="Unknown",this.z_=new Set}}async function nu(e,t){const n=sr(e);let i=3;const r=t.query;let s=n.queries.get(r);s?!s.W_()&&t.G_()&&(i=2):(s=new eu,i=t.G_()?0:1);try{switch(i){case 0:s.K_=await n.onListen(r,!0);break;case 1:s.K_=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(e){const n=Xl(e,`Initialization of query '${go(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.U_.push(t),t.j_(n.onlineState),s.K_&&t.H_(s.K_)&&ou(n)}async function iu(e,t){const n=sr(e),i=t.query;let r=3;const s=n.queries.get(i);if(s){const e=s.U_.indexOf(t);e>=0&&(s.U_.splice(e,1),0===s.U_.length?r=t.G_()?0:1:!s.W_()&&t.G_()&&(r=2))}switch(r){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function ru(e,t){const n=sr(e);let i=!1;for(const r of t){const e=r.query,t=n.queries.get(e);if(t){for(const e of t.U_)e.H_(r)&&(i=!0);t.K_=r}}i&&ou(n)}function su(e,t,n){const i=sr(e),r=i.queries.get(t);if(r)for(const s of r.U_)s.onError(n);i.queries.delete(t)}function ou(e){e.z_.forEach((e=>{e.next()}))}var au,cu;(cu=au||(au={})).J_="default",cu.Cache="cache";class lu{constructor(e,t,n){this.query=e,this.Y_=t,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=n||{}}H_(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Zl(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),t=!0):this.ta(e,this.onlineState)&&(this.na(e),t=!0),this.X_=e,t}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let t=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),t=!0),t}ta(e,t){if(!e.fromCache)return!0;if(!this.G_())return!0;const n="Offline"!==t;return(!this.options.ra||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}ea(e){if(e.docChanges.length>0)return!0;const t=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}na(e){e=Zl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==au.Cache}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uu{constructor(e){this.key=e}}class hu{constructor(e){this.key=e}}class du{constructor(e,t){this.query=e,this.la=t,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=Oo(),this.mutatedKeys=Oo(),this.Ia=vo(e),this.Ta=new Yl(this.Ia)}get Ea(){return this.la}da(e,t){const n=t?t.Aa:new Jl,i=t?t.Ta:this.Ta;let r=t?t.mutatedKeys:this.mutatedKeys,s=i,o=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,c="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((e,t)=>{const l=i.get(e),u=mo(this.query,t)?t:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.Ra(l,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Ia(u,a)>0||c&&this.Ia(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),f=!0):l&&!u&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(u?(s=s.add(u),r=d?r.add(e):r.delete(e)):(s=s.delete(e),r=r.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),r=r.delete(e.key),n.track({type:1,doc:e})}return{Ta:s,Aa:n,Zi:o,mutatedKeys:r}}Ra(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){const r=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const s=e.Aa.Q_();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ir()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Ia(e.doc,t.doc))),this.Va(n),i=null!=i&&i;const o=t&&!i?this.ma():[],a=0===this.Pa.size&&this.current&&!i?1:0,c=a!==this.ha;return this.ha=a,0!==s.length||c?{snapshot:new Zl(this.query,e.Ta,r,s,e.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),fa:o}:{fa:o}}j_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Jl,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach((e=>this.la=this.la.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.la=this.la.delete(e))),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=Oo(),this.Ta.forEach((e=>{this.ga(e.key)&&(this.Pa=this.Pa.add(e.key))}));const t=[];return e.forEach((e=>{this.Pa.has(e)||t.push(new hu(e))})),this.Pa.forEach((n=>{e.has(n)||t.push(new uu(n))})),t}pa(e){this.la=e.ls,this.Pa=Oo();const t=this.da(e.documents);return this.applyChanges(t,!0)}ya(){return Zl.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,0===this.ha,this.hasCachedResults)}}class fu{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class pu{constructor(e){this.key=e,this.wa=!1}}class gu{constructor(e,t,n,i,r,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.Sa={},this.ba=new wo((e=>po(e)),fo),this.Da=new Map,this.Ca=new Set,this.va=new Qr(kr.comparator),this.Fa=new Map,this.Ma=new Oc,this.xa={},this.Oa=new Map,this.Na=Ic.Nn(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return!0===this.La}}async function mu(e,t,n=!0){const i=Uu(e);let r;const s=i.ba.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.ya()):r=await vu(i,t,n,!0),r}async function _u(e,t){const n=Uu(e);await vu(n,t,!0,!1)}async function vu(e,t,n,i){const r=await Yc(e.localStore,lo(t)),s=r.targetId,o=n?e.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return i&&(a=await yu(e,t,s,"current"===o,r.resumeToken)),e.isPrimaryClient&&n&&Tl(e.remoteStore,r),a}async function yu(e,t,n,i,r){e.Ba=(t,n,i)=>async function(e,t,n,i){let r=t.view.da(n);r.Zi&&(r=await Zc(e.localStore,t.query,!1).then((({documents:e})=>t.view.da(e,r))));const s=i&&i.targetChanges.get(t.targetId),o=i&&null!=i.targetMismatches.get(t.targetId),a=t.view.applyChanges(r,e.isPrimaryClient,s,o);return Pu(e,t.targetId,a.fa),a.snapshot}(e,t,n,i);const s=await Zc(e.localStore,t,!0),o=new du(t,s.ls),a=o.da(s.documents),c=Ra.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==e.onlineState,r),l=o.applyChanges(a,e.isPrimaryClient,c);Pu(e,n,l.fa);const u=new fu(t,n,o);return e.ba.set(t,u),e.Da.has(n)?e.Da.get(n).push(t):e.Da.set(n,[t]),l.snapshot}async function wu(e,t,n){const i=sr(e),r=i.ba.get(t),s=i.Da.get(r.targetId);if(s.length>1)return i.Da.set(r.targetId,s.filter((e=>!fo(e,t)))),void i.ba.delete(t);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(r.targetId),i.sharedClientState.isActiveQueryTarget(r.targetId)||await Jc(i.localStore,r.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(r.targetId),n&&El(i.remoteStore,r.targetId),Nu(i,r.targetId)})).catch(Lr)):(Nu(i,r.targetId),await Jc(i.localStore,r.targetId,!0))}async function bu(e,t){const n=sr(e),i=n.ba.get(t),r=n.Da.get(i.targetId);n.isPrimaryClient&&1===r.length&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),El(n.remoteStore,i.targetId))}async function Tu(e,t,n){const i=$u(e);try{const e=await function(e,t){const n=sr(e),i=br.now(),r=t.reduce(((e,t)=>e.add(t.key)),Oo());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=To(),c=Oo();return n.ss.getEntries(e,r).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((r=>{s=r;const o=[];for(const e of t){const t=ra(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new aa(e.key,t,As(t.value.mapValue),Jo.exists(!0)))}return n.mutationQueue.addMutationBatch(e,i,o,t)})).next((t=>{o=t;const i=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:Io(s)})))}(i.localStore,t);i.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let i=e.xa[e.currentUser.toKey()];i||(i=new Qr(yr)),i=i.insert(t,n),e.xa[e.currentUser.toKey()]=i}(i,e.batchId,n),await Lu(i,e.changes),await Ml(i.remoteStore)}catch(e){const t=Xl(e,"Failed to persist write");n.reject(t)}}async function Eu(e,t){const n=sr(e);try{const e=await Gc(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const i=n.Fa.get(t);i&&(rr(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?i.wa=!0:e.modifiedDocuments.size>0?rr(i.wa):e.removedDocuments.size>0&&(rr(i.wa),i.wa=!1))})),await Lu(n,e,t)}catch(e){await Lr(e)}}function Cu(e,t,n){const i=sr(e);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const e=[];i.ba.forEach(((n,i)=>{const r=i.view.j_(t);r.snapshot&&e.push(r.snapshot)})),function(e,t){const n=sr(e);n.onlineState=t;let i=!1;n.queries.forEach(((e,n)=>{for(const r of n.U_)r.j_(t)&&(i=!0)})),i&&ou(n)}(i.eventManager,t),e.length&&i.Sa.l_(e),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function Iu(e,t,n){const i=sr(e);i.sharedClientState.updateQueryState(t,"rejected",n);const r=i.Fa.get(t),s=r&&r.key;if(s){let e=new Qr(kr.comparator);e=e.insert(s,Rs.newNoDocument(s,Tr.min()));const n=Oo().add(s),r=new Aa(Tr.min(),new Map,new Qr(yr),e,n);await Eu(i,r),i.va=i.va.remove(s),i.Fa.delete(t),Du(i)}else await Jc(i.localStore,t,!1).then((()=>Nu(i,t,n))).catch(Lr)}async function Su(e,t){const n=sr(e),i=t.batch.batchId;try{const e=await Wc(n.localStore,t);Ru(n,i,null),Au(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Lu(n,e)}catch(e){await Lr(e)}}async function ku(e,t,n){const i=sr(e);try{const e=await function(e,t){const n=sr(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let i;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(rr(null!==t),i=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,i))).next((()=>n.localDocuments.getDocuments(e,i)))}))}(i.localStore,t);Ru(i,t,n),Au(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await Lu(i,e)}catch(n){await Lr(n)}}function Au(e,t){(e.Oa.get(t)||[]).forEach((e=>{e.resolve()})),e.Oa.delete(t)}function Ru(e,t,n){const i=sr(e);let r=i.xa[i.currentUser.toKey()];if(r){const e=r.get(t);e&&(n?e.reject(n):e.resolve(),r=r.remove(t)),i.xa[i.currentUser.toKey()]=r}}function Nu(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const i of e.Da.get(t))e.ba.delete(i),n&&e.Sa.ka(i,n);e.Da.delete(t),e.isPrimaryClient&&e.Ma.Rr(t).forEach((t=>{e.Ma.containsKey(t)||Ou(e,t)}))}function Ou(e,t){e.Ca.delete(t.path.canonicalString());const n=e.va.get(t);null!==n&&(El(e.remoteStore,n),e.va=e.va.remove(t),e.Fa.delete(n),Du(e))}function Pu(e,t,n){for(const i of n)i instanceof uu?(e.Ma.addReference(i.key,t),xu(e,i)):i instanceof hu?(Zi("SyncEngine","Document no longer in limbo: "+i.key),e.Ma.removeReference(i.key,t),e.Ma.containsKey(i.key)||Ou(e,i.key)):ir()}function xu(e,t){const n=t.key,i=n.path.canonicalString();e.va.get(n)||e.Ca.has(i)||(Zi("SyncEngine","New document in limbo: "+n),e.Ca.add(i),Du(e))}function Du(e){for(;e.Ca.size>0&&e.va.size<e.maxConcurrentLimboResolutions;){const t=e.Ca.values().next().value;e.Ca.delete(t);const n=new kr(Cr.fromString(t)),i=e.Na.next();e.Fa.set(i,new pu(n)),e.va=e.va.insert(n,i),Tl(e.remoteStore,new vc(lo(so(n.path)),i,"TargetPurposeLimboResolution",$r.oe))}}async function Lu(e,t,n){const i=sr(e),r=[],s=[],o=[];i.ba.isEmpty()||(i.ba.forEach(((e,a)=>{o.push(i.Ba(a,t,n).then((e=>{if((e||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){r.push(e);const t=jc.Qi(a.targetId,e);s.push(t)}})))})),await Promise.all(o),i.Sa.l_(r),await async function(e,t){const n=sr(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Mr.forEach(t,(t=>Mr.forEach(t.ki,(i=>n.persistence.referenceDelegate.addReference(e,t.targetId,i))).next((()=>Mr.forEach(t.qi,(i=>n.persistence.referenceDelegate.removeReference(e,t.targetId,i)))))))))}catch(e){if(!Ur(e))throw e;Zi("LocalStore","Failed to update sequence numbers: "+e)}for(const i of t){const e=i.targetId;if(!i.fromCache){const t=n.ts.get(e),i=t.snapshotVersion,r=t.withLastLimboFreeSnapshotVersion(i);n.ts=n.ts.insert(e,r)}}}(i.localStore,s))}async function Mu(e,t){const n=sr(e);if(!n.currentUser.isEqual(t)){Zi("SyncEngine","User change. New user:",t.toKey());const e=await zc(n.localStore,t);n.currentUser=t,function(e,t){e.Oa.forEach((e=>{e.forEach((e=>{e.reject(new ar(or.CANCELLED,t))}))})),e.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Lu(n,e._s)}}function Fu(e,t){const n=sr(e),i=n.Fa.get(t);if(i&&i.wa)return Oo().add(i.key);{let e=Oo();const i=n.Da.get(t);if(!i)return e;for(const t of i){const i=n.ba.get(t);e=e.unionWith(i.view.Ea)}return e}}function Uu(e){const t=sr(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Eu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Fu.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Iu.bind(null,t),t.Sa.l_=ru.bind(null,t.eventManager),t.Sa.ka=su.bind(null,t.eventManager),t}function $u(e){const t=sr(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Su.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ku.bind(null,t),t}class ju{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=dl(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Hc(this.persistence,new Bc,e.initialUser,this.serializer)}createPersistence(e){return new Fc($c.jr,this.serializer)}createSharedClientState(e){return new nl}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Vu{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Cu(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Mu.bind(null,this.syncEngine),await Wl(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new tu}()}createDatastore(e){const t=dl(e.databaseInfo.databaseId),n=function(e){return new ul(e)}(e.databaseInfo);return function(e,t,n,i){return new _l(e,t,n,i)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(e,t,n,i,r){return new yl(e,t,n,i,r)}(this.localStore,this.datastore,e.asyncQueue,(e=>Cu(this.syncEngine,e,0)),function(){return rl.D()?new rl:new il}())}createSyncEngine(e,t){return function(e,t,n,i,r,s,o){const a=new gu(e,t,n,i,r,s);return o&&(a.La=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(e){const t=sr(e);Zi("RemoteStore","RemoteStore shutting down."),t.M_.add(5),await bl(t),t.O_.shutdown(),t.N_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bu{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):er("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qu{constructor(e,t,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=Qi.UNAUTHENTICATED,this.clientId=vr.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Zi("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Zi("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ar(or.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new cr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Xl(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Hu(e,t){e.asyncQueue.verifyOperationInProgress(),Zi("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener((async e=>{i.isEqual(e)||(await zc(t.localStore,e),i=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function zu(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Ku(e);Zi("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener((e=>zl(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>zl(t.remoteStore,n))),e._onlineComponents=t}function Wu(e){return"FirebaseError"===e.name?e.code===or.FAILED_PRECONDITION||e.code===or.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function Ku(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Zi("FirestoreClient","Using user provided OfflineComponentProvider");try{await Hu(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Wu(n))throw n;tr("Error using user provided cache. Falling back to memory cache: "+n),await Hu(e,new ju)}}else Zi("FirestoreClient","Using default OfflineComponentProvider"),await Hu(e,new ju);return e._offlineComponents}async function Gu(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Zi("FirestoreClient","Using user provided OnlineComponentProvider"),await zu(e,e._uninitializedComponentsProvider._online)):(Zi("FirestoreClient","Using default OnlineComponentProvider"),await zu(e,new Vu))),e._onlineComponents}function Qu(e){return Gu(e).then((e=>e.syncEngine))}async function Xu(e){const t=await Gu(e),n=t.eventManager;return n.onListen=mu.bind(null,t.syncEngine),n.onUnlisten=wu.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=_u.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=bu.bind(null,t.syncEngine),n}function Yu(e,t,n={}){const i=new cr;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,i,r){const s=new Bu({next:s=>{t.enqueueAndForget((()=>iu(e,o)));const a=s.docs.has(n);!a&&s.fromCache?r.reject(new ar(or.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&i&&"server"===i.source?r.reject(new ar(or.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):r.resolve(s)},error:e=>r.reject(e)}),o=new lu(so(n.path),s,{includeMetadataChanges:!0,ra:!0});return nu(e,o)}(await Xu(e),e.asyncQueue,t,n,i))),i.promise}function Ju(e,t,n={}){const i=new cr;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,i,r){const s=new Bu({next:n=>{t.enqueueAndForget((()=>iu(e,o))),n.fromCache&&"server"===i.source?r.reject(new ar(or.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:e=>r.reject(e)}),o=new lu(n,s,{includeMetadataChanges:!0,ra:!0});return nu(e,o)}(await Xu(e),e.asyncQueue,t,n,i))),i.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zu(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const eh=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(e,t,n){if(!n)throw new ar(or.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function nh(e,t,n,i){if(!0===t&&!0===i)throw new ar(or.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function ih(e){if(!kr.isDocumentKey(e))throw new ar(or.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function rh(e){if(kr.isDocumentKey(e))throw new ar(or.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function sh(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":ir()}function oh(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new ar(or.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sh(e);throw new ar(or.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ah{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new ar(or.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new ar(or.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}nh("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Zu(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new ar(or.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new ar(or.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new ar(or.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ch{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ah({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ar(or.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new ar(or.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ah(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new ur;switch(e.type){case"firstParty":return new pr(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new ar(or.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=eh.get(e);t&&(Zi("ComponentProvider","Removing Datastore"),eh.delete(e),t.terminate())}(this),Promise.resolve()}}function lh(e,t,n,i={}){var r;const s=(e=oh(e,ch))._getSettings(),o=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&tr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),i.mockUserToken){let t,n;if("string"==typeof i.mockUserToken)t=i.mockUserToken,n=Qi.MOCK_USER;else{t=(0,a.Fy)(i.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new ar(or.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Qi(s)}e._authCredentials=new hr(new lr(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new uh(this.firestore,e,this._query)}}class hh{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dh(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new hh(this.firestore,e,this._key)}}class dh extends uh{constructor(e,t,n){super(e,t,so(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new hh(this.firestore,null,new kr(e))}withConverter(e){return new dh(this.firestore,e,this._path)}}function fh(e,t,...n){if(e=(0,a.Ku)(e),th("collection","path",t),e instanceof ch){const i=Cr.fromString(t,...n);return rh(i),new dh(e,null,i)}{if(!(e instanceof hh||e instanceof dh))throw new ar(or.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(Cr.fromString(t,...n));return rh(i),new dh(e.firestore,null,i)}}function ph(e,t,...n){if(e=(0,a.Ku)(e),1===arguments.length&&(t=vr.newId()),th("doc","path",t),e instanceof ch){const i=Cr.fromString(t,...n);return ih(i),new hh(e,null,new kr(i))}{if(!(e instanceof hh||e instanceof dh))throw new ar(or.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(Cr.fromString(t,...n));return ih(i),new hh(e.firestore,e instanceof dh?e.converter:null,new kr(i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gh{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Jo=new fl(this,"async_queue_retry"),this.hu=()=>{const e=hl();e&&Zi("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Jo.Uo()};const e=hl();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const t=hl();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise((()=>{}));const t=new cr;return this.Iu((()=>this.ou&&this.cu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.su.push(e),this.Tu())))}async Tu(){if(0!==this.su.length){try{await this.su[0](),this.su.shift(),this.Jo.reset()}catch(e){if(!Ur(e))throw e;Zi("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Jo.Ko((()=>this.Tu()))}}Iu(e){const t=this.iu.then((()=>(this.uu=!0,e().catch((e=>{this.au=e,this.uu=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw er("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.uu=!1,e))))));return this.iu=t,t}enqueueAfterDelay(e,t,n){this.Pu(),this.lu.indexOf(e)>-1&&(t=0);const i=Ql.createAndSchedule(this,e,t,n,(e=>this.Eu(e)));return this._u.push(i),i}Pu(){this.au&&ir()}verifyOperationInProgress(){}async du(){let e;do{e=this.iu,await e}while(e!==this.iu)}Au(e){for(const t of this._u)if(t.timerId===e)return!0;return!1}Ru(e){return this.du().then((()=>{this._u.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this._u)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.du()}))}Vu(e){this.lu.push(e)}Eu(e){const t=this._u.indexOf(e);this._u.splice(t,1)}}class mh extends ch{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=function(){return new gh}(),this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||yh(this),this._firestoreClient.terminate()}}function _h(e,t){const n="object"==typeof e?e:(0,r.Sx)(),i="string"==typeof e?e:t||"(default)",s=(0,r.j6)(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const e=(0,a.yU)("firestore");e&&lh(s,...e)}return s}function vh(e){return e._firestoreClient||yh(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function yh(e){var t,n,i;const r=e._freezeSettings(),s=function(e,t,n,i){return new us(e,t,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,Zu(i.experimentalLongPollingOptions),i.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,r);e._firestoreClient=new qu(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=r.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=r.localCache)||void 0===i?void 0:i._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wh{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wh(ns.fromBase64String(e))}catch(e){throw new ar(or.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new wh(ns.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new ar(or.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Sr(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Th{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ar(or.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ar(or.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return yr(this._lat,e._lat)||yr(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch=/^__.*__$/;class Ih{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new aa(e,this.data,this.fieldMask,t,this.fieldTransforms):new oa(e,this.data,t,this.fieldTransforms)}}class Sh{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new aa(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function kh(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ir()}}class Ah{constructor(e,t,n,i,r,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===r&&this.mu(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Ah(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.gu({path:n,yu:!1});return i.wu(e),i}Su(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.gu({path:n,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return zh(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(0===e.length)throw this.Du("Document fields must not be empty");if(kh(this.fu)&&Ch.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class Rh{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||dl(e)}Fu(e,t,n,i=!1){return new Ah({fu:e,methodName:t,vu:n,path:Sr.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Nh(e){const t=e._freezeSettings(),n=dl(e._databaseId);return new Rh(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Oh(e,t,n,i,r,s={}){const o=e.Fu(s.merge||s.mergeFields?2:0,t,n,r);Vh("Data must be an object, but it was:",o,i);const a=$h(i,o);let c,l;if(s.merge)c=new es(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const i of s.mergeFields){const r=Bh(t,i,n);if(!o.contains(r))throw new ar(or.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);Wh(e,r)||e.push(r)}c=new es(e),l=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,l=o.fieldTransforms;return new Ih(new ks(a),c,l)}class Ph extends Th{_toFieldTransform(e){if(2!==e.fu)throw 1===e.fu?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ph}}function xh(e,t,n){return new Ah({fu:3,vu:t.settings.vu,methodName:e._methodName,yu:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class Dh extends Th{constructor(e,t){super(e),this.Mu=t}_toFieldTransform(e){const t=xh(this,e,!0),n=this.Mu.map((e=>Uh(e,t))),i=new Bo(n);return new Qo(e.path,i)}isEqual(e){return e instanceof Dh&&(0,a.bD)(this.Mu,e.Mu)}}class Lh extends Th{constructor(e,t){super(e),this.Mu=t}_toFieldTransform(e){const t=xh(this,e,!0),n=this.Mu.map((e=>Uh(e,t))),i=new Ho(n);return new Qo(e.path,i)}isEqual(e){return e instanceof Lh&&(0,a.bD)(this.Mu,e.Mu)}}function Mh(e,t,n,i){const r=e.Fu(1,t,n);Vh("Data must be an object, but it was:",r,i);const s=[],o=ks.empty();Kr(i,((e,i)=>{const c=Hh(t,e,n);i=(0,a.Ku)(i);const l=r.Su(c);if(i instanceof Ph)s.push(c);else{const e=Uh(i,l);null!=e&&(s.push(c),o.set(c,e))}}));const c=new es(s);return new Sh(o,c,r.fieldTransforms)}function Fh(e,t,n,i,r,s){const o=e.Fu(1,t,n),c=[Bh(t,i,n)],l=[r];if(s.length%2!=0)throw new ar(or.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<s.length;a+=2)c.push(Bh(t,s[a])),l.push(s[a+1]);const u=[],h=ks.empty();for(let f=c.length-1;f>=0;--f)if(!Wh(u,c[f])){const e=c[f];let t=l[f];t=(0,a.Ku)(t);const n=o.Su(e);if(t instanceof Ph)u.push(e);else{const i=Uh(t,n);null!=i&&(u.push(e),h.set(e,i))}}const d=new es(u);return new Sh(h,d,o.fieldTransforms)}function Uh(e,t){if(jh(e=(0,a.Ku)(e)))return Vh("Unsupported field value:",t,e),$h(e,t);if(e instanceof Th)return function(e,t){if(!kh(t.fu))throw t.Du(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Du(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.yu&&4!==t.fu)throw t.Du("Nested arrays are not supported");return function(e,t){const n=[];let i=0;for(const r of e){let e=Uh(r,t.bu(i));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),i++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,a.Ku)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Mo(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=br.fromDate(e);return{timestampValue:Ba(t.serializer,n)}}if(e instanceof br){const n=new br(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Ba(t.serializer,n)}}if(e instanceof Eh)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof wh)return{bytesValue:qa(t.serializer,e._byteString)};if(e instanceof hh){const n=t.databaseId,i=e.firestore._databaseId;if(!i.isEqual(n))throw t.Du(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Wa(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Du(`Unsupported field value: ${sh(e)}`)}(e,t)}function $h(e,t){const n={};return Gr(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Kr(e,((e,i)=>{const r=Uh(i,t.pu(e));null!=r&&(n[e]=r)})),{mapValue:{fields:n}}}function jh(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof br||e instanceof Eh||e instanceof wh||e instanceof hh||e instanceof Th)}function Vh(e,t,n){if(!jh(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const i=sh(n);throw"an object"===i?t.Du(e+" a custom object"):t.Du(e+" "+i)}}function Bh(e,t,n){if((t=(0,a.Ku)(t))instanceof bh)return t._internalPath;if("string"==typeof t)return Hh(e,t);throw zh("Field path arguments must be of type string or ",e,!1,void 0,n)}const qh=new RegExp("[~\\*/\\[\\]]");function Hh(e,t,n){if(t.search(qh)>=0)throw zh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new bh(...t.split("."))._internalPath}catch(b){throw zh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function zh(e,t,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${i}`),o&&(c+=` in document ${r}`),c+=")"),new ar(or.INVALID_ARGUMENT,a+e+c)}function Wh(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e,t,n,i,r){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new hh(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Gh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Qh("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Gh extends Kh{data(){return super.data()}}function Qh(e,t){return"string"==typeof t?Hh(e,t):t instanceof bh?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new ar(or.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Yh{convertValue(e,t="none"){switch(fs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ss(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(os(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw ir()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Kr(e,((e,i)=>{n[e]=this.convertValue(i,t)})),n}convertGeoPoint(e){return new Eh(ss(e.latitude),ss(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=cs(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ls(e));default:return null}}convertTimestamp(e){const t=rs(e);return new br(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Cr.fromString(e);rr(_c(n));const i=new hs(n.get(1),n.get(3)),r=new kr(n.popFirst(5));return i.isEqual(t)||er(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zh{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ed extends Kh{constructor(e,t,n,i,r,s){super(e,t,n,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new td(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Qh("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class td extends ed{data(e={}){return super.data(e)}}class nd{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Zh(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new td(this._firestore,this._userDataWriter,n.key,n,new Zh(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ar(or.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const i=new td(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Zh(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const i=new td(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Zh(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let r=-1,s=-1;return 0!==t.type&&(r=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:id(t.type),doc:i,oldIndex:r,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function id(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ir()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function rd(e){e=oh(e,hh);const t=oh(e.firestore,mh);return Yu(vh(t),e._key).then((n=>ud(t,e,n)))}class sd extends Yh{constructor(e){super(),this.firestore=e}convertBytes(e){return new wh(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new hh(this.firestore,null,t)}}function od(e){e=oh(e,uh);const t=oh(e.firestore,mh),n=vh(t),i=new sd(t);return Xh(e._query),Ju(n,e._query).then((n=>new nd(t,i,e,n)))}function ad(e,t,n){e=oh(e,hh);const i=oh(e.firestore,mh),r=Jh(e.converter,t,n);return ld(i,[Oh(Nh(i),"setDoc",e._key,r,null!==e.converter,n).toMutation(e._key,Jo.none())])}function cd(e,t,n,...i){e=oh(e,hh);const r=oh(e.firestore,mh),s=Nh(r);let o;return o="string"==typeof(t=(0,a.Ku)(t))||t instanceof bh?Fh(s,"updateDoc",e._key,t,n,i):Mh(s,"updateDoc",e._key,t),ld(r,[o.toMutation(e._key,Jo.exists(!0))])}function ld(e,t){return function(e,t){const n=new cr;return e.asyncQueue.enqueueAndForget((async()=>Tu(await Qu(e),t,n))),n.promise}(vh(e),t)}function ud(e,t,n){const i=n.docs.get(t._key),r=new sd(e);return new ed(e,r,t._key,i,new Zh(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(...e){return new Dh("arrayUnion",e)}function dd(...e){return new Lh("arrayRemove",e)}new WeakMap;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){Xi=e}(r.MF),(0,r.om)(new s.uA("firestore",((e,{instanceIdentifier:n,options:i})=>{const r=e.getProvider("app").getImmediate(),s=new mh(new dr(e.getProvider("auth-internal")),new mr(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new ar(or.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hs(e.options.projectId,t)}(r,n),r);return i=Object.assign({useFetchStreams:t},i),s._setSettings(i),s}),"PUBLIC").setMultipleInstances(!0)),(0,r.KO)(Gi,"4.6.1",e),(0,r.KO)(Gi,"4.6.1","esm2017")}()},5904:function(e,t,n){n.d(t,{qk:function(){return Et},yb:function(){return bt},c7:function(){return It},KR:function(){return Ct},D5:function(){return Tt},bp:function(){return wt}});var i=n(9928),r=n(6743),s=n(5125);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const o="firebasestorage.googleapis.com",a="storageBucket",c=12e4,l=6e5,u=1e3;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class h extends r.g{constructor(e,t,n=0){super(p(e),`Firebase Storage: ${t} (${p(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return p(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var d,f;function p(e){return"storage/"+e}function g(){const e="An unknown error occurred, please check the error payload for server response.";return new h(d.UNKNOWN,e)}function m(e){return new h(d.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function _(e){return new h(d.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function v(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new h(d.UNAUTHENTICATED,e)}function y(){return new h(d.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function w(e){return new h(d.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function b(){return new h(d.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function T(){return new h(d.CANCELED,"User canceled the upload/download.")}function E(e){return new h(d.INVALID_URL,"Invalid URL '"+e+"'.")}function C(e){return new h(d.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function I(){return new h(d.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function S(){return new h(d.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function k(){return new h(d.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function A(){return new h(d.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function R(e){return new h(d.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function N(e){return new h(d.INVALID_ARGUMENT,e)}function O(){return new h(d.APP_DELETED,"The Firebase app was deleted.")}function P(e){return new h(d.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function x(e,t){return new h(d.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function D(e){throw new h(d.INTERNAL_ERROR,"Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e["UNKNOWN"]="unknown",e["OBJECT_NOT_FOUND"]="object-not-found",e["BUCKET_NOT_FOUND"]="bucket-not-found",e["PROJECT_NOT_FOUND"]="project-not-found",e["QUOTA_EXCEEDED"]="quota-exceeded",e["UNAUTHENTICATED"]="unauthenticated",e["UNAUTHORIZED"]="unauthorized",e["UNAUTHORIZED_APP"]="unauthorized-app",e["RETRY_LIMIT_EXCEEDED"]="retry-limit-exceeded",e["INVALID_CHECKSUM"]="invalid-checksum",e["CANCELED"]="canceled",e["INVALID_EVENT_NAME"]="invalid-event-name",e["INVALID_URL"]="invalid-url",e["INVALID_DEFAULT_BUCKET"]="invalid-default-bucket",e["NO_DEFAULT_BUCKET"]="no-default-bucket",e["CANNOT_SLICE_BLOB"]="cannot-slice-blob",e["SERVER_FILE_WRONG_SIZE"]="server-file-wrong-size",e["NO_DOWNLOAD_URL"]="no-download-url",e["INVALID_ARGUMENT"]="invalid-argument",e["INVALID_ARGUMENT_COUNT"]="invalid-argument-count",e["APP_DELETED"]="app-deleted",e["INVALID_ROOT_OPERATION"]="invalid-root-operation",e["INVALID_FORMAT"]="invalid-format",e["INTERNAL_ERROR"]="internal-error",e["UNSUPPORTED_ENVIRONMENT"]="unsupported-environment"})(d||(d={}));class L{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=L.makeFromUrl(e,t)}catch(i){return new L(e,"")}if(""===n.path)return n;throw C(e)}static makeFromUrl(e,t){let n=null;const i="([A-Za-z0-9.\\-_]+)";function r(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+i+s,"i"),c={bucket:1,path:3};function l(e){e.path_=decodeURIComponent(e.path)}const u="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),p={bucket:1,path:3},g=t===o?"(?:storage.googleapis.com|storage.cloud.google.com)":t,m="([^?#]*)",_=new RegExp(`^https?://${g}/${i}/${m}`,"i"),v={bucket:1,path:2},y=[{regex:a,indices:c,postModify:r},{regex:f,indices:p,postModify:l},{regex:_,indices:v,postModify:l}];for(let o=0;o<y.length;o++){const t=y[o],i=t.regex.exec(e);if(i){const e=i[t.indices.bucket];let r=i[t.indices.path];r||(r=""),n=new L(e,r),t.postModify(n);break}}if(null==n)throw E(e);return n}}class M{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e,t,n){let i=1,r=null,s=null,o=!1,a=0;function c(){return 2===a}let l=!1;function u(...e){l||(l=!0,t.apply(null,e))}function h(t){r=setTimeout((()=>{r=null,e(f,c())}),t)}function d(){s&&clearTimeout(s)}function f(e,...t){if(l)return void d();if(e)return d(),void u.call(null,e,...t);const n=c()||o;if(n)return d(),void u.call(null,e,...t);let r;i<64&&(i*=2),1===a?(a=2,r=0):r=1e3*(i+Math.random()),h(r)}let p=!1;function g(e){p||(p=!0,d(),l||(null!==r?(e||(a=2),clearTimeout(r),h(0)):e||(a=1)))}return h(0),s=setTimeout((()=>{o=!0,g(!0)}),n),g}function U(e){e(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e){return void 0!==e}function j(e){return"function"===typeof e}function V(e){return"object"===typeof e&&!Array.isArray(e)}function B(e){return"string"===typeof e||e instanceof String}function q(e){return H()&&e instanceof Blob}function H(){return"undefined"!==typeof Blob}function z(e,t,n,i){if(i<t)throw N(`Invalid value for '${e}'. Expected ${t} or greater.`);if(i>n)throw N(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(e,t,n){let i=t;return null==n&&(i=`https://${t}`),`${n}://${i}/v0${e}`}function K(e){const t=encodeURIComponent;let n="?";for(const i in e)if(e.hasOwnProperty(i)){const r=t(i)+"="+t(e[i]);n=n+r+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function G(e,t){const n=e>=500&&e<600,i=[408,429],r=-1!==i.indexOf(e),s=-1!==t.indexOf(e);return n||r||s}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(f||(f={}));class Q{constructor(e,t,n,i,r,s,o,a,c,l,u,h=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=l,this.connectionFactory_=u,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new X(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const i=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(i),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(i),this.pendingConnection_=null;const t=n.getErrorCode()===f.NO_ERROR,r=n.getStatus();if(!t||G(r,this.additionalRetryCodes_)&&this.retry){const t=n.getErrorCode()===f.ABORT;return void e(!1,new X(!1,null,t))}const s=-1!==this.successCodes_.indexOf(r);e(!0,new X(s,n))}))},t=(e,t)=>{const n=this.resolve_,i=this.reject_,r=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(r,r.getResponse());$(e)?n(e):n()}catch(s){i(s)}else if(null!==r){const e=g();e.serverResponse=r.getErrorText(),this.errorCallback_?i(this.errorCallback_(r,e)):i(e)}else if(t.canceled){const e=this.appDelete_?O():T();i(e)}else{const e=b();i(e)}};this.canceled_?t(!1,new X(!1,null,!0)):this.backoffId_=F(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&U(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class X{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function Y(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function J(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}function Z(e,t){t&&(e["X-Firebase-GMPID"]=t)}function ee(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}function te(e,t,n,i,r,s,o=!0){const a=K(e.urlParams),c=e.url+a,l=Object.assign({},e.headers);return Z(l,t),Y(l,n),J(l,s),ee(l,i),new Q(c,e.method,l,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function ie(...e){const t=ne();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(H())return new Blob(e);throw new h(d.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}function re(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(e){if("undefined"===typeof atob)throw R("base-64");return atob(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ae{constructor(e,t){this.data=e,this.contentType=t||null}}function ce(e,t){switch(e){case oe.RAW:return new ae(le(t));case oe.BASE64:case oe.BASE64URL:return new ae(he(e,t));case oe.DATA_URL:return new ae(fe(t),pe(t))}throw g()}function le(e){const t=[];for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);if(i<=127)t.push(i);else if(i<=2047)t.push(192|i>>6,128|63&i);else if(55296===(64512&i)){const r=n<e.length-1&&56320===(64512&e.charCodeAt(n+1));if(r){const r=i,s=e.charCodeAt(++n);i=65536|(1023&r)<<10|1023&s,t.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|63&i)}else t.push(239,191,189)}else 56320===(64512&i)?t.push(239,191,189):t.push(224|i>>12,128|i>>6&63,128|63&i)}return new Uint8Array(t)}function ue(e){let t;try{t=decodeURIComponent(e)}catch(n){throw x(oe.DATA_URL,"Malformed data URL.")}return le(t)}function he(e,t){switch(e){case oe.BASE64:{const n=-1!==t.indexOf("-"),i=-1!==t.indexOf("_");if(n||i){const t=n?"-":"_";throw x(e,"Invalid character '"+t+"' found: is it base64url encoded?")}break}case oe.BASE64URL:{const n=-1!==t.indexOf("+"),i=-1!==t.indexOf("/");if(n||i){const t=n?"+":"/";throw x(e,"Invalid character '"+t+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=se(t)}catch(r){if(r.message.includes("polyfill"))throw r;throw x(e,"Invalid character found")}const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}class de{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw x(oe.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=ge(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}function fe(e){const t=new de(e);return t.base64?he(oe.BASE64,t.rest):ue(t.rest)}function pe(e){const t=new de(e);return t.contentType}function ge(e,t){const n=e.length>=t.length;return!!n&&e.substring(e.length-t.length)===t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,t){let n=0,i="";q(e)?(this.data_=e,n=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(q(this.data_)){const n=this.data_,i=re(n,e,t);return null===i?null:new me(i)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new me(n,!0)}}static getBlob(...e){if(H()){const t=e.map((e=>e instanceof me?e.data_:e));return new me(ie.apply(null,t))}{const t=e.map((e=>B(e)?ce(oe.RAW,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const i=new Uint8Array(n);let r=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)i[r++]=e[t]})),new me(i,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(e){let t;try{t=JSON.parse(e)}catch(n){return null}return V(t)?t:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(e){if(0===e.length)return null;const t=e.lastIndexOf("/");if(-1===t)return"";const n=e.slice(0,t);return n}function ye(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}function we(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(e,t){return t}class Te{constructor(e,t,n,i){this.server=e,this.local=t||e,this.writable=!!n,this.xform=i||be}}let Ee=null;function Ce(e){return!B(e)||e.length<2?e:we(e)}function Ie(){if(Ee)return Ee;const e=[];function t(e,t){return Ce(t)}e.push(new Te("bucket")),e.push(new Te("generation")),e.push(new Te("metageneration")),e.push(new Te("name","fullPath",!0));const n=new Te("name");function i(e,t){return void 0!==t?Number(t):t}n.xform=t,e.push(n);const r=new Te("size");return r.xform=i,e.push(r),e.push(new Te("timeCreated")),e.push(new Te("updated")),e.push(new Te("md5Hash",null,!0)),e.push(new Te("cacheControl",null,!0)),e.push(new Te("contentDisposition",null,!0)),e.push(new Te("contentEncoding",null,!0)),e.push(new Te("contentLanguage",null,!0)),e.push(new Te("contentType",null,!0)),e.push(new Te("metadata","customMetadata",!0)),Ee=e,Ee}function Se(e,t){function n(){const n=e["bucket"],i=e["fullPath"],r=new L(n,i);return t._makeStorageReference(r)}Object.defineProperty(e,"ref",{get:n})}function ke(e,t,n){const i={type:"file"},r=n.length;for(let s=0;s<r;s++){const e=n[s];i[e.local]=e.xform(i,t[e.server])}return Se(i,e),i}function Ae(e,t,n){const i=_e(t);if(null===i)return null;const r=i;return ke(e,r,n)}function Re(e,t,n,i){const r=_e(t);if(null===r)return null;if(!B(r["downloadTokens"]))return null;const s=r["downloadTokens"];if(0===s.length)return null;const o=encodeURIComponent,a=s.split(","),c=a.map((t=>{const r=e["bucket"],s=e["fullPath"],a="/b/"+o(r)+"/o/"+o(s),c=W(a,n,i),l=K({alt:"media",token:t});return c+l}));return c[0]}function Ne(e,t){const n={},i=t.length;for(let r=0;r<i;r++){const i=t[r];i.writable&&(n[i.server]=e[i.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,t,n,i){this.url=e,this.method=t,this.handler=n,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(e){if(!e)throw g()}function xe(e,t){function n(n,i){const r=Ae(e,i,t);return Pe(null!==r),r}return n}function De(e,t){function n(n,i){const r=Ae(e,i,t);return Pe(null!==r),Re(r,i,e.host,e._protocol)}return n}function Le(e){function t(t,n){let i;return i=401===t.getStatus()?t.getErrorText().includes("Firebase App Check token is invalid")?y():v():402===t.getStatus()?_(e.bucket):403===t.getStatus()?w(e.path):n,i.status=t.getStatus(),i.serverResponse=n.serverResponse,i}return t}function Me(e){const t=Le(e);function n(n,i){let r=t(n,i);return 404===n.getStatus()&&(r=m(e.path)),r.serverResponse=i.serverResponse,r}return n}function Fe(e,t,n){const i=t.fullServerUrl(),r=W(i,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new Oe(r,s,xe(e,n),o);return a.errorHandler=Me(t),a}function Ue(e,t,n){const i=t.fullServerUrl(),r=W(i,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new Oe(r,s,De(e,n),o);return a.errorHandler=Me(t),a}function $e(e,t,n,i){const r=t.fullServerUrl(),s=W(r,e.host,e._protocol),o="PATCH",a=Ne(n,i),c={"Content-Type":"application/json; charset=utf-8"},l=e.maxOperationRetryTime,u=new Oe(s,o,xe(e,i),l);return u.headers=c,u.body=a,u.errorHandler=Me(t),u}function je(e,t){return e&&e["contentType"]||t&&t.type()||"application/octet-stream"}function Ve(e,t,n){const i=Object.assign({},n);return i["fullPath"]=e.path,i["size"]=t.size(),i["contentType"]||(i["contentType"]=je(null,t)),i}function Be(e,t,n,i,r){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=Ve(t,i,r),u=Ne(l,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+u+"\r\n--"+c+"\r\nContent-Type: "+l["contentType"]+"\r\n\r\n",d="\r\n--"+c+"--",f=me.getBlob(h,i,d);if(null===f)throw S();const p={name:l["fullPath"]},g=W(s,e.host,e._protocol),m="POST",_=e.maxUploadRetryTime,v=new Oe(g,m,xe(e,n),_);return v.urlParams=p,v.headers=o,v.body=f.uploadData(),v.errorHandler=Le(t),v}class qe{constructor(e,t,n,i){this.current=e,this.total=t,this.finalized=!!n,this.metadata=i||null}}function He(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(r){Pe(!1)}const i=t||["active"];return Pe(!!n&&-1!==i.indexOf(n)),n}function ze(e,t,n,i,r){const s=t.bucketOnlyServerUrl(),o=Ve(t,i,r),a={name:o["fullPath"]},c=W(s,e.host,e._protocol),l="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${i.size()}`,"X-Goog-Upload-Header-Content-Type":o["contentType"],"Content-Type":"application/json; charset=utf-8"},h=Ne(o,n),d=e.maxUploadRetryTime;function f(e){let t;He(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(n){Pe(!1)}return Pe(B(t)),t}const p=new Oe(c,l,f,d);return p.urlParams=a,p.headers=u,p.body=h,p.errorHandler=Le(t),p}function We(e,t,n,i){const r={"X-Goog-Upload-Command":"query"};function s(e){const t=He(e,["active","final"]);let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(s){Pe(!1)}n||Pe(!1);const r=Number(n);return Pe(!isNaN(r)),new qe(r,i.size(),"final"===t)}const o="POST",a=e.maxUploadRetryTime,c=new Oe(n,o,s,a);return c.headers=r,c.errorHandler=Le(t),c}const Ke=262144;function Ge(e,t,n,i,r,s,o,a){const c=new qe(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=i.size()),i.size()!==c.total)throw k();const l=c.total-c.current;let u=l;r>0&&(u=Math.min(u,r));const h=c.current,d=h+u;let f="";f=0===u?"finalize":l===u?"upload, finalize":"upload";const p={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${c.current}`},g=i.slice(h,d);if(null===g)throw S();function m(e,n){const r=He(e,["active","final"]),o=c.current+u,a=i.size();let l;return l="final"===r?xe(t,s)(e,n):null,new qe(o,a,"final"===r,l)}const _="POST",v=t.maxUploadRetryTime,y=new Oe(n,_,m,v);return y.headers=p,y.body=g.uploadData(),y.progressCallback=a||null,y.errorHandler=Le(e),y}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Xe(e){switch(e){case"running":case"pausing":case"canceling":return Qe.RUNNING;case"paused":return Qe.PAUSED;case"success":return Qe.SUCCESS;case"canceled":return Qe.CANCELED;case"error":return Qe.ERROR;default:return Qe.ERROR}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,t,n){const i=j(e)||null!=t||null!=n;if(i)this.next=e,this.error=null!==t&&void 0!==t?t:void 0,this.complete=null!==n&&void 0!==n?n:void 0;else{const t=e;this.next=t.next,this.error=t.error,this.complete=t.complete}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(e){return(...t)=>{Promise.resolve().then((()=>e(...t)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ze=null;class et{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=f.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=f.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=f.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,i){if(this.sent_)throw D("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==i)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw D("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw D("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw D("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw D("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class tt extends et{initXhr(){this.xhr_.responseType="text"}}function nt(){return Ze?Ze():new tt}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class it{constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=Ie(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{if(this._request=void 0,this._chunkMultiplier=1,e._codeEquals(d.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const t=this.isExponentialBackoffExpired();if(G(e.status,[])){if(!t)return this.sleepTime=Math.max(2*this.sleepTime,u),this._needToFetchStatus=!0,void this.completeTransitions_();e=b()}this._error=e,this._transition("error")}},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals(d.CANCELED)?this.completeTransitions_():(this._error=e,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise(((e,t)=>{this._resolve=e,this._reject=t,this._start()})),this._promise.then(null,(()=>{}))}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout((()=>{this.pendingTimeout=void 0,this._continueUpload()}),this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}}))}_createResumable(){this._resolveToken(((e,t)=>{const n=ze(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(n,nt,e,t);this._request=i,i.getPromise().then((e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()}),this._errorHandler)}))}_fetchStatus(){const e=this._uploadUrl;this._resolveToken(((t,n)=>{const i=We(this._ref.storage,this._ref._location,e,this._blob),r=this._ref.storage._makeRequest(i,nt,t,n);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()}),this._errorHandler)}))}_continueUpload(){const e=Ke*this._chunkMultiplier,t=new qe(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken(((i,r)=>{let s;try{s=Ge(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(a){return this._error=a,void this._transition("error")}const o=this._ref.storage._makeRequest(s,nt,i,r,!1);this._request=o,o.getPromise().then((e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()}),this._errorHandler)}))}_increaseMultiplier(){const e=Ke*this._chunkMultiplier;2*e<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken(((e,t)=>{const n=Fe(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(n,nt,e,t);this._request=i,i.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._transition("success")}),this._metadataErrorHandler)}))}_oneShotUpload(){this._resolveToken(((e,t)=>{const n=Be(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(n,nt,e,t);this._request=i,i.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")}),this._errorHandler)}))}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=T(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Xe(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,i){const r=new Ye(t||void 0,n||void 0,i||void 0);return this._addObserver(r),()=>{this._removeObserver(r)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();const e=this._observers.slice();e.forEach((e=>{this._notifyObserver(e)}))}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(Xe(this._state)){case Qe.SUCCESS:Je(this._resolve.bind(null,this.snapshot))();break;case Qe.CANCELED:case Qe.ERROR:const t=this._reject;Je(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){const t=Xe(this._state);switch(t){case Qe.RUNNING:case Qe.PAUSED:e.next&&Je(e.next.bind(e,this.snapshot))();break;case Qe.SUCCESS:e.complete&&Je(e.complete.bind(e))();break;case Qe.CANCELED:case Qe.ERROR:e.error&&Je(e.error.bind(e,this._error))();break;default:e.error&&Je(e.error.bind(e,this._error))()}}resume(){const e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){const e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){const e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t){this._service=e,this._location=t instanceof L?t:L.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new rt(e,t)}get root(){const e=new L(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return we(this._location.path)}get storage(){return this._service}get parent(){const e=ve(this._location.path);if(null===e)return null;const t=new L(this._location.bucket,e);return new rt(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw P(e)}}function st(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new it(e,new me(t),n)}function ot(e){e._throwIfRoot("getMetadata");const t=Fe(e.storage,e._location,Ie());return e.storage.makeRequestWithTokens(t,nt)}function at(e,t){e._throwIfRoot("updateMetadata");const n=$e(e.storage,e._location,t,Ie());return e.storage.makeRequestWithTokens(n,nt)}function ct(e){e._throwIfRoot("getDownloadURL");const t=Ue(e.storage,e._location,Ie());return e.storage.makeRequestWithTokens(t,nt).then((e=>{if(null===e)throw A();return e}))}function lt(e,t){const n=ye(e._location.path,t),i=new L(e._location.bucket,n);return new rt(e.storage,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(e){return/^[A-Za-z]+:\/\//.test(e)}function ht(e,t){return new rt(e,t)}function dt(e,t){if(e instanceof mt){const n=e;if(null==n._bucket)throw I();const i=new rt(n,n._bucket);return null!=t?dt(i,t):i}return void 0!==t?lt(e,t):e}function ft(e,t){if(t&&ut(t)){if(e instanceof mt)return ht(e,t);throw N("To use ref(service, url), the first argument must be a Storage instance.")}return dt(e,t)}function pt(e,t){const n=null===t||void 0===t?void 0:t[a];return null==n?null:L.makeFromBucketSpec(n,e)}function gt(e,t,n,i={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:s}=i;s&&(e._overrideAuthToken="string"===typeof s?s:(0,r.Fy)(s,e.app.options.projectId))}class mt{constructor(e,t,n,i,r){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=o,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c,this._maxUploadRetryTime=l,this._requests=new Set,this._bucket=null!=i?L.makeFromBucketSpec(i,this._host):pt(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=L.makeFromBucketSpec(this._url,e):this._bucket=pt(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){z("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){z("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new rt(this,e)}_makeRequest(e,t,n,i,r=!0){if(this._deleted)return new M(O());{const s=te(e,this._appId,n,i,t,this._firebaseVersion,r);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(e,t){const[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,i).getPromise()}}const _t="@firebase/storage",vt="0.12.4",yt="storage";function wt(e,t,n){return e=(0,r.Ku)(e),st(e,t,n)}function bt(e){return e=(0,r.Ku)(e),ot(e)}function Tt(e,t){return e=(0,r.Ku)(e),at(e,t)}function Et(e){return e=(0,r.Ku)(e),ct(e)}function Ct(e,t){return e=(0,r.Ku)(e),ft(e,t)}function It(e=(0,i.Sx)(),t){e=(0,r.Ku)(e);const n=(0,i.j6)(e,yt),s=n.getImmediate({identifier:t}),o=(0,r.yU)("storage");return o&&St(s,...o),s}function St(e,t,n,i={}){gt(e,t,n,i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new mt(n,r,s,t,i.MF)}function At(){(0,i.om)(new s.uA(yt,kt,"PUBLIC").setMultipleInstances(!0)),(0,i.KO)(_t,vt,""),(0,i.KO)(_t,vt,"esm2017")}At()},5220:function(e,t,n){n.d(t,{LA:function(){return oe},aE:function(){return tt}});var i=n(641),r=n(953);
/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof document;function o(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function c(e,t){const n={};for(const i in t){const r=t[i];n[i]=u(r)?r.map(e):e(r)}return n}const l=()=>{},u=Array.isArray;const h=/#/g,d=/&/g,f=/\//g,p=/=/g,g=/\?/g,m=/\+/g,_=/%5B/g,v=/%5D/g,y=/%5E/g,w=/%60/g,b=/%7B/g,T=/%7C/g,E=/%7D/g,C=/%20/g;function I(e){return encodeURI(""+e).replace(T,"|").replace(_,"[").replace(v,"]")}function S(e){return I(e).replace(b,"{").replace(E,"}").replace(y,"^")}function k(e){return I(e).replace(m,"%2B").replace(C,"+").replace(h,"%23").replace(d,"%26").replace(w,"`").replace(b,"{").replace(E,"}").replace(y,"^")}function A(e){return k(e).replace(p,"%3D")}function R(e){return I(e).replace(h,"%23").replace(g,"%3F")}function N(e){return null==e?"":R(e).replace(f,"%2F")}function O(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}const P=/\/$/,x=e=>e.replace(P,"");function D(e,t,n="/"){let i,r={},s="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(i=t.slice(0,c),s=t.slice(c+1,a>-1?a:t.length),r=e(s)),a>-1&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=B(null!=i?i:t,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:O(o)}}function L(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function M(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function F(e,t,n){const i=t.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&U(t.matched[i],n.matched[r])&&$(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function U(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function $(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!j(e[n],t[n]))return!1;return!0}function j(e,t){return u(e)?V(e,t):u(t)?V(t,e):e===t}function V(e,t){return u(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function B(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),i=e.split("/"),r=i[i.length-1];".."!==r&&"."!==r||i.push("");let s,o,a=n.length-1;for(s=0;s<i.length;s++)if(o=i[s],"."!==o){if(".."!==o)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+i.slice(s).join("/")}var q,H;(function(e){e["pop"]="pop",e["push"]="push"})(q||(q={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(H||(H={}));function z(e){if(!e)if(s){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),x(e)}const W=/^[^#]+#/;function K(e,t){return e.replace(W,"#")+t}function G(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}const Q=()=>({left:window.scrollX,top:window.scrollY});function X(e){let t;if("el"in e){const n=e.el,i="string"===typeof n&&n.startsWith("#");0;const r="string"===typeof n?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=G(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.scrollX,null!=t.top?t.top:window.scrollY)}function Y(e,t){const n=history.state?history.state.position-t:-1;return n+e}const J=new Map;function Z(e,t){J.set(e,t)}function ee(e){const t=J.get(e);return J.delete(e),t}let te=()=>location.protocol+"//"+location.host;function ne(e,t){const{pathname:n,search:i,hash:r}=t,s=e.indexOf("#");if(s>-1){let t=r.includes(e.slice(s))?e.slice(s).length:1,n=r.slice(t);return"/"!==n[0]&&(n="/"+n),M(n,"")}const o=M(n,e);return o+i+r}function ie(e,t,n,i){let r=[],s=[],o=null;const c=({state:s})=>{const a=ne(e,location),c=n.value,l=t.value;let u=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);u=l?s.position-l.position:0}else i(a);r.forEach((e=>{e(n.value,c,{delta:u,type:q.pop,direction:u?u>0?H.forward:H.back:H.unknown})}))};function l(){o=n.value}function u(e){r.push(e);const t=()=>{const t=r.indexOf(e);t>-1&&r.splice(t,1)};return s.push(t),t}function h(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:Q()}),"")}function d(){for(const e of s)e();s=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:d}}function re(e,t,n,i=!1,r=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:r?Q():null}}function se(e){const{history:t,location:n}=window,i={value:ne(e,n)},r={value:t.state};function s(i,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+i:te()+e+i;try{t[o?"replaceState":"pushState"](s,"",c),r.value=s}catch(l){console.error(l),n[o?"replace":"assign"](c)}}function o(e,n){const o=a({},t.state,re(r.value.back,e,r.value.forward,!0),n,{position:r.value.position});s(e,o,!0),i.value=e}function c(e,n){const o=a({},r.value,t.state,{forward:e,scroll:Q()});s(o.current,o,!0);const c=a({},re(i.value,e,null),{position:o.position+1},n);s(e,c,!1),i.value=e}return r.value||s(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:i,state:r,push:c,replace:o}}function oe(e){e=z(e);const t=se(e),n=ie(e,t.state,t.location,t.replace);function i(e,t=!0){t||n.pauseListeners(),history.go(e)}const r=a({location:"",base:e,go:i,createHref:K.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function ae(e){return"string"===typeof e||e&&"object"===typeof e}function ce(e){return"string"===typeof e||"symbol"===typeof e}const le={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ue=Symbol("");var he;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(he||(he={}));function de(e,t){return a(new Error,{type:e,[ue]:!0},t)}function fe(e,t){return e instanceof Error&&ue in e&&(null==t||!!(e.type&t))}const pe="[^/]+?",ge={sensitive:!1,strict:!1,start:!0,end:!0},me=/[.+*?^${}()[\]/\\]/g;function _e(e,t){const n=a({},ge,t),i=[];let r=n.start?"^":"";const s=[];for(const a of e){const e=a.length?[]:[90];n.strict&&!a.length&&(r+="/");for(let t=0;t<a.length;t++){const i=a[t];let o=40+(n.sensitive?.25:0);if(0===i.type)t||(r+="/"),r+=i.value.replace(me,"\\$&"),o+=40;else if(1===i.type){const{value:e,repeatable:n,optional:c,regexp:l}=i;s.push({name:e,repeatable:n,optional:c});const u=l||pe;if(u!==pe){o+=10;try{new RegExp(`(${u})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${e}" (${u}): `+h.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;t||(d=c&&a.length<2?`(?:/${d})`:"/"+d),c&&(d+="?"),r+=d,o+=20,c&&(o+=-8),n&&(o+=-20),".*"===u&&(o+=-50)}e.push(o)}i.push(e)}if(n.strict&&n.end){const e=i.length-1;i[e][i[e].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function c(e){const t=e.match(o),n={};if(!t)return null;for(let i=1;i<t.length;i++){const e=t[i]||"",r=s[i-1];n[r.name]=e&&r.repeatable?e.split("/"):e}return n}function l(t){let n="",i=!1;for(const r of e){i&&n.endsWith("/")||(n+="/"),i=!1;for(const e of r)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(u(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const l=u(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${s}"`);r.length<2&&(n.endsWith("/")?n=n.slice(0,-1):i=!0)}n+=l}}return n||"/"}return{re:o,score:i,keys:s,parse:c,stringify:l}}function ve(e,t){let n=0;while(n<e.length&&n<t.length){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function ye(e,t){let n=0;const i=e.score,r=t.score;while(n<i.length&&n<r.length){const e=ve(i[n],r[n]);if(e)return e;n++}if(1===Math.abs(r.length-i.length)){if(we(i))return 1;if(we(r))return-1}return r.length-i.length}function we(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const be={type:0,value:""},Te=/[a-zA-Z0-9_]/;function Ee(e){if(!e)return[[]];if("/"===e)return[[be]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a,c=0,l="",u="";function h(){l&&(0===n?s.push({type:0,value:l}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),l="")}function d(){l+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=i;break;case 1:"("===a?n=2:Te.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:t("Unknown state");break}else i=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function Ce(e,t,n){const i=_e(Ee(e.path),n);const r=a(i,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf===!t.record.aliasOf&&t.children.push(r),r}function Ie(e,t){const n=[],i=new Map;function r(e){return i.get(e)}function s(e,n,i){const r=!i,c=ke(e);c.aliasOf=i&&i.record;const h=Oe(t,e),d=[c];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)d.push(a({},c,{components:i?i.record.components:c.components,path:e,aliasOf:i?i.record:c}))}let f,p;for(const t of d){const{path:a}=t;if(n&&"/"!==a[0]){const e=n.record.path,i="/"===e[e.length-1]?"":"/";t.path=n.record.path+(a&&i+a)}if(f=Ce(t,n,h),i?i.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),r&&e.name&&!Re(f)&&o(e.name)),c.children){const e=c.children;for(let t=0;t<e.length;t++)s(e[t],f,i&&i.children[t])}i=i||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&u(f)}return p?()=>{o(p)}:l}function o(e){if(ce(e)){const t=i.get(e);t&&(i.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&i.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function c(){return n}function u(e){let t=0;while(t<n.length&&ye(e,n[t])>=0&&(e.record.path!==n[t].record.path||!Pe(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!Re(e)&&i.set(e.record.name,e)}function h(e,t){let r,s,o,c={};if("name"in e&&e.name){if(r=i.get(e.name),!r)throw de(1,{location:e});0,o=r.record.name,c=a(Se(t.params,r.keys.filter((e=>!e.optional)).concat(r.parent?r.parent.keys.filter((e=>e.optional)):[]).map((e=>e.name))),e.params&&Se(e.params,r.keys.map((e=>e.name)))),s=r.stringify(c)}else if(null!=e.path)s=e.path,r=n.find((e=>e.re.test(s))),r&&(c=r.parse(s),o=r.record.name);else{if(r=t.name?i.get(t.name):n.find((e=>e.re.test(t.path))),!r)throw de(1,{location:e,currentLocation:t});o=r.record.name,c=a({},t.params,e.params),s=r.stringify(c)}const l=[];let u=r;while(u)l.unshift(u.record),u=u.parent;return{name:o,path:s,params:c,matched:l,meta:Ne(l)}}return t=Oe({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:h,removeRoute:o,getRoutes:c,getRecordMatcher:r}}function Se(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}function ke(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Ae(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Ae(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]="object"===typeof n?n[i]:n;return t}function Re(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ne(e){return e.reduce(((e,t)=>a(e,t.meta)),{})}function Oe(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}function Pe(e,t){return t.children.some((t=>t===e||Pe(e,t)))}function xe(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],i=(n?e.slice(1):e).split("&");for(let r=0;r<i.length;++r){const e=i[r].replace(m," "),n=e.indexOf("="),s=O(n<0?e:e.slice(0,n)),o=n<0?null:O(e.slice(n+1));if(s in t){let e=t[s];u(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function De(e){let t="";for(let n in e){const i=e[n];if(n=A(n),null==i){void 0!==i&&(t+=(t.length?"&":"")+n);continue}const r=u(i)?i.map((e=>e&&k(e))):[i&&k(i)];r.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Le(e){const t={};for(const n in e){const i=e[n];void 0!==i&&(t[n]=u(i)?i.map((e=>null==e?null:""+e)):null==i?i:""+i)}return t}const Me=Symbol(""),Fe=Symbol(""),Ue=Symbol(""),$e=Symbol(""),je=Symbol("");function Ve(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Be(e,t,n,i,r,s=(e=>e())){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise(((a,c)=>{const l=e=>{!1===e?c(de(4,{from:n,to:t})):e instanceof Error?c(e):ae(e)?c(de(2,{from:t,to:e})):(o&&i.enterCallbacks[r]===o&&"function"===typeof e&&o.push(e),a())},u=s((()=>e.call(i&&i.instances[r],t,n,l)));let h=Promise.resolve(u);e.length<3&&(h=h.then(l)),h.catch((e=>c(e)))}))}function qe(e,t,n,i,r=(e=>e())){const s=[];for(const a of e){0;for(const e in a.components){let c=a.components[e];if("beforeRouteEnter"===t||a.instances[e])if(He(c)){const o=c.__vccOpts||c,l=o[t];l&&s.push(Be(l,n,i,a,e,r))}else{let l=c();0,s.push((()=>l.then((s=>{if(!s)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${a.path}"`));const c=o(s)?s.default:s;a.components[e]=c;const l=c.__vccOpts||c,u=l[t];return u&&Be(u,n,i,a,e,r)()}))))}}}return s}function He(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function ze(e){const t=(0,i.WQ)(Ue),n=(0,i.WQ)($e);const s=(0,i.EW)((()=>{const n=(0,r.R1)(e.to);return t.resolve(n)})),o=(0,i.EW)((()=>{const{matched:e}=s.value,{length:t}=e,i=e[t-1],r=n.matched;if(!i||!r.length)return-1;const o=r.findIndex(U.bind(null,i));if(o>-1)return o;const a=Xe(e[t-2]);return t>1&&Xe(i)===a&&r[r.length-1].path!==a?r.findIndex(U.bind(null,e[t-2])):o})),a=(0,i.EW)((()=>o.value>-1&&Qe(n.params,s.value.params))),c=(0,i.EW)((()=>o.value>-1&&o.value===n.matched.length-1&&$(n.params,s.value.params)));function u(n={}){return Ge(n)?t[(0,r.R1)(e.replace)?"replace":"push"]((0,r.R1)(e.to)).catch(l):Promise.resolve()}return{route:s,href:(0,i.EW)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:u}}const We=(0,i.pM)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ze,setup(e,{slots:t}){const n=(0,r.Kh)(ze(e)),{options:s}=(0,i.WQ)(Ue),o=(0,i.EW)((()=>({[Ye(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ye(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const r=t.default&&t.default(n);return e.custom?r:(0,i.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},r)}}}),Ke=We;function Ge(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Qe(e,t){for(const n in t){const i=t[n],r=e[n];if("string"===typeof i){if(i!==r)return!1}else if(!u(r)||r.length!==i.length||i.some(((e,t)=>e!==r[t])))return!1}return!0}function Xe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ye=(e,t,n)=>null!=e?e:null!=t?t:n,Je=(0,i.pM)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=(0,i.WQ)(je),o=(0,i.EW)((()=>e.route||s.value)),c=(0,i.WQ)(Fe,0),l=(0,i.EW)((()=>{let e=(0,r.R1)(c);const{matched:t}=o.value;let n;while((n=t[e])&&!n.components)e++;return e})),u=(0,i.EW)((()=>o.value.matched[l.value]));(0,i.Gt)(Fe,(0,i.EW)((()=>l.value+1))),(0,i.Gt)(Me,u),(0,i.Gt)(je,o);const h=(0,r.KR)();return(0,i.wB)((()=>[h.value,u.value,e.name]),(([e,t,n],[i,r,s])=>{t&&(t.instances[n]=e,r&&r!==t&&e&&e===i&&(t.leaveGuards.size||(t.leaveGuards=r.leaveGuards),t.updateGuards.size||(t.updateGuards=r.updateGuards))),!e||!t||r&&U(t,r)&&i||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const r=o.value,s=e.name,c=u.value,l=c&&c.components[s];if(!l)return Ze(n.default,{Component:l,route:r});const d=c.props[s],f=d?!0===d?r.params:"function"===typeof d?d(r):d:null,p=e=>{e.component.isUnmounted&&(c.instances[s]=null)},g=(0,i.h)(l,a({},f,t,{onVnodeUnmounted:p,ref:h}));return Ze(n.default,{Component:g,route:r})||g}}});function Ze(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const et=Je;function tt(e){const t=Ie(e.routes,e),n=e.parseQuery||xe,o=e.stringifyQuery||De,h=e.history;const d=Ve(),f=Ve(),p=Ve(),g=(0,r.IJ)(le);let m=le;s&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const _=c.bind(null,(e=>""+e)),v=c.bind(null,N),y=c.bind(null,O);function w(e,n){let i,r;return ce(e)?(i=t.getRecordMatcher(e),r=n):r=e,t.addRoute(r,i)}function b(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function T(){return t.getRoutes().map((e=>e.record))}function E(e){return!!t.getRecordMatcher(e)}function C(e,i){if(i=a({},i||g.value),"string"===typeof e){const r=D(n,e,i.path),s=t.resolve({path:r.path},i),o=h.createHref(r.fullPath);return a(r,s,{params:y(s.params),hash:O(r.hash),redirectedFrom:void 0,href:o})}let r;if(null!=e.path)r=a({},e,{path:D(n,e.path,i.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];r=a({},e,{params:v(t)}),i.params=v(i.params)}const s=t.resolve(r,i),c=e.hash||"";s.params=_(y(s.params));const l=L(o,a({},e,{hash:S(c),path:s.path})),u=h.createHref(l);return a({fullPath:l,hash:c,query:o===De?Le(e.query):e.query||{}},s,{redirectedFrom:void 0,href:u})}function I(e){return"string"===typeof e?D(n,e,g.value.path):a({},e)}function k(e,t){if(m!==e)return de(8,{from:t,to:e})}function A(e){return x(e)}function R(e){return A(a(I(e),{replace:!0}))}function P(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let i="function"===typeof n?n(e):n;return"string"===typeof i&&(i=i.includes("?")||i.includes("#")?i=I(i):{path:i},i.params={}),a({query:e.query,hash:e.hash,params:null!=i.path?{}:e.params},i)}}function x(e,t){const n=m=C(e),i=g.value,r=e.state,s=e.force,c=!0===e.replace,l=P(n);if(l)return x(a(I(l),{state:"object"===typeof l?a({},r,l.state):r,force:s,replace:c}),t||n);const u=n;let h;return u.redirectedFrom=t,!s&&F(o,i,n)&&(h=de(16,{to:u,from:i}),ne(i,i,!0,!1)),(h?Promise.resolve(h):$(u,i)).catch((e=>fe(e)?fe(e,2)?e:te(e):G(e,u,i))).then((e=>{if(e){if(fe(e,2))return x(a({replace:c},I(e.to),{state:"object"===typeof e.to?a({},r,e.to.state):r,force:s}),t||u)}else e=V(u,i,!0,c,r);return j(u,i,e),e}))}function M(e,t){const n=k(e,t);return n?Promise.reject(n):Promise.resolve()}function U(e){const t=se.values().next().value;return t&&"function"===typeof t.runWithContext?t.runWithContext(e):e()}function $(e,t){let n;const[i,r,s]=nt(e,t);n=qe(i.reverse(),"beforeRouteLeave",e,t);for(const a of i)a.leaveGuards.forEach((i=>{n.push(Be(i,e,t))}));const o=M.bind(null,e,t);return n.push(o),ae(n).then((()=>{n=[];for(const i of d.list())n.push(Be(i,e,t));return n.push(o),ae(n)})).then((()=>{n=qe(r,"beforeRouteUpdate",e,t);for(const i of r)i.updateGuards.forEach((i=>{n.push(Be(i,e,t))}));return n.push(o),ae(n)})).then((()=>{n=[];for(const i of s)if(i.beforeEnter)if(u(i.beforeEnter))for(const r of i.beforeEnter)n.push(Be(r,e,t));else n.push(Be(i.beforeEnter,e,t));return n.push(o),ae(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=qe(s,"beforeRouteEnter",e,t,U),n.push(o),ae(n)))).then((()=>{n=[];for(const i of f.list())n.push(Be(i,e,t));return n.push(o),ae(n)})).catch((e=>fe(e,8)?e:Promise.reject(e)))}function j(e,t,n){p.list().forEach((i=>U((()=>i(e,t,n)))))}function V(e,t,n,i,r){const o=k(e,t);if(o)return o;const c=t===le,l=s?history.state:{};n&&(i||c?h.replace(e.fullPath,a({scroll:c&&l&&l.scroll},r)):h.push(e.fullPath,r)),g.value=e,ne(e,t,n,c),te()}let B;function H(){B||(B=h.listen(((e,t,n)=>{if(!oe.listening)return;const i=C(e),r=P(i);if(r)return void x(a(r,{replace:!0}),i).catch(l);m=i;const o=g.value;s&&Z(Y(o.fullPath,n.delta),Q()),$(i,o).catch((e=>fe(e,12)?e:fe(e,2)?(x(e.to,i).then((e=>{fe(e,20)&&!n.delta&&n.type===q.pop&&h.go(-1,!1)})).catch(l),Promise.reject()):(n.delta&&h.go(-n.delta,!1),G(e,i,o)))).then((e=>{e=e||V(i,o,!1),e&&(n.delta&&!fe(e,8)?h.go(-n.delta,!1):n.type===q.pop&&fe(e,20)&&h.go(-1,!1)),j(i,o,e)})).catch(l)})))}let z,W=Ve(),K=Ve();function G(e,t,n){te(e);const i=K.list();return i.length?i.forEach((i=>i(e,t,n))):console.error(e),Promise.reject(e)}function J(){return z&&g.value!==le?Promise.resolve():new Promise(((e,t)=>{W.add([e,t])}))}function te(e){return z||(z=!e,H(),W.list().forEach((([t,n])=>e?n(e):t())),W.reset()),e}function ne(t,n,r,o){const{scrollBehavior:a}=e;if(!s||!a)return Promise.resolve();const c=!r&&ee(Y(t.fullPath,0))||(o||!r)&&history.state&&history.state.scroll||null;return(0,i.dY)().then((()=>a(t,n,c))).then((e=>e&&X(e))).catch((e=>G(e,t,n)))}const ie=e=>h.go(e);let re;const se=new Set,oe={currentRoute:g,listening:!0,addRoute:w,removeRoute:b,hasRoute:E,getRoutes:T,resolve:C,options:e,push:A,replace:R,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:d.add,beforeResolve:f.add,afterEach:p.add,onError:K.add,isReady:J,install(e){const t=this;e.component("RouterLink",Ke),e.component("RouterView",et),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,r.R1)(g)}),s&&!re&&g.value===le&&(re=!0,A(h.location).catch((e=>{0})));const n={};for(const r in le)Object.defineProperty(n,r,{get:()=>g.value[r],enumerable:!0});e.provide(Ue,t),e.provide($e,(0,r.Gc)(n)),e.provide(je,g);const i=e.unmount;se.add(e),e.unmount=function(){se.delete(e),se.size<1&&(m=le,B&&B(),B=null,g.value=le,re=!1,z=!1),i()}}};function ae(e){return e.reduce(((e,t)=>e.then((()=>U(t)))),Promise.resolve())}return oe}function nt(e,t){const n=[],i=[],r=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>U(e,s)))?i.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>U(e,a)))||r.push(a))}return[n,i,r]}},5246:function(e,t,n){n.d(t,{Ay:function(){return ze},dj:function(){return He}});var i=n(641),r=n(3751),s=n(953),o=n(33),a=Object.defineProperty,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&h(e,n,t[n]);if(c)for(var n of c(t))u.call(t,n)&&h(e,n,t[n]);return e},f=e=>"function"===typeof e,p=e=>"string"===typeof e,g=e=>p(e)&&e.trim().length>0,m=e=>"number"===typeof e,_=e=>"undefined"===typeof e,v=e=>"object"===typeof e&&null!==e,y=e=>I(e,"tag")&&g(e.tag),w=e=>window.TouchEvent&&e instanceof TouchEvent,b=e=>I(e,"component")&&E(e.component),T=e=>f(e)||v(e),E=e=>!_(e)&&(p(e)||T(e)||b(e)),C=e=>v(e)&&["height","width","right","left","top","bottom"].every((t=>m(e[t]))),I=(e,t)=>(v(e)||f(e))&&t in e,S=(e=>()=>e++)(0);function k(e){return w(e)?e.targetTouches[0].clientX:e.clientX}function A(e){return w(e)?e.targetTouches[0].clientY:e.clientY}var R,N,O,P=e=>{_(e.remove)?e.parentNode&&e.parentNode.removeChild(e):e.remove()},x=e=>b(e)?x(e.component):y(e)?(0,i.pM)({render(){return e}}):"string"===typeof e?e:(0,s.ux)((0,s.R1)(e)),D=e=>{if("string"===typeof e)return e;const t=I(e,"props")&&v(e.props)?e.props:{},n=I(e,"listeners")&&v(e.listeners)?e.listeners:{};return{component:x(e),props:t,listeners:n}},L=()=>"undefined"!==typeof window,M=class{constructor(){this.allHandlers={}}getHandlers(e){return this.allHandlers[e]||[]}on(e,t){const n=this.getHandlers(e);n.push(t),this.allHandlers[e]=n}off(e,t){const n=this.getHandlers(e);n.splice(n.indexOf(t)>>>0,1)}emit(e,t){const n=this.getHandlers(e);n.forEach((e=>e(t)))}},F=e=>["on","off","emit"].every((t=>I(e,t)&&f(e[t])));(function(e){e["SUCCESS"]="success",e["ERROR"]="error",e["WARNING"]="warning",e["INFO"]="info",e["DEFAULT"]="default"})(R||(R={})),function(e){e["TOP_LEFT"]="top-left",e["TOP_CENTER"]="top-center",e["TOP_RIGHT"]="top-right",e["BOTTOM_LEFT"]="bottom-left",e["BOTTOM_CENTER"]="bottom-center",e["BOTTOM_RIGHT"]="bottom-right"}(N||(N={})),function(e){e["ADD"]="add",e["DISMISS"]="dismiss",e["UPDATE"]="update",e["CLEAR"]="clear",e["UPDATE_DEFAULTS"]="update_defaults"}(O||(O={}));var U="Vue-Toastification",$={type:{type:String,default:R.DEFAULT},classNames:{type:[String,Array],default:()=>[]},trueBoolean:{type:Boolean,default:!0}},j={type:$.type,customIcon:{type:[String,Boolean,Object,Function],default:!0}},V={component:{type:[String,Object,Function,Boolean],default:"button"},classNames:$.classNames,showOnHover:{type:Boolean,default:!1},ariaLabel:{type:String,default:"close"}},B={timeout:{type:[Number,Boolean],default:5e3},hideProgressBar:{type:Boolean,default:!1},isRunning:{type:Boolean,default:!1}},q={transition:{type:[Object,String],default:`${U}__bounce`}},H={position:{type:String,default:N.TOP_RIGHT},draggable:$.trueBoolean,draggablePercent:{type:Number,default:.6},pauseOnFocusLoss:$.trueBoolean,pauseOnHover:$.trueBoolean,closeOnClick:$.trueBoolean,timeout:B.timeout,hideProgressBar:B.hideProgressBar,toastClassName:$.classNames,bodyClassName:$.classNames,icon:j.customIcon,closeButton:V.component,closeButtonClassName:V.classNames,showCloseButtonOnHover:V.showOnHover,accessibility:{type:Object,default:()=>({toastRole:"alert",closeButtonLabel:"close"})},rtl:{type:Boolean,default:!1},eventBus:{type:Object,required:!1,default:()=>new M}},z={id:{type:[String,Number],required:!0,default:0},type:$.type,content:{type:[String,Object,Function],required:!0,default:""},onClick:{type:Function,default:void 0},onClose:{type:Function,default:void 0}},W={container:{type:[Object,Function],default:()=>document.body},newestOnTop:$.trueBoolean,maxToasts:{type:Number,default:20},transition:q.transition,toastDefaults:Object,filterBeforeCreate:{type:Function,default:e=>e},filterToasts:{type:Function,default:e=>e},containerClassName:$.classNames,onMounted:Function,shareAppContext:[Boolean,Object]},K={CORE_TOAST:H,TOAST:z,CONTAINER:W,PROGRESS_BAR:B,ICON:j,TRANSITION:q,CLOSE_BUTTON:V},G=(0,i.pM)({name:"VtProgressBar",props:K.PROGRESS_BAR,data(){return{hasClass:!0}},computed:{style(){return{animationDuration:`${this.timeout}ms`,animationPlayState:this.isRunning?"running":"paused",opacity:this.hideProgressBar?0:1}},cpClass(){return this.hasClass?`${U}__progress-bar`:""}},watch:{timeout(){this.hasClass=!1,this.$nextTick((()=>this.hasClass=!0))}},mounted(){this.$el.addEventListener("animationend",this.animationEnded)},beforeUnmount(){this.$el.removeEventListener("animationend",this.animationEnded)},methods:{animationEnded(){this.$emit("close-toast")}}});function Q(e,t){return(0,i.uX)(),(0,i.CE)("div",{style:(0,o.Tr)(e.style),class:(0,o.C4)(e.cpClass)},null,6)}G.render=Q;var X=G,Y=(0,i.pM)({name:"VtCloseButton",props:K.CLOSE_BUTTON,computed:{buttonComponent(){return!1!==this.component?x(this.component):"button"},classes(){const e=[`${U}__close-button`];return this.showOnHover&&e.push("show-on-hover"),e.concat(this.classNames)}}}),J=(0,i.eW)(" × ");function Z(e,t){return(0,i.uX)(),(0,i.Wv)((0,i.$y)(e.buttonComponent),(0,i.v6)({"aria-label":e.ariaLabel,class:e.classes},e.$attrs),{default:(0,i.k6)((()=>[J])),_:1},16,["aria-label","class"])}Y.render=Z;var ee=Y,te={},ne={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check-circle",class:"svg-inline--fa fa-check-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},ie=(0,i.Lk)("path",{fill:"currentColor",d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},null,-1),re=[ie];function se(e,t){return(0,i.uX)(),(0,i.CE)("svg",ne,re)}te.render=se;var oe=te,ae={},ce={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"info-circle",class:"svg-inline--fa fa-info-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},le=(0,i.Lk)("path",{fill:"currentColor",d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},null,-1),ue=[le];function he(e,t){return(0,i.uX)(),(0,i.CE)("svg",ce,ue)}ae.render=he;var de=ae,fe={},pe={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-circle",class:"svg-inline--fa fa-exclamation-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},ge=(0,i.Lk)("path",{fill:"currentColor",d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),me=[ge];function _e(e,t){return(0,i.uX)(),(0,i.CE)("svg",pe,me)}fe.render=_e;var ve=fe,ye={},we={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-triangle",class:"svg-inline--fa fa-exclamation-triangle fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},be=(0,i.Lk)("path",{fill:"currentColor",d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),Te=[be];function Ee(e,t){return(0,i.uX)(),(0,i.CE)("svg",we,Te)}ye.render=Ee;var Ce=ye,Ie=(0,i.pM)({name:"VtIcon",props:K.ICON,computed:{customIconChildren(){return I(this.customIcon,"iconChildren")?this.trimValue(this.customIcon.iconChildren):""},customIconClass(){return p(this.customIcon)?this.trimValue(this.customIcon):I(this.customIcon,"iconClass")?this.trimValue(this.customIcon.iconClass):""},customIconTag(){return I(this.customIcon,"iconTag")?this.trimValue(this.customIcon.iconTag,"i"):"i"},hasCustomIcon(){return this.customIconClass.length>0},component(){return this.hasCustomIcon?this.customIconTag:E(this.customIcon)?x(this.customIcon):this.iconTypeComponent},iconTypeComponent(){const e={[R.DEFAULT]:de,[R.INFO]:de,[R.SUCCESS]:oe,[R.ERROR]:Ce,[R.WARNING]:ve};return e[this.type]},iconClasses(){const e=[`${U}__icon`];return this.hasCustomIcon?e.concat(this.customIconClass):e}},methods:{trimValue(e,t=""){return g(e)?e.trim():t}}});function Se(e,t){return(0,i.uX)(),(0,i.Wv)((0,i.$y)(e.component),{class:(0,o.C4)(e.iconClasses)},{default:(0,i.k6)((()=>[(0,i.eW)((0,o.v_)(e.customIconChildren),1)])),_:1},8,["class"])}Ie.render=Se;var ke=Ie,Ae=(0,i.pM)({name:"VtToast",components:{ProgressBar:X,CloseButton:ee,Icon:ke},inheritAttrs:!1,props:Object.assign({},K.CORE_TOAST,K.TOAST),data(){const e={isRunning:!0,disableTransitions:!1,beingDragged:!1,dragStart:0,dragPos:{x:0,y:0},dragRect:{}};return e},computed:{classes(){const e=[`${U}__toast`,`${U}__toast--${this.type}`,`${this.position}`].concat(this.toastClassName);return this.disableTransitions&&e.push("disable-transition"),this.rtl&&e.push(`${U}__toast--rtl`),e},bodyClasses(){const e=[`${U}__toast-${p(this.content)?"body":"component-body"}`].concat(this.bodyClassName);return e},draggableStyle(){return this.dragStart===this.dragPos.x?{}:this.beingDragged?{transform:`translateX(${this.dragDelta}px)`,opacity:1-Math.abs(this.dragDelta/this.removalDistance)}:{transition:"transform 0.2s, opacity 0.2s",transform:"translateX(0)",opacity:1}},dragDelta(){return this.beingDragged?this.dragPos.x-this.dragStart:0},removalDistance(){return C(this.dragRect)?(this.dragRect.right-this.dragRect.left)*this.draggablePercent:0}},mounted(){this.draggable&&this.draggableSetup(),this.pauseOnFocusLoss&&this.focusSetup()},beforeUnmount(){this.draggable&&this.draggableCleanup(),this.pauseOnFocusLoss&&this.focusCleanup()},methods:{hasProp:I,getVueComponentFromObj:x,closeToast(){this.eventBus.emit(O.DISMISS,this.id)},clickHandler(){this.onClick&&this.onClick(this.closeToast),this.closeOnClick&&(this.beingDragged&&this.dragStart!==this.dragPos.x||this.closeToast())},timeoutHandler(){this.closeToast()},hoverPause(){this.pauseOnHover&&(this.isRunning=!1)},hoverPlay(){this.pauseOnHover&&(this.isRunning=!0)},focusPause(){this.isRunning=!1},focusPlay(){this.isRunning=!0},focusSetup(){addEventListener("blur",this.focusPause),addEventListener("focus",this.focusPlay)},focusCleanup(){removeEventListener("blur",this.focusPause),removeEventListener("focus",this.focusPlay)},draggableSetup(){const e=this.$el;e.addEventListener("touchstart",this.onDragStart,{passive:!0}),e.addEventListener("mousedown",this.onDragStart),addEventListener("touchmove",this.onDragMove,{passive:!1}),addEventListener("mousemove",this.onDragMove),addEventListener("touchend",this.onDragEnd),addEventListener("mouseup",this.onDragEnd)},draggableCleanup(){const e=this.$el;e.removeEventListener("touchstart",this.onDragStart),e.removeEventListener("mousedown",this.onDragStart),removeEventListener("touchmove",this.onDragMove),removeEventListener("mousemove",this.onDragMove),removeEventListener("touchend",this.onDragEnd),removeEventListener("mouseup",this.onDragEnd)},onDragStart(e){this.beingDragged=!0,this.dragPos={x:k(e),y:A(e)},this.dragStart=k(e),this.dragRect=this.$el.getBoundingClientRect()},onDragMove(e){this.beingDragged&&(e.preventDefault(),this.isRunning&&(this.isRunning=!1),this.dragPos={x:k(e),y:A(e)})},onDragEnd(){this.beingDragged&&(Math.abs(this.dragDelta)>=this.removalDistance?(this.disableTransitions=!0,this.$nextTick((()=>this.closeToast()))):setTimeout((()=>{this.beingDragged=!1,C(this.dragRect)&&this.pauseOnHover&&this.dragRect.bottom>=this.dragPos.y&&this.dragPos.y>=this.dragRect.top&&this.dragRect.left<=this.dragPos.x&&this.dragPos.x<=this.dragRect.right?this.isRunning=!1:this.isRunning=!0})))}}}),Re=["role"];function Ne(e,t){const n=(0,i.g2)("Icon"),s=(0,i.g2)("CloseButton"),a=(0,i.g2)("ProgressBar");return(0,i.uX)(),(0,i.CE)("div",{class:(0,o.C4)(e.classes),style:(0,o.Tr)(e.draggableStyle),onClick:t[0]||(t[0]=(...t)=>e.clickHandler&&e.clickHandler(...t)),onMouseenter:t[1]||(t[1]=(...t)=>e.hoverPause&&e.hoverPause(...t)),onMouseleave:t[2]||(t[2]=(...t)=>e.hoverPlay&&e.hoverPlay(...t))},[e.icon?((0,i.uX)(),(0,i.Wv)(n,{key:0,"custom-icon":e.icon,type:e.type},null,8,["custom-icon","type"])):(0,i.Q3)("v-if",!0),(0,i.Lk)("div",{role:e.accessibility.toastRole||"alert",class:(0,o.C4)(e.bodyClasses)},["string"===typeof e.content?((0,i.uX)(),(0,i.CE)(i.FK,{key:0},[(0,i.eW)((0,o.v_)(e.content),1)],2112)):((0,i.uX)(),(0,i.Wv)((0,i.$y)(e.getVueComponentFromObj(e.content)),(0,i.v6)({key:1,"toast-id":e.id},e.hasProp(e.content,"props")?e.content.props:{},(0,i.Tb)(e.hasProp(e.content,"listeners")?e.content.listeners:{}),{onCloseToast:e.closeToast}),null,16,["toast-id","onCloseToast"]))],10,Re),e.closeButton?((0,i.uX)(),(0,i.Wv)(s,{key:1,component:e.closeButton,"class-names":e.closeButtonClassName,"show-on-hover":e.showCloseButtonOnHover,"aria-label":e.accessibility.closeButtonLabel,onClick:(0,r.D$)(e.closeToast,["stop"])},null,8,["component","class-names","show-on-hover","aria-label","onClick"])):(0,i.Q3)("v-if",!0),e.timeout?((0,i.uX)(),(0,i.Wv)(a,{key:2,"is-running":e.isRunning,"hide-progress-bar":e.hideProgressBar,timeout:e.timeout,onCloseToast:e.timeoutHandler},null,8,["is-running","hide-progress-bar","timeout","onCloseToast"])):(0,i.Q3)("v-if",!0)],38)}Ae.render=Ne;var Oe=Ae,Pe=(0,i.pM)({name:"VtTransition",props:K.TRANSITION,emits:["leave"],methods:{hasProp:I,leave(e){e instanceof HTMLElement&&(e.style.left=e.offsetLeft+"px",e.style.top=e.offsetTop+"px",e.style.width=getComputedStyle(e).width,e.style.position="absolute")}}});function xe(e,t){return(0,i.uX)(),(0,i.Wv)(r.F,{tag:"div","enter-active-class":e.transition.enter?e.transition.enter:`${e.transition}-enter-active`,"move-class":e.transition.move?e.transition.move:`${e.transition}-move`,"leave-active-class":e.transition.leave?e.transition.leave:`${e.transition}-leave-active`,onLeave:e.leave},{default:(0,i.k6)((()=>[(0,i.RG)(e.$slots,"default")])),_:3},8,["enter-active-class","move-class","leave-active-class","onLeave"])}Pe.render=xe;var De=Pe,Le=(0,i.pM)({name:"VueToastification",devtools:{hide:!0},components:{Toast:Oe,VtTransition:De},props:Object.assign({},K.CORE_TOAST,K.CONTAINER,K.TRANSITION),data(){const e={count:0,positions:Object.values(N),toasts:{},defaults:{}};return e},computed:{toastArray(){return Object.values(this.toasts)},filteredToasts(){return this.defaults.filterToasts(this.toastArray)}},beforeMount(){const e=this.eventBus;e.on(O.ADD,this.addToast),e.on(O.CLEAR,this.clearToasts),e.on(O.DISMISS,this.dismissToast),e.on(O.UPDATE,this.updateToast),e.on(O.UPDATE_DEFAULTS,this.updateDefaults),this.defaults=this.$props},mounted(){this.setup(this.container)},methods:{async setup(e){f(e)&&(e=await e()),P(this.$el),e.appendChild(this.$el)},setToast(e){_(e.id)||(this.toasts[e.id]=e)},addToast(e){e.content=D(e.content);const t=Object.assign({},this.defaults,e.type&&this.defaults.toastDefaults&&this.defaults.toastDefaults[e.type],e),n=this.defaults.filterBeforeCreate(t,this.toastArray);n&&this.setToast(n)},dismissToast(e){const t=this.toasts[e];_(t)||_(t.onClose)||t.onClose(),delete this.toasts[e]},clearToasts(){Object.keys(this.toasts).forEach((e=>{this.dismissToast(e)}))},getPositionToasts(e){const t=this.filteredToasts.filter((t=>t.position===e)).slice(0,this.defaults.maxToasts);return this.defaults.newestOnTop?t.reverse():t},updateDefaults(e){_(e.container)||this.setup(e.container),this.defaults=Object.assign({},this.defaults,e)},updateToast({id:e,options:t,create:n}){this.toasts[e]?(t.timeout&&t.timeout===this.toasts[e].timeout&&t.timeout++,this.setToast(Object.assign({},this.toasts[e],t))):n&&this.addToast(Object.assign({},{id:e},t))},getClasses(e){const t=[`${U}__container`,e];return t.concat(this.defaults.containerClassName)}}});function Me(e,t){const n=(0,i.g2)("Toast"),r=(0,i.g2)("VtTransition");return(0,i.uX)(),(0,i.CE)("div",null,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.positions,(t=>((0,i.uX)(),(0,i.CE)("div",{key:t},[(0,i.bF)(r,{transition:e.defaults.transition,class:(0,o.C4)(e.getClasses(t))},{default:(0,i.k6)((()=>[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.getPositionToasts(t),(e=>((0,i.uX)(),(0,i.Wv)(n,(0,i.v6)({key:e.id},e),null,16)))),128))])),_:2},1032,["transition","class"])])))),128))])}Le.render=Me;var Fe=Le,Ue=(e={},t=!0)=>{const n=e.eventBus=e.eventBus||new M;t&&(0,i.dY)((()=>{const t=(0,r.Ef)(Fe,d({},e)),n=t.mount(document.createElement("div")),i=e.onMounted;if(_(i)||i(n,t),e.shareAppContext){const n=e.shareAppContext;!0===n?console.warn(`[${U}] App to share context with was not provided.`):(t._context.components=n._context.components,t._context.directives=n._context.directives,t._context.mixins=n._context.mixins,t._context.provides=n._context.provides,t.config.globalProperties=n.config.globalProperties)}}));const s=(e,t)=>{const i=Object.assign({},{id:S(),type:R.DEFAULT},t,{content:e});return n.emit(O.ADD,i),i.id};function o(e,{content:t,options:i},r=!1){const s=Object.assign({},i,{content:t});n.emit(O.UPDATE,{id:e,options:s,create:r})}return s.clear=()=>n.emit(O.CLEAR,void 0),s.updateDefaults=e=>{n.emit(O.UPDATE_DEFAULTS,e)},s.dismiss=e=>{n.emit(O.DISMISS,e)},s.update=o,s.success=(e,t)=>s(e,Object.assign({},t,{type:R.SUCCESS})),s.info=(e,t)=>s(e,Object.assign({},t,{type:R.INFO})),s.error=(e,t)=>s(e,Object.assign({},t,{type:R.ERROR})),s.warning=(e,t)=>s(e,Object.assign({},t,{type:R.WARNING})),s},$e=()=>{const e=()=>console.warn(`[${U}] This plugin does not support SSR!`);return new Proxy(e,{get(){return e}})};function je(e){return L()?F(e)?Ue({eventBus:e},!1):Ue(e,!0):$e()}var Ve=Symbol("VueToastification"),Be=new M,qe=(e,t)=>{!0===(null==t?void 0:t.shareAppContext)&&(t.shareAppContext=e);const n=je(d({eventBus:Be},t));e.provide(Ve,n)},He=e=>{if(e)return je(e);const t=(0,i.nI)()?(0,i.WQ)(Ve,void 0):void 0;return t||je(Be)},ze=qe},4577:function(e,t,n){n.d(t,{Nz:function(){return fo},zJ:function(){return ro},qN:function(){return co},vc:function(){return ho},eW:function(){return lo}});var i=n(8782),r=n(953),s=n(641),o=n(9928),a=n(5125),c=n(6743),l=n(3424);const u="@firebase/database",h="1.0.4";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let d="";function f(e){d=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,c.As)(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,c.$L)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,c.gR)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new p(t)}}catch(t){}return new g},_=m("localStorage"),v=m("sessionStorage"),y=new l.Vy("@firebase/database"),w=function(){let e=1;return function(){return e++}}(),b=function(e){const t=(0,c.kj)(e),n=new c.gz;n.update(t);const i=n.digest();return c.K3.encodeByteArray(i)},T=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"===typeof i&&"number"===typeof i.length?t+=T.apply(null,i):t+="object"===typeof i?(0,c.As)(i):i,t+=" "}return t};let E=null,C=!0;const I=function(e,t){(0,c.vA)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(y.logLevel=l.$b.VERBOSE,E=y.log.bind(y),t&&v.set("logging_enabled",!0)):"function"===typeof e?E=e:(E=null,v.remove("logging_enabled"))},S=function(...e){if(!0===C&&(C=!1,null===E&&!0===v.get("logging_enabled")&&I(!0)),E){const t=T.apply(null,e);E(t)}},k=function(e){return function(...t){S(e,...t)}},A=function(...e){const t="FIREBASE INTERNAL ERROR: "+T(...e);y.error(t)},R=function(...e){const t=`FIREBASE FATAL ERROR: ${T(...e)}`;throw y.error(t),new Error(t)},N=function(...e){const t="FIREBASE WARNING: "+T(...e);y.warn(t)},O=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&N("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},P=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},x=function(e){if((0,c.$g)()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}},D="[MIN_NAME]",L="[MAX_NAME]",M=function(e,t){if(e===t)return 0;if(e===D||t===L)return-1;if(t===D||e===L)return 1;{const n=G(e),i=G(t);return null!==n?null!==i?n-i===0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},F=function(e,t){return e===t?0:e<t?-1:1},U=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+(0,c.As)(t))},$=function(e){if("object"!==typeof e||null===e)return(0,c.As)(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=(0,c.As)(t[i]),n+=":",n+=$(e[t[i]]);return n+="}",n},j=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function V(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const B=function(e){(0,c.vA)(!P(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let r,s,o,a,l;0===e?(s=0,o=0,r=1/e===-1/0?1:0):(r=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(e)/Math.LN2),i),s=a+i,o=Math.round(e*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(e/Math.pow(2,1-i-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=t;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(r?1:0),u.reverse();const h=u.join("");let d="";for(l=0;l<64;l+=8){let e=parseInt(h.substr(l,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},q=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},H=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};const z=new RegExp("^-?(0*)\\d{1,10}$"),W=-2147483648,K=2147483647,G=function(e){if(z.test(e)){const t=Number(e);if(t>=W&&t<=K)return t}return null},Q=function(e){try{e()}catch(t){setTimeout((()=>{const e=t.stack||"";throw N("Exception was thrown by user callback.",e),t}),Math.floor(0))}},X=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Y=function(e,t){const n=setTimeout(e,t);return"number"===typeof n&&"undefined"!==typeof Deno&&Deno["unrefTimer"]?Deno.unrefTimer(n):"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class J{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){N(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(S("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',N(e)}}class ee{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ee.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const te="5",ne="v",ie="s",re="r",se="f",oe=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ae="ls",ce="p",le="ac",ue="websocket",he="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class de{constructor(e,t,n,i,r=!1,s="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=_.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&_.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function fe(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function pe(e,t,n){let i;if((0,c.vA)("string"===typeof t,"typeof type must == string"),(0,c.vA)("object"===typeof n,"typeof params must == object"),t===ue)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==he)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}fe(e)&&(n["ns"]=e.namespace);const r=[];return V(n,((e,t)=>{r.push(e+"="+t)})),i+r.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,c.gR)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,c.A4)(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me={},_e={};function ve(e){const t=e.toString();return me[t]||(me[t]=new ge),me[t]}function ye(e,t){const n=e.toString();return _e[n]||(_e[n]=t()),_e[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Q((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be="start",Te="close",Ee="pLPCommand",Ce="pRTLPCB",Ie="id",Se="pw",ke="ser",Ae="cb",Re="seg",Ne="ts",Oe="d",Pe="dframe",xe=1870,De=30,Le=xe-De,Me=25e3,Fe=3e4;class Ue{constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=k(e),this.stats_=ve(t),this.urlFn=e=>(this.appCheckToken&&(e[le]=this.appCheckToken),pe(t,he,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new we(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(Fe)),x((()=>{if(this.isClosed_)return;this.scriptTagHolder=new $e(((...e)=>{const[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===be)this.id=n,this.password=i;else{if(t!==Te)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[be]="t",e[ke]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[Ae]=this.scriptTagHolder.uniqueCallbackIdentifier),e[ne]=te,this.transportSessionId&&(e[ie]=this.transportSessionId),this.lastSessionId&&(e[ae]=this.lastSessionId),this.applicationId&&(e[ce]=this.applicationId),this.appCheckToken&&(e[le]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&oe.test(location.hostname)&&(e[re]=se);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ue.forceAllow_=!0}static forceDisallow(){Ue.forceDisallow_=!0}static isAvailable(){return!(0,c.$g)()&&(!!Ue.forceAllow_||!Ue.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!q()&&!H())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=(0,c.As)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(0,c.KA)(t),i=j(n,Le);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,c.$g)())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Pe]="t",n[Ie]=e,n[Se]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=(0,c.As)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class $e{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,c.$g)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=w(),window[Ee+this.uniqueCallbackIdentifier]=e,window[Ce+this.uniqueCallbackIdentifier]=t,this.myIFrame=$e.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(r){S("frame writing exception"),r.stack&&S(r.stack),S(r)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||S("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ie]=this.myID,e[Se]=this.myPW,e[ke]=this.currentSerial;let t=this.urlFn(e),n="",i=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+De+n.length<=xe))break;{const e=this.pendingSegs.shift();n=n+"&"+Re+i+"="+e.seg+"&"+Ne+i+"="+e.ts+"&"+Oe+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(Me)),r=()=>{clearTimeout(i),n()};this.addTag(e,r)}addTag(e,t){(0,c.$g)()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{S("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je=16384,Ve=45e3;let Be=null;"undefined"!==typeof MozWebSocket?Be=MozWebSocket:"undefined"!==typeof WebSocket&&(Be=WebSocket);class qe{constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=k(this.connId),this.stats_=ve(t),this.connURL=qe.connectionURL_(t,s,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,r){const s={};return s[ne]=te,!(0,c.$g)()&&"undefined"!==typeof location&&location.hostname&&oe.test(location.hostname)&&(s[re]=se),t&&(s[ie]=t),n&&(s[ae]=n),i&&(s[le]=i),r&&(s[ce]=r),pe(e,ue,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,_.set("previous_websocket_failure",!0);try{let e;if((0,c.$g)()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${te}/${d}/${process.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers["Authorization"]=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={NODE_ENV:"production",BASE_URL:"/"},i=0===this.connURL.indexOf("wss://")?n["HTTPS_PROXY"]||n["https_proxy"]:n["HTTP_PROXY"]||n["http_proxy"];i&&(e["proxy"]={origin:i})}this.mySock=new Be(this.connURL,[],e)}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){qe.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Be&&!qe.forceDisallow_}static previouslyFailed(){return _.isInMemoryStorage||!0===_.get("previous_websocket_failure")}markConnectionHealthy(){_.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=(0,c.$L)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,c.vA)(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=(0,c.As)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=j(t,je);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(Ve))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}qe.responsesRequiredToBeHealthy=2,qe.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class He{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ue,qe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=qe&&qe["isAvailable"]();let n=t&&!qe.previouslyFailed();if(e.webSocketOnly&&(t||N("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[qe];else{const e=this.transports_=[];for(const t of He.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t);He.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}He.globalTransportInitialized_=!1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ze=6e4,We=5e3,Ke=10240,Ge=102400,Qe="t",Xe="d",Ye="s",Je="r",Ze="e",et="o",tt="a",nt="n",it="p",rt="h";class st{constructor(e,t,n,i,r,s,o,a,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=k("c:"+this.id+":"),this.transportManager_=new He(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e["healthyTimeout"]||0;i>0&&(this.healthyTimeout_=Y((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ge?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ke?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Qe in e){const t=e[Qe];t===tt?this.upgradeIfSecondaryHealthy_():t===Je?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===et&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=U("t",e),n=U("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:it,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:tt,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:nt,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=U("t",e),n=U("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=U(Qe,e);if(Xe in e){const n=e[Xe];if(t===rt){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if(t===nt){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Ye?this.onConnectionShutdown_(n):t===Je?this.onReset_(n):t===Ze?A("Server Error: "+n):t===et?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):A("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),te!==n&&N("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Y((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(ze))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Y((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(We))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:it,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(_.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,c.vA)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!n||n===i[r].context))return void i.splice(r,1)}validateEventType_(e){(0,c.vA)(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends at{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||(0,c.jZ)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new ct}getInitialEvent(e){return(0,c.vA)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt=32,ut=768;class ht{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function dt(){return new ht("")}function ft(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function pt(e){return e.pieces_.length-e.pieceNum_}function gt(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ht(e.pieces_,t)}function mt(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function _t(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function vt(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function yt(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ht(t,0)}function wt(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof ht)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new ht(n,0)}function bt(e){return e.pieceNum_>=e.pieces_.length}function Tt(e,t){const n=ft(e),i=ft(t);if(null===n)return t;if(n===i)return Tt(gt(e),gt(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Et(e,t){if(pt(e)!==pt(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Ct(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(pt(e)>pt(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class It{constructor(e,t){this.errorPrefix_=t,this.parts_=vt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=(0,c.OE)(this.parts_[n]);At(this)}}function St(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=(0,c.OE)(t),At(e)}function kt(e){const t=e.parts_.pop();e.byteLength_-=(0,c.OE)(t),e.parts_.length>0&&(e.byteLength_-=1)}function At(e){if(e.byteLength_>ut)throw new Error(e.errorPrefix_+"has a key path longer than "+ut+" bytes ("+e.byteLength_+").");if(e.parts_.length>lt)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+lt+") or object contains a cycle "+Rt(e))}function Rt(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends at{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new Nt}getInitialEvent(e){return(0,c.vA)("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=1e3,Pt=3e5,xt=3e4,Dt=1.3,Lt=3e4,Mt="server_kill",Ft=3;class Ut extends ot{constructor(e,t,n,i,r,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=Ut.nextPersistentConnectionId_++,this.log_=k("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ot,this.maxReconnectDelay_=Pt,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!(0,c.$g)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Nt.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&ct.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_((0,c.As)(r)),(0,c.vA)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new c.cY,n={p:e._path.toString(),q:e._queryObject},i={action:"g",request:n,onComplete:e=>{const n=e["d"];"ok"===e["s"]?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),(0,c.vA)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,c.vA)(!this.listens.get(s).has(r),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(s).set(r,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n},s="q";e.tag&&(r["q"]=t._queryObject,r["t"]=e.tag),r["h"]=e.hashFn(),this.sendRequest(s,r,(r=>{const s=r["d"],o=r["s"];Ut.warnOnListenWarnings_(s,t);const a=this.listens.get(n)&&this.listens.get(n).get(i);a===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&(0,c.gR)(e,"w")){const n=(0,c.yw)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();N(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||(0,c.qc)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=xt)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=(0,c.Cv)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t["s"],i=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),(0,c.vA)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const r=this.removeListen_(n,i);r&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},s="n";i&&(r["q"]=n,r["t"]=i),this.sendRequest(s,r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(e=>{i&&setTimeout((()=>{i(e["s"],e["d"])}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const s={p:t,d:n};void 0!==r&&(s["h"]=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n["s"],n["d"])}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,c.As)(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):A("Unrecognized action received from server: "+(0,c.As)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,c.vA)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ot,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ot,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>Lt&&(this.reconnectDelay_=Ot),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Dt)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ut.nextConnectionId_++,r=this.lastSessionId;let s=!1,o=null;const a=function(){o?o.close():(s=!0,n())},l=function(e){(0,c.vA)(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,c]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);s?S("getToken() completed but was canceled"):(S("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=c&&c.token,o=new st(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{N(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(Mt)}),r))}catch(A){this.log_("Failed to get token: "+A),s||(this.repoInfo_.nodeAdmin&&N(A),a())}}}interrupt(e){S("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){S("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,c.Im)(this.interruptReasons_)&&(this.reconnectDelay_=Ot,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>$(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new ht(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){S("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ft&&(this.reconnectDelay_=xt,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){S("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ft&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";(0,c.$g)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+d.replace(/\./g,"-")]=1,(0,c.jZ)()?e["framework.cordova"]=1:(0,c.lV)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ct.getInstance().currentlyOnline();return(0,c.Im)(this.interruptReasons_)&&e}}Ut.nextPersistentConnectionId_=0,Ut.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $t{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new $t(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new $t(D,e),i=new $t(D,t);return 0!==this.compare(n,i)}minPost(){return $t.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vt;class Bt extends jt{static get __EMPTY_NODE(){return Vt}static set __EMPTY_NODE(e){Vt=e}compare(e,t){return M(e.name,t.name)}isDefinedOn(e){throw(0,c.Hk)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return $t.MIN}maxPost(){return new $t(L,Vt)}makePost(e,t){return(0,c.vA)("string"===typeof e,"KeyIndex indexValue must always be a string."),new $t(e,Vt)}toString(){return".key"}}const qt=new Bt;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;while(!e.isEmpty())if(s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class zt{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:zt.RED,this.left=null!=i?i:Kt.EMPTY_NODE,this.right=null!=r?r:Kt.EMPTY_NODE}copy(e,t,n,i,r){return new zt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Kt.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Kt.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,zt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,zt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}zt.RED=!0,zt.BLACK=!1;class Wt{copy(e,t,n,i,r){return this}insert(e,t,n){return new zt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Kt{constructor(e,t=Kt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Kt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,zt.BLACK,null,null))}remove(e){return new Kt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,zt.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ht(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ht(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ht(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ht(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gt(e,t){return M(e.name,t.name)}function Qt(e,t){return M(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xt;function Yt(e){Xt=e}Kt.EMPTY_NODE=new Wt;const Jt=function(e){return"number"===typeof e?"number:"+B(e):"string:"+e},Zt=function(e){if(e.isLeafNode()){const t=e.val();(0,c.vA)("string"===typeof t||"number"===typeof t||"object"===typeof t&&(0,c.gR)(t,".sv"),"Priority must be a string or number.")}else(0,c.vA)(e===Xt||e.isEmpty(),"priority of unexpected type.");(0,c.vA)(e===Xt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let en,tn,nn;class rn{constructor(e,t=rn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,c.vA)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Zt(this.priorityNode_)}static set __childrenNodeConstructor(e){en=e}static get __childrenNodeConstructor(){return en}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new rn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:rn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return bt(e)?this:".priority"===ft(e)?this.priorityNode_:rn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:rn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ft(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,c.vA)(".priority"!==n||1===pt(e),".priority must be the last token in a path"),this.updateImmediateChild(n,rn.__childrenNodeConstructor.EMPTY_NODE.updateChild(gt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Jt(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?B(this.value_):this.value_,this.lazyHash_=b(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===rn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof rn.__childrenNodeConstructor?-1:((0,c.vA)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=rn.VALUE_TYPE_ORDER.indexOf(t),r=rn.VALUE_TYPE_ORDER.indexOf(n);return(0,c.vA)(i>=0,"Unknown leaf type: "+t),(0,c.vA)(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function sn(e){tn=e}function on(e){nn=e}rn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class an extends jt{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?M(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return $t.MIN}maxPost(){return new $t(L,new rn("[PRIORITY-POST]",nn))}makePost(e,t){const n=tn(e);return new $t(t,new rn("[PRIORITY-POST]",n))}toString(){return".priority"}}const cn=new an,ln=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){const t=e=>parseInt(Math.log(e)/ln,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=n(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const hn=function(e,t,n,i){e.sort(t);const r=function(t,i){const s=i-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new zt(a,o.node,zt.BLACK,null,null);{const c=parseInt(s/2,10)+t,l=r(t,c),u=r(c+1,i);return o=e[c],a=n?n(o):o,new zt(a,o.node,zt.BLACK,l,u)}},s=function(t){let i=null,s=null,o=e.length;const a=function(t,i){const s=o-t,a=o;o-=t;const l=r(s+1,a),u=e[s],h=n?n(u):u;c(new zt(h,u.node,i,null,l))},c=function(e){i?(i.left=e,i=e):(s=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,zt.BLACK):(a(i,zt.BLACK),a(i,zt.RED))}return s},o=new un(e.length),a=s(o);return new Kt(i||t,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dn;const fn={};class pn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return(0,c.vA)(fn&&cn,"ChildrenNode.ts has not been loaded"),dn=dn||new pn({".priority":fn},{".priority":cn}),dn}get(e){const t=(0,c.yw)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Kt?t:null}hasIndex(e){return(0,c.gR)(this.indexSet_,e.toString())}addIndex(e,t){(0,c.vA)(e!==qt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator($t.Wrap);let s,o=r.getNext();while(o)i=i||e.isDefinedOn(o.node),n.push(o),o=r.getNext();s=i?hn(n,e.getCompare()):fn;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const u=Object.assign({},this.indexes_);return u[a]=s,new pn(u,l)}addToIndexes(e,t){const n=(0,c.kH)(this.indexes_,((n,i)=>{const r=(0,c.yw)(this.indexSet_,i);if((0,c.vA)(r,"Missing index implementation for "+i),n===fn){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator($t.Wrap);let s=i.getNext();while(s)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),hn(n,r.getCompare())}return fn}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new $t(e.name,i))),r.insert(e,e.node)}}));return new pn(n,this.indexSet_)}removeFromIndexes(e,t){const n=(0,c.kH)(this.indexes_,(n=>{if(n===fn)return n;{const i=t.get(e.name);return i?n.remove(new $t(e.name,i)):n}}));return new pn(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gn;class mn{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Zt(this.priorityNode_),this.children_.isEmpty()&&(0,c.vA)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return gn||(gn=new mn(new Kt(Qt),null,pn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||gn}updatePriority(e){return this.children_.isEmpty()?this:new mn(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?gn:t}}getChild(e){const t=ft(e);return null===t?this:this.getImmediateChild(t).getChild(gt(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,c.vA)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new $t(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const s=i.isEmpty()?gn:this.priorityNode_;return new mn(i,s,r)}}updateChild(e,t){const n=ft(e);if(null===n)return t;{(0,c.vA)(".priority"!==ft(e)||1===pt(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(gt(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(cn,((s,o)=>{t[s]=o.val(e),n++,r&&mn.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1})),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Jt(this.getPriority().val())+":"),this.forEachChild(cn,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":b(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new $t(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new $t(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new $t(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,$t.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)<0)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,$t.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)>0)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===vn?-1:0}withIndex(e){if(e===qt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new mn(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===qt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(cn),n=t.getIterator(cn);let i=e.getNext(),r=n.getNext();while(i&&r){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===qt?null:this.indexMap_.get(e.toString())}}mn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class _n extends mn{constructor(){super(new Kt(Qt),mn.EMPTY_NODE,pn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return mn.EMPTY_NODE}isEmpty(){return!1}}const vn=new _n;Object.defineProperties($t,{MIN:{value:new $t(D,mn.EMPTY_NODE)},MAX:{value:new $t(L,vn)}}),Bt.__EMPTY_NODE=mn.EMPTY_NODE,rn.__childrenNodeConstructor=mn,Yt(vn),on(vn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yn=!0;function wn(e,t=null){if(null===e)return mn.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),(0,c.vA)(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new rn(n,wn(t))}if(e instanceof Array||!yn){let n=mn.EMPTY_NODE;return V(e,((t,i)=>{if((0,c.gR)(e,t)&&"."!==t.substring(0,1)){const e=wn(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(wn(t))}{const n=[];let i=!1;const r=e;if(V(r,((e,t)=>{if("."!==e.substring(0,1)){const r=wn(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new $t(e,r)))}})),0===n.length)return mn.EMPTY_NODE;const s=hn(n,Gt,(e=>e.name),Qt);if(i){const e=hn(n,cn.getCompare());return new mn(s,wn(t),new pn({".priority":e},{".priority":cn}))}return new mn(s,wn(t),pn.Default)}}sn(wn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bn extends jt{constructor(e){super(),this.indexPath_=e,(0,c.vA)(!bt(e)&&".priority"!==ft(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?M(e.name,t.name):r}makePost(e,t){const n=wn(e),i=mn.EMPTY_NODE.updateChild(this.indexPath_,n);return new $t(t,i)}maxPost(){const e=mn.EMPTY_NODE.updateChild(this.indexPath_,vn);return new $t(L,e)}toString(){return vt(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends jt{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?M(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return $t.MIN}maxPost(){return $t.MAX}makePost(e,t){const n=wn(e);return new $t(t,n)}toString(){return".value"}}const En=new Tn;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(e){return{type:"value",snapshotNode:e}}function In(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Sn(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function kn(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function An(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=cn}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,c.vA)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,c.vA)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:D}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,c.vA)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,c.vA)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:L}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,c.vA)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===cn}copy(){const e=new Rn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Nn(e){const t={};if(e.isDefault())return t;let n;if(e.index_===cn?n="$priority":e.index_===En?n="$value":e.index_===qt?n="$key":((0,c.vA)(e.index_ instanceof bn,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=(0,c.As)(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=(0,c.As)(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+(0,c.As)(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=(0,c.As)(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+(0,c.As)(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function On(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_),t["sin"]=!e.startAfterSet_),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_),t["ein"]=!e.endBeforeSet_),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==cn&&(t["i"]=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends ot{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=k("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,c.vA)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const s=Pn.getListenId_(e,n),o={};this.listens_[s]=o;const a=Nn(e._queryParams);this.restRequest_(r+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,n),(0,c.yw)(this.listens_,s)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=Pn.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Nn(e._queryParams),n=e._path.toString(),i=new c.cY;return this.restRequest_(n+".json",t,((e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(t["auth"]=i.accessToken),r&&r.token&&(t["ac"]=r.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,c.Am)(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let t=null;if(o.status>=200&&o.status<300){try{t=(0,c.$L)(o.responseText)}catch(e){N("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,t)}else 401!==o.status&&404!==o.status&&N("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(){this.rootNode_=mn.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(){return{value:null,children:new Map}}function Ln(e,t,n){if(bt(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=ft(t);e.children.has(i)||e.children.set(i,Dn());const r=e.children.get(i);t=gt(t),Ln(r,t,n)}}function Mn(e,t,n){null!==e.value?n(t,e.value):Fn(e,((e,i)=>{const r=new ht(t.toString()+"/"+e);Mn(i,r,n)}))}function Fn(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&V(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=1e4,jn=3e4,Vn=3e5;class Bn{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Un(e);const n=$n+(jn-$n)*Math.random();Y(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;V(e,((e,i)=>{i>0&&(0,c.gR)(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),Y(this.reportStats_.bind(this),Math.floor(2*Math.random()*Vn))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qn;function Hn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function zn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Wn(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(qn||(qn={}));class Kn{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=qn.ACK_USER_WRITE,this.source=Hn()}operationForChild(e){if(bt(this.path)){if(null!=this.affectedTree.value)return(0,c.vA)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ht(e));return new Kn(dt(),t,this.revert)}}return(0,c.vA)(ft(this.path)===e,"operationForChild called for unrelated child."),new Kn(gt(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gn{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=qn.OVERWRITE}operationForChild(e){return bt(this.path)?new Gn(this.source,dt(),this.snap.getImmediateChild(e)):new Gn(this.source,gt(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=qn.MERGE}operationForChild(e){if(bt(this.path)){const t=this.children.subtree(new ht(e));return t.isEmpty()?null:t.value?new Gn(this.source,dt(),t.value):new Qn(this.source,dt(),t)}return(0,c.vA)(ft(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Qn(this.source,gt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(bt(e))return this.isFullyInitialized()&&!this.filtered_;const t=ft(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(e,t,n,i){const r=[],s=[];return t.forEach((t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push(An(t.childName,t.snapshotNode))})),Jn(e,r,"child_removed",t,i,n),Jn(e,r,"child_added",t,i,n),Jn(e,r,"child_moved",s,i,n),Jn(e,r,"child_changed",t,i,n),Jn(e,r,"value",t,i,n),r}function Jn(e,t,n,i,r,s){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>ei(e,t,n))),o.forEach((n=>{const i=Zn(e,n,s);r.forEach((r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))}))}))}function Zn(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function ei(e,t,n){if(null==t.childName||null==n.childName)throw(0,c.Hk)("Should only compare child_ events.");const i=new $t(t.childName,t.snapshotNode),r=new $t(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(e,t){return{eventCache:e,serverCache:t}}function ni(e,t,n,i){return ti(new Xn(t,n,i),e.serverCache)}function ii(e,t,n,i){return ti(e.eventCache,new Xn(t,n,i))}function ri(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function si(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oi;const ai=()=>(oi||(oi=new Kt(F)),oi);class ci{constructor(e,t=ai()){this.value=e,this.children=t}static fromObject(e){let t=new ci(null);return V(e,((e,n)=>{t=t.set(new ht(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:dt(),value:this.value};if(bt(e))return null;{const n=ft(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(gt(e),t);if(null!=r){const e=wt(new ht(n),r.path);return{path:e,value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(bt(e))return this;{const t=ft(e),n=this.children.get(t);return null!==n?n.subtree(gt(e)):new ci(null)}}set(e,t){if(bt(e))return new ci(t,this.children);{const n=ft(e),i=this.children.get(n)||new ci(null),r=i.set(gt(e),t),s=this.children.insert(n,r);return new ci(this.value,s)}}remove(e){if(bt(e))return this.children.isEmpty()?new ci(null):new ci(null,this.children);{const t=ft(e),n=this.children.get(t);if(n){const i=n.remove(gt(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new ci(null):new ci(this.value,r)}return this}}get(e){if(bt(e))return this.value;{const t=ft(e),n=this.children.get(t);return n?n.get(gt(e)):null}}setTree(e,t){if(bt(e))return t;{const n=ft(e),i=this.children.get(n)||new ci(null),r=i.setTree(gt(e),t);let s;return s=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new ci(this.value,s)}}fold(e){return this.fold_(dt(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(wt(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,dt(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(bt(e))return null;{const i=ft(e),r=this.children.get(i);return r?r.findOnPath_(gt(e),wt(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,dt(),t)}foreachOnPath_(e,t,n){if(bt(e))return this;{this.value&&n(t,this.value);const i=ft(e),r=this.children.get(i);return r?r.foreachOnPath_(gt(e),wt(t,i),n):new ci(null)}}foreach(e){this.foreach_(dt(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(wt(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e){this.writeTree_=e}static empty(){return new li(new ci(null))}}function ui(e,t,n){if(bt(t))return new li(new ci(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let s=i.value;const o=Tt(r,t);return s=s.updateChild(o,n),new li(e.writeTree_.set(r,s))}{const i=new ci(n),r=e.writeTree_.setTree(t,i);return new li(r)}}}function hi(e,t,n){let i=e;return V(n,((e,n)=>{i=ui(i,wt(t,e),n)})),i}function di(e,t){if(bt(t))return li.empty();{const n=e.writeTree_.setTree(t,new ci(null));return new li(n)}}function fi(e,t){return null!=pi(e,t)}function pi(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Tt(n.path,t)):null}function gi(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(cn,((e,n)=>{t.push(new $t(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new $t(e,n.value))})),t}function mi(e,t){if(bt(t))return e;{const n=pi(e,t);return new li(null!=n?new ci(n):e.writeTree_.subtree(t))}}function _i(e){return e.writeTree_.isEmpty()}function vi(e,t){return yi(dt(),e.writeTree_,t)}function yi(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,r)=>{".priority"===t?((0,c.vA)(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=yi(wt(e,t),r,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(wt(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(e,t){return Bi(t,e)}function bi(e,t,n,i,r){(0,c.vA)(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=ui(e.visibleWrites,t,n)),e.lastWriteId=i}function Ti(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function Ei(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));(0,c.vA)(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,s=!1,o=e.allWrites.length-1;while(r&&o>=0){const t=e.allWrites[o];t.visible&&(o>=n&&Ci(t,i.path)?r=!1:Ct(i.path,t.path)&&(s=!0)),o--}if(r){if(s)return Ii(e),!0;if(i.snap)e.visibleWrites=di(e.visibleWrites,i.path);else{const t=i.children;V(t,(t=>{e.visibleWrites=di(e.visibleWrites,wt(i.path,t))}))}return!0}return!1}function Ci(e,t){if(e.snap)return Ct(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Ct(wt(e.path,n),t))return!0;return!1}function Ii(e){e.visibleWrites=ki(e.allWrites,Si,dt()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Si(e){return e.visible}function ki(e,t,n){let i=li.empty();for(let r=0;r<e.length;++r){const s=e[r];if(t(s)){const e=s.path;let t;if(s.snap)Ct(n,e)?(t=Tt(n,e),i=ui(i,t,s.snap)):Ct(e,n)&&(t=Tt(e,n),i=ui(i,dt(),s.snap.getChild(t)));else{if(!s.children)throw(0,c.Hk)("WriteRecord should have .snap or .children");if(Ct(n,e))t=Tt(n,e),i=hi(i,t,s.children);else if(Ct(e,n))if(t=Tt(e,n),bt(t))i=hi(i,dt(),s.children);else{const e=(0,c.yw)(s.children,ft(t));if(e){const n=e.getChild(gt(t));i=ui(i,dt(),n)}}}}}return i}function Ai(e,t,n,i,r){if(i||r){const s=mi(e.visibleWrites,t);if(!r&&_i(s))return n;if(r||null!=n||fi(s,dt())){const s=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(Ct(e.path,t)||Ct(t,e.path))},o=ki(e.allWrites,s,t),a=n||mn.EMPTY_NODE;return vi(o,a)}return null}{const i=pi(e.visibleWrites,t);if(null!=i)return i;{const i=mi(e.visibleWrites,t);if(_i(i))return n;if(null!=n||fi(i,dt())){const e=n||mn.EMPTY_NODE;return vi(i,e)}return null}}}function Ri(e,t,n){let i=mn.EMPTY_NODE;const r=pi(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(cn,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const r=mi(e.visibleWrites,t);return n.forEachChild(cn,((e,t)=>{const n=vi(mi(r,new ht(e)),t);i=i.updateImmediateChild(e,n)})),gi(r).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}{const n=mi(e.visibleWrites,t);return gi(n).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}}function Ni(e,t,n,i,r){(0,c.vA)(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=wt(t,n);if(fi(e.visibleWrites,s))return null;{const t=mi(e.visibleWrites,s);return _i(t)?r.getChild(n):vi(t,r.getChild(n))}}function Oi(e,t,n,i){const r=wt(t,n),s=pi(e.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n)){const t=mi(e.visibleWrites,r);return vi(t,i.getNode().getImmediateChild(n))}return null}function Pi(e,t){return pi(e.visibleWrites,t)}function xi(e,t,n,i,r,s,o){let a;const c=mi(e.visibleWrites,t),l=pi(c,dt());if(null!=l)a=l;else{if(null==n)return[];a=vi(c,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let c=n.getNext();while(c&&e.length<r)0!==t(c,i)&&e.push(c),c=n.getNext();return e}}function Di(){return{visibleWrites:li.empty(),allWrites:[],lastWriteId:-1}}function Li(e,t,n,i){return Ai(e.writeTree,e.treePath,t,n,i)}function Mi(e,t){return Ri(e.writeTree,e.treePath,t)}function Fi(e,t,n,i){return Ni(e.writeTree,e.treePath,t,n,i)}function Ui(e,t){return Pi(e.writeTree,wt(e.treePath,t))}function $i(e,t,n,i,r,s){return xi(e.writeTree,e.treePath,t,n,i,r,s)}function ji(e,t,n){return Oi(e.writeTree,e.treePath,t,n)}function Vi(e,t){return Bi(wt(e.treePath,t),e.writeTree)}function Bi(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;(0,c.vA)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,c.vA)(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,kn(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,Sn(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,In(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw(0,c.Hk)("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,kn(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const zi=new Hi;class Wi{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Xn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ji(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:si(this.viewCache_),r=$i(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(e,t){(0,c.vA)(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),(0,c.vA)(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function Gi(e,t,n,i,r){const s=new qi;let o,a;if(n.type===qn.OVERWRITE){const l=n;l.source.fromUser?o=Ji(e,t,l.path,l.snap,i,r,s):((0,c.vA)(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!bt(l.path),o=Yi(e,t,l.path,l.snap,i,r,a,s))}else if(n.type===qn.MERGE){const l=n;l.source.fromUser?o=er(e,t,l.path,l.children,i,r,s):((0,c.vA)(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),o=nr(e,t,l.path,l.children,i,r,a,s))}else if(n.type===qn.ACK_USER_WRITE){const a=n;o=a.revert?sr(e,t,a.path,i,r,s):ir(e,t,a.path,a.affectedTree,i,r,s)}else{if(n.type!==qn.LISTEN_COMPLETE)throw(0,c.Hk)("Unknown operation type: "+n.type);o=rr(e,t,n.path,i,s)}const l=s.getChanges();return Qi(t,o,l),{viewCache:o,changes:l}}function Qi(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=ri(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(Cn(ri(t)))}}function Xi(e,t,n,i,r,s){const o=t.eventCache;if(null!=Ui(i,n))return t;{let a,l;if(bt(n))if((0,c.vA)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=si(t),r=n instanceof mn?n:mn.EMPTY_NODE,o=Mi(i,r);a=e.filter.updateFullNode(t.eventCache.getNode(),o,s)}else{const n=Li(i,si(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const u=ft(n);if(".priority"===u){(0,c.vA)(1===pt(n),"Can't have a priority with additional path components");const r=o.getNode();l=t.serverCache.getNode();const s=Fi(i,n,r,l);a=null!=s?e.filter.updatePriority(r,s):o.getNode()}else{const c=gt(n);let h;if(o.isCompleteForChild(u)){l=t.serverCache.getNode();const e=Fi(i,n,o.getNode(),l);h=null!=e?o.getNode().getImmediateChild(u).updateChild(c,e):o.getNode().getImmediateChild(u)}else h=ji(i,u,t.serverCache);a=null!=h?e.filter.updateChild(o.getNode(),u,h,c,r,s):o.getNode()}}return ni(t,a,o.isFullyInitialized()||bt(n),e.filter.filtersNodes())}}function Yi(e,t,n,i,r,s,o,a){const c=t.serverCache;let l;const u=o?e.filter:e.filter.getIndexedFilter();if(bt(n))l=u.updateFullNode(c.getNode(),i,null);else if(u.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,i);l=u.updateFullNode(c.getNode(),e,null)}else{const e=ft(n);if(!c.isCompleteForPath(n)&&pt(n)>1)return t;const r=gt(n),s=c.getNode().getImmediateChild(e),o=s.updateChild(r,i);l=".priority"===e?u.updatePriority(c.getNode(),o):u.updateChild(c.getNode(),e,o,r,zi,null)}const h=ii(t,l,c.isFullyInitialized()||bt(n),u.filtersNodes()),d=new Wi(r,h,s);return Xi(e,h,n,r,d,a)}function Ji(e,t,n,i,r,s,o){const a=t.eventCache;let c,l;const u=new Wi(r,t,s);if(bt(n))l=e.filter.updateFullNode(t.eventCache.getNode(),i,o),c=ni(t,l,!0,e.filter.filtersNodes());else{const r=ft(n);if(".priority"===r)l=e.filter.updatePriority(t.eventCache.getNode(),i),c=ni(t,l,a.isFullyInitialized(),a.isFiltered());else{const s=gt(n),l=a.getNode().getImmediateChild(r);let h;if(bt(s))h=i;else{const e=u.getCompleteChild(r);h=null!=e?".priority"===mt(s)&&e.getChild(yt(s)).isEmpty()?e:e.updateChild(s,i):mn.EMPTY_NODE}if(l.equals(h))c=t;else{const n=e.filter.updateChild(a.getNode(),r,h,s,u,o);c=ni(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function Zi(e,t){return e.eventCache.isCompleteForChild(t)}function er(e,t,n,i,r,s,o){let a=t;return i.foreach(((i,c)=>{const l=wt(n,i);Zi(t,ft(l))&&(a=Ji(e,a,l,c,r,s,o))})),i.foreach(((i,c)=>{const l=wt(n,i);Zi(t,ft(l))||(a=Ji(e,a,l,c,r,s,o))})),a}function tr(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function nr(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,l=t;c=bt(n)?i:new ci(null).setTree(n,i);const u=t.serverCache.getNode();return c.children.inorderTraversal(((n,i)=>{if(u.hasChild(n)){const c=t.serverCache.getNode().getImmediateChild(n),u=tr(e,c,i);l=Yi(e,l,new ht(n),u,r,s,o,a)}})),c.children.inorderTraversal(((n,i)=>{const c=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!u.hasChild(n)&&!c){const c=t.serverCache.getNode().getImmediateChild(n),u=tr(e,c,i);l=Yi(e,l,new ht(n),u,r,s,o,a)}})),l}function ir(e,t,n,i,r,s,o){if(null!=Ui(r,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=i.value){if(bt(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Yi(e,t,n,c.getNode().getChild(n),r,s,a,o);if(bt(n)){let i=new ci(null);return c.getNode().forEachChild(qt,((e,t)=>{i=i.set(new ht(e),t)})),nr(e,t,n,i,r,s,a,o)}return t}{let l=new ci(null);return i.foreach(((e,t)=>{const i=wt(n,e);c.isCompleteForPath(i)&&(l=l.set(e,c.getNode().getChild(i)))})),nr(e,t,n,l,r,s,a,o)}}function rr(e,t,n,i,r){const s=t.serverCache,o=ii(t,s.getNode(),s.isFullyInitialized()||bt(n),s.isFiltered());return Xi(e,o,n,i,zi,r)}function sr(e,t,n,i,r,s){let o;if(null!=Ui(i,n))return t;{const a=new Wi(i,t,r),l=t.eventCache.getNode();let u;if(bt(n)||".priority"===ft(n)){let n;if(t.serverCache.isFullyInitialized())n=Li(i,si(t));else{const e=t.serverCache.getNode();(0,c.vA)(e instanceof mn,"serverChildren would be complete if leaf node"),n=Mi(i,e)}u=e.filter.updateFullNode(l,n,s)}else{const r=ft(n);let c=ji(i,r,t.serverCache);null==c&&t.serverCache.isCompleteForChild(r)&&(c=l.getImmediateChild(r)),u=null!=c?e.filter.updateChild(l,r,c,gt(n),a,s):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(l,r,mn.EMPTY_NODE,gt(n),a,s):l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=Li(i,si(t)),o.isLeafNode()&&(u=e.filter.updateFullNode(u,o,s)))}return o=t.serverCache.isFullyInitialized()||null!=Ui(i,dt()),ni(t,u,o,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(e,t){const n=si(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!bt(t)&&!n.getImmediateChild(ft(t)).isEmpty())?n.getChild(t):null}function ar(e,t,n,i){t.type===qn.MERGE&&null!==t.source.queryId&&((0,c.vA)(si(e.viewCache_),"We should always have a full cache before handling merges"),(0,c.vA)(ri(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,s=Gi(e.processor_,r,t,n,i);return Ki(e.processor_,s.viewCache),(0,c.vA)(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,cr(e,s.changes,s.viewCache.eventCache.getNode(),null)}function cr(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return Yn(e.eventGenerator_,t,n,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lr,ur;function hr(e){(0,c.vA)(!lr,"__referenceConstructor has already been defined"),lr=e}function dr(e,t,n,i){const r=t.source.queryId;if(null!==r){const s=e.views.get(r);return(0,c.vA)(null!=s,"SyncTree gave us an op for an invalid query."),ar(s,t,n,i)}{let r=[];for(const s of e.views.values())r=r.concat(ar(s,t,n,i));return r}}function fr(e,t){let n=null;for(const i of e.views.values())n=n||or(i,t);return n}function pr(e){(0,c.vA)(!ur,"__referenceConstructor has already been defined"),ur=e}class gr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ci(null),this.pendingWriteTree_=Di(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function mr(e,t,n,i,r){return bi(e.pendingWriteTree_,t,n,i,r),r?Er(e,new Gn(Hn(),t,n)):[]}function _r(e,t,n=!1){const i=Ti(e.pendingWriteTree_,t),r=Ei(e.pendingWriteTree_,t);if(r){let t=new ci(null);return null!=i.snap?t=t.set(dt(),!0):V(i.children,(e=>{t=t.set(new ht(e),!0)})),Er(e,new Kn(i.path,t,n))}return[]}function vr(e,t,n){return Er(e,new Gn(zn(),t,n))}function yr(e,t,n){const i=ci.fromObject(n);return Er(e,new Qn(zn(),t,i))}function wr(e,t,n,i){const r=Sr(e,i);if(null!=r){const i=kr(r),s=i.path,o=i.queryId,a=Tt(s,t),c=new Gn(Wn(o),a,n);return Ar(e,s,c)}return[]}function br(e,t,n,i){const r=Sr(e,i);if(r){const i=kr(r),s=i.path,o=i.queryId,a=Tt(s,t),c=ci.fromObject(n),l=new Qn(Wn(o),a,c);return Ar(e,s,l)}return[]}function Tr(e,t,n){const i=!0,r=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=Tt(e,t),r=fr(n,i);if(r)return r}));return Ai(r,t,s,n,i)}function Er(e,t){return Cr(t,e.syncPointTree_,null,wi(e.pendingWriteTree_,dt()))}function Cr(e,t,n,i){if(bt(e.path))return Ir(e,t,n,i);{const r=t.get(dt());null==n&&null!=r&&(n=fr(r,dt()));let s=[];const o=ft(e.path),a=e.operationForChild(o),c=t.children.get(o);if(c&&a){const e=n?n.getImmediateChild(o):null,t=Vi(i,o);s=s.concat(Cr(a,c,e,t))}return r&&(s=s.concat(dr(r,e,i,n))),s}}function Ir(e,t,n,i){const r=t.get(dt());null==n&&null!=r&&(n=fr(r,dt()));let s=[];return t.children.inorderTraversal(((t,r)=>{const o=n?n.getImmediateChild(t):null,a=Vi(i,t),c=e.operationForChild(t);c&&(s=s.concat(Ir(c,r,o,a)))})),r&&(s=s.concat(dr(r,e,i,n))),s}function Sr(e,t){return e.tagToQueryMap.get(t)}function kr(e){const t=e.indexOf("$");return(0,c.vA)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ht(e.substr(0,t))}}function Ar(e,t,n){const i=e.syncPointTree_.get(t);(0,c.vA)(i,"Missing sync point for query tag that we're tracking");const r=wi(e.pendingWriteTree_,t);return dr(i,n,r,null)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Rr(t)}node(){return this.node_}}class Nr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=wt(this.path_,e);return new Nr(this.syncTree_,t)}node(){return Tr(this.syncTree_,this.path_)}}const Or=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},Pr=function(e,t,n){return e&&"object"===typeof e?((0,c.vA)(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?xr(e[".sv"],t,n):"object"===typeof e[".sv"]?Dr(e[".sv"],t):void(0,c.vA)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},xr=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:(0,c.vA)(!1,"Unexpected server value: "+e)}},Dr=function(e,t,n){e.hasOwnProperty("increment")||(0,c.vA)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e["increment"];"number"!==typeof i&&(0,c.vA)(!1,"Unexpected increment value: "+i);const r=t.node();if((0,c.vA)(null!==r&&"undefined"!==typeof r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const s=r,o=s.getValue();return"number"!==typeof o?i:o+i},Lr=function(e,t,n,i){return Fr(t,new Nr(n,e),i)},Mr=function(e,t,n){return Fr(e,new Rr(t),n)};function Fr(e,t,n){const i=e.getPriority().val(),r=Pr(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const i=e,s=Pr(i.getValue(),t,n);return s!==i.getValue()||r!==i.getPriority().val()?new rn(s,wn(r)):e}{const i=e;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new rn(r))),i.forEachChild(cn,((e,i)=>{const r=Fr(i,t.getImmediateChild(e),n);r!==i&&(s=s.updateImmediateChild(e,r))})),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function $r(e,t){let n=t instanceof ht?t:new ht(t),i=e,r=ft(n);while(null!==r){const e=(0,c.yw)(i.node.children,r)||{children:{},childCount:0};i=new Ur(r,i,e),n=gt(n),r=ft(n)}return i}function jr(e){return e.node.value}function Vr(e,t){e.node.value=t,Gr(e)}function Br(e){return e.node.childCount>0}function qr(e){return void 0===jr(e)&&!Br(e)}function Hr(e,t){V(e.node.children,((n,i)=>{t(new Ur(n,e,i))}))}function zr(e,t,n,i){n&&!i&&t(e),Hr(e,(e=>{zr(e,t,!0,i)})),n&&i&&t(e)}function Wr(e,t,n){let i=n?e:e.parent;while(null!==i){if(t(i))return!0;i=i.parent}return!1}function Kr(e){return new ht(null===e.parent?e.name:Kr(e.parent)+"/"+e.name)}function Gr(e){null!==e.parent&&Qr(e.parent,e.name,e)}function Qr(e,t,n){const i=qr(n),r=(0,c.gR)(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,Gr(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,Gr(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=/[\[\].#$\/\u0000-\u001F\u007F]/,Yr=/[\[\].#$\u0000-\u001F\u007F]/,Jr=10485760,Zr=function(e){return"string"===typeof e&&0!==e.length&&!Xr.test(e)},es=function(e){return"string"===typeof e&&0!==e.length&&!Yr.test(e)},ts=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),es(e)},ns=function(e,t,n){const i=n instanceof ht?new It(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Rt(i));if("function"===typeof t)throw new Error(e+"contains a function "+Rt(i)+" with contents = "+t.toString());if(P(t))throw new Error(e+"contains "+t.toString()+" "+Rt(i));if("string"===typeof t&&t.length>Jr/3&&(0,c.OE)(t)>Jr)throw new Error(e+"contains a string greater than "+Jr+" utf8 bytes "+Rt(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,r=!1;if(V(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!Zr(t)))throw new Error(e+" contains an invalid key ("+t+") "+Rt(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');St(i,t),ns(e,s,i),kt(i)})),n&&r)throw new Error(e+' contains ".value" child '+Rt(i)+" in addition to actual children.")}},is=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!Zr(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!ts(n))throw new Error((0,c.dI)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rs{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ss(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();null===n||Et(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function os(e,t,n){ss(e,n),as(e,(e=>Ct(e,t)||Ct(t,e)))}function as(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){const s=r.path;t(s)?(cs(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function cs(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();E&&S("event: "+n.toString()),Q(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls="repo_interrupt",us=25;class hs{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new rs,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Dn(),this.transactionQueueTree_=new Ur,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ds(e,t,n){if(e.stats_=ve(e.repoInfo_),e.forceRestClient_||X())e.server_=new Pn(e.repoInfo_,((t,n,i,r)=>{gs(e,t,n,i,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>ms(e,!0)),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,c.As)(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new Ut(e.repoInfo_,t,((t,n,i,r)=>{gs(e,t,n,i,r)}),(t=>{ms(e,t)}),(t=>{_s(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=ye(e.repoInfo_,(()=>new Bn(e.stats_,e.server_))),e.infoData_=new xn,e.infoSyncTree_=new gr({startListening:(t,n,i,r)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=vr(e.infoSyncTree_,t._path,o),setTimeout((()=>{r("ok")}),0)),s},stopListening:()=>{}}),vs(e,"connected",!1),e.serverSyncTree_=new gr({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,((n,i)=>{const s=r(n,i);os(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function fs(e){const t=e.infoData_.getNode(new ht(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function ps(e){return Or({timestamp:fs(e)})}function gs(e,t,n,i,r){e.dataUpdateCount++;const s=new ht(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(r)if(i){const t=(0,c.kH)(n,(e=>wn(e)));o=br(e.serverSyncTree_,s,t,r)}else{const t=wn(n);o=wr(e.serverSyncTree_,s,t,r)}else if(i){const t=(0,c.kH)(n,(e=>wn(e)));o=yr(e.serverSyncTree_,s,t)}else{const t=wn(n);o=vr(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=Ss(e,s)),os(e.eventQueue_,a,o)}function ms(e,t){vs(e,"connected",t),!1===t&&ws(e)}function _s(e,t){V(t,((t,n)=>{vs(e,t,n)}))}function vs(e,t,n){const i=new ht("/.info/"+t),r=wn(n);e.infoData_.updateSnapshot(i,r);const s=vr(e.infoSyncTree_,i,r);os(e.eventQueue_,i,s)}function ys(e){return e.nextWriteId_++}function ws(e){Ts(e,"onDisconnectEvents");const t=ps(e),n=Dn();Mn(e.onDisconnect_,dt(),((i,r)=>{const s=Lr(i,r,e.serverSyncTree_,t);Ln(n,i,s)}));let i=[];Mn(n,dt(),((t,n)=>{i=i.concat(vr(e.serverSyncTree_,t,n));const r=Ps(e,t);Ss(e,r)})),e.onDisconnect_=Dn(),os(e.eventQueue_,dt(),i)}function bs(e){e.persistentConnection_&&e.persistentConnection_.interrupt(ls)}function Ts(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),S(n,...t)}function Es(e,t,n){return Tr(e.serverSyncTree_,t,n)||mn.EMPTY_NODE}function Cs(e,t=e.transactionQueueTree_){if(t||Os(e,t),jr(t)){const n=Rs(e,t);(0,c.vA)(n.length>0,"Sending zero length transaction queue");const i=n.every((e=>0===e.status));i&&Is(e,Kr(t),n)}else Br(t)&&Hr(t,(t=>{Cs(e,t)}))}function Is(e,t,n){const i=n.map((e=>e.currentWriteId)),r=Es(e,t,i);let s=r;const o=r.hash();for(let u=0;u<n.length;u++){const e=n[u];(0,c.vA)(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const i=Tt(t,e.path);s=s.updateChild(i,e.currentOutputSnapshotRaw)}const a=s.val(!0),l=t;e.server_.put(l.toString(),a,(i=>{Ts(e,"transaction put response",{path:l.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(_r(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Os(e,$r(e.transactionQueueTree_,t)),Cs(e,e.transactionQueueTree_),os(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)Q(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{N("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}Ss(e,t)}}),o)}function Ss(e,t){const n=As(e,t),i=Kr(n),r=Rs(e,n);return ks(e,r,i),i}function ks(e,t,n){if(0===t.length)return;const i=[];let r=[];const s=t.filter((e=>0===e.status)),o=s.map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const s=t[a],l=Tt(n,s.path);let u,h=!1;if((0,c.vA)(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===s.status)h=!0,u=s.abortReason,r=r.concat(_r(e.serverSyncTree_,s.currentWriteId,!0));else if(0===s.status)if(s.retryCount>=us)h=!0,u="maxretry",r=r.concat(_r(e.serverSyncTree_,s.currentWriteId,!0));else{const n=Es(e,s.path,o);s.currentInputSnapshot=n;const i=t[a].update(n.val());if(void 0!==i){ns("transaction failed: Data returned ",i,s.path);let t=wn(i);const a="object"===typeof i&&null!=i&&(0,c.gR)(i,".priority");a||(t=t.updatePriority(n.getPriority()));const l=s.currentWriteId,u=ps(e),h=Mr(t,n,u);s.currentOutputSnapshotRaw=t,s.currentOutputSnapshotResolved=h,s.currentWriteId=ys(e),o.splice(o.indexOf(l),1),r=r.concat(mr(e.serverSyncTree_,s.path,h,s.currentWriteId,s.applyLocally)),r=r.concat(_r(e.serverSyncTree_,l,!0))}else h=!0,u="nodata",r=r.concat(_r(e.serverSyncTree_,s.currentWriteId,!0))}os(e.eventQueue_,n,r),r=[],h&&(t[a].status=2,function(e){setTimeout(e,Math.floor(0))}(t[a].unwatcher),t[a].onComplete&&("nodata"===u?i.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):i.push((()=>t[a].onComplete(new Error(u),!1,null)))))}Os(e,e.transactionQueueTree_);for(let a=0;a<i.length;a++)Q(i[a]);Cs(e,e.transactionQueueTree_)}function As(e,t){let n,i=e.transactionQueueTree_;n=ft(t);while(null!==n&&void 0===jr(i))i=$r(i,n),t=gt(t),n=ft(t);return i}function Rs(e,t){const n=[];return Ns(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Ns(e,t,n){const i=jr(t);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);Hr(t,(t=>{Ns(e,t,n)}))}function Os(e,t){const n=jr(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Vr(t,n.length>0?n:void 0)}Hr(t,(t=>{Os(e,t)}))}function Ps(e,t){const n=Kr(As(e,t)),i=$r(e.transactionQueueTree_,t);return Wr(i,(t=>{xs(e,t)})),xs(e,i),zr(i,(t=>{xs(e,t)})),n}function xs(e,t){const n=jr(t);if(n){const i=[];let r=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?((0,c.vA)(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):((0,c.vA)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(_r(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?Vr(t,void 0):n.length=s+1,os(e.eventQueue_,Kr(t),r);for(let e=0;e<i.length;e++)Q(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(e){let t="";const n=e.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let e=n[r];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(i){}t+="/"+e}return t}function Ls(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):N(`Invalid query segment '${n}' in query '${e}'`)}return t}const Ms=function(e,t){const n=Fs(e),i=n.namespace;"firebase.com"===n.domain&&R(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||R("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||O();const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new de(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new ht(n.pathString)}},Fs=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",c=443;if("string"===typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(r=Ds(e.substring(u,h)));const d=Ls(e.substring(Math.min(e.length,h)));l=t.indexOf(":"),l>=0?(o="https"===a||"wss"===a,c=parseInt(t.substring(l+1),10)):l=t.length;const f=t.slice(0,l);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in d&&(s=d["ns"])}return{host:t,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}},Us="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";(function(){let e=0;const t=[]})();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $s{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return bt(this._path)?null:mt(this._path)}get ref(){return new js(this._repo,this._path)}get _queryIdentifier(){const e=On(this._queryParams),t=$(e);return"{}"===t?"default":t}get _queryObject(){return On(this._queryParams)}isEqual(e){if(e=(0,c.Ku)(e),!(e instanceof $s))return!1;const t=this._repo===e._repo,n=Et(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+_t(this._path)}}class js extends $s{constructor(e,t){super(e,t,new Rn,!1)}get parent(){const e=yt(this._path);return null===e?null:new js(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}hr(js),pr(js);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Vs="FIREBASE_DATABASE_EMULATOR_HOST",Bs={};let qs=!1;function Hs(e,t,n,i,r){let s=i||e.options.databaseURL;void 0===s&&(e.options.projectId||R("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),S("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,c=Ms(s,r),l=c.repoInfo;"undefined"!==typeof process&&(a={NODE_ENV:"production",BASE_URL:"/"}[Vs]),a?(o=!0,s=`http://${a}?ns=${l.namespace}`,c=Ms(s,r),l=c.repoInfo):o=!c.repoInfo.secure;const u=r&&o?new ee(ee.OWNER):new Z(e.name,e.options,t);is("Invalid Firebase Database URL",c),bt(c.path)||R("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Ws(l,e,u,new J(e.name,n));return new Ks(h,e)}function zs(e,t){const n=Bs[t];n&&n[e.key]===e||R(`Database ${t}(${e.repoInfo_}) has already been deleted.`),bs(e),delete n[e.key]}function Ws(e,t,n,i){let r=Bs[t.name];r||(r={},Bs[t.name]=r);let s=r[e.toURLString()];return s&&R("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new hs(e,qs,n,i),r[e.toURLString()]=s,s}class Ks{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ds(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new js(this._repo,dt())),this._rootInternal}_delete(){return null!==this._rootInternal&&(zs(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&R("Cannot call "+e+" on a deleted database.")}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gs(e){f(o.MF),(0,o.om)(new a.uA("database",((e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Hs(n,i,r,t)}),"PUBLIC").setMultipleInstances(!0)),(0,o.KO)(u,h,e),(0,o.KO)(u,h,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ut.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Ut.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};Gs();n(6430);var Qs=n(6015),Xs=n(5904);n(2904),n(223);const Ys=new WeakMap;function Js(e,t){return Ys.has(t)||Ys.set(t,e||{f:{},r:{},s:{},u:{}}),Ys.get(t)}function Zs(e,t,n,i){if(!e)return n;const[r,s]=to(e);if(!r)return n;const o=Js(void 0,i)[r]||{},a=t||s;return a&&a in o?o[a]:n}function eo(e,t,n,r){if(!e)return;const[s,o]=to(e);if(!s)return;const a=Js(void 0,r)[s],c=t||o;return c?(n.then((e=>{a[c]=e})).catch(i.n),c):void 0}function to(e){return(0,i.i)(e)||(0,i.a)(e)?["f",e.path]:(0,i.b)(e)?["r",e.toString()]:(0,i.c)(e)?["s",e.toString()]:[]}const no=new WeakMap;function io(e,t,n){const r=(0,i.u)();no.has(r)||no.set(r,new Map);const s=no.get(r),o=eo(t,n,e,r);return o&&s.set(o,e),o?()=>s.delete(o):i.n}Symbol();function ro(e){return oo({initialUser:e,dependencies:{popupRedirectResolver:Qs.hk,persistence:[Qs.Gt,Qs.F0,Qs.iM]}})}const so=Symbol("VueFireAuth");function oo({dependencies:e,initialUser:t}){return(n,r)=>{const[s,o]=ao(n,r,t,e);(0,i.s)(s,o)}}function ao(e,t,n,s,o=(0,Qs.Nu)(e,s)){const a=(0,i.l)(e,t).run((()=>(0,r.KR)(n)));return i.m.set(e,a),t.provide(so,o),[a,o]}function co(e){return(0,Xs.c7)((0,i.u)(e))}function lo(e){const t=(0,r.BA)(e),n=(0,r.KR)();n.value=Zs(t,void 0,n.value,(0,i.u)());const o=(0,r.IJ)(Promise.resolve(null));let a=i.n;function c(){const t=(0,r.BA)(e);return o.value=t?(0,Xs.qk)(t).then((e=>n.value=e)).catch((()=>null)):Promise.resolve(n.value=null),o.value}return c(),((0,r.i9)(e)||"function"===typeof e)&&(0,s.wB)(e,c),t&&(a=io(o.value,t)),(0,r.o5)()&&(0,r.jr)(a),(0,s.nI)()&&(0,s.SS)((()=>o.value)),{url:n,refresh:c,promise:o}}function uo(e){const t=(0,r.BA)(e),n=(0,r.IJ)();t&&(n.value=Zs(t,"m "+t.toString(),n.value,(0,i.u)()));const o=(0,r.IJ)(Promise.resolve(null));let a=i.n;function c(){const t=(0,r.BA)(e);return o.value=t?(0,Xs.yb)(t).then((e=>n.value=e)).catch((()=>null)):Promise.resolve(n.value=null),o.value}function l(t){const i=(0,r.BA)(e);return i&&(o.value=(0,Xs.D5)(i,t).then((e=>n.value=e))),o.value}return c(),(0,r.i9)(e)&&(0,s.wB)(e,c),t&&(a=io(o.value,t)),(0,r.o5)()&&(0,r.jr)(a),(0,s.nI)()&&(0,s.SS)((()=>o.value)),{metadata:n,update:l,refresh:c,promise:o}}function ho(e){const{url:t,refresh:n}=lo(e),{metadata:o,update:a,refresh:c}=uo(e),l=(0,r.IJ)(),u=(0,r.IJ)(),h=(0,r.IJ)(),d=(0,s.EW)((()=>{const e=(0,r.BA)(u);return e?e.bytesTransferred/e.totalBytes:null}));let f=i.n;function p(i,s){const a=(0,r.BA)(e),c=(0,r.BA)(l);if(c&&c.cancel(),h.value=null,u.value=null,l.value=null,t.value=null,o.value=null,f(),a){const e=(0,Xs.bp)(a,i,s);return l.value=e,u.value=e.snapshot,f=e.on("state_changed",(e=>{u.value=e})),e.then((e=>{o.value=e.metadata,n()})).catch((e=>(h.value=e,Promise.reject(e)))).finally((()=>{f(),l.value=null}))}}function g(){return Promise.all([n(),c()])}return((0,r.i9)(e)||"function"===typeof e)&&(0,s.wB)(e,(e=>{e||(l.value&&(f(),l.value.cancel()),l.value=null,u.value=null),g()})),(0,r.o5)()&&(0,r.jr)(f),{url:t,metadata:o,snapshot:u,uploadTask:l,uploadError:h,uploadProgress:d,upload:p,updateMetadata:a,refresh:g}}function fo(e,{firebaseApp:t,modules:n=[]}){e.provide(i._,t);for(const i of n)i(t,e)}},8782:function(e,t,n){n.d(t,{_:function(){return a},a:function(){return g},b:function(){return m},c:function(){return _},d:function(){return h},i:function(){return p},k:function(){return u},l:function(){return y},m:function(){return w},n:function(){return l},p:function(){return b},r:function(){return C},s:function(){return I},u:function(){return c}});var i=n(6015),r=n(641),s=n(953),o=(n(2904),n(223));const a=Symbol("firebaseApp");function c(e){return(0,r.nI)()&&(0,r.WQ)(a,null)||(0,o.Sx)(e)}const l=()=>{};function u(e,t,n){const i=(""+t).split("."),r=i.pop(),s=i.reduce(((e,t)=>e&&e[t]),e);if(null!=s)return Array.isArray(s)?s.splice(Number(r),1,n):s[r]=n}function h(e){return!!e&&"object"===typeof e}Object.prototype;function d(e){return h(e)&&"document"===e.type}function f(e){return h(e)&&"collection"===e.type}function p(e){return d(e)||f(e)}function g(e){return h(e)&&"query"===e.type}function m(e){return h(e)&&"ref"in e}function _(e){return h(e)&&"string"===typeof e.bucket}Symbol.for("v-scx");const v=new WeakMap;function y(e,t){if(!v.has(e)){const n=(0,s.uY)(!0);v.set(e,n);const{unmount:i}=t;t.unmount=()=>{i.call(t),n.stop(),v.delete(e)}}return v.get(e)}const w=new WeakMap;function b(e){return w.get(c(e))}const T=new WeakMap;function E(e){const t=c(e);if(!T.has(t)){let e;const n=new Promise((t=>{e=t})),i=[n,n=>{T.set(t,n),e(n.value)}];T.set(t,i)}return T.get(t)}function C(e){const t=E(e);return Array.isArray(t)?t[0]:Promise.resolve(t.value)}function I(e,t){(0,i.iZ)(t,(t=>{const n=E();e.value=t,Array.isArray(n)&&n[1](e)}))}Symbol("app-check-token")}}]);
//# sourceMappingURL=chunk-vendors.528ab403.js.map