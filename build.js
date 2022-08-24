!function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function s(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a,c;function l(t,e){return a||(a=document.createElement("a")),a.href=e,t===a.href}function u(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function f(t,e,n){return t.set(n),e}function d(t,e){t.appendChild(e)}function m(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function g(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function b(){return $(" ")}function x(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function w(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function _(t){c=t}function M(){if(!c)throw new Error("Function called outside component initialization");return c}function k(){const t=M();return(e,n,{cancelable:o=!1}={})=>{const r=t.$$.callbacks[e];if(r){const s=function(t,e,{bubbles:n=!1,cancelable:o=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,o,e),r}(e,n,{cancelable:o});return r.slice().forEach((e=>{e.call(t,s)})),!s.defaultPrevented}return!0}}function S(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const E=[],I=[],z=[],C=[],A=Promise.resolve();let T=!1;function j(t){z.push(t)}const P=new Set;let D=0;function N(){const t=c;do{for(;D<E.length;){const t=E[D];D++,_(t),F(t.$$)}for(_(null),E.length=0,D=0;I.length;)I.pop()();for(let t=0;t<z.length;t+=1){const e=z[t];P.has(e)||(P.add(e),e())}z.length=0}while(E.length);for(;C.length;)C.pop()();T=!1,P.clear(),_(t)}function F(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}const L=new Set;let O;function q(t,e){t&&t.i&&(L.delete(t),t.i(e))}function B(t,e,n,o){if(t&&t.o){if(L.has(t))return;L.add(t),O.c.push((()=>{L.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}function Y(t){t&&t.c()}function G(t,e,o,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=t.$$;a&&a.m(e,o),i||j((()=>{const e=c.map(n).filter(s);l?l.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(j)}function H(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function J(t,e){-1===t.$$.dirty[0]&&(E.push(t),T||(T=!0,A.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function K(e,n,s,i,a,l,u,f=[-1]){const d=c;_(e);const m=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:o(),dirty:f,skip_bound:!1,root:n.target||d.$$.root};u&&u(m.root);let p=!1;if(m.ctx=s?s(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return m.ctx&&a(m.ctx[t],m.ctx[t]=r)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](r),p&&J(e,t)),n})):[],m.update(),p=!0,r(m.before_update),m.fragment=!!i&&i(m.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);m.fragment&&m.fragment.l(t),t.forEach(h)}else m.fragment&&m.fragment.c();n.intro&&q(e.$$.fragment),G(e,n.target,n.anchor,n.customElement),N()}_(d)}class Q{$destroy(){H(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const R=[];function U(e,n=t){let o;const r=new Set;function s(t){if(i(e,t)&&(e=t,o)){const t=!R.length;for(const t of r)t[1](),R.push(t,e);if(t){for(let t=0;t<R.length;t+=2)R[t][0](R[t+1]);R.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(i,a=t){const c=[i,a];return r.add(c),1===r.size&&(o=n(s)||t),i(e),()=>{r.delete(c),0===r.size&&(o(),o=null)}}}}const V=U(0),W=U(0),X=U(0);function Z(e){let n,o,s,i,a,c,l,u,f,p,_,M,k;return{c(){n=g("div"),o=g("div"),s=g("h1"),i=$(e[0]),a=b(),c=g("p"),l=$(e[1]),u=b(),f=g("p"),p=$(e[2]),y(s,"class","svelte-172092d"),y(c,"class","svelte-172092d"),y(o,"class","text"),w(f,"font-size","xx-large"),y(f,"class","svelte-172092d"),y(n,"class","button svelte-172092d"),y(n,"style",_=e[3]?"box-shadow: 0px 0px; margin-top: 23px; margin-left: 23px; margin-bottom: 17px; margin-right: 17px":"box-shadow: 3px 3px")},m(t,r){m(t,n,r),d(n,o),d(o,s),d(s,i),d(o,a),d(o,c),d(c,l),d(n,u),d(n,f),d(f,p),M||(k=[x(n,"click",e[5]),x(n,"mousedown",e[4])],M=!0)},p(t,[e]){1&e&&v(i,t[0]),2&e&&v(l,t[1]),4&e&&v(p,t[2]),8&e&&_!==(_=t[3]?"box-shadow: 0px 0px; margin-top: 23px; margin-left: 23px; margin-bottom: 17px; margin-right: 17px":"box-shadow: 3px 3px")&&y(n,"style",_)},i:t,o:t,d(t){t&&h(n),M=!1,r(k)}}}function tt(t,e,n){let o;u(t,V,(t=>n(6,o=t)));let{name:r="Name Missing"}=e,{description:s="Description missing"}=e,{price:i}=e,a=!1;return window.addEventListener("mouseup",(()=>n(3,a=!1))),t.$$set=t=>{"name"in t&&n(0,r=t.name),"description"in t&&n(1,s=t.description),"price"in t&&n(2,i=t.price)},[r,s,i,a,function(){o>=i&&n(3,a=!0)},function(e){S.call(this,t,e)}]}globalThis.setPoints=t=>V.set(t),globalThis.setCrewmates=t=>W.set(t);class et extends Q{constructor(t){super(),K(this,t,tt,Z,i,{name:0,description:1,price:2})}}function nt(t,e,n){const o=t.slice();return o[9]=e[n],o[11]=n,o}function ot(t){let n,o;const r=[t[9]];let s={};for(let t=0;t<r.length;t+=1)s=e(s,r[t]);return n=new et({props:s}),n.$on("click",(function(){return t[4](t[11])})),{c(){Y(n.$$.fragment)},m(t,e){G(n,t,e),o=!0},p(e,o){t=e;const s=2&o?function(t,e){const n={},o={},r={$$scope:1};let s=t.length;for(;s--;){const i=t[s],a=e[s];if(a){for(const t in i)t in a||(o[t]=1);for(const t in a)r[t]||(n[t]=a[t],r[t]=1);t[s]=a}else for(const t in i)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}(r,[(i=t[9],"object"==typeof i&&null!==i?i:{})]):{};var i;n.$set(s)},i(t){o||(q(n.$$.fragment,t),o=!0)},o(t){B(n.$$.fragment,t),o=!1},d(t){H(n,t)}}}function rt(t){let e,n,o,s,i,a,c,u,f,$,v,_,M,k,S=t[1],E=[];for(let e=0;e<S.length;e+=1)E[e]=ot(nt(t,S,e));const I=t=>B(E[t],1,1,(()=>{E[t]=null}));return{c(){e=g("div"),o=b(),s=g("img"),a=b(),c=g("div"),u=g("div"),f=b(),$=g("div");for(let t=0;t<E.length;t+=1)E[t].c();y(e,"class","background svelte-y7ul0e"),y(e,"style",n=t[0]?"":"display: none"),l(s.src,i="./media/store-button.png")||y(s,"src","./media/store-button.png"),y(s,"alt","open store"),w(s,"right",t[0]?"40%":"0%"),y(s,"class","svelte-y7ul0e"),y(u,"class","store-trim svelte-y7ul0e"),y($,"class","store-contents svelte-y7ul0e"),y(c,"class","store-wrapper svelte-y7ul0e"),y(c,"style",v=t[0]?"":"display: none")},m(n,r){m(n,e,r),m(n,o,r),m(n,s,r),m(n,a,r),m(n,c,r),d(c,u),d(c,f),d(c,$);for(let t=0;t<E.length;t+=1)E[t].m($,null);_=!0,M||(k=x(s,"click",t[3]),M=!0)},p(t,[o]){if((!_||1&o&&n!==(n=t[0]?"":"display: none"))&&y(e,"style",n),(!_||1&o)&&w(s,"right",t[0]?"40%":"0%"),6&o){let e;for(S=t[1],e=0;e<S.length;e+=1){const n=nt(t,S,e);E[e]?(E[e].p(n,o),q(E[e],1)):(E[e]=ot(n),E[e].c(),q(E[e],1),E[e].m($,null))}for(O={r:0,c:[],p:O},e=S.length;e<E.length;e+=1)I(e);O.r||r(O.c),O=O.p}(!_||1&o&&v!==(v=t[0]?"":"display: none"))&&y(c,"style",v)},i(t){if(!_){for(let t=0;t<S.length;t+=1)q(E[t]);_=!0}},o(t){E=E.filter(Boolean);for(let t=0;t<E.length;t+=1)B(E[t]);_=!1},d(t){t&&h(e),t&&h(o),t&&h(s),t&&h(a),t&&h(c),p(E,t),M=!1,k()}}}function st(t,e,n){let o,r,s;u(t,V,(t=>n(5,o=t))),u(t,X,(t=>n(6,r=t))),u(t,W,(t=>n(7,s=t)));let i=!1;const a=[{name:"Crewmate",description:"Does tasks for you!",price:50},{name:"Imposter",description:"kinda sus ngl",price:150},{name:"Sell Crewmate",description:"Get rid of a Crewmate.",price:-50},{name:"Sell Imposter",description:"Eject the imposter",price:-150}],c=k();function l(t){if(console.log(t),!(o<a[t].price)){switch(t){case 2:if(s<=0)return alert("You can't sell any more crewmates!");break;case 3:if(r<=0)return alert("You can't sell any more imposters!")}f(V,o-=a[t].price,o),c("purchase",t)}}return[i,a,l,()=>n(0,i=!i),t=>l(t)]}class it extends Q{constructor(t){super(),K(this,t,st,rt,i,{})}}class at{constructor(t){this.regen(),this.texture=t,this.float_amount=Math.random()}regen(){this.rotation=360*Math.random(),this.float_amount=Math.round(Math.random()),this.direction=-1*(2*this.float_amount-1),this.float_amount+=.2*-this.direction,this.vertical_direction=-1*(2*Math.round(Math.random())-1),this.distance=.5*Math.random(),this.height=Math.random()}}function ct(t,e,n){const o=t.slice();return o[14]=e[n],o}function lt(t){let e,n,o;return{c(){e=g("span"),n=g("img"),l(n.src,o=t[14].texture)||y(n,"src",o),w(n,"z-index",Math.round(20*t[14].distance)),w(n,"transform-origin","center center"),w(n,"transform","rotate("+t[14].rotation+"deg)"),y(n,"alt","something floating"),y(n,"draggable","false"),w(e,"position","absolute"),w(e,"z-index",Math.round(20*t[14].distance)),w(e,"transform-origin","top left"),w(e,"transform","scale("+(t[14].distance/2+.05)+")"),w(e,"top",100*t[14].height+"%"),w(e,"left",100*t[14].float_amount+"%")},m(t,o){m(t,e,o),d(e,n)},p(t,r){8&r&&!l(n.src,o=t[14].texture)&&y(n,"src",o),8&r&&w(n,"z-index",Math.round(20*t[14].distance)),8&r&&w(n,"transform","rotate("+t[14].rotation+"deg)"),8&r&&w(e,"z-index",Math.round(20*t[14].distance)),8&r&&w(e,"transform","scale("+(t[14].distance/2+.05)+")"),8&r&&w(e,"top",100*t[14].height+"%"),8&r&&w(e,"left",100*t[14].float_amount+"%")},d(t){t&&h(e)}}}function ut(t){let e,n,o,r,s,i,a,c,u,f,_,M,k=Math.floor(t[4])+"",S=t[3],E=[];for(let e=0;e<S.length;e+=1)E[e]=lt(ct(t,S,e));return u=new it({}),u.$on("purchase",t[5]),{c(){e=g("main");for(let t=0;t<E.length;t+=1)E[t].c();n=b(),o=g("img"),s=b(),i=g("p"),a=$(k),c=b(),Y(u.$$.fragment),y(o,"class","foreground-crewmate svelte-1n3udwu"),l(o.src,r="./media/crewmates/red.png")||y(o,"src","./media/crewmates/red.png"),y(o,"alt","among us"),y(o,"draggable","false"),w(o,"transform","scale(0.5) rotate("+t[2]+"deg)"),w(e,"background-position",Math.floor(t[0])+"px "+Math.floor(t[1])+"px"),y(e,"class","svelte-1n3udwu"),y(i,"class","svelte-1n3udwu")},m(r,l){m(r,e,l);for(let t=0;t<E.length;t+=1)E[t].m(e,null);d(e,n),d(e,o),m(r,s,l),m(r,i,l),d(i,a),m(r,c,l),G(u,r,l),f=!0,_||(M=x(o,"click",t[6]),_=!0)},p(t,[r]){if(8&r){let o;for(S=t[3],o=0;o<S.length;o+=1){const s=ct(t,S,o);E[o]?E[o].p(s,r):(E[o]=lt(s),E[o].c(),E[o].m(e,n))}for(;o<E.length;o+=1)E[o].d(1);E.length=S.length}(!f||4&r)&&w(o,"transform","scale(0.5) rotate("+t[2]+"deg)"),(!f||3&r)&&w(e,"background-position",Math.floor(t[0])+"px "+Math.floor(t[1])+"px"),(!f||16&r)&&k!==(k=Math.floor(t[4])+"")&&v(a,k)},i(t){f||(q(u.$$.fragment,t),f=!0)},o(t){B(u.$$.fragment,t),f=!1},d(t){t&&h(e),p(E,t),t&&h(s),t&&h(i),t&&h(c),H(u,t),_=!1,M()}}}function ft(t,e,n){let o,r,s;u(t,X,(t=>n(10,o=t))),u(t,W,(t=>n(11,r=t))),u(t,V,(t=>n(4,s=t)));const i=["black","blue","black","brown","darkgreen"].map((t=>`./media/crewmates/${t}.png`));let a=0,c=0,l=0,d=[];function m(){var t,e,a,c;f(W,r=null!==(t=+localStorage.getItem("last-crewmate-count"))&&void 0!==t?t:0,r),f(X,o=null!==(e=+localStorage.getItem("last-imposter-count"))&&void 0!==e?e:0,o);const l=(Date.now()-6e4*(null!==(a=+localStorage.getItem("last-time"))&&void 0!==a?a:0))/1e3;f(V,s=(null!==(c=+localStorage.getItem("last-score"))&&void 0!==c?c:0)+l/2,s);for(let t=0;t<r+o;t++)d.push(new at(i[Math.round(Math.random()*(i.length-1))]));n(3,d)}globalThis.resetAmongus=()=>{localStorage.clear(),m()};let h,p,g=null;var $;$=()=>{m(),function t(){n(0,a+=.05),n(1,c+=.05),n(0,a%=512),n(1,c%=512),n(2,l+=.05),n(2,l%=360);for(const t of d)t.float_amount+=t.distance/2*t.direction*.001,t.height+=t.distance*t.vertical_direction*5e-4,t.rotation+=Math.round(1984*t.distance+2048*t.direction)%1e3/6e3,(t.float_amount>1.2||t.float_amount<-.2||t.height>1.2||t.height<-.2)&&t.regen();n(3,d),g=requestAnimationFrame(t)}(),h=setInterval((function(){f(V,s+=.025*r+.1*o,s)}),50),p=setInterval((function(){localStorage.setItem("last-time",(Date.now()/6e4).toString()),localStorage.setItem("last-score",s.toString()),localStorage.setItem("last-crewmate-count",r.toString()),localStorage.setItem("last-imposter-count",o.toString())}),1e3)},M().$$.on_mount.push($),function(t){M().$$.on_destroy.push(t)}((()=>{g&&cancelAnimationFrame(g),h&&clearTimeout(h),p&&clearTimeout(p)}));return[a,c,l,d,s,function(t){0==t.detail?(d.push(new at(i[Math.round(Math.random()*(i.length-1))])),n(3,d),f(W,r++,r)):1==t.detail?(d.push(new at(i[Math.round(Math.random()*(i.length-1))])),n(3,d),f(X,o++,o)):2==t.detail?(d.pop(),n(3,d),f(W,r--,r)):3==t.detail&&(d.pop(),n(3,d),f(X,o--,o))},()=>f(V,s++,s)]}new class extends Q{constructor(t){super(),K(this,t,ft,ut,i,{})}}({target:document.body})}();
