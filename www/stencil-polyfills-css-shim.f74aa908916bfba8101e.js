(self.webpackChunkfilmsapp=self.webpackChunkfilmsapp||[]).push([[4952],{6065:()=>{var t=function(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""};function e(e){return r(function(e){var r=new t;r.start=0,r.end=e.length;for(var n=r,i=0,a=e.length;i<a;i++)if(e[i]===s){n.rules||(n.rules=[]);var u=n,c=u.rules[u.rules.length-1]||null;(n=new t).start=i+1,n.parent=u,n.previous=c,u.rules.push(n)}else e[i]===o&&(n.end=i+1,n=n.parent||r);return r}(e=e.replace(i.comments,"").replace(i.port,"")),e)}function r(t,e){var s=e.substring(t.start,t.end-1);if(t.parsedCssText=t.cssText=s.trim(),t.parent){s=(s=(s=function(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,function(){for(var t=arguments[1],e=6-t.length;e--;)t="0"+t;return"\\"+t})}(s=e.substring(t.previous?t.previous.end:t.parent.start,t.start-1))).replace(i.multipleSpaces," ")).substring(s.lastIndexOf(";")+1);var o=t.parsedSelector=t.selector=s.trim();t.atRule=0===o.indexOf(c),t.atRule?0===o.indexOf(u)?t.type=n.MEDIA_RULE:o.match(i.keyframesRule)&&(t.type=n.KEYFRAMES_RULE,t.keyframesName=t.selector.split(i.multipleSpaces).pop()):t.type=0===o.indexOf(a)?n.MIXIN_RULE:n.STYLE_RULE}var l=t.rules;if(l)for(var p=0,f=l.length,h=void 0;p<f&&(h=l[p]);p++)r(h,e);return t}var n={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},s="{",o="}",i={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},a="--",u="@media",c="@";function l(t,e,r){t.lastIndex=0;var n=e.substring(r).match(t);if(n){var s=r+n.index;return{start:s,end:s+n[0].length}}return null}var p=/\bvar\(/,f=/\B--[\w-]+\s*:/,h=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,m=/^[\t ]+\n/gm;function v(t,e,r){var n=function(t,e){var r=l(p,t,e);if(!r)return null;var n=function(t,e){for(var r=0,n=e;n<t.length;n++){var s=t[n];if("("===s)r++;else if(")"===s&&--r<=0)return n+1}return n}(t,r.start),s=t.substring(r.end,n-1).split(","),o=s[0],i=s.slice(1);return{start:r.start,end:n,propName:o.trim(),fallback:i.length>0?i.join(",").trim():void 0}}(t,r);if(!n)return e.push(t.substring(r,t.length)),t.length;var s=n.propName,o=null!=n.fallback?y(n.fallback):void 0;return e.push(t.substring(r,n.start),function(t){return function(t,e,r){return t[e]?t[e]:r?d(r,t):""}(t,s,o)}),n.end}function d(t,e){for(var r="",n=0;n<t.length;n++){var s=t[n];r+="string"==typeof s?s:s(e)}return r}function g(t,e){for(var r=!1,n=!1,s=e;s<t.length;s++){var o=t[s];if(r)n&&'"'===o&&(r=!1),n||"'"!==o||(r=!1);else if('"'===o)r=!0,n=!0;else if("'"===o)r=!0,n=!1;else{if(";"===o)return s+1;if("}"===o)return s}}return s}function y(t){var e=0;t=function(t){for(var e="",r=0;;){var n=l(f,t,r),s=n?n.start:t.length;if(e+=t.substring(r,s),!n)break;r=g(t,s)}return e}(t=t.replace(h,"")).replace(m,"");for(var r=[];e<t.length;)e=v(t,r,e);return r}function S(t){var e={};t.forEach(function(t){t.declarations.forEach(function(t){e[t.prop]=t.value})});for(var r={},n=Object.entries(e),s=function(t){var e=!1;if(n.forEach(function(t){var n=t[0],s=d(t[1],r);s!==r[n]&&(r[n]=s,e=!0)}),!e)return"break"},o=0;o<10&&"break"!==s();o++);return r}function b(t,e){if(void 0===e&&(e=0),!t.rules)return[];var r=[];return t.rules.filter(function(t){return t.type===n.STYLE_RULE}).forEach(function(t){var n=function(t){for(var e,r=[];e=x.exec(t.trim());){var n=M(e[2]),s=n.value,o=n.important;r.push({prop:e[1].trim(),value:y(s),important:o})}return r}(t.cssText);n.length>0&&t.parsedSelector.split(",").forEach(function(t){t=t.trim(),r.push({selector:t,declarations:n,specificity:1,nu:e})}),e++}),r}var E="!important",x=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gm;function M(t){var e=(t=t.replace(/\s+/gim," ").trim()).endsWith(E);return e&&(t=t.substr(0,t.length-E.length).trim()),{value:t,important:e}}function w(t){var e=[];return t.forEach(function(t){e.push.apply(e,t.selectors)}),e}function k(t){var r=e(t),n=y(t);return{original:t,template:n,selectors:b(r),usesCssVars:n.length>1}}function C(t,e){if(t.some(function(t){return t.styleEl===e}))return!1;var r=k(e.textContent);return r.styleEl=e,t.push(r),!0}function I(t){var e=S(w(t));t.forEach(function(t){t.usesCssVars&&(t.styleEl.textContent=d(t.template,e))})}function R(t,e,r){var n;return n="."+r,t.replace(new RegExp("\\."+e,"g"),n)}function A(t,e){return Array.from(t.querySelectorAll("style:not([data-styles]):not([data-no-shim])")).map(function(t){return C(e,t)}).some(Boolean)}function L(t,e,r){var n=r.href;return fetch(n).then(function(t){return t.text()}).then(function(s){if(((i=s).indexOf("var(")>-1||O.test(i))&&r.parentNode){(function(t){return T.lastIndex=0,T.test(t)})(s)&&(s=function(t,e){var r=e.replace(/[^/]*$/,"");return t.replace(T,function(t,e){return t.replace(e,r+e)})}(s,n));var o=t.createElement("style");o.setAttribute("data-styles",""),o.textContent=s,C(e,o),r.parentNode.insertBefore(o,r),r.remove()}var i}).catch(function(t){console.error(t)})}var _,O=/[\s;{]--[-a-zA-Z0-9]+\s*:/m,T=/url[\s]*\([\s]*['"]?(?!(?:https?|data)\:|\/)([^\'\"\)]*)[\s]*['"]?\)[\s]*/gim,U=function(){function t(t,e){this.win=t,this.doc=e,this.count=0,this.hostStyleMap=new WeakMap,this.hostScopeMap=new WeakMap,this.globalScopes=[],this.scopesMap=new Map,this.didInit=!1}return t.prototype.i=function(){var t=this;return this.didInit||!this.win.requestAnimationFrame?Promise.resolve():(this.didInit=!0,new Promise(function(e){t.win.requestAnimationFrame(function(){var r,n;r=t.doc,n=t.globalScopes,new MutationObserver(function(){A(r,n)&&I(n)}).observe(document.head,{childList:!0}),function(t,e){return A(t,e),function(t,e){for(var r=[],n=t.querySelectorAll('link[rel="stylesheet"][href]:not([data-no-shim])'),s=0;s<n.length;s++)r.push(L(t,e,n[s]));return Promise.all(r)}(t,e).then(function(){I(e)})}(t.doc,t.globalScopes).then(function(){return e()})})}))},t.prototype.addLink=function(t){var e=this;return L(this.doc,this.globalScopes,t).then(function(){e.updateGlobal()})},t.prototype.addGlobalStyle=function(t){C(this.globalScopes,t)&&this.updateGlobal()},t.prototype.createHostStyle=function(t,e,r,n){if(this.hostScopeMap.has(t))throw new Error("host style already created");var s,o,i,a,u=this.registerHostTemplate(r,e,n),c=this.doc.createElement("style");return c.setAttribute("data-no-shim",""),u.usesCssVars?n?(c["s-sc"]=e=u.scopeId+"-"+this.count,c.textContent="/*needs update*/",this.hostStyleMap.set(t,c),this.hostScopeMap.set(t,(o=e,i=(s=u).template.map(function(t){return"string"==typeof t?R(t,s.scopeId,o):t}),a=s.selectors.map(function(t){return Object.assign(Object.assign({},t),{selector:R(t.selector,s.scopeId,o)})}),Object.assign(Object.assign({},s),{template:i,selectors:a,scopeId:o}))),this.count++):(u.styleEl=c,u.usesCssVars||(c.textContent=d(u.template,{})),this.globalScopes.push(u),this.updateGlobal(),this.hostScopeMap.set(t,u)):c.textContent=r,c},t.prototype.removeHost=function(t){var e=this.hostStyleMap.get(t);e&&e.remove(),this.hostStyleMap.delete(t),this.hostScopeMap.delete(t)},t.prototype.updateHost=function(t){var e=this.hostScopeMap.get(t);if(e&&e.usesCssVars&&e.isScoped){var r=this.hostStyleMap.get(t);if(r){var n=S(function(t,e,r){var n,s=[],o=function(t,e){for(var r=[];e;){var n=t.get(e);n&&r.push(n),e=e.parentElement}return r}(e,t);return r.forEach(function(t){return s.push(t)}),o.forEach(function(t){return s.push(t)}),(n=w(s).filter(function(e){return function(t,e){return":root"===e||"html"===e||t.matches(e)}(t,e.selector)})).sort(function(t,e){return t.specificity===e.specificity?t.nu-e.nu:t.specificity-e.specificity}),n}(t,this.hostScopeMap,this.globalScopes));r.textContent=d(e.template,n)}}},t.prototype.updateGlobal=function(){I(this.globalScopes)},t.prototype.registerHostTemplate=function(t,e,r){var n=this.scopesMap.get(e);return n||((n=k(t)).scopeId=e,n.isScoped=r,this.scopesMap.set(e,n)),n},t}();!(_="undefined"!=typeof window&&window)||_.__cssshim||_.CSS&&_.CSS.supports&&_.CSS.supports("color","var(--c)")||(_.__cssshim=new U(_,_.document))}}]);