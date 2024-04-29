"use strict";(self["webpackChunkbookshelf"]=self["webpackChunkbookshelf"]||[]).push([[594],{9812:function(e,t,o){o.r(t),o.d(t,{default:function(){return d}});var n=o(6768);const r=(0,n.Lk)("h1",null,"Books",-1),l=[r];function a(e,t){return(0,n.uX)(),(0,n.CE)("div",null,l)}var s=o(1241);const i={},u=(0,s.A)(i,[["render",a]]);var d=u},6896:function(e,t,o){o.r(t),o.d(t,{default:function(){return Ot}});var n=o(6768),r=o.p+"img/gps.ed381574.png";const l={class:"map_container"},a=(0,n.Lk)("img",{class:"img-fluid",height:"30",width:"30",src:r},null,-1),s=[a];function i(e,t,o,r,a,i){const u=(0,n.g2)("l-tile-layer"),d=(0,n.g2)("l-tooltip"),p=(0,n.g2)("l-marker"),c=(0,n.g2)("l-icon"),m=(0,n.g2)("l-map");return(0,n.uX)(),(0,n.CE)("div",l,[(0,n.bF)(m,{ref:"map",zoom:a.zoom,"onUpdate:zoom":t[0]||(t[0]=e=>a.zoom=e),center:a.userLocation||[50.049683,19.944544]},{default:(0,n.k6)((()=>[(0,n.bF)(u,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png","layer-type":"base",name:"OpenStreetMap"}),a.userLocation?((0,n.uX)(),(0,n.Wv)(p,{key:0,"lat-lng":a.userLocation},{default:(0,n.k6)((()=>[(0,n.bF)(d,{content:"Your location"})])),_:1},8,["lat-lng"])):(0,n.Q3)("",!0),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(a.markers,((e,t)=>((0,n.uX)(),(0,n.Wv)(p,{key:t,"lat-lng":[e.lat,e.long]},{default:(0,n.k6)((()=>[(0,n.bF)(c,{"icon-url":a.icon,"icon-size":[35,35]},null,8,["icon-url"]),(0,n.bF)(d,{content:e.name},null,8,["content"])])),_:2},1032,["lat-lng"])))),128))])),_:1},8,["zoom","center"]),(0,n.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>i.getUserLocation&&i.getUserLocation(...e)),class:"gps-button"},s)])}o(4114);var u=o(144),d=o(5130);const p=(e,t)=>{for(const o of Object.keys(t))e.on(o,t[o])},c=e=>{for(const t of Object.keys(e)){const o=e[t];o&&y(o.cancel)&&o.cancel()}},m=e=>e&&"function"==typeof e.charAt?e.charAt(0).toUpperCase()+e.slice(1):e,y=e=>"function"==typeof e,v=(e,t,o)=>{for(const r in o){const l="set"+m(r);e[l]?(0,n.wB)((()=>o[r]),((t,o)=>{e[l](t,o)})):t[l]&&(0,n.wB)((()=>o[r]),(e=>{t[l](e)}))}},f=(e,t,o={})=>{const n={...o};for(const r in e){const o=t[r],l=e[r];o&&(o&&!0===o.custom||void 0!==l&&(n[r]=l))}return n},b=e=>{const t={},o={};for(const n in e)if(n.startsWith("on")&&!n.startsWith("onUpdate")&&"onReady"!==n){const o=n.slice(2).toLocaleLowerCase();t[o]=e[n]}else o[n]=e[n];return{listeners:t,attrs:o}},g=async e=>{const t=await Promise.all([o.e(249).then(o.t.bind(o,8249,17)),o.e(24).then(o.t.bind(o,7024,17)),o.e(71).then(o.t.bind(o,1071,17))]);delete e.Default.prototype._getIconUrl,e.Default.mergeOptions({iconRetinaUrl:t[0].default,iconUrl:t[1].default,shadowUrl:t[2].default})},h=e=>{const t=(0,u.KR)(((...t)=>console.warn(`Method ${e} has been invoked without being replaced`))),o=(...e)=>t.value(...e);return o.wrapped=t,(0,n.Gt)(e,o),o},L=(e,t)=>e.wrapped.value=t,S="object"==typeof self&&self.self===self&&self||"object"==typeof o.g&&o.g.global===o.g&&o.g||globalThis,O=e=>{const t=(0,n.WQ)(e);if(void 0===t)throw new Error(`Attempt to inject ${e.description} before it was provided.`);return t},j=(Symbol.toStringTag,Symbol("useGlobalLeaflet")),P=Symbol("addLayer"),_=Symbol("removeLayer"),T=Symbol("registerControl"),w=Symbol("registerLayerControl"),C=Symbol("canSetParentHtml"),k=Symbol("setParentHtml"),R=Symbol("setIcon"),M=Symbol("bindPopup"),B=Symbol("bindTooltip"),A=Symbol("unbindPopup"),I=Symbol("unbindTooltip"),z=(Symbol.toStringTag,{options:{type:Object,default:()=>({}),custom:!0}}),G=e=>({options:e.options,methods:{}}),K=Object.freeze(Object.defineProperty({__proto__:null,componentProps:z,setupComponent:G},Symbol.toStringTag,{value:"Module"})),N={...z,pane:{type:String},attribution:{type:String},name:{type:String,custom:!0},layerType:{type:String,custom:!0},visible:{type:Boolean,custom:!0,default:!0}},V=(e,t,o)=>{const r=O(P),l=O(_),{options:a,methods:s}=G(e),i=f(e,N,a),u=()=>r({leafletObject:t.value}),d=()=>l({leafletObject:t.value}),p={...s,setAttribution(o){d(),t.value.options.attribution=o,e.visible&&u()},setName(){d(),e.visible&&u()},setLayerType(){d(),e.visible&&u()},setVisible(e){t.value&&(e?u():d())},bindPopup(e){t.value&&y(t.value.bindPopup)?t.value.bindPopup(e):console.warn("Attempt to bind popup before bindPopup method available on layer.")},bindTooltip(e){t.value&&y(t.value.bindTooltip)?t.value.bindTooltip(e):console.warn("Attempt to bind tooltip before bindTooltip method available on layer.")},unbindTooltip(){t.value&&(y(t.value.closeTooltip)&&t.value.closeTooltip(),y(t.value.unbindTooltip)&&t.value.unbindTooltip())},unbindPopup(){t.value&&(y(t.value.closePopup)&&t.value.closePopup(),y(t.value.unbindPopup)&&t.value.unbindPopup())},updateVisibleProp(e){o.emit("update:visible",e)}};return(0,n.Gt)(M,p.bindPopup),(0,n.Gt)(B,p.bindTooltip),(0,n.Gt)(A,p.unbindPopup),(0,n.Gt)(I,p.unbindTooltip),(0,n.hi)((()=>{p.unbindPopup(),p.unbindTooltip(),d()})),{options:i,methods:p}},W=(e,t)=>{if(e&&t.default)return(0,n.h)("div",{style:{display:"none"}},t.default())},U=Object.freeze(Object.defineProperty({__proto__:null,layerProps:N,render:W,setupLayer:V},Symbol.toStringTag,{value:"Module"})),x={...N,interactive:{type:Boolean,default:void 0},bubblingMouseEvents:{type:Boolean,default:void 0}},E=(e,t,o)=>{const{options:n,methods:r}=V(e,t,o);return{options:f(e,x,n),methods:r}},$=Object.freeze(Object.defineProperty({__proto__:null,interactiveLayerProps:x,setupInteractiveLayer:E},Symbol.toStringTag,{value:"Module"})),Q={...x,stroke:{type:Boolean,default:void 0},color:{type:String},weight:{type:Number},opacity:{type:Number},lineCap:{type:String},lineJoin:{type:String},dashArray:{type:String},dashOffset:{type:String},fill:{type:Boolean,default:void 0},fillColor:{type:String},fillOpacity:{type:Number},fillRule:{type:String},className:{type:String}},Y=(e,t,o)=>{const{options:r,methods:l}=E(e,t,o),a=f(e,Q,r),s=O(_),i={...l,setStroke(e){t.value.setStyle({stroke:e})},setColor(e){t.value.setStyle({color:e})},setWeight(e){t.value.setStyle({weight:e})},setOpacity(e){t.value.setStyle({opacity:e})},setLineCap(e){t.value.setStyle({lineCap:e})},setLineJoin(e){t.value.setStyle({lineJoin:e})},setDashArray(e){t.value.setStyle({dashArray:e})},setDashOffset(e){t.value.setStyle({dashOffset:e})},setFill(e){t.value.setStyle({fill:e})},setFillColor(e){t.value.setStyle({fillColor:e})},setFillOpacity(e){t.value.setStyle({fillOpacity:e})},setFillRule(e){t.value.setStyle({fillRule:e})},setClassName(e){t.value.setStyle({className:e})}};return(0,n.xo)((()=>{s({leafletObject:t.value})})),{options:a,methods:i}},F=Object.freeze(Object.defineProperty({__proto__:null,pathProps:Q,setupPath:Y},Symbol.toStringTag,{value:"Module"})),q={...Q,radius:{type:Number},latLng:{type:[Object,Array],required:!0,custom:!0}},D=(e,t,o)=>{const{options:n,methods:r}=Y(e,t,o),l=f(e,q,n),a={...r,setRadius(e){t.value.setRadius(e)},setLatLng(e){t.value.setLatLng(e)}};return{options:l,methods:a}},J=Object.freeze(Object.defineProperty({__proto__:null,circleMarkerProps:q,setupCircleMarker:D},Symbol.toStringTag,{value:"Module"})),Z={...q,radius:{type:Number}},X=(e,t,o)=>{const{options:n,methods:r}=D(e,t,o),l=f(e,Z,n),a={...r};return{options:l,methods:a}},H=Object.freeze(Object.defineProperty({__proto__:null,circleProps:Z,setupCircle:X},Symbol.toStringTag,{value:"Module"})),ee=((0,n.pM)({name:"LCircle",props:Z,setup(e,t){const r=(0,u.KR)(),l=(0,u.KR)(!1),a=(0,n.WQ)(j),s=O(P),{options:i,methods:d}=X(e,r,t);return(0,n.sV)((async()=>{const{circle:p}=a?S.L:await Promise.all([o.e(700),o.e(791)]).then(o.bind(o,4791));r.value=(0,u.IG)(p(e.latLng,i));const{listeners:c}=b(t.attrs);r.value.on(c),v(d,r.value,e),s({...e,...d,leafletObject:r.value}),l.value=!0,(0,n.dY)((()=>t.emit("ready",r.value)))})),{ready:l,leafletObject:r}},render(){return W(this.ready,this.$slots)}}),(0,n.pM)({name:"LCircleMarker",props:q,setup(e,t){const r=(0,u.KR)(),l=(0,u.KR)(!1),a=(0,n.WQ)(j),s=O(P),{options:i,methods:d}=D(e,r,t);return(0,n.sV)((async()=>{const{circleMarker:p}=a?S.L:await Promise.all([o.e(700),o.e(791)]).then(o.bind(o,4791));r.value=(0,u.IG)(p(e.latLng,i));const{listeners:c}=b(t.attrs);r.value.on(c),v(d,r.value,e),s({...e,...d,leafletObject:r.value}),l.value=!0,(0,n.dY)((()=>t.emit("ready",r.value)))})),{ready:l,leafletObject:r}},render(){return W(this.ready,this.$slots)}}),{...z,position:{type:String}}),te=(e,t)=>{const{options:o,methods:r}=G(e),l=f(e,ee,o),a={...r,setPosition(e){t.value&&t.value.setPosition(e)}};return(0,n.hi)((()=>{t.value&&t.value.remove()})),{options:l,methods:a}},oe=e=>e.default?(0,n.h)("div",{ref:"root"},e.default()):null,ne=Object.freeze(Object.defineProperty({__proto__:null,controlProps:ee,renderLControl:oe,setupControl:te},Symbol.toStringTag,{value:"Module"})),re=((0,n.pM)({name:"LControl",props:{...ee,disableClickPropagation:{type:Boolean,custom:!0,default:!0},disableScrollPropagation:{type:Boolean,custom:!0,default:!1}},setup(e,t){const r=(0,u.KR)(),l=(0,u.KR)(),a=(0,n.WQ)(j),s=O(T),{options:i,methods:d}=te(e,r);return(0,n.sV)((async()=>{const{Control:p,DomEvent:c}=a?S.L:await Promise.all([o.e(700),o.e(791)]).then(o.bind(o,4791)),m=p.extend({onAdd(){return l.value}});r.value=(0,u.IG)(new m(i)),v(d,r.value,e),s({leafletObject:r.value}),e.disableClickPropagation&&l.value&&c.disableClickPropagation(l.value),e.disableScrollPropagation&&l.value&&c.disableScrollPropagation(l.value),(0,n.dY)((()=>t.emit("ready",r.value)))})),{root:l,leafletObject:r}},render(){return oe(this.$slots)}}),{...ee,prefix:{type:String}}),le=(e,t)=>{const{options:o,methods:n}=te(e,t),r=f(e,re,o),l={...n,setPrefix(e){t.value.setPrefix(e)}};return{options:r,methods:l}},ae=Object.freeze(Object.defineProperty({__proto__:null,controlAttributionProps:re,setupControlAttribution:le},Symbol.toStringTag,{value:"Module"})),se=((0,n.pM)({name:"LControlAttribution",props:re,setup(e,t){const r=(0,u.KR)(),l=(0,n.WQ)(j),a=O(T),{options:s,methods:i}=le(e,r);return(0,n.sV)((async()=>{const{control:d}=l?S.L:await Promise.all([o.e(700),o.e(791)]).then(o.bind(o,4791));r.value=(0,u.IG)(d.attribution(s)),v(i,r.value,e),a({leafletObject:r.value}),(0,n.dY)((()=>t.emit("ready",r.value)))})),{leafletObject:r}},render(){return null}}),{...ee,collapsed:{type:Boolean,default:void 0},autoZIndex:{type:Boolean,default:void 0},hideSingleBase:{type:Boolean,default:void 0},sortLayers:{type:Boolean,default:void 0},sortFunction:{type:Function}}),ie=(e,t)=>{const{options:o}=te(e,t);return{options:f(e,se,o),methods:{addLayer(e){"base"===e.layerType?t.value.addBaseLayer(e.leafletObject,e.name):"overlay"===e.layerType&&t.value.addOverlay(e.leafletObject,e.name)},removeLayer(e){t.value.removeLayer(e.leafletObject)}}}},ue=Object.freeze(Object.defineProperty({__proto__:null,controlLayersProps:se,setupControlLayers:ie},Symbol.toStringTag,{value:"Module"})),de=((0,n.pM)({name:"LControlLayers",props:se,setup(e,t){const r=(0,u.KR)(),l=(0,n.WQ)(j),a=O(w),{options:s,methods:i}=ie(e,r);return(0,n.sV)((async()=>{const{control:d}=l?S.L:await Promise.all([o.e(700),o.e(791)]).then(o.bind(o,4791));r.value=(0,u.IG)(d.layers(void 0,void 0,s)),v(i,r.value,e),a({...e,...i,leafletObject:r.value}),(0,n.dY)((()=>t.emit("ready",r.value)))})),{leafletObject:r}},render(){return null}}),{...ee,maxWidth:{type:Number},metric:{type:Boolean,default:void 0},imperial:{type:Boolean,default:void 0},updateWhenIdle:{type:Boolean,default:void 0}}),pe=(e,t)=>{const{options:o,methods:n}=te(e,t);return{options:f(e,de,o),methods:n}},ce=Object.freeze(Object.defineProperty({__proto__:null,controlScaleProps:de,setupControlScale:pe},Symbol.toStringTag,{value:"Module"})),me=((0,n.pM)({name:"LControlScale",props:de,setup(e,t){const r=(0,u.KR)(),l=(0,n.WQ)(j),a=O(T),{options:s,methods:i}=pe(e,r);return(0,n.sV)((async()=>{const{control:d}=l?S.L:await Promise.all([o.e(700),o.e(791)]).then(o.bind(o,4791));r.value=(0,u.IG)(d.scale(s)),v(i,r.value,e),a({leafletObject:r.value}),(0,n.dY)((()=>t.emit("ready",r.value)))})),{leafletObject:r}},render(){return null}}),{...ee,zoomInText:{type:String},zoomInTitle:{type:String},zoomOutText:{type:String},zoomOutTitle:{type:String}}),ye=(e,t)=>{const{options:o,methods:n}=te(e,t);return{options:f(e,me,o),methods:n}},ve=Object.freeze(Object.defineProperty({__proto__:null,controlZoomProps:me,setupControlZoom:ye},Symbol.toStringTag,{value:"Module"})),fe=((0,n.pM)({name:"LControlZoom",props:me,setup(e,t){const r=(0,u.KR)(),l=(0,n.WQ)(j),a=O(T),{options:s,methods:i}=ye(e,r);return(0,n.sV)((async()=>{const{control:d}=l?S.L:await Promise.all([o.e(700),o.e(791)]).then(o.bind(o,4791));r.value=(0,u.IG)(d.zoom(s)),v(i,r.value,e),a({leafletObject:r.value}),(0,n.dY)((()=>t.emit("ready",r.value)))})),{leafletObject:r}},render(){return null}}),{...N}),be=(e,t,o)=>{const{options:r,methods:l}=V(e,t,o),a=f(e,fe,r),s={...l,addLayer(e){t.value.addLayer(e.leafletObject)},removeLayer(e){t.value.removeLayer(e.leafletObject)}};return(0,n.Gt)(P,s.addLayer),(0,n.Gt)(_,s.removeLayer),{options:a,methods:s}},ge=Object.freeze(Object.defineProperty({__proto__:null,layerGroupProps:fe,setupLayerGroup:be},Symbol.toStringTag,{value:"Module"})),he={...fe},Le=(e,t,o)=>{const{options:n,methods:r}=be(e,t,o),l=f(e,he,n),a={...r};return{options:l,methods:a}},Se=Object.freeze(Object.defineProperty({__proto__:null,featureGroupProps:he,setupFeatureGroup:Le},Symbol.toStringTag,{value:"Module"})),Oe=((0,n.pM)({props:he,setup(e,t){const r=(0,u.KR)(),l=(0,u.KR)(!1),a=(0,n.WQ)(j),s=O(P),{methods:i,options:d}=Le(e,r,t);return(0,n.sV)((async()=>{const{featureGroup:p}=a?S.L:await Promise.all([o.e(700),o.e(791)]).then(o.bind(o,4791));r.value=(0,u.IG)(p(void 0,d));const{listeners:c}=b(t.attrs);r.value.on(c),v(i,r.value,e),s({...e,...i,leafletObject:r.value}),l.value=!0,(0,n.dY)((()=>t.emit("ready",r.value)))})),{ready:l,leafletObject:r}},render(){return W(this.ready,this.$slots)}}),{...fe,geojson:{type:[Object,Array],custom:!0},optionsStyle:{type:Function,custom:!0}}),je=(e,t,o)=>{const{options:n,methods:r}=be(e,t,o),l=f(e,Oe,n);Object.prototype.hasOwnProperty.call(e,"optionsStyle")&&(l.style=e.optionsStyle);const a={...r,setGeojson(e){t.value.clearLayers(),t.value.addData(e)},setOptionsStyle(e){t.value.setStyle(e)},getGeoJSONData(){return t.value.toGeoJSON()},getBounds(){return t.value.getBounds()}};return{options:l,methods:a}},Pe=Object.freeze(Object.defineProperty({__proto__:null,geoJSONProps:Oe,setupGeoJSON:je},Symbol.toStringTag,{value:"Module"})),_e=((0,n.pM)({props:Oe,setup(e,t){const r=(0,u.KR)(),l=(0,u.KR)(!1),a=(0,n.WQ)(j),s=O(P),{methods:i,options:d}=je(e,r,t);return(0,n.sV)((async()=>{const{geoJSON:p}=a?S.L:await Promise.all([o.e(700),o.e(791)]).then(o.bind(o,4791));r.value=(0,u.IG)(p(e.geojson,d));const{listeners:c}=b(t.attrs);r.value.on(c),v(i,r.value,e),s({...e,...i,leafletObject:r.value}),l.value=!0,(0,n.dY)((()=>t.emit("ready",r.value)))})),{ready:l,leafletObject:r}},render(){return W(this.ready,this.$slots)}}),{...N,opacity:{type:Number},zIndex:{type:Number},tileSize:{type:[Number,Array,Object]},noWrap:{type:Boolean,default:void 0},minZoom:{type:Number},maxZoom:{type:Number},className:{type:String}}),Te=(e,t,o)=>{const{options:r,methods:l}=V(e,t,o),a=f(e,_e,r),s={...l,setTileComponent(){var e;null==(e=t.value)||e.redraw()}};return(0,n.hi)((()=>{t.value.off()})),{options:a,methods:s}},we=(e,t,o,r)=>e.extend({initialize(e){this.tileComponents={},this.on("tileunload",this._unloadTile),o.setOptions(this,e)},createTile(e){const o=this._tileCoordsToKey(e);this.tileComponents[o]=t.create("div");const l=(0,n.h)({setup:r,props:["coords"]},{coords:e});return(0,d.XX)(l,this.tileComponents[o]),this.tileComponents[o]},_unloadTile(e){const t=this._tileCoordsToKey(e.coords);this.tileComponents[t]&&(this.tileComponents[t].innerHTML="",this.tileComponents[t]=void 0)}}),Ce=Object.freeze(Object.defineProperty({__proto__:null,CreateVueGridLayer:we,gridLayerProps:_e,setupGridLayer:Te},Symbol.toStringTag,{value:"Module"})),ke=((0,n.pM)({props:{..._e,childRender:{type:Function,required:!0}},setup(e,t){const r=(0,u.KR)(),l=(0,u.KR)(null),a=(0,u.KR)(!1),s=(0,n.WQ)(j),i=O(P),{options:d,methods:p}=Te(e,r,t);return(0,n.sV)((async()=>{const{GridLayer:l,DomUtil:c,Util:m}=s?S.L:await Promise.all([o.e(700),o.e(791)]).then(o.bind(o,4791)),y=we(l,c,m,e.childRender);r.value=(0,u.IG)(new y(d));const{listeners:f}=b(t.attrs);r.value.on(f),v(p,r.value,e),i({...e,...p,leafletObject:r.value}),a.value=!0,(0,n.dY)((()=>t.emit("ready",r.value)))})),{root:l,ready:a,leafletObject:r}},render(){return this.ready?(0,n.h)("div",{style:{display:"none"},ref:"root"}):null}}),{iconUrl:{type:String},iconRetinaUrl:{type:String},iconSize:{type:[Object,Array]},iconAnchor:{type:[Object,Array]},popupAnchor:{type:[Object,Array]},tooltipAnchor:{type:[Object,Array]},shadowUrl:{type:String},shadowRetinaUrl:{type:String},shadowSize:{type:[Object,Array]},shadowAnchor:{type:[Object,Array]},bgPos:{type:[Object,Array]},className:{type:String}}),Re=Object.freeze(Object.defineProperty({__proto__:null,iconProps:ke},Symbol.toStringTag,{value:"Module"})),Me=(0,n.pM)({name:"LIcon",props:{...ke,...z},setup(e,t){const r=(0,u.KR)(),l=(0,n.WQ)(j),a=O(C),s=O(k),i=O(R);let d,p,c,m,y;const g=(o,n,r)=>{const l=o&&o.innerHTML;if(!n)return void(r&&y&&a()&&s(l));const{listeners:u}=b(t.attrs);y&&p(y,u);const{options:v}=G(e),g=f(e,ke,v);l&&(g.html=l),y=g.html?c(g):m(g),d(y,u),i(y)},h=()=>{(0,n.dY)((()=>g(r.value,!0,!1)))},L=()=>{(0,n.dY)((()=>g(r.value,!1,!0)))},P={setIconUrl:h,setIconRetinaUrl:h,setIconSize:h,setIconAnchor:h,setPopupAnchor:h,setTooltipAnchor:h,setShadowUrl:h,setShadowRetinaUrl:h,setShadowAnchor:h,setBgPos:h,setClassName:h,setHtml:h};return(0,n.sV)((async()=>{const{DomEvent:t,divIcon:n,icon:a}=l?S.L:await Promise.all([o.e(700),o.e(791)]).then(o.bind(o,4791));d=t.on,p=t.off,c=n,m=a,v(P,{},e),new MutationObserver(L).observe(r.value,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),h()})),{root:r}},render(){const e=this.$slots.default?this.$slots.default():void 0;return(0,n.h)("div",{ref:"root"},e)}}),Be={...N,opacity:{type:Number},alt:{type:String},interactive:{type:Boolean,default:void 0},crossOrigin:{type:Boolean,default:void 0},errorOverlayUrl:{type:String},zIndex:{type:Number},className:{type:String},url:{type:String,required:!0,custom:!0},bounds:{type:[Array,Object],required:!0,custom:!0}},Ae=(e,t,o)=>{const{options:n,methods:r}=V(e,t,o),l=f(e,Be,n),a={...r,setOpacity(e){return t.value.setOpacity(e)},setUrl(e){return t.value.setUrl(e)},setBounds(e){return t.value.setBounds(e)},getBounds(){return t.value.getBounds()},getElement(){return t.value.getElement()},bringToFront(){return t.value.bringToFront()},bringToBack(){return t.value.bringToBack()},setZIndex(e){return t.value.setZIndex(e)}};return{options:l,methods:a}},Ie=Object.freeze(Object.defineProperty({__proto__:null,imageOverlayProps:Be,setupImageOverlay:Ae},Symbol.toStringTag,{value:"Module"}));(0,n.pM)({name:"LImageOverlay",props:Be,setup(e,t){const r=(0,u.KR)(),l=(0,u.KR)(!1),a=(0,n.WQ)(j),s=O(P),{options:i,methods:d}=Ae(e,r,t);return(0,n.sV)((async()=>{const{imageOverlay:p}=a?S.L:await Promise.all([o.e(700),o.e(791)]).then(o.bind(o,4791));r.value=(0,u.IG)(p(e.url,e.bounds,i));const{listeners:c}=b(t.attrs);r.value.on(c),v(d,r.value,e),s({...e,...d,leafletObject:r.value}),l.value=!0,(0,n.dY)((()=>t.emit("ready",r.value)))})),{ready:l,leafletObject:r}},render(){return W(this.ready,this.$slots)}}),(0,n.pM)({props:fe,setup(e,t){const r=(0,u.KR)(),l=(0,u.KR)(!1),a=(0,n.WQ)(j),s=O(P),{methods:i}=be(e,r,t);return(0,n.sV)((async()=>{const{layerGroup:d}=a?S.L:await Promise.all([o.e(700),o.e(791)]).then(o.bind(o,4791));r.value=(0,u.IG)(d(void 0,e.options));const{listeners:p}=b(t.attrs);r.value.on(p),v(i,r.value,e),s({...e,...i,leafletObject:r.value}),l.value=!0,(0,n.dY)((()=>t.emit("ready",r.value)))})),{ready:l,leafletObject:r}},render(){return W(this.ready,this.$slots)}});function ze(e,t,o){var n,r,l;void 0===t&&(t=50),void 0===o&&(o={});var a=null!=(n=o.isImmediate)&&n,s=null!=(r=o.callback)&&r,i=o.maxWait,u=Date.now(),d=[];function p(){if(void 0!==i){var e=Date.now()-u;if(e+t>=i)return i-e}return t}var c=function(){var t=[].slice.call(arguments),o=this;return new Promise((function(n,r){var i=a&&void 0===l;if(void 0!==l&&clearTimeout(l),l=setTimeout((function(){if(l=void 0,u=Date.now(),!a){var n=e.apply(o,t);s&&s(n),d.forEach((function(e){return(0,e.resolve)(n)})),d=[]}}),p()),i){var c=e.apply(o,t);return s&&s(c),n(c)}d.push({resolve:n,reject:r})}))};return c.cancel=function(e){void 0!==l&&clearTimeout(l),d.forEach((function(t){return(0,t.reject)(e)})),d=[]},c}const Ge={...z,center:{type:[Object,Array]},bounds:{type:[Array,Object]},maxBounds:{type:[Array,Object]},zoom:{type:Number},minZoom:{type:Number},maxZoom:{type:Number},paddingBottomRight:{type:[Object,Array]},paddingTopLeft:{type:Object},padding:{type:Object},worldCopyJump:{type:Boolean,default:void 0},crs:{type:[String,Object]},maxBoundsViscosity:{type:Number},inertia:{type:Boolean,default:void 0},inertiaDeceleration:{type:Number},inertiaMaxSpeed:{type:Number},easeLinearity:{type:Number},zoomAnimation:{type:Boolean,default:void 0},zoomAnimationThreshold:{type:Number},fadeAnimation:{type:Boolean,default:void 0},markerZoomAnimation:{type:Boolean,default:void 0},noBlockingAnimations:{type:Boolean,default:void 0},useGlobalLeaflet:{type:Boolean,default:!0,custom:!0}},Ke=(0,n.pM)({inheritAttrs:!1,emits:["ready","update:zoom","update:center","update:bounds"],props:Ge,setup(e,t){const r=(0,u.KR)(),l=(0,u.Kh)({ready:!1,layersToAdd:[],layersInControl:[]}),{options:a}=G(e),s=f(e,Ge,a),{listeners:i,attrs:d}=b(t.attrs),m=h(P),y=h(_),O=h(T),C=h(w);(0,n.Gt)(j,e.useGlobalLeaflet);const k=(0,n.EW)((()=>{const t={};return e.noBlockingAnimations&&(t.animate=!1),t})),R=(0,n.EW)((()=>{const t=k.value;return e.padding&&(t.padding=e.padding),e.paddingTopLeft&&(t.paddingTopLeft=e.paddingTopLeft),e.paddingBottomRight&&(t.paddingBottomRight=e.paddingBottomRight),t})),M={moveend:ze((e=>{l.leafletRef&&(t.emit("update:zoom",l.leafletRef.getZoom()),t.emit("update:center",l.leafletRef.getCenter()),t.emit("update:bounds",l.leafletRef.getBounds()))})),overlayadd(e){const t=l.layersInControl.find((t=>t.name===e.name));t&&t.updateVisibleProp(!0)},overlayremove(e){const t=l.layersInControl.find((t=>t.name===e.name));t&&t.updateVisibleProp(!1)}};(0,n.sV)((async()=>{e.useGlobalLeaflet&&(S.L=S.L||await Promise.all([o.e(700),o.e(886)]).then(o.t.bind(o,6886,23)));const{map:a,CRS:d,Icon:c,latLngBounds:f,latLng:b,stamp:h}=e.useGlobalLeaflet?S.L:await Promise.all([o.e(700),o.e(791)]).then(o.bind(o,4791));try{s.beforeMapMount&&await s.beforeMapMount()}catch(_){console.error(`The following error occurred running the provided beforeMapMount hook ${_.message}`)}await g(c);const j="string"==typeof s.crs?d[s.crs]:s.crs;s.crs=j||d.EPSG3857;const P={addLayer(e){void 0!==e.layerType&&(void 0===l.layerControl?l.layersToAdd.push(e):l.layersInControl.find((t=>h(t.leafletObject)===h(e.leafletObject)))||(l.layerControl.addLayer(e),l.layersInControl.push(e))),!1!==e.visible&&l.leafletRef.addLayer(e.leafletObject)},removeLayer(e){void 0!==e.layerType&&(void 0===l.layerControl?l.layersToAdd=l.layersToAdd.filter((t=>t.name!==e.name)):(l.layerControl.removeLayer(e.leafletObject),l.layersInControl=l.layersInControl.filter((t=>h(t.leafletObject)!==h(e.leafletObject))))),l.leafletRef.removeLayer(e.leafletObject)},registerLayerControl(e){l.layerControl=e,l.layersToAdd.forEach((e=>{l.layerControl.addLayer(e)})),l.layersToAdd=[],O(e)},registerControl(e){l.leafletRef.addControl(e.leafletObject)},setZoom(e){const t=l.leafletRef.getZoom();e!==t&&l.leafletRef.setZoom(e,k.value)},setCrs(e){const t=l.leafletRef.getBounds();l.leafletRef.options.crs=e,l.leafletRef.fitBounds(t,{animate:!1,padding:[0,0]})},fitBounds(e){l.leafletRef.fitBounds(e,R.value)},setBounds(e){if(!e)return;const t=f(e);t.isValid()&&!(l.lastSetBounds||l.leafletRef.getBounds()).equals(t,0)&&(l.lastSetBounds=t,l.leafletRef.fitBounds(t))},setCenter(e){if(null==e)return;const t=b(e),o=l.lastSetCenter||l.leafletRef.getCenter();(o.lat!==t.lat||o.lng!==t.lng)&&(l.lastSetCenter=t,l.leafletRef.panTo(t,k.value))}};L(m,P.addLayer),L(y,P.removeLayer),L(O,P.registerControl),L(C,P.registerLayerControl),l.leafletRef=(0,u.IG)(a(r.value,s)),v(P,l.leafletRef,e),p(l.leafletRef,M),p(l.leafletRef,i),l.ready=!0,(0,n.dY)((()=>t.emit("ready",l.leafletRef)))})),(0,n.xo)((()=>{c(M),l.leafletRef&&(l.leafletRef.off(),l.leafletRef.remove())}));const B=(0,n.EW)((()=>l.leafletRef)),A=(0,n.EW)((()=>l.ready));return{root:r,ready:A,leafletObject:B,attrs:d}},render({attrs:e}){return e.style||(e.style={}),e.style.width||(e.style.width="100%"),e.style.height||(e.style.height="100%"),(0,n.h)("div",{...e,ref:"root"},this.ready&&this.$slots.default?this.$slots.default():{})}}),Ne=["Symbol(Comment)","Symbol(Text)"],Ve=["LTooltip","LPopup"],We={...N,draggable:{type:Boolean,default:void 0},icon:{type:[Object]},zIndexOffset:{type:Number},latLng:{type:[Object,Array],custom:!0,required:!0}},Ue=(e,t,o)=>{const{options:n,methods:r}=V(e,t,o),l=f(e,We,n),a={...r,setDraggable(e){t.value.dragging&&(e?t.value.dragging.enable():t.value.dragging.disable())},latLngSync(e){o.emit("update:latLng",e.latlng),o.emit("update:lat-lng",e.latlng)},setLatLng(e){if(null!=e&&t.value){const o=t.value.getLatLng();(!o||!o.equals(e))&&t.value.setLatLng(e)}}};return{options:l,methods:a}},xe=(e,t)=>{const o=t.slots.default&&t.slots.default();return o&&o.length&&o.some(Ee)};function Ee(e){return!(Ne.includes(e.type.toString())||Ve.includes(e.type.name))}const $e=Object.freeze(Object.defineProperty({__proto__:null,markerProps:We,setupMarker:Ue,shouldBlankIcon:xe},Symbol.toStringTag,{value:"Module"})),Qe=(0,n.pM)({name:"LMarker",props:We,setup(e,t){const r=(0,u.KR)(),l=(0,u.KR)(!1),a=(0,n.WQ)(j),s=O(P);(0,n.Gt)(C,(()=>{var e;return!(null==(e=r.value)||!e.getElement())})),(0,n.Gt)(k,(e=>{var t,o;const n=y(null==(t=r.value)?void 0:t.getElement)&&(null==(o=r.value)?void 0:o.getElement());n&&(n.innerHTML=e)})),(0,n.Gt)(R,(e=>{var t;return(null==(t=r.value)?void 0:t.setIcon)&&r.value.setIcon(e)}));const{options:i,methods:d}=Ue(e,r,t),p={moveHandler:ze(d.latLngSync)};return(0,n.sV)((async()=>{const{marker:c,divIcon:m}=a?S.L:await Promise.all([o.e(700),o.e(791)]).then(o.bind(o,4791));xe(i,t)&&(i.icon=m({className:""})),r.value=(0,u.IG)(c(e.latLng,i));const{listeners:y}=b(t.attrs);r.value.on(y),r.value.on("move",p.moveHandler),v(d,r.value,e),s({...e,...d,leafletObject:r.value}),l.value=!0,(0,n.dY)((()=>t.emit("ready",r.value)))})),(0,n.xo)((()=>c(p))),{ready:l,leafletObject:r}},render(){return W(this.ready,this.$slots)}}),Ye={...Q,smoothFactor:{type:Number},noClip:{type:Boolean,default:void 0},latLngs:{type:Array,required:!0,custom:!0}},Fe=(e,t,o)=>{const{options:n,methods:r}=Y(e,t,o),l=f(e,Ye,n),a={...r,setSmoothFactor(e){t.value.setStyle({smoothFactor:e})},setNoClip(e){t.value.setStyle({noClip:e})},addLatLng(e){t.value.addLatLng(e)}};return{options:l,methods:a}},qe=Object.freeze(Object.defineProperty({__proto__:null,polylineProps:Ye,setupPolyline:Fe},Symbol.toStringTag,{value:"Module"})),De={...Ye},Je=(e,t,o)=>{const{options:n,methods:r}=Fe(e,t,o),l=f(e,De,n),a={...r,toGeoJSON(e){return t.value.toGeoJSON(e)}};return{options:l,methods:a}},Ze=Object.freeze(Object.defineProperty({__proto__:null,polygonProps:De,setupPolygon:Je},Symbol.toStringTag,{value:"Module"})),Xe=((0,n.pM)({name:"LPolygon",props:De,setup(e,t){const r=(0,u.KR)(),l=(0,u.KR)(!1),a=(0,n.WQ)(j),s=O(P),{options:i,methods:d}=Je(e,r,t);return(0,n.sV)((async()=>{const{polygon:p}=a?S.L:await Promise.all([o.e(700),o.e(791)]).then(o.bind(o,4791));r.value=(0,u.IG)(p(e.latLngs,i));const{listeners:c}=b(t.attrs);r.value.on(c),v(d,r.value,e),s({...e,...d,leafletObject:r.value}),l.value=!0,(0,n.dY)((()=>t.emit("ready",r.value)))})),{ready:l,leafletObject:r}},render(){return W(this.ready,this.$slots)}}),(0,n.pM)({name:"LPolyline",props:Ye,setup(e,t){const r=(0,u.KR)(),l=(0,u.KR)(!1),a=(0,n.WQ)(j),s=O(P),{options:i,methods:d}=Fe(e,r,t);return(0,n.sV)((async()=>{const{polyline:p}=a?S.L:await Promise.all([o.e(700),o.e(791)]).then(o.bind(o,4791));r.value=(0,u.IG)(p(e.latLngs,i));const{listeners:c}=b(t.attrs);r.value.on(c),v(d,r.value,e),s({...e,...d,leafletObject:r.value}),l.value=!0,(0,n.dY)((()=>t.emit("ready",r.value)))})),{ready:l,leafletObject:r}},render(){return W(this.ready,this.$slots)}}),{...z,content:{type:String,default:null}}),He=(e,t)=>{const{options:o,methods:n}=G(e),r={...n,setContent(e){t.value&&null!==e&&void 0!==e&&t.value.setContent(e)}};return{options:o,methods:r}},et=e=>e.default?(0,n.h)("div",{ref:"root"},e.default()):null,tt=Object.freeze(Object.defineProperty({__proto__:null,popperProps:Xe,render:et,setupPopper:He},Symbol.toStringTag,{value:"Module"})),ot={...Xe,latLng:{type:[Object,Array],default:()=>[]}},nt=(e,t)=>{const{options:o,methods:n}=He(e,t);return{options:o,methods:n}},rt=Object.freeze(Object.defineProperty({__proto__:null,popupProps:ot,setupPopup:nt},Symbol.toStringTag,{value:"Module"})),lt=((0,n.pM)({name:"LPopup",props:ot,setup(e,t){const r=(0,u.KR)(),l=(0,u.KR)(null),a=(0,n.WQ)(j),s=O(M),i=O(A),{options:d,methods:p}=nt(e,r);return(0,n.sV)((async()=>{const{popup:i}=a?S.L:await Promise.all([o.e(700),o.e(791)]).then(o.bind(o,4791));r.value=(0,u.IG)(i(d)),void 0!==e.latLng&&r.value.setLatLng(e.latLng),v(p,r.value,e);const{listeners:c}=b(t.attrs);r.value.on(c),r.value.setContent(e.content||l.value||""),s(r.value),(0,n.dY)((()=>t.emit("ready",r.value)))})),(0,n.xo)((()=>{i()})),{root:l,leafletObject:r}},render(){return et(this.$slots)}}),{...De,latLngs:{...De.latLngs,required:!1},bounds:{type:Object,custom:!0}}),at=(e,t,o)=>{const{options:n,methods:r}=Je(e,t,o),l=f(e,lt,n),a={...r,setBounds(e){t.value.setBounds(e)},setLatLngs(e){t.value.setBounds(e)}};return{options:l,methods:a}},st=Object.freeze(Object.defineProperty({__proto__:null,rectangleProps:lt,setupRectangle:at},Symbol.toStringTag,{value:"Module"})),it=((0,n.pM)({name:"LRectangle",props:lt,setup(e,t){const r=(0,u.KR)(),l=(0,u.KR)(!1),a=(0,n.WQ)(j),s=O(P),{options:i,methods:d}=at(e,r,t);return(0,n.sV)((async()=>{const{rectangle:p,latLngBounds:c}=a?S.L:await Promise.all([o.e(700),o.e(791)]).then(o.bind(o,4791)),m=e.bounds?c(e.bounds):c(e.latLngs||[]);r.value=(0,u.IG)(p(m,i));const{listeners:y}=b(t.attrs);r.value.on(y),v(d,r.value,e),s({...e,...d,leafletObject:r.value}),l.value=!0,(0,n.dY)((()=>t.emit("ready",r.value)))})),{ready:l,leafletObject:r}},render(){return W(this.ready,this.$slots)}}),{..._e,tms:{type:Boolean,default:void 0},subdomains:{type:[String,Array],validator:e=>"string"==typeof e||!!Array.isArray(e)&&e.every((e=>"string"==typeof e))},detectRetina:{type:Boolean,default:void 0},url:{type:String,required:!0,custom:!0}}),ut=(e,t,o)=>{const{options:n,methods:r}=Te(e,t,o),l=f(e,it,n),a={...r};return{options:l,methods:a}},dt=Object.freeze(Object.defineProperty({__proto__:null,setupTileLayer:ut,tileLayerProps:it},Symbol.toStringTag,{value:"Module"})),pt=(0,n.pM)({props:it,setup(e,t){const r=(0,u.KR)(),l=(0,n.WQ)(j),a=O(P),{options:s,methods:i}=ut(e,r,t);return(0,n.sV)((async()=>{const{tileLayer:d}=l?S.L:await Promise.all([o.e(700),o.e(791)]).then(o.bind(o,4791));r.value=(0,u.IG)(d(e.url,s));const{listeners:p}=b(t.attrs);r.value.on(p),v(i,r.value,e),a({...e,...i,leafletObject:r.value}),(0,n.dY)((()=>t.emit("ready",r.value)))})),{leafletObject:r}},render(){return null}}),ct={...Xe},mt=(e,t)=>{const{options:o,methods:r}=He(e,t),l=O(I);return(0,n.xo)((()=>{l()})),{options:o,methods:r}},yt=Object.freeze(Object.defineProperty({__proto__:null,setupTooltip:mt,tooltipProps:ct},Symbol.toStringTag,{value:"Module"})),vt=(0,n.pM)({name:"LTooltip",props:ct,setup(e,t){const r=(0,u.KR)(),l=(0,u.KR)(null),a=(0,n.WQ)(j),s=O(B),{options:i,methods:d}=mt(e,r);return(0,n.sV)((async()=>{const{tooltip:p}=a?S.L:await Promise.all([o.e(700),o.e(791)]).then(o.bind(o,4791));r.value=(0,u.IG)(p(i)),v(d,r.value,e);const{listeners:c}=b(t.attrs);r.value.on(c),r.value.setContent(e.content||l.value||""),s(r.value),(0,n.dY)((()=>t.emit("ready",r.value)))})),{root:l,leafletObject:r}},render(){return et(this.$slots)}}),ft={...it,layers:{type:String,required:!0},styles:{type:String},format:{type:String},transparent:{type:Boolean,default:void 0},version:{type:String},crs:{type:Object},uppercase:{type:Boolean,default:void 0}},bt=(e,t,o)=>{const{options:n,methods:r}=ut(e,t,o);return{options:f(e,ft,n),methods:{...r}}},gt=Object.freeze(Object.defineProperty({__proto__:null,setupWMSTileLayer:bt,wmsTileLayerProps:ft},Symbol.toStringTag,{value:"Module"}));(0,n.pM)({props:ft,setup(e,t){const r=(0,u.KR)(),l=(0,n.WQ)(j),a=O(P),{options:s,methods:i}=bt(e,r,t);return(0,n.sV)((async()=>{const{tileLayer:d}=l?S.L:await Promise.all([o.e(700),o.e(791)]).then(o.bind(o,4791));r.value=(0,u.IG)(d.wms(e.url,s));const{listeners:p}=b(t.attrs);r.value.on(p),v(i,r.value,e),a({...e,...i,leafletObject:r.value}),(0,n.dY)((()=>t.emit("ready",r.value)))})),{leafletObject:r}},render(){return null}}),Symbol.toStringTag;var ht={components:{LMap:Ke,LTileLayer:pt,LMarker:Qe,LIcon:Me,LTooltip:vt},data(){return{zoom:14,userLocation:null,icon:o(8554),markers:[{name:"Marker 1",lat:50.049683,long:19.944544},{name:"Marker 2",lat:50.05,long:19.95},{name:"Marker 3",lat:50.06,long:19.96}]}},methods:{getUserLocation(){"geolocation"in navigator&&navigator.geolocation.getCurrentPosition((e=>{this.userLocation=[e.coords.latitude,e.coords.longitude],this.$refs.map&&this.$refs.map.mapObject&&this.$refs.map.mapObject.setView(this.userLocation,this.zoom)}))}}},Lt=o(1241);const St=(0,Lt.A)(ht,[["render",i]]);var Ot=St},9942:function(e,t,o){o.r(t),o.d(t,{default:function(){return h}});var n=o(6768),r=o(5130);const l={class:"container d-flex justify-content-center align-items-center vh-75 mt-5"},a={class:"card shadow-sm col-md-6"},s=(0,n.Lk)("div",{class:"card-header pt-3"},[(0,n.Lk)("h3",null,"Login")],-1),i={class:"card-body"},u={class:"form-group my-3"},d=(0,n.Lk)("label",{for:"username"},"Username or Email",-1),p={class:"form-group my-3"},c=(0,n.Lk)("label",{for:"password"},"Password",-1),m=(0,n.Lk)("button",{type:"submit",class:"btn btn-primary"},"Login",-1),y={href:"/signup",class:"btn btn-link"};function v(e,t,o,v,f,b){const g=(0,n.g2)("router-link");return(0,n.uX)(),(0,n.CE)("div",l,[(0,n.Lk)("div",a,[s,(0,n.Lk)("div",i,[(0,n.Lk)("form",{onSubmit:t[2]||(t[2]=(0,r.D$)(((...e)=>b.handleSubmit&&b.handleSubmit(...e)),["prevent"]))},[(0,n.Lk)("div",u,[d,(0,n.bo)((0,n.Lk)("input",{type:"text",class:"form-control mt-2",id:"username","onUpdate:modelValue":t[0]||(t[0]=e=>f.username=e),required:""},null,512),[[r.Jo,f.username]])]),(0,n.Lk)("div",p,[c,(0,n.bo)((0,n.Lk)("input",{type:"password",class:"form-control mt-2 mb-4",id:"password","onUpdate:modelValue":t[1]||(t[1]=e=>f.password=e),required:""},null,512),[[r.Jo,f.password]])]),m,(0,n.Lk)("a",y,[(0,n.bF)(g,{to:"/signup"},{default:(0,n.k6)((()=>[(0,n.eW)("Sign up")])),_:1})])],32)])])])}var f={name:"LoginView",data(){return{username:"",password:""}},methods:{handleSubmit(){console.log("Submitting login form:",this.username,this.password)}}},b=o(1241);const g=(0,b.A)(f,[["render",v]]);var h=g},6121:function(e,t,o){o.r(t),o.d(t,{default:function(){return d}});var n=o(6768);const r=(0,n.Lk)("h1",null,"Profile",-1),l=[r];function a(e,t){return(0,n.uX)(),(0,n.CE)("div",null,l)}var s=o(1241);const i={},u=(0,s.A)(i,[["render",a]]);var d=u},9970:function(e,t,o){o.r(t),o.d(t,{default:function(){return d}});var n=o(6768);const r=(0,n.Lk)("h1",null,"Shelf",-1),l=[r];function a(e,t){return(0,n.uX)(),(0,n.CE)("div",null,l)}var s=o(1241);const i={},u=(0,s.A)(i,[["render",a]]);var d=u},672:function(e,t,o){o.r(t),o.d(t,{default:function(){return j}});var n=o(6768),r=o(5130);const l=e=>((0,n.Qi)("data-v-07f68798"),e=e(),(0,n.jt)(),e),a={class:"container d-flex justify-content-center align-items-center vh-75 mt-5"},s={class:"card shadow-sm col-md-6"},i=l((()=>(0,n.Lk)("div",{class:"card-header pt-3"},[(0,n.Lk)("h3",null,"Sign Up")],-1))),u={class:"card-body"},d={class:"form-group my-3"},p=l((()=>(0,n.Lk)("label",{for:"username"},"Username",-1))),c={class:"form-group my-3"},m=l((()=>(0,n.Lk)("label",{for:"email"},"Email",-1))),y={class:"form-group my-3"},v=l((()=>(0,n.Lk)("label",{for:"password"},"Password",-1))),f={class:"form-group my-3"},b=l((()=>(0,n.Lk)("label",{for:"confirmPassword"},"Confirm Password",-1))),g=l((()=>(0,n.Lk)("button",{type:"submit",class:"btn btn-primary"},"Sign Up",-1)));function h(e,t,o,l,h,L){return(0,n.uX)(),(0,n.CE)("div",a,[(0,n.Lk)("div",s,[i,(0,n.Lk)("div",u,[(0,n.Lk)("form",{onSubmit:t[4]||(t[4]=(0,r.D$)(((...e)=>L.handleSubmit&&L.handleSubmit(...e)),["prevent"]))},[(0,n.Lk)("div",d,[p,(0,n.bo)((0,n.Lk)("input",{type:"text",class:"form-control mt-2",id:"username","onUpdate:modelValue":t[0]||(t[0]=e=>h.username=e),required:""},null,512),[[r.Jo,h.username]])]),(0,n.Lk)("div",c,[m,(0,n.bo)((0,n.Lk)("input",{type:"email",class:"form-control mt-2",id:"email","onUpdate:modelValue":t[1]||(t[1]=e=>h.email=e),required:""},null,512),[[r.Jo,h.email]])]),(0,n.Lk)("div",y,[v,(0,n.bo)((0,n.Lk)("input",{type:"password",class:"form-control mt-2",id:"password","onUpdate:modelValue":t[2]||(t[2]=e=>h.password=e),required:""},null,512),[[r.Jo,h.password]])]),(0,n.Lk)("div",f,[b,(0,n.bo)((0,n.Lk)("input",{type:"password",class:"form-control mt-2",id:"confirmPassword","onUpdate:modelValue":t[3]||(t[3]=e=>h.confirmPassword=e),required:""},null,512),[[r.Jo,h.confirmPassword]])]),g],32)])])])}var L={name:"SignupView",data(){return{username:"",email:"",password:"",confirmPassword:"",agreeToTerms:!1}},methods:{handleSubmit(){console.log("Submitting signup form:",this.username,this.email,this.password)}}},S=o(1241);const O=(0,S.A)(L,[["render",h],["__scopeId","data-v-07f68798"]]);var j=O},8554:function(e,t,o){e.exports=o.p+"img/marker.74df38ac.png"}}]);
//# sourceMappingURL=about.2586b184.js.map