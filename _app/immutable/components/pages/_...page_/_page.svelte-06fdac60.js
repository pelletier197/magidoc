import{S as b,i as P,s as k,a as u,w as g,ae as C,h as m,c as $,x as l,b as _,y as d,f as v,t as w,z as h}from"../../../chunks/paths-ff82050c.js";import{C as S,P as q}from"../../../chunks/PreviousNextPage-3e0a2389.js";function y(n){let s,i,t,r,o,p;return document.title=s=`
    `+(n[0].page.section?`${n[0].page.section} - `:"")+n[0].page.title+`
  `,t=new S({props:{source:n[0].page.content}}),o=new q({props:{page:n[0].page}}),{c(){i=u(),g(t.$$.fragment),r=u(),g(o.$$.fragment)},l(e){C("svelte-52tmna",document.head).forEach(m),i=$(e),l(t.$$.fragment,e),r=$(e),l(o.$$.fragment,e)},m(e,a){_(e,i,a),d(t,e,a),_(e,r,a),d(o,e,a),p=!0},p(e,[a]){(!p||a&1)&&s!==(s=`
    `+(e[0].page.section?`${e[0].page.section} - `:"")+e[0].page.title+`
  `)&&(document.title=s);const f={};a&1&&(f.source=e[0].page.content),t.$set(f);const c={};a&1&&(c.page=e[0].page),o.$set(c)},i(e){p||(v(t.$$.fragment,e),v(o.$$.fragment,e),p=!0)},o(e){w(t.$$.fragment,e),w(o.$$.fragment,e),p=!1},d(e){e&&m(i),h(t,e),e&&m(r),h(o,e)}}}function z(n,s,i){let{data:t}=s;return n.$$set=r=>{"data"in r&&i(0,t=r.data)},[t]}class N extends b{constructor(s){super(),P(this,s,z,y,k,{data:0})}}export{N as default};
