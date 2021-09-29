(self.webpackChunknote=self.webpackChunknote||[]).push([[534],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,d=f["".concat(i,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6892:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return u},default:function(){return s}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),l=["components"],c={sidebar_position:9,custom_edit_url:null},i={unversionedId:"js/07LocalStorage",id:"js/07LocalStorage",isDocsHomePage:!1,title:"Local Storage",description:"\u958b\u767c\u8005\u5de5\u5177 > Application > Storage > Local Storage",source:"@site/docs/js/07LocalStorage.md",sourceDirName:"js",slug:"/js/07LocalStorage",permalink:"/note/js/07LocalStorage",editUrl:null,version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Array method",permalink:"/note/js/arrayMethod"},next:{title:"expression \u8868\u9054\u5f0f",permalink:"/note/js/09expression"}},u=[{value:"\u4fdd\u5b58\u8cc7\u6599",id:"\u4fdd\u5b58\u8cc7\u6599",children:[]},{value:"\u53d6\u5f97\u8cc7\u6599",id:"\u53d6\u5f97\u8cc7\u6599",children:[]},{value:"\u522a\u9664\u8cc7\u6599",id:"\u522a\u9664\u8cc7\u6599",children:[]}],p={toc:u};function s(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u958b\u767c\u8005\u5de5\u5177 > Application > Storage > Local Storage"),(0,a.kt)("p",null,"\u53ea\u80fd\u4fdd\u7559\u5b57\u4e32\u7684\u683c\u5f0f"),(0,a.kt)("p",null,"\u901a\u5e38\u6703\u8f49\u6210 JSON (JSON \u672c\u8eab\u70ba\u5b57\u4e32\u683c\u5f0f)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"JSON.stringify(content);\n")),(0,a.kt)("h3",{id:"\u4fdd\u5b58\u8cc7\u6599"},"\u4fdd\u5b58\u8cc7\u6599"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'localStorage.setItem();\n\nlocalStorage.setItem("key", "value");\n')),(0,a.kt)("h3",{id:"\u53d6\u5f97\u8cc7\u6599"},"\u53d6\u5f97\u8cc7\u6599"),(0,a.kt)("p",null,"\u5982\u679c\u5b58\u53d6\u662f JSON\uff0c\u7528 JSON.parse \u8f49\u63db\uff0c\u5c1a\u672a\u5b58\u5132\u8cc7\u6599\u6703\u7522\u751f\u932f\u8aa4\uff0c\u9700\u8a2d\u5b9a\u7a7a\u9663\u5217"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'localStorage.getItem();\n\nlocalStorage.getItem("key");\n\nJSON.parse(localStorage.getItem("key") || []);\n')),(0,a.kt)("h3",{id:"\u522a\u9664\u8cc7\u6599"},"\u522a\u9664\u8cc7\u6599"),(0,a.kt)("p",null,"localStorage.removeItem('key')"))}s.isMDXComponent=!0}}]);