import{S as t,i as s,s as a,a as e,e as n,t as o,w as i,f as r,g as l,c,b as u,d as h,h as f,k as p,l as d,x as m,n as g}from"./client.0e400090.js";function v(t){let s,a,v,x,j,w,y=t[0].title+"",E=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),v=n("h1"),x=o(y),j=e(),w=n("div"),this.h()},l(t){i('[data-svelte="svelte-1uty71u"]',document.head).forEach(r),a=l(t),v=c(t,"H1",{});var s=u(v);x=h(s,y),s.forEach(r),j=l(t),w=c(t,"DIV",{class:!0}),u(w).forEach(r),this.h()},h(){f(w,"class","content svelte-gnxal1")},m(t,s){p(t,a,s),p(t,v,s),d(v,x),p(t,j,s),p(t,w,s),w.innerHTML=E},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&y!==(y=t[0].title+"")&&m(x,y),1&a&&E!==(E=t[0].html+"")&&(w.innerHTML=E)},i:g,o:g,d(t){t&&r(a),t&&r(v),t&&r(j),t&&r(w)}}}async function x({params:t,query:s}){const a=await this.fetch(`blog/${t.slug}.json`),e=await a.json();if(200===a.status)return{post:e};this.error(a.status,e.message)}function j(t,s,a){let{post:e}=s;return t.$set=t=>{"post"in t&&a(0,e=t.post)},[e]}export default class extends t{constructor(t){super(),s(this,t,j,v,a,{post:0})}}export{x as preload};
