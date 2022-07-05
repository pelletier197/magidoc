import{S as M,i as U,s as V,w as y,x as v,y as k,q as p,o as m,B as T,t as S,h as P,g as b,E as Z,d as g,e as O,k as A,c as j,a as B,m as N,T as F,j as H,l as R,n as C,p as L,a4 as ne,f as se,Q,R as G,C as K,b as re,U as x,z as De,O as ee,P as te,a6 as Ke}from"../../chunks/index-f829e8b7.js";import{T as We,s as Me,r as Ue,x as Ve,v as He,w as Ye,o as qe,A as D,S as fe,B as ae,D as ie,E as ue,_ as q,H as Xe,J as Ze,f as xe}from"../../chunks/pages-972fee21.js";import{A as J,P as et}from"../../chunks/PreviousNextPage-e409d2d3.js";import{D as $e,a as Je,N as Qe,B as tt,A as nt,T as rt,b as lt}from"../../chunks/ArgsList-6c05001b.js";import"../../chunks/paths-1c170a2d.js";function st(f){let e=f[0]()+"",r;return{c(){r=S(e)},l(t){r=P(t,e)},m(t,n){b(t,r,n)},p:Z,d(t){t&&g(r)}}}function ft(f){let e,r;return e=new We({props:{type:"teal",$$slots:{default:[st]},$$scope:{ctx:f}}}),{c(){y(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,n){k(e,t,n),r=!0},p(t,[n]){const s={};n&4&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){m(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function at(f,e,r){let{type:t}=e;function n(){return Me(t)?"Scalar":Ue(t)?"Enum":Ve(t)?"Interface":He(t)?"Union":Ye(t)?"Object":qe(t)?"Input Object":"Unknown"}return f.$$set=s=>{"type"in s&&r(1,t=s.type)},[n,t]}class W extends M{constructor(e){super(),U(this,e,at,ft,V,{type:1})}}function it(f){let e=f[0].name+"",r,t,n,s;return n=new W({props:{type:f[0]}}),{c(){r=S(e),t=A(),y(n.$$.fragment)},l(l){r=P(l,e),t=N(l),v(n.$$.fragment,l)},m(l,i){b(l,r,i),b(l,t,i),k(n,l,i),s=!0},p(l,i){(!s||i&1)&&e!==(e=l[0].name+"")&&H(r,e);const a={};i&1&&(a.type=l[0]),n.$set(a)},i(l){s||(p(n.$$.fragment,l),s=!0)},o(l){m(n.$$.fragment,l),s=!1},d(l){l&&g(r),l&&g(t),T(n,l)}}}function ut(f){let e,r,t,n,s;return r=new D({props:{id:"title",depth:1,$$slots:{default:[it]},$$scope:{ctx:f}}}),n=new J({props:{source:f[0].description}}),{c(){e=O("section"),y(r.$$.fragment),t=A(),y(n.$$.fragment)},l(l){e=j(l,"SECTION",{});var i=B(e);v(r.$$.fragment,i),t=N(i),v(n.$$.fragment,i),i.forEach(g)},m(l,i){b(l,e,i),k(r,e,null),F(e,t),k(n,e,null),s=!0},p(l,[i]){const a={};i&3&&(a.$$scope={dirty:i,ctx:l}),r.$set(a);const $={};i&1&&($.source=l[0].description),n.$set($)},i(l){s||(p(r.$$.fragment,l),p(n.$$.fragment,l),s=!0)},o(l){m(r.$$.fragment,l),m(n.$$.fragment,l),s=!1},d(l){l&&g(e),T(r),T(n)}}}function $t(f,e,r){let{type:t}=e;return f.$$set=n=>{"type"in n&&r(0,t=n.type)},[t]}class ot extends M{constructor(e){super(),U(this,e,$t,ut,V,{type:0})}}function ce(f,e,r){const t=f.slice();return t[1]=e[r],t}function ct(f){let e=f[0].name+"",r,t,n,s;return n=new W({props:{type:f[0]}}),{c(){r=S(e),t=A(),y(n.$$.fragment)},l(l){r=P(l,e),t=N(l),v(n.$$.fragment,l)},m(l,i){b(l,r,i),b(l,t,i),k(n,l,i),s=!0},p(l,i){(!s||i&1)&&e!==(e=l[0].name+"")&&H(r,e);const a={};i&1&&(a.type=l[0]),n.$set(a)},i(l){s||(p(n.$$.fragment,l),s=!0)},o(l){m(n.$$.fragment,l),s=!1},d(l){l&&g(r),l&&g(t),T(n,l)}}}function pt(f){let e;return{c(){e=S("Possible Values")},l(r){e=P(r,"Possible Values")},m(r,t){b(r,e,t)},d(r){r&&g(e)}}}function pe(f){let e,r=f[1].description+"",t;return{c(){e=O("p"),t=S(r)},l(n){e=j(n,"P",{});var s=B(e);t=P(s,r),s.forEach(g)},m(n,s){b(n,e,s),F(e,t)},p(n,s){s&1&&r!==(r=n[1].description+"")&&H(t,r)},d(n){n&&g(e)}}}function mt(f){let e,r,t=f[1].name+"",n,s,l,i,a,$;l=new $e({props:{reason:f[1].deprecationReason}});let u=f[1].description&&pe(f);return{c(){e=O("p"),r=O("span"),n=S(t),s=A(),y(l.$$.fragment),i=A(),u&&u.c(),a=R(),this.h()},l(c){e=j(c,"P",{});var _=B(e);r=j(_,"SPAN",{style:!0});var d=B(r);n=P(d,t),d.forEach(g),s=N(_),v(l.$$.fragment,_),_.forEach(g),i=N(c),u&&u.l(c),a=R(),this.h()},h(){se(r,"font-weight","bold")},m(c,_){b(c,e,_),F(e,r),F(r,n),F(e,s),k(l,e,null),b(c,i,_),u&&u.m(c,_),b(c,a,_),$=!0},p(c,_){(!$||_&1)&&t!==(t=c[1].name+"")&&H(n,t);const d={};_&1&&(d.reason=c[1].deprecationReason),l.$set(d),c[1].description?u?u.p(c,_):(u=pe(c),u.c(),u.m(a.parentNode,a)):u&&(u.d(1),u=null)},i(c){$||(p(l.$$.fragment,c),$=!0)},o(c){m(l.$$.fragment,c),$=!1},d(c){c&&g(e),T(l),c&&g(i),u&&u.d(c),c&&g(a)}}}function gt(f){let e,r,t;return e=new ue({props:{$$slots:{default:[mt]},$$scope:{ctx:f}}}),{c(){y(e.$$.fragment),r=A()},l(n){v(e.$$.fragment,n),r=N(n)},m(n,s){k(e,n,s),b(n,r,s),t=!0},p(n,s){const l={};s&17&&(l.$$scope={dirty:s,ctx:n}),e.$set(l)},i(n){t||(p(e.$$.fragment,n),t=!0)},o(n){m(e.$$.fragment,n),t=!1},d(n){T(e,n),n&&g(r)}}}function me(f){let e,r;return e=new ie({props:{$$slots:{default:[gt]},$$scope:{ctx:f}}}),{c(){y(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,n){k(e,t,n),r=!0},p(t,n){const s={};n&17&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){m(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function _t(f){let e,r,t=f[0].getValues(),n=[];for(let l=0;l<t.length;l+=1)n[l]=me(ce(f,t,l));const s=l=>m(n[l],1,1,()=>{n[l]=null});return{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=R()},l(l){for(let i=0;i<n.length;i+=1)n[i].l(l);e=R()},m(l,i){for(let a=0;a<n.length;a+=1)n[a].m(l,i);b(l,e,i),r=!0},p(l,i){if(i&1){t=l[0].getValues();let a;for(a=0;a<t.length;a+=1){const $=ce(l,t,a);n[a]?(n[a].p($,i),p(n[a],1)):(n[a]=me($),n[a].c(),p(n[a],1),n[a].m(e.parentNode,e))}for(C(),a=t.length;a<n.length;a+=1)s(a);L()}},i(l){if(!r){for(let i=0;i<t.length;i+=1)p(n[i]);r=!0}},o(l){n=n.filter(Boolean);for(let i=0;i<n.length;i+=1)m(n[i]);r=!1},d(l){ne(n,l),l&&g(e)}}}function dt(f){let e,r;return e=new ae({props:{$$slots:{default:[_t]},$$scope:{ctx:f}}}),{c(){y(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,n){k(e,t,n),r=!0},p(t,n){const s={};n&17&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){m(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function ht(f){let e,r,t,n,s,l,i,a,$;return r=new D({props:{id:"title",depth:1,$$slots:{default:[ct]},$$scope:{ctx:f}}}),n=new J({props:{source:f[0].description}}),l=new D({props:{id:"possible-values",depth:2,$$slots:{default:[pt]},$$scope:{ctx:f}}}),a=new fe({props:{condensed:!0,$$slots:{default:[dt]},$$scope:{ctx:f}}}),{c(){e=O("section"),y(r.$$.fragment),t=A(),y(n.$$.fragment),s=A(),y(l.$$.fragment),i=A(),y(a.$$.fragment)},l(u){e=j(u,"SECTION",{});var c=B(e);v(r.$$.fragment,c),t=N(c),v(n.$$.fragment,c),s=N(c),v(l.$$.fragment,c),i=N(c),v(a.$$.fragment,c),c.forEach(g)},m(u,c){b(u,e,c),k(r,e,null),F(e,t),k(n,e,null),F(e,s),k(l,e,null),F(e,i),k(a,e,null),$=!0},p(u,[c]){const _={};c&17&&(_.$$scope={dirty:c,ctx:u}),r.$set(_);const d={};c&1&&(d.source=u[0].description),n.$set(d);const E={};c&16&&(E.$$scope={dirty:c,ctx:u}),l.$set(E);const h={};c&17&&(h.$$scope={dirty:c,ctx:u}),a.$set(h)},i(u){$||(p(r.$$.fragment,u),p(n.$$.fragment,u),p(l.$$.fragment,u),p(a.$$.fragment,u),$=!0)},o(u){m(r.$$.fragment,u),m(n.$$.fragment,u),m(l.$$.fragment,u),m(a.$$.fragment,u),$=!1},d(u){u&&g(e),T(r),T(n),T(l),T(a)}}}function wt(f,e,r){let{type:t}=e;return f.$$set=n=>{"type"in n&&r(0,t=n.type)},[t]}class bt extends M{constructor(e){super(),U(this,e,wt,ht,V,{type:0})}}function ge(f){let e,r;return{c(){e=Q("title"),r=S(f[1])},l(t){e=G(t,"title",{});var n=B(e);r=P(n,f[1]),n.forEach(g)},m(t,n){b(t,e,n),F(e,r)},p(t,n){n&2&&H(r,t[1])},d(t){t&&g(e)}}}function yt(f){let e,r,t=f[1]&&ge(f),n=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:f[0]},{height:f[0]},f[2],f[3]],s={};for(let l=0;l<n.length;l+=1)s=K(s,n[l]);return{c(){e=Q("svg"),t&&t.c(),r=Q("path"),this.h()},l(l){e=G(l,"svg",{xmlns:!0,viewBox:!0,fill:!0,preserveAspectRatio:!0,width:!0,height:!0});var i=B(e);t&&t.l(i),r=G(i,"path",{d:!0}),B(r).forEach(g),i.forEach(g),this.h()},h(){re(r,"d","M24.59 16.59L17 24.17 17 4 15 4 15 24.17 7.41 16.59 6 18 16 28 26 18 24.59 16.59z"),x(e,s)},m(l,i){b(l,e,i),t&&t.m(e,null),F(e,r)},p(l,[i]){l[1]?t?t.p(l,i):(t=ge(l),t.c(),t.m(e,r)):t&&(t.d(1),t=null),x(e,s=De(n,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},i&1&&{width:l[0]},i&1&&{height:l[0]},i&4&&l[2],i&8&&l[3]]))},i:Z,o:Z,d(l){l&&g(e),t&&t.d()}}}function vt(f,e,r){let t,n;const s=["size","title"];let l=ee(e,s),{size:i=16}=e,{title:a=void 0}=e;return f.$$set=$=>{r(5,e=K(K({},e),te($))),r(3,l=ee(e,s)),"size"in $&&r(0,i=$.size),"title"in $&&r(1,a=$.title)},f.$$.update=()=>{r(4,t=e["aria-label"]||e["aria-labelledby"]||a),r(2,n={"aria-hidden":t?void 0:!0,role:t?"img":void 0,focusable:Number(e.tabindex)===0?!0:void 0})},e=te(e),[i,a,n,l,t]}class _e extends M{constructor(e){super(),U(this,e,vt,yt,V,{size:0,title:1})}}function de(f){let e,r;return{c(){e=Q("title"),r=S(f[1])},l(t){e=G(t,"title",{});var n=B(e);r=P(n,f[1]),n.forEach(g)},m(t,n){b(t,e,n),F(e,r)},p(t,n){n&2&&H(r,t[1])},d(t){t&&g(e)}}}function kt(f){let e,r,t=f[1]&&de(f),n=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:f[0]},{height:f[0]},f[2],f[3]],s={};for(let l=0;l<n.length;l+=1)s=K(s,n[l]);return{c(){e=Q("svg"),t&&t.c(),r=Q("path"),this.h()},l(l){e=G(l,"svg",{xmlns:!0,viewBox:!0,fill:!0,preserveAspectRatio:!0,width:!0,height:!0});var i=B(e);t&&t.l(i),r=G(i,"path",{d:!0}),B(r).forEach(g),i.forEach(g),this.h()},h(){re(r,"d","M16 4L6 14 7.41 15.41 15 7.83 15 28 17 28 17 7.83 24.59 15.41 26 14 16 4z"),x(e,s)},m(l,i){b(l,e,i),t&&t.m(e,null),F(e,r)},p(l,[i]){l[1]?t?t.p(l,i):(t=de(l),t.c(),t.m(e,r)):t&&(t.d(1),t=null),x(e,s=De(n,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},i&1&&{width:l[0]},i&1&&{height:l[0]},i&4&&l[2],i&8&&l[3]]))},i:Z,o:Z,d(l){l&&g(e),t&&t.d()}}}function Tt(f,e,r){let t,n;const s=["size","title"];let l=ee(e,s),{size:i=16}=e,{title:a=void 0}=e;return f.$$set=$=>{r(5,e=K(K({},e),te($))),r(3,l=ee(e,s)),"size"in $&&r(0,i=$.size),"title"in $&&r(1,a=$.title)},f.$$.update=()=>{r(4,t=e["aria-label"]||e["aria-labelledby"]||a),r(2,n={"aria-hidden":t?void 0:!0,role:t?"img":void 0,focusable:Number(e.tabindex)===0?!0:void 0})},e=te(e),[i,a,n,l,t]}class he extends M{constructor(e){super(),U(this,e,Tt,kt,V,{size:0,title:1})}}function we(f){let e,r,t,n,s=f[1]&&be(f);return t=new tt({props:{kind:"ghost",size:"small",style:"border-radius: 20px",icon:f[1]?he:_e,$$slots:{default:[Et]},$$scope:{ctx:f}}}),t.$on("click",f[2]),{c(){s&&s.c(),e=A(),r=O("div"),y(t.$$.fragment),this.h()},l(l){s&&s.l(l),e=N(l),r=j(l,"DIV",{class:!0});var i=B(r);v(t.$$.fragment,i),i.forEach(g),this.h()},h(){re(r,"class","button-wrapper svelte-t5f689")},m(l,i){s&&s.m(l,i),b(l,e,i),b(l,r,i),k(t,r,null),n=!0},p(l,i){l[1]?s?(s.p(l,i),i&2&&p(s,1)):(s=be(l),s.c(),p(s,1),s.m(e.parentNode,e)):s&&(C(),m(s,1,1,()=>{s=null}),L());const a={};i&2&&(a.icon=l[1]?he:_e),i&11&&(a.$$scope={dirty:i,ctx:l}),t.$set(a)},i(l){n||(p(s),p(t.$$.fragment,l),n=!0)},o(l){m(s),m(t.$$.fragment,l),n=!1},d(l){s&&s.d(l),l&&g(e),l&&g(r),T(t)}}}function be(f){let e,r,t;return r=new nt({props:{data:f[0].args}}),{c(){e=O("div"),y(r.$$.fragment),this.h()},l(n){e=j(n,"DIV",{class:!0});var s=B(e);v(r.$$.fragment,s),s.forEach(g),this.h()},h(){re(e,"class","arguments-list-wrapper svelte-t5f689")},m(n,s){b(n,e,s),k(r,e,null),t=!0},p(n,s){const l={};s&1&&(l.data=n[0].args),r.$set(l)},i(n){t||(p(r.$$.fragment,n),t=!0)},o(n){m(r.$$.fragment,n),t=!1},d(n){n&&g(e),T(r)}}}function Et(f){let e=(f[1]?"Hide Arguments":"Show Arguments")+` (${f[0].args.length})`,r;return{c(){r=S(e)},l(t){r=P(t,e)},m(t,n){b(t,r,n)},p(t,n){n&3&&e!==(e=(t[1]?"Hide Arguments":"Show Arguments")+` (${t[0].args.length})`)&&H(r,e)},d(t){t&&g(r)}}}function It(f){let e,r,t=f[0].name+"",n,s,l,i,a,$,u,c,_,d,E,h;l=new Je({props:{type:f[0].type}}),a=new $e({props:{reason:f[0].deprecationReason}}),u=new Qe({props:{type:f[0].type}}),_=new J({props:{source:f[0].description}});let I=f[0].args.length>0&&we(f);return{c(){e=O("p"),r=O("span"),n=S(t),s=A(),y(l.$$.fragment),i=A(),y(a.$$.fragment),$=A(),y(u.$$.fragment),c=A(),y(_.$$.fragment),d=A(),I&&I.c(),E=R(),this.h()},l(o){e=j(o,"P",{});var w=B(e);r=j(w,"SPAN",{style:!0});var z=B(r);n=P(z,t),z.forEach(g),s=N(w),v(l.$$.fragment,w),i=N(w),v(a.$$.fragment,w),$=N(w),v(u.$$.fragment,w),w.forEach(g),c=N(o),v(_.$$.fragment,o),d=N(o),I&&I.l(o),E=R(),this.h()},h(){se(r,"font-weight","bold")},m(o,w){b(o,e,w),F(e,r),F(r,n),F(e,s),k(l,e,null),F(e,i),k(a,e,null),F(e,$),k(u,e,null),b(o,c,w),k(_,o,w),b(o,d,w),I&&I.m(o,w),b(o,E,w),h=!0},p(o,w){(!h||w&1)&&t!==(t=o[0].name+"")&&H(n,t);const z={};w&1&&(z.type=o[0].type),l.$set(z);const Y={};w&1&&(Y.reason=o[0].deprecationReason),a.$set(Y);const X={};w&1&&(X.type=o[0].type),u.$set(X);const oe={};w&1&&(oe.source=o[0].description),_.$set(oe),o[0].args.length>0?I?(I.p(o,w),w&1&&p(I,1)):(I=we(o),I.c(),p(I,1),I.m(E.parentNode,E)):I&&(C(),m(I,1,1,()=>{I=null}),L())},i(o){h||(p(l.$$.fragment,o),p(a.$$.fragment,o),p(u.$$.fragment,o),p(_.$$.fragment,o),p(I),h=!0)},o(o){m(l.$$.fragment,o),m(a.$$.fragment,o),m(u.$$.fragment,o),m(_.$$.fragment,o),m(I),h=!1},d(o){o&&g(e),T(l),T(a),T(u),o&&g(c),T(_,o),o&&g(d),I&&I.d(o),o&&g(E)}}}function At(f){let e,r;return e=new ue({props:{$$slots:{default:[It]},$$scope:{ctx:f}}}),{c(){y(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,n){k(e,t,n),r=!0},p(t,n){const s={};n&11&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){m(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function Nt(f){let e,r;return e=new ie({props:{$$slots:{default:[At]},$$scope:{ctx:f}}}),{c(){y(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,n){k(e,t,n),r=!0},p(t,[n]){const s={};n&11&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){m(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function Ft(f,e,r){let{item:t}=e;var n=!1;const s=()=>r(1,n=!n);return f.$$set=l=>{"item"in l&&r(0,t=l.item)},[t,n,s]}class St extends M{constructor(e){super(),U(this,e,Ft,Nt,V,{item:0})}}function ye(f,e,r){const t=f.slice();return t[2]=e[r],t}function ve(f){let e,r;return e=new St({props:{item:f[2]}}),{c(){y(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,n){k(e,t,n),r=!0},p(t,n){const s={};n&1&&(s.item=t[2]),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){m(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function Pt(f){let e,r,t=f[0],n=[];for(let l=0;l<t.length;l+=1)n[l]=ve(ye(f,t,l));const s=l=>m(n[l],1,1,()=>{n[l]=null});return{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=R()},l(l){for(let i=0;i<n.length;i+=1)n[i].l(l);e=R()},m(l,i){for(let a=0;a<n.length;a+=1)n[a].m(l,i);b(l,e,i),r=!0},p(l,i){if(i&1){t=l[0];let a;for(a=0;a<t.length;a+=1){const $=ye(l,t,a);n[a]?(n[a].p($,i),p(n[a],1)):(n[a]=ve($),n[a].c(),p(n[a],1),n[a].m(e.parentNode,e))}for(C(),a=t.length;a<n.length;a+=1)s(a);L()}},i(l){if(!r){for(let i=0;i<t.length;i+=1)p(n[i]);r=!0}},o(l){n=n.filter(Boolean);for(let i=0;i<n.length;i+=1)m(n[i]);r=!1},d(l){ne(n,l),l&&g(e)}}}function Bt(f){let e,r;return e=new ae({props:{$$slots:{default:[Pt]},$$scope:{ctx:f}}}),{c(){y(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,n){k(e,t,n),r=!0},p(t,n){const s={};n&33&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){m(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function Ot(f){let e,r;return e=new fe({props:{condensed:!0,$$slots:{default:[Bt]},$$scope:{ctx:f}}}),{c(){y(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,n){k(e,t,n),r=!0},p(t,[n]){const s={};n&33&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){m(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function jt(f,e,r){let t,{data:n}=e;return f.$$set=s=>{"data"in s&&r(1,n=s.data)},f.$$.update=()=>{f.$$.dirty&2&&r(0,t=q.sortBy(n,s=>s.name))},[t,n]}class Ge extends M{constructor(e){super(),U(this,e,jt,Ot,V,{data:1})}}function ke(f,e,r){const t=f.slice();return t[1]=e[r],t[3]=r,t}function Te(f){let e=", ",r;return{c(){r=S(e)},l(t){r=P(t,e)},m(t,n){b(t,r,n)},d(t){t&&g(r)}}}function Ee(f){let e,r,t;e=new rt({props:{type:f[1]}});let n=f[3]!==f[0].length-1&&Te();return{c(){y(e.$$.fragment),n&&n.c(),r=R()},l(s){v(e.$$.fragment,s),n&&n.l(s),r=R()},m(s,l){k(e,s,l),n&&n.m(s,l),b(s,r,l),t=!0},p(s,l){const i={};l&1&&(i.type=s[1]),e.$set(i),s[3]!==s[0].length-1?n||(n=Te(),n.c(),n.m(r.parentNode,r)):n&&(n.d(1),n=null)},i(s){t||(p(e.$$.fragment,s),t=!0)},o(s){m(e.$$.fragment,s),t=!1},d(s){T(e,s),n&&n.d(s),s&&g(r)}}}function Rt(f){let e,r,t=f[0],n=[];for(let l=0;l<t.length;l+=1)n[l]=Ee(ke(f,t,l));const s=l=>m(n[l],1,1,()=>{n[l]=null});return{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=R()},l(l){for(let i=0;i<n.length;i+=1)n[i].l(l);e=R()},m(l,i){for(let a=0;a<n.length;a+=1)n[a].m(l,i);b(l,e,i),r=!0},p(l,[i]){if(i&1){t=l[0];let a;for(a=0;a<t.length;a+=1){const $=ke(l,t,a);n[a]?(n[a].p($,i),p(n[a],1)):(n[a]=Ee($),n[a].c(),p(n[a],1),n[a].m(e.parentNode,e))}for(C(),a=t.length;a<n.length;a+=1)s(a);L()}},i(l){if(!r){for(let i=0;i<t.length;i+=1)p(n[i]);r=!0}},o(l){n=n.filter(Boolean);for(let i=0;i<n.length;i+=1)m(n[i]);r=!1},d(l){ne(n,l),l&&g(e)}}}function zt(f,e,r){let{types:t}=e;return f.$$set=n=>{"types"in n&&r(0,t=n.types)},[t]}class le extends M{constructor(e){super(),U(this,e,zt,Rt,V,{types:0})}}function Ct(f){let e=f[0].name+"",r,t,n,s;return n=new W({props:{type:f[0]}}),{c(){r=S(e),t=A(),y(n.$$.fragment)},l(l){r=P(l,e),t=N(l),v(n.$$.fragment,l)},m(l,i){b(l,r,i),b(l,t,i),k(n,l,i),s=!0},p(l,i){(!s||i&1)&&e!==(e=l[0].name+"")&&H(r,e);const a={};i&1&&(a.type=l[0]),n.$set(a)},i(l){s||(p(n.$$.fragment,l),s=!0)},o(l){m(n.$$.fragment,l),s=!1},d(l){l&&g(r),l&&g(t),T(n,l)}}}function Ie(f){let e,r,t,n;return e=new D({props:{id:"fields",depth:2,$$slots:{default:[Lt]},$$scope:{ctx:f}}}),t=new Ge({props:{data:q.map(f[0].getFields(),Fe)}}),{c(){y(e.$$.fragment),r=A(),y(t.$$.fragment)},l(s){v(e.$$.fragment,s),r=N(s),v(t.$$.fragment,s)},m(s,l){k(e,s,l),b(s,r,l),k(t,s,l),n=!0},p(s,l){const i={};l&4&&(i.$$scope={dirty:l,ctx:s}),e.$set(i);const a={};l&1&&(a.data=q.map(s[0].getFields(),Fe)),t.$set(a)},i(s){n||(p(e.$$.fragment,s),p(t.$$.fragment,s),n=!0)},o(s){m(e.$$.fragment,s),m(t.$$.fragment,s),n=!1},d(s){T(e,s),s&&g(r),T(t,s)}}}function Lt(f){let e;return{c(){e=S("Fields")},l(r){e=P(r,"Fields")},m(r,t){b(r,e,t)},d(r){r&&g(e)}}}function Ae(f){let e,r,t,n,s;return e=new D({props:{id:"implementations",depth:2,$$slots:{default:[Dt]},$$scope:{ctx:f}}}),t=new le({props:{types:f[1]}}),{c(){y(e.$$.fragment),r=S(`
    Implemented by `),y(t.$$.fragment),n=S(".")},l(l){v(e.$$.fragment,l),r=P(l,`
    Implemented by `),v(t.$$.fragment,l),n=P(l,".")},m(l,i){k(e,l,i),b(l,r,i),k(t,l,i),b(l,n,i),s=!0},p(l,i){const a={};i&4&&(a.$$scope={dirty:i,ctx:l}),e.$set(a);const $={};i&2&&($.types=l[1]),t.$set($)},i(l){s||(p(e.$$.fragment,l),p(t.$$.fragment,l),s=!0)},o(l){m(e.$$.fragment,l),m(t.$$.fragment,l),s=!1},d(l){T(e,l),l&&g(r),T(t,l),l&&g(n)}}}function Dt(f){let e;return{c(){e=S("Implementations")},l(r){e=P(r,"Implementations")},m(r,t){b(r,e,t)},d(r){r&&g(e)}}}function Ne(f){let e,r,t,n,s,l,i;return e=new D({props:{id:"interfaces",depth:2,$$slots:{default:[Mt]},$$scope:{ctx:f}}}),s=new le({props:{types:f[0].getInterfaces()}}),{c(){y(e.$$.fragment),r=A(),t=O("p"),n=S("Also implements "),y(s.$$.fragment),l=S(".")},l(a){v(e.$$.fragment,a),r=N(a),t=j(a,"P",{});var $=B(t);n=P($,"Also implements "),v(s.$$.fragment,$),l=P($,"."),$.forEach(g)},m(a,$){k(e,a,$),b(a,r,$),b(a,t,$),F(t,n),k(s,t,null),F(t,l),i=!0},p(a,$){const u={};$&4&&(u.$$scope={dirty:$,ctx:a}),e.$set(u);const c={};$&1&&(c.types=a[0].getInterfaces()),s.$set(c)},i(a){i||(p(e.$$.fragment,a),p(s.$$.fragment,a),i=!0)},o(a){m(e.$$.fragment,a),m(s.$$.fragment,a),i=!1},d(a){T(e,a),a&&g(r),a&&g(t),T(s)}}}function Mt(f){let e;return{c(){e=S("Interfaces")},l(r){e=P(r,"Interfaces")},m(r,t){b(r,e,t)},d(r){r&&g(e)}}}function Ut(f){let e,r,t,n,s,l=Object.keys(f[0].getFields()).length>0,i,a,$=f[0].getInterfaces().length>0,u;r=new D({props:{id:"title",depth:1,$$slots:{default:[Ct]},$$scope:{ctx:f}}}),n=new J({props:{source:f[0].description}});let c=l&&Ie(f),_=f[1].length>0&&Ae(f),d=$&&Ne(f);return{c(){e=O("section"),y(r.$$.fragment),t=A(),y(n.$$.fragment),s=A(),c&&c.c(),i=A(),_&&_.c(),a=A(),d&&d.c()},l(E){e=j(E,"SECTION",{});var h=B(e);v(r.$$.fragment,h),t=N(h),v(n.$$.fragment,h),s=N(h),c&&c.l(h),i=N(h),_&&_.l(h),a=N(h),d&&d.l(h),h.forEach(g)},m(E,h){b(E,e,h),k(r,e,null),F(e,t),k(n,e,null),F(e,s),c&&c.m(e,null),F(e,i),_&&_.m(e,null),F(e,a),d&&d.m(e,null),u=!0},p(E,[h]){const I={};h&5&&(I.$$scope={dirty:h,ctx:E}),r.$set(I);const o={};h&1&&(o.source=E[0].description),n.$set(o),h&1&&(l=Object.keys(E[0].getFields()).length>0),l?c?(c.p(E,h),h&1&&p(c,1)):(c=Ie(E),c.c(),p(c,1),c.m(e,i)):c&&(C(),m(c,1,1,()=>{c=null}),L()),E[1].length>0?_?(_.p(E,h),h&2&&p(_,1)):(_=Ae(E),_.c(),p(_,1),_.m(e,a)):_&&(C(),m(_,1,1,()=>{_=null}),L()),h&1&&($=E[0].getInterfaces().length>0),$?d?(d.p(E,h),h&1&&p(d,1)):(d=Ne(E),d.c(),p(d,1),d.m(e,null)):d&&(C(),m(d,1,1,()=>{d=null}),L())},i(E){u||(p(r.$$.fragment,E),p(n.$$.fragment,E),p(c),p(_),p(d),u=!0)},o(E){m(r.$$.fragment,E),m(n.$$.fragment,E),m(c),m(_),m(d),u=!1},d(E){E&&g(e),T(r),T(n),c&&c.d(),_&&_.d(),d&&d.d()}}}const Fe=f=>f;function Vt(f,e,r){let{type:t}=e,n;return f.$$set=s=>{"type"in s&&r(0,t=s.type)},f.$$.update=()=>{f.$$.dirty&1&&r(1,n=Xe.getPossibleTypes(t))},[t,n]}class Ht extends M{constructor(e){super(),U(this,e,Vt,Ut,V,{type:0})}}function Yt(f){let e=f[0].name+"",r,t,n,s;return n=new W({props:{type:f[0]}}),{c(){r=S(e),t=A(),y(n.$$.fragment)},l(l){r=P(l,e),t=N(l),v(n.$$.fragment,l)},m(l,i){b(l,r,i),b(l,t,i),k(n,l,i),s=!0},p(l,i){(!s||i&1)&&e!==(e=l[0].name+"")&&H(r,e);const a={};i&1&&(a.type=l[0]),n.$set(a)},i(l){s||(p(n.$$.fragment,l),s=!0)},o(l){m(n.$$.fragment,l),s=!1},d(l){l&&g(r),l&&g(t),T(n,l)}}}function Se(f){let e,r,t,n;return e=new D({props:{id:"fields",depth:2,$$slots:{default:[qt]},$$scope:{ctx:f}}}),t=new Ge({props:{data:q.map(f[0].getFields(),Be)}}),{c(){y(e.$$.fragment),r=A(),y(t.$$.fragment)},l(s){v(e.$$.fragment,s),r=N(s),v(t.$$.fragment,s)},m(s,l){k(e,s,l),b(s,r,l),k(t,s,l),n=!0},p(s,l){const i={};l&2&&(i.$$scope={dirty:l,ctx:s}),e.$set(i);const a={};l&1&&(a.data=q.map(s[0].getFields(),Be)),t.$set(a)},i(s){n||(p(e.$$.fragment,s),p(t.$$.fragment,s),n=!0)},o(s){m(e.$$.fragment,s),m(t.$$.fragment,s),n=!1},d(s){T(e,s),s&&g(r),T(t,s)}}}function qt(f){let e;return{c(){e=S("Fields")},l(r){e=P(r,"Fields")},m(r,t){b(r,e,t)},d(r){r&&g(e)}}}function Pe(f){let e,r,t,n,s,l,i;return e=new D({props:{id:"interfaces",depth:2,$$slots:{default:[Jt]},$$scope:{ctx:f}}}),s=new le({props:{types:f[0].getInterfaces()}}),{c(){y(e.$$.fragment),r=A(),t=O("p"),n=S("Also implements "),y(s.$$.fragment),l=S(".")},l(a){v(e.$$.fragment,a),r=N(a),t=j(a,"P",{});var $=B(t);n=P($,"Also implements "),v(s.$$.fragment,$),l=P($,"."),$.forEach(g)},m(a,$){k(e,a,$),b(a,r,$),b(a,t,$),F(t,n),k(s,t,null),F(t,l),i=!0},p(a,$){const u={};$&2&&(u.$$scope={dirty:$,ctx:a}),e.$set(u);const c={};$&1&&(c.types=a[0].getInterfaces()),s.$set(c)},i(a){i||(p(e.$$.fragment,a),p(s.$$.fragment,a),i=!0)},o(a){m(e.$$.fragment,a),m(s.$$.fragment,a),i=!1},d(a){T(e,a),a&&g(r),a&&g(t),T(s)}}}function Jt(f){let e;return{c(){e=S("Interfaces")},l(r){e=P(r,"Interfaces")},m(r,t){b(r,e,t)},d(r){r&&g(e)}}}function Qt(f){let e,r,t,n,s,l=Object.keys(f[0].getFields()).length>0,i,a=f[0].getInterfaces().length>0,$;r=new D({props:{id:"title",depth:1,$$slots:{default:[Yt]},$$scope:{ctx:f}}}),n=new J({props:{source:f[0].description}});let u=l&&Se(f),c=a&&Pe(f);return{c(){e=O("section"),y(r.$$.fragment),t=A(),y(n.$$.fragment),s=A(),u&&u.c(),i=A(),c&&c.c()},l(_){e=j(_,"SECTION",{});var d=B(e);v(r.$$.fragment,d),t=N(d),v(n.$$.fragment,d),s=N(d),u&&u.l(d),i=N(d),c&&c.l(d),d.forEach(g)},m(_,d){b(_,e,d),k(r,e,null),F(e,t),k(n,e,null),F(e,s),u&&u.m(e,null),F(e,i),c&&c.m(e,null),$=!0},p(_,[d]){const E={};d&3&&(E.$$scope={dirty:d,ctx:_}),r.$set(E);const h={};d&1&&(h.source=_[0].description),n.$set(h),d&1&&(l=Object.keys(_[0].getFields()).length>0),l?u?(u.p(_,d),d&1&&p(u,1)):(u=Se(_),u.c(),p(u,1),u.m(e,i)):u&&(C(),m(u,1,1,()=>{u=null}),L()),d&1&&(a=_[0].getInterfaces().length>0),a?c?(c.p(_,d),d&1&&p(c,1)):(c=Pe(_),c.c(),p(c,1),c.m(e,null)):c&&(C(),m(c,1,1,()=>{c=null}),L())},i(_){$||(p(r.$$.fragment,_),p(n.$$.fragment,_),p(u),p(c),$=!0)},o(_){m(r.$$.fragment,_),m(n.$$.fragment,_),m(u),m(c),$=!1},d(_){_&&g(e),T(r),T(n),u&&u.d(),c&&c.d()}}}const Be=f=>f;function Gt(f,e,r){let{type:t}=e;return f.$$set=n=>{"type"in n&&r(0,t=n.type)},[t]}class Kt extends M{constructor(e){super(),U(this,e,Gt,Qt,V,{type:0})}}function Wt(f){let e=f[0].name+"",r,t,n,s;return n=new W({props:{type:f[0]}}),{c(){r=S(e),t=A(),y(n.$$.fragment)},l(l){r=P(l,e),t=N(l),v(n.$$.fragment,l)},m(l,i){b(l,r,i),b(l,t,i),k(n,l,i),s=!0},p(l,i){(!s||i&1)&&e!==(e=l[0].name+"")&&H(r,e);const a={};i&1&&(a.type=l[0]),n.$set(a)},i(l){s||(p(n.$$.fragment,l),s=!0)},o(l){m(n.$$.fragment,l),s=!1},d(l){l&&g(r),l&&g(t),T(n,l)}}}function Xt(f){let e;return{c(){e=S("Types")},l(r){e=P(r,"Types")},m(r,t){b(r,e,t)},d(r){r&&g(e)}}}function Zt(f){let e,r,t,n,s,l,i,a,$,u,c,_;return r=new D({props:{id:"title",depth:1,$$slots:{default:[Wt]},$$scope:{ctx:f}}}),n=new J({props:{source:f[0].description}}),l=new D({props:{id:"types",depth:2,$$slots:{default:[Xt]},$$scope:{ctx:f}}}),u=new le({props:{types:f[0].getTypes()}}),{c(){e=O("section"),y(r.$$.fragment),t=A(),y(n.$$.fragment),s=A(),y(l.$$.fragment),i=A(),a=O("p"),$=S("Union of types "),y(u.$$.fragment),c=S(".")},l(d){e=j(d,"SECTION",{});var E=B(e);v(r.$$.fragment,E),t=N(E),v(n.$$.fragment,E),s=N(E),v(l.$$.fragment,E),i=N(E),a=j(E,"P",{});var h=B(a);$=P(h,"Union of types "),v(u.$$.fragment,h),c=P(h,"."),h.forEach(g),E.forEach(g)},m(d,E){b(d,e,E),k(r,e,null),F(e,t),k(n,e,null),F(e,s),k(l,e,null),F(e,i),F(e,a),F(a,$),k(u,a,null),F(a,c),_=!0},p(d,[E]){const h={};E&3&&(h.$$scope={dirty:E,ctx:d}),r.$set(h);const I={};E&1&&(I.source=d[0].description),n.$set(I);const o={};E&2&&(o.$$scope={dirty:E,ctx:d}),l.$set(o);const w={};E&1&&(w.types=d[0].getTypes()),u.$set(w)},i(d){_||(p(r.$$.fragment,d),p(n.$$.fragment,d),p(l.$$.fragment,d),p(u.$$.fragment,d),_=!0)},o(d){m(r.$$.fragment,d),m(n.$$.fragment,d),m(l.$$.fragment,d),m(u.$$.fragment,d),_=!1},d(d){d&&g(e),T(r),T(n),T(l),T(u)}}}function xt(f,e,r){let{type:t}=e;return f.$$set=n=>{"type"in n&&r(0,t=n.type)},[t]}class en extends M{constructor(e){super(),U(this,e,xt,Zt,V,{type:0})}}function Oe(f,e,r){const t=f.slice();return t[2]=e[r],t}function je(f){let e,r=f[2].description+"",t;return{c(){e=O("p"),t=S(r)},l(n){e=j(n,"P",{});var s=B(e);t=P(s,r),s.forEach(g)},m(n,s){b(n,e,s),F(e,t)},p(n,s){s&1&&r!==(r=n[2].description+"")&&H(t,r)},d(n){n&&g(e)}}}function Re(f){let e,r,t;return r=new lt({props:{value:f[2].default}}),{c(){e=S("Default: "),y(r.$$.fragment)},l(n){e=P(n,"Default: "),v(r.$$.fragment,n)},m(n,s){b(n,e,s),k(r,n,s),t=!0},p(n,s){const l={};s&1&&(l.value=n[2].default),r.$set(l)},i(n){t||(p(r.$$.fragment,n),t=!0)},o(n){m(r.$$.fragment,n),t=!1},d(n){n&&g(e),T(r,n)}}}function tn(f){let e,r,t=f[2].name+"",n,s,l,i,a,$,u,c,_,d,E;l=new Je({props:{type:f[2].type}}),a=new $e({props:{reason:f[2].deprecationReason}}),u=new Qe({props:{type:f[2].type}});let h=f[2].description&&je(f),I=f[2].default&&Re(f);return{c(){e=O("p"),r=O("span"),n=S(t),s=A(),y(l.$$.fragment),i=A(),y(a.$$.fragment),$=A(),y(u.$$.fragment),c=A(),h&&h.c(),_=A(),I&&I.c(),d=R(),this.h()},l(o){e=j(o,"P",{});var w=B(e);r=j(w,"SPAN",{style:!0});var z=B(r);n=P(z,t),z.forEach(g),s=N(w),v(l.$$.fragment,w),i=N(w),v(a.$$.fragment,w),$=N(w),v(u.$$.fragment,w),w.forEach(g),c=N(o),h&&h.l(o),_=N(o),I&&I.l(o),d=R(),this.h()},h(){se(r,"font-weight","bold")},m(o,w){b(o,e,w),F(e,r),F(r,n),F(e,s),k(l,e,null),F(e,i),k(a,e,null),F(e,$),k(u,e,null),b(o,c,w),h&&h.m(o,w),b(o,_,w),I&&I.m(o,w),b(o,d,w),E=!0},p(o,w){(!E||w&1)&&t!==(t=o[2].name+"")&&H(n,t);const z={};w&1&&(z.type=o[2].type),l.$set(z);const Y={};w&1&&(Y.reason=o[2].deprecationReason),a.$set(Y);const X={};w&1&&(X.type=o[2].type),u.$set(X),o[2].description?h?h.p(o,w):(h=je(o),h.c(),h.m(_.parentNode,_)):h&&(h.d(1),h=null),o[2].default?I?(I.p(o,w),w&1&&p(I,1)):(I=Re(o),I.c(),p(I,1),I.m(d.parentNode,d)):I&&(C(),m(I,1,1,()=>{I=null}),L())},i(o){E||(p(l.$$.fragment,o),p(a.$$.fragment,o),p(u.$$.fragment,o),p(I),E=!0)},o(o){m(l.$$.fragment,o),m(a.$$.fragment,o),m(u.$$.fragment,o),m(I),E=!1},d(o){o&&g(e),T(l),T(a),T(u),o&&g(c),h&&h.d(o),o&&g(_),I&&I.d(o),o&&g(d)}}}function nn(f){let e,r,t;return e=new ue({props:{$$slots:{default:[tn]},$$scope:{ctx:f}}}),{c(){y(e.$$.fragment),r=A()},l(n){v(e.$$.fragment,n),r=N(n)},m(n,s){k(e,n,s),b(n,r,s),t=!0},p(n,s){const l={};s&33&&(l.$$scope={dirty:s,ctx:n}),e.$set(l)},i(n){t||(p(e.$$.fragment,n),t=!0)},o(n){m(e.$$.fragment,n),t=!1},d(n){T(e,n),n&&g(r)}}}function ze(f){let e,r;return e=new ie({props:{$$slots:{default:[nn]},$$scope:{ctx:f}}}),{c(){y(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,n){k(e,t,n),r=!0},p(t,n){const s={};n&33&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){m(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function rn(f){let e,r,t=f[0],n=[];for(let l=0;l<t.length;l+=1)n[l]=ze(Oe(f,t,l));const s=l=>m(n[l],1,1,()=>{n[l]=null});return{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=R()},l(l){for(let i=0;i<n.length;i+=1)n[i].l(l);e=R()},m(l,i){for(let a=0;a<n.length;a+=1)n[a].m(l,i);b(l,e,i),r=!0},p(l,i){if(i&1){t=l[0];let a;for(a=0;a<t.length;a+=1){const $=Oe(l,t,a);n[a]?(n[a].p($,i),p(n[a],1)):(n[a]=ze($),n[a].c(),p(n[a],1),n[a].m(e.parentNode,e))}for(C(),a=t.length;a<n.length;a+=1)s(a);L()}},i(l){if(!r){for(let i=0;i<t.length;i+=1)p(n[i]);r=!0}},o(l){n=n.filter(Boolean);for(let i=0;i<n.length;i+=1)m(n[i]);r=!1},d(l){ne(n,l),l&&g(e)}}}function ln(f){let e,r;return e=new ae({props:{$$slots:{default:[rn]},$$scope:{ctx:f}}}),{c(){y(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,n){k(e,t,n),r=!0},p(t,n){const s={};n&33&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){m(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function sn(f){let e,r;return e=new fe({props:{condensed:!0,$$slots:{default:[ln]},$$scope:{ctx:f}}}),{c(){y(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,n){k(e,t,n),r=!0},p(t,[n]){const s={};n&33&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){m(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function fn(f,e,r){let t,{data:n}=e;return f.$$set=s=>{"data"in s&&r(1,n=s.data)},f.$$.update=()=>{f.$$.dirty&2&&r(0,t=q.sortBy(n.map(s=>({id:s.name,deprecationReason:s.deprecationReason,name:s.name,type:s.type,description:s.description,default:s.defaultValue})),s=>s.name)||[])},[t,n]}class an extends M{constructor(e){super(),U(this,e,fn,sn,V,{data:1})}}function un(f){let e=f[0].name+"",r,t,n,s;return n=new W({props:{type:f[0]}}),{c(){r=S(e),t=A(),y(n.$$.fragment)},l(l){r=P(l,e),t=N(l),v(n.$$.fragment,l)},m(l,i){b(l,r,i),b(l,t,i),k(n,l,i),s=!0},p(l,i){(!s||i&1)&&e!==(e=l[0].name+"")&&H(r,e);const a={};i&1&&(a.type=l[0]),n.$set(a)},i(l){s||(p(n.$$.fragment,l),s=!0)},o(l){m(n.$$.fragment,l),s=!1},d(l){l&&g(r),l&&g(t),T(n,l)}}}function Ce(f){let e,r,t,n;return e=new D({props:{id:"fields",depth:2,$$slots:{default:[$n]},$$scope:{ctx:f}}}),t=new an({props:{data:q.map(f[0].getFields(),Le)}}),{c(){y(e.$$.fragment),r=A(),y(t.$$.fragment)},l(s){v(e.$$.fragment,s),r=N(s),v(t.$$.fragment,s)},m(s,l){k(e,s,l),b(s,r,l),k(t,s,l),n=!0},p(s,l){const i={};l&2&&(i.$$scope={dirty:l,ctx:s}),e.$set(i);const a={};l&1&&(a.data=q.map(s[0].getFields(),Le)),t.$set(a)},i(s){n||(p(e.$$.fragment,s),p(t.$$.fragment,s),n=!0)},o(s){m(e.$$.fragment,s),m(t.$$.fragment,s),n=!1},d(s){T(e,s),s&&g(r),T(t,s)}}}function $n(f){let e;return{c(){e=S("Fields")},l(r){e=P(r,"Fields")},m(r,t){b(r,e,t)},d(r){r&&g(e)}}}function on(f){let e,r,t,n,s,l=Object.keys(f[0].getFields()).length>0,i;r=new D({props:{id:"title",depth:1,$$slots:{default:[un]},$$scope:{ctx:f}}}),n=new J({props:{source:f[0].description}});let a=l&&Ce(f);return{c(){e=O("section"),y(r.$$.fragment),t=A(),y(n.$$.fragment),s=A(),a&&a.c()},l($){e=j($,"SECTION",{});var u=B(e);v(r.$$.fragment,u),t=N(u),v(n.$$.fragment,u),s=N(u),a&&a.l(u),u.forEach(g)},m($,u){b($,e,u),k(r,e,null),F(e,t),k(n,e,null),F(e,s),a&&a.m(e,null),i=!0},p($,[u]){const c={};u&3&&(c.$$scope={dirty:u,ctx:$}),r.$set(c);const _={};u&1&&(_.source=$[0].description),n.$set(_),u&1&&(l=Object.keys($[0].getFields()).length>0),l?a?(a.p($,u),u&1&&p(a,1)):(a=Ce($),a.c(),p(a,1),a.m(e,null)):a&&(C(),m(a,1,1,()=>{a=null}),L())},i($){i||(p(r.$$.fragment,$),p(n.$$.fragment,$),p(a),i=!0)},o($){m(r.$$.fragment,$),m(n.$$.fragment,$),m(a),i=!1},d($){$&&g(e),T(r),T(n),a&&a.d()}}}const Le=f=>f;function cn(f,e,r){let{type:t}=e;return f.$$set=n=>{"type"in n&&r(0,t=n.type)},[t]}class pn extends M{constructor(e){super(),U(this,e,cn,on,V,{type:0})}}function mn(f){let e,r;return e=new pn({props:{type:f[0]}}),{c(){y(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,n){k(e,t,n),r=!0},p(t,n){const s={};n&1&&(s.type=t[0]),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){m(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function gn(f){let e,r;return e=new Kt({props:{type:f[0]}}),{c(){y(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,n){k(e,t,n),r=!0},p(t,n){const s={};n&1&&(s.type=t[0]),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){m(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function _n(f){let e,r;return e=new en({props:{type:f[0]}}),{c(){y(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,n){k(e,t,n),r=!0},p(t,n){const s={};n&1&&(s.type=t[0]),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){m(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function dn(f){let e,r;return e=new Ht({props:{type:f[0]}}),{c(){y(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,n){k(e,t,n),r=!0},p(t,n){const s={};n&1&&(s.type=t[0]),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){m(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function hn(f){let e,r;return e=new bt({props:{type:f[0]}}),{c(){y(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,n){k(e,t,n),r=!0},p(t,n){const s={};n&1&&(s.type=t[0]),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){m(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function wn(f){let e,r;return e=new ot({props:{type:f[0]}}),{c(){y(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,n){k(e,t,n),r=!0},p(t,n){const s={};n&1&&(s.type=t[0]),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){m(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function bn(f){let e,r,t,n,s,l,i,a,$,u,c,_,d;document.title=e="Type - "+f[0].name;const E=[wn,hn,dn,_n,gn,mn],h=[];function I(o,w){return w&1&&(t=null),w&1&&(n=null),w&1&&(s=null),w&1&&(l=null),w&1&&(i=null),w&1&&(a=null),t==null&&(t=!!Me(o[0])),t?0:(n==null&&(n=!!Ue(o[0])),n?1:(s==null&&(s=!!Ve(o[0])),s?2:(l==null&&(l=!!He(o[0])),l?3:(i==null&&(i=!!Ye(o[0])),i?4:(a==null&&(a=!!qe(o[0])),a?5:-1)))))}return~($=I(f,-1))&&(u=h[$]=E[$](f)),_=new et({props:{page:f[1]}}),{c(){r=A(),u&&u.c(),c=A(),y(_.$$.fragment)},l(o){Ke('[data-svelte="svelte-31uzcn"]',document.head).forEach(g),r=N(o),u&&u.l(o),c=N(o),v(_.$$.fragment,o)},m(o,w){b(o,r,w),~$&&h[$].m(o,w),b(o,c,w),k(_,o,w),d=!0},p(o,[w]){(!d||w&1)&&e!==(e="Type - "+o[0].name)&&(document.title=e);let z=$;$=I(o,w),$===z?~$&&h[$].p(o,w):(u&&(C(),m(h[z],1,1,()=>{h[z]=null}),L()),~$?(u=h[$],u?u.p(o,w):(u=h[$]=E[$](o),u.c()),p(u,1),u.m(c.parentNode,c)):u=null);const Y={};w&2&&(Y.page=o[1]),_.$set(Y)},i(o){d||(p(u),p(_.$$.fragment,o),d=!0)},o(o){m(u),m(_.$$.fragment,o),d=!1},d(o){o&&g(r),~$&&h[$].d(o),o&&g(c),T(_,o)}}}function An({params:f,url:e}){const r=Ze(f.type),t=xe(e.pathname);return!r||!t?{status:404,error:`Type ${f.type} not found.`}:{props:{type:r,page:t}}}function yn(f,e,r){let{type:t}=e,{page:n}=e;return f.$$set=s=>{"type"in s&&r(0,t=s.type),"page"in s&&r(1,n=s.page)},[t,n]}class Nn extends M{constructor(e){super(),U(this,e,yn,bn,V,{type:0,page:1})}}export{Nn as default,An as load};