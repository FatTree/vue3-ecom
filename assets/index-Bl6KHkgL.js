const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AboutView-Ds06wjtU.js","assets/AboutView-CSIvawM9.css","assets/index-B7I_S3Xd.js","assets/PageNav-DftQzCaz.js","assets/PageNav-QSK0cIqt.css","assets/index-BjZlnsIB.css","assets/_id_-VqAR_b6h.js","assets/_id_-Ued1CnK_.css","assets/Purchase-DH2YXzQ2.js","assets/Purchase-ClkYfuE8.css","assets/Member-Rb-tknLk.js","assets/Member-BeI1DeUO.css","assets/NotFound-DKzxeL2J.js","assets/NotFound-snHE1qoC.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Pf(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const tt={},Vi=[],Bn=()=>{},AR=()=>!1,Jc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),kf=t=>t.startsWith("onUpdate:"),Ct=Object.assign,Nf=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},PR=Object.prototype.hasOwnProperty,Ge=(t,e)=>PR.call(t,e),pe=Array.isArray,Ui=t=>Ga(t)==="[object Map]",Zc=t=>Ga(t)==="[object Set]",s_=t=>Ga(t)==="[object Date]",ye=t=>typeof t=="function",wt=t=>typeof t=="string",us=t=>typeof t=="symbol",Je=t=>t!==null&&typeof t=="object",cE=t=>(Je(t)||ye(t))&&ye(t.then)&&ye(t.catch),uE=Object.prototype.toString,Ga=t=>uE.call(t),kR=t=>Ga(t).slice(8,-1),hE=t=>Ga(t)==="[object Object]",Of=t=>wt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ta=Pf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),eu=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},NR=/-(\w)/g,On=eu(t=>t.replace(NR,(e,n)=>n?n.toUpperCase():"")),OR=/\B([A-Z])/g,fi=eu(t=>t.replace(OR,"-$1").toLowerCase()),tu=eu(t=>t.charAt(0).toUpperCase()+t.slice(1)),lh=eu(t=>t?`on${tu(t)}`:""),hr=(t,e)=>!Object.is(t,e),Gl=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},dE=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},td=t=>{const e=parseFloat(t);return isNaN(e)?t:e},LR=t=>{const e=wt(t)?Number(t):NaN;return isNaN(e)?t:e};let r_;const nu=()=>r_||(r_=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qi(t){if(pe(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=wt(s)?FR(s):Qi(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(wt(t)||Je(t))return t}const DR=/;(?![^(]*\))/g,MR=/:([^]+)/,xR=/\/\*[^]*?\*\//g;function FR(t){const e={};return t.replace(xR,"").split(DR).forEach(n=>{if(n){const s=n.split(MR);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ps(t){let e="";if(wt(t))e=t;else if(pe(t))for(let n=0;n<t.length;n++){const s=Ps(t[n]);s&&(e+=s+" ")}else if(Je(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const VR="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",UR=Pf(VR);function fE(t){return!!t||t===""}function $R(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=su(t[s],e[s]);return n}function su(t,e){if(t===e)return!0;let n=s_(t),s=s_(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=us(t),s=us(e),n||s)return t===e;if(n=pe(t),s=pe(e),n||s)return n&&s?$R(t,e):!1;if(n=Je(t),s=Je(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!su(t[o],e[o]))return!1}}return String(t)===String(e)}function pE(t,e){return t.findIndex(n=>su(n,e))}const mE=t=>!!(t&&t.__v_isRef===!0),mt=t=>wt(t)?t:t==null?"":pe(t)||Je(t)&&(t.toString===uE||!ye(t.toString))?mE(t)?mt(t.value):JSON.stringify(t,_E,2):String(t),_E=(t,e)=>mE(e)?_E(t,e.value):Ui(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[ch(s,i)+" =>"]=r,n),{})}:Zc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ch(n))}:us(e)?ch(e):Je(e)&&!pe(e)&&!hE(e)?String(e):e,ch=(t,e="")=>{var n;return us(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let on;class gE{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=on,!e&&on&&(this.index=(on.scopes||(on.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=on;try{return on=this,e()}finally{on=n}}}on(){on=this}off(){on=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function ru(t){return new gE(t)}function yE(){return on}function BR(t,e=!1){on&&on.cleanups.push(t)}let nt;const uh=new WeakSet;class vE{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,on&&on.active&&on.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,uh.has(this)&&(uh.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||TE(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,i_(this),wE(this);const e=nt,n=jn;nt=this,jn=!0;try{return this.fn()}finally{IE(this),nt=e,jn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Mf(e);this.deps=this.depsTail=void 0,i_(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?uh.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){nd(this)&&this.run()}get dirty(){return nd(this)}}let EE=0,na,sa;function TE(t,e=!1){if(t.flags|=8,e){t.next=sa,sa=t;return}t.next=na,na=t}function Lf(){EE++}function Df(){if(--EE>0)return;if(sa){let e=sa;for(sa=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;na;){let e=na;for(na=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function wE(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function IE(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Mf(s),jR(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function nd(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(bE(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function bE(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ta))return;t.globalVersion=Ta;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!nd(t)){t.flags&=-3;return}const n=nt,s=jn;nt=t,jn=!0;try{wE(t);const r=t.fn(t._value);(e.version===0||hr(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{nt=n,jn=s,IE(t),t.flags&=-3}}function Mf(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Mf(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function jR(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let jn=!0;const RE=[];function wr(){RE.push(jn),jn=!1}function Ir(){const t=RE.pop();jn=t===void 0?!0:t}function i_(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=nt;nt=void 0;try{e()}finally{nt=n}}}let Ta=0;class HR{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class xf{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!nt||!jn||nt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==nt)n=this.activeLink=new HR(nt,this),nt.deps?(n.prevDep=nt.depsTail,nt.depsTail.nextDep=n,nt.depsTail=n):nt.deps=nt.depsTail=n,CE(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=nt.depsTail,n.nextDep=void 0,nt.depsTail.nextDep=n,nt.depsTail=n,nt.deps===n&&(nt.deps=s)}return n}trigger(e){this.version++,Ta++,this.notify(e)}notify(e){Lf();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Df()}}}function CE(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)CE(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const uc=new WeakMap,Qr=Symbol(""),sd=Symbol(""),wa=Symbol("");function Gt(t,e,n){if(jn&&nt){let s=uc.get(t);s||uc.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new xf),r.map=s,r.key=n),r.track()}}function Ss(t,e,n,s,r,i){const o=uc.get(t);if(!o){Ta++;return}const a=l=>{l&&l.trigger()};if(Lf(),e==="clear")o.forEach(a);else{const l=pe(t),u=l&&Of(n);if(l&&n==="length"){const h=Number(s);o.forEach((d,p)=>{(p==="length"||p===wa||!us(p)&&p>=h)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(wa)),e){case"add":l?u&&a(o.get("length")):(a(o.get(Qr)),Ui(t)&&a(o.get(sd)));break;case"delete":l||(a(o.get(Qr)),Ui(t)&&a(o.get(sd)));break;case"set":Ui(t)&&a(o.get(Qr));break}}Df()}function WR(t,e){const n=uc.get(t);return n&&n.get(e)}function Ri(t){const e=Le(t);return e===t?e:(Gt(e,"iterate",wa),Nn(t)?e:e.map(zt))}function iu(t){return Gt(t=Le(t),"iterate",wa),t}const qR={__proto__:null,[Symbol.iterator](){return hh(this,Symbol.iterator,zt)},concat(...t){return Ri(this).concat(...t.map(e=>pe(e)?Ri(e):e))},entries(){return hh(this,"entries",t=>(t[1]=zt(t[1]),t))},every(t,e){return Ts(this,"every",t,e,void 0,arguments)},filter(t,e){return Ts(this,"filter",t,e,n=>n.map(zt),arguments)},find(t,e){return Ts(this,"find",t,e,zt,arguments)},findIndex(t,e){return Ts(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ts(this,"findLast",t,e,zt,arguments)},findLastIndex(t,e){return Ts(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ts(this,"forEach",t,e,void 0,arguments)},includes(...t){return dh(this,"includes",t)},indexOf(...t){return dh(this,"indexOf",t)},join(t){return Ri(this).join(t)},lastIndexOf(...t){return dh(this,"lastIndexOf",t)},map(t,e){return Ts(this,"map",t,e,void 0,arguments)},pop(){return Fo(this,"pop")},push(...t){return Fo(this,"push",t)},reduce(t,...e){return o_(this,"reduce",t,e)},reduceRight(t,...e){return o_(this,"reduceRight",t,e)},shift(){return Fo(this,"shift")},some(t,e){return Ts(this,"some",t,e,void 0,arguments)},splice(...t){return Fo(this,"splice",t)},toReversed(){return Ri(this).toReversed()},toSorted(t){return Ri(this).toSorted(t)},toSpliced(...t){return Ri(this).toSpliced(...t)},unshift(...t){return Fo(this,"unshift",t)},values(){return hh(this,"values",zt)}};function hh(t,e,n){const s=iu(t),r=s[e]();return s!==t&&!Nn(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const KR=Array.prototype;function Ts(t,e,n,s,r,i){const o=iu(t),a=o!==t&&!Nn(t),l=o[e];if(l!==KR[e]){const d=l.apply(t,i);return a?zt(d):d}let u=n;o!==t&&(a?u=function(d,p){return n.call(this,zt(d),p,t)}:n.length>2&&(u=function(d,p){return n.call(this,d,p,t)}));const h=l.call(o,u,s);return a&&r?r(h):h}function o_(t,e,n,s){const r=iu(t);let i=n;return r!==t&&(Nn(t)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,t)}):i=function(o,a,l){return n.call(this,o,zt(a),l,t)}),r[e](i,...s)}function dh(t,e,n){const s=Le(t);Gt(s,"iterate",wa);const r=s[e](...n);return(r===-1||r===!1)&&Uf(n[0])?(n[0]=Le(n[0]),s[e](...n)):r}function Fo(t,e,n=[]){wr(),Lf();const s=Le(t)[e].apply(t,n);return Df(),Ir(),s}const GR=Pf("__proto__,__v_isRef,__isVue"),SE=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(us));function zR(t){us(t)||(t=String(t));const e=Le(this);return Gt(e,"has",t),e.hasOwnProperty(t)}class AE{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?rC:OE:i?NE:kE).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=pe(e);if(!r){let l;if(o&&(l=qR[n]))return l;if(n==="hasOwnProperty")return zR}const a=Reflect.get(e,n,ht(e)?e:s);return(us(n)?SE.has(n):GR(n))||(r||Gt(e,"get",n),i)?a:ht(a)?o&&Of(n)?a:a.value:Je(a)?r?DE(a):ho(a):a}}class PE extends AE{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const l=ni(i);if(!Nn(s)&&!ni(s)&&(i=Le(i),s=Le(s)),!pe(e)&&ht(i)&&!ht(s))return l?!1:(i.value=s,!0)}const o=pe(e)&&Of(n)?Number(n)<e.length:Ge(e,n),a=Reflect.set(e,n,s,ht(e)?e:r);return e===Le(r)&&(o?hr(s,i)&&Ss(e,"set",n,s):Ss(e,"add",n,s)),a}deleteProperty(e,n){const s=Ge(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&Ss(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!us(n)||!SE.has(n))&&Gt(e,"has",n),s}ownKeys(e){return Gt(e,"iterate",pe(e)?"length":Qr),Reflect.ownKeys(e)}}class YR extends AE{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const QR=new PE,XR=new YR,JR=new PE(!0);const rd=t=>t,Pl=t=>Reflect.getPrototypeOf(t);function ZR(t,e,n){return function(...s){const r=this.__v_raw,i=Le(r),o=Ui(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=r[t](...s),h=n?rd:e?id:zt;return!e&&Gt(i,"iterate",l?sd:Qr),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:a?[h(d[0]),h(d[1])]:h(d),done:p}},[Symbol.iterator](){return this}}}}function kl(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function eC(t,e){const n={get(r){const i=this.__v_raw,o=Le(i),a=Le(r);t||(hr(r,a)&&Gt(o,"get",r),Gt(o,"get",a));const{has:l}=Pl(o),u=e?rd:t?id:zt;if(l.call(o,r))return u(i.get(r));if(l.call(o,a))return u(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&Gt(Le(r),"iterate",Qr),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=Le(i),a=Le(r);return t||(hr(r,a)&&Gt(o,"has",r),Gt(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,l=Le(a),u=e?rd:t?id:zt;return!t&&Gt(l,"iterate",Qr),a.forEach((h,d)=>r.call(i,u(h),u(d),o))}};return Ct(n,t?{add:kl("add"),set:kl("set"),delete:kl("delete"),clear:kl("clear")}:{add(r){!e&&!Nn(r)&&!ni(r)&&(r=Le(r));const i=Le(this);return Pl(i).has.call(i,r)||(i.add(r),Ss(i,"add",r,r)),this},set(r,i){!e&&!Nn(i)&&!ni(i)&&(i=Le(i));const o=Le(this),{has:a,get:l}=Pl(o);let u=a.call(o,r);u||(r=Le(r),u=a.call(o,r));const h=l.call(o,r);return o.set(r,i),u?hr(i,h)&&Ss(o,"set",r,i):Ss(o,"add",r,i),this},delete(r){const i=Le(this),{has:o,get:a}=Pl(i);let l=o.call(i,r);l||(r=Le(r),l=o.call(i,r)),a&&a.call(i,r);const u=i.delete(r);return l&&Ss(i,"delete",r,void 0),u},clear(){const r=Le(this),i=r.size!==0,o=r.clear();return i&&Ss(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=ZR(r,t,e)}),n}function Ff(t,e){const n=eC(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Ge(n,r)&&r in s?n:s,r,i)}const tC={get:Ff(!1,!1)},nC={get:Ff(!1,!0)},sC={get:Ff(!0,!1)};const kE=new WeakMap,NE=new WeakMap,OE=new WeakMap,rC=new WeakMap;function iC(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function oC(t){return t.__v_skip||!Object.isExtensible(t)?0:iC(kR(t))}function ho(t){return ni(t)?t:Vf(t,!1,QR,tC,kE)}function LE(t){return Vf(t,!1,JR,nC,NE)}function DE(t){return Vf(t,!0,XR,sC,OE)}function Vf(t,e,n,s,r){if(!Je(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=oC(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function xs(t){return ni(t)?xs(t.__v_raw):!!(t&&t.__v_isReactive)}function ni(t){return!!(t&&t.__v_isReadonly)}function Nn(t){return!!(t&&t.__v_isShallow)}function Uf(t){return t?!!t.__v_raw:!1}function Le(t){const e=t&&t.__v_raw;return e?Le(e):t}function $f(t){return!Ge(t,"__v_skip")&&Object.isExtensible(t)&&dE(t,"__v_skip",!0),t}const zt=t=>Je(t)?ho(t):t,id=t=>Je(t)?DE(t):t;function ht(t){return t?t.__v_isRef===!0:!1}function Ie(t){return xE(t,!1)}function ME(t){return xE(t,!0)}function xE(t,e){return ht(t)?t:new aC(t,e)}class aC{constructor(e,n){this.dep=new xf,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Le(e),this._value=n?e:zt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Nn(e)||ni(e);e=s?e:Le(e),hr(e,n)&&(this._rawValue=e,this._value=s?e:zt(e),this.dep.trigger())}}function de(t){return ht(t)?t.value:t}const lC={get:(t,e,n)=>e==="__v_raw"?t:de(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return ht(r)&&!ht(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function FE(t){return xs(t)?t:new Proxy(t,lC)}function cC(t){const e=pe(t)?new Array(t.length):{};for(const n in t)e[n]=VE(t,n);return e}class uC{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return WR(Le(this._object),this._key)}}class hC{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function dC(t,e,n){return ht(t)?t:ye(t)?new hC(t):Je(t)&&arguments.length>1?VE(t,e,n):Ie(t)}function VE(t,e,n){const s=t[e];return ht(s)?s:new uC(t,e,n)}class fC{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new xf(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ta-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&nt!==this)return TE(this,!0),!0}get value(){const e=this.dep.track();return bE(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function pC(t,e,n=!1){let s,r;return ye(t)?s=t:(s=t.get,r=t.set),new fC(s,r,n)}const Nl={},hc=new WeakMap;let $r;function mC(t,e=!1,n=$r){if(n){let s=hc.get(n);s||hc.set(n,s=[]),s.push(t)}}function _C(t,e,n=tt){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:l}=n,u=O=>r?O:Nn(O)||r===!1||r===0?As(O,1):As(O);let h,d,p,_,T=!1,A=!1;if(ht(t)?(d=()=>t.value,T=Nn(t)):xs(t)?(d=()=>u(t),T=!0):pe(t)?(A=!0,T=t.some(O=>xs(O)||Nn(O)),d=()=>t.map(O=>{if(ht(O))return O.value;if(xs(O))return u(O);if(ye(O))return l?l(O,2):O()})):ye(t)?e?d=l?()=>l(t,2):t:d=()=>{if(p){wr();try{p()}finally{Ir()}}const O=$r;$r=h;try{return l?l(t,3,[_]):t(_)}finally{$r=O}}:d=Bn,e&&r){const O=d,V=r===!0?1/0:r;d=()=>As(O(),V)}const I=yE(),b=()=>{h.stop(),I&&I.active&&Nf(I.effects,h)};if(i&&e){const O=e;e=(...V)=>{O(...V),b()}}let L=A?new Array(t.length).fill(Nl):Nl;const M=O=>{if(!(!(h.flags&1)||!h.dirty&&!O))if(e){const V=h.run();if(r||T||(A?V.some(($,y)=>hr($,L[y])):hr(V,L))){p&&p();const $=$r;$r=h;try{const y=[V,L===Nl?void 0:A&&L[0]===Nl?[]:L,_];l?l(e,3,y):e(...y),L=V}finally{$r=$}}}else h.run()};return a&&a(M),h=new vE(d),h.scheduler=o?()=>o(M,!1):M,_=O=>mC(O,!1,h),p=h.onStop=()=>{const O=hc.get(h);if(O){if(l)l(O,4);else for(const V of O)V();hc.delete(h)}},e?s?M(!0):L=h.run():o?o(M.bind(null,!0),!0):h.run(),b.pause=h.pause.bind(h),b.resume=h.resume.bind(h),b.stop=b,b}function As(t,e=1/0,n){if(e<=0||!Je(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ht(t))As(t.value,e,n);else if(pe(t))for(let s=0;s<t.length;s++)As(t[s],e,n);else if(Zc(t)||Ui(t))t.forEach(s=>{As(s,e,n)});else if(hE(t)){for(const s in t)As(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&As(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function za(t,e,n,s){try{return s?t(...s):t()}catch(r){ou(r,e,n)}}function Wn(t,e,n,s){if(ye(t)){const r=za(t,e,n,s);return r&&cE(r)&&r.catch(i=>{ou(i,e,n)}),r}if(pe(t)){const r=[];for(let i=0;i<t.length;i++)r.push(Wn(t[i],e,n,s));return r}}function ou(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||tt;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const h=a.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](t,l,u)===!1)return}a=a.parent}if(i){wr(),za(i,null,10,[t,l,u]),Ir();return}}gC(t,n,r,s,o)}function gC(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const an=[];let es=-1;const $i=[];let tr=null,Ai=0;const UE=Promise.resolve();let dc=null;function au(t){const e=dc||UE;return t?e.then(this?t.bind(this):t):e}function yC(t){let e=es+1,n=an.length;for(;e<n;){const s=e+n>>>1,r=an[s],i=Ia(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function Bf(t){if(!(t.flags&1)){const e=Ia(t),n=an[an.length-1];!n||!(t.flags&2)&&e>=Ia(n)?an.push(t):an.splice(yC(e),0,t),t.flags|=1,$E()}}function $E(){dc||(dc=UE.then(HE))}function BE(t){pe(t)?$i.push(...t):tr&&t.id===-1?tr.splice(Ai+1,0,t):t.flags&1||($i.push(t),t.flags|=1),$E()}function a_(t,e,n=es+1){for(;n<an.length;n++){const s=an[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;an.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function jE(t){if($i.length){const e=[...new Set($i)].sort((n,s)=>Ia(n)-Ia(s));if($i.length=0,tr){tr.push(...e);return}for(tr=e,Ai=0;Ai<tr.length;Ai++){const n=tr[Ai];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}tr=null,Ai=0}}const Ia=t=>t.id==null?t.flags&2?-1:1/0:t.id;function HE(t){try{for(es=0;es<an.length;es++){const e=an[es];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),za(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;es<an.length;es++){const e=an[es];e&&(e.flags&=-2)}es=-1,an.length=0,jE(),dc=null,(an.length||$i.length)&&HE()}}let cn=null,WE=null;function fc(t){const e=cn;return cn=t,WE=t&&t.type.__scopeId||null,e}function wn(t,e=cn,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&g_(-1);const i=fc(e);let o;try{o=t(...r)}finally{fc(i),s._d&&g_(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function hn(t,e){if(cn===null)return t;const n=hu(cn),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,l=tt]=e[r];i&&(ye(i)&&(i={mounted:i,updated:i}),i.deep&&As(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Mr(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(wr(),Wn(l,n,8,[t.el,a,t,e]),Ir())}}const vC=Symbol("_vte"),qE=t=>t.__isTeleport,nr=Symbol("_leaveCb"),Ol=Symbol("_enterCb");function EC(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return _s(()=>{t.isMounted=!0}),tT(()=>{t.isUnmounting=!0}),t}const An=[Function,Array],KE={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:An,onEnter:An,onAfterEnter:An,onEnterCancelled:An,onBeforeLeave:An,onLeave:An,onAfterLeave:An,onLeaveCancelled:An,onBeforeAppear:An,onAppear:An,onAfterAppear:An,onAppearCancelled:An},GE=t=>{const e=t.subTree;return e.component?GE(e.component):e},TC={name:"BaseTransition",props:KE,setup(t,{slots:e}){const n=gr(),s=EC();return()=>{const r=e.default&&QE(e.default(),!0);if(!r||!r.length)return;const i=zE(r),o=Le(t),{mode:a}=o;if(s.isLeaving)return fh(i);const l=l_(i);if(!l)return fh(i);let u=od(l,o,s,n,d=>u=d);l.type!==fn&&ba(l,u);let h=n.subTree&&l_(n.subTree);if(h&&h.type!==fn&&!Hr(l,h)&&GE(n).type!==fn){let d=od(h,o,s,n);if(ba(h,d),a==="out-in"&&l.type!==fn)return s.isLeaving=!0,d.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,h=void 0},fh(i);a==="in-out"&&l.type!==fn?d.delayLeave=(p,_,T)=>{const A=YE(s,h);A[String(h.key)]=h,p[nr]=()=>{_(),p[nr]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{T(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return i}}};function zE(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==fn){e=n;break}}return e}const wC=TC;function YE(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function od(t,e,n,s,r){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:p,onLeave:_,onAfterLeave:T,onLeaveCancelled:A,onBeforeAppear:I,onAppear:b,onAfterAppear:L,onAppearCancelled:M}=e,O=String(t.key),V=YE(n,t),$=(v,P)=>{v&&Wn(v,s,9,P)},y=(v,P)=>{const D=P[1];$(v,P),pe(v)?v.every(k=>k.length<=1)&&D():v.length<=1&&D()},g={mode:o,persisted:a,beforeEnter(v){let P=l;if(!n.isMounted)if(i)P=I||l;else return;v[nr]&&v[nr](!0);const D=V[O];D&&Hr(t,D)&&D.el[nr]&&D.el[nr](),$(P,[v])},enter(v){let P=u,D=h,k=d;if(!n.isMounted)if(i)P=b||u,D=L||h,k=M||d;else return;let S=!1;const we=v[Ol]=Ze=>{S||(S=!0,Ze?$(k,[v]):$(D,[v]),g.delayedLeave&&g.delayedLeave(),v[Ol]=void 0)};P?y(P,[v,we]):we()},leave(v,P){const D=String(t.key);if(v[Ol]&&v[Ol](!0),n.isUnmounting)return P();$(p,[v]);let k=!1;const S=v[nr]=we=>{k||(k=!0,P(),we?$(A,[v]):$(T,[v]),v[nr]=void 0,V[D]===t&&delete V[D])};V[D]=t,_?y(_,[v,S]):S()},clone(v){const P=od(v,e,n,s,r);return r&&r(P),P}};return g}function fh(t){if(lu(t))return t=_r(t),t.children=null,t}function l_(t){if(!lu(t))return qE(t.type)&&t.children?zE(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ye(n.default))return n.default()}}function ba(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ba(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function QE(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===ut?(o.patchFlag&128&&r++,s=s.concat(QE(o.children,e,a))):(e||o.type!==fn)&&s.push(a!=null?_r(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function vn(t,e){return ye(t)?Ct({name:t.name},e,{setup:t}):t}function XE(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function pc(t,e,n,s,r=!1){if(pe(t)){t.forEach((T,A)=>pc(T,e&&(pe(e)?e[A]:e),n,s,r));return}if(ra(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&pc(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?hu(s.component):s.el,o=r?null:i,{i:a,r:l}=t,u=e&&e.r,h=a.refs===tt?a.refs={}:a.refs,d=a.setupState,p=Le(d),_=d===tt?()=>!1:T=>Ge(p,T);if(u!=null&&u!==l&&(wt(u)?(h[u]=null,_(u)&&(d[u]=null)):ht(u)&&(u.value=null)),ye(l))za(l,a,12,[o,h]);else{const T=wt(l),A=ht(l);if(T||A){const I=()=>{if(t.f){const b=T?_(l)?d[l]:h[l]:l.value;r?pe(b)&&Nf(b,i):pe(b)?b.includes(i)||b.push(i):T?(h[l]=[i],_(l)&&(d[l]=h[l])):(l.value=[i],t.k&&(h[t.k]=l.value))}else T?(h[l]=o,_(l)&&(d[l]=o)):A&&(l.value=o,t.k&&(h[t.k]=o))};o?(I.id=-1,Tn(I,n)):I()}}}nu().requestIdleCallback;nu().cancelIdleCallback;const ra=t=>!!t.type.__asyncLoader,lu=t=>t.type.__isKeepAlive;function IC(t,e){JE(t,"a",e)}function bC(t,e){JE(t,"da",e)}function JE(t,e,n=Mt){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(cu(e,s,n),n){let r=n.parent;for(;r&&r.parent;)lu(r.parent.vnode)&&RC(s,e,n,r),r=r.parent}}function RC(t,e,n,s){const r=cu(e,t,s,!0);pi(()=>{Nf(s[e],r)},n)}function cu(t,e,n=Mt,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{wr();const a=Qa(n),l=Wn(e,n,t,o);return a(),Ir(),l});return s?r.unshift(i):r.push(i),i}}const Hs=t=>(e,n=Mt)=>{(!Ca||t==="sp")&&cu(t,(...s)=>e(...s),n)},ZE=Hs("bm"),_s=Hs("m"),eT=Hs("bu"),CC=Hs("u"),tT=Hs("bum"),pi=Hs("um"),SC=Hs("sp"),AC=Hs("rtg"),PC=Hs("rtc");function kC(t,e=Mt){cu("ec",t,e)}const NC="components";function ad(t,e){return LC(NC,t,!0,e)||t}const OC=Symbol.for("v-ndc");function LC(t,e,n=!0,s=!1){const r=cn||Mt;if(r){const i=r.type;{const a=TS(i,!1);if(a&&(a===e||a===On(e)||a===tu(On(e))))return i}const o=c_(r[t]||i[t],e)||c_(r.appContext[t],e);return!o&&s?i:o}}function c_(t,e){return t&&(t[e]||t[On(e)]||t[tu(On(e))])}function ns(t,e,n,s){let r;const i=n,o=pe(t);if(o||wt(t)){const a=o&&xs(t);let l=!1;a&&(l=!Nn(t),t=iu(t)),r=new Array(t.length);for(let u=0,h=t.length;u<h;u++)r[u]=e(l?zt(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,i)}else if(Je(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,i));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const h=a[l];r[l]=e(t[h],h,l,i)}}else r=[];return r}const ld=t=>t?TT(t)?hu(t):ld(t.parent):null,ia=Ct(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ld(t.parent),$root:t=>ld(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>jf(t),$forceUpdate:t=>t.f||(t.f=()=>{Bf(t.update)}),$nextTick:t=>t.n||(t.n=au.bind(t.proxy)),$watch:t=>tS.bind(t)}),ph=(t,e)=>t!==tt&&!t.__isScriptSetup&&Ge(t,e),DC={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(ph(s,e))return o[e]=1,s[e];if(r!==tt&&Ge(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&Ge(u,e))return o[e]=3,i[e];if(n!==tt&&Ge(n,e))return o[e]=4,n[e];cd&&(o[e]=0)}}const h=ia[e];let d,p;if(h)return e==="$attrs"&&Gt(t.attrs,"get",""),h(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==tt&&Ge(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,Ge(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return ph(r,e)?(r[e]=n,!0):s!==tt&&Ge(s,e)?(s[e]=n,!0):Ge(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==tt&&Ge(t,o)||ph(e,o)||(a=i[0])&&Ge(a,o)||Ge(s,o)||Ge(ia,o)||Ge(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ge(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function u_(t){return pe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let cd=!0;function MC(t){const e=jf(t),n=t.proxy,s=t.ctx;cd=!1,e.beforeCreate&&h_(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:u,created:h,beforeMount:d,mounted:p,beforeUpdate:_,updated:T,activated:A,deactivated:I,beforeDestroy:b,beforeUnmount:L,destroyed:M,unmounted:O,render:V,renderTracked:$,renderTriggered:y,errorCaptured:g,serverPrefetch:v,expose:P,inheritAttrs:D,components:k,directives:S,filters:we}=e;if(u&&xC(u,s,null),o)for(const fe in o){const Ee=o[fe];ye(Ee)&&(s[fe]=Ee.bind(n))}if(r){const fe=r.call(n,n);Je(fe)&&(t.data=ho(fe))}if(cd=!0,i)for(const fe in i){const Ee=i[fe],st=ye(Ee)?Ee.bind(n,n):ye(Ee.get)?Ee.get.bind(n,n):Bn,kt=!ye(Ee)&&ye(Ee.set)?Ee.set.bind(n):Bn,St=ft({get:st,set:kt});Object.defineProperty(s,fe,{enumerable:!0,configurable:!0,get:()=>St.value,set:We=>St.value=We})}if(a)for(const fe in a)nT(a[fe],s,n,fe);if(l){const fe=ye(l)?l.call(n):l;Reflect.ownKeys(fe).forEach(Ee=>{zl(Ee,fe[Ee])})}h&&h_(h,t,"c");function ke(fe,Ee){pe(Ee)?Ee.forEach(st=>fe(st.bind(n))):Ee&&fe(Ee.bind(n))}if(ke(ZE,d),ke(_s,p),ke(eT,_),ke(CC,T),ke(IC,A),ke(bC,I),ke(kC,g),ke(PC,$),ke(AC,y),ke(tT,L),ke(pi,O),ke(SC,v),pe(P))if(P.length){const fe=t.exposed||(t.exposed={});P.forEach(Ee=>{Object.defineProperty(fe,Ee,{get:()=>n[Ee],set:st=>n[Ee]=st})})}else t.exposed||(t.exposed={});V&&t.render===Bn&&(t.render=V),D!=null&&(t.inheritAttrs=D),k&&(t.components=k),S&&(t.directives=S),v&&XE(t)}function xC(t,e,n=Bn){pe(t)&&(t=ud(t));for(const s in t){const r=t[s];let i;Je(r)?"default"in r?i=mn(r.from||s,r.default,!0):i=mn(r.from||s):i=mn(r),ht(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function h_(t,e,n){Wn(pe(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function nT(t,e,n,s){let r=s.includes(".")?_T(n,s):()=>n[s];if(wt(t)){const i=e[t];ye(i)&&os(r,i)}else if(ye(t))os(r,t.bind(n));else if(Je(t))if(pe(t))t.forEach(i=>nT(i,e,n,s));else{const i=ye(t.handler)?t.handler.bind(n):e[t.handler];ye(i)&&os(r,i,t)}}function jf(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!r.length&&!n&&!s?l=e:(l={},r.length&&r.forEach(u=>mc(l,u,o,!0)),mc(l,e,o)),Je(e)&&i.set(e,l),l}function mc(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&mc(t,i,n,!0),r&&r.forEach(o=>mc(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=FC[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const FC={data:d_,props:f_,emits:f_,methods:zo,computed:zo,beforeCreate:sn,created:sn,beforeMount:sn,mounted:sn,beforeUpdate:sn,updated:sn,beforeDestroy:sn,beforeUnmount:sn,destroyed:sn,unmounted:sn,activated:sn,deactivated:sn,errorCaptured:sn,serverPrefetch:sn,components:zo,directives:zo,watch:UC,provide:d_,inject:VC};function d_(t,e){return e?t?function(){return Ct(ye(t)?t.call(this,this):t,ye(e)?e.call(this,this):e)}:e:t}function VC(t,e){return zo(ud(t),ud(e))}function ud(t){if(pe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function sn(t,e){return t?[...new Set([].concat(t,e))]:e}function zo(t,e){return t?Ct(Object.create(null),t,e):e}function f_(t,e){return t?pe(t)&&pe(e)?[...new Set([...t,...e])]:Ct(Object.create(null),u_(t),u_(e??{})):e}function UC(t,e){if(!t)return e;if(!e)return t;const n=Ct(Object.create(null),t);for(const s in e)n[s]=sn(t[s],e[s]);return n}function sT(){return{app:null,config:{isNativeTag:AR,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $C=0;function BC(t,e){return function(s,r=null){ye(s)||(s=Ct({},s)),r!=null&&!Je(r)&&(r=null);const i=sT(),o=new WeakSet,a=[];let l=!1;const u=i.app={_uid:$C++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:IS,get config(){return i.config},set config(h){},use(h,...d){return o.has(h)||(h&&ye(h.install)?(o.add(h),h.install(u,...d)):ye(h)&&(o.add(h),h(u,...d))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,d){return d?(i.components[h]=d,u):i.components[h]},directive(h,d){return d?(i.directives[h]=d,u):i.directives[h]},mount(h,d,p){if(!l){const _=u._ceVNode||ce(s,r);return _.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),d&&e?e(_,h):t(_,h,p),l=!0,u._container=h,h.__vue_app__=u,hu(_.component)}},onUnmount(h){a.push(h)},unmount(){l&&(Wn(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,d){return i.provides[h]=d,u},runWithContext(h){const d=Xr;Xr=u;try{return h()}finally{Xr=d}}};return u}}let Xr=null;function zl(t,e){if(Mt){let n=Mt.provides;const s=Mt.parent&&Mt.parent.provides;s===n&&(n=Mt.provides=Object.create(s)),n[t]=e}}function mn(t,e,n=!1){const s=Mt||cn;if(s||Xr){const r=Xr?Xr._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ye(e)?e.call(s&&s.proxy):e}}function jC(){return!!(Mt||cn||Xr)}const rT={},iT=()=>Object.create(rT),oT=t=>Object.getPrototypeOf(t)===rT;function HC(t,e,n,s=!1){const r={},i=iT();t.propsDefaults=Object.create(null),aT(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:LE(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function WC(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=Le(r),[l]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let d=0;d<h.length;d++){let p=h[d];if(uu(t.emitsOptions,p))continue;const _=e[p];if(l)if(Ge(i,p))_!==i[p]&&(i[p]=_,u=!0);else{const T=On(p);r[T]=hd(l,a,T,_,t,!1)}else _!==i[p]&&(i[p]=_,u=!0)}}}else{aT(t,e,r,i)&&(u=!0);let h;for(const d in a)(!e||!Ge(e,d)&&((h=fi(d))===d||!Ge(e,h)))&&(l?n&&(n[d]!==void 0||n[h]!==void 0)&&(r[d]=hd(l,a,d,void 0,t,!0)):delete r[d]);if(i!==a)for(const d in i)(!e||!Ge(e,d))&&(delete i[d],u=!0)}u&&Ss(t.attrs,"set","")}function aT(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ta(l))continue;const u=e[l];let h;r&&Ge(r,h=On(l))?!i||!i.includes(h)?n[h]=u:(a||(a={}))[h]=u:uu(t.emitsOptions,l)||(!(l in s)||u!==s[l])&&(s[l]=u,o=!0)}if(i){const l=Le(n),u=a||tt;for(let h=0;h<i.length;h++){const d=i[h];n[d]=hd(r,l,d,u[d],t,!Ge(u,d))}}return o}function hd(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=Ge(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ye(l)){const{propsDefaults:u}=r;if(n in u)s=u[n];else{const h=Qa(r);s=u[n]=l.call(null,e),h()}}else s=l;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===fi(n))&&(s=!0))}return s}const qC=new WeakMap;function lT(t,e,n=!1){const s=n?qC:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let l=!1;if(!ye(t)){const h=d=>{l=!0;const[p,_]=lT(d,e,!0);Ct(o,p),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!l)return Je(t)&&s.set(t,Vi),Vi;if(pe(i))for(let h=0;h<i.length;h++){const d=On(i[h]);p_(d)&&(o[d]=tt)}else if(i)for(const h in i){const d=On(h);if(p_(d)){const p=i[h],_=o[d]=pe(p)||ye(p)?{type:p}:Ct({},p),T=_.type;let A=!1,I=!0;if(pe(T))for(let b=0;b<T.length;++b){const L=T[b],M=ye(L)&&L.name;if(M==="Boolean"){A=!0;break}else M==="String"&&(I=!1)}else A=ye(T)&&T.name==="Boolean";_[0]=A,_[1]=I,(A||Ge(_,"default"))&&a.push(d)}}const u=[o,a];return Je(t)&&s.set(t,u),u}function p_(t){return t[0]!=="$"&&!ta(t)}const cT=t=>t[0]==="_"||t==="$stable",Hf=t=>pe(t)?t.map(ts):[ts(t)],KC=(t,e,n)=>{if(e._n)return e;const s=wn((...r)=>Hf(e(...r)),n);return s._c=!1,s},uT=(t,e,n)=>{const s=t._ctx;for(const r in t){if(cT(r))continue;const i=t[r];if(ye(i))e[r]=KC(r,i,s);else if(i!=null){const o=Hf(i);e[r]=()=>o}}},hT=(t,e)=>{const n=Hf(e);t.slots.default=()=>n},dT=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},GC=(t,e,n)=>{const s=t.slots=iT();if(t.vnode.shapeFlag&32){const r=e._;r?(dT(s,e,n),n&&dE(s,"_",r,!0)):uT(e,s)}else e&&hT(t,e)},zC=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=tt;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:dT(r,e,n):(i=!e.$stable,uT(e,r)),o=e}else e&&(hT(t,e),o={default:1});if(i)for(const a in r)!cT(a)&&o[a]==null&&delete r[a]},Tn=lS;function YC(t){return QC(t)}function QC(t,e){const n=nu();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:h,parentNode:d,nextSibling:p,setScopeId:_=Bn,insertStaticContent:T}=t,A=(R,N,B,Q=null,z=null,w=null,C=void 0,F=null,W=!!N.dynamicChildren)=>{if(R===N)return;R&&!Hr(R,N)&&(Q=G(R),We(R,z,w,!0),R=null),N.patchFlag===-2&&(W=!1,N.dynamicChildren=null);const{type:Y,ref:Z,shapeFlag:x}=N;switch(Y){case Ya:I(R,N,B,Q);break;case fn:b(R,N,B,Q);break;case oa:R==null&&L(N,B,Q,C);break;case ut:k(R,N,B,Q,z,w,C,F,W);break;default:x&1?V(R,N,B,Q,z,w,C,F,W):x&6?S(R,N,B,Q,z,w,C,F,W):(x&64||x&128)&&Y.process(R,N,B,Q,z,w,C,F,W,oe)}Z!=null&&z&&pc(Z,R&&R.ref,w,N||R,!N)},I=(R,N,B,Q)=>{if(R==null)s(N.el=a(N.children),B,Q);else{const z=N.el=R.el;N.children!==R.children&&u(z,N.children)}},b=(R,N,B,Q)=>{R==null?s(N.el=l(N.children||""),B,Q):N.el=R.el},L=(R,N,B,Q)=>{[R.el,R.anchor]=T(R.children,N,B,Q,R.el,R.anchor)},M=({el:R,anchor:N},B,Q)=>{let z;for(;R&&R!==N;)z=p(R),s(R,B,Q),R=z;s(N,B,Q)},O=({el:R,anchor:N})=>{let B;for(;R&&R!==N;)B=p(R),r(R),R=B;r(N)},V=(R,N,B,Q,z,w,C,F,W)=>{N.type==="svg"?C="svg":N.type==="math"&&(C="mathml"),R==null?$(N,B,Q,z,w,C,F,W):v(R,N,z,w,C,F,W)},$=(R,N,B,Q,z,w,C,F)=>{let W,Y;const{props:Z,shapeFlag:x,transition:j,dirs:ee}=R;if(W=R.el=o(R.type,w,Z&&Z.is,Z),x&8?h(W,R.children):x&16&&g(R.children,W,null,Q,z,mh(R,w),C,F),ee&&Mr(R,null,Q,"created"),y(W,R,R.scopeId,C,Q),Z){for(const Re in Z)Re!=="value"&&!ta(Re)&&i(W,Re,null,Z[Re],w,Q);"value"in Z&&i(W,"value",null,Z.value,w),(Y=Z.onVnodeBeforeMount)&&Xn(Y,Q,R)}ee&&Mr(R,null,Q,"beforeMount");const ie=XC(z,j);ie&&j.beforeEnter(W),s(W,N,B),((Y=Z&&Z.onVnodeMounted)||ie||ee)&&Tn(()=>{Y&&Xn(Y,Q,R),ie&&j.enter(W),ee&&Mr(R,null,Q,"mounted")},z)},y=(R,N,B,Q,z)=>{if(B&&_(R,B),Q)for(let w=0;w<Q.length;w++)_(R,Q[w]);if(z){let w=z.subTree;if(N===w||yT(w.type)&&(w.ssContent===N||w.ssFallback===N)){const C=z.vnode;y(R,C,C.scopeId,C.slotScopeIds,z.parent)}}},g=(R,N,B,Q,z,w,C,F,W=0)=>{for(let Y=W;Y<R.length;Y++){const Z=R[Y]=F?sr(R[Y]):ts(R[Y]);A(null,Z,N,B,Q,z,w,C,F)}},v=(R,N,B,Q,z,w,C)=>{const F=N.el=R.el;let{patchFlag:W,dynamicChildren:Y,dirs:Z}=N;W|=R.patchFlag&16;const x=R.props||tt,j=N.props||tt;let ee;if(B&&xr(B,!1),(ee=j.onVnodeBeforeUpdate)&&Xn(ee,B,N,R),Z&&Mr(N,R,B,"beforeUpdate"),B&&xr(B,!0),(x.innerHTML&&j.innerHTML==null||x.textContent&&j.textContent==null)&&h(F,""),Y?P(R.dynamicChildren,Y,F,B,Q,mh(N,z),w):C||Ee(R,N,F,null,B,Q,mh(N,z),w,!1),W>0){if(W&16)D(F,x,j,B,z);else if(W&2&&x.class!==j.class&&i(F,"class",null,j.class,z),W&4&&i(F,"style",x.style,j.style,z),W&8){const ie=N.dynamicProps;for(let Re=0;Re<ie.length;Re++){const Ae=ie[Re],dt=x[Ae],bt=j[Ae];(bt!==dt||Ae==="value")&&i(F,Ae,dt,bt,z,B)}}W&1&&R.children!==N.children&&h(F,N.children)}else!C&&Y==null&&D(F,x,j,B,z);((ee=j.onVnodeUpdated)||Z)&&Tn(()=>{ee&&Xn(ee,B,N,R),Z&&Mr(N,R,B,"updated")},Q)},P=(R,N,B,Q,z,w,C)=>{for(let F=0;F<N.length;F++){const W=R[F],Y=N[F],Z=W.el&&(W.type===ut||!Hr(W,Y)||W.shapeFlag&70)?d(W.el):B;A(W,Y,Z,null,Q,z,w,C,!0)}},D=(R,N,B,Q,z)=>{if(N!==B){if(N!==tt)for(const w in N)!ta(w)&&!(w in B)&&i(R,w,N[w],null,z,Q);for(const w in B){if(ta(w))continue;const C=B[w],F=N[w];C!==F&&w!=="value"&&i(R,w,F,C,z,Q)}"value"in B&&i(R,"value",N.value,B.value,z)}},k=(R,N,B,Q,z,w,C,F,W)=>{const Y=N.el=R?R.el:a(""),Z=N.anchor=R?R.anchor:a("");let{patchFlag:x,dynamicChildren:j,slotScopeIds:ee}=N;ee&&(F=F?F.concat(ee):ee),R==null?(s(Y,B,Q),s(Z,B,Q),g(N.children||[],B,Z,z,w,C,F,W)):x>0&&x&64&&j&&R.dynamicChildren?(P(R.dynamicChildren,j,B,z,w,C,F),(N.key!=null||z&&N===z.subTree)&&fT(R,N,!0)):Ee(R,N,B,Z,z,w,C,F,W)},S=(R,N,B,Q,z,w,C,F,W)=>{N.slotScopeIds=F,R==null?N.shapeFlag&512?z.ctx.activate(N,B,Q,C,W):we(N,B,Q,z,w,C,W):Ze(R,N,W)},we=(R,N,B,Q,z,w,C)=>{const F=R.component=_S(R,Q,z);if(lu(R)&&(F.ctx.renderer=oe),gS(F,!1,C),F.asyncDep){if(z&&z.registerDep(F,ke,C),!R.el){const W=F.subTree=ce(fn);b(null,W,N,B)}}else ke(F,R,N,B,z,w,C)},Ze=(R,N,B)=>{const Q=N.component=R.component;if(oS(R,N,B))if(Q.asyncDep&&!Q.asyncResolved){fe(Q,N,B);return}else Q.next=N,Q.update();else N.el=R.el,Q.vnode=N},ke=(R,N,B,Q,z,w,C)=>{const F=()=>{if(R.isMounted){let{next:x,bu:j,u:ee,parent:ie,vnode:Re}=R;{const jt=pT(R);if(jt){x&&(x.el=Re.el,fe(R,x,C)),jt.asyncDep.then(()=>{R.isUnmounted||F()});return}}let Ae=x,dt;xr(R,!1),x?(x.el=Re.el,fe(R,x,C)):x=Re,j&&Gl(j),(dt=x.props&&x.props.onVnodeBeforeUpdate)&&Xn(dt,ie,x,Re),xr(R,!0);const bt=_h(R),Nt=R.subTree;R.subTree=bt,A(Nt,bt,d(Nt.el),G(Nt),R,z,w),x.el=bt.el,Ae===null&&aS(R,bt.el),ee&&Tn(ee,z),(dt=x.props&&x.props.onVnodeUpdated)&&Tn(()=>Xn(dt,ie,x,Re),z)}else{let x;const{el:j,props:ee}=N,{bm:ie,m:Re,parent:Ae,root:dt,type:bt}=R,Nt=ra(N);if(xr(R,!1),ie&&Gl(ie),!Nt&&(x=ee&&ee.onVnodeBeforeMount)&&Xn(x,Ae,N),xr(R,!0),j&&Be){const jt=()=>{R.subTree=_h(R),Be(j,R.subTree,R,z,null)};Nt&&bt.__asyncHydrate?bt.__asyncHydrate(j,R,jt):jt()}else{dt.ce&&dt.ce._injectChildStyle(bt);const jt=R.subTree=_h(R);A(null,jt,B,Q,R,z,w),N.el=jt.el}if(Re&&Tn(Re,z),!Nt&&(x=ee&&ee.onVnodeMounted)){const jt=N;Tn(()=>Xn(x,Ae,jt),z)}(N.shapeFlag&256||Ae&&ra(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&R.a&&Tn(R.a,z),R.isMounted=!0,N=B=Q=null}};R.scope.on();const W=R.effect=new vE(F);R.scope.off();const Y=R.update=W.run.bind(W),Z=R.job=W.runIfDirty.bind(W);Z.i=R,Z.id=R.uid,W.scheduler=()=>Bf(Z),xr(R,!0),Y()},fe=(R,N,B)=>{N.component=R;const Q=R.vnode.props;R.vnode=N,R.next=null,WC(R,N.props,Q,B),zC(R,N.children,B),wr(),a_(R),Ir()},Ee=(R,N,B,Q,z,w,C,F,W=!1)=>{const Y=R&&R.children,Z=R?R.shapeFlag:0,x=N.children,{patchFlag:j,shapeFlag:ee}=N;if(j>0){if(j&128){kt(Y,x,B,Q,z,w,C,F,W);return}else if(j&256){st(Y,x,B,Q,z,w,C,F,W);return}}ee&8?(Z&16&&It(Y,z,w),x!==Y&&h(B,x)):Z&16?ee&16?kt(Y,x,B,Q,z,w,C,F,W):It(Y,z,w,!0):(Z&8&&h(B,""),ee&16&&g(x,B,Q,z,w,C,F,W))},st=(R,N,B,Q,z,w,C,F,W)=>{R=R||Vi,N=N||Vi;const Y=R.length,Z=N.length,x=Math.min(Y,Z);let j;for(j=0;j<x;j++){const ee=N[j]=W?sr(N[j]):ts(N[j]);A(R[j],ee,B,null,z,w,C,F,W)}Y>Z?It(R,z,w,!0,!1,x):g(N,B,Q,z,w,C,F,W,x)},kt=(R,N,B,Q,z,w,C,F,W)=>{let Y=0;const Z=N.length;let x=R.length-1,j=Z-1;for(;Y<=x&&Y<=j;){const ee=R[Y],ie=N[Y]=W?sr(N[Y]):ts(N[Y]);if(Hr(ee,ie))A(ee,ie,B,null,z,w,C,F,W);else break;Y++}for(;Y<=x&&Y<=j;){const ee=R[x],ie=N[j]=W?sr(N[j]):ts(N[j]);if(Hr(ee,ie))A(ee,ie,B,null,z,w,C,F,W);else break;x--,j--}if(Y>x){if(Y<=j){const ee=j+1,ie=ee<Z?N[ee].el:Q;for(;Y<=j;)A(null,N[Y]=W?sr(N[Y]):ts(N[Y]),B,ie,z,w,C,F,W),Y++}}else if(Y>j)for(;Y<=x;)We(R[Y],z,w,!0),Y++;else{const ee=Y,ie=Y,Re=new Map;for(Y=ie;Y<=j;Y++){const tn=N[Y]=W?sr(N[Y]):ts(N[Y]);tn.key!=null&&Re.set(tn.key,Y)}let Ae,dt=0;const bt=j-ie+1;let Nt=!1,jt=0;const qs=new Array(bt);for(Y=0;Y<bt;Y++)qs[Y]=0;for(Y=ee;Y<=x;Y++){const tn=R[Y];if(dt>=bt){We(tn,z,w,!0);continue}let Sn;if(tn.key!=null)Sn=Re.get(tn.key);else for(Ae=ie;Ae<=j;Ae++)if(qs[Ae-ie]===0&&Hr(tn,N[Ae])){Sn=Ae;break}Sn===void 0?We(tn,z,w,!0):(qs[Sn-ie]=Y+1,Sn>=jt?jt=Sn:Nt=!0,A(tn,N[Sn],B,null,z,w,C,F,W),dt++)}const vi=Nt?JC(qs):Vi;for(Ae=vi.length-1,Y=bt-1;Y>=0;Y--){const tn=ie+Y,Sn=N[tn],Ei=tn+1<Z?N[tn+1].el:Q;qs[Y]===0?A(null,Sn,B,Ei,z,w,C,F,W):Nt&&(Ae<0||Y!==vi[Ae]?St(Sn,B,Ei,2):Ae--)}}},St=(R,N,B,Q,z=null)=>{const{el:w,type:C,transition:F,children:W,shapeFlag:Y}=R;if(Y&6){St(R.component.subTree,N,B,Q);return}if(Y&128){R.suspense.move(N,B,Q);return}if(Y&64){C.move(R,N,B,oe);return}if(C===ut){s(w,N,B);for(let x=0;x<W.length;x++)St(W[x],N,B,Q);s(R.anchor,N,B);return}if(C===oa){M(R,N,B);return}if(Q!==2&&Y&1&&F)if(Q===0)F.beforeEnter(w),s(w,N,B),Tn(()=>F.enter(w),z);else{const{leave:x,delayLeave:j,afterLeave:ee}=F,ie=()=>s(w,N,B),Re=()=>{x(w,()=>{ie(),ee&&ee()})};j?j(w,ie,Re):Re()}else s(w,N,B)},We=(R,N,B,Q=!1,z=!1)=>{const{type:w,props:C,ref:F,children:W,dynamicChildren:Y,shapeFlag:Z,patchFlag:x,dirs:j,cacheIndex:ee}=R;if(x===-2&&(z=!1),F!=null&&pc(F,null,B,R,!0),ee!=null&&(N.renderCache[ee]=void 0),Z&256){N.ctx.deactivate(R);return}const ie=Z&1&&j,Re=!ra(R);let Ae;if(Re&&(Ae=C&&C.onVnodeBeforeUnmount)&&Xn(Ae,N,R),Z&6)ct(R.component,B,Q);else{if(Z&128){R.suspense.unmount(B,Q);return}ie&&Mr(R,null,N,"beforeUnmount"),Z&64?R.type.remove(R,N,B,oe,Q):Y&&!Y.hasOnce&&(w!==ut||x>0&&x&64)?It(Y,N,B,!1,!0):(w===ut&&x&384||!z&&Z&16)&&It(W,N,B),Q&&qe(R)}(Re&&(Ae=C&&C.onVnodeUnmounted)||ie)&&Tn(()=>{Ae&&Xn(Ae,N,R),ie&&Mr(R,null,N,"unmounted")},B)},qe=R=>{const{type:N,el:B,anchor:Q,transition:z}=R;if(N===ut){Fe(B,Q);return}if(N===oa){O(R);return}const w=()=>{r(B),z&&!z.persisted&&z.afterLeave&&z.afterLeave()};if(R.shapeFlag&1&&z&&!z.persisted){const{leave:C,delayLeave:F}=z,W=()=>C(B,w);F?F(R.el,w,W):W()}else w()},Fe=(R,N)=>{let B;for(;R!==N;)B=p(R),r(R),R=B;r(N)},ct=(R,N,B)=>{const{bum:Q,scope:z,job:w,subTree:C,um:F,m:W,a:Y}=R;m_(W),m_(Y),Q&&Gl(Q),z.stop(),w&&(w.flags|=8,We(C,R,N,B)),F&&Tn(F,N),Tn(()=>{R.isUnmounted=!0},N),N&&N.pendingBranch&&!N.isUnmounted&&R.asyncDep&&!R.asyncResolved&&R.suspenseId===N.pendingId&&(N.deps--,N.deps===0&&N.resolve())},It=(R,N,B,Q=!1,z=!1,w=0)=>{for(let C=w;C<R.length;C++)We(R[C],N,B,Q,z)},G=R=>{if(R.shapeFlag&6)return G(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const N=p(R.anchor||R.el),B=N&&N[vC];return B?p(B):N};let se=!1;const X=(R,N,B)=>{R==null?N._vnode&&We(N._vnode,null,null,!0):A(N._vnode||null,R,N,null,null,null,B),N._vnode=R,se||(se=!0,a_(),jE(),se=!1)},oe={p:A,um:We,m:St,r:qe,mt:we,mc:g,pc:Ee,pbc:P,n:G,o:t};let Se,Be;return{render:X,hydrate:Se,createApp:BC(X,Se)}}function mh({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function xr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function XC(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function fT(t,e,n=!1){const s=t.children,r=e.children;if(pe(s)&&pe(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=sr(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&fT(o,a)),a.type===Ya&&(a.el=o.el)}}function JC(t){const e=t.slice(),n=[0];let s,r,i,o,a;const l=t.length;for(s=0;s<l;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function pT(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:pT(e)}function m_(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const ZC=Symbol.for("v-scx"),eS=()=>mn(ZC);function os(t,e,n){return mT(t,e,n)}function mT(t,e,n=tt){const{immediate:s,deep:r,flush:i,once:o}=n,a=Ct({},n),l=e&&s||!e&&i!=="post";let u;if(Ca){if(i==="sync"){const _=eS();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=Bn,_.resume=Bn,_.pause=Bn,_}}const h=Mt;a.call=(_,T,A)=>Wn(_,h,T,A);let d=!1;i==="post"?a.scheduler=_=>{Tn(_,h&&h.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(_,T)=>{T?_():Bf(_)}),a.augmentJob=_=>{e&&(_.flags|=4),d&&(_.flags|=2,h&&(_.id=h.uid,_.i=h))};const p=_C(t,e,a);return Ca&&(u?u.push(p):l&&p()),p}function tS(t,e,n){const s=this.proxy,r=wt(t)?t.includes(".")?_T(s,t):()=>s[t]:t.bind(s,s);let i;ye(e)?i=e:(i=e.handler,n=e);const o=Qa(this),a=mT(r,i.bind(s),n);return o(),a}function _T(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const nS=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${On(e)}Modifiers`]||t[`${fi(e)}Modifiers`];function sS(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||tt;let r=n;const i=e.startsWith("update:"),o=i&&nS(s,e.slice(7));o&&(o.trim&&(r=n.map(h=>wt(h)?h.trim():h)),o.number&&(r=n.map(td)));let a,l=s[a=lh(e)]||s[a=lh(On(e))];!l&&i&&(l=s[a=lh(fi(e))]),l&&Wn(l,t,6,r);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Wn(u,t,6,r)}}function gT(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!ye(t)){const l=u=>{const h=gT(u,e,!0);h&&(a=!0,Ct(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Je(t)&&s.set(t,null),null):(pe(i)?i.forEach(l=>o[l]=null):Ct(o,i),Je(t)&&s.set(t,o),o)}function uu(t,e){return!t||!Jc(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ge(t,e[0].toLowerCase()+e.slice(1))||Ge(t,fi(e))||Ge(t,e))}function _h(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:l,render:u,renderCache:h,props:d,data:p,setupState:_,ctx:T,inheritAttrs:A}=t,I=fc(t);let b,L;try{if(n.shapeFlag&4){const O=r||s,V=O;b=ts(u.call(V,O,h,d,_,p,T)),L=a}else{const O=e;b=ts(O.length>1?O(d,{attrs:a,slots:o,emit:l}):O(d,null)),L=e.props?a:rS(a)}}catch(O){aa.length=0,ou(O,t,1),b=ce(fn)}let M=b;if(L&&A!==!1){const O=Object.keys(L),{shapeFlag:V}=M;O.length&&V&7&&(i&&O.some(kf)&&(L=iS(L,i)),M=_r(M,L,!1,!0))}return n.dirs&&(M=_r(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&ba(M,n.transition),b=M,fc(I),b}const rS=t=>{let e;for(const n in t)(n==="class"||n==="style"||Jc(n))&&((e||(e={}))[n]=t[n]);return e},iS=(t,e)=>{const n={};for(const s in t)(!kf(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function oS(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?__(s,o,u):!!o;if(l&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const p=h[d];if(o[p]!==s[p]&&!uu(u,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?__(s,o,u):!0:!!o;return!1}function __(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!uu(n,i))return!0}return!1}function aS({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const yT=t=>t.__isSuspense;function lS(t,e){e&&e.pendingBranch?pe(t)?e.effects.push(...t):e.effects.push(t):BE(t)}const ut=Symbol.for("v-fgt"),Ya=Symbol.for("v-txt"),fn=Symbol.for("v-cmt"),oa=Symbol.for("v-stc"),aa=[];let In=null;function ue(t=!1){aa.push(In=t?null:[])}function cS(){aa.pop(),In=aa[aa.length-1]||null}let Ra=1;function g_(t,e=!1){Ra+=t,t<0&&In&&e&&(In.hasOnce=!0)}function vT(t){return t.dynamicChildren=Ra>0?In||Vi:null,cS(),Ra>0&&In&&In.push(t),t}function he(t,e,n,s,r,i){return vT(H(t,e,n,s,r,i,!0))}function dd(t,e,n,s,r){return vT(ce(t,e,n,s,r,!0))}function _c(t){return t?t.__v_isVNode===!0:!1}function Hr(t,e){return t.type===e.type&&t.key===e.key}const ET=({key:t})=>t??null,Yl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?wt(t)||ht(t)||ye(t)?{i:cn,r:t,k:e,f:!!n}:t:null);function H(t,e=null,n=null,s=0,r=null,i=t===ut?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ET(e),ref:e&&Yl(e),scopeId:WE,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:cn};return a?(qf(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=wt(n)?8:16),Ra>0&&!o&&In&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&In.push(l),l}const ce=uS;function uS(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===OC)&&(t=fn),_c(t)){const a=_r(t,e,!0);return n&&qf(a,n),Ra>0&&!i&&In&&(a.shapeFlag&6?In[In.indexOf(t)]=a:In.push(a)),a.patchFlag=-2,a}if(wS(t)&&(t=t.__vccOpts),e){e=hS(e);let{class:a,style:l}=e;a&&!wt(a)&&(e.class=Ps(a)),Je(l)&&(Uf(l)&&!pe(l)&&(l=Ct({},l)),e.style=Qi(l))}const o=wt(t)?1:yT(t)?128:qE(t)?64:Je(t)?4:ye(t)?2:0;return H(t,e,n,s,r,o,i,!0)}function hS(t){return t?Uf(t)||oT(t)?Ct({},t):t:null}function _r(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:l}=t,u=e?fS(r||{},e):r,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&ET(u),ref:e&&e.ref?n&&i?pe(i)?i.concat(Yl(e)):[i,Yl(e)]:Yl(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ut?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&_r(t.ssContent),ssFallback:t.ssFallback&&_r(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&ba(h,l.clone(h)),h}function Wf(t=" ",e=0){return ce(Ya,null,t,e)}function dS(t,e){const n=ce(oa,null,t);return n.staticCount=e,n}function Mn(t="",e=!1){return e?(ue(),dd(fn,null,t)):ce(fn,null,t)}function ts(t){return t==null||typeof t=="boolean"?ce(fn):pe(t)?ce(ut,null,t.slice()):_c(t)?sr(t):ce(Ya,null,String(t))}function sr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:_r(t)}function qf(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(pe(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),qf(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!oT(e)?e._ctx=cn:r===3&&cn&&(cn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ye(e)?(e={default:e,_ctx:cn},n=32):(e=String(e),s&64?(n=16,e=[Wf(e)]):n=8);t.children=e,t.shapeFlag|=n}function fS(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Ps([e.class,s.class]));else if(r==="style")e.style=Qi([e.style,s.style]);else if(Jc(r)){const i=e[r],o=s[r];o&&i!==o&&!(pe(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Xn(t,e,n,s=null){Wn(t,e,7,[n,s])}const pS=sT();let mS=0;function _S(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||pS,i={uid:mS++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new gE(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lT(s,r),emitsOptions:gT(s,r),emit:null,emitted:null,propsDefaults:tt,inheritAttrs:s.inheritAttrs,ctx:tt,data:tt,props:tt,attrs:tt,slots:tt,refs:tt,setupState:tt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=sS.bind(null,i),t.ce&&t.ce(i),i}let Mt=null;const gr=()=>Mt||cn;let gc,fd;{const t=nu(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};gc=e("__VUE_INSTANCE_SETTERS__",n=>Mt=n),fd=e("__VUE_SSR_SETTERS__",n=>Ca=n)}const Qa=t=>{const e=Mt;return gc(t),t.scope.on(),()=>{t.scope.off(),gc(e)}},y_=()=>{Mt&&Mt.scope.off(),gc(null)};function TT(t){return t.vnode.shapeFlag&4}let Ca=!1;function gS(t,e=!1,n=!1){e&&fd(e);const{props:s,children:r}=t.vnode,i=TT(t);HC(t,s,i,e),GC(t,r,n);const o=i?yS(t,e):void 0;return e&&fd(!1),o}function yS(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,DC);const{setup:s}=n;if(s){wr();const r=t.setupContext=s.length>1?ES(t):null,i=Qa(t),o=za(s,t,0,[t.props,r]),a=cE(o);if(Ir(),i(),(a||t.sp)&&!ra(t)&&XE(t),a){if(o.then(y_,y_),e)return o.then(l=>{v_(t,l,e)}).catch(l=>{ou(l,t,0)});t.asyncDep=o}else v_(t,o,e)}else wT(t,e)}function v_(t,e,n){ye(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Je(e)&&(t.setupState=FE(e)),wT(t,n)}let E_;function wT(t,e,n){const s=t.type;if(!t.render){if(!e&&E_&&!s.render){const r=s.template||jf(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,u=Ct(Ct({isCustomElement:i,delimiters:a},o),l);s.render=E_(r,u)}}t.render=s.render||Bn}{const r=Qa(t);wr();try{MC(t)}finally{Ir(),r()}}}const vS={get(t,e){return Gt(t,"get",""),t[e]}};function ES(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,vS),slots:t.slots,emit:t.emit,expose:e}}function hu(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(FE($f(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ia)return ia[n](t)},has(e,n){return n in e||n in ia}})):t.proxy}function TS(t,e=!0){return ye(t)?t.displayName||t.name:t.name||e&&t.__name}function wS(t){return ye(t)&&"__vccOpts"in t}const ft=(t,e)=>pC(t,e,Ca);function Xa(t,e,n){const s=arguments.length;return s===2?Je(e)&&!pe(e)?_c(e)?ce(t,null,[e]):ce(t,e):ce(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&_c(n)&&(n=[n]),ce(t,e,n))}const IS="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pd;const T_=typeof window<"u"&&window.trustedTypes;if(T_)try{pd=T_.createPolicy("vue",{createHTML:t=>t})}catch{}const IT=pd?t=>pd.createHTML(t):t=>t,bS="http://www.w3.org/2000/svg",RS="http://www.w3.org/1998/Math/MathML",Cs=typeof document<"u"?document:null,w_=Cs&&Cs.createElement("template"),CS={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?Cs.createElementNS(bS,t):e==="mathml"?Cs.createElementNS(RS,t):n?Cs.createElement(t,{is:n}):Cs.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Cs.createTextNode(t),createComment:t=>Cs.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Cs.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{w_.innerHTML=IT(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=w_.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ys="transition",Vo="animation",Sa=Symbol("_vtc"),bT={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},SS=Ct({},KE,bT),AS=t=>(t.displayName="Transition",t.props=SS,t),gh=AS((t,{slots:e})=>Xa(wC,PS(t),e)),Fr=(t,e=[])=>{pe(t)?t.forEach(n=>n(...e)):t&&t(...e)},I_=t=>t?pe(t)?t.some(e=>e.length>1):t.length>1:!1;function PS(t){const e={};for(const k in t)k in bT||(e[k]=t[k]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:h=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,T=kS(r),A=T&&T[0],I=T&&T[1],{onBeforeEnter:b,onEnter:L,onEnterCancelled:M,onLeave:O,onLeaveCancelled:V,onBeforeAppear:$=b,onAppear:y=L,onAppearCancelled:g=M}=e,v=(k,S,we,Ze)=>{k._enterCancelled=Ze,Vr(k,S?h:a),Vr(k,S?u:o),we&&we()},P=(k,S)=>{k._isLeaving=!1,Vr(k,d),Vr(k,_),Vr(k,p),S&&S()},D=k=>(S,we)=>{const Ze=k?y:L,ke=()=>v(S,k,we);Fr(Ze,[S,ke]),b_(()=>{Vr(S,k?l:i),ws(S,k?h:a),I_(Ze)||R_(S,s,A,ke)})};return Ct(e,{onBeforeEnter(k){Fr(b,[k]),ws(k,i),ws(k,o)},onBeforeAppear(k){Fr($,[k]),ws(k,l),ws(k,u)},onEnter:D(!1),onAppear:D(!0),onLeave(k,S){k._isLeaving=!0;const we=()=>P(k,S);ws(k,d),k._enterCancelled?(ws(k,p),A_()):(A_(),ws(k,p)),b_(()=>{k._isLeaving&&(Vr(k,d),ws(k,_),I_(O)||R_(k,s,I,we))}),Fr(O,[k,we])},onEnterCancelled(k){v(k,!1,void 0,!0),Fr(M,[k])},onAppearCancelled(k){v(k,!0,void 0,!0),Fr(g,[k])},onLeaveCancelled(k){P(k),Fr(V,[k])}})}function kS(t){if(t==null)return null;if(Je(t))return[yh(t.enter),yh(t.leave)];{const e=yh(t);return[e,e]}}function yh(t){return LR(t)}function ws(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Sa]||(t[Sa]=new Set)).add(e)}function Vr(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[Sa];n&&(n.delete(e),n.size||(t[Sa]=void 0))}function b_(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let NS=0;function R_(t,e,n,s){const r=t._endId=++NS,i=()=>{r===t._endId&&s()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=OS(t,e);if(!o)return s();const u=o+"end";let h=0;const d=()=>{t.removeEventListener(u,p),i()},p=_=>{_.target===t&&++h>=l&&d()};setTimeout(()=>{h<l&&d()},a+1),t.addEventListener(u,p)}function OS(t,e){const n=window.getComputedStyle(t),s=T=>(n[T]||"").split(", "),r=s(`${Ys}Delay`),i=s(`${Ys}Duration`),o=C_(r,i),a=s(`${Vo}Delay`),l=s(`${Vo}Duration`),u=C_(a,l);let h=null,d=0,p=0;e===Ys?o>0&&(h=Ys,d=o,p=i.length):e===Vo?u>0&&(h=Vo,d=u,p=l.length):(d=Math.max(o,u),h=d>0?o>u?Ys:Vo:null,p=h?h===Ys?i.length:l.length:0);const _=h===Ys&&/\b(transform|all)(,|$)/.test(s(`${Ys}Property`).toString());return{type:h,timeout:d,propCount:p,hasTransform:_}}function C_(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>S_(n)+S_(t[s])))}function S_(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function A_(){return document.body.offsetHeight}function LS(t,e,n){const s=t[Sa];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const yc=Symbol("_vod"),RT=Symbol("_vsh"),dn={beforeMount(t,{value:e},{transition:n}){t[yc]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Uo(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Uo(t,!0),s.enter(t)):s.leave(t,()=>{Uo(t,!1)}):Uo(t,e))},beforeUnmount(t,{value:e}){Uo(t,e)}};function Uo(t,e){t.style.display=e?t[yc]:"none",t[RT]=!e}const CT=Symbol("");function DS(t){const e=gr();if(!e)return;const n=e.ut=(r=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(i=>vc(i,r))},s=()=>{const r=t(e.proxy);e.ce?vc(e.ce,r):md(e.subTree,r),n(r)};eT(()=>{BE(s)}),_s(()=>{os(s,Bn,{flush:"post"});const r=new MutationObserver(s);r.observe(e.subTree.el.parentNode,{childList:!0}),pi(()=>r.disconnect())})}function md(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{md(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)vc(t.el,e);else if(t.type===ut)t.children.forEach(n=>md(n,e));else if(t.type===oa){let{el:n,anchor:s}=t;for(;n&&(vc(n,e),n!==s);)n=n.nextSibling}}function vc(t,e){if(t.nodeType===1){const n=t.style;let s="";for(const r in e)n.setProperty(`--${r}`,e[r]),s+=`--${r}: ${e[r]};`;n[CT]=s}}const MS=/(^|;)\s*display\s*:/;function xS(t,e,n){const s=t.style,r=wt(n);let i=!1;if(n&&!r){if(e)if(wt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ql(s,a,"")}else for(const o in e)n[o]==null&&Ql(s,o,"");for(const o in n)o==="display"&&(i=!0),Ql(s,o,n[o])}else if(r){if(e!==n){const o=s[CT];o&&(n+=";"+o),s.cssText=n,i=MS.test(n)}}else e&&t.removeAttribute("style");yc in t&&(t[yc]=i?s.display:"",t[RT]&&(s.display="none"))}const P_=/\s*!important$/;function Ql(t,e,n){if(pe(n))n.forEach(s=>Ql(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=FS(t,e);P_.test(n)?t.setProperty(fi(s),n.replace(P_,""),"important"):t[s]=n}}const k_=["Webkit","Moz","ms"],vh={};function FS(t,e){const n=vh[e];if(n)return n;let s=On(e);if(s!=="filter"&&s in t)return vh[e]=s;s=tu(s);for(let r=0;r<k_.length;r++){const i=k_[r]+s;if(i in t)return vh[e]=i}return e}const N_="http://www.w3.org/1999/xlink";function O_(t,e,n,s,r,i=UR(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(N_,e.slice(6,e.length)):t.setAttributeNS(N_,e,n):n==null||i&&!fE(n)?t.removeAttribute(e):t.setAttribute(e,i?"":us(n)?String(n):n)}function L_(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?IT(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=fE(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function Wr(t,e,n,s){t.addEventListener(e,n,s)}function VS(t,e,n,s){t.removeEventListener(e,n,s)}const D_=Symbol("_vei");function US(t,e,n,s,r=null){const i=t[D_]||(t[D_]={}),o=i[e];if(s&&o)o.value=s;else{const[a,l]=$S(e);if(s){const u=i[e]=HS(s,r);Wr(t,a,u,l)}else o&&(VS(t,a,o,l),i[e]=void 0)}}const M_=/(?:Once|Passive|Capture)$/;function $S(t){let e;if(M_.test(t)){e={};let s;for(;s=t.match(M_);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):fi(t.slice(2)),e]}let Eh=0;const BS=Promise.resolve(),jS=()=>Eh||(BS.then(()=>Eh=0),Eh=Date.now());function HS(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Wn(WS(s,n.value),e,5,[s])};return n.value=t,n.attached=jS(),n}function WS(t,e){if(pe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const x_=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,qS=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?LS(t,s,o):e==="style"?xS(t,n,s):Jc(e)?kf(e)||US(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):KS(t,e,s,o))?(L_(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&O_(t,e,s,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!wt(s))?L_(t,On(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),O_(t,e,s,o))};function KS(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&x_(e)&&ye(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return x_(e)&&wt(n)?!1:e in t}const Ec=t=>{const e=t.props["onUpdate:modelValue"]||!1;return pe(e)?n=>Gl(e,n):e};function GS(t){t.target.composing=!0}function F_(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Bi=Symbol("_assign"),q9={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[Bi]=Ec(r);const i=s||r.props&&r.props.type==="number";Wr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=td(a)),t[Bi](a)}),n&&Wr(t,"change",()=>{t.value=t.value.trim()}),e||(Wr(t,"compositionstart",GS),Wr(t,"compositionend",F_),Wr(t,"change",F_))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[Bi]=Ec(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?td(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===l)||(t.value=l))}},K9={deep:!0,created(t,e,n){t[Bi]=Ec(n),Wr(t,"change",()=>{const s=t._modelValue,r=zS(t),i=t.checked,o=t[Bi];if(pe(s)){const a=pE(s,r),l=a!==-1;if(i&&!l)o(s.concat(r));else if(!i&&l){const u=[...s];u.splice(a,1),o(u)}}else if(Zc(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(ST(t,i))})},mounted:V_,beforeUpdate(t,e,n){t[Bi]=Ec(n),V_(t,e,n)}};function V_(t,{value:e,oldValue:n},s){t._modelValue=e;let r;if(pe(e))r=pE(e,s.props.value)>-1;else if(Zc(e))r=e.has(s.props.value);else{if(e===n)return;r=su(e,ST(t,!0))}t.checked!==r&&(t.checked=r)}function zS(t){return"_value"in t?t._value:t.value}function ST(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const YS=Ct({patchProp:qS},CS);let U_;function QS(){return U_||(U_=YC(YS))}const XS=(...t)=>{const e=QS().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=ZS(s);if(!r)return;const i=e._component;!ye(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,JS(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function JS(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ZS(t){return wt(t)?document.querySelector(t):t}var eA=!1;/*!
 * pinia v2.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let AT;const du=t=>AT=t,PT=Symbol();function _d(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var la;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(la||(la={}));function tA(){const t=ru(!0),e=t.run(()=>Ie({}));let n=[],s=[];const r=$f({install(i){du(r),r._a=i,i.provide(PT,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!eA?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const kT=()=>{};function $_(t,e,n,s=kT){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&yE()&&BR(r),r}function Ci(t,...e){t.slice().forEach(n=>{n(...e)})}const nA=t=>t(),B_=Symbol(),Th=Symbol();function gd(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];_d(r)&&_d(s)&&t.hasOwnProperty(n)&&!ht(s)&&!xs(s)?t[n]=gd(r,s):t[n]=s}return t}const sA=Symbol();function rA(t){return!_d(t)||!t.hasOwnProperty(sA)}const{assign:er}=Object;function iA(t){return!!(ht(t)&&t.effect)}function oA(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let l;function u(){a||(n.state.value[t]=r?r():{});const h=cC(n.state.value[t]);return er(h,i,Object.keys(o||{}).reduce((d,p)=>(d[p]=$f(ft(()=>{du(n);const _=n._s.get(t);return o[p].call(_,_)})),d),{}))}return l=NT(t,u,e,n,s,!0),l}function NT(t,e,n={},s,r,i){let o;const a=er({actions:{}},n),l={deep:!0};let u,h,d=[],p=[],_;const T=s.state.value[t];!i&&!T&&(s.state.value[t]={}),Ie({});let A;function I(g){let v;u=h=!1,typeof g=="function"?(g(s.state.value[t]),v={type:la.patchFunction,storeId:t,events:_}):(gd(s.state.value[t],g),v={type:la.patchObject,payload:g,storeId:t,events:_});const P=A=Symbol();au().then(()=>{A===P&&(u=!0)}),h=!0,Ci(d,v,s.state.value[t])}const b=i?function(){const{state:v}=n,P=v?v():{};this.$patch(D=>{er(D,P)})}:kT;function L(){o.stop(),d=[],p=[],s._s.delete(t)}const M=(g,v="")=>{if(B_ in g)return g[Th]=v,g;const P=function(){du(s);const D=Array.from(arguments),k=[],S=[];function we(fe){k.push(fe)}function Ze(fe){S.push(fe)}Ci(p,{args:D,name:P[Th],store:V,after:we,onError:Ze});let ke;try{ke=g.apply(this&&this.$id===t?this:V,D)}catch(fe){throw Ci(S,fe),fe}return ke instanceof Promise?ke.then(fe=>(Ci(k,fe),fe)).catch(fe=>(Ci(S,fe),Promise.reject(fe))):(Ci(k,ke),ke)};return P[B_]=!0,P[Th]=v,P},O={_p:s,$id:t,$onAction:$_.bind(null,p),$patch:I,$reset:b,$subscribe(g,v={}){const P=$_(d,g,v.detached,()=>D()),D=o.run(()=>os(()=>s.state.value[t],k=>{(v.flush==="sync"?h:u)&&g({storeId:t,type:la.direct,events:_},k)},er({},l,v)));return P},$dispose:L},V=ho(O);s._s.set(t,V);const y=(s._a&&s._a.runWithContext||nA)(()=>s._e.run(()=>(o=ru()).run(()=>e({action:M}))));for(const g in y){const v=y[g];if(ht(v)&&!iA(v)||xs(v))i||(T&&rA(v)&&(ht(v)?v.value=T[g]:gd(v,T[g])),s.state.value[t][g]=v);else if(typeof v=="function"){const P=M(v,g);y[g]=P,a.actions[g]=v}}return er(V,y),er(Le(V),y),Object.defineProperty(V,"$state",{get:()=>s.state.value[t],set:g=>{I(v=>{er(v,g)})}}),s._p.forEach(g=>{er(V,o.run(()=>g({store:V,app:s._a,pinia:s,options:a})))}),T&&i&&n.hydrate&&n.hydrate(V.$state,T),u=!0,h=!0,V}/*! #__NO_SIDE_EFFECTS__ */function fu(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,l){const u=jC();return a=a||(u?mn(PT,null):null),a&&du(a),a=AT,a._s.has(s)||(i?NT(s,e,r,a):oA(s,r,a)),a._s.get(s)}return o.$id=s,o}function ca(t){{const e=Le(t),n={};for(const s in e){const r=e[s];r.effect?n[s]=ft({get:()=>t[s],set(i){t[s]=i}}):(ht(r)||xs(r))&&(n[s]=dC(t,s))}return n}}function OT(t,e){return function(){return t.apply(e,arguments)}}const{toString:aA}=Object.prototype,{getPrototypeOf:Kf}=Object,pu=(t=>e=>{const n=aA.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Yn=t=>(t=t.toLowerCase(),e=>pu(e)===t),mu=t=>e=>typeof e===t,{isArray:fo}=Array,Aa=mu("undefined");function lA(t){return t!==null&&!Aa(t)&&t.constructor!==null&&!Aa(t.constructor)&&bn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const LT=Yn("ArrayBuffer");function cA(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&LT(t.buffer),e}const uA=mu("string"),bn=mu("function"),DT=mu("number"),_u=t=>t!==null&&typeof t=="object",hA=t=>t===!0||t===!1,Xl=t=>{if(pu(t)!=="object")return!1;const e=Kf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},dA=Yn("Date"),fA=Yn("File"),pA=Yn("Blob"),mA=Yn("FileList"),_A=t=>_u(t)&&bn(t.pipe),gA=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||bn(t.append)&&((e=pu(t))==="formdata"||e==="object"&&bn(t.toString)&&t.toString()==="[object FormData]"))},yA=Yn("URLSearchParams"),[vA,EA,TA,wA]=["ReadableStream","Request","Response","Headers"].map(Yn),IA=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ja(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let s,r;if(typeof t!="object"&&(t=[t]),fo(t))for(s=0,r=t.length;s<r;s++)e.call(null,t[s],s,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(s=0;s<o;s++)a=i[s],e.call(null,t[a],a,t)}}function MT(t,e){e=e.toLowerCase();const n=Object.keys(t);let s=n.length,r;for(;s-- >0;)if(r=n[s],e===r.toLowerCase())return r;return null}const Kr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,xT=t=>!Aa(t)&&t!==Kr;function yd(){const{caseless:t}=xT(this)&&this||{},e={},n=(s,r)=>{const i=t&&MT(e,r)||r;Xl(e[i])&&Xl(s)?e[i]=yd(e[i],s):Xl(s)?e[i]=yd({},s):fo(s)?e[i]=s.slice():e[i]=s};for(let s=0,r=arguments.length;s<r;s++)arguments[s]&&Ja(arguments[s],n);return e}const bA=(t,e,n,{allOwnKeys:s}={})=>(Ja(e,(r,i)=>{n&&bn(r)?t[i]=OT(r,n):t[i]=r},{allOwnKeys:s}),t),RA=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),CA=(t,e,n,s)=>{t.prototype=Object.create(e.prototype,s),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},SA=(t,e,n,s)=>{let r,i,o;const a={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),i=r.length;i-- >0;)o=r[i],(!s||s(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Kf(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},AA=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const s=t.indexOf(e,n);return s!==-1&&s===n},PA=t=>{if(!t)return null;if(fo(t))return t;let e=t.length;if(!DT(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},kA=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Kf(Uint8Array)),NA=(t,e)=>{const s=(t&&t[Symbol.iterator]).call(t);let r;for(;(r=s.next())&&!r.done;){const i=r.value;e.call(t,i[0],i[1])}},OA=(t,e)=>{let n;const s=[];for(;(n=t.exec(e))!==null;)s.push(n);return s},LA=Yn("HTMLFormElement"),DA=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,s,r){return s.toUpperCase()+r}),j_=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),MA=Yn("RegExp"),FT=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),s={};Ja(n,(r,i)=>{let o;(o=e(r,i,t))!==!1&&(s[i]=o||r)}),Object.defineProperties(t,s)},xA=t=>{FT(t,(e,n)=>{if(bn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const s=t[n];if(bn(s)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},FA=(t,e)=>{const n={},s=r=>{r.forEach(i=>{n[i]=!0})};return fo(t)?s(t):s(String(t).split(e)),n},VA=()=>{},UA=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,wh="abcdefghijklmnopqrstuvwxyz",H_="0123456789",VT={DIGIT:H_,ALPHA:wh,ALPHA_DIGIT:wh+wh.toUpperCase()+H_},$A=(t=16,e=VT.ALPHA_DIGIT)=>{let n="";const{length:s}=e;for(;t--;)n+=e[Math.random()*s|0];return n};function BA(t){return!!(t&&bn(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const jA=t=>{const e=new Array(10),n=(s,r)=>{if(_u(s)){if(e.indexOf(s)>=0)return;if(!("toJSON"in s)){e[r]=s;const i=fo(s)?[]:{};return Ja(s,(o,a)=>{const l=n(o,r+1);!Aa(l)&&(i[a]=l)}),e[r]=void 0,i}}return s};return n(t,0)},HA=Yn("AsyncFunction"),WA=t=>t&&(_u(t)||bn(t))&&bn(t.then)&&bn(t.catch),UT=((t,e)=>t?setImmediate:e?((n,s)=>(Kr.addEventListener("message",({source:r,data:i})=>{r===Kr&&i===n&&s.length&&s.shift()()},!1),r=>{s.push(r),Kr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",bn(Kr.postMessage)),qA=typeof queueMicrotask<"u"?queueMicrotask.bind(Kr):typeof process<"u"&&process.nextTick||UT,K={isArray:fo,isArrayBuffer:LT,isBuffer:lA,isFormData:gA,isArrayBufferView:cA,isString:uA,isNumber:DT,isBoolean:hA,isObject:_u,isPlainObject:Xl,isReadableStream:vA,isRequest:EA,isResponse:TA,isHeaders:wA,isUndefined:Aa,isDate:dA,isFile:fA,isBlob:pA,isRegExp:MA,isFunction:bn,isStream:_A,isURLSearchParams:yA,isTypedArray:kA,isFileList:mA,forEach:Ja,merge:yd,extend:bA,trim:IA,stripBOM:RA,inherits:CA,toFlatObject:SA,kindOf:pu,kindOfTest:Yn,endsWith:AA,toArray:PA,forEachEntry:NA,matchAll:OA,isHTMLForm:LA,hasOwnProperty:j_,hasOwnProp:j_,reduceDescriptors:FT,freezeMethods:xA,toObjectSet:FA,toCamelCase:DA,noop:VA,toFiniteNumber:UA,findKey:MT,global:Kr,isContextDefined:xT,ALPHABET:VT,generateString:$A,isSpecCompliantForm:BA,toJSONObject:jA,isAsyncFn:HA,isThenable:WA,setImmediate:UT,asap:qA};function Te(t,e,n,s,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),s&&(this.request=s),r&&(this.response=r,this.status=r.status?r.status:null)}K.inherits(Te,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:K.toJSONObject(this.config),code:this.code,status:this.status}}});const $T=Te.prototype,BT={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{BT[t]={value:t}});Object.defineProperties(Te,BT);Object.defineProperty($T,"isAxiosError",{value:!0});Te.from=(t,e,n,s,r,i)=>{const o=Object.create($T);return K.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),Te.call(o,t.message,e,n,s,r),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const KA=null;function vd(t){return K.isPlainObject(t)||K.isArray(t)}function jT(t){return K.endsWith(t,"[]")?t.slice(0,-2):t}function W_(t,e,n){return t?t.concat(e).map(function(r,i){return r=jT(r),!n&&i?"["+r+"]":r}).join(n?".":""):e}function GA(t){return K.isArray(t)&&!t.some(vd)}const zA=K.toFlatObject(K,{},null,function(e){return/^is[A-Z]/.test(e)});function gu(t,e,n){if(!K.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=K.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(A,I){return!K.isUndefined(I[A])});const s=n.metaTokens,r=n.visitor||h,i=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&K.isSpecCompliantForm(e);if(!K.isFunction(r))throw new TypeError("visitor must be a function");function u(T){if(T===null)return"";if(K.isDate(T))return T.toISOString();if(!l&&K.isBlob(T))throw new Te("Blob is not supported. Use a Buffer instead.");return K.isArrayBuffer(T)||K.isTypedArray(T)?l&&typeof Blob=="function"?new Blob([T]):Buffer.from(T):T}function h(T,A,I){let b=T;if(T&&!I&&typeof T=="object"){if(K.endsWith(A,"{}"))A=s?A:A.slice(0,-2),T=JSON.stringify(T);else if(K.isArray(T)&&GA(T)||(K.isFileList(T)||K.endsWith(A,"[]"))&&(b=K.toArray(T)))return A=jT(A),b.forEach(function(M,O){!(K.isUndefined(M)||M===null)&&e.append(o===!0?W_([A],O,i):o===null?A:A+"[]",u(M))}),!1}return vd(T)?!0:(e.append(W_(I,A,i),u(T)),!1)}const d=[],p=Object.assign(zA,{defaultVisitor:h,convertValue:u,isVisitable:vd});function _(T,A){if(!K.isUndefined(T)){if(d.indexOf(T)!==-1)throw Error("Circular reference detected in "+A.join("."));d.push(T),K.forEach(T,function(b,L){(!(K.isUndefined(b)||b===null)&&r.call(e,b,K.isString(L)?L.trim():L,A,p))===!0&&_(b,A?A.concat(L):[L])}),d.pop()}}if(!K.isObject(t))throw new TypeError("data must be an object");return _(t),e}function q_(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(s){return e[s]})}function Gf(t,e){this._pairs=[],t&&gu(t,this,e)}const HT=Gf.prototype;HT.append=function(e,n){this._pairs.push([e,n])};HT.toString=function(e){const n=e?function(s){return e.call(this,s,q_)}:q_;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function YA(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function WT(t,e,n){if(!e)return t;const s=n&&n.encode||YA;K.isFunction(n)&&(n={serialize:n});const r=n&&n.serialize;let i;if(r?i=r(e,n):i=K.isURLSearchParams(e)?e.toString():new Gf(e,n).toString(s),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class K_{constructor(){this.handlers=[]}use(e,n,s){return this.handlers.push({fulfilled:e,rejected:n,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){K.forEach(this.handlers,function(s){s!==null&&e(s)})}}const qT={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},QA=typeof URLSearchParams<"u"?URLSearchParams:Gf,XA=typeof FormData<"u"?FormData:null,JA=typeof Blob<"u"?Blob:null,ZA={isBrowser:!0,classes:{URLSearchParams:QA,FormData:XA,Blob:JA},protocols:["http","https","file","blob","url","data"]},zf=typeof window<"u"&&typeof document<"u",Ed=typeof navigator=="object"&&navigator||void 0,e1=zf&&(!Ed||["ReactNative","NativeScript","NS"].indexOf(Ed.product)<0),t1=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",n1=zf&&window.location.href||"http://localhost",s1=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:zf,hasStandardBrowserEnv:e1,hasStandardBrowserWebWorkerEnv:t1,navigator:Ed,origin:n1},Symbol.toStringTag,{value:"Module"})),Jt={...s1,...ZA};function r1(t,e){return gu(t,new Jt.classes.URLSearchParams,Object.assign({visitor:function(n,s,r,i){return Jt.isNode&&K.isBuffer(n)?(this.append(s,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function i1(t){return K.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function o1(t){const e={},n=Object.keys(t);let s;const r=n.length;let i;for(s=0;s<r;s++)i=n[s],e[i]=t[i];return e}function KT(t){function e(n,s,r,i){let o=n[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=i>=n.length;return o=!o&&K.isArray(r)?r.length:o,l?(K.hasOwnProp(r,o)?r[o]=[r[o],s]:r[o]=s,!a):((!r[o]||!K.isObject(r[o]))&&(r[o]=[]),e(n,s,r[o],i)&&K.isArray(r[o])&&(r[o]=o1(r[o])),!a)}if(K.isFormData(t)&&K.isFunction(t.entries)){const n={};return K.forEachEntry(t,(s,r)=>{e(i1(s),r,n,0)}),n}return null}function a1(t,e,n){if(K.isString(t))try{return(e||JSON.parse)(t),K.trim(t)}catch(s){if(s.name!=="SyntaxError")throw s}return(0,JSON.stringify)(t)}const Za={transitional:qT,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const s=n.getContentType()||"",r=s.indexOf("application/json")>-1,i=K.isObject(e);if(i&&K.isHTMLForm(e)&&(e=new FormData(e)),K.isFormData(e))return r?JSON.stringify(KT(e)):e;if(K.isArrayBuffer(e)||K.isBuffer(e)||K.isStream(e)||K.isFile(e)||K.isBlob(e)||K.isReadableStream(e))return e;if(K.isArrayBufferView(e))return e.buffer;if(K.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(s.indexOf("application/x-www-form-urlencoded")>-1)return r1(e,this.formSerializer).toString();if((a=K.isFileList(e))||s.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return gu(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return i||r?(n.setContentType("application/json",!1),a1(e)):e}],transformResponse:[function(e){const n=this.transitional||Za.transitional,s=n&&n.forcedJSONParsing,r=this.responseType==="json";if(K.isResponse(e)||K.isReadableStream(e))return e;if(e&&K.isString(e)&&(s&&!this.responseType||r)){const o=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?Te.from(a,Te.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Jt.classes.FormData,Blob:Jt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};K.forEach(["delete","get","head","post","put","patch"],t=>{Za.headers[t]={}});const l1=K.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),c1=t=>{const e={};let n,s,r;return t&&t.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),s=o.substring(r+1).trim(),!(!n||e[n]&&l1[n])&&(n==="set-cookie"?e[n]?e[n].push(s):e[n]=[s]:e[n]=e[n]?e[n]+", "+s:s)}),e},G_=Symbol("internals");function $o(t){return t&&String(t).trim().toLowerCase()}function Jl(t){return t===!1||t==null?t:K.isArray(t)?t.map(Jl):String(t)}function u1(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=n.exec(t);)e[s[1]]=s[2];return e}const h1=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Ih(t,e,n,s,r){if(K.isFunction(s))return s.call(this,e,n);if(r&&(e=n),!!K.isString(e)){if(K.isString(s))return e.indexOf(s)!==-1;if(K.isRegExp(s))return s.test(e)}}function d1(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,s)=>n.toUpperCase()+s)}function f1(t,e){const n=K.toCamelCase(" "+e);["get","set","has"].forEach(s=>{Object.defineProperty(t,s+n,{value:function(r,i,o){return this[s].call(this,e,r,i,o)},configurable:!0})})}let _n=class{constructor(e){e&&this.set(e)}set(e,n,s){const r=this;function i(a,l,u){const h=$o(l);if(!h)throw new Error("header name must be a non-empty string");const d=K.findKey(r,h);(!d||r[d]===void 0||u===!0||u===void 0&&r[d]!==!1)&&(r[d||l]=Jl(a))}const o=(a,l)=>K.forEach(a,(u,h)=>i(u,h,l));if(K.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(K.isString(e)&&(e=e.trim())&&!h1(e))o(c1(e),n);else if(K.isHeaders(e))for(const[a,l]of e.entries())i(l,a,s);else e!=null&&i(n,e,s);return this}get(e,n){if(e=$o(e),e){const s=K.findKey(this,e);if(s){const r=this[s];if(!n)return r;if(n===!0)return u1(r);if(K.isFunction(n))return n.call(this,r,s);if(K.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=$o(e),e){const s=K.findKey(this,e);return!!(s&&this[s]!==void 0&&(!n||Ih(this,this[s],s,n)))}return!1}delete(e,n){const s=this;let r=!1;function i(o){if(o=$o(o),o){const a=K.findKey(s,o);a&&(!n||Ih(s,s[a],a,n))&&(delete s[a],r=!0)}}return K.isArray(e)?e.forEach(i):i(e),r}clear(e){const n=Object.keys(this);let s=n.length,r=!1;for(;s--;){const i=n[s];(!e||Ih(this,this[i],i,e,!0))&&(delete this[i],r=!0)}return r}normalize(e){const n=this,s={};return K.forEach(this,(r,i)=>{const o=K.findKey(s,i);if(o){n[o]=Jl(r),delete n[i];return}const a=e?d1(i):String(i).trim();a!==i&&delete n[i],n[a]=Jl(r),s[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return K.forEach(this,(s,r)=>{s!=null&&s!==!1&&(n[r]=e&&K.isArray(s)?s.join(", "):s)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const s=new this(e);return n.forEach(r=>s.set(r)),s}static accessor(e){const s=(this[G_]=this[G_]={accessors:{}}).accessors,r=this.prototype;function i(o){const a=$o(o);s[a]||(f1(r,o),s[a]=!0)}return K.isArray(e)?e.forEach(i):i(e),this}};_n.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);K.reduceDescriptors(_n.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(s){this[n]=s}}});K.freezeMethods(_n);function bh(t,e){const n=this||Za,s=e||n,r=_n.from(s.headers);let i=s.data;return K.forEach(t,function(a){i=a.call(n,i,r.normalize(),e?e.status:void 0)}),r.normalize(),i}function GT(t){return!!(t&&t.__CANCEL__)}function po(t,e,n){Te.call(this,t??"canceled",Te.ERR_CANCELED,e,n),this.name="CanceledError"}K.inherits(po,Te,{__CANCEL__:!0});function zT(t,e,n){const s=n.config.validateStatus;!n.status||!s||s(n.status)?t(n):e(new Te("Request failed with status code "+n.status,[Te.ERR_BAD_REQUEST,Te.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function p1(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function m1(t,e){t=t||10;const n=new Array(t),s=new Array(t);let r=0,i=0,o;return e=e!==void 0?e:1e3,function(l){const u=Date.now(),h=s[i];o||(o=u),n[r]=l,s[r]=u;let d=i,p=0;for(;d!==r;)p+=n[d++],d=d%t;if(r=(r+1)%t,r===i&&(i=(i+1)%t),u-o<e)return;const _=h&&u-h;return _?Math.round(p*1e3/_):void 0}}function _1(t,e){let n=0,s=1e3/e,r,i;const o=(u,h=Date.now())=>{n=h,r=null,i&&(clearTimeout(i),i=null),t.apply(null,u)};return[(...u)=>{const h=Date.now(),d=h-n;d>=s?o(u,h):(r=u,i||(i=setTimeout(()=>{i=null,o(r)},s-d)))},()=>r&&o(r)]}const Tc=(t,e,n=3)=>{let s=0;const r=m1(50,250);return _1(i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,l=o-s,u=r(l),h=o<=a;s=o;const d={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:u||void 0,estimated:u&&a&&h?(a-o)/u:void 0,event:i,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(d)},n)},z_=(t,e)=>{const n=t!=null;return[s=>e[0]({lengthComputable:n,total:t,loaded:s}),e[1]]},Y_=t=>(...e)=>K.asap(()=>t(...e)),g1=Jt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,Jt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(Jt.origin),Jt.navigator&&/(msie|trident)/i.test(Jt.navigator.userAgent)):()=>!0,y1=Jt.hasStandardBrowserEnv?{write(t,e,n,s,r,i){const o=[t+"="+encodeURIComponent(e)];K.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),K.isString(s)&&o.push("path="+s),K.isString(r)&&o.push("domain="+r),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function v1(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function E1(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function YT(t,e){return t&&!v1(e)?E1(t,e):e}const Q_=t=>t instanceof _n?{...t}:t;function si(t,e){e=e||{};const n={};function s(u,h,d,p){return K.isPlainObject(u)&&K.isPlainObject(h)?K.merge.call({caseless:p},u,h):K.isPlainObject(h)?K.merge({},h):K.isArray(h)?h.slice():h}function r(u,h,d,p){if(K.isUndefined(h)){if(!K.isUndefined(u))return s(void 0,u,d,p)}else return s(u,h,d,p)}function i(u,h){if(!K.isUndefined(h))return s(void 0,h)}function o(u,h){if(K.isUndefined(h)){if(!K.isUndefined(u))return s(void 0,u)}else return s(void 0,h)}function a(u,h,d){if(d in e)return s(u,h);if(d in t)return s(void 0,u)}const l={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(u,h,d)=>r(Q_(u),Q_(h),d,!0)};return K.forEach(Object.keys(Object.assign({},t,e)),function(h){const d=l[h]||r,p=d(t[h],e[h],h);K.isUndefined(p)&&d!==a||(n[h]=p)}),n}const QT=t=>{const e=si({},t);let{data:n,withXSRFToken:s,xsrfHeaderName:r,xsrfCookieName:i,headers:o,auth:a}=e;e.headers=o=_n.from(o),e.url=WT(YT(e.baseURL,e.url),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(K.isFormData(n)){if(Jt.hasStandardBrowserEnv||Jt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[u,...h]=l?l.split(";").map(d=>d.trim()).filter(Boolean):[];o.setContentType([u||"multipart/form-data",...h].join("; "))}}if(Jt.hasStandardBrowserEnv&&(s&&K.isFunction(s)&&(s=s(e)),s||s!==!1&&g1(e.url))){const u=r&&i&&y1.read(i);u&&o.set(r,u)}return e},T1=typeof XMLHttpRequest<"u",w1=T1&&function(t){return new Promise(function(n,s){const r=QT(t);let i=r.data;const o=_n.from(r.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:u}=r,h,d,p,_,T;function A(){_&&_(),T&&T(),r.cancelToken&&r.cancelToken.unsubscribe(h),r.signal&&r.signal.removeEventListener("abort",h)}let I=new XMLHttpRequest;I.open(r.method.toUpperCase(),r.url,!0),I.timeout=r.timeout;function b(){if(!I)return;const M=_n.from("getAllResponseHeaders"in I&&I.getAllResponseHeaders()),V={data:!a||a==="text"||a==="json"?I.responseText:I.response,status:I.status,statusText:I.statusText,headers:M,config:t,request:I};zT(function(y){n(y),A()},function(y){s(y),A()},V),I=null}"onloadend"in I?I.onloadend=b:I.onreadystatechange=function(){!I||I.readyState!==4||I.status===0&&!(I.responseURL&&I.responseURL.indexOf("file:")===0)||setTimeout(b)},I.onabort=function(){I&&(s(new Te("Request aborted",Te.ECONNABORTED,t,I)),I=null)},I.onerror=function(){s(new Te("Network Error",Te.ERR_NETWORK,t,I)),I=null},I.ontimeout=function(){let O=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const V=r.transitional||qT;r.timeoutErrorMessage&&(O=r.timeoutErrorMessage),s(new Te(O,V.clarifyTimeoutError?Te.ETIMEDOUT:Te.ECONNABORTED,t,I)),I=null},i===void 0&&o.setContentType(null),"setRequestHeader"in I&&K.forEach(o.toJSON(),function(O,V){I.setRequestHeader(V,O)}),K.isUndefined(r.withCredentials)||(I.withCredentials=!!r.withCredentials),a&&a!=="json"&&(I.responseType=r.responseType),u&&([p,T]=Tc(u,!0),I.addEventListener("progress",p)),l&&I.upload&&([d,_]=Tc(l),I.upload.addEventListener("progress",d),I.upload.addEventListener("loadend",_)),(r.cancelToken||r.signal)&&(h=M=>{I&&(s(!M||M.type?new po(null,t,I):M),I.abort(),I=null)},r.cancelToken&&r.cancelToken.subscribe(h),r.signal&&(r.signal.aborted?h():r.signal.addEventListener("abort",h)));const L=p1(r.url);if(L&&Jt.protocols.indexOf(L)===-1){s(new Te("Unsupported protocol "+L+":",Te.ERR_BAD_REQUEST,t));return}I.send(i||null)})},I1=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let s=new AbortController,r;const i=function(u){if(!r){r=!0,a();const h=u instanceof Error?u:this.reason;s.abort(h instanceof Te?h:new po(h instanceof Error?h.message:h))}};let o=e&&setTimeout(()=>{o=null,i(new Te(`timeout ${e} of ms exceeded`,Te.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(u=>{u.unsubscribe?u.unsubscribe(i):u.removeEventListener("abort",i)}),t=null)};t.forEach(u=>u.addEventListener("abort",i));const{signal:l}=s;return l.unsubscribe=()=>K.asap(a),l}},b1=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let s=0,r;for(;s<n;)r=s+e,yield t.slice(s,r),s=r},R1=async function*(t,e){for await(const n of C1(t))yield*b1(n,e)},C1=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:s}=await e.read();if(n)break;yield s}}finally{await e.cancel()}},X_=(t,e,n,s)=>{const r=R1(t,e);let i=0,o,a=l=>{o||(o=!0,s&&s(l))};return new ReadableStream({async pull(l){try{const{done:u,value:h}=await r.next();if(u){a(),l.close();return}let d=h.byteLength;if(n){let p=i+=d;n(p)}l.enqueue(new Uint8Array(h))}catch(u){throw a(u),u}},cancel(l){return a(l),r.return()}},{highWaterMark:2})},yu=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",XT=yu&&typeof ReadableStream=="function",S1=yu&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),JT=(t,...e)=>{try{return!!t(...e)}catch{return!1}},A1=XT&&JT(()=>{let t=!1;const e=new Request(Jt.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),J_=64*1024,Td=XT&&JT(()=>K.isReadableStream(new Response("").body)),wc={stream:Td&&(t=>t.body)};yu&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!wc[e]&&(wc[e]=K.isFunction(t[e])?n=>n[e]():(n,s)=>{throw new Te(`Response type '${e}' is not supported`,Te.ERR_NOT_SUPPORT,s)})})})(new Response);const P1=async t=>{if(t==null)return 0;if(K.isBlob(t))return t.size;if(K.isSpecCompliantForm(t))return(await new Request(Jt.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(K.isArrayBufferView(t)||K.isArrayBuffer(t))return t.byteLength;if(K.isURLSearchParams(t)&&(t=t+""),K.isString(t))return(await S1(t)).byteLength},k1=async(t,e)=>{const n=K.toFiniteNumber(t.getContentLength());return n??P1(e)},N1=yu&&(async t=>{let{url:e,method:n,data:s,signal:r,cancelToken:i,timeout:o,onDownloadProgress:a,onUploadProgress:l,responseType:u,headers:h,withCredentials:d="same-origin",fetchOptions:p}=QT(t);u=u?(u+"").toLowerCase():"text";let _=I1([r,i&&i.toAbortSignal()],o),T;const A=_&&_.unsubscribe&&(()=>{_.unsubscribe()});let I;try{if(l&&A1&&n!=="get"&&n!=="head"&&(I=await k1(h,s))!==0){let V=new Request(e,{method:"POST",body:s,duplex:"half"}),$;if(K.isFormData(s)&&($=V.headers.get("content-type"))&&h.setContentType($),V.body){const[y,g]=z_(I,Tc(Y_(l)));s=X_(V.body,J_,y,g)}}K.isString(d)||(d=d?"include":"omit");const b="credentials"in Request.prototype;T=new Request(e,{...p,signal:_,method:n.toUpperCase(),headers:h.normalize().toJSON(),body:s,duplex:"half",credentials:b?d:void 0});let L=await fetch(T);const M=Td&&(u==="stream"||u==="response");if(Td&&(a||M&&A)){const V={};["status","statusText","headers"].forEach(v=>{V[v]=L[v]});const $=K.toFiniteNumber(L.headers.get("content-length")),[y,g]=a&&z_($,Tc(Y_(a),!0))||[];L=new Response(X_(L.body,J_,y,()=>{g&&g(),A&&A()}),V)}u=u||"text";let O=await wc[K.findKey(wc,u)||"text"](L,t);return!M&&A&&A(),await new Promise((V,$)=>{zT(V,$,{data:O,headers:_n.from(L.headers),status:L.status,statusText:L.statusText,config:t,request:T})})}catch(b){throw A&&A(),b&&b.name==="TypeError"&&/fetch/i.test(b.message)?Object.assign(new Te("Network Error",Te.ERR_NETWORK,t,T),{cause:b.cause||b}):Te.from(b,b&&b.code,t,T)}}),wd={http:KA,xhr:w1,fetch:N1};K.forEach(wd,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Z_=t=>`- ${t}`,O1=t=>K.isFunction(t)||t===null||t===!1,ZT={getAdapter:t=>{t=K.isArray(t)?t:[t];const{length:e}=t;let n,s;const r={};for(let i=0;i<e;i++){n=t[i];let o;if(s=n,!O1(n)&&(s=wd[(o=String(n)).toLowerCase()],s===void 0))throw new Te(`Unknown adapter '${o}'`);if(s)break;r[o||"#"+i]=s}if(!s){const i=Object.entries(r).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(Z_).join(`
`):" "+Z_(i[0]):"as no adapter specified";throw new Te("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return s},adapters:wd};function Rh(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new po(null,t)}function eg(t){return Rh(t),t.headers=_n.from(t.headers),t.data=bh.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),ZT.getAdapter(t.adapter||Za.adapter)(t).then(function(s){return Rh(t),s.data=bh.call(t,t.transformResponse,s),s.headers=_n.from(s.headers),s},function(s){return GT(s)||(Rh(t),s&&s.response&&(s.response.data=bh.call(t,t.transformResponse,s.response),s.response.headers=_n.from(s.response.headers))),Promise.reject(s)})}const ew="1.7.9",vu={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{vu[t]=function(s){return typeof s===t||"a"+(e<1?"n ":" ")+t}});const tg={};vu.transitional=function(e,n,s){function r(i,o){return"[Axios v"+ew+"] Transitional option '"+i+"'"+o+(s?". "+s:"")}return(i,o,a)=>{if(e===!1)throw new Te(r(o," has been removed"+(n?" in "+n:"")),Te.ERR_DEPRECATED);return n&&!tg[o]&&(tg[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};vu.spelling=function(e){return(n,s)=>(console.warn(`${s} is likely a misspelling of ${e}`),!0)};function L1(t,e,n){if(typeof t!="object")throw new Te("options must be an object",Te.ERR_BAD_OPTION_VALUE);const s=Object.keys(t);let r=s.length;for(;r-- >0;){const i=s[r],o=e[i];if(o){const a=t[i],l=a===void 0||o(a,i,t);if(l!==!0)throw new Te("option "+i+" must be "+l,Te.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Te("Unknown option "+i,Te.ERR_BAD_OPTION)}}const Zl={assertOptions:L1,validators:vu},Jn=Zl.validators;let Jr=class{constructor(e){this.defaults=e,this.interceptors={request:new K_,response:new K_}}async request(e,n){try{return await this._request(e,n)}catch(s){if(s instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const i=r.stack?r.stack.replace(/^.+\n/,""):"";try{s.stack?i&&!String(s.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(s.stack+=`
`+i):s.stack=i}catch{}}throw s}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=si(this.defaults,n);const{transitional:s,paramsSerializer:r,headers:i}=n;s!==void 0&&Zl.assertOptions(s,{silentJSONParsing:Jn.transitional(Jn.boolean),forcedJSONParsing:Jn.transitional(Jn.boolean),clarifyTimeoutError:Jn.transitional(Jn.boolean)},!1),r!=null&&(K.isFunction(r)?n.paramsSerializer={serialize:r}:Zl.assertOptions(r,{encode:Jn.function,serialize:Jn.function},!0)),Zl.assertOptions(n,{baseUrl:Jn.spelling("baseURL"),withXsrfToken:Jn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&K.merge(i.common,i[n.method]);i&&K.forEach(["delete","get","head","post","put","patch","common"],T=>{delete i[T]}),n.headers=_n.concat(o,i);const a=[];let l=!0;this.interceptors.request.forEach(function(A){typeof A.runWhen=="function"&&A.runWhen(n)===!1||(l=l&&A.synchronous,a.unshift(A.fulfilled,A.rejected))});const u=[];this.interceptors.response.forEach(function(A){u.push(A.fulfilled,A.rejected)});let h,d=0,p;if(!l){const T=[eg.bind(this),void 0];for(T.unshift.apply(T,a),T.push.apply(T,u),p=T.length,h=Promise.resolve(n);d<p;)h=h.then(T[d++],T[d++]);return h}p=a.length;let _=n;for(d=0;d<p;){const T=a[d++],A=a[d++];try{_=T(_)}catch(I){A.call(this,I);break}}try{h=eg.call(this,_)}catch(T){return Promise.reject(T)}for(d=0,p=u.length;d<p;)h=h.then(u[d++],u[d++]);return h}getUri(e){e=si(this.defaults,e);const n=YT(e.baseURL,e.url);return WT(n,e.params,e.paramsSerializer)}};K.forEach(["delete","get","head","options"],function(e){Jr.prototype[e]=function(n,s){return this.request(si(s||{},{method:e,url:n,data:(s||{}).data}))}});K.forEach(["post","put","patch"],function(e){function n(s){return function(i,o,a){return this.request(si(a||{},{method:e,headers:s?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Jr.prototype[e]=n(),Jr.prototype[e+"Form"]=n(!0)});let D1=class tw{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const s=this;this.promise.then(r=>{if(!s._listeners)return;let i=s._listeners.length;for(;i-- >0;)s._listeners[i](r);s._listeners=null}),this.promise.then=r=>{let i;const o=new Promise(a=>{s.subscribe(a),i=a}).then(r);return o.cancel=function(){s.unsubscribe(i)},o},e(function(i,o,a){s.reason||(s.reason=new po(i,o,a),n(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=s=>{e.abort(s)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new tw(function(r){e=r}),cancel:e}}};function M1(t){return function(n){return t.apply(null,n)}}function x1(t){return K.isObject(t)&&t.isAxiosError===!0}const Id={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Id).forEach(([t,e])=>{Id[e]=t});function nw(t){const e=new Jr(t),n=OT(Jr.prototype.request,e);return K.extend(n,Jr.prototype,e,{allOwnKeys:!0}),K.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return nw(si(t,r))},n}const vt=nw(Za);vt.Axios=Jr;vt.CanceledError=po;vt.CancelToken=D1;vt.isCancel=GT;vt.VERSION=ew;vt.toFormData=gu;vt.AxiosError=Te;vt.Cancel=vt.CanceledError;vt.all=function(e){return Promise.all(e)};vt.spread=M1;vt.isAxiosError=x1;vt.mergeConfig=si;vt.AxiosHeaders=_n;vt.formToJSON=t=>KT(K.isHTMLForm(t)?new FormData(t):t);vt.getAdapter=ZT.getAdapter;vt.HttpStatusCode=Id;vt.default=vt;const{Axios:Y9,AxiosError:Q9,CanceledError:X9,isCancel:J9,CancelToken:Z9,VERSION:eB,all:tB,Cancel:nB,isAxiosError:sB,spread:rB,toFormData:iB,AxiosHeaders:oB,HttpStatusCode:Ur,formToJSON:aB,getAdapter:lB,mergeConfig:cB}=vt;function Ic(t){return Ic=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ic(t)}function ec(t,e){if(!t.vueAxiosInstalled){var n=sw(e)?U1(e):e;if($1(n)){var s=B1(t);if(s){var r=s<3?F1:V1;Object.keys(n).forEach(function(i){r(t,i,n[i])}),t.vueAxiosInstalled=!0}else console.error("[vue-axios] unknown Vue version")}else console.error("[vue-axios] configuration is invalid, expected options are either <axios_instance> or { <registration_key>: <axios_instance> }")}}function F1(t,e,n){Object.defineProperty(t.prototype,e,{get:function(){return n}}),t[e]=n}function V1(t,e,n){t.config.globalProperties[e]=n,t[e]=n}function sw(t){return t&&typeof t.get=="function"&&typeof t.post=="function"}function U1(t){return{axios:t,$http:t}}function $1(t){return Ic(t)==="object"&&Object.keys(t).every(function(e){return sw(t[e])})}function B1(t){return t&&t.version&&Number(t.version.split(".")[0])}(typeof exports>"u"?"undefined":Ic(exports))=="object"?module.exports=ec:typeof define=="function"&&define.amd?define([],function(){return ec}):window.Vue&&window.axios&&window.Vue.use&&Vue.use(ec,window.axios);const j1={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"};function H1(t,e){return ue(),he("svg",j1,e[0]||(e[0]=[H("path",{d:"M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32v144H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h144v144c0 17.7 14.3 32 32 32s32-14.3 32-32V288h144c17.7 0 32-14.3 32-32s-14.3-32-32-32H256z"},null,-1)]))}const tc={render:H1},W1={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"};function q1(t,e){return ue(),he("svg",W1,e[0]||(e[0]=[H("path",{d:"M432 256c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32s14.3-32 32-32h352c17.7 0 32 14.3 32 32"},null,-1)]))}const Ch={render:q1},K1={class:"footer--mobile"},G1={class:"container"},z1={class:"footer__top"},Y1={class:"left"},Q1={class:"icon"},X1={class:"icon"},J1={class:"content"},Z1={class:"right"},eP={class:"right__item"},tP={class:"icon"},nP={class:"icon"},sP={class:"content"},rP={class:"right__item"},iP={class:"icon"},oP={class:"icon"},aP={class:"content"},lP=vn({__name:"Footer",setup(t){const e=Ie(!1),n=Ie(!1),s=Ie(!1);return(r,i)=>(ue(),he(ut,null,[i[10]||(i[10]=dS('<div class="footer" data-v-0940d2bb><div class="container" data-v-0940d2bb><div class="footer__top" data-v-0940d2bb><div class="left" data-v-0940d2bb><p class="title" data-v-0940d2bb><span data-v-0940d2bb>Home</span></p><div class="content" data-v-0940d2bb><p data-v-0940d2bb>Home Ltd.</p><p data-v-0940d2bb>Providing quality products with exceptional service since 2024.</p><p data-v-0940d2bb>📍 Address: 1234 Commerce Avenue, Cityville, Country </p><p data-v-0940d2bb>📞 Phone: +1 (123) 456-7890 </p><p data-v-0940d2bb>✉️ Email: support@shopease.com </p></div></div><div class="right" data-v-0940d2bb><div class="right__item" data-v-0940d2bb><p class="title" data-v-0940d2bb><span data-v-0940d2bb>Quick Links</span></p><div class="content" data-v-0940d2bb><p data-v-0940d2bb>🏠 Home</p><p data-v-0940d2bb>🛒 Shopping Cart</p><p data-v-0940d2bb>👤 My Account</p></div></div><div class="right__item" data-v-0940d2bb><p class="title" data-v-0940d2bb><span data-v-0940d2bb>Customer Service</span></p><div class="content" data-v-0940d2bb><p data-v-0940d2bb>🔄 Return &amp; Refund Policy</p><p data-v-0940d2bb>🔒 Privacy Policy</p><p data-v-0940d2bb>📜 Terms &amp; Conditions</p><p data-v-0940d2bb>🚚 Shipping Information</p><p data-v-0940d2bb>💳 Payment Methods</p><p data-v-0940d2bb>🛠 Shopping Guide</p></div></div></div></div><div data-v-0940d2bb><p class="title-s text-center" data-v-0940d2bb>© 2024 Home Ltd. All rights reserved.</p></div></div></div>',1)),H("div",K1,[H("div",G1,[H("div",z1,[H("div",Y1,[H("p",{class:"title",onClick:i[0]||(i[0]=o=>e.value=!e.value)},[i[3]||(i[3]=H("span",null,"Home",-1)),hn(H("div",Q1,[ce(de(tc))],512),[[dn,!e.value]]),hn(H("div",X1,[ce(de(Ch))],512),[[dn,e.value]])]),ce(gh,null,{default:wn(()=>[hn(H("div",J1,i[4]||(i[4]=[H("p",null,"Home Ltd.",-1),H("p",null,"Providing quality products with exceptional service since 2024.",-1),H("p",null,"📍 1234 Commerce Avenue, Cityville, Country ",-1),H("p",null,"📞 +1 (123) 456-7890 ",-1),H("p",null,"✉️ support@shopease.com ",-1)]),512),[[dn,e.value]])]),_:1})]),H("div",Z1,[H("div",eP,[H("p",{class:"title",onClick:i[1]||(i[1]=o=>n.value=!n.value)},[i[5]||(i[5]=H("span",null,"Quick Links",-1)),hn(H("div",tP,[ce(de(tc))],512),[[dn,!n.value]]),hn(H("div",nP,[ce(de(Ch))],512),[[dn,n.value]])]),ce(gh,null,{default:wn(()=>[hn(H("div",sP,i[6]||(i[6]=[H("p",null,"🏠 Home",-1),H("p",null,"🛒 Shopping Cart",-1),H("p",null,"👤 My Account",-1)]),512),[[dn,n.value]])]),_:1})]),H("div",rP,[H("p",{class:"title",onClick:i[2]||(i[2]=o=>s.value=!s.value)},[i[7]||(i[7]=H("span",null,"Customer Service",-1)),hn(H("div",iP,[ce(de(tc))],512),[[dn,!s.value]]),hn(H("div",oP,[ce(de(Ch))],512),[[dn,s.value]])]),ce(gh,null,{default:wn(()=>[hn(H("div",aP,i[8]||(i[8]=[H("p",null,"🔄 Return & Refund Policy",-1),H("p",null,"🔒 Privacy Policy",-1),H("p",null,"📜 Terms & Conditions",-1),H("p",null,"🚚 Shipping Information",-1),H("p",null,"💳 Payment Methods",-1),H("p",null,"🛠 Shopping Guide",-1)]),512),[[dn,s.value]])]),_:1})])])]),i[9]||(i[9]=H("div",null," © 2024 **ShopEase Ltd.** All rights reserved. 📜 [Privacy Policy](#) | [Terms & Conditions](#) ",-1))])])],64))}}),br=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},cP=br(lP,[["__scopeId","data-v-0940d2bb"]]);var xn=(t=>(t.ERROR="error",t.WARNING="warning",t.INFO="info",t))(xn||{}),bd=(t=>(t.ASC="asc",t.DESC="desc",t))(bd||{});const mi=fu("info",()=>{const t=Ie([]);return{infoList:t,addToInfoList:(s,r,i)=>{const o=(Math.random()+new Date().getTime()).toString(32).slice(0,8);t.value.push({id:o,type:s,code:i,message:r})},removeFromInfoList:s=>{const r=t.value.findIndex(i=>i.id===s);r!==-1&&t.value.splice(r,1)}}}),uP={class:"infoCard__content"},hP={class:"infoCard__progressBar"},dP=vn({__name:"InfoCard",props:{infoObj:{default:()=>({})}},setup(t){const e=t,{removeFromInfoList:n}=mi(),s=Ie(!0),r=Ie(null);return _s(()=>{setTimeout(()=>{r.value!==null&&(r.value.style.width="0%")},10),setTimeout(()=>{s.value=!1,n(e.infoObj.id)},5010)}),(i,o)=>s.value?(ue(),he("div",{key:0,class:Ps(["infoCard",e.infoObj.type==="info"?"info":"error"])},[H("div",uP,[H("p",null,mt(i.infoObj.message),1),H("div",{class:"close",onClick:o[0]||(o[0]=a=>de(n)(i.infoObj.id))},[ce(de(tc))])]),H("div",hP,[H("div",{class:"progress",ref_key:"progress",ref:r},null,512)])],2)):Mn("",!0)}}),fP=br(dP,[["__scopeId","data-v-c531a705"]]);/*!
  * shared v10.0.5
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */const bc=typeof window<"u",Rr=(t,e=!1)=>e?Symbol.for(t):Symbol(t),pP=(t,e,n)=>mP({l:t,k:e,s:n}),mP=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),Tt=t=>typeof t=="number"&&isFinite(t),_P=t=>Yf(t)==="[object Date]",Xi=t=>Yf(t)==="[object RegExp]",Eu=t=>Ce(t)&&Object.keys(t).length===0,Pt=Object.assign,gP=Object.create,Xe=(t=null)=>gP(t);let ng;const Gr=()=>ng||(ng=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:Xe());function sg(t){return t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const yP=Object.prototype.hasOwnProperty;function Vn(t,e){return yP.call(t,e)}const gt=Array.isArray,ot=t=>typeof t=="function",ae=t=>typeof t=="string",$e=t=>typeof t=="boolean",He=t=>t!==null&&typeof t=="object",vP=t=>He(t)&&ot(t.then)&&ot(t.catch),rw=Object.prototype.toString,Yf=t=>rw.call(t),Ce=t=>Yf(t)==="[object Object]",EP=t=>t==null?"":gt(t)||Ce(t)&&t.toString===rw?JSON.stringify(t,null,2):String(t);function Qf(t,e=""){return t.reduce((n,s,r)=>r===0?n+s:n+e+s,"")}function TP(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}const Ll=t=>!He(t)||gt(t);function nc(t,e){if(Ll(t)||Ll(e))throw new Error("Invalid value");const n=[{src:t,des:e}];for(;n.length;){const{src:s,des:r}=n.pop();Object.keys(s).forEach(i=>{i!=="__proto__"&&(He(s[i])&&!He(r[i])&&(r[i]=Array.isArray(s[i])?[]:Xe()),Ll(r[i])||Ll(s[i])?r[i]=s[i]:n.push({src:s[i],des:r[i]}))})}}/*!
  * message-compiler v10.0.5
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */function wP(t,e,n){return{line:t,column:e,offset:n}}function Rd(t,e,n){return{start:t,end:e}}const Ye={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16},IP=17;function Tu(t,e,n={}){const{domain:s,messages:r,args:i}=n,o=t,a=new SyntaxError(String(o));return a.code=t,e&&(a.location=e),a.domain=s,a}function bP(t){throw t}const Is=" ",RP="\r",rn=`
`,CP="\u2028",SP="\u2029";function AP(t){const e=t;let n=0,s=1,r=1,i=0;const o=y=>e[y]===RP&&e[y+1]===rn,a=y=>e[y]===rn,l=y=>e[y]===SP,u=y=>e[y]===CP,h=y=>o(y)||a(y)||l(y)||u(y),d=()=>n,p=()=>s,_=()=>r,T=()=>i,A=y=>o(y)||l(y)||u(y)?rn:e[y],I=()=>A(n),b=()=>A(n+i);function L(){return i=0,h(n)&&(s++,r=0),o(n)&&n++,n++,r++,e[n]}function M(){return o(n+i)&&i++,i++,e[n+i]}function O(){n=0,s=1,r=1,i=0}function V(y=0){i=y}function $(){const y=n+i;for(;y!==n;)L();i=0}return{index:d,line:p,column:_,peekOffset:T,charAt:A,currentChar:I,currentPeek:b,next:L,peek:M,reset:O,resetPeek:V,skipToPeek:$}}const Qs=void 0,PP=".",rg="'",kP="tokenizer";function NP(t,e={}){const n=e.location!==!1,s=AP(t),r=()=>s.index(),i=()=>wP(s.line(),s.column(),s.index()),o=i(),a=r(),l={currentType:13,offset:a,startLoc:o,endLoc:o,lastType:13,lastOffset:a,lastStartLoc:o,lastEndLoc:o,braceNest:0,inLinked:!1,text:""},u=()=>l,{onError:h}=e;function d(w,C,F,...W){const Y=u();if(C.column+=F,C.offset+=F,h){const Z=n?Rd(Y.startLoc,C):null,x=Tu(w,Z,{domain:kP,args:W});h(x)}}function p(w,C,F){w.endLoc=i(),w.currentType=C;const W={type:C};return n&&(W.loc=Rd(w.startLoc,w.endLoc)),F!=null&&(W.value=F),W}const _=w=>p(w,13);function T(w,C){return w.currentChar()===C?(w.next(),C):(d(Ye.EXPECTED_TOKEN,i(),0,C),"")}function A(w){let C="";for(;w.currentPeek()===Is||w.currentPeek()===rn;)C+=w.currentPeek(),w.peek();return C}function I(w){const C=A(w);return w.skipToPeek(),C}function b(w){if(w===Qs)return!1;const C=w.charCodeAt(0);return C>=97&&C<=122||C>=65&&C<=90||C===95}function L(w){if(w===Qs)return!1;const C=w.charCodeAt(0);return C>=48&&C<=57}function M(w,C){const{currentType:F}=C;if(F!==2)return!1;A(w);const W=b(w.currentPeek());return w.resetPeek(),W}function O(w,C){const{currentType:F}=C;if(F!==2)return!1;A(w);const W=w.currentPeek()==="-"?w.peek():w.currentPeek(),Y=L(W);return w.resetPeek(),Y}function V(w,C){const{currentType:F}=C;if(F!==2)return!1;A(w);const W=w.currentPeek()===rg;return w.resetPeek(),W}function $(w,C){const{currentType:F}=C;if(F!==7)return!1;A(w);const W=w.currentPeek()===".";return w.resetPeek(),W}function y(w,C){const{currentType:F}=C;if(F!==8)return!1;A(w);const W=b(w.currentPeek());return w.resetPeek(),W}function g(w,C){const{currentType:F}=C;if(!(F===7||F===11))return!1;A(w);const W=w.currentPeek()===":";return w.resetPeek(),W}function v(w,C){const{currentType:F}=C;if(F!==9)return!1;const W=()=>{const Z=w.currentPeek();return Z==="{"?b(w.peek()):Z==="@"||Z==="|"||Z===":"||Z==="."||Z===Is||!Z?!1:Z===rn?(w.peek(),W()):D(w,!1)},Y=W();return w.resetPeek(),Y}function P(w){A(w);const C=w.currentPeek()==="|";return w.resetPeek(),C}function D(w,C=!0){const F=(Y=!1,Z="")=>{const x=w.currentPeek();return x==="{"||x==="@"||!x?Y:x==="|"?!(Z===Is||Z===rn):x===Is?(w.peek(),F(!0,Is)):x===rn?(w.peek(),F(!0,rn)):!0},W=F();return C&&w.resetPeek(),W}function k(w,C){const F=w.currentChar();return F===Qs?Qs:C(F)?(w.next(),F):null}function S(w){const C=w.charCodeAt(0);return C>=97&&C<=122||C>=65&&C<=90||C>=48&&C<=57||C===95||C===36}function we(w){return k(w,S)}function Ze(w){const C=w.charCodeAt(0);return C>=97&&C<=122||C>=65&&C<=90||C>=48&&C<=57||C===95||C===36||C===45}function ke(w){return k(w,Ze)}function fe(w){const C=w.charCodeAt(0);return C>=48&&C<=57}function Ee(w){return k(w,fe)}function st(w){const C=w.charCodeAt(0);return C>=48&&C<=57||C>=65&&C<=70||C>=97&&C<=102}function kt(w){return k(w,st)}function St(w){let C="",F="";for(;C=Ee(w);)F+=C;return F}function We(w){let C="";for(;;){const F=w.currentChar();if(F==="{"||F==="}"||F==="@"||F==="|"||!F)break;if(F===Is||F===rn)if(D(w))C+=F,w.next();else{if(P(w))break;C+=F,w.next()}else C+=F,w.next()}return C}function qe(w){I(w);let C="",F="";for(;C=ke(w);)F+=C;return w.currentChar()===Qs&&d(Ye.UNTERMINATED_CLOSING_BRACE,i(),0),F}function Fe(w){I(w);let C="";return w.currentChar()==="-"?(w.next(),C+=`-${St(w)}`):C+=St(w),w.currentChar()===Qs&&d(Ye.UNTERMINATED_CLOSING_BRACE,i(),0),C}function ct(w){return w!==rg&&w!==rn}function It(w){I(w),T(w,"'");let C="",F="";for(;C=k(w,ct);)C==="\\"?F+=G(w):F+=C;const W=w.currentChar();return W===rn||W===Qs?(d(Ye.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,i(),0),W===rn&&(w.next(),T(w,"'")),F):(T(w,"'"),F)}function G(w){const C=w.currentChar();switch(C){case"\\":case"'":return w.next(),`\\${C}`;case"u":return se(w,C,4);case"U":return se(w,C,6);default:return d(Ye.UNKNOWN_ESCAPE_SEQUENCE,i(),0,C),""}}function se(w,C,F){T(w,C);let W="";for(let Y=0;Y<F;Y++){const Z=kt(w);if(!Z){d(Ye.INVALID_UNICODE_ESCAPE_SEQUENCE,i(),0,`\\${C}${W}${w.currentChar()}`);break}W+=Z}return`\\${C}${W}`}function X(w){return w!=="{"&&w!=="}"&&w!==Is&&w!==rn}function oe(w){I(w);let C="",F="";for(;C=k(w,X);)F+=C;return F}function Se(w){let C="",F="";for(;C=we(w);)F+=C;return F}function Be(w){const C=F=>{const W=w.currentChar();return W==="{"||W==="@"||W==="|"||W==="("||W===")"||!W||W===Is?F:(F+=W,w.next(),C(F))};return C("")}function R(w){I(w);const C=T(w,"|");return I(w),C}function N(w,C){let F=null;switch(w.currentChar()){case"{":return C.braceNest>=1&&d(Ye.NOT_ALLOW_NEST_PLACEHOLDER,i(),0),w.next(),F=p(C,2,"{"),I(w),C.braceNest++,F;case"}":return C.braceNest>0&&C.currentType===2&&d(Ye.EMPTY_PLACEHOLDER,i(),0),w.next(),F=p(C,3,"}"),C.braceNest--,C.braceNest>0&&I(w),C.inLinked&&C.braceNest===0&&(C.inLinked=!1),F;case"@":return C.braceNest>0&&d(Ye.UNTERMINATED_CLOSING_BRACE,i(),0),F=B(w,C)||_(C),C.braceNest=0,F;default:{let Y=!0,Z=!0,x=!0;if(P(w))return C.braceNest>0&&d(Ye.UNTERMINATED_CLOSING_BRACE,i(),0),F=p(C,1,R(w)),C.braceNest=0,C.inLinked=!1,F;if(C.braceNest>0&&(C.currentType===4||C.currentType===5||C.currentType===6))return d(Ye.UNTERMINATED_CLOSING_BRACE,i(),0),C.braceNest=0,Q(w,C);if(Y=M(w,C))return F=p(C,4,qe(w)),I(w),F;if(Z=O(w,C))return F=p(C,5,Fe(w)),I(w),F;if(x=V(w,C))return F=p(C,6,It(w)),I(w),F;if(!Y&&!Z&&!x)return F=p(C,12,oe(w)),d(Ye.INVALID_TOKEN_IN_PLACEHOLDER,i(),0,F.value),I(w),F;break}}return F}function B(w,C){const{currentType:F}=C;let W=null;const Y=w.currentChar();switch((F===7||F===8||F===11||F===9)&&(Y===rn||Y===Is)&&d(Ye.INVALID_LINKED_FORMAT,i(),0),Y){case"@":return w.next(),W=p(C,7,"@"),C.inLinked=!0,W;case".":return I(w),w.next(),p(C,8,".");case":":return I(w),w.next(),p(C,9,":");default:return P(w)?(W=p(C,1,R(w)),C.braceNest=0,C.inLinked=!1,W):$(w,C)||g(w,C)?(I(w),B(w,C)):y(w,C)?(I(w),p(C,11,Se(w))):v(w,C)?(I(w),Y==="{"?N(w,C)||W:p(C,10,Be(w))):(F===7&&d(Ye.INVALID_LINKED_FORMAT,i(),0),C.braceNest=0,C.inLinked=!1,Q(w,C))}}function Q(w,C){let F={type:13};if(C.braceNest>0)return N(w,C)||_(C);if(C.inLinked)return B(w,C)||_(C);switch(w.currentChar()){case"{":return N(w,C)||_(C);case"}":return d(Ye.UNBALANCED_CLOSING_BRACE,i(),0),w.next(),p(C,3,"}");case"@":return B(w,C)||_(C);default:{if(P(w))return F=p(C,1,R(w)),C.braceNest=0,C.inLinked=!1,F;if(D(w))return p(C,0,We(w));break}}return F}function z(){const{currentType:w,offset:C,startLoc:F,endLoc:W}=l;return l.lastType=w,l.lastOffset=C,l.lastStartLoc=F,l.lastEndLoc=W,l.offset=r(),l.startLoc=i(),s.currentChar()===Qs?p(l,13):Q(s,l)}return{nextToken:z,currentOffset:r,currentPosition:i,context:u}}const OP="parser",LP=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function DP(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const s=parseInt(e||n,16);return s<=55295||s>=57344?String.fromCodePoint(s):"�"}}}function MP(t={}){const e=t.location!==!1,{onError:n}=t;function s(b,L,M,O,...V){const $=b.currentPosition();if($.offset+=O,$.column+=O,n){const y=e?Rd(M,$):null,g=Tu(L,y,{domain:OP,args:V});n(g)}}function r(b,L,M){const O={type:b};return e&&(O.start=L,O.end=L,O.loc={start:M,end:M}),O}function i(b,L,M,O){e&&(b.end=L,b.loc&&(b.loc.end=M))}function o(b,L){const M=b.context(),O=r(3,M.offset,M.startLoc);return O.value=L,i(O,b.currentOffset(),b.currentPosition()),O}function a(b,L){const M=b.context(),{lastOffset:O,lastStartLoc:V}=M,$=r(5,O,V);return $.index=parseInt(L,10),b.nextToken(),i($,b.currentOffset(),b.currentPosition()),$}function l(b,L){const M=b.context(),{lastOffset:O,lastStartLoc:V}=M,$=r(4,O,V);return $.key=L,b.nextToken(),i($,b.currentOffset(),b.currentPosition()),$}function u(b,L){const M=b.context(),{lastOffset:O,lastStartLoc:V}=M,$=r(9,O,V);return $.value=L.replace(LP,DP),b.nextToken(),i($,b.currentOffset(),b.currentPosition()),$}function h(b){const L=b.nextToken(),M=b.context(),{lastOffset:O,lastStartLoc:V}=M,$=r(8,O,V);return L.type!==11?(s(b,Ye.UNEXPECTED_EMPTY_LINKED_MODIFIER,M.lastStartLoc,0),$.value="",i($,O,V),{nextConsumeToken:L,node:$}):(L.value==null&&s(b,Ye.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,Zn(L)),$.value=L.value||"",i($,b.currentOffset(),b.currentPosition()),{node:$})}function d(b,L){const M=b.context(),O=r(7,M.offset,M.startLoc);return O.value=L,i(O,b.currentOffset(),b.currentPosition()),O}function p(b){const L=b.context(),M=r(6,L.offset,L.startLoc);let O=b.nextToken();if(O.type===8){const V=h(b);M.modifier=V.node,O=V.nextConsumeToken||b.nextToken()}switch(O.type!==9&&s(b,Ye.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,Zn(O)),O=b.nextToken(),O.type===2&&(O=b.nextToken()),O.type){case 10:O.value==null&&s(b,Ye.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,Zn(O)),M.key=d(b,O.value||"");break;case 4:O.value==null&&s(b,Ye.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,Zn(O)),M.key=l(b,O.value||"");break;case 5:O.value==null&&s(b,Ye.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,Zn(O)),M.key=a(b,O.value||"");break;case 6:O.value==null&&s(b,Ye.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,Zn(O)),M.key=u(b,O.value||"");break;default:{s(b,Ye.UNEXPECTED_EMPTY_LINKED_KEY,L.lastStartLoc,0);const V=b.context(),$=r(7,V.offset,V.startLoc);return $.value="",i($,V.offset,V.startLoc),M.key=$,i(M,V.offset,V.startLoc),{nextConsumeToken:O,node:M}}}return i(M,b.currentOffset(),b.currentPosition()),{node:M}}function _(b){const L=b.context(),M=L.currentType===1?b.currentOffset():L.offset,O=L.currentType===1?L.endLoc:L.startLoc,V=r(2,M,O);V.items=[];let $=null;do{const v=$||b.nextToken();switch($=null,v.type){case 0:v.value==null&&s(b,Ye.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,Zn(v)),V.items.push(o(b,v.value||""));break;case 5:v.value==null&&s(b,Ye.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,Zn(v)),V.items.push(a(b,v.value||""));break;case 4:v.value==null&&s(b,Ye.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,Zn(v)),V.items.push(l(b,v.value||""));break;case 6:v.value==null&&s(b,Ye.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,Zn(v)),V.items.push(u(b,v.value||""));break;case 7:{const P=p(b);V.items.push(P.node),$=P.nextConsumeToken||null;break}}}while(L.currentType!==13&&L.currentType!==1);const y=L.currentType===1?L.lastOffset:b.currentOffset(),g=L.currentType===1?L.lastEndLoc:b.currentPosition();return i(V,y,g),V}function T(b,L,M,O){const V=b.context();let $=O.items.length===0;const y=r(1,L,M);y.cases=[],y.cases.push(O);do{const g=_(b);$||($=g.items.length===0),y.cases.push(g)}while(V.currentType!==13);return $&&s(b,Ye.MUST_HAVE_MESSAGES_IN_PLURAL,M,0),i(y,b.currentOffset(),b.currentPosition()),y}function A(b){const L=b.context(),{offset:M,startLoc:O}=L,V=_(b);return L.currentType===13?V:T(b,M,O,V)}function I(b){const L=NP(b,Pt({},t)),M=L.context(),O=r(0,M.offset,M.startLoc);return e&&O.loc&&(O.loc.source=b),O.body=A(L),t.onCacheKey&&(O.cacheKey=t.onCacheKey(b)),M.currentType!==13&&s(L,Ye.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,b[M.offset]||""),i(O,L.currentOffset(),L.currentPosition()),O}return{parse:I}}function Zn(t){if(t.type===13)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function xP(t,e={}){const n={ast:t,helpers:new Set};return{context:()=>n,helper:i=>(n.helpers.add(i),i)}}function ig(t,e){for(let n=0;n<t.length;n++)Xf(t[n],e)}function Xf(t,e){switch(t.type){case 1:ig(t.cases,e),e.helper("plural");break;case 2:ig(t.items,e);break;case 6:{Xf(t.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function FP(t,e={}){const n=xP(t);n.helper("normalize"),t.body&&Xf(t.body,n);const s=n.context();t.helpers=Array.from(s.helpers)}function VP(t){const e=t.body;return e.type===2?og(e):e.cases.forEach(n=>og(n)),t}function og(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let n=0;n<t.items.length;n++){const s=t.items[n];if(!(s.type===3||s.type===9)||s.value==null)break;e.push(s.value)}if(e.length===t.items.length){t.static=Qf(e);for(let n=0;n<t.items.length;n++){const s=t.items[n];(s.type===3||s.type===9)&&delete s.value}}}}function Pi(t){switch(t.t=t.type,t.type){case 0:{const e=t;Pi(e.body),e.b=e.body,delete e.body;break}case 1:{const e=t,n=e.cases;for(let s=0;s<n.length;s++)Pi(n[s]);e.c=n,delete e.cases;break}case 2:{const e=t,n=e.items;for(let s=0;s<n.length;s++)Pi(n[s]);e.i=n,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=t;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=t;Pi(e.key),e.k=e.key,delete e.key,e.modifier&&(Pi(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=t;e.i=e.index,delete e.index;break}case 4:{const e=t;e.k=e.key,delete e.key;break}}delete t.type}function UP(t,e){const{sourceMap:n,filename:s,breakLineCode:r,needIndent:i}=e,o=e.location!==!1,a={filename:s,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:r,needIndent:i,indentLevel:0};o&&t.loc&&(a.source=t.loc.source);const l=()=>a;function u(I,b){a.code+=I}function h(I,b=!0){const L=b?r:"";u(i?L+"  ".repeat(I):L)}function d(I=!0){const b=++a.indentLevel;I&&h(b)}function p(I=!0){const b=--a.indentLevel;I&&h(b)}function _(){h(a.indentLevel)}return{context:l,push:u,indent:d,deindent:p,newline:_,helper:I=>`_${I}`,needIndent:()=>a.needIndent}}function $P(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),Ji(t,e.key),e.modifier?(t.push(", "),Ji(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function BP(t,e){const{helper:n,needIndent:s}=t;t.push(`${n("normalize")}([`),t.indent(s());const r=e.items.length;for(let i=0;i<r&&(Ji(t,e.items[i]),i!==r-1);i++)t.push(", ");t.deindent(s()),t.push("])")}function jP(t,e){const{helper:n,needIndent:s}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(s());const r=e.cases.length;for(let i=0;i<r&&(Ji(t,e.cases[i]),i!==r-1);i++)t.push(", ");t.deindent(s()),t.push("])")}}function HP(t,e){e.body?Ji(t,e.body):t.push("null")}function Ji(t,e){const{helper:n}=t;switch(e.type){case 0:HP(t,e);break;case 1:jP(t,e);break;case 2:BP(t,e);break;case 6:$P(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break}}const WP=(t,e={})=>{const n=ae(e.mode)?e.mode:"normal",s=ae(e.filename)?e.filename:"message.intl",r=!!e.sourceMap,i=e.breakLineCode!=null?e.breakLineCode:n==="arrow"?";":`
`,o=e.needIndent?e.needIndent:n!=="arrow",a=t.helpers||[],l=UP(t,{mode:n,filename:s,sourceMap:r,breakLineCode:i,needIndent:o});l.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),l.indent(o),a.length>0&&(l.push(`const { ${Qf(a.map(d=>`${d}: _${d}`),", ")} } = ctx`),l.newline()),l.push("return "),Ji(l,t),l.deindent(o),l.push("}"),delete t.helpers;const{code:u,map:h}=l.context();return{ast:t,code:u,map:h?h.toJSON():void 0}};function qP(t,e={}){const n=Pt({},e),s=!!n.jit,r=!!n.minify,i=n.optimize==null?!0:n.optimize,a=MP(n).parse(t);return s?(i&&VP(a),r&&Pi(a),{ast:a,code:""}):(FP(a,n),WP(a,n))}/*!
  * core-base v10.0.5
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */function KP(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Gr().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Gr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}function Sh(t){return n=>GP(n,t)}function GP(t,e){const n=YP(e);if(n==null)throw Pa(0);if(Jf(n)===1){const i=XP(n);return t.plural(i.reduce((o,a)=>[...o,ag(t,a)],[]))}else return ag(t,n)}const zP=["b","body"];function YP(t){return Cr(t,zP)}const QP=["c","cases"];function XP(t){return Cr(t,QP,[])}function ag(t,e){const n=ZP(e);if(n!=null)return t.type==="text"?n:t.normalize([n]);{const s=tk(e).reduce((r,i)=>[...r,Cd(t,i)],[]);return t.normalize(s)}}const JP=["s","static"];function ZP(t){return Cr(t,JP)}const ek=["i","items"];function tk(t){return Cr(t,ek,[])}function Cd(t,e){const n=Jf(e);switch(n){case 3:return Dl(e,n);case 9:return Dl(e,n);case 4:{const s=e;if(Vn(s,"k")&&s.k)return t.interpolate(t.named(s.k));if(Vn(s,"key")&&s.key)return t.interpolate(t.named(s.key));throw Pa(n)}case 5:{const s=e;if(Vn(s,"i")&&Tt(s.i))return t.interpolate(t.list(s.i));if(Vn(s,"index")&&Tt(s.index))return t.interpolate(t.list(s.index));throw Pa(n)}case 6:{const s=e,r=ik(s),i=ak(s);return t.linked(Cd(t,i),r?Cd(t,r):void 0,t.type)}case 7:return Dl(e,n);case 8:return Dl(e,n);default:throw new Error(`unhandled node on format message part: ${n}`)}}const nk=["t","type"];function Jf(t){return Cr(t,nk)}const sk=["v","value"];function Dl(t,e){const n=Cr(t,sk);if(n)return n;throw Pa(e)}const rk=["m","modifier"];function ik(t){return Cr(t,rk)}const ok=["k","key"];function ak(t){const e=Cr(t,ok);if(e)return e;throw Pa(6)}function Cr(t,e,n){for(let s=0;s<e.length;s++){const r=e[s];if(Vn(t,r)&&t[r]!=null)return t[r]}return n}function Pa(t){return new Error(`unhandled node type: ${t}`)}const lk=t=>t;let Ml=Xe();function Zi(t){return He(t)&&Jf(t)===0&&(Vn(t,"b")||Vn(t,"body"))}function ck(t,e={}){let n=!1;const s=e.onError||bP;return e.onError=r=>{n=!0,s(r)},{...qP(t,e),detectError:n}}function uk(t,e){if(!__INTLIFY_DROP_MESSAGE_COMPILER__&&ae(t)){$e(e.warnHtmlMessage)&&e.warnHtmlMessage;const s=(e.onCacheKey||lk)(t),r=Ml[s];if(r)return r;const{ast:i,detectError:o}=ck(t,{...e,location:!1,jit:!0}),a=Sh(i);return o?a:Ml[s]=a}else{const n=t.cacheKey;if(n){const s=Ml[n];return s||(Ml[n]=Sh(t))}else return Sh(t)}}let ka=null;function hk(t){ka=t}function dk(t,e,n){ka&&ka.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:n})}const fk=pk("function:translate");function pk(t){return e=>ka&&ka.emit(t,e)}const ks={INVALID_ARGUMENT:IP,INVALID_DATE_ARGUMENT:18,INVALID_ISO_DATE_ARGUMENT:19,NOT_SUPPORT_NON_STRING_MESSAGE:20,NOT_SUPPORT_LOCALE_PROMISE_VALUE:21,NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:22,NOT_SUPPORT_LOCALE_TYPE:23},mk=24;function Ns(t){return Tu(t,null,void 0)}function Zf(t,e){return e.locale!=null?lg(e.locale):lg(t.locale)}let Ah;function lg(t){if(ae(t))return t;if(ot(t)){if(t.resolvedOnce&&Ah!=null)return Ah;if(t.constructor.name==="Function"){const e=t();if(vP(e))throw Ns(ks.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return Ah=e}else throw Ns(ks.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw Ns(ks.NOT_SUPPORT_LOCALE_TYPE)}function _k(t,e,n){return[...new Set([n,...gt(e)?e:He(e)?Object.keys(e):ae(e)?[e]:[n]])]}function iw(t,e,n){const s=ae(n)?n:Na,r=t;r.__localeChainCache||(r.__localeChainCache=new Map);let i=r.__localeChainCache.get(s);if(!i){i=[];let o=[n];for(;gt(o);)o=cg(i,o,e);const a=gt(e)||!Ce(e)?e:e.default?e.default:null;o=ae(a)?[a]:a,gt(o)&&cg(i,o,!1),r.__localeChainCache.set(s,i)}return i}function cg(t,e,n){let s=!0;for(let r=0;r<e.length&&$e(s);r++){const i=e[r];ae(i)&&(s=gk(t,e[r],n))}return s}function gk(t,e,n){let s;const r=e.split("-");do{const i=r.join("-");s=yk(t,i,n),r.splice(-1,1)}while(r.length&&s===!0);return s}function yk(t,e,n){let s=!1;if(!t.includes(e)&&(s=!0,e)){s=e[e.length-1]!=="!";const r=e.replace(/!/g,"");t.push(r),(gt(n)||Ce(n))&&n[r]&&(s=n[r])}return s}const Sr=[];Sr[0]={w:[0],i:[3,0],"[":[4],o:[7]};Sr[1]={w:[1],".":[2],"[":[4],o:[7]};Sr[2]={w:[2],i:[3,0],0:[3,0]};Sr[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};Sr[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};Sr[5]={"'":[4,0],o:8,l:[5,0]};Sr[6]={'"':[4,0],o:8,l:[6,0]};const vk=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function Ek(t){return vk.test(t)}function Tk(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function wk(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function Ik(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:Ek(e)?Tk(e):"*"+e}function bk(t){const e=[];let n=-1,s=0,r=0,i,o,a,l,u,h,d;const p=[];p[0]=()=>{o===void 0?o=a:o+=a},p[1]=()=>{o!==void 0&&(e.push(o),o=void 0)},p[2]=()=>{p[0](),r++},p[3]=()=>{if(r>0)r--,s=4,p[0]();else{if(r=0,o===void 0||(o=Ik(o),o===!1))return!1;p[1]()}};function _(){const T=t[n+1];if(s===5&&T==="'"||s===6&&T==='"')return n++,a="\\"+T,p[0](),!0}for(;s!==null;)if(n++,i=t[n],!(i==="\\"&&_())){if(l=wk(i),d=Sr[s],u=d[l]||d.l||8,u===8||(s=u[0],u[1]!==void 0&&(h=p[u[1]],h&&(a=i,h()===!1))))return;if(s===7)return e}}const ug=new Map;function Rk(t,e){return He(t)?t[e]:null}function Ck(t,e){if(!He(t))return null;let n=ug.get(e);if(n||(n=bk(e),n&&ug.set(e,n)),!n)return null;const s=n.length;let r=t,i=0;for(;i<s;){const o=r[n[i]];if(o===void 0||ot(r))return null;r=o,i++}return r}const Sk="10.0.5",wu=-1,Na="en-US",hg="",dg=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function Ak(){return{upper:(t,e)=>e==="text"&&ae(t)?t.toUpperCase():e==="vnode"&&He(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&ae(t)?t.toLowerCase():e==="vnode"&&He(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&ae(t)?dg(t):e==="vnode"&&He(t)&&"__v_isVNode"in t?dg(t.children):t}}let ow;function Pk(t){ow=t}let aw;function kk(t){aw=t}let lw;function Nk(t){lw=t}let cw=null;const Ok=t=>{cw=t},Lk=()=>cw;let uw=null;const fg=t=>{uw=t},Dk=()=>uw;let pg=0;function Mk(t={}){const e=ot(t.onWarn)?t.onWarn:TP,n=ae(t.version)?t.version:Sk,s=ae(t.locale)||ot(t.locale)?t.locale:Na,r=ot(s)?Na:s,i=gt(t.fallbackLocale)||Ce(t.fallbackLocale)||ae(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:r,o=Ce(t.messages)?t.messages:Ph(r),a=Ce(t.datetimeFormats)?t.datetimeFormats:Ph(r),l=Ce(t.numberFormats)?t.numberFormats:Ph(r),u=Pt(Xe(),t.modifiers,Ak()),h=t.pluralRules||Xe(),d=ot(t.missing)?t.missing:null,p=$e(t.missingWarn)||Xi(t.missingWarn)?t.missingWarn:!0,_=$e(t.fallbackWarn)||Xi(t.fallbackWarn)?t.fallbackWarn:!0,T=!!t.fallbackFormat,A=!!t.unresolving,I=ot(t.postTranslation)?t.postTranslation:null,b=Ce(t.processor)?t.processor:null,L=$e(t.warnHtmlMessage)?t.warnHtmlMessage:!0,M=!!t.escapeParameter,O=ot(t.messageCompiler)?t.messageCompiler:ow,V=ot(t.messageResolver)?t.messageResolver:aw||Rk,$=ot(t.localeFallbacker)?t.localeFallbacker:lw||_k,y=He(t.fallbackContext)?t.fallbackContext:void 0,g=t,v=He(g.__datetimeFormatters)?g.__datetimeFormatters:new Map,P=He(g.__numberFormatters)?g.__numberFormatters:new Map,D=He(g.__meta)?g.__meta:{};pg++;const k={version:n,cid:pg,locale:s,fallbackLocale:i,messages:o,modifiers:u,pluralRules:h,missing:d,missingWarn:p,fallbackWarn:_,fallbackFormat:T,unresolving:A,postTranslation:I,processor:b,warnHtmlMessage:L,escapeParameter:M,messageCompiler:O,messageResolver:V,localeFallbacker:$,fallbackContext:y,onWarn:e,__meta:D};return k.datetimeFormats=a,k.numberFormats=l,k.__datetimeFormatters=v,k.__numberFormatters=P,__INTLIFY_PROD_DEVTOOLS__&&dk(k,n,D),k}const Ph=t=>({[t]:Xe()});function ep(t,e,n,s,r){const{missing:i,onWarn:o}=t;if(i!==null){const a=i(t,n,e,r);return ae(a)?a:e}else return e}function Bo(t,e,n){const s=t;s.__localeChainCache=new Map,t.localeFallbacker(t,n,e)}function xk(t,e){return t===e?!1:t.split("-")[0]===e.split("-")[0]}function Fk(t,e){const n=e.indexOf(t);if(n===-1)return!1;for(let s=n+1;s<e.length;s++)if(xk(t,e[s]))return!0;return!1}function mg(t,...e){const{datetimeFormats:n,unresolving:s,fallbackLocale:r,onWarn:i,localeFallbacker:o}=t,{__datetimeFormatters:a}=t,[l,u,h,d]=Sd(...e),p=$e(h.missingWarn)?h.missingWarn:t.missingWarn;$e(h.fallbackWarn)?h.fallbackWarn:t.fallbackWarn;const _=!!h.part,T=Zf(t,h),A=o(t,r,T);if(!ae(l)||l==="")return new Intl.DateTimeFormat(T,d).format(u);let I={},b,L=null;const M="datetime format";for(let $=0;$<A.length&&(b=A[$],I=n[b]||{},L=I[l],!Ce(L));$++)ep(t,l,b,p,M);if(!Ce(L)||!ae(b))return s?wu:l;let O=`${b}__${l}`;Eu(d)||(O=`${O}__${JSON.stringify(d)}`);let V=a.get(O);return V||(V=new Intl.DateTimeFormat(b,Pt({},L,d)),a.set(O,V)),_?V.formatToParts(u):V.format(u)}const hw=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function Sd(...t){const[e,n,s,r]=t,i=Xe();let o=Xe(),a;if(ae(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw Ns(ks.INVALID_ISO_DATE_ARGUMENT);const u=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();a=new Date(u);try{a.toISOString()}catch{throw Ns(ks.INVALID_ISO_DATE_ARGUMENT)}}else if(_P(e)){if(isNaN(e.getTime()))throw Ns(ks.INVALID_DATE_ARGUMENT);a=e}else if(Tt(e))a=e;else throw Ns(ks.INVALID_ARGUMENT);return ae(n)?i.key=n:Ce(n)&&Object.keys(n).forEach(l=>{hw.includes(l)?o[l]=n[l]:i[l]=n[l]}),ae(s)?i.locale=s:Ce(s)&&(o=s),Ce(r)&&(o=r),[i.key||"",a,i,o]}function _g(t,e,n){const s=t;for(const r in n){const i=`${e}__${r}`;s.__datetimeFormatters.has(i)&&s.__datetimeFormatters.delete(i)}}function gg(t,...e){const{numberFormats:n,unresolving:s,fallbackLocale:r,onWarn:i,localeFallbacker:o}=t,{__numberFormatters:a}=t,[l,u,h,d]=Ad(...e),p=$e(h.missingWarn)?h.missingWarn:t.missingWarn;$e(h.fallbackWarn)?h.fallbackWarn:t.fallbackWarn;const _=!!h.part,T=Zf(t,h),A=o(t,r,T);if(!ae(l)||l==="")return new Intl.NumberFormat(T,d).format(u);let I={},b,L=null;const M="number format";for(let $=0;$<A.length&&(b=A[$],I=n[b]||{},L=I[l],!Ce(L));$++)ep(t,l,b,p,M);if(!Ce(L)||!ae(b))return s?wu:l;let O=`${b}__${l}`;Eu(d)||(O=`${O}__${JSON.stringify(d)}`);let V=a.get(O);return V||(V=new Intl.NumberFormat(b,Pt({},L,d)),a.set(O,V)),_?V.formatToParts(u):V.format(u)}const dw=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Ad(...t){const[e,n,s,r]=t,i=Xe();let o=Xe();if(!Tt(e))throw Ns(ks.INVALID_ARGUMENT);const a=e;return ae(n)?i.key=n:Ce(n)&&Object.keys(n).forEach(l=>{dw.includes(l)?o[l]=n[l]:i[l]=n[l]}),ae(s)?i.locale=s:Ce(s)&&(o=s),Ce(r)&&(o=r),[i.key||"",a,i,o]}function yg(t,e,n){const s=t;for(const r in n){const i=`${e}__${r}`;s.__numberFormatters.has(i)&&s.__numberFormatters.delete(i)}}const Vk=t=>t,Uk=t=>"",$k="text",Bk=t=>t.length===0?"":Qf(t),jk=EP;function vg(t,e){return t=Math.abs(t),e===2?t?t>1?1:0:1:t?Math.min(t,2):0}function Hk(t){const e=Tt(t.pluralIndex)?t.pluralIndex:-1;return t.named&&(Tt(t.named.count)||Tt(t.named.n))?Tt(t.named.count)?t.named.count:Tt(t.named.n)?t.named.n:e:e}function Wk(t,e){e.count||(e.count=t),e.n||(e.n=t)}function qk(t={}){const e=t.locale,n=Hk(t),s=He(t.pluralRules)&&ae(e)&&ot(t.pluralRules[e])?t.pluralRules[e]:vg,r=He(t.pluralRules)&&ae(e)&&ot(t.pluralRules[e])?vg:void 0,i=b=>b[s(n,b.length,r)],o=t.list||[],a=b=>o[b],l=t.named||Xe();Tt(t.pluralIndex)&&Wk(n,l);const u=b=>l[b];function h(b,L){const M=ot(t.messages)?t.messages(b,!!L):He(t.messages)?t.messages[b]:!1;return M||(t.parent?t.parent.message(b):Uk)}const d=b=>t.modifiers?t.modifiers[b]:Vk,p=Ce(t.processor)&&ot(t.processor.normalize)?t.processor.normalize:Bk,_=Ce(t.processor)&&ot(t.processor.interpolate)?t.processor.interpolate:jk,T=Ce(t.processor)&&ae(t.processor.type)?t.processor.type:$k,I={list:a,named:u,plural:i,linked:(b,...L)=>{const[M,O]=L;let V="text",$="";L.length===1?He(M)?($=M.modifier||$,V=M.type||V):ae(M)&&($=M||$):L.length===2&&(ae(M)&&($=M||$),ae(O)&&(V=O||V));const y=h(b,!0)(I),g=V==="vnode"&&gt(y)&&$?y[0]:y;return $?d($)(g,V):g},message:h,type:T,interpolate:_,normalize:p,values:Pt(Xe(),o,l)};return I}const Eg=()=>"",Pn=t=>ot(t);function Tg(t,...e){const{fallbackFormat:n,postTranslation:s,unresolving:r,messageCompiler:i,fallbackLocale:o,messages:a}=t,[l,u]=Pd(...e),h=$e(u.missingWarn)?u.missingWarn:t.missingWarn,d=$e(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn,p=$e(u.escapeParameter)?u.escapeParameter:t.escapeParameter,_=!!u.resolvedMessage,T=ae(u.default)||$e(u.default)?$e(u.default)?i?l:()=>l:u.default:n?i?l:()=>l:null,A=n||T!=null&&(ae(T)||ot(T)),I=Zf(t,u);p&&Kk(u);let[b,L,M]=_?[l,I,a[I]||Xe()]:fw(t,l,I,o,d,h),O=b,V=l;if(!_&&!(ae(O)||Zi(O)||Pn(O))&&A&&(O=T,V=O),!_&&(!(ae(O)||Zi(O)||Pn(O))||!ae(L)))return r?wu:l;let $=!1;const y=()=>{$=!0},g=Pn(O)?O:pw(t,l,L,O,V,y);if($)return O;const v=Yk(t,L,M,u),P=qk(v),D=Gk(t,g,P),k=s?s(D,l):D;if(__INTLIFY_PROD_DEVTOOLS__){const S={timestamp:Date.now(),key:ae(l)?l:Pn(O)?O.key:"",locale:L||(Pn(O)?O.locale:""),format:ae(O)?O:Pn(O)?O.source:"",message:k};S.meta=Pt({},t.__meta,Lk()||{}),fk(S)}return k}function Kk(t){gt(t.list)?t.list=t.list.map(e=>ae(e)?sg(e):e):He(t.named)&&Object.keys(t.named).forEach(e=>{ae(t.named[e])&&(t.named[e]=sg(t.named[e]))})}function fw(t,e,n,s,r,i){const{messages:o,onWarn:a,messageResolver:l,localeFallbacker:u}=t,h=u(t,s,n);let d=Xe(),p,_=null;const T="translate";for(let A=0;A<h.length&&(p=h[A],d=o[p]||Xe(),(_=l(d,e))===null&&(_=d[e]),!(ae(_)||Zi(_)||Pn(_)));A++)if(!Fk(p,h)){const I=ep(t,e,p,i,T);I!==e&&(_=I)}return[_,p,d]}function pw(t,e,n,s,r,i){const{messageCompiler:o,warnHtmlMessage:a}=t;if(Pn(s)){const u=s;return u.locale=u.locale||n,u.key=u.key||e,u}if(o==null){const u=()=>s;return u.locale=n,u.key=e,u}const l=o(s,zk(t,n,r,s,a,i));return l.locale=n,l.key=e,l.source=s,l}function Gk(t,e,n){return e(n)}function Pd(...t){const[e,n,s]=t,r=Xe();if(!ae(e)&&!Tt(e)&&!Pn(e)&&!Zi(e))throw Ns(ks.INVALID_ARGUMENT);const i=Tt(e)?String(e):(Pn(e),e);return Tt(n)?r.plural=n:ae(n)?r.default=n:Ce(n)&&!Eu(n)?r.named=n:gt(n)&&(r.list=n),Tt(s)?r.plural=s:ae(s)?r.default=s:Ce(s)&&Pt(r,s),[i,r]}function zk(t,e,n,s,r,i){return{locale:e,key:n,warnHtmlMessage:r,onError:o=>{throw i&&i(o),o},onCacheKey:o=>pP(e,n,o)}}function Yk(t,e,n,s){const{modifiers:r,pluralRules:i,messageResolver:o,fallbackLocale:a,fallbackWarn:l,missingWarn:u,fallbackContext:h}=t,p={locale:e,modifiers:r,pluralRules:i,messages:(_,T)=>{let A=o(n,_);if(A==null&&(h||T)){const[,,I]=fw(h||t,_,e,a,l,u);A=o(I,_)}if(ae(A)||Zi(A)){let I=!1;const L=pw(t,_,e,A,_,()=>{I=!0});return I?Eg:L}else return Pn(A)?A:Eg}};return t.processor&&(p.processor=t.processor),s.list&&(p.list=s.list),s.named&&(p.named=s.named),Tt(s.plural)&&(p.pluralIndex=s.plural),p}KP();/*!
  * vue-i18n v10.0.5
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */const Qk="10.0.5";function Xk(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(Gr().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(Gr().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Gr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Gr().__INTLIFY_PROD_DEVTOOLS__=!1)}const un={UNEXPECTED_RETURN_TYPE:mk,INVALID_ARGUMENT:25,MUST_BE_CALL_SETUP_TOP:26,NOT_INSTALLED:27,REQUIRED_VALUE:28,INVALID_VALUE:29,CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:30,NOT_INSTALLED_WITH_PROVIDE:31,UNEXPECTED_ERROR:32,NOT_COMPATIBLE_LEGACY_VUE_I18N:33,NOT_AVAILABLE_COMPOSITION_IN_LEGACY:34};function yn(t,...e){return Tu(t,null,void 0)}const kd=Rr("__translateVNode"),Nd=Rr("__datetimeParts"),Od=Rr("__numberParts"),mw=Rr("__setPluralRules"),_w=Rr("__injectWithOption"),Ld=Rr("__dispose");function Oa(t){if(!He(t))return t;for(const e in t)if(Vn(t,e))if(!e.includes("."))He(t[e])&&Oa(t[e]);else{const n=e.split("."),s=n.length-1;let r=t,i=!1;for(let o=0;o<s;o++){if(n[o]in r||(r[n[o]]=Xe()),!He(r[n[o]])){i=!0;break}r=r[n[o]]}i||(r[n[s]]=t[e],delete t[e]),He(r[n[s]])&&Oa(r[n[s]])}return t}function tp(t,e){const{messages:n,__i18n:s,messageResolver:r,flatJson:i}=e,o=Ce(n)?n:gt(s)?Xe():{[t]:Xe()};if(gt(s)&&s.forEach(a=>{if("locale"in a&&"resource"in a){const{locale:l,resource:u}=a;l?(o[l]=o[l]||Xe(),nc(u,o[l])):nc(u,o)}else ae(a)&&nc(JSON.parse(a),o)}),r==null&&i)for(const a in o)Vn(o,a)&&Oa(o[a]);return o}function gw(t){return t.type}function yw(t,e,n){let s=He(e.messages)?e.messages:Xe();"__i18nGlobal"in n&&(s=tp(t.locale.value,{messages:s,__i18n:n.__i18nGlobal}));const r=Object.keys(s);r.length&&r.forEach(i=>{t.mergeLocaleMessage(i,s[i])});{if(He(e.datetimeFormats)){const i=Object.keys(e.datetimeFormats);i.length&&i.forEach(o=>{t.mergeDateTimeFormat(o,e.datetimeFormats[o])})}if(He(e.numberFormats)){const i=Object.keys(e.numberFormats);i.length&&i.forEach(o=>{t.mergeNumberFormat(o,e.numberFormats[o])})}}}function wg(t){return ce(Ya,null,t,0)}const Ig="__INTLIFY_META__",bg=()=>[],Jk=()=>!1;let Rg=0;function Cg(t){return(e,n,s,r)=>t(n,s,gr()||void 0,r)}const Zk=()=>{const t=gr();let e=null;return t&&(e=gw(t)[Ig])?{[Ig]:e}:null};function np(t={}){const{__root:e,__injectWithOption:n}=t,s=e===void 0,r=t.flatJson,i=bc?Ie:ME;let o=$e(t.inheritLocale)?t.inheritLocale:!0;const a=i(e&&o?e.locale.value:ae(t.locale)?t.locale:Na),l=i(e&&o?e.fallbackLocale.value:ae(t.fallbackLocale)||gt(t.fallbackLocale)||Ce(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:a.value),u=i(tp(a.value,t)),h=i(Ce(t.datetimeFormats)?t.datetimeFormats:{[a.value]:{}}),d=i(Ce(t.numberFormats)?t.numberFormats:{[a.value]:{}});let p=e?e.missingWarn:$e(t.missingWarn)||Xi(t.missingWarn)?t.missingWarn:!0,_=e?e.fallbackWarn:$e(t.fallbackWarn)||Xi(t.fallbackWarn)?t.fallbackWarn:!0,T=e?e.fallbackRoot:$e(t.fallbackRoot)?t.fallbackRoot:!0,A=!!t.fallbackFormat,I=ot(t.missing)?t.missing:null,b=ot(t.missing)?Cg(t.missing):null,L=ot(t.postTranslation)?t.postTranslation:null,M=e?e.warnHtmlMessage:$e(t.warnHtmlMessage)?t.warnHtmlMessage:!0,O=!!t.escapeParameter;const V=e?e.modifiers:Ce(t.modifiers)?t.modifiers:{};let $=t.pluralRules||e&&e.pluralRules,y;y=(()=>{s&&fg(null);const x={version:Qk,locale:a.value,fallbackLocale:l.value,messages:u.value,modifiers:V,pluralRules:$,missing:b===null?void 0:b,missingWarn:p,fallbackWarn:_,fallbackFormat:A,unresolving:!0,postTranslation:L===null?void 0:L,warnHtmlMessage:M,escapeParameter:O,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};x.datetimeFormats=h.value,x.numberFormats=d.value,x.__datetimeFormatters=Ce(y)?y.__datetimeFormatters:void 0,x.__numberFormatters=Ce(y)?y.__numberFormatters:void 0;const j=Mk(x);return s&&fg(j),j})(),Bo(y,a.value,l.value);function v(){return[a.value,l.value,u.value,h.value,d.value]}const P=ft({get:()=>a.value,set:x=>{a.value=x,y.locale=a.value}}),D=ft({get:()=>l.value,set:x=>{l.value=x,y.fallbackLocale=l.value,Bo(y,a.value,x)}}),k=ft(()=>u.value),S=ft(()=>h.value),we=ft(()=>d.value);function Ze(){return ot(L)?L:null}function ke(x){L=x,y.postTranslation=x}function fe(){return I}function Ee(x){x!==null&&(b=Cg(x)),I=x,y.missing=b}const st=(x,j,ee,ie,Re,Ae)=>{v();let dt;try{__INTLIFY_PROD_DEVTOOLS__,s||(y.fallbackContext=e?Dk():void 0),dt=x(y)}finally{__INTLIFY_PROD_DEVTOOLS__,s||(y.fallbackContext=void 0)}if(ee!=="translate exists"&&Tt(dt)&&dt===wu||ee==="translate exists"&&!dt){const[bt,Nt]=j();return e&&T?ie(e):Re(bt)}else{if(Ae(dt))return dt;throw yn(un.UNEXPECTED_RETURN_TYPE)}};function kt(...x){return st(j=>Reflect.apply(Tg,null,[j,...x]),()=>Pd(...x),"translate",j=>Reflect.apply(j.t,j,[...x]),j=>j,j=>ae(j))}function St(...x){const[j,ee,ie]=x;if(ie&&!He(ie))throw yn(un.INVALID_ARGUMENT);return kt(j,ee,Pt({resolvedMessage:!0},ie||{}))}function We(...x){return st(j=>Reflect.apply(mg,null,[j,...x]),()=>Sd(...x),"datetime format",j=>Reflect.apply(j.d,j,[...x]),()=>hg,j=>ae(j))}function qe(...x){return st(j=>Reflect.apply(gg,null,[j,...x]),()=>Ad(...x),"number format",j=>Reflect.apply(j.n,j,[...x]),()=>hg,j=>ae(j))}function Fe(x){return x.map(j=>ae(j)||Tt(j)||$e(j)?wg(String(j)):j)}const It={normalize:Fe,interpolate:x=>x,type:"vnode"};function G(...x){return st(j=>{let ee;const ie=j;try{ie.processor=It,ee=Reflect.apply(Tg,null,[ie,...x])}finally{ie.processor=null}return ee},()=>Pd(...x),"translate",j=>j[kd](...x),j=>[wg(j)],j=>gt(j))}function se(...x){return st(j=>Reflect.apply(gg,null,[j,...x]),()=>Ad(...x),"number format",j=>j[Od](...x),bg,j=>ae(j)||gt(j))}function X(...x){return st(j=>Reflect.apply(mg,null,[j,...x]),()=>Sd(...x),"datetime format",j=>j[Nd](...x),bg,j=>ae(j)||gt(j))}function oe(x){$=x,y.pluralRules=$}function Se(x,j){return st(()=>{if(!x)return!1;const ee=ae(j)?j:a.value,ie=N(ee),Re=y.messageResolver(ie,x);return Zi(Re)||Pn(Re)||ae(Re)},()=>[x],"translate exists",ee=>Reflect.apply(ee.te,ee,[x,j]),Jk,ee=>$e(ee))}function Be(x){let j=null;const ee=iw(y,l.value,a.value);for(let ie=0;ie<ee.length;ie++){const Re=u.value[ee[ie]]||{},Ae=y.messageResolver(Re,x);if(Ae!=null){j=Ae;break}}return j}function R(x){const j=Be(x);return j??(e?e.tm(x)||{}:{})}function N(x){return u.value[x]||{}}function B(x,j){if(r){const ee={[x]:j};for(const ie in ee)Vn(ee,ie)&&Oa(ee[ie]);j=ee[x]}u.value[x]=j,y.messages=u.value}function Q(x,j){u.value[x]=u.value[x]||{};const ee={[x]:j};if(r)for(const ie in ee)Vn(ee,ie)&&Oa(ee[ie]);j=ee[x],nc(j,u.value[x]),y.messages=u.value}function z(x){return h.value[x]||{}}function w(x,j){h.value[x]=j,y.datetimeFormats=h.value,_g(y,x,j)}function C(x,j){h.value[x]=Pt(h.value[x]||{},j),y.datetimeFormats=h.value,_g(y,x,j)}function F(x){return d.value[x]||{}}function W(x,j){d.value[x]=j,y.numberFormats=d.value,yg(y,x,j)}function Y(x,j){d.value[x]=Pt(d.value[x]||{},j),y.numberFormats=d.value,yg(y,x,j)}Rg++,e&&bc&&(os(e.locale,x=>{o&&(a.value=x,y.locale=x,Bo(y,a.value,l.value))}),os(e.fallbackLocale,x=>{o&&(l.value=x,y.fallbackLocale=x,Bo(y,a.value,l.value))}));const Z={id:Rg,locale:P,fallbackLocale:D,get inheritLocale(){return o},set inheritLocale(x){o=x,x&&e&&(a.value=e.locale.value,l.value=e.fallbackLocale.value,Bo(y,a.value,l.value))},get availableLocales(){return Object.keys(u.value).sort()},messages:k,get modifiers(){return V},get pluralRules(){return $||{}},get isGlobal(){return s},get missingWarn(){return p},set missingWarn(x){p=x,y.missingWarn=p},get fallbackWarn(){return _},set fallbackWarn(x){_=x,y.fallbackWarn=_},get fallbackRoot(){return T},set fallbackRoot(x){T=x},get fallbackFormat(){return A},set fallbackFormat(x){A=x,y.fallbackFormat=A},get warnHtmlMessage(){return M},set warnHtmlMessage(x){M=x,y.warnHtmlMessage=x},get escapeParameter(){return O},set escapeParameter(x){O=x,y.escapeParameter=x},t:kt,getLocaleMessage:N,setLocaleMessage:B,mergeLocaleMessage:Q,getPostTranslationHandler:Ze,setPostTranslationHandler:ke,getMissingHandler:fe,setMissingHandler:Ee,[mw]:oe};return Z.datetimeFormats=S,Z.numberFormats=we,Z.rt=St,Z.te=Se,Z.tm=R,Z.d=We,Z.n=qe,Z.getDateTimeFormat=z,Z.setDateTimeFormat=w,Z.mergeDateTimeFormat=C,Z.getNumberFormat=F,Z.setNumberFormat=W,Z.mergeNumberFormat=Y,Z[_w]=n,Z[kd]=G,Z[Nd]=X,Z[Od]=se,Z}function eN(t){const e=ae(t.locale)?t.locale:Na,n=ae(t.fallbackLocale)||gt(t.fallbackLocale)||Ce(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:e,s=ot(t.missing)?t.missing:void 0,r=$e(t.silentTranslationWarn)||Xi(t.silentTranslationWarn)?!t.silentTranslationWarn:!0,i=$e(t.silentFallbackWarn)||Xi(t.silentFallbackWarn)?!t.silentFallbackWarn:!0,o=$e(t.fallbackRoot)?t.fallbackRoot:!0,a=!!t.formatFallbackMessages,l=Ce(t.modifiers)?t.modifiers:{},u=t.pluralizationRules,h=ot(t.postTranslation)?t.postTranslation:void 0,d=ae(t.warnHtmlInMessage)?t.warnHtmlInMessage!=="off":!0,p=!!t.escapeParameterHtml,_=$e(t.sync)?t.sync:!0;let T=t.messages;if(Ce(t.sharedMessages)){const V=t.sharedMessages;T=Object.keys(V).reduce((y,g)=>{const v=y[g]||(y[g]={});return Pt(v,V[g]),y},T||{})}const{__i18n:A,__root:I,__injectWithOption:b}=t,L=t.datetimeFormats,M=t.numberFormats,O=t.flatJson;return{locale:e,fallbackLocale:n,messages:T,flatJson:O,datetimeFormats:L,numberFormats:M,missing:s,missingWarn:r,fallbackWarn:i,fallbackRoot:o,fallbackFormat:a,modifiers:l,pluralRules:u,postTranslation:h,warnHtmlMessage:d,escapeParameter:p,messageResolver:t.messageResolver,inheritLocale:_,__i18n:A,__root:I,__injectWithOption:b}}function Dd(t={}){const e=np(eN(t)),{__extender:n}=t,s={id:e.id,get locale(){return e.locale.value},set locale(r){e.locale.value=r},get fallbackLocale(){return e.fallbackLocale.value},set fallbackLocale(r){e.fallbackLocale.value=r},get messages(){return e.messages.value},get datetimeFormats(){return e.datetimeFormats.value},get numberFormats(){return e.numberFormats.value},get availableLocales(){return e.availableLocales},get missing(){return e.getMissingHandler()},set missing(r){e.setMissingHandler(r)},get silentTranslationWarn(){return $e(e.missingWarn)?!e.missingWarn:e.missingWarn},set silentTranslationWarn(r){e.missingWarn=$e(r)?!r:r},get silentFallbackWarn(){return $e(e.fallbackWarn)?!e.fallbackWarn:e.fallbackWarn},set silentFallbackWarn(r){e.fallbackWarn=$e(r)?!r:r},get modifiers(){return e.modifiers},get formatFallbackMessages(){return e.fallbackFormat},set formatFallbackMessages(r){e.fallbackFormat=r},get postTranslation(){return e.getPostTranslationHandler()},set postTranslation(r){e.setPostTranslationHandler(r)},get sync(){return e.inheritLocale},set sync(r){e.inheritLocale=r},get warnHtmlInMessage(){return e.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(r){e.warnHtmlMessage=r!=="off"},get escapeParameterHtml(){return e.escapeParameter},set escapeParameterHtml(r){e.escapeParameter=r},get pluralizationRules(){return e.pluralRules||{}},__composer:e,t(...r){return Reflect.apply(e.t,e,[...r])},rt(...r){return Reflect.apply(e.rt,e,[...r])},tc(...r){const[i,o,a]=r,l={plural:1};let u=null,h=null;if(!ae(i))throw yn(un.INVALID_ARGUMENT);const d=i;return ae(o)?l.locale=o:Tt(o)?l.plural=o:gt(o)?u=o:Ce(o)&&(h=o),ae(a)?l.locale=a:gt(a)?u=a:Ce(a)&&(h=a),Reflect.apply(e.t,e,[d,u||h||{},l])},te(r,i){return e.te(r,i)},tm(r){return e.tm(r)},getLocaleMessage(r){return e.getLocaleMessage(r)},setLocaleMessage(r,i){e.setLocaleMessage(r,i)},mergeLocaleMessage(r,i){e.mergeLocaleMessage(r,i)},d(...r){return Reflect.apply(e.d,e,[...r])},getDateTimeFormat(r){return e.getDateTimeFormat(r)},setDateTimeFormat(r,i){e.setDateTimeFormat(r,i)},mergeDateTimeFormat(r,i){e.mergeDateTimeFormat(r,i)},n(...r){return Reflect.apply(e.n,e,[...r])},getNumberFormat(r){return e.getNumberFormat(r)},setNumberFormat(r,i){e.setNumberFormat(r,i)},mergeNumberFormat(r,i){e.mergeNumberFormat(r,i)}};return s.__extender=n,s}function tN(t,e,n){return{beforeCreate(){const s=gr();if(!s)throw yn(un.UNEXPECTED_ERROR);const r=this.$options;if(r.i18n){const i=r.i18n;if(r.__i18n&&(i.__i18n=r.__i18n),i.__root=e,this===this.$root)this.$i18n=Sg(t,i);else{i.__injectWithOption=!0,i.__extender=n.__vueI18nExtend,this.$i18n=Dd(i);const o=this.$i18n;o.__extender&&(o.__disposer=o.__extender(this.$i18n))}}else if(r.__i18n)if(this===this.$root)this.$i18n=Sg(t,r);else{this.$i18n=Dd({__i18n:r.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:e});const i=this.$i18n;i.__extender&&(i.__disposer=i.__extender(this.$i18n))}else this.$i18n=t;r.__i18nGlobal&&yw(e,r,r),this.$t=(...i)=>this.$i18n.t(...i),this.$rt=(...i)=>this.$i18n.rt(...i),this.$tc=(...i)=>this.$i18n.tc(...i),this.$te=(i,o)=>this.$i18n.te(i,o),this.$d=(...i)=>this.$i18n.d(...i),this.$n=(...i)=>this.$i18n.n(...i),this.$tm=i=>this.$i18n.tm(i),n.__setInstance(s,this.$i18n)},mounted(){},unmounted(){const s=gr();if(!s)throw yn(un.UNEXPECTED_ERROR);const r=this.$i18n;delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,r.__disposer&&(r.__disposer(),delete r.__disposer,delete r.__extender),n.__deleteInstance(s),delete this.$i18n}}}function Sg(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[mw](e.pluralizationRules||t.pluralizationRules);const n=tp(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(n).forEach(s=>t.mergeLocaleMessage(s,n[s])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(s=>t.mergeDateTimeFormat(s,e.datetimeFormats[s])),e.numberFormats&&Object.keys(e.numberFormats).forEach(s=>t.mergeNumberFormat(s,e.numberFormats[s])),t}const sp={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function nN({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((s,r)=>[...s,...r.type===ut?r.children:[r]],[]):e.reduce((n,s)=>{const r=t[s];return r&&(n[s]=r()),n},Xe())}function vw(){return ut}const sN=vn({name:"i18n-t",props:Pt({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>Tt(t)||!isNaN(t)}},sp),setup(t,e){const{slots:n,attrs:s}=e,r=t.i18n||Iu({useScope:t.scope,__useComponent:!0});return()=>{const i=Object.keys(n).filter(d=>d!=="_"),o=Xe();t.locale&&(o.locale=t.locale),t.plural!==void 0&&(o.plural=ae(t.plural)?+t.plural:t.plural);const a=nN(e,i),l=r[kd](t.keypath,a,o),u=Pt(Xe(),s),h=ae(t.tag)||He(t.tag)?t.tag:vw();return Xa(h,u,l)}}}),Ag=sN;function rN(t){return gt(t)&&!ae(t[0])}function Ew(t,e,n,s){const{slots:r,attrs:i}=e;return()=>{const o={part:!0};let a=Xe();t.locale&&(o.locale=t.locale),ae(t.format)?o.key=t.format:He(t.format)&&(ae(t.format.key)&&(o.key=t.format.key),a=Object.keys(t.format).reduce((p,_)=>n.includes(_)?Pt(Xe(),p,{[_]:t.format[_]}):p,Xe()));const l=s(t.value,o,a);let u=[o.key];gt(l)?u=l.map((p,_)=>{const T=r[p.type],A=T?T({[p.type]:p.value,index:_,parts:l}):[p.value];return rN(A)&&(A[0].key=`${p.type}-${_}`),A}):ae(l)&&(u=[l]);const h=Pt(Xe(),i),d=ae(t.tag)||He(t.tag)?t.tag:vw();return Xa(d,h,u)}}const iN=vn({name:"i18n-n",props:Pt({value:{type:Number,required:!0},format:{type:[String,Object]}},sp),setup(t,e){const n=t.i18n||Iu({useScope:t.scope,__useComponent:!0});return Ew(t,e,dw,(...s)=>n[Od](...s))}}),Pg=iN,oN=vn({name:"i18n-d",props:Pt({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},sp),setup(t,e){const n=t.i18n||Iu({useScope:t.scope,__useComponent:!0});return Ew(t,e,hw,(...s)=>n[Nd](...s))}}),kg=oN;function aN(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const s=n.__getInstance(e);return s!=null?s.__composer:t.global.__composer}}function lN(t){const e=o=>{const{instance:a,value:l}=o;if(!a||!a.$)throw yn(un.UNEXPECTED_ERROR);const u=aN(t,a.$),h=Ng(l);return[Reflect.apply(u.t,u,[...Og(h)]),u]};return{created:(o,a)=>{const[l,u]=e(a);bc&&t.global===u&&(o.__i18nWatcher=os(u.locale,()=>{a.instance&&a.instance.$forceUpdate()})),o.__composer=u,o.textContent=l},unmounted:o=>{bc&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:a})=>{if(o.__composer){const l=o.__composer,u=Ng(a);o.textContent=Reflect.apply(l.t,l,[...Og(u)])}},getSSRProps:o=>{const[a]=e(o);return{textContent:a}}}}function Ng(t){if(ae(t))return{path:t};if(Ce(t)){if(!("path"in t))throw yn(un.REQUIRED_VALUE,"path");return t}else throw yn(un.INVALID_VALUE)}function Og(t){const{path:e,locale:n,args:s,choice:r,plural:i}=t,o={},a=s||{};return ae(n)&&(o.locale=n),Tt(r)&&(o.plural=r),Tt(i)&&(o.plural=i),[e,a,o]}function cN(t,e,...n){const s=Ce(n[0])?n[0]:{};($e(s.globalInstall)?s.globalInstall:!0)&&([Ag.name,"I18nT"].forEach(i=>t.component(i,Ag)),[Pg.name,"I18nN"].forEach(i=>t.component(i,Pg)),[kg.name,"I18nD"].forEach(i=>t.component(i,kg))),t.directive("t",lN(e))}const uN=Rr("global-vue-i18n");function hN(t={},e){const n=__VUE_I18N_LEGACY_API__&&$e(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,s=$e(t.globalInjection)?t.globalInjection:!0,r=new Map,[i,o]=dN(t,n),a=Rr("");function l(p){return r.get(p)||null}function u(p,_){r.set(p,_)}function h(p){r.delete(p)}const d={get mode(){return __VUE_I18N_LEGACY_API__&&n?"legacy":"composition"},async install(p,..._){if(p.__VUE_I18N_SYMBOL__=a,p.provide(p.__VUE_I18N_SYMBOL__,d),Ce(_[0])){const I=_[0];d.__composerExtend=I.__composerExtend,d.__vueI18nExtend=I.__vueI18nExtend}let T=null;!n&&s&&(T=EN(p,d.global)),__VUE_I18N_FULL_INSTALL__&&cN(p,d,..._),__VUE_I18N_LEGACY_API__&&n&&p.mixin(tN(o,o.__composer,d));const A=p.unmount;p.unmount=()=>{T&&T(),d.dispose(),A()}},get global(){return o},dispose(){i.stop()},__instances:r,__getInstance:l,__setInstance:u,__deleteInstance:h};return d}function Iu(t={}){const e=gr();if(e==null)throw yn(un.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw yn(un.NOT_INSTALLED);const n=fN(e),s=mN(n),r=gw(e),i=pN(t,r);if(i==="global")return yw(s,t,r),s;if(i==="parent"){let l=_N(n,e,t.__useComponent);return l==null&&(l=s),l}const o=n;let a=o.__getInstance(e);if(a==null){const l=Pt({},t);"__i18n"in r&&(l.__i18n=r.__i18n),s&&(l.__root=s),a=np(l),o.__composerExtend&&(a[Ld]=o.__composerExtend(a)),yN(o,e,a),o.__setInstance(e,a)}return a}function dN(t,e,n){const s=ru(),r=__VUE_I18N_LEGACY_API__&&e?s.run(()=>Dd(t)):s.run(()=>np(t));if(r==null)throw yn(un.UNEXPECTED_ERROR);return[s,r]}function fN(t){const e=mn(t.isCE?uN:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw yn(t.isCE?un.NOT_INSTALLED_WITH_PROVIDE:un.UNEXPECTED_ERROR);return e}function pN(t,e){return Eu(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function mN(t){return t.mode==="composition"?t.global:t.global.__composer}function _N(t,e,n=!1){let s=null;const r=e.root;let i=gN(e,n);for(;i!=null;){const o=t;if(t.mode==="composition")s=o.__getInstance(i);else if(__VUE_I18N_LEGACY_API__){const a=o.__getInstance(i);a!=null&&(s=a.__composer,n&&s&&!s[_w]&&(s=null))}if(s!=null||r===i)break;i=i.parent}return s}function gN(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function yN(t,e,n){_s(()=>{},e),pi(()=>{const s=n;t.__deleteInstance(e);const r=s[Ld];r&&(r(),delete s[Ld])},e)}const vN=["locale","fallbackLocale","availableLocales"],Lg=["t","rt","d","n","tm","te"];function EN(t,e){const n=Object.create(null);return vN.forEach(r=>{const i=Object.getOwnPropertyDescriptor(e,r);if(!i)throw yn(un.UNEXPECTED_ERROR);const o=ht(i.value)?{get(){return i.value.value},set(a){i.value.value=a}}:{get(){return i.get&&i.get()}};Object.defineProperty(n,r,o)}),t.config.globalProperties.$i18n=n,Lg.forEach(r=>{const i=Object.getOwnPropertyDescriptor(e,r);if(!i||!i.value)throw yn(un.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${r}`,i)}),()=>{delete t.config.globalProperties.$i18n,Lg.forEach(r=>{delete t.config.globalProperties[`$${r}`]})}}Xk();Pk(uk);kk(Ck);Nk(iw);if(__INTLIFY_PROD_DEVTOOLS__){const t=Gr();t.__INTLIFY__=!0,hk(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const rp=vt.create({baseURL:"https://dummyjson.com/",timeout:1e4});var ki=(t=>(t[t.OK=Ur.Ok]="OK",t[t.CREATED=Ur.Created]="CREATED",t[t.BAD_REQUEST=Ur.BadRequest]="BAD_REQUEST",t[t.UNAUTHORIZED=Ur.Unauthorized]="UNAUTHORIZED",t[t.FORBIDDEN=Ur.Forbidden]="FORBIDDEN",t[t.NOT_FOUND=Ur.NotFound]="NOT_FOUND",t[t.INTERNAL_SERVER_ERROR=Ur.InternalServerError]="INTERNAL_SERVER_ERROR",t))(ki||{});rp.interceptors.request.use(t=>{const e=localStorage.getItem("token");return e&&(t.headers.Authorization=`Bearer ${e}`),t},t=>Promise.reject(t));rp.interceptors.response.use(t=>t.data,t=>{var s,r;const e=(s=t.response)==null?void 0:s.status;let n="An unknown error occurred";return e===ki.BAD_REQUEST?n="Bad Request...":e===ki.UNAUTHORIZED?(n="Unauthorized...",localStorage.removeItem("token"),window.location.href="/login"):e===ki.FORBIDDEN?n="Forbidden...":e===ki.NOT_FOUND?n="Not Found...":e>=ki.INTERNAL_SERVER_ERROR&&(n="Server Error..."),Promise.reject({status:e,message:n,data:(r=t.response)==null?void 0:r.data})});const TN="Shin Fang",wN={addToCart:"Add to Cart",amount:"Quantity",home:"Home",loginPage:"Login",registerPage:"Register",notmember:"Not a member yet? >",ismember:"is already a member? >",register:"Register",login:"Login",stock:"Stock",limit:"This item has reached the purchase limit"},IN={userInfoError:"User information is incorrected!",userLoginError:"An error occurred while retrieving user information!",userRegisterError:"An error occurred while registering user information!",error:"oOps!!The website has some issues! We're working hard to fix it...",addToCart:"Added to Cart",cartLimit:"Can't add it to the cart, this item has reached the purchase limit",logout:"Successfully logged out!"},bN={category:"Product Categories",search:"Search Product Name",login:"Login",logout:"Logout",lang:"Language",member:"Member"},RN={brand:"Filter by Brand",clean:"Clear Filters",sorting:"Sort",noItem:"No brand",clear:"Clear Conditions"},CN={price:"Discounted Price",left:"Remaining",review:"Reviews"},SN={title:"Shopping Cart",pay:"Checkout",noItem:"No items in the cart yet"},AN={step1:"Purchase List",step2:"Shipping Information",step3:"Confirm Payment",list:"View Purchase List",price:"Unit Price",Subtotal:"Subtotal",pay:"Confirm Payment",summary:"Price Details",total:"Order Total",amount:"Total Items",piece:"Piece(s)",shipping:"Shipping Fee",all:"Total Amount",review:"Review Purchase List",fill:"Fill Shipping Information",name:"Name",phone:"Phone",address:"Address",purchase:"Checkout",noItem:"No items in the cart yet"},PN={name:"Name",email:"Email",phone:"Phone",address:"Address",reacent:"Last 5 Orders...",date:"Date",status:"Status",no:"Order no.",total:"Amount",sent:"Shipped",list:"Purchase List",pname:"Product Name",price:"Unit Price",amount:"Quantity",all:"Total Amount",more:"More Orders..."},kN={name:TN,uikit:wN,info:IN,nav:bN,category:RN,product:CN,cart:SN,purchase:AN,member:PN},NN="欣芳",ON={addToCart:"加入購物車",amount:"數量",home:"首頁",loginPage:"登入頁",registerPage:"註冊頁",notmember:"還不是會員？ >",ismember:"已經是會員？ >",register:"註冊",login:"登入",stock:"庫存",limit:"已達到購買上限"},LN={userInfoError:"資料不對喔!請再試一次",userLoginError:"讀取用戶資料時有問題，請再試一次!",userRegisterError:"註冊時發生錯誤，請再試一次!",error:"oOps!!網站有些小問題，我們正在努力修復中...",addToCart:"已加入購物車",cartLimit:"無法加入購物車喔！已達到購買限制",logout:"您已成功登出"},DN={category:"商品分類",search:"搜尋產品名",login:"登入",logout:"登出",lang:"語言",member:"會員"},MN={brand:"品牌篩選",clean:"清除篩選",sorting:"排序",noItem:"沒有品牌",clear:"清除條件"},xN={price:"優惠價",left:"剩",review:"評論"},FN={title:"購物車",pay:"結帳",noItem:"購物車尚未有商品"},VN={step1:"購買清單",step2:"運送資訊",step3:"確認付款",list:"檢視購物清單",price:"單價",Subtotal:"小計",pay:"確認付款",summary:"價格詳情",total:"訂單金額",amount:"商品總和",piece:"件",shipping:"運費",all:"結帳金額",review:"檢視購買清單",fill:"填寫運送資訊",name:"姓名",phone:"電話",address:"地址",purchase:"結帳",noItem:"購物車尚未有商品"},UN={name:"姓名",email:"電子信箱",phone:"電話",address:"地址",reacent:"近５筆訂單...",date:"訂單日期",status:"訂單狀態",no:"訂單編號",total:"金額",sent:"已出貨",list:"購買清單",pname:"產品名",price:"單價",amount:"數量",all:"總金額",more:"更多訂單..."},$N={name:NN,uikit:ON,info:LN,nav:DN,category:MN,product:xN,cart:FN,purchase:VN,member:UN};let qr=window.navigator.language;qr.toLowerCase()==="en"?qr="en":qr.toLowerCase()==="zh-tw"?qr="ch":qr="en";const bu=hN({globalInjection:!0,legacy:!1,locale:qr,fallbackLocale:qr,locales:["en","ch"],messages:{ch:$N,en:kN}});function ji(){const t=mi(),{addToInfoList:e}=t,n=Ie(!0),s=Ie(!1);Ie();const{t:r}=bu.global;return{fetchedData:async(o,a="GET",l={},u={})=>{var h;n.value=!0;try{const d=await rp.request({url:o,method:a,data:a!=="GET"?l:void 0,params:a==="GET"?l:void 0,...u});l.value=d}catch(d){s.value=!0,console.error("API Error:",d.message);const p=d;e(xn.ERROR,r("info.error"),(h=p.status)==null?void 0:h.toString())}finally{return n.value=!1,l.value}},isReady:n,isError:s}}const Md=fu("category",()=>{const t=ji(),e=ji(),n=Ie([]),s=Ie([]);return{getCategoryNameList:async()=>{n.value.length||(n.value=await t.fetchedData("/products/category-list"))},categoryNameList:n,getCategoryList:async()=>{s.value.length||(s.value=await e.fetchedData("/products/categories"))},categoryList:s}});/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ni=typeof document<"u";function Tw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function BN(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Tw(t.default)}const Ke=Object.assign;function kh(t,e){const n={};for(const s in e){const r=e[s];n[s]=qn(r)?r.map(t):t(r)}return n}const ua=()=>{},qn=Array.isArray,ww=/#/g,jN=/&/g,HN=/\//g,WN=/=/g,qN=/\?/g,Iw=/\+/g,KN=/%5B/g,GN=/%5D/g,bw=/%5E/g,zN=/%60/g,Rw=/%7B/g,YN=/%7C/g,Cw=/%7D/g,QN=/%20/g;function ip(t){return encodeURI(""+t).replace(YN,"|").replace(KN,"[").replace(GN,"]")}function XN(t){return ip(t).replace(Rw,"{").replace(Cw,"}").replace(bw,"^")}function xd(t){return ip(t).replace(Iw,"%2B").replace(QN,"+").replace(ww,"%23").replace(jN,"%26").replace(zN,"`").replace(Rw,"{").replace(Cw,"}").replace(bw,"^")}function JN(t){return xd(t).replace(WN,"%3D")}function ZN(t){return ip(t).replace(ww,"%23").replace(qN,"%3F")}function eO(t){return t==null?"":ZN(t).replace(HN,"%2F")}function La(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const tO=/\/$/,nO=t=>t.replace(tO,"");function Nh(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=oO(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:La(o)}}function sO(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Dg(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function rO(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&eo(e.matched[s],n.matched[r])&&Sw(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function eo(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Sw(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!iO(t[n],e[n]))return!1;return!0}function iO(t,e){return qn(t)?Mg(t,e):qn(e)?Mg(e,t):t===e}function Mg(t,e){return qn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function oO(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const Xs={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Da;(function(t){t.pop="pop",t.push="push"})(Da||(Da={}));var ha;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ha||(ha={}));function aO(t){if(!t)if(Ni){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),nO(t)}const lO=/^[^#]+#/;function cO(t,e){return t.replace(lO,"#")+e}function uO(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Ru=()=>({left:window.scrollX,top:window.scrollY});function hO(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=uO(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function xg(t,e){return(history.state?history.state.position-e:-1)+t}const Fd=new Map;function dO(t,e){Fd.set(t,e)}function fO(t){const e=Fd.get(t);return Fd.delete(t),e}let pO=()=>location.protocol+"//"+location.host;function Aw(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Dg(l,"")}return Dg(n,t)+s+r}function mO(t,e,n,s){let r=[],i=[],o=null;const a=({state:p})=>{const _=Aw(t,location),T=n.value,A=e.value;let I=0;if(p){if(n.value=_,e.value=p,o&&o===T){o=null;return}I=A?p.position-A.position:0}else s(_);r.forEach(b=>{b(n.value,T,{delta:I,type:Da.pop,direction:I?I>0?ha.forward:ha.back:ha.unknown})})};function l(){o=n.value}function u(p){r.push(p);const _=()=>{const T=r.indexOf(p);T>-1&&r.splice(T,1)};return i.push(_),_}function h(){const{history:p}=window;p.state&&p.replaceState(Ke({},p.state,{scroll:Ru()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:d}}function Fg(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Ru():null}}function _O(t){const{history:e,location:n}=window,s={value:Aw(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,h){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:pO()+t+l;try{e[h?"replaceState":"pushState"](u,"",p),r.value=u}catch(_){console.error(_),n[h?"replace":"assign"](p)}}function o(l,u){const h=Ke({},e.state,Fg(r.value.back,l,r.value.forward,!0),u,{position:r.value.position});i(l,h,!0),s.value=l}function a(l,u){const h=Ke({},r.value,e.state,{forward:l,scroll:Ru()});i(h.current,h,!0);const d=Ke({},Fg(s.value,l,null),{position:h.position+1},u);i(l,d,!1),s.value=l}return{location:s,state:r,push:a,replace:o}}function gO(t){t=aO(t);const e=_O(t),n=mO(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=Ke({location:"",base:t,go:s,createHref:cO.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function yO(t){return typeof t=="string"||t&&typeof t=="object"}function Pw(t){return typeof t=="string"||typeof t=="symbol"}const kw=Symbol("");var Vg;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Vg||(Vg={}));function to(t,e){return Ke(new Error,{type:t,[kw]:!0},e)}function bs(t,e){return t instanceof Error&&kw in t&&(e==null||!!(t.type&e))}const Ug="[^/]+?",vO={sensitive:!1,strict:!1,start:!0,end:!0},EO=/[.+*?^${}()[\]/\\]/g;function TO(t,e){const n=Ke({},vO,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let d=0;d<u.length;d++){const p=u[d];let _=40+(n.sensitive?.25:0);if(p.type===0)d||(r+="/"),r+=p.value.replace(EO,"\\$&"),_+=40;else if(p.type===1){const{value:T,repeatable:A,optional:I,regexp:b}=p;i.push({name:T,repeatable:A,optional:I});const L=b||Ug;if(L!==Ug){_+=10;try{new RegExp(`(${L})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${T}" (${L}): `+O.message)}}let M=A?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;d||(M=I&&u.length<2?`(?:/${M})`:"/"+M),I&&(M+="?"),r+=M,_+=20,I&&(_+=-8),A&&(_+=-20),L===".*"&&(_+=-50)}h.push(_)}s.push(h)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const h=u.match(o),d={};if(!h)return null;for(let p=1;p<h.length;p++){const _=h[p]||"",T=i[p-1];d[T.name]=_&&T.repeatable?_.split("/"):_}return d}function l(u){let h="",d=!1;for(const p of t){(!d||!h.endsWith("/"))&&(h+="/"),d=!1;for(const _ of p)if(_.type===0)h+=_.value;else if(_.type===1){const{value:T,repeatable:A,optional:I}=_,b=T in u?u[T]:"";if(qn(b)&&!A)throw new Error(`Provided param "${T}" is an array but it is not repeatable (* or + modifiers)`);const L=qn(b)?b.join("/"):b;if(!L)if(I)p.length<2&&(h.endsWith("/")?h=h.slice(0,-1):d=!0);else throw new Error(`Missing required param "${T}"`);h+=L}}return h||"/"}return{re:o,score:s,keys:i,parse:a,stringify:l}}function wO(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Nw(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=wO(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if($g(s))return 1;if($g(r))return-1}return r.length-s.length}function $g(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const IO={type:0,value:""},bO=/[a-zA-Z0-9_]/;function RO(t){if(!t)return[[]];if(t==="/")return[[IO]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,l,u="",h="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(u&&d(),o()):l===":"?(d(),n=1):p();break;case 4:p(),n=s;break;case 1:l==="("?n=2:bO.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=3:h+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),r}function CO(t,e,n){const s=TO(RO(t.path),n),r=Ke(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function SO(t,e){const n=[],s=new Map;e=Wg({strict:!1,end:!0,sensitive:!1},e);function r(d){return s.get(d)}function i(d,p,_){const T=!_,A=jg(d);A.aliasOf=_&&_.record;const I=Wg(e,d),b=[A];if("alias"in d){const O=typeof d.alias=="string"?[d.alias]:d.alias;for(const V of O)b.push(jg(Ke({},A,{components:_?_.record.components:A.components,path:V,aliasOf:_?_.record:A})))}let L,M;for(const O of b){const{path:V}=O;if(p&&V[0]!=="/"){const $=p.record.path,y=$[$.length-1]==="/"?"":"/";O.path=p.record.path+(V&&y+V)}if(L=CO(O,p,I),_?_.alias.push(L):(M=M||L,M!==L&&M.alias.push(L),T&&d.name&&!Hg(L)&&o(d.name)),Ow(L)&&l(L),A.children){const $=A.children;for(let y=0;y<$.length;y++)i($[y],L,_&&_.children[y])}_=_||L}return M?()=>{o(M)}:ua}function o(d){if(Pw(d)){const p=s.get(d);p&&(s.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&s.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const p=kO(d,n);n.splice(p,0,d),d.record.name&&!Hg(d)&&s.set(d.record.name,d)}function u(d,p){let _,T={},A,I;if("name"in d&&d.name){if(_=s.get(d.name),!_)throw to(1,{location:d});I=_.record.name,T=Ke(Bg(p.params,_.keys.filter(M=>!M.optional).concat(_.parent?_.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),d.params&&Bg(d.params,_.keys.map(M=>M.name))),A=_.stringify(T)}else if(d.path!=null)A=d.path,_=n.find(M=>M.re.test(A)),_&&(T=_.parse(A),I=_.record.name);else{if(_=p.name?s.get(p.name):n.find(M=>M.re.test(p.path)),!_)throw to(1,{location:d,currentLocation:p});I=_.record.name,T=Ke({},p.params,d.params),A=_.stringify(T)}const b=[];let L=_;for(;L;)b.unshift(L.record),L=L.parent;return{name:I,path:A,params:T,matched:b,meta:PO(b)}}t.forEach(d=>i(d));function h(){n.length=0,s.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:r}}function Bg(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function jg(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:AO(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function AO(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Hg(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function PO(t){return t.reduce((e,n)=>Ke(e,n.meta),{})}function Wg(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function kO(t,e){let n=0,s=e.length;for(;n!==s;){const i=n+s>>1;Nw(t,e[i])<0?s=i:n=i+1}const r=NO(t);return r&&(s=e.lastIndexOf(r,s-1)),s}function NO(t){let e=t;for(;e=e.parent;)if(Ow(e)&&Nw(t,e)===0)return e}function Ow({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function OO(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Iw," "),o=i.indexOf("="),a=La(o<0?i:i.slice(0,o)),l=o<0?null:La(i.slice(o+1));if(a in e){let u=e[a];qn(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function qg(t){let e="";for(let n in t){const s=t[n];if(n=JN(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(qn(s)?s.map(i=>i&&xd(i)):[s&&xd(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function LO(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=qn(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const DO=Symbol(""),Kg=Symbol(""),Cu=Symbol(""),op=Symbol(""),Vd=Symbol("");function jo(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function rr(t,e,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const u=p=>{p===!1?l(to(4,{from:n,to:e})):p instanceof Error?l(p):yO(p)?l(to(2,{from:e,to:p})):(o&&s.enterCallbacks[r]===o&&typeof p=="function"&&o.push(p),a())},h=i(()=>t.call(s&&s.instances[r],e,n,u));let d=Promise.resolve(h);t.length<3&&(d=d.then(u)),d.catch(p=>l(p))})}function Oh(t,e,n,s,r=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Tw(l)){const h=(l.__vccOpts||l)[e];h&&i.push(rr(h,n,s,o,a,r))}else{let u=l();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=BN(h)?h.default:h;o.mods[a]=h,o.components[a]=d;const _=(d.__vccOpts||d)[e];return _&&rr(_,n,s,o,a,r)()}))}}return i}function Gg(t){const e=mn(Cu),n=mn(op),s=ft(()=>{const l=de(t.to);return e.resolve(l)}),r=ft(()=>{const{matched:l}=s.value,{length:u}=l,h=l[u-1],d=n.matched;if(!h||!d.length)return-1;const p=d.findIndex(eo.bind(null,h));if(p>-1)return p;const _=zg(l[u-2]);return u>1&&zg(h)===_&&d[d.length-1].path!==_?d.findIndex(eo.bind(null,l[u-2])):p}),i=ft(()=>r.value>-1&&UO(n.params,s.value.params)),o=ft(()=>r.value>-1&&r.value===n.matched.length-1&&Sw(n.params,s.value.params));function a(l={}){if(VO(l)){const u=e[de(t.replace)?"replace":"push"](de(t.to)).catch(ua);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:ft(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}function MO(t){return t.length===1?t[0]:t}const xO=vn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Gg,setup(t,{slots:e}){const n=ho(Gg(t)),{options:s}=mn(Cu),r=ft(()=>({[Yg(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Yg(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&MO(e.default(n));return t.custom?i:Xa("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),FO=xO;function VO(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function UO(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!qn(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function zg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Yg=(t,e,n)=>t??e??n,$O=vn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=mn(Vd),r=ft(()=>t.route||s.value),i=mn(Kg,0),o=ft(()=>{let u=de(i);const{matched:h}=r.value;let d;for(;(d=h[u])&&!d.components;)u++;return u}),a=ft(()=>r.value.matched[o.value]);zl(Kg,ft(()=>o.value+1)),zl(DO,a),zl(Vd,r);const l=Ie();return os(()=>[l.value,a.value,t.name],([u,h,d],[p,_,T])=>{h&&(h.instances[d]=u,_&&_!==h&&u&&u===p&&(h.leaveGuards.size||(h.leaveGuards=_.leaveGuards),h.updateGuards.size||(h.updateGuards=_.updateGuards))),u&&h&&(!_||!eo(h,_)||!p)&&(h.enterCallbacks[d]||[]).forEach(A=>A(u))},{flush:"post"}),()=>{const u=r.value,h=t.name,d=a.value,p=d&&d.components[h];if(!p)return Qg(n.default,{Component:p,route:u});const _=d.props[h],T=_?_===!0?u.params:typeof _=="function"?_(u):_:null,I=Xa(p,Ke({},T,e,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(d.instances[h]=null)},ref:l}));return Qg(n.default,{Component:I,route:u})||I}}});function Qg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Lw=$O;function BO(t){const e=SO(t.routes,t),n=t.parseQuery||OO,s=t.stringifyQuery||qg,r=t.history,i=jo(),o=jo(),a=jo(),l=ME(Xs);let u=Xs;Ni&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=kh.bind(null,G=>""+G),d=kh.bind(null,eO),p=kh.bind(null,La);function _(G,se){let X,oe;return Pw(G)?(X=e.getRecordMatcher(G),oe=se):oe=G,e.addRoute(oe,X)}function T(G){const se=e.getRecordMatcher(G);se&&e.removeRoute(se)}function A(){return e.getRoutes().map(G=>G.record)}function I(G){return!!e.getRecordMatcher(G)}function b(G,se){if(se=Ke({},se||l.value),typeof G=="string"){const N=Nh(n,G,se.path),B=e.resolve({path:N.path},se),Q=r.createHref(N.fullPath);return Ke(N,B,{params:p(B.params),hash:La(N.hash),redirectedFrom:void 0,href:Q})}let X;if(G.path!=null)X=Ke({},G,{path:Nh(n,G.path,se.path).path});else{const N=Ke({},G.params);for(const B in N)N[B]==null&&delete N[B];X=Ke({},G,{params:d(N)}),se.params=d(se.params)}const oe=e.resolve(X,se),Se=G.hash||"";oe.params=h(p(oe.params));const Be=sO(s,Ke({},G,{hash:XN(Se),path:oe.path})),R=r.createHref(Be);return Ke({fullPath:Be,hash:Se,query:s===qg?LO(G.query):G.query||{}},oe,{redirectedFrom:void 0,href:R})}function L(G){return typeof G=="string"?Nh(n,G,l.value.path):Ke({},G)}function M(G,se){if(u!==G)return to(8,{from:se,to:G})}function O(G){return y(G)}function V(G){return O(Ke(L(G),{replace:!0}))}function $(G){const se=G.matched[G.matched.length-1];if(se&&se.redirect){const{redirect:X}=se;let oe=typeof X=="function"?X(G):X;return typeof oe=="string"&&(oe=oe.includes("?")||oe.includes("#")?oe=L(oe):{path:oe},oe.params={}),Ke({query:G.query,hash:G.hash,params:oe.path!=null?{}:G.params},oe)}}function y(G,se){const X=u=b(G),oe=l.value,Se=G.state,Be=G.force,R=G.replace===!0,N=$(X);if(N)return y(Ke(L(N),{state:typeof N=="object"?Ke({},Se,N.state):Se,force:Be,replace:R}),se||X);const B=X;B.redirectedFrom=se;let Q;return!Be&&rO(s,oe,X)&&(Q=to(16,{to:B,from:oe}),St(oe,oe,!0,!1)),(Q?Promise.resolve(Q):P(B,oe)).catch(z=>bs(z)?bs(z,2)?z:kt(z):Ee(z,B,oe)).then(z=>{if(z){if(bs(z,2))return y(Ke({replace:R},L(z.to),{state:typeof z.to=="object"?Ke({},Se,z.to.state):Se,force:Be}),se||B)}else z=k(B,oe,!0,R,Se);return D(B,oe,z),z})}function g(G,se){const X=M(G,se);return X?Promise.reject(X):Promise.resolve()}function v(G){const se=Fe.values().next().value;return se&&typeof se.runWithContext=="function"?se.runWithContext(G):G()}function P(G,se){let X;const[oe,Se,Be]=jO(G,se);X=Oh(oe.reverse(),"beforeRouteLeave",G,se);for(const N of oe)N.leaveGuards.forEach(B=>{X.push(rr(B,G,se))});const R=g.bind(null,G,se);return X.push(R),It(X).then(()=>{X=[];for(const N of i.list())X.push(rr(N,G,se));return X.push(R),It(X)}).then(()=>{X=Oh(Se,"beforeRouteUpdate",G,se);for(const N of Se)N.updateGuards.forEach(B=>{X.push(rr(B,G,se))});return X.push(R),It(X)}).then(()=>{X=[];for(const N of Be)if(N.beforeEnter)if(qn(N.beforeEnter))for(const B of N.beforeEnter)X.push(rr(B,G,se));else X.push(rr(N.beforeEnter,G,se));return X.push(R),It(X)}).then(()=>(G.matched.forEach(N=>N.enterCallbacks={}),X=Oh(Be,"beforeRouteEnter",G,se,v),X.push(R),It(X))).then(()=>{X=[];for(const N of o.list())X.push(rr(N,G,se));return X.push(R),It(X)}).catch(N=>bs(N,8)?N:Promise.reject(N))}function D(G,se,X){a.list().forEach(oe=>v(()=>oe(G,se,X)))}function k(G,se,X,oe,Se){const Be=M(G,se);if(Be)return Be;const R=se===Xs,N=Ni?history.state:{};X&&(oe||R?r.replace(G.fullPath,Ke({scroll:R&&N&&N.scroll},Se)):r.push(G.fullPath,Se)),l.value=G,St(G,se,X,R),kt()}let S;function we(){S||(S=r.listen((G,se,X)=>{if(!ct.listening)return;const oe=b(G),Se=$(oe);if(Se){y(Ke(Se,{replace:!0,force:!0}),oe).catch(ua);return}u=oe;const Be=l.value;Ni&&dO(xg(Be.fullPath,X.delta),Ru()),P(oe,Be).catch(R=>bs(R,12)?R:bs(R,2)?(y(Ke(L(R.to),{force:!0}),oe).then(N=>{bs(N,20)&&!X.delta&&X.type===Da.pop&&r.go(-1,!1)}).catch(ua),Promise.reject()):(X.delta&&r.go(-X.delta,!1),Ee(R,oe,Be))).then(R=>{R=R||k(oe,Be,!1),R&&(X.delta&&!bs(R,8)?r.go(-X.delta,!1):X.type===Da.pop&&bs(R,20)&&r.go(-1,!1)),D(oe,Be,R)}).catch(ua)}))}let Ze=jo(),ke=jo(),fe;function Ee(G,se,X){kt(G);const oe=ke.list();return oe.length?oe.forEach(Se=>Se(G,se,X)):console.error(G),Promise.reject(G)}function st(){return fe&&l.value!==Xs?Promise.resolve():new Promise((G,se)=>{Ze.add([G,se])})}function kt(G){return fe||(fe=!G,we(),Ze.list().forEach(([se,X])=>G?X(G):se()),Ze.reset()),G}function St(G,se,X,oe){const{scrollBehavior:Se}=t;if(!Ni||!Se)return Promise.resolve();const Be=!X&&fO(xg(G.fullPath,0))||(oe||!X)&&history.state&&history.state.scroll||null;return au().then(()=>Se(G,se,Be)).then(R=>R&&hO(R)).catch(R=>Ee(R,G,se))}const We=G=>r.go(G);let qe;const Fe=new Set,ct={currentRoute:l,listening:!0,addRoute:_,removeRoute:T,clearRoutes:e.clearRoutes,hasRoute:I,getRoutes:A,resolve:b,options:t,push:O,replace:V,go:We,back:()=>We(-1),forward:()=>We(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ke.add,isReady:st,install(G){const se=this;G.component("RouterLink",FO),G.component("RouterView",Lw),G.config.globalProperties.$router=se,Object.defineProperty(G.config.globalProperties,"$route",{enumerable:!0,get:()=>de(l)}),Ni&&!qe&&l.value===Xs&&(qe=!0,O(r.location).catch(Se=>{}));const X={};for(const Se in Xs)Object.defineProperty(X,Se,{get:()=>l.value[Se],enumerable:!0});G.provide(Cu,se),G.provide(op,LE(X)),G.provide(Vd,l);const oe=G.unmount;Fe.add(G),G.unmount=function(){Fe.delete(G),Fe.size<1&&(u=Xs,S&&S(),S=null,l.value=Xs,qe=!1,fe=!1),oe()}}};function It(G){return G.reduce((se,X)=>se.then(()=>v(X)),Promise.resolve())}return ct}function jO(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>eo(u,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>eo(u,l))||r.push(l))}return[n,s,r]}function Su(){return mn(Cu)}function Dw(t){return mn(op)}const Lh="shoppingCart",Mw=fu(Lh,()=>{const t=Ie([]),{t:e}=bu.global,n=()=>{const p=localStorage.getItem(Lh);p&&(t.value=JSON.parse(p))},{addToInfoList:s}=mi(),r=()=>{localStorage.setItem(Lh,JSON.stringify(t.value))},i=p=>{const _=t.value.find(T=>T.id===p.id);if(_){if(_.quantity+p.quantity>p.stock){s(xn.ERROR,e("info.cartLimit"),"STATUS");return}else s(xn.INFO,e("info.addToCart"));_.quantity=Number(p.quantity)+Number(_.quantity)}else t.value.push({...p,quantity:p.quantity});r()},o=p=>{t.value=t.value.filter(_=>_.id.toString()!==p),r()},a=()=>{t.value=[],r()},l=(p,_)=>{const T=t.value.find(A=>A.id.toString()===p);T&&_<=T.stock&&(T.quantity=_)},u=p=>{const _=t.value.find(T=>T.id.toString()===p);return _?_.quantity:0},h=ft(()=>t.value.reduce((p,_)=>p+_.quantity,0)),d=ft(()=>Math.round(t.value.reduce((p,_)=>p+_.price*_.quantity,0)));return{cart:t,addToCart:i,removeFromCart:o,clearCart:a,totalQuantity:h,totalAmount:d,loadCart:n,findItemQuantity:u,updateQuantity:l}}),HO={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"};function WO(t,e){return ue(),he("svg",HO,e[0]||(e[0]=[H("path",{d:"M135.2 17.7C140.6 6.8 151.7 0 163.8 0h120.4c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64s14.3-32 32-32h96zM32 128h384v320c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64zm96 64c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16m96 0c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16m96 0c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16"},null,-1)]))}const qO={render:WO},KO={class:"shoppingCart"},GO={class:"shoppingCart__title"},zO={class:"title-m"},YO={key:0},QO={key:1,class:"shoppingCart__list"},XO={class:"item"},JO={class:"item__el"},ZO=["src"],eL={class:"item__el"},tL={class:"title ellipsis"},nL={class:"item__el__box"},sL={class:"el"},rL={class:"el"},iL={class:"item__el"},oL=["onClick"],aL=vn({__name:"Cart",props:{cartList:{default:()=>[]}},emits:["clickPurchase"],setup(t,{emit:e}){const n=Su();Dw();const s=e,r=()=>{n.push("/purchase"),s("clickPurchase")},i=Mw(),{loadCart:o,removeFromCart:a}=i;return _s(()=>{o()}),(l,u)=>{var h;return ue(),he("div",KO,[H("div",GO,[H("span",zO,mt(l.$t("cart.title")),1)]),((h=l.cartList)==null?void 0:h.length)===0?(ue(),he("div",YO,[H("p",null,mt(l.$t("cart.noItem")),1)])):(ue(),he("div",QO,[(ue(!0),he(ut,null,ns(l.cartList,d=>(ue(),he("div",XO,[H("div",JO,[H("img",{class:"img",src:d.thumbnail,alt:""},null,8,ZO)]),H("div",eL,[H("h3",tL,mt(d.title),1),H("div",nL,[H("span",sL,"$ "+mt(d.price),1),H("span",rL,"X "+mt(d.quantity),1)])]),H("div",iL,[H("div",{class:"btnDelete",onClick:p=>de(a)(d.id.toString())},[ce(de(qO),{class:"svg"})],8,oL)])]))),256))])),H("div",{class:"btnYellow",onClick:r},mt(l.$t("cart.pay")),1)])}}}),lL=br(aL,[["__scopeId","data-v-74817d88"]]);var Xg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re=function(t,e){if(!t)throw mo(e)},mo=function(t){return new Error("Firebase Database ("+xw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},cL=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Au={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,u=l?t[r+2]:0,h=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,_=u&63;l||(_=64,o||(p=64)),s.push(n[h],n[d],n[p],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Fw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):cL(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||d==null)throw new uL;const p=i<<2|a>>4;if(s.push(p),u!==64){const _=a<<4&240|u>>2;if(s.push(_),d!==64){const T=u<<6&192|d;s.push(T)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class uL extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vw=function(t){const e=Fw(t);return Au.encodeByteArray(e,!0)},Rc=function(t){return Vw(t).replace(/\./g,"")},Cc=function(t){try{return Au.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hL(t){return Uw(void 0,t)}function Uw(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!dL(n)||(t[n]=Uw(t[n],e[n]));return t}function dL(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fL(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pL=()=>fL().__FIREBASE_DEFAULTS__,mL=()=>{if(typeof process>"u"||typeof Xg>"u")return;const t=Xg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},_L=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Cc(t[1]);return e&&JSON.parse(e)},Pu=()=>{try{return pL()||mL()||_L()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$w=t=>{var e,n;return(n=(e=Pu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},gL=t=>{const e=$w(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Bw=()=>{var t;return(t=Pu())===null||t===void 0?void 0:t.config},jw=t=>{var e;return(e=Pu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yL(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Rc(JSON.stringify(n)),Rc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ap(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(en())}function vL(){var t;const e=(t=Pu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function EL(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function TL(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Hw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wL(){const t=en();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ww(){return xw.NODE_ADMIN===!0}function IL(){return!vL()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function qw(){try{return typeof indexedDB=="object"}catch{return!1}}function bL(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RL="FirebaseError";class gs extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=RL,Object.setPrototypeOf(this,gs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_o.prototype.create)}}class _o{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?CL(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new gs(r,a,s)}}function CL(t,e){return t.replace(SL,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const SL=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(t){return JSON.parse(t)}function Ut(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw=function(t){let e={},n={},s={},r="";try{const i=t.split(".");e=xa(Cc(i[0])||""),n=xa(Cc(i[1])||""),r=i[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:r}},AL=function(t){const e=Kw(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},PL=function(t){const e=Kw(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function no(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ud(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Sc(t,e,n){const s={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=e.call(n,t[r],r,t));return s}function Ac(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Jg(i)&&Jg(o)){if(!Ac(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Jg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Yo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Qo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kL{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const p=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(p<<1|p>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,h;for(let d=0;d<80;d++){d<40?d<20?(u=a^i&(o^a),h=1518500249):(u=i^o^a,h=1859775393):d<60?(u=i&o|a&(i|o),h=2400959708):(u=i^o^a,h=3395469782);const p=(r<<5|r>>>27)+u+l+h+s[d]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=r,r=p}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=s;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<n;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[s]=this.chain_[r]>>i&255,++s;return e}}function NL(t,e){const n=new OL(t,e);return n.subscribe.bind(n)}class OL{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");LL(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Dh),r.error===void 0&&(r.error=Dh),r.complete===void 0&&(r.complete=Dh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function LL(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Dh(){}function DL(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ML=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);if(r>=55296&&r<=56319){const i=r-55296;s++,re(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;r=65536+(i<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},ku=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(t){return t&&t._delegate?t._delegate:t}class Kn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xL{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ma;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(VL(e))try{this.getOrInitializeService({instanceIdentifier:Br})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Br){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Br){return this.instances.has(e)}getOptions(e=Br){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:FL(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Br){return this.component?this.component.multipleInstances?e:Br:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function FL(t){return t===Br?void 0:t}function VL(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UL{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xL(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Pe||(Pe={}));const $L={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},BL=Pe.INFO,jL={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},HL=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=jL[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class el{constructor(e){this.name=e,this._logLevel=BL,this._logHandler=HL,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$L[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const WL=(t,e)=>e.some(n=>t instanceof n);let Zg,ey;function qL(){return Zg||(Zg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function KL(){return ey||(ey=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gw=new WeakMap,$d=new WeakMap,zw=new WeakMap,Mh=new WeakMap,lp=new WeakMap;function GL(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(dr(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Gw.set(n,t)}).catch(()=>{}),lp.set(e,t),e}function zL(t){if($d.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});$d.set(t,e)}let Bd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return $d.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function YL(t){Bd=t(Bd)}function QL(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(xh(this),e,...n);return zw.set(s,e.sort?e.sort():[e]),dr(s)}:KL().includes(t)?function(...e){return t.apply(xh(this),e),dr(Gw.get(this))}:function(...e){return dr(t.apply(xh(this),e))}}function XL(t){return typeof t=="function"?QL(t):(t instanceof IDBTransaction&&zL(t),WL(t,qL())?new Proxy(t,Bd):t)}function dr(t){if(t instanceof IDBRequest)return GL(t);if(Mh.has(t))return Mh.get(t);const e=XL(t);return e!==t&&(Mh.set(t,e),lp.set(e,t)),e}const xh=t=>lp.get(t);function JL(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=dr(o);return s&&o.addEventListener("upgradeneeded",l=>{s(dr(o.result),l.oldVersion,l.newVersion,dr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const ZL=["get","getKey","getAll","getAllKeys","count"],eD=["put","add","delete","clear"],Fh=new Map;function ty(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fh.get(e))return Fh.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=eD.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||ZL.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let u=l.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&l.done]))[0]};return Fh.set(e,i),i}YL(t=>({...t,get:(e,n,s)=>ty(e,n)||t.get(e,n,s),has:(e,n)=>!!ty(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nD(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function nD(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jd="@firebase/app",ny="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s=new el("@firebase/app"),sD="@firebase/app-compat",rD="@firebase/analytics-compat",iD="@firebase/analytics",oD="@firebase/app-check-compat",aD="@firebase/app-check",lD="@firebase/auth",cD="@firebase/auth-compat",uD="@firebase/database",hD="@firebase/data-connect",dD="@firebase/database-compat",fD="@firebase/functions",pD="@firebase/functions-compat",mD="@firebase/installations",_D="@firebase/installations-compat",gD="@firebase/messaging",yD="@firebase/messaging-compat",vD="@firebase/performance",ED="@firebase/performance-compat",TD="@firebase/remote-config",wD="@firebase/remote-config-compat",ID="@firebase/storage",bD="@firebase/storage-compat",RD="@firebase/firestore",CD="@firebase/vertexai-preview",SD="@firebase/firestore-compat",AD="firebase",PD="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd="[DEFAULT]",kD={[jd]:"fire-core",[sD]:"fire-core-compat",[iD]:"fire-analytics",[rD]:"fire-analytics-compat",[aD]:"fire-app-check",[oD]:"fire-app-check-compat",[lD]:"fire-auth",[cD]:"fire-auth-compat",[uD]:"fire-rtdb",[hD]:"fire-data-connect",[dD]:"fire-rtdb-compat",[fD]:"fire-fn",[pD]:"fire-fn-compat",[mD]:"fire-iid",[_D]:"fire-iid-compat",[gD]:"fire-fcm",[yD]:"fire-fcm-compat",[vD]:"fire-perf",[ED]:"fire-perf-compat",[TD]:"fire-rc",[wD]:"fire-rc-compat",[ID]:"fire-gcs",[bD]:"fire-gcs-compat",[RD]:"fire-fst",[SD]:"fire-fst-compat",[CD]:"fire-vertex","fire-js":"fire-js",[AD]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc=new Map,ND=new Map,Wd=new Map;function sy(t,e){try{t.container.addComponent(e)}catch(n){$s.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function hs(t){const e=t.name;if(Wd.has(e))return $s.debug(`There were multiple attempts to register component ${e}.`),!1;Wd.set(e,t);for(const n of Pc.values())sy(n,t);for(const n of ND.values())sy(n,t);return!0}function cp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function rs(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fr=new _o("app","Firebase",OD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=PD;function Yw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Hd,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw fr.create("bad-app-name",{appName:String(r)});if(n||(n=Bw()),!n)throw fr.create("no-options");const i=Pc.get(r);if(i){if(Ac(n,i.options)&&Ac(s,i.config))return i;throw fr.create("duplicate-app",{appName:r})}const o=new UL(r);for(const l of Wd.values())o.addComponent(l);const a=new LD(n,s,o);return Pc.set(r,a),a}function up(t=Hd){const e=Pc.get(t);if(!e&&t===Hd&&Bw())return Yw();if(!e)throw fr.create("no-app",{appName:t});return e}function Rn(t,e,n){var s;let r=(s=kD[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$s.warn(a.join(" "));return}hs(new Kn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DD="firebase-heartbeat-database",MD=1,Fa="firebase-heartbeat-store";let Vh=null;function Qw(){return Vh||(Vh=JL(DD,MD,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Fa)}catch(n){console.warn(n)}}}}).catch(t=>{throw fr.create("idb-open",{originalErrorMessage:t.message})})),Vh}async function xD(t){try{const n=(await Qw()).transaction(Fa),s=await n.objectStore(Fa).get(Xw(t));return await n.done,s}catch(e){if(e instanceof gs)$s.warn(e.message);else{const n=fr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$s.warn(n.message)}}}async function ry(t,e){try{const s=(await Qw()).transaction(Fa,"readwrite");await s.objectStore(Fa).put(e,Xw(t)),await s.done}catch(n){if(n instanceof gs)$s.warn(n.message);else{const s=fr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$s.warn(s.message)}}}function Xw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FD=1024,VD=30*24*60*60*1e3;class UD{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new BD(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=iy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=VD}),this._storage.overwrite(this._heartbeatsCache))}catch(s){$s.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=iy(),{heartbeatsToSend:s,unsentEntries:r}=$D(this._heartbeatsCache.heartbeats),i=Rc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return $s.warn(n),""}}}function iy(){return new Date().toISOString().substring(0,10)}function $D(t,e=FD){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),oy(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),oy(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class BD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qw()?bL().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await xD(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ry(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ry(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function oy(t){return Rc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jD(t){hs(new Kn("platform-logger",e=>new tD(e),"PRIVATE")),hs(new Kn("heartbeat",e=>new UD(e),"PRIVATE")),Rn(jd,ny,t),Rn(jd,ny,"esm2017"),Rn("fire-js","")}jD("");function hp(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Jw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const HD=Jw,Zw=new _o("auth","Firebase",Jw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc=new el("@firebase/auth");function WD(t,...e){kc.logLevel<=Pe.WARN&&kc.warn(`Auth (${Ar}): ${t}`,...e)}function sc(t,...e){kc.logLevel<=Pe.ERROR&&kc.error(`Auth (${Ar}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t,...e){throw dp(t,...e)}function as(t,...e){return dp(t,...e)}function eI(t,e,n){const s=Object.assign(Object.assign({},HD()),{[e]:n});return new _o("auth","Firebase",s).create(e,{appName:t.name})}function Fs(t){return eI(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function dp(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Zw.create(t,...e)}function ge(t,e,...n){if(!t)throw dp(e,...n)}function Os(t){const e="INTERNAL ASSERTION FAILED: "+t;throw sc(e),new Error(e)}function Bs(t,e){t||Os(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function qD(){return ay()==="http:"||ay()==="https:"}function ay(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qD()||TL()||"connection"in navigator)?navigator.onLine:!0}function GD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Bs(n>e,"Short delay should be less than long delay!"),this.isMobile=ap()||Hw()}get(){return KD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(t,e){Bs(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Os("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Os("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Os("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YD=new tl(3e4,6e4);function Pr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function kr(t,e,n,s,r={}){return nI(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=go(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},i);return EL()||(u.referrerPolicy="no-referrer"),tI.fetch()(sI(t,t.config.apiHost,n,a),u)})}async function nI(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},zD),e);try{const r=new XD(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw xl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw xl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw xl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw xl(t,"user-disabled",o);const h=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw eI(t,h,u);Gn(t,h)}}catch(r){if(r instanceof gs)throw r;Gn(t,"network-request-failed",{message:String(r)})}}async function nl(t,e,n,s,r={}){const i=await kr(t,e,n,s,r);return"mfaPendingCredential"in i&&Gn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function sI(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?fp(t.config,r):`${t.config.apiScheme}://${r}`}function QD(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class XD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(as(this.auth,"network-request-failed")),YD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xl(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=as(t,e,s);return r.customData._tokenResponse=n,r}function ly(t){return t!==void 0&&t.enterprise!==void 0}class JD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return QD(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function ZD(t,e){return kr(t,"GET","/v2/recaptchaConfig",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eM(t,e){return kr(t,"POST","/v1/accounts:delete",e)}async function rI(t,e){return kr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tM(t,e=!1){const n=Qn(t),s=await n.getIdToken(e),r=pp(s);ge(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:da(Uh(r.auth_time)),issuedAtTime:da(Uh(r.iat)),expirationTime:da(Uh(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Uh(t){return Number(t)*1e3}function pp(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return sc("JWT malformed, contained fewer than 3 sections"),null;try{const r=Cc(n);return r?JSON.parse(r):(sc("Failed to decode base64 JWT payload"),null)}catch(r){return sc("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function cy(t){const e=pp(t);return ge(e,"internal-error"),ge(typeof e.exp<"u","internal-error"),ge(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Va(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof gs&&nM(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function nM({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sM{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=da(this.lastLoginAt),this.creationTime=da(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nc(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Va(t,rI(n,{idToken:s}));ge(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?iI(i.providerUserInfo):[],a=iM(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Kd(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function rM(t){const e=Qn(t);await Nc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iM(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function iI(t){return t.map(e=>{var{providerId:n}=e,s=hp(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oM(t,e){const n=await nI(t,{},async()=>{const s=go({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=sI(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",tI.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function aM(t,e){return kr(t,"POST","/v2/accounts:revokeToken",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ge(e.idToken,"internal-error"),ge(typeof e.idToken<"u","internal-error"),ge(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ge(e.length!==0,"internal-error");const n=cy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ge(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await oM(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Hi;return s&&(ge(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(ge(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(ge(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hi,this.toJSON())}_performRefresh(){return Os("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(t,e){ge(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ls{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=hp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sM(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Kd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Va(this,this.stsTokenManager.getToken(this.auth,e));return ge(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tM(this,e)}reload(){return rM(this)}_assign(e){this!==e&&(ge(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ls(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ge(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Nc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(rs(this.auth.app))return Promise.reject(Fs(this.auth));const e=await this.getIdToken();return await Va(this,eM(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,l,u,h;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,p=(r=n.email)!==null&&r!==void 0?r:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,b=(u=n.createdAt)!==null&&u!==void 0?u:void 0,L=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:M,emailVerified:O,isAnonymous:V,providerData:$,stsTokenManager:y}=n;ge(M&&y,e,"internal-error");const g=Hi.fromJSON(this.name,y);ge(typeof M=="string",e,"internal-error"),Js(d,e.name),Js(p,e.name),ge(typeof O=="boolean",e,"internal-error"),ge(typeof V=="boolean",e,"internal-error"),Js(_,e.name),Js(T,e.name),Js(A,e.name),Js(I,e.name),Js(b,e.name),Js(L,e.name);const v=new Ls({uid:M,auth:e,email:p,emailVerified:O,displayName:d,isAnonymous:V,photoURL:T,phoneNumber:_,tenantId:A,stsTokenManager:g,createdAt:b,lastLoginAt:L});return $&&Array.isArray($)&&(v.providerData=$.map(P=>Object.assign({},P))),I&&(v._redirectEventId=I),v}static async _fromIdTokenResponse(e,n,s=!1){const r=new Hi;r.updateFromServerResponse(n);const i=new Ls({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Nc(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];ge(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?iI(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new Hi;a.updateFromIdToken(s);const l=new Ls({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Kd(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy=new Map;function Ds(t){Bs(t instanceof Function,"Expected a class definition");let e=uy.get(t);return e?(Bs(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,uy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}oI.type="NONE";const hy=oI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(t,e,n){return`firebase:${t}:${e}:${n}`}class Wi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=rc(this.userKey,r.apiKey,i),this.fullPersistenceKey=rc("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ls._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Wi(Ds(hy),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||Ds(hy);const o=rc(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const d=Ls._fromJSON(e,h);u!==i&&(a=d),i=u;break}}catch{}const l=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Wi(i,e,s):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Wi(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(uI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(aI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(dI(e))return"Blackberry";if(fI(e))return"Webos";if(lI(e))return"Safari";if((e.includes("chrome/")||cI(e))&&!e.includes("edge/"))return"Chrome";if(hI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function aI(t=en()){return/firefox\//i.test(t)}function lI(t=en()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cI(t=en()){return/crios\//i.test(t)}function uI(t=en()){return/iemobile/i.test(t)}function hI(t=en()){return/android/i.test(t)}function dI(t=en()){return/blackberry/i.test(t)}function fI(t=en()){return/webos/i.test(t)}function mp(t=en()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function lM(t=en()){var e;return mp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function cM(){return wL()&&document.documentMode===10}function pI(t=en()){return mp(t)||hI(t)||fI(t)||dI(t)||/windows phone/i.test(t)||uI(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(t,e=[]){let n;switch(t){case"Browser":n=dy(en());break;case"Worker":n=`${dy(en())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ar}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uM{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hM(t,e={}){return kr(t,"GET","/v2/passwordPolicy",Pr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dM=6;class fM{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:dM,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pM{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fy(this),this.idTokenSubscription=new fy(this),this.beforeStateQueue=new uM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ds(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Wi.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await rI(this,{idToken:e}),s=await Ls._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(rs(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ge(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Nc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=GD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(rs(this.app))return Promise.reject(Fs(this));const n=e?Qn(e):null;return n&&ge(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ge(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return rs(this.app)?Promise.reject(Fs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return rs(this.app)?Promise.reject(Fs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ds(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hM(this),n=new fM(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _o("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await aM(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ds(e)||this._popupRedirectResolver;ge(n,this,"argument-error"),this.redirectPersistenceManager=await Wi.create(this,[Ds(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ge(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,r);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ge(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&WD(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function _i(t){return Qn(t)}class fy{constructor(e){this.auth=e,this.observer=null,this.addObserver=NL(n=>this.observer=n)}get next(){return ge(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mM(t){Nu=t}function _I(t){return Nu.loadJS(t)}function _M(){return Nu.recaptchaEnterpriseScript}function gM(){return Nu.gapiScript}function yM(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const vM="recaptcha-enterprise",EM="NO_RECAPTCHA";class TM{constructor(e){this.type=vM,this.auth=_i(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{ZD(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new JD(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function r(i,o,a){const l=window.grecaptcha;ly(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(EM)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&ly(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=_M();l.length!==0&&(l+=a),_I(l).then(()=>{r(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function py(t,e,n,s=!1){const r=new TM(t);let i;try{i=await r.verify(n)}catch{i=await r.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Gd(t,e,n,s){var r;if(!((r=t._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await py(t,e,n,n==="getOobCode");return s(t,i)}else return s(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await py(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(t,e){const n=cp(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Ac(i,e??{}))return r;Gn(r,"already-initialized")}return n.initialize({options:e})}function wM(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Ds);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function IM(t,e,n){const s=_i(t);ge(s._canInitEmulator,s,"emulator-config-failed"),ge(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=yI(e),{host:o,port:a}=bM(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),RM()}function yI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function bM(t){const e=yI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:my(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:my(o)}}}function my(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function RM(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Os("not implemented")}_getIdTokenResponse(e){return Os("not implemented")}_linkToIdToken(e,n){return Os("not implemented")}_getReauthenticationResolver(e){return Os("not implemented")}}async function CM(t,e){return kr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SM(t,e){return nl(t,"POST","/v1/accounts:signInWithPassword",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AM(t,e){return nl(t,"POST","/v1/accounts:signInWithEmailLink",Pr(t,e))}async function PM(t,e){return nl(t,"POST","/v1/accounts:signInWithEmailLink",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua extends _p{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Ua(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Ua(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gd(e,n,"signInWithPassword",SM);case"emailLink":return AM(e,{email:this._email,oobCode:this._password});default:Gn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gd(e,s,"signUpPassword",CM);case"emailLink":return PM(e,{idToken:n,email:this._email,oobCode:this._password});default:Gn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi(t,e){return nl(t,"POST","/v1/accounts:signInWithIdp",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kM="http://localhost";class ri extends _p{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ri(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Gn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=hp(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new ri(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return qi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,qi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qi(e,n)}buildRequest(){const e={requestUri:kM,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=go(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NM(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function OM(t){const e=Yo(Qo(t)).link,n=e?Yo(Qo(e)).deep_link_id:null,s=Yo(Qo(t)).deep_link_id;return(s?Yo(Qo(s)).link:null)||s||n||e||t}class gp{constructor(e){var n,s,r,i,o,a;const l=Yo(Qo(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(s=l.oobCode)!==null&&s!==void 0?s:null,d=NM((r=l.mode)!==null&&r!==void 0?r:null);ge(u&&h&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=h,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=OM(e);try{return new gp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(){this.providerId=yo.PROVIDER_ID}static credential(e,n){return Ua._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=gp.parseLink(n);return ge(s,"argument-error"),Ua._fromEmailAndCode(e,s.code,s.tenantId)}}yo.PROVIDER_ID="password";yo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";yo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl extends vI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends sl{constructor(){super("facebook.com")}static credential(e){return ri._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.FACEBOOK_SIGN_IN_METHOD="facebook.com";ir.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends sl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ri._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return or.credential(n,s)}catch{return null}}}or.GOOGLE_SIGN_IN_METHOD="google.com";or.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends sl{constructor(){super("github.com")}static credential(e){return ri._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ar.credential(e.oauthAccessToken)}catch{return null}}}ar.GITHUB_SIGN_IN_METHOD="github.com";ar.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends sl{constructor(){super("twitter.com")}static credential(e,n){return ri._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return lr.credential(n,s)}catch{return null}}}lr.TWITTER_SIGN_IN_METHOD="twitter.com";lr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LM(t,e){return nl(t,"POST","/v1/accounts:signUp",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Ls._fromIdTokenResponse(e,s,r),o=_y(s);return new ii({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=_y(s);return new ii({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function _y(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc extends gs{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Oc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Oc(e,n,s,r)}}function EI(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Oc._fromErrorAndOperation(t,i,e,s):i})}async function DM(t,e,n=!1){const s=await Va(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ii._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MM(t,e,n=!1){const{auth:s}=t;if(rs(s.app))return Promise.reject(Fs(s));const r="reauthenticate";try{const i=await Va(t,EI(s,r,e,t),n);ge(i.idToken,s,"internal-error");const o=pp(i.idToken);ge(o,s,"internal-error");const{sub:a}=o;return ge(t.uid===a,s,"user-mismatch"),ii._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Gn(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TI(t,e,n=!1){if(rs(t.app))return Promise.reject(Fs(t));const s="signIn",r=await EI(t,s,e),i=await ii._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function xM(t,e){return TI(_i(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wI(t){const e=_i(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function FM(t,e,n){if(rs(t.app))return Promise.reject(Fs(t));const s=_i(t),o=await Gd(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",LM).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&wI(t),l}),a=await ii._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function VM(t,e,n){return rs(t.app)?Promise.reject(Fs(t)):xM(Qn(t),yo.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&wI(t),s})}function II(t,e,n,s){return Qn(t).onIdTokenChanged(e,n,s)}function UM(t,e,n){return Qn(t).beforeAuthStateChanged(e,n)}function bI(t,e,n,s){return Qn(t).onAuthStateChanged(e,n,s)}function $M(t){return Qn(t).signOut()}const Lc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Lc,"1"),this.storage.removeItem(Lc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BM=1e3,jM=10;class CI extends RI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=pI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);cM()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,jM):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},BM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}CI.type="LOCAL";const SI=CI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI extends RI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}AI.type="SESSION";const yp=AI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HM(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Ou(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),l=await HM(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ou.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=vp("",20);r.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(){return window}function qM(t){ls().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(){return typeof ls().WorkerGlobalScope<"u"&&typeof ls().importScripts=="function"}async function KM(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function GM(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function zM(){return PI()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI="firebaseLocalStorageDb",YM=1,Dc="firebaseLocalStorage",NI="fbase_key";class rl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Lu(t,e){return t.transaction([Dc],e?"readwrite":"readonly").objectStore(Dc)}function QM(){const t=indexedDB.deleteDatabase(kI);return new rl(t).toPromise()}function zd(){const t=indexedDB.open(kI,YM);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Dc,{keyPath:NI})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Dc)?e(s):(s.close(),await QM(),e(await zd()))})})}async function gy(t,e,n){const s=Lu(t,!0).put({[NI]:e,value:n});return new rl(s).toPromise()}async function XM(t,e){const n=Lu(t,!1).get(e),s=await new rl(n).toPromise();return s===void 0?null:s.value}function yy(t,e){const n=Lu(t,!0).delete(e);return new rl(n).toPromise()}const JM=800,ZM=3;class OI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>ZM)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return PI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ou._getInstance(zM()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await KM(),!this.activeServiceWorker)return;this.sender=new WM(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||GM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zd();return await gy(e,Lc,"1"),await yy(e,Lc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>gy(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>XM(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Lu(r,!1).getAll();return new rl(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),JM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}OI.type="LOCAL";const LI=OI;new tl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ex(t,e){return e?Ds(e):(ge(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep extends _p{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function tx(t){return TI(t.auth,new Ep(t),t.bypassAuthState)}function nx(t){const{auth:e,user:n}=t;return ge(n,e,"internal-error"),MM(n,new Ep(t),t.bypassAuthState)}async function sx(t){const{auth:e,user:n}=t;return ge(n,e,"internal-error"),DM(n,new Ep(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tx;case"linkViaPopup":case"linkViaRedirect":return sx;case"reauthViaPopup":case"reauthViaRedirect":return nx;default:Gn(this.auth,"internal-error")}}resolve(e){Bs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx=new tl(2e3,1e4);class Mi extends DI{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Mi.currentPopupAction&&Mi.currentPopupAction.cancel(),Mi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ge(e,this.auth,"internal-error"),e}async onExecution(){Bs(this.filter.length===1,"Popup operations only handle one event");const e=vp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(as(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(as(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(as(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rx.get())};e()}}Mi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ix="pendingRedirect",ic=new Map;class ox extends DI{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ic.get(this.auth._key());if(!e){try{const s=await ax(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ic.set(this.auth._key(),e)}return this.bypassAuthState||ic.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ax(t,e){const n=ux(e),s=cx(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function lx(t,e){ic.set(t._key(),e)}function cx(t){return Ds(t._redirectPersistence)}function ux(t){return rc(ix,t.config.apiKey,t.name)}async function hx(t,e,n=!1){if(rs(t.app))return Promise.reject(Fs(t));const s=_i(t),r=ex(s,e),o=await new ox(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dx=10*60*1e3;class fx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!px(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!MI(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(as(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dx&&this.cachedEventUids.clear(),this.cachedEventUids.has(vy(e))}saveEventToCache(e){this.cachedEventUids.add(vy(e)),this.lastProcessedEventTime=Date.now()}}function vy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function MI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function px(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return MI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mx(t,e={}){return kr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _x=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gx=/^https?/;async function yx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await mx(t);for(const n of e)try{if(vx(n))return}catch{}Gn(t,"unauthorized-domain")}function vx(t){const e=qd(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!gx.test(n))return!1;if(_x.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ex=new tl(3e4,6e4);function Ey(){const t=ls().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Tx(t){return new Promise((e,n)=>{var s,r,i;function o(){Ey(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ey(),n(as(t,"network-request-failed"))},timeout:Ex.get()})}if(!((r=(s=ls().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=ls().gapi)===null||i===void 0)&&i.load)o();else{const a=yM("iframefcb");return ls()[a]=()=>{gapi.load?o():n(as(t,"network-request-failed"))},_I(`${gM()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw oc=null,e})}let oc=null;function wx(t){return oc=oc||Tx(t),oc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ix=new tl(5e3,15e3),bx="__/auth/iframe",Rx="emulator/auth/iframe",Cx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Sx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ax(t){const e=t.config;ge(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?fp(e,Rx):`https://${t.config.authDomain}/${bx}`,s={apiKey:e.apiKey,appName:t.name,v:Ar},r=Sx.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${go(s).slice(1)}`}async function Px(t){const e=await wx(t),n=ls().gapi;return ge(n,t,"internal-error"),e.open({where:document.body,url:Ax(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Cx,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=as(t,"network-request-failed"),a=ls().setTimeout(()=>{i(o)},Ix.get());function l(){ls().clearTimeout(a),r(s)}s.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Nx=500,Ox=600,Lx="_blank",Dx="http://localhost";class Ty{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Mx(t,e,n,s=Nx,r=Ox){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},kx),{width:s.toString(),height:r.toString(),top:i,left:o}),u=en().toLowerCase();n&&(a=cI(u)?Lx:n),aI(u)&&(e=e||Dx,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[_,T])=>`${p}${_}=${T},`,"");if(lM(u)&&a!=="_self")return xx(e||"",a),new Ty(null);const d=window.open(e||"",a,h);ge(d,t,"popup-blocked");try{d.focus()}catch{}return new Ty(d)}function xx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fx="__/auth/handler",Vx="emulator/auth/handler",Ux=encodeURIComponent("fac");async function wy(t,e,n,s,r,i){ge(t.config.authDomain,t,"auth-domain-config-required"),ge(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ar,eventId:r};if(e instanceof vI){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ud(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof sl){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),u=l?`#${Ux}=${encodeURIComponent(l)}`:"";return`${$x(t)}?${go(a).slice(1)}${u}`}function $x({config:t}){return t.emulator?fp(t,Vx):`https://${t.authDomain}/${Fx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h="webStorageSupport";class Bx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yp,this._completeRedirectFn=hx,this._overrideRedirectResult=lx}async _openPopup(e,n,s,r){var i;Bs((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await wy(e,n,s,qd(),r);return Mx(e,o,vp())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await wy(e,n,s,qd(),r);return qM(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Bs(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Px(e),s=new fx(e);return n.register("authEvent",r=>(ge(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($h,{type:$h},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[$h];o!==void 0&&n(!!o),Gn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return pI()||lI()||mp()}}const xI=Bx;var Iy="@firebase/auth",by="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ge(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Wx(t){hs(new Kn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;ge(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mI(t)},u=new pM(s,r,i,l);return wM(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),hs(new Kn("auth-internal",e=>{const n=_i(e.getProvider("auth").getImmediate());return(s=>new jx(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rn(Iy,by,Hx(t)),Rn(Iy,by,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qx=5*60,Kx=jw("authIdTokenMaxAge")||qx;let Ry=null;const Gx=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Kx)return;const r=n==null?void 0:n.token;Ry!==r&&(Ry=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function FI(t=up()){const e=cp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=gI(t,{popupRedirectResolver:xI,persistence:[LI,SI,yp]}),s=jw("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=Gx(i.toString());UM(n,o,()=>o(n.currentUser)),II(n,a=>o(a))}}const r=$w("auth");return r&&IM(n,`http://${r}`),n}function zx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}mM({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=as("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",zx().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Wx("Browser");var Cy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zr,VI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(y,g){function v(){}v.prototype=g.prototype,y.D=g.prototype,y.prototype=new v,y.prototype.constructor=y,y.C=function(P,D,k){for(var S=Array(arguments.length-2),we=2;we<arguments.length;we++)S[we-2]=arguments[we];return g.prototype[D].apply(P,S)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(y,g,v){v||(v=0);var P=Array(16);if(typeof g=="string")for(var D=0;16>D;++D)P[D]=g.charCodeAt(v++)|g.charCodeAt(v++)<<8|g.charCodeAt(v++)<<16|g.charCodeAt(v++)<<24;else for(D=0;16>D;++D)P[D]=g[v++]|g[v++]<<8|g[v++]<<16|g[v++]<<24;g=y.g[0],v=y.g[1],D=y.g[2];var k=y.g[3],S=g+(k^v&(D^k))+P[0]+3614090360&4294967295;g=v+(S<<7&4294967295|S>>>25),S=k+(D^g&(v^D))+P[1]+3905402710&4294967295,k=g+(S<<12&4294967295|S>>>20),S=D+(v^k&(g^v))+P[2]+606105819&4294967295,D=k+(S<<17&4294967295|S>>>15),S=v+(g^D&(k^g))+P[3]+3250441966&4294967295,v=D+(S<<22&4294967295|S>>>10),S=g+(k^v&(D^k))+P[4]+4118548399&4294967295,g=v+(S<<7&4294967295|S>>>25),S=k+(D^g&(v^D))+P[5]+1200080426&4294967295,k=g+(S<<12&4294967295|S>>>20),S=D+(v^k&(g^v))+P[6]+2821735955&4294967295,D=k+(S<<17&4294967295|S>>>15),S=v+(g^D&(k^g))+P[7]+4249261313&4294967295,v=D+(S<<22&4294967295|S>>>10),S=g+(k^v&(D^k))+P[8]+1770035416&4294967295,g=v+(S<<7&4294967295|S>>>25),S=k+(D^g&(v^D))+P[9]+2336552879&4294967295,k=g+(S<<12&4294967295|S>>>20),S=D+(v^k&(g^v))+P[10]+4294925233&4294967295,D=k+(S<<17&4294967295|S>>>15),S=v+(g^D&(k^g))+P[11]+2304563134&4294967295,v=D+(S<<22&4294967295|S>>>10),S=g+(k^v&(D^k))+P[12]+1804603682&4294967295,g=v+(S<<7&4294967295|S>>>25),S=k+(D^g&(v^D))+P[13]+4254626195&4294967295,k=g+(S<<12&4294967295|S>>>20),S=D+(v^k&(g^v))+P[14]+2792965006&4294967295,D=k+(S<<17&4294967295|S>>>15),S=v+(g^D&(k^g))+P[15]+1236535329&4294967295,v=D+(S<<22&4294967295|S>>>10),S=g+(D^k&(v^D))+P[1]+4129170786&4294967295,g=v+(S<<5&4294967295|S>>>27),S=k+(v^D&(g^v))+P[6]+3225465664&4294967295,k=g+(S<<9&4294967295|S>>>23),S=D+(g^v&(k^g))+P[11]+643717713&4294967295,D=k+(S<<14&4294967295|S>>>18),S=v+(k^g&(D^k))+P[0]+3921069994&4294967295,v=D+(S<<20&4294967295|S>>>12),S=g+(D^k&(v^D))+P[5]+3593408605&4294967295,g=v+(S<<5&4294967295|S>>>27),S=k+(v^D&(g^v))+P[10]+38016083&4294967295,k=g+(S<<9&4294967295|S>>>23),S=D+(g^v&(k^g))+P[15]+3634488961&4294967295,D=k+(S<<14&4294967295|S>>>18),S=v+(k^g&(D^k))+P[4]+3889429448&4294967295,v=D+(S<<20&4294967295|S>>>12),S=g+(D^k&(v^D))+P[9]+568446438&4294967295,g=v+(S<<5&4294967295|S>>>27),S=k+(v^D&(g^v))+P[14]+3275163606&4294967295,k=g+(S<<9&4294967295|S>>>23),S=D+(g^v&(k^g))+P[3]+4107603335&4294967295,D=k+(S<<14&4294967295|S>>>18),S=v+(k^g&(D^k))+P[8]+1163531501&4294967295,v=D+(S<<20&4294967295|S>>>12),S=g+(D^k&(v^D))+P[13]+2850285829&4294967295,g=v+(S<<5&4294967295|S>>>27),S=k+(v^D&(g^v))+P[2]+4243563512&4294967295,k=g+(S<<9&4294967295|S>>>23),S=D+(g^v&(k^g))+P[7]+1735328473&4294967295,D=k+(S<<14&4294967295|S>>>18),S=v+(k^g&(D^k))+P[12]+2368359562&4294967295,v=D+(S<<20&4294967295|S>>>12),S=g+(v^D^k)+P[5]+4294588738&4294967295,g=v+(S<<4&4294967295|S>>>28),S=k+(g^v^D)+P[8]+2272392833&4294967295,k=g+(S<<11&4294967295|S>>>21),S=D+(k^g^v)+P[11]+1839030562&4294967295,D=k+(S<<16&4294967295|S>>>16),S=v+(D^k^g)+P[14]+4259657740&4294967295,v=D+(S<<23&4294967295|S>>>9),S=g+(v^D^k)+P[1]+2763975236&4294967295,g=v+(S<<4&4294967295|S>>>28),S=k+(g^v^D)+P[4]+1272893353&4294967295,k=g+(S<<11&4294967295|S>>>21),S=D+(k^g^v)+P[7]+4139469664&4294967295,D=k+(S<<16&4294967295|S>>>16),S=v+(D^k^g)+P[10]+3200236656&4294967295,v=D+(S<<23&4294967295|S>>>9),S=g+(v^D^k)+P[13]+681279174&4294967295,g=v+(S<<4&4294967295|S>>>28),S=k+(g^v^D)+P[0]+3936430074&4294967295,k=g+(S<<11&4294967295|S>>>21),S=D+(k^g^v)+P[3]+3572445317&4294967295,D=k+(S<<16&4294967295|S>>>16),S=v+(D^k^g)+P[6]+76029189&4294967295,v=D+(S<<23&4294967295|S>>>9),S=g+(v^D^k)+P[9]+3654602809&4294967295,g=v+(S<<4&4294967295|S>>>28),S=k+(g^v^D)+P[12]+3873151461&4294967295,k=g+(S<<11&4294967295|S>>>21),S=D+(k^g^v)+P[15]+530742520&4294967295,D=k+(S<<16&4294967295|S>>>16),S=v+(D^k^g)+P[2]+3299628645&4294967295,v=D+(S<<23&4294967295|S>>>9),S=g+(D^(v|~k))+P[0]+4096336452&4294967295,g=v+(S<<6&4294967295|S>>>26),S=k+(v^(g|~D))+P[7]+1126891415&4294967295,k=g+(S<<10&4294967295|S>>>22),S=D+(g^(k|~v))+P[14]+2878612391&4294967295,D=k+(S<<15&4294967295|S>>>17),S=v+(k^(D|~g))+P[5]+4237533241&4294967295,v=D+(S<<21&4294967295|S>>>11),S=g+(D^(v|~k))+P[12]+1700485571&4294967295,g=v+(S<<6&4294967295|S>>>26),S=k+(v^(g|~D))+P[3]+2399980690&4294967295,k=g+(S<<10&4294967295|S>>>22),S=D+(g^(k|~v))+P[10]+4293915773&4294967295,D=k+(S<<15&4294967295|S>>>17),S=v+(k^(D|~g))+P[1]+2240044497&4294967295,v=D+(S<<21&4294967295|S>>>11),S=g+(D^(v|~k))+P[8]+1873313359&4294967295,g=v+(S<<6&4294967295|S>>>26),S=k+(v^(g|~D))+P[15]+4264355552&4294967295,k=g+(S<<10&4294967295|S>>>22),S=D+(g^(k|~v))+P[6]+2734768916&4294967295,D=k+(S<<15&4294967295|S>>>17),S=v+(k^(D|~g))+P[13]+1309151649&4294967295,v=D+(S<<21&4294967295|S>>>11),S=g+(D^(v|~k))+P[4]+4149444226&4294967295,g=v+(S<<6&4294967295|S>>>26),S=k+(v^(g|~D))+P[11]+3174756917&4294967295,k=g+(S<<10&4294967295|S>>>22),S=D+(g^(k|~v))+P[2]+718787259&4294967295,D=k+(S<<15&4294967295|S>>>17),S=v+(k^(D|~g))+P[9]+3951481745&4294967295,y.g[0]=y.g[0]+g&4294967295,y.g[1]=y.g[1]+(D+(S<<21&4294967295|S>>>11))&4294967295,y.g[2]=y.g[2]+D&4294967295,y.g[3]=y.g[3]+k&4294967295}s.prototype.u=function(y,g){g===void 0&&(g=y.length);for(var v=g-this.blockSize,P=this.B,D=this.h,k=0;k<g;){if(D==0)for(;k<=v;)r(this,y,k),k+=this.blockSize;if(typeof y=="string"){for(;k<g;)if(P[D++]=y.charCodeAt(k++),D==this.blockSize){r(this,P),D=0;break}}else for(;k<g;)if(P[D++]=y[k++],D==this.blockSize){r(this,P),D=0;break}}this.h=D,this.o+=g},s.prototype.v=function(){var y=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);y[0]=128;for(var g=1;g<y.length-8;++g)y[g]=0;var v=8*this.o;for(g=y.length-8;g<y.length;++g)y[g]=v&255,v/=256;for(this.u(y),y=Array(16),g=v=0;4>g;++g)for(var P=0;32>P;P+=8)y[v++]=this.g[g]>>>P&255;return y};function i(y,g){var v=a;return Object.prototype.hasOwnProperty.call(v,y)?v[y]:v[y]=g(y)}function o(y,g){this.h=g;for(var v=[],P=!0,D=y.length-1;0<=D;D--){var k=y[D]|0;P&&k==g||(v[D]=k,P=!1)}this.g=v}var a={};function l(y){return-128<=y&&128>y?i(y,function(g){return new o([g|0],0>g?-1:0)}):new o([y|0],0>y?-1:0)}function u(y){if(isNaN(y)||!isFinite(y))return d;if(0>y)return I(u(-y));for(var g=[],v=1,P=0;y>=v;P++)g[P]=y/v|0,v*=4294967296;return new o(g,0)}function h(y,g){if(y.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(y.charAt(0)=="-")return I(h(y.substring(1),g));if(0<=y.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(g,8)),P=d,D=0;D<y.length;D+=8){var k=Math.min(8,y.length-D),S=parseInt(y.substring(D,D+k),g);8>k?(k=u(Math.pow(g,k)),P=P.j(k).add(u(S))):(P=P.j(v),P=P.add(u(S)))}return P}var d=l(0),p=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(A(this))return-I(this).m();for(var y=0,g=1,v=0;v<this.g.length;v++){var P=this.i(v);y+=(0<=P?P:4294967296+P)*g,g*=4294967296}return y},t.toString=function(y){if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(T(this))return"0";if(A(this))return"-"+I(this).toString(y);for(var g=u(Math.pow(y,6)),v=this,P="";;){var D=O(v,g).g;v=b(v,D.j(g));var k=((0<v.g.length?v.g[0]:v.h)>>>0).toString(y);if(v=D,T(v))return k+P;for(;6>k.length;)k="0"+k;P=k+P}},t.i=function(y){return 0>y?0:y<this.g.length?this.g[y]:this.h};function T(y){if(y.h!=0)return!1;for(var g=0;g<y.g.length;g++)if(y.g[g]!=0)return!1;return!0}function A(y){return y.h==-1}t.l=function(y){return y=b(this,y),A(y)?-1:T(y)?0:1};function I(y){for(var g=y.g.length,v=[],P=0;P<g;P++)v[P]=~y.g[P];return new o(v,~y.h).add(p)}t.abs=function(){return A(this)?I(this):this},t.add=function(y){for(var g=Math.max(this.g.length,y.g.length),v=[],P=0,D=0;D<=g;D++){var k=P+(this.i(D)&65535)+(y.i(D)&65535),S=(k>>>16)+(this.i(D)>>>16)+(y.i(D)>>>16);P=S>>>16,k&=65535,S&=65535,v[D]=S<<16|k}return new o(v,v[v.length-1]&-2147483648?-1:0)};function b(y,g){return y.add(I(g))}t.j=function(y){if(T(this)||T(y))return d;if(A(this))return A(y)?I(this).j(I(y)):I(I(this).j(y));if(A(y))return I(this.j(I(y)));if(0>this.l(_)&&0>y.l(_))return u(this.m()*y.m());for(var g=this.g.length+y.g.length,v=[],P=0;P<2*g;P++)v[P]=0;for(P=0;P<this.g.length;P++)for(var D=0;D<y.g.length;D++){var k=this.i(P)>>>16,S=this.i(P)&65535,we=y.i(D)>>>16,Ze=y.i(D)&65535;v[2*P+2*D]+=S*Ze,L(v,2*P+2*D),v[2*P+2*D+1]+=k*Ze,L(v,2*P+2*D+1),v[2*P+2*D+1]+=S*we,L(v,2*P+2*D+1),v[2*P+2*D+2]+=k*we,L(v,2*P+2*D+2)}for(P=0;P<g;P++)v[P]=v[2*P+1]<<16|v[2*P];for(P=g;P<2*g;P++)v[P]=0;return new o(v,0)};function L(y,g){for(;(y[g]&65535)!=y[g];)y[g+1]+=y[g]>>>16,y[g]&=65535,g++}function M(y,g){this.g=y,this.h=g}function O(y,g){if(T(g))throw Error("division by zero");if(T(y))return new M(d,d);if(A(y))return g=O(I(y),g),new M(I(g.g),I(g.h));if(A(g))return g=O(y,I(g)),new M(I(g.g),g.h);if(30<y.g.length){if(A(y)||A(g))throw Error("slowDivide_ only works with positive integers.");for(var v=p,P=g;0>=P.l(y);)v=V(v),P=V(P);var D=$(v,1),k=$(P,1);for(P=$(P,2),v=$(v,2);!T(P);){var S=k.add(P);0>=S.l(y)&&(D=D.add(v),k=S),P=$(P,1),v=$(v,1)}return g=b(y,D.j(g)),new M(D,g)}for(D=d;0<=y.l(g);){for(v=Math.max(1,Math.floor(y.m()/g.m())),P=Math.ceil(Math.log(v)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),k=u(v),S=k.j(g);A(S)||0<S.l(y);)v-=P,k=u(v),S=k.j(g);T(k)&&(k=p),D=D.add(k),y=b(y,S)}return new M(D,y)}t.A=function(y){return O(this,y).h},t.and=function(y){for(var g=Math.max(this.g.length,y.g.length),v=[],P=0;P<g;P++)v[P]=this.i(P)&y.i(P);return new o(v,this.h&y.h)},t.or=function(y){for(var g=Math.max(this.g.length,y.g.length),v=[],P=0;P<g;P++)v[P]=this.i(P)|y.i(P);return new o(v,this.h|y.h)},t.xor=function(y){for(var g=Math.max(this.g.length,y.g.length),v=[],P=0;P<g;P++)v[P]=this.i(P)^y.i(P);return new o(v,this.h^y.h)};function V(y){for(var g=y.g.length+1,v=[],P=0;P<g;P++)v[P]=y.i(P)<<1|y.i(P-1)>>>31;return new o(v,y.h)}function $(y,g){var v=g>>5;g%=32;for(var P=y.g.length-v,D=[],k=0;k<P;k++)D[k]=0<g?y.i(k+v)>>>g|y.i(k+v+1)<<32-g:y.i(k+v);return new o(D,y.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,VI=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Zr=o}).apply(typeof Cy<"u"?Cy:typeof self<"u"?self:typeof window<"u"?window:{});var Fl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var UI,Xo,$I,ac,Yd,BI,jI,HI;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,f,m){return c==Array.prototype||c==Object.prototype||(c[f]=m.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fl=="object"&&Fl];for(var f=0;f<c.length;++f){var m=c[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var s=n(this);function r(c,f){if(f)e:{var m=s;c=c.split(".");for(var E=0;E<c.length-1;E++){var U=c[E];if(!(U in m))break e;m=m[U]}c=c[c.length-1],E=m[c],f=f(E),f!=E&&f!=null&&e(m,c,{configurable:!0,writable:!0,value:f})}}function i(c,f){c instanceof String&&(c+="");var m=0,E=!1,U={next:function(){if(!E&&m<c.length){var q=m++;return{value:f(q,c[q]),done:!1}}return E=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}r("Array.prototype.values",function(c){return c||function(){return i(this,function(f,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(c){var f=typeof c;return f=f!="object"?f:c?Array.isArray(c)?"array":f:"null",f=="array"||f=="object"&&typeof c.length=="number"}function u(c){var f=typeof c;return f=="object"&&c!=null||f=="function"}function h(c,f,m){return c.call.apply(c.bind,arguments)}function d(c,f,m){if(!c)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,E),c.apply(f,U)}}return function(){return c.apply(f,arguments)}}function p(c,f,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,p.apply(null,arguments)}function _(c,f){var m=Array.prototype.slice.call(arguments,1);return function(){var E=m.slice();return E.push.apply(E,arguments),c.apply(this,E)}}function T(c,f){function m(){}m.prototype=f.prototype,c.aa=f.prototype,c.prototype=new m,c.prototype.constructor=c,c.Qb=function(E,U,q){for(var te=Array(arguments.length-2),et=2;et<arguments.length;et++)te[et-2]=arguments[et];return f.prototype[U].apply(E,te)}}function A(c){const f=c.length;if(0<f){const m=Array(f);for(let E=0;E<f;E++)m[E]=c[E];return m}return[]}function I(c,f){for(let m=1;m<arguments.length;m++){const E=arguments[m];if(l(E)){const U=c.length||0,q=E.length||0;c.length=U+q;for(let te=0;te<q;te++)c[U+te]=E[te]}else c.push(E)}}class b{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function L(c){return/^[\s\xa0]*$/.test(c)}function M(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function O(c){return O[" "](c),c}O[" "]=function(){};var V=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function $(c,f,m){for(const E in c)f.call(m,c[E],E,c)}function y(c,f){for(const m in c)f.call(void 0,c[m],m,c)}function g(c){const f={};for(const m in c)f[m]=c[m];return f}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(c,f){let m,E;for(let U=1;U<arguments.length;U++){E=arguments[U];for(m in E)c[m]=E[m];for(let q=0;q<v.length;q++)m=v[q],Object.prototype.hasOwnProperty.call(E,m)&&(c[m]=E[m])}}function D(c){var f=1;c=c.split(":");const m=[];for(;0<f&&c.length;)m.push(c.shift()),f--;return c.length&&m.push(c.join(":")),m}function k(c){a.setTimeout(()=>{throw c},0)}function S(){var c=st;let f=null;return c.g&&(f=c.g,c.g=c.g.next,c.g||(c.h=null),f.next=null),f}class we{constructor(){this.h=this.g=null}add(f,m){const E=Ze.get();E.set(f,m),this.h?this.h.next=E:this.g=E,this.h=E}}var Ze=new b(()=>new ke,c=>c.reset());class ke{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let fe,Ee=!1,st=new we,kt=()=>{const c=a.Promise.resolve(void 0);fe=()=>{c.then(St)}};var St=()=>{for(var c;c=S();){try{c.h.call(c.g)}catch(m){k(m)}var f=Ze;f.j(c),100>f.h&&(f.h++,c.next=f.g,f.g=c)}Ee=!1};function We(){this.s=this.s,this.C=this.C}We.prototype.s=!1,We.prototype.ma=function(){this.s||(this.s=!0,this.N())},We.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function qe(c,f){this.type=c,this.g=this.target=f,this.defaultPrevented=!1}qe.prototype.h=function(){this.defaultPrevented=!0};var Fe=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,f=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const m=()=>{};a.addEventListener("test",m,f),a.removeEventListener("test",m,f)}catch{}return c}();function ct(c,f){if(qe.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var m=this.type=c.type,E=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=f,f=c.relatedTarget){if(V){e:{try{O(f.nodeName);var U=!0;break e}catch{}U=!1}U||(f=null)}}else m=="mouseover"?f=c.fromElement:m=="mouseout"&&(f=c.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:It[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&ct.aa.h.call(this)}}T(ct,qe);var It={2:"touch",3:"pen",4:"mouse"};ct.prototype.h=function(){ct.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var G="closure_listenable_"+(1e6*Math.random()|0),se=0;function X(c,f,m,E,U){this.listener=c,this.proxy=null,this.src=f,this.type=m,this.capture=!!E,this.ha=U,this.key=++se,this.da=this.fa=!1}function oe(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Se(c){this.src=c,this.g={},this.h=0}Se.prototype.add=function(c,f,m,E,U){var q=c.toString();c=this.g[q],c||(c=this.g[q]=[],this.h++);var te=R(c,f,E,U);return-1<te?(f=c[te],m||(f.fa=!1)):(f=new X(f,this.src,q,!!E,U),f.fa=m,c.push(f)),f};function Be(c,f){var m=f.type;if(m in c.g){var E=c.g[m],U=Array.prototype.indexOf.call(E,f,void 0),q;(q=0<=U)&&Array.prototype.splice.call(E,U,1),q&&(oe(f),c.g[m].length==0&&(delete c.g[m],c.h--))}}function R(c,f,m,E){for(var U=0;U<c.length;++U){var q=c[U];if(!q.da&&q.listener==f&&q.capture==!!m&&q.ha==E)return U}return-1}var N="closure_lm_"+(1e6*Math.random()|0),B={};function Q(c,f,m,E,U){if(Array.isArray(f)){for(var q=0;q<f.length;q++)Q(c,f[q],m,E,U);return null}return m=j(m),c&&c[G]?c.K(f,m,u(E)?!!E.capture:!!E,U):z(c,f,m,!1,E,U)}function z(c,f,m,E,U,q){if(!f)throw Error("Invalid event type");var te=u(U)?!!U.capture:!!U,et=Z(c);if(et||(c[N]=et=new Se(c)),m=et.add(f,m,E,te,q),m.proxy)return m;if(E=w(),m.proxy=E,E.src=c,E.listener=m,c.addEventListener)Fe||(U=te),U===void 0&&(U=!1),c.addEventListener(f.toString(),E,U);else if(c.attachEvent)c.attachEvent(W(f.toString()),E);else if(c.addListener&&c.removeListener)c.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return m}function w(){function c(m){return f.call(c.src,c.listener,m)}const f=Y;return c}function C(c,f,m,E,U){if(Array.isArray(f))for(var q=0;q<f.length;q++)C(c,f[q],m,E,U);else E=u(E)?!!E.capture:!!E,m=j(m),c&&c[G]?(c=c.i,f=String(f).toString(),f in c.g&&(q=c.g[f],m=R(q,m,E,U),-1<m&&(oe(q[m]),Array.prototype.splice.call(q,m,1),q.length==0&&(delete c.g[f],c.h--)))):c&&(c=Z(c))&&(f=c.g[f.toString()],c=-1,f&&(c=R(f,m,E,U)),(m=-1<c?f[c]:null)&&F(m))}function F(c){if(typeof c!="number"&&c&&!c.da){var f=c.src;if(f&&f[G])Be(f.i,c);else{var m=c.type,E=c.proxy;f.removeEventListener?f.removeEventListener(m,E,c.capture):f.detachEvent?f.detachEvent(W(m),E):f.addListener&&f.removeListener&&f.removeListener(E),(m=Z(f))?(Be(m,c),m.h==0&&(m.src=null,f[N]=null)):oe(c)}}}function W(c){return c in B?B[c]:B[c]="on"+c}function Y(c,f){if(c.da)c=!0;else{f=new ct(f,this);var m=c.listener,E=c.ha||c.src;c.fa&&F(c),c=m.call(E,f)}return c}function Z(c){return c=c[N],c instanceof Se?c:null}var x="__closure_events_fn_"+(1e9*Math.random()>>>0);function j(c){return typeof c=="function"?c:(c[x]||(c[x]=function(f){return c.handleEvent(f)}),c[x])}function ee(){We.call(this),this.i=new Se(this),this.M=this,this.F=null}T(ee,We),ee.prototype[G]=!0,ee.prototype.removeEventListener=function(c,f,m,E){C(this,c,f,m,E)};function ie(c,f){var m,E=c.F;if(E)for(m=[];E;E=E.F)m.push(E);if(c=c.M,E=f.type||f,typeof f=="string")f=new qe(f,c);else if(f instanceof qe)f.target=f.target||c;else{var U=f;f=new qe(E,c),P(f,U)}if(U=!0,m)for(var q=m.length-1;0<=q;q--){var te=f.g=m[q];U=Re(te,E,!0,f)&&U}if(te=f.g=c,U=Re(te,E,!0,f)&&U,U=Re(te,E,!1,f)&&U,m)for(q=0;q<m.length;q++)te=f.g=m[q],U=Re(te,E,!1,f)&&U}ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var c=this.i,f;for(f in c.g){for(var m=c.g[f],E=0;E<m.length;E++)oe(m[E]);delete c.g[f],c.h--}}this.F=null},ee.prototype.K=function(c,f,m,E){return this.i.add(String(c),f,!1,m,E)},ee.prototype.L=function(c,f,m,E){return this.i.add(String(c),f,!0,m,E)};function Re(c,f,m,E){if(f=c.i.g[String(f)],!f)return!0;f=f.concat();for(var U=!0,q=0;q<f.length;++q){var te=f[q];if(te&&!te.da&&te.capture==m){var et=te.listener,Vt=te.ha||te.src;te.fa&&Be(c.i,te),U=et.call(Vt,E)!==!1&&U}}return U&&!E.defaultPrevented}function Ae(c,f,m){if(typeof c=="function")m&&(c=p(c,m));else if(c&&typeof c.handleEvent=="function")c=p(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(c,f||0)}function dt(c){c.g=Ae(()=>{c.g=null,c.i&&(c.i=!1,dt(c))},c.l);const f=c.h;c.h=null,c.m.apply(null,f)}class bt extends We{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:dt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Nt(c){We.call(this),this.h=c,this.g={}}T(Nt,We);var jt=[];function qs(c){$(c.g,function(f,m){this.g.hasOwnProperty(m)&&F(f)},c),c.g={}}Nt.prototype.N=function(){Nt.aa.N.call(this),qs(this)},Nt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var vi=a.JSON.stringify,tn=a.JSON.parse,Sn=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function Ei(){}Ei.prototype.h=null;function dm(c){return c.h||(c.h=c.i())}function fm(){}var Ro={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function zu(){qe.call(this,"d")}T(zu,qe);function Yu(){qe.call(this,"c")}T(Yu,qe);var Nr={},pm=null;function pl(){return pm=pm||new ee}Nr.La="serverreachability";function mm(c){qe.call(this,Nr.La,c)}T(mm,qe);function Co(c){const f=pl();ie(f,new mm(f))}Nr.STAT_EVENT="statevent";function _m(c,f){qe.call(this,Nr.STAT_EVENT,c),this.stat=f}T(_m,qe);function nn(c){const f=pl();ie(f,new _m(f,c))}Nr.Ma="timingevent";function gm(c,f){qe.call(this,Nr.Ma,c),this.size=f}T(gm,qe);function So(c,f){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},f)}function Ao(){this.g=!0}Ao.prototype.xa=function(){this.g=!1};function iR(c,f,m,E,U,q){c.info(function(){if(c.g)if(q)for(var te="",et=q.split("&"),Vt=0;Vt<et.length;Vt++){var Ue=et[Vt].split("=");if(1<Ue.length){var Ht=Ue[0];Ue=Ue[1];var Wt=Ht.split("_");te=2<=Wt.length&&Wt[1]=="type"?te+(Ht+"="+Ue+"&"):te+(Ht+"=redacted&")}}else te=null;else te=q;return"XMLHTTP REQ ("+E+") [attempt "+U+"]: "+f+`
`+m+`
`+te})}function oR(c,f,m,E,U,q,te){c.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+U+"]: "+f+`
`+m+`
`+q+" "+te})}function Ti(c,f,m,E){c.info(function(){return"XMLHTTP TEXT ("+f+"): "+lR(c,m)+(E?" "+E:"")})}function aR(c,f){c.info(function(){return"TIMEOUT: "+f})}Ao.prototype.info=function(){};function lR(c,f){if(!c.g)return f;if(!f)return null;try{var m=JSON.parse(f);if(m){for(c=0;c<m.length;c++)if(Array.isArray(m[c])){var E=m[c];if(!(2>E.length)){var U=E[1];if(Array.isArray(U)&&!(1>U.length)){var q=U[0];if(q!="noop"&&q!="stop"&&q!="close")for(var te=1;te<U.length;te++)U[te]=""}}}}return vi(m)}catch{return f}}var ml={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ym={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Qu;function _l(){}T(_l,Ei),_l.prototype.g=function(){return new XMLHttpRequest},_l.prototype.i=function(){return{}},Qu=new _l;function Ks(c,f,m,E){this.j=c,this.i=f,this.l=m,this.R=E||1,this.U=new Nt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new vm}function vm(){this.i=null,this.g="",this.h=!1}var Em={},Xu={};function Ju(c,f,m){c.L=1,c.v=El(vs(f)),c.m=m,c.P=!0,Tm(c,null)}function Tm(c,f){c.F=Date.now(),gl(c),c.A=vs(c.v);var m=c.A,E=c.R;Array.isArray(E)||(E=[String(E)]),Mm(m.i,"t",E),c.C=0,m=c.j.J,c.h=new vm,c.g=Zm(c.j,m?f:null,!c.m),0<c.O&&(c.M=new bt(p(c.Y,c,c.g),c.O)),f=c.U,m=c.g,E=c.ca;var U="readystatechange";Array.isArray(U)||(U&&(jt[0]=U.toString()),U=jt);for(var q=0;q<U.length;q++){var te=Q(m,U[q],E||f.handleEvent,!1,f.h||f);if(!te)break;f.g[te.key]=te}f=c.H?g(c.H):{},c.m?(c.u||(c.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,f)):(c.u="GET",c.g.ea(c.A,c.u,null,f)),Co(),iR(c.i,c.u,c.A,c.l,c.R,c.m)}Ks.prototype.ca=function(c){c=c.target;const f=this.M;f&&Es(c)==3?f.j():this.Y(c)},Ks.prototype.Y=function(c){try{if(c==this.g)e:{const Wt=Es(this.g);var f=this.g.Ba();const bi=this.g.Z();if(!(3>Wt)&&(Wt!=3||this.g&&(this.h.h||this.g.oa()||jm(this.g)))){this.J||Wt!=4||f==7||(f==8||0>=bi?Co(3):Co(2)),Zu(this);var m=this.g.Z();this.X=m;t:if(wm(this)){var E=jm(this.g);c="";var U=E.length,q=Es(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Or(this),Po(this);var te="";break t}this.h.i=new a.TextDecoder}for(f=0;f<U;f++)this.h.h=!0,c+=this.h.i.decode(E[f],{stream:!(q&&f==U-1)});E.length=0,this.h.g+=c,this.C=0,te=this.h.g}else te=this.g.oa();if(this.o=m==200,oR(this.i,this.u,this.A,this.l,this.R,Wt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var et,Vt=this.g;if((et=Vt.g?Vt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(et)){var Ue=et;break t}}Ue=null}if(m=Ue)Ti(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,eh(this,m);else{this.o=!1,this.s=3,nn(12),Or(this),Po(this);break e}}if(this.P){m=!0;let Dn;for(;!this.J&&this.C<te.length;)if(Dn=cR(this,te),Dn==Xu){Wt==4&&(this.s=4,nn(14),m=!1),Ti(this.i,this.l,null,"[Incomplete Response]");break}else if(Dn==Em){this.s=4,nn(15),Ti(this.i,this.l,te,"[Invalid Chunk]"),m=!1;break}else Ti(this.i,this.l,Dn,null),eh(this,Dn);if(wm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Wt!=4||te.length!=0||this.h.h||(this.s=1,nn(16),m=!1),this.o=this.o&&m,!m)Ti(this.i,this.l,te,"[Invalid Chunked Response]"),Or(this),Po(this);else if(0<te.length&&!this.W){this.W=!0;var Ht=this.j;Ht.g==this&&Ht.ba&&!Ht.M&&(Ht.j.info("Great, no buffering proxy detected. Bytes received: "+te.length),oh(Ht),Ht.M=!0,nn(11))}}else Ti(this.i,this.l,te,null),eh(this,te);Wt==4&&Or(this),this.o&&!this.J&&(Wt==4?Ym(this.j,this):(this.o=!1,gl(this)))}else CR(this.g),m==400&&0<te.indexOf("Unknown SID")?(this.s=3,nn(12)):(this.s=0,nn(13)),Or(this),Po(this)}}}catch{}finally{}};function wm(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function cR(c,f){var m=c.C,E=f.indexOf(`
`,m);return E==-1?Xu:(m=Number(f.substring(m,E)),isNaN(m)?Em:(E+=1,E+m>f.length?Xu:(f=f.slice(E,E+m),c.C=E+m,f)))}Ks.prototype.cancel=function(){this.J=!0,Or(this)};function gl(c){c.S=Date.now()+c.I,Im(c,c.I)}function Im(c,f){if(c.B!=null)throw Error("WatchDog timer not null");c.B=So(p(c.ba,c),f)}function Zu(c){c.B&&(a.clearTimeout(c.B),c.B=null)}Ks.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(aR(this.i,this.A),this.L!=2&&(Co(),nn(17)),Or(this),this.s=2,Po(this)):Im(this,this.S-c)};function Po(c){c.j.G==0||c.J||Ym(c.j,c)}function Or(c){Zu(c);var f=c.M;f&&typeof f.ma=="function"&&f.ma(),c.M=null,qs(c.U),c.g&&(f=c.g,c.g=null,f.abort(),f.ma())}function eh(c,f){try{var m=c.j;if(m.G!=0&&(m.g==c||th(m.h,c))){if(!c.K&&th(m.h,c)&&m.G==3){try{var E=m.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var U=E;if(U[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<c.F)Cl(m),bl(m);else break e;ih(m),nn(18)}}else m.za=U[1],0<m.za-m.T&&37500>U[2]&&m.F&&m.v==0&&!m.C&&(m.C=So(p(m.Za,m),6e3));if(1>=Cm(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else Dr(m,11)}else if((c.K||m.g==c)&&Cl(m),!L(f))for(U=m.Da.g.parse(f),f=0;f<U.length;f++){let Ue=U[f];if(m.T=Ue[0],Ue=Ue[1],m.G==2)if(Ue[0]=="c"){m.K=Ue[1],m.ia=Ue[2];const Ht=Ue[3];Ht!=null&&(m.la=Ht,m.j.info("VER="+m.la));const Wt=Ue[4];Wt!=null&&(m.Aa=Wt,m.j.info("SVER="+m.Aa));const bi=Ue[5];bi!=null&&typeof bi=="number"&&0<bi&&(E=1.5*bi,m.L=E,m.j.info("backChannelRequestTimeoutMs_="+E)),E=m;const Dn=c.g;if(Dn){const Al=Dn.g?Dn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Al){var q=E.h;q.g||Al.indexOf("spdy")==-1&&Al.indexOf("quic")==-1&&Al.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(nh(q,q.h),q.h=null))}if(E.D){const ah=Dn.g?Dn.g.getResponseHeader("X-HTTP-Session-Id"):null;ah&&(E.ya=ah,rt(E.I,E.D,ah))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-c.F,m.j.info("Handshake RTT: "+m.R+"ms")),E=m;var te=c;if(E.qa=Jm(E,E.J?E.ia:null,E.W),te.K){Sm(E.h,te);var et=te,Vt=E.L;Vt&&(et.I=Vt),et.B&&(Zu(et),gl(et)),E.g=te}else Gm(E);0<m.i.length&&Rl(m)}else Ue[0]!="stop"&&Ue[0]!="close"||Dr(m,7);else m.G==3&&(Ue[0]=="stop"||Ue[0]=="close"?Ue[0]=="stop"?Dr(m,7):rh(m):Ue[0]!="noop"&&m.l&&m.l.ta(Ue),m.v=0)}}Co(4)}catch{}}var uR=class{constructor(c,f){this.g=c,this.map=f}};function bm(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Rm(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Cm(c){return c.h?1:c.g?c.g.size:0}function th(c,f){return c.h?c.h==f:c.g?c.g.has(f):!1}function nh(c,f){c.g?c.g.add(f):c.h=f}function Sm(c,f){c.h&&c.h==f?c.h=null:c.g&&c.g.has(f)&&c.g.delete(f)}bm.prototype.cancel=function(){if(this.i=Am(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Am(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let f=c.i;for(const m of c.g.values())f=f.concat(m.D);return f}return A(c.i)}function hR(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(l(c)){for(var f=[],m=c.length,E=0;E<m;E++)f.push(c[E]);return f}f=[],m=0;for(E in c)f[m++]=c[E];return f}function dR(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(l(c)||typeof c=="string"){var f=[];c=c.length;for(var m=0;m<c;m++)f.push(m);return f}f=[],m=0;for(const E in c)f[m++]=E;return f}}}function Pm(c,f){if(c.forEach&&typeof c.forEach=="function")c.forEach(f,void 0);else if(l(c)||typeof c=="string")Array.prototype.forEach.call(c,f,void 0);else for(var m=dR(c),E=hR(c),U=E.length,q=0;q<U;q++)f.call(void 0,E[q],m&&m[q],c)}var km=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fR(c,f){if(c){c=c.split("&");for(var m=0;m<c.length;m++){var E=c[m].indexOf("="),U=null;if(0<=E){var q=c[m].substring(0,E);U=c[m].substring(E+1)}else q=c[m];f(q,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function Lr(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Lr){this.h=c.h,yl(this,c.j),this.o=c.o,this.g=c.g,vl(this,c.s),this.l=c.l;var f=c.i,m=new Oo;m.i=f.i,f.g&&(m.g=new Map(f.g),m.h=f.h),Nm(this,m),this.m=c.m}else c&&(f=String(c).match(km))?(this.h=!1,yl(this,f[1]||"",!0),this.o=ko(f[2]||""),this.g=ko(f[3]||"",!0),vl(this,f[4]),this.l=ko(f[5]||"",!0),Nm(this,f[6]||"",!0),this.m=ko(f[7]||"")):(this.h=!1,this.i=new Oo(null,this.h))}Lr.prototype.toString=function(){var c=[],f=this.j;f&&c.push(No(f,Om,!0),":");var m=this.g;return(m||f=="file")&&(c.push("//"),(f=this.o)&&c.push(No(f,Om,!0),"@"),c.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&c.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&c.push("/"),c.push(No(m,m.charAt(0)=="/"?_R:mR,!0))),(m=this.i.toString())&&c.push("?",m),(m=this.m)&&c.push("#",No(m,yR)),c.join("")};function vs(c){return new Lr(c)}function yl(c,f,m){c.j=m?ko(f,!0):f,c.j&&(c.j=c.j.replace(/:$/,""))}function vl(c,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);c.s=f}else c.s=null}function Nm(c,f,m){f instanceof Oo?(c.i=f,vR(c.i,c.h)):(m||(f=No(f,gR)),c.i=new Oo(f,c.h))}function rt(c,f,m){c.i.set(f,m)}function El(c){return rt(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function ko(c,f){return c?f?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function No(c,f,m){return typeof c=="string"?(c=encodeURI(c).replace(f,pR),m&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function pR(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Om=/[#\/\?@]/g,mR=/[#\?:]/g,_R=/[#\?]/g,gR=/[#\?@]/g,yR=/#/g;function Oo(c,f){this.h=this.g=null,this.i=c||null,this.j=!!f}function Gs(c){c.g||(c.g=new Map,c.h=0,c.i&&fR(c.i,function(f,m){c.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}t=Oo.prototype,t.add=function(c,f){Gs(this),this.i=null,c=wi(this,c);var m=this.g.get(c);return m||this.g.set(c,m=[]),m.push(f),this.h+=1,this};function Lm(c,f){Gs(c),f=wi(c,f),c.g.has(f)&&(c.i=null,c.h-=c.g.get(f).length,c.g.delete(f))}function Dm(c,f){return Gs(c),f=wi(c,f),c.g.has(f)}t.forEach=function(c,f){Gs(this),this.g.forEach(function(m,E){m.forEach(function(U){c.call(f,U,E,this)},this)},this)},t.na=function(){Gs(this);const c=Array.from(this.g.values()),f=Array.from(this.g.keys()),m=[];for(let E=0;E<f.length;E++){const U=c[E];for(let q=0;q<U.length;q++)m.push(f[E])}return m},t.V=function(c){Gs(this);let f=[];if(typeof c=="string")Dm(this,c)&&(f=f.concat(this.g.get(wi(this,c))));else{c=Array.from(this.g.values());for(let m=0;m<c.length;m++)f=f.concat(c[m])}return f},t.set=function(c,f){return Gs(this),this.i=null,c=wi(this,c),Dm(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[f]),this.h+=1,this},t.get=function(c,f){return c?(c=this.V(c),0<c.length?String(c[0]):f):f};function Mm(c,f,m){Lm(c,f),0<m.length&&(c.i=null,c.g.set(wi(c,f),A(m)),c.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],f=Array.from(this.g.keys());for(var m=0;m<f.length;m++){var E=f[m];const q=encodeURIComponent(String(E)),te=this.V(E);for(E=0;E<te.length;E++){var U=q;te[E]!==""&&(U+="="+encodeURIComponent(String(te[E]))),c.push(U)}}return this.i=c.join("&")};function wi(c,f){return f=String(f),c.j&&(f=f.toLowerCase()),f}function vR(c,f){f&&!c.j&&(Gs(c),c.i=null,c.g.forEach(function(m,E){var U=E.toLowerCase();E!=U&&(Lm(this,E),Mm(this,U,m))},c)),c.j=f}function ER(c,f){const m=new Ao;if(a.Image){const E=new Image;E.onload=_(zs,m,"TestLoadImage: loaded",!0,f,E),E.onerror=_(zs,m,"TestLoadImage: error",!1,f,E),E.onabort=_(zs,m,"TestLoadImage: abort",!1,f,E),E.ontimeout=_(zs,m,"TestLoadImage: timeout",!1,f,E),a.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=c}else f(!1)}function TR(c,f){const m=new Ao,E=new AbortController,U=setTimeout(()=>{E.abort(),zs(m,"TestPingServer: timeout",!1,f)},1e4);fetch(c,{signal:E.signal}).then(q=>{clearTimeout(U),q.ok?zs(m,"TestPingServer: ok",!0,f):zs(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(U),zs(m,"TestPingServer: error",!1,f)})}function zs(c,f,m,E,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),E(m)}catch{}}function wR(){this.g=new Sn}function IR(c,f,m){const E=m||"";try{Pm(c,function(U,q){let te=U;u(U)&&(te=vi(U)),f.push(E+q+"="+encodeURIComponent(te))})}catch(U){throw f.push(E+"type="+encodeURIComponent("_badmap")),U}}function Tl(c){this.l=c.Ub||null,this.j=c.eb||!1}T(Tl,Ei),Tl.prototype.g=function(){return new wl(this.l,this.j)},Tl.prototype.i=function(c){return function(){return c}}({});function wl(c,f){ee.call(this),this.D=c,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(wl,ee),t=wl.prototype,t.open=function(c,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=f,this.readyState=1,Do(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(f.body=c),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Lo(this)),this.readyState=0},t.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Do(this)),this.g&&(this.readyState=3,Do(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;xm(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function xm(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}t.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var f=c.value?c.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!c.done}))&&(this.response=this.responseText+=f)}c.done?Lo(this):Do(this),this.readyState==3&&xm(this)}},t.Ra=function(c){this.g&&(this.response=this.responseText=c,Lo(this))},t.Qa=function(c){this.g&&(this.response=c,Lo(this))},t.ga=function(){this.g&&Lo(this)};function Lo(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Do(c)}t.setRequestHeader=function(c,f){this.u.append(c,f)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,c.push(m[0]+": "+m[1]),m=f.next();return c.join(`\r
`)};function Do(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(wl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Fm(c){let f="";return $(c,function(m,E){f+=E,f+=":",f+=m,f+=`\r
`}),f}function sh(c,f,m){e:{for(E in m){var E=!1;break e}E=!0}E||(m=Fm(m),typeof c=="string"?m!=null&&encodeURIComponent(String(m)):rt(c,f,m))}function pt(c){ee.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(pt,ee);var bR=/^https?$/i,RR=["POST","PUT"];t=pt.prototype,t.Ha=function(c){this.J=c},t.ea=function(c,f,m,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);f=f?f.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Qu.g(),this.v=this.o?dm(this.o):dm(Qu),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(f,String(c),!0),this.B=!1}catch(q){Vm(this,q);return}if(c=m||"",m=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var U in E)m.set(U,E[U]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const q of E.keys())m.set(q,E.get(q));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(m.keys()).find(q=>q.toLowerCase()=="content-type"),U=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(RR,f,void 0))||E||U||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,te]of m)this.g.setRequestHeader(q,te);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Bm(this),this.u=!0,this.g.send(c),this.u=!1}catch(q){Vm(this,q)}};function Vm(c,f){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=f,c.m=5,Um(c),Il(c)}function Um(c){c.A||(c.A=!0,ie(c,"complete"),ie(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,ie(this,"complete"),ie(this,"abort"),Il(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Il(this,!0)),pt.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?$m(this):this.bb())},t.bb=function(){$m(this)};function $m(c){if(c.h&&typeof o<"u"&&(!c.v[1]||Es(c)!=4||c.Z()!=2)){if(c.u&&Es(c)==4)Ae(c.Ea,0,c);else if(ie(c,"readystatechange"),Es(c)==4){c.h=!1;try{const te=c.Z();e:switch(te){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var E;if(E=te===0){var U=String(c.D).match(km)[1]||null;!U&&a.self&&a.self.location&&(U=a.self.location.protocol.slice(0,-1)),E=!bR.test(U?U.toLowerCase():"")}m=E}if(m)ie(c,"complete"),ie(c,"success");else{c.m=6;try{var q=2<Es(c)?c.g.statusText:""}catch{q=""}c.l=q+" ["+c.Z()+"]",Um(c)}}finally{Il(c)}}}}function Il(c,f){if(c.g){Bm(c);const m=c.g,E=c.v[0]?()=>{}:null;c.g=null,c.v=null,f||ie(c,"ready");try{m.onreadystatechange=E}catch{}}}function Bm(c){c.I&&(a.clearTimeout(c.I),c.I=null)}t.isActive=function(){return!!this.g};function Es(c){return c.g?c.g.readyState:0}t.Z=function(){try{return 2<Es(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(c){if(this.g){var f=this.g.responseText;return c&&f.indexOf(c)==0&&(f=f.substring(c.length)),tn(f)}};function jm(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function CR(c){const f={};c=(c.g&&2<=Es(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<c.length;E++){if(L(c[E]))continue;var m=D(c[E]);const U=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const q=f[U]||[];f[U]=q,q.push(m)}y(f,function(E){return E.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Mo(c,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[c]||f}function Hm(c){this.Aa=0,this.i=[],this.j=new Ao,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Mo("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Mo("baseRetryDelayMs",5e3,c),this.cb=Mo("retryDelaySeedMs",1e4,c),this.Wa=Mo("forwardChannelMaxRetries",2,c),this.wa=Mo("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new bm(c&&c.concurrentRequestLimit),this.Da=new wR,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Hm.prototype,t.la=8,t.G=1,t.connect=function(c,f,m,E){nn(0),this.W=c,this.H=f||{},m&&E!==void 0&&(this.H.OSID=m,this.H.OAID=E),this.F=this.X,this.I=Jm(this,null,this.W),Rl(this)};function rh(c){if(Wm(c),c.G==3){var f=c.U++,m=vs(c.I);if(rt(m,"SID",c.K),rt(m,"RID",f),rt(m,"TYPE","terminate"),xo(c,m),f=new Ks(c,c.j,f),f.L=2,f.v=El(vs(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=f.v,m=!0),m||(f.g=Zm(f.j,null),f.g.ea(f.v)),f.F=Date.now(),gl(f)}Xm(c)}function bl(c){c.g&&(oh(c),c.g.cancel(),c.g=null)}function Wm(c){bl(c),c.u&&(a.clearTimeout(c.u),c.u=null),Cl(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function Rl(c){if(!Rm(c.h)&&!c.s){c.s=!0;var f=c.Ga;fe||kt(),Ee||(fe(),Ee=!0),st.add(f,c),c.B=0}}function SR(c,f){return Cm(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=f.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=So(p(c.Ga,c,f),Qm(c,c.B)),c.B++,!0)}t.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const U=new Ks(this,this.j,c);let q=this.o;if(this.S&&(q?(q=g(q),P(q,this.S)):q=this.S),this.m!==null||this.O||(U.H=q,q=null),this.P)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var E=this.i[m];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=Km(this,U,f),m=vs(this.I),rt(m,"RID",c),rt(m,"CVER",22),this.D&&rt(m,"X-HTTP-Session-Id",this.D),xo(this,m),q&&(this.O?f="headers="+encodeURIComponent(String(Fm(q)))+"&"+f:this.m&&sh(m,this.m,q)),nh(this.h,U),this.Ua&&rt(m,"TYPE","init"),this.P?(rt(m,"$req",f),rt(m,"SID","null"),U.T=!0,Ju(U,m,null)):Ju(U,m,f),this.G=2}}else this.G==3&&(c?qm(this,c):this.i.length==0||Rm(this.h)||qm(this))};function qm(c,f){var m;f?m=f.l:m=c.U++;const E=vs(c.I);rt(E,"SID",c.K),rt(E,"RID",m),rt(E,"AID",c.T),xo(c,E),c.m&&c.o&&sh(E,c.m,c.o),m=new Ks(c,c.j,m,c.B+1),c.m===null&&(m.H=c.o),f&&(c.i=f.D.concat(c.i)),f=Km(c,m,1e3),m.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),nh(c.h,m),Ju(m,E,f)}function xo(c,f){c.H&&$(c.H,function(m,E){rt(f,E,m)}),c.l&&Pm({},function(m,E){rt(f,E,m)})}function Km(c,f,m){m=Math.min(c.i.length,m);var E=c.l?p(c.l.Na,c.l,c):null;e:{var U=c.i;let q=-1;for(;;){const te=["count="+m];q==-1?0<m?(q=U[0].g,te.push("ofs="+q)):q=0:te.push("ofs="+q);let et=!0;for(let Vt=0;Vt<m;Vt++){let Ue=U[Vt].g;const Ht=U[Vt].map;if(Ue-=q,0>Ue)q=Math.max(0,U[Vt].g-100),et=!1;else try{IR(Ht,te,"req"+Ue+"_")}catch{E&&E(Ht)}}if(et){E=te.join("&");break e}}}return c=c.i.splice(0,m),f.D=c,E}function Gm(c){if(!c.g&&!c.u){c.Y=1;var f=c.Fa;fe||kt(),Ee||(fe(),Ee=!0),st.add(f,c),c.v=0}}function ih(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=So(p(c.Fa,c),Qm(c,c.v)),c.v++,!0)}t.Fa=function(){if(this.u=null,zm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=So(p(this.ab,this),c)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,nn(10),bl(this),zm(this))};function oh(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function zm(c){c.g=new Ks(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var f=vs(c.qa);rt(f,"RID","rpc"),rt(f,"SID",c.K),rt(f,"AID",c.T),rt(f,"CI",c.F?"0":"1"),!c.F&&c.ja&&rt(f,"TO",c.ja),rt(f,"TYPE","xmlhttp"),xo(c,f),c.m&&c.o&&sh(f,c.m,c.o),c.L&&(c.g.I=c.L);var m=c.g;c=c.ia,m.L=1,m.v=El(vs(f)),m.m=null,m.P=!0,Tm(m,c)}t.Za=function(){this.C!=null&&(this.C=null,bl(this),ih(this),nn(19))};function Cl(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function Ym(c,f){var m=null;if(c.g==f){Cl(c),oh(c),c.g=null;var E=2}else if(th(c.h,f))m=f.D,Sm(c.h,f),E=1;else return;if(c.G!=0){if(f.o)if(E==1){m=f.m?f.m.length:0,f=Date.now()-f.F;var U=c.B;E=pl(),ie(E,new gm(E,m)),Rl(c)}else Gm(c);else if(U=f.s,U==3||U==0&&0<f.X||!(E==1&&SR(c,f)||E==2&&ih(c)))switch(m&&0<m.length&&(f=c.h,f.i=f.i.concat(m)),U){case 1:Dr(c,5);break;case 4:Dr(c,10);break;case 3:Dr(c,6);break;default:Dr(c,2)}}}function Qm(c,f){let m=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(m*=2),m*f}function Dr(c,f){if(c.j.info("Error code "+f),f==2){var m=p(c.fb,c),E=c.Xa;const U=!E;E=new Lr(E||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||yl(E,"https"),El(E),U?ER(E.toString(),m):TR(E.toString(),m)}else nn(2);c.G=0,c.l&&c.l.sa(f),Xm(c),Wm(c)}t.fb=function(c){c?(this.j.info("Successfully pinged google.com"),nn(2)):(this.j.info("Failed to ping google.com"),nn(1))};function Xm(c){if(c.G=0,c.ka=[],c.l){const f=Am(c.h);(f.length!=0||c.i.length!=0)&&(I(c.ka,f),I(c.ka,c.i),c.h.i.length=0,A(c.i),c.i.length=0),c.l.ra()}}function Jm(c,f,m){var E=m instanceof Lr?vs(m):new Lr(m);if(E.g!="")f&&(E.g=f+"."+E.g),vl(E,E.s);else{var U=a.location;E=U.protocol,f=f?f+"."+U.hostname:U.hostname,U=+U.port;var q=new Lr(null);E&&yl(q,E),f&&(q.g=f),U&&vl(q,U),m&&(q.l=m),E=q}return m=c.D,f=c.ya,m&&f&&rt(E,m,f),rt(E,"VER",c.la),xo(c,E),E}function Zm(c,f,m){if(f&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=c.Ca&&!c.pa?new pt(new Tl({eb:m})):new pt(c.pa),f.Ha(c.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function e_(){}t=e_.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Sl(){}Sl.prototype.g=function(c,f){return new En(c,f)};function En(c,f){ee.call(this),this.g=new Hm(f),this.l=c,this.h=f&&f.messageUrlParams||null,c=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(c?c["X-WebChannel-Content-Type"]=f.messageContentType:c={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(c?c["X-WebChannel-Client-Profile"]=f.va:c={"X-WebChannel-Client-Profile":f.va}),this.g.S=c,(c=f&&f.Sb)&&!L(c)&&(this.g.m=c),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!L(f)&&(this.g.D=f,c=this.h,c!==null&&f in c&&(c=this.h,f in c&&delete c[f])),this.j=new Ii(this)}T(En,ee),En.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},En.prototype.close=function(){rh(this.g)},En.prototype.o=function(c){var f=this.g;if(typeof c=="string"){var m={};m.__data__=c,c=m}else this.u&&(m={},m.__data__=vi(c),c=m);f.i.push(new uR(f.Ya++,c)),f.G==3&&Rl(f)},En.prototype.N=function(){this.g.l=null,delete this.j,rh(this.g),delete this.g,En.aa.N.call(this)};function t_(c){zu.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var f=c.__sm__;if(f){e:{for(const m in f){c=m;break e}c=void 0}(this.i=c)&&(c=this.i,f=f!==null&&c in f?f[c]:void 0),this.data=f}else this.data=c}T(t_,zu);function n_(){Yu.call(this),this.status=1}T(n_,Yu);function Ii(c){this.g=c}T(Ii,e_),Ii.prototype.ua=function(){ie(this.g,"a")},Ii.prototype.ta=function(c){ie(this.g,new t_(c))},Ii.prototype.sa=function(c){ie(this.g,new n_)},Ii.prototype.ra=function(){ie(this.g,"b")},Sl.prototype.createWebChannel=Sl.prototype.g,En.prototype.send=En.prototype.o,En.prototype.open=En.prototype.m,En.prototype.close=En.prototype.close,HI=function(){return new Sl},jI=function(){return pl()},BI=Nr,Yd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ml.NO_ERROR=0,ml.TIMEOUT=8,ml.HTTP_ERROR=6,ac=ml,ym.COMPLETE="complete",$I=ym,fm.EventType=Ro,Ro.OPEN="a",Ro.CLOSE="b",Ro.ERROR="c",Ro.MESSAGE="d",ee.prototype.listen=ee.prototype.K,Xo=fm,pt.prototype.listenOnce=pt.prototype.L,pt.prototype.getLastError=pt.prototype.Ka,pt.prototype.getLastErrorCode=pt.prototype.Ba,pt.prototype.getStatus=pt.prototype.Z,pt.prototype.getResponseJson=pt.prototype.Oa,pt.prototype.getResponseText=pt.prototype.oa,pt.prototype.send=pt.prototype.ea,pt.prototype.setWithCredentials=pt.prototype.Ha,UI=pt}).apply(typeof Fl<"u"?Fl:typeof self<"u"?self:typeof window<"u"?window:{});const Sy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Kt.UNAUTHENTICATED=new Kt(null),Kt.GOOGLE_CREDENTIALS=new Kt("google-credentials-uid"),Kt.FIRST_PARTY=new Kt("first-party-uid"),Kt.MOCK_USER=new Kt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vo="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=new el("@firebase/firestore");function Ho(){return oi.logLevel}function le(t,...e){if(oi.logLevel<=Pe.DEBUG){const n=e.map(Tp);oi.debug(`Firestore (${vo}): ${t}`,...n)}}function js(t,...e){if(oi.logLevel<=Pe.ERROR){const n=e.map(Tp);oi.error(`Firestore (${vo}): ${t}`,...n)}}function so(t,...e){if(oi.logLevel<=Pe.WARN){const n=e.map(Tp);oi.warn(`Firestore (${vo}): ${t}`,...n)}}function Tp(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(t="Unexpected state"){const e=`FIRESTORE (${vo}) INTERNAL ASSERTION FAILED: `+t;throw js(e),new Error(e)}function yt(t,e){t||be()}function xe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class me extends gs{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Yx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Kt.UNAUTHENTICATED))}shutdown(){}}class Qx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Xx{constructor(e){this.t=e,this.currentUser=Kt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){yt(this.o===void 0);let s=this.i;const r=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let i=new ei;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ei,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{le("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(le("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ei)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(le("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(yt(typeof s.accessToken=="string"),new WI(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return yt(e===null||typeof e=="string"),new Kt(e)}}class Jx{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=Kt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Zx{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new Jx(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Kt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class e2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class t2{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){yt(this.o===void 0);const s=i=>{i.error!=null&&le("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,le("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{le("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?r(i):le("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(yt(typeof n.token=="string"),this.R=n.token,new e2(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=n2(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function je(t,e){return t<e?-1:t>e?1:0}function ro(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new me(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new me(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new me(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new me(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return gn.fromMillis(Date.now())}static fromDate(e){return gn.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new gn(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?je(this.nanoseconds,e.nanoseconds):je(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ve(e)}static min(){return new ve(new gn(0,0))}static max(){return new ve(new gn(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,n,s){n===void 0?n=0:n>e.length&&be(),s===void 0?s=e.length-n:s>e.length-n&&be(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return $a.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof $a?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class _t extends $a{construct(e,n,s){return new _t(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new me(ne.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new _t(n)}static emptyPath(){return new _t([])}}const s2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ln extends $a{construct(e,n,s){return new ln(e,n,s)}static isValidIdentifier(e){return s2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ln.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ln(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new me(ne.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new me(ne.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new me(ne.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new me(ne.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ln(n)}static emptyPath(){return new ln([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.path=e}static fromPath(e){return new _e(_t.fromString(e))}static fromName(e){return new _e(_t.fromString(e).popFirst(5))}static empty(){return new _e(_t.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&_t.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return _t.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _e(new _t(e.slice()))}}function r2(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=ve.fromTimestamp(s===1e9?new gn(n+1,0):new gn(n,s));return new yr(r,_e.empty(),e)}function i2(t){return new yr(t.readTime,t.key,-1)}class yr{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new yr(ve.min(),_e.empty(),-1)}static max(){return new yr(ve.max(),_e.empty(),-1)}}function o2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=_e.comparator(t.documentKey,e.documentKey),n!==0?n:je(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class l2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wp(t){if(t.code!==ne.FAILED_PRECONDITION||t.message!==a2)throw t;le("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&be(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new J((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof J?n:J.resolve(n)}catch(n){return J.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):J.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):J.reject(n)}static resolve(e){return new J((n,s)=>{n(e)})}static reject(e){return new J((n,s)=>{s(e)})}static waitFor(e){return new J((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},l=>s(l))}),o=!0,i===r&&n()})}static or(e){let n=J.resolve(!1);for(const s of e)n=n.next(r=>r?J.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new J((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++a,a===i&&s(o)},h=>r(h))}})}static doWhile(e,n){return new J((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function c2(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function il(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ie(s),this.se=s=>n.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ip.oe=-1;function Du(t){return t==null}function Qd(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Mu(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function u2(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ft=class Xd{constructor(e,n){this.comparator=e,this.root=n||pr.EMPTY}insert(e,n){return new Xd(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,pr.BLACK,null,null))}remove(e){return new Xd(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pr.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Vl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Vl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Vl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Vl(this.root,e,this.comparator,!0)}},Vl=class{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},pr=class Rs{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Rs.RED,this.left=r??Rs.EMPTY,this.right=i??Rs.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Rs(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Rs.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Rs.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Rs.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Rs.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw be();const e=this.left.check();if(e!==this.right.check())throw be();return e+(this.isRed()?0:1)}};pr.EMPTY=null,pr.RED=!0,pr.BLACK=!1;pr.EMPTY=new class{constructor(){this.size=0}get key(){throw be()}get value(){throw be()}get color(){throw be()}get left(){throw be()}get right(){throw be()}copy(e,n,s,r,i){return this}insert(e,n,s){return new pr(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.comparator=e,this.data=new Ft(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Py(this.data.getIterator())}getIteratorFrom(e){return new Py(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof $t)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new $t(this.comparator);return n.data=e,n}}class Py{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e){this.fields=e,e.sort(ln.comparator)}static empty(){return new cr([])}unionWith(e){let n=new $t(ln.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new cr(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ro(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new KI("Invalid base64 string: "+i):i}}(e);return new Bt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(e);return new Bt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return je(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Bt.EMPTY_BYTE_STRING=new Bt("");const h2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vr(t){if(yt(!!t),typeof t=="string"){let e=0;const n=h2.exec(t);if(yt(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Et(t.seconds),nanos:Et(t.nanos)}}function Et(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ai(t){return typeof t=="string"?Bt.fromBase64String(t):Bt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Rp(t){const e=t.mapValue.fields.__previous_value__;return bp(e)?Rp(e):e}function Ba(t){const e=vr(t.mapValue.fields.__local_write_time__.timestampValue);return new gn(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(e,n,s,r,i,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class ja{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ja("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ja&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function li(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?bp(t)?4:p2(t)?9007199254740991:f2(t)?10:11:be()}function ds(t,e){if(t===e)return!0;const n=li(t);if(n!==li(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ba(t).isEqual(Ba(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=vr(r.timestampValue),a=vr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return ai(r.bytesValue).isEqual(ai(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Et(r.geoPointValue.latitude)===Et(i.geoPointValue.latitude)&&Et(r.geoPointValue.longitude)===Et(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Et(r.integerValue)===Et(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=Et(r.doubleValue),a=Et(i.doubleValue);return o===a?Qd(o)===Qd(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ro(t.arrayValue.values||[],e.arrayValue.values||[],ds);case 10:case 11:return function(r,i){const o=r.mapValue.fields||{},a=i.mapValue.fields||{};if(Ay(o)!==Ay(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!ds(o[l],a[l])))return!1;return!0}(t,e);default:return be()}}function Ha(t,e){return(t.values||[]).find(n=>ds(n,e))!==void 0}function io(t,e){if(t===e)return 0;const n=li(t),s=li(e);if(n!==s)return je(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return je(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Et(i.integerValue||i.doubleValue),l=Et(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return ky(t.timestampValue,e.timestampValue);case 4:return ky(Ba(t),Ba(e));case 5:return je(t.stringValue,e.stringValue);case 6:return function(i,o){const a=ai(i),l=ai(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=je(a[u],l[u]);if(h!==0)return h}return je(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=je(Et(i.latitude),Et(o.latitude));return a!==0?a:je(Et(i.longitude),Et(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ny(t.arrayValue,e.arrayValue);case 10:return function(i,o){var a,l,u,h;const d=i.fields||{},p=o.fields||{},_=(a=d.value)===null||a===void 0?void 0:a.arrayValue,T=(l=p.value)===null||l===void 0?void 0:l.arrayValue,A=je(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((h=T==null?void 0:T.values)===null||h===void 0?void 0:h.length)||0);return A!==0?A:Ny(_,T)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ul.mapValue&&o===Ul.mapValue)return 0;if(i===Ul.mapValue)return 1;if(o===Ul.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const p=je(l[d],h[d]);if(p!==0)return p;const _=io(a[l[d]],u[h[d]]);if(_!==0)return _}return je(l.length,h.length)}(t.mapValue,e.mapValue);default:throw be()}}function ky(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return je(t,e);const n=vr(t),s=vr(e),r=je(n.seconds,s.seconds);return r!==0?r:je(n.nanos,s.nanos)}function Ny(t,e){const n=t.values||[],s=e.values||[];for(let r=0;r<n.length&&r<s.length;++r){const i=io(n[r],s[r]);if(i)return i}return je(n.length,s.length)}function oo(t){return Jd(t)}function Jd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=vr(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ai(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return _e.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",r=!0;for(const i of n.values||[])r?r=!1:s+=",",s+=Jd(i);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${Jd(n.fields[o])}`;return r+"}"}(t.mapValue):be()}function Zd(t){return!!t&&"integerValue"in t}function Cp(t){return!!t&&"arrayValue"in t}function Oy(t){return!!t&&"nullValue"in t}function Ly(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Bh(t){return!!t&&"mapValue"in t}function f2(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function fa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Mu(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=fa(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=fa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function p2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this.value=e}static empty(){return new ss({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Bh(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=fa(n)}setAll(e){let n=ln.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=fa(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Bh(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ds(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Bh(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Mu(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new ss(fa(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Yt(e,0,ve.min(),ve.min(),ve.min(),ss.empty(),0)}static newFoundDocument(e,n,s,r){return new Yt(e,1,n,ve.min(),s,r,0)}static newNoDocument(e,n){return new Yt(e,2,n,ve.min(),ve.min(),ss.empty(),0)}static newUnknownDocument(e,n){return new Yt(e,3,n,ve.min(),ve.min(),ss.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ss.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ss.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,n){this.position=e,this.inclusive=n}}function Dy(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=_e.comparator(_e.fromName(o.referenceValue),n.key):s=io(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function My(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ds(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,n="asc"){this.field=e,this.dir=n}}function m2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{}class At extends GI{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new g2(e,n,s):n==="array-contains"?new E2(e,s):n==="in"?new T2(e,s):n==="not-in"?new w2(e,s):n==="array-contains-any"?new I2(e,s):new At(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new y2(e,s):new v2(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(io(n,this.value)):n!==null&&li(this.value)===li(n)&&this.matchesComparison(io(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return be()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class fs extends GI{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new fs(e,n)}matches(e){return zI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function zI(t){return t.op==="and"}function YI(t){return _2(t)&&zI(t)}function _2(t){for(const e of t.filters)if(e instanceof fs)return!1;return!0}function ef(t){if(t instanceof At)return t.field.canonicalString()+t.op.toString()+oo(t.value);if(YI(t))return t.filters.map(e=>ef(e)).join(",");{const e=t.filters.map(n=>ef(n)).join(",");return`${t.op}(${e})`}}function QI(t,e){return t instanceof At?function(s,r){return r instanceof At&&s.op===r.op&&s.field.isEqual(r.field)&&ds(s.value,r.value)}(t,e):t instanceof fs?function(s,r){return r instanceof fs&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,o,a)=>i&&QI(o,r.filters[a]),!0):!1}(t,e):void be()}function XI(t){return t instanceof At?function(n){return`${n.field.canonicalString()} ${n.op} ${oo(n.value)}`}(t):t instanceof fs?function(n){return n.op.toString()+" {"+n.getFilters().map(XI).join(" ,")+"}"}(t):"Filter"}class g2 extends At{constructor(e,n,s){super(e,n,s),this.key=_e.fromName(s.referenceValue)}matches(e){const n=_e.comparator(e.key,this.key);return this.matchesComparison(n)}}class y2 extends At{constructor(e,n){super(e,"in",n),this.keys=JI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class v2 extends At{constructor(e,n){super(e,"not-in",n),this.keys=JI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function JI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>_e.fromName(s.referenceValue))}class E2 extends At{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Cp(n)&&Ha(n.arrayValue,this.value)}}class T2 extends At{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ha(this.value.arrayValue,n)}}class w2 extends At{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ha(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ha(this.value.arrayValue,n)}}class I2 extends At{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Cp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ha(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function xy(t,e=null,n=[],s=[],r=null,i=null,o=null){return new b2(t,e,n,s,r,i,o)}function Sp(t){const e=xe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>ef(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Du(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>oo(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>oo(s)).join(",")),e.ue=n}return e.ue}function Ap(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!m2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!QI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!My(t.startAt,e.startAt)&&My(t.endAt,e.endAt)}function tf(t){return _e.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function R2(t,e,n,s,r,i,o,a){return new xu(t,e,n,s,r,i,o,a)}function Pp(t){return new xu(t)}function Fy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function C2(t){return t.collectionGroup!==null}function pa(t){const e=xe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new $t(ln.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new xc(i,s))}),n.has(ln.keyField().canonicalString())||e.ce.push(new xc(ln.keyField(),s))}return e.ce}function cs(t){const e=xe(t);return e.le||(e.le=S2(e,pa(t))),e.le}function S2(t,e){if(t.limitType==="F")return xy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new xc(r.field,i)});const n=t.endAt?new Mc(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Mc(t.startAt.position,t.startAt.inclusive):null;return xy(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function nf(t,e,n){return new xu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Fu(t,e){return Ap(cs(t),cs(e))&&t.limitType===e.limitType}function ZI(t){return`${Sp(cs(t))}|lt:${t.limitType}`}function Oi(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(r=>XI(r)).join(", ")}]`),Du(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(r=>oo(r)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(r=>oo(r)).join(",")),`Target(${s})`}(cs(t))}; limitType=${t.limitType})`}function Vu(t,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):_e.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(t,e)&&function(s,r){for(const i of pa(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(s,r){return!(s.startAt&&!function(o,a,l){const u=Dy(o,a,l);return o.inclusive?u<=0:u<0}(s.startAt,pa(s),r)||s.endAt&&!function(o,a,l){const u=Dy(o,a,l);return o.inclusive?u>=0:u>0}(s.endAt,pa(s),r))}(t,e)}function A2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function e0(t){return(e,n)=>{let s=!1;for(const r of pa(t)){const i=P2(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function P2(t,e,n){const s=t.field.isKeyField()?_e.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?io(l,u):be()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return be()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Mu(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return u2(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k2=new Ft(_e.comparator);function Er(){return k2}const t0=new Ft(_e.comparator);function Jo(...t){let e=t0;for(const n of t)e=e.insert(n.key,n);return e}function N2(t){let e=t0;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function zr(){return ma()}function n0(){return ma()}function ma(){return new Eo(t=>t.toString(),(t,e)=>t.isEqual(e))}const O2=new $t(_e.comparator);function Ve(...t){let e=O2;for(const n of t)e=e.add(n);return e}const L2=new $t(je);function D2(){return L2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M2(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qd(e)?"-0":e}}function x2(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(){this._=void 0}}function F2(t,e,n){return t instanceof sf?function(r,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&bp(i)&&(i=Rp(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Fc?s0(t,e):t instanceof Vc?r0(t,e):function(r,i){const o=U2(r,i),a=Vy(o)+Vy(r.Pe);return Zd(o)&&Zd(r.Pe)?x2(a):M2(r.serializer,a)}(t,e)}function V2(t,e,n){return t instanceof Fc?s0(t,e):t instanceof Vc?r0(t,e):n}function U2(t,e){return t instanceof rf?function(s){return Zd(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class sf extends Uu{}class Fc extends Uu{constructor(e){super(),this.elements=e}}function s0(t,e){const n=i0(e);for(const s of t.elements)n.some(r=>ds(r,s))||n.push(s);return{arrayValue:{values:n}}}class Vc extends Uu{constructor(e){super(),this.elements=e}}function r0(t,e){let n=i0(e);for(const s of t.elements)n=n.filter(r=>!ds(r,s));return{arrayValue:{values:n}}}class rf extends Uu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Vy(t){return Et(t.integerValue||t.doubleValue)}function i0(t){return Cp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function $2(t,e){return t.field.isEqual(e.field)&&function(s,r){return s instanceof Fc&&r instanceof Fc||s instanceof Vc&&r instanceof Vc?ro(s.elements,r.elements,ds):s instanceof rf&&r instanceof rf?ds(s.Pe,r.Pe):s instanceof sf&&r instanceof sf}(t.transform,e.transform)}class ti{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ti}static exists(e){return new ti(void 0,e)}static updateTime(e){return new ti(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function lc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class kp{}function o0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new j2(t.key,ti.none()):new Np(t.key,t.data,ti.none());{const n=t.data,s=ss.empty();let r=new $t(ln.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new $u(t.key,s,new cr(r.toArray()),ti.none())}}function B2(t,e,n){t instanceof Np?function(r,i,o){const a=r.value.clone(),l=$y(r.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof $u?function(r,i,o){if(!lc(r.precondition,i))return void i.convertToUnknownDocument(o.version);const a=$y(r.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(a0(r)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function _a(t,e,n,s){return t instanceof Np?function(i,o,a,l){if(!lc(i.precondition,o))return a;const u=i.value.clone(),h=By(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,s):t instanceof $u?function(i,o,a,l){if(!lc(i.precondition,o))return a;const u=By(i.fieldTransforms,l,o),h=o.data;return h.setAll(a0(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,s):function(i,o,a){return lc(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function Uy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&ro(s,r,(i,o)=>$2(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Np extends kp{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class $u extends kp{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function a0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function $y(t,e,n){const s=new Map;yt(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,V2(o,a,n[r]))}return s}function By(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,F2(i,o,e))}return s}class j2 extends kp{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&B2(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=_a(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=_a(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=n0();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const l=o0(o,a);l!==null&&s.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(ve.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ve())}isEqual(e){return this.batchId===e.batchId&&ro(this.mutations,e.mutations,(n,s)=>Uy(n,s))&&ro(this.baseMutations,e.baseMutations,(n,s)=>Uy(n,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rt,Oe;function l0(t){if(t===void 0)return js("GRPC error has no .code"),ne.UNKNOWN;switch(t){case Rt.OK:return ne.OK;case Rt.CANCELLED:return ne.CANCELLED;case Rt.UNKNOWN:return ne.UNKNOWN;case Rt.DEADLINE_EXCEEDED:return ne.DEADLINE_EXCEEDED;case Rt.RESOURCE_EXHAUSTED:return ne.RESOURCE_EXHAUSTED;case Rt.INTERNAL:return ne.INTERNAL;case Rt.UNAVAILABLE:return ne.UNAVAILABLE;case Rt.UNAUTHENTICATED:return ne.UNAUTHENTICATED;case Rt.INVALID_ARGUMENT:return ne.INVALID_ARGUMENT;case Rt.NOT_FOUND:return ne.NOT_FOUND;case Rt.ALREADY_EXISTS:return ne.ALREADY_EXISTS;case Rt.PERMISSION_DENIED:return ne.PERMISSION_DENIED;case Rt.FAILED_PRECONDITION:return ne.FAILED_PRECONDITION;case Rt.ABORTED:return ne.ABORTED;case Rt.OUT_OF_RANGE:return ne.OUT_OF_RANGE;case Rt.UNIMPLEMENTED:return ne.UNIMPLEMENTED;case Rt.DATA_LOSS:return ne.DATA_LOSS;default:return be()}}(Oe=Rt||(Rt={}))[Oe.OK=0]="OK",Oe[Oe.CANCELLED=1]="CANCELLED",Oe[Oe.UNKNOWN=2]="UNKNOWN",Oe[Oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Oe[Oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Oe[Oe.NOT_FOUND=5]="NOT_FOUND",Oe[Oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Oe[Oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Oe[Oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Oe[Oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Oe[Oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Oe[Oe.ABORTED=10]="ABORTED",Oe[Oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Oe[Oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Oe[Oe.INTERNAL=13]="INTERNAL",Oe[Oe.UNAVAILABLE=14]="UNAVAILABLE",Oe[Oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K2(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G2=new Zr([4294967295,4294967295],0);function jy(t){const e=K2().encode(t),n=new VI;return n.update(e),new Uint8Array(n.digest())}function Hy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Zr([n,s],0),new Zr([r,i],0)]}class Op{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Zo(`Invalid padding: ${n}`);if(s<0)throw new Zo(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Zo(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Zo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Zr.fromNumber(this.Ie)}Ee(e,n,s){let r=e.add(n.multiply(Zr.fromNumber(s)));return r.compare(G2)===1&&(r=new Zr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=jy(e),[s,r]=Hy(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(s,r,i);if(!this.de(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Op(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=jy(e),[s,r]=Hy(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(s,r,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Zo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,ol.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Bu(ve.min(),r,new Ft(je),Er(),Ve())}}class ol{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new ol(s,n,Ve(),Ve(),Ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,n,s,r){this.Re=e,this.removedTargetIds=n,this.key=s,this.Ve=r}}class c0{constructor(e,n){this.targetId=e,this.me=n}}class u0{constructor(e,n,s=Bt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Wy{constructor(){this.fe=0,this.ge=Ky(),this.pe=Bt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ve(),n=Ve(),s=Ve();return this.ge.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:be()}}),new ol(this.pe,this.ye,e,n,s)}Ce(){this.we=!1,this.ge=Ky()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,yt(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class z2{constructor(e){this.Le=e,this.Be=new Map,this.ke=Er(),this.qe=qy(),this.Qe=new Ft(je)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const s=this.Ge(n);switch(e.state){case 0:this.ze(n)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),s.De(e.resumeToken));break;default:be()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((s,r)=>{this.ze(r)&&n(r)})}He(e){const n=e.targetId,s=e.me.count,r=this.Je(n);if(r){const i=r.target;if(tf(i))if(s===0){const o=new _e(i.path);this.Ue(n,o,Yt.newNoDocument(o,ve.min()))}else yt(s===1);else{const o=this.Ye(n);if(o!==s){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=n;let o,a;try{o=ai(s).toUint8Array()}catch(l){if(l instanceof KI)return so("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Op(o,r,i)}catch(l){return so(l instanceof Zo?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,s){return n.me.count===s-this.nt(e,n.targetId)?0:2}nt(e,n){const s=this.Le.getRemoteKeysForTarget(n);let r=0;return s.forEach(i=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,i,null),r++)}),r}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const a=this.Je(o);if(a){if(i.current&&tf(a.target)){const l=new _e(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Yt.newNoDocument(l,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let s=Ve();this.qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const r=new Bu(e,n,this.Qe,this.ke,s);return this.ke=Er(),this.qe=qy(),this.Qe=new Ft(je),r}$e(e,n){if(!this.ze(e))return;const s=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,s),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,s){if(!this.ze(e))return;const r=this.Ge(e);this.it(e,n)?r.Fe(n,1):r.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),s&&(this.ke=this.ke.insert(n,s))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Wy,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new $t(je),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||le("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Wy),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function qy(){return new Ft(_e.comparator)}function Ky(){return new Ft(_e.comparator)}const Y2={asc:"ASCENDING",desc:"DESCENDING"},Q2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},X2={and:"AND",or:"OR"};class J2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function of(t,e){return t.useProto3Json||Du(e)?e:{value:e}}function Z2(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function eF(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ki(t){return yt(!!t),ve.fromTimestamp(function(n){const s=vr(n);return new gn(s.seconds,s.nanos)}(t))}function tF(t,e){return af(t,e).canonicalString()}function af(t,e){const n=function(r){return new _t(["projects",r.projectId,"databases",r.database])}(t).child("documents");return e===void 0?n:n.child(e)}function h0(t){const e=_t.fromString(t);return yt(_0(e)),e}function jh(t,e){const n=h0(e);if(n.get(1)!==t.databaseId.projectId)throw new me(ne.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new me(ne.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new _e(f0(n))}function d0(t,e){return tF(t.databaseId,e)}function nF(t){const e=h0(t);return e.length===4?_t.emptyPath():f0(e)}function Gy(t){return new _t(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function f0(t){return yt(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function sF(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:be()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(yt(h===void 0||typeof h=="string"),Bt.fromBase64String(h||"")):(yt(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Bt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?ne.UNKNOWN:l0(u.code);return new me(h,u.message||"")}(o);n=new u0(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=jh(t,s.document.name),i=Ki(s.document.updateTime),o=s.document.createTime?Ki(s.document.createTime):ve.min(),a=new ss({mapValue:{fields:s.document.fields}}),l=Yt.newFoundDocument(r,i,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];n=new cc(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=jh(t,s.document),i=s.readTime?Ki(s.readTime):ve.min(),o=Yt.newNoDocument(r,i),a=s.removedTargetIds||[];n=new cc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=jh(t,s.document),i=s.removedTargetIds||[];n=new cc([],i,r,null)}else{if(!("filter"in e))return be();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new q2(r,i),a=s.targetId;n=new c0(a,o)}}return n}function rF(t,e){return{documents:[d0(t,e.path)]}}function iF(t,e){const n={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=d0(t,r);const i=function(u){if(u.length!==0)return m0(fs.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:Li(p.field),direction:lF(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=of(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:r}}function oF(t){let e=nF(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){yt(s===1);const h=n.from[0];h.allDescendants?r=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(d){const p=p0(d);return p instanceof fs&&YI(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(p=>function(T){return new xc(Di(T.field),function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(d){let p;return p=typeof d=="object"?d.value:d,Du(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(d){const p=!!d.before,_=d.values||[];return new Mc(_,p)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const p=!d.before,_=d.values||[];return new Mc(_,p)}(n.endAt)),R2(e,r,o,i,a,"F",l,u)}function aF(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return be()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function p0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Di(n.unaryFilter.field);return At.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Di(n.unaryFilter.field);return At.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Di(n.unaryFilter.field);return At.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Di(n.unaryFilter.field);return At.create(o,"!=",{nullValue:"NULL_VALUE"});default:return be()}}(t):t.fieldFilter!==void 0?function(n){return At.create(Di(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return be()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return fs.create(n.compositeFilter.filters.map(s=>p0(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return be()}}(n.compositeFilter.op))}(t):be()}function lF(t){return Y2[t]}function cF(t){return Q2[t]}function uF(t){return X2[t]}function Li(t){return{fieldPath:t.canonicalString()}}function Di(t){return ln.fromServerFormat(t.fieldPath)}function m0(t){return t instanceof At?function(n){if(n.op==="=="){if(Ly(n.value))return{unaryFilter:{field:Li(n.field),op:"IS_NAN"}};if(Oy(n.value))return{unaryFilter:{field:Li(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ly(n.value))return{unaryFilter:{field:Li(n.field),op:"IS_NOT_NAN"}};if(Oy(n.value))return{unaryFilter:{field:Li(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Li(n.field),op:cF(n.op),value:n.value}}}(t):t instanceof fs?function(n){const s=n.getFilters().map(r=>m0(r));return s.length===1?s[0]:{compositeFilter:{op:uF(n.op),filters:s}}}(t):be()}function _0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,n,s,r,i=ve.min(),o=ve.min(),a=Bt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new ur(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hF{constructor(e){this.ct=e}}function dF(t){const e=oF({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?nf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fF{constructor(){this.un=new pF}addToCollectionParentIndex(e,n){return this.un.add(n),J.resolve()}getCollectionParents(e,n){return J.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return J.resolve()}deleteFieldIndex(e,n){return J.resolve()}deleteAllFieldIndexes(e){return J.resolve()}createTargetIndexes(e,n){return J.resolve()}getDocumentsMatchingTarget(e,n){return J.resolve(null)}getIndexType(e,n){return J.resolve(0)}getFieldIndexes(e,n){return J.resolve([])}getNextCollectionGroupToUpdate(e){return J.resolve(null)}getMinOffset(e,n){return J.resolve(yr.min())}getMinOffsetFromCollectionGroup(e,n){return J.resolve(yr.min())}updateCollectionGroup(e,n,s){return J.resolve()}updateIndexEntries(e,n){return J.resolve()}}class pF{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new $t(_t.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new $t(_t.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ao(0)}static kn(){return new ao(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mF{constructor(){this.changes=new Eo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Yt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?J.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _F{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gF{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&_a(s.mutation,r,cr.empty(),gn.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Ve()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Ve()){const r=zr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Jo();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=zr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Ve()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Er();const o=ma(),a=function(){return ma()}();return n.forEach((l,u)=>{const h=s.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof $u)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),_a(h.mutation,u,h.mutation.getFieldMask(),gn.now())):o.set(u.key,cr.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var d;return a.set(u,new _F(h,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const s=ma();let r=new Ft((o,a)=>o-a),i=Ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=s.get(l)||cr.empty();h=a.applyToLocalView(u,h),s.set(l,h);const d=(r.get(a.batchId)||Ve()).add(l);r=r.insert(a.batchId,d)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,d=n0();h.forEach(p=>{if(!i.has(p)){const _=o0(n.get(p),s.get(p));_!==null&&d.set(p,_),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return J.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,r){return function(o){return _e.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):C2(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,r):this.getDocumentsMatchingCollectionQuery(e,n,s,r)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):J.resolve(zr());let a=-1,l=i;return o.next(u=>J.forEach(u,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(h)?J.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{l=l.insert(h,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,Ve())).next(h=>({batchId:a,changes:N2(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new _e(n)).next(s=>{let r=Jo();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s,r){const i=n.collectionGroup;let o=Jo();return this.indexManager.getCollectionParents(e,i).next(a=>J.forEach(a,l=>{const u=function(d,p){return new xu(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,s,r).next(h=>{h.forEach((d,p)=>{o=o.insert(d,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i,r))).next(o=>{i.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Yt.newInvalidDocument(h)))});let a=Jo();return o.forEach((l,u)=>{const h=i.get(l);h!==void 0&&_a(h.mutation,u,cr.empty(),gn.now()),Vu(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yF{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return J.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(r){return{id:r.id,version:r.version,createTime:Ki(r.createTime)}}(n)),J.resolve()}getNamedQuery(e,n){return J.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(r){return{name:r.name,query:dF(r.bundledQuery),readTime:Ki(r.readTime)}}(n)),J.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vF{constructor(){this.overlays=new Ft(_e.comparator),this.Ir=new Map}getOverlay(e,n){return J.resolve(this.overlays.get(n))}getOverlays(e,n){const s=zr();return J.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ht(e,n,i)}),J.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.Ir.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(s)),J.resolve()}getOverlaysForCollection(e,n,s){const r=zr(),i=n.length+1,o=new _e(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>s&&r.set(l.getKey(),l)}return J.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Ft((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let h=i.get(u.largestBatchId);h===null&&(h=zr(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=zr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=r)););return J.resolve(a)}ht(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Ir.get(r.largestBatchId).delete(s.key);this.Ir.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new W2(n,s));let i=this.Ir.get(n);i===void 0&&(i=Ve(),this.Ir.set(n,i)),this.Ir.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EF{constructor(){this.sessionToken=Bt.EMPTY_BYTE_STRING}getSessionToken(e){return J.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,J.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(){this.Tr=new $t(Lt.Er),this.dr=new $t(Lt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const s=new Lt(e,n);this.Tr=this.Tr.add(s),this.dr=this.dr.add(s)}Rr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Vr(new Lt(e,n))}mr(e,n){e.forEach(s=>this.removeReference(s,n))}gr(e){const n=new _e(new _t([])),s=new Lt(n,e),r=new Lt(n,e+1),i=[];return this.dr.forEachInRange([s,r],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new _e(new _t([])),s=new Lt(n,e),r=new Lt(n,e+1);let i=Ve();return this.dr.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Lt(e,0),s=this.Tr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Lt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return _e.comparator(e.key,n.key)||je(e.wr,n.wr)}static Ar(e,n){return je(e.wr,n.wr)||_e.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TF{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new $t(Lt.Er)}checkEmpty(e){return J.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new H2(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.br=this.br.add(new Lt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return J.resolve(o)}lookupMutationBatch(e,n){return J.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.vr(s),i=r<0?0:r;return J.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return J.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return J.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Lt(n,0),r=new Lt(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([s,r],o=>{const a=this.Dr(o.wr);i.push(a)}),J.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new $t(je);return n.forEach(r=>{const i=new Lt(r,0),o=new Lt(r,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],a=>{s=s.add(a.wr)})}),J.resolve(this.Cr(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;_e.isDocumentKey(i)||(i=i.child(""));const o=new Lt(new _e(i),0);let a=new $t(je);return this.br.forEachWhile(l=>{const u=l.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(l.wr)),!0)},o),J.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(s=>{const r=this.Dr(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){yt(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.br;return J.forEach(n.mutations,r=>{const i=new Lt(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.br=s})}On(e){}containsKey(e,n){const s=new Lt(n,0),r=this.br.firstAfterOrEqual(s);return J.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,J.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wF{constructor(e){this.Mr=e,this.docs=function(){return new Ft(_e.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Mr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return J.resolve(s?s.document.mutableCopy():Yt.newInvalidDocument(n))}getEntries(e,n){let s=Er();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Yt.newInvalidDocument(r))}),J.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Er();const o=n.path,a=new _e(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||o2(i2(h),s)<=0||(r.has(h.key)||Vu(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return J.resolve(i)}getAllFromCollectionGroup(e,n,s,r){be()}Or(e,n){return J.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new IF(this)}getSize(e){return J.resolve(this.size)}}class IF extends mF{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.cr.addEntry(e,r)):this.cr.removeEntry(s)}),J.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bF{constructor(e){this.persistence=e,this.Nr=new Eo(n=>Sp(n),Ap),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Lp,this.targetCount=0,this.kr=ao.Bn()}forEachTarget(e,n){return this.Nr.forEach((s,r)=>n(r)),J.resolve()}getLastRemoteSnapshotVersion(e){return J.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return J.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),J.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Lr&&(this.Lr=n),J.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ao(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,J.resolve()}updateTargetData(e,n){return this.Kn(n),J.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,J.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),J.waitFor(i).next(()=>r)}getTargetCount(e){return J.resolve(this.targetCount)}getTargetData(e,n){const s=this.Nr.get(n)||null;return J.resolve(s)}addMatchingKeys(e,n,s){return this.Br.Rr(n,s),J.resolve()}removeMatchingKeys(e,n,s){this.Br.mr(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),J.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),J.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Br.yr(n);return J.resolve(s)}containsKey(e,n){return J.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RF{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Ip(0),this.Kr=!1,this.Kr=!0,this.$r=new EF,this.referenceDelegate=e(this),this.Ur=new bF(this),this.indexManager=new fF,this.remoteDocumentCache=function(r){return new wF(r)}(s=>this.referenceDelegate.Wr(s)),this.serializer=new hF(n),this.Gr=new yF(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new vF,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.qr[e.toKey()];return s||(s=new TF(n,this.referenceDelegate),this.qr[e.toKey()]=s),s}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,s){le("MemoryPersistence","Starting transaction:",e);const r=new CF(this.Qr.next());return this.referenceDelegate.zr(),s(r).next(i=>this.referenceDelegate.jr(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Hr(e,n){return J.or(Object.values(this.qr).map(s=>()=>s.containsKey(e,n)))}}class CF extends l2{constructor(e){super(),this.currentSequenceNumber=e}}class Dp{constructor(e){this.persistence=e,this.Jr=new Lp,this.Yr=null}static Zr(e){return new Dp(e)}get Xr(){if(this.Yr)return this.Yr;throw be()}addReference(e,n,s){return this.Jr.addReference(s,n),this.Xr.delete(s.toString()),J.resolve()}removeReference(e,n,s){return this.Jr.removeReference(s,n),this.Xr.add(s.toString()),J.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),J.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(r=>this.Xr.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Xr.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return J.forEach(this.Xr,s=>{const r=_e.fromPath(s);return this.ei(e,r).next(i=>{i||n.removeEntry(r,ve.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(s=>{s?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return J.or([()=>J.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.$i=s,this.Ui=r}static Wi(e,n){let s=Ve(),r=Ve();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Mp(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SF{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AF{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return IL()?8:c2(en())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,s,r){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,r,s).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new SF;return this.Xi(e,n,o).next(a=>{if(i.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>i.result)}es(e,n,s,r){return s.documentReadCount<this.ji?(Ho()<=Pe.DEBUG&&le("QueryEngine","SDK will not create cache indexes for query:",Oi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),J.resolve()):(Ho()<=Pe.DEBUG&&le("QueryEngine","Query:",Oi(n),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.Hi*r?(Ho()<=Pe.DEBUG&&le("QueryEngine","The SDK decides to create cache indexes for query:",Oi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,cs(n))):J.resolve())}Yi(e,n){if(Fy(n))return J.resolve(null);let s=cs(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=nf(n,null,"F"),s=cs(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=Ve(...i);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const u=this.ts(n,a);return this.ns(n,u,o,l.readTime)?this.Yi(e,nf(n,null,"F")):this.rs(e,u,n,l)}))})))}Zi(e,n,s,r){return Fy(n)||r.isEqual(ve.min())?J.resolve(null):this.Ji.getDocuments(e,s).next(i=>{const o=this.ts(n,i);return this.ns(n,o,s,r)?J.resolve(null):(Ho()<=Pe.DEBUG&&le("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Oi(n)),this.rs(e,o,n,r2(r,-1)).next(a=>a))})}ts(e,n){let s=new $t(e0(e));return n.forEach((r,i)=>{Vu(e,i)&&(s=s.add(i))}),s}ns(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Xi(e,n,s){return Ho()<=Pe.DEBUG&&le("QueryEngine","Using full collection scan to execute query:",Oi(n)),this.Ji.getDocumentsMatchingQuery(e,n,yr.min(),s)}rs(e,n,s,r){return this.Ji.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PF{constructor(e,n,s,r){this.persistence=e,this.ss=n,this.serializer=r,this.os=new Ft(je),this._s=new Eo(i=>Sp(i),Ap),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(s)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gF(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function kF(t,e,n,s){return new PF(t,e,n,s)}async function g0(t,e){const n=xe(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.ls(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let l=Ve();for(const u of r){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(s,l).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:a}))})})}function y0(t){const e=xe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function NF(t,e){const n=xe(t),s=e.snapshotVersion;let r=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});r=n.os;const a=[];e.targetChanges.forEach((h,d)=>{const p=r.get(d);if(!p)return;a.push(n.Ur.removeMatchingKeys(i,h.removedDocuments,d).next(()=>n.Ur.addMatchingKeys(i,h.addedDocuments,d)));let _=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?_=_.withResumeToken(Bt.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,s)),r=r.insert(d,_),function(A,I,b){return A.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(p,_,h)&&a.push(n.Ur.updateTargetData(i,_))});let l=Er(),u=Ve();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(OF(i,o,e.documentUpdates).next(h=>{l=h.Ps,u=h.Is})),!s.isEqual(ve.min())){const h=n.Ur.getLastRemoteSnapshotVersion(i).next(d=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(h)}return J.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.os=r,i))}function OF(t,e,n){let s=Ve(),r=Ve();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Er();return n.forEach((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),l.isNoDocument()&&l.version.isEqual(ve.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):le("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Ps:o,Is:r}})}function LF(t,e){const n=xe(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ur.getTargetData(s,e).next(i=>i?(r=i,J.resolve(r)):n.Ur.allocateTargetId(s).next(o=>(r=new ur(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Ur.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.os.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.os=n.os.insert(s.targetId,s),n._s.set(e,s.targetId)),s})}async function lf(t,e,n){const s=xe(t),r=s.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!il(o))throw o;le("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.os=s.os.remove(e),s._s.delete(r.target)}function zy(t,e,n){const s=xe(t);let r=ve.min(),i=Ve();return s.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const d=xe(l),p=d._s.get(h);return p!==void 0?J.resolve(d.os.get(p)):d.Ur.getTargetData(u,h)}(s,o,cs(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ur.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>s.ss.getDocumentsMatchingQuery(o,e,n?r:ve.min(),n?i:Ve())).next(a=>(DF(s,A2(e),a),{documents:a,Ts:i})))}function DF(t,e,n){let s=t.us.get(e)||ve.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.us.set(e,s)}class Yy{constructor(){this.activeTargetIds=D2()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class MF{constructor(){this.so=new Yy,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,s){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Yy,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xF{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){le("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){le("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $l=null;function Hh(){return $l===null?$l=function(){return 268435456+Math.round(2147483648*Math.random())}():$l++,"0x"+$l.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FF={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VF{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="WebChannelConnection";class UF extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=s+"://"+n.host,this.vo=`projects/${r}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${i}`}get Fo(){return!1}Mo(n,s,r,i,o){const a=Hh(),l=this.xo(n,s.toUriEncodedString());le("RestConnection",`Sending RPC '${n}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,i,o),this.No(n,l,u,r).then(h=>(le("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw so("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",r),h})}Lo(n,s,r,i,o,a){return this.Mo(n,s,r,i,o)}Oo(n,s,r){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+vo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((i,o)=>n[o]=i),r&&r.headers.forEach((i,o)=>n[o]=i)}xo(n,s){const r=FF[n];return`${this.Do}/v1/${s}:${r}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,s,r){const i=Hh();return new Promise((o,a)=>{const l=new UI;l.setWithCredentials(!0),l.listenOnce($I.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ac.NO_ERROR:const h=l.getResponseJson();le(qt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case ac.TIMEOUT:le(qt,`RPC '${e}' ${i} timed out`),a(new me(ne.DEADLINE_EXCEEDED,"Request time out"));break;case ac.HTTP_ERROR:const d=l.getStatus();if(le(qt,`RPC '${e}' ${i} failed with status:`,d,"response text:",l.getResponseText()),d>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const _=p==null?void 0:p.error;if(_&&_.status&&_.message){const T=function(I){const b=I.toLowerCase().replace(/_/g,"-");return Object.values(ne).indexOf(b)>=0?b:ne.UNKNOWN}(_.status);a(new me(T,_.message))}else a(new me(ne.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new me(ne.UNAVAILABLE,"Connection failed."));break;default:be()}}finally{le(qt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(r);le(qt,`RPC '${e}' ${i} sending request:`,r),l.send(n,"POST",u,s,15)})}Bo(e,n,s){const r=Hh(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=HI(),a=jI(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const h=i.join("");le(qt,`Creating RPC '${e}' stream ${r}: ${h}`,l);const d=o.createWebChannel(h,l);let p=!1,_=!1;const T=new VF({Io:I=>{_?le(qt,`Not sending because RPC '${e}' stream ${r} is closed:`,I):(p||(le(qt,`Opening RPC '${e}' stream ${r} transport.`),d.open(),p=!0),le(qt,`RPC '${e}' stream ${r} sending:`,I),d.send(I))},To:()=>d.close()}),A=(I,b,L)=>{I.listen(b,M=>{try{L(M)}catch(O){setTimeout(()=>{throw O},0)}})};return A(d,Xo.EventType.OPEN,()=>{_||(le(qt,`RPC '${e}' stream ${r} transport opened.`),T.yo())}),A(d,Xo.EventType.CLOSE,()=>{_||(_=!0,le(qt,`RPC '${e}' stream ${r} transport closed`),T.So())}),A(d,Xo.EventType.ERROR,I=>{_||(_=!0,so(qt,`RPC '${e}' stream ${r} transport errored:`,I),T.So(new me(ne.UNAVAILABLE,"The operation could not be completed")))}),A(d,Xo.EventType.MESSAGE,I=>{var b;if(!_){const L=I.data[0];yt(!!L);const M=L,O=M.error||((b=M[0])===null||b===void 0?void 0:b.error);if(O){le(qt,`RPC '${e}' stream ${r} received error:`,O);const V=O.status;let $=function(v){const P=Rt[v];if(P!==void 0)return l0(P)}(V),y=O.message;$===void 0&&($=ne.INTERNAL,y="Unknown error status: "+V+" with message "+O.message),_=!0,T.So(new me($,y)),d.close()}else le(qt,`RPC '${e}' stream ${r} received:`,L),T.bo(L)}}),A(a,BI.STAT_EVENT,I=>{I.stat===Yd.PROXY?le(qt,`RPC '${e}' stream ${r} detected buffering proxy`):I.stat===Yd.NOPROXY&&le(qt,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{T.wo()},0),T}}function Wh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v0(t){return new J2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e,n,s=1e3,r=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=s,this.qo=r,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),s=Math.max(0,Date.now()-this.Uo),r=Math.max(0,n-s);r>0&&le("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $F{constructor(e,n,s,r,i,o,a,l){this.ui=e,this.Ho=s,this.Jo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new E0(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===ne.RESOURCE_EXHAUSTED?(js(n.toString()),js("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===ne.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Yo===n&&this.P_(s,r)},s=>{e(()=>{const r=new me(ne.UNKNOWN,"Fetching auth token failed: "+s.message);return this.I_(r)})})}P_(e,n){const s=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{s(()=>this.listener.Eo())}),this.stream.Ro(()=>{s(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(r=>{s(()=>this.I_(r))}),this.stream.onMessage(r=>{s(()=>++this.e_==1?this.E_(r):this.onNext(r))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return le("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(le("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class BF extends $F{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=sF(this.serializer,e),s=function(i){if(!("targetChange"in i))return ve.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ve.min():o.readTime?Ki(o.readTime):ve.min()}(e);return this.listener.d_(n,s)}A_(e){const n={};n.database=Gy(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=tf(l)?{documents:rF(i,l)}:{query:iF(i,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=eF(i,o.resumeToken);const u=of(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ve.min())>0){a.readTime=Z2(i,o.snapshotVersion.toTimestamp());const u=of(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const s=aF(this.serializer,e);s&&(n.labels=s),this.a_(n)}R_(e){const n={};n.database=Gy(this.serializer),n.removeTarget=e,this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jF extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new me(ne.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,s,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,af(n,s),r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new me(ne.UNKNOWN,i.toString())})}Lo(e,n,s,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,af(n,s),r,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new me(ne.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class HF{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(js(n),this.D_=!1):le("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WF{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{s.enqueueAndForget(async()=>{ll(this)&&(le("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=xe(l);u.L_.add(4),await al(u),u.q_.set("Unknown"),u.L_.delete(4),await ju(u)}(this))})}),this.q_=new HF(s,r)}}async function ju(t){if(ll(t))for(const e of t.B_)await e(!0)}async function al(t){for(const e of t.B_)await e(!1)}function T0(t,e){const n=xe(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Up(n)?Vp(n):To(n).r_()&&Fp(n,e))}function xp(t,e){const n=xe(t),s=To(n);n.N_.delete(e),s.r_()&&w0(n,e),n.N_.size===0&&(s.r_()?s.o_():ll(n)&&n.q_.set("Unknown"))}function Fp(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ve.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}To(t).A_(e)}function w0(t,e){t.Q_.xe(e),To(t).R_(e)}function Vp(t){t.Q_=new z2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),To(t).start(),t.q_.v_()}function Up(t){return ll(t)&&!To(t).n_()&&t.N_.size>0}function ll(t){return xe(t).L_.size===0}function I0(t){t.Q_=void 0}async function qF(t){t.q_.set("Online")}async function KF(t){t.N_.forEach((e,n)=>{Fp(t,e)})}async function GF(t,e){I0(t),Up(t)?(t.q_.M_(e),Vp(t)):t.q_.set("Unknown")}async function zF(t,e,n){if(t.q_.set("Online"),e instanceof u0&&e.state===2&&e.cause)try{await async function(r,i){const o=i.cause;for(const a of i.targetIds)r.N_.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.N_.delete(a),r.Q_.removeTarget(a))}(t,e)}catch(s){le("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Xy(t,s)}else if(e instanceof cc?t.Q_.Ke(e):e instanceof c0?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ve.min()))try{const s=await y0(t.localStore);n.compareTo(s)>=0&&await function(i,o){const a=i.Q_.rt(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.N_.get(u);h&&i.N_.set(u,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const h=i.N_.get(l);if(!h)return;i.N_.set(l,h.withResumeToken(Bt.EMPTY_BYTE_STRING,h.snapshotVersion)),w0(i,l);const d=new ur(h.target,l,u,h.sequenceNumber);Fp(i,d)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(s){le("RemoteStore","Failed to raise snapshot:",s),await Xy(t,s)}}async function Xy(t,e,n){if(!il(e))throw e;t.L_.add(1),await al(t),t.q_.set("Offline"),n||(n=()=>y0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{le("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await ju(t)})}async function Jy(t,e){const n=xe(t);n.asyncQueue.verifyOperationInProgress(),le("RemoteStore","RemoteStore received new credentials");const s=ll(n);n.L_.add(3),await al(n),s&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await ju(n)}async function YF(t,e){const n=xe(t);e?(n.L_.delete(2),await ju(n)):e||(n.L_.add(2),await al(n),n.q_.set("Unknown"))}function To(t){return t.K_||(t.K_=function(n,s,r){const i=xe(n);return i.w_(),new BF(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Eo:qF.bind(null,t),Ro:KF.bind(null,t),mo:GF.bind(null,t),d_:zF.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Up(t)?Vp(t):t.q_.set("Unknown")):(await t.K_.stop(),I0(t))})),t.K_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new ei,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new $p(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new me(ne.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function b0(t,e){if(js("AsyncQueue",`${e}: ${t}`),il(t))return new me(ne.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e){this.comparator=e?(n,s)=>e(n,s)||_e.comparator(n.key,s.key):(n,s)=>_e.comparator(n.key,s.key),this.keyedMap=Jo(),this.sortedSet=new Ft(this.comparator)}static emptySet(e){return new Gi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Gi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Gi;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(){this.W_=new Ft(_e.comparator)}track(e){const n=e.doc.key,s=this.W_.get(n);s?e.type!==0&&s.type===3?this.W_=this.W_.insert(n,e):e.type===3&&s.type!==1?this.W_=this.W_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.W_=this.W_.remove(n):e.type===1&&s.type===2?this.W_=this.W_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):be():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,s)=>{e.push(s)}),e}}class lo{constructor(e,n,s,r,i,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new lo(e,n,Gi.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QF{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class XF{constructor(){this.queries=ev(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,s){const r=xe(n),i=r.queries;r.queries=ev(),i.forEach((o,a)=>{for(const l of a.j_)l.onError(s)})})(this,new me(ne.ABORTED,"Firestore shutting down"))}}function ev(){return new Eo(t=>ZI(t),Fu)}async function JF(t,e){const n=xe(t);let s=3;const r=e.query;let i=n.queries.get(r);i?!i.H_()&&e.J_()&&(s=2):(i=new QF,s=e.J_()?0:1);try{switch(s){case 0:i.z_=await n.onListen(r,!0);break;case 1:i.z_=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(o){const a=b0(o,`Initialization of query '${Oi(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Bp(n)}async function ZF(t,e){const n=xe(t),s=e.query;let r=3;const i=n.queries.get(s);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?r=e.J_()?0:1:!i.H_()&&e.J_()&&(r=2))}switch(r){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function eV(t,e){const n=xe(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.j_)a.X_(r)&&(s=!0);o.z_=r}}s&&Bp(n)}function tV(t,e,n){const s=xe(t),r=s.queries.get(e);if(r)for(const i of r.j_)i.onError(n);s.queries.delete(e)}function Bp(t){t.Y_.forEach(e=>{e.next()})}var cf,tv;(tv=cf||(cf={})).ea="default",tv.Cache="cache";class nV{constructor(e,n,s){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=s||{}}X_(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new lo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const s=n!=="Offline";return(!this.options._a||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=lo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==cf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(e){this.key=e}}class C0{constructor(e){this.key=e}}class sV{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Ve(),this.mutatedKeys=Ve(),this.Aa=e0(e),this.Ra=new Gi(this.Aa)}get Va(){return this.Ta}ma(e,n){const s=n?n.fa:new Zy,r=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((h,d)=>{const p=r.get(h),_=Vu(this.query,d)?d:null,T=!!p&&this.mutatedKeys.has(p.key),A=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let I=!1;p&&_?p.data.isEqual(_.data)?T!==A&&(s.track({type:3,doc:_}),I=!0):this.ga(p,_)||(s.track({type:2,doc:_}),I=!0,(l&&this.Aa(_,l)>0||u&&this.Aa(_,u)<0)&&(a=!0)):!p&&_?(s.track({type:0,doc:_}),I=!0):p&&!_&&(s.track({type:1,doc:p}),I=!0,(l||u)&&(a=!0)),I&&(_?(o=o.add(_),i=A?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),s.track({type:1,doc:h})}return{Ra:o,fa:s,ns:a,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,r){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,d)=>function(_,T){const A=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return be()}};return A(_)-A(T)}(h.type,d.type)||this.Aa(h.doc,d.doc)),this.pa(s),r=r!=null&&r;const a=n&&!r?this.ya():[],l=this.da.size===0&&this.current&&!r?1:0,u=l!==this.Ea;return this.Ea=l,o.length!==0||u?{snapshot:new lo(this.query,e.Ra,i,o,e.mutatedKeys,l===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Zy,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Ve(),this.Ra.forEach(s=>{this.Sa(s.key)&&(this.da=this.da.add(s.key))});const n=[];return e.forEach(s=>{this.da.has(s)||n.push(new C0(s))}),this.da.forEach(s=>{e.has(s)||n.push(new R0(s))}),n}ba(e){this.Ta=e.Ts,this.da=Ve();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return lo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class rV{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class iV{constructor(e){this.key=e,this.va=!1}}class oV{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Eo(a=>ZI(a),Fu),this.Ma=new Map,this.xa=new Set,this.Oa=new Ft(_e.comparator),this.Na=new Map,this.La=new Lp,this.Ba={},this.ka=new Map,this.qa=ao.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function aV(t,e,n=!0){const s=N0(t);let r;const i=s.Fa.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.Da()):r=await S0(s,e,n,!0),r}async function lV(t,e){const n=N0(t);await S0(n,e,!0,!1)}async function S0(t,e,n,s){const r=await LF(t.localStore,cs(e)),i=r.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return s&&(a=await cV(t,e,i,o==="current",r.resumeToken)),t.isPrimaryClient&&n&&T0(t.remoteStore,r),a}async function cV(t,e,n,s,r){t.Ka=(d,p,_)=>async function(A,I,b,L){let M=I.view.ma(b);M.ns&&(M=await zy(A.localStore,I.query,!1).then(({documents:y})=>I.view.ma(y,M)));const O=L&&L.targetChanges.get(I.targetId),V=L&&L.targetMismatches.get(I.targetId)!=null,$=I.view.applyChanges(M,A.isPrimaryClient,O,V);return sv(A,I.targetId,$.wa),$.snapshot}(t,d,p,_);const i=await zy(t.localStore,e,!0),o=new sV(e,i.Ts),a=o.ma(i.documents),l=ol.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,l);sv(t,n,u.wa);const h=new rV(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function uV(t,e,n){const s=xe(t),r=s.Fa.get(e),i=s.Ma.get(r.targetId);if(i.length>1)return s.Ma.set(r.targetId,i.filter(o=>!Fu(o,e))),void s.Fa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await lf(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),n&&xp(s.remoteStore,r.targetId),uf(s,r.targetId)}).catch(wp)):(uf(s,r.targetId),await lf(s.localStore,r.targetId,!0))}async function hV(t,e){const n=xe(t),s=n.Fa.get(e),r=n.Ma.get(s.targetId);n.isPrimaryClient&&r.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),xp(n.remoteStore,s.targetId))}async function A0(t,e){const n=xe(t);try{const s=await NF(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.Na.get(i);o&&(yt(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.va=!0:r.modifiedDocuments.size>0?yt(o.va):r.removedDocuments.size>0&&(yt(o.va),o.va=!1))}),await k0(n,s,e)}catch(s){await wp(s)}}function nv(t,e,n){const s=xe(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.Fa.forEach((i,o)=>{const a=o.view.Z_(e);a.snapshot&&r.push(a.snapshot)}),function(o,a){const l=xe(o);l.onlineState=a;let u=!1;l.queries.forEach((h,d)=>{for(const p of d.j_)p.Z_(a)&&(u=!0)}),u&&Bp(l)}(s.eventManager,e),r.length&&s.Ca.d_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function dV(t,e,n){const s=xe(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.Na.get(e),i=r&&r.key;if(i){let o=new Ft(_e.comparator);o=o.insert(i,Yt.newNoDocument(i,ve.min()));const a=Ve().add(i),l=new Bu(ve.min(),new Map,new Ft(je),o,a);await A0(s,l),s.Oa=s.Oa.remove(i),s.Na.delete(e),jp(s)}else await lf(s.localStore,e,!1).then(()=>uf(s,e,n)).catch(wp)}function uf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Ma.get(e))t.Fa.delete(s),n&&t.Ca.$a(s,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(s=>{t.La.containsKey(s)||P0(t,s)})}function P0(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(xp(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),jp(t))}function sv(t,e,n){for(const s of n)s instanceof R0?(t.La.addReference(s.key,e),fV(t,s)):s instanceof C0?(le("SyncEngine","Document no longer in limbo: "+s.key),t.La.removeReference(s.key,e),t.La.containsKey(s.key)||P0(t,s.key)):be()}function fV(t,e){const n=e.key,s=n.path.canonicalString();t.Oa.get(n)||t.xa.has(s)||(le("SyncEngine","New document in limbo: "+n),t.xa.add(s),jp(t))}function jp(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new _e(_t.fromString(e)),s=t.qa.next();t.Na.set(s,new iV(n)),t.Oa=t.Oa.insert(n,s),T0(t.remoteStore,new ur(cs(Pp(n.path)),s,"TargetPurposeLimboResolution",Ip.oe))}}async function k0(t,e,n){const s=xe(t),r=[],i=[],o=[];s.Fa.isEmpty()||(s.Fa.forEach((a,l)=>{o.push(s.Ka(l,e,n).then(u=>{var h;if((u||n)&&s.isPrimaryClient){const d=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;s.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){r.push(u);const d=Mp.Wi(l.targetId,u);i.push(d)}}))}),await Promise.all(o),s.Ca.d_(r),await async function(l,u){const h=xe(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>J.forEach(u,p=>J.forEach(p.$i,_=>h.persistence.referenceDelegate.addReference(d,p.targetId,_)).next(()=>J.forEach(p.Ui,_=>h.persistence.referenceDelegate.removeReference(d,p.targetId,_)))))}catch(d){if(!il(d))throw d;le("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const p=d.targetId;if(!d.fromCache){const _=h.os.get(p),T=_.snapshotVersion,A=_.withLastLimboFreeSnapshotVersion(T);h.os=h.os.insert(p,A)}}}(s.localStore,i))}async function pV(t,e){const n=xe(t);if(!n.currentUser.isEqual(e)){le("SyncEngine","User change. New user:",e.toKey());const s=await g0(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(a=>{a.forEach(l=>{l.reject(new me(ne.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await k0(n,s.hs)}}function mV(t,e){const n=xe(t),s=n.Na.get(e);if(s&&s.va)return Ve().add(s.key);{let r=Ve();const i=n.Ma.get(e);if(!i)return r;for(const o of i){const a=n.Fa.get(o);r=r.unionWith(a.view.Va)}return r}}function N0(t){const e=xe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=A0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dV.bind(null,e),e.Ca.d_=eV.bind(null,e.eventManager),e.Ca.$a=tV.bind(null,e.eventManager),e}class Uc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=v0(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return kF(this.persistence,new AF,e.initialUser,this.serializer)}Ga(e){return new RF(Dp.Zr,this.serializer)}Wa(e){return new MF}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Uc.provider={build:()=>new Uc};class hf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>nv(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=pV.bind(null,this.syncEngine),await YF(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new XF}()}createDatastore(e){const n=v0(e.databaseInfo.databaseId),s=function(i){return new UF(i)}(e.databaseInfo);return function(i,o,a,l){return new jF(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,r,i,o,a){return new WF(s,r,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>nv(this.syncEngine,n,0),function(){return Qy.D()?new Qy:new xF}())}createSyncEngine(e,n){return function(r,i,o,a,l,u,h){const d=new oV(r,i,o,a,l,u);return h&&(d.Qa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(r){const i=xe(r);le("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await al(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}hf.provider={build:()=>new hf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _V{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):js("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gV{constructor(e,n,s,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Kt.UNAUTHENTICATED,this.clientId=qI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,async o=>{le("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(le("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ei;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=b0(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function qh(t,e){t.asyncQueue.verifyOperationInProgress(),le("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await g0(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function rv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await yV(t);le("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(s=>Jy(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>Jy(e.remoteStore,r)),t._onlineComponents=e}async function yV(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){le("FirestoreClient","Using user provided OfflineComponentProvider");try{await qh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(r){return r.name==="FirebaseError"?r.code===ne.FAILED_PRECONDITION||r.code===ne.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(n))throw n;so("Error using user provided cache. Falling back to memory cache: "+n),await qh(t,new Uc)}}else le("FirestoreClient","Using default OfflineComponentProvider"),await qh(t,new Uc);return t._offlineComponents}async function vV(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(le("FirestoreClient","Using user provided OnlineComponentProvider"),await rv(t,t._uninitializedComponentsProvider._online)):(le("FirestoreClient","Using default OnlineComponentProvider"),await rv(t,new hf))),t._onlineComponents}async function EV(t){const e=await vV(t),n=e.eventManager;return n.onListen=aV.bind(null,e.syncEngine),n.onUnlisten=uV.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=lV.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=hV.bind(null,e.syncEngine),n}function TV(t,e,n={}){const s=new ei;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const h=new _V({next:p=>{h.Za(),o.enqueueAndForget(()=>ZF(i,d));const _=p.docs.has(a);!_&&p.fromCache?u.reject(new me(ne.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&p.fromCache&&l&&l.source==="server"?u.reject(new me(ne.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new nV(Pp(a.path),h,{includeMetadataChanges:!0,_a:!0});return JF(i,d)}(await EV(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wV(t,e,n){if(!n)throw new me(ne.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function IV(t,e,n,s){if(e===!0&&s===!0)throw new me(ne.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ov(t){if(!_e.isDocumentKey(t))throw new me(ne.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function bV(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":be()}function df(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new me(ne.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=bV(t);throw new me(ne.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new me(ne.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new me(ne.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}IV("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=O0((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new me(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new me(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new me(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Hp{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new av({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new me(ne.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new me(ne.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new av(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new Yx;switch(s.type){case"firstParty":return new Zx(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new me(ne.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=iv.get(n);s&&(le("ComponentProvider","Removing Datastore"),iv.delete(n),s.terminate())}(this),Promise.resolve()}}function RV(t,e,n,s={}){var r;const i=(t=df(t,Hp))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&so("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let a,l;if(typeof s.mockUserToken=="string")a=s.mockUserToken,l=Kt.MOCK_USER;else{a=yL(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new me(ne.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Kt(u)}t._authCredentials=new Qx(new WI(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Wp(this.firestore,e,this._query)}}class Vs{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wa(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Vs(this.firestore,e,this._key)}}class Wa extends Wp{constructor(e,n,s){super(e,n,Pp(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Vs(this.firestore,null,new _e(e))}withConverter(e){return new Wa(this.firestore,e,this._path)}}function CV(t,e,...n){if(t=Qn(t),arguments.length===1&&(e=qI.newId()),wV("doc","path",e),t instanceof Hp){const s=_t.fromString(e,...n);return ov(s),new Vs(t,null,new _e(s))}{if(!(t instanceof Vs||t instanceof Wa))throw new me(ne.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(_t.fromString(e,...n));return ov(s),new Vs(t.firestore,t instanceof Wa?t.converter:null,new _e(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new E0(this,"async_queue_retry"),this.Vu=()=>{const s=Wh();s&&le("AsyncQueue","Visibility state changed to "+s.visibilityState),this.t_.jo()},this.mu=e;const n=Wh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Wh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new ei;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!il(e))throw e;le("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(s=>{this.Eu=s,this.du=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw js("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.du=!1,s))));return this.mu=n,n}enqueueAfterDelay(e,n,s){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const r=$p.createAndSchedule(this,e,n,s,i=>this.yu(i));return this.Tu.push(r),r}fu(){this.Eu&&be()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class L0 extends Hp{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new lv,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new lv(e),this._firestoreClient=void 0,await e}}}function SV(t,e){const n=typeof t=="object"?t:up(),s=typeof t=="string"?t:"(default)",r=cp(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=gL("firestore");i&&RV(r,...i)}return r}function AV(t){if(t._terminated)throw new me(ne.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||PV(t),t._firestoreClient}function PV(t){var e,n,s;const r=t._freezeSettings(),i=function(a,l,u,h){return new d2(a,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,O0(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._componentsProvider||!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),t._firestoreClient=new gV(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $c(Bt.fromBase64String(e))}catch(n){throw new me(ne.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new $c(Bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new me(ne.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ln(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kV{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new me(ne.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new me(ne.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return je(this._lat,e._lat)||je(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NV{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0}(this._values,e._values)}}const OV=new RegExp("[~\\*/\\[\\]]");function LV(t,e,n){if(e.search(OV)>=0)throw cv(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new D0(...e.split("."))._internalPath}catch{throw cv(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function cv(t,e,n,s,r){let i=`Function ${e}() called with invalid data`;i+=". ";let o="";return new me(ne.INVALID_ARGUMENT,i+t+o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Vs(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new DV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(x0("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class DV extends M0{data(){return super.data()}}function x0(t,e){return typeof e=="string"?LV(t,e):e instanceof D0?e._internalPath:e._delegate._internalPath}class MV{convertValue(e,n="none"){switch(li(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Et(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ai(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw be()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return Mu(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertVectorValue(e){var n,s,r;const i=(r=(s=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||s===void 0?void 0:s.values)===null||r===void 0?void 0:r.map(o=>Et(o.doubleValue));return new NV(i)}convertGeoPoint(e){return new kV(Et(e.latitude),Et(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Rp(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ba(e));default:return null}}convertTimestamp(e){const n=vr(e);return new gn(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=_t.fromString(e);yt(_0(s));const r=new ja(s.get(1),s.get(3)),i=new _e(s.popFirst(5));return r.isEqual(n)||js(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xV{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class F0 extends M0{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new FV(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(x0("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class FV extends F0{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VV(t){t=df(t,Vs);const e=df(t.firestore,L0);return TV(AV(e),t._key).then(n=>$V(e,t,n))}class UV extends MV{constructor(e){super(),this.firestore=e}convertBytes(e){return new $c(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Vs(this.firestore,null,n)}}function $V(t,e,n){const s=n.docs.get(e._key),r=new UV(t);return new F0(t,r,e._key,s,new xV(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(r){vo=r})(Ar),hs(new Kn("firestore",(s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),a=new L0(new Xx(s.getProvider("auth-internal")),new t2(s.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new me(ne.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ja(u.options.projectId,h)}(o,r),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Rn(Sy,"4.7.3",e),Rn(Sy,"4.7.3","esm2017")})();var BV="firebase",jV="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rn(BV,jV,"app");const HV={apiKey:"AIzaSyA4rkXYJb4N92g3do-lv9sZ8vTR7751iZc",authDomain:"vue3-emon.firebaseapp.com",projectId:"vue3-emon",storageBucket:"vue3-emon.firebasestorage.app",messagingSenderId:"88127897349",appId:"1:88127897349:web:35625b3dd76f2fecc2816c",measurementId:"G-1SSZDZNBB0"},V0=Yw(HV);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WV=new Map,qV={activated:!1,tokenObservers:[]};function zn(t){return WV.get(t)||Object.assign({},qV)}const uv={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KV{constructor(e,n,s,r,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=r,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=r,r>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Ma,this.pending.promise.catch(n=>{}),await GV(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Ma,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function GV(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zV={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Bc=new _o("appCheck","AppCheck",zV);function U0(t){if(!zn(t).activated)throw Bc.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YV="firebase-app-check-database",QV=1,ff="firebase-app-check-store";let Bl=null;function XV(){return Bl||(Bl=new Promise((t,e)=>{try{const n=indexedDB.open(YV,QV);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var r;e(Bc.create("storage-open",{originalErrorMessage:(r=s.target.error)===null||r===void 0?void 0:r.message}))},n.onupgradeneeded=s=>{const r=s.target.result;switch(s.oldVersion){case 0:r.createObjectStore(ff,{keyPath:"compositeKey"})}}}catch(n){e(Bc.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Bl)}function JV(t,e){return ZV(e4(t),e)}async function ZV(t,e){const s=(await XV()).transaction(ff,"readwrite"),i=s.objectStore(ff).put({compositeKey:t,value:e});return new Promise((o,a)=>{i.onsuccess=l=>{o()},s.onerror=l=>{var u;a(Bc.create("storage-set",{originalErrorMessage:(u=l.target.error)===null||u===void 0?void 0:u.message}))}})}function e4(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf=new el("@firebase/app-check");function hv(t,e){return qw()?JV(t,e).catch(n=>{pf.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t4={error:"UNKNOWN_ERROR"};function n4(t){return Au.encodeString(JSON.stringify(t),!1)}async function mf(t,e=!1){const n=t.app;U0(n);const s=zn(n);let r=s.token,i;if(r&&!ea(r)&&(s.token=void 0,r=void 0),!r){const l=await s.cachedTokenPromise;l&&(ea(l)?r=l:await hv(n,void 0))}if(!e&&r&&ea(r))return{token:r.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),r=await zn(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?pf.warn(l.message):pf.error(l),i=l}let a;return r?i?ea(r)?a={token:r.token,internalError:i}:a=fv(i):(a={token:r.token},s.token=r,await hv(n,r)):a=fv(i),o&&o4(n,a),a}async function s4(t){const e=t.app;U0(e);const{provider:n}=zn(e);{const{token:s}=await n.getToken();return{token:s}}}function r4(t,e,n,s){const{app:r}=t,i=zn(r),o={next:n,error:s,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&ea(i.token)){const a=i.token;Promise.resolve().then(()=>{n({token:a.token}),dv(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>dv(t))}function $0(t,e){const n=zn(t),s=n.tokenObservers.filter(r=>r.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function dv(t){const{app:e}=t,n=zn(e);let s=n.tokenRefresher;s||(s=i4(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function i4(t){const{app:e}=t;return new KV(async()=>{const n=zn(e);let s;if(n.token?s=await mf(t,!0):s=await mf(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=zn(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const r=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,r),Math.max(0,s-Date.now())}else return 0},uv.RETRIAL_MIN_WAIT,uv.RETRIAL_MAX_WAIT)}function o4(t,e){const n=zn(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function ea(t){return t.expireTimeMillis-Date.now()>0}function fv(t){return{token:n4(t4),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a4{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=zn(this.app);for(const n of e)$0(this.app,n.next);return Promise.resolve()}}function l4(t,e){return new a4(t,e)}function c4(t){return{getToken:e=>mf(t,e),getLimitedUseToken:()=>s4(t),addTokenListener:e=>r4(t,"INTERNAL",e),removeTokenListener:e=>$0(t.app,e)}}const u4="@firebase/app-check",h4="0.8.8",d4="app-check",pv="app-check-internal";function f4(){hs(new Kn(d4,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return l4(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(pv).initialize()})),hs(new Kn(pv,t=>{const e=t.getProvider("app-check").getImmediate();return c4(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Rn(u4,h4)}f4();const B0=Symbol("firebaseApp");function p4(t){return gr()&&mn(B0,null)||up(t)}const jl=new WeakMap;function m4(t,e){if(!jl.has(t)){const n=ru(!0);jl.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),jl.delete(t)}}return jl.get(t)}const _4=new WeakMap,Hl=new WeakMap;function j0(t){const e=p4(t);if(!Hl.has(e)){let n;const r=[new Promise(i=>{n=i}),i=>{Hl.set(e,i),n(i.value)}];Hl.set(e,r)}return Hl.get(e)}function g4(t){const e=j0(t);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function y4(t,e){II(e,n=>{const s=j0();t.value=n,Array.isArray(s)&&s[1](t)})}var mv={};const _v="@firebase/database",gv="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let H0="";function v4(t){H0=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E4{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ut(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:xa(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T4{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ws(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new E4(e)}}catch{}return new T4},Yr=W0("localStorage"),w4=W0("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=new el("@firebase/database"),I4=function(){let t=1;return function(){return t++}}(),q0=function(t){const e=ML(t),n=new kL;n.update(e);const s=n.digest();return Au.encodeByteArray(s)},cl=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=cl.apply(null,s):typeof s=="object"?e+=Ut(s):e+=s,e+=" "}return e};let ga=null,yv=!0;const b4=function(t,e){re(!e,"Can't turn on custom loggers persistently."),zi.logLevel=Pe.VERBOSE,ga=zi.log.bind(zi)},Qt=function(...t){if(yv===!0&&(yv=!1,ga===null&&w4.get("logging_enabled")===!0&&b4()),ga){const e=cl.apply(null,t);ga(e)}},ul=function(t){return function(...e){Qt(t,...e)}},_f=function(...t){const e="FIREBASE INTERNAL ERROR: "+cl(...t);zi.error(e)},ci=function(...t){const e=`FIREBASE FATAL ERROR: ${cl(...t)}`;throw zi.error(e),new Error(e)},Cn=function(...t){const e="FIREBASE WARNING: "+cl(...t);zi.warn(e)},R4=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Cn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},K0=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},C4=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},co="[MIN_NAME]",ui="[MAX_NAME]",wo=function(t,e){if(t===e)return 0;if(t===co||e===ui)return-1;if(e===co||t===ui)return 1;{const n=vv(t),s=vv(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},S4=function(t,e){return t===e?0:t<e?-1:1},Wo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ut(e))},qp=function(t){if(typeof t!="object"||t===null)return Ut(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ut(e[s]),n+=":",n+=qp(t[e[s]]);return n+="}",n},G0=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let r=0;r<n;r+=e)r+e>n?s.push(t.substring(r,n)):s.push(t.substring(r,r+e));return s};function Ln(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const z0=function(t){re(!K0(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let r,i,o,a,l;t===0?(i=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),i=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-s-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(r?1:0),u.reverse();const h=u.join("");let d="";for(l=0;l<64;l+=8){let p=parseInt(h.substr(l,8),2).toString(16);p.length===1&&(p="0"+p),d=d+p}return d.toLowerCase()},A4=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},P4=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},k4=new RegExp("^-?(0*)\\d{1,10}$"),N4=-2147483648,O4=2147483647,vv=function(t){if(k4.test(t)){const e=Number(t);if(e>=N4&&e<=O4)return e}return null},hl=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Cn("Exception was thrown by user callback.",n),e},Math.floor(0))}},L4=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ya=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D4{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Cn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M4{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Qt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Cn(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp="5",Y0="v",Q0="s",X0="r",J0="f",Z0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,eb="ls",tb="p",gf="ac",nb="websocket",sb="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x4{constructor(e,n,s,r,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Yr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Yr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function F4(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function rb(t,e,n){re(typeof e=="string","typeof type must == string"),re(typeof n=="object","typeof params must == object");let s;if(e===nb)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===sb)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);F4(t)&&(n.ns=t.namespace);const r=[];return Ln(n,(i,o)=>{r.push(i+"="+o)}),s+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V4{constructor(){this.counters_={}}incrementCounter(e,n=1){Ws(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return hL(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh={},Gh={};function Gp(t){const e=t.toString();return Kh[e]||(Kh[e]=new V4),Kh[e]}function U4(t,e){const n=t.toString();return Gh[n]||(Gh[n]=e()),Gh[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $4{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<s.length;++r)s[r]&&hl(()=>{this.onMessage_(s[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev="start",B4="close",j4="pLPCommand",H4="pRTLPCB",ib="id",ob="pw",ab="ser",W4="cb",q4="seg",K4="ts",G4="d",z4="dframe",lb=1870,cb=30,Y4=lb-cb,Q4=25e3,X4=3e4;class xi{constructor(e,n,s,r,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ul(e),this.stats_=Gp(n),this.urlFn=l=>(this.appCheckToken&&(l[gf]=this.appCheckToken),rb(n,sb,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new $4(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(X4)),C4(()=>{if(this.isClosed_)return;this.scriptTagHolder=new zp((...i)=>{const[o,a,l,u,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ev)this.id=a,this.password=l;else if(o===B4)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Ev]="t",s[ab]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[W4]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Y0]=Kp,this.transportSessionId&&(s[Q0]=this.transportSessionId),this.lastSessionId&&(s[eb]=this.lastSessionId),this.applicationId&&(s[tb]=this.applicationId),this.appCheckToken&&(s[gf]=this.appCheckToken),typeof location<"u"&&location.hostname&&Z0.test(location.hostname)&&(s[X0]=J0);const r=this.urlFn(s);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){xi.forceAllow_=!0}static forceDisallow(){xi.forceDisallow_=!0}static isAvailable(){return xi.forceAllow_?!0:!xi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!A4()&&!P4()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ut(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Vw(n),r=G0(s,Y4);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[z4]="t",s[ib]=e,s[ob]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ut(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class zp{constructor(e,n,s,r){this.onDisconnect=s,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=I4(),window[j4+this.uniqueCallbackIdentifier]=e,window[H4+this.uniqueCallbackIdentifier]=n,this.myIFrame=zp.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Qt("frame writing exception"),a.stack&&Qt(a.stack),Qt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Qt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ib]=this.myID,e[ob]=this.myPW,e[ab]=this.currentSerial;let n=this.urlFn(e),s="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+cb+s.length<=lb;){const o=this.pendingSegs.shift();s=s+"&"+q4+r+"="+o.seg+"&"+K4+r+"="+o.ts+"&"+G4+r+"="+o.d,r++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(s,Math.floor(Q4)),i=()=>{clearTimeout(r),s()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const r=s.readyState;(!r||r==="loaded"||r==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Qt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J4=16384,Z4=45e3;let jc=null;typeof MozWebSocket<"u"?jc=MozWebSocket:typeof WebSocket<"u"&&(jc=WebSocket);class Fn{constructor(e,n,s,r,i,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ul(this.connId),this.stats_=Gp(n),this.connURL=Fn.connectionURL_(n,o,a,r,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,r,i){const o={};return o[Y0]=Kp,typeof location<"u"&&location.hostname&&Z0.test(location.hostname)&&(o[X0]=J0),n&&(o[Q0]=n),s&&(o[eb]=s),r&&(o[gf]=r),i&&(o[tb]=i),rb(e,nb,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Yr.set("previous_websocket_failure",!0);try{let s;Ww(),this.mySock=new jc(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Fn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&jc!==null&&!Fn.forceDisallow_}static previouslyFailed(){return Yr.isInMemoryStorage||Yr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Yr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=xa(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(re(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ut(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=G0(n,J4);s.length>1&&this.sendString_(String(s.length));for(let r=0;r<s.length;r++)this.sendString_(s[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Z4))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Fn.responsesRequiredToBeHealthy=2;Fn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[xi,Fn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Fn&&Fn.isAvailable();let s=n&&!Fn.previouslyFailed();if(e.webSocketOnly&&(n||Cn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Fn];else{const r=this.transports_=[];for(const i of qa.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);qa.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}qa.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eU=6e4,tU=5e3,nU=10*1024,sU=100*1024,zh="t",Tv="d",rU="s",wv="r",iU="e",Iv="o",bv="a",Rv="n",Cv="p",oU="h";class aU{constructor(e,n,s,r,i,o,a,l,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ul("c:"+this.id+":"),this.transportManager_=new qa(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=ya(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>sU?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>nU?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(zh in e){const n=e[zh];n===bv?this.upgradeIfSecondaryHealthy_():n===wv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Iv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Wo("t",e),s=Wo("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Cv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:bv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Rv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Wo("t",e),s=Wo("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Wo(zh,e);if(Tv in e){const s=e[Tv];if(n===oU){const r=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===Rv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===rU?this.onConnectionShutdown_(s):n===wv?this.onReset_(s):n===iU?_f("Server Error: "+s):n===Iv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):_f("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Kp!==s&&Cn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ya(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(eU))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ya(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(tU))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Cv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Yr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{put(e,n,s,r){}merge(e,n,s,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e){this.allowedEvents_=e,this.listeners_={},re(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const r=this.getInitialEvent(e);r&&n.apply(s,r)}off(e,n,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===n&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){re(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc extends hb{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ap()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Hc}getInitialEvent(e){return re(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv=32,Av=768;class lt{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[s]=this.pieces_[r],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Qe(){return new lt("")}function De(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Tr(t){return t.pieces_.length-t.pieceNum_}function at(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new lt(t.pieces_,e)}function db(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function lU(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function fb(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function pb(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new lt(e,0)}function xt(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof lt)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let r=0;r<s.length;r++)s[r].length>0&&n.push(s[r])}return new lt(n,0)}function Ne(t){return t.pieceNum_>=t.pieces_.length}function kn(t,e){const n=De(t),s=De(e);if(n===null)return e;if(n===s)return kn(at(t),at(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function mb(t,e){if(Tr(t)!==Tr(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Un(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Tr(t)>Tr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class cU{constructor(e,n){this.errorPrefix_=n,this.parts_=fb(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ku(this.parts_[s]);_b(this)}}function uU(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ku(e),_b(t)}function hU(t){const e=t.parts_.pop();t.byteLength_-=ku(e),t.parts_.length>0&&(t.byteLength_-=1)}function _b(t){if(t.byteLength_>Av)throw new Error(t.errorPrefix_+"has a key path longer than "+Av+" bytes ("+t.byteLength_+").");if(t.parts_.length>Sv)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Sv+") or object contains a cycle "+jr(t))}function jr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp extends hb{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Yp}getInitialEvent(e){return re(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo=1e3,dU=60*5*1e3,Pv=30*1e3,fU=1.3,pU=3e4,mU="server_kill",kv=3;class Us extends ub{constructor(e,n,s,r,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Us.nextPersistentConnectionId_++,this.log_=ul("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=qo,this.maxReconnectDelay_=dU,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Ww())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Yp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Hc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const r=++this.requestNumber_,i={r,a:e,b:n};this.log_(Ut(i)),re(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),s&&(this.requestCBHash_[r]=s)}get(e){this.initConnection_();const n=new Ma,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,s,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),re(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),re(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:s};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+s+" for "+r);const i={p:s},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,u=a.s;Us.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(r))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(s,r),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ws(e,"w")){const s=no(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Cn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||PL(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Pv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=AL(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+r),re(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,r)&&this.connected_&&this.sendUnlisten_(s,r,e._queryObject,n)}sendUnlisten_(e,n,s,r){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";r&&(i.q=s,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,r){const i={p:n,d:s};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,s,r){this.putInternal("p",e,n,s,r)}merge(e,n,s,r){this.putInternal("m",e,n,s,r)}putInternal(e,n,s,r,i){this.initConnection_();const o={p:n,d:s};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const i=s.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ut(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):_f("Unrecognized action received from server: "+Ut(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){re(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=qo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=qo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>pU&&(this.reconnectDelay_=qo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*fU)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Us.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},u=function(d){re(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,p]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Qt("getToken() completed but was canceled"):(Qt("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=p&&p.token,a=new aU(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{Cn(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(mU)},i))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Cn(d),l())}}}interrupt(e){Qt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Qt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ud(this.interruptReasons_)&&(this.reconnectDelay_=qo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(i=>qp(i)).join("$"):s="default";const r=this.removeListen_(e,s);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const s=new lt(e).toString();let r;if(this.listens.has(s)){const i=this.listens.get(s);r=i.get(n),i.delete(n),i.size===0&&this.listens.delete(s)}else r=void 0;return r}onAuthRevoked_(e,n){Qt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=kv&&(this.reconnectDelay_=Pv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Qt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=kv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+H0.replace(/\./g,"-")]=1,ap()?e["framework.cordova"]=1:Hw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Hc.getInstance().currentlyOnline();return Ud(this.interruptReasons_)&&e}}Us.nextPersistentConnectionId_=0;Us.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Me(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Me(co,e),r=new Me(co,n);return this.compare(s,r)!==0}minPost(){return Me.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wl;class gb extends Hu{static get __EMPTY_NODE(){return Wl}static set __EMPTY_NODE(e){Wl=e}compare(e,n){return wo(e.name,n.name)}isDefinedOn(e){throw mo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Me.MIN}maxPost(){return new Me(ui,Wl)}makePost(e,n){return re(typeof e=="string","KeyIndex indexValue must always be a string."),new Me(e,Wl)}toString(){return".key"}}const Yi=new gb;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,n,s,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Dt{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Dt.RED,this.left=r??pn.EMPTY_NODE,this.right=i??pn.EMPTY_NODE}copy(e,n,s,r,i){return new Dt(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return pn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,r;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return pn.EMPTY_NODE;r=s.right.min_(),s=s.copy(r.key,r.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Dt.RED=!0;Dt.BLACK=!1;class _U{copy(e,n,s,r,i){return this}insert(e,n,s){return new Dt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class pn{constructor(e,n=pn.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new pn(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Dt.BLACK,null,null))}remove(e){return new pn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Dt.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,r=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return r?r.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(r=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ql(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ql(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ql(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ql(this.root_,null,this.comparator_,!0,e)}}pn.EMPTY_NODE=new _U;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gU(t,e){return wo(t.name,e.name)}function Qp(t,e){return wo(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yf;function yU(t){yf=t}const yb=function(t){return typeof t=="number"?"number:"+z0(t):"string:"+t},vb=function(t){if(t.isLeafNode()){const e=t.val();re(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ws(e,".sv"),"Priority must be a string or number.")}else re(t===yf||t.isEmpty(),"priority of unexpected type.");re(t===yf||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nv;class Ot{constructor(e,n=Ot.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,re(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),vb(this.priorityNode_)}static set __childrenNodeConstructor(e){Nv=e}static get __childrenNodeConstructor(){return Nv}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ot(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ot.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ne(e)?this:De(e)===".priority"?this.priorityNode_:Ot.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ot.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=De(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(re(s!==".priority"||Tr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ot.__childrenNodeConstructor.EMPTY_NODE.updateChild(at(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+yb(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=z0(this.value_):e+=this.value_,this.lazyHash_=q0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ot.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ot.__childrenNodeConstructor?-1:(re(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,r=Ot.VALUE_TYPE_ORDER.indexOf(n),i=Ot.VALUE_TYPE_ORDER.indexOf(s);return re(r>=0,"Unknown leaf type: "+n),re(i>=0,"Unknown leaf type: "+s),r===i?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ot.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eb,Tb;function vU(t){Eb=t}function EU(t){Tb=t}class TU extends Hu{compare(e,n){const s=e.node.getPriority(),r=n.node.getPriority(),i=s.compareTo(r);return i===0?wo(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Me.MIN}maxPost(){return new Me(ui,new Ot("[PRIORITY-POST]",Tb))}makePost(e,n){const s=Eb(e);return new Me(n,new Ot("[PRIORITY-POST]",s))}toString(){return".priority"}}const Zt=new TU;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wU=Math.log(2);class IU{constructor(e){const n=i=>parseInt(Math.log(i)/wU,10),s=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=s(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Wc=function(t,e,n,s){t.sort(e);const r=function(l,u){const h=u-l;let d,p;if(h===0)return null;if(h===1)return d=t[l],p=n?n(d):d,new Dt(p,d.node,Dt.BLACK,null,null);{const _=parseInt(h/2,10)+l,T=r(l,_),A=r(_+1,u);return d=t[_],p=n?n(d):d,new Dt(p,d.node,Dt.BLACK,T,A)}},i=function(l){let u=null,h=null,d=t.length;const p=function(T,A){const I=d-T,b=d;d-=T;const L=r(I+1,b),M=t[I],O=n?n(M):M;_(new Dt(O,M.node,A,null,L))},_=function(T){u?(u.left=T,u=T):(h=T,u=T)};for(let T=0;T<l.count;++T){const A=l.nextBitIsOne(),I=Math.pow(2,l.count-(T+1));A?p(I,Dt.BLACK):(p(I,Dt.BLACK),p(I,Dt.RED))}return h},o=new IU(t.length),a=i(o);return new pn(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yh;const Si={};class Ms{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return re(Si&&Zt,"ChildrenNode.ts has not been loaded"),Yh=Yh||new Ms({".priority":Si},{".priority":Zt}),Yh}get(e){const n=no(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof pn?n:null}hasIndex(e){return Ws(this.indexSet_,e.toString())}addIndex(e,n){re(e!==Yi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let r=!1;const i=n.getIterator(Me.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),s.push(o),o=i.getNext();let a;r?a=Wc(s,e.getCompare()):a=Si;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new Ms(h,u)}addToIndexes(e,n){const s=Sc(this.indexes_,(r,i)=>{const o=no(this.indexSet_,i);if(re(o,"Missing index implementation for "+i),r===Si)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Me.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Wc(a,o.getCompare())}else return Si;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new Me(e.name,a))),l.insert(e,e.node)}});return new Ms(s,this.indexSet_)}removeFromIndexes(e,n){const s=Sc(this.indexes_,r=>{if(r===Si)return r;{const i=n.get(e.name);return i?r.remove(new Me(e.name,i)):r}});return new Ms(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ko;class ze{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&vb(this.priorityNode_),this.children_.isEmpty()&&re(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ko||(Ko=new ze(new pn(Qp),null,Ms.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ko}updatePriority(e){return this.children_.isEmpty()?this:new ze(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ko:n}}getChild(e){const n=De(e);return n===null?this:this.getImmediateChild(n).getChild(at(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(re(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Me(e,n);let r,i;n.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(s,this.children_)):(r=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(s,this.children_));const o=r.isEmpty()?Ko:this.priorityNode_;return new ze(r,o,i)}}updateChild(e,n){const s=De(e);if(s===null)return n;{re(De(e)!==".priority"||Tr(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(s).updateChild(at(e),n);return this.updateImmediateChild(s,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,r=0,i=!0;if(this.forEachChild(Zt,(o,a)=>{n[o]=a.val(e),s++,i&&ze.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+yb(this.getPriority().val())+":"),this.forEachChild(Zt,(n,s)=>{const r=s.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":q0(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const r=this.resolveIndex_(s);if(r){const i=r.getPredecessorKey(new Me(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Me(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Me(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,Me.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,Me.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===dl?-1:0}withIndex(e){if(e===Yi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ze(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Yi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Zt),r=n.getIterator(Zt);let i=s.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=s.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Yi?null:this.indexMap_.get(e.toString())}}ze.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class bU extends ze{constructor(){super(new pn(Qp),ze.EMPTY_NODE,Ms.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ze.EMPTY_NODE}isEmpty(){return!1}}const dl=new bU;Object.defineProperties(Me,{MIN:{value:new Me(co,ze.EMPTY_NODE)},MAX:{value:new Me(ui,dl)}});gb.__EMPTY_NODE=ze.EMPTY_NODE;Ot.__childrenNodeConstructor=ze;yU(dl);EU(dl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RU=!0;function Xt(t,e=null){if(t===null)return ze.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),re(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ot(n,Xt(e))}if(!(t instanceof Array)&&RU){const n=[];let s=!1;if(Ln(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Xt(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new Me(o,l)))}}),n.length===0)return ze.EMPTY_NODE;const i=Wc(n,gU,o=>o.name,Qp);if(s){const o=Wc(n,Zt.getCompare());return new ze(i,Xt(e),new Ms({".priority":o},{".priority":Zt}))}else return new ze(i,Xt(e),Ms.Default)}else{let n=ze.EMPTY_NODE;return Ln(t,(s,r)=>{if(Ws(t,s)&&s.substring(0,1)!=="."){const i=Xt(r);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(s,i))}}),n.updatePriority(Xt(e))}}vU(Xt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CU extends Hu{constructor(e){super(),this.indexPath_=e,re(!Ne(e)&&De(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),r=this.extractChild(n.node),i=s.compareTo(r);return i===0?wo(e.name,n.name):i}makePost(e,n){const s=Xt(e),r=ze.EMPTY_NODE.updateChild(this.indexPath_,s);return new Me(n,r)}maxPost(){const e=ze.EMPTY_NODE.updateChild(this.indexPath_,dl);return new Me(ui,e)}toString(){return fb(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SU extends Hu{compare(e,n){const s=e.node.compareTo(n.node);return s===0?wo(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Me.MIN}maxPost(){return Me.MAX}makePost(e,n){const s=Xt(e);return new Me(n,s)}toString(){return".value"}}const AU=new SU;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PU(t){return{type:"value",snapshotNode:t}}function kU(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function NU(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ov(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function OU(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Zt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return re(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return re(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:co}hasEnd(){return this.endSet_}getIndexEndValue(){return re(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return re(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ui}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return re(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Zt}copy(){const e=new Xp;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Lv(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Zt?n="$priority":t.index_===AU?n="$value":t.index_===Yi?n="$key":(re(t.index_ instanceof CU,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ut(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ut(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ut(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ut(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ut(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Dv(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Zt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc extends ub{constructor(e,n,s,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=r,this.log_=ul("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(re(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=qc.getListenId_(e,s),a={};this.listens_[o]=a;const l=Lv(e._queryParams);this.restRequest_(i+".json",l,(u,h)=>{let d=h;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(i,d,!1,s),no(this.listens_,o)===a){let p;u?u===401?p="permission_denied":p="rest_error:"+u:p="ok",r(p,null)}})}unlisten(e,n){const s=qc.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Lv(e._queryParams),s=e._path.toString(),r=new Ma;return this.restRequest_(s+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(s,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(n.auth=r.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+go(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=xa(a.responseText)}catch{Cn("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Cn("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LU{constructor(){this.rootNode_=ze.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(){return{value:null,children:new Map}}function wb(t,e,n){if(Ne(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=De(e);t.children.has(s)||t.children.set(s,Kc());const r=t.children.get(s);e=at(e),wb(r,e,n)}}function vf(t,e,n){t.value!==null?n(e,t.value):DU(t,(s,r)=>{const i=new lt(e.toString()+"/"+s);vf(r,i,n)})}function DU(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MU{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ln(this.last_,(s,r)=>{n[s]=n[s]-r}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv=10*1e3,xU=30*1e3,FU=5*60*1e3;class VU{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new MU(e);const s=Mv+(xU-Mv)*Math.random();ya(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ln(e,(r,i)=>{i>0&&Ws(this.statsToReport_,r)&&(n[r]=i,s=!0)}),s&&this.server_.reportStats(n),ya(this.reportStats_.bind(this),Math.floor(Math.random()*2*FU))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var is;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(is||(is={}));function Ib(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function bb(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Rb(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=is.ACK_USER_WRITE,this.source=Ib()}operationForChild(e){if(Ne(this.path)){if(this.affectedTree.value!=null)return re(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new lt(e));return new Gc(Qe(),n,this.revert)}}else return re(De(this.path)===e,"operationForChild called for unrelated child."),new Gc(at(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=is.OVERWRITE}operationForChild(e){return Ne(this.path)?new hi(this.source,Qe(),this.snap.getImmediateChild(e)):new hi(this.source,at(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=is.MERGE}operationForChild(e){if(Ne(this.path)){const n=this.children.subtree(new lt(e));return n.isEmpty()?null:n.value?new hi(this.source,Qe(),n.value):new Ka(this.source,Qe(),n)}else return re(De(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ka(this.source,at(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ne(e))return this.isFullyInitialized()&&!this.filtered_;const n=De(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function UU(t,e,n,s){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(OU(o.childName,o.snapshotNode))}),Go(t,r,"child_removed",e,s,n),Go(t,r,"child_added",e,s,n),Go(t,r,"child_moved",i,s,n),Go(t,r,"child_changed",e,s,n),Go(t,r,"value",e,s,n),r}function Go(t,e,n,s,r,i){const o=s.filter(a=>a.type===n);o.sort((a,l)=>BU(t,a,l)),o.forEach(a=>{const l=$U(t,a,i);r.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function $U(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function BU(t,e,n){if(e.childName==null||n.childName==null)throw mo("Should only compare child_ events.");const s=new Me(e.childName,e.snapshotNode),r=new Me(n.childName,n.snapshotNode);return t.index_.compare(s,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cb(t,e){return{eventCache:t,serverCache:e}}function va(t,e,n,s){return Cb(new Jp(e,n,s),t.serverCache)}function Sb(t,e,n,s){return Cb(t.eventCache,new Jp(e,n,s))}function Ef(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function di(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qh;const jU=()=>(Qh||(Qh=new pn(S4)),Qh);class it{constructor(e,n=jU()){this.value=e,this.children=n}static fromObject(e){let n=new it(null);return Ln(e,(s,r)=>{n=n.set(new lt(s),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Qe(),value:this.value};if(Ne(e))return null;{const s=De(e),r=this.children.get(s);if(r!==null){const i=r.findRootMostMatchingPathAndValue(at(e),n);return i!=null?{path:xt(new lt(s),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ne(e))return this;{const n=De(e),s=this.children.get(n);return s!==null?s.subtree(at(e)):new it(null)}}set(e,n){if(Ne(e))return new it(n,this.children);{const s=De(e),i=(this.children.get(s)||new it(null)).set(at(e),n),o=this.children.insert(s,i);return new it(this.value,o)}}remove(e){if(Ne(e))return this.children.isEmpty()?new it(null):new it(null,this.children);{const n=De(e),s=this.children.get(n);if(s){const r=s.remove(at(e));let i;return r.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,r),this.value===null&&i.isEmpty()?new it(null):new it(this.value,i)}else return this}}get(e){if(Ne(e))return this.value;{const n=De(e),s=this.children.get(n);return s?s.get(at(e)):null}}setTree(e,n){if(Ne(e))return n;{const s=De(e),i=(this.children.get(s)||new it(null)).setTree(at(e),n);let o;return i.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,i),new it(this.value,o)}}fold(e){return this.fold_(Qe(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((r,i)=>{s[r]=i.fold_(xt(e,r),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Qe(),n)}findOnPath_(e,n,s){const r=this.value?s(n,this.value):!1;if(r)return r;if(Ne(e))return null;{const i=De(e),o=this.children.get(i);return o?o.findOnPath_(at(e),xt(n,i),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Qe(),n)}foreachOnPath_(e,n,s){if(Ne(e))return this;{this.value&&s(n,this.value);const r=De(e),i=this.children.get(r);return i?i.foreachOnPath_(at(e),xt(n,r),s):new it(null)}}foreach(e){this.foreach_(Qe(),e)}foreach_(e,n){this.children.inorderTraversal((s,r)=>{r.foreach_(xt(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this.writeTree_=e}static empty(){return new Hn(new it(null))}}function Ea(t,e,n){if(Ne(e))return new Hn(new it(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const r=s.path;let i=s.value;const o=kn(r,e);return i=i.updateChild(o,n),new Hn(t.writeTree_.set(r,i))}else{const r=new it(n),i=t.writeTree_.setTree(e,r);return new Hn(i)}}}function xv(t,e,n){let s=t;return Ln(n,(r,i)=>{s=Ea(s,xt(e,r),i)}),s}function Fv(t,e){if(Ne(e))return Hn.empty();{const n=t.writeTree_.setTree(e,new it(null));return new Hn(n)}}function Tf(t,e){return gi(t,e)!=null}function gi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(kn(n.path,e)):null}function Vv(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Zt,(s,r)=>{e.push(new Me(s,r))}):t.writeTree_.children.inorderTraversal((s,r)=>{r.value!=null&&e.push(new Me(s,r.value))}),e}function mr(t,e){if(Ne(e))return t;{const n=gi(t,e);return n!=null?new Hn(new it(n)):new Hn(t.writeTree_.subtree(e))}}function wf(t){return t.writeTree_.isEmpty()}function uo(t,e){return Ab(Qe(),t.writeTree_,e)}function Ab(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(re(i.value!==null,"Priority writes must always be leaf nodes"),s=i.value):n=Ab(xt(t,r),i,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(xt(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pb(t,e){return Db(e,t)}function HU(t,e,n,s,r){re(s>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:r}),r&&(t.visibleWrites=Ea(t.visibleWrites,e,n)),t.lastWriteId=s}function WU(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function qU(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);re(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let r=s.visible,i=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&KU(a,s.path)?r=!1:Un(s.path,a.path)&&(i=!0)),o--}if(r){if(i)return GU(t),!0;if(s.snap)t.visibleWrites=Fv(t.visibleWrites,s.path);else{const a=s.children;Ln(a,l=>{t.visibleWrites=Fv(t.visibleWrites,xt(s.path,l))})}return!0}else return!1}function KU(t,e){if(t.snap)return Un(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Un(xt(t.path,n),e))return!0;return!1}function GU(t){t.visibleWrites=kb(t.allWrites,zU,Qe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function zU(t){return t.visible}function kb(t,e,n){let s=Hn.empty();for(let r=0;r<t.length;++r){const i=t[r];if(e(i)){const o=i.path;let a;if(i.snap)Un(n,o)?(a=kn(n,o),s=Ea(s,a,i.snap)):Un(o,n)&&(a=kn(o,n),s=Ea(s,Qe(),i.snap.getChild(a)));else if(i.children){if(Un(n,o))a=kn(n,o),s=xv(s,a,i.children);else if(Un(o,n))if(a=kn(o,n),Ne(a))s=xv(s,Qe(),i.children);else{const l=no(i.children,De(a));if(l){const u=l.getChild(at(a));s=Ea(s,Qe(),u)}}}else throw mo("WriteRecord should have .snap or .children")}}return s}function Nb(t,e,n,s,r){if(!s&&!r){const i=gi(t.visibleWrites,e);if(i!=null)return i;{const o=mr(t.visibleWrites,e);if(wf(o))return n;if(n==null&&!Tf(o,Qe()))return null;{const a=n||ze.EMPTY_NODE;return uo(o,a)}}}else{const i=mr(t.visibleWrites,e);if(!r&&wf(i))return n;if(!r&&n==null&&!Tf(i,Qe()))return null;{const o=function(u){return(u.visible||r)&&(!s||!~s.indexOf(u.writeId))&&(Un(u.path,e)||Un(e,u.path))},a=kb(t.allWrites,o,e),l=n||ze.EMPTY_NODE;return uo(a,l)}}}function YU(t,e,n){let s=ze.EMPTY_NODE;const r=gi(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Zt,(i,o)=>{s=s.updateImmediateChild(i,o)}),s;if(n){const i=mr(t.visibleWrites,e);return n.forEachChild(Zt,(o,a)=>{const l=uo(mr(i,new lt(o)),a);s=s.updateImmediateChild(o,l)}),Vv(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const i=mr(t.visibleWrites,e);return Vv(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function QU(t,e,n,s,r){re(s||r,"Either existingEventSnap or existingServerSnap must exist");const i=xt(e,n);if(Tf(t.visibleWrites,i))return null;{const o=mr(t.visibleWrites,i);return wf(o)?r.getChild(n):uo(o,r.getChild(n))}}function XU(t,e,n,s){const r=xt(e,n),i=gi(t.visibleWrites,r);if(i!=null)return i;if(s.isCompleteForChild(n)){const o=mr(t.visibleWrites,r);return uo(o,s.getNode().getImmediateChild(n))}else return null}function JU(t,e){return gi(t.visibleWrites,e)}function ZU(t,e,n,s,r,i,o){let a;const l=mr(t.visibleWrites,e),u=gi(l,Qe());if(u!=null)a=u;else if(n!=null)a=uo(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],d=o.getCompare(),p=i?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=p.getNext();for(;_&&h.length<r;)d(_,s)!==0&&h.push(_),_=p.getNext();return h}else return[]}function e3(){return{visibleWrites:Hn.empty(),allWrites:[],lastWriteId:-1}}function If(t,e,n,s){return Nb(t.writeTree,t.treePath,e,n,s)}function Ob(t,e){return YU(t.writeTree,t.treePath,e)}function Uv(t,e,n,s){return QU(t.writeTree,t.treePath,e,n,s)}function zc(t,e){return JU(t.writeTree,xt(t.treePath,e))}function t3(t,e,n,s,r,i){return ZU(t.writeTree,t.treePath,e,n,s,r,i)}function Zp(t,e,n){return XU(t.writeTree,t.treePath,e,n)}function Lb(t,e){return Db(xt(t.treePath,e),t.writeTree)}function Db(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n3{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;re(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),re(s!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(s);if(r){const i=r.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(s,Ov(s,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(s,NU(s,r.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(s,kU(s,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(s,Ov(s,e.snapshotNode,r.oldSnap));else throw mo("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s3{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Mb=new s3;class em{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Jp(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Zp(this.writes_,e,s)}}getChildAfterChild(e,n,s){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:di(this.viewCache_),i=t3(this.writes_,r,n,1,s,e);return i.length===0?null:i[0]}}function r3(t,e){re(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),re(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function i3(t,e,n,s,r){const i=new n3;let o,a;if(n.type===is.OVERWRITE){const u=n;u.source.fromUser?o=bf(t,e,u.path,u.snap,s,r,i):(re(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!Ne(u.path),o=Yc(t,e,u.path,u.snap,s,r,a,i))}else if(n.type===is.MERGE){const u=n;u.source.fromUser?o=a3(t,e,u.path,u.children,s,r,i):(re(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Rf(t,e,u.path,u.children,s,r,a,i))}else if(n.type===is.ACK_USER_WRITE){const u=n;u.revert?o=u3(t,e,u.path,s,r,i):o=l3(t,e,u.path,u.affectedTree,s,r,i)}else if(n.type===is.LISTEN_COMPLETE)o=c3(t,e,n.path,s,i);else throw mo("Unknown operation type: "+n.type);const l=i.getChanges();return o3(e,o,l),{viewCache:o,changes:l}}function o3(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const r=s.getNode().isLeafNode()||s.getNode().isEmpty(),i=Ef(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!s.getNode().equals(i)||!s.getNode().getPriority().equals(i.getPriority()))&&n.push(PU(Ef(e)))}}function xb(t,e,n,s,r,i){const o=e.eventCache;if(zc(s,n)!=null)return e;{let a,l;if(Ne(n))if(re(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=di(e),h=u instanceof ze?u:ze.EMPTY_NODE,d=Ob(s,h);a=t.filter.updateFullNode(e.eventCache.getNode(),d,i)}else{const u=If(s,di(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=De(n);if(u===".priority"){re(Tr(n)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const d=Uv(s,n,h,l);d!=null?a=t.filter.updatePriority(h,d):a=o.getNode()}else{const h=at(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const p=Uv(s,n,o.getNode(),l);p!=null?d=o.getNode().getImmediateChild(u).updateChild(h,p):d=o.getNode().getImmediateChild(u)}else d=Zp(s,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,h,r,i):a=o.getNode()}}return va(e,a,o.isFullyInitialized()||Ne(n),t.filter.filtersNodes())}}function Yc(t,e,n,s,r,i,o,a){const l=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(Ne(n))u=h.updateFullNode(l.getNode(),s,null);else if(h.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,s);u=h.updateFullNode(l.getNode(),_,null)}else{const _=De(n);if(!l.isCompleteForPath(n)&&Tr(n)>1)return e;const T=at(n),I=l.getNode().getImmediateChild(_).updateChild(T,s);_===".priority"?u=h.updatePriority(l.getNode(),I):u=h.updateChild(l.getNode(),_,I,T,Mb,null)}const d=Sb(e,u,l.isFullyInitialized()||Ne(n),h.filtersNodes()),p=new em(r,d,i);return xb(t,d,n,r,p,a)}function bf(t,e,n,s,r,i,o){const a=e.eventCache;let l,u;const h=new em(r,e,i);if(Ne(n))u=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=va(e,u,!0,t.filter.filtersNodes());else{const d=De(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),s),l=va(e,u,a.isFullyInitialized(),a.isFiltered());else{const p=at(n),_=a.getNode().getImmediateChild(d);let T;if(Ne(p))T=s;else{const A=h.getCompleteChild(d);A!=null?db(p)===".priority"&&A.getChild(pb(p)).isEmpty()?T=A:T=A.updateChild(p,s):T=ze.EMPTY_NODE}if(_.equals(T))l=e;else{const A=t.filter.updateChild(a.getNode(),d,T,p,h,o);l=va(e,A,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function $v(t,e){return t.eventCache.isCompleteForChild(e)}function a3(t,e,n,s,r,i,o){let a=e;return s.foreach((l,u)=>{const h=xt(n,l);$v(e,De(h))&&(a=bf(t,a,h,u,r,i,o))}),s.foreach((l,u)=>{const h=xt(n,l);$v(e,De(h))||(a=bf(t,a,h,u,r,i,o))}),a}function Bv(t,e,n){return n.foreach((s,r)=>{e=e.updateChild(s,r)}),e}function Rf(t,e,n,s,r,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;Ne(n)?u=s:u=new it(null).setTree(n,s);const h=e.serverCache.getNode();return u.children.inorderTraversal((d,p)=>{if(h.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),T=Bv(t,_,p);l=Yc(t,l,new lt(d),T,r,i,o,a)}}),u.children.inorderTraversal((d,p)=>{const _=!e.serverCache.isCompleteForChild(d)&&p.value===null;if(!h.hasChild(d)&&!_){const T=e.serverCache.getNode().getImmediateChild(d),A=Bv(t,T,p);l=Yc(t,l,new lt(d),A,r,i,o,a)}}),l}function l3(t,e,n,s,r,i,o){if(zc(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(Ne(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Yc(t,e,n,l.getNode().getChild(n),r,i,a,o);if(Ne(n)){let u=new it(null);return l.getNode().forEachChild(Yi,(h,d)=>{u=u.set(new lt(h),d)}),Rf(t,e,n,u,r,i,a,o)}else return e}else{let u=new it(null);return s.foreach((h,d)=>{const p=xt(n,h);l.isCompleteForPath(p)&&(u=u.set(h,l.getNode().getChild(p)))}),Rf(t,e,n,u,r,i,a,o)}}function c3(t,e,n,s,r){const i=e.serverCache,o=Sb(e,i.getNode(),i.isFullyInitialized()||Ne(n),i.isFiltered());return xb(t,o,n,s,Mb,r)}function u3(t,e,n,s,r,i){let o;if(zc(s,n)!=null)return e;{const a=new em(s,e,r),l=e.eventCache.getNode();let u;if(Ne(n)||De(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=If(s,di(e));else{const d=e.serverCache.getNode();re(d instanceof ze,"serverChildren would be complete if leaf node"),h=Ob(s,d)}h=h,u=t.filter.updateFullNode(l,h,i)}else{const h=De(n);let d=Zp(s,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=l.getImmediateChild(h)),d!=null?u=t.filter.updateChild(l,h,d,at(n),a,i):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(l,h,ze.EMPTY_NODE,at(n),a,i):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=If(s,di(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||zc(s,Qe())!=null,va(e,u,o,t.filter.filtersNodes())}}function h3(t,e){const n=di(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Ne(e)&&!n.getImmediateChild(De(e)).isEmpty())?n.getChild(e):null}function jv(t,e,n,s){e.type===is.MERGE&&e.source.queryId!==null&&(re(di(t.viewCache_),"We should always have a full cache before handling merges"),re(Ef(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,i=i3(t.processor_,r,e,n,s);return r3(t.processor_,i.viewCache),re(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,d3(t,i.changes,i.viewCache.eventCache.getNode())}function d3(t,e,n,s){const r=t.eventRegistrations_;return UU(t.eventGenerator_,e,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hv;function f3(t){re(!Hv,"__referenceConstructor has already been defined"),Hv=t}function tm(t,e,n,s){const r=e.source.queryId;if(r!==null){const i=t.views.get(r);return re(i!=null,"SyncTree gave us an op for an invalid query."),jv(i,e,n,s)}else{let i=[];for(const o of t.views.values())i=i.concat(jv(o,e,n,s));return i}}function nm(t,e){let n=null;for(const s of t.views.values())n=n||h3(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wv;function p3(t){re(!Wv,"__referenceConstructor has already been defined"),Wv=t}class qv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new it(null),this.pendingWriteTree_=e3(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function m3(t,e,n,s,r){return HU(t.pendingWriteTree_,e,n,s,r),r?qu(t,new hi(Ib(),e,n)):[]}function Fi(t,e,n=!1){const s=WU(t.pendingWriteTree_,e);if(qU(t.pendingWriteTree_,e)){let i=new it(null);return s.snap!=null?i=i.set(Qe(),!0):Ln(s.children,o=>{i=i.set(new lt(o),!0)}),qu(t,new Gc(s.path,i,n))}else return[]}function Wu(t,e,n){return qu(t,new hi(bb(),e,n))}function _3(t,e,n){const s=it.fromObject(n);return qu(t,new Ka(bb(),e,s))}function g3(t,e,n,s){const r=$b(t,s);if(r!=null){const i=Bb(r),o=i.path,a=i.queryId,l=kn(o,e),u=new hi(Rb(a),l,n);return jb(t,o,u)}else return[]}function y3(t,e,n,s){const r=$b(t,s);if(r){const i=Bb(r),o=i.path,a=i.queryId,l=kn(o,e),u=it.fromObject(n),h=new Ka(Rb(a),l,u);return jb(t,o,h)}else return[]}function Fb(t,e,n){const r=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=kn(o,e),u=nm(a,l);if(u)return u});return Nb(r,e,i,n,!0)}function qu(t,e){return Vb(e,t.syncPointTree_,null,Pb(t.pendingWriteTree_,Qe()))}function Vb(t,e,n,s){if(Ne(t.path))return Ub(t,e,n,s);{const r=e.get(Qe());n==null&&r!=null&&(n=nm(r,Qe()));let i=[];const o=De(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,h=Lb(s,o);i=i.concat(Vb(a,l,u,h))}return r&&(i=i.concat(tm(r,t,s,n))),i}}function Ub(t,e,n,s){const r=e.get(Qe());n==null&&r!=null&&(n=nm(r,Qe()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=Lb(s,o),h=t.operationForChild(o);h&&(i=i.concat(Ub(h,a,l,u)))}),r&&(i=i.concat(tm(r,t,s,n))),i}function $b(t,e){return t.tagToQueryMap.get(e)}function Bb(t){const e=t.indexOf("$");return re(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new lt(t.substr(0,e))}}function jb(t,e,n){const s=t.syncPointTree_.get(e);re(s,"Missing sync point for query tag that we're tracking");const r=Pb(t.pendingWriteTree_,e);return tm(s,n,r,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new sm(n)}node(){return this.node_}}class rm{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=xt(this.path_,e);return new rm(this.syncTree_,n)}node(){return Fb(this.syncTree_,this.path_)}}const v3=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Kv=function(t,e,n){if(!t||typeof t!="object")return t;if(re(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return E3(t[".sv"],e,n);if(typeof t[".sv"]=="object")return T3(t[".sv"],e);re(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},E3=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:re(!1,"Unexpected server value: "+t)}},T3=function(t,e,n){t.hasOwnProperty("increment")||re(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&re(!1,"Unexpected increment value: "+s);const r=e.node();if(re(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const o=r.getValue();return typeof o!="number"?s:o+s},w3=function(t,e,n,s){return im(e,new rm(n,t),s)},I3=function(t,e,n){return im(t,new sm(e),n)};function im(t,e,n){const s=t.getPriority().val(),r=Kv(s,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=Kv(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new Ot(a,Xt(r)):t}else{const o=t;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new Ot(r))),o.forEachChild(Zt,(a,l)=>{const u=im(l,e.getImmediateChild(a),n);u!==l&&(i=i.updateImmediateChild(a,u))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function am(t,e){let n=e instanceof lt?e:new lt(e),s=t,r=De(n);for(;r!==null;){const i=no(s.node.children,r)||{children:{},childCount:0};s=new om(r,s,i),n=at(n),r=De(n)}return s}function Io(t){return t.node.value}function Hb(t,e){t.node.value=e,Cf(t)}function Wb(t){return t.node.childCount>0}function b3(t){return Io(t)===void 0&&!Wb(t)}function Ku(t,e){Ln(t.node.children,(n,s)=>{e(new om(n,t,s))})}function qb(t,e,n,s){n&&!s&&e(t),Ku(t,r=>{qb(r,e,!0,s)}),n&&s&&e(t)}function R3(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function fl(t){return new lt(t.parent===null?t.name:fl(t.parent)+"/"+t.name)}function Cf(t){t.parent!==null&&C3(t.parent,t.name,t)}function C3(t,e,n){const s=b3(n),r=Ws(t.node.children,e);s&&r?(delete t.node.children[e],t.node.childCount--,Cf(t)):!s&&!r&&(t.node.children[e]=n.node,t.node.childCount++,Cf(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S3=/[\[\].#$\/\u0000-\u001F\u007F]/,A3=/[\[\].#$\u0000-\u001F\u007F]/,Xh=10*1024*1024,Kb=function(t){return typeof t=="string"&&t.length!==0&&!S3.test(t)},P3=function(t){return typeof t=="string"&&t.length!==0&&!A3.test(t)},k3=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),P3(t)},Gb=function(t,e,n){const s=n instanceof lt?new cU(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+jr(s));if(typeof e=="function")throw new Error(t+"contains a function "+jr(s)+" with contents = "+e.toString());if(K0(e))throw new Error(t+"contains "+e.toString()+" "+jr(s));if(typeof e=="string"&&e.length>Xh/3&&ku(e)>Xh)throw new Error(t+"contains a string greater than "+Xh+" utf8 bytes "+jr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(Ln(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!Kb(o)))throw new Error(t+" contains an invalid key ("+o+") "+jr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);uU(s,o),Gb(t,a,s),hU(s)}),r&&i)throw new Error(t+' contains ".value" child '+jr(s)+" in addition to actual children.")}},N3=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Kb(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!k3(n))throw new Error(DL(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O3{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function L3(t,e){let n=null;for(let s=0;s<e.length;s++){const r=e[s],i=r.getPath();n!==null&&!mb(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(r)}n&&t.eventLists_.push(n)}function yi(t,e,n){L3(t,n),D3(t,s=>Un(s,e)||Un(e,s))}function D3(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const r=t.eventLists_[s];if(r){const i=r.path;e(i)?(M3(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function M3(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();ga&&Qt("event: "+n.toString()),hl(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x3="repo_interrupt",F3=25;class V3{constructor(e,n,s,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new O3,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Kc(),this.transactionQueueTree_=new om,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function U3(t,e,n){if(t.stats_=Gp(t.repoInfo_),t.forceRestClient_||L4())t.server_=new qc(t.repoInfo_,(s,r,i,o)=>{Gv(t,s,r,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>zv(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ut(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Us(t.repoInfo_,e,(s,r,i,o)=>{Gv(t,s,r,i,o)},s=>{zv(t,s)},s=>{B3(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=U4(t.repoInfo_,()=>new VU(t.stats_,t.server_)),t.infoData_=new LU,t.infoSyncTree_=new qv({startListening:(s,r,i,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Wu(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),lm(t,"connected",!1),t.serverSyncTree_=new qv({startListening:(s,r,i,o)=>(t.server_.listen(s,i,r,(a,l)=>{const u=o(a,l);yi(t.eventQueue_,s._path,u)}),[]),stopListening:(s,r)=>{t.server_.unlisten(s,r)}})}function $3(t){const n=t.infoData_.getNode(new lt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function zb(t){return v3({timestamp:$3(t)})}function Gv(t,e,n,s,r){t.dataUpdateCount++;const i=new lt(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(s){const l=Sc(n,u=>Xt(u));o=y3(t.serverSyncTree_,i,l,r)}else{const l=Xt(n);o=g3(t.serverSyncTree_,i,l,r)}else if(s){const l=Sc(n,u=>Xt(u));o=_3(t.serverSyncTree_,i,l)}else{const l=Xt(n);o=Wu(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=um(t,i)),yi(t.eventQueue_,a,o)}function zv(t,e){lm(t,"connected",e),e===!1&&H3(t)}function B3(t,e){Ln(e,(n,s)=>{lm(t,n,s)})}function lm(t,e,n){const s=new lt("/.info/"+e),r=Xt(n);t.infoData_.updateSnapshot(s,r);const i=Wu(t.infoSyncTree_,s,r);yi(t.eventQueue_,s,i)}function j3(t){return t.nextWriteId_++}function H3(t){Yb(t,"onDisconnectEvents");const e=zb(t),n=Kc();vf(t.onDisconnect_,Qe(),(r,i)=>{const o=w3(r,i,t.serverSyncTree_,e);wb(n,r,o)});let s=[];vf(n,Qe(),(r,i)=>{s=s.concat(Wu(t.serverSyncTree_,r,i));const o=G3(t,r);um(t,o)}),t.onDisconnect_=Kc(),yi(t.eventQueue_,Qe(),s)}function W3(t){t.persistentConnection_&&t.persistentConnection_.interrupt(x3)}function Yb(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Qt(n,...e)}function Qb(t,e,n){return Fb(t.serverSyncTree_,e,n)||ze.EMPTY_NODE}function cm(t,e=t.transactionQueueTree_){if(e||Gu(t,e),Io(e)){const n=Jb(t,e);re(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&q3(t,fl(e),n)}else Wb(e)&&Ku(e,n=>{cm(t,n)})}function q3(t,e,n){const s=n.map(u=>u.currentWriteId),r=Qb(t,e,s);let i=r;const o=r.hash();for(let u=0;u<n.length;u++){const h=n[u];re(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=kn(e,h.path);i=i.updateChild(d,h.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Yb(t,"transaction put response",{path:l.toString(),status:u});let h=[];if(u==="ok"){const d=[];for(let p=0;p<n.length;p++)n[p].status=2,h=h.concat(Fi(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&d.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();Gu(t,am(t.transactionQueueTree_,e)),cm(t,t.transactionQueueTree_),yi(t.eventQueue_,e,h);for(let p=0;p<d.length;p++)hl(d[p])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Cn("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}um(t,e)}},o)}function um(t,e){const n=Xb(t,e),s=fl(n),r=Jb(t,n);return K3(t,r,s),s}function K3(t,e,n){if(e.length===0)return;const s=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=kn(n,l.path);let h=!1,d;if(re(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,d=l.abortReason,r=r.concat(Fi(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=F3)h=!0,d="maxretry",r=r.concat(Fi(t.serverSyncTree_,l.currentWriteId,!0));else{const p=Qb(t,l.path,o);l.currentInputSnapshot=p;const _=e[a].update(p.val());if(_!==void 0){Gb("transaction failed: Data returned ",_,l.path);let T=Xt(_);typeof _=="object"&&_!=null&&Ws(_,".priority")||(T=T.updatePriority(p.getPriority()));const I=l.currentWriteId,b=zb(t),L=I3(T,p,b);l.currentOutputSnapshotRaw=T,l.currentOutputSnapshotResolved=L,l.currentWriteId=j3(t),o.splice(o.indexOf(I),1),r=r.concat(m3(t.serverSyncTree_,l.path,L,l.currentWriteId,l.applyLocally)),r=r.concat(Fi(t.serverSyncTree_,I,!0))}else h=!0,d="nodata",r=r.concat(Fi(t.serverSyncTree_,l.currentWriteId,!0))}yi(t.eventQueue_,n,r),r=[],h&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}Gu(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)hl(s[a]);cm(t,t.transactionQueueTree_)}function Xb(t,e){let n,s=t.transactionQueueTree_;for(n=De(e);n!==null&&Io(s)===void 0;)s=am(s,n),e=at(e),n=De(e);return s}function Jb(t,e){const n=[];return Zb(t,e,n),n.sort((s,r)=>s.order-r.order),n}function Zb(t,e,n){const s=Io(e);if(s)for(let r=0;r<s.length;r++)n.push(s[r]);Ku(e,r=>{Zb(t,r,n)})}function Gu(t,e){const n=Io(e);if(n){let s=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[s]=n[r],s++);n.length=s,Hb(e,n.length>0?n:void 0)}Ku(e,s=>{Gu(t,s)})}function G3(t,e){const n=fl(Xb(t,e)),s=am(t.transactionQueueTree_,e);return R3(s,r=>{Jh(t,r)}),Jh(t,s),qb(s,r=>{Jh(t,r)}),n}function Jh(t,e){const n=Io(e);if(n){const s=[];let r=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(re(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(re(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(Fi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?Hb(e,void 0):n.length=i+1,yi(t.eventQueue_,fl(e),r);for(let o=0;o<s.length;o++)hl(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z3(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let r=n[s];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function Y3(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Cn(`Invalid query segment '${n}' in query '${t}'`)}return e}const Yv=function(t,e){const n=Q3(t),s=n.namespace;n.domain==="firebase.com"&&ci(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&ci("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||R4();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new x4(n.host,n.secure,s,r,e,"",s!==n.subdomain),path:new lt(n.pathString)}},Q3=function(t){let e="",n="",s="",r="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(h,d)),h<d&&(r=z3(t.substring(h,d)));const p=Y3(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const T=e.indexOf(".");s=e.substring(0,T).toLowerCase(),n=e.substring(T+1),i=s}"ns"in p&&(i=p.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:r,namespace:i}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e,n,s,r){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=r}get key(){return Ne(this._path)?null:db(this._path)}get ref(){return new bo(this._repo,this._path)}get _queryIdentifier(){const e=Dv(this._queryParams),n=qp(e);return n==="{}"?"default":n}get _queryObject(){return Dv(this._queryParams)}isEqual(e){if(e=Qn(e),!(e instanceof hm))return!1;const n=this._repo===e._repo,s=mb(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&s&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+lU(this._path)}}class bo extends hm{constructor(e,n){super(e,n,new Xp,!1)}get parent(){const e=pb(this._path);return e===null?null:new bo(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}f3(bo);p3(bo);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X3="FIREBASE_DATABASE_EMULATOR_HOST",Sf={};let J3=!1;function Z3(t,e,n,s,r){let i=s||t.options.databaseURL;i===void 0&&(t.options.projectId||ci("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Qt("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Yv(i,r),a=o.repoInfo,l;typeof process<"u"&&mv&&(l=mv[X3]),l?(i=`http://${l}?ns=${a.namespace}`,o=Yv(i,r),a=o.repoInfo):o.repoInfo.secure;const u=new M4(t.name,t.options,e);N3("Invalid Firebase Database URL",o),Ne(o.path)||ci("Database URL must point to the root of a Firebase Database (not including a child path).");const h=t$(a,t,u,new D4(t.name,n));return new n$(h,t)}function e$(t,e){const n=Sf[e];(!n||n[t.key]!==t)&&ci(`Database ${e}(${t.repoInfo_}) has already been deleted.`),W3(t),delete n[t.key]}function t$(t,e,n,s){let r=Sf[e.name];r||(r={},Sf[e.name]=r);let i=r[t.toURLString()];return i&&ci("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new V3(t,J3,n,s),r[t.toURLString()]=i,i}class n${constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(U3(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new bo(this._repo,Qe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(e$(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ci("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s$(t){v4(Ar),hs(new Kn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return Z3(s,r,i,n)},"PUBLIC").setMultipleInstances(!0)),Rn(_v,gv,t),Rn(_v,gv,"esm2017")}Us.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Us.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};s$();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR="firebasestorage.googleapis.com",r$="storageBucket",i$=2*60*1e3,o$=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys extends gs{constructor(e,n,s=0){super(Zh(e),`Firebase Storage: ${n} (${Zh(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ys.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Zh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ps;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ps||(ps={}));function Zh(t){return"storage/"+t}function a$(){const t="An unknown error occurred, please check the error payload for server response.";return new ys(ps.UNKNOWN,t)}function l$(){return new ys(ps.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function c$(){return new ys(ps.CANCELED,"User canceled the upload/download.")}function u$(t){return new ys(ps.INVALID_URL,"Invalid URL '"+t+"'.")}function h$(t){return new ys(ps.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Qv(t){return new ys(ps.INVALID_ARGUMENT,t)}function tR(){return new ys(ps.APP_DELETED,"The Firebase app was deleted.")}function d$(t){return new ys(ps.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=$n.makeFromUrl(e,n)}catch{return new $n(e,"")}if(s.path==="")return s;throw h$(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),l={bucket:1,path:3};function u(O){O.path_=decodeURIComponent(O.path)}const h="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",_=new RegExp(`^https?://${d}/${h}/b/${r}/o${p}`,"i"),T={bucket:1,path:3},A=n===eR?"(?:storage.googleapis.com|storage.cloud.google.com)":n,I="([^?#]*)",b=new RegExp(`^https?://${A}/${r}/${I}`,"i"),M=[{regex:a,indices:l,postModify:i},{regex:_,indices:T,postModify:u},{regex:b,indices:{bucket:1,path:2},postModify:u}];for(let O=0;O<M.length;O++){const V=M[O],$=V.regex.exec(e);if($){const y=$[V.indices.bucket];let g=$[V.indices.path];g||(g=""),s=new $n(y,g),V.postModify(s);break}}if(s==null)throw u$(e);return s}}class f${constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p$(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function l(){return a===2}let u=!1;function h(...I){u||(u=!0,e.apply(null,I))}function d(I){r=setTimeout(()=>{r=null,t(_,l())},I)}function p(){i&&clearTimeout(i)}function _(I,...b){if(u){p();return}if(I){p(),h.call(null,I,...b);return}if(l()||o){p(),h.call(null,I,...b);return}s<64&&(s*=2);let M;a===1?(a=2,M=0):M=(s+Math.random())*1e3,d(M)}let T=!1;function A(I){T||(T=!0,p(),!u&&(r!==null?(I||(a=2),clearTimeout(r),d(0)):I||(a=1)))}return d(0),i=setTimeout(()=>{o=!0,A(!0)},n),A}function m$(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _$(t){return t!==void 0}function Xv(t,e,n,s){if(s<e)throw Qv(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Qv(`Invalid value for '${t}'. Expected ${n} or less.`)}function g$(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}var Qc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Qc||(Qc={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y$(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v${constructor(e,n,s,r,i,o,a,l,u,h,d,p=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=d,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,T)=>{this.resolve_=_,this.reject_=T,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new Kl(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Qc.NO_ERROR,l=i.getStatus();if(!a||y$(l,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===Qc.ABORT;s(!1,new Kl(!1,null,h));return}const u=this.successCodes_.indexOf(l)!==-1;s(!0,new Kl(u,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());_$(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=a$();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(r.canceled){const l=this.appDelete_?tR():c$();o(l)}else{const l=l$();o(l)}};this.canceled_?n(!1,new Kl(!1,null,!0)):this.backoffId_=p$(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&m$(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Kl{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function E$(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function T$(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function w$(t,e){e&&(t["X-Firebase-GMPID"]=e)}function I$(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function b$(t,e,n,s,r,i,o=!0){const a=g$(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return w$(u,e),E$(u,n),T$(u,i),I$(u,s),new v$(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R$(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function C$(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,n){this._service=e,n instanceof $n?this._location=n:this._location=$n.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Xc(e,n)}get root(){const e=new $n(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return C$(this._location.path)}get storage(){return this._service}get parent(){const e=R$(this._location.path);if(e===null)return null;const n=new $n(this._location.bucket,e);return new Xc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw d$(e)}}function Jv(t,e){const n=e==null?void 0:e[r$];return n==null?null:$n.makeFromBucketSpec(n,t)}class S${constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=eR,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=i$,this._maxUploadRetryTime=o$,this._requests=new Set,r!=null?this._bucket=$n.makeFromBucketSpec(r,this._host):this._bucket=Jv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=$n.makeFromBucketSpec(this._url,e):this._bucket=Jv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Xv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Xv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Xc(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new f$(tR());{const o=b$(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const Zv="@firebase/storage",eE="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A$="storage";function P$(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new S$(n,s,r,e,Ar)}function k$(){hs(new Kn(A$,P$,"PUBLIC").setMultipleInstances(!0)),Rn(Zv,eE,""),Rn(Zv,eE,"esm2017")}k$();function N$(t){return L$({initialUser:t,dependencies:{popupRedirectResolver:xI,persistence:[LI,SI,yp]}})}const O$=Symbol("VueFireAuth");function L$({dependencies:t,initialUser:e}){return(n,s)=>{const[r,i]=D$(n,s,e,t);y4(r,i)}}function D$(t,e,n,s,r=gI(t,s)){const i=m4(t,e).run(()=>Ie(n));return _4.set(t,i),e.provide(O$,r),[i,r]}function M$(t,{firebaseApp:e,modules:n=[]}){t.provide(B0,e);for(const s of n)s(e,t)}const nR=()=>{const t=FI(),e=Su(),n=SV(V0),s=Ie(),{t:r}=bu.global,{addToInfoList:i}=mi(),o=Ie(),a=Ie(!1),l=()=>{const T=e.currentRoute.value.query.redirect||"/";e.push(T)},u=async()=>{const T=await g4();if(T)try{const A=CV(n,"UserInfo",T.uid),I=await VV(A);I.exists()?s.value=I.data():i(xn.ERROR,r("info.userInfoError"))}catch{i(xn.ERROR,r("info.userLoginError"),"STATUS")}};return{signUp:(T,A)=>{FM(t,T,A).then(I=>{I.user,l()}).catch(I=>{o.value=I,i(xn.ERROR,I.message,"STATUS")})},signIn:(T,A)=>{VM(t,T,A).then(async I=>{var L;await u();const b=s.value.name?s.value.name:(L=I.user)==null?void 0:L.email;i(xn.INFO,`Hi! ( ^_^ ) ${b}`,"STATUS"),l()}).catch(I=>{o.value=I,i(xn.ERROR,I.message,"STATUS")})},checkUser:async()=>{bI(t,async T=>{T&&await u(),a.value=!!T})},userSignOut:async()=>{await $M(t),l(),i(xn.INFO,r("info.logout"),"STATUS")},getUserInfo:u,userInfo:s,errorMsg:o,isLogin:a}},x$={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"};function F$(t,e){return ue(),he("svg",x$,e[0]||(e[0]=[H("path",{d:"M0 24C0 10.7 10.7 0 24 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24m128 440a48 48 0 1 1 96 0 48 48 0 1 1-96 0m336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96"},null,-1)]))}const tE={render:F$},V$={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"};function U$(t,e){return ue(),he("svg",V$,e[0]||(e[0]=[H("path",{d:"M224 256a128 128 0 1 0 0-256 128 128 0 1 0 0 256m-45.7 48C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3z"},null,-1)]))}const ed={render:U$},$$={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"};function B$(t,e){return ue(),he("svg",$$,e[0]||(e[0]=[H("path",{d:"M64 0C46.3 0 32 14.3 32 32v64c0 17.7 14.3 32 32 32h80v32H87c-31.6 0-58.5 23.1-63.3 54.4L1.1 364.1c-.7 4.7-1.1 9.5-1.1 14.3V448c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-69.6c0-4.8-.4-9.6-1.1-14.4l-22.7-149.6c-4.7-31.3-31.6-54.4-63.2-54.4H208v-32h80c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32zm32 48h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16s7.2-16 16-16M64 432c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16m48-168a24 24 0 1 1 0-48 24 24 0 1 1 0 48m120-24a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-72 104a24 24 0 1 1 0-48 24 24 0 1 1 0 48m168-104a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-72 104a24 24 0 1 1 0-48 24 24 0 1 1 0 48m168-104a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-72 104a24 24 0 1 1 0-48 24 24 0 1 1 0 48"},null,-1)]))}const j$={render:B$},H$={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512"};function W$(t,e){return ue(),he("svg",H$,e[0]||(e[0]=[H("path",{d:"M0 128c0-35.3 28.7-64 64-64h512c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm320 0v256h256V128zm-141.7 47.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1.1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1h73.6l8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4zM160 233.2l19 42.8h-38zM448 164c11 0 20 9 20 20v4h60c11 0 20 9 20 20s-9 20-20 20h-2l-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4.9.6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9L467 333.8c-4.5-2.7-8.8-5.5-13.1-8.5-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8L410 286.1c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6.5.5c12.4-13.1 22.5-28.3 29.8-45l-35.2.1h-72c-11 0-20-9-20-20s9-20 20-20h52v-4c0-11 9-20 20-20"},null,-1)]))}const nE={render:W$},q$={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"};function K$(t,e){return ue(),he("svg",q$,e[0]||(e[0]=[H("path",{d:"M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32m0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32m448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32"},null,-1)]))}const G$={render:K$},z$={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"};function Y$(t,e){return ue(),he("svg",z$,e[0]||(e[0]=[H("path",{d:"M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"},null,-1)]))}const sE={render:Y$},Q$={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"};function X$(t,e){return ue(),he("svg",Q$,e[0]||(e[0]=[H("path",{d:"m217.9 105.9 122.8 122.8c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9-18.7 0-33.9-15.2-33.9-33.9V320H32c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h128v-62.1c0-18.7 15.2-33.9 33.9-33.9 9 0 17.6 3.6 24 9.9M352 416h64c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32h-64c-17.7 0-32-14.3-32-32s14.3-32 32-32h64c53 0 96 43 96 96v256c0 53-43 96-96 96h-64c-17.7 0-32-14.3-32-32s14.3-32 32-32"},null,-1)]))}const J$={render:X$},Z$={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"};function e6(t,e){return ue(),he("svg",Z$,e[0]||(e[0]=[H("path",{d:"m377.9 105.9 122.8 122.8c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9-18.7 0-33.9-15.2-33.9-33.9V320H192c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h128v-62.1c0-18.7 15.2-33.9 33.9-33.9 9 0 17.6 3.6 24 9.9M160 96H96c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-53 0-96-43-96-96V128c0-53 43-96 96-96h64c17.7 0 32 14.3 32 32s-14.3 32-32 32"},null,-1)]))}const rE={render:e6};function t6(t,e){let n=0;return function(...s){const r=Date.now();r-n>=e&&(t(...s),n=r)}}function Af(t,e=3e3){let n;return function(...s){clearTimeout(n),n=setTimeout(()=>{t.apply(void 0,s)},e)}}function n6(){const t=Ie(window.innerWidth<768),n=Af(()=>{t.value=window.innerWidth<768},1e3);return _s(async()=>{window.addEventListener("resize",n)}),pi(()=>{window.removeEventListener("resize",n)}),{isMobile:t}}const s6={class:"panel"},r6=vn({__name:"adminPanel",setup(t){mi();const e=ji(),{fetchedData:n}=e,s=async()=>await n("/apiddds");return(r,i)=>(ue(),he("div",s6,[H("button",{onClick:i[0]||(i[0]=o=>s())},"create an error")]))}}),i6=br(r6,[["__scopeId","data-v-de5af662"]]);function iE(){const t=ho({top:0,right:0});return{position:t,updatePosition:(n,s,r)=>{const i=n.getBoundingClientRect();t.top=i.top+s,t.right=i.right-r}}}const o6={class:"nav"},a6={class:"error"},l6={key:0,class:"container"},c6={class:"nav__row"},u6={class:"nav__row__item"},h6={class:"nav__row__item"},d6={class:"icon"},f6={key:0,class:"item"},p6={class:"icon"},m6={class:"icon iconLan"},_6={key:1,class:"item"},g6={class:"icon"},y6={key:2,class:"item"},v6={class:"icon"},E6={key:3,class:"item"},T6={class:"nav__row"},w6={class:"nav__row__item"},I6={class:"dropdown"},b6=["onClick"],R6={class:"dropContent__text"},C6=["onClick","value"],S6={key:1,class:"container mobileOnly"},A6={class:"menu"},P6={class:"menu__item__icon"},k6={class:"menu__item__span"},N6={class:"menu__item__icon"},O6={class:"d-flex"},L6={class:"menu__item__icon"},D6={class:"menu__item__span"},M6={class:"menu__item__arrow"},x6=["onClick"],F6={class:"menu__item__span"},V6={class:"menu__item__arrow"},U6=["onClick"],$6={class:"menu__item__icon"},B6={class:"menu__item__span"},j6={class:"nav__row"},H6={class:"nav__row__item"},W6={class:"icon p-r-1"},q6={class:"nav__row__item"},K6={class:"item"},G6={class:"icon"},z6={class:"icon"},Y6=vn({__name:"Nav",props:{isLogin:{type:Boolean,default:!1}},setup(t){const e=Su(),{locale:n,availableLocales:s}=Iu(),r=nR(),{userSignOut:i}=r,o=Md(),a=Mw(),l=mi(),{cart:u}=ca(a),{categoryNameList:h,categoryList:d}=ca(o),{getCategoryNameList:p,getCategoryList:_}=Md(),{infoList:T}=ca(l),A=Ie("");os(A,Fe=>{e.push({path:`/${Fe}`})});const{isMobile:I}=n6(),b=Ie(!1),L=Ie(!1),M=Ie(!1),O=Ie(!1),V=Ie(!1),$=Ie(!1),y=Ie(null),g=Ie(null),v=iE(),P=iE(),D=()=>{y.value&&v.updatePosition(y.value,50,300)},k=()=>{g.value&&P.updatePosition(g.value,40,40)},S=()=>{L.value&&D(),$.value&&k()},we=()=>{O.value=!1,b.value=!1},Ze=()=>{i(),we()},ke=()=>{L.value=!0,b.value=!0,S()},fe=()=>{$.value=!0,b.value=!0,k()},Ee=()=>{M.value=!0,b.value=!0},st=()=>{O.value=!0,b.value=!0},kt=()=>{we(),L.value=!1,M.value=!1,V.value=!1,$.value=!1},St=()=>{V.value=!V.value},We=Fe=>{M.value=!1,we(),e.push(`/category/${Fe}`)},qe=Fe=>{n.value=Fe,$.value=!1,we()};return _s(async()=>{await p(),await _(),window.addEventListener("resize",Af(S,1e3)),navigator.language==="zh-TW"?n.value="ch":n.value="en"}),pi(()=>{window.removeEventListener("resize",Af(S,1e3))}),(Fe,ct)=>{const It=fP,G=ad("RouterLink"),se=ad("router-link");return ue(),he("div",o6,[ce(i6),H("div",a6,[(ue(!0),he(ut,null,ns(de(T),X=>(ue(),dd(It,{key:X.id,infoObj:X},null,8,["infoObj"]))),128))]),hn(H("div",{class:"overlay",onClick:kt},null,512),[[dn,b.value]]),de(I)?Mn("",!0):(ue(),he("div",l6,[H("div",c6,[H("div",u6,[ce(G,{to:"/"},{default:wn(()=>ct[3]||(ct[3]=[H("span",{class:"title-l"}," Home ",-1)])),_:1})]),H("div",h6,[H("div",{class:"item",onClick:ke,ref_key:"shoppingcartIcon",ref:y},[H("div",d6,[ce(de(tE),{class:"icon__svg"})])],512),Fe.isLogin?(ue(),he("div",f6,[ce(G,{to:"/purchase"},{default:wn(()=>[H("div",p6,[ce(de(j$),{class:"icon__svg"})])]),_:1})])):Mn("",!0),H("div",{class:"item",ref_key:"languageNavIcon",ref:g,onClick:fe},[H("div",m6,[ce(de(nE),{class:"icon__svg"})])],512),Fe.isLogin?Mn("",!0):(ue(),he("div",_6,[ce(G,{to:"/login"},{default:wn(()=>[H("div",g6,[ce(de(J$),{class:"icon__svg"})])]),_:1})])),Fe.isLogin?(ue(),he("div",y6,[ce(G,{to:"/member"},{default:wn(()=>[H("div",v6,[ce(de(ed),{class:"icon__svg"})])]),_:1})])):Mn("",!0),Fe.isLogin?(ue(),he("div",E6,[H("div",{class:"icon",onClick:ct[0]||(ct[0]=(...X)=>de(i)&&de(i)(...X))},[ce(de(rE),{class:"icon__svg"})])])):Mn("",!0)])]),H("div",T6,[H("div",w6,[H("span",{onClick:Ee,class:"navTitle"},mt(Fe.$t("nav.category")),1)]),hn(H("div",I6,[(ue(!0),he(ut,null,ns(de(d),X=>(ue(),he("div",{onClick:oe=>We(`${X.slug}`),class:"dropContent"},[H("span",R6,mt(X.name),1)],8,b6))),256))],512),[[dn,M.value]])]),hn(H("div",{class:"language",style:Qi(`top: ${de(P).position.top}px; left: ${de(P).position.right}px;`)},[(ue(!0),he(ut,null,ns(de(s),X=>(ue(),he("div",{class:"language__option",onClick:oe=>qe(X),key:`locale-${X}`,value:X},[H("span",null,mt(X),1)],8,C6))),128))],4),[[dn,$.value]]),hn(ce(lL,{onClickPurchase:ct[1]||(ct[1]=X=>L.value=!L.value),class:"nav__cart","cart-list":de(u),style:Qi(`top: ${de(v).position.top}px; left: ${de(v).position.right}px; max-width: 370px`)},null,8,["cart-list","style"]),[[dn,L.value]])])),de(I)?(ue(),he("div",S6,[hn(H("div",A6,[Fe.isLogin?Mn("",!0):(ue(),dd(se,{key:0,class:"menu__item",to:"/login",onClick:we},{default:wn(()=>[H("div",P6,[ce(de(ed),{class:"menu__item__icon__svg"})]),H("span",k6,mt(Fe.$t("nav.login")),1)]),_:1})),Fe.isLogin?(ue(),he("div",{key:1,class:"menu__item",onClick:we},[H("div",N6,[ce(de(ed),{class:"menu__item__icon__svg"})]),ce(G,{class:"menu__item__span",to:"/member"},{default:wn(()=>[Wf(mt(Fe.$t("nav.member")),1)]),_:1})])):Mn("",!0),H("div",{class:"menu__item space-between",onClick:ct[2]||(ct[2]=X=>$.value=!$.value)},[H("div",O6,[H("div",L6,[ce(de(nE),{class:"menu__item__icon__svg"})]),H("span",D6,mt(Fe.$t("nav.lang")),1)]),H("div",M6,[ce(de(sE),{class:Ps(["menu__item__arrow__svg",$.value?"rotate":""])},null,8,["class"])])]),H("div",{class:Ps(["menu__language",$.value?"":"collapse"])},[(ue(!0),he(ut,null,ns(de(s),X=>(ue(),he("div",{class:"menu__box__item",onClick:oe=>qe(X)},mt(X),9,x6))),256))],2),H("div",{class:"menu__item space-between",onClick:St},[H("span",F6,mt(Fe.$t("nav.category")),1),H("div",V6,[ce(de(sE),{class:Ps(["menu__item__arrow__svg",V.value?"rotate":""])},null,8,["class"])])]),H("div",{class:Ps(["menu__box",V.value?"":"collapse"])},[(ue(!0),he(ut,null,ns(de(d),X=>(ue(),he("div",{class:"menu__box__item",onClick:oe=>We(`${X.slug}`)},mt(X.name),9,U6))),256))],2),Fe.isLogin?(ue(),he("div",{key:2,class:"menu__item logout",onClick:Ze},[H("div",$6,[ce(de(rE),{class:"menu__item__icon__svg"})]),H("div",B6,mt(Fe.$t("nav.logout")),1)])):Mn("",!0)],512),[[dn,O.value]]),H("div",j6,[H("div",H6,[H("div",{class:"item",onClick:st},[H("div",W6,[ce(de(G$),{class:"icon__svg"})])]),ce(G,{to:"/"},{default:wn(()=>ct[4]||(ct[4]=[H("span",{class:"title-l"}," Home ",-1)])),_:1})]),H("div",q6,[H("div",K6,[H("div",G6,[ce(G,{to:"/purchase"},{default:wn(()=>[H("div",z6,[ce(de(tE),{class:"icon__svg"})])]),_:1})])])])])])):Mn("",!0)])}}}),Q6=br(Y6,[["__scopeId","data-v-484fe414"]]),X6={class:"app"},J6={class:"content"},Z6=vn({__name:"App",setup(t){const e=nR(),{checkUser:n,isLogin:s}=e;return _s(async()=>{n()}),(r,i)=>{const o=Q6,a=cP;return ue(),he("div",X6,[ce(o,{isLogin:de(s)},null,8,["isLogin"]),H("div",J6,[ce(de(Lw))]),ce(a)])}}}),e9="modulepreload",t9=function(t){return"/vue3-ecom/"+t},oE={},Zs=function(e,n,s){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(n.map(l=>{if(l=t9(l),l in oE)return;oE[l]=!0;const u=l.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":e9,u||(d.as="script"),d.crossOrigin="",d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),u)return new Promise((p,_)=>{d.addEventListener("load",p),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})},n9={class:"ratingStars"},s9=vn({__name:"RatingStars",props:{rating:{default:0}},setup(t){DS(s=>({"8b4aba94":n.value}));const e=t,n=ft(()=>e.rating/5*100+"%");return(s,r)=>(ue(),he("div",n9))}}),aE=br(s9,[["__scopeId","data-v-276a66c3"]]),r9={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"};function i9(t,e){return ue(),he("svg",r9,e[0]||(e[0]=[H("path",{d:"M0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm323.8 106.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6-26.5-33.1c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4S78.8 416 88 416h336c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96"},null,-1)]))}const o9={render:i9},a9={class:"prodCard__content"},l9={class:"ellipsis"},c9={class:"prodCard__content__img"},u9=["src"],h9={key:1,class:"prodCard--null"},d9={class:"prodCard__content"},f9={class:"prodCard__content__img"},p9=vn({__name:"ProductCard",props:{product:{default:()=>({})}},setup(t){const e=t,n=Su();Dw();const s=()=>{e.product&&e.product.stock&&n.push(`/category/${e.product.category}/${e.product.id}`)};return(r,i)=>r.product?(ue(),he("div",{key:0,class:Ps(["prodCard",r.product.stock?"":"prodCard--soldout"]),onClick:s},[H("div",a9,[H("p",l9,mt(r.product.brand),1),H("h3",{class:"prodCard__content__title ellipsis",onClick:s},mt(r.product.title),1),ce(aE,{rating:r.product.rating},null,8,["rating"]),H("p",null,"$ "+mt(r.product.price),1),H("div",c9,[H("img",{src:r.product.thumbnail,alt:""},null,8,u9)])])],2)):(ue(),he("div",h9,[H("div",d9,[i[0]||(i[0]=H("p",{class:"brand w-70pc"},null,-1)),i[1]||(i[1]=H("h3",{class:"brand w-100pc"},null,-1)),ce(aE,{rating:0}),i[2]||(i[2]=H("p",{class:"brand w-50pc"},null,-1)),H("div",f9,[ce(de(o9))])])]))}}),lE=br(p9,[["__scopeId","data-v-f71a5bb5"]]),m9=t=>({id:t.id,brand:t.brand??"",title:t.title??"",price:t.price??0,rating:t.rating??0,images:t.images??[],description:t.description??"",category:t.category??"",stock:t.stock??0,sku:t.sku??"",reviews:(t.reviews??[]).map(n=>({rating:(n==null?void 0:n.rating)??0,comment:(n==null?void 0:n.comment)??"",date:(n==null?void 0:n.date)??"",reviewerName:(n==null?void 0:n.reviewerName)??"",reviewerEmail:(n==null?void 0:n.reviewerEmail)??""})),thumbnail:t.thumbnail??""}),sR=t=>({title:t.title??"",category:t.category??"",price:t.price??0,rating:t.rating??0,stock:t.stock??0,thumbnail:t.thumbnail??"",brand:t.brand??"",id:t.id??0}),_9=t=>({category:t[0].category,productCardList:t}),g9=t=>({...t,products:t.products.map(n=>sR(n))}),y9=t=>[...new Set(t.products.map(e=>e.brand??""))],pB=(t,e)=>({id:t.id,brand:t.brand??"",title:t.title??"",price:t.price??0,stock:t.stock??0,sku:t.sku??"",thumbnail:t.thumbnail??"",quantity:e}),v9=fu("product",()=>{const t=ji(),{isReady:e}=t,n=ji(),{isReady:s}=n,r=ji(),{isReady:i}=r,o=Ie(),a=Ie(),l=Ie(),u=Ie(),h=Ie([]),d=ft(()=>o.value?y9(o.value):[]),p=()=>JSON.parse(JSON.stringify(a.value)),_=async(O,V=0,$=0)=>{e.value=!1;const y=await t.fetchedData(`/products/category/${O}`);o.value=y,t.isError.value||(a.value=g9(y),l.value=p()),e.value=!0},T=O=>{try{if(e.value=!1,l.value){let V=p();return O===bd.ASC?(V.products=l.value.products.sort(($,y)=>$.price-y.price),V):O===bd.DESC?(V.products=l.value.products.sort(($,y)=>y.price-$.price),V):l.value.products}}catch(V){t.isError.value=!0,console.error(V)}finally{e.value=!0}},A=O=>{try{e.value=!1;const V=p();O.length>0&&a.value&&l.value?l.value={...l.value,products:V.products.filter($=>O.includes($.brand))}:l.value=p()}catch(V){t.isError.value=!0,console.error(V)}finally{e.value=!0}},I=Ie([]);return{getProductCardPageObj:_,getProductDetail:async O=>{s.value=!1;const V=await n.fetchedData(`/products/${O}`);u.value=m9(V),s.value=!0},filterProduct:A,sortProduct:T,clearSelectedBrands:()=>{I.value.length&&(I.value=[],l.value=p())},loadMoreProducts:async O=>{i.value=!1;const V=await r.fetchedData(`/products/category/${O}?limit=4`),$=h.value.find(y=>y.category===O);if(!t.isError.value&&!$){const y=V.products.map(g=>sR(g));h.value.push(_9(y))}i.value=!0},productObj:t,productDetail:u,selectedBrands:I,homePageProductList:h,brandList:d,productCardList:l,isReadyLoad:i,isReadyProductCard:e,isReadyProductDetail:s}}),E9="/vue3-ecom/assets/banner1-BSodzNRc.jpeg",T9="/vue3-ecom/assets/banner2-uyftkMIZ.jpeg",w9="/vue3-ecom/assets/banner3-CX-u16Gq.jpeg",I9="/vue3-ecom/assets/banner4-MthBSnfg.jpeg",b9="/vue3-ecom/assets/banner3-CX-u16Gq.jpeg",R9={class:"home"},C9={class:"home__header"},S9={class:"home__header__content"},A9={class:"carousel"},P9=["src"],k9={class:"home__content container"},N9={key:0,class:"home__content__block"},O9={class:"productGroup"},L9={class:"productList row"},D9={class:"productList__card"},M9={key:0},x9={key:0},F9={key:1},V9={key:1,class:"home__content__block"},U9={class:"productList row"},$9={class:"productList__card"},B9=vn({__name:"HomeView",setup(t){const e=v9(),{loadMoreProducts:n}=e,{isReadyLoad:s,productCardList:r,homePageProductList:i}=ca(e),o=Md(),{getCategoryNameList:a}=o,{categoryNameList:l}=ca(o),u=Ie([E9,T9,w9,I9,b9]),h=Ie(0),d=Ie(null),p=Ie(0);let _=null;const T=ft(()=>({transform:`translateX(-${h.value*100}%)`,transition:"transform 1s ease"})),A=()=>{_=setInterval(()=>{h.value=(h.value+1)%u.value.length},5e3)},I=()=>{_&&clearInterval(_)},b=()=>{d.value&&(p.value=d.value.clientWidth)};let L=1,M=t6(async()=>{L>=l.value.length||(await n(l.value[L]),L++)},1e3);const O=async()=>{const V=window.scrollY,$=document.documentElement.scrollHeight,y=window.innerHeight;V+y>=$&&M()};return ZE(async()=>{A()}),_s(async()=>{await a(),await n("beauty"),b(),window.addEventListener("resize",b),au(()=>{window.addEventListener("scroll",O)})}),pi(()=>{I(),window.removeEventListener("resize",b),window.removeEventListener("scroll",O)}),(V,$)=>{const y=ad("router-link");return ue(),he("div",R9,[H("div",C9,[H("div",S9,[H("div",A9,[H("div",{class:"carousel__pic",style:Qi(T.value),ref_key:"wrapper",ref:d},[(ue(!0),he(ut,null,ns(u.value,(g,v)=>(ue(),he("div",{class:"img",key:v},[H("img",{src:g,alt:""},null,8,P9)]))),128))],4)])])]),H("div",k9,[de(i)?(ue(),he("div",N9,[(ue(!0),he(ut,null,ns(de(i),g=>(ue(),he("div",O9,[ce(y,{class:"title",to:`/category/${g.category}`},{default:wn(()=>[Wf(mt(g.category.replace(/^./,g.category[0].toUpperCase()))+" > ",1)]),_:2},1032,["to"]),H("div",L9,[(ue(!0),he(ut,null,ns(g.productCardList,v=>(ue(),he("div",D9,[ce(lE,{product:v},null,8,["product"])]))),256))])]))),256)),de(l)?(ue(),he("div",M9,[de(i).length<de(l).length?(ue(),he("div",x9,[H("div",{class:"btn-yellow",onClick:$[0]||($[0]=(...g)=>de(M)&&de(M)(...g))}," Load More... ")])):(ue(),he("div",F9," No more products... "))])):Mn("",!0)])):(ue(),he("div",V9,[$[1]||($[1]=H("div",{class:"title"},"...",-1)),H("div",U9,[(ue(),he(ut,null,ns(4,g=>H("div",$9,[ce(lE,{product:null})])),64))])]))])])}}}),j9=br(B9,[["__scopeId","data-v-211255a1"]]),rR=BO({history:gO("/vue3-ecom/"),routes:[{path:"/",name:"home",component:j9},{path:"/about",name:"about",component:()=>Zs(()=>import("./AboutView-Ds06wjtU.js"),__vite__mapDeps([0,1]))},{path:"/category/:category",name:"category",component:()=>Zs(()=>import("./index-B7I_S3Xd.js"),__vite__mapDeps([2,3,4,5]))},{path:"/category/:category/:id",name:":id",component:()=>Zs(()=>import("./_id_-VqAR_b6h.js"),__vite__mapDeps([6,3,4,7]))},{path:"/purchase",name:"purchase",component:()=>Zs(()=>import("./Purchase-DH2YXzQ2.js"),__vite__mapDeps([8,9])),meta:{requiresAuth:!0}},{path:"/member",name:"member",component:()=>Zs(()=>import("./Member-Rb-tknLk.js"),__vite__mapDeps([10,11]))},{path:"/login",name:"login",component:()=>Zs(()=>import("./Login-CbXYpgjC.js"),[])},{path:"/registration",name:"registration",component:()=>Zs(()=>import("./Registration-KBC_CDq3.js"),[])},{path:"/:pathMatch(.*)*",name:"not-found",component:()=>Zs(()=>import("./NotFound-DKzxeL2J.js"),__vite__mapDeps([12,13]))}]});rR.beforeEach((t,e,n)=>{const s=FI();t.matched.some(i=>i.meta.requiresAuth)?bI(s,i=>{i?n():n({path:"/login",query:{redirect:t.fullPath}})}):n()});const ms=XS(Z6);ms.use(tA());ms.use(rR);ms.use(ec,vt);ms.provide("axios",ms.config.globalProperties.axios);ms.directive("focus",{mounted(t){t.focus()}});ms.use(M$,{firebaseApp:V0,modules:[N$()]});ms.use(bu);const H9=mi(),{addToInfoList:W9}=H9;ms.config.errorHandler=(t,e,n)=>{console.error("Error occurred:",t),W9(xn.ERROR,`${t}`,"system error")};ms.mount("#app");export{Ch as A,q9 as B,tc as C,Mw as D,mi as E,ut as F,Mn as G,aE as H,pB as I,ad as J,wn as K,nR as L,n6 as M,tE as N,bd as O,lE as P,qO as Q,Qi as R,gh as T,br as _,H as a,ft as b,he as c,vn as d,Iu as e,_s as f,pi as g,ce as h,de as i,ns as j,Wf as k,hn as l,DS as m,Ps as n,ue as o,Dw as p,Su as q,Ie as r,ca as s,mt as t,v9 as u,dn as v,os as w,K9 as x,ht as y,sE as z};
