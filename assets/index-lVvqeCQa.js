(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Ur(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const K={},ye=[],bt=()=>{},is=()=>!1,$n=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Br=t=>t.startsWith("onUpdate:"),at=Object.assign,Yr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},os=Object.prototype.hasOwnProperty,H=(t,e)=>os.call(t,e),L=Array.isArray,_e=t=>zn(t)==="[object Map]",Mi=t=>zn(t)==="[object Set]",F=t=>typeof t=="function",tt=t=>typeof t=="string",Ce=t=>typeof t=="symbol",G=t=>t!==null&&typeof t=="object",Ri=t=>(G(t)||F(t))&&F(t.then)&&F(t.catch),Li=Object.prototype.toString,zn=t=>Li.call(t),ss=t=>zn(t).slice(8,-1),Fi=t=>zn(t)==="[object Object]",qr=t=>tt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,wn=Ur(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Dn=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ls=/-(\w)/g,Nt=Dn(t=>t.replace(ls,(e,n)=>n?n.toUpperCase():"")),fs=/\B([A-Z])/g,Te=Dn(t=>t.replace(fs,"-$1").toLowerCase()),Hn=Dn(t=>t.charAt(0).toUpperCase()+t.slice(1)),rr=Dn(t=>t?`on${Hn(t)}`:""),ce=(t,e)=>!Object.is(t,e),ar=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Tn=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},cs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ca;const ji=()=>Ca||(Ca=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Wr(t){if(L(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],a=tt(r)?hs(r):Wr(r);if(a)for(const i in a)e[i]=a[i]}return e}else if(tt(t)||G(t))return t}const us=/;(?![^(]*\))/g,ds=/:([^]+)/,ms=/\/\*[^]*?\*\//g;function hs(t){const e={};return t.replace(ms,"").split(us).forEach(n=>{if(n){const r=n.split(ds);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Vr(t){let e="";if(tt(t))e=t;else if(L(t))for(let n=0;n<t.length;n++){const r=Vr(t[n]);r&&(e+=r+" ")}else if(G(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ps="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gs=Ur(ps);function $i(t){return!!t||t===""}const $e=t=>tt(t)?t:t==null?"":L(t)||G(t)&&(t.toString===Li||!F(t.toString))?JSON.stringify(t,zi,2):String(t),zi=(t,e)=>e&&e.__v_isRef?zi(t,e.value):_e(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,a],i)=>(n[ir(r,i)+" =>"]=a,n),{})}:Mi(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ir(n))}:Ce(e)?ir(e):G(e)&&!L(e)&&!Fi(e)?String(e):e,ir=(t,e="")=>{var n;return Ce(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let _t;class vs{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=_t,!e&&_t&&(this.index=(_t.scopes||(_t.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=_t;try{return _t=this,e()}finally{_t=n}}}on(){_t=this}off(){_t=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function bs(t,e=_t){e&&e.active&&e.effects.push(t)}function ys(){return _t}let se;class Kr{constructor(e,n,r,a){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=3,this._trackId=0,this._runnings=0,this._queryings=0,this._depsLength=0,bs(this,a)}get dirty(){if(this._dirtyLevel===1){this._dirtyLevel=0,this._queryings++,me();for(const e of this.deps)if(e.computed&&(_s(e.computed),this._dirtyLevel>=2))break;he(),this._queryings--}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?3:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Kt,n=se;try{return Kt=!0,se=this,this._runnings++,Ta(this),this.fn()}finally{Ia(this),this._runnings--,se=n,Kt=e}}stop(){var e;this.active&&(Ta(this),Ia(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function _s(t){return t.value}function Ta(t){t._trackId++,t._depsLength=0}function Ia(t){if(t.deps&&t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Di(t.deps[e],t);t.deps.length=t._depsLength}}function Di(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Kt=!0,vr=0;const Hi=[];function me(){Hi.push(Kt),Kt=!1}function he(){const t=Hi.pop();Kt=t===void 0?!0:t}function Gr(){vr++}function Xr(){for(vr--;!vr&&br.length;)br.shift()()}function Ui(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Di(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const br=[];function Bi(t,e,n){Gr();for(const r of t.keys())if(!(!r.allowRecurse&&r._runnings)&&r._dirtyLevel<e&&(!r._runnings||e!==2)){const a=r._dirtyLevel;r._dirtyLevel=e,a===0&&(!r._queryings||e!==2)&&(r.trigger(),r.scheduler&&br.push(r.scheduler))}Xr()}const Yi=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},yr=new WeakMap,le=Symbol(""),_r=Symbol("");function ut(t,e,n){if(Kt&&se){let r=yr.get(t);r||yr.set(t,r=new Map);let a=r.get(n);a||r.set(n,a=Yi(()=>r.delete(n))),Ui(se,a)}}function jt(t,e,n,r,a,i){const o=yr.get(t);if(!o)return;let s=[];if(e==="clear")s=[...o.values()];else if(n==="length"&&L(t)){const l=Number(r);o.forEach((c,d)=>{(d==="length"||!Ce(d)&&d>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),e){case"add":L(t)?qr(n)&&s.push(o.get("length")):(s.push(o.get(le)),_e(t)&&s.push(o.get(_r)));break;case"delete":L(t)||(s.push(o.get(le)),_e(t)&&s.push(o.get(_r)));break;case"set":_e(t)&&s.push(o.get(le));break}Gr();for(const l of s)l&&Bi(l,3);Xr()}const xs=Ur("__proto__,__v_isRef,__isVue"),qi=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ce)),Na=ws();function ws(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=U(this);for(let i=0,o=this.length;i<o;i++)ut(r,"get",i+"");const a=r[e](...n);return a===-1||a===!1?r[e](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){me(),Gr();const r=U(this)[e].apply(this,n);return Xr(),he(),r}}),t}function As(t){const e=U(this);return ut(e,"has",t),e.hasOwnProperty(t)}class Wi{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const a=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(a?i?Fs:Xi:i?Gi:Ki).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=L(e);if(!a){if(o&&H(Na,n))return Reflect.get(Na,n,r);if(n==="hasOwnProperty")return As}const s=Reflect.get(e,n,r);return(Ce(n)?qi.has(n):xs(n))||(a||ut(e,"get",n),i)?s:ht(s)?o&&qr(n)?s:s.value:G(s)?a?Qi(s):Zr(s):s}}class Vi extends Wi{constructor(e=!1){super(!1,e)}set(e,n,r,a){let i=e[n];if(!this._shallow){const l=Be(i);if(!Le(r)&&!Be(r)&&(i=U(i),r=U(r)),!L(e)&&ht(i)&&!ht(r))return l?!1:(i.value=r,!0)}const o=L(e)&&qr(n)?Number(n)<e.length:H(e,n),s=Reflect.set(e,n,r,a);return e===U(a)&&(o?ce(r,i)&&jt(e,"set",n,r):jt(e,"add",n,r)),s}deleteProperty(e,n){const r=H(e,n);e[n];const a=Reflect.deleteProperty(e,n);return a&&r&&jt(e,"delete",n,void 0),a}has(e,n){const r=Reflect.has(e,n);return(!Ce(n)||!qi.has(n))&&ut(e,"has",n),r}ownKeys(e){return ut(e,"iterate",L(e)?"length":le),Reflect.ownKeys(e)}}class ks extends Wi{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Os=new Vi,Es=new ks,Ss=new Vi(!0),Qr=t=>t,Un=t=>Reflect.getPrototypeOf(t);function sn(t,e,n=!1,r=!1){t=t.__v_raw;const a=U(t),i=U(e);n||(ce(e,i)&&ut(a,"get",e),ut(a,"get",i));const{has:o}=Un(a),s=r?Qr:n?na:ea;if(o.call(a,e))return s(t.get(e));if(o.call(a,i))return s(t.get(i));t!==a&&t.get(e)}function ln(t,e=!1){const n=this.__v_raw,r=U(n),a=U(t);return e||(ce(t,a)&&ut(r,"has",t),ut(r,"has",a)),t===a?n.has(t):n.has(t)||n.has(a)}function fn(t,e=!1){return t=t.__v_raw,!e&&ut(U(t),"iterate",le),Reflect.get(t,"size",t)}function Ma(t){t=U(t);const e=U(this);return Un(e).has.call(e,t)||(e.add(t),jt(e,"add",t,t)),this}function Ra(t,e){e=U(e);const n=U(this),{has:r,get:a}=Un(n);let i=r.call(n,t);i||(t=U(t),i=r.call(n,t));const o=a.call(n,t);return n.set(t,e),i?ce(e,o)&&jt(n,"set",t,e):jt(n,"add",t,e),this}function La(t){const e=U(this),{has:n,get:r}=Un(e);let a=n.call(e,t);a||(t=U(t),a=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return a&&jt(e,"delete",t,void 0),i}function Fa(){const t=U(this),e=t.size!==0,n=t.clear();return e&&jt(t,"clear",void 0,void 0),n}function cn(t,e){return function(r,a){const i=this,o=i.__v_raw,s=U(o),l=e?Qr:t?na:ea;return!t&&ut(s,"iterate",le),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function un(t,e,n){return function(...r){const a=this.__v_raw,i=U(a),o=_e(i),s=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=a[t](...r),d=n?Qr:e?na:ea;return!e&&ut(i,"iterate",l?_r:le),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function Bt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ps(){const t={get(i){return sn(this,i)},get size(){return fn(this)},has:ln,add:Ma,set:Ra,delete:La,clear:Fa,forEach:cn(!1,!1)},e={get(i){return sn(this,i,!1,!0)},get size(){return fn(this)},has:ln,add:Ma,set:Ra,delete:La,clear:Fa,forEach:cn(!1,!0)},n={get(i){return sn(this,i,!0)},get size(){return fn(this,!0)},has(i){return ln.call(this,i,!0)},add:Bt("add"),set:Bt("set"),delete:Bt("delete"),clear:Bt("clear"),forEach:cn(!0,!1)},r={get(i){return sn(this,i,!0,!0)},get size(){return fn(this,!0)},has(i){return ln.call(this,i,!0)},add:Bt("add"),set:Bt("set"),delete:Bt("delete"),clear:Bt("clear"),forEach:cn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=un(i,!1,!1),n[i]=un(i,!0,!1),e[i]=un(i,!1,!0),r[i]=un(i,!0,!0)}),[t,n,e,r]}const[Cs,Ts,Is,Ns]=Ps();function Jr(t,e){const n=e?t?Ns:Is:t?Ts:Cs;return(r,a,i)=>a==="__v_isReactive"?!t:a==="__v_isReadonly"?t:a==="__v_raw"?r:Reflect.get(H(n,a)&&a in r?n:r,a,i)}const Ms={get:Jr(!1,!1)},Rs={get:Jr(!1,!0)},Ls={get:Jr(!0,!1)},Ki=new WeakMap,Gi=new WeakMap,Xi=new WeakMap,Fs=new WeakMap;function js(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $s(t){return t.__v_skip||!Object.isExtensible(t)?0:js(ss(t))}function Zr(t){return Be(t)?t:ta(t,!1,Os,Ms,Ki)}function zs(t){return ta(t,!1,Ss,Rs,Gi)}function Qi(t){return ta(t,!0,Es,Ls,Xi)}function ta(t,e,n,r,a){if(!G(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=a.get(t);if(i)return i;const o=$s(t);if(o===0)return t;const s=new Proxy(t,o===2?r:n);return a.set(t,s),s}function xe(t){return Be(t)?xe(t.__v_raw):!!(t&&t.__v_isReactive)}function Be(t){return!!(t&&t.__v_isReadonly)}function Le(t){return!!(t&&t.__v_isShallow)}function Ji(t){return xe(t)||Be(t)}function U(t){const e=t&&t.__v_raw;return e?U(e):t}function Zi(t){return Tn(t,"__v_skip",!0),t}const ea=t=>G(t)?Zr(t):t,na=t=>G(t)?Qi(t):t;class to{constructor(e,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Kr(()=>e(this._value),()=>ja(this,1)),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const e=U(this);return Hs(e),(!e._cacheable||e.effect.dirty)&&ce(e._value,e._value=e.effect.run())&&ja(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Ds(t,e,n=!1){let r,a;const i=F(t);return i?(r=t,a=bt):(r=t.get,a=t.set),new to(r,a,i||!a,n)}function Hs(t){Kt&&se&&(t=U(t),Ui(se,t.dep||(t.dep=Yi(()=>t.dep=void 0,t instanceof to?t:void 0))))}function ja(t,e=3,n){t=U(t);const r=t.dep;r&&Bi(r,e)}function ht(t){return!!(t&&t.__v_isRef===!0)}function Us(t){return ht(t)?t.value:t}const Bs={get:(t,e,n)=>Us(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const a=t[e];return ht(a)&&!ht(n)?(a.value=n,!0):Reflect.set(t,e,n,r)}};function eo(t){return xe(t)?t:new Proxy(t,Bs)}function Gt(t,e,n,r){let a;try{a=r?t(...r):t()}catch(i){Bn(i,e,n)}return a}function kt(t,e,n,r){if(F(t)){const i=Gt(t,e,n,r);return i&&Ri(i)&&i.catch(o=>{Bn(o,e,n)}),i}const a=[];for(let i=0;i<t.length;i++)a.push(kt(t[i],e,n,r));return a}function Bn(t,e,n,r=!0){const a=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,s=`https://vuejs.org/errors/#runtime-${n}`;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](t,o,s)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Gt(l,null,10,[t,o,s]);return}}Ys(t,n,a,r)}function Ys(t,e,n,r=!0){console.error(t)}let Ye=!1,xr=!1;const it=[];let Tt=0;const we=[];let Lt=null,ae=0;const no=Promise.resolve();let ra=null;function qs(t){const e=ra||no;return t?e.then(this?t.bind(this):t):e}function Ws(t){let e=Tt+1,n=it.length;for(;e<n;){const r=e+n>>>1,a=it[r],i=qe(a);i<t||i===t&&a.pre?e=r+1:n=r}return e}function aa(t){(!it.length||!it.includes(t,Ye&&t.allowRecurse?Tt+1:Tt))&&(t.id==null?it.push(t):it.splice(Ws(t.id),0,t),ro())}function ro(){!Ye&&!xr&&(xr=!0,ra=no.then(io))}function Vs(t){const e=it.indexOf(t);e>Tt&&it.splice(e,1)}function Ks(t){L(t)?we.push(...t):(!Lt||!Lt.includes(t,t.allowRecurse?ae+1:ae))&&we.push(t),ro()}function $a(t,e,n=Ye?Tt+1:0){for(;n<it.length;n++){const r=it[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;it.splice(n,1),n--,r()}}}function ao(t){if(we.length){const e=[...new Set(we)];if(we.length=0,Lt){Lt.push(...e);return}for(Lt=e,Lt.sort((n,r)=>qe(n)-qe(r)),ae=0;ae<Lt.length;ae++)Lt[ae]();Lt=null,ae=0}}const qe=t=>t.id==null?1/0:t.id,Gs=(t,e)=>{const n=qe(t)-qe(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function io(t){xr=!1,Ye=!0,it.sort(Gs);try{for(Tt=0;Tt<it.length;Tt++){const e=it[Tt];e&&e.active!==!1&&Gt(e,null,14)}}finally{Tt=0,it.length=0,ao(),Ye=!1,ra=null,(it.length||we.length)&&io()}}function Xs(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||K;let a=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||K;v&&(a=n.map(A=>tt(A)?A.trim():A)),m&&(a=n.map(cs))}let s,l=r[s=rr(e)]||r[s=rr(Nt(e))];!l&&i&&(l=r[s=rr(Te(e))]),l&&kt(l,t,6,a);const c=r[s+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[s])return;t.emitted[s]=!0,kt(c,t,6,a)}}function oo(t,e,n=!1){const r=e.emitsCache,a=r.get(t);if(a!==void 0)return a;const i=t.emits;let o={},s=!1;if(!F(t)){const l=c=>{const d=oo(c,e,!0);d&&(s=!0,at(o,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!s?(G(t)&&r.set(t,null),null):(L(i)?i.forEach(l=>o[l]=null):at(o,i),G(t)&&r.set(t,o),o)}function Yn(t,e){return!t||!$n(e)?!1:(e=e.slice(2).replace(/Once$/,""),H(t,e[0].toLowerCase()+e.slice(1))||H(t,Te(e))||H(t,e))}let xt=null,so=null;function In(t){const e=xt;return xt=t,so=t&&t.type.__scopeId||null,e}function Qs(t,e=xt,n){if(!e||t._n)return t;const r=(...a)=>{r._d&&Ga(-1);const i=In(e);let o;try{o=t(...a)}finally{In(i),r._d&&Ga(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function or(t){const{type:e,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:v,setupState:A,ctx:$,inheritAttrs:M}=t;let D,w;const S=In(t);try{if(n.shapeFlag&4){const j=a||r,I=j;D=Ct(d.call(I,j,m,i,A,v,$)),w=l}else{const j=e;D=Ct(j.length>1?j(i,{attrs:l,slots:s,emit:c}):j(i,null)),w=e.props?l:Js(l)}}catch(j){De.length=0,Bn(j,t,1),D=ot(We)}let C=D;if(w&&M!==!1){const j=Object.keys(w),{shapeFlag:I}=C;j.length&&I&7&&(o&&j.some(Br)&&(w=Zs(w,o)),C=Ee(C,w))}return n.dirs&&(C=Ee(C),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),D=C,In(S),D}const Js=t=>{let e;for(const n in t)(n==="class"||n==="style"||$n(n))&&((e||(e={}))[n]=t[n]);return e},Zs=(t,e)=>{const n={};for(const r in t)(!Br(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function tl(t,e,n){const{props:r,children:a,component:i}=t,{props:o,children:s,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?za(r,o,c):!!o;if(l&8){const d=e.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!Yn(c,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?za(r,o,c):!0:!!o;return!1}function za(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(e[i]!==t[i]&&!Yn(n,i))return!0}return!1}function el({vnode:t,parent:e},n){if(n)for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const lo="components";function An(t,e){return rl(lo,t,!0,e)||t}const nl=Symbol.for("v-ndc");function rl(t,e,n=!0,r=!1){const a=xt||rt;if(a){const i=a.type;if(t===lo){const s=ef(i,!1);if(s&&(s===e||s===Nt(e)||s===Hn(Nt(e))))return i}const o=Da(a[t]||i[t],e)||Da(a.appContext[t],e);return!o&&r?i:o}}function Da(t,e){return t&&(t[e]||t[Nt(e)]||t[Hn(Nt(e))])}const al=t=>t.__isSuspense;function il(t,e){e&&e.pendingBranch?L(t)?e.effects.push(...t):e.effects.push(t):Ks(t)}const ol=Symbol.for("v-scx"),sl=()=>En(ol),dn={};function kn(t,e,n){return fo(t,e,n)}function fo(t,e,{immediate:n,deep:r,flush:a,once:i,onTrack:o,onTrigger:s}=K){var l;if(e&&i){const I=e;e=(...J)=>{I(...J),j()}}const c=ys()===((l=rt)==null?void 0:l.scope)?rt:null;let d,m=!1,v=!1;if(ht(t)?(d=()=>t.value,m=Le(t)):xe(t)?(d=Le(t)||r===!1?()=>Vt(t,1):()=>Vt(t),m=!0):L(t)?(v=!0,m=t.some(I=>xe(I)||Le(I)),d=()=>t.map(I=>{if(ht(I))return I.value;if(xe(I))return Vt(I,Le(I)||r===!1?1:void 0);if(F(I))return Gt(I,c,2)})):F(t)?e?d=()=>Gt(t,c,2):d=()=>{if(!(c&&c.isUnmounted))return A&&A(),kt(t,c,3,[$])}:d=bt,e&&r){const I=d;d=()=>Vt(I())}let A,$=I=>{A=C.onStop=()=>{Gt(I,c,4),A=C.onStop=void 0}},M;if(Kn)if($=bt,e?n&&kt(e,c,3,[d(),v?[]:void 0,$]):d(),a==="sync"){const I=sl();M=I.__watcherHandles||(I.__watcherHandles=[])}else return bt;let D=v?new Array(t.length).fill(dn):dn;const w=()=>{if(!(!C.active||!C.dirty))if(e){const I=C.run();(r||m||(v?I.some((J,Z)=>ce(J,D[Z])):ce(I,D)))&&(A&&A(),kt(e,c,3,[I,D===dn?void 0:v&&D[0]===dn?[]:D,$]),D=I)}else C.run()};w.allowRecurse=!!e;let S;a==="sync"?S=w:a==="post"?S=()=>ct(w,c&&c.suspense):(w.pre=!0,c&&(w.id=c.uid),S=()=>aa(w));const C=new Kr(d,bt,S),j=()=>{C.stop(),c&&c.scope&&Yr(c.scope.effects,C)};return e?n?w():D=C.run():a==="post"?ct(C.run.bind(C),c&&c.suspense):C.run(),M&&M.push(j),j}function ll(t,e,n){const r=this.proxy,a=tt(t)?t.includes(".")?co(r,t):()=>r[t]:t.bind(r,r);let i;F(e)?i=e:(i=e.handler,n=e);const o=rt;Se(this);const s=fo(a,i.bind(r),n);return o?Se(o):fe(),s}function co(t,e){const n=e.split(".");return()=>{let r=t;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function Vt(t,e,n=0,r){if(!G(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),ht(t))Vt(t.value,e,n,r);else if(L(t))for(let a=0;a<t.length;a++)Vt(t[a],e,n,r);else if(Mi(t)||_e(t))t.forEach(a=>{Vt(a,e,n,r)});else if(Fi(t))for(const a in t)Vt(t[a],e,n,r);return t}function ee(t,e,n,r){const a=t.dirs,i=e&&e.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(me(),kt(l,n,8,[t.el,s,t,e]),he())}}/*! #__NO_SIDE_EFFECTS__ */function fl(t,e){return F(t)?at({name:t.name},e,{setup:t}):t}const On=t=>!!t.type.__asyncLoader,uo=t=>t.type.__isKeepAlive;function cl(t,e){mo(t,"a",e)}function ul(t,e){mo(t,"da",e)}function mo(t,e,n=rt){const r=t.__wdc||(t.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return t()});if(qn(e,r,n),n){let a=n.parent;for(;a&&a.parent;)uo(a.parent.vnode)&&dl(r,e,n,a),a=a.parent}}function dl(t,e,n,r){const a=qn(e,t,r,!0);ho(()=>{Yr(r[e],a)},n)}function qn(t,e,n=rt,r=!1){if(n){const a=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;me(),Se(n);const s=kt(e,n,t,o);return fe(),he(),s});return r?a.unshift(i):a.push(i),i}}const Ht=t=>(e,n=rt)=>(!Kn||t==="sp")&&qn(t,(...r)=>e(...r),n),ml=Ht("bm"),hl=Ht("m"),pl=Ht("bu"),gl=Ht("u"),vl=Ht("bum"),ho=Ht("um"),bl=Ht("sp"),yl=Ht("rtg"),_l=Ht("rtc");function xl(t,e=rt){qn("ec",t,e)}function wl(t,e,n,r){let a;const i=n&&n[r];if(L(t)||tt(t)){a=new Array(t.length);for(let o=0,s=t.length;o<s;o++)a[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){a=new Array(t);for(let o=0;o<t;o++)a[o]=e(o+1,o,void 0,i&&i[o])}else if(G(t))if(t[Symbol.iterator])a=Array.from(t,(o,s)=>e(o,s,void 0,i&&i[s]));else{const o=Object.keys(t);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=e(t[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const wr=t=>t?Oo(t)?fa(t)||t.proxy:wr(t.parent):null,ze=at(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>wr(t.parent),$root:t=>wr(t.root),$emit:t=>t.emit,$options:t=>ia(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,aa(t.update)}),$nextTick:t=>t.n||(t.n=qs.bind(t.proxy)),$watch:t=>ll.bind(t)}),sr=(t,e)=>t!==K&&!t.__isScriptSetup&&H(t,e),Al={get({_:t},e){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=t;let c;if(e[0]!=="$"){const A=o[e];if(A!==void 0)switch(A){case 1:return r[e];case 2:return a[e];case 4:return n[e];case 3:return i[e]}else{if(sr(r,e))return o[e]=1,r[e];if(a!==K&&H(a,e))return o[e]=2,a[e];if((c=t.propsOptions[0])&&H(c,e))return o[e]=3,i[e];if(n!==K&&H(n,e))return o[e]=4,n[e];Ar&&(o[e]=0)}}const d=ze[e];let m,v;if(d)return e==="$attrs"&&ut(t,"get",e),d(t);if((m=s.__cssModules)&&(m=m[e]))return m;if(n!==K&&H(n,e))return o[e]=4,n[e];if(v=l.config.globalProperties,H(v,e))return v[e]},set({_:t},e,n){const{data:r,setupState:a,ctx:i}=t;return sr(a,e)?(a[e]=n,!0):r!==K&&H(r,e)?(r[e]=n,!0):H(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||t!==K&&H(t,o)||sr(e,o)||(s=i[0])&&H(s,o)||H(r,o)||H(ze,o)||H(a.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:H(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ha(t){return L(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ar=!0;function kl(t){const e=ia(t),n=t.proxy,r=t.ctx;Ar=!1,e.beforeCreate&&Ua(e.beforeCreate,t,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:v,beforeUpdate:A,updated:$,activated:M,deactivated:D,beforeDestroy:w,beforeUnmount:S,destroyed:C,unmounted:j,render:I,renderTracked:J,renderTriggered:Z,errorCaptured:gt,serverPrefetch:vt,expose:Mt,inheritAttrs:Ne,components:nn,directives:rn,filters:tr}=e;if(c&&Ol(c,r,null),o)for(const X in o){const Y=o[X];F(Y)&&(r[X]=Y.bind(n))}if(a){const X=a.call(n,n);G(X)&&(t.data=Zr(X))}if(Ar=!0,i)for(const X in i){const Y=i[X],Zt=F(Y)?Y.bind(n,n):F(Y.get)?Y.get.bind(n,n):bt,an=!F(Y)&&F(Y.set)?Y.set.bind(n):bt,te=re({get:Zt,set:an});Object.defineProperty(r,X,{enumerable:!0,configurable:!0,get:()=>te.value,set:Ot=>te.value=Ot})}if(s)for(const X in s)po(s[X],r,n,X);if(l){const X=F(l)?l.call(n):l;Reflect.ownKeys(X).forEach(Y=>{Il(Y,X[Y])})}d&&Ua(d,t,"c");function st(X,Y){L(Y)?Y.forEach(Zt=>X(Zt.bind(n))):Y&&X(Y.bind(n))}if(st(ml,m),st(hl,v),st(pl,A),st(gl,$),st(cl,M),st(ul,D),st(xl,gt),st(_l,J),st(yl,Z),st(vl,S),st(ho,j),st(bl,vt),L(Mt))if(Mt.length){const X=t.exposed||(t.exposed={});Mt.forEach(Y=>{Object.defineProperty(X,Y,{get:()=>n[Y],set:Zt=>n[Y]=Zt})})}else t.exposed||(t.exposed={});I&&t.render===bt&&(t.render=I),Ne!=null&&(t.inheritAttrs=Ne),nn&&(t.components=nn),rn&&(t.directives=rn)}function Ol(t,e,n=bt){L(t)&&(t=kr(t));for(const r in t){const a=t[r];let i;G(a)?"default"in a?i=En(a.from||r,a.default,!0):i=En(a.from||r):i=En(a),ht(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Ua(t,e,n){kt(L(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function po(t,e,n,r){const a=r.includes(".")?co(n,r):()=>n[r];if(tt(t)){const i=e[t];F(i)&&kn(a,i)}else if(F(t))kn(a,t.bind(n));else if(G(t))if(L(t))t.forEach(i=>po(i,e,n,r));else{const i=F(t.handler)?t.handler.bind(n):e[t.handler];F(i)&&kn(a,i,t)}}function ia(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,s=i.get(e);let l;return s?l=s:!a.length&&!n&&!r?l=e:(l={},a.length&&a.forEach(c=>Nn(l,c,o,!0)),Nn(l,e,o)),G(e)&&i.set(e,l),l}function Nn(t,e,n,r=!1){const{mixins:a,extends:i}=e;i&&Nn(t,i,n,!0),a&&a.forEach(o=>Nn(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const s=El[o]||n&&n[o];t[o]=s?s(t[o],e[o]):e[o]}return t}const El={data:Ba,props:Ya,emits:Ya,methods:Fe,computed:Fe,beforeCreate:lt,created:lt,beforeMount:lt,mounted:lt,beforeUpdate:lt,updated:lt,beforeDestroy:lt,beforeUnmount:lt,destroyed:lt,unmounted:lt,activated:lt,deactivated:lt,errorCaptured:lt,serverPrefetch:lt,components:Fe,directives:Fe,watch:Pl,provide:Ba,inject:Sl};function Ba(t,e){return e?t?function(){return at(F(t)?t.call(this,this):t,F(e)?e.call(this,this):e)}:e:t}function Sl(t,e){return Fe(kr(t),kr(e))}function kr(t){if(L(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function lt(t,e){return t?[...new Set([].concat(t,e))]:e}function Fe(t,e){return t?at(Object.create(null),t,e):e}function Ya(t,e){return t?L(t)&&L(e)?[...new Set([...t,...e])]:at(Object.create(null),Ha(t),Ha(e??{})):e}function Pl(t,e){if(!t)return e;if(!e)return t;const n=at(Object.create(null),t);for(const r in e)n[r]=lt(t[r],e[r]);return n}function go(){return{app:null,config:{isNativeTag:is,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cl=0;function Tl(t,e){return function(r,a=null){F(r)||(r=at({},r)),a!=null&&!G(a)&&(a=null);const i=go(),o=new WeakSet;let s=!1;const l=i.app={_uid:Cl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:af,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&F(c.install)?(o.add(c),c.install(l,...d)):F(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const v=ot(r,a);return v.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),d&&e?e(v,c):t(v,c,m),s=!0,l._container=c,c.__vue_app__=l,fa(v.component)||v.component.proxy}},unmount(){s&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l},runWithContext(c){Mn=l;try{return c()}finally{Mn=null}}};return l}}let Mn=null;function Il(t,e){if(rt){let n=rt.provides;const r=rt.parent&&rt.parent.provides;r===n&&(n=rt.provides=Object.create(r)),n[t]=e}}function En(t,e,n=!1){const r=rt||xt;if(r||Mn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Mn._context.provides;if(a&&t in a)return a[t];if(arguments.length>1)return n&&F(e)?e.call(r&&r.proxy):e}}function Nl(t,e,n,r=!1){const a={},i={};Tn(i,Vn,1),t.propsDefaults=Object.create(null),vo(t,e,a,i);for(const o in t.propsOptions[0])o in a||(a[o]=void 0);n?t.props=r?a:zs(a):t.type.props?t.props=a:t.props=i,t.attrs=i}function Ml(t,e,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=t,s=U(a),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(Yn(t.emitsOptions,v))continue;const A=e[v];if(l)if(H(i,v))A!==i[v]&&(i[v]=A,c=!0);else{const $=Nt(v);a[$]=Or(l,s,$,A,t,!1)}else A!==i[v]&&(i[v]=A,c=!0)}}}else{vo(t,e,a,i)&&(c=!0);let d;for(const m in s)(!e||!H(e,m)&&((d=Te(m))===m||!H(e,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Or(l,s,m,void 0,t,!0)):delete a[m]);if(i!==s)for(const m in i)(!e||!H(e,m))&&(delete i[m],c=!0)}c&&jt(t,"set","$attrs")}function vo(t,e,n,r){const[a,i]=t.propsOptions;let o=!1,s;if(e)for(let l in e){if(wn(l))continue;const c=e[l];let d;a&&H(a,d=Nt(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:Yn(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=U(n),c=s||K;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Or(a,l,m,c[m],t,!H(c,m))}}return o}function Or(t,e,n,r,a,i){const o=t[n];if(o!=null){const s=H(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&F(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Se(a),r=c[n]=l.call(null,e),fe())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Te(n))&&(r=!0))}return r}function bo(t,e,n=!1){const r=e.propsCache,a=r.get(t);if(a)return a;const i=t.props,o={},s=[];let l=!1;if(!F(t)){const d=m=>{l=!0;const[v,A]=bo(m,e,!0);at(o,v),A&&s.push(...A)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return G(t)&&r.set(t,ye),ye;if(L(i))for(let d=0;d<i.length;d++){const m=Nt(i[d]);qa(m)&&(o[m]=K)}else if(i)for(const d in i){const m=Nt(d);if(qa(m)){const v=i[d],A=o[m]=L(v)||F(v)?{type:v}:at({},v);if(A){const $=Ka(Boolean,A.type),M=Ka(String,A.type);A[0]=$>-1,A[1]=M<0||$<M,($>-1||H(A,"default"))&&s.push(m)}}}const c=[o,s];return G(t)&&r.set(t,c),c}function qa(t){return t[0]!=="$"}function Wa(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Va(t,e){return Wa(t)===Wa(e)}function Ka(t,e){return L(e)?e.findIndex(n=>Va(n,t)):F(e)&&Va(e,t)?0:-1}const yo=t=>t[0]==="_"||t==="$stable",oa=t=>L(t)?t.map(Ct):[Ct(t)],Rl=(t,e,n)=>{if(e._n)return e;const r=Qs((...a)=>oa(e(...a)),n);return r._c=!1,r},_o=(t,e,n)=>{const r=t._ctx;for(const a in t){if(yo(a))continue;const i=t[a];if(F(i))e[a]=Rl(a,i,r);else if(i!=null){const o=oa(i);e[a]=()=>o}}},xo=(t,e)=>{const n=oa(e);t.slots.default=()=>n},Ll=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=U(e),Tn(e,"_",n)):_o(e,t.slots={})}else t.slots={},e&&xo(t,e);Tn(t.slots,Vn,1)},Fl=(t,e,n)=>{const{vnode:r,slots:a}=t;let i=!0,o=K;if(r.shapeFlag&32){const s=e._;s?n&&s===1?i=!1:(at(a,e),!n&&s===1&&delete a._):(i=!e.$stable,_o(e,a)),o=e}else e&&(xo(t,e),o={default:1});if(i)for(const s in a)!yo(s)&&o[s]==null&&delete a[s]};function Er(t,e,n,r,a=!1){if(L(t)){t.forEach((v,A)=>Er(v,e&&(L(e)?e[A]:e),n,r,a));return}if(On(r)&&!a)return;const i=r.shapeFlag&4?fa(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=t,c=e&&e.r,d=s.refs===K?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(tt(c)?(d[c]=null,H(m,c)&&(m[c]=null)):ht(c)&&(c.value=null)),F(l))Gt(l,s,12,[o,d]);else{const v=tt(l),A=ht(l);if(v||A){const $=()=>{if(t.f){const M=v?H(m,l)?m[l]:d[l]:l.value;a?L(M)&&Yr(M,i):L(M)?M.includes(i)||M.push(i):v?(d[l]=[i],H(m,l)&&(m[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else v?(d[l]=o,H(m,l)&&(m[l]=o)):A&&(l.value=o,t.k&&(d[t.k]=o))};o?($.id=-1,ct($,n)):$()}}}const ct=il;function jl(t){return $l(t)}function $l(t,e){const n=ji();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:v,setScopeId:A=bt,insertStaticContent:$}=t,M=(f,u,h,p=null,g=null,_=null,k=void 0,y=null,x=!!u.dynamicChildren)=>{if(f===u)return;f&&!Re(f,u)&&(p=on(f),Ot(f,g,_,!0),f=null),u.patchFlag===-2&&(x=!1,u.dynamicChildren=null);const{type:b,ref:E,shapeFlag:N}=u;switch(b){case Wn:D(f,u,h,p);break;case We:w(f,u,h,p);break;case fr:f==null&&S(u,h,p,k);break;case Pt:nn(f,u,h,p,g,_,k,y,x);break;default:N&1?I(f,u,h,p,g,_,k,y,x):N&6?rn(f,u,h,p,g,_,k,y,x):(N&64||N&128)&&b.process(f,u,h,p,g,_,k,y,x,pe)}E!=null&&g&&Er(E,f&&f.ref,_,u||f,!u)},D=(f,u,h,p)=>{if(f==null)r(u.el=s(u.children),h,p);else{const g=u.el=f.el;u.children!==f.children&&c(g,u.children)}},w=(f,u,h,p)=>{f==null?r(u.el=l(u.children||""),h,p):u.el=f.el},S=(f,u,h,p)=>{[f.el,f.anchor]=$(f.children,u,h,p,f.el,f.anchor)},C=({el:f,anchor:u},h,p)=>{let g;for(;f&&f!==u;)g=v(f),r(f,h,p),f=g;r(u,h,p)},j=({el:f,anchor:u})=>{let h;for(;f&&f!==u;)h=v(f),a(f),f=h;a(u)},I=(f,u,h,p,g,_,k,y,x)=>{u.type==="svg"?k="svg":u.type==="math"&&(k="mathml"),f==null?J(u,h,p,g,_,k,y,x):vt(f,u,g,_,k,y,x)},J=(f,u,h,p,g,_,k,y)=>{let x,b;const{props:E,shapeFlag:N,transition:T,dirs:R}=f;if(x=f.el=o(f.type,_,E&&E.is,E),N&8?d(x,f.children):N&16&&gt(f.children,x,null,p,g,lr(f,_),k,y),R&&ee(f,null,p,"created"),Z(x,f,f.scopeId,k,p),E){for(const B in E)B!=="value"&&!wn(B)&&i(x,B,null,E[B],_,f.children,p,g,Rt);"value"in E&&i(x,"value",null,E.value,_),(b=E.onVnodeBeforeMount)&&St(b,p,f)}R&&ee(f,null,p,"beforeMount");const z=zl(g,T);z&&T.beforeEnter(x),r(x,u,h),((b=E&&E.onVnodeMounted)||z||R)&&ct(()=>{b&&St(b,p,f),z&&T.enter(x),R&&ee(f,null,p,"mounted")},g)},Z=(f,u,h,p,g)=>{if(h&&A(f,h),p)for(let _=0;_<p.length;_++)A(f,p[_]);if(g){let _=g.subTree;if(u===_){const k=g.vnode;Z(f,k,k.scopeId,k.slotScopeIds,g.parent)}}},gt=(f,u,h,p,g,_,k,y,x=0)=>{for(let b=x;b<f.length;b++){const E=f[b]=y?qt(f[b]):Ct(f[b]);M(null,E,u,h,p,g,_,k,y)}},vt=(f,u,h,p,g,_,k)=>{const y=u.el=f.el;let{patchFlag:x,dynamicChildren:b,dirs:E}=u;x|=f.patchFlag&16;const N=f.props||K,T=u.props||K;let R;if(h&&ne(h,!1),(R=T.onVnodeBeforeUpdate)&&St(R,h,u,f),E&&ee(u,f,h,"beforeUpdate"),h&&ne(h,!0),b?Mt(f.dynamicChildren,b,y,h,p,lr(u,g),_):k||Y(f,u,y,null,h,p,lr(u,g),_,!1),x>0){if(x&16)Ne(y,u,N,T,h,p,g);else if(x&2&&N.class!==T.class&&i(y,"class",null,T.class,g),x&4&&i(y,"style",N.style,T.style,g),x&8){const z=u.dynamicProps;for(let B=0;B<z.length;B++){const V=z[B],nt=N[V],yt=T[V];(yt!==nt||V==="value")&&i(y,V,nt,yt,g,f.children,h,p,Rt)}}x&1&&f.children!==u.children&&d(y,u.children)}else!k&&b==null&&Ne(y,u,N,T,h,p,g);((R=T.onVnodeUpdated)||E)&&ct(()=>{R&&St(R,h,u,f),E&&ee(u,f,h,"updated")},p)},Mt=(f,u,h,p,g,_,k)=>{for(let y=0;y<u.length;y++){const x=f[y],b=u[y],E=x.el&&(x.type===Pt||!Re(x,b)||x.shapeFlag&70)?m(x.el):h;M(x,b,E,null,p,g,_,k,!0)}},Ne=(f,u,h,p,g,_,k)=>{if(h!==p){if(h!==K)for(const y in h)!wn(y)&&!(y in p)&&i(f,y,h[y],null,k,u.children,g,_,Rt);for(const y in p){if(wn(y))continue;const x=p[y],b=h[y];x!==b&&y!=="value"&&i(f,y,b,x,k,u.children,g,_,Rt)}"value"in p&&i(f,"value",h.value,p.value,k)}},nn=(f,u,h,p,g,_,k,y,x)=>{const b=u.el=f?f.el:s(""),E=u.anchor=f?f.anchor:s("");let{patchFlag:N,dynamicChildren:T,slotScopeIds:R}=u;R&&(y=y?y.concat(R):R),f==null?(r(b,h,p),r(E,h,p),gt(u.children,h,E,g,_,k,y,x)):N>0&&N&64&&T&&f.dynamicChildren?(Mt(f.dynamicChildren,T,h,g,_,k,y),(u.key!=null||g&&u===g.subTree)&&wo(f,u,!0)):Y(f,u,h,E,g,_,k,y,x)},rn=(f,u,h,p,g,_,k,y,x)=>{u.slotScopeIds=y,f==null?u.shapeFlag&512?g.ctx.activate(u,h,p,k,x):tr(u,h,p,g,_,k,x):Aa(f,u,x)},tr=(f,u,h,p,g,_,k)=>{const y=f.component=Xl(f,p,g);if(uo(f)&&(y.ctx.renderer=pe),Ql(y),y.asyncDep){if(g&&g.registerDep(y,st),!f.el){const x=y.subTree=ot(We);w(null,x,u,h)}}else st(y,f,u,h,g,_,k)},Aa=(f,u,h)=>{const p=u.component=f.component;if(tl(f,u,h))if(p.asyncDep&&!p.asyncResolved){X(p,u,h);return}else p.next=u,Vs(p.update),p.effect.dirty=!0,p.update();else u.el=f.el,p.vnode=u},st=(f,u,h,p,g,_,k)=>{const y=()=>{if(f.isMounted){let{next:E,bu:N,u:T,parent:R,vnode:z}=f;{const ge=Ao(f);if(ge){E&&(E.el=z.el,X(f,E,k)),ge.asyncDep.then(()=>{f.isUnmounted||y()});return}}let B=E,V;ne(f,!1),E?(E.el=z.el,X(f,E,k)):E=z,N&&ar(N),(V=E.props&&E.props.onVnodeBeforeUpdate)&&St(V,R,E,z),ne(f,!0);const nt=or(f),yt=f.subTree;f.subTree=nt,M(yt,nt,m(yt.el),on(yt),f,g,_),E.el=nt.el,B===null&&el(f,nt.el),T&&ct(T,g),(V=E.props&&E.props.onVnodeUpdated)&&ct(()=>St(V,R,E,z),g)}else{let E;const{el:N,props:T}=u,{bm:R,m:z,parent:B}=f,V=On(u);if(ne(f,!1),R&&ar(R),!V&&(E=T&&T.onVnodeBeforeMount)&&St(E,B,u),ne(f,!0),N&&nr){const nt=()=>{f.subTree=or(f),nr(N,f.subTree,f,g,null)};V?u.type.__asyncLoader().then(()=>!f.isUnmounted&&nt()):nt()}else{const nt=f.subTree=or(f);M(null,nt,h,p,f,g,_),u.el=nt.el}if(z&&ct(z,g),!V&&(E=T&&T.onVnodeMounted)){const nt=u;ct(()=>St(E,B,nt),g)}(u.shapeFlag&256||B&&On(B.vnode)&&B.vnode.shapeFlag&256)&&f.a&&ct(f.a,g),f.isMounted=!0,u=h=p=null}},x=f.effect=new Kr(y,bt,()=>aa(b),f.scope),b=f.update=()=>{x.dirty&&x.run()};b.id=f.uid,ne(f,!0),b()},X=(f,u,h)=>{u.component=f;const p=f.vnode.props;f.vnode=u,f.next=null,Ml(f,u.props,p,h),Fl(f,u.children,h),me(),$a(f),he()},Y=(f,u,h,p,g,_,k,y,x=!1)=>{const b=f&&f.children,E=f?f.shapeFlag:0,N=u.children,{patchFlag:T,shapeFlag:R}=u;if(T>0){if(T&128){an(b,N,h,p,g,_,k,y,x);return}else if(T&256){Zt(b,N,h,p,g,_,k,y,x);return}}R&8?(E&16&&Rt(b,g,_),N!==b&&d(h,N)):E&16?R&16?an(b,N,h,p,g,_,k,y,x):Rt(b,g,_,!0):(E&8&&d(h,""),R&16&&gt(N,h,p,g,_,k,y,x))},Zt=(f,u,h,p,g,_,k,y,x)=>{f=f||ye,u=u||ye;const b=f.length,E=u.length,N=Math.min(b,E);let T;for(T=0;T<N;T++){const R=u[T]=x?qt(u[T]):Ct(u[T]);M(f[T],R,h,null,g,_,k,y,x)}b>E?Rt(f,g,_,!0,!1,N):gt(u,h,p,g,_,k,y,x,N)},an=(f,u,h,p,g,_,k,y,x)=>{let b=0;const E=u.length;let N=f.length-1,T=E-1;for(;b<=N&&b<=T;){const R=f[b],z=u[b]=x?qt(u[b]):Ct(u[b]);if(Re(R,z))M(R,z,h,null,g,_,k,y,x);else break;b++}for(;b<=N&&b<=T;){const R=f[N],z=u[T]=x?qt(u[T]):Ct(u[T]);if(Re(R,z))M(R,z,h,null,g,_,k,y,x);else break;N--,T--}if(b>N){if(b<=T){const R=T+1,z=R<E?u[R].el:p;for(;b<=T;)M(null,u[b]=x?qt(u[b]):Ct(u[b]),h,z,g,_,k,y,x),b++}}else if(b>T)for(;b<=N;)Ot(f[b],g,_,!0),b++;else{const R=b,z=b,B=new Map;for(b=z;b<=T;b++){const dt=u[b]=x?qt(u[b]):Ct(u[b]);dt.key!=null&&B.set(dt.key,b)}let V,nt=0;const yt=T-z+1;let ge=!1,Ea=0;const Me=new Array(yt);for(b=0;b<yt;b++)Me[b]=0;for(b=R;b<=N;b++){const dt=f[b];if(nt>=yt){Ot(dt,g,_,!0);continue}let Et;if(dt.key!=null)Et=B.get(dt.key);else for(V=z;V<=T;V++)if(Me[V-z]===0&&Re(dt,u[V])){Et=V;break}Et===void 0?Ot(dt,g,_,!0):(Me[Et-z]=b+1,Et>=Ea?Ea=Et:ge=!0,M(dt,u[Et],h,null,g,_,k,y,x),nt++)}const Sa=ge?Dl(Me):ye;for(V=Sa.length-1,b=yt-1;b>=0;b--){const dt=z+b,Et=u[dt],Pa=dt+1<E?u[dt+1].el:p;Me[b]===0?M(null,Et,h,Pa,g,_,k,y,x):ge&&(V<0||b!==Sa[V]?te(Et,h,Pa,2):V--)}}},te=(f,u,h,p,g=null)=>{const{el:_,type:k,transition:y,children:x,shapeFlag:b}=f;if(b&6){te(f.component.subTree,u,h,p);return}if(b&128){f.suspense.move(u,h,p);return}if(b&64){k.move(f,u,h,pe);return}if(k===Pt){r(_,u,h);for(let N=0;N<x.length;N++)te(x[N],u,h,p);r(f.anchor,u,h);return}if(k===fr){C(f,u,h);return}if(p!==2&&b&1&&y)if(p===0)y.beforeEnter(_),r(_,u,h),ct(()=>y.enter(_),g);else{const{leave:N,delayLeave:T,afterLeave:R}=y,z=()=>r(_,u,h),B=()=>{N(_,()=>{z(),R&&R()})};T?T(_,z,B):B()}else r(_,u,h)},Ot=(f,u,h,p=!1,g=!1)=>{const{type:_,props:k,ref:y,children:x,dynamicChildren:b,shapeFlag:E,patchFlag:N,dirs:T}=f;if(y!=null&&Er(y,null,h,f,!0),E&256){u.ctx.deactivate(f);return}const R=E&1&&T,z=!On(f);let B;if(z&&(B=k&&k.onVnodeBeforeUnmount)&&St(B,u,f),E&6)as(f.component,h,p);else{if(E&128){f.suspense.unmount(h,p);return}R&&ee(f,null,u,"beforeUnmount"),E&64?f.type.remove(f,u,h,g,pe,p):b&&(_!==Pt||N>0&&N&64)?Rt(b,u,h,!1,!0):(_===Pt&&N&384||!g&&E&16)&&Rt(x,u,h),p&&ka(f)}(z&&(B=k&&k.onVnodeUnmounted)||R)&&ct(()=>{B&&St(B,u,f),R&&ee(f,null,u,"unmounted")},h)},ka=f=>{const{type:u,el:h,anchor:p,transition:g}=f;if(u===Pt){rs(h,p);return}if(u===fr){j(f);return}const _=()=>{a(h),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(f.shapeFlag&1&&g&&!g.persisted){const{leave:k,delayLeave:y}=g,x=()=>k(h,_);y?y(f.el,_,x):x()}else _()},rs=(f,u)=>{let h;for(;f!==u;)h=v(f),a(f),f=h;a(u)},as=(f,u,h)=>{const{bum:p,scope:g,update:_,subTree:k,um:y}=f;p&&ar(p),g.stop(),_&&(_.active=!1,Ot(k,f,u,h)),y&&ct(y,u),ct(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Rt=(f,u,h,p=!1,g=!1,_=0)=>{for(let k=_;k<f.length;k++)Ot(f[k],u,h,p,g)},on=f=>f.shapeFlag&6?on(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),Oa=(f,u,h)=>{f==null?u._vnode&&Ot(u._vnode,null,null,!0):M(u._vnode||null,f,u,null,null,null,h),$a(),ao(),u._vnode=f},pe={p:M,um:Ot,m:te,r:ka,mt:tr,mc:gt,pc:Y,pbc:Mt,n:on,o:t};let er,nr;return e&&([er,nr]=e(pe)),{render:Oa,hydrate:er,createApp:Tl(Oa,er)}}function lr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ne({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function zl(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function wo(t,e,n=!1){const r=t.children,a=e.children;if(L(r)&&L(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=qt(a[i]),s.el=o.el),n||wo(o,s)),s.type===Wn&&(s.el=o.el)}}function Dl(t){const e=t.slice(),n=[0];let r,a,i,o,s;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(a=n[n.length-1],t[a]<c){e[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,t[n[s]]<c?i=s+1:o=s;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Ao(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ao(e)}const Hl=t=>t.__isTeleport,Pt=Symbol.for("v-fgt"),Wn=Symbol.for("v-txt"),We=Symbol.for("v-cmt"),fr=Symbol.for("v-stc"),De=[];let wt=null;function Ae(t=!1){De.push(wt=t?null:[])}function Ul(){De.pop(),wt=De[De.length-1]||null}let Ve=1;function Ga(t){Ve+=t}function Bl(t){return t.dynamicChildren=Ve>0?wt||ye:null,Ul(),Ve>0&&wt&&wt.push(t),t}function ke(t,e,n,r,a,i){return Bl(mt(t,e,n,r,a,i,!0))}function Sr(t){return t?t.__v_isVNode===!0:!1}function Re(t,e){return t.type===e.type&&t.key===e.key}const Vn="__vInternal",ko=({key:t})=>t??null,Sn=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?tt(t)||ht(t)||F(t)?{i:xt,r:t,k:e,f:!!n}:t:null);function mt(t,e=null,n=null,r=0,a=null,i=t===Pt?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ko(e),ref:e&&Sn(e),scopeId:so,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:xt};return s?(sa(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=tt(n)?8:16),Ve>0&&!o&&wt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&wt.push(l),l}const ot=Yl;function Yl(t,e=null,n=null,r=0,a=null,i=!1){if((!t||t===nl)&&(t=We),Sr(t)){const s=Ee(t,e,!0);return n&&sa(s,n),Ve>0&&!i&&wt&&(s.shapeFlag&6?wt[wt.indexOf(t)]=s:wt.push(s)),s.patchFlag|=-2,s}if(nf(t)&&(t=t.__vccOpts),e){e=ql(e);let{class:s,style:l}=e;s&&!tt(s)&&(e.class=Vr(s)),G(l)&&(Ji(l)&&!L(l)&&(l=at({},l)),e.style=Wr(l))}const o=tt(t)?1:al(t)?128:Hl(t)?64:G(t)?4:F(t)?2:0;return mt(t,e,n,r,a,o,i,!0)}function ql(t){return t?Ji(t)||Vn in t?at({},t):t:null}function Ee(t,e,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=t,s=e?Vl(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:s,key:s&&ko(s),ref:e&&e.ref?n&&a?L(a)?a.concat(Sn(e)):[a,Sn(e)]:Sn(e):a,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Pt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ee(t.ssContent),ssFallback:t.ssFallback&&Ee(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Wl(t=" ",e=0){return ot(Wn,null,t,e)}function Ct(t){return t==null||typeof t=="boolean"?ot(We):L(t)?ot(Pt,null,t.slice()):typeof t=="object"?qt(t):ot(Wn,null,String(t))}function qt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ee(t)}function sa(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(L(e))n=16;else if(typeof e=="object")if(r&65){const a=e.default;a&&(a._c&&(a._d=!1),sa(t,a()),a._c&&(a._d=!0));return}else{n=32;const a=e._;!a&&!(Vn in e)?e._ctx=xt:a===3&&xt&&(xt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else F(e)?(e={default:e,_ctx:xt},n=32):(e=String(e),r&64?(n=16,e=[Wl(e)]):n=8);t.children=e,t.shapeFlag|=n}function Vl(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const a in r)if(a==="class")e.class!==r.class&&(e.class=Vr([e.class,r.class]));else if(a==="style")e.style=Wr([e.style,r.style]);else if($n(a)){const i=e[a],o=r[a];o&&i!==o&&!(L(i)&&i.includes(o))&&(e[a]=i?[].concat(i,o):o)}else a!==""&&(e[a]=r[a])}return e}function St(t,e,n,r=null){kt(t,e,7,[n,r])}const Kl=go();let Gl=0;function Xl(t,e,n){const r=t.type,a=(e?e.appContext:t.appContext)||Kl,i={uid:Gl++,vnode:t,type:r,parent:e,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new vs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bo(r,a),emitsOptions:oo(r,a),emit:null,emitted:null,propsDefaults:K,inheritAttrs:r.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Xs.bind(null,i),t.ce&&t.ce(i),i}let rt=null,la,Pr;{const t=ji(),e=(n,r)=>{let a;return(a=t[n])||(a=t[n]=[]),a.push(r),i=>{a.length>1?a.forEach(o=>o(i)):a[0](i)}};la=e("__VUE_INSTANCE_SETTERS__",n=>rt=n),Pr=e("__VUE_SSR_SETTERS__",n=>Kn=n)}const Se=t=>{la(t),t.scope.on()},fe=()=>{rt&&rt.scope.off(),la(null)};function Oo(t){return t.vnode.shapeFlag&4}let Kn=!1;function Ql(t,e=!1){e&&Pr(e);const{props:n,children:r}=t.vnode,a=Oo(t);Nl(t,n,a,e),Ll(t,r);const i=a?Jl(t,e):void 0;return e&&Pr(!1),i}function Jl(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Zi(new Proxy(t.ctx,Al));const{setup:r}=n;if(r){const a=t.setupContext=r.length>1?tf(t):null;Se(t),me();const i=Gt(r,t,0,[t.props,a]);if(he(),fe(),Ri(i)){if(i.then(fe,fe),e)return i.then(o=>{Xa(t,o,e)}).catch(o=>{Bn(o,t,0)});t.asyncDep=i}else Xa(t,i,e)}else Eo(t,e)}function Xa(t,e,n){F(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:G(e)&&(t.setupState=eo(e)),Eo(t,n)}let Qa;function Eo(t,e,n){const r=t.type;if(!t.render){if(!e&&Qa&&!r.render){const a=r.template||ia(t).template;if(a){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:s,compilerOptions:l}=r,c=at(at({isCustomElement:i,delimiters:s},o),l);r.render=Qa(a,c)}}t.render=r.render||bt}{Se(t),me();try{kl(t)}finally{he(),fe()}}}function Zl(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return ut(t,"get","$attrs"),e[n]}}))}function tf(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Zl(t)},slots:t.slots,emit:t.emit,expose:e}}function fa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(eo(Zi(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ze)return ze[n](t)},has(e,n){return n in e||n in ze}}))}function ef(t,e=!0){return F(t)?t.displayName||t.name:t.name||e&&t.__name}function nf(t){return F(t)&&"__vccOpts"in t}const re=(t,e)=>Ds(t,e,Kn);function rf(t,e,n){const r=arguments.length;return r===2?G(e)&&!L(e)?Sr(e)?ot(t,null,[e]):ot(t,e):ot(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Sr(n)&&(n=[n]),ot(t,e,n))}const af="3.4.3",of="http://www.w3.org/2000/svg",sf="http://www.w3.org/1998/Math/MathML",Wt=typeof document<"u"?document:null,Ja=Wt&&Wt.createElement("template"),lf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const a=e==="svg"?Wt.createElementNS(of,t):e==="mathml"?Wt.createElementNS(sf,t):Wt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:t=>Wt.createTextNode(t),createComment:t=>Wt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Wt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,a,i){const o=n?n.previousSibling:e.lastChild;if(a&&(a===i||a.nextSibling))for(;e.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Ja.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const s=Ja.content;if(r==="svg"||r==="mathml"){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}e.insertBefore(s,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ff=Symbol("_vtc");function cf(t,e,n){const r=t[ff];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const uf=Symbol("_vod"),df=Symbol("");function mf(t,e,n){const r=t.style,a=tt(n);if(n&&!a){if(e&&!tt(e))for(const i in e)n[i]==null&&Cr(r,i,"");for(const i in n)Cr(r,i,n[i])}else{const i=r.display;if(a){if(e!==n){const o=r[df];o&&(n+=";"+o),r.cssText=n}}else e&&t.removeAttribute("style");uf in t&&(r.display=i)}}const Za=/\s*!important$/;function Cr(t,e,n){if(L(n))n.forEach(r=>Cr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=hf(t,e);Za.test(n)?t.setProperty(Te(r),n.replace(Za,""),"important"):t[r]=n}}const ti=["Webkit","Moz","ms"],cr={};function hf(t,e){const n=cr[e];if(n)return n;let r=Nt(e);if(r!=="filter"&&r in t)return cr[e]=r;r=Hn(r);for(let a=0;a<ti.length;a++){const i=ti[a]+r;if(i in t)return cr[e]=i}return e}const ei="http://www.w3.org/1999/xlink";function pf(t,e,n,r,a){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ei,e.slice(6,e.length)):t.setAttributeNS(ei,e,n);else{const i=gs(e);n==null||i&&!$i(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function gf(t,e,n,r,a,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,a,i),t[e]=n??"";return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){t._value=n;const c=s==="OPTION"?t.getAttribute("value"):t.value,d=n??"";c!==d&&(t.value=d),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=$i(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function vf(t,e,n,r){t.addEventListener(e,n,r)}function bf(t,e,n,r){t.removeEventListener(e,n,r)}const ni=Symbol("_vei");function yf(t,e,n,r,a=null){const i=t[ni]||(t[ni]={}),o=i[e];if(r&&o)o.value=r;else{const[s,l]=_f(e);if(r){const c=i[e]=Af(r,a);vf(t,s,c,l)}else o&&(bf(t,s,o,l),i[e]=void 0)}}const ri=/(?:Once|Passive|Capture)$/;function _f(t){let e;if(ri.test(t)){e={};let r;for(;r=t.match(ri);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Te(t.slice(2)),e]}let ur=0;const xf=Promise.resolve(),wf=()=>ur||(xf.then(()=>ur=0),ur=Date.now());function Af(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;kt(kf(r,n.value),e,5,[r])};return n.value=t,n.attached=wf(),n}function kf(t,e){if(L(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>a=>!a._stopped&&r&&r(a))}else return e}const ai=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Of=(t,e,n,r,a,i,o,s,l)=>{const c=a==="svg";e==="class"?cf(t,r,c):e==="style"?mf(t,n,r):$n(e)?Br(e)||yf(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ef(t,e,r,c))?gf(t,e,r,i,o,s,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),pf(t,e,r,c))};function Ef(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&ai(e)&&F(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const a=t.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return ai(e)&&tt(n)?!1:e in t}const Sf=at({patchProp:Of},lf);let ii;function Pf(){return ii||(ii=jl(Sf))}const Cf=(...t)=>{const e=Pf().createApp(...t),{mount:n}=e;return e.mount=r=>{const a=If(r);if(!a)return;const i=e._component;!F(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,Tf(a));return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},e};function Tf(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function If(t){return tt(t)?document.querySelector(t):t}const Gn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,a]of e)n[r]=a;return n},Nf={props:["title"]};function Mf(t,e,n,r,a,i){return Ae(),ke("header",null,[mt("h1",null,$e(n.title),1)])}const Rf=Gn(Nf,[["render",Mf]]),Lf={props:["quote"]},Ff={class:"quote",id:"quote-box"},jf={class:"quote-content",id:"text"},$f={class:"quote-info"},zf={class:"quote-anime"},Df={class:"icons"},Hf={class:"button",id:"tumblr-quote",title:"Post this quote on tumblr!",target:"_blank"},Uf={class:"button",id:"tweet-quote",title:"Tweet this quote!",target:"_blank"},Bf={class:"quote-author",id:"author"};function Yf(t,e,n,r,a,i){const o=An("font-awesome-icon");return Ae(),ke("section",Ff,[mt("div",jf,$e(n.quote.content),1),mt("div",$f,[mt("div",zf,$e(n.quote.anime),1),mt("div",Df,[mt("a",Hf,[ot(o,{icon:"fa-brands fa-tumblr"})]),mt("a",Uf,[ot(o,{icon:"fa-brands fa-square-x-twitter"})])]),mt("div",Bf,$e(n.quote.author),1)])])}const qf=Gn(Lf,[["render",Yf]]),Wf={props:["quotes"]},Vf={class:"quote-list"},Kf={class:"quote-content2"};function Gf(t,e,n,r,a,i){return Ae(),ke("section",Vf,[(Ae(!0),ke(Pt,null,wl(n.quotes.slice().reverse(),(o,s)=>(Ae(),ke("div",{class:"quote",key:s},[mt("div",Kf,$e(o.content),1)]))),128))])}const Xf=Gn(Wf,[["render",Gf]]),Qf={name:"App",components:{Header:Rf,Quote:qf,QuoteList:Xf},data(){return{quote:{},quotes:[]}},methods:{async getQuote(){this.quote.content&&(this.quotes=[...this.quotes,this.quote]);const t=await fetch("https://animechan.xyz/api/random").then(e=>e.json());this.quote={content:t.quote,anime:t.anime,author:t.character}}},created(){this.getQuote()}},Jf={class:"app"},Zf={class:"button-container"};function tc(t,e,n,r,a,i){const o=An("Header"),s=An("Quote"),l=An("QuoteList");return Ae(),ke("div",Jf,[ot(o,{title:"The Anime Quoter"}),ot(s,{quote:a.quote},null,8,["quote"]),mt("div",Zf,[mt("button",{onClick:e[0]||(e[0]=(...c)=>i.getQuote&&i.getQuote(...c)),id:"new-quote"},"Generate")]),ot(l,{quotes:a.quotes},null,8,["quotes"])])}const ec=Gn(Qf,[["render",tc]]);function oi(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?oi(Object(n),!0).forEach(function(r){et(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):oi(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Rn(t){"@babel/helpers - typeof";return Rn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Rn(t)}function nc(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function si(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function rc(t,e,n){return e&&si(t.prototype,e),n&&si(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function et(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ca(t,e){return ic(t)||sc(t,e)||So(t,e)||fc()}function Ze(t){return ac(t)||oc(t)||So(t)||lc()}function ac(t){if(Array.isArray(t))return Tr(t)}function ic(t){if(Array.isArray(t))return t}function oc(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function sc(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(t);!(a=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function So(t,e){if(t){if(typeof t=="string")return Tr(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Tr(t,e)}}function Tr(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function lc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var li=function(){},ua={},Po={},Co=null,To={mark:li,measure:li};try{typeof window<"u"&&(ua=window),typeof document<"u"&&(Po=document),typeof MutationObserver<"u"&&(Co=MutationObserver),typeof performance<"u"&&(To=performance)}catch{}var cc=ua.navigator||{},fi=cc.userAgent,ci=fi===void 0?"":fi,Xt=ua,W=Po,ui=Co,mn=To;Xt.document;var Ut=!!W.documentElement&&!!W.head&&typeof W.addEventListener=="function"&&typeof W.createElement=="function",Io=~ci.indexOf("MSIE")||~ci.indexOf("Trident/"),hn,pn,gn,vn,bn,$t="___FONT_AWESOME___",Ir=16,No="fa",Mo="svg-inline--fa",ue="data-fa-i2svg",Nr="data-fa-pseudo-element",uc="data-fa-pseudo-element-pending",da="data-prefix",ma="data-icon",di="fontawesome-i2svg",dc="async",mc=["HTML","HEAD","STYLE","SCRIPT"],Ro=function(){try{return!0}catch{return!1}}(),q="classic",Q="sharp",ha=[q,Q];function tn(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[q]}})}var Ke=tn((hn={},et(hn,q,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),et(hn,Q,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),hn)),Ge=tn((pn={},et(pn,q,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),et(pn,Q,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),pn)),Xe=tn((gn={},et(gn,q,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),et(gn,Q,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),gn)),hc=tn((vn={},et(vn,q,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),et(vn,Q,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),vn)),pc=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Lo="fa-layers-text",gc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,vc=tn((bn={},et(bn,q,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),et(bn,Q,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),bn)),Fo=[1,2,3,4,5,6,7,8,9,10],bc=Fo.concat([11,12,13,14,15,16,17,18,19,20]),yc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ie={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Qe=new Set;Object.keys(Ge[q]).map(Qe.add.bind(Qe));Object.keys(Ge[Q]).map(Qe.add.bind(Qe));var _c=[].concat(ha,Ze(Qe),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ie.GROUP,ie.SWAP_OPACITY,ie.PRIMARY,ie.SECONDARY]).concat(Fo.map(function(t){return"".concat(t,"x")})).concat(bc.map(function(t){return"w-".concat(t)})),He=Xt.FontAwesomeConfig||{};function xc(t){var e=W.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function wc(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(W&&typeof W.querySelector=="function"){var Ac=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ac.forEach(function(t){var e=ca(t,2),n=e[0],r=e[1],a=wc(xc(n));a!=null&&(He[r]=a)})}var jo={styleDefault:"solid",familyDefault:"classic",cssPrefix:No,replacementClass:Mo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};He.familyPrefix&&(He.cssPrefix=He.familyPrefix);var Pe=O(O({},jo),He);Pe.autoReplaceSvg||(Pe.observeMutations=!1);var P={};Object.keys(jo).forEach(function(t){Object.defineProperty(P,t,{enumerable:!0,set:function(n){Pe[t]=n,Ue.forEach(function(r){return r(P)})},get:function(){return Pe[t]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(e){Pe.cssPrefix=e,Ue.forEach(function(n){return n(P)})},get:function(){return Pe.cssPrefix}});Xt.FontAwesomeConfig=P;var Ue=[];function kc(t){return Ue.push(t),function(){Ue.splice(Ue.indexOf(t),1)}}var Yt=Ir,It={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Oc(t){if(!(!t||!Ut)){var e=W.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=W.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return W.head.insertBefore(e,r),t}}var Ec="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Je(){for(var t=12,e="";t-- >0;)e+=Ec[Math.random()*62|0];return e}function Ie(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function pa(t){return t.classList?Ie(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function $o(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Sc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat($o(t[n]),'" ')},"").trim()}function Xn(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function ga(t){return t.size!==It.size||t.x!==It.x||t.y!==It.y||t.rotate!==It.rotate||t.flipX||t.flipY}function Pc(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Cc(t){var e=t.transform,n=t.width,r=n===void 0?Ir:n,a=t.height,i=a===void 0?Ir:a,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&Io?l+="translate(".concat(e.x/Yt-r/2,"em, ").concat(e.y/Yt-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/Yt,"em), calc(-50% + ").concat(e.y/Yt,"em)) "):l+="translate(".concat(e.x/Yt,"em, ").concat(e.y/Yt,"em) "),l+="scale(".concat(e.size/Yt*(e.flipX?-1:1),", ").concat(e.size/Yt*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var Tc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function zo(){var t=No,e=Mo,n=P.cssPrefix,r=P.replacementClass,a=Tc;if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var mi=!1;function dr(){P.autoAddCss&&!mi&&(Oc(zo()),mi=!0)}var Ic={mixout:function(){return{dom:{css:zo,insertCss:dr}}},hooks:function(){return{beforeDOMElementCreation:function(){dr()},beforeI2svg:function(){dr()}}}},zt=Xt||{};zt[$t]||(zt[$t]={});zt[$t].styles||(zt[$t].styles={});zt[$t].hooks||(zt[$t].hooks={});zt[$t].shims||(zt[$t].shims=[]);var At=zt[$t],Do=[],Nc=function t(){W.removeEventListener("DOMContentLoaded",t),Ln=1,Do.map(function(e){return e()})},Ln=!1;Ut&&(Ln=(W.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(W.readyState),Ln||W.addEventListener("DOMContentLoaded",Nc));function Mc(t){Ut&&(Ln?setTimeout(t,0):Do.push(t))}function en(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,a=t.children,i=a===void 0?[]:a;return typeof t=="string"?$o(t):"<".concat(e," ").concat(Sc(r),">").concat(i.map(en).join(""),"</").concat(e,">")}function hi(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Rc=function(e,n){return function(r,a,i,o){return e.call(n,r,a,i,o)}},mr=function(e,n,r,a){var i=Object.keys(e),o=i.length,s=a!==void 0?Rc(n,a):n,l,c,d;for(r===void 0?(l=1,d=e[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,e[c],c,e);return d};function Lc(t){for(var e=[],n=0,r=t.length;n<r;){var a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((a&1023)<<10)+(i&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function Mr(t){var e=Lc(t);return e.length===1?e[0].toString(16):null}function Fc(t,e){var n=t.length,r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function pi(t){return Object.keys(t).reduce(function(e,n){var r=t[n],a=!!r.icon;return a?e[r.iconName]=r.icon:e[n]=r,e},{})}function Rr(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=pi(e);typeof At.hooks.addPack=="function"&&!a?At.hooks.addPack(t,pi(e)):At.styles[t]=O(O({},At.styles[t]||{}),i),t==="fas"&&Rr("fa",e)}var yn,_n,xn,ve=At.styles,jc=At.shims,$c=(yn={},et(yn,q,Object.values(Xe[q])),et(yn,Q,Object.values(Xe[Q])),yn),va=null,Ho={},Uo={},Bo={},Yo={},qo={},zc=(_n={},et(_n,q,Object.keys(Ke[q])),et(_n,Q,Object.keys(Ke[Q])),_n);function Dc(t){return~_c.indexOf(t)}function Hc(t,e){var n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!Dc(a)?a:null}var Wo=function(){var e=function(i){return mr(ve,function(o,s,l){return o[l]=mr(s,i,{}),o},{})};Ho=e(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Uo=e(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),qo=e(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in ve||P.autoFetchSvg,r=mr(jc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Bo=r.names,Yo=r.unicodes,va=Qn(P.styleDefault,{family:P.familyDefault})};kc(function(t){va=Qn(t.styleDefault,{family:P.familyDefault})});Wo();function ba(t,e){return(Ho[t]||{})[e]}function Uc(t,e){return(Uo[t]||{})[e]}function oe(t,e){return(qo[t]||{})[e]}function Vo(t){return Bo[t]||{prefix:null,iconName:null}}function Bc(t){var e=Yo[t],n=ba("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Qt(){return va}var ya=function(){return{prefix:null,iconName:null,rest:[]}};function Qn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?q:n,a=Ke[r][t],i=Ge[r][t]||Ge[r][a],o=t in At.styles?t:null;return i||o||null}var gi=(xn={},et(xn,q,Object.keys(Xe[q])),et(xn,Q,Object.keys(Xe[Q])),xn);function Jn(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(e={},et(e,q,"".concat(P.cssPrefix,"-").concat(q)),et(e,Q,"".concat(P.cssPrefix,"-").concat(Q)),e),o=null,s=q;(t.includes(i[q])||t.some(function(c){return gi[q].includes(c)}))&&(s=q),(t.includes(i[Q])||t.some(function(c){return gi[Q].includes(c)}))&&(s=Q);var l=t.reduce(function(c,d){var m=Hc(P.cssPrefix,d);if(ve[d]?(d=$c[s].includes(d)?hc[s][d]:d,o=d,c.prefix=d):zc[s].indexOf(d)>-1?(o=d,c.prefix=Qn(d,{family:s})):m?c.iconName=m:d!==P.replacementClass&&d!==i[q]&&d!==i[Q]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var v=o==="fa"?Vo(c.iconName):{},A=oe(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||A||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!ve.far&&ve.fas&&!P.autoFetchSvg&&(c.prefix="fas")}return c},ya());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Q&&(ve.fass||P.autoFetchSvg)&&(l.prefix="fass",l.iconName=oe(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Qt()||"fas"),l}var Yc=function(){function t(){nc(this,t),this.definitions={}}return rc(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),Rr(s,o[s]);var l=Xe[q][s];l&&Rr(l,o[s]),Wo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),t}(),vi=[],be={},Oe={},qc=Object.keys(Oe);function Wc(t,e){var n=e.mixoutsTo;return vi=t,be={},Object.keys(Oe).forEach(function(r){qc.indexOf(r)===-1&&delete Oe[r]}),vi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Rn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){be[o]||(be[o]=[]),be[o].push(i[o])})}r.provides&&r.provides(Oe)}),n}function Lr(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=be[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function de(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=be[t]||[];a.forEach(function(i){i.apply(null,n)})}function Dt(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Oe[t]?Oe[t].apply(null,e):void 0}function Fr(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Qt();if(e)return e=oe(n,e)||e,hi(Ko.definitions,n,e)||hi(At.styles,n,e)}var Ko=new Yc,Vc=function(){P.autoReplaceSvg=!1,P.observeMutations=!1,de("noAuto")},Kc={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ut?(de("beforeI2svg",e),Dt("pseudoElements2svg",e),Dt("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,Mc(function(){Xc({autoReplaceSvgRoot:n}),de("watch",e)})}},Gc={icon:function(e){if(e===null)return null;if(Rn(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:oe(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Qn(e[0]);return{prefix:r,iconName:oe(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(P.cssPrefix,"-"))>-1||e.match(pc))){var a=Jn(e.split(" "),{skipLookups:!0});return{prefix:a.prefix||Qt(),iconName:oe(a.prefix,a.iconName)||a.iconName}}if(typeof e=="string"){var i=Qt();return{prefix:i,iconName:oe(i,e)||e}}}},pt={noAuto:Vc,config:P,dom:Kc,parse:Gc,library:Ko,findIconDefinition:Fr,toHtml:en},Xc=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?W:n;(Object.keys(At.styles).length>0||P.autoFetchSvg)&&Ut&&P.autoReplaceSvg&&pt.dom.i2svg({node:r})};function Zn(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return en(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Ut){var r=W.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function Qc(t){var e=t.children,n=t.main,r=t.mask,a=t.attributes,i=t.styles,o=t.transform;if(ga(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=Xn(O(O({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function Jc(t){var e=t.prefix,n=t.iconName,r=t.children,a=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(P.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},a),{},{id:o}),children:r}]}]}function _a(t){var e=t.icons,n=e.main,r=e.mask,a=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.title,c=t.maskId,d=t.titleId,m=t.extra,v=t.watchable,A=v===void 0?!1:v,$=r.found?r:n,M=$.width,D=$.height,w=a==="fak",S=[P.replacementClass,i?"".concat(P.cssPrefix,"-").concat(i):""].filter(function(vt){return m.classes.indexOf(vt)===-1}).filter(function(vt){return vt!==""||!!vt}).concat(m.classes).join(" "),C={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:S,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(M," ").concat(D)})},j=w&&!~m.classes.indexOf("fa-fw")?{width:"".concat(M/D*16*.0625,"em")}:{};A&&(C.attributes[ue]=""),l&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(d||Je())},children:[l]}),delete C.attributes.title);var I=O(O({},C),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:O(O({},j),m.styles)}),J=r.found&&n.found?Dt("generateAbstractMask",I)||{children:[],attributes:{}}:Dt("generateAbstractIcon",I)||{children:[],attributes:{}},Z=J.children,gt=J.attributes;return I.children=Z,I.attributes=gt,s?Jc(I):Qc(I)}function bi(t){var e=t.content,n=t.width,r=t.height,a=t.transform,i=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,c=O(O(O({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[ue]="");var d=O({},o.styles);ga(a)&&(d.transform=Cc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Xn(d);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[e]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function Zc(t){var e=t.content,n=t.title,r=t.extra,a=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Xn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var hr=At.styles;function jr(t){var e=t[0],n=t[1],r=t.slice(4),a=ca(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(ie.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(ie.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(ie.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var tu={found:!1,width:512,height:512};function eu(t,e){!Ro&&!P.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function $r(t,e){var n=e;return e==="fa"&&P.styleDefault!==null&&(e=Qt()),new Promise(function(r,a){if(Dt("missingIconAbstract"),n==="fa"){var i=Vo(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&hr[e]&&hr[e][t]){var o=hr[e][t];return r(jr(o))}eu(t,e),r(O(O({},tu),{},{icon:P.showMissingIcons&&t?Dt("missingIconAbstract")||{}:{}}))})}var yi=function(){},zr=P.measurePerformance&&mn&&mn.mark&&mn.measure?mn:{mark:yi,measure:yi},je='FA "6.5.1"',nu=function(e){return zr.mark("".concat(je," ").concat(e," begins")),function(){return Go(e)}},Go=function(e){zr.mark("".concat(je," ").concat(e," ends")),zr.measure("".concat(je," ").concat(e),"".concat(je," ").concat(e," begins"),"".concat(je," ").concat(e," ends"))},xa={begin:nu,end:Go},Pn=function(){};function _i(t){var e=t.getAttribute?t.getAttribute(ue):null;return typeof e=="string"}function ru(t){var e=t.getAttribute?t.getAttribute(da):null,n=t.getAttribute?t.getAttribute(ma):null;return e&&n}function au(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(P.replacementClass)}function iu(){if(P.autoReplaceSvg===!0)return Cn.replace;var t=Cn[P.autoReplaceSvg];return t||Cn.replace}function ou(t){return W.createElementNS("http://www.w3.org/2000/svg",t)}function su(t){return W.createElement(t)}function Xo(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?ou:su:n;if(typeof t=="string")return W.createTextNode(t);var a=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){a.appendChild(Xo(o,{ceFn:r}))}),a}function lu(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Cn={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(a){n.parentNode.insertBefore(Xo(a),n)}),n.getAttribute(ue)===null&&P.keepOriginalSource){var r=W.createComment(lu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~pa(n).indexOf(P.replacementClass))return Cn.replace(e);var a=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===P.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return en(s)}).join(`
`);n.setAttribute(ue,""),n.innerHTML=o}};function xi(t){t()}function Qo(t,e){var n=typeof e=="function"?e:Pn;if(t.length===0)n();else{var r=xi;P.mutateApproach===dc&&(r=Xt.requestAnimationFrame||xi),r(function(){var a=iu(),i=xa.begin("mutate");t.map(a),i(),n()})}}var wa=!1;function Jo(){wa=!0}function Dr(){wa=!1}var Fn=null;function wi(t){if(ui&&P.observeMutations){var e=t.treeCallback,n=e===void 0?Pn:e,r=t.nodeCallback,a=r===void 0?Pn:r,i=t.pseudoElementsCallback,o=i===void 0?Pn:i,s=t.observeMutationsRoot,l=s===void 0?W:s;Fn=new ui(function(c){if(!wa){var d=Qt();Ie(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!_i(m.addedNodes[0])&&(P.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&P.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&_i(m.target)&&~yc.indexOf(m.attributeName))if(m.attributeName==="class"&&ru(m.target)){var v=Jn(pa(m.target)),A=v.prefix,$=v.iconName;m.target.setAttribute(da,A||d),$&&m.target.setAttribute(ma,$)}else au(m.target)&&a(m.target)})}}),Ut&&Fn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function fu(){Fn&&Fn.disconnect()}function cu(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function uu(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",a=Jn(pa(t));return a.prefix||(a.prefix=Qt()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Uc(a.prefix,t.innerText)||ba(a.prefix,Mr(t.innerText))),!a.iconName&&P.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function du(t){var e=Ie(t.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return P.autoA11y&&(n?e["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||Je()):(e["aria-hidden"]="true",e.focusable="false")),e}function mu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:It,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ai(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=uu(t),r=n.iconName,a=n.prefix,i=n.rest,o=du(t),s=Lr("parseNodeAttributes",{},t),l=e.styleParser?cu(t):[];return O({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:It,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var hu=At.styles;function Zo(t){var e=P.autoReplaceSvg==="nest"?Ai(t,{styleParser:!1}):Ai(t);return~e.extra.classes.indexOf(Lo)?Dt("generateLayersText",t,e):Dt("generateSvgReplacementMutation",t,e)}var Jt=new Set;ha.map(function(t){Jt.add("fa-".concat(t))});Object.keys(Ke[q]).map(Jt.add.bind(Jt));Object.keys(Ke[Q]).map(Jt.add.bind(Jt));Jt=Ze(Jt);function ki(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ut)return Promise.resolve();var n=W.documentElement.classList,r=function(m){return n.add("".concat(di,"-").concat(m))},a=function(m){return n.remove("".concat(di,"-").concat(m))},i=P.autoFetchSvg?Jt:ha.map(function(d){return"fa-".concat(d)}).concat(Object.keys(hu));i.includes("fa")||i.push("fa");var o=[".".concat(Lo,":not([").concat(ue,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(ue,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ie(t.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=xa.begin("onTree"),c=s.reduce(function(d,m){try{var v=Zo(m);v&&d.push(v)}catch(A){Ro||A.name==="MissingIcon"&&console.error(A)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(v){Qo(v,function(){r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),l(),d()})}).catch(function(v){l(),m(v)})})}function pu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Zo(t).then(function(n){n&&Qo([n],e)})}function gu(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Fr(e||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Fr(a||{})),t(r,O(O({},n),{},{mask:a}))}}var vu=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?It:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,v=m===void 0?null:m,A=n.titleId,$=A===void 0?null:A,M=n.classes,D=M===void 0?[]:M,w=n.attributes,S=w===void 0?{}:w,C=n.styles,j=C===void 0?{}:C;if(e){var I=e.prefix,J=e.iconName,Z=e.icon;return Zn(O({type:"icon"},e),function(){return de("beforeDOMElementCreation",{iconDefinition:e,params:n}),P.autoA11y&&(v?S["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat($||Je()):(S["aria-hidden"]="true",S.focusable="false")),_a({icons:{main:jr(Z),mask:l?jr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:I,iconName:J,transform:O(O({},It),a),symbol:o,title:v,maskId:d,titleId:$,extra:{attributes:S,styles:j,classes:D}})})}},bu={mixout:function(){return{icon:gu(vu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ki,n.nodeCallback=pu,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,a=r===void 0?W:r,i=n.callback,o=i===void 0?function(){}:i;return ki(a,o)},e.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(A,$){Promise.all([$r(a,s),d.iconName?$r(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(M){var D=ca(M,2),w=D[0],S=D[1];A([n,_a({icons:{main:w,mask:S},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch($)})},e.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Xn(s);l.length>0&&(a.style=l);var c;return ga(o)&&(c=Dt("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},yu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Zn({type:"layer"},function(){de("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers")].concat(Ze(i)).join(" ")},children:o}]})}}}},_u={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return Zn({type:"counter",content:n},function(){return de("beforeDOMElementCreation",{content:n,params:r}),Zc({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(P.cssPrefix,"-layers-counter")].concat(Ze(s))}})})}}}},xu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?It:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,A=v===void 0?{}:v;return Zn({type:"text",content:n},function(){return de("beforeDOMElementCreation",{content:n,params:r}),bi({content:n,transform:O(O({},It),i),title:s,extra:{attributes:m,styles:A,classes:["".concat(P.cssPrefix,"-layers-text")].concat(Ze(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Io){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return P.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,bi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},wu=new RegExp('"',"ug"),Oi=[1105920,1112319];function Au(t){var e=t.replace(wu,""),n=Fc(e,0),r=n>=Oi[0]&&n<=Oi[1],a=e.length===2?e[0]===e[1]:!1;return{value:Mr(a?e[0]:e),isSecondary:r||a}}function Ei(t,e){var n="".concat(uc).concat(e.replace(":","-"));return new Promise(function(r,a){if(t.getAttribute(n)!==null)return r();var i=Ie(t.children),o=i.filter(function(Z){return Z.getAttribute(Nr)===e})[0],s=Xt.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(gc),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?Q:q,A=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ge[v][l[2].toLowerCase()]:vc[v][c],$=Au(m),M=$.value,D=$.isSecondary,w=l[0].startsWith("FontAwesome"),S=ba(A,M),C=S;if(w){var j=Bc(M);j.iconName&&j.prefix&&(S=j.iconName,A=j.prefix)}if(S&&!D&&(!o||o.getAttribute(da)!==A||o.getAttribute(ma)!==C)){t.setAttribute(n,C),o&&t.removeChild(o);var I=mu(),J=I.extra;J.attributes[Nr]=e,$r(S,A).then(function(Z){var gt=_a(O(O({},I),{},{icons:{main:Z,mask:ya()},prefix:A,iconName:C,extra:J,watchable:!0})),vt=W.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(vt,t.firstChild):t.appendChild(vt),vt.outerHTML=gt.map(function(Mt){return en(Mt)}).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function ku(t){return Promise.all([Ei(t,"::before"),Ei(t,"::after")])}function Ou(t){return t.parentNode!==document.head&&!~mc.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Nr)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Si(t){if(Ut)return new Promise(function(e,n){var r=Ie(t.querySelectorAll("*")).filter(Ou).map(ku),a=xa.begin("searchPseudoElements");Jo(),Promise.all(r).then(function(){a(),Dr(),e()}).catch(function(){a(),Dr(),n()})})}var Eu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Si,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?W:r;P.searchPseudoElements&&Si(a)}}},Pi=!1,Su={mixout:function(){return{dom:{unwatch:function(){Jo(),Pi=!0}}}},hooks:function(){return{bootstrap:function(){wi(Lr("mutationObserverCallbacks",{}))},noAuto:function(){fu()},watch:function(n){var r=n.observeMutationsRoot;Pi?Dr():wi(Lr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ci=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Pu={mixout:function(){return{parse:{transform:function(n){return Ci(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ci(a)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},A={outer:s,inner:m,path:v};return{tag:"g",attributes:O({},A.outer),children:[{tag:"g",attributes:O({},A.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),A.path)}]}]}}}},pr={x:0,y:0,width:"100%",height:"100%"};function Ti(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Cu(t){return t.tag==="g"?t.children:[t]}var Tu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Jn(a.split(" ").map(function(o){return o.trim()})):ya();return i.prefix||(i.prefix=Qt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,v=o.icon,A=Pc({transform:l,containerWidth:m,iconWidth:c}),$={tag:"rect",attributes:O(O({},pr),{},{fill:"white"})},M=d.children?{children:d.children.map(Ti)}:{},D={tag:"g",attributes:O({},A.inner),children:[Ti(O({tag:d.tag,attributes:O(O({},d.attributes),A.path)},M))]},w={tag:"g",attributes:O({},A.outer),children:[D]},S="mask-".concat(s||Je()),C="clip-".concat(s||Je()),j={tag:"mask",attributes:O(O({},pr),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[$,w]},I={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:Cu(v)},j]};return r.push(I,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(S,")")},pr)}),{children:r,attributes:a}}}},Iu={provides:function(e){var n=!1;Xt.matchMedia&&(n=Xt.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Nu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Mu=[Ic,bu,yu,_u,xu,Eu,Su,Pu,Tu,Iu,Nu];Wc(Mu,{mixoutsTo:pt});pt.noAuto;pt.config;var Ru=pt.library;pt.dom;var Hr=pt.parse;pt.findIconDefinition;pt.toHtml;var Lu=pt.icon;pt.layer;pt.text;pt.counter;function Ii(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function Ft(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ii(Object(n),!0).forEach(function(r){ft(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ii(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function jn(t){"@babel/helpers - typeof";return jn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},jn(t)}function ft(t,e,n){return e=zu(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Fu(t,e){if(t==null)return{};var n={},r=Object.keys(t),a,i;for(i=0;i<r.length;i++)a=r[i],!(e.indexOf(a)>=0)&&(n[a]=t[a]);return n}function ju(t,e){if(t==null)return{};var n=Fu(t,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function $u(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function zu(t){var e=$u(t,"string");return typeof e=="symbol"?e:String(e)}var Du=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ts={exports:{}};(function(t){(function(e){var n=function(w,S,C){if(!c(S)||m(S)||v(S)||A(S)||l(S))return S;var j,I=0,J=0;if(d(S))for(j=[],J=S.length;I<J;I++)j.push(n(w,S[I],C));else{j={};for(var Z in S)Object.prototype.hasOwnProperty.call(S,Z)&&(j[w(Z,C)]=n(w,S[Z],C))}return j},r=function(w,S){S=S||{};var C=S.separator||"_",j=S.split||/(?=[A-Z])/;return w.split(j).join(C)},a=function(w){return $(w)?w:(w=w.replace(/[\-_\s]+(.)?/g,function(S,C){return C?C.toUpperCase():""}),w.substr(0,1).toLowerCase()+w.substr(1))},i=function(w){var S=a(w);return S.substr(0,1).toUpperCase()+S.substr(1)},o=function(w,S){return r(w,S).toLowerCase()},s=Object.prototype.toString,l=function(w){return typeof w=="function"},c=function(w){return w===Object(w)},d=function(w){return s.call(w)=="[object Array]"},m=function(w){return s.call(w)=="[object Date]"},v=function(w){return s.call(w)=="[object RegExp]"},A=function(w){return s.call(w)=="[object Boolean]"},$=function(w){return w=w-0,w===w},M=function(w,S){var C=S&&"process"in S?S.process:S;return typeof C!="function"?w:function(j,I){return C(j,w,I)}},D={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(w,S){return n(M(a,S),w)},decamelizeKeys:function(w,S){return n(M(o,S),w,S)},pascalizeKeys:function(w,S){return n(M(i,S),w)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=D:e.humps=D})(Du)})(ts);var Hu=ts.exports,Uu=["class","style"];function Bu(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),a=Hu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[a]=i,e},{})}function Yu(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function es(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return es(l)}),a=Object.keys(t.attributes||{}).reduce(function(l,c){var d=t.attributes[c];switch(c){case"class":l.class=Yu(d);break;case"style":l.style=Bu(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=ju(n,Uu);return rf(t.tag,Ft(Ft(Ft({},e),{},{class:a.class,style:Ft(Ft({},a.style),o)},a.attrs),s),r)}var ns=!1;try{ns=!0}catch{}function qu(){if(!ns&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function gr(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ft({},t,e):{}}function Wu(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},ft(e,"fa-".concat(t.size),t.size!==null),ft(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),ft(e,"fa-pull-".concat(t.pull),t.pull!==null),ft(e,"fa-swap-opacity",t.swapOpacity),ft(e,"fa-bounce",t.bounce),ft(e,"fa-shake",t.shake),ft(e,"fa-beat",t.beat),ft(e,"fa-fade",t.fade),ft(e,"fa-beat-fade",t.beatFade),ft(e,"fa-flash",t.flash),ft(e,"fa-spin-pulse",t.spinPulse),ft(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ni(t){if(t&&jn(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Hr.icon)return Hr.icon(t);if(t===null)return null;if(jn(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Vu=fl({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,a=re(function(){return Ni(e.icon)}),i=re(function(){return gr("classes",Wu(e))}),o=re(function(){return gr("transform",typeof e.transform=="string"?Hr.transform(e.transform):e.transform)}),s=re(function(){return gr("mask",Ni(e.mask))}),l=re(function(){return Lu(a.value,Ft(Ft(Ft(Ft({},i.value),o.value),s.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});kn(l,function(d){if(!d)return qu("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=re(function(){return l.value?es(l.value.abstract[0],{},r):null});return function(){return c.value}}}),Ku={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]},Gu={prefix:"fab",iconName:"tumblr",icon:[320,512,[],"f173","M309.8 480.3c-13.6 14.5-50 31.7-97.4 31.7-120.8 0-147-88.8-147-140.6v-144H17.9c-5.5 0-10-4.5-10-10v-68c0-7.2 4.5-13.6 11.3-16 62-21.8 81.5-76 84.3-117.1.8-11 6.5-16.3 16.1-16.3h70.9c5.5 0 10 4.5 10 10v115.2h83c5.5 0 10 4.4 10 9.9v81.7c0 5.5-4.5 10-10 10h-83.4V360c0 34.2 23.7 53.6 68 35.8 4.8-1.9 9-3.2 12.7-2.2 3.5.9 5.8 3.4 7.4 7.9l22 64.3c1.8 5 3.3 10.6-.4 14.5z"]},Xu={prefix:"fab",iconName:"square-x-twitter",icon:[448,512,[],"e61a","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"]};Ru.add(Ku,Gu,Xu);Cf(ec).component("font-awesome-icon",Vu).mount("#app");
