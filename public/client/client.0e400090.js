function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function r(t){return t()}function o(){return Object.create(null)}function s(t){t.forEach(r)}function a(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e,r,o){return t[1]&&o?n(r.ctx.slice(),t[1](o(e))):r.ctx}function c(t,e,n,r,o,s,a){const i=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(i){const o=l(e,n,r,a);t.p(o,i)}}const f="undefined"!=typeof window;let u=f?()=>window.performance.now():()=>Date.now(),p=f?t=>requestAnimationFrame(t):t;const h=new Set;function m(t){h.forEach(e=>{e.c(t)||(h.delete(e),e.f())}),0!==h.size&&p(m)}function d(t,e){t.appendChild(e)}function $(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode.removeChild(t)}function y(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function _(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function b(t){return document.createTextNode(t)}function w(){return b(" ")}function E(){return b("")}function x(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function S(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function C(t){return Array.from(t.childNodes)}function P(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?_(e):v(e)}function R(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return b(e)}function A(t){return R(t," ")}function L(t,e){e=""+e,t.data!==e&&(t.data=e)}function O(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function j(t,e=document.body){return Array.from(e.querySelectorAll(t))}const k=new Set;let N,z=0;function q(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),o=n.length-r.length;o&&(t.style.animation=r.join(", "),z-=o,z||p(()=>{z||(k.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),k.clear())}))}function B(t){N=t}function U(){if(!N)throw new Error("Function called outside component initialization");return N}const T=[],D=[],I=[],F=[],H=Promise.resolve();let M=!1;function V(t){I.push(t)}let G=!1;const J=new Set;function W(){if(!G){G=!0;do{for(let t=0;t<T.length;t+=1){const e=T[t];B(e),K(e.$$)}for(T.length=0;D.length;)D.pop()();for(let t=0;t<I.length;t+=1){const e=I[t];J.has(e)||(J.add(e),e())}I.length=0}while(T.length);for(;F.length;)F.pop()();M=!1,G=!1,J.clear()}}function K(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(V)}}let Y;function X(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const Q=new Set;let Z;function tt(){Z={r:0,c:[],p:Z}}function et(){Z.r||s(Z.c),Z=Z.p}function nt(t,e){t&&t.i&&(Q.delete(t),t.i(e))}function rt(t,e,n,r){if(t&&t.o){if(Q.has(t))return;Q.add(t),Z.c.push(()=>{Q.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const ot={duration:0};function st(n,r,o){let s,i,l=r(n,o),c=!1,f=0;function d(){s&&q(n,s)}function $(){const{delay:r=0,duration:o=300,easing:a=e,tick:$=t,css:g}=l||ot;g&&(s=function(t,e,n,r,o,s,a,i=0){const l=16.666/r;let c="{\n";for(let t=0;t<=1;t+=l){const r=e+(n-e)*s(t);c+=100*t+`%{${a(r,1-r)}}\n`}const f=c+`100% {${a(n,1-n)}}\n}`,u=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(f)}_${i}`,p=t.ownerDocument;k.add(p);const h=p.__svelte_stylesheet||(p.__svelte_stylesheet=p.head.appendChild(v("style")).sheet),m=p.__svelte_rules||(p.__svelte_rules={});m[u]||(m[u]=!0,h.insertRule(`@keyframes ${u} ${f}`,h.cssRules.length));const d=t.style.animation||"";return t.style.animation=`${d?d+", ":""}${u} ${r}ms linear ${o}ms 1 both`,z+=1,u}(n,0,1,o,r,a,g,f++)),$(0,1);const y=u()+r,_=y+o;i&&i.abort(),c=!0,V(()=>X(n,!0,"start")),i=function(t){let e;return 0===h.size&&p(m),{promise:new Promise(n=>{h.add(e={c:t,f:n})}),abort(){h.delete(e)}}}(t=>{if(c){if(t>=_)return $(1,0),X(n,!0,"end"),d(),c=!1;if(t>=y){const e=a((t-y)/o);$(e,1-e)}}return c})}let g=!1;return{start(){g||(q(n),a(l)?(l=l(),(Y||(Y=Promise.resolve(),Y.then(()=>{Y=null})),Y).then($)):$())},invalidate(){g=!1},end(){c&&(d(),c=!1)}}}function at(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],i=e[s];if(i){for(const t in a)t in i||(r[t]=1);for(const t in i)o[t]||(n[t]=i[t],o[t]=1);t[s]=i}else for(const t in a)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function it(t){return"object"==typeof t&&null!==t?t:{}}function lt(t){t&&t.c()}function ct(t,e){t&&t.l(e)}function ft(t,e,n){const{fragment:o,on_mount:i,on_destroy:l,after_update:c}=t.$$;o&&o.m(e,n),V(()=>{const e=i.map(r).filter(a);l?l.push(...e):s(e),t.$$.on_mount=[]}),c.forEach(V)}function ut(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function pt(t,e){-1===t.$$.dirty[0]&&(T.push(t),M||(M=!0,H.then(W)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ht(e,n,r,a,i,l,c=[-1]){const f=N;B(e);const u=n.props||{},p=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:o(),dirty:c};let h=!1;if(p.ctx=r?r(e,u,(t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&i(p.ctx[t],p.ctx[t]=o)&&(p.bound[t]&&p.bound[t](o),h&&pt(e,t)),n}):[],p.update(),h=!0,s(p.before_update),p.fragment=!!a&&a(p.ctx),n.target){if(n.hydrate){const t=C(n.target);p.fragment&&p.fragment.l(t),t.forEach(g)}else p.fragment&&p.fragment.c();n.intro&&nt(e.$$.fragment),ft(e,n.target,n.anchor),W()}B(f)}class mt{$destroy(){ut(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const dt=[];function $t(e,n=t){let r;const o=[];function s(t){if(i(e,t)&&(e=t,r)){const t=!dt.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),dt.push(n,e)}if(t){for(let t=0;t<dt.length;t+=2)dt[t][0](dt[t+1]);dt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,i=t){const l=[a,i];return o.push(l),1===o.length&&(r=n(s)||t),a(e),()=>{const t=o.indexOf(l);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const gt={},yt=()=>({});function vt(t){const e=t-1;return e*e*e+1}function _t(t){const e=Math.cos(t*Math.PI*.5);return Math.abs(e)<1e-14?1:1-e}function bt(t,{delay:e=0,duration:n=400,easing:r=vt}){const o=getComputedStyle(t),s=+o.opacity,a=parseFloat(o.height),i=parseFloat(o.paddingTop),l=parseFloat(o.paddingBottom),c=parseFloat(o.marginTop),f=parseFloat(o.marginBottom),u=parseFloat(o.borderTopWidth),p=parseFloat(o.borderBottomWidth);return{delay:e,duration:n,easing:r,css:t=>`overflow: hidden;opacity: ${Math.min(20*t,1)*s};height: ${t*a}px;padding-top: ${t*i}px;padding-bottom: ${t*l}px;margin-top: ${t*c}px;margin-bottom: ${t*f}px;border-top-width: ${t*u}px;border-bottom-width: ${t*p}px;`}}const wt=$t(!1);function Et(e){let n,r,o,a,i,l,c,f,u;return{c(){n=v("li"),r=v("a"),o=v("img"),i=w(),l=v("a"),c=b(e[0]),this.h()},l(t){n=P(t,"LI",{class:!0});var s=C(n);r=P(s,"A",{href:!0});var a=C(r);o=P(a,"IMG",{src:!0,class:!0}),a.forEach(g),i=A(s),l=P(s,"A",{href:!0,class:!0});var f=C(l);c=R(f,e[0]),f.forEach(g),s.forEach(g),this.h()},h(){o.src!==(a="RidgeLogo.svg")&&S(o,"src","RidgeLogo.svg"),S(o,"class","svelte-1ffhurv"),S(r,"href","/"),S(l,"href","/"),S(l,"class","title svelte-1ffhurv"),S(n,"class","svelte-1ffhurv")},m(t,s){$(t,n,s),d(n,r),d(r,o),d(n,i),d(n,l),d(l,c),f||(u=[x(r,"click",e[1]),x(l,"click",e[1])],f=!0)},p(t,[e]){1&e&&L(c,t[0])},i:t,o:t,d(t){t&&g(n),f=!1,s(u)}}}function xt(t,e,n){let{title:r=""}=e;return t.$set=t=>{"title"in t&&n(0,r=t.title)},[r,function(){wt.set(!1)}]}class St extends mt{constructor(t){super(),ht(this,t,xt,Et,i,{title:0})}}function Ct(e){let n,r,o,s,a;return{c(){n=v("li"),r=v("a"),o=b(e[1]),s=w(),a=b(e[0]),this.h()},l(t){n=P(t,"LI",{class:!0});var i=C(n);r=P(i,"A",{href:!0,class:!0});var l=C(r);o=R(l,e[1]),s=A(l),a=R(l,e[0]),l.forEach(g),i.forEach(g),this.h()},h(){S(r,"href",e[2]),S(r,"class","svelte-r5nrh7"),S(n,"class","svelte-r5nrh7")},m(t,e){$(t,n,e),d(n,r),d(r,o),d(r,s),d(r,a)},p(t,[e]){2&e&&L(o,t[1]),1&e&&L(a,t[0]),4&e&&S(r,"href",t[2])},i:t,o:t,d(t){t&&g(n)}}}function Pt(t,e,n){let{title:r=""}=e,{icon:o=""}=e,{route:s}=e;return t.$set=t=>{"title"in t&&n(0,r=t.title),"icon"in t&&n(1,o=t.icon),"route"in t&&n(2,s=t.route)},[r,o,s]}class Rt extends mt{constructor(t){super(),ht(this,t,Pt,Ct,i,{title:0,icon:1,route:2})}}function At(t){let e,n,r,o;function s(t,e){return"string"==typeof t[8][4]?Ot:Lt}let a=s(t),i=a(t);return{c(){e=_("svg"),n=_("g"),r=_("g"),i.c(),this.h()},l(t){e=P(t,"svg",{id:!0,class:!0,style:!0,viewBox:!0,"aria-hidden":!0,role:!0,xmlns:!0},1);var o=C(e);n=P(o,"g",{transform:!0},1);var s=C(n);r=P(s,"g",{transform:!0},1);var a=C(r);i.l(a),a.forEach(g),s.forEach(g),o.forEach(g),this.h()},h(){S(r,"transform",t[10]),S(n,"transform","translate(256 256)"),S(e,"id",t[1]),S(e,"class",t[0]),S(e,"style",t[9]),S(e,"viewBox",o=`0 0 ${t[8][0]} ${t[8][1]}`),S(e,"aria-hidden","true"),S(e,"role","img"),S(e,"xmlns","http://www.w3.org/2000/svg")},m(t,o){$(t,e,o),d(e,n),d(n,r),i.m(r,null)},p(t,n){a===(a=s(t))&&i?i.p(t,n):(i.d(1),i=a(t),i&&(i.c(),i.m(r,null))),1024&n&&S(r,"transform",t[10]),2&n&&S(e,"id",t[1]),1&n&&S(e,"class",t[0]),512&n&&S(e,"style",t[9]),256&n&&o!==(o=`0 0 ${t[8][0]} ${t[8][1]}`)&&S(e,"viewBox",o)},d(t){t&&g(e),i.d()}}}function Lt(t){let e,n,r,o,s,a,i,l;return{c(){e=_("path"),s=_("path"),this.h()},l(t){e=P(t,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0},1),C(e).forEach(g),s=P(t,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0},1),C(s).forEach(g),this.h()},h(){S(e,"d",n=t[8][4][0]),S(e,"fill",r=t[4]||t[2]||"currentColor"),S(e,"fill-opacity",o=0!=t[7]?t[5]:t[6]),S(e,"transform","translate(-256 -256)"),S(s,"d",a=t[8][4][1]),S(s,"fill",i=t[3]||t[2]||"currentColor"),S(s,"fill-opacity",l=0!=t[7]?t[6]:t[5]),S(s,"transform","translate(-256 -256)")},m(t,n){$(t,e,n),$(t,s,n)},p(t,c){256&c&&n!==(n=t[8][4][0])&&S(e,"d",n),20&c&&r!==(r=t[4]||t[2]||"currentColor")&&S(e,"fill",r),224&c&&o!==(o=0!=t[7]?t[5]:t[6])&&S(e,"fill-opacity",o),256&c&&a!==(a=t[8][4][1])&&S(s,"d",a),12&c&&i!==(i=t[3]||t[2]||"currentColor")&&S(s,"fill",i),224&c&&l!==(l=0!=t[7]?t[6]:t[5])&&S(s,"fill-opacity",l)},d(t){t&&g(e),t&&g(s)}}}function Ot(t){let e,n,r;return{c(){e=_("path"),this.h()},l(t){e=P(t,"path",{d:!0,fill:!0,transform:!0},1),C(e).forEach(g),this.h()},h(){S(e,"d",n=t[8][4]),S(e,"fill",r=t[2]||t[3]||"currentColor"),S(e,"transform","translate(-256 -256)")},m(t,n){$(t,e,n)},p(t,o){256&o&&n!==(n=t[8][4])&&S(e,"d",n),12&o&&r!==(r=t[2]||t[3]||"currentColor")&&S(e,"fill",r)},d(t){t&&g(e)}}}function jt(e){let n,r=e[8][4]&&At(e);return{c(){r&&r.c(),n=E()},l(t){r&&r.l(t),n=E()},m(t,e){r&&r.m(t,e),$(t,n,e)},p(t,[e]){t[8][4]?r?r.p(t,e):(r=At(t),r.c(),r.m(n.parentNode,n)):r&&(r.d(1),r=null)},i:t,o:t,d(t){r&&r.d(t),t&&g(n)}}}function kt(t,e,n){let r,o,s,{class:a=""}=e,{id:i=""}=e,{style:l=""}=e,{icon:c}=e,{fw:f=!1}=e,{flip:u=!1}=e,{pull:p=!1}=e,{rotate:h=!1}=e,{size:m=!1}=e,{color:d=""}=e,{primaryColor:$=""}=e,{secondaryColor:g=""}=e,{primaryOpacity:y=1}=e,{secondaryOpacity:v=.4}=e,{swapOpacity:_=!1}=e;return t.$set=t=>{"class"in t&&n(0,a=t.class),"id"in t&&n(1,i=t.id),"style"in t&&n(11,l=t.style),"icon"in t&&n(12,c=t.icon),"fw"in t&&n(13,f=t.fw),"flip"in t&&n(14,u=t.flip),"pull"in t&&n(15,p=t.pull),"rotate"in t&&n(16,h=t.rotate),"size"in t&&n(17,m=t.size),"color"in t&&n(2,d=t.color),"primaryColor"in t&&n(3,$=t.primaryColor),"secondaryColor"in t&&n(4,g=t.secondaryColor),"primaryOpacity"in t&&n(5,y=t.primaryOpacity),"secondaryOpacity"in t&&n(6,v=t.secondaryOpacity),"swapOpacity"in t&&n(7,_=t.swapOpacity)},t.$$.update=()=>{if(4096&t.$$.dirty&&n(8,r=c&&c.icon||[0,0,"",[],""]),174080&t.$$.dirty){let t,e;const r="1em";let s,a,i,c="-.125em";const u="visible";f&&(i="center",e="1.25em"),p&&(t=p),m&&("lg"==m?(a="1.33333em",s=".75em",c="-.225em"):a="xs"==m?".75em":"sm"==m?".875em":m.replace("x","em"));const h={float:t,width:e,height:r,"line-height":s,"font-size":a,"text-align":i,"vertical-align":c,overflow:u};let d="";for(const t in h)h[t]&&(d+=`${t}:${h[t]};`);n(9,o=d+l)}if(81920&t.$$.dirty){let t="";if(u){let e=1,n=1;"horizontal"==u?e=-1:"vertical"==u?n=-1:e=n=-1,t+=` scale(${e} ${n})`}h&&(t+=` rotate(${h} 0 0)`),n(10,s=t)}},[a,i,d,$,g,y,v,_,r,o,s,l,c,f,u,p,h,m]}class Nt extends mt{constructor(t){super(),ht(this,t,kt,jt,i,{class:0,id:1,style:11,icon:12,fw:13,flip:14,pull:15,rotate:16,size:17,color:2,primaryColor:3,secondaryColor:4,primaryOpacity:5,secondaryOpacity:6,swapOpacity:7})}}var zt={prefix:"fas",iconName:"bars",icon:[448,512,[],"f0c9","M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"]},qt={prefix:"fas",iconName:"phone",icon:[512,512,[],"f095","M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"]};function Bt(e){let n,r,o,s,a;return{c(){n=v("a"),r=v("button"),o=b(e[0]),this.h()},l(t){n=P(t,"A",{href:!0,class:!0});var s=C(n);r=P(s,"BUTTON",{class:!0});var a=C(r);o=R(a,e[0]),a.forEach(g),s.forEach(g),this.h()},h(){S(r,"class","svelte-1vyq8k1"),S(n,"href",e[1]),S(n,"class","svelte-1vyq8k1")},m(t,i){$(t,n,i),d(n,r),d(r,o),s||(a=x(r,"click",e[2]),s=!0)},p(t,[e]){1&e&&L(o,t[0]),2&e&&S(n,"href",t[1])},i:t,o:t,d(t){t&&g(n),s=!1,a()}}}function Ut(t,e,n){let{title:r=""}=e,{route:o}=e;return t.$set=t=>{"title"in t&&n(0,r=t.title),"route"in t&&n(1,o=t.route)},[r,o,function(){wt.update(t=>!t)}]}class Tt extends mt{constructor(t){super(),ht(this,t,Ut,Bt,i,{title:0,route:1})}}function Dt(e){let n,r,o,s,a,i;return o=new Nt({props:{icon:zt,size:"2x"}}),{c(){n=v("li"),r=v("button"),lt(o.$$.fragment),this.h()},l(t){n=P(t,"LI",{class:!0});var e=C(n);r=P(e,"BUTTON",{class:!0});var s=C(r);ct(o.$$.fragment,s),s.forEach(g),e.forEach(g),this.h()},h(){S(r,"class","svelte-1b90z3"),S(n,"class","svelte-1b90z3")},m(t,l){$(t,n,l),d(n,r),ft(o,r,null),s=!0,a||(i=x(r,"click",e[1]),a=!0)},p:t,i(t){s||(nt(o.$$.fragment,t),s=!0)},o(t){rt(o.$$.fragment,t),s=!1},d(t){t&&g(n),ut(o),a=!1,i()}}}function It(e){let n,r,o,s,a,i,l,c,f,u,p,h,m,y,_,b,E,R;return o=new Nt({props:{icon:zt,size:"2x"}}),i=new Tt({props:{title:"Staff",route:"/staff",onClick:e[1]}}),c=new Tt({props:{title:"Giving",route:"/giving",onClick:e[1]}}),u=new Tt({props:{title:"Sermons",route:"/sermons",onClick:e[1]}}),h=new Tt({props:{title:"Blog",route:"/blog",onClick:e[1]}}),y=new Tt({props:{title:"Statement of Faith",route:"/statement",onClick:e[1]}}),{c(){n=v("li"),r=v("button"),lt(o.$$.fragment),s=w(),a=v("div"),lt(i.$$.fragment),l=w(),lt(c.$$.fragment),f=w(),lt(u.$$.fragment),p=w(),lt(h.$$.fragment),m=w(),lt(y.$$.fragment),this.h()},l(t){n=P(t,"LI",{class:!0});var e=C(n);r=P(e,"BUTTON",{class:!0});var d=C(r);ct(o.$$.fragment,d),d.forEach(g),s=A(e),a=P(e,"DIV",{class:!0});var $=C(a);ct(i.$$.fragment,$),l=A($),ct(c.$$.fragment,$),f=A($),ct(u.$$.fragment,$),p=A($),ct(h.$$.fragment,$),m=A($),ct(y.$$.fragment,$),$.forEach(g),e.forEach(g),this.h()},h(){S(r,"class","svelte-1b90z3"),S(a,"class","svelte-1b90z3"),S(n,"class","svelte-1b90z3")},m(t,g){$(t,n,g),d(n,r),ft(o,r,null),d(n,s),d(n,a),ft(i,a,null),d(a,l),ft(c,a,null),d(a,f),ft(u,a,null),d(a,p),ft(h,a,null),d(a,m),ft(y,a,null),b=!0,E||(R=x(r,"click",e[1]),E=!0)},p:t,i(t){b||(nt(o.$$.fragment,t),nt(i.$$.fragment,t),nt(c.$$.fragment,t),nt(u.$$.fragment,t),nt(h.$$.fragment,t),nt(y.$$.fragment,t),_||V(()=>{_=st(a,bt,{duration:500,easing:_t}),_.start()}),b=!0)},o(t){rt(o.$$.fragment,t),rt(i.$$.fragment,t),rt(c.$$.fragment,t),rt(u.$$.fragment,t),rt(h.$$.fragment,t),rt(y.$$.fragment,t),b=!1},d(t){t&&g(n),ut(o),ut(i),ut(c),ut(u),ut(h),ut(y),E=!1,R()}}}function Ft(t){let e,n,r,o;const s=[It,Dt],a=[];function i(t,e){return t[0]?0:1}return e=i(t),n=a[e]=s[e](t),{c(){n.c(),r=E()},l(t){n.l(t),r=E()},m(t,n){a[e].m(t,n),$(t,r,n),o=!0},p(t,[o]){let l=e;e=i(t),e===l?a[e].p(t,o):(tt(),rt(a[l],1,1,()=>{a[l]=null}),et(),n=a[e],n||(n=a[e]=s[e](t),n.c()),nt(n,1),n.m(r.parentNode,r))},i(t){o||(nt(n),o=!0)},o(t){rt(n),o=!1},d(t){a[e].d(t),t&&g(r)}}}function Ht(t,e,n){let r=!1;wt.subscribe(t=>{n(0,r=t)});return[r,function(){wt.update(t=>!t)}]}class Mt extends mt{constructor(t){super(),ht(this,t,Ht,Ft,i,{})}}function Vt(t){let e,n,r,o,s,a,i,l,c,f,u;return n=new Rt({props:{title:"Staff",route:"/staff"}}),o=new Rt({props:{title:"Giving",route:"/giving"}}),a=new Rt({props:{title:"Sermons",route:"/sermons"}}),l=new Rt({props:{title:"Blog",route:"/blog"}}),f=new Rt({props:{title:"Statement of Faith",route:"/statement"}}),{c(){e=v("nav"),lt(n.$$.fragment),r=w(),lt(o.$$.fragment),s=w(),lt(a.$$.fragment),i=w(),lt(l.$$.fragment),c=w(),lt(f.$$.fragment),this.h()},l(t){e=P(t,"NAV",{class:!0});var u=C(e);ct(n.$$.fragment,u),r=A(u),ct(o.$$.fragment,u),s=A(u),ct(a.$$.fragment,u),i=A(u),ct(l.$$.fragment,u),c=A(u),ct(f.$$.fragment,u),u.forEach(g),this.h()},h(){S(e,"class","svelte-14wk0sy")},m(t,p){$(t,e,p),ft(n,e,null),d(e,r),ft(o,e,null),d(e,s),ft(a,e,null),d(e,i),ft(l,e,null),d(e,c),ft(f,e,null),u=!0},i(t){u||(nt(n.$$.fragment,t),nt(o.$$.fragment,t),nt(a.$$.fragment,t),nt(l.$$.fragment,t),nt(f.$$.fragment,t),u=!0)},o(t){rt(n.$$.fragment,t),rt(o.$$.fragment,t),rt(a.$$.fragment,t),rt(l.$$.fragment,t),rt(f.$$.fragment,t),u=!1},d(t){t&&g(e),ut(n),ut(o),ut(a),ut(l),ut(f)}}}function Gt(t){let e,n,r,o,s;return n=new St({}),o=new Mt({}),{c(){e=v("nav"),lt(n.$$.fragment),r=w(),lt(o.$$.fragment),this.h()},l(t){e=P(t,"NAV",{class:!0});var s=C(e);ct(n.$$.fragment,s),r=A(s),ct(o.$$.fragment,s),s.forEach(g),this.h()},h(){S(e,"class","svelte-14wk0sy")},m(t,a){$(t,e,a),ft(n,e,null),d(e,r),ft(o,e,null),s=!0},i(t){s||(nt(n.$$.fragment,t),nt(o.$$.fragment,t),s=!0)},o(t){rt(n.$$.fragment,t),rt(o.$$.fragment,t),s=!1},d(t){t&&g(e),ut(n),ut(o)}}}function Jt(t){let e,n,r,o,s,a;V(t[2]);const i=[Gt,Vt],l=[];function c(t,e){return t[1]?0:1}return e=c(t),n=l[e]=i[e](t),{c(){n.c(),r=E()},l(t){n.l(t),r=E()},m(n,i){l[e].m(n,i),$(n,r,i),o=!0,s||(a=x(window,"resize",t[2]),s=!0)},p(t,[o]){let s=e;e=c(t),e!==s&&(tt(),rt(l[s],1,1,()=>{l[s]=null}),et(),n=l[e],n||(n=l[e]=i[e](t),n.c()),nt(n,1),n.m(r.parentNode,r))},i(t){o||(nt(n),o=!0)},o(t){rt(n),o=!1},d(t){l[e].d(t),t&&g(r),s=!1,a()}}}function Wt(t,e,n){let r,o=!1;return t.$$.update=()=>{1&t.$$.dirty&&n(1,o=r<450)},[r,o,function(){n(0,r=window.innerWidth)}]}class Kt extends mt{constructor(t){super(),ht(this,t,Wt,Jt,i,{})}}function Yt(t){let e,n,r,o;e=new Kt({});const s=t[1].default,a=function(t,e,n,r){if(t){const o=l(t,e,n,r);return t[0](o)}}(s,t,t[0],null);return{c(){lt(e.$$.fragment),n=w(),r=v("main"),a&&a.c(),this.h()},l(t){ct(e.$$.fragment,t),n=A(t),r=P(t,"MAIN",{class:!0});var o=C(r);a&&a.l(o),o.forEach(g),this.h()},h(){S(r,"class","svelte-14wfx85")},m(t,s){ft(e,t,s),$(t,n,s),$(t,r,s),a&&a.m(r,null),o=!0},p(t,[e]){a&&a.p&&1&e&&c(a,s,t,t[0],e,null,null)},i(t){o||(nt(e.$$.fragment,t),nt(a,t),o=!0)},o(t){rt(e.$$.fragment,t),rt(a,t),o=!1},d(t){ut(e,t),t&&g(n),t&&g(r),a&&a.d(t)}}}function Xt(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class Qt extends mt{constructor(t){super(),ht(this,t,Xt,Yt,i,{})}}function Zt(t){let e,n,r=t[1].stack+"";return{c(){e=v("pre"),n=b(r)},l(t){e=P(t,"PRE",{});var o=C(e);n=R(o,r),o.forEach(g)},m(t,r){$(t,e,r),d(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&L(n,r)},d(t){t&&g(e)}}}function te(e){let n,r,o,s,a,i,l,c,f,u=e[1].message+"";document.title=n=e[0];let p=e[2]&&e[1].stack&&Zt(e);return{c(){r=w(),o=v("h1"),s=b(e[0]),a=w(),i=v("p"),l=b(u),c=w(),p&&p.c(),f=E(),this.h()},l(t){j('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(g),r=A(t),o=P(t,"H1",{class:!0});var n=C(o);s=R(n,e[0]),n.forEach(g),a=A(t),i=P(t,"P",{class:!0});var h=C(i);l=R(h,u),h.forEach(g),c=A(t),p&&p.l(t),f=E(),this.h()},h(){S(o,"class","svelte-8od9u6"),S(i,"class","svelte-8od9u6")},m(t,e){$(t,r,e),$(t,o,e),d(o,s),$(t,a,e),$(t,i,e),d(i,l),$(t,c,e),p&&p.m(t,e),$(t,f,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&L(s,t[0]),2&e&&u!==(u=t[1].message+"")&&L(l,u),t[2]&&t[1].stack?p?p.p(t,e):(p=Zt(t),p.c(),p.m(f.parentNode,f)):p&&(p.d(1),p=null)},i:t,o:t,d(t){t&&g(r),t&&g(o),t&&g(a),t&&g(i),t&&g(c),p&&p.d(t),t&&g(f)}}}function ee(t,e,n){let{status:r}=e,{error:o}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,!1]}class ne extends mt{constructor(t){super(),ht(this,t,ee,te,i,{status:0,error:1})}}function re(t){let e,r,o;const s=[t[4].props];var a=t[4].component;function i(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return a&&(e=new a(i())),{c(){e&&lt(e.$$.fragment),r=E()},l(t){e&&ct(e.$$.fragment,t),r=E()},m(t,n){e&&ft(e,t,n),$(t,r,n),o=!0},p(t,n){const o=16&n?at(s,[it(t[4].props)]):{};if(a!==(a=t[4].component)){if(e){tt();const t=e;rt(t.$$.fragment,1,0,()=>{ut(t,1)}),et()}a?(e=new a(i()),lt(e.$$.fragment),nt(e.$$.fragment,1),ft(e,r.parentNode,r)):e=null}else a&&e.$set(o)},i(t){o||(e&&nt(e.$$.fragment,t),o=!0)},o(t){e&&rt(e.$$.fragment,t),o=!1},d(t){t&&g(r),e&&ut(e,t)}}}function oe(t){let e,n;return e=new ne({props:{error:t[0],status:t[1]}}),{c(){lt(e.$$.fragment)},l(t){ct(e.$$.fragment,t)},m(t,r){ft(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(nt(e.$$.fragment,t),n=!0)},o(t){rt(e.$$.fragment,t),n=!1},d(t){ut(e,t)}}}function se(t){let e,n,r,o;const s=[oe,re],a=[];function i(t,e){return t[0]?0:1}return e=i(t),n=a[e]=s[e](t),{c(){n.c(),r=E()},l(t){n.l(t),r=E()},m(t,n){a[e].m(t,n),$(t,r,n),o=!0},p(t,o){let l=e;e=i(t),e===l?a[e].p(t,o):(tt(),rt(a[l],1,1,()=>{a[l]=null}),et(),n=a[e],n||(n=a[e]=s[e](t),n.c()),nt(n,1),n.m(r.parentNode,r))},i(t){o||(nt(n),o=!0)},o(t){rt(n),o=!1},d(t){a[e].d(t),t&&g(r)}}}function ae(t){let e,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[se]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=n(s,o[t]);return e=new Qt({props:s}),{c(){lt(e.$$.fragment)},l(t){ct(e.$$.fragment,t)},m(t,n){ft(e,t,n),r=!0},p(t,[n]){const r=12&n?at(o,[4&n&&{segment:t[2][0]},8&n&&it(t[3].props)]):{};147&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){r||(nt(e.$$.fragment,t),r=!0)},o(t){rt(e.$$.fragment,t),r=!1},d(t){ut(e,t)}}}function ie(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:a}=e,{level0:i}=e,{level1:l=null}=e,{notify:c}=e;var f,u,p;return f=c,U().$$.after_update.push(f),u=gt,p=r,U().$$.context.set(u,p),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,i=t.level0),"level1"in t&&n(4,l=t.level1),"notify"in t&&n(6,c=t.notify)},[o,s,a,i,l,r,c]}class le extends mt{constructor(t){super(),ht(this,t,ie,ae,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const ce=[/^\/blog\.json$/,/^\/blog\/([^\/]+?)\.json$/],fe=[{js:()=>import("./index.76185d6b.js"),css:[]},{js:()=>import("./statement.3cda4576.js"),css:[]},{js:()=>import("./sermons.f14500a2.js"),css:[]},{js:()=>import("./giving.6982a50c.js"),css:[]},{js:()=>import("./about.7b34f46f.js"),css:[]},{js:()=>import("./staff.09eb22ed.js"),css:[]},{js:()=>import("./index.e7ea3ef1.js"),css:[]},{js:()=>import("./[slug].8589a43a.js"),css:[]}],ue=(pe=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/statement\/?$/,parts:[{i:1}]},{pattern:/^\/sermons\/?$/,parts:[{i:2}]},{pattern:/^\/giving\/?$/,parts:[{i:3}]},{pattern:/^\/about\/?$/,parts:[{i:4}]},{pattern:/^\/staff\/?$/,parts:[{i:5}]},{pattern:/^\/blog\/?$/,parts:[{i:6}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:7,params:t=>({slug:pe(t[1])})}]}]);var pe;const he="undefined"!=typeof __SAPPER__&&__SAPPER__;let me,de,$e,ge=!1,ye=[],ve="{}";const _e={page:function(t){const e=$t(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:$t(null),session:$t(he&&he.session)};let be,we;_e.session.subscribe(async t=>{if(be=t,!ge)return;we=!0;const e=Le(new URL(location.href)),n=de={},{redirect:r,props:o,branch:s}=await Ne(e);n===de&&await ke(r,s,o,e.page)});let Ee,xe=null;let Se,Ce=1;const Pe="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Re={};function Ae(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Le(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(he.baseUrl))return null;let e=t.pathname.slice(he.baseUrl.length);if(""===e&&(e="/"),!ce.some(t=>t.test(e)))for(let n=0;n<ue.length;n+=1){const r=ue[n],o=r.pattern.exec(e);if(o){const n=Ae(t.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},i={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:o,page:i}}}}function Oe(){return{x:pageXOffset,y:pageYOffset}}async function je(t,e,n,r){if(e)Se=e;else{const t=Oe();Re[Se]=t,e=Se=++Ce,Re[Se]=n?t:{x:0,y:0}}Se=e,me&&_e.preloading.set(!0);const o=xe&&xe.href===t.href?xe.promise:Ne(t);xe=null;const s=de={},{redirect:a,props:i,branch:l}=await o;if(s===de&&(await ke(a,l,i,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Re[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}Re[Se]=t,t&&scrollTo(t.x,t.y)}}async function ke(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Le(new URL(t,document.baseURI));return n?(Pe[e.replaceState?"replaceState":"pushState"]({id:Se},"",t),je(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(_e.page.set(r),_e.preloading.set(!1),me)me.$set(n);else{n.stores={page:{subscribe:_e.page.subscribe},preloading:{subscribe:_e.preloading.subscribe},session:_e.session},n.level0={props:await $e},n.notify=_e.page.notify;const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)qe(t.nextSibling);qe(t),qe(e)}me=new le({target:Ee,props:n,hydrate:!0})}ye=e,ve=JSON.stringify(r.query),ge=!0,we=!1}async function Ne(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};let i;$e||($e=he.preloaded[0]||yt.call(a,{host:n.host,path:n.path,query:n.query,params:{}},be));let l=1;try{const o=JSON.stringify(n.query),c=e.pattern.exec(n.path);let f=!1;i=await Promise.all(e.parts.map(async(e,i)=>{const u=r[i];if(function(t,e,n,r){if(r!==ve)return!0;const o=ye[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(i,u,c,o)&&(f=!0),s.segments[l]=r[i+1],!e)return{segment:u};const p=l++;if(!we&&!f&&ye[i]&&ye[i].part===e.i)return ye[i];f=!1;const{default:h,preload:m}=await function(t){const e="string"==typeof t.css?[]:t.css.map(ze);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(fe[e.i]);let d;return d=ge||!he.preloaded[i+1]?m?await m.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},be):{}:he.preloaded[i+1],s["level"+p]={component:h,props:d,segment:u,match:c,part:e.i}}))}catch(t){s.error=t,s.status=500,i=[]}return{redirect:o,props:s,branch:i}}function ze(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function qe(t){t.parentNode.removeChild(t)}function Be(t){const e=Le(new URL(t,document.baseURI));if(e)return xe&&t===xe.href||function(t,e){xe={href:t,promise:e}}(t,Ne(e)),xe.promise}let Ue;function Te(t){clearTimeout(Ue),Ue=setTimeout(()=>{De(t)},20)}function De(t){const e=Fe(t.target);e&&"prefetch"===e.rel&&Be(e.href)}function Ie(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=Fe(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Le(o);if(s){je(s,null,e.hasAttribute("sapper-noscroll"),o.hash),t.preventDefault(),Pe.pushState({id:Se},"",o.href)}}function Fe(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function He(t){if(Re[Se]=Oe(),t.state){const e=Le(new URL(location.href));e?je(e,t.state.id):location.href=location.href}else Ce=Ce+1,function(t){Se=t}(Ce),Pe.replaceState({id:Se},"",location.href)}var Me;Me={target:document.querySelector("#sapper")},"scrollRestoration"in Pe&&(Pe.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Pe.scrollRestoration="auto"}),addEventListener("load",()=>{Pe.scrollRestoration="manual"}),function(t){Ee=t}(Me.target),addEventListener("click",Ie),addEventListener("popstate",He),addEventListener("touchstart",De),addEventListener("mousemove",Te),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Pe.replaceState({id:Ce},"",e);const n=new URL(location.href);if(he.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:a,error:i}=he;$e||($e=s&&s[0]),ke(null,[],{error:i,status:a,session:o,level0:{props:$e},level1:{props:{status:a,error:i},component:ne},segments:s},{host:e,path:n,query:Ae(r),params:{}})}();const r=Le(n);return r?je(r,Ce,!0,t):void 0});export{it as A,y as B,Nt as F,mt as S,w as a,C as b,P as c,R as d,v as e,g as f,A as g,S as h,ht as i,O as j,$ as k,d as l,qt as m,t as n,lt as o,ct as p,ft as q,nt as r,i as s,b as t,rt as u,ut as v,j as w,L as x,n as y,at as z};
