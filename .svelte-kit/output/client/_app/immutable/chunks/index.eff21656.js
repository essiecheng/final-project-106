function E(){}function G(t,e){for(const n in e)t[n]=e[n];return t}function L(t){return t()}function M(){return Object.create(null)}function g(t){t.forEach(L)}function O(t){return typeof t=="function"}function dt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let x;function _t(t,e){return x||(x=document.createElement("a")),x.href=e,t===x.href}function J(t){return Object.keys(t).length===0}function K(t,...e){if(t==null)return E;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ht(t,e,n){t.$$.on_destroy.push(K(e,n))}function mt(t,e,n,i){if(t){const r=q(t,e,n,i);return t[0](r)}}function q(t,e,n,i){return t[1]&&i?G(n.ctx.slice(),t[1](i(e))):n.ctx}function pt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],s=Math.max(e.dirty.length,r.length);for(let u=0;u<s;u+=1)l[u]=e.dirty[u]|r[u];return l}return e.dirty|r}return e.dirty}function yt(t,e,n,i,r,l){if(r){const s=q(e,n,i,l);t.p(s,r)}}function gt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let v=!1;function Q(){v=!0}function U(){v=!1}function V(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function X(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let c=0;c<e.length;c++){const f=e[c];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const c=e[o].claim_order,f=(r>0&&e[n[r]].claim_order<=c?r+1:V(1,r,b=>e[n[b]].claim_order,c))-1;i[o]=n[f]+1;const a=f+1;n[a]=o,r=Math.max(a,r)}const l=[],s=[];let u=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(l.push(e[o-1]);u>=o;u--)s.push(e[u]);u--}for(;u>=0;u--)s.push(e[u]);l.reverse(),s.sort((o,c)=>o.claim_order-c.claim_order);for(let o=0,c=0;o<s.length;o++){for(;c<l.length&&s[o].claim_order>=l[c].claim_order;)c++;const f=c<l.length?l[c]:null;t.insertBefore(s[o],f)}}function Y(t,e){t.appendChild(e)}function Z(t,e){if(v){for(X(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function bt(t,e,n){v&&!n?Z(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function B(t){t.parentNode&&t.parentNode.removeChild(t)}function H(t){return document.createElement(t)}function T(t){return document.createTextNode(t)}function xt(){return T(" ")}function wt(){return T("")}function z(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function tt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $t(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:tt(t,e,n)}function et(t){return Array.from(t.childNodes)}function nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,e,n,i,r=!1){nt(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(e(u)){const o=n(u);return o===void 0?t.splice(s,1):t[s]=o,r||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(e(u)){const o=n(u);return o===void 0?t.splice(s,1):t[s]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function it(t,e,n,i){return P(t,r=>r.nodeName===e,r=>{const l=[];for(let s=0;s<r.attributes.length;s++){const u=r.attributes[s];n[u.name]||l.push(u.name)}l.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Et(t,e,n){return it(t,e,n,H)}function rt(t,e){return P(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>T(e),!0)}function vt(t){return rt(t," ")}function At(t,e){e=""+e,t.data!==e&&(t.data=e)}function Nt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let w;function st(){if(w===void 0){w=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{w=!0}}return w}function St(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=H("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=st();let l;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",l=z(window,"message",s=>{s.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{l=z(i.contentWindow,"resize",e),e()}),Y(t,i),()=>{(r||l&&i.contentWindow)&&l(),B(i)}}function Ct(t,e,n){t.classList[n?"add":"remove"](e)}function Tt(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const l=r.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(r)):l===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function jt(t,e){return new t(e)}let y;function p(t){y=t}function W(){if(!y)throw new Error("Function called outside component initialization");return y}function kt(t){W().$$.on_mount.push(t)}function Mt(t){W().$$.after_update.push(t)}const h=[],D=[];let m=[];const N=[],F=Promise.resolve();let S=!1;function I(){S||(S=!0,F.then(R))}function zt(){return I(),F}function C(t){m.push(t)}function Dt(t){N.push(t)}const A=new Set;let _=0;function R(){if(_!==0)return;const t=y;do{try{for(;_<h.length;){const e=h[_];_++,p(e),ot(e.$$)}}catch(e){throw h.length=0,_=0,e}for(p(null),h.length=0,_=0;D.length;)D.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];A.has(n)||(A.add(n),n())}m.length=0}while(h.length);for(;N.length;)N.pop()();S=!1,A.clear(),p(t)}function ot(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}function ct(t){const e=[],n=[];m.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),m=e}const $=new Set;let d;function Lt(){d={r:0,c:[],p:d}}function Ot(){d.r||g(d.c),d=d.p}function lt(t,e){t&&t.i&&($.delete(t),t.i(e))}function qt(t,e,n,i){if(t&&t.o){if($.has(t))return;$.add(t),d.c.push(()=>{$.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Bt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Ht(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Pt(t){t&&t.c()}function Wt(t,e){t&&t.l(e)}function ut(t,e,n,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),i||C(()=>{const s=t.$$.on_mount.map(L).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...s):g(s),t.$$.on_mount=[]}),l.forEach(C)}function at(t,e){const n=t.$$;n.fragment!==null&&(ct(n.after_update),g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ft(t,e){t.$$.dirty[0]===-1&&(h.push(t),I(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ft(t,e,n,i,r,l,s,u=[-1]){const o=y;p(t);const c=t.$$={fragment:null,ctx:[],props:l,update:E,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:M(),dirty:u,skip_bound:!1,root:e.target||o.$$.root};s&&s(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(a,b,...j)=>{const k=j.length?j[0]:b;return c.ctx&&r(c.ctx[a],c.ctx[a]=k)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](k),f&&ft(t,a)),b}):[],c.update(),f=!0,g(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){Q();const a=et(e.target);c.fragment&&c.fragment.l(a),a.forEach(B)}else c.fragment&&c.fragment.c();e.intro&&lt(t.$$.fragment),ut(t,e.target,e.anchor,e.customElement),U(),R()}p(o)}class It{$destroy(){at(this,1),this.$destroy=E}$on(e,n){if(!O(n))return E;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!J(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ut as A,at as B,mt as C,yt as D,gt as E,pt as F,Z as G,E as H,ht as I,C as J,$t as K,z as L,Bt as M,Tt as N,Ct as O,_t as P,g as Q,Ht as R,It as S,Dt as T,St as U,xt as a,bt as b,vt as c,qt as d,wt as e,Ot as f,lt as g,B as h,Ft as i,Mt as j,H as k,Et as l,et as m,tt as n,kt as o,Nt as p,T as q,rt as r,dt as s,zt as t,At as u,Lt as v,D as w,jt as x,Pt as y,Wt as z};