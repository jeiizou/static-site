"use strict";(self.webpackChunk_jeiiz_wiki_site=self.webpackChunk_jeiiz_wiki_site||[]).push([[3312],{50158:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(46393);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=i,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return t?a.createElement(g,r(r({ref:n},u),{},{components:t})):a.createElement(g,r({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},98932:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=t(39421),i=(t(46393),t(50158));const l={},r="HTML-\u8bbe\u5907API",o={unversionedId:"\u524d\u7aef\u57fa\u7840/HTML/HTML-\u8bbe\u5907API",id:"\u524d\u7aef\u57fa\u7840/HTML/HTML-\u8bbe\u5907API",title:"HTML-\u8bbe\u5907API",description:"online state",source:"@site/docs/01-\u524d\u7aef\u57fa\u7840/03-HTML/02-HTML-\u8bbe\u5907API.md",sourceDirName:"01-\u524d\u7aef\u57fa\u7840/03-HTML",slug:"/\u524d\u7aef\u57fa\u7840/HTML/HTML-\u8bbe\u5907API",permalink:"/docs/\u524d\u7aef\u57fa\u7840/HTML/HTML-\u8bbe\u5907API",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HTML-\u57fa\u7840",permalink:"/docs/\u524d\u7aef\u57fa\u7840/HTML/HTML-\u57fa\u7840"},next:{title:"TS-\u7c7b\u578b\u7cfb\u7edf",permalink:"/docs/\u524d\u7aef\u57fa\u7840/TypeScript/\u7c7b\u578b\u7cfb\u7edf"}},c={},s=[{value:"online state",id:"online-state",level:2},{value:"battery state",id:"battery-state",level:2},{value:"vibration",id:"vibration",level:2},{value:"page visibility",id:"page-visibility",level:2},{value:"deviceOrientation",id:"deviceorientation",level:2},{value:"notification",id:"notification",level:2},{value:"fullScreen",id:"fullscreen",level:2},{value:"orientation",id:"orientation",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],u={toc:s};function p(e){let{components:n,...l}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"html-\u8bbe\u5907api"},"HTML-\u8bbe\u5907API"),(0,i.kt)("h2",{id:"online-state"},"online state"),(0,i.kt)("p",null,"\u83b7\u53d6\u8bbe\u5907\u7684\u7f51\u7edc\u72b6\u6001"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"window.addEventListener('online', xxx);\n\nwindow.addEventListener('offline', () => {\n    alert('\u4f60\u65ad\u7f51\u5566\uff01');\n});\n")),(0,i.kt)("h2",{id:"battery-state"},"battery state"),(0,i.kt)("p",null,"\u83b7\u53d6\u8bbe\u5907\u7684\u7535\u6c60\u72b6\u6001\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"navigator.getBattery().then(battery => console.log(battery));\n\n// \u8fd4\u56de\n{\n    charging, // \u662f\u5426\u5728\u5145\u7535\n        chargingTime, // \u5145\u6ee1\u7535\u6240\u9700\u65f6\u95f4\n        dischargingTime, // \u5f53\u524d\u7535\u91cf\u53ef\u4f7f\u7528\u65f6\u95f4\n        level,\n        \u5269\u4f59\u7535\u91cf;\n\n    onchargingchange, // \u76d1\u542c\u5145\u7535\u72b6\u6001\u53d8\u5316\n        onchargingtimechange, // \u76d1\u542c\u5145\u6ee1\u7535\u6240\u9700\u65f6\u95f4\u53d8\u5316\n        ondischargingtimechange, // \u76d1\u542c\u5f53\u524d\u7535\u91cf\u53ef\u4f7f\u7528\u65f6\u95f4\u53d8\u5316\n        onlevelchange; // \u76d1\u542c\u7535\u91cf\u53d8\u5316\n}\n")),(0,i.kt)("h2",{id:"vibration"},"vibration"),(0,i.kt)("p",null,"\u4f7f\u8bbe\u5907\u8fdb\u884c\u9707\u52a8\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// \u9707\u52a8\u4e00\u6b21\nnavigator.vibrate(100);\n\n// \u8fde\u7eed\u9707\u52a8\uff0c\u9707\u52a8200ms\u3001\u6682\u505c100ms\u3001\u9707\u52a8300ms\nnavigator.vibrate([200, 100, 300]);\n")),(0,i.kt)("h2",{id:"page-visibility"},"page visibility"),(0,i.kt)("p",null,"\u987e\u540d\u601d\u4e49\uff0c\u8fd9\u4e2a API \u662f\u7528\u6765\u76d1\u542c\u9875\u9762\u53ef\u89c1\u6027\u53d8\u5316\u7684\uff0c\u5728 PC \u7aef\u6807\u7b7e\u680f\u5207\u6362\u3001\u6700\u5c0f\u5316\u4f1a\u89e6\u53d1\u3001\u5728\u79fb\u52a8\u7aef\u7a0b\u5e8f\u5207\u5230\u540e\u53f0\u4f1a\u89e6\u53d1\uff0c\u7b80\u5355\u8bf4\u5c31\u662f\u9875\u9762\u6d88\u5931\u4e86"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"document.addEventListener('visibilitychange', () => {\n    console.log(`\u9875\u9762\u53ef\u89c1\u6027\uff1a${document.visibilityState}`);\n});\n")),(0,i.kt)("h2",{id:"deviceorientation"},"deviceOrientation"),(0,i.kt)("p",null,"\u9640\u87ba\u4eea\uff0c\u4e5f\u5c31\u662f\u8bbe\u5907\u7684\u65b9\u5411\uff0c\u53c8\u540d\u91cd\u529b\u611f\u5e94\uff0c\u8be5 API \u5728 IOS \u8bbe\u5907\u4e0a\u5931\u6548\u7684\u89e3\u51b3\u529e\u6cd5\uff0c\u5c06\u57df\u540d\u534f\u8bae\u6539\u6210 https\uff1b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"window.addEventListener('deviceorientation', event => {\n    let { alpha, beta, gamma } = event;\n\n    console.log(`alpha\uff1a${alpha}`);\n    console.log(`beta\uff1a${beta}`);\n    console.log(`gamma\uff1a${gamma}`);\n});\n")),(0,i.kt)("p",null,"\u65b9\u5411\u793a\u610f\u5982\u4e0b, \u4ece\u5de6\u5230\u53f3\u5206\u522b\u4e3a:",(0,i.kt)("inlineCode",{parentName:"p"},"alpha"),",",(0,i.kt)("inlineCode",{parentName:"p"},"beta"),",",(0,i.kt)("inlineCode",{parentName:"p"},"gamma"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:t(84195).Z,width:"800",height:"264"})),(0,i.kt)("h2",{id:"notification"},"notification"),(0,i.kt)("p",null,"PC \u7aef\u7684\u684c\u9762\u901a\u77e5\uff0c\u5982\u7f51\u9875\u7aef\u7684\u5fae\u4fe1\uff0c\u5f53\u6536\u5230\u6d88\u606f\u65f6\uff0c\u53f3\u4e0b\u89d2\u4f1a\u51fa\u73b0\u4e00\u4e2a\u901a\u77e5\uff08\u5c3d\u7ba1\u4f60\u628a\u6d4f\u89c8\u5668\u6700\u5c0f\u5316\uff09\uff0c\u56e0\u4e3a\u8fd9\u4e2a\u901a\u77e5\u65f6\u72ec\u7acb\u4e8e\u6d4f\u89c8\u5668\u7684\uff0c\u662f\u7cfb\u7edf\u7684\u4e00\u4e2a\u539f\u751f\u63a7\u4ef6\uff1b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const notice = new Notification('\u524d\u7aef\u5b87\u5b99\u60c5\u62a5\u5c40', {\n    body: '\u8fd920\u4e2a\u4e0d\u5e38\u7528\u7684Web API\u771f\u7684\u6709\u7528\u5417?\uff0c\u522b\u95ee\uff0c\u95ee\u5c31\u662f\u6709\u7528\ud83c\ude36',\n    icon: '\u6211\u7684\u6398\u91d1\u5934\u50cf',\n    data: {\n        url: 'https://www.baidu.com'\n    }\n});\n\n// \u70b9\u51fb\u56de\u8c03\nnotice.onclick = () => {\n    window.open(notice.data.url); // \u5f53\u7528\u6237\u70b9\u51fb\u901a\u77e5\u65f6\uff0c\u5728\u6d4f\u89c8\u5668\u6253\u5f00\u767e\u5ea6\u7f51\u7ad9\n};\n")),(0,i.kt)("p",null,"\u6ce8\u610f\uff1a\u60f3\u8981\u6210\u529f\u7684\u8c03\u8d77\u901a\u77e5\uff0c\u9996\u5148\u8981\u7528\u6237\u7684\u6388\u6743."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"Notification.requestPermission(prem => {\n    prem == 'granted'; // \u540c\u610f\n    prem == 'denied'; // \u62d2\u7edd\n});\n")),(0,i.kt)("p",null,"\u6240\u4ee5\uff0c\u518d\u8c03\u7528\u4e4b\u524d\u5148\u5411\u7528\u6237\u53d1\u8d77\u8bf7\u6c42\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'let permission = Notification.permission;\n\nif (permission == "granted") {\n  // \u5df2\u540c\u610f\uff0c\u5f00\u59cb\u53d1\u9001\u901a\u77e5\n  ...\n} else if (permission == "denied") {\n  // \u4e0d\u540c\u610f\uff0c\u53d1\u4e0d\u4e86\u54af\n} else {\n  // \u5176\u4ed6\u72b6\u6001\uff0c\u53ef\u4ee5\u91cd\u65b0\u53d1\u9001\u6388\u6743\u63d0\u793a\n  Notification.requestPermission();\n}\n')),(0,i.kt)("h2",{id:"fullscreen"},"fullScreen"),(0,i.kt)("p",null,"\u5168\u5c4f\u4e0d\u54af? \u4e4b\u524d\u7684\u4e00\u4e2a\u9879\u76ee\u521a\u597d\u7528\u4e0a\uff0c\u4e0d\u4ec5\u4ec5\u53ef\u4ee5\u4f5c\u7528\u5728 documentElement \u4e0a\uff0c\u8fd8\u53ef\u4ee5\u4f5c\u7528\u5728\u6307\u5b9a\u5143\u7d20\uff1b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @method launchFullScreen \u5f00\u542f\u5168\u5c4f\n * @param {Object} elem = document.documentElement \u4f5c\u7528\u7684\u5143\u7d20\n */\nconst launchFullScreen = (elem = document.documentElement) => {\n    if (elem.requestFullScreen) {\n        elem.requestFullScreen();\n    } else if (elem.mozRequestFullScreen) {\n        elem.mozRequestFullScreen();\n    } else if (elem.webkitRequestFullScreen) {\n        elem.webkitRequestFullScreen();\n    }\n};\n")),(0,i.kt)("p",null,"\u5173\u95ed\u5168\u5c4f\u7684\u65f6\u5019\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u7edf\u4e00\u7528 document \u5bf9\u8c61\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @method exitFullScreen \u5173\u95ed\u5168\u5c4f\n */\nconst exitFullScreen = () => {\n    if (document.exitFullscreen) {\n        document.exitFullscreen();\n    } else if (document.mozCancelFullScreen) {\n        document.mozCancelFullScreen();\n    } else if (document.webkitCancelFullScreen) {\n        document.webkitCancelFullScreen();\n    }\n};\n")),(0,i.kt)("h2",{id:"orientation"},"orientation"),(0,i.kt)("p",null,"\u53ef\u4ee5\u76d1\u542c\u7528\u6237\u624b\u673a\u8bbe\u5907\u7684\u65cb\u8f6c\u65b9\u5411\u53d8\u5316\uff1b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"window.addEventListener(\n    'orientationchange',\n    () => {\n        document.body.innerHTML += `<p>\u5c4f\u5e55\u65cb\u8f6c\u540e\u7684\u89d2\u5ea6\u503c\uff1a${window.orientation}</p>`;\n    },\n    false\n);\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"css"),"\u7684\u5a92\u4f53\u67e5\u8be2\u4e5f\u53ef\u4ee5\u505a\u5230\u76f8\u540c\u7684\u6548\u679c:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"/* \u7ad6\u5c4f\u65f6\u6837\u5f0f */\n@media all and (orientation: portrait) {\n    body::after {\n        content: '\u7ad6\u5c4f';\n    }\n}\n\n/* \u6a2a\u5c4f\u65f6\u6837\u5f0f */\n@media all and (orientation: landscape) {\n    body::after {\n        content: '\u6a2a\u5c4f';\n    }\n}\n")),(0,i.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://juejin.im/post/5d5df391e51d453b1e478ad0"},"\u8fd9\u4e9b Web API \u771f\u7684\u6709\u7528\u5417? \u522b\u95ee\uff0c\u95ee\u5c31\u662f\u6709\u7528"))))}p.isMDXComponent=!0},84195:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/deviceor-9a5cb9ef2c1f03e84a16e39efde8119a.png"}}]);