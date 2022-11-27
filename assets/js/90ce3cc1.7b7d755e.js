"use strict";(self.webpackChunk_jeiiz_wiki_site=self.webpackChunk_jeiiz_wiki_site||[]).push([[455],{158:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(6393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,d=s["".concat(p,".").concat(m)]||s[m]||k[m]||i;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4157:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(9421),a=(n(6393),n(158));const i={},l="\u539f\u7406-TreeShaking",o={unversionedId:"\u524d\u7aef\u751f\u6001/\u524d\u7aef\u5de5\u7a0b/\u539f\u7406-TreeShaking",id:"\u524d\u7aef\u751f\u6001/\u524d\u7aef\u5de5\u7a0b/\u539f\u7406-TreeShaking",title:"\u539f\u7406-TreeShaking",description:"Tree Shaking\u7684\u672c\u8d28\u662f\u6d88\u9664\u65e0\u7528\u7684JS\u4ee3\u7801. \u65e0\u7528\u4ee3\u7801\u6d88\u9664\u5e7f\u6cdb\u7684\u5b58\u5728\u4e8e\u4f20\u7edf\u7f16\u7a0b\u8bed\u8a00\u7f16\u8bd1\u5668\u4e2d. \u7f16\u8bd1\u5668\u53ef\u4ee5\u5224\u65ad\u51fa\u67d0\u4e9b\u4ee3\u7801\u4e0d\u5f71\u54cd\u8f93\u51fa, \u7136\u540e\u6d88\u9664\u8fd9\u4e9b\u4ee3\u7801, \u79f0\u4e3aDCE(Dead Code Elimination).",source:"@site/docs/\u524d\u7aef\u751f\u6001/\u524d\u7aef\u5de5\u7a0b/\u539f\u7406-TreeShaking.md",sourceDirName:"\u524d\u7aef\u751f\u6001/\u524d\u7aef\u5de5\u7a0b",slug:"/\u524d\u7aef\u751f\u6001/\u524d\u7aef\u5de5\u7a0b/\u539f\u7406-TreeShaking",permalink:"/docs/\u524d\u7aef\u751f\u6001/\u524d\u7aef\u5de5\u7a0b/\u539f\u7406-TreeShaking",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u539f\u7406-SourceMap",permalink:"/docs/\u524d\u7aef\u751f\u6001/\u524d\u7aef\u5de5\u7a0b/\u539f\u7406-SourceMap"},next:{title:"\u6742\u9879-\u524d\u7aef\u6a21\u5757\u5316",permalink:"/docs/\u524d\u7aef\u751f\u6001/\u524d\u7aef\u5de5\u7a0b/\u6742\u9879-\u524d\u7aef\u6a21\u5757\u5316"}},p={},u=[{value:"DCE\u6d88\u9664",id:"dce\u6d88\u9664",level:2},{value:"Tree Shaking",id:"tree-shaking",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],c={toc:u};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u539f\u7406-treeshaking"},"\u539f\u7406-TreeShaking"),(0,a.kt)("p",null,"Tree Shaking\u7684\u672c\u8d28\u662f\u6d88\u9664\u65e0\u7528\u7684JS\u4ee3\u7801. \u65e0\u7528\u4ee3\u7801\u6d88\u9664\u5e7f\u6cdb\u7684\u5b58\u5728\u4e8e\u4f20\u7edf\u7f16\u7a0b\u8bed\u8a00\u7f16\u8bd1\u5668\u4e2d. \u7f16\u8bd1\u5668\u53ef\u4ee5\u5224\u65ad\u51fa\u67d0\u4e9b\u4ee3\u7801\u4e0d\u5f71\u54cd\u8f93\u51fa, \u7136\u540e\u6d88\u9664\u8fd9\u4e9b\u4ee3\u7801, \u79f0\u4e3aDCE(Dead Code Elimination)."),(0,a.kt)("p",null,"Tree-Shaking \u662fDCE\u7684\u4e00\u79cd\u65b0\u7684\u5b9e\u73b0, JS\u548c\u4f20\u7edf\u7f16\u7a0b\u8bed\u8a00\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e, js\u7edd\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u9700\u8981\u901a\u8fc7\u7f51\u7edc\u8fdb\u884c\u52a0\u8f7d, \u7136\u540e\u6267\u884c, \u52a0\u8f7d\u7684\u6587\u4ef6\u5927\u5c0f\u8d8a\u5c0f, \u6574\u4f53\u7684\u6267\u884c\u65f6\u95f4\u66f4\u77ed, \u6240\u4ee5\u53bb\u9664\u65e0\u7528\u4ee3\u7801\u4ee5\u51cf\u5c11\u6587\u4ef6\u4f53\u79ef, \u5bf9js\u6765\u8bf4\u66f4\u52a0\u6709\u610f\u4e49."),(0,a.kt)("p",null,"Tree-Shaking \u548c\u4f20\u7edf\u7684DCE\u53c8\u6709\u4e0d\u540c\u4e4b\u5904, \u4f20\u7edf\u7684DCE\u6d88\u706d\u4e0d\u53ef\u80fd\u6267\u884c\u7684\u4ee3\u7801, \u800cTree-shaking\u66f4\u5173\u6ce8\u6d88\u9664\u6ca1\u6709\u7528\u5230\u7684\u4ee3\u7801."),(0,a.kt)("h2",{id:"dce\u6d88\u9664"},"DCE\u6d88\u9664"),(0,a.kt)("p",null,"Dead Code \u4e00\u822c\u5177\u6709\u8fd9\u4e9b\u7279\u70b9:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u4e0d\u4f1a\u88ab\u6267\u884c, \u4e0d\u53ef\u5230\u8fbe"),(0,a.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u6267\u884c\u7684\u7ed3\u679c\u4e0d\u4f1a\u88ab\u7528\u5230"),(0,a.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u53ea\u4f1a\u5f71\u54cd\u6b7b\u4ea1\u53d8\u91cf(\u53ea\u5199\u4e0d\u8bfb)")),(0,a.kt)("p",null,"\u4f20\u7edf\u7684\u7f16\u8bd1\u8bed\u8a00, \u90fd\u662f\u7531\u7f16\u8bd1\u5668\u5c06Dead Code\u4eceAST\u4e2d\u5220\u9664, \u5728JS\u4e2d, \u7531uglify\u5b8c\u6210\u5bf9js\u7684DCE."),(0,a.kt)("h2",{id:"tree-shaking"},"Tree Shaking"),(0,a.kt)("p",null,"tree-shaking \u66f4\u52a0\u5173\u6ce8\u4e8e\u65e0\u7528\u6a21\u5757\u7684\u6d88\u9664, \u6d88\u9664\u90a3\u4e9b\u5f15\u7528\u4e86\u4f46\u5e76\u6ca1\u6709\u88ab\u4f7f\u7528\u7684\u6a21\u5757."),(0,a.kt)("p",null,"\u5176\u6d88\u9664\u539f\u7406\u662f\u4f9d\u8d56\u4e8eES6\u7684\u6a21\u5757\u7279\u6027\u7684. "),(0,a.kt)("p",null,"ESM\u7684\u7279\u70b9:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ea\u80fd\u4f5c\u4e3a\u6a21\u5757\u9876\u5c42\u7684\u8bed\u53e5\u51fa\u73b0"),(0,a.kt)("li",{parentName:"ul"},"import\u7684\u6a21\u5757\u53ea\u80fd\u662f\u5b57\u7b26\u4e32\u5e38\u91cf"),(0,a.kt)("li",{parentName:"ul"},"import binding\u662fimmutable\u7684")),(0,a.kt)("p",null,"ES6\u6a21\u5757\u4f9d\u8d56\u5173\u7cfb\u662f\u786e\u5b9a\u7684, \u548c\u8fd0\u884c\u65f6\u7684\u72b6\u6001\u65e0\u5173, \u53ef\u4ee5\u8fdb\u884c\u53ef\u9760\u7684\u9759\u6001\u5206\u6790, \u8fd9\u5c31\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"tree-shaking"),"\u7684\u57fa\u7840. "),(0,a.kt)("p",null,"\u6240\u8c13\u7684\u9759\u6001\u5206\u6790\u5c31\u662f\u4e0d\u6267\u884c\u4ee3\u7801, \u4ece\u5b57\u9762\u91cf\u4e0a\u5bf9\u4ee3\u7801\u8fdb\u884c\u5206\u6790, ES6\u4e4b\u524d\u7684\u6a21\u5757\u5316, \u6bd4\u5982\u6211\u4eec\u52a8\u6001\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"require"),"\u4e00\u4e2a\u6a21\u5757, \u53ea\u6709\u6267\u884c\u4e4b\u540e\u624d\u77e5\u9053\u5f15\u7528\u7684\u662f\u4ec0\u4e48\u6a21\u5757, \u5c31\u65e0\u6cd5\u901a\u8fc7\u9759\u6001\u5206\u6790\u53bb\u8fdb\u884c\u4f18\u5316. "),(0,a.kt)("p",null,"\u8fd9\u662fES6\u6a21\u5757\u8bbe\u8ba1\u65f6\u5c31\u8003\u8651\u8fdb\u53bb\u7684, \u4e5f\u662f\u4e3a\u4ec0\u4e48\u6ca1\u6709\u76f4\u63a5\u91c7\u7528CommonJS. "),(0,a.kt)("p",null,"\u8fd9\u90e8\u5206\u7684\u529f\u80fd\u5728rollup\u548cwebpack\u4e2d\u90fd\u5f97\u5230\u4e86\u6bd4\u8f83\u597d\u7684\u652f\u6301."),(0,a.kt)("p",null,"\u4e0d\u8fc7\u8981\u6ce8\u610f, ",(0,a.kt)("strong",{parentName:"p"},"\u6ca1\u6709\u7528\u5230\u7684",(0,a.kt)("inlineCode",{parentName:"strong"},"import"),"\u662f\u4e0d\u4f1a\u88ab\u6d88\u9664\u7684.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rollup"),"\u53ea\u5904\u7406\u51fd\u6570\u548c\u9876\u5c42\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"import/export"),"\u53d8\u91cf, \u4e0d\u80fd\u628a\u6ca1\u6709\u7528\u5230\u7684\u7c7b\u7684\u65b9\u6cd5\u6d88\u9664\u6389"),(0,a.kt)("li",{parentName:"ul"},"js\u52a8\u6001\u8bed\u8a00\u7684\u7279\u6027\u4f7f\u5f97\u9759\u6001\u5206\u6790\u6bd4\u8f83\u56f0\u96be"),(0,a.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u53ef\u80fd\u4f1a\u5b58\u5728\u526f\u4f5c\u7528, \u4e0d\u80fd\u5f71\u54cd\u6267\u884c")),(0,a.kt)("p",null,"\u6bd4\u5982\u4e0b\u9762\u8fd9\u4e2a\u6a21\u5757:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function Menu() {\n}\n\nMenu.prototype.show = function() {\n}\n\nArray.prototype.unique = function() {\n    // \u5c06 array \u4e2d\u7684\u91cd\u590d\u5143\u7d20\u53bb\u9664\n}\n\nexport default Menu;\n")),(0,a.kt)("p",null,"\u5728\u5176\u4ed6\u6587\u4ef6\u4e2d\u5f15\u5165, \u5373\u4fbf\u4e0d\u4f7f\u7528, \u4e5f\u4e0d\u80fd\u53bb\u6d88\u9664. "),(0,a.kt)("p",null,"\u603b\u7684\u6765\u8bf4, ",(0,a.kt)("inlineCode",{parentName:"p"},"tree-shaking"),"\u5bf9\u51fd\u6570\u7684\u6548\u679c\u6bd4\u8f83\u597d. \u56e0\u4e3a\u51fd\u6570\u7684\u526f\u4f5c\u7528\u76f8\u5bf9\u6bd4\u8f83\u5c11, \u9876\u5c42\u51fd\u6570\u76f8\u5bf9\u6765\u8bf4\u66f4\u52a0\u5bb9\u6613\u5206\u6790, \u52a0\u4e0ababel\u9ed8\u8ba4\u662f\u542f\u7528\u4e25\u683c\u6a21\u5f0f\u7684, \u51cf\u5c11\u4e86\u9876\u5c42\u51fd\u6570\u7684\u52a8\u6001\u8bbf\u95ee\u7684\u65b9\u5f0f, \u4e5f\u4f7f\u5f97\u5206\u6790\u66f4\u52a0\u5bb9\u6613. "),(0,a.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844903544756109319"},"Tree-Shaking\u6027\u80fd\u4f18\u5316\u5b9e\u8df5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/febobo/web-interview/issues/67"},"\u8bf4\u8bf4Vue 3.0\u4e2dTreeshaking\u7279\u6027\uff1f"))))}k.isMDXComponent=!0}}]);