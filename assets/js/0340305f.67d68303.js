"use strict";(self.webpackChunk_jeiiz_wiki_site=self.webpackChunk_jeiiz_wiki_site||[]).push([[8078],{158:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>d});var n=i(6393);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function m(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),s=c(i),d=a,g=s["".concat(o,".").concat(d)]||s[d]||p[d]||l;return i?n.createElement(g,r(r({ref:t},u),{},{components:i})):n.createElement(g,r({ref:t},u))}));function d(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=i.length,r=new Array(l);r[0]=s;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m.mdxType="string"==typeof e?e:a,r[1]=m;for(var c=2;c<l;c++)r[c]=i[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}s.displayName="MDXCreateElement"},384:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>m,toc:()=>c});var n=i(9421),a=(i(6393),i(158));const l={},r="Git-\u6280\u5de7",m={unversionedId:"\u5176\u4ed6/Git/Git-\u6280\u5de7",id:"\u5176\u4ed6/Git/Git-\u6280\u5de7",title:"Git-\u6280\u5de7",description:"\u6807\u51c6\u63d0\u4ea4\u89c4\u8303",source:"@site/docs/\u5176\u4ed6/Git/Git-\u6280\u5de7.md",sourceDirName:"\u5176\u4ed6/Git",slug:"/\u5176\u4ed6/Git/Git-\u6280\u5de7",permalink:"/static-site/docs/\u5176\u4ed6/Git/Git-\u6280\u5de7",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Git-\u539f\u7406",permalink:"/static-site/docs/\u5176\u4ed6/Git/Git-\u539f\u7406"},next:{title:"Hello Rust [1] - \u57fa\u7840\u8bed\u6cd5",permalink:"/static-site/docs/\u5176\u4ed6/Rust/01\u57fa\u7840\u8bed\u6cd5"}},o={},c=[{value:"\u6807\u51c6\u63d0\u4ea4\u89c4\u8303",id:"\u6807\u51c6\u63d0\u4ea4\u89c4\u8303",level:2},{value:"git \u522b\u540d\u64cd\u4f5c",id:"git-\u522b\u540d\u64cd\u4f5c",level:2},{value:"\u4f7f\u7528Commitizen\u4ee3\u66ffgit commit",id:"\u4f7f\u7528commitizen\u4ee3\u66ffgit-commit",level:2},{value:"\u5206\u652f\u64cd\u4f5c",id:"\u5206\u652f\u64cd\u4f5c",level:2},{value:"\u5feb\u901f\u5207\u6362\u5230\u4e0a\u4e00\u4e2a\u5206\u652f",id:"\u5feb\u901f\u5207\u6362\u5230\u4e0a\u4e00\u4e2a\u5206\u652f",level:3},{value:"\u5220\u9664\u5df2\u7ecf\u5408\u5e76\u5230master\u7684\u5206\u652f",id:"\u5220\u9664\u5df2\u7ecf\u5408\u5e76\u5230master\u7684\u5206\u652f",level:3},{value:"\u4fee\u6539\u5206\u652f\u540d\u79f0",id:"\u4fee\u6539\u5206\u652f\u540d\u79f0",level:3},{value:"\u5173\u8054\u8fdc\u7a0b\u5206\u652f",id:"\u5173\u8054\u8fdc\u7a0b\u5206\u652f",level:3},{value:"\u8fdc\u7a0b\u5220\u9664\u4e86\u5206\u652f, \u672c\u5730\u4e5f\u60f3\u5220\u9664",id:"\u8fdc\u7a0b\u5220\u9664\u4e86\u5206\u652f-\u672c\u5730\u4e5f\u60f3\u5220\u9664",level:3},{value:"\u4ece\u8fdc\u7a0b\u5206\u652f\u4e2d\u521b\u5efa\u5e76\u5207\u6362\u5230\u672c\u5730\u5206\u652f",id:"\u4ece\u8fdc\u7a0b\u5206\u652f\u4e2d\u521b\u5efa\u5e76\u5207\u6362\u5230\u672c\u5730\u5206\u652f",level:3},{value:"\u7248\u672c\u64cd\u4f5c",id:"\u7248\u672c\u64cd\u4f5c",level:2},{value:"\u91cd\u65b0\u8bbe\u7f6e\u7b2c\u4e00\u4e2acommit",id:"\u91cd\u65b0\u8bbe\u7f6e\u7b2c\u4e00\u4e2acommit",level:3},{value:"\u56de\u5230\u8fdc\u7a0b\u4ed3\u5e93\u7684\u72b6\u6001",id:"\u56de\u5230\u8fdc\u7a0b\u4ed3\u5e93\u7684\u72b6\u6001",level:3},{value:"\u5408\u5e76commit\u8282\u70b9",id:"\u5408\u5e76commit\u8282\u70b9",level:3},{value:"\u4fee\u6539commit\u63d0\u4ea4\u4fe1\u606f",id:"\u4fee\u6539commit\u63d0\u4ea4\u4fe1\u606f",level:3},{value:"\u4ee5\u65b0\u589e\u4e00\u4e2acommit\u7684\u65b9\u5f0f\u8fd8\u539f\u67d0\u4e2a<code>commit</code>\u7684\u4fee\u6539",id:"\u4ee5\u65b0\u589e\u4e00\u4e2acommit\u7684\u65b9\u5f0f\u8fd8\u539f\u67d0\u4e2acommit\u7684\u4fee\u6539",level:3},{value:"\u56de\u5230\u67d0\u4e2a commit \u7684\u72b6\u6001\uff0c\u5e76\u5220\u9664\u540e\u9762\u7684 commit",id:"\u56de\u5230\u67d0\u4e2a-commit-\u7684\u72b6\u6001\u5e76\u5220\u9664\u540e\u9762\u7684-commit",level:3},{value:"\u6e05\u9664gitignore\u6587\u4ef6\u4e2d\u8bb0\u5f55\u7684\u6587\u4ef6",id:"\u6e05\u9664gitignore\u6587\u4ef6\u4e2d\u8bb0\u5f55\u7684\u6587\u4ef6",level:3},{value:"\u72b6\u6001\u67e5\u8be2",id:"\u72b6\u6001\u67e5\u8be2",level:2},{value:"\u67e5\u770b\u51b2\u7a81\u6587\u4ef6\u5217\u8868",id:"\u67e5\u770b\u51b2\u7a81\u6587\u4ef6\u5217\u8868",level:3},{value:"\u5c55\u793a\u6682\u5b58\u533a, \u5de5\u4f5c\u533a\u548c\u6700\u8fd1\u7248\u672c\u7684\u533a\u522b",id:"\u5c55\u793a\u6682\u5b58\u533a-\u5de5\u4f5c\u533a\u548c\u6700\u8fd1\u7248\u672c\u7684\u533a\u522b",level:3},{value:"\u5c55\u793a\u672c\u5730\u5206\u652f\u5173\u8054\u8fdc\u7a0b\u4ed3\u5e93\u7684\u60c5\u51b5",id:"\u5c55\u793a\u672c\u5730\u5206\u652f\u5173\u8054\u8fdc\u7a0b\u4ed3\u5e93\u7684\u60c5\u51b5",level:3},{value:"\u5217\u51fa\u6240\u6709\u8fdc\u7a0b\u5206\u652f",id:"\u5217\u51fa\u6240\u6709\u8fdc\u7a0b\u5206\u652f",level:3},{value:"\u67e5\u770b\u67d0\u6bb5\u4ee3\u7801\u662f\u8c01\u5199\u7684",id:"\u67e5\u770b\u67d0\u6bb5\u4ee3\u7801\u662f\u8c01\u5199\u7684",level:3},{value:"\u67e5\u770b\u4e24\u5468\u5185\u7684\u6539\u52a8",id:"\u67e5\u770b\u4e24\u5468\u5185\u7684\u6539\u52a8",level:3},{value:"\u5c55\u793a\u7b80\u5316\u7684commit\u5386\u53f2",id:"\u5c55\u793a\u7b80\u5316\u7684commit\u5386\u53f2",level:3},{value:"SubModule \u76f8\u5173\u64cd\u4f5c",id:"submodule-\u76f8\u5173\u64cd\u4f5c",level:2},{value:"\u5b50\u6a21\u5757\u7684\u6dfb\u52a0",id:"\u5b50\u6a21\u5757\u7684\u6dfb\u52a0",level:3},{value:"\u5b50\u6a21\u5757\u7684\u4f7f\u7528",id:"\u5b50\u6a21\u5757\u7684\u4f7f\u7528",level:3},{value:"\u5b50\u6a21\u5757\u7684\u66f4\u65b0",id:"\u5b50\u6a21\u5757\u7684\u66f4\u65b0",level:3},{value:"\u5220\u9664\u5b50\u6a21\u5757",id:"\u5220\u9664\u5b50\u6a21\u5757",level:3},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"git-\u6280\u5de7"},"Git-\u6280\u5de7"),(0,a.kt)("h2",{id:"\u6807\u51c6\u63d0\u4ea4\u89c4\u8303"},"\u6807\u51c6\u63d0\u4ea4\u89c4\u8303"),(0,a.kt)("p",null,"\u63d0\u4ea4\u7684\u5185\u5bb9\u4e3b\u8981\u6709\u4e09\u4e2a\u90e8\u5206:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6807\u9898\u884c: \u5fc5\u586b, \u63cf\u8ff0\u4fee\u6539\u7684\u7c7b\u578b\u548c\u5185\u5bb9"),(0,a.kt)("li",{parentName:"ul"},"\u4e3b\u9898\u5185\u5bb9: \u63cf\u8ff0\u4e3a\u4ec0\u4e48\u4fee\u6539, \u505a\u4e86\u4ec0\u4e48\u4fee\u6539\u7b49"),(0,a.kt)("li",{parentName:"ul"},"\u9875\u811a\u6ce8\u91ca: Closed Issues\u6216\u8005Breaking Changed")),(0,a.kt)("p",null,"\u5e38\u7528\u7684\u4fee\u6539\u9879: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[feat]","\uff1a\u65b0\u529f\u80fd\uff08feature\uff09"),(0,a.kt)("li",{parentName:"ul"},"[fix]","\uff1a\u4fee\u8865bug"),(0,a.kt)("li",{parentName:"ul"},"[docs]","\uff1a\u6587\u6863\uff08documentation\uff09"),(0,a.kt)("li",{parentName:"ul"},"[style]","\uff1a \u683c\u5f0f\uff08\u4e0d\u5f71\u54cd\u4ee3\u7801\u8fd0\u884c\u7684\u53d8\u52a8\uff09"),(0,a.kt)("li",{parentName:"ul"},"[refactor]","\uff1a\u91cd\u6784\uff08\u5373\u4e0d\u662f\u65b0\u589e\u529f\u80fd\uff0c\u4e5f\u4e0d\u662f\u4fee\u6539bug\u7684\u4ee3\u7801\u53d8\u52a8\uff09"),(0,a.kt)("li",{parentName:"ul"},"[test]","\uff1a\u589e\u52a0\u6d4b\u8bd5"),(0,a.kt)("li",{parentName:"ul"},"[chore]","\uff1a\u6784\u5efa\u8fc7\u7a0b\u6216\u8f85\u52a9\u5de5\u5177\u7684\u53d8\u52a8")),(0,a.kt)("h2",{id:"git-\u522b\u540d\u64cd\u4f5c"},"git \u522b\u540d\u64cd\u4f5c"),(0,a.kt)("p",null,"\u7b80\u5316\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git config --global alias.<handle> <command>\n\n\u6bd4\u5982\uff1agit status \u6539\u6210 git st\uff0c\u8fd9\u6837\u53ef\u4ee5\u7b80\u5316\u547d\u4ee4\n\ngit config --global alias.st status\n")),(0,a.kt)("h2",{id:"\u4f7f\u7528commitizen\u4ee3\u66ffgit-commit"},"\u4f7f\u7528Commitizen\u4ee3\u66ffgit commit"),(0,a.kt)("p",null,"\u5168\u5c40\u5b89\u88c5:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'npm install -g commitizen cz-conventional-changelog\n\necho \'{ "path": "cz-conventional-changelog" }\' > ~/.czrc\n')),(0,a.kt)("p",null,"\u4e4b\u540e\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"git cz"),"\u4ee3\u66ff",(0,a.kt)("inlineCode",{parentName:"p"},"git commit"),"\u5c31\u53ef\u4ee5\u4e86. "),(0,a.kt)("h2",{id:"\u5206\u652f\u64cd\u4f5c"},"\u5206\u652f\u64cd\u4f5c"),(0,a.kt)("p",null,"\u5206\u652f\u76f8\u5173\u7684\u4e00\u4e9b\u64cd\u4f5c"),(0,a.kt)("h3",{id:"\u5feb\u901f\u5207\u6362\u5230\u4e0a\u4e00\u4e2a\u5206\u652f"},"\u5feb\u901f\u5207\u6362\u5230\u4e0a\u4e00\u4e2a\u5206\u652f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git checkout -\n")),(0,a.kt)("h3",{id:"\u5220\u9664\u5df2\u7ecf\u5408\u5e76\u5230master\u7684\u5206\u652f"},"\u5220\u9664\u5df2\u7ecf\u5408\u5e76\u5230master\u7684\u5206\u652f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git branch --merged master | grep -v '^\\*\\|  master' | xargs -n 1 git branch -d\n")),(0,a.kt)("h3",{id:"\u4fee\u6539\u5206\u652f\u540d\u79f0"},"\u4fee\u6539\u5206\u652f\u540d\u79f0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git branch -m old_branch new_branch # \u91cd\u547d\u540d\u672c\u5730\u5206\u652f\ngit push origin :old_branch # \u5220\u9664\u65e7\u5206\u652f\ngit push --set-upstream origin new_branch # \u63a8\u9001\u65b0\u5206\u652f\u5230\u8fdc\u7a0b\uff0c\u5e76\u4e14\u672c\u5730\u5206\u652f\u8fdb\u884c\u8ddf\u8e2a\n")),(0,a.kt)("h3",{id:"\u5173\u8054\u8fdc\u7a0b\u5206\u652f"},"\u5173\u8054\u8fdc\u7a0b\u5206\u652f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git branch -u origin/mybranch\n")),(0,a.kt)("p",null,"\u6216\u8005\u5728push\u7684\u65f6\u5019\u52a0\u4e0a",(0,a.kt)("inlineCode",{parentName:"p"},"-u"),"\u53c2\u6570:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git push origin/mybranch -u\n")),(0,a.kt)("h3",{id:"\u8fdc\u7a0b\u5220\u9664\u4e86\u5206\u652f-\u672c\u5730\u4e5f\u60f3\u5220\u9664"},"\u8fdc\u7a0b\u5220\u9664\u4e86\u5206\u652f, \u672c\u5730\u4e5f\u60f3\u5220\u9664"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git remote prune origin\n")),(0,a.kt)("h3",{id:"\u4ece\u8fdc\u7a0b\u5206\u652f\u4e2d\u521b\u5efa\u5e76\u5207\u6362\u5230\u672c\u5730\u5206\u652f"},"\u4ece\u8fdc\u7a0b\u5206\u652f\u4e2d\u521b\u5efa\u5e76\u5207\u6362\u5230\u672c\u5730\u5206\u652f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git checkout -b <branch-name> origin/<branch-name>\n")),(0,a.kt)("h2",{id:"\u7248\u672c\u64cd\u4f5c"},"\u7248\u672c\u64cd\u4f5c"),(0,a.kt)("h3",{id:"\u91cd\u65b0\u8bbe\u7f6e\u7b2c\u4e00\u4e2acommit"},"\u91cd\u65b0\u8bbe\u7f6e\u7b2c\u4e00\u4e2acommit"),(0,a.kt)("p",null,"\u628a\u6240\u6709\u7684\u6539\u52a8\u90fd\u91cd\u65b0\u653e\u56de\u5de5\u4f5c\u533a, \u5e76\u6e05\u7a7a\u6240\u6709\u7684commit, \u8fd9\u6837\u5c31\u53ef\u4ee5\u91cd\u65b0\u63d0\u4ea4\u7b2c\u4e00\u4e2acommit\u4e86"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git update-ref -d HEAD\n")),(0,a.kt)("h3",{id:"\u56de\u5230\u8fdc\u7a0b\u4ed3\u5e93\u7684\u72b6\u6001"},"\u56de\u5230\u8fdc\u7a0b\u4ed3\u5e93\u7684\u72b6\u6001"),(0,a.kt)("p",null,"\u653e\u5f03\u672c\u5730\u7684\u6240\u6709\u4fee\u6539, \u56de\u5230\u8fdc\u7a0b\u4ed3\u5e93\u7684\u72b6\u6001"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git fetch --all && git reset --hard origin/master\n")),(0,a.kt)("h3",{id:"\u5408\u5e76commit\u8282\u70b9"},"\u5408\u5e76commit\u8282\u70b9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git log #\u83b7\u53d6\u76ee\u6807commit\u7684id\ngit rebase -i commitId #\u4ece\u8be5commit\u5f00\u59cbrebase\uff0c\u8fd9\u91cc\u4f1a\u8fdb\u5165vi\u6a21\u5f0f\n # \u6839\u636e\u63d0\u793a\u5bf9commit\u8fdb\u884cpick\u3001fixup\uff0c\u6216\u8005squash\n # \u4fee\u6539\u5b8c\u6210\u540e\u9000\u51favi\u7f16\u8f91\u5668`:wq`\n # \u5982\u679c\u4fee\u6539\u4e3asquash\uff0c git\u4f1a\u81ea\u52a8\u8df3\u8f6c\u5230commit message\u7684\u7f16\u8f91\u754c\u9762\u8fdb\u884ccommit message\u7684\u7f16\u8f91\n")),(0,a.kt)("h3",{id:"\u4fee\u6539commit\u63d0\u4ea4\u4fe1\u606f"},"\u4fee\u6539commit\u63d0\u4ea4\u4fe1\u606f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git rebase -i commitId #\u4ece\u8be5commit\u5f00\u59cbrebase\uff0c\u8fd9\u91cc\u4f1a\u8fdb\u5165vi\u6a21\u5f0f\uff0c \u53ef\u4ee5\u8f93\u5165Head\u6307\u9488\u6216\u8005Root\u5934\u6307\u9488\n # \u8fdb\u5165\u7f16\u8f91\u6587\u4ef6\uff0c \u5c06\u60f3\u8981\u4fee\u6539\u7684commit\u7684\u524d\u7f00\u6539\u4e3aedit\n # \uff1awq \u4fdd\u5b58\u9000\u51fa\ngit commit --amend\ngit rebase --contine\n # \u4ea4\u66ff\u4f7f\u7528\u8fd9\u4e24\u4e2a\u547d\u4ee4\uff0c\u4f9d\u6b21\u4fee\u6539\u5bf9\u5e94\u7684commit\u63d0\u4ea4\u4fe1\u606f\ngit push -f origin # \u5f3a\u5236\u63a8\u9001\u5230\u8fdc\u7a0b\u4ed3\u5e93\uff0c \u8986\u76d6\u5206\u652f\u63d0\u4ea4\u4fe1\u606f\n")),(0,a.kt)("h3",{id:"\u4ee5\u65b0\u589e\u4e00\u4e2acommit\u7684\u65b9\u5f0f\u8fd8\u539f\u67d0\u4e2acommit\u7684\u4fee\u6539"},"\u4ee5\u65b0\u589e\u4e00\u4e2acommit\u7684\u65b9\u5f0f\u8fd8\u539f\u67d0\u4e2a",(0,a.kt)("inlineCode",{parentName:"h3"},"commit"),"\u7684\u4fee\u6539"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git revert <commit-id>\n")),(0,a.kt)("h3",{id:"\u56de\u5230\u67d0\u4e2a-commit-\u7684\u72b6\u6001\u5e76\u5220\u9664\u540e\u9762\u7684-commit"},"\u56de\u5230\u67d0\u4e2a commit \u7684\u72b6\u6001\uff0c\u5e76\u5220\u9664\u540e\u9762\u7684 commit"),(0,a.kt)("p",null,"\u548crevert\u7684\u533a\u522b: reset\u547d\u4ee4\u4f1a\u62b9\u9664\u67d0\u4e2acommit id\u4e4b\u540e\u7684\u6240\u6709commit"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git reset <commit-id>  #\u9ed8\u8ba4\u5c31\u662f-mixed\u53c2\u6570\u3002\n\ngit reset --mixed HEAD^  #\u56de\u9000\u81f3\u4e0a\u4e2a\u7248\u672c\uff0c\u5b83\u5c06\u91cd\u7f6eHEAD\u5230\u53e6\u5916\u4e00\u4e2acommit,\u5e76\u4e14\u91cd\u7f6e\u6682\u5b58\u533a\u4ee5\u4fbf\u548cHEAD\u76f8\u5339\u914d\uff0c\u4f46\u662f\u4e5f\u5230\u6b64\u4e3a\u6b62\u3002\u5de5\u4f5c\u533a\u4e0d\u4f1a\u88ab\u66f4\u6539\u3002\n\ngit reset --soft HEAD~3  #\u56de\u9000\u81f3\u4e09\u4e2a\u7248\u672c\u4e4b\u524d\uff0c\u53ea\u56de\u9000\u4e86commit\u7684\u4fe1\u606f\uff0c\u6682\u5b58\u533a\u548c\u5de5\u4f5c\u533a\u4e0e\u56de\u9000\u4e4b\u524d\u4fdd\u6301\u4e00\u81f4\u3002\u5982\u679c\u8fd8\u8981\u63d0\u4ea4\uff0c\u76f4\u63a5commit\u5373\u53ef  \n\ngit reset --hard <commit-id>  #\u5f7b\u5e95\u56de\u9000\u5230\u6307\u5b9acommit-id\u7684\u72b6\u6001\uff0c\u6682\u5b58\u533a\u548c\u5de5\u4f5c\u533a\u4e5f\u4f1a\u53d8\u4e3a\u6307\u5b9acommit-id\u7248\u672c\u7684\u5185\u5bb9\n")),(0,a.kt)("h3",{id:"\u6e05\u9664gitignore\u6587\u4ef6\u4e2d\u8bb0\u5f55\u7684\u6587\u4ef6"},"\u6e05\u9664gitignore\u6587\u4ef6\u4e2d\u8bb0\u5f55\u7684\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clean -X -f\n")),(0,a.kt)("h2",{id:"\u72b6\u6001\u67e5\u8be2"},"\u72b6\u6001\u67e5\u8be2"),(0,a.kt)("h3",{id:"\u67e5\u770b\u51b2\u7a81\u6587\u4ef6\u5217\u8868"},"\u67e5\u770b\u51b2\u7a81\u6587\u4ef6\u5217\u8868"),(0,a.kt)("p",null,"\u5c55\u793a\u5de5\u4f5c\u533a\u7684\u51b2\u7a81\u6587\u4ef6\u5217\u8868"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git diff --name-only --diff-filter=U\n")),(0,a.kt)("h3",{id:"\u5c55\u793a\u6682\u5b58\u533a-\u5de5\u4f5c\u533a\u548c\u6700\u8fd1\u7248\u672c\u7684\u533a\u522b"},"\u5c55\u793a\u6682\u5b58\u533a, \u5de5\u4f5c\u533a\u548c\u6700\u8fd1\u7248\u672c\u7684\u533a\u522b"),(0,a.kt)("p",null,"\u8f93\u51fa\u5de5\u4f5c\u533a, \u6682\u5b58\u533a\u548c\u672c\u5730\u9189\u7ecf\u7248\u672c\u7684\u533a\u522b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git diff HEAD\n")),(0,a.kt)("h3",{id:"\u5c55\u793a\u672c\u5730\u5206\u652f\u5173\u8054\u8fdc\u7a0b\u4ed3\u5e93\u7684\u60c5\u51b5"},"\u5c55\u793a\u672c\u5730\u5206\u652f\u5173\u8054\u8fdc\u7a0b\u4ed3\u5e93\u7684\u60c5\u51b5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git branch -vv\n")),(0,a.kt)("h3",{id:"\u5217\u51fa\u6240\u6709\u8fdc\u7a0b\u5206\u652f"},"\u5217\u51fa\u6240\u6709\u8fdc\u7a0b\u5206\u652f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git branch -r\n")),(0,a.kt)("h3",{id:"\u67e5\u770b\u67d0\u6bb5\u4ee3\u7801\u662f\u8c01\u5199\u7684"},"\u67e5\u770b\u67d0\u6bb5\u4ee3\u7801\u662f\u8c01\u5199\u7684"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git blame <file-name>\n")),(0,a.kt)("h3",{id:"\u67e5\u770b\u4e24\u5468\u5185\u7684\u6539\u52a8"},"\u67e5\u770b\u4e24\u5468\u5185\u7684\u6539\u52a8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git whatchanged --since='2 weeks ago'\n")),(0,a.kt)("h3",{id:"\u5c55\u793a\u7b80\u5316\u7684commit\u5386\u53f2"},"\u5c55\u793a\u7b80\u5316\u7684commit\u5386\u53f2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git log --pretty=oneline --graph --decorate --all\n")),(0,a.kt)("h2",{id:"submodule-\u76f8\u5173\u64cd\u4f5c"},"SubModule \u76f8\u5173\u64cd\u4f5c"),(0,a.kt)("h3",{id:"\u5b50\u6a21\u5757\u7684\u6dfb\u52a0"},"\u5b50\u6a21\u5757\u7684\u6dfb\u52a0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# \u6dfb\u52a0\u5b50\u6a21\u5757\ngit submodule add <url> <path> \n")),(0,a.kt)("p",null,"\u6dfb\u52a0\u6210\u529f\u540e\u53ef\u4ee5\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"git status"),"\u547d\u4ee4\u4e0b\u67e5\u770b\u5230",(0,a.kt)("inlineCode",{parentName:"p"},".gitmodules"),"\u6587\u4ef6\u4e2d\u65b0\u589e\u4e86\u5b50\u6a21\u5757\u7684\u8def\u5f84"),(0,a.kt)("h3",{id:"\u5b50\u6a21\u5757\u7684\u4f7f\u7528"},"\u5b50\u6a21\u5757\u7684\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# \u4e0b\u8f7d\u5b50\u6a21\u5757\ngit submodule init\ngit submodule update\n# \u6216\u8005\ngit submodule update --init --recursive\n")),(0,a.kt)("h3",{id:"\u5b50\u6a21\u5757\u7684\u66f4\u65b0"},"\u5b50\u6a21\u5757\u7684\u66f4\u65b0"),(0,a.kt)("p",null,"\u8fdb\u5165\u5b50\u6a21\u5757\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"git pull"),"\u8fdb\u884c\u66f4\u65b0, \u67e5\u770b",(0,a.kt)("inlineCode",{parentName:"p"},"git log"),"\u67e5\u770b\u76f8\u5e94\u63d0\u4ea4. "),(0,a.kt)("h3",{id:"\u5220\u9664\u5b50\u6a21\u5757"},"\u5220\u9664\u5b50\u6a21\u5757"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rm -rf \u5b50\u6a21\u5757\u76ee\u5f55"),": \u5220\u9664\u5b50\u6a21\u5757\u76ee\u5f55\u53ca\u6e90\u7801"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"vi .gitmodules"),": \u5220\u9664\u9879\u76ee\u76ee\u5f55\u4e0b",(0,a.kt)("inlineCode",{parentName:"li"},".gitmodules"),"\u6587\u4ef6\u4e2d\u5b50\u6a21\u5757\u76f8\u5173\u6761\u76ee"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"vi .git/config"),": \u5220\u9664\u914d\u7f6e\u9879\u4e2d\u5b50\u6a21\u5757\u76f8\u5173\u6761\u76ee"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rm .git/module/*"),": \u5220\u9664\u6a21\u5757\u4e0b\u7684\u5b50\u6a21\u5757\u76ee\u5f55, \u6bcf\u4e2a\u5b50\u6a21\u5757\u5bf9\u5e94\u4e00\u4e2a\u964c\u8def")),(0,a.kt)("p",null,"\u6267\u884c\u5b8c\u6210\u540e, \u518d\u6267\u884c\u6dfb\u52a0\u5b50\u6a21\u5757\u7684\u547d\u4ee4\u5373\u53ef, \u5982\u679c\u4ecd\u7136\u62a5\u9519, \u53ef\u4ee5\u6267\u884c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git rm --cached <\u5b50\u6a21\u5757\u540d\u79f0>\n")),(0,a.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"))}p.isMDXComponent=!0}}]);