(self.webpackChunknote=self.webpackChunknote||[]).push([[960],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(t),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8283:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=t(2122),o=t(9756),i=(t(7294),t(3905)),a=["components"],c={sidebar_position:3,custom_edit_url:null},l={unversionedId:"react/conditionalRendering",id:"react/conditionalRendering",isDocsHomePage:!1,title:"Conditional Rendering \u689d\u4ef6\u6e32\u67d3",description:"\u52a0\u4e0a\u689d\u4ef6",source:"@site/docs/react/conditionalRendering.md",sourceDirName:"react",slug:"/react/conditionalRendering",permalink:"/note/react/conditionalRendering",editUrl:null,version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"useEffect",permalink:"/note/react/useEffect"},next:{title:"Event",permalink:"/note/react/event"}},s=[{value:"1. Using an if\u2026else Statement",id:"1-using-an-ifelse-statement",children:[]},{value:"2.Using Ternary Operators \u4e09\u5143\u904b\u7b97\u5b50",id:"2using-ternary-operators-\u4e09\u5143\u904b\u7b97\u5b50",children:[]},{value:"3.Using Logical &amp;&amp; (Short Circuit Evaluation)",id:"3using-logical--short-circuit-evaluation",children:[]},{value:"\u62c6\u51fa\u4f86\u5beb",id:"\u62c6\u51fa\u4f86\u5beb",children:[]}],u={toc:s};function p(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u52a0\u4e0a\u689d\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  coins > 0 && <homeServiceSection />;\n}\n")),(0,i.kt)("h3",{id:"1-using-an-ifelse-statement"},"1. Using an if\u2026else Statement"),(0,i.kt)("p",null,"\u9801\u9762\u770b\u4e0d\u51fa\u7d50\u69cb \u908f\u8f2f\u6e32\u67d3\u7d81\u5f97\u770b\u6b7b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"let section;\nif (coin > 0) {\n  section = <HomeBannerSection>hi</HomeBannerSection>;\n} else if (coin === 0) {\n  section = <HomeImageSection />;\n} else {\n  section = <HomeImageSection />;\n}\n\n{\n  seciton;\n}\n")),(0,i.kt)("h3",{id:"2using-ternary-operators-\u4e09\u5143\u904b\u7b97\u5b50"},"2.Using Ternary Operators \u4e09\u5143\u904b\u7b97\u5b50"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"\n{\n  coins > 0 ? <HomeBannerSection/>: coins === 0 ? <HomeImageSection/>:coins < 0 ? <HomeTitleSection/>\n}\n\n")),(0,i.kt)("h3",{id:"3using-logical--short-circuit-evaluation"},"3.Using Logical && (Short Circuit Evaluation)"),(0,i.kt)("p",null,"\u62c6\u958b\u5beb"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  coins > 0 && <homeServiceSection />;\n}\n{\n  coins === 0 && <HomeImageSection />;\n}\n")),(0,i.kt)("h3",{id:"\u62c6\u51fa\u4f86\u5beb"},"\u62c6\u51fa\u4f86\u5beb"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"\n<HomeConditoinSection coins={coins}>\n\nconst HomeConditoinSection ={{coins}}=> {\n  if (coins > 0) {\n    return(\n      <HomeBannerSection/>\n    );\n  }\n    if (coins ==== 0) {\n    return(\n      <HomeImgSection/>\n    );\n  }\n\n  return <HomeTitleSection/>\n}\n")))}p.isMDXComponent=!0}}]);