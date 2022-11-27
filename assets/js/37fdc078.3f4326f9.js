"use strict";(self.webpackChunk_jeiiz_wiki_site=self.webpackChunk_jeiiz_wiki_site||[]).push([[8651],{158:(e,t,l)=>{l.d(t,{Zo:()=>m,kt:()=>c});var n=l(6393);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function p(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var o=n.createContext({}),k=function(e){var t=n.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):p(p({},t),e)),l},m=function(e){var t=k(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=k(l),c=a,d=s["".concat(o,".").concat(c)]||s[c]||u[c]||r;return l?n.createElement(d,p(p({ref:t},m),{},{components:l})):n.createElement(d,p({ref:t},m))}));function c(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,p=new Array(r);p[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var k=2;k<r;k++)p[k]=l[k];return n.createElement.apply(null,p)}return n.createElement.apply(null,l)}s.displayName="MDXCreateElement"},7907:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>k});var n=l(9421),a=(l(6393),l(158));const r={},p="HTTPS",i={unversionedId:"\u8ba1\u7b97\u673a\u7f51\u7edc/HTTP/HTTPS",id:"\u8ba1\u7b97\u673a\u7f51\u7edc/HTTP/HTTPS",title:"HTTPS",description:"Http \u662f\u660e\u6587\u4f20\u8f93\u7684\u901a\u4fe1\u534f\u8bae, \u5b58\u5728\u7740\u4e00\u4e9b\u98ce\u9669:",source:"@site/docs/\u8ba1\u7b97\u673a\u7f51\u7edc/HTTP/HTTPS.md",sourceDirName:"\u8ba1\u7b97\u673a\u7f51\u7edc/HTTP",slug:"/\u8ba1\u7b97\u673a\u7f51\u7edc/HTTP/HTTPS",permalink:"/docs/\u8ba1\u7b97\u673a\u7f51\u7edc/HTTP/HTTPS",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HTTP3",permalink:"/docs/\u8ba1\u7b97\u673a\u7f51\u7edc/HTTP/HTTP3"},next:{title:"TCP&UDP",permalink:"/docs/\u8ba1\u7b97\u673a\u7f51\u7edc/TCP&UDP"}},o={},k=[{value:"SSL/TLS \u539f\u7406",id:"ssltls-\u539f\u7406",level:2},{value:"\u63e1\u624b\u9636\u6bb5\u6982\u89c8",id:"\u63e1\u624b\u9636\u6bb5\u6982\u89c8",level:2},{value:"\u57fa\u672c\u8fd0\u884c\u8fc7\u7a0b",id:"\u57fa\u672c\u8fd0\u884c\u8fc7\u7a0b",level:2},{value:"\u63e1\u624b\u9636\u6bb5\u7684\u8be6\u7ec6\u8fc7\u7a0b",id:"\u63e1\u624b\u9636\u6bb5\u7684\u8be6\u7ec6\u8fc7\u7a0b",level:2},{value:"\u5ba2\u6237\u7aef\u53d1\u51fa\u8bf7\u6c42(ClientHello)",id:"\u5ba2\u6237\u7aef\u53d1\u51fa\u8bf7\u6c42clienthello",level:3},{value:"\u670d\u52a1\u5668\u56de\u5e94\uff08SeverHello\uff09",id:"\u670d\u52a1\u5668\u56de\u5e94severhello",level:3},{value:"\u5ba2\u6237\u7aef\u56de\u5e94",id:"\u5ba2\u6237\u7aef\u56de\u5e94",level:3},{value:"\u670d\u52a1\u5668\u7684\u6700\u540e\u54cd\u5e94",id:"\u670d\u52a1\u5668\u7684\u6700\u540e\u54cd\u5e94",level:3},{value:"\u4e2d\u95f4\u4eba\u653b\u51fb",id:"\u4e2d\u95f4\u4eba\u653b\u51fb",level:2},{value:"\u6570\u5b57\u8bc1\u4e66",id:"\u6570\u5b57\u8bc1\u4e66",level:2},{value:"\u6570\u5b57\u7b7e\u540d",id:"\u6570\u5b57\u7b7e\u540d",level:2},{value:"\u540a\u9500\u68c0\u67e5",id:"\u540a\u9500\u68c0\u67e5",level:2},{value:"\u7b7e\u53d1\u8005",id:"\u7b7e\u53d1\u8005",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],m={toc:k};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"https"},"HTTPS"),(0,a.kt)("p",null,"Http \u662f\u660e\u6587\u4f20\u8f93\u7684\u901a\u4fe1\u534f\u8bae, \u5b58\u5728\u7740\u4e00\u4e9b\u98ce\u9669:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7a83\u542c(eavesdropping): \u7b2c\u4e09\u65b9\u53ef\u4ee5\u83b7\u77e5\u901a\u4fe1\u5185\u5bb9"),(0,a.kt)("li",{parentName:"ol"},"\u7be1\u6539(tampering): \u7b2c\u4e09\u65b9\u53ef\u4ee5\u4fee\u6539\u901a\u4fe1\u5185\u5bb9"),(0,a.kt)("li",{parentName:"ol"},"\u5192\u5145(pretending): \u7b2c\u4e09\u65b9\u53ef\u4ee5\u5192\u5145\u4ed6\u4eba\u8eab\u4efd\u53c2\u4e0e\u901a\u4fe1")),(0,a.kt)("p",null,"SSL/TLS \u534f\u8bae\u662f\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e09\u79cd\u98ce\u9669\u800c\u8bbe\u8ba1\u7684:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6240\u6709\u4fe1\u606f\u90fd\u662f\u52a0\u5bc6\u4f20\u64ad\uff0c\u7b2c\u4e09\u65b9\u65e0\u6cd5\u7a83\u542c\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5177\u6709\u6821\u9a8c\u673a\u5236\uff0c\u4e00\u65e6\u88ab\u7be1\u6539\uff0c\u901a\u4fe1\u53cc\u65b9\u4f1a\u7acb\u523b\u53d1\u73b0\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u914d\u5907\u8eab\u4efd\u8bc1\u4e66\uff0c\u9632\u6b62\u8eab\u4efd\u88ab\u5192\u5145\u3002")),(0,a.kt)("h2",{id:"ssltls-\u539f\u7406"},"SSL/TLS \u539f\u7406"),(0,a.kt)("p",null,"SSL/TLS \u534f\u8bae\u7684\u57fa\u672c\u601d\u8def\u5c31\u662f\u91c7\u7528\u975e\u5bf9\u79f0\u52a0\u5bc6, \u5ba2\u6237\u7aef\u5411\u670d\u52a1\u5668\u83b7\u53d6",(0,a.kt)("strong",{parentName:"p"},"\u516c\u94a5"),", \u7136\u540e\u4f7f\u7528\u516c\u94a5\u52a0\u5bc6\u4fe1\u606f, \u670d\u52a1\u5668\u6536\u5230\u5bc6\u6587\u540e, \u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"\u79c1\u94a5"),"\u8fdb\u884c\u89e3\u5bc6."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5982\u4f55\u4fdd\u8bc1\u516c\u94a5\u4e0d\u88ab\u7be1\u6539")),(0,a.kt)("p",null,"\u5c06\u516c\u94a5\u653e\u5728\u6570\u5b57\u8bc1\u4e66\u4e2d. \u53ea\u8981\u8bc1\u4e66\u662f\u53ef\u4fe1\u7684, \u516c\u94a5\u5c31\u662f\u53ef\u4fe1\u7684."),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u516c\u94a5\u52a0\u5bc6\u91cf\u8ba1\u7b97\u592a\u5927, \u5982\u4f55\u51cf\u5c11\u8017\u65f6")),(0,a.kt)("p",null,'\u6bcf\u4e00\u6b21\u5bf9\u8bdd(session), \u5728\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u4e4b\u95f4\u90fd\u4f1a\u751f\u6210\u4e00\u4e2a"\u5bf9\u8bdd\u5bc6\u94a5"(session key), \u8fd9\u662f\u4e00\u4e2a\u5bf9\u79f0\u52a0\u5bc6\u7684\u8fc7\u7a0b, \u8fd0\u7b97\u8fc7\u7a0b\u4f1a\u6bd4\u8f83\u5feb, \u670d\u52a1\u5668\u516c\u94a5\u53ea\u7528\u4e8e\u52a0\u5bc6\u5bf9\u8bdd\u5bc6\u94a5, \u8fd9\u6837\u5c31\u51cf\u5c11\u4e86\u52a0\u5bc6\u8fd0\u7b97\u7684\u6d88\u8017\u65f6\u95f4.'),(0,a.kt)("p",null,"\u56e0\u6b64, SSL/TLS \u7684\u52a0\u5bc6\u8fc7\u7a0b\u57fa\u672c\u5982\u4e0b:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5ba2\u6237\u7aef\u5411\u670d\u52a1\u5668\u7d22\u8981\u5e76\u9a8c\u8bc1\u516c\u94a5"),(0,a.kt)("li",{parentName:"ol"},"\u53cc\u65b9\u534f\u5546\u751f\u6210\u5bf9\u8bdd\u5bc6\u94a5"),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u5bf9\u8bdd\u5bc6\u94a5\u8fdb\u884c\u52a0\u5bc6\u901a\u4fe1.")),(0,a.kt)("p",null,'\u4e0a\u9762\u8fc7\u7a0b\u7684\u524d\u4e24\u90e8, \u53c8\u79f0\u4e3a"\u63e1\u624b\u9636\u6bb5(handshake)"'),(0,a.kt)("h2",{id:"\u63e1\u624b\u9636\u6bb5\u6982\u89c8"},"\u63e1\u624b\u9636\u6bb5\u6982\u89c8"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:l(2200).Z,width:"580",height:"531"})),(0,a.kt)("h2",{id:"\u57fa\u672c\u8fd0\u884c\u8fc7\u7a0b"},"\u57fa\u672c\u8fd0\u884c\u8fc7\u7a0b"),(0,a.kt)("p",null,"SSL/TLS \u534f\u8bae\u7684\u57fa\u672c\u601d\u8def\u5c31\u662f\u91c7\u7528\u975e\u5bf9\u79f0\u52a0\u5bc6, \u5ba2\u6237\u7aef\u5411\u670d\u52a1\u5668\u83b7\u53d6\u516c\u94a5, \u7136\u540e\u4f7f\u7528\u516c\u94a5\u52a0\u5bc6\u4fe1\u606f, \u670d\u52a1\u5668\u6536\u5230\u5bc6\u6587\u540e, \u4f7f\u7528\u79c1\u94a5\u8fdb\u884c\u89e3\u5bc6."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5982\u4f55\u4fdd\u8bc1\u516c\u94a5\u4e0d\u88ab\u7be1\u6539")),(0,a.kt)("p",null,"\u5c06\u516c\u94a5\u653e\u5728\u6570\u5b57\u8bc1\u4e66\u4e2d. \u53ea\u8981\u8bc1\u4e66\u662f\u53ef\u4fe1\u7684, \u516c\u94a5\u5c31\u662f\u53ef\u4fe1\u7684."),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u516c\u94a5\u52a0\u5bc6\u91cf\u8ba1\u7b97\u592a\u5927, \u5982\u4f55\u51cf\u5c11\u8017\u65f6")),(0,a.kt)("p",null,'\u6bcf\u4e00\u6b21\u5bf9\u8bdd(session), \u5728\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u4e4b\u95f4\u90fd\u4f1a\u751f\u6210\u4e00\u4e2a"\u5bf9\u8bdd\u5bc6\u94a5"(session key), \u8fd9\u662f\u4e00\u4e2a\u5bf9\u79f0\u52a0\u5bc6\u7684\u8fc7\u7a0b, \u8fd0\u7b97\u8fc7\u7a0b\u4f1a\u6bd4\u8f83\u5feb, \u670d\u52a1\u5668\u516c\u94a5\u53ea\u7528\u4e8e\u52a0\u5bc6\u5bf9\u8bdd\u5bc6\u94a5, \u8fd9\u6837\u5c31\u51cf\u5c11\u4e86\u52a0\u5bc6\u8fd0\u7b97\u7684\u6d88\u8017\u65f6\u95f4.'),(0,a.kt)("p",null,"\u56e0\u6b64, SSL/TLS \u7684\u52a0\u5bc6\u8fc7\u7a0b\u57fa\u672c\u5982\u4e0b:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5ba2\u6237\u7aef\u5411\u670d\u52a1\u5668\u7d22\u8981\u5e76\u9a8c\u8bc1\u516c\u94a5"),(0,a.kt)("li",{parentName:"ol"},"\u53cc\u65b9\u534f\u5546\u751f\u6210\u5bf9\u8bdd\u5bc6\u94a5"),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u5bf9\u8bdd\u5bc6\u94a5\u8fdb\u884c\u52a0\u5bc6\u901a\u4fe1.")),(0,a.kt)("p",null,'\u4e0a\u9762\u8fc7\u7a0b\u7684\u524d\u4e24\u90e8, \u53c8\u79f0\u4e3a"\u63e1\u624b\u9636\u6bb5(handshake)"'),(0,a.kt)("h2",{id:"\u63e1\u624b\u9636\u6bb5\u7684\u8be6\u7ec6\u8fc7\u7a0b"},"\u63e1\u624b\u9636\u6bb5\u7684\u8be6\u7ec6\u8fc7\u7a0b"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:l(2200).Z,width:"580",height:"531"})),(0,a.kt)("h3",{id:"\u5ba2\u6237\u7aef\u53d1\u51fa\u8bf7\u6c42clienthello"},"\u5ba2\u6237\u7aef\u53d1\u51fa\u8bf7\u6c42(ClientHello)"),(0,a.kt)("p",null,"\u5ba2\u6237\u7aef\u53d1\u8d77",(0,a.kt)("inlineCode",{parentName:"p"},"ClientHello"),"\u8bf7\u6c42, \u63d0\u4f9b\u5982\u4e0b\u4fe1\u606f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\uff081\uff09 \u652f\u6301\u7684\u534f\u8bae\u7248\u672c\uff0c\u6bd4\u5982TLS 1.0\u7248\u3002\n\n\uff082\uff09 \u4e00\u4e2a\u5ba2\u6237\u7aef\u751f\u6210\u7684\u968f\u673a\u6570A\uff0c\u7a0d\u540e\u7528\u4e8e\u751f\u6210"\u5bf9\u8bdd\u5bc6\u94a5"\u3002\n\n\uff083\uff09 \u652f\u6301\u7684\u52a0\u5bc6\u65b9\u6cd5\uff0c\u6bd4\u5982RSA\u516c\u94a5\u52a0\u5bc6\u3002\n\n\uff084\uff09 \u652f\u6301\u7684\u538b\u7f29\u65b9\u6cd5\u3002\n')),(0,a.kt)("p",null,"\u8fd9\u91cc\u5ba2\u6237\u7aef\u53d1\u9001\u7684\u4fe1\u606f\u4e0d\u5305\u62ec\u670d\u52a1\u5668\u7684\u57df\u540d, \u4e5f\u5c31\u662f\u8bf4\u7406\u8bba\u4e0a\u670d\u52a1\u5668\u53ea\u80fd\u5305\u542b\u4e00\u4e2a\u7f51\u7ad9, \u5426\u5219\u5c31\u4e0d\u77e5\u9053\u5e94\u8be5\u5411\u5ba2\u6237\u7aef\u63d0\u4f9b\u54ea\u4e00\u4e2a\u7f51\u7ad9\u7684\u6570\u5b57\u8bc1\u4e66, \u8fd9\u4e5f\u662f\u4e3a\u4ec0\u4e48\u670d\u52a1\u5668\u901a\u5e38\u53ea\u80fd\u6709\u4e00\u5f20\u6570\u5b57\u8bc1\u4e66."),(0,a.kt)("p",null,"\u5bf9\u4e8e\u865a\u62df\u4e3b\u673a\u7684\u7528\u6237\u6765\u8bf4\uff0c\u8fd9\u5f53\u7136\u5f88\u4e0d\u65b9\u4fbf\u30022006 \u5e74\uff0cTLS \u534f\u8bae\u52a0\u5165\u4e86\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"Server Name Indication"),"\u6269\u5c55\uff0c\u5141\u8bb8\u5ba2\u6237\u7aef\u5411\u670d\u52a1\u5668\u63d0\u4f9b\u5b83\u6240\u8bf7\u6c42\u7684\u57df\u540d\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6b64\u65f6\u5ba2\u6237\u7aef\u62e5\u6709\u5bc6\u94a5A")),(0,a.kt)("h3",{id:"\u670d\u52a1\u5668\u56de\u5e94severhello"},"\u670d\u52a1\u5668\u56de\u5e94\uff08SeverHello\uff09"),(0,a.kt)("p",null,"\u670d\u52a1\u5668\u6536\u5230\u5ba2\u6237\u7aef\u8bf7\u6c42, \u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"ServerHello"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\uff081\uff09 \u786e\u8ba4\u4f7f\u7528\u7684\u52a0\u5bc6\u901a\u4fe1\u534f\u8bae\u7248\u672c\uff0c\u6bd4\u5982TLS 1.0\u7248\u672c\u3002\u5982\u679c\u6d4f\u89c8\u5668\u4e0e\u670d\u52a1\u5668\u652f\u6301\u7684\u7248\u672c\u4e0d\u4e00\u81f4\uff0c\u670d\u52a1\u5668\u5173\u95ed\u52a0\u5bc6\u901a\u4fe1\u3002\n\n\uff082\uff09 \u4e00\u4e2a\u670d\u52a1\u5668\u751f\u6210\u7684\u968f\u673a\u6570B\uff0c\u7a0d\u540e\u7528\u4e8e\u751f\u6210"\u5bf9\u8bdd\u5bc6\u94a5".\n\n\uff083\uff09 \u786e\u8ba4\u4f7f\u7528\u7684\u52a0\u5bc6\u65b9\u6cd5\uff0c\u6bd4\u5982RSA\u516c\u94a5\u52a0\u5bc6.\n\n\uff084\uff09 \u670d\u52a1\u5668\u8bc1\u4e66(\u5305\u542b\u670d\u52a1\u5668\u7684\u516c\u94a5\u4fe1\u606f).\n')),(0,a.kt)("p",null,'\u9664\u4e86\u4e0a\u9762\u8fd9\u4e9b\u4fe1\u606f, \u5982\u679c\u670d\u52a1\u5668\u9700\u8981\u786e\u8ba4\u5ba2\u6237\u7aef\u7684\u8eab\u4efd, \u5c31\u8981\u5305\u542b\u4e00\u9879\u8bf7\u6c42, \u8981\u6c42\u5ba2\u6237\u7aef\u63d0\u4f9b"\u5ba2\u6237\u7aef\u8bc1\u4e66", \u6bd4\u5982\u91d1\u878d\u673a\u6784\u53ea\u5141\u8bb8r\u8ba4\u8bc1\u5ba2\u6237\u8fde\u63a5\u5165\u7f51\u7edc, \u5c31\u4f1a\u5411\u771f\u662f\u5ba2\u6237\u63d0\u4f9b USB \u5bc6\u94a5, \u91cc\u9762\u5c31\u5305\u542b\u4e86\u4e00\u5f20\u5ba2\u6237\u7aef\u8bc1\u4e66.'),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6b64\u65f6\u670d\u52a1\u7aef\u62e5\u6709\u5bc6\u94a5 A, B")),(0,a.kt)("h3",{id:"\u5ba2\u6237\u7aef\u56de\u5e94"},"\u5ba2\u6237\u7aef\u56de\u5e94"),(0,a.kt)("p",null,"\u5ba2\u6237\u7aef\u6536\u5230\u670d\u52a1\u5668\u56de\u5e94\u4ee5\u540e, \u4f1a\u9a8c\u8bc1\u8bc1\u4e66\u7684\u6709\u6548\u6027, \u5927\u81f4\u6b65\u9aa4\u5982\u4e0b:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9a8c\u8bc1\u8bc1\u4e66\u7684\u6709\u6548\u671f(\u8d77\u6b62\u65f6\u95f4)"),(0,a.kt)("li",{parentName:"ol"},"\u9a8c\u8bc1\u8bc1\u4e66\u57df\u540d"),(0,a.kt)("li",{parentName:"ol"},"\u9a8c\u8bc1\u8bc1\u4e66\u540a\u9500\u72b6\u6001"),(0,a.kt)("li",{parentName:"ol"},"\u9a8c\u8bc1\u8bc1\u4e66\u9881\u53d1\u673a\u6784, \u5982\u679c\u9881\u53d1\u673a\u6784\u662f\u4e2d\u95f4\u8bc1\u4e66, \u518d\u9a8c\u8bc1\u4e2d\u95f4\u8bc1\u4e66\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"\u6709\u6548\u671f/\u9881\u53d1\u673a\u6784/\u540a\u9500\u72b6\u6001"),". \u4e00\u76f4\u9a8c\u8bc1\u5230\u6700\u540e\u4e00\u5c42\u8bc1\u4e66, \u5982\u679c\u6700\u540e\u4e00\u5c42\u8bc1\u4e66\u662f\u5728\u64cd\u4f5c\u7cfb\u7edf\u6216\u6d4f\u89c8\u5668\u5185\u7f6e, \u90a3\u4e48\u5c31\u662f\u53ef\u4fe1\u7684, \u5426\u5219\u5c31\u662f\u81ea\u7b7e\u540d\u8bc1\u4e66(\u5c42\u5c42\u9a8c\u8bc1\u673a\u5236)")),(0,a.kt)("p",null,"\u4ee5\u4e0a\u9a8c\u8bc1\u6b65\u9aa4, \u9700\u8981\u5168\u90e8\u901a\u8fc7. \u5426\u5219\u5c31\u4f1a\u663e\u793a\u8b66\u544a."),(0,a.kt)("p",null,"\u5982\u679c\u8bc1\u4e66\u6ca1\u6709\u95ee\u9898, \u5c31\u4f1a\u53d6\u51fa\u516c\u94a5\u8fdb\u884c\u52a0\u5bc6, \u7136\u540e\u5411\u670d\u52a1\u5668\u53d1\u9001\u4ee5\u4e0b\u4fe1\u606f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\uff081\uff09 \u4e00\u4e2a\u968f\u673a\u6570C\u3002\u8be5\u968f\u673a\u6570\u7528\u670d\u52a1\u5668\u516c\u94a5\u52a0\u5bc6\uff0c\u9632\u6b62\u88ab\u7a83\u542c\u3002\n\n\uff082\uff09 \u7f16\u7801\u6539\u53d8\u901a\u77e5\uff0c\u8868\u793a\u968f\u540e\u7684\u4fe1\u606f\u90fd\u5c06\u7528\u53cc\u65b9\u5546\u5b9a\u7684\u52a0\u5bc6\u65b9\u6cd5\u548c\u5bc6\u94a5\u53d1\u9001\u3002\n\n\uff083\uff09 \u5ba2\u6237\u7aef\u63e1\u624b\u7ed3\u675f\u901a\u77e5\uff0c\u8868\u793a\u5ba2\u6237\u7aef\u7684\u63e1\u624b\u9636\u6bb5\u5df2\u7ecf\u7ed3\u675f\u3002\u8fd9\u4e00\u9879\u540c\u65f6\u4e5f\u662f\u524d\u9762\u53d1\u9001\u7684\u6240\u6709\u5185\u5bb9\u7684hash\u503c\uff0c\u7528\u6765\u4f9b\u670d\u52a1\u5668\u6821\u9a8c\u3002\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6b64\u65f6\u5ba2\u6237\u7aef\u62e5\u6709\u5bc6\u94a5A, B, \u4ee5\u53ca\u4e00\u4e2a\u968f\u673a\u6570C")),(0,a.kt)("p",null,'\u7b2c\u4e00\u9879\u7684\u968f\u673a\u6570, \u662f\u6574\u4e2a\u63e1\u624b\u9636\u6bb5\u51fa\u73b0\u7684\u7b2c\u4e09\u4e2a\u968f\u673a\u6570, \u53c8\u79f0"pre-master key". \u6709\u4e86\u8fd9\u4e2a, \u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u5c31\u540c\u65f6\u6709\u4e86\u4e09\u4e2a\u968f\u673a\u6570, \u63a5\u7740\u4f7f\u7528\u5b9e\u73b0\u5546\u5b9a\u7684\u52a0\u5bc6\u65b9\u6cd5, \u5404\u81ea\u751f\u6210\u672c\u6b21\u6240\u7528\u7684\u4e00\u4e2a"\u4f1a\u8bdd\u5bc6\u94a5"'),(0,a.kt)("admonition",{title:"\u5173\u4e8e\u968f\u673a\u6570",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u4e0d\u7ba1\u662f\u5ba2\u6237\u7aef\u8fd8\u662f\u670d\u52a1\u5668\uff0c\u90fd\u9700\u8981\u968f\u673a\u6570\uff0c\u8fd9\u6837\u751f\u6210\u7684\u5bc6\u94a5\u624d\u4e0d\u4f1a\u6bcf\u6b21\u90fd\u4e00\u6837\u3002\u7531\u4e8e SSL \u534f\u8bae\u4e2d\u8bc1\u4e66\u662f\u9759\u6001\u7684\uff0c\u56e0\u6b64\u5341\u5206\u6709\u5fc5\u8981\u5f15\u5165\u4e00\u79cd\u968f\u673a\u56e0\u7d20\u6765\u4fdd\u8bc1\u534f\u5546\u51fa\u6765\u7684\u5bc6\u94a5\u7684\u968f\u673a\u6027\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e RSA \u5bc6\u94a5\u4ea4\u6362\u7b97\u6cd5\u6765\u8bf4\uff0cpre-master-key \u672c\u8eab\u5c31\u662f\u4e00\u4e2a\u968f\u673a\u6570\uff0c\u518d\u52a0\u4e0a hello \u6d88\u606f\u4e2d\u7684\u968f\u673a\uff0c\u4e09\u4e2a\u968f\u673a\u6570\u901a\u8fc7\u4e00\u4e2a\u5bc6\u94a5\u5bfc\u51fa\u5668\u6700\u7ec8\u5bfc\u51fa\u4e00\u4e2a\u5bf9\u79f0\u5bc6\u94a5\u3002"),(0,a.kt)("p",{parentName:"admonition"},"pre master \u7684\u5b58\u5728\u662f\u56e0\u4e3a SSL \u534f\u8bae\u4e0d\u4fe1\u4efb\u6bcf\u4e2a\u4e3b\u673a\u90fd\u80fd\u4ea7\u751f\u5b8c\u5168\u968f\u673a\u7684\u968f\u673a\u6570\uff0c\u5982\u679c\u968f\u673a\u6570\u4e0d\u968f\u673a\uff0c\u90a3\u4e48 pre master secret \u5c31\u6709\u53ef\u80fd\u88ab\u731c\u51fa\u6765\uff0c\u90a3\u4e48\u4ec5\u4f7f\u7528 pre master secret \u4f5c\u4e3a\u5bc6\u94a5\u5c31\u4e0d\u5408\u9002\u4e86\uff0c\u56e0\u6b64\u5fc5\u987b\u5f15\u5165\u65b0\u7684\u968f\u673a\u56e0\u7d20\uff0c\u90a3\u4e48\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u52a0\u4e0a pre master secret \u4e09\u4e2a\u968f\u673a\u6570\u4e00\u540c\u751f\u6210\u7684\u5bc6\u94a5\u5c31\u4e0d\u5bb9\u6613\u88ab\u731c\u51fa\u4e86\uff0c\u4e00\u4e2a\u4f2a\u968f\u673a\u53ef\u80fd\u5b8c\u5168\u4e0d\u968f\u673a\uff0c\u53ef\u662f\u662f\u4e09\u4e2a\u4f2a\u968f\u673a\u5c31\u5341\u5206\u63a5\u8fd1\u968f\u673a\u4e86\uff0c\u6bcf\u589e\u52a0\u4e00\u4e2a\u81ea\u7531\u5ea6\uff0c\u968f\u673a\u6027\u589e\u52a0\u7684\u53ef\u4e0d\u662f\u4e00\u3002")),(0,a.kt)("p",null,"\u6b64\u5916\uff0c\u5982\u679c\u524d\u4e00\u6b65\uff0c\u670d\u52a1\u5668\u8981\u6c42\u5ba2\u6237\u7aef\u8bc1\u4e66\uff0c\u5ba2\u6237\u7aef\u4f1a\u5728\u8fd9\u4e00\u6b65\u53d1\u9001\u8bc1\u4e66\u53ca\u76f8\u5173\u4fe1\u606f\u3002"),(0,a.kt)("h3",{id:"\u670d\u52a1\u5668\u7684\u6700\u540e\u54cd\u5e94"},"\u670d\u52a1\u5668\u7684\u6700\u540e\u54cd\u5e94"),(0,a.kt)("p",null,"\u670d\u52a1\u5668\u6536\u5230\u5ba2\u6237\u7aef\u7684\u7b2c\u4e09\u4e2a\u968f\u673a\u6570, \u7528\u81ea\u5df1\u7684\u79c1\u94a5\u89e3\u5bc6, \u7136\u540e\u8ba1\u7b97\u751f\u6210\u672c\u6b21\u4f1a\u8bdd\u6240\u7528\u7684",(0,a.kt)("strong",{parentName:"p"},"\u4f1a\u8bdd\u5bc6\u94a5"),", \u7136\u540e\u5411\u5ba2\u6237\u7aef\u53d1\u9001\u4ee5\u4e0b\u4fe1\u606f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\uff081\uff09\u7f16\u7801\u6539\u53d8\u901a\u77e5\uff0c\u8868\u793a\u968f\u540e\u7684\u4fe1\u606f\u90fd\u5c06\u7528\u53cc\u65b9\u5546\u5b9a\u7684\u52a0\u5bc6\u65b9\u6cd5\u548c\u5bc6\u94a5\u53d1\u9001\u3002\n\n\uff082\uff09\u670d\u52a1\u5668\u63e1\u624b\u7ed3\u675f\u901a\u77e5\uff0c\u8868\u793a\u670d\u52a1\u5668\u7684\u63e1\u624b\u9636\u6bb5\u5df2\u7ecf\u7ed3\u675f\u3002\u8fd9\u4e00\u9879\u540c\u65f6\u4e5f\u662f\u524d\u9762\u53d1\u9001\u7684\u6240\u6709\u5185\u5bb9\u7684hash\u503c\uff0c\u7528\u6765\u4f9b\u5ba2\u6237\u7aef\u6821\u9a8c\u3002\n")),(0,a.kt)("p",null,'\u81f3\u6b64, \u6574\u4e2a\u63e1\u624b\u9636\u6bb5\u5168\u90e8\u7ed3\u675f. \u63a5\u4e0b\u6765, \u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u7aef\u8fdb\u5165\u52a0\u5bc6\u901a\u4fe1, \u5c31\u5b8c\u5168\u662f\u4f7f\u7528\u666e\u901a\u7684 HTTP \u534f\u8bae, \u53ea\u4e0d\u8fc7\u7528"\u4f1a\u8bdd\u5bc6\u94a5"\u52a0\u5bc6\u5185\u5bb9.'),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u81f3\u6b64, \u670d\u52a1\u7aef\u62e5\u6709\u5bc6\u94a5A, B, \u4ee5\u53ca\u968f\u673a\u6570C. A, B \u662f\u56fa\u5b9a\u7684, \u968f\u673a\u6570C\u662f\u968f\u7740\u5f53\u524d\u7684\u8bf7\u6c42\u751f\u6210\u7684")),(0,a.kt)("h2",{id:"\u4e2d\u95f4\u4eba\u653b\u51fb"},"\u4e2d\u95f4\u4eba\u653b\u51fb"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4e2d\u95f4\u4eba\u653b\u51fb\u8fc7\u7a0b\u5982\u4e0b:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u670d\u52a1\u5668\u5411\u5ba2\u6237\u7aef\u53d1\u9001 ",(0,a.kt)("strong",{parentName:"li"},"\u516c\u94a5")," \u3002"),(0,a.kt)("li",{parentName:"ol"},"\u653b\u51fb\u8005\u622a\u83b7\u516c\u94a5\uff0c\u4fdd\u7559\u5728\u81ea\u5df1\u624b\u4e0a\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u7136\u540e\u653b\u51fb\u8005\u81ea\u5df1\u751f\u6210\u4e00\u4e2a ",(0,a.kt)("strong",{parentName:"li"},"\u4f2a\u9020\u7684\u516c\u94a5")," \uff0c\u53d1\u7ed9\u5ba2\u6237\u7aef\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5ba2\u6237\u7aef\u6536\u5230\u4f2a\u9020\u7684\u516c\u94a5\u540e\uff0c\u751f\u6210\u52a0\u5bc6 hash \u503c\u53d1\u7ed9\u670d\u52a1\u5668\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u653b\u51fb\u8005\u83b7\u5f97\u52a0\u5bc6 hash \u503c\uff0c\u7528\u81ea\u5df1\u7684\u79c1\u94a5\u89e3\u5bc6\u83b7\u5f97",(0,a.kt)("strong",{parentName:"li"},"\u4f20\u8f93\u5bc6\u94a5"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u540c\u65f6\u751f\u6210\u5047\u7684\u52a0\u5bc6 hash \u503c\uff0c\u53d1\u7ed9\u670d\u52a1\u5668\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u670d\u52a1\u5668\u7528",(0,a.kt)("strong",{parentName:"li"},"\u79c1\u94a5"),"\u89e3\u5bc6\u83b7\u5f97\u5047\u79d8\u94a5\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u670d\u52a1\u5668\u7528\u52a0",(0,a.kt)("strong",{parentName:"li"},"\u79d8\u94a5"),"\u52a0\u5bc6\u4f20\u8f93\u4fe1\u606f")),(0,a.kt)("p",null,"\u8fd9\u6837, \u5728\u670d\u52a1\u5668\u548c\u5ba2\u6237\u7aef\u90fd\u4e0d\u4f1a\u53d1\u751f\u5f02\u5e38\u7684\u60c5\u51b5\u4e0b, \u6b3a\u9a97\u4e86\u6d4f\u89c8\u5668, \u5f97\u5230\u4e86\u5bc6\u94a5X. \u66f4\u6839\u672c\u7684\u539f\u56e0\u5728\u4e8e\u6d4f\u89c8\u5668\u65e0\u6cd5\u786e\u8ba4\u81ea\u5df1\u6536\u5230\u7684\u516c\u94a5\u662f\u4e0d\u662f\u7f51\u7ad9\u81ea\u5df1\u7684. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u9632\u8303\u65b9\u6cd5\uff1a")),(0,a.kt)("p",null,"\u670d\u52a1\u7aef\u5728\u53d1\u9001\u6d4f\u89c8\u5668\u7684\u516c\u94a5\u4e2d\u52a0\u5165",(0,a.kt)("strong",{parentName:"p"},"CA\u8bc1\u4e66"),"\uff0c\u6d4f\u89c8\u5668\u53ef\u4ee5\u9a8c\u8bc1",(0,a.kt)("strong",{parentName:"p"},"CA\u8bc1\u4e66"),"\u7684\u6709\u6548\u6027"),(0,a.kt)("h2",{id:"\u6570\u5b57\u8bc1\u4e66"},"\u6570\u5b57\u8bc1\u4e66"),(0,a.kt)("p",null,"\u7f51\u7ad9\u5728\u4f7f\u7528HTTPS\u524d, \u9700\u8981\u5411CA\u673a\u6784\u7533\u9886\u4e00\u4efd\u6570\u5b57\u8bc1\u4e66, \u6570\u5b57\u8bc1\u4e66\u91cc\u9762\u542b\u6709\u8bc1\u4e66\u6301\u6709\u8005\u4fe1\u606f, \u516c\u94a5\u7b49\u4fe1\u606f. \u670d\u52a1\u5668\u628a\u8bc1\u4e66\u4f20\u8f93\u7ed9\u6d4f\u89c8\u5668, \u6d4f\u89c8\u5668\u4ece\u8bc1\u4e66\u91cc\u9762\u83b7\u53d6\u516c\u94a5\u5c31\u53ef\u4ee5\u4e86, \u8bc1\u4e66\u5c31\u662f\u670d\u52a1\u5668\u7684\u8eab\u4efd\u8bc1. \u8bc1\u660e\u8be5\u516c\u94a5\u5bf9\u5e94\u8be5\u7f51\u7ad9. "),(0,a.kt)("p",null,'\u8fd9\u91cc\u7684\u5173\u952e\u95ee\u9898\u5728\u4e8e: "\u8bc1\u4e66\u672c\u8eab\u7684\u4f20\u8f93\u8fc7\u7a0b\u4e2d, \u5982\u4f55\u9632\u6b62\u88ab\u7be1\u6539?", \u5373\u5982\u4f55\u8bc1\u660e\u8bc1\u4e66\u672c\u8eab\u7684\u771f\u5b9e\u6027? \u8fd9\u5c31\u662f\u6570\u5b57\u7b7e\u540d\u6280\u672f\u53d1\u6325\u4f5c\u7528\u7684\u65f6\u5019\u4e86.'),(0,a.kt)("h2",{id:"\u6570\u5b57\u7b7e\u540d"},"\u6570\u5b57\u7b7e\u540d"),(0,a.kt)("p",null,"\u6570\u5b57\u7b7e\u540d\u7684\u5236\u4f5c\u548c\u9a8c\u8bc1\u8fc7\u7a0b\u5982\u4e0b:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic3.zhimg.com/80/v2-c351011aed3f71512b06c78423427e0a_720w.jpg",alt:"alt"})),(0,a.kt)("p",null,"\u6570\u5b57\u7b7e\u540d\u7684\u5236\u4f5c\u8fc7\u7a0b:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"CA\u62e5\u6709\u975e\u5bf9\u79f0\u52a0\u5bc6\u7684\u79c1\u94a5\u548c\u516c\u94a5"),(0,a.kt)("li",{parentName:"ol"},"CS\u5bf9\u8bc1\u4e66\u7684\u660e\u6587\u4fe1\u606f\u8fdb\u884chash"),(0,a.kt)("li",{parentName:"ol"},"\u5bf9hash\u540e\u7684\u503c\u7528",(0,a.kt)("strong",{parentName:"li"},"\u79c1\u94a5"),"\u8fdb\u884c\u7b7e\u540d, \u5f97\u5230\u6570\u5b57\u7b7e\u540d")),(0,a.kt)("p",null,"\u660e\u6587\u548c\u6570\u5b57\u7b7e\u540d\u5171\u540c\u7ec4\u6210\u4e86\u6570\u5b57\u8bc1\u4e66, \u8fd9\u6837\u4e00\u4efd\u6570\u5b57\u8bc1\u4e66\u5c31\u53ef\u4ee5\u9881\u53d1\u7ed9\u7f51\u7ad9\u4e86."),(0,a.kt)("p",null,"\u6d4f\u89c8\u5668\u9a8c\u8bc1\u8fc7\u7a0b:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u62ff\u5230\u8bc1\u4e66, \u5f97\u5230\u660e\u6587T, \u6570\u5b57\u7b7e\u540dS"),(0,a.kt)("li",{parentName:"ol"},"\u7528CS\u673a\u6784\u7684\u516c\u94a5\u5bf9S\u89e3\u5bc6(",(0,a.kt)("strong",{parentName:"li"},"\u6d4f\u89c8\u5668\u4fe1\u4efb\u7684\u673a\u6784"),", \u6240\u4ee5\u6d4f\u89c8\u5668\u4fdd\u6709\u5176\u516c\u94a5), \u5f97\u5230S'"),(0,a.kt)("li",{parentName:"ol"},"\u7528\u8bc1\u4e66\u91cc\u9762\u7684hash\u7b97\u6cd5\u5bf9\u660e\u6587T\u8fdb\u884chash\u5f97\u5230T'"),(0,a.kt)("li",{parentName:"ol"},"\u6bd4\u8f83S'\u662f\u5426\u7b49\u4e8eT', \u4e3a\u771f\u5219\u8868\u793a\u8bc1\u4e66\u53ef\u4fe1(\u6ca1\u6709\u88ab\u7be1\u6539)")),(0,a.kt)("h2",{id:"\u540a\u9500\u68c0\u67e5"},"\u540a\u9500\u68c0\u67e5"),(0,a.kt)("p",null,"\u76ee\u524d\u5199\u8fdb\u56fd\u9645\u6807\u51c6\u7684\u540a\u9500\u72b6\u6001\u68c0\u67e5\u534f\u8bae\u6709\u4e24\u79cd: 1.CRL, 2. OCSP"),(0,a.kt)("p",null,"CRL \u662f\u4e00\u4efd\u5168\u91cf\u7684\u6587\u4ef6, \u8bb0\u5f55\u4e86\u88ab\u6b64 CRL \u9650\u5236\u7684\u8bc1\u4e66\u4e2d\u6240\u6709\u88ab\u540a\u9500\u8bc1\u4e66\u7684\u5e8f\u5217\u53f7. \u901a\u8fc7\u5339\u914d\u5f53\u524d\u8bc1\u4e66\u5e8f\u5217\u53f7, \u4e0e CRL \u4e2d\u5e8f\u5217\u53f7, \u6765\u5224\u65ad."),(0,a.kt)("p",null,"\u6709\u70b9\u7ed5, \u53cd\u6b63\u5c31\u8bf4, \u6240\u6709\u6253\u4e0a\u4e86\u8fd9\u4e2a URL \u7684 CRL \u7684\u8bc1\u4e66, \u53ea\u8981\u5176\u4e2d\u4e00\u4e2a\u88ab\u540a\u9500, \u90a3\u4e48\u4e0b\u6b21 CRL \u66f4\u65b0\u65f6, \u5747\u4f1a\u67e5\u8be2\u5339\u914d\u5230.\n\u90a3\u4e48\u53ef\u4e0d\u53ef\u4ee5\u8ba4\u4e3a\u4e00\u4e2a\u4e2d\u95f4\u9881\u53d1\u673a\u6784\u9881\u53d1\u7684\u8bc1\u4e66\u7684 CRL \u5217\u8868\u53ea\u6709\u4e00\u4e2a? \u4e0d\u53ef\u4ee5! \u56e0\u4e3a\u6570\u91cf\u53ef\u80fd\u592a\u591a, \u5382\u5546\u5b8c\u5168\u53ef\u4ee5\u5c06\u540c\u4e00\u4e2a\u4e2d\u95f4\u8bc1\u4e66\u9881\u53d1\u7684\u6700\u7ec8\u8bc1\u4e66, \u5206\u4e0d\u540c\u6279\u6253\u4e0d\u540c\u7684 CRL.\n\u800c OCSP \u662f TCP \u670d\u52a1, \u901a\u8fc7\u8bf7\u6c42\u8bc1\u4e66\u5e8f\u5217\u53f7, \u670d\u52a1\u5668\u544a\u77e5\u5f53\u524d\u5e8f\u5217\u53f7\u662f\u5426\u5728\u88ab\u540a\u9500\u540d\u5355."),(0,a.kt)("p",null,"\u6709\u7684\u8bc1\u4e66\u5185\u7f6e\u4e86 CRL+OCSP, \u6709\u70b9\u53ea\u5185\u7f6e\u4e86 OCSP, \u8fd8\u6709\u7684\u65e9\u8d77\u8bc1\u4e66\u53ea\u5185\u7f6e\u4e86 CRL, \u4f46\u53ea\u5185\u7f6e CRL \u7684\u8bc1\u4e66\u662f\u4e0d\u88ab\u65b0\u578b\u6d4f\u89c8\u5668\u4fe1\u4efb\u4e86."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:l(9717).Z,width:"646",height:"612"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u540a\u9500\u72b6\u6001\u68c0\u67e5, \u662f\u540c\u6b65\u7684\u8fd8\u662f\u5f02\u6b65\u7684?"),(0,a.kt)("p",{parentName:"admonition"},"\u540c\u6b65\u7684. \u5982\u679c\u5f02\u6b65\u68c0\u67e5, \u6709\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6d4f\u89c8\u5668\u53d1\u9001\u6570\u636e\u7ed9\u4e86\u672a\u9a8c\u8bc1\u7684\u4e3b\u673a\u540e, \u8fc7\u4e86\u4e00\u6bb5\u65f6\u95f4\u624d\u68c0\u67e5\u51fa\u6765\u8bc1\u4e66\u5df2\u540a\u9500. \u6240\u4ee5, \u5fc5\u987b\u540c\u6b65")),(0,a.kt)("h2",{id:"\u7b7e\u53d1\u8005"},"\u7b7e\u53d1\u8005"),(0,a.kt)("p",null,"\u8bc1\u4e66\u7684\u7b7e\u53d1\u8005, \u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\u83b7\u5f97"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'\u670d\u52a1\u5668\u8bc1\u4e66, \u5982\u679c\u5305\u542b\u4e86\u8bc1\u4e66\u94fe, \u6d4f\u89c8\u5668\u4f1a\u5c1d\u8bd5\u5339\u914d(\u6839\u636e\u5f53\u524d\u8bc1\u4e66\u7684"\u7b7e\u53d1\u8005\u516c\u94a5"\u5339\u914d\u94fe\u4e2d\u7684\u540e\u7eed\u8bc1\u4e66\u7684"\u516c\u94a5"), \u5982\u679c\u5339\u914d\u5931\u8d25, \u8d70 2.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u8bc1\u4e66\u4e2d\u5982\u679c\u6709\u58f0\u660e",(0,a.kt)("inlineCode",{parentName:"p"},"\u7b7e\u53d1\u8005 URL"),", \u6d4f\u89c8\u5668\u5c1d\u8bd5\u4e0b\u8f7d. \u5e76\u901a\u8fc7\u516c\u94a5\u5339\u914d(\u540c 1), \u5982\u679c\u5339\u914d\u5931\u8d25, \u8d70 3")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u64cd\u4f5c\u7cfb\u7edf\u6216\u5ba2\u6237\u7aef\u6d4f\u89c8\u5668\u5185\u7f6e\u8bc1\u4e66\u516c\u94a5\u5339\u914d, \u5982\u679c\u5339\u914d\u5931\u8d25, \u5219\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"ERR_CERT_AUTORITY_INVALID"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u9644\u52a0\u9879: \u5982\u679c\u4efb\u4f55\u4e00\u7ea7\u8bc1\u4e66, \u88ab\u58f0\u660e\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"oID"),", \u5219\u4f1a\u88ab\u6d4f\u89c8\u5668\u663e\u793a\u6210",(0,a.kt)("inlineCode",{parentName:"p"},"EV"),"(\u7eff\u8272\u5730\u5740\u680f\u5e26\u4e0a\u516c\u53f8\u540d\u79f0)."))),(0,a.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.ruanyifeng.com/blog/2014/02/ssl_tls.html"},"SSL/TLS \u534f\u8bae\u8fd0\u884c\u673a\u5236\u7684\u6982\u8ff0")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.weixin.qq.com/community/develop/article/doc/000046a5fdc7802a15f7508b556413"},"\u4e00\u6b21\u5b89\u5168\u53ef\u9760\u7684\u901a\u4fe1\u2014\u2014HTTPS \u539f\u7406")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/25587986"},"HTTPs \u5165\u95e8, \u56fe\u89e3 SSL \u4ece\u56de\u8f66\u5230\u63e1\u624b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/43789231"},"\u5f7b\u5e95\u641e\u61c2HTTPS\u7684\u52a0\u5bc6\u673a\u5236")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://item.jd.com/11449491.html"},"\u56fe\u89e3HTTP"))))}u.isMDXComponent=!0},2200:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/https_1-d73c58a28683e708394f337ec6501a08.png"},9717:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/https_2-9057084dce30f17f30632a0d69cfd7ee.png"}}]);