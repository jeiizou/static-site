"use strict";(self.webpackChunk_jeiiz_wiki_site=self.webpackChunk_jeiiz_wiki_site||[]).push([[1872],{158:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>k});var r=t(6393);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),m=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},o=function(e){var n=m(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),c=m(t),k=a,f=c["".concat(p,".").concat(k)]||c[k]||s[k]||l;return t?r.createElement(f,i(i({ref:n},o),{},{components:t})):r.createElement(f,i({ref:n},o))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=c;var u={};for(var p in n)hasOwnProperty.call(n,p)&&(u[p]=n[p]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var m=2;m<l;m++)i[m]=t[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1014:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var r=t(9421),a=(t(6393),t(158));const l={},i="Hello Rust [6] - \u6cdb\u578b & Trait & \u751f\u547d\u5468\u671f",u={unversionedId:"\u5176\u4ed6/Rust/06\u6cdb\u578b-Trait-\u751f\u547d\u5468\u671f",id:"\u5176\u4ed6/Rust/06\u6cdb\u578b-Trait-\u751f\u547d\u5468\u671f",title:"Hello Rust [6] - \u6cdb\u578b & Trait & \u751f\u547d\u5468\u671f",description:"\u7ed3\u6784\u4f53 & \u679a\u4e3e & \u65b9\u6cd5",source:"@site/docs/\u5176\u4ed6/Rust/06\u6cdb\u578b-Trait-\u751f\u547d\u5468\u671f.md",sourceDirName:"\u5176\u4ed6/Rust",slug:"/\u5176\u4ed6/Rust/06\u6cdb\u578b-Trait-\u751f\u547d\u5468\u671f",permalink:"/docs/\u5176\u4ed6/Rust/06\u6cdb\u578b-Trait-\u751f\u547d\u5468\u671f",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Hello Rust [5] - \u96c6\u5408 & Panic!",permalink:"/docs/\u5176\u4ed6/Rust/05\u96c6\u5408-panic"},next:{title:"mathjax\u8bed\u6cd5\u5907\u5fd8",permalink:"/docs/\u5176\u4ed6/mathjax\u8bed\u6cd5\u5907\u5fd8"}},p={},m=[{value:"\u7ed3\u6784\u4f53 &amp; \u679a\u4e3e &amp; \u65b9\u6cd5",id:"\u7ed3\u6784\u4f53--\u679a\u4e3e--\u65b9\u6cd5",level:2},{value:"\u6cdb\u578b\u7684\u6027\u80fd",id:"\u6cdb\u578b\u7684\u6027\u80fd",level:2},{value:"\u5b9a\u4e49 trait",id:"\u5b9a\u4e49-trait",level:2},{value:"\u9ed8\u8ba4\u5b9e\u73b0",id:"\u9ed8\u8ba4\u5b9e\u73b0",level:2},{value:"Trait \u5e94\u7528",id:"trait-\u5e94\u7528",level:2},{value:"\u6cdb\u578b\u751f\u547d\u5468\u671f",id:"\u6cdb\u578b\u751f\u547d\u5468\u671f",level:2}],o={toc:m};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hello-rust-6---\u6cdb\u578b--trait--\u751f\u547d\u5468\u671f"},"Hello Rust ","[6]"," - \u6cdb\u578b & Trait & \u751f\u547d\u5468\u671f"),(0,a.kt)("h1",{id:"\u6cdb\u578b"},"\u6cdb\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"// \u5b9a\u4e49\u4e00\u4e2a\u6cdb\u578b\u51fd\u6570\uff0c\u8fd9\u91cc\u4f1a\u62a5\u4e00\u4e2a\u7f16\u8bd1\u9519\u8bef\nfn largest<T>(list: &[T]) -> T {\n    let mut largest = list[0];\n\n    for &item in list {\n        if item > largest {\n            largest = item;\n        }\n    }\n\n    largest\n}\n\nfn main() {\n    let number_list = vec![34, 50, 25, 100, 65];\n\n    let result = largest(&number_list);\n    println!(\"The largest number is {}\", result);\n\n    let char_list = vec!['y', 'm', 'a', 'q'];\n\n    let result = largest(&char_list);\n    println!(\"The largest char is {}\", result);\n}\n")),(0,a.kt)("h2",{id:"\u7ed3\u6784\u4f53--\u679a\u4e3e--\u65b9\u6cd5"},"\u7ed3\u6784\u4f53 & \u679a\u4e3e & \u65b9\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"// \u7ed3\u6784\u4f53\u4e2d\u7684\u6cdb\u578b\nstruct Point<T> {\n    x: T,\n    y: T,\n}\n\n// \u679a\u4e3e\u4e2d\u7684\u6cdb\u578b\nenum Option<T> {\n    Some(T),\n    None,\n}\n\n// \u65b9\u6cd5\u4e2d\u7684\u6cdb\u578b\nimpl<T> Point<T> {\n    fn x(&self) -> &T {\n        &self.x\n    }\n}\n\nfn main() {\n    let integer = Point { x: 5, y: 10 };\n    let float = Point { x: 1.0, y: 4.0 };\n}\n\n// \u591a\u4e2a\u6cdb\u578b\nstruct Point<T, U> {\n    x: T,\n    y: U,\n}\n")),(0,a.kt)("h2",{id:"\u6cdb\u578b\u7684\u6027\u80fd"},"\u6cdb\u578b\u7684\u6027\u80fd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Rust\u4f1a\u5728\u7f16\u8bd1\u65f6\u8fdb\u884c\u6cdb\u578b\u4ee3\u7801\u7684\u5355\u6001\u5316\uff08monomorphization\uff09\uff1a\u901a\u8fc7\u586b\u5145\u7f16\u8bd1\u65f6\u5177\u4f53\u4f7f\u7528\u7684\u7c7b\u578b\uff0c\u5c06\u901a\u7528\u4ee3\u7801\u8f6c\u6362\u4e3a\u7279\u5b9a\u4ee3\u7801\u7684\u8fc7\u7a0b\u3002")),(0,a.kt)("h1",{id:"trait-\u5b9a\u4e49\u5171\u540c\u884c\u4e3a"},"Trait: \u5b9a\u4e49\u5171\u540c\u884c\u4e3a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"trait\u662f\u9ad8\u901fRust\u7f16\u8bd1\u5668\u67d0\u4e2a\u7279\u5b9a\u7c7b\u578b\u62e5\u6709\u53ef\u80fd\u4e0e\u5176\u4ed6\u7c7b\u578b\u5171\u4eab\u7684\u529f\u80fd\uff0ctrait\u7c7b\u4f3c\u4e8e\u5176\u4ed6\u8bed\u8a00\u4e2d\u7684 \u63a5\u53e3\uff08interface\uff09\uff0c\u4f46\u662f\u53c8\u6709\u4e00\u4e9b\u533a\u522b")),(0,a.kt)("h2",{id:"\u5b9a\u4e49-trait"},"\u5b9a\u4e49 trait"),(0,a.kt)("p",null,"\u4e00\u4e2a\u7c7b\u578b\u7684\u884c\u4e3a\u7531\u5668\u53ef\u4f9b\u8c03\u7528\u7684\u65b9\u6cd5\u6784\u6210\u3002\u5982\u679c\u8981\u5bf9\u4e0d\u540c\u7c7b\u578b\u8c03\u7528\u76f8\u540c\u7684\u65b9\u6cd5\uff0c\u8fd9\u4e9b\u7c7b\u578b\u5c31\u53ef\u4ee5\u5171\u4eab\u76f8\u540c\u7684\u884c\u4e3a\u4e86\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"trait"),"\u65b9\u6cd5\u5c31\u662f\u4e00\u79cd\u5c06\u65b9\u6cd5\u7b7e\u540d\u7ec4\u5408\u7684\u65b9\u6cd5\uff0c\u7528\u4e8e\u5b9a\u4e49\u4e00\u4e2a\u5b9e\u73b0\u67d0\u4e9b\u76ee\u7684\u6240\u5fc5\u987b\u5f97\u884c\u4e3a\u7684\u96c6\u5408\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'// \u58f0\u660e\u4e00\u4e2a trait\n// \u5728impl\u540e\u9762\u6211\u4eec\u63d0\u4f9b\u4e86\u5b9e\u73b0trait\u7684\u540d\u79f0\u3002\npub trait Summary {\n    // trait \u4e2d\u53ef\u4ee5\u6709\u591a\u4e2a\u65b9\u6cd5\uff0c\u4e00\u884c\u4e00\u4e2a\u65b9\u6cd5\u7b7e\u540d\u4e14\u90fd\u4ee5\u5206\u53f7\u7ed3\u5c3e\n    fn summarize(&self) -> String;\n}\n\npub struct NewsArticle {\n    pub headline: String,\n    pub location: String,\n    pub author: String,\n    pub content: String,\n}\n\n// \u5728impl\u5757\u4e2d\uff0c\u662f\u7528trait\u5b9a\u4e49\u4e2d\u7684\u65b9\u6cd5\u7b7e\u540d\uff0c\u4e0d\u8fc7\u540e\u9762\u4e0d\u9700\u8981\u8ddf\u5206\u53f7\nimpl Summary for NewsArticle {\n    fn summarize(&self) -> String {\n        format!("{}, by {} ({})", self.headline, self.author, self.location)\n    }\n}\n\npub struct Tweet {\n    pub username: String,\n    pub content: String,\n    pub reply: bool,\n    pub retweet: bool,\n}\n\nimpl Summary for Tweet {\n    fn summarize(&self) -> String {\n        format!("{}: {}", self.username, self.content)\n    }\n}\n\n\n// \u4f7f\u7528\nuse aggregator::{Summary, Tweet};\n\nfn main() {\n    let tweet = Tweet {\n        username: String::from("horse_ebooks"),\n        content: String::from(\n            "of course, as you probably already know, people",\n        ),\n        reply: false,\n        retweet: false,\n    };\n    // \u50cf\u8c03\u7528\u5e38\u89c4\u65b9\u6cd5\u4e00\u6837\u8c03\u7528\n    println!("1 new tweet: {}", tweet.summarize());\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u552f\u4e00\u7684\u533a\u522b\u5728\u4e8e\uff0c Summary\u9700\u8981\u548c\u7c7b\u578b\u4e00\u8d77\u5f15\u5165\u4f5c\u7528\u57df\u6765\u4f7f\u7528\u989d\u5916\u7684\u65b9\u6cd5\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5b9e\u73b0trait\u65f6\uff0c\u53ea\u6709\u5f53\u81f3\u5c11\u4e00\u4e2atrait\u6216\u8005\u5b9e\u73b0trait\u7684\u7c7b\u578b\u4f4d\u4e8ecrate\u7684\u672c\u5730\u4f5c\u7528\u57df\u65f6\uff0c\u624d\u80fd\u4e3a\u8be5\u7c7b\u578b\u5b9e\u73b0trait\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"aggregator"),"crate\u7684\u81ea\u5b9a\u4e49\u7c7b\u578b",(0,a.kt)("inlineCode",{parentName:"li"},"Twwet"),"\u5b9e\u73b0\u6807\u51c6\u5e93\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"Display"),"trait\uff0c \u56e0\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"Tweet"),"\u7c7b\u578b\u4f4d\u4e8e",(0,a.kt)("inlineCode",{parentName:"li"},"aggreator"),"crate\u672c\u5730\u7684\u4f5c\u7528\u57df\u4e2d\u3002 "))),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u4e3a\u5916\u90e8\u7c7b\u578b\u5b9e\u73b0\u5916\u90e8",(0,a.kt)("inlineCode",{parentName:"li"},"trait"),"\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"aggregator"),"crate \u4e2d\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"Vec<T>"),"\u5b9e\u73b0",(0,a.kt)("inlineCode",{parentName:"li"},"Display"),"trait\u3002\u56e0\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"Display"),"\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"Vec<T>"),"\u5b9a\u4e49\u4e0e\u6807\u51c6\u5e93\u4e2d\u3002\u4ed6\u4eec\u5e76\u4e0d\u4f4d\u4e8e",(0,a.kt)("inlineCode",{parentName:"li"},"aggregator"),"crate\u7684\u672c\u5730\u4f5c\u7528\u57df\u4e2d\u3002")))),(0,a.kt)("p",null,"\u8fd9\u5c31\u662f\uff1a ",(0,a.kt)("strong",{parentName:"p"},"\u76f8\u5e72\u6027\uff08coherence\uff09"),"\u7684\u7a0b\u5e8f\u5c5e\u6027\u7684\u4e00\u90e8\u5206\uff0c\u6216\u8005\u66f4\u5177\u4f53\u7684\u8bf4\u662f\uff1a",(0,a.kt)("strong",{parentName:"p"},"\u5b64\u513f\u89c4\u5219\uff08orphan rule\uff09"),", \u5176\u5f97\u540d\u4e0d\u5b58\u5728\u7236\u7c7b\u578b\u3002\u8fd9\u6761\u89c4\u5219\u786e\u4fdd\u5176\u4ed6\u4eba\u7f16\u5199\u7684\u4ee3\u7801\u4e0d\u4f1a\u7834\u574f\u4f60\u4ee3\u7801\u3002"),(0,a.kt)("h2",{id:"\u9ed8\u8ba4\u5b9e\u73b0"},"\u9ed8\u8ba4\u5b9e\u73b0"),(0,a.kt)("p",null,"\u53ef\u4ee5\u4e3a\u67d0\u79cd",(0,a.kt)("inlineCode",{parentName:"p"},"trait"),"\u4e2d\u7684\u67d0\u4e9b\u6216\u5168\u90e8\u65b9\u6cd5\u63d0\u4f9b\u9ed8\u8ba4\u7684\u884c\u4e3a\uff0c\u800c\u4e0d\u662f\u5728\u6bcf\u4e2a\u7c7b\u578b\u7684\u6bcf\u4e2a\u5b9e\u73b0\u4e2d\u5b9a\u4e49\u81ea\u5df1\u7684\u884c\u4e3a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'pub trait Summary {\n    fn summarize(&self) -> String {\n        // \u63d0\u4f9b\u4e00\u4e2a\u65b9\u6cd5\u7684\u9ed8\u8ba4\u5b9e\u73b0\n        String::from("(Read more...)")\n    }\n    \n    // \u8fd9\u4e2a\u65b9\u6cd5\u4e0d\u5b9e\u73b0\n    fn summarize_author(&self) -> String;\n}\n\n\nimpl Summary for Tweet {\n    // \u5b9e\u73b0\u90e8\u5206\u65b9\u6cd5\n    fn summarize_author(&self) -> String {\n        format!("@{}", self.username)\n    }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5b9e\u73b0\u5141\u8bb8\u8c03\u7528\u76f8\u540c\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"trait"),"\u4e2d\u7684\u5176\u4ed6\u65b9\u6cd5\uff0c\u54ea\u6015\u8fd9\u4e9b\u65b9\u6cd5\u6ca1\u6709\u9ed8\u8ba4\u5b9e\u73b0\u3002\u6240\u4ee5",(0,a.kt)("inlineCode",{parentName:"li"},"trait"),"\u53ef\u4ee5\u63d0\u4f9b\u5f88\u591a\u6709\u7528\u7684\u529f\u80fd\u4f46\u662f\u53ea\u9700\u8981\u5b9e\u73b0\u6307\u5b9a\u7684\u4e00\u5c0f\u90e8\u5206\u5185\u5bb9\u3002",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\u65e0\u6cd5\u4ece\u76f8\u540c\u7684\u91cd\u8f7d\u5b9e\u73b0\u4e2d\u9ed8\u8ba4\u65b9\u6cd5\u3002")))),(0,a.kt)("h2",{id:"trait-\u5e94\u7528"},"Trait \u5e94\u7528"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Trait \u4f5c\u4e3a\u53c2\u6570"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'// \u5bf9\u4e8e item \u53c2\u6570\uff0c\u6307\u5b9a\u4e86 impl \u5173\u952e\u5b57\u548c trait \u540d\u79f0\uff0c\u800c\u4e0d\u662f\u5177\u4f53\u7684\u7c7b\u578b\npub fn notify(item: &impl Summary) {\n    println!("Breaking news! {}", item.summarize());\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"item\u53c2\u6570\u652f\u6301\u4efb\u4f55\u5b9e\u73b0\u4e86\u6307\u5b9a",(0,a.kt)("inlineCode",{parentName:"p"},"trait"),"\u7684\u7c7b\u578b\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Trait Bound")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn notify<T: Summary>(item: &T) {\n    println!("Breaking news! {}", item.summarize());\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"impl trait"),"\u5f88\u65b9\u4fbf\uff0c\u9002\u7528\u4e8e\u77ed\u5c0f\u7684\u4f8b\u5b50\u3002",(0,a.kt)("inlineCode",{parentName:"li"},"trait bound"),"\u5219\u9002\u7528\u4e8e\u66f4\u52a0\u590d\u6742\u7684\u573a\u666f\u3002 ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"// impl trait\npub fn notify(item1: &impl Summary, item2: &impl Summary) {}\n\n// trait bound\npub fn notify<T: Summary>(item1: &T, item2: &T) {}\n\n// \u6307\u5b9a\u591a\u4e2a impl\npub fn notify(item: &(impl Summary + Display)) {}\n\n// bound \u591a\u4e2a trait\npub fn notify<T: Summary + Display>(item: &T) {}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"li"},"where"),"\u7b80\u5316",(0,a.kt)("inlineCode",{parentName:"li"},"trait bound"),"\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"fn some_function<T: Display + Clone, U: Clone + Debug>(t: &T, u: &U) -> i32 {}\n\n// where\nfn some_function<T, U>(t: &T, u: &U) -> i32\n    where T: Display + Clone,\n          U: Clone + Debug\n{}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"li"},"trait"),"\u7684\u7c7b\u578b\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'fn returns_summarizable() -> impl Summary {\n    Tweet {\n        username: String::from("horse_ebooks"),\n        content: String::from(\n            "of course, as you probably already know, people",\n        ),\n        reply: false,\n        retweet: false,\n    }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528trait bound\u6709\u6761\u4ef6\u7684\u5b9e\u73b0\u65b9\u6cd5\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use std::fmt::Display;\n\nstruct Pair<T> {\n    x: T,\n    y: T,\n}\n\nimpl<T> Pair<T> {\n    fn new(x: T, y: T) -> Self {\n        Self { x, y }\n    }\n}\n\nimpl<T: Display + PartialOrd> Pair<T> {\n    fn cmp_display(&self) {\n        if self.x >= self.y {\n            println!("The largest member is x = {}", self.x);\n        } else {\n            println!("The largest member is y = {}", self.y);\n        }\n    }\n}\n')),(0,a.kt)("h1",{id:"\u751f\u547d\u5468\u671f-\u786e\u4fdd\u5f15\u7528\u6709\u6548"},"\u751f\u547d\u5468\u671f \u786e\u4fdd\u5f15\u7528\u6709\u6548"),(0,a.kt)("p",null,"Rust \u4e2d\u6bcf\u4e00\u4e2a\u5f15\u7528\u90fd\u6709\u5176 \u751f\u547d\u5468\u671f\uff08lifetime\uff09\uff0c\u4e5f\u5c31\u662f\u5f15\u7528\u4fdd\u6301\u6709\u6548\u7684\u4f5c\u7528\u57df\u3002",(0,a.kt)("br",null),"\u5927\u90e8\u5206\u65f6\u5019\uff0c\u751f\u547d\u5468\u671f\u662f\u9690\u542b\u5e76\u4e14\u53ef\u4ee5\u63a8\u65ad\u7684\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u751f\u547d\u5468\u671f\u7684\u4e3b\u8981\u76ee\u6807\u5c31\u662f\u907f\u514d",(0,a.kt)("strong",{parentName:"li"},"\u60ac\u5782\u5f15\u7528"),"\uff0c\u540e\u8005\u4f1a\u5bfc\u81f4\u7a0b\u5e8f\u5f15\u7528\u4e86\u975e\u9884\u671f\u5f15\u7528\u7684\u6570\u636e\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    {\n        let r;\n\n        {\n            let x = 5;\n            r = &x;\n        }\n\n        println!("r: {}", r);\n    }\n}\n\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u501f\u7528\u68c0\u67e5\u5668\uff08borrow checker\uff09")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"fn main() {\n    {\n        let r;                // ---------+-- 'a\n                              //          |\n        {                     //          |\n            let x = 5;        // -+-- 'b  |\n            r = &x;           //  |       |\n        }                     // -+       |\n                              //          |\n        println!(\"r: {}\", r); //          |\n    }                         // ---------+\n}\n\xcf\n")),(0,a.kt)("h2",{id:"\u6cdb\u578b\u751f\u547d\u5468\u671f"},"\u6cdb\u578b\u751f\u547d\u5468\u671f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"// \u4e0d\u77e5\u9053\u8fd4\u56de\u7684\u5f15\u7528\u662fx\u7684\u5f15\u7528\u8fd8\u662fy\u7684\u5f15\u7528\uff0c\u6240\u4ee5\u8fd9\u91cc\u4f1a\u62a5\u9519\uff0c\u544a\u8bc9\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u6cdb\u578b\u751f\u547d\u5468\u671f\u53c2\u6570\nfn longest(x: &str, y: &str) -> &str {\n    if x.len() > y.len() {\n        x\n    } else {\n        y\n    }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u751f\u547d\u5468\u671f\u6ce8\u89e3\u8bed\u6cd5\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"&i32        // \u5f15\u7528\n&'a i32     // \u5e26\u6709\u663e\u5f0f\u751f\u547d\u5468\u671f\u7684\u5f15\u7528\n&'a mut i32 // \u5e26\u6709\u663e\u5f0f\u751f\u547d\u5468\u671f\u7684\u53ef\u53d8\u5f15\u7528\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u51fd\u6570\u7b7e\u540d\u4e2d\u7684\u751f\u547d\u5468\u671f\u6ce8\u89e3\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {\n    if x.len() > y.len() {\n        x\n    } else {\n        y\n    }\n}\n")),(0,a.kt)("p",null," \u8fd9\u91cc\u751f\u547d\u5468\u671f\u6ce8\u89e3\u7684\u542b\u4e49\u662f\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u51fd\u6570\u4f1a\u83b7\u53d6\u4e24\u4e2a\u53c2\u6570\uff0c\u4ed6\u4eec\u90fd\u662f\u4e0e\u751f\u547d\u5468\u671f",(0,a.kt)("inlineCode",{parentName:"li"},"'a"),"\u5b58\u5728\u4e00\u6837\u957f\u7684\u5b57\u7b26\u4e32slice"),(0,a.kt)("li",{parentName:"ol"},"\u51fd\u6570\u8fd4\u56de\u7684\u5f15\u7528\u7684\u751f\u547d\u5468\u671f\u4e0e\u4f20\u5165\u8be5\u51fd\u6570\u7684\u5f15\u7528\u7684\u751f\u547d\u5468\u671f\u7684\u8f83\u5c0f\u8005\u4e00\u81f4")),(0,a.kt)("p",null,"\u901a\u8fc7\u51fd\u6570\u7b7e\u540d\u4e2d\u7684\u751f\u547d\u5468\u671f\u53c2\u6570\uff0c\u6211\u4eec\u6ca1\u6709\u6539\u53d8\u4efb\u4f55\u751f\u547d\u5468\u671f\uff0c\u53ea\u662f\u4e4b\u5904\u4efb\u4f55\u4e0d\u6ee1\u8db3\u8fd9\u4e2a\u7ea6\u675f\u6761\u4ef6\u7684\u503c\u90fd\u4f1a\u88ab\u501f\u7528\u68c0\u67e5\u5668\u62d2\u7edd\u3002"))}s.isMDXComponent=!0}}]);