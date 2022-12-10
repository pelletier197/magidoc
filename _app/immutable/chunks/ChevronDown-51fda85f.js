import{c as Se}from"./_commonjsHelpers-5ea1c672.js";import{S as _e,i as ye,s as we,I as H,T as W,U as G,m as I,h as S,n as Me,V as ne,b as M,W as Y,O as oe,D as ie,P as U,R as X,q as Re,r as He,u as Ie,e as Z,g as J,t as P,d as K,f as z,a6 as Ye,Y as q,Z as xe,H as ce,k as fe,a as De,l as de,c as Be,J as re,K as E,X as j,L as ge,M as he,N as pe,F as qe,v as ae,w as le,x as je,y as se,z as ue}from"./paths-e07deed9.js";typeof window<"u"&&(window.Prism=window.Prism||{},window.Prism.manual=!0);var Oe={exports:{}};(function(l){var e=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};var i=function(a){var c=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,o=0,t={},n={manual:a.Prism&&a.Prism.manual,disableWorkerMessageHandler:a.Prism&&a.Prism.disableWorkerMessageHandler,util:{encode:function u(s){return s instanceof r?new r(s.type,u(s.content),s.alias):Array.isArray(s)?s.map(u):s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(u){return Object.prototype.toString.call(u).slice(8,-1)},objId:function(u){return u.__id||Object.defineProperty(u,"__id",{value:++o}),u.__id},clone:function u(s,g){g=g||{};var p,v;switch(n.util.type(s)){case"Object":if(v=n.util.objId(s),g[v])return g[v];p={},g[v]=p;for(var _ in s)s.hasOwnProperty(_)&&(p[_]=u(s[_],g));return p;case"Array":return v=n.util.objId(s),g[v]?g[v]:(p=[],g[v]=p,s.forEach(function(y,f){p[f]=u(y,g)}),p);default:return s}},getLanguage:function(u){for(;u;){var s=c.exec(u.className);if(s)return s[1].toLowerCase();u=u.parentElement}return"none"},setLanguage:function(u,s){u.className=u.className.replace(RegExp(c,"gi"),""),u.classList.add("language-"+s)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(p){var u=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(p.stack)||[])[1];if(u){var s=document.getElementsByTagName("script");for(var g in s)if(s[g].src==u)return s[g]}return null}},isActive:function(u,s,g){for(var p="no-"+s;u;){var v=u.classList;if(v.contains(s))return!0;if(v.contains(p))return!1;u=u.parentElement}return!!g}},languages:{plain:t,plaintext:t,text:t,txt:t,extend:function(u,s){var g=n.util.clone(n.languages[u]);for(var p in s)g[p]=s[p];return g},insertBefore:function(u,s,g,p){p=p||n.languages;var v=p[u],_={};for(var y in v)if(v.hasOwnProperty(y)){if(y==s)for(var f in g)g.hasOwnProperty(f)&&(_[f]=g[f]);g.hasOwnProperty(y)||(_[y]=v[y])}var F=p[u];return p[u]=_,n.languages.DFS(n.languages,function(L,D){D===F&&L!=u&&(this[L]=_)}),_},DFS:function u(s,g,p,v){v=v||{};var _=n.util.objId;for(var y in s)if(s.hasOwnProperty(y)){g.call(s,y,s[y],p||y);var f=s[y],F=n.util.type(f);F==="Object"&&!v[_(f)]?(v[_(f)]=!0,u(f,g,null,v)):F==="Array"&&!v[_(f)]&&(v[_(f)]=!0,u(f,g,y,v))}}},plugins:{},highlightAll:function(u,s){n.highlightAllUnder(document,u,s)},highlightAllUnder:function(u,s,g){var p={callback:g,container:u,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",p),p.elements=Array.prototype.slice.apply(p.container.querySelectorAll(p.selector)),n.hooks.run("before-all-elements-highlight",p);for(var v=0,_;_=p.elements[v++];)n.highlightElement(_,s===!0,p.callback)},highlightElement:function(u,s,g){var p=n.util.getLanguage(u),v=n.languages[p];n.util.setLanguage(u,p);var _=u.parentElement;_&&_.nodeName.toLowerCase()==="pre"&&n.util.setLanguage(_,p);var y=u.textContent,f={element:u,language:p,grammar:v,code:y};function F(D){f.highlightedCode=D,n.hooks.run("before-insert",f),f.element.innerHTML=f.highlightedCode,n.hooks.run("after-highlight",f),n.hooks.run("complete",f),g&&g.call(f.element)}if(n.hooks.run("before-sanity-check",f),_=f.element.parentElement,_&&_.nodeName.toLowerCase()==="pre"&&!_.hasAttribute("tabindex")&&_.setAttribute("tabindex","0"),!f.code){n.hooks.run("complete",f),g&&g.call(f.element);return}if(n.hooks.run("before-highlight",f),!f.grammar){F(n.util.encode(f.code));return}if(s&&a.Worker){var L=new Worker(n.filename);L.onmessage=function(D){F(D.data)},L.postMessage(JSON.stringify({language:f.language,code:f.code,immediateClose:!0}))}else F(n.highlight(f.code,f.grammar,f.language))},highlight:function(u,s,g){var p={code:u,grammar:s,language:g};if(n.hooks.run("before-tokenize",p),!p.grammar)throw new Error('The language "'+p.language+'" has no grammar.');return p.tokens=n.tokenize(p.code,p.grammar),n.hooks.run("after-tokenize",p),r.stringify(n.util.encode(p.tokens),p.language)},tokenize:function(u,s){var g=s.rest;if(g){for(var p in g)s[p]=g[p];delete s.rest}var v=new h;return m(v,v.head,u),b(u,v,s,v.head,0),C(v)},hooks:{all:{},add:function(u,s){var g=n.hooks.all;g[u]=g[u]||[],g[u].push(s)},run:function(u,s){var g=n.hooks.all[u];if(!(!g||!g.length))for(var p=0,v;v=g[p++];)v(s)}},Token:r};a.Prism=n;function r(u,s,g,p){this.type=u,this.content=s,this.alias=g,this.length=(p||"").length|0}r.stringify=function u(s,g){if(typeof s=="string")return s;if(Array.isArray(s)){var p="";return s.forEach(function(F){p+=u(F,g)}),p}var v={type:s.type,content:u(s.content,g),tag:"span",classes:["token",s.type],attributes:{},language:g},_=s.alias;_&&(Array.isArray(_)?Array.prototype.push.apply(v.classes,_):v.classes.push(_)),n.hooks.run("wrap",v);var y="";for(var f in v.attributes)y+=" "+f+'="'+(v.attributes[f]||"").replace(/"/g,"&quot;")+'"';return"<"+v.tag+' class="'+v.classes.join(" ")+'"'+y+">"+v.content+"</"+v.tag+">"};function d(u,s,g,p){u.lastIndex=s;var v=u.exec(g);if(v&&p&&v[1]){var _=v[1].length;v.index+=_,v[0]=v[0].slice(_)}return v}function b(u,s,g,p,v,_){for(var y in g)if(!(!g.hasOwnProperty(y)||!g[y])){var f=g[y];f=Array.isArray(f)?f:[f];for(var F=0;F<f.length;++F){if(_&&_.cause==y+","+F)return;var L=f[F],D=L.inside,ke=!!L.lookbehind,Ae=!!L.greedy,We=L.alias;if(Ae&&!L.pattern.global){var Ge=L.pattern.toString().match(/[imsuy]*$/)[0];L.pattern=RegExp(L.pattern.source,Ge+"g")}for(var Fe=L.pattern||L,T=p.next,R=v;T!==s.tail&&!(_&&R>=_.reach);R+=T.value.length,T=T.next){var O=T.value;if(s.length>u.length)return;if(!(O instanceof r)){var Q=1,N;if(Ae){if(N=d(Fe,R,u,ke),!N||N.index>=u.length)break;var $=N.index,Ue=N.index+N[0].length,B=R;for(B+=T.value.length;$>=B;)T=T.next,B+=T.value.length;if(B-=T.value.length,R=B,T.value instanceof r)continue;for(var V=T;V!==s.tail&&(B<Ue||typeof V.value=="string");V=V.next)Q++,B+=V.value.length;Q--,O=u.slice(R,B),N.index-=R}else if(N=d(Fe,0,O,ke),!N)continue;var $=N.index,ee=N[0],me=O.slice(0,$),Ee=O.slice($+ee.length),ve=R+O.length;_&&ve>_.reach&&(_.reach=ve);var te=T.prev;me&&(te=m(s,te,me),R+=me.length),w(s,te,Q);var Ze=new r(y,D?n.tokenize(ee,D):ee,We,ee);if(T=m(s,te,Ze),Ee&&m(s,T,Ee),Q>1){var be={cause:y+","+F,reach:ve};b(u,s,g,T.prev,R,be),_&&be.reach>_.reach&&(_.reach=be.reach)}}}}}}function h(){var u={value:null,prev:null,next:null},s={value:null,prev:u,next:null};u.next=s,this.head=u,this.tail=s,this.length=0}function m(u,s,g){var p=s.next,v={value:g,prev:s,next:p};return s.next=v,p.prev=v,u.length++,v}function w(u,s,g){for(var p=s.next,v=0;v<g&&p!==u.tail;v++)p=p.next;s.next=p,p.prev=s,u.length-=v}function C(u){for(var s=[],g=u.head.next;g!==u.tail;)s.push(g.value),g=g.next;return s}if(!a.document)return a.addEventListener&&(n.disableWorkerMessageHandler||a.addEventListener("message",function(u){var s=JSON.parse(u.data),g=s.language,p=s.code,v=s.immediateClose;a.postMessage(n.highlight(p,n.languages[g],g)),v&&a.close()},!1)),n;var A=n.util.currentScript();A&&(n.filename=A.src,A.hasAttribute("data-manual")&&(n.manual=!0));function k(){n.manual||n.highlightAll()}if(!n.manual){var x=document.readyState;x==="loading"||x==="interactive"&&A&&A.defer?document.addEventListener("DOMContentLoaded",k):window.requestAnimationFrame?window.requestAnimationFrame(k):window.setTimeout(k,16)}return n}(e);l.exports&&(l.exports=i),typeof Se<"u"&&(Se.Prism=i),i.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},i.languages.markup.tag.inside["attr-value"].inside.entity=i.languages.markup.entity,i.languages.markup.doctype.inside["internal-subset"].inside=i.languages.markup,i.hooks.add("wrap",function(a){a.type==="entity"&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Object.defineProperty(i.languages.markup.tag,"addInlined",{value:function(c,o){var t={};t["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:i.languages[o]},t.cdata=/^<!\[CDATA\[|\]\]>$/i;var n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:t}};n["language-"+o]={pattern:/[\s\S]+/,inside:i.languages[o]};var r={};r[c]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return c}),"i"),lookbehind:!0,greedy:!0,inside:n},i.languages.insertBefore("markup","cdata",r)}}),Object.defineProperty(i.languages.markup.tag,"addAttribute",{value:function(a,c){i.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+a+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[c,"language-"+c],inside:i.languages[c]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),i.languages.html=i.languages.markup,i.languages.mathml=i.languages.markup,i.languages.svg=i.languages.markup,i.languages.xml=i.languages.extend("markup",{}),i.languages.ssml=i.languages.xml,i.languages.atom=i.languages.xml,i.languages.rss=i.languages.xml,function(a){var c=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+c.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+c.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+c.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+c.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:c,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},a.languages.css.atrule.inside.rest=a.languages.css;var o=a.languages.markup;o&&(o.tag.addInlined("style","css"),o.tag.addAttribute("style","css"))}(i),i.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},i.languages.javascript=i.languages.extend("clike",{"class-name":[i.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),i.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,i.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:i.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:i.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:i.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:i.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:i.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),i.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:i.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),i.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),i.languages.markup&&(i.languages.markup.tag.addInlined("script","javascript"),i.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),i.languages.js=i.languages.javascript,function(){if(typeof i>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var a="Loading…",c=function(A,k){return"✖ Error "+A+" while fetching file: "+k},o="✖ Error: File does not exist or is empty",t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},n="data-src-status",r="loading",d="loaded",b="failed",h="pre[data-src]:not(["+n+'="'+d+'"]):not(['+n+'="'+r+'"])';function m(A,k,x){var u=new XMLHttpRequest;u.open("GET",A,!0),u.onreadystatechange=function(){u.readyState==4&&(u.status<400&&u.responseText?k(u.responseText):u.status>=400?x(c(u.status,u.statusText)):x(o))},u.send(null)}function w(A){var k=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(A||"");if(k){var x=Number(k[1]),u=k[2],s=k[3];return u?s?[x,Number(s)]:[x,void 0]:[x,x]}}i.hooks.add("before-highlightall",function(A){A.selector+=", "+h}),i.hooks.add("before-sanity-check",function(A){var k=A.element;if(k.matches(h)){A.code="",k.setAttribute(n,r);var x=k.appendChild(document.createElement("CODE"));x.textContent=a;var u=k.getAttribute("data-src"),s=A.language;if(s==="none"){var g=(/\.(\w+)$/.exec(u)||[,"none"])[1];s=t[g]||g}i.util.setLanguage(x,s),i.util.setLanguage(k,s);var p=i.plugins.autoloader;p&&p.loadLanguages(s),m(u,function(v){k.setAttribute(n,d);var _=w(k.getAttribute("data-range"));if(_){var y=v.split(/\r\n?|\n/g),f=_[0],F=_[1]==null?y.length:_[1];f<0&&(f+=y.length),f=Math.max(0,Math.min(f-1,y.length)),F<0&&(F+=y.length),F=Math.max(0,Math.min(F,y.length)),v=y.slice(f,F).join(`
`),k.hasAttribute("data-start")||k.setAttribute("data-start",String(f+1))}x.textContent=v,i.highlightElement(x)},function(v){k.setAttribute(n,b),x.textContent=v})}}),i.plugins.fileHighlight={highlight:function(k){for(var x=(k||document).querySelectorAll(h),u=0,s;s=x[u++];)i.highlightElement(s)}};var C=!1;i.fileHighlight=function(){C||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),C=!0),i.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Oe);const ft=Oe.exports;(function(){if(typeof Prism>"u"||typeof document>"u")return;var l="line-numbers",e=/\n(?!$)/g,i=Prism.plugins.lineNumbers={getLine:function(t,n){if(!(t.tagName!=="PRE"||!t.classList.contains(l))){var r=t.querySelector(".line-numbers-rows");if(!!r){var d=parseInt(t.getAttribute("data-start"),10)||1,b=d+(r.children.length-1);n<d&&(n=d),n>b&&(n=b);var h=n-d;return r.children[h]}}},resize:function(t){a([t])},assumeViewportIndependence:!0};function a(t){if(t=t.filter(function(r){var d=c(r),b=d["white-space"];return b==="pre-wrap"||b==="pre-line"}),t.length!=0){var n=t.map(function(r){var d=r.querySelector("code"),b=r.querySelector(".line-numbers-rows");if(!(!d||!b)){var h=r.querySelector(".line-numbers-sizer"),m=d.textContent.split(e);h||(h=document.createElement("span"),h.className="line-numbers-sizer",d.appendChild(h)),h.innerHTML="0",h.style.display="block";var w=h.getBoundingClientRect().height;return h.innerHTML="",{element:r,lines:m,lineHeights:[],oneLinerHeight:w,sizer:h}}}).filter(Boolean);n.forEach(function(r){var d=r.sizer,b=r.lines,h=r.lineHeights,m=r.oneLinerHeight;h[b.length-1]=void 0,b.forEach(function(w,C){if(w&&w.length>1){var A=d.appendChild(document.createElement("span"));A.style.display="block",A.textContent=w}else h[C]=m})}),n.forEach(function(r){for(var d=r.sizer,b=r.lineHeights,h=0,m=0;m<b.length;m++)b[m]===void 0&&(b[m]=d.children[h++].getBoundingClientRect().height)}),n.forEach(function(r){var d=r.sizer,b=r.element.querySelector(".line-numbers-rows");d.style.display="none",d.innerHTML="",r.lineHeights.forEach(function(h,m){b.children[m].style.height=h+"px"})})}}function c(t){return t?window.getComputedStyle?getComputedStyle(t):t.currentStyle||null:null}var o=void 0;window.addEventListener("resize",function(){i.assumeViewportIndependence&&o===window.innerWidth||(o=window.innerWidth,a(Array.prototype.slice.call(document.querySelectorAll("pre."+l))))}),Prism.hooks.add("complete",function(t){if(!!t.code){var n=t.element,r=n.parentNode;if(!(!r||!/pre/i.test(r.nodeName))&&!n.querySelector(".line-numbers-rows")&&!!Prism.util.isActive(n,l)){n.classList.remove(l),r.classList.add(l);var d=t.code.match(e),b=d?d.length+1:1,h,m=new Array(b+1).join("<span></span>");h=document.createElement("span"),h.setAttribute("aria-hidden","true"),h.className="line-numbers-rows",h.innerHTML=m,r.hasAttribute("data-start")&&(r.style.counterReset="linenumber "+(parseInt(r.getAttribute("data-start"),10)-1)),t.element.appendChild(h),a([r]),Prism.hooks.run("line-numbers",t)}}}),Prism.hooks.add("line-numbers",function(t){t.plugins=t.plugins||{},t.plugins.lineNumbers=!0})})();(function(){if(typeof Prism>"u"||typeof document>"u")return;var l=[],e={},i=function(){};Prism.plugins.toolbar={};var a=Prism.plugins.toolbar.registerButton=function(t,n){var r;if(typeof n=="function"?r=n:r=function(d){var b;return typeof n.onClick=="function"?(b=document.createElement("button"),b.type="button",b.addEventListener("click",function(){n.onClick.call(this,d)})):typeof n.url=="string"?(b=document.createElement("a"),b.href=n.url):b=document.createElement("span"),n.className&&b.classList.add(n.className),b.textContent=n.text,b},t in e){console.warn('There is a button with the key "'+t+'" registered already.');return}l.push(e[t]=r)};function c(t){for(;t;){var n=t.getAttribute("data-toolbar-order");if(n!=null)return n=n.trim(),n.length?n.split(/\s*,\s*/g):[];t=t.parentElement}}var o=Prism.plugins.toolbar.hook=function(t){var n=t.element.parentNode;if(!(!n||!/pre/i.test(n.nodeName))&&!n.parentNode.classList.contains("code-toolbar")){var r=document.createElement("div");r.classList.add("code-toolbar"),n.parentNode.insertBefore(r,n),r.appendChild(n);var d=document.createElement("div");d.classList.add("toolbar");var b=l,h=c(t.element);h&&(b=h.map(function(m){return e[m]||i})),b.forEach(function(m){var w=m(t);if(!!w){var C=document.createElement("div");C.classList.add("toolbar-item"),C.appendChild(w),d.appendChild(C)}}),r.appendChild(d)}};a("label",function(t){var n=t.element.parentNode;if(!(!n||!/pre/i.test(n.nodeName))&&!!n.hasAttribute("data-label")){var r,d,b=n.getAttribute("data-label");try{d=document.querySelector("template#"+b)}catch{}return d?r=d.content:(n.hasAttribute("data-url")?(r=document.createElement("a"),r.href=n.getAttribute("data-url")):r=document.createElement("span"),r.textContent=b),r}}),Prism.hooks.add("complete",o)})();(function(){if(typeof Prism>"u"||typeof document>"u")return;if(!Prism.plugins.toolbar){console.warn("Copy to Clipboard plugin loaded before Toolbar plugin.");return}function l(o,t){o.addEventListener("click",function(){i(t)})}function e(o){var t=document.createElement("textarea");t.value=o.getText(),t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{var n=document.execCommand("copy");setTimeout(function(){n?o.success():o.error()},1)}catch(r){setTimeout(function(){o.error(r)},1)}document.body.removeChild(t)}function i(o){navigator.clipboard?navigator.clipboard.writeText(o.getText()).then(o.success,function(){e(o)}):e(o)}function a(o){window.getSelection().selectAllChildren(o)}function c(o){var t={copy:"Copy","copy-error":"Press Ctrl+C to copy","copy-success":"Copied!","copy-timeout":5e3},n="data-prismjs-";for(var r in t){for(var d=n+r,b=o;b&&!b.hasAttribute(d);)b=b.parentElement;b&&(t[r]=b.getAttribute(d))}return t}Prism.plugins.toolbar.registerButton("copy-to-clipboard",function(o){var t=o.element,n=c(t),r=document.createElement("button");r.className="copy-to-clipboard-button",r.setAttribute("type","button");var d=document.createElement("span");return r.appendChild(d),h("copy"),l(r,{getText:function(){return t.textContent},success:function(){h("copy-success"),b()},error:function(){h("copy-error"),setTimeout(function(){a(t)},1),b()}}),r;function b(){setTimeout(function(){h("copy")},n["copy-timeout"])}function h(m){d.textContent=n[m],r.setAttribute("data-copy-state",m)}})})();function Ce(l){let e,i;return{c(){e=W("title"),i=Re(l[1])},l(a){e=G(a,"title",{});var c=I(e);i=He(c,l[1]),c.forEach(S)},m(a,c){M(a,e,c),Y(e,i)},p(a,c){c&2&&Ie(i,a[1])},d(a){a&&S(e)}}}function Ve(l){let e,i,a=l[1]&&Ce(l),c=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:l[0]},{height:l[0]},l[2],l[3]],o={};for(let t=0;t<c.length;t+=1)o=H(o,c[t]);return{c(){e=W("svg"),a&&a.c(),i=W("path"),this.h()},l(t){e=G(t,"svg",{xmlns:!0,viewBox:!0,fill:!0,preserveAspectRatio:!0,width:!0,height:!0});var n=I(e);a&&a.l(n),i=G(n,"path",{d:!0}),I(i).forEach(S),n.forEach(S),this.h()},h(){Me(i,"d","M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"),ne(e,o)},m(t,n){M(t,e,n),a&&a.m(e,null),Y(e,i)},p(t,[n]){t[1]?a?a.p(t,n):(a=Ce(t),a.c(),a.m(e,i)):a&&(a.d(1),a=null),ne(e,o=oe(c,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},n&1&&{width:t[0]},n&1&&{height:t[0]},n&4&&t[2],n&8&&t[3]]))},i:ie,o:ie,d(t){t&&S(e),a&&a.d()}}}function Xe(l,e,i){let a,c;const o=["size","title"];let t=U(e,o),{size:n=16}=e,{title:r=void 0}=e;return l.$$set=d=>{i(5,e=H(H({},e),X(d))),i(3,t=U(e,o)),"size"in d&&i(0,n=d.size),"title"in d&&i(1,r=d.title)},l.$$.update=()=>{i(4,a=e["aria-label"]||e["aria-labelledby"]||r),i(2,c={"aria-hidden":a?void 0:!0,role:a?"img":void 0,focusable:Number(e.tabindex)===0?!0:void 0})},e=X(e),[n,r,c,t,a]}class Je extends _e{constructor(e){super(),ye(this,e,Xe,Ve,we,{size:0,title:1})}}const dt=Je,Ke=l=>({}),Le=l=>({}),Qe=l=>({}),Te=l=>({});function $e(l){let e,i,a,c,o,t;const n=l[10].default,r=ce(n,l,l[9],null);let d=!l[3]&&(l[8].icon||l[4])&&ze(l),b=[{rel:a=l[7].target==="_blank"?"noopener noreferrer":void 0},{href:l[2]},l[7]],h={};for(let m=0;m<b.length;m+=1)h=H(h,b[m]);return{c(){e=fe("a"),r&&r.c(),i=De(),d&&d.c(),this.h()},l(m){e=de(m,"A",{rel:!0,href:!0});var w=I(e);r&&r.l(w),i=Be(w),d&&d.l(w),w.forEach(S),this.h()},h(){re(e,h),E(e,"bx--link",!0),E(e,"bx--link--disabled",l[5]),E(e,"bx--link--inline",l[3]),E(e,"bx--link--visited",l[6]),E(e,"bx--link--sm",l[1]==="sm"),E(e,"bx--link--lg",l[1]==="lg")},m(m,w){M(m,e,w),r&&r.m(e,null),Y(e,i),d&&d.m(e,null),l[20](e),c=!0,o||(t=[j(e,"click",l[15]),j(e,"mouseover",l[16]),j(e,"mouseenter",l[17]),j(e,"mouseleave",l[18])],o=!0)},p(m,w){r&&r.p&&(!c||w&512)&&ge(r,n,m,m[9],c?pe(n,m[9],w,null):he(m[9]),null),!m[3]&&(m[8].icon||m[4])?d?(d.p(m,w),w&280&&z(d,1)):(d=ze(m),d.c(),z(d,1),d.m(e,null)):d&&(J(),P(d,1,1,()=>{d=null}),K()),re(e,h=oe(b,[(!c||w&128&&a!==(a=m[7].target==="_blank"?"noopener noreferrer":void 0))&&{rel:a},(!c||w&4)&&{href:m[2]},w&128&&m[7]])),E(e,"bx--link",!0),E(e,"bx--link--disabled",m[5]),E(e,"bx--link--inline",m[3]),E(e,"bx--link--visited",m[6]),E(e,"bx--link--sm",m[1]==="sm"),E(e,"bx--link--lg",m[1]==="lg")},i(m){c||(z(r,m),z(d),c=!0)},o(m){P(r,m),P(d),c=!1},d(m){m&&S(e),r&&r.d(m),d&&d.d(),l[20](null),o=!1,qe(t)}}}function et(l){let e,i,a,c,o;const t=l[10].default,n=ce(t,l,l[9],null);let r=!l[3]&&(l[8].icon||l[4])&&Pe(l),d=[l[7]],b={};for(let h=0;h<d.length;h+=1)b=H(b,d[h]);return{c(){e=fe("p"),n&&n.c(),i=De(),r&&r.c(),this.h()},l(h){e=de(h,"P",{});var m=I(e);n&&n.l(m),i=Be(m),r&&r.l(m),m.forEach(S),this.h()},h(){re(e,b),E(e,"bx--link",!0),E(e,"bx--link--disabled",l[5]),E(e,"bx--link--inline",l[3]),E(e,"bx--link--visited",l[6])},m(h,m){M(h,e,m),n&&n.m(e,null),Y(e,i),r&&r.m(e,null),l[19](e),a=!0,c||(o=[j(e,"click",l[11]),j(e,"mouseover",l[12]),j(e,"mouseenter",l[13]),j(e,"mouseleave",l[14])],c=!0)},p(h,m){n&&n.p&&(!a||m&512)&&ge(n,t,h,h[9],a?pe(t,h[9],m,null):he(h[9]),null),!h[3]&&(h[8].icon||h[4])?r?(r.p(h,m),m&280&&z(r,1)):(r=Pe(h),r.c(),z(r,1),r.m(e,null)):r&&(J(),P(r,1,1,()=>{r=null}),K()),re(e,b=oe(d,[m&128&&h[7]])),E(e,"bx--link",!0),E(e,"bx--link--disabled",h[5]),E(e,"bx--link--inline",h[3]),E(e,"bx--link--visited",h[6])},i(h){a||(z(n,h),z(r),a=!0)},o(h){P(n,h),P(r),a=!1},d(h){h&&S(e),n&&n.d(h),r&&r.d(),l[19](null),c=!1,qe(o)}}}function ze(l){let e,i;const a=l[10].icon,c=ce(a,l,l[9],Le),o=c||tt(l);return{c(){e=fe("div"),o&&o.c(),this.h()},l(t){e=de(t,"DIV",{});var n=I(e);o&&o.l(n),n.forEach(S),this.h()},h(){E(e,"bx--link__icon",!0)},m(t,n){M(t,e,n),o&&o.m(e,null),i=!0},p(t,n){c?c.p&&(!i||n&512)&&ge(c,a,t,t[9],i?pe(a,t[9],n,Ke):he(t[9]),Le):o&&o.p&&(!i||n&16)&&o.p(t,i?n:-1)},i(t){i||(z(o,t),i=!0)},o(t){P(o,t),i=!1},d(t){t&&S(e),o&&o.d(t)}}}function tt(l){let e,i,a;var c=l[4];function o(t){return{}}return c&&(e=ae(c,o())),{c(){e&&le(e.$$.fragment),i=Z()},l(t){e&&je(e.$$.fragment,t),i=Z()},m(t,n){e&&se(e,t,n),M(t,i,n),a=!0},p(t,n){if(c!==(c=t[4])){if(e){J();const r=e;P(r.$$.fragment,1,0,()=>{ue(r,1)}),K()}c?(e=ae(c,o()),le(e.$$.fragment),z(e.$$.fragment,1),se(e,i.parentNode,i)):e=null}},i(t){a||(e&&z(e.$$.fragment,t),a=!0)},o(t){e&&P(e.$$.fragment,t),a=!1},d(t){t&&S(i),e&&ue(e,t)}}}function Pe(l){let e,i;const a=l[10].icon,c=ce(a,l,l[9],Te),o=c||nt(l);return{c(){e=fe("div"),o&&o.c(),this.h()},l(t){e=de(t,"DIV",{});var n=I(e);o&&o.l(n),n.forEach(S),this.h()},h(){E(e,"bx--link__icon",!0)},m(t,n){M(t,e,n),o&&o.m(e,null),i=!0},p(t,n){c?c.p&&(!i||n&512)&&ge(c,a,t,t[9],i?pe(a,t[9],n,Qe):he(t[9]),Te):o&&o.p&&(!i||n&16)&&o.p(t,i?n:-1)},i(t){i||(z(o,t),i=!0)},o(t){P(o,t),i=!1},d(t){t&&S(e),o&&o.d(t)}}}function nt(l){let e,i,a;var c=l[4];function o(t){return{}}return c&&(e=ae(c,o())),{c(){e&&le(e.$$.fragment),i=Z()},l(t){e&&je(e.$$.fragment,t),i=Z()},m(t,n){e&&se(e,t,n),M(t,i,n),a=!0},p(t,n){if(c!==(c=t[4])){if(e){J();const r=e;P(r.$$.fragment,1,0,()=>{ue(r,1)}),K()}c?(e=ae(c,o()),le(e.$$.fragment),z(e.$$.fragment,1),se(e,i.parentNode,i)):e=null}},i(t){a||(e&&z(e.$$.fragment,t),a=!0)},o(t){e&&P(e.$$.fragment,t),a=!1},d(t){t&&S(i),e&&ue(e,t)}}}function it(l){let e,i,a,c;const o=[et,$e],t=[];function n(r,d){return r[5]?0:1}return e=n(l),i=t[e]=o[e](l),{c(){i.c(),a=Z()},l(r){i.l(r),a=Z()},m(r,d){t[e].m(r,d),M(r,a,d),c=!0},p(r,[d]){let b=e;e=n(r),e===b?t[e].p(r,d):(J(),P(t[b],1,1,()=>{t[b]=null}),K(),i=t[e],i?i.p(r,d):(i=t[e]=o[e](r),i.c()),z(i,1),i.m(a.parentNode,a))},i(r){c||(z(i),c=!0)},o(r){P(i),c=!1},d(r){t[e].d(r),r&&S(a)}}}function rt(l,e,i){const a=["size","href","inline","icon","disabled","visited","ref"];let c=U(e,a),{$$slots:o={},$$scope:t}=e;const n=Ye(o);let{size:r=void 0}=e,{href:d=void 0}=e,{inline:b=!1}=e,{icon:h=void 0}=e,{disabled:m=!1}=e,{visited:w=!1}=e,{ref:C=null}=e;function A(f){q.call(this,l,f)}function k(f){q.call(this,l,f)}function x(f){q.call(this,l,f)}function u(f){q.call(this,l,f)}function s(f){q.call(this,l,f)}function g(f){q.call(this,l,f)}function p(f){q.call(this,l,f)}function v(f){q.call(this,l,f)}function _(f){xe[f?"unshift":"push"](()=>{C=f,i(0,C)})}function y(f){xe[f?"unshift":"push"](()=>{C=f,i(0,C)})}return l.$$set=f=>{e=H(H({},e),X(f)),i(7,c=U(e,a)),"size"in f&&i(1,r=f.size),"href"in f&&i(2,d=f.href),"inline"in f&&i(3,b=f.inline),"icon"in f&&i(4,h=f.icon),"disabled"in f&&i(5,m=f.disabled),"visited"in f&&i(6,w=f.visited),"ref"in f&&i(0,C=f.ref),"$$scope"in f&&i(9,t=f.$$scope)},[C,r,d,b,h,m,w,c,n,t,o,A,k,x,u,s,g,p,v,_,y]}class at extends _e{constructor(e){super(),ye(this,e,rt,it,we,{size:1,href:2,inline:3,icon:4,disabled:5,visited:6,ref:0})}}const gt=at;function Ne(l){let e,i;return{c(){e=W("title"),i=Re(l[1])},l(a){e=G(a,"title",{});var c=I(e);i=He(c,l[1]),c.forEach(S)},m(a,c){M(a,e,c),Y(e,i)},p(a,c){c&2&&Ie(i,a[1])},d(a){a&&S(e)}}}function lt(l){let e,i,a=l[1]&&Ne(l),c=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:l[0]},{height:l[0]},l[2],l[3]],o={};for(let t=0;t<c.length;t+=1)o=H(o,c[t]);return{c(){e=W("svg"),a&&a.c(),i=W("path"),this.h()},l(t){e=G(t,"svg",{xmlns:!0,viewBox:!0,fill:!0,preserveAspectRatio:!0,width:!0,height:!0});var n=I(e);a&&a.l(n),i=G(n,"path",{d:!0}),I(i).forEach(S),n.forEach(S),this.h()},h(){Me(i,"d","M16 22L6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z"),ne(e,o)},m(t,n){M(t,e,n),a&&a.m(e,null),Y(e,i)},p(t,[n]){t[1]?a?a.p(t,n):(a=Ne(t),a.c(),a.m(e,i)):a&&(a.d(1),a=null),ne(e,o=oe(c,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},n&1&&{width:t[0]},n&1&&{height:t[0]},n&4&&t[2],n&8&&t[3]]))},i:ie,o:ie,d(t){t&&S(e),a&&a.d()}}}function st(l,e,i){let a,c;const o=["size","title"];let t=U(e,o),{size:n=16}=e,{title:r=void 0}=e;return l.$$set=d=>{i(5,e=H(H({},e),X(d))),i(3,t=U(e,o)),"size"in d&&i(0,n=d.size),"title"in d&&i(1,r=d.title)},l.$$.update=()=>{i(4,a=e["aria-label"]||e["aria-labelledby"]||r),i(2,c={"aria-hidden":a?void 0:!0,role:a?"img":void 0,focusable:Number(e.tabindex)===0?!0:void 0})},e=X(e),[n,r,c,t,a]}class ut extends _e{constructor(e){super(),ye(this,e,st,lt,we,{size:0,title:1})}}const ht=ut;export{dt as C,gt as L,ft as P,ht as a};
