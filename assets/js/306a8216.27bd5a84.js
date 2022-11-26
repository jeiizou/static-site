"use strict";(self.webpackChunk_jeiiz_wiki_site=self.webpackChunk_jeiiz_wiki_site||[]).push([[7207],{158:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var l=t(6393);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,l,i=function(e,n){if(null==e)return{};var t,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=l.createContext({}),d=function(e){var n=l.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return l.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},h=l.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),h=d(t),m=i,u=h["".concat(s,".").concat(m)]||h[m]||p[m]||r;return t?l.createElement(u,o(o({ref:n},c),{},{components:t})):l.createElement(u,o({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=h;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var d=2;d<r;d++)o[d]=t[d];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}h.displayName="MDXCreateElement"},2065:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var l=t(9421),i=(t(6393),t(158));const r={},o="\u57fa\u7840-Virtualdomdiff",a={unversionedId:"\u524d\u7aef\u751f\u6001/\u524d\u7aef\u6846\u67b6/React/\u57fa\u7840-Virtualdomdiff",id:"\u524d\u7aef\u751f\u6001/\u524d\u7aef\u6846\u67b6/React/\u57fa\u7840-Virtualdomdiff",title:"\u57fa\u7840-Virtualdomdiff",description:"\u7b2c\u4e00\u6b65: \u4f7f\u7528 JS \u5bf9\u8c61\u6a21\u62df DOM \u5bf9\u8c61",source:"@site/docs/\u524d\u7aef\u751f\u6001/\u524d\u7aef\u6846\u67b6/React/\u57fa\u7840-Virtualdomdiff.md",sourceDirName:"\u524d\u7aef\u751f\u6001/\u524d\u7aef\u6846\u67b6/React",slug:"/\u524d\u7aef\u751f\u6001/\u524d\u7aef\u6846\u67b6/React/\u57fa\u7840-Virtualdomdiff",permalink:"/static-site/docs/\u524d\u7aef\u751f\u6001/\u524d\u7aef\u6846\u67b6/React/\u57fa\u7840-Virtualdomdiff",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u7840-SetState",permalink:"/static-site/docs/\u524d\u7aef\u751f\u6001/\u524d\u7aef\u6846\u67b6/React/\u57fa\u7840-SetState"},next:{title:"\u57fa\u7840-\u5408\u6210\u4e8b\u4ef6",permalink:"/static-site/docs/\u524d\u7aef\u751f\u6001/\u524d\u7aef\u6846\u67b6/React/\u57fa\u7840-\u5408\u6210\u4e8b\u4ef6"}},s={},d=[{value:"\u7b2c\u4e00\u6b65: \u4f7f\u7528 JS \u5bf9\u8c61\u6a21\u62df DOM \u5bf9\u8c61",id:"\u7b2c\u4e00\u6b65-\u4f7f\u7528-js-\u5bf9\u8c61\u6a21\u62df-dom-\u5bf9\u8c61",level:2},{value:"\u7b2c\u4e8c\u6b65: \u5b9e\u73b0 diff \u7b97\u6cd5",id:"\u7b2c\u4e8c\u6b65-\u5b9e\u73b0-diff-\u7b97\u6cd5",level:2},{value:"2.1 \u4e24\u4e2a\u8282\u70b9\u7684\u6bd4\u8f83",id:"21-\u4e24\u4e2a\u8282\u70b9\u7684\u6bd4\u8f83",level:3},{value:"2.2 \u5224\u65ad\u5c5e\u6027\u7684\u66f4\u6539",id:"22-\u5224\u65ad\u5c5e\u6027\u7684\u66f4\u6539",level:3},{value:"2.3 \u5224\u65ad\u5217\u8868\u5dee\u5f02",id:"23-\u5224\u65ad\u5217\u8868\u5dee\u5f02",level:3},{value:"2.4 \u904d\u5386\u5b50\u5143\u7d20\u6253\u6807\u8bc6",id:"24-\u904d\u5386\u5b50\u5143\u7d20\u6253\u6807\u8bc6",level:3},{value:"\u7b2c\u4e09\u6b65: \u6e32\u67d3\u5dee\u5f02",id:"\u7b2c\u4e09\u6b65-\u6e32\u67d3\u5dee\u5f02",level:2},{value:"\u603b\u7ed3:",id:"\u603b\u7ed3",level:2}],c={toc:d};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,l.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u57fa\u7840-virtualdomdiff"},"\u57fa\u7840-Virtualdomdiff"),(0,i.kt)("h2",{id:"\u7b2c\u4e00\u6b65-\u4f7f\u7528-js-\u5bf9\u8c61\u6a21\u62df-dom-\u5bf9\u8c61"},"\u7b2c\u4e00\u6b65: \u4f7f\u7528 JS \u5bf9\u8c61\u6a21\u62df DOM \u5bf9\u8c61"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export default class Element {\n    /**\n     *\n     * @param {String} tag 'div'\n     * @param {Object} props {class:'item'}\n     * @param {Array} children [Element1,'text']\n     * @param {String} key option\n     */\n    constructor(tag, props, children, key) {\n        this.tag = tag;\n        this.props = props;\n        if (Array.isArray(children)) {\n            this.children = children;\n        } else if (isString(children)) {\n            this.key = children;\n            this.children = null;\n        }\n        if (key) this.key = key;\n    }\n\n    //\u6e32\u67d3\n    render() {\n        let root = this._createElement(this.tag, this.props, this.children, this.key);\n        document.body.appendChild(root);\n        return root;\n    }\n    create() {\n        return this._createElement(this.tag, this.props, this.children, this.key);\n    }\n    //\u521b\u5efa\u8282\u70b9\n    _createElement(tag, props, child, key) {\n        //\u901a\u8fc7tag\u521b\u5efa\u8282\u70b9\n        let el = document.createElement(tag);\n        //\u8bbe\u7f6e\u8282\u70b9\u5c5e\u6027\n        for (const key in props) {\n            if (props.hasOwnProperty(key)) {\n                const value = props[key];\n                el.setAttribute(key, value);\n            }\n        }\n        if (key) {\n            el.setAttribute('key', key);\n        }\n        //\u9012\u5f52\u521b\u5efa\u5b50\u8282\u70b9\n        if (child) {\n            child.forEach(element => {\n                let child;\n                if (element instanceof Element) {\n                    child = this._createElement(element.tag, element.props, element.children, element.key);\n                } else {\n                    chidl = document.createTextNode(element);\n                }\n                el.appendChild(child);\n            });\n        }\n        return el;\n    }\n}\n")),(0,i.kt)("p",null,"\u4e00\u4e2a DOM \u8282\u70b9\u4e3b\u8981\u7531\u6807\u7b7e\u540d\u79f0, \u5c5e\u6027, \u5b50\u8282\u70b9, \u4ee5\u53ca key \u503c\u56db\u4e2a\u4e3b\u8981\u7684\u5c5e\u6027."),(0,i.kt)("h2",{id:"\u7b2c\u4e8c\u6b65-\u5b9e\u73b0-diff-\u7b97\u6cd5"},"\u7b2c\u4e8c\u6b65: \u5b9e\u73b0 diff \u7b97\u6cd5"),(0,i.kt)("h3",{id:"21-\u4e24\u4e2a\u8282\u70b9\u7684\u6bd4\u8f83"},"2.1 \u4e24\u4e2a\u8282\u70b9\u7684\u6bd4\u8f83"),(0,i.kt)("p",null,"\u9996\u5148\u8003\u8651\u4e24\u4e2a\u8282\u70b9\u5bf9\u6bd4\u7684\u51e0\u79cd\u60c5\u51b5:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u65b0\u7684\u8282\u70b9",(0,i.kt)("inlineCode",{parentName:"li"},"tagName")," \u6216\u8005",(0,i.kt)("inlineCode",{parentName:"li"},"key"),"\u548c\u65e7\u7684\u4e0d\u540c, \u8fd9\u79cd\u60c5\u51b5\u4ee3\u8868\u9700\u8981\u66ff\u6362\u65e7\u7684\u8282\u70b9, \u5e76\u4e14\u4e5f\u4e0d\u5728\u9700\u8981\u904d\u5386\u65b0\u65e7\u8282\u70b9\u7684\u5b50\u5143\u7d20\u4e86, \u56e0\u4e3a\u6574\u4e2a\u65e7\u7684\u8282\u70b9\u90fd\u88ab\u5220\u9664"),(0,i.kt)("li",{parentName:"ol"},"\u65b0\u7684\u8282\u70b9\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"tagName"),"\u548c",(0,i.kt)("inlineCode",{parentName:"li"},"key"),"(\u6216\u8005\u90fd\u6ca1\u6709)\u548c\u65e7\u7684\u76f8\u540c, \u5f00\u59cb\u904d\u5386\u5b50\u6811"),(0,i.kt)("li",{parentName:"ol"},"\u6ca1\u6709\u65b0\u7684\u8282\u70b9, \u4ec0\u4e48\u90fd\u4e0d\u7528\u505a.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export default function diff(oldDomTree, newDomTree) {\n    //\u7528\u4e8e\u8bb0\u5f55\u5dee\u5f02\n    let pathchs = {};\n    //\u4e00\u5f00\u59cb\u7d22\u5f15\u4e3a0\n    dfs(oldDomTree, newDomTree, 0, pathchs);\n    return pathchs;\n}\n\nfunction dfs(oldNode, newNode, index, pathchs) {\n    //\u7528\u4e8e\u4fdd\u5b58\u5b50\u6811\u7684\u66f4\u6539\n    let curPatches = [];\n    /**\n     * \u9700\u8981\u5224\u65ad\u4e09\u79cd\u60c5\u51b5\n     * 1. \u6ca1\u6709\u65b0\u7684\u8282\u70b9, \u90a3\u4e48\u4ec0\u4e48\u90fd\u4e0d\u7528\u505a\n     * 2. \u65b0\u7684\u8282\u70b9\u7684 tagName \u548c key \u548c\u65e7\u7684\u4e0d\u540c, \u5c31\u66ff\u6362\n     * 3. \u65b0\u7684\u8282\u70b9\u7684 tagName \u548c key(\u53ef\u80fd\u90fd\u6ca1\u6709) \u548c\u65e7\u7684\u76f8\u540c, \u5f00\u59cb\u904d\u5386\u5b50\u6811\n     */\n    if (!newNode) {\n    } else if (newNode.tag === oldNode.tag && newNode.key === oldNode.key) {\n        //\u5224\u65ad\u5c5e\u6027\u662f\u5426\u53d8\u66f4\n        let props = diffProps(oldNode.props, newNode.props);\n        if (props.length) curPatches.push({ type: StateEnums.ChangeProps, props });\n        //\u904d\u5386\u5b50\u6811\n        diffChildren(oldNode.children, newNode.children, index, pathchs);\n    } else {\n        //\u8282\u70b9\u4e0d\u540c,\u9700\u8981\u66ff\u6362\n        curPatches.push({ type: StateEnums.Replace, node: newNode });\n    }\n\n    if (curPatches.length) {\n        if (pathchs[index]) {\n            patches[index] = patches[index].concat(curPatches);\n        } else {\n            pathchs[index] = curPatches;\n        }\n    }\n}\n")),(0,i.kt)("h3",{id:"22-\u5224\u65ad\u5c5e\u6027\u7684\u66f4\u6539"},"2.2 \u5224\u65ad\u5c5e\u6027\u7684\u66f4\u6539"),(0,i.kt)("p",null,"\u5224\u65ad\u5c5e\u6027\u7684\u66f4\u6539:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u904d\u5386\u65e7\u7684\u5c5e\u6027\u5217\u8868\uff0c\u67e5\u770b\u6bcf\u4e2a\u5c5e\u6027\u662f\u5426\u8fd8\u5b58\u5728\u4e8e\u65b0\u7684\u5c5e\u6027\u5217\u8868\u4e2d"),(0,i.kt)("li",{parentName:"ol"},"\u904d\u5386\u65b0\u7684\u5c5e\u6027\u5217\u8868\uff0c\u5224\u65ad\u4e24\u4e2a\u5217\u8868\u4e2d\u90fd\u5b58\u5728\u7684\u5c5e\u6027\u7684\u503c\u662f\u5426\u6709\u53d8\u5316"),(0,i.kt)("li",{parentName:"ol"},"\u5728\u7b2c\u4e8c\u6b65\u4e2d\u540c\u65f6\u67e5\u770b\u662f\u5426\u6709\u5c5e\u6027\u4e0d\u5b58\u5728\u4e0e\u65e7\u7684\u5c5e\u6027\u5217\u5217\u8868\u4e2d")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function diffProps(oldProps, newProps) {\n    // \u5224\u65ad Props \u5206\u4ee5\u4e0b\u4e09\u6b65\u9aa4\n    // \u5148\u904d\u5386 oldProps \u67e5\u770b\u662f\u5426\u5b58\u5728\u5220\u9664\u7684\u5c5e\u6027\n    // \u7136\u540e\u904d\u5386 newProps \u67e5\u770b\u662f\u5426\u6709\u5c5e\u6027\u503c\u88ab\u4fee\u6539\n    // \u6700\u540e\u67e5\u770b\u662f\u5426\u6709\u5c5e\u6027\u65b0\u589e\n    let change = [];\n    for (const key in oldProps) {\n        if (oldProps.hasOwnProperty(key) && !newProps[key]) {\n            change.push({\n                prop: key\n            });\n        }\n    }\n    for (const key in newProps) {\n        if (newProps.hasOwnProperty(key)) {\n            const prop = newProps[key];\n            if (oldProps[key] && oldProps[key] !== newProps[key]) {\n                change.push({\n                    prop: key,\n                    value: newProps[key]\n                });\n            } else if (!oldProps[key]) {\n                change.push({\n                    prop: key,\n                    value: newProps[key]\n                });\n            }\n        }\n    }\n    return change;\n}\n")),(0,i.kt)("h3",{id:"23-\u5224\u65ad\u5217\u8868\u5dee\u5f02"},"2.3 \u5224\u65ad\u5217\u8868\u5dee\u5f02"),(0,i.kt)("p",null,"\u5224\u65ad\u5217\u8868\u5dee\u5f02\u7b97\u6cd5\u5b9e\u73b0(\u8be5\u7b97\u6cd5\u53ea\u5bf9\u6709",(0,i.kt)("inlineCode",{parentName:"p"},"key"),"\u7684\u8282\u70b9\u505a\u5904\u7406):"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u904d\u5386\u65e7\u7684\u8282\u70b9\u5217\u8868\uff0c\u67e5\u770b\u6bcf\u4e2a\u8282\u70b9\u662f\u5426\u8fd8\u5b58\u5728\u4e8e\u65b0\u7684\u8282\u70b9\u5217\u8868\u4e2d"),(0,i.kt)("li",{parentName:"ol"},"\u904d\u5386\u65b0\u7684\u8282\u70b9\u5217\u8868\uff0c\u5224\u65ad\u662f\u5426\u6709\u65b0\u7684\u8282\u70b9"),(0,i.kt)("li",{parentName:"ol"},"\u5728\u7b2c\u4e8c\u6b65\u4e2d\u540c\u65f6\u5224\u65ad\u8282\u70b9\u662f\u5426\u6709\u79fb\u52a8")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function listDiff(oldList, newList, index, patches) {\n    // \u4e3a\u4e86\u904d\u5386\u65b9\u4fbf\uff0c\u5148\u53d6\u51fa\u4e24\u4e2a list \u7684\u6240\u6709 keys\n    let oldKeys = getKeys(oldList);\n    let newKeys = getKeys(newList);\n    let changes = [];\n\n    // \u7528\u4e8e\u4fdd\u5b58\u53d8\u66f4\u540e\u7684\u8282\u70b9\u6570\u636e\n    // \u4f7f\u7528\u8be5\u6570\u7ec4\u4fdd\u5b58\u6709\u4ee5\u4e0b\u597d\u5904\n    // 1.\u53ef\u4ee5\u6b63\u786e\u83b7\u5f97\u88ab\u5220\u9664\u8282\u70b9\u7d22\u5f15\n    // 2.\u4ea4\u6362\u8282\u70b9\u4f4d\u7f6e\u53ea\u9700\u8981\u64cd\u4f5c\u4e00\u904d DOM\n    // 3.\u7528\u4e8e `diffChildren` \u51fd\u6570\u4e2d\u7684\u5224\u65ad\uff0c\u53ea\u9700\u8981\u904d\u5386\n    // \u4e24\u4e2a\u6811\u4e2d\u90fd\u5b58\u5728\u7684\u8282\u70b9\uff0c\u800c\u5bf9\u4e8e\u65b0\u589e\u6216\u8005\u5220\u9664\u7684\u8282\u70b9\u6765\u8bf4\uff0c\u5b8c\u5168\u6ca1\u5fc5\u8981\n    // \u518d\u53bb\u5224\u65ad\u4e00\u904d\n    let list = [];\n    oldList &&\n        oldList.forEach(item => {\n            let key = item.key;\n            if (isString(item)) {\n                key = item;\n            }\n            // \u5bfb\u627e\u65b0\u7684 children \u4e2d\u662f\u5426\u542b\u6709\u5f53\u524d\u8282\u70b9\n            // \u6ca1\u6709\u7684\u8bdd\u9700\u8981\u5220\u9664\n            let index = newKeys.indexOf(key);\n            if (index === -1) {\n                list.push(null);\n            } else list.push(key);\n        });\n    // \u904d\u5386\u53d8\u66f4\u540e\u7684\u6570\u7ec4\n    let length = list.length;\n    // \u56e0\u4e3a\u5220\u9664\u6570\u7ec4\u5143\u7d20\u662f\u4f1a\u66f4\u6539\u7d22\u5f15\u7684\n    // \u6240\u6709\u4ece\u540e\u5f80\u524d\u5220\u53ef\u4ee5\u4fdd\u8bc1\u7d22\u5f15\u4e0d\u53d8\n    for (let i = length - 1; i >= 0; i--) {\n        // \u5224\u65ad\u5f53\u524d\u5143\u7d20\u662f\u5426\u4e3a\u7a7a\uff0c\u4e3a\u7a7a\u8868\u793a\u9700\u8981\u5220\u9664\n        if (!list[i]) {\n            list.splice(i, 1);\n            changes.push({\n                type: StateEnums.Remove,\n                index: i\n            });\n        }\n    }\n    // \u904d\u5386\u65b0\u7684 list\uff0c\u5224\u65ad\u662f\u5426\u6709\u8282\u70b9\u65b0\u589e\u6216\u79fb\u52a8\n    // \u540c\u65f6\u4e5f\u5bf9 `list` \u505a\u8282\u70b9\u65b0\u589e\u548c\u79fb\u52a8\u8282\u70b9\u7684\u64cd\u4f5c\n    newList &&\n        newList.forEach((item, i) => {\n            let key = item.key;\n            if (isString(item)) {\n                key = item;\n            }\n            // \u5bfb\u627e\u65e7\u7684 children \u4e2d\u662f\u5426\u542b\u6709\u5f53\u524d\u8282\u70b9\n            let index = list.indexOf(key);\n            // \u6ca1\u627e\u5230\u4ee3\u8868\u65b0\u8282\u70b9\uff0c\u9700\u8981\u63d2\u5165\n            if (index === -1 || key == null) {\n                changes.push({\n                    type: StateEnums.Insert,\n                    node: item,\n                    index: i\n                });\n                list.splice(i, 0, key);\n            } else {\n                // \u627e\u5230\u4e86\uff0c\u9700\u8981\u5224\u65ad\u662f\u5426\u9700\u8981\u79fb\u52a8\n                if (index !== i) {\n                    changes.push({\n                        type: StateEnums.Move,\n                        from: index,\n                        to: i\n                    });\n                    move(list, index, i);\n                }\n            }\n        });\n    return { changes, list };\n}\n\nfunction getKeys(list) {\n    let keys = [];\n    let text;\n    list &&\n        list.forEach(item => {\n            let key;\n            if (isString(item)) {\n                key = [item];\n            } else if (item instanceof Element) {\n                key = item.key;\n            }\n            keys.push(key);\n        });\n    return keys;\n}\n")),(0,i.kt)("h3",{id:"24-\u904d\u5386\u5b50\u5143\u7d20\u6253\u6807\u8bc6"},"2.4 \u904d\u5386\u5b50\u5143\u7d20\u6253\u6807\u8bc6"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u8fd9\u4e2a\u51fd\u6570\u6765\u8bf4\uff0c\u4e3b\u8981\u529f\u80fd\u5c31\u4e24\u4e2a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5224\u65ad\u4e24\u4e2a\u5217\u8868\u5dee\u5f02"),(0,i.kt)("li",{parentName:"ol"},"\u7ed9\u8282\u70b9\u6253\u4e0a\u6807\u8bb0")),(0,i.kt)("p",null,"\u603b\u4f53\u6765\u8bf4\uff0c\u8be5\u51fd\u6570\u5b9e\u73b0\u7684\u529f\u80fd\u5f88\u7b80\u5355"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function diffChildren(oldChild, newChild, index, patches) {\n    let { changes, list } = listDiff(oldChild, newChild, index, patches);\n    if (changes.length) {\n        if (patches[index]) {\n            patches[index] = patches[index].concat(changes);\n        } else {\n            patches[index] = changes;\n        }\n    }\n    // \u8bb0\u5f55\u4e0a\u4e00\u4e2a\u904d\u5386\u8fc7\u7684\u8282\u70b9\n    let last = null;\n    oldChild &&\n        oldChild.forEach((item, i) => {\n            let child = item && item.children;\n            if (child) {\n                index = last && last.children ? index + last.children.length + 1 : index + 1;\n                let keyIndex = list.indexOf(item.key);\n                let node = newChild[keyIndex];\n                // \u53ea\u904d\u5386\u65b0\u65e7\u4e2d\u90fd\u5b58\u5728\u7684\u8282\u70b9\uff0c\u5176\u4ed6\u65b0\u589e\u6216\u8005\u5220\u9664\u7684\u6ca1\u5fc5\u8981\u904d\u5386\n                if (node) {\n                    dfs(item, node, index, patches);\n                }\n            } else index += 1;\n            last = item;\n        });\n}\n")),(0,i.kt)("h2",{id:"\u7b2c\u4e09\u6b65-\u6e32\u67d3\u5dee\u5f02"},"\u7b2c\u4e09\u6b65: \u6e32\u67d3\u5dee\u5f02"),(0,i.kt)("p",null,"\u8fd9\u4e2a\u51fd\u6570\u4e3b\u8981\u4e24\u4e2a\u529f\u80fd"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u6df1\u5ea6\u904d\u5386\u6811\uff0c\u5c06\u9700\u8981\u505a\u53d8\u66f4\u64cd\u4f5c\u7684\u53d6\u51fa\u6765"),(0,i.kt)("li",{parentName:"ol"},"\u5c40\u90e8\u66f4\u65b0 DOM")),(0,i.kt)("p",null,"\u6574\u4f53\u6765\u8bf4\u8fd9\u90e8\u5206\u4ee3\u7801\u8fd8\u662f\u5f88\u597d\u7406\u89e3\u7684"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let index = 0;\nexport default function patch(node, patchs) {\n    let changes = patchs[index];\n    let childNodes = node && node.childNodes;\n    // \u8fd9\u91cc\u7684\u6df1\u5ea6\u904d\u5386\u548c diff \u4e2d\u662f\u4e00\u6837\u7684\n    if (!childNodes) index += 1;\n    if (changes && changes.length && patchs[index]) {\n        changeDom(node, changes);\n    }\n    let last = null;\n    if (childNodes && childNodes.length) {\n        childNodes.forEach((item, i) => {\n            index = last && last.children ? index + last.children.length + 1 : index + 1;\n            patch(item, patchs);\n            last = item;\n        });\n    }\n}\n\nfunction changeDom(node, changes, noChild) {\n    changes &&\n        changes.forEach(change => {\n            let { type } = change;\n            switch (type) {\n                case StateEnums.ChangeProps:\n                    let { props } = change;\n                    props.forEach(item => {\n                        if (item.value) {\n                            node.setAttribute(item.prop, item.value);\n                        } else {\n                            node.removeAttribute(item.prop);\n                        }\n                    });\n                    break;\n                case StateEnums.Remove:\n                    node.childNodes[change.index].remove();\n                    break;\n                case StateEnums.Insert:\n                    let dom;\n                    if (isString(change.node)) {\n                        dom = document.createTextNode(change.node);\n                    } else if (change.node instanceof Element) {\n                        dom = change.node.create();\n                    }\n                    node.insertBefore(dom, node.childNodes[change.index]);\n                    break;\n                case StateEnums.Replace:\n                    node.parentNode.replaceChild(change.node.create(), node);\n                    break;\n                case StateEnums.Move:\n                    let fromNode = node.childNodes[change.from];\n                    let toNode = node.childNodes[change.to];\n                    let cloneFromNode = fromNode.cloneNode(true);\n                    let cloenToNode = toNode.cloneNode(true);\n                    node.replaceChild(cloneFromNode, toNode);\n                    node.replaceChild(cloenToNode, fromNode);\n                    break;\n                default:\n                    break;\n            }\n        });\n}\n")),(0,i.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3:"),(0,i.kt)("p",null,"Virtual Dom \u7b97\u6cd5\u7684\u5b9e\u73b0\u4e5f\u5c31\u662f\u4ee5\u4e0b\u4e09\u6b65"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u901a\u8fc7 JS \u6765\u6a21\u62df\u521b\u5efa DOM \u5bf9\u8c61"),(0,i.kt)("li",{parentName:"ol"},"\u5224\u65ad\u4e24\u4e2a\u5bf9\u8c61\u7684\u5dee\u5f02"),(0,i.kt)("li",{parentName:"ol"},"\u6e32\u67d3\u5dee\u5f02")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let test4 = new Element('div', { class: 'my-div' }, ['test4']);\nlet test5 = new Element('ul', { class: 'my-div' }, ['test5']);\n\nlet test1 = new Element('div', { class: 'my-div' }, [test4]);\n\nlet test2 = new Element('div', { id: '11' }, [test5, test4]);\n\nlet root = test1.render();\n\nlet pathchs = diff(test1, test2);\nconsole.log(pathchs);\n\nsetTimeout(() => {\n    console.log('\u5f00\u59cb\u66f4\u65b0');\n    patch(root, pathchs);\n    console.log('\u7ed3\u675f\u66f4\u65b0');\n}, 1000);\n")))}p.isMDXComponent=!0}}]);