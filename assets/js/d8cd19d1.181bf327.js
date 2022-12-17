"use strict";(self.webpackChunk_jeiiz_wiki_site=self.webpackChunk_jeiiz_wiki_site||[]).push([[685],{50158:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(46393);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(t),g=i,h=d["".concat(l,".").concat(g)]||d[g]||p[g]||s;return t?r.createElement(h,o(o({ref:n},u),{},{components:t})):r.createElement(h,o({ref:n},u))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,o=new Array(s);o[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var c=2;c<s;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},26705:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=t(39421),i=(t(46393),t(50158));const s={},o="\u6570\u636e\u7ed3\u6784-\u56fe",a={unversionedId:"\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5/\u6570\u636e\u7ed3\u6784-\u56fe",id:"\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5/\u6570\u636e\u7ed3\u6784-\u56fe",title:"\u6570\u636e\u7ed3\u6784-\u56fe",description:"\u56fe\u662f\u4e00\u79cd\u590d\u6742\u7684\u975e\u7ebf\u6027\u7ed3\u6784, \u5b83\u7531\u8fb9(Edge)\u548c\u70b9(Vertex)\u7ec4\u6210. \u4e00\u6761\u8fb9\u8fde\u63a5\u7684\u4e24\u4e2a\u70b9\u6210\u4e3a\u76f8\u90bb\u9876\u70b9.",source:"@site/docs/04-\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5/\u6570\u636e\u7ed3\u6784-\u56fe.md",sourceDirName:"04-\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5",slug:"/\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5/\u6570\u636e\u7ed3\u6784-\u56fe",permalink:"/docs/\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5/\u6570\u636e\u7ed3\u6784-\u56fe",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5e76\u67e5\u96c6",permalink:"/docs/\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5/\u5e76\u67e5\u96c6"},next:{title:"\u6570\u636e\u7ed3\u6784-\u6811",permalink:"/docs/\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5/\u6570\u636e\u7ed3\u6784-\u6811"}},l={},c=[{value:"\u56fe\u7684\u8868\u793a",id:"\u56fe\u7684\u8868\u793a",level:2},{value:"\u521b\u5efa\u56fe",id:"\u521b\u5efa\u56fe",level:2},{value:"\u56fe\u7684\u904d\u5386",id:"\u56fe\u7684\u904d\u5386",level:2},{value:"\u6df1\u5ea6\u4f18\u5148\u904d\u5386(DFS)",id:"\u6df1\u5ea6\u4f18\u5148\u904d\u5386dfs",level:3},{value:"\u5e7f\u5ea6\u4f18\u5148\u904d\u5386",id:"\u5e7f\u5ea6\u4f18\u5148\u904d\u5386",level:3},{value:"Dijkstra\u7b97\u6cd5",id:"dijkstra\u7b97\u6cd5",level:2}],u={toc:c};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u6570\u636e\u7ed3\u6784-\u56fe"},"\u6570\u636e\u7ed3\u6784-\u56fe"),(0,i.kt)("p",null,"\u56fe\u662f\u4e00\u79cd\u590d\u6742\u7684\u975e\u7ebf\u6027\u7ed3\u6784, \u5b83\u7531\u8fb9(Edge)\u548c\u70b9(Vertex)\u7ec4\u6210. \u4e00\u6761\u8fb9\u8fde\u63a5\u7684\u4e24\u4e2a\u70b9\u6210\u4e3a\u76f8\u90bb\u9876\u70b9."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"G = (V, E);\n")),(0,i.kt)("p",null,"\u56fe\u53ef\u4ee5\u5206\u4e3a\u6709\u5411\u56fe\u548c\u65e0\u5411\u56fe"),(0,i.kt)("h2",{id:"\u56fe\u7684\u8868\u793a"},"\u56fe\u7684\u8868\u793a"),(0,i.kt)("p",null,"\u56fe\u7684\u53ef\u4ee5\u5206\u4e3a\u4e24\u79cd:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u90bb\u63a5\u77e9\u9635: \u4f7f\u7528\u4e8c\u4f4d\u6570\u636e\u6765\u8868\u793a\u70b9\u4e0e\u70b9\u4e4b\u95f4\u662f\u5426\u6709\u8fb9, \u5982",(0,i.kt)("inlineCode",{parentName:"li"},"arr[i][j]=1"),"\u8868\u793a\u8282\u70b9 i \u4e0e\u8282\u70b9 j \u4e4b\u95f4\u6709\u8fb9, ",(0,i.kt)("inlineCode",{parentName:"li"},"arr[i][j]=0"),"\u5c31\u53ef\u4ee5\u8868\u793a\u8282\u70b9 i \u4e0e\u8282\u70b9 j \u4e4b\u95f4\u6ca1\u6709\u8fb9."),(0,i.kt)("li",{parentName:"ul"},"\u90bb\u63a5\u8868: \u90bb\u63a5\u8868\u662f\u56fe\u7684\u4e00\u79cd\u94fe\u5f0f\u5b58\u50a8\u7ed3\u6784, \u8fd9\u79cd\u7ed3\u6784\u7c7b\u4f3c\u4e8e\u6811\u7684\u5b50\u94fe\u8868, \u5bf9\u4e8e\u56fe\u4e2d\u7684\u6bcf\u4e00\u4e2a\u9876\u70b9 Vi, \u628a\u6240\u6709\u90bb\u63a5\u4e8e Vi \u7684\u9876\u70b9 Vj \u8fde\u6210\u4e00\u4e2a\u5355\u94fe\u8868, \u8fd9\u4e2a\u5355\u94fe\u8868\u5c31\u662f\u9876\u70b9 Vi \u7684\u90bb\u63a5\u8868, \u4f46\u91cf\u8868\u4e00\u822c\u7531\u6570\u7ec4\u6216\u8005\u5b57\u5178\u7ed3\u6784\u8868\u793a.")),(0,i.kt)("h2",{id:"\u521b\u5efa\u56fe"},"\u521b\u5efa\u56fe"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function Graph() {\n    this.vertices = []; // \u9876\u70b9\u96c6\u5408\n    this.edges = new Map(); // \u8fb9\u96c6\u5408\n}\nGraph.prototype.addVertex = function(v) {\n    // \u6dfb\u52a0\u9876\u70b9\u65b9\u6cd5\n    this.vertices.push(v);\n    this.edges.set(v, []);\n};\nGraph.prototype.addEdge = function(v, w) {\n    // \u6dfb\u52a0\u8fb9\u65b9\u6cd5\n    let vEdge = this.edges.get(v);\n    vEdge.push(w);\n    let wEdge = this.edges.get(w);\n    wEdge.push(v);\n    this.edges.set(v, vEdge);\n    this.edges.set(w, wEdge);\n};\nGraph.prototype.toString = function() {\n    var s = '';\n    for (var i = 0; i < this.vertices.length; i++) {\n        s += this.vertices[i] + ' -> ';\n        var neighors = this.edges.get(this.vertices[i]);\n        for (var j = 0; j < neighors.length; j++) {\n            s += neighors[j] + ' ';\n        }\n        s += '\\n';\n    }\n    return s;\n};\n")),(0,i.kt)("h2",{id:"\u56fe\u7684\u904d\u5386"},"\u56fe\u7684\u904d\u5386"),(0,i.kt)("h3",{id:"\u6df1\u5ea6\u4f18\u5148\u904d\u5386dfs"},"\u6df1\u5ea6\u4f18\u5148\u904d\u5386(DFS)"),(0,i.kt)("p",null,"Depth-First-Search, \u6df1\u5ea6\u4f18\u5148\u904d\u5386, \u662f\u641c\u7d22\u7b97\u6cd5\u7684\u4e00\u79cd, \u7b80\u5355\u7684\u8bf4, \u5c31\u662f\u4ece\u4e00\u4e2a\u8282\u70b9\u5f00\u59cb\u8ffd\u6eaf, \u76f4\u5230\u6700\u540e\u4e00\u4e2a\u8282\u70b9, \u7136\u540e\u56de\u6eaf, \u7ee7\u7eed\u8ffd\u6eaf\u4e0b\u4e00\u6761\u8def\u5f84. \u5faa\u73af\u5f80\u590d."),(0,i.kt)("p",null,"DFS \u662f\u4e00\u79cd\u76f2\u76ee\u641c\u7d22\u7b97\u6cd5, \u4e0d\u662f\u6700\u77ed\u8def\u5f84\u4e5f\u4e0d\u662f\u7279\u5b9a\u8def\u5f84, \u800c\u662f\u4e00\u79cd\u904d\u5386\u7b97\u6cd5."),(0,i.kt)("p",null,"\u5927\u81f4\u6b65\u9aa4\u5982\u4e0b:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u8bbf\u95ee\u9876\u70b9"),(0,i.kt)("li",{parentName:"ol"},"\u4e00\u6b21\u4ece\u672a\u88ab\u8bbf\u95ee\u7684\u4e34\u754c\u70b9\u51fa\u53d1, \u8fdb\u884c\u6df1\u5ea6\u4f18\u5148\u904d\u5386, \u77e5\u9053\u56fe\u4e2d\u6709\u548c v \u6709\u8def\u5f84\u76f8\u540c\u7684\u9876\u70b9\u88ab\u8bbf\u95ee(\u5982\u679c\u662f\u6811\u5c31\u662f\u8bbf\u95ee\u5230\u53f6\u5b50\u8282\u70b9)"),(0,i.kt)("li",{parentName:"ol"},"\u82e5\u6b64\u65f6\u56fe\u4e2d\u8fd8\u6709\u6ca1\u6709\u8bbf\u95ee\u7684\u9876\u70b9, \u5219\u4ece\u4e00\u4e2a\u672a\u88ab\u8bbf\u95ee\u7684\u9876\u70b9\u51fa\u53d1, \u91cd\u65b0\u8fdb\u884c\u6df1\u5ea6\u4f18\u5148\u904d\u5386, \u76f4\u5230\u6240\u6709\u9876\u70b9\u90fd\u88ab\u8bbf\u95ee.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"Graph.prototype.dfs = function() {\n    var marked = [];\n    for (var i = 0; i < this.vertices.length; i++) {\n        if (!marked[this.vertices[i]]) {\n            dfsVisit(this.vertices[i]);\n        }\n    }\n\n    function dfsVisit(u) {\n        let edges = this.edges;\n        marked[u] = true;\n        console.log(u);\n        var neighbors = edges.get(u);\n        for (var i = 0; i < neighbors.length; i++) {\n            var w = neighbors[i];\n            if (!marked[w]) {\n                dfsVisit(w);\n            }\n        }\n    }\n};\n")),(0,i.kt)("h3",{id:"\u5e7f\u5ea6\u4f18\u5148\u904d\u5386"},"\u5e7f\u5ea6\u4f18\u5148\u904d\u5386"),(0,i.kt)("p",null,"Breadth-First-Search, \u5e7f\u5ea6\u4f18\u5148\u904d\u5386\u662f\u4ece\u6839\u8282\u70b9\u5f00\u59cb, \u6cbf\u7740\u56fe\u7684\u5bbd\u5ea6\u904d\u5386\u8282\u70b9,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"Graph.prototype.bfs = function(v) {\n    var queue = [],\n        marked = [];\n    marked[v] = true;\n    queue.push(v); // \u6dfb\u52a0\u5230\u961f\u5c3e\n    while (queue.length > 0) {\n        var s = queue.shift(); // \u4ece\u961f\u9996\u79fb\u9664\n        if (this.edges.has(s)) {\n            console.log('visited vertex: ', s);\n        }\n        let neighbors = this.edges.get(s);\n        for (let i = 0; i < neighbors.length; i++) {\n            var w = neighbors[i];\n            if (!marked[w]) {\n                marked[w] = true;\n                queue.push(w);\n            }\n        }\n    }\n};\n")),(0,i.kt)("h2",{id:"dijkstra\u7b97\u6cd5"},"Dijkstra\u7b97\u6cd5"),(0,i.kt)("p",null,"\u72c4\u514b\u65af\u7279\u62c9\u7b97\u6cd5\u662f\u4ece\u4e00\u4e2a\u9876\u70b9\u5230\u5176\u4f59\u5404\u9876\u70b9\u7684\u6700\u77ed\u8def\u5f84\u7b97\u6cd5, \u89e3\u51b3\u7684\u662f\u6709\u6743\u56fe\u4e2d\u6700\u77ed\u8def\u5f84\u95ee\u9898. "),(0,i.kt)("p",null,"\u4e3b\u8981\u7279\u70b9\u662f\u4ece\u8d77\u70b9\u5f00\u59cb, \u91c7\u7528\u8d2a\u5fc3\u7b97\u6cd5\u7684\u7b56\u7565, \u6bcf\u6b21\u904d\u5386\u5230\u5230\u8d77\u59cb\u70b9\u8ddd\u79bb\u6700\u8fd1\u4e14\u672a\u8bbf\u95ee\u8fc7\u7684\u9876\u70b9\u7684\u90bb\u63a5\u8282\u70b9, \u76f4\u5230\u6269\u5c55\u5230\u7ec8\u70b9\u4e3a\u6b62. "),(0,i.kt)("p",null,"\u6ce8\u610f: \u8fd9\u91cc\u6211\u4eec\u8ba8\u8bba\u7684\u662f\u5355\u5411\u5355\u6e90\u7684\u56fe."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// \u8d77\u70b9\nlet node = startNode;\n// \u6784\u5efa\u5f00\u9500\u8868\nlet costs = new Map();\nfor (let i = 0; i < this.vertices.length; i++) {\n    const vertice = this.vertices[i];\n    if (vertice === node) {\n        costs.set(vertice, 0);\n    } else {\n        costs.set(vertice, Infinity);\n    }\n}\n\n// \u8fd9\u91cc\u6dfb\u52a0\u4e86\u4e00\u4e2a\u961f\u5217\u5904\u7406\u6240\u6709\u8282\u70b9\nlet resNodes = [node];\n\nwhile (resNodes.length) {\n    // \u5f53\u524d\u5904\u7406\u7684\u8282\u70b9\n    let curNode = resNodes.shift();\n    if (!curNode) {\n        continue;\n    }\n    // \u83b7\u53d6\u6240\u6709\u76f8\u90bb\u7684\u8282\u70b9\n    let neighbors = this.edges.get(curNode);\n    if (!neighbors) {\n        continue;\n    }\n\n    for (let i = 0; i < neighbors.length; i++) {\n        const neighbor = neighbors[i];\n\n        // \u6bd4\u8f83\u6700\u5c0f\u503c\n        let minCost = Math.min(\n            costs.get(curNode) + neighbor.cost,\n            costs.get(neighbor.gnode)\n        );\n        costs.set(neighbor.gnode, minCost);\n\n        resNodes.push(neighbor.gnode);\n    }\n}\n\nreturn costs.get(end[0]);\n")))}p.isMDXComponent=!0}}]);