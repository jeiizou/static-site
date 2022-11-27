"use strict";(self.webpackChunk_jeiiz_wiki_site=self.webpackChunk_jeiiz_wiki_site||[]).push([[9370],{158:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>s});var r=n(6393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),s=a,k=m["".concat(p,".").concat(s)]||m[s]||d[s]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(9421),a=(n(6393),n(158));const o={},i=void 0,l={unversionedId:"\u524d\u7aef\u751f\u6001/\u5fae\u524d\u7aef/ModuleFederationinWebpack5",id:"\u524d\u7aef\u751f\u6001/\u5fae\u524d\u7aef/ModuleFederationinWebpack5",title:"ModuleFederationinWebpack5",description:"Module Federation in Webpack5",source:"@site/docs/\u524d\u7aef\u751f\u6001/\u5fae\u524d\u7aef/ModuleFederationinWebpack5.md",sourceDirName:"\u524d\u7aef\u751f\u6001/\u5fae\u524d\u7aef",slug:"/\u524d\u7aef\u751f\u6001/\u5fae\u524d\u7aef/ModuleFederationinWebpack5",permalink:"/docs/\u524d\u7aef\u751f\u6001/\u5fae\u524d\u7aef/ModuleFederationinWebpack5",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Taro-\u6846\u67b6\u539f\u7406",permalink:"/docs/\u524d\u7aef\u751f\u6001/\u5c0f\u7a0b\u5e8f/Taro-\u6846\u67b6\u539f\u7406"},next:{title:"\u4f18\u5316-CSS",permalink:"/docs/\u524d\u7aef\u751f\u6001/\u6027\u80fd\u4f18\u5316/\u4f18\u5316-CSS"}},p={},u=[{value:"Module Federation in Webpack5",id:"module-federation-in-webpack5",level:2},{value:"\u6982\u89c8",id:"\u6982\u89c8",level:3},{value:"Everygreen",id:"everygreen",level:3},{value:"Managed",id:"managed",level:3}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"module-federation-in-webpack5"},"Module Federation in Webpack5"),(0,a.kt)("p",null,"\u5728\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"Module Federation"),"\u7684\u65f6\u5019, \u6bcf\u4e2a\u5e94\u7528\u5757\u90fd\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u6784\u5efa, \u8fd9\u4e9b\u6784\u5efa\u90fd\u4f1a\u88ab\u7f16\u8bd1\u4e3a\u5bb9\u5668."),(0,a.kt)("p",null,"\u5bb9\u5668\u53ef\u4ee5\u88ab\u5176\u4ed6\u7684\u5e94\u7528\u6216\u8005\u5176\u4ed6\u7684\u5bb9\u5668 \u5f15\u7528"),(0,a.kt)("p",null,"\u4e00\u4e2a\u88ab\u5f15\u7528\u7684\u5bb9\u5668\u88ab\u79f0\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"remote"),", \u5f15\u7528\u8005\u88ab\u79f0\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"host"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"remote"),"\u66b4\u9732\u6a21\u5757\u7ed9",(0,a.kt)("inlineCode",{parentName:"p"},"host"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"host"),"\u5219\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e9b\u66b4\u9732\u7684\u6a21\u5757, \u8fd9\u4e9b\u6a21\u5757\u88ab\u79f0\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"remote \u6a21\u5757")),(0,a.kt)("h3",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,a.kt)("p",null,"\u8fd9\u91cc\u6709\u4e24\u4e2a\u6982\u5ff5: \u66b4\u9732\u6a21\u5757\u548c\u5171\u4eab\u6a21\u5757"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5bb9\u5668\u901a\u8fc7\u5f02\u6b65\u7684\u65b9\u5f0f\u66b4\u9732\u6a21\u5757. "),(0,a.kt)("li",{parentName:"ul"},"\u4f60\u5728\u4f7f\u7528\u5bb9\u5668\u7684\u6a21\u5757\u4e4b\u524d, \u8bf7\u6c42\u5bb9\u5668\u52a0\u8f7d\u4f60\u60f3\u8981\u7684\u6a21\u5757."),(0,a.kt)("li",{parentName:"ul"},"\u5f02\u6b65\u66b4\u9732\u6a21\u5757\u5141\u8bb8\u6784\u5efa\u7ed3\u679c\u5c06\u4e0d\u540c\u7684\u66b4\u9732\u6a21\u5757\u548c\u4ed6\u4eec\u7684\u4f9d\u8d56\u4e00\u8d77, \u653e\u5728\u4e0d\u540c\u7684\u6587\u4ef6\u4e2d, \u4ece\u800c\u5b9e\u73b0\u6309\u9700\u52a0\u8f7d"),(0,a.kt)("li",{parentName:"ul"},"\u5bb9\u5668\u4f9d\u65e7\u5c06\u4e0d\u540c\u7684\u6a21\u5757\u4e00\u8d77\u6253\u5305"),(0,a.kt)("li",{parentName:"ul"},"\u4f1a\u4f7f\u7528webpack\u7684chunk\u673a\u5236(vendor\u5206\u5272\u6216\u8005\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\u5305\u542b\u4e0d\u540c\u66b4\u9732\u6a21\u5757\u4e4b\u95f4\u7684\u516c\u5171\u4f9d\u8d56\u7b49). \u8fd9\u5c31\u80fd\u5e2e\u52a9\u6211\u4eec\u964d\u4f4e\u8bf7\u6c42\u6570\u91cf\u548c\u4e0b\u8f7d\u5927\u5c0f. ")),(0,a.kt)("p",null,"\u5bb9\u5668\u7684\u6d88\u8d39\u8005(\u5e94\u7528)\u9700\u8981\u80fd\u5904\u7406\u5f02\u6b65\u52a0\u8f7d\u66b4\u9732\u51fa\u6765\u7684\u6a21\u5757(\u540c\u6b65\u7684import\u4ee3\u7801\u8bed\u4e49\u4e0d\u53d8, \u8fd0\u884c\u65f6\u8f6c\u6362\u4e3a\u5f02\u6b65\u52a0\u8f7d)"),(0,a.kt)("p",null,"\u6bcf\u4e00\u4e2a\u90e8\u5206, \u5bb9\u5668, \u5e94\u7528\u90fd\u53ef\u4ee5\u5728\u5171\u4eab\u7684scope\u4e2d, \u6dfb\u52a0\u5171\u4eab\u6a21\u5757, \u540c\u65f6\u4e5f\u53ef\u4ee5\u4ece\u5171\u4eabscope\u4e2d, \u52a0\u8f7d\u5171\u4eab\u6a21\u5757. \u5171\u4eabscope\u5c06\u4f1a\u901a\u8fc7\u7ed9\u6bcf\u4e2a\u6d88\u8d39\u8005\u63d0\u4f9b\u7248\u672c\u8981\u6c42\u5185\u7684\u6700\u5927\u53ef\u7528\u7248\u672c\u7684\u65b9\u5f0f, \u5bf9\u5171\u4eab\u6a21\u5757\u8fdb\u884c\u5197\u4f59\u5254\u9664"),(0,a.kt)("h3",{id:"everygreen"},"Everygreen"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u603b\u662f\u4f7f\u7528\u6700\u65b0\u53d1\u5e03\u7248\u672c\u7684\u5bb9\u5668"),(0,a.kt)("li",{parentName:"ul"},"\u6574\u4e2a\u5e94\u7528\u65e0\u9700\u989d\u5916\u7684\u6d4b\u8bd5\u548c\u9884\u4e0a\u7ebf\u6b65\u9aa4")),(0,a.kt)("h3",{id:"managed"},"Managed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5e94\u7528\u5e94\u5f53\u9501\u5b9a\u6240\u6709\u4f7f\u7528\u7684\u5bb9\u5668\u7684\u7248\u672c"),(0,a.kt)("li",{parentName:"ul"},"\u5347\u7ea7\u5bb9\u5668\u7684\u7248\u672c\u9700\u8981\u4e00\u4e9b\u6b65\u9aa4"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u5e94\u7528\u754c\u522b\u5e94\u5f53\u6d4b\u8bd5\u7248\u672c\u5347\u7ea7"),(0,a.kt)("li",{parentName:"ul"},"\u5e94\u7528\u9700\u8981\u82e5\u5e72\u7684\u53d1\u5e03\u6b65\u9aa4")))}d.isMDXComponent=!0}}]);