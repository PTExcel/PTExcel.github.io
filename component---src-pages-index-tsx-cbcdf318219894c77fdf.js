/*! For license information please see component---src-pages-index-tsx-cbcdf318219894c77fdf.js.LICENSE.txt */
(self.webpackChunkptexcel_github_io=self.webpackChunkptexcel_github_io||[]).push([[691],{757:function(e,t,n){"use strict";var r=n(4836);t.M=void 0;var o=r(n(434)),a=r(n(7071)),s=r(n(7294)),i=r(n(5697)),u=["children"],c=s.default.forwardRef((function(e,t){var n=e.children,r=(0,a.default)(e,u);return s.default.createElement("a",(0,o.default)({ref:t},r,{onClick:function(e){"function"==typeof r.onClick&&r.onClick(e);var t=!0;return(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||e.defaultPrevented)&&(t=!1),r.target&&"_self"!==r.target.toLowerCase()&&(t=!1),window.gtag?window.gtag("event","click",{event_category:"outbound",event_label:r.href,transport_type:t?"beacon":"",event_callback:function(){t&&(document.location=r.href)}}):t&&(document.location=r.href),!1}}),n)}));t.M=c,c.propTypes={href:i.default.string,target:i.default.string,onClick:i.default.func}},5705:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),o=n(1883);function a(){const e=(0,o.useStaticQuery)("1821604796"),{0:t,1:n}=(0,r.useState)({logo:e.userProfile.pictures[0]});return r.createElement("nav",{className:"navbar"},r.createElement("div",{className:"logo"},r.createElement("a",{className:"navbar-brand"},r.createElement("img",{src:t.logo.url,alt:"logo",style:{maxWidth:"100px"}})),r.createElement("span",null,"Pt Excel")),r.createElement("ul",{className:"nav-links"},r.createElement("input",{type:"checkbox",id:"checkbox_toggle"}),r.createElement("label",{htmlFor:"checkbox_toggle",className:"hamburger"},"☰"),r.createElement("div",{className:"menu"},r.createElement("li",null,r.createElement(o.Link,{to:"/",activeClassName:"active"},"Home")),r.createElement("li",null,r.createElement(o.Link,{to:"/about",activeClassName:"active"},"About")),r.createElement("li",null,r.createElement(o.Link,{to:"/work",activeClassName:"active"},"Work")),r.createElement("li",null,r.createElement(o.Link,{to:"/contact",activeClassName:"active"},"Contact")))))}function s(e){let{children:t}=e;return r.createElement("div",{className:"container"},r.createElement(a,null),r.createElement("div",{className:"content background"},r.createElement("div",{id:"stars"}),r.createElement("div",{id:"stars2"}),r.createElement("div",{id:"stars3"}),t))}},7200:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return l}});var r=n(7294),o=n(1883),a=n(7788),s=n.n(a),i=n(757),u=n(5705);const c={color:"#232129",padding:96,fontFamily:"-apple-system, Roboto, sans-serif, serif"};function l(e){return r.createElement("title",null,e.data.site.siteMetadata.title," - Home")}t.default=e=>{let{data:t}=e;const{firstName:n,lastName:a,features:l,cv:{url:f}}=t.userProfile,p=r.useCallback((()=>{"undefined"!=typeof window&&window.gtag&&(console.log("I am google tracking"),window.gtag("event","click",{category:"Contact",action:"Click",label:"Download CV"}))}),[]);return r.createElement(u.Z,null,r.createElement("main",{className:"intro",style:c},r.createElement("h1",{className:"intro-title mb-4"},"Hello, My name is ",n+" "+a),r.createElement("p",{className:"intro-subtitle"},r.createElement("span",{className:"text-slider-items"}),r.createElement("strong",{className:"text-slider"},r.createElement(s(),{strings:l,typeSpeed:80,backDelay:1100,backSpeed:30,loop:!0}))),r.createElement("div",{className:"intro-content-buttons"},r.createElement("div",null,r.createElement(o.Link,{to:"/work",className:"btn-primary"},"View My Work"),r.createElement(i.M,{className:"btn-primary",target:"_blank",role:"button",href:f,download:"BrandonTruongCV",rel:"noreferrer",onClick:p},"Download my CV")))))}},7788:function(e,t,n){var r;e.exports=(r=n(7294),function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=5)}([function(e,t,n){var r=n(3);e.exports=n(8)(r.isElement,!0)},function(e,t){e.exports=r},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";e.exports=n(7)},function(e,t,n){var r;r=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}return n.m=e,n.c=t,n.p="",n(0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),a=n(3),s=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o.initializer.load(this,n,t),this.begin()}return r(e,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var e=arguments.length<=0||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,e&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var e=this;this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout((function(){e.currentElContent&&0!==e.currentElContent.length?e.backspace(e.currentElContent,e.currentElContent.length):e.typewrite(e.strings[e.sequence[e.arrayPos]],e.strPos)}),this.startDelay)}},{key:"typewrite",value:function(e,t){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var r=this.humanizer(this.typeSpeed),o=1;!0!==this.pause.status?this.timeout=setTimeout((function(){t=a.htmlParser.typeHtmlChars(e,t,n);var r=0,s=e.substr(t);if("^"===s.charAt(0)&&/^\^\d+/.test(s)){var i=1;i+=(s=/\d+/.exec(s)[0]).length,r=parseInt(s),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),e=e.substring(0,t)+e.substring(t+i),n.toggleBlinking(!0)}if("`"===s.charAt(0)){for(;"`"!==e.substr(t+o).charAt(0)&&!(t+ ++o>e.length););var u=e.substring(0,t),c=e.substring(u.length+1,t+o),l=e.substring(t+o+1);e=u+c+l,o--}n.timeout=setTimeout((function(){n.toggleBlinking(!1),t>=e.length?n.doneTyping(e,t):n.keepTyping(e,t,o),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))}),r)}),r):this.setPauseStatus(e,t,!0)}},{key:"keepTyping",value:function(e,t,n){0===t&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),t+=n;var r=e.substr(0,t);this.replaceText(r),this.typewrite(e,t)}},{key:"doneTyping",value:function(e,t){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout((function(){n.backspace(e,t)}),this.backDelay))}},{key:"backspace",value:function(e,t){var n=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var r=this.humanizer(this.backSpeed);this.timeout=setTimeout((function(){t=a.htmlParser.backSpaceHtmlChars(e,t,n);var r=e.substr(0,t);if(n.replaceText(r),n.smartBackspace){var o=n.strings[n.arrayPos+1];o&&r===o.substr(0,t)?n.stopNum=t:n.stopNum=0}t>n.stopNum?(t--,n.backspace(e,t)):t<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],t))}),r)}else this.setPauseStatus(e,t,!0)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(e,t,n){this.pause.typewrite=n,this.pause.curString=e,this.pause.curStrPos=t}},{key:"toggleBlinking",value:function(e){this.cursor&&(this.pause.status||this.cursorBlinking!==e&&(this.cursorBlinking=e,e?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))}},{key:"humanizer",value:function(e){return Math.round(Math.random()*e/2)+e}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort((function(){return Math.random()-.5})))}},{key:"initFadeOut",value:function(){var e=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout((function(){e.arrayPos++,e.replaceText(""),e.strings.length>e.arrayPos?e.typewrite(e.strings[e.sequence[e.arrayPos]],0):(e.typewrite(e.strings[0],0),e.arrayPos=0)}),this.fadeOutDelay)}},{key:"replaceText",value:function(e){this.attr?this.el.setAttribute(this.attr,e):this.isInput?this.el.value=e:"html"===this.contentType?this.el.innerHTML=e:this.el.textContent=e}},{key:"bindFocusEvents",value:function(){var e=this;this.isInput&&(this.el.addEventListener("focus",(function(t){e.stop()})),this.el.addEventListener("blur",(function(t){e.el.value&&0!==e.el.value.length||e.start()})))}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),e}();t.default=s,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=(r=n(2))&&r.__esModule?r:{default:r},i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return a(e,[{key:"load",value:function(e,t,n){if(e.el="string"==typeof n?document.querySelector(n):n,e.options=o({},s.default,t),e.isInput="input"===e.el.tagName.toLowerCase(),e.attr=e.options.attr,e.bindInputFocusEvents=e.options.bindInputFocusEvents,e.showCursor=!e.isInput&&e.options.showCursor,e.cursorChar=e.options.cursorChar,e.cursorBlinking=!0,e.elContent=e.attr?e.el.getAttribute(e.attr):e.el.textContent,e.contentType=e.options.contentType,e.typeSpeed=e.options.typeSpeed,e.startDelay=e.options.startDelay,e.backSpeed=e.options.backSpeed,e.smartBackspace=e.options.smartBackspace,e.backDelay=e.options.backDelay,e.fadeOut=e.options.fadeOut,e.fadeOutClass=e.options.fadeOutClass,e.fadeOutDelay=e.options.fadeOutDelay,e.isPaused=!1,e.strings=e.options.strings.map((function(e){return e.trim()})),"string"==typeof e.options.stringsElement?e.stringsElement=document.querySelector(e.options.stringsElement):e.stringsElement=e.options.stringsElement,e.stringsElement){e.strings=[],e.stringsElement.style.display="none";var r=Array.prototype.slice.apply(e.stringsElement.children),a=r.length;if(a)for(var i=0;i<a;i+=1){var u=r[i];e.strings.push(u.innerHTML.trim())}}for(var i in e.strPos=0,e.arrayPos=0,e.stopNum=0,e.loop=e.options.loop,e.loopCount=e.options.loopCount,e.curLoop=0,e.shuffle=e.options.shuffle,e.sequence=[],e.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},e.typingComplete=!1,e.strings)e.sequence[i]=i;e.currentElContent=this.getCurrentElContent(e),e.autoInsertCss=e.options.autoInsertCss,this.appendAnimationCss(e)}},{key:"getCurrentElContent",value:function(e){return e.attr?e.el.getAttribute(e.attr):e.isInput?e.el.value:"html"===e.contentType?e.el.innerHTML:e.el.textContent}},{key:"appendAnimationCss",value:function(e){if(e.autoInsertCss&&(e.showCursor||e.fadeOut)&&!document.querySelector("[data-typed-js-css]")){var t=document.createElement("style");t.type="text/css",t.setAttribute("data-typed-js-css",!0);var n="";e.showCursor&&(n+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),e.fadeOut&&(n+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==t.length&&(t.innerHTML=n,document.body.appendChild(t))}}}]),e}();t.default=i;var u=new i;t.initializer=u},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onComplete:function(e){},preStringTyped:function(e,t){},onStringTyped:function(e,t){},onLastStringBackspaced:function(e){},onTypingPaused:function(e,t){},onTypingResumed:function(e,t){},onReset:function(e){},onStop:function(e,t){},onStart:function(e,t){},onDestroy:function(e){}};t.default=n,e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,[{key:"typeHtmlChars",value:function(e,t,n){if("html"!==n.contentType)return t;var r=e.substr(t).charAt(0);if("<"===r||"&"===r){var o="";for(o="<"===r?">":";";e.substr(t+1).charAt(0)!==o&&!(1+ ++t>e.length););t++}return t}},{key:"backSpaceHtmlChars",value:function(e,t,n){if("html"!==n.contentType)return t;var r=e.substr(t).charAt(0);if(">"===r||";"===r){var o="";for(o=">"===r?"<":"&";e.substr(t-1).charAt(0)!==o&&!(--t<0););t--}return t}}]),e}();t.default=r;var o=new r;t.htmlParser=o}])},e.exports=r()},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(0),s=n.n(a),i=n(4),u=n.n(i);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(){var e,n,r,a,s,i,u;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,f=new Array(l),d=0;d<l;d++)f[d]=arguments[d];return r=this,n=!(a=(e=p(t)).call.apply(e,[this].concat(f)))||"object"!==c(a)&&"function"!=typeof a?y(r):a,s=y(n),i="rootElement",u=o.a.createRef(),i in s?Object.defineProperty(s,i,{value:u,enumerable:!0,configurable:!0,writable:!0}):s[i]=u,n}var n,a,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,r.Component),n=t,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=(e.style,e.typedRef,e.stopped),n=(e.className,l(e,["style","typedRef","stopped","className"]));this.constructTyped(n),t&&this.typed.stop()}},{key:"constructTyped",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=this.props,r=(n.style,n.typedRef,n.stopped,n.className,l(n,["style","typedRef","stopped","className"]));this.typed&&this.typed.destroy(),this.typed=new u.a(this.rootElement.current,Object.assign(r,t)),this.props.typedRef&&this.props.typedRef(this.typed),this.typed.reConstruct=function(t){e.constructTyped(t)}}},{key:"shouldComponentUpdate",value:function(e){var t=this;if(this.props!==e){e.style,e.typedRef,e.stopped,e.className;var n=l(e,["style","typedRef","stopped","className"]);return this.typed.options=Object.assign(this.typed.options,n),!Object.keys(e).every((function(n){return!t.props[n]&&e[n]?(t.constructTyped(e),!1):(t.typed[n]&&(t.typed[n]=e[n]),!0)}))||this.props.strings.length===e.strings.length||this.constructTyped(e),!0}return!1}},{key:"render",value:function(){var e=this.props,t=e.style,n=e.className,r=e.children,a=o.a.createElement("span",{ref:this.rootElement});return r&&(a=o.a.cloneElement(r,{ref:this.rootElement})),o.a.createElement("span",{style:t,className:n},a)}}])&&f(n.prototype,a),s&&f(n,s),t}();h.propTypes={style:s.a.object,className:s.a.string,children:s.a.object,typedRef:s.a.func,stopped:s.a.bool,strings:s.a.arrayOf(s.a.string),typeSpeed:s.a.number,startDelay:s.a.number,backSpeed:s.a.number,smartBackspace:s.a.bool,shuffle:s.a.bool,backDelay:s.a.number,fadeOut:s.a.bool,fadeOutClass:s.a.string,fadeOutDelay:s.a.number,loop:s.a.bool,loopCount:s.a.number,showCursor:s.a.bool,cursorChar:s.a.string,autoInsertCss:s.a.bool,attr:s.a.string,bindInputFocusEvents:s.a.bool,contentType:s.a.oneOf(["html",""]),onComplete:s.a.func,preStringTyped:s.a.func,onStringTyped:s.a.func,onLastStringBackspaced:s.a.func,onTypingPaused:s.a.func,onTypingResumed:s.a.func,onReset:s.a.func,onStop:s.a.func,onStart:s.a.func,onDestroy:s.a.func},t.default=h},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,s=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,u=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,y=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,b=r?Symbol.for("react.lazy"):60116,v=r?Symbol.for("react.fundamental"):60117,g=r?Symbol.for("react.responder"):60118;function k(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case f:case p:case s:case u:case i:case d:return e;default:switch(e=e&&e.$$typeof){case l:case y:case c:return e;default:return t}}case b:case m:case a:return t}}}function w(e){return k(e)===p}t.typeOf=k,t.AsyncMode=f,t.ConcurrentMode=p,t.ContextConsumer=l,t.ContextProvider=c,t.Element=o,t.ForwardRef=y,t.Fragment=s,t.Lazy=b,t.Memo=m,t.Portal=a,t.Profiler=u,t.StrictMode=i,t.Suspense=d,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===s||e===p||e===u||e===i||e===d||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===m||e.$$typeof===c||e.$$typeof===l||e.$$typeof===y||e.$$typeof===v||e.$$typeof===g)},t.isAsyncMode=function(e){return w(e)||k(e)===f},t.isConcurrentMode=w,t.isContextConsumer=function(e){return k(e)===l},t.isContextProvider=function(e){return k(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return k(e)===y},t.isFragment=function(e){return k(e)===s},t.isLazy=function(e){return k(e)===b},t.isMemo=function(e){return k(e)===m},t.isPortal=function(e){return k(e)===a},t.isProfiler=function(e){return k(e)===u},t.isStrictMode=function(e){return k(e)===i},t.isSuspense=function(e){return k(e)===d}},function(e,t,n){"use strict";!function(){Object.defineProperty(t,"__esModule",{value:!0});var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,u=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,l=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,d=e?Symbol.for("react.memo"):60115,h=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,a="Warning: "+e.replace(/%s/g,(function(){return n[o++]}));"undefined"!=typeof console&&console.warn(a);try{throw new Error(a)}catch(e){}},g=function(e,t){if(void 0===t)throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");if(!e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];v.apply(void 0,[t].concat(r))}};function k(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var y=e.type;switch(y){case c:case l:case o:case s:case a:case p:return y;default:var m=y&&y.$$typeof;switch(m){case u:case f:case i:return m;default:return t}}case h:case d:case r:return t}}}var w=c,O=l,S=u,C=i,E=n,P=f,x=o,j=h,T=d,_=r,N=s,I=a,M=p,R=!1;function $(e){return k(e)===l}t.typeOf=k,t.AsyncMode=w,t.ConcurrentMode=O,t.ContextConsumer=S,t.ContextProvider=C,t.Element=E,t.ForwardRef=P,t.Fragment=x,t.Lazy=j,t.Memo=T,t.Portal=_,t.Profiler=N,t.StrictMode=I,t.Suspense=M,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===l||e===s||e===a||e===p||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===d||e.$$typeof===i||e.$$typeof===u||e.$$typeof===f||e.$$typeof===m||e.$$typeof===b)},t.isAsyncMode=function(e){return R||(R=!0,g(!1,"The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),$(e)||k(e)===c},t.isConcurrentMode=$,t.isContextConsumer=function(e){return k(e)===u},t.isContextProvider=function(e){return k(e)===i},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return k(e)===f},t.isFragment=function(e){return k(e)===o},t.isLazy=function(e){return k(e)===h},t.isMemo=function(e){return k(e)===d},t.isPortal=function(e){return k(e)===r},t.isProfiler=function(e){return k(e)===s},t.isStrictMode=function(e){return k(e)===a},t.isSuspense=function(e){return k(e)===p}}()},function(e,t,n){"use strict";var r=n(3),o=n(9),a=n(2),s=n(10),i=Function.call.bind(Object.prototype.hasOwnProperty),u=function(){};function c(){return null}u=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,l="@@iterator",f="<<anonymous>>",p={array:m("array"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:h(c),arrayOf:function(e){return h((function(t,n,r,o,s){if("function"!=typeof e)return new d("Property `"+s+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var i=t[n];if(!Array.isArray(i))return new d("Invalid "+o+" `"+s+"` of type `"+v(i)+"` supplied to `"+r+"`, expected an array.");for(var u=0;u<i.length;u++){var c=e(i,u,r,o,s+"["+u+"]",a);if(c instanceof Error)return c}return null}))},element:h((function(t,n,r,o,a){var s=t[n];return e(s)?null:new d("Invalid "+o+" `"+a+"` of type `"+v(s)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:h((function(e,t,n,o,a){var s=e[t];return r.isValidElementType(s)?null:new d("Invalid "+o+" `"+a+"` of type `"+v(s)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return h((function(t,n,r,o,a){if(!(t[n]instanceof e)){var s=e.name||f;return new d("Invalid "+o+" `"+a+"` of type `"+function(e){return e.constructor&&e.constructor.name?e.constructor.name:f}(t[n])+"` supplied to `"+r+"`, expected instance of `"+s+"`.")}return null}))},node:h((function(e,t,n,r,o){return b(e[t])?null:new d("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return h((function(t,n,r,o,s){if("function"!=typeof e)return new d("Property `"+s+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var u=t[n],c=v(u);if("object"!==c)return new d("Invalid "+o+" `"+s+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var l in u)if(i(u,l)){var f=e(u,l,r,o,s+"."+l,a);if(f instanceof Error)return f}return null}))},oneOf:function(e){return Array.isArray(e)?h((function(t,n,r,o,a){for(var s=t[n],i=0;i<e.length;i++)if(y(s,e[i]))return null;var u=JSON.stringify(e,(function(e,t){return"symbol"===g(t)?String(t):t}));return new d("Invalid "+o+" `"+a+"` of value `"+String(s)+"` supplied to `"+r+"`, expected one of "+u+".")})):(u(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return u("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return u("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+k(n)+" at index "+t+"."),c}return h((function(t,n,r,o,s){for(var i=0;i<e.length;i++)if(null==(0,e[i])(t,n,r,o,s,a))return null;return new d("Invalid "+o+" `"+s+"` supplied to `"+r+"`.")}))},shape:function(e){return h((function(t,n,r,o,s){var i=t[n],u=v(i);if("object"!==u)return new d("Invalid "+o+" `"+s+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var l=e[c];if(l){var f=l(i,c,r,o,s+"."+c,a);if(f)return f}}return null}))},exact:function(e){return h((function(t,n,r,s,i){var u=t[n],c=v(u);if("object"!==c)return new d("Invalid "+s+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");var l=o({},t[n],e);for(var f in l){var p=e[f];if(!p)return new d("Invalid "+s+" `"+i+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=p(u,f,r,s,i+"."+f,a);if(y)return y}return null}))}};function y(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function d(e){this.message=e,this.stack=""}function h(e){var n={},r=0;function o(o,s,i,c,l,p,y){if(c=c||f,p=p||i,y!==a){if(t){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}if("undefined"!=typeof console){var m=c+":"+i;!n[m]&&r<3&&(u("You are manually calling a React.PropTypes validation function for the `"+p+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[m]=!0,r++)}}return null==s[i]?o?null===s[i]?new d("The "+l+" `"+p+"` is marked as required in `"+c+"`, but its value is `null`."):new d("The "+l+" `"+p+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,i,c,l,p)}var s=o.bind(null,!1);return s.isRequired=o.bind(null,!0),s}function m(e){return h((function(t,n,r,o,a,s){var i=t[n];return v(i)!==e?new d("Invalid "+o+" `"+a+"` of type `"+g(i)+"` supplied to `"+r+"`, expected `"+e+"`."):null}))}function b(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(b);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e[l]);if("function"==typeof t)return t}(t);if(!r)return!1;var o,a=r.call(t);if(r!==t.entries){for(;!(o=a.next()).done;)if(!b(o.value))return!1}else for(;!(o=a.next()).done;){var s=o.value;if(s&&!b(s[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function g(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function k(e){var t=g(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return d.prototype=Error.prototype,p.checkPropTypes=s,p.resetWarningCache=s.resetWarningCache,p.PropTypes=p,p}},function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function s(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,i,u=s(e),c=1;c<arguments.length;c++){for(var l in n=Object(arguments[c]))o.call(n,l)&&(u[l]=n[l]);if(r){i=r(n);for(var f=0;f<i.length;f++)a.call(n,i[f])&&(u[i[f]]=n[i[f]])}}return u}},function(e,t,n){"use strict";var r=function(){},o=n(2),a={},s=Function.call.bind(Object.prototype.hasOwnProperty);function i(e,t,n,i,u){for(var c in e)if(s(e,c)){var l;try{if("function"!=typeof e[c]){var f=Error((i||"React class")+": "+n+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.");throw f.name="Invariant Violation",f}l=e[c](t,c,i,n,null,o)}catch(e){l=e}if(!l||l instanceof Error||r((i||"React class")+": type specification of "+n+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof l+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),l instanceof Error&&!(l.message in a)){a[l.message]=!0;var p=u?u():"";r("Failed "+n+" type: "+l.message+(null!=p?p:""))}}}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},i.resetWarningCache=function(){a={}},e.exports=i},function(e,t,n){"use strict";var r=n(2);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,s){if(s!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}}]))},434:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},7071:function(e){e.exports=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-pages-index-tsx-cbcdf318219894c77fdf.js.map