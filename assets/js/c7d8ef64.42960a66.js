"use strict";(self.webpackChunkreact_native_global_components_docs=self.webpackChunkreact_native_global_components_docs||[]).push([[837],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,y=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(y,a(a({ref:t},c),{},{components:n})):r.createElement(y,a({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3497:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={},a="useSlideAnimationStyle",l={unversionedId:"hooks/useSlideAnimationStyle",id:"hooks/useSlideAnimationStyle",title:"useSlideAnimationStyle",description:"Overview",source:"@site/docs/hooks/useSlideAnimationStyle.md",sourceDirName:"hooks",slug:"/hooks/useSlideAnimationStyle",permalink:"/docs/hooks/useSlideAnimationStyle",draft:!1,editUrl:"https://github.com/JeongShin/react-native-global-components/tree/main/packages/create-docusaurus/templates/shared/docs/hooks/useSlideAnimationStyle.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"usePopupContext \u2b50\ufe0f",permalink:"/docs/hooks/usePopupContext"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Type",id:"type",level:2},{value:"Example",id:"example",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"useslideanimationstyle"},"useSlideAnimationStyle"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useSlideAnimationStyle")," is translateY animation hooks using Reanimated"),(0,o.kt)("h2",{id:"type"},"Type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface SlideAnimationConfig {\n  animationConfig?: WithTimingConfig;\n  translateY?: number; // how much it should animate translateY from original position (default: 30)\n  onHidden?: () => void;\n  onShown?: () => void;\n}\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="MyCustomUI.tsx"',title:'"MyCustomUI.tsx"'},"import Animated from 'react-native-reanimated';\nimport { useSlideAnimationStyle } from 'react-native-global-components';\n\ninterface MyCustomUIProps {\n  //\n}\n\nconst MyCustomUI: React.FC<MyCustomUIProps> = () => {\n  const { style: slide } = useSlideAnimationStyle({\n    translateY: 30,\n  });\n\n  return <Animated.View style={[slide, { position: 'absolute', bottom: 0 }]} />;\n};\n")),(0,o.kt)("p",null,"then"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"translateY animates 30 to 0 on mount"),(0,o.kt)("li",{parentName:"ul"},"translateY animates 0 to 30 on unmount")))}p.isMDXComponent=!0}}]);