(window.webpackJsonp=window.webpackJsonp||[]).push([["device_detection"],{"+bMk":function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var o=n("lwsE"),r=n.n(o),i=n("W8MJ"),l=n.n(i),c=n("PJYZ"),u=n.n(c),s=n("7W2i"),_=n.n(s),a=n("a1gu"),f=n.n(a),p=n("Nsbk"),d=n.n(p),h=n("2mXy");function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=d()(e);if(t){var r=d()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return f()(this,n)}}var y=function(e){_()(n,e);var t=v(n);function n(e){return r()(this,n),t.call(this,e)}return l()(n,[{key:"render",value:function(){return Object(h.e)("div",{className:"loadingBar"},this.props.show?Object(h.e)("div",{className:"loader"}):"")}}]),n}(h.a);function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=d()(e);if(t){var r=d()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return f()(this,n)}}var b=function(e){_()(n,e);var t=m(n);function n(e){var o;return r()(this,n),(o=t.call(this,e)).state={show:e.show},o.onClickOutside=o.onClickOutside.bind(u()(o)),o.onClickHide=o.onClickHide.bind(u()(o)),document.addEventListener("keyup",(function(e){"Escape"===e.code&&o.closeModalBox()})),o}return l()(n,[{key:"componentWillReceiveProps",value:function(e){e.show!==this.props.show&&this.setState({show:e.show})}},{key:"componentDidUpdate",value:function(e,t){void 0!==this.props.onModalBoxOpened&&t.show!==this.state.show&&this.state.show&&this.props.onModalBoxOpened()}},{key:"render",value:function(){var e=this,t=this.getContentClassName();this.state.show?document.body.style.overflow="hidden":document.body.style.overflow="auto";var n={width:this.props.width,height:this.props.height,position:"relative"};return Object(h.e)("div",{className:"Overlay ".concat(this.state.show?"Overlay-visible":"Overlay-hidden"),id:"".concat(this.props.id,"-container")},Object(h.e)(y,{show:this.props.showLoadingBar}),Object(h.e)("div",{className:t,onClick:function(t){e.onClickOutside(t)}},Object(h.e)("div",{className:"Overlay-container",style:n},Object(h.e)("a",{id:"".concat(this.props.id,"-closeButton"),className:"Overlay-closeBtn icon-close-zoom",onClick:function(t){e.onClickHide(t)}}),this.props.children)))}},{key:"onClickOutside",value:function(e){if(e.target.classList.contains("Overlay-content")||e.target.classList.contains("Overlay-container")){if(this.props.disableOutsideClick)return;this.closeModalBox()}}},{key:"onClickHide",value:function(e){e.target.matches("a")&&(e.preventDefault(),this.closeModalBox())}},{key:"getContentClassName",value:function(){var e=["Overlay-content"];return this.props.fullWidth&&e.push("fullWidth"),this.props.overlayContainer&&e.push(this.props.overlayContainer),e.join(" ")}},{key:"closeModalBox",value:function(){this.setState({show:!1}),void 0!==this.props.onModalBoxClosed&&this.props.onModalBoxClosed()}}]),n}(h.a)},"2mXy":function(e,t,n){"use strict";n.d(t,"f",(function(){return T})),n.d(t,"e",(function(){return p})),n.d(t,"b",(function(){return v})),n.d(t,"d",(function(){return h})),n.d(t,"a",(function(){return y})),n.d(t,"c",(function(){return B})),n.d(t,"g",(function(){return x}));var o,r,i,l,c,u={},s=[],_=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a(e,t){for(var n in t)e[n]=t[n];return e}function f(e){var t=e.parentNode;t&&t.removeChild(e)}function p(e,t,n){var o,r,i,l=arguments,c={};for(i in t)"key"==i?o=t[i]:"ref"==i?r=t[i]:c[i]=t[i];if(arguments.length>3)for(n=[n],i=3;i<arguments.length;i++)n.push(l[i]);if(null!=n&&(c.children=n),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===c[i]&&(c[i]=e.defaultProps[i]);return d(e,c,o,r,null)}function d(e,t,n,r,i){var l={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==i?++o.__v:i};return null!=o.vnode&&o.vnode(l),l}function h(){return{current:null}}function v(e){return e.children}function y(e,t){this.props=e,this.context=t}function m(e,t){if(null==t)return e.__?m(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?m(e):null}function b(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return b(e)}}function k(e){(!e.__d&&(e.__d=!0)&&r.push(e)&&!w.__r++||l!==o.debounceRendering)&&((l=o.debounceRendering)||i)(w)}function w(){for(var e;w.__r=r.length;)e=r.sort((function(e,t){return e.__v.__b-t.__v.__b})),r=[],e.some((function(e){var t,n,o,r,i,l;e.__d&&(i=(r=(t=e).__v).__e,(l=t.__P)&&(n=[],(o=a({},r)).__v=r.__v+1,N(l,r,o,t.__n,void 0!==l.ownerSVGElement,null!=r.__h?[i]:null,n,null==i?m(r):i,r.__h),j(n,r),r.__e!=i&&b(r)))}))}function g(e,t,n,o,r,i,l,c,_,a){var p,h,y,b,k,w,g,x=o&&o.__k||s,D=x.length;for(_==u&&(_=null!=l?l[0]:D?m(o,0):null),n.__k=[],p=0;p<t.length;p++)if(null!=(b=n.__k[p]=null==(b=t[p])||"boolean"==typeof b?null:"string"==typeof b||"number"==typeof b?d(null,b,null,null,b):Array.isArray(b)?d(v,{children:b},null,null,null):b.__b>0?d(b.type,b.props,b.key,null,b.__v):b)){if(b.__=n,b.__b=n.__b+1,null===(y=x[p])||y&&b.key==y.key&&b.type===y.type)x[p]=void 0;else for(h=0;h<D;h++){if((y=x[h])&&b.key==y.key&&b.type===y.type){x[h]=void 0;break}y=null}N(e,b,y=y||u,r,i,l,c,_,a),k=b.__e,(h=b.ref)&&y.ref!=h&&(g||(g=[]),y.ref&&g.push(y.ref,null,b),g.push(h,b.__c||k,b)),null!=k?(null==w&&(w=k),"function"==typeof b.type&&null!=b.__k&&b.__k===y.__k?b.__d=_=O(b,_,e):_=C(e,b,y,x,l,k,_),a||"option"!==n.type?"function"==typeof n.type&&(n.__d=_):e.value=""):_&&y.__e==_&&_.parentNode!=e&&(_=m(y))}if(n.__e=w,null!=l&&"function"!=typeof n.type)for(p=l.length;p--;)null!=l[p]&&f(l[p]);for(p=D;p--;)null!=x[p]&&("function"==typeof n.type&&null!=x[p].__e&&x[p].__e==n.__d&&(n.__d=m(o,p+1)),L(x[p],x[p]));if(g)for(p=0;p<g.length;p++)E(g[p],g[++p],g[++p])}function O(e,t,n){var o,r;for(o=0;o<e.__k.length;o++)(r=e.__k[o])&&(r.__=e,t="function"==typeof r.type?O(r,t,n):C(n,r,r,e.__k,null,r.__e,t));return t}function x(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){x(e,t)})):t.push(e)),t}function C(e,t,n,o,r,i,l){var c,u,s;if(void 0!==t.__d)c=t.__d,t.__d=void 0;else if(r==n||i!=l||null==i.parentNode)e:if(null==l||l.parentNode!==e)e.appendChild(i),c=null;else{for(u=l,s=0;(u=u.nextSibling)&&s<o.length;s+=2)if(u==i)break e;e.insertBefore(i,l),c=l}return void 0!==c?c:i.nextSibling}function D(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||_.test(t)?n:n+"px"}function S(e,t,n,o,r){var i,l,c;if(r&&"className"==t&&(t="class"),"style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||D(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||D(e.style,t,n[t])}else"o"===t[0]&&"n"===t[1]?(i=t!==(t=t.replace(/Capture$/,"")),(l=t.toLowerCase())in e&&(t=l),t=t.slice(2),e.l||(e.l={}),e.l[t+i]=n,c=i?P:M,n?o||e.addEventListener(t,c,i):e.removeEventListener(t,c,i)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&"download"!==t&&"href"!==t&&!r&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function M(e){this.l[e.type+!1](o.event?o.event(e):e)}function P(e){this.l[e.type+!0](o.event?o.event(e):e)}function N(e,t,n,r,i,l,c,u,s){var _,f,p,d,h,m,b,k,w,O,x,C=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(s=n.__h,u=t.__e=n.__e,t.__h=null,l=[u]),(_=o.__b)&&_(t);try{e:if("function"==typeof C){if(k=t.props,w=(_=C.contextType)&&r[_.__c],O=_?w?w.props.value:_.__:r,n.__c?b=(f=t.__c=n.__c).__=f.__E:("prototype"in C&&C.prototype.render?t.__c=f=new C(k,O):(t.__c=f=new y(k,O),f.constructor=C,f.render=W),w&&w.sub(f),f.props=k,f.state||(f.state={}),f.context=O,f.__n=r,p=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=C.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=a({},f.__s)),a(f.__s,C.getDerivedStateFromProps(k,f.__s))),d=f.props,h=f.state,p)null==C.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==C.getDerivedStateFromProps&&k!==d&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(k,O),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(k,f.__s,O)||t.__v===n.__v){f.props=k,f.state=f.__s,t.__v!==n.__v&&(f.__d=!1),f.__v=t,t.__e=n.__e,t.__k=n.__k,f.__h.length&&c.push(f);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(k,f.__s,O),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(d,h,m)}))}f.context=O,f.props=k,f.state=f.__s,(_=o.__r)&&_(t),f.__d=!1,f.__v=t,f.__P=e,_=f.render(f.props,f.state,f.context),f.state=f.__s,null!=f.getChildContext&&(r=a(a({},r),f.getChildContext())),p||null==f.getSnapshotBeforeUpdate||(m=f.getSnapshotBeforeUpdate(d,h)),x=null!=_&&_.type===v&&null==_.key?_.props.children:_,g(e,Array.isArray(x)?x:[x],t,n,r,i,l,c,u,s),f.base=t.__e,t.__h=null,f.__h.length&&c.push(f),b&&(f.__E=f.__=null),f.__e=!1}else null==l&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=R(n.__e,t,n,r,i,l,c,s);(_=o.diffed)&&_(t)}catch(e){t.__v=null,(s||null!=l)&&(t.__e=u,t.__h=!!s,l[l.indexOf(u)]=null),o.__e(e,t,n)}}function j(e,t){o.__c&&o.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){o.__e(e,t.__v)}}))}function R(e,t,n,o,r,i,l,c){var _,a,f,p,d,h=n.props,v=t.props;if(r="svg"===t.type||r,null!=i)for(_=0;_<i.length;_++)if(null!=(a=i[_])&&((null===t.type?3===a.nodeType:a.localName===t.type)||e==a)){e=a,i[_]=null;break}if(null==e){if(null===t.type)return document.createTextNode(v);e=r?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,v.is&&{is:v.is}),i=null,c=!1}if(null===t.type)h===v||c&&e.data===v||(e.data=v);else{if(null!=i&&(i=s.slice.call(e.childNodes)),f=(h=n.props||u).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!c){if(null!=i)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(p||f)&&(p&&(f&&p.__html==f.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}(function(e,t,n,o,r){var i;for(i in n)"children"===i||"key"===i||i in t||S(e,i,null,n[i],o);for(i in t)r&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||S(e,i,t[i],n[i],o)})(e,v,h,r,c),p?t.__k=[]:(_=t.props.children,g(e,Array.isArray(_)?_:[_],t,n,o,"foreignObject"!==t.type&&r,i,l,u,c)),c||("value"in v&&void 0!==(_=v.value)&&(_!==e.value||"progress"===t.type&&!_)&&S(e,"value",_,h.value,!1),"checked"in v&&void 0!==(_=v.checked)&&_!==e.checked&&S(e,"checked",_,h.checked,!1))}return e}function E(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){o.__e(e,n)}}function L(e,t,n){var r,i,l;if(o.unmount&&o.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||E(r,null,t)),n||"function"==typeof e.type||(n=null!=(i=e.__e)),e.__e=e.__d=void 0,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){o.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(l=0;l<r.length;l++)r[l]&&L(r[l],t,n);null!=i&&f(i)}function W(e,t,n){return this.constructor(e,n)}function T(e,t,n){var r,i,l;o.__&&o.__(e,t),i=(r=n===c)?null:n&&n.__k||t.__k,e=p(v,null,[e]),l=[],N(t,(r?t:n||t).__k=e,i||u,u,void 0!==t.ownerSVGElement,n&&!r?[n]:i?null:t.childNodes.length?s.slice.call(t.childNodes):null,l,n||u,r),j(l,e)}function B(e,t,n){var o,r,i,l=arguments,c=a({},e.props);for(i in t)"key"==i?o=t[i]:"ref"==i?r=t[i]:c[i]=t[i];if(arguments.length>3)for(n=[n],i=3;i<arguments.length;i++)n.push(l[i]);return null!=n&&(c.children=n),d(e.type,c,o||e.key,r||e.ref,null)}o={__e:function(e,t){for(var n,o,r,i=t.__h;t=t.__;)if((n=t.__c)&&!n.__)try{if((o=n.constructor)&&null!=o.getDerivedStateFromError&&(n.setState(o.getDerivedStateFromError(e)),r=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),r=n.__d),r)return t.__h=i,n.__E=n}catch(t){e=t}throw e},__v:0},y.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof e&&(e=e(a({},n),this.props)),e&&a(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),k(this))},y.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),k(this))},y.prototype.render=v,r=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,w.__r=0,c=u},"7W2i":function(e,t,n){var o=n("SksO");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RKfN:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n("lwsE"),r=n.n(o),i=n("W8MJ"),l=n.n(i),c=function(){function e(){r()(this,e)}return l()(e,null,[{key:"get",value:function(e){var t=document.cookie.match("(^|;) ?"+e+"=([^;]*)(;|$)");return t?t[2]:null}},{key:"set",value:function(e,t,n){var o=new Date;o.setTime(o.getTime()+864e5*n),document.cookie=e+"="+t+";domain=;path=/;expires="+o.toGMTString()}},{key:"eraseCookie",value:function(t){e.set(t,"",-1)}}]),e}()},SksO:function(e,t){function n(t,o){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,o)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}},a1gu:function(e,t,n){var o=n("cDf5"),r=n("PJYZ");e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?r(e):t}},aZML:function(e,t,n){"use strict";n.r(t);var o=n("2mXy"),r=n("lwsE"),i=n.n(r),l=n("W8MJ"),c=n.n(l),u=n("7W2i"),s=n.n(u),_=n("a1gu"),a=n.n(_),f=n("Nsbk"),p=n.n(f),d=n("+bMk"),h=n("RKfN");function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=p()(e);if(t){var r=p()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return a()(this,n)}}var y,m=function(e){s()(n,e);var t=v(n);function n(e){var o;return i()(this,n),(o=t.call(this,e)).t=window.Translator,o.props=e,o.state={show:!1,isMobile:!1},o}return c()(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/device-detector/check").then((function(e){return e.json()})).then((function(t){var n=document.body.classList.contains("is_mobile"),o="device_detection_remember_choice_".concat(n?"mobile":"desktop");if(e._processDocument(t),e._shouldInit(t,n)){if(h.a.get(o))return;e.setState({show:!0,isMobile:n,device:t.device,browser:t.browser})}}))}},{key:"_shouldInit",value:function(e,t){return"mobile"===e.device?this._checkTabletWidth(e,t):"mobile"===e.device&&!t||"full"===e.device&&t}},{key:"_processDocument",value:function(e){e.device_name&&document.body.classList.add("device-".concat(e.device_name)),e.browser&&document.body.classList.add("browser-".concat(e.browser))}},{key:"_checkTabletWidth",value:function(e,t){var n=screen.availWidth;return"ipad"!==e.device_name||t?!!(n>770&&t):n<970}},{key:"_onClick",value:function(){var e=this.state.isMobile?"mobile":"desktop",t="device_detection_remember_choice_".concat(e);h.a.set(t,1,1);var n=this._generateRedirectionLink(this.state.isMobile);window.location.href=n}},{key:"render",value:function(){var e=this;return Object(o.e)(d.a,{"data-wrapper-id":"device-detection-container",id:"device-detection",show:this.state.show,disableOutsideClick:!0},Object(o.e)("div",{className:"DeviceDetectionPopup"},Object(o.e)("p",{className:"DeviceDetectionPopup--Description"},this.state.isMobile?this.t.trans("device_detection.message_desktop"):this.t.trans("device_detection.message_mobile")),Object(o.e)("button",{className:"DeviceDetectionPopup--Submit",onClick:function(t){e._onClick(t)}},this.t.trans("device_detection.confirm")),Object(o.e)("hr",null),Object(o.e)("a",{className:"DeviceDetectionPopup--CancelMessage",onClick:function(){e.setState({show:!1})}},this.t.trans("device_detection.cancel"))))}},{key:"_generateRedirectionLink",value:function(e){var t=window.location.search?"".concat(window.location.search,"&"):"?",n=e?"device_view=full&view=full":"device_view=mobile&view=mobile";return"".concat(window.location.protocol,"//").concat(window.location.host).concat(window.location.pathname).concat(t).concat(n)}}]),n}(o.a);(y=document.getElementById("Component--DeviceDetection"))||((y=document.createElement("div")).id="Component--DeviceDetection",document.body.appendChild(y)),Object(o.f)(Object(o.e)(m,null),y)},cDf5:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}}},[["aZML","runtime"]]]);