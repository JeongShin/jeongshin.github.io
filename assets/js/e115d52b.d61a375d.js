"use strict";(self.webpackChunkreact_native_global_components_docs=self.webpackChunkreact_native_global_components_docs||[]).push([[2067],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>s});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=d(n),k=l,s=m["".concat(p,".").concat(k)]||m[k]||c[k]||r;return n?a.createElement(s,i(i({ref:e},u),{},{components:n})):a.createElement(s,i({ref:e},u))}));function s(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[m]="string"==typeof t?t:l,i[1]=o;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},793:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var a=n(7462),l=(n(7294),n(3905));const r=n.p+"assets/images/action-sheet-example-c1074211d1849884e38267e14887ca05.gif",i={},o="ActionSheet",p={unversionedId:"PopupUI/ActionSheet",id:"PopupUI/ActionSheet",title:"ActionSheet",description:"Overview",source:"@site/docs/PopupUI/ActionSheet.mdx",sourceDirName:"PopupUI",slug:"/PopupUI/ActionSheet",permalink:"/docs/PopupUI/ActionSheet",draft:!1,editUrl:"https://github.com/JeongShin/react-native-global-components/tree/main/packages/create-docusaurus/templates/shared/docs/PopupUI/ActionSheet.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FullScreenOverlay",permalink:"/docs/Layout/FullScreenOverlay"},next:{title:"AlertPopup",permalink:"/docs/PopupUI/AlertPopup"}},d={},u=[{value:"Overview",id:"overview",level:2},{value:"API Usage",id:"api-usage",level:2},{value:"Step 1. create popup",id:"step-1-create-popup",level:3},{value:"Step 2. register portal",id:"step-2-register-portal",level:3},{value:"Step 3. use anywhere",id:"step-3-use-anywhere",level:3},{value:"Props",id:"props",level:2},{value:"<code>title</code>",id:"title",level:3},{value:"<code>description</code>",id:"description",level:3},{value:"<code>actions</code>",id:"actions",level:3},{value:"<code>cancelAction</code>",id:"cancelaction",level:3},{value:"<code>itemHeight</code>",id:"itemheight",level:3},{value:"<code>headerHeight</code>",id:"headerheight",level:3},{value:"<code>cancelText</code>",id:"canceltext",level:3},{value:"<code>hideOnPressOverlay</code>",id:"hideonpressoverlay",level:3},{value:"<code>animation</code>",id:"animation",level:3},{value:"<code>gap</code>",id:"gap",level:3},{value:"<code>bottomInset</code>",id:"bottominset",level:3},{value:"<code>touchableOpacityProps</code>",id:"touchableopacityprops",level:3},{value:"<code>styles</code>",id:"styles",level:3},{value:"<code>onShown</code>",id:"onshown",level:3},{value:"<code>onHiddien</code>",id:"onhiddien",level:3}],m={toc:u};function c(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"actionsheet"},"ActionSheet"),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("div",{className:"sample-gif"},(0,l.kt)("img",{src:r,className:"sample-gif-img",alt:"action-sheet-example"})),(0,l.kt)("h2",{id:"api-usage"},"API Usage"),(0,l.kt)("h3",{id:"step-1-create-popup"},"Step 1. create popup"),(0,l.kt)("p",null,"Using Default"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ActionSheet.tsx"',title:'"ActionSheet.tsx"'},"import { ActionSheet, createPopup } from 'react-native-global-components';\nexport default createPopup(ActionSheet);\n")),(0,l.kt)("p",null,"or you can override default props"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ActionSheet.tsx"',title:'"ActionSheet.tsx"'},"import {\n  ActionSheet,\n  ActionSheetProps,\n  createPopup,\n} from 'react-native-global-components';\n\nconst styles: ActionSheetProps['styles'] = StyleSheet.create({\n  // override default styles\n});\n\nexport default createPopup((props: ActionSheetProps) => (\n  <ActionSheet {...props} styles={styles} />\n));\n")),(0,l.kt)("h3",{id:"step-2-register-portal"},"Step 2. register portal"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},"const App = () => {\n  return (\n    <NavigationContainer>\n      <RootNavigator />\n      <ActionSheet.Portal />\n    </NavigationContainer>\n  );\n};\n")),(0,l.kt)("h3",{id:"step-3-use-anywhere"},"Step 3. use anywhere"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"ActionSheet.show({\n  actions: [\n    {\n      text: 'Action Item 1',\n      color: 'purple',\n    },\n    {\n      text: 'Action Item 2',\n      color: 'green',\n    },\n  ],\n});\n")),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("h3",{id:"title"},(0,l.kt)("inlineCode",{parentName:"h3"},"title")),(0,l.kt)("p",null,"title text to show"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"NO")))),(0,l.kt)("h3",{id:"description"},(0,l.kt)("inlineCode",{parentName:"h3"},"description")),(0,l.kt)("p",null,"description text to show"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"NO")))),(0,l.kt)("h3",{id:"actions"},(0,l.kt)("inlineCode",{parentName:"h3"},"actions")),(0,l.kt)("p",null,"actions to show. see interface below"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ActionSheetActionItem[]"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"YES")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"interface ActionSheetActionItem {\n  text: string;\n  color?: string;\n  onPress?: (text: string) => void;\n  style?: StyleProp<TextStyle>;\n  testID?: string;\n}\n")),(0,l.kt)("h3",{id:"cancelaction"},(0,l.kt)("inlineCode",{parentName:"h3"},"cancelAction")),(0,l.kt)("p",null,"cancel button at bottom of action sheet"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ActionSheetActionItem"),(0,l.kt)("td",{parentName:"tr",align:null},"{ text: 'Cancel' }"),(0,l.kt)("td",{parentName:"tr",align:null},"NO")))),(0,l.kt)("h3",{id:"itemheight"},(0,l.kt)("inlineCode",{parentName:"h3"},"itemHeight")),(0,l.kt)("p",null,"height of action item"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"54"),(0,l.kt)("td",{parentName:"tr",align:null},"NO")))),(0,l.kt)("h3",{id:"headerheight"},(0,l.kt)("inlineCode",{parentName:"h3"},"headerHeight")),(0,l.kt)("p",null,"height of header content area with ",(0,l.kt)("inlineCode",{parentName:"p"},"title")," & ",(0,l.kt)("inlineCode",{parentName:"p"},"description")," text. use ",(0,l.kt)("inlineCode",{parentName:"p"},"Styles.header")," props below to edit styles."),(0,l.kt)("p",null,"default 80px if title or description props exists, unless 0px."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"80 or 0"),(0,l.kt)("td",{parentName:"tr",align:null},"NO")))),(0,l.kt)("h3",{id:"canceltext"},(0,l.kt)("inlineCode",{parentName:"h3"},"cancelText")),(0,l.kt)("p",null,"text of cancel button"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"'Cancel'"),(0,l.kt)("td",{parentName:"tr",align:null},"NO")))),(0,l.kt)("h3",{id:"hideonpressoverlay"},(0,l.kt)("inlineCode",{parentName:"h3"},"hideOnPressOverlay")),(0,l.kt)("p",null,"dismissable on press dim overlay"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"NO")))),(0,l.kt)("h3",{id:"animation"},(0,l.kt)("inlineCode",{parentName:"h3"},"animation")),(0,l.kt)("p",null,"custom ",(0,l.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-reanimated/docs/api/animations/withTiming/"},"withTimingConfig")," of ActionSheet sliding animation"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"WithTimingConfig"),(0,l.kt)("td",{parentName:"tr",align:null},"{ duration: 300,easing: Easing.bezier(0.25, 0.1, 0.25, 1) }"),(0,l.kt)("td",{parentName:"tr",align:null},"NO")))),(0,l.kt)("h3",{id:"gap"},(0,l.kt)("inlineCode",{parentName:"h3"},"gap")),(0,l.kt)("p",null,"gap between action item group and cancel button."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"NO")))),(0,l.kt)("h3",{id:"bottominset"},(0,l.kt)("inlineCode",{parentName:"h3"},"bottomInset")),(0,l.kt)("p",null,"absolute bottom position of ActionSheet"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"NO")))),(0,l.kt)("h3",{id:"touchableopacityprops"},(0,l.kt)("inlineCode",{parentName:"h3"},"touchableOpacityProps")),(0,l.kt)("p",null,"touchableOpacity props on action button to override default settings"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TouchableOpacityProps"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"NO")))),(0,l.kt)("h3",{id:"styles"},(0,l.kt)("inlineCode",{parentName:"h3"},"styles")),(0,l.kt)("p",null,"style object to override default style"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Styles"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"NO")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"interface Styles {\n  title?: StyleProp<TextStyle>;\n  description?: StyleProp<TextStyle>;\n  header?: StyleProp<ViewStyle>;\n  actionGroup?: StyleProp<ViewStyle>;\n  action?: StyleProp<ViewStyle>;\n  cancelAction?: StyleProp<ViewStyle>;\n  container?: StyleProp<ViewStyle>;\n  divider?: StyleProp<ViewStyle>;\n}\n")),(0,l.kt)("h3",{id:"onshown"},(0,l.kt)("inlineCode",{parentName:"h3"},"onShown")),(0,l.kt)("p",null,"callback function on global component show animation ended"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Function"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"NO")))),(0,l.kt)("h3",{id:"onhiddien"},(0,l.kt)("inlineCode",{parentName:"h3"},"onHiddien")),(0,l.kt)("p",null,"callback function on global component hide animation ended"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Function"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"NO")))))}c.isMDXComponent=!0}}]);