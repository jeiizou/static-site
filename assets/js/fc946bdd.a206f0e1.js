"use strict";(self.webpackChunkwiki_site=self.webpackChunkwiki_site||[]).push([[4343],{50158:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>h});var r=t(46393);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=d(t),h=l,f=u["".concat(c,".").concat(h)]||u[h]||p[h]||i;return t?r.createElement(f,a(a({ref:n},s),{},{components:t})):r.createElement(f,a({ref:n},s))}));function h(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,a=new Array(i);a[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var d=2;d<i;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},94664:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=t(39421),l=(t(46393),t(50158));const i={},a="DFS&BFS",o={unversionedId:"\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5/DFS&BFS",id:"\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5/DFS&BFS",title:"DFS&BFS",description:"\u6df1\u5ea6\u4f18\u5148\u904d\u5386(DFS)",source:"@site/docs/04-\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5/DFS&BFS.md",sourceDirName:"04-\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5",slug:"/\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5/DFS&BFS",permalink:"/docs/\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5/DFS&BFS",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7f51\u7edc\u6a21\u578b\u6982\u8ff0",permalink:"/docs/\u8ba1\u7b97\u673a\u7f51\u7edc/\u7f51\u7edc\u6a21\u578b\u6982\u8ff0"},next:{title:"\u5085\u91cc\u53f6\u53d8\u6362",permalink:"/docs/\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5/\u5085\u91cc\u53f6\u53d8\u6362"}},c={},d=[{value:"\u6df1\u5ea6\u4f18\u5148\u904d\u5386(DFS)",id:"\u6df1\u5ea6\u4f18\u5148\u904d\u5386dfs",level:2},{value:"\u4f20\u53c2\u7684\u9012\u5f52",id:"\u4f20\u53c2\u7684\u9012\u5f52",level:3},{value:"\u4e0d\u4f20\u53c2\u7684\u9012\u5f52",id:"\u4e0d\u4f20\u53c2\u7684\u9012\u5f52",level:3},{value:"\u975e\u9012\u5f52",id:"\u975e\u9012\u5f52",level:3},{value:"\u5e7f\u5ea6\u4f18\u5148\u904d\u5386(BFS)",id:"\u5e7f\u5ea6\u4f18\u5148\u904d\u5386bfs",level:2},{value:"\u961f\u5217\u5b9e\u73b0",id:"\u961f\u5217\u5b9e\u73b0",level:3}],s={toc:d};function p(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"dfsbfs"},"DFS&BFS"),(0,l.kt)("h2",{id:"\u6df1\u5ea6\u4f18\u5148\u904d\u5386dfs"},"\u6df1\u5ea6\u4f18\u5148\u904d\u5386(DFS)"),(0,l.kt)("h3",{id:"\u4f20\u53c2\u7684\u9012\u5f52"},"\u4f20\u53c2\u7684\u9012\u5f52"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let deepTraversal1 = (node, nodeList = []) => {\n    if (node !== null) {\n        nodeList.push(node);\n        let children = node.children;\n        for (let i = 0; i < children.length; i++) {\n            deepTraversal1(children[i], nodeList);\n        }\n    }\n    return nodeList;\n};\n")),(0,l.kt)("h3",{id:"\u4e0d\u4f20\u53c2\u7684\u9012\u5f52"},"\u4e0d\u4f20\u53c2\u7684\u9012\u5f52"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let deepTraversal2 = node => {\n    let nodes = [];\n    if (node !== null) {\n        nodes.push(node);\n        let children = node.children;\n        for (let i = 0; i < children.length; i++) {\n            nodes = nodes.concat(deepTraversal2(children[i]));\n        }\n    }\n    return nodes;\n};\n")),(0,l.kt)("h3",{id:"\u975e\u9012\u5f52"},"\u975e\u9012\u5f52"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let deepTraversal3 = node => {\n    let stack = [];\n    let nodes = [];\n    if (node) {\n        // \u63a8\u5165\u5f53\u524d\u5904\u7406\u7684node\n        stack.push(node);\n        while (stack.length) {\n            let item = stack.pop();\n            let children = item.children;\n            nodes.push(item);\n            // node = [] stack = [parent]\n            // node = [parent] stack = [child3,child2,child1]\n            // node = [parent, child1] stack = [child3,child2,child1-2,child1-1]\n            // node = [parent, child1-1] stack = [child3,child2,child1-2]\n            for (let i = children.length - 1; i >= 0; i--) {\n                stack.push(children[i]);\n            }\n        }\n    }\n    return nodes;\n};\n")),(0,l.kt)("h2",{id:"\u5e7f\u5ea6\u4f18\u5148\u904d\u5386bfs"},"\u5e7f\u5ea6\u4f18\u5148\u904d\u5386(BFS)"),(0,l.kt)("h3",{id:"\u961f\u5217\u5b9e\u73b0"},"\u961f\u5217\u5b9e\u73b0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let widthTraversal2 = node => {\n    let nodes = [];\n    let stack = [];\n    if (node) {\n        stack.push(node);\n        while (stack.length) {\n            let item = stack.shift();\n            let children = item.children;\n            nodes.push(item);\n            // \u961f\u5217\uff0c\u5148\u8fdb\u5148\u51fa\n            // nodes = [] stack = [parent]\n            // nodes = [parent] stack = [child1,child2,child3]\n            // nodes = [parent, child1] stack = [child2,child3,child1-1,child1-2]\n            // nodes = [parent,child1,child2]\n            for (let i = 0; i < children.length; i++) {\n                stack.push(children[i]);\n            }\n        }\n    }\n    return nodes;\n};\n")))}p.isMDXComponent=!0}}]);