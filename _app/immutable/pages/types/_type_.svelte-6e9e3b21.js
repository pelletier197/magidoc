import{S as C,i as L,s as D,w as b,x as y,y as v,q as p,o as _,B as k,t as S,h as B,g as w,E as Z,d as g,e as O,k as I,c as j,a as P,m as A,T as N,j as M,l as R,n as U,p as V,a3 as ne,f as le,Q as G,R as J,C as K,b as re,U as x,z as Le,O as ee,P as te,a4 as Je}from"../../chunks/index-27f5421e.js";import{T as Ke,q as De,o as Me,x as Ue,v as Ve,w as He,m as qe,A as H,S as se,B as fe,D as ae,E as ie,_ as Y,H as We,f as Xe}from"../../chunks/pages-ec7831f9.js";import{A as Q,P as Ze}from"../../chunks/PreviousNextPage-365e5559.js";import{D as ue,a as Ye,N as Qe,B as xe,A as et,T as tt,b as nt}from"../../chunks/ArgsList-9fa9960c.js";import"../../chunks/paths-10cf82fc.js";function rt(a){let e=a[0]()+"",r;return{c(){r=S(e)},l(t){r=B(t,e)},m(t,n){w(t,r,n)},p:Z,d(t){t&&g(r)}}}function lt(a){let e,r;return e=new Ke({props:{type:"teal",$$slots:{default:[rt]},$$scope:{ctx:a}}}),{c(){b(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,n){v(e,t,n),r=!0},p(t,[n]){const s={};n&4&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){_(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function st(a,e,r){let{type:t}=e;function n(){return De(t)?"Scalar":Me(t)?"Enum":Ue(t)?"Interface":Ve(t)?"Union":He(t)?"Object":qe(t)?"Input Object":"Unknown"}return a.$$set=s=>{"type"in s&&r(1,t=s.type)},[n,t]}class W extends C{constructor(e){super(),L(this,e,st,lt,D,{type:1})}}function ft(a){let e=a[0].name+"",r,t,n,s;return n=new W({props:{type:a[0]}}),{c(){r=S(e),t=I(),b(n.$$.fragment)},l(l){r=B(l,e),t=A(l),y(n.$$.fragment,l)},m(l,f){w(l,r,f),w(l,t,f),v(n,l,f),s=!0},p(l,f){(!s||f&1)&&e!==(e=l[0].name+"")&&M(r,e);const i={};f&1&&(i.type=l[0]),n.$set(i)},i(l){s||(p(n.$$.fragment,l),s=!0)},o(l){_(n.$$.fragment,l),s=!1},d(l){l&&g(r),l&&g(t),k(n,l)}}}function at(a){let e,r,t,n,s;return r=new H({props:{id:"title",depth:1,$$slots:{default:[ft]},$$scope:{ctx:a}}}),n=new Q({props:{source:a[0].description}}),{c(){e=O("section"),b(r.$$.fragment),t=I(),b(n.$$.fragment)},l(l){e=j(l,"SECTION",{});var f=P(e);y(r.$$.fragment,f),t=A(f),y(n.$$.fragment,f),f.forEach(g)},m(l,f){w(l,e,f),v(r,e,null),N(e,t),v(n,e,null),s=!0},p(l,[f]){const i={};f&3&&(i.$$scope={dirty:f,ctx:l}),r.$set(i);const m={};f&1&&(m.source=l[0].description),n.$set(m)},i(l){s||(p(r.$$.fragment,l),p(n.$$.fragment,l),s=!0)},o(l){_(r.$$.fragment,l),_(n.$$.fragment,l),s=!1},d(l){l&&g(e),k(r),k(n)}}}function it(a,e,r){let{type:t}=e;return a.$$set=n=>{"type"in n&&r(0,t=n.type)},[t]}class ut extends C{constructor(e){super(),L(this,e,it,at,D,{type:0})}}function ce(a,e,r){const t=a.slice();return t[1]=e[r],t}function $t(a){let e=a[0].name+"",r,t,n,s;return n=new W({props:{type:a[0]}}),{c(){r=S(e),t=I(),b(n.$$.fragment)},l(l){r=B(l,e),t=A(l),y(n.$$.fragment,l)},m(l,f){w(l,r,f),w(l,t,f),v(n,l,f),s=!0},p(l,f){(!s||f&1)&&e!==(e=l[0].name+"")&&M(r,e);const i={};f&1&&(i.type=l[0]),n.$set(i)},i(l){s||(p(n.$$.fragment,l),s=!0)},o(l){_(n.$$.fragment,l),s=!1},d(l){l&&g(r),l&&g(t),k(n,l)}}}function ot(a){let e;return{c(){e=S("Possible Values")},l(r){e=B(r,"Possible Values")},m(r,t){w(r,e,t)},d(r){r&&g(e)}}}function pe(a){let e,r=a[1].description+"",t;return{c(){e=O("p"),t=S(r)},l(n){e=j(n,"P",{});var s=P(e);t=B(s,r),s.forEach(g)},m(n,s){w(n,e,s),N(e,t)},p(n,s){s&1&&r!==(r=n[1].description+"")&&M(t,r)},d(n){n&&g(e)}}}function ct(a){let e,r,t=a[1].name+"",n,s,l,f,i,m;l=new ue({props:{reason:a[1].deprecationReason}});let u=a[1].description&&pe(a);return{c(){e=O("p"),r=O("span"),n=S(t),s=I(),b(l.$$.fragment),f=I(),u&&u.c(),i=R(),this.h()},l(o){e=j(o,"P",{});var c=P(e);r=j(c,"SPAN",{style:!0});var d=P(r);n=B(d,t),d.forEach(g),s=A(c),y(l.$$.fragment,c),c.forEach(g),f=A(o),u&&u.l(o),i=R(),this.h()},h(){le(r,"font-weight","bold")},m(o,c){w(o,e,c),N(e,r),N(r,n),N(e,s),v(l,e,null),w(o,f,c),u&&u.m(o,c),w(o,i,c),m=!0},p(o,c){(!m||c&1)&&t!==(t=o[1].name+"")&&M(n,t);const d={};c&1&&(d.reason=o[1].deprecationReason),l.$set(d),o[1].description?u?u.p(o,c):(u=pe(o),u.c(),u.m(i.parentNode,i)):u&&(u.d(1),u=null)},i(o){m||(p(l.$$.fragment,o),m=!0)},o(o){_(l.$$.fragment,o),m=!1},d(o){o&&g(e),k(l),o&&g(f),u&&u.d(o),o&&g(i)}}}function pt(a){let e,r,t;return e=new ie({props:{$$slots:{default:[ct]},$$scope:{ctx:a}}}),{c(){b(e.$$.fragment),r=I()},l(n){y(e.$$.fragment,n),r=A(n)},m(n,s){v(e,n,s),w(n,r,s),t=!0},p(n,s){const l={};s&17&&(l.$$scope={dirty:s,ctx:n}),e.$set(l)},i(n){t||(p(e.$$.fragment,n),t=!0)},o(n){_(e.$$.fragment,n),t=!1},d(n){k(e,n),n&&g(r)}}}function me(a){let e,r;return e=new ae({props:{$$slots:{default:[pt]},$$scope:{ctx:a}}}),{c(){b(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,n){v(e,t,n),r=!0},p(t,n){const s={};n&17&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){_(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function mt(a){let e,r,t=a[0].getValues(),n=[];for(let l=0;l<t.length;l+=1)n[l]=me(ce(a,t,l));const s=l=>_(n[l],1,1,()=>{n[l]=null});return{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=R()},l(l){for(let f=0;f<n.length;f+=1)n[f].l(l);e=R()},m(l,f){for(let i=0;i<n.length;i+=1)n[i].m(l,f);w(l,e,f),r=!0},p(l,f){if(f&1){t=l[0].getValues();let i;for(i=0;i<t.length;i+=1){const m=ce(l,t,i);n[i]?(n[i].p(m,f),p(n[i],1)):(n[i]=me(m),n[i].c(),p(n[i],1),n[i].m(e.parentNode,e))}for(U(),i=t.length;i<n.length;i+=1)s(i);V()}},i(l){if(!r){for(let f=0;f<t.length;f+=1)p(n[f]);r=!0}},o(l){n=n.filter(Boolean);for(let f=0;f<n.length;f+=1)_(n[f]);r=!1},d(l){ne(n,l),l&&g(e)}}}function gt(a){let e,r;return e=new fe({props:{$$slots:{default:[mt]},$$scope:{ctx:a}}}),{c(){b(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,n){v(e,t,n),r=!0},p(t,n){const s={};n&17&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){_(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function _t(a){let e,r,t,n,s,l,f,i,m;return r=new H({props:{id:"title",depth:1,$$slots:{default:[$t]},$$scope:{ctx:a}}}),n=new Q({props:{source:a[0].description}}),l=new H({props:{id:"possible-values",depth:2,$$slots:{default:[ot]},$$scope:{ctx:a}}}),i=new se({props:{condensed:!0,$$slots:{default:[gt]},$$scope:{ctx:a}}}),{c(){e=O("section"),b(r.$$.fragment),t=I(),b(n.$$.fragment),s=I(),b(l.$$.fragment),f=I(),b(i.$$.fragment)},l(u){e=j(u,"SECTION",{});var o=P(e);y(r.$$.fragment,o),t=A(o),y(n.$$.fragment,o),s=A(o),y(l.$$.fragment,o),f=A(o),y(i.$$.fragment,o),o.forEach(g)},m(u,o){w(u,e,o),v(r,e,null),N(e,t),v(n,e,null),N(e,s),v(l,e,null),N(e,f),v(i,e,null),m=!0},p(u,[o]){const c={};o&17&&(c.$$scope={dirty:o,ctx:u}),r.$set(c);const d={};o&1&&(d.source=u[0].description),n.$set(d);const F={};o&16&&(F.$$scope={dirty:o,ctx:u}),l.$set(F);const E={};o&17&&(E.$$scope={dirty:o,ctx:u}),i.$set(E)},i(u){m||(p(r.$$.fragment,u),p(n.$$.fragment,u),p(l.$$.fragment,u),p(i.$$.fragment,u),m=!0)},o(u){_(r.$$.fragment,u),_(n.$$.fragment,u),_(l.$$.fragment,u),_(i.$$.fragment,u),m=!1},d(u){u&&g(e),k(r),k(n),k(l),k(i)}}}function dt(a,e,r){let{type:t}=e;return a.$$set=n=>{"type"in n&&r(0,t=n.type)},[t]}class ht extends C{constructor(e){super(),L(this,e,dt,_t,D,{type:0})}}function ge(a){let e,r;return{c(){e=G("title"),r=S(a[1])},l(t){e=J(t,"title",{});var n=P(e);r=B(n,a[1]),n.forEach(g)},m(t,n){w(t,e,n),N(e,r)},p(t,n){n&2&&M(r,t[1])},d(t){t&&g(e)}}}function wt(a){let e,r,t=a[1]&&ge(a),n=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:a[0]},{height:a[0]},a[2],a[3]],s={};for(let l=0;l<n.length;l+=1)s=K(s,n[l]);return{c(){e=G("svg"),t&&t.c(),r=G("path"),this.h()},l(l){e=J(l,"svg",{xmlns:!0,viewBox:!0,fill:!0,preserveAspectRatio:!0,width:!0,height:!0});var f=P(e);t&&t.l(f),r=J(f,"path",{d:!0}),P(r).forEach(g),f.forEach(g),this.h()},h(){re(r,"d","M24.59 16.59L17 24.17 17 4 15 4 15 24.17 7.41 16.59 6 18 16 28 26 18 24.59 16.59z"),x(e,s)},m(l,f){w(l,e,f),t&&t.m(e,null),N(e,r)},p(l,[f]){l[1]?t?t.p(l,f):(t=ge(l),t.c(),t.m(e,r)):t&&(t.d(1),t=null),x(e,s=Le(n,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},f&1&&{width:l[0]},f&1&&{height:l[0]},f&4&&l[2],f&8&&l[3]]))},i:Z,o:Z,d(l){l&&g(e),t&&t.d()}}}function bt(a,e,r){let t,n;const s=["size","title"];let l=ee(e,s),{size:f=16}=e,{title:i=void 0}=e;return a.$$set=m=>{r(5,e=K(K({},e),te(m))),r(3,l=ee(e,s)),"size"in m&&r(0,f=m.size),"title"in m&&r(1,i=m.title)},a.$$.update=()=>{r(4,t=e["aria-label"]||e["aria-labelledby"]||i),r(2,n={"aria-hidden":t?void 0:!0,role:t?"img":void 0,focusable:Number(e.tabindex)===0?!0:void 0})},e=te(e),[f,i,n,l,t]}class _e extends C{constructor(e){super(),L(this,e,bt,wt,D,{size:0,title:1})}}function de(a){let e,r;return{c(){e=G("title"),r=S(a[1])},l(t){e=J(t,"title",{});var n=P(e);r=B(n,a[1]),n.forEach(g)},m(t,n){w(t,e,n),N(e,r)},p(t,n){n&2&&M(r,t[1])},d(t){t&&g(e)}}}function yt(a){let e,r,t=a[1]&&de(a),n=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:a[0]},{height:a[0]},a[2],a[3]],s={};for(let l=0;l<n.length;l+=1)s=K(s,n[l]);return{c(){e=G("svg"),t&&t.c(),r=G("path"),this.h()},l(l){e=J(l,"svg",{xmlns:!0,viewBox:!0,fill:!0,preserveAspectRatio:!0,width:!0,height:!0});var f=P(e);t&&t.l(f),r=J(f,"path",{d:!0}),P(r).forEach(g),f.forEach(g),this.h()},h(){re(r,"d","M16 4L6 14 7.41 15.41 15 7.83 15 28 17 28 17 7.83 24.59 15.41 26 14 16 4z"),x(e,s)},m(l,f){w(l,e,f),t&&t.m(e,null),N(e,r)},p(l,[f]){l[1]?t?t.p(l,f):(t=de(l),t.c(),t.m(e,r)):t&&(t.d(1),t=null),x(e,s=Le(n,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},f&1&&{width:l[0]},f&1&&{height:l[0]},f&4&&l[2],f&8&&l[3]]))},i:Z,o:Z,d(l){l&&g(e),t&&t.d()}}}function vt(a,e,r){let t,n;const s=["size","title"];let l=ee(e,s),{size:f=16}=e,{title:i=void 0}=e;return a.$$set=m=>{r(5,e=K(K({},e),te(m))),r(3,l=ee(e,s)),"size"in m&&r(0,f=m.size),"title"in m&&r(1,i=m.title)},a.$$.update=()=>{r(4,t=e["aria-label"]||e["aria-labelledby"]||i),r(2,n={"aria-hidden":t?void 0:!0,role:t?"img":void 0,focusable:Number(e.tabindex)===0?!0:void 0})},e=te(e),[f,i,n,l,t]}class he extends C{constructor(e){super(),L(this,e,vt,yt,D,{size:0,title:1})}}function we(a){let e,r,t,n,s=a[1]&&be(a);return t=new xe({props:{kind:"ghost",size:"small",style:"border-radius: 20px",icon:a[1]?he:_e,$$slots:{default:[kt]},$$scope:{ctx:a}}}),t.$on("click",a[2]),{c(){s&&s.c(),e=I(),r=O("div"),b(t.$$.fragment),this.h()},l(l){s&&s.l(l),e=A(l),r=j(l,"DIV",{class:!0});var f=P(r);y(t.$$.fragment,f),f.forEach(g),this.h()},h(){re(r,"class","button-wrapper svelte-t5f689")},m(l,f){s&&s.m(l,f),w(l,e,f),w(l,r,f),v(t,r,null),n=!0},p(l,f){l[1]?s?(s.p(l,f),f&2&&p(s,1)):(s=be(l),s.c(),p(s,1),s.m(e.parentNode,e)):s&&(U(),_(s,1,1,()=>{s=null}),V());const i={};f&2&&(i.icon=l[1]?he:_e),f&11&&(i.$$scope={dirty:f,ctx:l}),t.$set(i)},i(l){n||(p(s),p(t.$$.fragment,l),n=!0)},o(l){_(s),_(t.$$.fragment,l),n=!1},d(l){s&&s.d(l),l&&g(e),l&&g(r),k(t)}}}function be(a){let e,r,t;return r=new et({props:{data:a[0].args}}),{c(){e=O("div"),b(r.$$.fragment),this.h()},l(n){e=j(n,"DIV",{class:!0});var s=P(e);y(r.$$.fragment,s),s.forEach(g),this.h()},h(){re(e,"class","arguments-list-wrapper svelte-t5f689")},m(n,s){w(n,e,s),v(r,e,null),t=!0},p(n,s){const l={};s&1&&(l.data=n[0].args),r.$set(l)},i(n){t||(p(r.$$.fragment,n),t=!0)},o(n){_(r.$$.fragment,n),t=!1},d(n){n&&g(e),k(r)}}}function kt(a){let e=(a[1]?"Hide Arguments":"Show Arguments")+` (${a[0].args.length})`,r;return{c(){r=S(e)},l(t){r=B(t,e)},m(t,n){w(t,r,n)},p(t,n){n&3&&e!==(e=(t[1]?"Hide Arguments":"Show Arguments")+` (${t[0].args.length})`)&&M(r,e)},d(t){t&&g(r)}}}function Tt(a){let e,r,t=a[0].name+"",n,s,l,f,i,m,u,o,c,d,F,E;l=new Ye({props:{type:a[0].type}}),i=new ue({props:{reason:a[0].deprecationReason}}),u=new Qe({props:{type:a[0].type}}),c=new Q({props:{source:a[0].description}});let T=a[0].args.length>0&&we(a);return{c(){e=O("p"),r=O("span"),n=S(t),s=I(),b(l.$$.fragment),f=I(),b(i.$$.fragment),m=I(),b(u.$$.fragment),o=I(),b(c.$$.fragment),d=I(),T&&T.c(),F=R(),this.h()},l($){e=j($,"P",{});var h=P(e);r=j(h,"SPAN",{style:!0});var z=P(r);n=B(z,t),z.forEach(g),s=A(h),y(l.$$.fragment,h),f=A(h),y(i.$$.fragment,h),m=A(h),y(u.$$.fragment,h),h.forEach(g),o=A($),y(c.$$.fragment,$),d=A($),T&&T.l($),F=R(),this.h()},h(){le(r,"font-weight","bold")},m($,h){w($,e,h),N(e,r),N(r,n),N(e,s),v(l,e,null),N(e,f),v(i,e,null),N(e,m),v(u,e,null),w($,o,h),v(c,$,h),w($,d,h),T&&T.m($,h),w($,F,h),E=!0},p($,h){(!E||h&1)&&t!==(t=$[0].name+"")&&M(n,t);const z={};h&1&&(z.type=$[0].type),l.$set(z);const q={};h&1&&(q.reason=$[0].deprecationReason),i.$set(q);const X={};h&1&&(X.type=$[0].type),u.$set(X);const oe={};h&1&&(oe.source=$[0].description),c.$set(oe),$[0].args.length>0?T?(T.p($,h),h&1&&p(T,1)):(T=we($),T.c(),p(T,1),T.m(F.parentNode,F)):T&&(U(),_(T,1,1,()=>{T=null}),V())},i($){E||(p(l.$$.fragment,$),p(i.$$.fragment,$),p(u.$$.fragment,$),p(c.$$.fragment,$),p(T),E=!0)},o($){_(l.$$.fragment,$),_(i.$$.fragment,$),_(u.$$.fragment,$),_(c.$$.fragment,$),_(T),E=!1},d($){$&&g(e),k(l),k(i),k(u),$&&g(o),k(c,$),$&&g(d),T&&T.d($),$&&g(F)}}}function Et(a){let e,r;return e=new ie({props:{$$slots:{default:[Tt]},$$scope:{ctx:a}}}),{c(){b(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,n){v(e,t,n),r=!0},p(t,n){const s={};n&11&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){_(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function It(a){let e,r;return e=new ae({props:{$$slots:{default:[Et]},$$scope:{ctx:a}}}),{c(){b(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,n){v(e,t,n),r=!0},p(t,[n]){const s={};n&11&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){_(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function At(a,e,r){let{item:t}=e;var n=!1;const s=()=>r(1,n=!n);return a.$$set=l=>{"item"in l&&r(0,t=l.item)},[t,n,s]}class Nt extends C{constructor(e){super(),L(this,e,At,It,D,{item:0})}}function ye(a,e,r){const t=a.slice();return t[2]=e[r],t}function ve(a){let e,r;return e=new Nt({props:{item:a[2]}}),{c(){b(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,n){v(e,t,n),r=!0},p(t,n){const s={};n&1&&(s.item=t[2]),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){_(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function Ft(a){let e,r,t=a[0],n=[];for(let l=0;l<t.length;l+=1)n[l]=ve(ye(a,t,l));const s=l=>_(n[l],1,1,()=>{n[l]=null});return{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=R()},l(l){for(let f=0;f<n.length;f+=1)n[f].l(l);e=R()},m(l,f){for(let i=0;i<n.length;i+=1)n[i].m(l,f);w(l,e,f),r=!0},p(l,f){if(f&1){t=l[0];let i;for(i=0;i<t.length;i+=1){const m=ye(l,t,i);n[i]?(n[i].p(m,f),p(n[i],1)):(n[i]=ve(m),n[i].c(),p(n[i],1),n[i].m(e.parentNode,e))}for(U(),i=t.length;i<n.length;i+=1)s(i);V()}},i(l){if(!r){for(let f=0;f<t.length;f+=1)p(n[f]);r=!0}},o(l){n=n.filter(Boolean);for(let f=0;f<n.length;f+=1)_(n[f]);r=!1},d(l){ne(n,l),l&&g(e)}}}function St(a){let e,r;return e=new fe({props:{$$slots:{default:[Ft]},$$scope:{ctx:a}}}),{c(){b(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,n){v(e,t,n),r=!0},p(t,n){const s={};n&33&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){_(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function Bt(a){let e,r;return e=new se({props:{condensed:!0,$$slots:{default:[St]},$$scope:{ctx:a}}}),{c(){b(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,n){v(e,t,n),r=!0},p(t,[n]){const s={};n&33&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){_(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function Pt(a,e,r){let t,{data:n}=e;return a.$$set=s=>{"data"in s&&r(1,n=s.data)},a.$$.update=()=>{a.$$.dirty&2&&r(0,t=Y.sortBy(n,s=>s.name))},[t,n]}class Ge extends C{constructor(e){super(),L(this,e,Pt,Bt,D,{data:1})}}function ke(a,e,r){const t=a.slice();return t[1]=e[r],t[3]=r,t}function Te(a){let e=", ",r;return{c(){r=S(e)},l(t){r=B(t,e)},m(t,n){w(t,r,n)},d(t){t&&g(r)}}}function Ee(a){let e,r,t;e=new tt({props:{type:a[1]}});let n=a[3]!==a[0].length-1&&Te();return{c(){b(e.$$.fragment),n&&n.c(),r=R()},l(s){y(e.$$.fragment,s),n&&n.l(s),r=R()},m(s,l){v(e,s,l),n&&n.m(s,l),w(s,r,l),t=!0},p(s,l){const f={};l&1&&(f.type=s[1]),e.$set(f),s[3]!==s[0].length-1?n||(n=Te(),n.c(),n.m(r.parentNode,r)):n&&(n.d(1),n=null)},i(s){t||(p(e.$$.fragment,s),t=!0)},o(s){_(e.$$.fragment,s),t=!1},d(s){k(e,s),n&&n.d(s),s&&g(r)}}}function Ot(a){let e,r,t=a[0],n=[];for(let l=0;l<t.length;l+=1)n[l]=Ee(ke(a,t,l));const s=l=>_(n[l],1,1,()=>{n[l]=null});return{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=R()},l(l){for(let f=0;f<n.length;f+=1)n[f].l(l);e=R()},m(l,f){for(let i=0;i<n.length;i+=1)n[i].m(l,f);w(l,e,f),r=!0},p(l,[f]){if(f&1){t=l[0];let i;for(i=0;i<t.length;i+=1){const m=ke(l,t,i);n[i]?(n[i].p(m,f),p(n[i],1)):(n[i]=Ee(m),n[i].c(),p(n[i],1),n[i].m(e.parentNode,e))}for(U(),i=t.length;i<n.length;i+=1)s(i);V()}},i(l){if(!r){for(let f=0;f<t.length;f+=1)p(n[f]);r=!0}},o(l){n=n.filter(Boolean);for(let f=0;f<n.length;f+=1)_(n[f]);r=!1},d(l){ne(n,l),l&&g(e)}}}function jt(a,e,r){let{types:t}=e;return a.$$set=n=>{"types"in n&&r(0,t=n.types)},[t]}class $e extends C{constructor(e){super(),L(this,e,jt,Ot,D,{types:0})}}function Rt(a){let e=a[0].name+"",r,t,n,s;return n=new W({props:{type:a[0]}}),{c(){r=S(e),t=I(),b(n.$$.fragment)},l(l){r=B(l,e),t=A(l),y(n.$$.fragment,l)},m(l,f){w(l,r,f),w(l,t,f),v(n,l,f),s=!0},p(l,f){(!s||f&1)&&e!==(e=l[0].name+"")&&M(r,e);const i={};f&1&&(i.type=l[0]),n.$set(i)},i(l){s||(p(n.$$.fragment,l),s=!0)},o(l){_(n.$$.fragment,l),s=!1},d(l){l&&g(r),l&&g(t),k(n,l)}}}function Ie(a){let e,r,t,n;return e=new H({props:{id:"fields",depth:2,$$slots:{default:[zt]},$$scope:{ctx:a}}}),t=new Ge({props:{data:Y.map(a[0].getFields(),Ne)}}),{c(){b(e.$$.fragment),r=I(),b(t.$$.fragment)},l(s){y(e.$$.fragment,s),r=A(s),y(t.$$.fragment,s)},m(s,l){v(e,s,l),w(s,r,l),v(t,s,l),n=!0},p(s,l){const f={};l&2&&(f.$$scope={dirty:l,ctx:s}),e.$set(f);const i={};l&1&&(i.data=Y.map(s[0].getFields(),Ne)),t.$set(i)},i(s){n||(p(e.$$.fragment,s),p(t.$$.fragment,s),n=!0)},o(s){_(e.$$.fragment,s),_(t.$$.fragment,s),n=!1},d(s){k(e,s),s&&g(r),k(t,s)}}}function zt(a){let e;return{c(){e=S("Fields")},l(r){e=B(r,"Fields")},m(r,t){w(r,e,t)},d(r){r&&g(e)}}}function Ae(a){let e,r,t,n,s,l;return e=new H({props:{id:"interfaces",depth:2,$$slots:{default:[Ct]},$$scope:{ctx:a}}}),s=new $e({props:{types:a[0].getInterfaces()}}),{c(){b(e.$$.fragment),r=I(),t=O("p"),n=S("Also implements "),b(s.$$.fragment)},l(f){y(e.$$.fragment,f),r=A(f),t=j(f,"P",{});var i=P(t);n=B(i,"Also implements "),y(s.$$.fragment,i),i.forEach(g)},m(f,i){v(e,f,i),w(f,r,i),w(f,t,i),N(t,n),v(s,t,null),l=!0},p(f,i){const m={};i&2&&(m.$$scope={dirty:i,ctx:f}),e.$set(m);const u={};i&1&&(u.types=f[0].getInterfaces()),s.$set(u)},i(f){l||(p(e.$$.fragment,f),p(s.$$.fragment,f),l=!0)},o(f){_(e.$$.fragment,f),_(s.$$.fragment,f),l=!1},d(f){k(e,f),f&&g(r),f&&g(t),k(s)}}}function Ct(a){let e;return{c(){e=S("Interfaces")},l(r){e=B(r,"Interfaces")},m(r,t){w(r,e,t)},d(r){r&&g(e)}}}function Lt(a){let e,r,t,n,s,l=Object.keys(a[0].getFields()).length>0,f,i=a[0].getInterfaces().length>0,m;r=new H({props:{id:"title",depth:1,$$slots:{default:[Rt]},$$scope:{ctx:a}}}),n=new Q({props:{source:a[0].description}});let u=l&&Ie(a),o=i&&Ae(a);return{c(){e=O("section"),b(r.$$.fragment),t=I(),b(n.$$.fragment),s=I(),u&&u.c(),f=I(),o&&o.c()},l(c){e=j(c,"SECTION",{});var d=P(e);y(r.$$.fragment,d),t=A(d),y(n.$$.fragment,d),s=A(d),u&&u.l(d),f=A(d),o&&o.l(d),d.forEach(g)},m(c,d){w(c,e,d),v(r,e,null),N(e,t),v(n,e,null),N(e,s),u&&u.m(e,null),N(e,f),o&&o.m(e,null),m=!0},p(c,[d]){const F={};d&3&&(F.$$scope={dirty:d,ctx:c}),r.$set(F);const E={};d&1&&(E.source=c[0].description),n.$set(E),d&1&&(l=Object.keys(c[0].getFields()).length>0),l?u?(u.p(c,d),d&1&&p(u,1)):(u=Ie(c),u.c(),p(u,1),u.m(e,f)):u&&(U(),_(u,1,1,()=>{u=null}),V()),d&1&&(i=c[0].getInterfaces().length>0),i?o?(o.p(c,d),d&1&&p(o,1)):(o=Ae(c),o.c(),p(o,1),o.m(e,null)):o&&(U(),_(o,1,1,()=>{o=null}),V())},i(c){m||(p(r.$$.fragment,c),p(n.$$.fragment,c),p(u),p(o),m=!0)},o(c){_(r.$$.fragment,c),_(n.$$.fragment,c),_(u),_(o),m=!1},d(c){c&&g(e),k(r),k(n),u&&u.d(),o&&o.d()}}}const Ne=a=>a;function Dt(a,e,r){let{type:t}=e;return a.$$set=n=>{"type"in n&&r(0,t=n.type)},[t]}class Mt extends C{constructor(e){super(),L(this,e,Dt,Lt,D,{type:0})}}function Ut(a){let e=a[0].name+"",r,t,n,s;return n=new W({props:{type:a[0]}}),{c(){r=S(e),t=I(),b(n.$$.fragment)},l(l){r=B(l,e),t=A(l),y(n.$$.fragment,l)},m(l,f){w(l,r,f),w(l,t,f),v(n,l,f),s=!0},p(l,f){(!s||f&1)&&e!==(e=l[0].name+"")&&M(r,e);const i={};f&1&&(i.type=l[0]),n.$set(i)},i(l){s||(p(n.$$.fragment,l),s=!0)},o(l){_(n.$$.fragment,l),s=!1},d(l){l&&g(r),l&&g(t),k(n,l)}}}function Fe(a){let e,r,t,n;return e=new H({props:{id:"fields",depth:2,$$slots:{default:[Vt]},$$scope:{ctx:a}}}),t=new Ge({props:{data:Y.map(a[0].getFields(),Be)}}),{c(){b(e.$$.fragment),r=I(),b(t.$$.fragment)},l(s){y(e.$$.fragment,s),r=A(s),y(t.$$.fragment,s)},m(s,l){v(e,s,l),w(s,r,l),v(t,s,l),n=!0},p(s,l){const f={};l&2&&(f.$$scope={dirty:l,ctx:s}),e.$set(f);const i={};l&1&&(i.data=Y.map(s[0].getFields(),Be)),t.$set(i)},i(s){n||(p(e.$$.fragment,s),p(t.$$.fragment,s),n=!0)},o(s){_(e.$$.fragment,s),_(t.$$.fragment,s),n=!1},d(s){k(e,s),s&&g(r),k(t,s)}}}function Vt(a){let e;return{c(){e=S("Fields")},l(r){e=B(r,"Fields")},m(r,t){w(r,e,t)},d(r){r&&g(e)}}}function Se(a){let e,r,t,n,s,l;return e=new H({props:{id:"interfaces",depth:2,$$slots:{default:[Ht]},$$scope:{ctx:a}}}),s=new $e({props:{types:a[0].getInterfaces()}}),{c(){b(e.$$.fragment),r=I(),t=O("p"),n=S("Also implements "),b(s.$$.fragment)},l(f){y(e.$$.fragment,f),r=A(f),t=j(f,"P",{});var i=P(t);n=B(i,"Also implements "),y(s.$$.fragment,i),i.forEach(g)},m(f,i){v(e,f,i),w(f,r,i),w(f,t,i),N(t,n),v(s,t,null),l=!0},p(f,i){const m={};i&2&&(m.$$scope={dirty:i,ctx:f}),e.$set(m);const u={};i&1&&(u.types=f[0].getInterfaces()),s.$set(u)},i(f){l||(p(e.$$.fragment,f),p(s.$$.fragment,f),l=!0)},o(f){_(e.$$.fragment,f),_(s.$$.fragment,f),l=!1},d(f){k(e,f),f&&g(r),f&&g(t),k(s)}}}function Ht(a){let e;return{c(){e=S("Interfaces")},l(r){e=B(r,"Interfaces")},m(r,t){w(r,e,t)},d(r){r&&g(e)}}}function qt(a){let e,r,t,n,s,l=Object.keys(a[0].getFields()).length>0,f,i=a[0].getInterfaces().length>0,m;r=new H({props:{id:"title",depth:1,$$slots:{default:[Ut]},$$scope:{ctx:a}}}),n=new Q({props:{source:a[0].description}});let u=l&&Fe(a),o=i&&Se(a);return{c(){e=O("section"),b(r.$$.fragment),t=I(),b(n.$$.fragment),s=I(),u&&u.c(),f=I(),o&&o.c()},l(c){e=j(c,"SECTION",{});var d=P(e);y(r.$$.fragment,d),t=A(d),y(n.$$.fragment,d),s=A(d),u&&u.l(d),f=A(d),o&&o.l(d),d.forEach(g)},m(c,d){w(c,e,d),v(r,e,null),N(e,t),v(n,e,null),N(e,s),u&&u.m(e,null),N(e,f),o&&o.m(e,null),m=!0},p(c,[d]){const F={};d&3&&(F.$$scope={dirty:d,ctx:c}),r.$set(F);const E={};d&1&&(E.source=c[0].description),n.$set(E),d&1&&(l=Object.keys(c[0].getFields()).length>0),l?u?(u.p(c,d),d&1&&p(u,1)):(u=Fe(c),u.c(),p(u,1),u.m(e,f)):u&&(U(),_(u,1,1,()=>{u=null}),V()),d&1&&(i=c[0].getInterfaces().length>0),i?o?(o.p(c,d),d&1&&p(o,1)):(o=Se(c),o.c(),p(o,1),o.m(e,null)):o&&(U(),_(o,1,1,()=>{o=null}),V())},i(c){m||(p(r.$$.fragment,c),p(n.$$.fragment,c),p(u),p(o),m=!0)},o(c){_(r.$$.fragment,c),_(n.$$.fragment,c),_(u),_(o),m=!1},d(c){c&&g(e),k(r),k(n),u&&u.d(),o&&o.d()}}}const Be=a=>a;function Yt(a,e,r){let{type:t}=e;return a.$$set=n=>{"type"in n&&r(0,t=n.type)},[t]}class Qt extends C{constructor(e){super(),L(this,e,Yt,qt,D,{type:0})}}function Gt(a){let e=a[0].name+"",r,t,n,s;return n=new W({props:{type:a[0]}}),{c(){r=S(e),t=I(),b(n.$$.fragment)},l(l){r=B(l,e),t=A(l),y(n.$$.fragment,l)},m(l,f){w(l,r,f),w(l,t,f),v(n,l,f),s=!0},p(l,f){(!s||f&1)&&e!==(e=l[0].name+"")&&M(r,e);const i={};f&1&&(i.type=l[0]),n.$set(i)},i(l){s||(p(n.$$.fragment,l),s=!0)},o(l){_(n.$$.fragment,l),s=!1},d(l){l&&g(r),l&&g(t),k(n,l)}}}function Jt(a){let e;return{c(){e=S("Types")},l(r){e=B(r,"Types")},m(r,t){w(r,e,t)},d(r){r&&g(e)}}}function Kt(a){let e,r,t,n,s,l,f,i,m,u,o;return r=new H({props:{id:"title",depth:1,$$slots:{default:[Gt]},$$scope:{ctx:a}}}),n=new Q({props:{source:a[0].description}}),l=new H({props:{id:"types",depth:2,$$slots:{default:[Jt]},$$scope:{ctx:a}}}),u=new $e({props:{types:a[0].getTypes()}}),{c(){e=O("section"),b(r.$$.fragment),t=I(),b(n.$$.fragment),s=I(),b(l.$$.fragment),f=I(),i=O("p"),m=S("Union of types "),b(u.$$.fragment)},l(c){e=j(c,"SECTION",{});var d=P(e);y(r.$$.fragment,d),t=A(d),y(n.$$.fragment,d),s=A(d),y(l.$$.fragment,d),f=A(d),i=j(d,"P",{});var F=P(i);m=B(F,"Union of types "),y(u.$$.fragment,F),F.forEach(g),d.forEach(g)},m(c,d){w(c,e,d),v(r,e,null),N(e,t),v(n,e,null),N(e,s),v(l,e,null),N(e,f),N(e,i),N(i,m),v(u,i,null),o=!0},p(c,[d]){const F={};d&3&&(F.$$scope={dirty:d,ctx:c}),r.$set(F);const E={};d&1&&(E.source=c[0].description),n.$set(E);const T={};d&2&&(T.$$scope={dirty:d,ctx:c}),l.$set(T);const $={};d&1&&($.types=c[0].getTypes()),u.$set($)},i(c){o||(p(r.$$.fragment,c),p(n.$$.fragment,c),p(l.$$.fragment,c),p(u.$$.fragment,c),o=!0)},o(c){_(r.$$.fragment,c),_(n.$$.fragment,c),_(l.$$.fragment,c),_(u.$$.fragment,c),o=!1},d(c){c&&g(e),k(r),k(n),k(l),k(u)}}}function Wt(a,e,r){let{type:t}=e;return a.$$set=n=>{"type"in n&&r(0,t=n.type)},[t]}class Xt extends C{constructor(e){super(),L(this,e,Wt,Kt,D,{type:0})}}function Pe(a,e,r){const t=a.slice();return t[2]=e[r],t}function Oe(a){let e,r=a[2].description+"",t;return{c(){e=O("p"),t=S(r)},l(n){e=j(n,"P",{});var s=P(e);t=B(s,r),s.forEach(g)},m(n,s){w(n,e,s),N(e,t)},p(n,s){s&1&&r!==(r=n[2].description+"")&&M(t,r)},d(n){n&&g(e)}}}function je(a){let e,r,t;return r=new nt({props:{value:a[2].default}}),{c(){e=S("Default: "),b(r.$$.fragment)},l(n){e=B(n,"Default: "),y(r.$$.fragment,n)},m(n,s){w(n,e,s),v(r,n,s),t=!0},p(n,s){const l={};s&1&&(l.value=n[2].default),r.$set(l)},i(n){t||(p(r.$$.fragment,n),t=!0)},o(n){_(r.$$.fragment,n),t=!1},d(n){n&&g(e),k(r,n)}}}function Zt(a){let e,r,t=a[2].name+"",n,s,l,f,i,m,u,o,c,d,F;l=new Ye({props:{type:a[2].type}}),i=new ue({props:{reason:a[2].deprecationReason}}),u=new Qe({props:{type:a[2].type}});let E=a[2].description&&Oe(a),T=a[2].default&&je(a);return{c(){e=O("p"),r=O("span"),n=S(t),s=I(),b(l.$$.fragment),f=I(),b(i.$$.fragment),m=I(),b(u.$$.fragment),o=I(),E&&E.c(),c=I(),T&&T.c(),d=R(),this.h()},l($){e=j($,"P",{});var h=P(e);r=j(h,"SPAN",{style:!0});var z=P(r);n=B(z,t),z.forEach(g),s=A(h),y(l.$$.fragment,h),f=A(h),y(i.$$.fragment,h),m=A(h),y(u.$$.fragment,h),h.forEach(g),o=A($),E&&E.l($),c=A($),T&&T.l($),d=R(),this.h()},h(){le(r,"font-weight","bold")},m($,h){w($,e,h),N(e,r),N(r,n),N(e,s),v(l,e,null),N(e,f),v(i,e,null),N(e,m),v(u,e,null),w($,o,h),E&&E.m($,h),w($,c,h),T&&T.m($,h),w($,d,h),F=!0},p($,h){(!F||h&1)&&t!==(t=$[2].name+"")&&M(n,t);const z={};h&1&&(z.type=$[2].type),l.$set(z);const q={};h&1&&(q.reason=$[2].deprecationReason),i.$set(q);const X={};h&1&&(X.type=$[2].type),u.$set(X),$[2].description?E?E.p($,h):(E=Oe($),E.c(),E.m(c.parentNode,c)):E&&(E.d(1),E=null),$[2].default?T?(T.p($,h),h&1&&p(T,1)):(T=je($),T.c(),p(T,1),T.m(d.parentNode,d)):T&&(U(),_(T,1,1,()=>{T=null}),V())},i($){F||(p(l.$$.fragment,$),p(i.$$.fragment,$),p(u.$$.fragment,$),p(T),F=!0)},o($){_(l.$$.fragment,$),_(i.$$.fragment,$),_(u.$$.fragment,$),_(T),F=!1},d($){$&&g(e),k(l),k(i),k(u),$&&g(o),E&&E.d($),$&&g(c),T&&T.d($),$&&g(d)}}}function xt(a){let e,r,t;return e=new ie({props:{$$slots:{default:[Zt]},$$scope:{ctx:a}}}),{c(){b(e.$$.fragment),r=I()},l(n){y(e.$$.fragment,n),r=A(n)},m(n,s){v(e,n,s),w(n,r,s),t=!0},p(n,s){const l={};s&33&&(l.$$scope={dirty:s,ctx:n}),e.$set(l)},i(n){t||(p(e.$$.fragment,n),t=!0)},o(n){_(e.$$.fragment,n),t=!1},d(n){k(e,n),n&&g(r)}}}function Re(a){let e,r;return e=new ae({props:{$$slots:{default:[xt]},$$scope:{ctx:a}}}),{c(){b(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,n){v(e,t,n),r=!0},p(t,n){const s={};n&33&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){_(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function en(a){let e,r,t=a[0],n=[];for(let l=0;l<t.length;l+=1)n[l]=Re(Pe(a,t,l));const s=l=>_(n[l],1,1,()=>{n[l]=null});return{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=R()},l(l){for(let f=0;f<n.length;f+=1)n[f].l(l);e=R()},m(l,f){for(let i=0;i<n.length;i+=1)n[i].m(l,f);w(l,e,f),r=!0},p(l,f){if(f&1){t=l[0];let i;for(i=0;i<t.length;i+=1){const m=Pe(l,t,i);n[i]?(n[i].p(m,f),p(n[i],1)):(n[i]=Re(m),n[i].c(),p(n[i],1),n[i].m(e.parentNode,e))}for(U(),i=t.length;i<n.length;i+=1)s(i);V()}},i(l){if(!r){for(let f=0;f<t.length;f+=1)p(n[f]);r=!0}},o(l){n=n.filter(Boolean);for(let f=0;f<n.length;f+=1)_(n[f]);r=!1},d(l){ne(n,l),l&&g(e)}}}function tn(a){let e,r;return e=new fe({props:{$$slots:{default:[en]},$$scope:{ctx:a}}}),{c(){b(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,n){v(e,t,n),r=!0},p(t,n){const s={};n&33&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){_(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function nn(a){let e,r;return e=new se({props:{condensed:!0,$$slots:{default:[tn]},$$scope:{ctx:a}}}),{c(){b(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,n){v(e,t,n),r=!0},p(t,[n]){const s={};n&33&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){_(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function rn(a,e,r){let t,{data:n}=e;return a.$$set=s=>{"data"in s&&r(1,n=s.data)},a.$$.update=()=>{a.$$.dirty&2&&r(0,t=Y.sortBy(n.map(s=>({id:s.name,deprecationReason:s.deprecationReason,name:s.name,type:s.type,description:s.description,default:s.defaultValue})),s=>s.name)||[])},[t,n]}class ln extends C{constructor(e){super(),L(this,e,rn,nn,D,{data:1})}}function sn(a){let e=a[0].name+"",r,t,n,s;return n=new W({props:{type:a[0]}}),{c(){r=S(e),t=I(),b(n.$$.fragment)},l(l){r=B(l,e),t=A(l),y(n.$$.fragment,l)},m(l,f){w(l,r,f),w(l,t,f),v(n,l,f),s=!0},p(l,f){(!s||f&1)&&e!==(e=l[0].name+"")&&M(r,e);const i={};f&1&&(i.type=l[0]),n.$set(i)},i(l){s||(p(n.$$.fragment,l),s=!0)},o(l){_(n.$$.fragment,l),s=!1},d(l){l&&g(r),l&&g(t),k(n,l)}}}function ze(a){let e,r,t,n;return e=new H({props:{id:"fields",depth:2,$$slots:{default:[fn]},$$scope:{ctx:a}}}),t=new ln({props:{data:Y.map(a[0].getFields(),Ce)}}),{c(){b(e.$$.fragment),r=I(),b(t.$$.fragment)},l(s){y(e.$$.fragment,s),r=A(s),y(t.$$.fragment,s)},m(s,l){v(e,s,l),w(s,r,l),v(t,s,l),n=!0},p(s,l){const f={};l&2&&(f.$$scope={dirty:l,ctx:s}),e.$set(f);const i={};l&1&&(i.data=Y.map(s[0].getFields(),Ce)),t.$set(i)},i(s){n||(p(e.$$.fragment,s),p(t.$$.fragment,s),n=!0)},o(s){_(e.$$.fragment,s),_(t.$$.fragment,s),n=!1},d(s){k(e,s),s&&g(r),k(t,s)}}}function fn(a){let e;return{c(){e=S("Fields")},l(r){e=B(r,"Fields")},m(r,t){w(r,e,t)},d(r){r&&g(e)}}}function an(a){let e,r,t,n,s,l=Object.keys(a[0].getFields()).length>0,f;r=new H({props:{id:"title",depth:1,$$slots:{default:[sn]},$$scope:{ctx:a}}}),n=new Q({props:{source:a[0].description}});let i=l&&ze(a);return{c(){e=O("section"),b(r.$$.fragment),t=I(),b(n.$$.fragment),s=I(),i&&i.c()},l(m){e=j(m,"SECTION",{});var u=P(e);y(r.$$.fragment,u),t=A(u),y(n.$$.fragment,u),s=A(u),i&&i.l(u),u.forEach(g)},m(m,u){w(m,e,u),v(r,e,null),N(e,t),v(n,e,null),N(e,s),i&&i.m(e,null),f=!0},p(m,[u]){const o={};u&3&&(o.$$scope={dirty:u,ctx:m}),r.$set(o);const c={};u&1&&(c.source=m[0].description),n.$set(c),u&1&&(l=Object.keys(m[0].getFields()).length>0),l?i?(i.p(m,u),u&1&&p(i,1)):(i=ze(m),i.c(),p(i,1),i.m(e,null)):i&&(U(),_(i,1,1,()=>{i=null}),V())},i(m){f||(p(r.$$.fragment,m),p(n.$$.fragment,m),p(i),f=!0)},o(m){_(r.$$.fragment,m),_(n.$$.fragment,m),_(i),f=!1},d(m){m&&g(e),k(r),k(n),i&&i.d()}}}const Ce=a=>a;function un(a,e,r){let{type:t}=e;return a.$$set=n=>{"type"in n&&r(0,t=n.type)},[t]}class $n extends C{constructor(e){super(),L(this,e,un,an,D,{type:0})}}function on(a){let e,r;return e=new $n({props:{type:a[0]}}),{c(){b(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,n){v(e,t,n),r=!0},p(t,n){const s={};n&1&&(s.type=t[0]),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){_(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function cn(a){let e,r;return e=new Qt({props:{type:a[0]}}),{c(){b(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,n){v(e,t,n),r=!0},p(t,n){const s={};n&1&&(s.type=t[0]),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){_(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function pn(a){let e,r;return e=new Xt({props:{type:a[0]}}),{c(){b(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,n){v(e,t,n),r=!0},p(t,n){const s={};n&1&&(s.type=t[0]),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){_(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function mn(a){let e,r;return e=new Mt({props:{type:a[0]}}),{c(){b(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,n){v(e,t,n),r=!0},p(t,n){const s={};n&1&&(s.type=t[0]),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){_(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function gn(a){let e,r;return e=new ht({props:{type:a[0]}}),{c(){b(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,n){v(e,t,n),r=!0},p(t,n){const s={};n&1&&(s.type=t[0]),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){_(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function _n(a){let e,r;return e=new ut({props:{type:a[0]}}),{c(){b(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,n){v(e,t,n),r=!0},p(t,n){const s={};n&1&&(s.type=t[0]),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){_(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function dn(a){let e,r,t,n,s,l,f,i,m,u,o,c,d;document.title=e="Type - "+a[0].name;const F=[_n,gn,mn,pn,cn,on],E=[];function T($,h){return h&1&&(t=null),h&1&&(n=null),h&1&&(s=null),h&1&&(l=null),h&1&&(f=null),h&1&&(i=null),t==null&&(t=!!De($[0])),t?0:(n==null&&(n=!!Me($[0])),n?1:(s==null&&(s=!!Ue($[0])),s?2:(l==null&&(l=!!Ve($[0])),l?3:(f==null&&(f=!!He($[0])),f?4:(i==null&&(i=!!qe($[0])),i?5:-1)))))}return~(m=T(a,-1))&&(u=E[m]=F[m](a)),c=new Ze({props:{page:a[1]}}),{c(){r=I(),u&&u.c(),o=I(),b(c.$$.fragment)},l($){Je('[data-svelte="svelte-31uzcn"]',document.head).forEach(g),r=A($),u&&u.l($),o=A($),y(c.$$.fragment,$)},m($,h){w($,r,h),~m&&E[m].m($,h),w($,o,h),v(c,$,h),d=!0},p($,[h]){(!d||h&1)&&e!==(e="Type - "+$[0].name)&&(document.title=e);let z=m;m=T($,h),m===z?~m&&E[m].p($,h):(u&&(U(),_(E[z],1,1,()=>{E[z]=null}),V()),~m?(u=E[m],u?u.p($,h):(u=E[m]=F[m]($),u.c()),p(u,1),u.m(o.parentNode,o)):u=null);const q={};h&2&&(q.page=$[1]),c.$set(q)},i($){d||(p(u),p(c.$$.fragment,$),d=!0)},o($){_(u),_(c.$$.fragment,$),d=!1},d($){$&&g(r),~m&&E[m].d($),$&&g(o),k(c,$)}}}function Tn({params:a,url:e}){const r=We(a.type),t=Xe(e.pathname);return!r||!t?{status:404,error:`Type ${a.type} not found.`}:{props:{type:r,page:t}}}function hn(a,e,r){let{type:t}=e,{page:n}=e;return a.$$set=s=>{"type"in s&&r(0,t=s.type),"page"in s&&r(1,n=s.page)},[t,n]}class En extends C{constructor(e){super(),L(this,e,hn,dn,D,{type:0,page:1})}}export{En as default,Tn as load};
