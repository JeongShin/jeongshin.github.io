"use strict";(self.webpackChunkreact_native_global_components_docs=self.webpackChunkreact_native_global_components_docs||[]).push([[788],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,y=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},301:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i="useFadeAnimationStyle",l={unversionedId:"hooks/useFadeAnimationStyle",id:"hooks/useFadeAnimationStyle",title:"useFadeAnimationStyle",description:"Overview",source:"@site/docs/hooks/useFadeAnimationStyle.md",sourceDirName:"hooks",slug:"/hooks/useFadeAnimationStyle",permalink:"/docs/hooks/useFadeAnimationStyle",draft:!1,editUrl:"https://github.com/JeongShin/react-native-global-components/tree/main/packages/create-docusaurus/templates/shared/docs/hooks/useFadeAnimationStyle.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SimpleSnackbarUI",permalink:"/docs/UIs/SimpleSnackbarUI"},next:{title:"useHideOnAndroidBackPress",permalink:"/docs/hooks/useHideOnAndroidBackPress"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Type",id:"type",level:2},{value:"Example",id:"example",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usefadeanimationstyle"},"useFadeAnimationStyle"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useFadeAnimationStyle")," is opacity animation hooks using Reanimated"),(0,a.kt)("h2",{id:"type"},"Type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface FadeAnimationConfigs {\n  minOpacity?: number;\n  maxOpacity?: number;\n  animationConfig?: WithTimingConfig;\n}\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="MyCustomUI.tsx"',title:'"MyCustomUI.tsx"'},"import Animated from 'react-native-reanimated';\nimport { useFadeAnimationStyle } from 'react-native-global-components';\n\nconst MyCustomUI = () => {\n  const { style: fade } = useFadeAnimationStyle({\n    minOpacity: 0.3,\n    maxOpacity: 1,\n  });\n\n  return <Animated.View style={[fade, { backgroundColor: '#000000' }]} />;\n};\n")),(0,a.kt)("p",null,"then"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"opacity animates 0.3 to 1 on mount"),(0,a.kt)("li",{parentName:"ul"},"opacity animates 1 to 0.3 on unmount")))}p.isMDXComponent=!0}}]);