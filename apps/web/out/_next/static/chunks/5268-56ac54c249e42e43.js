(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5268],{8226:function(){},25965:function(e,t,n){"use strict";n.r(t),n.d(t,{CountUp:function(){return i}});var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=function(){function e(e,t,n){var i=this;this.endVal=t,this.options=n,this.version="2.3.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(e){i.startTime||(i.startTime=e);var t=e-i.startTime;i.remaining=i.duration-t,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(t,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(t,i.startVal,i.endVal-i.startVal,i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(t/i.duration);var n=i.countDown?i.frameVal<i.endVal:i.frameVal>i.endVal;i.frameVal=n?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),t<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.callback&&i.callback()},this.formatNumber=function(e){var t,n,r,s=(Math.abs(e).toFixed(i.options.decimalPlaces)+"").split(".");if(t=s[0],n=s.length>1?i.options.decimal+s[1]:"",i.options.useGrouping){r="";for(var o=0,a=t.length;o<a;++o)0!==o&&o%3==0&&(r=i.options.separator+r),r=t[a-o-1]+r;t=r}return i.options.numerals&&i.options.numerals.length&&(t=t.replace(/[0-9]/g,function(e){return i.options.numerals[+e]}),n=n.replace(/[0-9]/g,function(e){return i.options.numerals[+e]})),(e<0?"-":"")+i.options.prefix+t+n+i.options.suffix},this.easeOutExpo=function(e,t,n,r){return n*(1-Math.pow(2,-10*e/r))*1024/1023+t},this.options=r(r({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(t),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof e?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return i.handleScroll(i)}),window.onscroll=function(){window.onScrollFns.forEach(function(e){return e()})},this.handleScroll(this)))}return e.prototype.handleScroll=function(e){if(e&&window&&!e.once){var t=window.innerHeight+window.scrollY,n=e.el.getBoundingClientRect(),r=n.top+n.height+window.pageYOffset;r<t&&r>window.scrollY&&e.paused?(e.paused=!1,setTimeout(function(){return e.start()},e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):window.scrollY>r&&!e.paused&&e.reset()}},e.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;if(this.countDown=this.startVal>e,Math.abs(e-this.startVal)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var t=this.countDown?1:-1;this.endVal=e+t*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},e.prototype.start=function(e){this.error||(this.callback=e,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},e.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},e.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},e.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},e.prototype.printValue=function(e){var t=this.formattingFn(e);"INPUT"===this.el.tagName?this.el.value=t:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=t:this.el.innerHTML=t},e.prototype.ensureNumber=function(e){return"number"==typeof e&&!isNaN(e)},e.prototype.validateValue=function(e){var t=Number(e);return this.ensureNumber(t)?t:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},e.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},e}()},42765:function(e,t,n){"use strict";function r(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}n.d(t,{Z:function(){return r}})},91310:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(42765),i=n(66700),s=n(19785);function o(e,t){(0,s.Z)(2,arguments);var n=(0,i.Z)(e).getTime(),o=(0,r.Z)(t);return new Date(n+o)}},96795:function(e,t,n){var r=n(36740)(function(e,t,n){e[n?0:1].push(t)},function(){return[[],[]]});e.exports=r},30746:function(e,t,n){var r,i,s,o,a,u=n(34406);n(8226);var l=n(2784),c=l&&"object"==typeof l&&"default"in l?l:{default:l};function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=void 0!==u&&u.env&&!0,d=function(e){return"[object String]"===Object.prototype.toString.call(e)},p=((i=(r=function(e){var t=void 0===e?{}:e,n=t.name,r=void 0===n?"stylesheet":n,i=t.optimizeForSpeed,s=void 0===i?f:i;m(d(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}",m("boolean"==typeof s,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=s,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var o=document.querySelector('meta[property="csp-nonce"]');this._nonce=o?o.getAttribute("content"):null}).prototype).setOptimizeForSpeed=function(e){m("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),m(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},i.isOptimizeForSpeed=function(){return this._optimizeForSpeed},i.inject=function(){var e=this;if(m(!this._injected,"sheet already injected"),this._injected=!0,this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(f||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"==typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},i.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},i.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},i.insertRule=function(e,t){if(m(d(e),"`insertRule` accepts only strings"),this._optimizeForSpeed){var n=this.getSheet();"number"!=typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(r){return f||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},i.replaceRule=function(e,t){if(this._optimizeForSpeed){var n=this.getSheet();if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(r){f||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];m(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},i.deleteRule=function(e){if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];m(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},i.flush=function(){this._injected=!1,this._rulesCount=0,this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]},i.cssRules=function(){var e=this;return this._tags.reduce(function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},i.makeStyleTag=function(e,t,n){t&&m(d(t),"makeStyleTag accepts only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return n?i.insertBefore(r,n):i.appendChild(r),r},h(r.prototype,[{key:"length",get:function(){return this._rulesCount}}]),s&&h(r,s),r);function m(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var y=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0},g={};function v(e,t){if(!t)return"jsx-"+e;var n=String(t),r=e+n;return g[r]||(g[r]="jsx-"+y(e+"-"+n)),g[r]}function S(e,t){var n=e+t;return g[n]||(g[n]=t.replace(/__jsx-style-dynamic-selector/g,e)),g[n]}var _=((a=(o=function(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,i=t.optimizeForSpeed,s=void 0!==i&&i;this._sheet=r||new p({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),r&&"boolean"==typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}).prototype).add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),r=n.styleId,i=n.rules;if(r in this._instancesCounts){this._instancesCounts[r]+=1;return}var s=i.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[r]=s,this._instancesCounts[r]=1},a.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}},a.update=function(e,t){this.add(t),this.remove(e)},a.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},a.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return Boolean(e[1])}))},a.styles=function(e){var t,n;return t=this.cssRules(),void 0===(n=e)&&(n={}),t.map(function(e){var t=e[0],r=e[1];return c.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:n.nonce?n.nonce:void 0,dangerouslySetInnerHTML:{__html:r}})})},a.getIdAndRules=function(e){var t=e.children,n=e.dynamic,r=e.id;if(n){var i=v(r,n);return{styleId:i,rules:Array.isArray(t)?t.map(function(e){return S(i,e)}):[S(i,t)]}}return{styleId:v(r),rules:Array.isArray(t)?t:[t]}},a.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},o),b=l.createContext(null);b.displayName="StyleSheetContext";var V=c.default.useInsertionEffect||c.default.useLayoutEffect,F=new _;function w(e){var t=F||l.useContext(b);return t&&V(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)]),null}w.dynamic=function(e){return e.map(function(e){return v(e[0],e[1])}).join(" ")},t.style=w},70784:function(e,t,n){"use strict";e.exports=n(30746).style},76597:function(e,t,n){"use strict";var r=n(2784),i=n(25965);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach(function(t){var r,i;r=e,i=n[t],t in r?Object.defineProperty(r,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[t]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function a(){return(a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect;function c(e){var t=r.useRef(e);return l(function(){t.current=e}),r.useCallback(function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.current.apply(void 0,n)},[])}var h=function(e,t){var n=t.decimal,r=t.decimals,s=t.duration,o=t.easingFn,a=t.end,u=t.formattingFn,l=t.numerals,c=t.prefix,h=t.separator,f=t.start,d=t.suffix,p=t.useEasing,m=t.enableScrollSpy,y=t.scrollSpyDelay,g=t.scrollSpyOnce;return new i.CountUp(e,a,{startVal:f,duration:s,decimal:n,decimalPlaces:r,easingFn:o,formattingFn:u,numerals:l,separator:h,prefix:c,suffix:d,useEasing:p,useGrouping:!!h,enableScrollSpy:m,scrollSpyDelay:y,scrollSpyOnce:g})},f=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],d={decimal:".",delay:null,prefix:"",suffix:"",duration:2,start:0,startOnMount:!0,enableReinitialize:!0},p=function(e){var t=r.useMemo(function(){return o(o({},d),e)},[e]),n=t.ref,i=t.startOnMount,s=t.enableReinitialize,a=t.delay,l=t.onEnd,p=t.onStart,m=t.onPauseResume,y=t.onReset,g=t.onUpdate,v=u(t,f),S=r.useRef(),_=r.useRef(),b=r.useRef(!1),V=c(function(){return h("string"==typeof n?n:n.current,v)}),F=c(function(e){var t=S.current;if(t&&!e)return t;var n=V();return S.current=n,n}),w=c(function(){var e=function(){return F(!0).start(function(){null==l||l({pauseResume:E,reset:R,start:j,update:O})})};a&&a>0?_.current=setTimeout(e,1e3*a):e(),null==p||p({pauseResume:E,reset:R,update:O})}),E=c(function(){F().pauseResume(),null==m||m({reset:R,start:j,update:O})}),R=c(function(){F().el&&(_.current&&clearTimeout(_.current),F().reset(),null==y||y({pauseResume:E,start:j,update:O}))}),O=c(function(e){F().update(e),null==g||g({pauseResume:E,reset:R,start:j})}),j=c(function(){R(),w()}),x=c(function(e){i&&(e&&R(),w())});return r.useEffect(function(){b.current?s&&x(!0):(b.current=!0,x())},[s,b,x,a,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),r.useEffect(function(){return function(){R()}},[R]),{start:j,pauseResume:E,reset:R,update:O,getCountUp:F}},m=["className","redraw","containerProps","children","style"];t.ZP=function(e){var t=e.className,n=e.redraw,i=e.containerProps,s=e.children,l=e.style,h=u(e,m),f=r.useRef(null),d=r.useRef(!1),y=p(o(o({},h),{},{ref:f,startOnMount:"function"!=typeof s||0===e.delay,enableReinitialize:!1})),g=y.start,v=y.reset,S=y.update,_=y.pauseResume,b=y.getCountUp,V=c(function(){g()}),F=c(function(t){e.preserveValue||v(),S(t)}),w=c(function(){if("function"==typeof e.children&&!(f.current instanceof Element)){console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.');return}b()});return(r.useEffect(function(){w()},[w]),r.useEffect(function(){d.current&&F(e.end)},[e.end,F]),r.useEffect(function(){n&&d.current&&V()},[V,n,n&&e]),r.useEffect(function(){!n&&d.current&&V()},[V,n,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),r.useEffect(function(){d.current=!0},[]),"function"==typeof s)?s({countUpRef:f,start:g,reset:v,update:S,pauseResume:_,getCountUp:b}):r.createElement("span",a({className:t,ref:f,style:l},i),void 0!==e.start?b().formattingFn(e.start):"")}}}]);
//# sourceMappingURL=5268-56ac54c249e42e43.js.map