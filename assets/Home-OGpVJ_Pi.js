var f=Object.defineProperty;var p=(o,e,s)=>e in o?f(o,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[e]=s;var r=(o,e,s)=>p(o,typeof e!="symbol"?e+"":e,s);import{V as g,m,a as v,g as u,C as b,_ as $,c as y,w as c,v as h,b as a,n as w,t as C,o as D}from"./index-D0RfOwT4.js";var S=Object.defineProperty,O=Object.getOwnPropertyDescriptor,B=(o,e,s,l)=>{for(var t=l>1?void 0:l?O(e,s):e,i=o.length-1,n;i>=0;i--)(n=o[i])&&(t=(l?n(e,s,t):n(t))||t);return l&&t&&S(e,s,t),t};let d=class extends g{constructor(){super(...arguments);r(this,"original","");r(this,"encoded","什么都没有呢喵~");r(this,"labelStyle","")}encode(){this.original.length<1?this.encoded="什么都没有呢喵~":this.original.endsWith("Σ(っ°Д°;)っ")||this.original.endsWith("_(:з」∠)_")?this.encoded=m(this.original):this.encoded=v(this.original)}copy(){navigator.clipboard.writeText(this.encoded)}focusIn(){this.labelStyle=`transform: translateY(-1.75rem); background: ${u()!="dark"?"#eff1f5":"#1e1e2e"}; color: #ff9ca8;`}focusOut(){this.original.length<1?this.labelStyle="":this.labelStyle=`transform: translateY(-1.75rem); background: ${u()!="dark"?"#eff1f5":"#1e1e2e"};`}};d=B([b({})],d);const P={class:"encodes"};function V(o,e,s,l,t,i){return D(),y("div",P,[c(a("textarea",{"onUpdate:modelValue":e[0]||(e[0]=n=>o.original=n),onChange:e[1]||(e[1]=n=>o.encode()),onKeydown:e[2]||(e[2]=n=>o.encode()),onKeyup:e[3]||(e[3]=n=>o.encode()),onFocusin:e[4]||(e[4]=n=>o.focusIn()),onFocusout:e[5]||(e[5]=n=>o.focusOut())},null,544),[[h,o.original]]),a("label",{class:"meow-label",style:w(o.labelStyle)}," 猫咪要填写在这里 ",4),a("p",null,C(o.encoded),1),a("button",{class:"ripple",onClick:e[6]||(e[6]=n=>o.copy())},"复制")])}const j=$(d,[["render",V]]);export{j as default};
