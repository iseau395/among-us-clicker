!function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a,i;function l(t,e){return a||(a=document.createElement("a")),a.href=e,t===a.href}function u(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function f(t,e,n){return t.set(n),e}function d(t,e){t.appendChild(e)}function h(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function g(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function b(){return $(" ")}function x(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function w(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function _(t){i=t}function M(){if(!i)throw new Error("Function called outside component initialization");return i}function k(){const t=M();return(e,n,{cancelable:o=!1}={})=>{const r=t.$$.callbacks[e];if(r){const s=function(t,e,{bubbles:n=!1,cancelable:o=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,o,e),r}(e,n,{cancelable:o});return r.slice().forEach((e=>{e.call(t,s)})),!s.defaultPrevented}return!0}}function E(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const S=[],I=[],z=[],A=[],q=Promise.resolve();let T=!1;function C(t){z.push(t)}const P=new Set;let j=0;function D(){const t=i;do{for(;j<S.length;){const t=S[j];j++,_(t),N(t.$$)}for(_(null),S.length=0,j=0;I.length;)I.pop()();for(let t=0;t<z.length;t+=1){const e=z[t];P.has(e)||(P.add(e),e())}z.length=0}while(S.length);for(;A.length;)A.pop()();T=!1,P.clear(),_(t)}function N(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const F=new Set;let L;function O(t,e){t&&t.i&&(F.delete(t),t.i(e))}function B(t,e,n,o){if(t&&t.o){if(F.has(t))return;F.add(t),L.c.push((()=>{F.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}function H(t){t&&t.c()}function W(t,e,o,c){const{fragment:a,on_mount:i,on_destroy:l,after_update:u}=t.$$;a&&a.m(e,o),c||C((()=>{const e=i.map(n).filter(s);l?l.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(C)}function G(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function J(t,e){-1===t.$$.dirty[0]&&(S.push(t),T||(T=!0,q.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function K(e,n,s,c,a,l,u,f=[-1]){const d=i;_(e);const h=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:o(),dirty:f,skip_bound:!1,root:n.target||d.$$.root};u&&u(h.root);let g=!1;if(h.ctx=s?s(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return h.ctx&&a(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),g&&J(e,t)),n})):[],h.update(),g=!0,r(h.before_update),h.fragment=!!c&&c(h.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);h.fragment&&h.fragment.l(t),t.forEach(m)}else h.fragment&&h.fragment.c();n.intro&&O(e.$$.fragment),W(e,n.target,n.anchor,n.customElement),D()}_(d)}class Q{$destroy(){G(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const R=[];const U=function(e,n=t){let o;const r=new Set;function s(t){if(c(e,t)&&(e=t,o)){const t=!R.length;for(const t of r)t[1](),R.push(t,e);if(t){for(let t=0;t<R.length;t+=2)R[t][0](R[t+1]);R.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,a=t){const i=[c,a];return r.add(i),1===r.size&&(o=n(s)||t),c(e),()=>{r.delete(i),0===r.size&&(o(),o=null)}}}}(0);function V(e){let n,o,s,c,a,i,l,u,f,g,_,M,k;return{c(){n=p("div"),o=p("div"),s=p("h1"),c=$(e[0]),a=b(),i=p("p"),l=$(e[1]),u=b(),f=p("p"),g=$(e[2]),v(s,"class","svelte-13bqun9"),v(i,"class","svelte-13bqun9"),v(o,"class","text"),w(f,"font-size","xx-large"),v(f,"class","svelte-13bqun9"),v(n,"class","button svelte-13bqun9"),v(n,"style",_=e[3]?"box-shadow: 0px 0px; margin-top: 23px; margin-left: 23px":"box-shadow: 3px 3px")},m(t,r){h(t,n,r),d(n,o),d(o,s),d(s,c),d(o,a),d(o,i),d(i,l),d(n,u),d(n,f),d(f,g),M||(k=[x(n,"click",e[5]),x(n,"mousedown",e[4])],M=!0)},p(t,[e]){1&e&&y(c,t[0]),2&e&&y(l,t[1]),4&e&&y(g,t[2]),8&e&&_!==(_=t[3]?"box-shadow: 0px 0px; margin-top: 23px; margin-left: 23px":"box-shadow: 3px 3px")&&v(n,"style",_)},i:t,o:t,d(t){t&&m(n),M=!1,r(k)}}}function X(t,e,n){let o;u(t,U,(t=>n(6,o=t)));let{name:r="Name Missing"}=e,{description:s="Description missing"}=e,{price:c}=e,a=!1;return window.addEventListener("mouseup",(()=>n(3,a=!1))),t.$$set=t=>{"name"in t&&n(0,r=t.name),"description"in t&&n(1,s=t.description),"price"in t&&n(2,c=t.price)},[r,s,c,a,function(){o>=c&&n(3,a=!0)},function(e){E.call(this,t,e)}]}globalThis.setPoints=t=>U.set(t);class Y extends Q{constructor(t){super(),K(this,t,X,V,c,{name:0,description:1,price:2})}}function Z(t,e,n){const o=t.slice();return o[7]=e[n],o}function tt(t){let n,o;const r=[t[7]];let s={};for(let t=0;t<r.length;t+=1)s=e(s,r[t]);return n=new Y({props:s}),n.$on("click",t[4]),{c(){H(n.$$.fragment)},m(t,e){W(n,t,e),o=!0},p(t,e){const o=2&e?function(t,e){const n={},o={},r={$$scope:1};let s=t.length;for(;s--;){const c=t[s],a=e[s];if(a){for(const t in c)t in a||(o[t]=1);for(const t in a)r[t]||(n[t]=a[t],r[t]=1);t[s]=a}else for(const t in c)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}(r,[(s=t[7],"object"==typeof s&&null!==s?s:{})]):{};var s;n.$set(o)},i(t){o||(O(n.$$.fragment,t),o=!0)},o(t){B(n.$$.fragment,t),o=!1},d(t){G(n,t)}}}function et(t){let e,n,o,s,c,a,i,u,f,$,y,_,M,k,E=t[1],S=[];for(let e=0;e<E.length;e+=1)S[e]=tt(Z(t,E,e));const I=t=>B(S[t],1,1,(()=>{S[t]=null}));return{c(){e=p("div"),o=b(),s=p("img"),a=b(),i=p("div"),u=p("div"),f=b(),$=p("div");for(let t=0;t<S.length;t+=1)S[t].c();v(e,"class","background svelte-77r82g"),v(e,"style",n=t[0]?"":"display: none"),l(s.src,c="./media/store-button.png")||v(s,"src","./media/store-button.png"),v(s,"alt","open store"),w(s,"right",t[0]?"40%":"0%"),v(s,"class","svelte-77r82g"),v(u,"class","store-trim svelte-77r82g"),v($,"class","store-contents svelte-77r82g"),v(i,"class","store-wrapper svelte-77r82g"),v(i,"style",y=t[0]?"":"display: none")},m(n,r){h(n,e,r),h(n,o,r),h(n,s,r),h(n,a,r),h(n,i,r),d(i,u),d(i,f),d(i,$);for(let t=0;t<S.length;t+=1)S[t].m($,null);_=!0,M||(k=x(s,"click",t[3]),M=!0)},p(t,[o]){if((!_||1&o&&n!==(n=t[0]?"":"display: none"))&&v(e,"style",n),(!_||1&o)&&w(s,"right",t[0]?"40%":"0%"),6&o){let e;for(E=t[1],e=0;e<E.length;e+=1){const n=Z(t,E,e);S[e]?(S[e].p(n,o),O(S[e],1)):(S[e]=tt(n),S[e].c(),O(S[e],1),S[e].m($,null))}for(L={r:0,c:[],p:L},e=E.length;e<S.length;e+=1)I(e);L.r||r(L.c),L=L.p}(!_||1&o&&y!==(y=t[0]?"":"display: none"))&&v(i,"style",y)},i(t){if(!_){for(let t=0;t<E.length;t+=1)O(S[t]);_=!0}},o(t){S=S.filter(Boolean);for(let t=0;t<S.length;t+=1)B(S[t]);_=!1},d(t){t&&m(e),t&&m(o),t&&m(s),t&&m(a),t&&m(i),g(S,t),M=!1,k()}}}function nt(t,e,n){let o;u(t,U,(t=>n(5,o=t)));let r=!1;const s=[{name:"Crewmate",description:"Does tasks for you!",price:50}],c=k();function a(t){o<s[t].price||(f(U,o-=s[t].price,o),c("purchase",t))}return[r,s,a,()=>n(0,r=!r),()=>a(0)]}class ot extends Q{constructor(t){super(),K(this,t,nt,et,c,{})}}class rt{constructor(t){this.regen(),this.texture=t,this.float_amount=Math.random()}regen(){this.rotation=360*Math.random(),this.float_amount=Math.round(Math.random()),this.direction=-1*(2*this.float_amount-1),this.vertical_direction=-1*(2*Math.round(Math.random())-1),this.distance=.5*Math.random(),this.height=Math.random()}}function st(t,e,n){const o=t.slice();return o[15]=e[n],o}function ct(t){let e,n;return{c(){e=p("img"),v(e,"class","background-crewmate svelte-4z7atf"),l(e.src,n=t[15].texture)||v(e,"src",n),w(e,"z-index",Math.round(20*t[15].distance)),w(e,"transform","rotate("+t[15].rotation+"deg) scale("+(t[15].distance/2+.05)+")"),w(e,"top",t[15].height*(t[0].offsetHeight-100)-200+"px"),w(e,"left",t[15].float_amount*(t[0].offsetWidth+300)-300+"px"),v(e,"alt","something floating")},m(t,n){h(t,e,n)},p(t,o){16&o&&!l(e.src,n=t[15].texture)&&v(e,"src",n),16&o&&w(e,"z-index",Math.round(20*t[15].distance)),16&o&&w(e,"transform","rotate("+t[15].rotation+"deg) scale("+(t[15].distance/2+.05)+")"),17&o&&w(e,"top",t[15].height*(t[0].offsetHeight-100)-200+"px"),17&o&&w(e,"left",t[15].float_amount*(t[0].offsetWidth+300)-300+"px")},d(t){t&&m(e)}}}function at(t){let e,n,o,r,s,c,a,i,u,f,_,M,k=Math.floor(t[5])+"",E=t[4],S=[];for(let e=0;e<E.length;e+=1)S[e]=ct(st(t,E,e));return u=new ot({}),u.$on("purchase",t[6]),{c(){e=p("p"),n=$(k),o=b(),r=p("main");for(let t=0;t<S.length;t+=1)S[t].c();s=b(),c=p("img"),i=b(),H(u.$$.fragment),v(e,"class","svelte-4z7atf"),v(c,"class","foreground-crewmate svelte-4z7atf"),l(c.src,a="./media/crewmates/red.png")||v(c,"src","./media/crewmates/red.png"),v(c,"alt","among us"),v(c,"draggable","false"),w(c,"transform","scale(0.5) rotate("+t[3]+"deg)"),w(r,"background-position",Math.floor(t[1])+"px "+Math.floor(t[2])+"px"),v(r,"class","svelte-4z7atf")},m(a,l){h(a,e,l),d(e,n),h(a,o,l),h(a,r,l);for(let t=0;t<S.length;t+=1)S[t].m(r,null);d(r,s),d(r,c),t[8](r),h(a,i,l),W(u,a,l),f=!0,_||(M=x(c,"click",t[7]),_=!0)},p(t,[e]){if((!f||32&e)&&k!==(k=Math.floor(t[5])+"")&&y(n,k),17&e){let n;for(E=t[4],n=0;n<E.length;n+=1){const o=st(t,E,n);S[n]?S[n].p(o,e):(S[n]=ct(o),S[n].c(),S[n].m(r,s))}for(;n<S.length;n+=1)S[n].d(1);S.length=E.length}(!f||8&e)&&w(c,"transform","scale(0.5) rotate("+t[3]+"deg)"),(!f||6&e)&&w(r,"background-position",Math.floor(t[1])+"px "+Math.floor(t[2])+"px")},i(t){f||(O(u.$$.fragment,t),f=!0)},o(t){B(u.$$.fragment,t),f=!1},d(n){n&&m(e),n&&m(o),n&&m(r),g(S,n),t[8](null),n&&m(i),G(u,n),_=!1,M()}}}function it(t,e,n){let o;u(t,U,(t=>n(5,o=t)));const r=["black","blue","black","brown","darkgreen"].map((t=>`./media/crewmates/${t}.png`));let s,c=0,a=0,i=0,l=[],d=0;function h(){if(localStorage.getItem("last-time")&&localStorage.getItem("last-score")&&localStorage.getItem("last-crewmate-count")){d=+localStorage.getItem("last-crewmate-count");const t=(Date.now()-6e4*+localStorage.getItem("last-time"))/1e3;f(U,o=+localStorage.getItem("last-score")+t/2,o);for(let t=0;t<d;t++)l.push(new rt(r[Math.round(Math.random()*(r.length-1))]));n(4,l)}else n(4,l=[]),d=0,f(U,o=0,o)}globalThis.resetAmongus=()=>{localStorage.clear(),h()};let m,g,p=null;var $;$=()=>{h(),function t(){n(1,c+=.05),n(2,a+=.05),n(1,c%=512),n(2,a%=512),n(3,i+=.05),n(3,i%=360);for(const t of l)t.float_amount+=t.distance/2*t.direction*.001,t.height+=t.distance*t.vertical_direction*5e-4,t.rotation+=Math.round(1984*t.distance/t.vertical_direction+2048*t.direction)%1e3/5e3,(t.float_amount>1||t.float_amount<0)&&t.regen();n(4,l),p=requestAnimationFrame(t)}(),m=setInterval((function(){f(U,o+=.025*d,o)}),50),g=setInterval((function(){localStorage.setItem("last-time",(Date.now()/6e4).toString()),localStorage.setItem("last-score",o.toString()),localStorage.setItem("last-crewmate-count",d.toString())}),1e3)},M().$$.on_mount.push($),function(t){M().$$.on_destroy.push(t)}((()=>{p&&cancelAnimationFrame(p),m&&clearTimeout(m),g&&clearTimeout(g)}));return[s,c,a,i,l,o,function(t){0==t.detail&&(l.push(new rt(r[Math.round(Math.random()*(r.length-1))])),n(4,l),d++)},()=>f(U,o++,o),function(t){I[t?"unshift":"push"]((()=>{s=t,n(0,s)}))}]}new class extends Q{constructor(t){super(),K(this,t,it,at,c,{})}}({target:document.body})}();