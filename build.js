!function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function c(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let i,a;function l(t,e){return i||(i=document.createElement("a")),i.href=e,t===i.href}function u(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function f(t,e,n){return t.set(n),e}function d(t,e){t.appendChild(e)}function h(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function g(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function b(){return $(" ")}function x(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function w(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function y(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function _(t){a=t}function k(){if(!a)throw new Error("Function called outside component initialization");return a}function M(){const t=k();return(e,n,{cancelable:o=!1}={})=>{const r=t.$$.callbacks[e];if(r){const c=function(t,e,{bubbles:n=!1,cancelable:o=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,o,e),r}(e,n,{cancelable:o});return r.slice().forEach((e=>{e.call(t,c)})),!c.defaultPrevented}return!0}}function E(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const S=[],I=[],q=[],A=[],C=Promise.resolve();let P=!1;function T(t){q.push(t)}const j=new Set;let z=0;function D(){const t=a;do{for(;z<S.length;){const t=S[z];z++,_(t),N(t.$$)}for(_(null),S.length=0,z=0;I.length;)I.pop()();for(let t=0;t<q.length;t+=1){const e=q[t];j.has(e)||(j.add(e),e())}q.length=0}while(S.length);for(;A.length;)A.pop()();P=!1,j.clear(),_(t)}function N(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const F=new Set;let L;function O(t,e){t&&t.i&&(F.delete(t),t.i(e))}function B(t,e,n,o){if(t&&t.o){if(F.has(t))return;F.add(t),L.c.push((()=>{F.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}function H(t){t&&t.c()}function W(t,e,o,s){const{fragment:i,on_mount:a,on_destroy:l,after_update:u}=t.$$;i&&i.m(e,o),s||T((()=>{const e=a.map(n).filter(c);l?l.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(T)}function G(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function J(t,e){-1===t.$$.dirty[0]&&(S.push(t),P||(P=!0,C.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function K(e,n,c,s,i,l,u,f=[-1]){const d=a;_(e);const h=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:o(),dirty:f,skip_bound:!1,root:n.target||d.$$.root};u&&u(h.root);let p=!1;if(h.ctx=c?c(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return h.ctx&&i(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),p&&J(e,t)),n})):[],h.update(),p=!0,r(h.before_update),h.fragment=!!s&&s(h.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);h.fragment&&h.fragment.l(t),t.forEach(m)}else h.fragment&&h.fragment.c();n.intro&&O(e.$$.fragment),W(e,n.target,n.anchor,n.customElement),D()}_(d)}class Q{$destroy(){G(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const R=[];const U=function(e,n=t){let o;const r=new Set;function c(t){if(s(e,t)&&(e=t,o)){const t=!R.length;for(const t of r)t[1](),R.push(t,e);if(t){for(let t=0;t<R.length;t+=2)R[t][0](R[t+1]);R.length=0}}}return{set:c,update:function(t){c(t(e))},subscribe:function(s,i=t){const a=[s,i];return r.add(a),1===r.size&&(o=n(c)||t),s(e),()=>{r.delete(a),0===r.size&&(o(),o=null)}}}}(0);function V(e){let n,o,c,s,i,a,l,u,f,p,_,k,M;return{c(){n=g("div"),o=g("div"),c=g("h1"),s=$(e[0]),i=b(),a=g("p"),l=$(e[1]),u=b(),f=g("p"),p=$(e[2]),w(c,"class","svelte-13bqun9"),w(a,"class","svelte-13bqun9"),w(o,"class","text"),y(f,"font-size","xx-large"),w(f,"class","svelte-13bqun9"),w(n,"class","button svelte-13bqun9"),w(n,"style",_=e[3]?"box-shadow: 0px 0px; margin-top: 23px; margin-left: 23px":"box-shadow: 3px 3px")},m(t,r){h(t,n,r),d(n,o),d(o,c),d(c,s),d(o,i),d(o,a),d(a,l),d(n,u),d(n,f),d(f,p),k||(M=[x(n,"click",e[5]),x(n,"mousedown",e[4])],k=!0)},p(t,[e]){1&e&&v(s,t[0]),2&e&&v(l,t[1]),4&e&&v(p,t[2]),8&e&&_!==(_=t[3]?"box-shadow: 0px 0px; margin-top: 23px; margin-left: 23px":"box-shadow: 3px 3px")&&w(n,"style",_)},i:t,o:t,d(t){t&&m(n),k=!1,r(M)}}}function X(t,e,n){let o;u(t,U,(t=>n(6,o=t)));let{name:r="Name Missing"}=e,{description:c="Description missing"}=e,{price:s}=e,i=!1;return window.addEventListener("mouseup",(()=>n(3,i=!1))),t.$$set=t=>{"name"in t&&n(0,r=t.name),"description"in t&&n(1,c=t.description),"price"in t&&n(2,s=t.price)},[r,c,s,i,function(){o>=s&&n(3,i=!0)},function(e){E.call(this,t,e)}]}globalThis.setPoints=t=>U.set(t);class Y extends Q{constructor(t){super(),K(this,t,X,V,s,{name:0,description:1,price:2})}}function Z(t,e,n){const o=t.slice();return o[7]=e[n],o}function tt(t){let n,o;const r=[t[7]];let c={};for(let t=0;t<r.length;t+=1)c=e(c,r[t]);return n=new Y({props:c}),n.$on("click",t[4]),{c(){H(n.$$.fragment)},m(t,e){W(n,t,e),o=!0},p(t,e){const o=2&e?function(t,e){const n={},o={},r={$$scope:1};let c=t.length;for(;c--;){const s=t[c],i=e[c];if(i){for(const t in s)t in i||(o[t]=1);for(const t in i)r[t]||(n[t]=i[t],r[t]=1);t[c]=i}else for(const t in s)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}(r,[(c=t[7],"object"==typeof c&&null!==c?c:{})]):{};var c;n.$set(o)},i(t){o||(O(n.$$.fragment,t),o=!0)},o(t){B(n.$$.fragment,t),o=!1},d(t){G(n,t)}}}function et(t){let e,n,o,c,s,i,a,u,f,$,v,_,k,M=t[1],E=[];for(let e=0;e<M.length;e+=1)E[e]=tt(Z(t,M,e));const S=t=>B(E[t],1,1,(()=>{E[t]=null}));return{c(){e=g("div"),o=b(),c=g("img"),i=b(),a=g("div"),u=g("div"),f=b(),$=g("div");for(let t=0;t<E.length;t+=1)E[t].c();w(e,"class","background svelte-16dh2c5"),w(e,"style",n=t[0]?"":"display: none"),l(c.src,s="./media/store-button.png")||w(c,"src","./media/store-button.png"),w(c,"alt","open store"),y(c,"right",t[0]?"40%":"0%"),w(c,"class","svelte-16dh2c5"),w(u,"class","store-trim svelte-16dh2c5"),w($,"class","store-contents svelte-16dh2c5"),w(a,"class","store-wrapper svelte-16dh2c5"),y(a,"left",t[0]?"60%":"100%")},m(n,r){h(n,e,r),h(n,o,r),h(n,c,r),h(n,i,r),h(n,a,r),d(a,u),d(a,f),d(a,$);for(let t=0;t<E.length;t+=1)E[t].m($,null);v=!0,_||(k=x(c,"click",t[3]),_=!0)},p(t,[o]){if((!v||1&o&&n!==(n=t[0]?"":"display: none"))&&w(e,"style",n),(!v||1&o)&&y(c,"right",t[0]?"40%":"0%"),6&o){let e;for(M=t[1],e=0;e<M.length;e+=1){const n=Z(t,M,e);E[e]?(E[e].p(n,o),O(E[e],1)):(E[e]=tt(n),E[e].c(),O(E[e],1),E[e].m($,null))}for(L={r:0,c:[],p:L},e=M.length;e<E.length;e+=1)S(e);L.r||r(L.c),L=L.p}(!v||1&o)&&y(a,"left",t[0]?"60%":"100%")},i(t){if(!v){for(let t=0;t<M.length;t+=1)O(E[t]);v=!0}},o(t){E=E.filter(Boolean);for(let t=0;t<E.length;t+=1)B(E[t]);v=!1},d(t){t&&m(e),t&&m(o),t&&m(c),t&&m(i),t&&m(a),p(E,t),_=!1,k()}}}function nt(t,e,n){let o;u(t,U,(t=>n(5,o=t)));let r=!1;const c=[{name:"Crewmate",description:"Does tasks for you!",price:50}],s=M();function i(t){o<c[t].price||(f(U,o-=c[t].price,o),s("purchase",t))}return[r,c,i,()=>n(0,r=!r),()=>i(0)]}class ot extends Q{constructor(t){super(),K(this,t,nt,et,s,{})}}class rt{constructor(t){this.texture=t,this.regen(),this.float_amount=Math.random()}regen(){this.rotation=360*Math.random(),this.float_amount=Math.round(Math.random()),this.direction=-1*(2*this.float_amount-1),this.vertical_direction=-1*(2*Math.round(Math.random())-1),this.distance=.5*Math.random(),this.height=Math.random()}tick(){this.float_amount+=this.distance}}function ct(t,e,n){const o=t.slice();return o[12]=e[n],o}function st(t){let e,n;return{c(){e=g("img"),w(e,"class","background-crewmate svelte-yfuauq"),l(e.src,n=t[12].texture)||w(e,"src",n),y(e,"rotate",t[12].rotation+"deg"),y(e,"transform","scale("+(t[12].distance/2+.05)+")"),y(e,"top",t[12].height*(window.innerHeight-100)-200+"px"),y(e,"left",t[12].float_amount*(window.innerWidth+300)-300+"px"),w(e,"alt","something floating")},m(t,n){h(t,e,n)},p(t,o){8&o&&!l(e.src,n=t[12].texture)&&w(e,"src",n),8&o&&y(e,"rotate",t[12].rotation+"deg"),8&o&&y(e,"transform","scale("+(t[12].distance/2+.05)+")"),8&o&&y(e,"top",t[12].height*(window.innerHeight-100)-200+"px"),8&o&&y(e,"left",t[12].float_amount*(window.innerWidth+300)-300+"px")},d(t){t&&m(e)}}}function it(t){let e,n,o,r,c,s,i,a,u,f,_,k,M=Math.floor(t[4])+"",E=t[3],S=[];for(let e=0;e<E.length;e+=1)S[e]=st(ct(t,E,e));return u=new ot({}),u.$on("purchase",t[5]),{c(){e=g("p"),n=$(M),o=b(),r=g("main");for(let t=0;t<S.length;t+=1)S[t].c();c=b(),s=g("img"),a=b(),H(u.$$.fragment),w(e,"class","svelte-yfuauq"),w(s,"class","foreground-crewmate svelte-yfuauq"),l(s.src,i="./media/crewmates/red.png")||w(s,"src","./media/crewmates/red.png"),w(s,"alt","among us"),w(s,"draggable","false"),y(s,"rotate",t[2]+"deg"),y(r,"background-position",Math.floor(t[0])+"px "+Math.floor(t[1])+"px"),w(r,"class","svelte-yfuauq")},m(i,l){h(i,e,l),d(e,n),h(i,o,l),h(i,r,l);for(let t=0;t<S.length;t+=1)S[t].m(r,null);d(r,c),d(r,s),h(i,a,l),W(u,i,l),f=!0,_||(k=x(s,"click",t[6]),_=!0)},p(t,[e]){if((!f||16&e)&&M!==(M=Math.floor(t[4])+"")&&v(n,M),8&e){let n;for(E=t[3],n=0;n<E.length;n+=1){const o=ct(t,E,n);S[n]?S[n].p(o,e):(S[n]=st(o),S[n].c(),S[n].m(r,c))}for(;n<S.length;n+=1)S[n].d(1);S.length=E.length}(!f||4&e)&&y(s,"rotate",t[2]+"deg"),(!f||3&e)&&y(r,"background-position",Math.floor(t[0])+"px "+Math.floor(t[1])+"px")},i(t){f||(O(u.$$.fragment,t),f=!0)},o(t){B(u.$$.fragment,t),f=!1},d(t){t&&m(e),t&&m(o),t&&m(r),p(S,t),t&&m(a),G(u,t),_=!1,k()}}}function at(t,e,n){let o;u(t,U,(t=>n(4,o=t)));const r=["black","blue","black","brown","darkgreen"].map((t=>`./media/crewmates/${t}.png`));let c=0,s=0,i=0,a=[],l=0;if(localStorage.getItem("last-time")&&localStorage.getItem("last-score")&&localStorage.getItem("last-crewmate-count")){l=+localStorage.getItem("last-crewmate-count");const t=(Date.now()-6e4*+localStorage.getItem("last-time"))/1e3;f(U,o=+localStorage.getItem("last-score")+t/2,o);for(let t=0;t<l;t++)a.push(new rt(r[Math.round(Math.random()*(r.length-1))]))}let d,h,m=null;var p;p=()=>{!function t(){n(0,c+=.05),n(1,s+=.05),n(0,c%=512),n(1,s%=512),n(2,i+=.05),n(2,i%=360);for(const t of a)t.float_amount+=t.distance/2*t.direction*.001,t.height+=t.distance*t.vertical_direction*5e-4,t.rotation+=Math.round(1984*t.distance/t.vertical_direction+2048*t.direction)%1e3/5e3,(t.float_amount>1||t.float_amount<0)&&t.regen();n(3,a),m=requestAnimationFrame(t)}(),d=setInterval((function(){f(U,o+=.025*l,o)}),50),h=setInterval((function(){localStorage.setItem("last-time",(Date.now()/6e4).toString()),localStorage.setItem("last-score",o.toString()),localStorage.setItem("last-crewmate-count",l.toString())}),1e3)},k().$$.on_mount.push(p),function(t){k().$$.on_destroy.push(t)}((()=>{m&&cancelAnimationFrame(m),d&&clearTimeout(d),h&&clearTimeout(h)}));return[c,s,i,a,o,function(t){0==t.detail&&(a.push(new rt(r[Math.round(Math.random()*(r.length-1))])),n(3,a),l++)},()=>f(U,o++,o)]}new class extends Q{constructor(t){super(),K(this,t,at,it,s,{})}}({target:document.body})}();
