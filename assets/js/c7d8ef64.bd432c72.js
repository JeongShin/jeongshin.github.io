"use strict";(self.webpackChunkreact_native_global_components_docs=self.webpackChunkreact_native_global_components_docs||[]).push([[837],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,y=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?o.createElement(y,i(i({ref:t},c),{},{components:n})):o.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3497:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const a={},i="useSlideAnimationStyle",l={unversionedId:"hooks/useSlideAnimationStyle",id:"hooks/useSlideAnimationStyle",title:"useSlideAnimationStyle",description:"Overview",source:"@site/docs/hooks/useSlideAnimationStyle.md",sourceDirName:"hooks",slug:"/hooks/useSlideAnimationStyle",permalink:"/docs/hooks/useSlideAnimationStyle",draft:!1,editUrl:"https://github.com/JeongShin/react-native-global-components/tree/main/packages/create-docusaurus/templates/shared/docs/hooks/useSlideAnimationStyle.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useGlobalComponentState",permalink:"/docs/hooks/useGlobalComponentState"},next:{title:"useUpdateGlobalComponentState",permalink:"/docs/hooks/useUpdateGlobalComponentState"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Type",id:"type",level:2},{value:"Example",id:"example",level:2}],c={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"useslideanimationstyle"},"useSlideAnimationStyle"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useSlideAnimationStyle")," is translateY animation hooks using Reanimated"),(0,r.kt)("h2",{id:"type"},"Type"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface SlideAnimationConfig {\n  animationConfig?: WithTimingConfig;\n  translateY?: number; // how much it should animate translateY from original position (default: 30)\n  onHidden?: () => void;\n  onShown?: () => void;\n}\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="MyCustomUI.tsx"',title:'"MyCustomUI.tsx"'},"import Animated from 'react-native-reanimated';\nimport { useSlideAnimationStyle } from 'react-native-global-components';\n\ninterface MyCustomUIProps {\n  onShown: () => void;\n  onHidden: () => void;\n}\n\nconst MyCustomUI: React.FC<MyCustomUIProps> = ({ onShown, onHidden }) => {\n  const { style: slide } = useSlideAnimationStyle({\n    translateY: 100,\n    onShown,\n    onHidden,\n  });\n\n  return <Animated.View style={[slide, { position: 'absolute', bottom: 0 }]} />;\n};\n")),(0,r.kt)("p",null,"then"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"translateY animates 30 to 0 on mount"),(0,r.kt)("li",{parentName:"ul"},"translateY animates 0 to 30 on unmount")))}m.isMDXComponent=!0}}]);