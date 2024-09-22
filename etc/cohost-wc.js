/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),i=new WeakMap;let r=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=i.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&i.set(s,t))}return t}toString(){return this.cssText}};const o=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new r(i,t,s)},a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,s))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:n,defineProperty:h,getOwnPropertyDescriptor:l,getOwnPropertyNames:d,getOwnPropertySymbols:c,getPrototypeOf:p}=Object,u=globalThis,g=u.trustedTypes,m=g?g.emptyScript:"",f=u.reactiveElementPolyfillSupport,v=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},$=(t,e)=>!n(t,e),b={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;class A extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&h(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){const o=i?.call(this);r.call(this,e),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...d(t),...c(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const s=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((s,i)=>{if(e)s.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of i){const i=document.createElement("style"),r=t.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=e.cssText,s.appendChild(i)}})(s,this.constructor.elementStyles),s}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const r=(void 0!==s.converter?.toAttribute?s.converter:y).toAttribute(e,s.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=i,this[i]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??$)(this[t],e))return;this.P(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],s)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[v("elementProperties")]=new Map,A[v("finalized")]=new Map,f?.({ReactiveElement:A}),(u.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,M=w.trustedTypes,_=M?M.createPolicy("lit-html",{createHTML:t=>t}):void 0,x="$lit$",N=`lit$${Math.random().toFixed(9).slice(2)}$`,I="?"+N,k=`<${I}>`,S=document,E=()=>S.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,z=Array.isArray,j="[ \t\n\f\r]",C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,O=/>/g,U=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),P=/'/g,L=/"/g,H=/^(?:script|style|textarea|title)$/i,R=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),Z=Symbol.for("lit-noChange"),Q=Symbol.for("lit-nothing"),B=new WeakMap,W=S.createTreeWalker(S,129);function Y(t,e){if(!z(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==_?_.createHTML(e):e}class G{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0;const a=t.length-1,n=this.parts,[h,l]=((t,e)=>{const s=t.length-1,i=[];let r,o=2===e?"<svg>":3===e?"<math>":"",a=C;for(let e=0;e<s;e++){const s=t[e];let n,h,l=-1,d=0;for(;d<s.length&&(a.lastIndex=d,h=a.exec(s),null!==h);)d=a.lastIndex,a===C?"!--"===h[1]?a=D:void 0!==h[1]?a=O:void 0!==h[2]?(H.test(h[2])&&(r=RegExp("</"+h[2],"g")),a=U):void 0!==h[3]&&(a=U):a===U?">"===h[0]?(a=r??C,l=-1):void 0===h[1]?l=-2:(l=a.lastIndex-h[2].length,n=h[1],a=void 0===h[3]?U:'"'===h[3]?L:P):a===L||a===P?a=U:a===D||a===O?a=C:(a=U,r=void 0);const c=a===U&&t[e+1].startsWith("/>")?" ":"";o+=a===C?s+k:l>=0?(i.push(n),s.slice(0,l)+x+s.slice(l)+N+c):s+N+(-2===l?e:c)}return[Y(t,o+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]})(t,e);if(this.el=G.createElement(h,s),W.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=W.nextNode())&&n.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(x)){const e=l[o++],s=i.getAttribute(t).split(N),a=/([.?@])?(.*)/.exec(e);n.push({type:1,index:r,name:a[2],strings:s,ctor:"."===a[1]?F:"?"===a[1]?K:"@"===a[1]?tt:X}),i.removeAttribute(t)}else t.startsWith(N)&&(n.push({type:6,index:r}),i.removeAttribute(t));if(H.test(i.tagName)){const t=i.textContent.split(N),e=t.length-1;if(e>0){i.textContent=M?M.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],E()),W.nextNode(),n.push({type:2,index:++r});i.append(t[e],E())}}}else if(8===i.nodeType)if(i.data===I)n.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(N,t+1));)n.push({type:7,index:r}),t+=N.length-1}r++}}static createElement(t,e){const s=S.createElement("template");return s.innerHTML=t,s}}function V(t,e,s=t,i){if(e===Z)return e;let r=void 0!==i?s.o?.[i]:s.l;const o=T(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,s,i)),void 0!==i?(s.o??=[])[i]=r:s.l=r),void 0!==r&&(e=V(t,r._$AS(t,e.values),r,i)),e}class q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??S).importNode(e,!0);W.currentNode=i;let r=W.nextNode(),o=0,a=0,n=s[0];for(;void 0!==n;){if(o===n.index){let e;2===n.type?e=new J(r,r.nextSibling,this,t):1===n.type?e=new n.ctor(r,n.name,n.strings,this,t):6===n.type&&(e=new et(r,this,t)),this._$AV.push(e),n=s[++a]}o!==n?.index&&(r=W.nextNode(),o++)}return W.currentNode=S,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class J{get _$AU(){return this._$AM?._$AU??this.v}constructor(t,e,s,i){this.type=2,this._$AH=Q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this.v=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=V(this,t,e),T(t)?t===Q||null==t||""===t?(this._$AH!==Q&&this._$AR(),this._$AH=Q):t!==this._$AH&&t!==Z&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>z(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Q&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(S.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=G.createElement(Y(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new q(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=B.get(t.strings);return void 0===e&&B.set(t.strings,e=new G(t)),e}k(t){z(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new J(this.O(E()),this.O(E()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this.v=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=Q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=Q}_$AI(t,e=this,s,i){const r=this.strings;let o=!1;if(void 0===r)t=V(this,t,e,0),o=!T(t)||t!==this._$AH&&t!==Z,o&&(this._$AH=t);else{const i=t;let a,n;for(t=r[0],a=0;a<r.length-1;a++)n=V(this,i[s+a],e,a),n===Z&&(n=this._$AH[a]),o||=!T(n)||n!==this._$AH[a],n===Q?t=Q:t!==Q&&(t+=(n??"")+r[a+1]),this._$AH[a]=n}o&&!i&&this.j(t)}j(t){t===Q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class F extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Q?void 0:t}}class K extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Q)}}class tt extends X{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=V(this,t,e,0)??Q)===Z)return;const s=this._$AH,i=t===Q&&s!==Q||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==Q&&(s===Q||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class et{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t)}}const st=w.litHtmlPolyfillSupport;st?.(G,J),(w.litHtmlVersions??=[]).push("3.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class it extends A{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=((t,e,s)=>{const i=s?.renderBefore??e;let r=i._$litPart$;if(void 0===r){const t=s?.renderBefore??null;i._$litPart$=r=new J(e.insertBefore(E(),t),t,void 0,s??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return Z}}it._$litElement$=!0,it.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:it});const rt=globalThis.litElementPolyfillSupport;rt?.({LitElement:it}),(globalThis.litElementVersions??=[]).push("4.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ot=t=>(e,s)=>{void 0!==s?s.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,at={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:$},nt=(t=at,e,s)=>{const{kind:i,metadata:r}=s;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),o.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const r=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,r,t)},init(e){return void 0!==e&&this.P(i,void 0,t),e}}}if("setter"===i){const{name:i}=s;return function(s){const r=this[i];e.call(this,s),this.requestUpdate(i,r,t)}}throw Error("Unsupported decorator location: "+i)};function ht(t){return(e,s)=>"object"==typeof s?nt(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,i?{...t,wrapped:!0}:t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function lt(t,e,s){return t?e(t):s?.(t)}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=t=>t??Q;var ct=function(t,e,s,i){var r,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,s,i);else for(var n=t.length-1;n>=0;n--)(r=t[n])&&(a=(o<3?r(a):o>3?r(e,s,a):r(e,s))||a);return o>3&&a&&Object.defineProperty(e,s,a),a};function pt(t){const e=1e3,s={year:31556952e3,month:2629746e3,day:864e5,hour:36e5,minute:6e4,second:e},i=new Intl.RelativeTimeFormat("en",{style:"short"}),r=t.getTime()-(new Date).getTime();for(const t in s){const e=t;if(s[e]<=Math.abs(r))return i.format(Math.trunc(r/s[e]),e)}return i.format(r/1e3,"second")}const ut=o`:host{color-scheme:light dark;font-family:"Atkinson Hyperlegible",ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"}*{box-sizing:border-box;border-width:0;border-style:solid;border-color:#ded9d3}a{color:inherit;text-decoration:inherit}hr{height:0;color:inherit;border-top-width:1px}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}.post-anchor{position:relative;top:-5rem}.co-thread-header-1{min-height:1.5rem}.co-avatar-container{width:2rem;height:2rem;aspect-ratio:1/1;display:inline-block;position:relative}.mask{mask-size:contain;mask-repeat:no-repeat;mask-position:center}.mask-squircle{mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDBDMjAgMCAwIDIwIDAgMTAwczIwIDEwMCAxMDAgMTAwIDEwMC0yMCAxMDAtMTAwUzE4MCAwIDEwMCAweiIvPjwvc3ZnPg==)}.mask-roundrect{border-radius:12.5%}.mask-circle{border-radius:9999px}.mask-egg{mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjM2NiIgdmlld0JveD0iMCAwIDUwMCAzNjYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTI5OS4zNzUgMzQ3LjEyQzI1NC4xNTYgMzYwLjYzOCAyMTEuMzQ2IDM2Ni43NjQgMTcwLjk0NSAzNjUuNDk3QzEzMC41NDQgMzY0LjIzIDk1Ljg4MTcgMzU0LjY4OSA2Ni45NTY2IDMzNi44NzNDMzguMDMxMyAzMTkuMDU5IDE4LjA5NDYgMjkxLjgyNyA3LjE0NTc2IDI1NS4xNzhDLTMuODY1NjggMjE4LjMyIC0yLjE1MDg4IDE4NC41NTggMTIuMjkwNCAxNTMuODkzQzI2LjczMTkgMTIzLjIyNyA1MC41MjQxIDk2LjM4MTQgODMuNjY3MSA3My4zNTU4QzExNi44MSA1MC4zMzAyIDE1NS45OTIgMzIuMDU4IDIwMS4yMTEgMTguNTM5NEMyNDYuMjIxIDUuMDgzMjUgMjg4Ljg1OCAtMS4wNDc5OCAzMjkuMTIzIDAuMTQ1OTVDMzY5LjM4NyAxLjMzOTY0IDQwNC4wMTkgMTAuNzc2MSA0MzMuMDE3IDI4LjQ1NUM0NjIuMDE2IDQ2LjEzNDIgNDgxLjk4OSA3My4yOTc5IDQ5Mi45MzggMTA5Ljk0N0M1MDMuODg3IDE0Ni41OTUgNTAyLjEwNCAxODAuMzIgNDg3LjU4OSAyMTEuMTIyQzQ3My4wNzUgMjQxLjkyNCA0NDkuMzI5IDI2OC45MjYgNDE2LjM1NCAyOTIuMTNDMzgzLjM3OCAzMTUuMzM0IDM0NC4zODUgMzMzLjY2NCAyOTkuMzc1IDM0Ny4xMloiIGZpbGw9IiNGRkY5RjIiLz48L3N2Zz4=)}.mask-capsule-big{mask-image:url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjIiPjxwYXRoIGQ9Ik00MTQgMTU4QzQxNCA3MC43OTcgMzQzLjIwMyAwIDI1NiAwUzk4IDcwLjc5NyA5OCAxNTh2MTk2YzAgODcuMjAzIDcwLjc5NyAxNTggMTU4IDE1OHMxNTgtNzAuNzk3IDE1OC0xNThWMTU4WiIgc3R5bGU9ImZpbGw6I2ZmZiIvPjwvc3ZnPg==)}.mask-capsule-small{mask-image:url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjIiPjxwYXRoIGQ9Ik0zNTQgOThjMC01NC4wODgtNDMuOTEyLTk4LTk4LTk4cy05OCA0My45MTItOTggOTh2MzE2YzAgNTQuMDg4IDQzLjkxMiA5OCA5OCA5OHM5OC00My45MTIgOTgtOThWOThaIiBzdHlsZT0iZmlsbDojZmZmIi8+PC9zdmc+)}.co-avatar{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.co-project-display-name{max-width:100%;flex-shrink:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:700;color:light-dark(rgb(25 25 25),rgb(255 249 242))}.co-project-display-name:hover{text-decoration:underline}.co-project-handle{color:light-dark(rgb(74 72 71),rgb(222 217 211))}.co-project-handle:hover{text-decoration:underline}.co-post-header time,.co-thread-header time{display:block;flex:none;font-size:.75rem;line-height:1rem;font-variant-numeric:tabular-nums;color:rgb(130 127 124)}.co-post-header time a:hover,.co-thread-header time a:hover{text-decoration:underline}.co-hairline{border-color:light-dark(rgb(191 186 181),rgb(74 72 71))}.post-headline-container{display:flex;flex-direction:row;width:100%;padding:.75rem}.post-headline-a{overflow-wrap:break-word;align-self:center;flex-grow:1}.post-headline-a:hover{text-decoration:underline}.prose{color:light-dark(#191919,#fff9f2);--tw-prose-body:light-dark(#374151, #fff9f2);--tw-prose-headings:light-dark(#111827, #fff9f2);--tw-prose-lead:light-dark(#4b5563, #fff9f2);--tw-prose-links:light-dark(#111827, #fff9f2);--tw-prose-bold:light-dark(#111827, #fff9f2);--tw-prose-counters:light-dark(#6b7280, #fff9f2);--tw-prose-bullets:light-dark(#d1d5db, #fff9f2);--tw-prose-hr:light-dark(#e5e7eb, #bfbab5);--tw-prose-quotes:light-dark(#111827, #fff9f2);--tw-prose-quote-borders:light-dark(#e5e7eb, #bfbab5);--tw-prose-captions:light-dark(#6b7280, #fff9f2);--tw-prose-code:light-dark(#111827, #fff9f2);--tw-prose-pre-code:light-dark(#e5e7eb, #fff9f2);--tw-prose-pre-bg:light-dark(#1f2937, #191919);--tw-prose-th-borders:light-dark(#d1d5db, #bfbab5);--tw-prose-td-borders:light-dark(#e5e7eb, #bfbab5);font-size:1em;line-height:1.75}.prose :where(h3):not(:where([class~=not-prose],[class~=not-prose]*)){color:var(--tw-prose-headings);font-weight:600;font-size:1.25em;margin-top:1.6em;margin-bottom:.6em;line-height:1.6}.prose :where(.prose>:last-child):not(:where([class~=not-prose],[class~=not-prose]*)){margin-bottom:0}.prose :where(.prose>:first-child):not(:where([class~=not-prose],[class~=not-prose]*)){margin-top:0}.post-body{overflow:clip;contain:paint;overflow:hidden;isolation:isolate;position:relative}.co-tags-container{width:100%;max-width:100%;padding:.75rem}.co-tags{position:relative;width:100%;overflow-y:hidden;overflow-wrap:break-word;line-height:1;color:light-dark(rgb(104 102 100),rgb(191 186 181))}.co-tags a{display:inline-block;margin-right:.5rem;font-size:.875rem;line-height:1.25rem}.co-tags a:hover{text-decoration:underline}`;let gt=class extends it{constructor(){super(...arguments),this.sharedItems=!1,this.comments=0,this.sharedComments=0}render(){let t,e;if(this.publishedAt){let s=new Date(this.publishedAt);t=s.toLocaleString(),e=pt(s)}return R`<article data-theme="both" class="co-themed-box co-post-box" data-url-popovers=""><header class="co-thread-header"><div class="co-thread-header-1">${lt(this.avatarSrc,(()=>R`<div class="co-avatar-container mask"><img src="${dt(this.avatarSrc)}" class="co-avatar mask mask-${this.avatarShape}" alt="${dt(this.displayName)}"></div>`))} ${lt(this.displayName,(()=>R`<a rel="author" href="https://cohost.org/${dt(this.handle)}" class="co-project-display-name" title="${dt(this.displayName)}" data-url-popovers="" style="user-select:none" data-longpress-event="true">${this.displayName}</a>`))} ${lt(this.handle,(()=>R`<a href="https://cohost.org/${dt(this.handle)}" class="co-project-handle" data-url-popovers="" style="user-select:none" data-longpress-event="true">@${this.handle}</a>`))} ${lt(this.publishedAt,(()=>R`<time datetime="${dt(this.publishedAt)}" title="${dt(t)}"><a href="${dt(this.originalUrl)}" class="hover:underline">${e}</a></time>`))} ${lt(this.sharedAvatarSrc||this.sharedAvatarShape||this.sharedDisplayName||this.sharedHandle,(()=>R`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="co-project-display-name header-share-icon"><path fill-rule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clip-rule="evenodd"></path></svg>`))} ${lt(this.sharedAvatarSrc,(()=>R`<div class="co-avatar-container mask"><img src="${dt(this.sharedAvatarSrc)}" class="co-avatar mask mask-${this.sharedAvatarShape}" alt="${dt(this.sharedDisplayName)}"></div>`))} ${lt(this.sharedDisplayName,(()=>R`<a href="https://cohost.org/${this.sharedHandle}" class="co-project-display-name" title="${dt(this.sharedDisplayName)}" data-url-popovers="" style="user-select:none" data-longpress-event="true">${this.sharedDisplayName}</a>`))} ${lt(this.sharedHandle,(()=>R`<a href="https://cohost.org/${dt(this.sharedHandle)}" class="co-project-handle" data-url-popovers="" style="user-select:none" data-longpress-event="true">@${this.sharedHandle}</a>`))}</div></header><hr class="co-hairline"><div>${lt(this.sharedItems,(()=>R`<slot></slot>`),(()=>R`<div class="post-body-container">${lt(this.standaloneHeadline,(()=>R`<div class="post-headline-container flex w-full flex-row p-3"><a href="${dt(this.originalUrl)}" class="post-headline-a prose"><h3>${this.standaloneHeadline}</h3></a></div>`))}<div class="post-body" data-post-body="true" data-testid="post-body"><slot></slot></div>${lt(this.tags&&this.tags.length,(()=>R`<div class="co-tags-container"><div class="co-tags relative w-full overflow-y-hidden break-words leading-none"><div>${(this.tags||"").split(",").map((t=>R`<a href="https://cohost.org/tagged/${t}">#${t}</a>`))}</div></div></div>`))}</div>`))}</div><hr class="co-hairline"><footer class="co-thread-footer"><div class="co-thread-footer-1"><div class="comments"><a href="${dt(this.originalUrl)}" class="text-sm hover:underline">${this.comments} comment${1==this.comments?"":"s"}${lt(this.sharedComments,(()=>R`+ ${this.sharedComments} on shared posts`))}</a></div><div class="controls"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="co-action-button"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"></path></svg><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="co-action-button"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path></svg></div></div></footer></article>`}};gt.styles=o`${ut}.co-post-box{width:100%;overflow-x:auto;border-radius:.5rem;background-color:light-dark(white,#000);box-shadow:0 4px 5px #00000024,0 1px 10px #0000001f,0 2px 4px #0003}@media (min-width:1024px){.co-post-box{  }}@media (prefers-color-scheme:dark){.co-post-box{border-width:1px;border-color:rgb(74 72 71)}}.co-thread-header{display:flex;width:100%;flex-direction:row;align-items:center;justify-content:space-between;gap:.5rem;border-top-left-radius:.5rem;border-top-right-radius:.5rem;padding:.75rem;background-color:light-dark(rgb(255 249 242),rgb(25 25 25))}.co-thread-header-1{line-height:1;gap:.5rem;align-items:center;flex-wrap:wrap;flex-direction:row;flex:1 1 0%;min-width:0;display:flex}.header-share-icon{width:1.25rem;height:1.25rem}.co-thread-footer{width:100%;max-width:100%;border-bottom-right-radius:.5rem;border-bottom-left-radius:.5rem;padding:.75rem;background-color:light-dark(rgb(255 249 242),rgb(25 25 25));color:light-dark(rgb(130 127 124),rgb(191 186 181))}.co-thread-footer-1{display:flex;justify-content:space-between;vertical-align:middle}.comments{width:max-content;flex:none}.comments a{font-size:.875rem;line-height:1.25rem}.comments a:hover{text-decoration:underline}.controls{display:flex;align-items:center;justify-content:flex-end;gap:.75rem}.co-action-button{display:block;color:light-dark(rgb(25 25 25),rgb(255 249 242));width:1.5rem;height:1.5rem;cursor:not-allowed}`,ct([ht()],gt.prototype,"avatarSrc",void 0),ct([ht()],gt.prototype,"avatarShape",void 0),ct([ht()],gt.prototype,"displayName",void 0),ct([ht()],gt.prototype,"handle",void 0),ct([ht()],gt.prototype,"publishedAt",void 0),ct([ht()],gt.prototype,"originalUrl",void 0),ct([ht({type:Boolean})],gt.prototype,"sharedItems",void 0),ct([ht()],gt.prototype,"standaloneHeadline",void 0),ct([ht()],gt.prototype,"sharedAvatarSrc",void 0),ct([ht()],gt.prototype,"sharedAvatarShape",void 0),ct([ht()],gt.prototype,"sharedDisplayName",void 0),ct([ht()],gt.prototype,"sharedHandle",void 0),ct([ht()],gt.prototype,"tags",void 0),ct([ht({type:Number})],gt.prototype,"comments",void 0),ct([ht({type:Number})],gt.prototype,"sharedComments",void 0),gt=ct([ot("cohost-post")],gt);let mt=class extends it{constructor(){super(...arguments),this.avatarShape="squircle",this.comments=0}render(){let t,e;if(this.publishedAt){let s=new Date(this.publishedAt);t=s.toLocaleString(),e=pt(s)}return R`<div class="co-post-header">${lt(this.avatarSrc,(()=>R`<div class="co-avatar-container mask"><img src="${dt(this.avatarSrc)}" class="co-avatar mask mask-${this.avatarShape}" alt="${dt(this.displayName)}"></div>`))} ${lt(this.displayName,(()=>R`<a rel="author" href="https://cohost.org/${dt(this.handle)}" class="co-project-display-name" title="${dt(this.displayName)}" data-url-popovers="" style="user-select:none" data-longpress-event="true">${this.displayName}</a>`))}${lt(this.handle,(()=>R`<a rel="author" href="https://cohost.org/${dt(this.handle)}" class="co-project-handle" data-url-popovers="" style="user-select:none" data-longpress-event="true">@${this.handle}</a>`))}${lt(this.publishedAt,(()=>R`<time datetime="${dt(this.publishedAt)}" title="${dt(t)}"><a href="${dt(this.originalUrl)}">${e}</a></time>`))}</div><div class="post-body-container">${lt(this.headline,(()=>R`<div class="post-headline-container flex w-full flex-row p-3"><a href="${dt(this.originalUrl)}" class="post-headline-a prose"><h3>${this.headline}</h3></a></div>`))}<div class="post-body" data-post-body="true" data-testid="post-body"><div class="post-body-section"><slot></slot></div></div></div><hr class="co-hairline">`}};mt.styles=o`${ut}.co-post-header{display:flex;flex-direction:flex-row;flex-wrap:wrap;align-items:center;gap:.5rem;padding-left:.75rem;padding-right:.75rem;padding-top:.5rem;padding-bottom:.5rem;min-height:3rem;background-color:light-dark(rgb(255 249 242),rgb(25 25 25))}:host(:last-of-type)>hr.co-hairline{display:none}`,ct([ht()],mt.prototype,"avatarSrc",void 0),ct([ht()],mt.prototype,"avatarShape",void 0),ct([ht()],mt.prototype,"displayName",void 0),ct([ht()],mt.prototype,"handle",void 0),ct([ht()],mt.prototype,"publishedAt",void 0),ct([ht()],mt.prototype,"originalUrl",void 0),ct([ht()],mt.prototype,"headline",void 0),ct([ht()],mt.prototype,"tags",void 0),ct([ht({type:Number})],mt.prototype,"comments",void 0),mt=ct([ot("cohost-shared-item")],mt);export{gt as CohostPost,mt as CohostSharedItem};
