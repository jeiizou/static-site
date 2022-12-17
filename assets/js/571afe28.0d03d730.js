"use strict";(self.webpackChunk_jeiiz_wiki_site=self.webpackChunk_jeiiz_wiki_site||[]).push([[6460],{50158:(e,t,l)=>{l.d(t,{Zo:()=>m,kt:()=>s});var n=l(46393);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function p(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var u=n.createContext({}),k=function(e){var t=n.useContext(u),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},m=function(e){var t=k(e.components);return n.createElement(u.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=k(l),s=a,g=d["".concat(u,".").concat(s)]||d[s]||o[s]||r;return l?n.createElement(g,i(i({ref:t},m),{},{components:l})):n.createElement(g,i({ref:t},m))}));function s(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,i=new Array(r);i[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var k=2;k<r;k++)i[k]=l[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}d.displayName="MDXCreateElement"},87219:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>p,toc:()=>k});var n=l(39421),a=(l(46393),l(50158));const r={},i="WebGL-\u57fa\u7840\u6982\u5ff5",p={unversionedId:"\u56fe\u5f62\u5b66/WebGL-\u57fa\u7840\u6982\u5ff5",id:"\u56fe\u5f62\u5b66/WebGL-\u57fa\u7840\u6982\u5ff5",title:"WebGL-\u57fa\u7840\u6982\u5ff5",description:"\u7740\u8272\u5668(Shader)",source:"@site/docs/07-\u56fe\u5f62\u5b66/WebGL-\u57fa\u7840\u6982\u5ff5.md",sourceDirName:"07-\u56fe\u5f62\u5b66",slug:"/\u56fe\u5f62\u5b66/WebGL-\u57fa\u7840\u6982\u5ff5",permalink:"/docs/\u56fe\u5f62\u5b66/WebGL-\u57fa\u7840\u6982\u5ff5",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WebGL-GLSL\u8bed\u6cd5",permalink:"/docs/\u56fe\u5f62\u5b66/WebGL-GLSL\u8bed\u6cd5"},next:{title:"WebGL-\u5e38\u7528\u51fd\u6570",permalink:"/docs/\u56fe\u5f62\u5b66/WebGL-\u5e38\u7528\u51fd\u6570"}},u={},k=[{value:"\u7740\u8272\u5668(Shader)",id:"\u7740\u8272\u5668shader",level:2},{value:"\u5750\u6807\u7cfb\u7edf",id:"\u5750\u6807\u7cfb\u7edf",level:2},{value:"\u7cbe\u5ea6\u9650\u5b9a\u8bcd(precision qualifier)",id:"\u7cbe\u5ea6\u9650\u5b9a\u8bcdprecision-qualifier",level:2},{value:"\u7f13\u51b2\u533a\u5bf9\u8c61(buffer object)",id:"\u7f13\u51b2\u533a\u5bf9\u8c61buffer-object",level:2},{value:"\u7c7b\u578b\u5316\u6570\u7ec4",id:"\u7c7b\u578b\u5316\u6570\u7ec4",level:2},{value:"\u9876\u70b9\u5230\u7247\u5143: \u56fe\u5f62\u88c5\u914d\u548c\u5149\u6805\u5316",id:"\u9876\u70b9\u5230\u7247\u5143-\u56fe\u5f62\u88c5\u914d\u548c\u5149\u6805\u5316",level:2},{value:"\u7eb9\u7406",id:"\u7eb9\u7406",level:2},{value:"\u7eb9\u7406\u5750\u6807",id:"\u7eb9\u7406\u5750\u6807",level:3},{value:"\u7eb9\u7406\u5355\u5143(texture unit)",id:"\u7eb9\u7406\u5355\u5143texture-unit",level:3},{value:"\u6d41\u660e",id:"\u6d41\u660e",level:2},{value:"\u89c6\u70b9\u548c\u89c6\u8ddd",id:"\u89c6\u70b9\u548c\u89c6\u8ddd",level:2},{value:"\u89c2\u5bdf\u70b9, \u76ee\u6807\u70b9\u548c\u4e0a\u65b9\u5411",id:"\u89c2\u5bdf\u70b9-\u76ee\u6807\u70b9\u548c\u4e0a\u65b9\u5411",level:2},{value:"\u53ef\u89c6\u8303\u56f4",id:"\u53ef\u89c6\u8303\u56f4",level:2},{value:"\u6df1\u5ea6\u7f13\u51b2\u533a",id:"\u6df1\u5ea6\u7f13\u51b2\u533a",level:2},{value:"\u6df1\u5ea6\u51b2\u7a81",id:"\u6df1\u5ea6\u51b2\u7a81",level:2},{value:"\u53cd\u5c04\u7c7b\u578b",id:"\u53cd\u5c04\u7c7b\u578b",level:2},{value:"\u5149\u6e90\u7c7b\u578b",id:"\u5149\u6e90\u7c7b\u578b",level:2},{value:"\u6cd5\u7ebf: \u8868\u9762\u7684\u671d\u5411",id:"\u6cd5\u7ebf-\u8868\u9762\u7684\u671d\u5411",level:2}],m={toc:k};function o(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"webgl-\u57fa\u7840\u6982\u5ff5"},"WebGL-\u57fa\u7840\u6982\u5ff5"),(0,a.kt)("h2",{id:"\u7740\u8272\u5668shader"},"\u7740\u8272\u5668(Shader)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u9876\u70b9\u7740\u8272\u5668(Vertex shader)"),": \u9876\u70b9\u7740\u8272\u5668\u662f\u7528\u6765\u63cf\u8ff0\u5b9a\u70b9\u7279\u6027(\u4f4d\u7f6e/\u989c\u8272)\u7684\u7a0b\u5e8f, \u9876\u70b9(vertex)\u662f\u6307\u4e8c\u7ef4\u6216\u8005\u4e09\u7ef4\u7a7a\u95f4\u4e2d\u7684\u4e00\u4e2a\u70b9. \u6bd4\u5982\u4e8c\u7ef4\u6216\u8005\u4e09\u7ef4\u7684\u7aef\u70b9\u6216\u8005\u4ea4\u70b9"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u7247\u5143\u7740\u8272\u5668(Fragment shader)"),": \u8fdb\u884c\u9010\u7247\u5143\u5904\u7406\u7a0b\u5e8f. \u6bd4\u5982\u5149\u7167\u5904\u7406. \u7247\u5143(fragment)\u662f\u4e00\u4e2a webgl \u672f\u8bed, \u53ef\u4ee5\u7406\u89e3\u4e3a\u50cf\u7d20.")),(0,a.kt)("h2",{id:"\u5750\u6807\u7cfb\u7edf"},"\u5750\u6807\u7cfb\u7edf"),(0,a.kt)("p",null,"webgl \u91c7\u7528\u4e09\u7ef4\u5750\u6807\u7cfb\u7edf(\u7b1b\u5361\u5c14\u5750\u6807\u7cfb), x \u8f74\u6c34\u5e73(\u6b63\u5411\u4e3a\u53f3), y \u8f74\u5782\u76f4(\u6b63\u5411\u4e3a\u4e0b), z \u8f74\u5782\u76f4\u4e8e\u5c4f\u5e55(\u6b63\u5411\u4e3a\u5916), \u8fd9\u5957\u5750\u6807\u7cfb\u53c8\u79f0\u4e3a\u53f3\u624b\u5750\u6807\u7cfb. \u9ed8\u8ba4\u60c5\u51b5\u4e0b webgl \u91c7\u7528\u8fd9\u53f0\u5750\u6807\u7cfb. \u4f46\u662f webgl \u5b9e\u9645\u7684\u60c5\u51b5\u8981\u590d\u6742\u7684\u591a, \u5b83\u65e2\u4e0d\u662f\u53f3\u624b\u5750\u6807\u7cfb\u4e5f\u4e0d\u662f\u5de6\u624b\u5750\u6807\u7cfb. \u73b0\u5728\u6211\u4eec\u8fd8\u662f\u53ef\u4ee5\u7b80\u5355\u7684\u8ba4\u4e3a webgl \u5c31\u662f\u53f3\u624b\u5750\u6807\u7cfb."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:l(94984).Z,width:"510",height:"508"})),(0,a.kt)("p",null,"\u6b64\u5916, \u6211\u4eec\u8fd8\u8981\u77e5\u9053\u5b83\u4e0e canvas \u7684\u5750\u6807\u7684\u5bf9\u5e94\u5173\u7cfb:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:l(7325).Z,width:"485",height:"352"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<canvas>"),"\u7684\u4e2d\u5fc3\u70b9: ",(0,a.kt)("inlineCode",{parentName:"li"},"(0.0, 0.0, 0.0)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<canvas>"),"\u7684\u4e0a\u8fb9\u7f18\u548c\u4e0b\u8fb9\u7f18: ",(0,a.kt)("inlineCode",{parentName:"li"},"(-1.0,0.0,0.0)"),"\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"(1.0,0.0,0.0)"),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<canvas>"),"\u7684\u5de6\u8fb9\u7f18\u548c\u53f3\u8fb9\u7f18: ",(0,a.kt)("inlineCode",{parentName:"li"},"(0.0,-1.0,0.0)"),"\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"(0.0,1.0,0.0)"),";")),(0,a.kt)("h2",{id:"\u7cbe\u5ea6\u9650\u5b9a\u8bcdprecision-qualifier"},"\u7cbe\u5ea6\u9650\u5b9a\u8bcd(precision qualifier)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"highp"),": \u9ad8\u7cbe\u5ea6, \u9876\u70b9\u7740\u8272\u5668\u7684\u6700\u4f4e\u7cbe\u5ea6."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mediump"),": \u4e2d\u7cbe\u5ea6, \u4ecb\u4e8e\u9ad8\u7cbe\u5ea6\u548c\u4f4e\u7cbe\u5ea6\u4e4b\u95f4, \u7247\u5143\u7740\u8272\u5668\u7684\u6700\u4f4e\u7cbe\u5ea6."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"lowp"),": \u4f4e\u7cbe\u5ea6, \u53ef\u4ee5\u8868\u793a\u6240\u6709\u989c\u8272.")),(0,a.kt)("p",null,"\u5728\u67d0\u4e9bwebgl\u73af\u5883\u4e2d, \u7247\u5143\u7740\u8272\u5668\u53ef\u80fd\u4f1a\u4e0d\u652f\u6301highp\u7cbe\u5ea6, \u6240\u4ee5\u53ef\u4ee5\u5728\u7a0b\u5e8f\u9876\u90e8\u8bbe\u7f6e:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-glsl"},"precision <\u7cbe\u5ea6\u9650\u5b9a\u8bcd> <\u7c7b\u578b\u540d\u79f0>\n")),(0,a.kt)("p",null,"\u6bd4\u5982:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-glsl"},"precision mediump float; // \u6240\u6709\u6d6e\u70b9\u6570\u9ed8\u8ba4\u7cbe\u5ea6\u4e3a\u4e2d\u7cbe\u5ea6\n")),(0,a.kt)("h2",{id:"\u7f13\u51b2\u533a\u5bf9\u8c61buffer-object"},"\u7f13\u51b2\u533a\u5bf9\u8c61(buffer object)"),(0,a.kt)("p",null,"WebGL \u63d0\u4f9b\u4e86\u4e00\u79cd\u5f88\u65b9\u4fbf\u7684\u673a\u5236, \u5373",(0,a.kt)("strong",{parentName:"p"},"\u7f13\u51b2\u533a\u5bf9\u8c61"),", \u5b83\u53ef\u4ee5\u4e00\u6b21\u6027\u7684\u5411\u7740\u8272\u5668\u4f20\u5165\u591a\u4e2a\u9876\u70b9\u7684\u6570\u636e. \u7f13\u51b2\u533a\u5bf9\u8c61\u65f6 WebGL \u7cfb\u7edf\u4e2d\u7684\u4e00\u5757\u5185\u5b58\u533a\u57df. \u6211\u4eec\u53ef\u4ee5\u4e00\u6b21\u6027\u5411\u7f13\u51b2\u533a\u5bf9\u8c61\u4e2d\u586b\u5145\u5927\u91cf\u7684\u9876\u70b9\u6570\u636e, \u7136\u540e\u5c06\u8fd9\u4e9b\u6570\u636e\u4fdd\u5b58\u5728\u5176\u4e2d,\u4f9b\u9876\u70b9\u7740\u8272\u5668\u4f7f\u7528."),(0,a.kt)("h2",{id:"\u7c7b\u578b\u5316\u6570\u7ec4"},"\u7c7b\u578b\u5316\u6570\u7ec4"),(0,a.kt)("p",null,"JS \u4e2d\u7684\u6570\u636e\u662f\u4e00\u79cd\u901a\u7528\u7c7b\u578b, WebGL \u5f15\u5165\u4e86\u7c7b\u578b\u5316\u6570\u7ec4, Float32Array \u5c31\u662f\u5176\u4e2d\u4e4b\u4e00."),(0,a.kt)("p",null,"WebGL \u4e2d\u7684\u7c7b\u578b\u5316\u6570\u7ec4\u5982\u4e0b\u6240\u793a:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u6570\u7ec4\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6bcf\u4e2a\u5143\u7d20\u6240\u5360\u5b57\u8282\u6570"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Int8Array"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"8 \u4f4d\u6574\u6570\u578b(char)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"UInt8Array"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"8 \u4f4d\u65e0\u7b26\u53f7\u6574\u6570(unsigned char)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Int16Array"),(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"16 \u4f4d\u6574\u6570\u578b(short)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"UInt16Array"),(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"16 \u4f4d\u65e0\u7b26\u53f7\u6574\u6570\u578b(unsigned short)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Int32Array"),(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"32 \u4f4d\u6574\u6570\u578b(signed int)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"UInt32Array"),(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"32 \u4f4d\u65e0\u7b26\u53f7\u6574\u6570\u578b(unsigned int)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Float32Array"),(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5355\u7cbe\u5ea6 32 \u4f4d\u6d6e\u70b9\u6570(float)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Float64Array"),(0,a.kt)("td",{parentName:"tr",align:null},"8"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53cc\u7cbe\u5ea6 64 \u4f4d\u6d6e\u70b9\u6570(double)")))),(0,a.kt)("p",null,"\u4e0e JavaScript \u4e2d\u7684\u6570\u7ec4\u7c7b\u4f3c, \u7c7b\u578b\u5316\u6570\u7ec4\u4e5f\u6709\u4e00\u7cfb\u5217\u7684\u65b9\u6cd5\u548c\u5c5e\u6027, \u4f46\u662f\u4e0e\u666e\u901a\u7684 Array \u6570\u7ec4\u4e0d\u540c, \u7c7b\u578b\u5316\u6570\u7ec4\u4e0d\u652f\u6301 push()\u548c pop()\u65b9\u6cd5."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u65b9\u6cd5\u5c5e\u6027\u548c\u5e38\u91cf"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"get(index)"),(0,a.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u7b2c index \u4e2a\u5143\u7d20\u503c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"set(index,value)"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u7b2c index \u4e2a\u5143\u7d20\u7684\u503c\u4e3a value")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"set(array,offset)"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4ece\u7b2c offset \u4e2a\u5143\u7d20\u5f00\u59cb\u5c06\u6570\u7ec4 array \u4e2d\u7684\u503c\u586b\u5145\u8fdb\u53bb")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"length"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6570\u7ec4\u7684\u957f\u5ea6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"BYTES_PER_ELEMENT"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6570\u7ec4\u4e2d\u6bcf\u4e2a\u5143\u7d20\u6240\u5360\u7684\u5b57\u8282\u6570")))),(0,a.kt)("h2",{id:"\u9876\u70b9\u5230\u7247\u5143-\u56fe\u5f62\u88c5\u914d\u548c\u5149\u6805\u5316"},"\u9876\u70b9\u5230\u7247\u5143: \u56fe\u5f62\u88c5\u914d\u548c\u5149\u6805\u5316"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:l(28394).Z,width:"881",height:"231"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u56fe\u5f62\u88c5\u914d\u8fc7\u7a0b: \u5c06\u5b64\u7acb\u7684\u9876\u70b9\u8f6c\u914d\u6210\u51e0\u4f55\u56fe\u5f62, \u51e0\u4f55\u56fe\u5f62\u7684\u7c7b\u522b\u7531",(0,a.kt)("inlineCode",{parentName:"li"},"gl.drawArrays"),"\u51fd\u6570\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u51b3\u5b9a."),(0,a.kt)("li",{parentName:"ol"},"\u5149\u6805\u5316\u8fc7\u7a0b: \u5c06\u88c5\u914d\u597d\u7684\u51e0\u4f55\u56fe\u5f62\u8f6c\u5316\u4e3a\u7247\u5143.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:l(62236).Z,width:"836",height:"248"})),(0,a.kt)("p",null,"\u5b9e\u9645\u4e0a, ",(0,a.kt)("inlineCode",{parentName:"p"},"gl_position"),"\u5b9e\u9645\u4e0a\u5c31\u662f",(0,a.kt)("strong",{parentName:"p"},"\u51e0\u4f55\u56fe\u5f62\u88c5\u914d(geometric shape assembly)")," \u9636\u6bb5\u7684\u8f93\u5165\u6570\u636e, \u51e0\u4f55\u56fe\u5f62\u88c5\u914d\u8fc7\u7a0b\u53c8\u88ab\u79f0\u4e3a\u56fe\u5143\u88c5\u914d\u8fc7\u7a0b(primitive assembly process), \u56e0\u4e3a\u88ab\u88c5\u914d\u51fa\u7684\u57fa\u672c\u56fe\u5f62(\u70b9,\u7ebf,\u9762)\u53c8\u88ab\u79f0\u4e3a\u56fe\u5143(primitives)."),(0,a.kt)("h2",{id:"\u7eb9\u7406"},"\u7eb9\u7406"),(0,a.kt)("p",null,"\u4e09\u7ef4\u56fe\u5f62\u4e2d\u6709\u4e00\u9879\u8ddf\u91cd\u8981\u7684\u6280\u672f, \u53eb\u505a ",(0,a.kt)("strong",{parentName:"p"},"\u7eb9\u7406\u6620\u5c04(texture mapping)"),' . \u7eb9\u7406\u6620\u5c04\u5b9e\u9645\u4e0a\u5c31\u662f\u5c06\u4e00\u5f20\u56fe\u50cf\u6620\u5c04\u5230\u4e00\u4e2a\u51e0\u4f55\u56fe\u5f62\u7684\u8868\u9762\u4e0a\u53bb. \u5c06\u4e00\u5f20\u771f\u5b9e\u4e16\u754c\u7684\u56fe\u7247\u8d34\u5230\u4e00\u4e2a\u6709\u4e24\u4e2a\u4e09\u89d2\u5f62\u7ec4\u6210\u7684\u77e9\u9635\u4e0a, \u8fd9\u5f20\u56fe\u7247\u5c31\u6210\u4e3a "\u7eb9\u7406\u56fe\u50cf" \u6216 "\u7eb9\u7406" .'),(0,a.kt)("h3",{id:"\u7eb9\u7406\u5750\u6807"},"\u7eb9\u7406\u5750\u6807"),(0,a.kt)("p",null,"\u7eb9\u7406\u5750\u6807\u662f\u7eb9\u7406\u56fe\u50cf\u4e0a\u7684\u5750\u6807, \u901a\u8fc7\u7eb9\u7406\u5750\u6807\u53ef\u4ee5\u5728\u7eb9\u7406\u56fe\u50cf\u4e0a\u83b7\u53d6\u7eb9\u7d20\u989c\u8272, WebGL \u7cfb\u7edf\u4e2d\u7684\u7eb9\u7406\u5750\u6807\u7cfb\u7edf\u662f\u4e8c\u7ef4\u7684, \u4e3a\u4e86\u5c06\u7eb9\u7406\u5750\u6807\u4e0e\u5e7f\u6cdb\u4f7f\u7528\u7684 xy \u5750\u6807\u533a\u5206\u5f00, WebGL \u4f7f\u7528 st \u547d\u540d\u7eb9\u7406\u5750\u6807\u7cfb\u7edf."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:l(28039).Z,width:"312",height:"260"})),(0,a.kt)("h3",{id:"\u7eb9\u7406\u5355\u5143texture-unit"},"\u7eb9\u7406\u5355\u5143(texture unit)"),(0,a.kt)("p",null,"WebGL \u901a\u8fc7\u4e00\u79cd\u79f0\u4e3a",(0,a.kt)("strong",{parentName:"p"},"\u7eb9\u7406\u5355\u5143"),"\u7684\u7684\u673a\u5236\u6765\u540c\u65f6\u4f7f\u7528\u591a\u4e2a\u7eb9\u7406. \u6bcf\u4e2a\u7eb9\u7406\u5355\u5143\u6709\u4e00\u4e2a\u5355\u5143\u7f16\u53f7\u6765\u7ba1\u7406\u4e00\u5f20\u7eb9\u7406\u56fe\u50cf. \u5373\u4f7f\u7a0b\u5e8f\u4e2d\u53ea\u6709\u4e00\u5f20\u7eb9\u7406\u56fe\u50cf, \u4e5f\u8981\u4e3a\u5176\u5236\u5b9a\u4e00\u4e2a\u7eb9\u7406\u5355\u5143."),(0,a.kt)("p",null,"\u7cfb\u7edf\u652f\u6301\u7684\u7eb9\u7406\u5355\u5143\u4e2a\u6570\u53d6\u51b3\u4e8e\u786c\u4ef6\u548c\u6d4f\u89c8\u5668\u7684 WebGL \u5b9e\u73b0, \u4f46\u662f\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b, WebGL \u81f3\u5c11\u652f\u6301 8 \u4e2a\u7eb9\u7406\u5355\u5143, \u4e00\u4e9b\u5176\u4ed6\u7cfb\u7edf\u652f\u6301\u7684\u4e2a\u6570\u66f4\u591a. \u5185\u7f6e\u7684\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"p"},"gl.TEXTURE0"),",",(0,a.kt)("inlineCode",{parentName:"p"},"gl.TEXTURE1"),",...,",(0,a.kt)("inlineCode",{parentName:"p"},"gl.TEXTURE7"),"\u5404\u8868\u793a\u4e00\u4e2a\u7eb9\u7406\u5355\u5143."),(0,a.kt)("h2",{id:"\u6d41\u660e"},"\u6d41\u660e"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6d41\u660e(luminance)"),"\u8868\u793a\u6211\u4eec\u611f\u77e5\u5230\u7684\u7269\u4f53\u8868\u9762\u7684\u4eae\u5ea6. \u901a\u5e38\u4f7f\u7528\u7269\u4f53\u8868\u9762\u7ea2, \u7eff, \u84dd\u989c\u8272\u5206\u91cf\u503c\u7684\u52a0\u6743\u5e73\u5747\u6765\u8ba1\u7b97\u6d41\u660e."),(0,a.kt)("h2",{id:"\u89c6\u70b9\u548c\u89c6\u8ddd"},"\u89c6\u70b9\u548c\u89c6\u8ddd"),(0,a.kt)("p",null,"\u4e09\u7ef4\u7269\u4f53\u548c\u4e8c\u7ef4\u56fe\u5f62\u6700\u5927\u7684\u533a\u522b\u5728\u4e8e, \u4e09\u7ef4\u7269\u4f53\u5177\u6709\u6df1\u5ea6, \u4e5f\u5c31\u662f Z \u8f74. \u56e0\u6b64, \u5f53\u4e09\u7ef4\u7269\u4f53\u4f1a\u77e5\u9053\u4e8c\u7ef4\u5c4f\u5e55\u4e0a\u5f0f, \u5c31\u50cf\u662f\u5728\u7ed8\u5236\u901a\u8fc7\u89c2\u5bdf\u8005\u770b\u5230\u7684\u4e16\u754c. \u6709\u4e24\u4e2a\u8981\u7d20\u662f\u6211\u4eec\u9700\u8981\u8003\u8651\u7684:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u89c2\u5bdf\u7684\u65b9\u5411"),(0,a.kt)("li",{parentName:"ol"},"\u53ef\u89c6\u7684\u8ddd\u79bb")),(0,a.kt)("p",null,"\u6211\u4eec\u5c06\u89c2\u5bdf\u8005\u6240\u5904\u7684\u4f4d\u7f6e\u79f0\u4e3a\u89c6\u70b9, \u5c06\u4ece\u89c6\u70b9\u89e6\u53d1\u6cbf\u7740\u89c2\u5bdf\u65b9\u5411\u79f0\u4f5c\u89c6\u7ebf."),(0,a.kt)("p",null,"\u5728 WebGL \u7cfb\u7edf\u4e2d, \u9ed8\u8ba4\u60c5\u51b5\u4e0b, \u89c6\u70b9\u5904\u4e8e\u539f\u70b9(0,0,0), \u89c6\u7ebf\u4e3a z \u8f74\u8d1f\u534a\u8f74."),(0,a.kt)("h2",{id:"\u89c2\u5bdf\u70b9-\u76ee\u6807\u70b9\u548c\u4e0a\u65b9\u5411"},"\u89c2\u5bdf\u70b9, \u76ee\u6807\u70b9\u548c\u4e0a\u65b9\u5411"),(0,a.kt)("p",null,"\u89c2\u5bdf\u70b9\u5373\u4e0a\u9762\u6240\u63cf\u8ff0\u7684\u89c6\u70b9, \u6211\u4eec\u5c06\u89c6\u70b9\u5750\u6807\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"(eyeX, eyeY, eyeZ)"),"\u6765\u8868\u793a\u89c2\u5bdf\u70b9\u5750\u6807."),(0,a.kt)("p",null,"\u76ee\u6807\u70b9: \u88ab\u89c2\u5bdf\u76ee\u6807\u6240\u5728\u7684\u70b9, \u89c6\u7ebf\u4ece\u89c6\u70b9\u89e6\u53d1, \u7a7f\u8fc7\u89c2\u5bdf\u76ee\u6807\u70b9\u5e76\u7ee7\u7eed\u5ef6\u4f38. \u53ef\u4ee5\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"(atX,atY,atZ)"),"\u6765\u8868\u793a"),(0,a.kt)("p",null,"\u4e0a\u65b9\u5411: \u6700\u7ec8\u7ed8\u5236\u5728\u5c4f\u5e55\u4e0a\u7684\u5f71\u50cf\u4e2d\u7684\u5411\u4e0a\u7684\u9632\u7ebf. \u53ef\u4ee5\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"(upX,upY,upZ)"),"\u6765\u8868\u793a."),(0,a.kt)("p",null,"\u5728 WebGL \u4e2d, \u53ef\u4ee5\u7528\u4e0a\u8ff0\u4e09\u4e2a\u77e2\u91cf\u521b\u5efa\u4e00\u4e2a\u89c6\u56fe\u77e9\u9635(view matrix), \u7136\u540e\u5c06\u8be5\u77e9\u9635\u4f20\u7ed9\u9876\u70b9\u7740\u8272\u5668. \u89c6\u56fe\u77e9\u9635\u53ef\u4ee5\u8868\u793a\u89c2\u5bdf\u8005\u7684\u72b6\u6001, \u542b\u6709\u89c2\u5bdf\u8005\u7684\u89c6\u70b9, \u76ee\u6807\u70b9, \u4e0a\u65b9\u5411\u7b49\u4fe1\u606f. \u6700\u7ec8\u51b3\u5b9a\u4e86\u663e\u793a\u5728\u5c4f\u5e55\u4e0a\u7684\u89c6\u56fe, \u4e5f\u5c31\u662f\u89c2\u5bdf\u8005\u89c2\u5bdf\u5230\u7684\u573a\u666f."),(0,a.kt)("p",null,"\u5728 webgl \u4e2d\u7684\u9ed8\u8ba4\u72b6\u6001\u662f:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u89c6\u70b9\u4f4d\u4e8e\u5750\u6807\u7cfb\u7edf\u539f\u70b9(0,0,0)"),(0,a.kt)("li",{parentName:"ul"},"\u89c6\u7ebf\u4e3a z \u8f74\u8d1f\u65b9\u5411"),(0,a.kt)("li",{parentName:"ul"},"\u89c2\u5bdf\u70b9\u4e3a(0,0,-1)"),(0,a.kt)("li",{parentName:"ul"},"\u4e0a\u65b9\u5411\u4e3a y \u8f74\u8d1f\u65b9\u5411.\u5373(0,1,0)")),(0,a.kt)("h2",{id:"\u53ef\u89c6\u8303\u56f4"},"\u53ef\u89c6\u8303\u56f4"),(0,a.kt)("p",null,"\u5728\u4e09\u7ef4\u4e16\u754c\u4e2d, \u8fd8\u9700\u8981\u8003\u8651\u53ef\u89c6\u8303\u56f4\u7684\u95ee\u9898. \u56e0\u4e3a\u6211\u4eec\u662f\u901a\u8fc7\u6d4f\u89c8\u5668\u53bb\u89c2\u5bdf\u4e09\u7ef4\u4e16\u754c\u7684, \u5c31\u50cf\u6211\u4eec\u901a\u8fc7\u773c\u775b\u53bb\u770b\u771f\u5b9e\u7684\u4e16\u754c\u4e00\u6837, \u90fd\u6709\u4e00\u4e2a\u53ef\u89c6\u7684\u8303\u56f4\u533a\u57df. \u5728 webgl \u4e2d, \u53ea\u6709\u5f53\u4e09\u7ef4\u7269\u4f53\u5728\u6211\u4eec\u7684\u53ef\u89c6\u8303\u56f4\u5185, webgl \u624d\u4f1a\u53bb\u7ed8\u5236\u5b83."),(0,a.kt)("p",null,"\u9664\u4e86\u4e0a\u4e0b\u5de6\u53f3\u7684\u8303\u56f4, \u8fd8\u6709\u8fdc\u8fd1, \u8fd9\u516d\u4e2a\u9762\u7ec4\u6210\u4e00\u4e2a\u51e0\u4f55\u4f53, \u7ec4\u6210 webgl \u4e2d\u7684\u7ed8\u5236\u533a\u57df, \u4e5f\u5c31\u662f\u53ef\u89c6\u533a\u57df."),(0,a.kt)("p",null,"\u4e00\u822c\u6765\u8bf4, \u6709\u4e24\u7c7b\u53ef\u89c6\u7a7a\u95f4:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u957f\u65b9\u4f53\u53ef\u89c6\u7a7a\u95f4, \u4e5f\u79f0\u76d2\u72b6\u7a7a\u95f4, \u7531\u6b63\u5c04\u6295\u5f71(orthographic projection)\u4ea7\u751f."),(0,a.kt)("li",{parentName:"ul"},"\u91d1\u5b57\u5854\u53ef\u89c6\u7a7a\u95f4, \u6709\u900f\u89c6\u6295\u5f71(perspective projection)\u4ea7\u751f.")),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u53ef\u89c6\u7a7a\u95f4\u7684\u793a\u610f\u56fe:"),(0,a.kt)("p",null,"\u76d2\u72b6\u7a7a\u95f4\u793a\u610f:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:l(65781).Z,width:"589",height:"362"})),(0,a.kt)("p",null,"\u900f\u89c6\u6295\u5f71\u53ef\u89c6\u7a7a\u95f4\u793a\u610f:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:l(89803).Z,width:"721",height:"325"})),(0,a.kt)("h2",{id:"\u6df1\u5ea6\u7f13\u51b2\u533a"},"\u6df1\u5ea6\u7f13\u51b2\u533a"),(0,a.kt)("p",null,"\u6df1\u5ea6\u7f13\u51b2\u533a(depth buffer)\u662f Webgl \u4e2d\u7684\u4e00\u4e2a\u4e2d\u95f4\u5bf9\u8c61,\u4f5c\u7528\u662f\u5e2e\u52a9 WebGL \u8fdb\u884c\u9690\u85cf\u9762\u6d88\u9664. WebGL \u5728\u989c\u8272\u7f13\u51b2\u533a\u4e2d\u7ed8\u5236\u51e0\u4f55\u56fe\u5f62, \u7ed8\u5236\u5b8c\u6210\u540e\u5c06\u989c\u8272\u7f13\u51b2\u5230\u8981\u663e\u793a\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"<canvas>"),"\u4e0a, \u5982\u679c\u8981\u5c06\u9690\u85cf\u9762\u5c0f\u6570, \u5c31\u5fc5\u987b\u8981\u77e5\u9053\u51e0\u4e2a\u56fe\u5f62\u7684\u6df1\u5ea6\u4fe1\u606f, \u6df1\u5ea6\u7f13\u51b2\u533a\u6b63\u662f\u7528\u6765\u5b58\u50a8\u8fd9\u4e2a\u7684. \u4e00\u822c\u6df1\u5ea6\u65b9\u5411\u9ed8\u8ba4\u65f6 z \u65b9\u5411, \u6240\u4ee5\u6df1\u5ea6\u7f13\u51b2\u533a\u4e5f\u79f0\u4e3a Z \u7f13\u51b2\u533a."),(0,a.kt)("p",null,"\u5728\u7ed8\u5236\u4efb\u610f\u4e00\u5e27\u4e4b\u524d, \u90fd\u8981\u6e05\u9664\u6df1\u5ea6\u7f13\u51b2\u533a, \u6765\u6d88\u9664\u7ed8\u5236\u4e0a\u4e00\u5e27\u7559\u4e0b\u7684\u75d5\u8ff9."),(0,a.kt)("h2",{id:"\u6df1\u5ea6\u51b2\u7a81"},"\u6df1\u5ea6\u51b2\u7a81"),(0,a.kt)("p",null,"\u9690\u85cf\u9762\u6d88\u9664\u662f WebGL \u4e2d\u4e00\u9879\u5f88\u590d\u6742\u7684\u7279\u6027, \u5728\u7edd\u5927\u591a\u6570\u60c5\u51b5\u4e0b, \u90fd\u53ef\u4ee5\u5f88\u597d\u7684\u5b8c\u6210\u4efb\u52a1, \u4f46\u662f\u5f53\u4e24\u4e2a\u51e0\u4f55\u7269\u4f53\u7684\u4e24\u4e2a\u8868\u9762\u6781\u4e3a\u63a5\u8fd1\u65f6, \u5c31\u4f1a\u51fa\u73b0\u4e00\u4e9b\u9519\u8bef, \u4f7f\u8868\u9762\u770b\u8d77\u6765\u6591\u6591\u9a73\u9a73, \u8fd9\u79cd\u73b0\u8c61\u5373 ",(0,a.kt)("strong",{parentName:"p"},"\u6df1\u5ea6\u51b2\u7a81(Z fighting)"),"."),(0,a.kt)("p",null,"\u4e4b\u6240\u4ee5\u4f1a\u4ea7\u751f\u6df1\u5ea6\u51b2\u7a81, \u662f\u56e0\u4e3a\u4e24\u4e2a\u8868\u9762\u8fc7\u4e8e\u63a5\u8fd1, \u6df1\u5ea6\u7f13\u51b2\u533a\u6709\u9650\u7684\u7cbe\u5ea6\u4e0d\u80fd\u591f\u533a\u5206\u90a3\u4e2a\u5728\u524d\u54ea\u4e2a\u5728\u540e, \u5f53\u573a\u666f\u4e2d\u6709\u591a\u4e2a\u7269\u4f53\u5728\u8fd0\u52a8\u7684\u65f6\u5019, \u8fd9\u51e0\u4e4e\u662f\u4e00\u4e2a\u65e0\u6cd5\u907f\u514d\u7684\u95ee\u9898."),(0,a.kt)("p",null,"\u4e00\u822c\u53ef\u4ee5\u901a\u8fc7\u591a\u8fb9\u5f62\u504f\u79fb\u6765\u5904\u7406\u8fd9\u4e2a\u95ee\u9898"),(0,a.kt)("h2",{id:"\u53cd\u5c04\u7c7b\u578b"},"\u53cd\u5c04\u7c7b\u578b"),(0,a.kt)("p",null,"\u53cd\u5c04\u5149\u7684\u989c\u8272\u548c\u65b9\u5411\u5206\u522b\u53d6\u51b3\u4e8e\u7269\u4f53\u8868\u9762\u7684\u7c7b\u578b\u548c\u5165\u5c04\u5149."),(0,a.kt)("p",null,"\u53cd\u5c04\u5149\u7ebf\u7684\u65b9\u5f0f\u6709\u4e24\u79cd:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6f2b\u53cd\u5c04(diffuse reflection):"),(0,a.kt)("p",{parentName:"li"},"  \u5176\u989c\u8272\u53ef\u4ee5\u6709\u5982\u4e0b\u516c\u5f0f\u5f97\u5230:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"<\u6f2b\u53cd\u5c04\u5149\u989c\u8272> = <\u5165\u5c04\u5149\u989c\u8272> x <\u8868\u9762\u57fa\u5e95\u8272> x cos\u03b8\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u73af\u5883\u53cd\u5c04(environment/ambient reflection)"),(0,a.kt)("p",{parentName:"li"},"  \u5176\u989c\u8272\u53ef\u4ee5\u6709\u5982\u4e0b\u516c\u5f0f\u5f97\u5230:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"<\u73af\u5883\u53cd\u5c04\u5149\u989c\u8272> = <\u5165\u5c04\u5149\u989c\u8272> x <\u8868\u9762\u57fa\u5e95\u8272>\n")))),(0,a.kt)("p",null,"\u4e0a\u5f0f\u4e2d\u989c\u8272\u7684\u8ba1\u7b97\u5f0f\u9010\u5206\u91cf\u8fdb\u884c\u7684. "),(0,a.kt)("p",null,"\u6f2b\u53cd\u5c04\u548c\u73af\u5883\u5149\u540c\u65f6\u5b58\u5728\u65f6, \u5c06\u4e24\u8005\u52a0\u8d77\u6765\u5c31\u5f97\u5230\u4e86\u7269\u4f53\u88ab\u89c2\u5bdf\u5230\u7684\u989c\u8272:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<\u8868\u9762\u7684\u53cd\u5c04\u989c\u8272> = <\u6f2b\u53cd\u5c04\u5149\u989c\u8272> + <\u73af\u5883\u53cd\u5c04\u5149\u989c\u8272>\n")),(0,a.kt)("p",null,"\u4e24\u79cd\u53cd\u5c04\u5149\u5e76\u4e0d\u4e00\u5b9a\u603b\u662f\u5b58\u5728, \u4e5f\u4e0d\u4e00\u5b9a\u9700\u8981\u6309\u7167\u8fd9\u4e2a\u516c\u5f0f\u6765\u8ba1\u7b97"),(0,a.kt)("h2",{id:"\u5149\u6e90\u7c7b\u578b"},"\u5149\u6e90\u7c7b\u578b"),(0,a.kt)("p",null,"\u5f53\u7269\u4f53\u88ab\u5149\u7167\u5c04\u7684\u65f6\u5019, \u5fc5\u7136\u5b58\u5728\u53d1\u51fa\u5149\u7ebf\u7684\u5149\u6e90. \u771f\u5b9e\u4e16\u754c\u4e2d\u7684\u5149\u4e3b\u8981\u5206\u4e3a\u4e24\u79cd\u7c7b\u578b:\u5e73\u884c\u5149(directional light), \u70b9\u5149\u6e90(point light). \u6b64\u5916\u6211\u4eec\u8fd8\u9700\u8981\u4e00\u79cd\u73af\u5883\u5149(ambient light)\u6765\u6a21\u62df\u771f\u5b9e\u4e16\u754c\u4e2d\u7684\u975e\u76f4\u5c04\u5149. \u8fd8\u6709\u4e00\u4e9b\u5728\u672c\u6587\u8303\u56f4\u4e4b\u5916\u7684\u6bd4\u5982\u805a\u5149\u706f\u5149(spot light)\u7b49, \u53ef\u4ee5\u53c2\u8003OPENGL ES2.0\u4e00\u4e66."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5e73\u884c\u5149: \u592a\u9633\u5149"),(0,a.kt)("li",{parentName:"ul"},"\u70b9\u5149\u6e90: \u706f/\u706b\u7130\u7b49"),(0,a.kt)("li",{parentName:"ul"},"\u73af\u5883\u5149: \u6f2b\u53cd\u5c04\u7684\u5149")),(0,a.kt)("h2",{id:"\u6cd5\u7ebf-\u8868\u9762\u7684\u671d\u5411"},"\u6cd5\u7ebf: \u8868\u9762\u7684\u671d\u5411"),(0,a.kt)("p",null,'\u7269\u4f53\u8868\u9762\u7684\u671d\u5411, \u5373\u5782\u76f4\u4e8e\u8868\u9762\u7684\u65b9\u5411, \u79f0\u4e3a\u6cd5\u7ebf\u6216\u8005\u6cd5\u5411\u91cf. \u4e00\u4e2a\u8868\u9762\u5177\u6709\u4e24\u4e2a\u6cd5\u5411\u91cf. \u56e0\u4e3a\u6bcf\u4e2a\u8868\u9762\u90fd\u6709"\u6b63\u9762"\u548c"\u80cc\u9762".'),(0,a.kt)("p",null,"\u5728\u4e09\u7ef4\u56fe\u5f62\u4e2d, \u8868\u9762\u7684\u6b63\u9762\u548c\u80cc\u9762\u53d6\u51b3\u4e8e\u7ed8\u5236\u8868\u9762\u65f6\u5019\u7684\u9876\u70b9\u987a\u5e8f, \u987a\u65f6\u9488\u4e3a\u6b63\u9762, \u9006\u65f6\u9488\u4e3a\u80cc\u9762."))}o.isMDXComponent=!0},94984:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/_20190811110629-e37b53f491761a03dc3ede92a6991c57.png"},7325:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/_20190811110917-e123c914441659e34b464e5b531e2ca1.png"},28394:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/_20190811214651-4503c86e2ab974c9f4664ae0e2f3f19f.png"},62236:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/_20190811214843-676ad5c93214bc2c0db6153c647f2935.png"},28039:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/coord-0e6f4cb35708539c667f731dcbb197b7.png"},65781:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/view_matrix-1f09d65fdfd3017caf89e852b7014e33.png"},89803:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/view_matrix2-dbaba70e4d48af490d069286b291d153.png"}}]);