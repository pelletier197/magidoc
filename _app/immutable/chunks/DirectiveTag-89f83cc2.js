import{S as j,i as y,s as L,e as d,b as $,f as p,t as _,h as m,w as D,x as A,y as S,z as b,k as O,l as E,m as V,n as v,ac as g,q as h,r as T,u as x}from"./paths-a3cc1d9b.js";import{s as B,k as I,v as U,K as l}from"./model-d633fb0f.js";import{j as w}from"./_commonjsHelpers-4f8bb0da.js";import{T as q}from"./PreviousNextPage-081fa7f7.js";import{a as C}from"./ArgsList-5f929627.js";function J(s){let n,a;return n=new q({props:{type:"blue",$$slots:{default:[z]},$$scope:{ctx:s}}}),{c(){D(n.$$.fragment)},l(i){A(n.$$.fragment,i)},m(i,e){S(n,i,e),a=!0},p(i,e){const t={};e&67&&(t.$$scope={dirty:e,ctx:i}),n.$set(t)},i(i){a||(p(n.$$.fragment,i),a=!0)},o(i){_(n.$$.fragment,i),a=!1},d(i){b(n,i)}}}function K(s){let n,a=s[0].name.value+"",i;return{c(){n=h("@"),i=h(a)},l(e){n=T(e,"@"),i=T(e,a)},m(e,t){$(e,n,t),$(e,i,t)},p(e,t){t&1&&a!==(a=e[0].name.value+"")&&x(i,a)},d(e){e&&m(n),e&&m(i)}}}function z(s){let n,a,i,e;return a=new C({props:{tooltipText:s[1],direction:"top",align:"center",$$slots:{default:[K]},$$scope:{ctx:s}}}),{c(){n=O("a"),D(a.$$.fragment),this.h()},l(t){n=E(t,"A",{href:!0});var r=V(n);A(a.$$.fragment,r),r.forEach(m),this.h()},h(){v(n,"href",i=w(g,`/directives/${s[0].name.value}`))},m(t,r){$(t,n,r),S(a,n,null),e=!0},p(t,r){const c={};r&2&&(c.tooltipText=t[1]),r&65&&(c.$$scope={dirty:r,ctx:t}),a.$set(c),(!e||r&1&&i!==(i=w(g,`/directives/${t[0].name.value}`)))&&v(n,"href",i)},i(t){e||(p(a.$$.fragment,t),e=!0)},o(t){_(a.$$.fragment,t),e=!1},d(t){t&&m(n),b(a)}}}function F(s){let n=s[2](),a,i,e=n&&J(s);return{c(){e&&e.c(),a=d()},l(t){e&&e.l(t),a=d()},m(t,r){e&&e.m(t,r),$(t,a,r),i=!0},p(t,[r]){n&&e.p(t,r)},i(t){i||(p(e),i=!0)},o(t){_(e),i=!1},d(t){e&&e.d(t),t&&m(a)}}}function G(s,n,a){let{directive:i}=n,e,t;function r(o){switch(o.kind){case l.INT:case l.BOOLEAN:case l.FLOAT:return String(o.value);case l.STRING:case l.ENUM:return`"${o.value}"`;case l.NULL:return"null";case l.LIST:return`[${o.values.map(r).join(", ")}]`;case l.OBJECT:return`{${o.fields.map(u=>`${u.name.value}: ${r(u.value)}`).join(", ")}}`}}function c(){return!!e&&U(e)}function k(o,u){const f=u.find(N=>N.name.value===o.name);return f?r(f.value):JSON.stringify(o.defaultValue)}return s.$$set=o=>{"directive"in o&&a(0,i=o.directive)},s.$$.update=()=>{if(s.$$.dirty&1&&a(3,e=B.getDirective(i.name.value)),s.$$.dirty&9){let o=`@${i.name.value}`;const u=e?I(e):[];u.length>0&&(o+=`(${u.map(f=>`${f.name}: ${k(f,i.arguments||[])}`).join(", ")})`),a(1,t=o.trim())}},[i,t,c,e]}class W extends j{constructor(n){super(),y(this,n,G,F,L,{directive:0})}}export{W as D};