/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).Vidage=n()}(this,(function(){"use strict";var e=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")};function n(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var t=function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e};function o(e,n,t){var o,i,a,r,s;function l(){var u=Date.now()-r;u<n&&u>=0?o=setTimeout(l,n-u):(o=null,t||(s=e.apply(a,i),a=i=null))}null==n&&(n=100);var u=function(){a=this,i=arguments,r=Date.now();var u=t&&!o;return o||(o=setTimeout(l,n)),u&&(s=e.apply(a,i),a=i=null),s};return u.clear=function(){o&&(clearTimeout(o),o=null)},u.flush=function(){o&&(s=e.apply(a,i),a=i=null,clearTimeout(o),o=null)},u}o.debounce=o;var i=o,a={helperClass:"vidage-ready",videoRemoval:!1};var r=null;function s(e,n){if(void 0===e)throw new Error("".concat(n," requires a video selector as first argument."));if("video"!==(e="string"==typeof e?document.querySelector(e):e).nodeName.toLowerCase())throw new Error("".concat(n," requires a valid video selector. You passed a <").concat(e.nodeName,">"));return e}return function(){function n(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e(this,n),this.options=Object.assign(a,o),this._name=this.constructor.name,this.element=s(t,this._name),this.init()}return t(n,[{key:"init",value:function(){var e=this;this.element.readyState>=this.element.HAVE_FUTURE_DATA?this.handler():this.element.addEventListener("canplay",(function(){e.handler()})),window.addEventListener("resize",i((function(){e.handler()}),250))}},{key:"handler",value:function(){var e,n,t=document.body;(n={touch:!!("ontouchstart"in window||window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture||window.DocumentTouch&&document instanceof DocumentTouch),ie:window.navigator.userAgent.indexOf("MSIE")>0||!!window.navigator.userAgent.match(/Trident.*rv\:11\./),small:window.matchMedia("(max-width: 34em)").matches}).touch&&!n.ie||n.small?(this.element.pause(),this.options.videoRemoval&&(e=this.element,null===r&&(r=e.parentNode),document.body.contains(e)&&r.removeChild(e)),t.classList.remove(this.options.helperClass)):(this.options.videoRemoval&&function(e){document.body.contains(e)||r.insertAdjacentElement("afterbegin",e)}(this.element),this.element.play(),t.classList.add(this.options.helperClass))}}]),n}()}));