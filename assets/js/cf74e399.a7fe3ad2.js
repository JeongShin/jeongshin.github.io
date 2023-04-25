"use strict";(self.webpackChunkreact_native_global_components_docs=self.webpackChunkreact_native_global_components_docs||[]).push([[616],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),u=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(i.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=u(n),k=r,c=s["".concat(i,".").concat(k)]||s[k]||m[k]||l;return n?a.createElement(c,p(p({ref:e},d),{},{components:n})):a.createElement(c,p({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,p=new Array(l);p[0]=k;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o[s]="string"==typeof t?t:r,p[1]=o;for(var u=2;u<l;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8175:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>i,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l=n.p+"assets/images/input-popup-example-41dfa3e631b3ea2ef1f4776a935b3f6c.gif",p={},o="InputPopup",i={unversionedId:"UI/InputPopupUI",id:"UI/InputPopupUI",title:"InputPopup",description:"Overview",source:"@site/docs/UI/InputPopupUI.mdx",sourceDirName:"UI",slug:"/UI/InputPopupUI",permalink:"/docs/UI/InputPopupUI",draft:!1,editUrl:"https://github.com/JeongShin/react-native-global-components/tree/main/packages/create-docusaurus/templates/shared/docs/UI/InputPopupUI.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AlertPopupUI",permalink:"/docs/UI/AlertPopupUI"},next:{title:"SimpleSnackbarUI",permalink:"/docs/UI/SimpleSnackbarUI"}},u={},d=[{value:"Overview",id:"overview",level:2},{value:"API Usage",id:"api-usage",level:2},{value:"Step 1. create popup",id:"step-1-create-popup",level:3},{value:"Step 2. register portal",id:"step-2-register-portal",level:3},{value:"Step 3. use anywhere",id:"step-3-use-anywhere",level:3},{value:"Props",id:"props",level:2},{value:"<code>title</code>",id:"title",level:3},{value:"<code>description</code>",id:"description",level:3},{value:"<code>inputProps</code>",id:"inputprops",level:3},{value:"<code>buttons</code>",id:"buttons",level:3},{value:"<code>renderButtons</code>",id:"renderbuttons",level:3},{value:"<code>fadeAnimationConfig</code>",id:"fadeanimationconfig",level:3},{value:"<code>androidBackBehavior</code>",id:"androidbackbehavior",level:3},{value:"<code>KeyboardAvoidingLayoutProps</code>",id:"keyboardavoidinglayoutprops",level:3},{value:"<code>styles</code>",id:"styles",level:3}],s={toc:d};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"inputpopup"},"InputPopup"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("div",{className:"sample-gif"},(0,r.kt)("img",{src:l,className:"sample-gif-img",alt:"sample-alert-popup"})),(0,r.kt)("h2",{id:"api-usage"},"API Usage"),(0,r.kt)("h3",{id:"step-1-create-popup"},"Step 1. create popup"),(0,r.kt)("p",null,"Using Default"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="InputPopup.tsx"',title:'"InputPopup.tsx"'},"import { InputPopupUI, createPopup } from 'react-native-global-components';\nexport default createPopup(InputPopupUI);\n")),(0,r.kt)("p",null,"or you can override default props"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="InputPopup.tsx"',title:'"InputPopup.tsx"'},"import {\n  InputPopupUI,\n  InputPopupProps,\n  createPopup,\n} from 'react-native-global-components';\n\nconst styles: InputPopupProps['styles'] = StyleSheet.create({\n  // override default styles\n});\n\nexport default createPopup((props: InputPopupProps) => (\n  <InputPopupUI {...props} styles={styles} />\n));\n")),(0,r.kt)("h3",{id:"step-2-register-portal"},"Step 2. register portal"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},"const App = () => {\n  return (\n    <NavigationContainer>\n      <RootNavigator />\n      <InputPopup.Portal />\n    </NavigationContainer>\n  );\n};\n")),(0,r.kt)("h3",{id:"step-3-use-anywhere"},"Step 3. use anywhere"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"InputPopup.show({\n  title: 'Hello\ud83d\udc4b\ud83c\udffb',\n  description: 'Please enter your name \ud83e\udd70',\n  inputProps: { value: 'initial value' },\n  buttons: [\n    { title: 'Cancel' },\n    {\n      title: 'Enter',\n      onPress: (text) => text && setText(text),\n    },\n  ],\n});\n")),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("h3",{id:"title"},(0,r.kt)("inlineCode",{parentName:"h3"},"title")),(0,r.kt)("p",null,"title to show"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"NO")))),(0,r.kt)("h3",{id:"description"},(0,r.kt)("inlineCode",{parentName:"h3"},"description")),(0,r.kt)("p",null,"description text to show below title"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"NO")))),(0,r.kt)("h3",{id:"inputprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"inputProps")),(0,r.kt)("p",null,"react native text input props"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TextInputProps"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"NO")))),(0,r.kt)("h3",{id:"buttons"},(0,r.kt)("inlineCode",{parentName:"h3"},"buttons")),(0,r.kt)("p",null,"react native button props with overriding ",(0,r.kt)("inlineCode",{parentName:"p"},"onPress"),". use ",(0,r.kt)("inlineCode",{parentName:"p"},"renderButtons")," for custom button UI."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"InputPopupButtonProps"),(0,r.kt)("td",{parentName:"tr",align:null},"[{ title: 'Cancel', color: 'black' },{ title: 'Confirm' },]"),(0,r.kt)("td",{parentName:"tr",align:null},"NO")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// ButtonProps from react native\ninterface InputPopupButtonProps extends Omit<ButtonProps, 'onPress'> {\n  onPress?: (text?: string) => void;\n}\n")),(0,r.kt)("h3",{id:"renderbuttons"},(0,r.kt)("inlineCode",{parentName:"h3"},"renderButtons")),(0,r.kt)("p",null,"render function for Headless button UI. ",(0,r.kt)("inlineCode",{parentName:"p"},"buttons")," will be ignored when ",(0,r.kt)("inlineCode",{parentName:"p"},"renderButtons")," provided."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"(text?: string) => ReactElement"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"NO")))),(0,r.kt)("h3",{id:"fadeanimationconfig"},(0,r.kt)("inlineCode",{parentName:"h3"},"fadeAnimationConfig")),(0,r.kt)("p",null,"fade animation configuration. see ",(0,r.kt)("a",{parentName:"p",href:"/docs/hooks/useFadeAnimationStyle"},"useFadeAnimationStyle"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FadeAnimationConfigs"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"NO")))),(0,r.kt)("h3",{id:"androidbackbehavior"},(0,r.kt)("inlineCode",{parentName:"h3"},"androidBackBehavior")),(0,r.kt)("p",null,"behavior on android hardware back button pressed. hide component for default."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'hide' or 'none'"),(0,r.kt)("td",{parentName:"tr",align:null},"'hide'"),(0,r.kt)("td",{parentName:"tr",align:null},"NO")))),(0,r.kt)("h3",{id:"keyboardavoidinglayoutprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"KeyboardAvoidingLayoutProps")),(0,r.kt)("p",null,"keyboard related props overriding react native ",(0,r.kt)("inlineCode",{parentName:"p"},"KeyboardAvoidingViewProps")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KeyboardAvoidingLayoutProps"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"NO")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface KeyboardAvoidingLayoutProps extends KeyboardAvoidingViewProps {\n  bottomInset?: number;\n  topInset?: number;\n  children?: React.ReactNode;\n}\n")),(0,r.kt)("h3",{id:"styles"},(0,r.kt)("inlineCode",{parentName:"h3"},"styles")),(0,r.kt)("p",null,"style object to override default style"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Styles"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"NO")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type Styles = {\n  title?: StyleProp<TextStyle>;\n  input?: StyleProp<TextStyle>;\n  description?: StyleProp<TextStyle>;\n  container?: StyleProp<ViewStyle>;\n  buttonContainer?: StyleProp<ViewStyle>;\n};\n")))}m.isMDXComponent=!0}}]);