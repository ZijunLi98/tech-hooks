(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"1DhI":function(e,t,n){"use strict";var a=n("ahKI"),r=n("sJN1"),c=n("cxPF"),u=n("FBt5");function l(e){u["a"]&&(Object(c["a"])(e)||console.error("useUnmount expected parameter is a function, got ".concat(typeof e)));var t=Object(r["a"])(e);Object(a["useEffect"])((()=>()=>{t.current()}),[])}t["a"]=l},"82LI":function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("ahKI"),c=n.n(r),u=n("L2hj");t["default"]=()=>{var e=Object(u["a"])(),t=Object(a["a"])(e,2),n=t[0],r=t[1],l=r.toggle,o=r.setLeft,i=r.setRight;return c.a.createElement("div",null,c.a.createElement("p",null,"Effects\uff1a","".concat(n)),c.a.createElement("p",null,c.a.createElement("button",{type:"button",onClick:l},"Toggle"),c.a.createElement("button",{type:"button",onClick:o,style:{margin:"0 8px"}},"Toggle False"),c.a.createElement("button",{type:"button",onClick:i},"Toggle True")))}},"CyT/":function(e,t,n){"use strict";var a=n("iojd"),r=n("ahKI"),c=n("L2hj");function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(c["a"])(e),n=Object(a["a"])(t,2),u=n[0],l=n[1],o=l.toggle,i=l.set,s=Object(r["useCallback"])((()=>i(!0)),[]),b=Object(r["useCallback"])((()=>i(!1)),[]);return[u,{toggle:o,set:i,setTrue:s,setFalse:b}]}t["a"]=u},"Dr+N":function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("ahKI"),c=n.n(r),u=n("L2hj");t["default"]=()=>{var e=Object(u["a"])("Hello","World"),t=Object(a["a"])(e,2),n=t[0],r=t[1],l=r.toggle,o=r.set,i=r.setLeft,s=r.setRight;return c.a.createElement("div",null,c.a.createElement("p",null,"Effects\uff1a",n),c.a.createElement("p",null,c.a.createElement("button",{type:"button",onClick:l},"Toggle"),c.a.createElement("button",{type:"button",onClick:()=>o("Hello"),style:{margin:"0 8px"}},"Set Hello"),c.a.createElement("button",{type:"button",onClick:()=>o("World")},"Set World"),c.a.createElement("button",{type:"button",onClick:i,style:{margin:"0 8px"}},"Set Left"),c.a.createElement("button",{type:"button",onClick:s},"Set Right")))}},FBt5:function(e,t,n){"use strict";var a=!1;t["a"]=a},L2hj:function(e,t,n){"use strict";var a=n("iojd"),r=n("ahKI");function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=Object(r["useState"])(e),c=Object(a["a"])(n,2),u=c[0],l=c[1],o=Object(r["useMemo"])((()=>{var n=void 0===t?!e:t;return{setLeft(){l(e)},setRight(){l(n)},toggle(){l((t=>t===e?n:e))},set(e){l(e)}}}),[]);return[u,o]}t["a"]=c},OCTU:function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("ahKI"),c=n.n(r),u=n("sJN1");t["default"]=()=>{var e=Object(r["useState"])(0),t=Object(a["a"])(e,2),n=t[0],l=t[1],o=Object(u["a"])(n);return Object(r["useEffect"])((()=>{var e=setInterval((()=>{l(o.current+1)}),1e3);return()=>clearInterval(e)}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"count: ",n))}},cxPF:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=e=>"function"===typeof e},eWij:function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("ahKI"),c=n.n(r),u=n("hsQr");function l(e,t){var n=Object(r["useState"])(e),c=Object(a["a"])(n,2),l=c[0],o=c[1],i=Object(u["a"])((()=>o(e)),t),s=i.run;return Object(r["useEffect"])((()=>{s()}),[e]),l}var o=l;t["default"]=()=>{var e=Object(r["useState"])(),t=Object(a["a"])(e,2),n=t[0],u=t[1],l=o(n,{wait:500});return c.a.createElement("div",null,c.a.createElement("input",{value:n,onChange:e=>u(e.target.value),placeholder:"Typed value",style:{width:280}}),c.a.createElement("p",{style:{marginTop:16}},"DebouncedValue: ",l))}},hsQr:function(e,t,n){"use strict";var a=n("FBt5"),r=n("cxPF"),c=n("sJN1"),u=n("YArd"),l=n("ahKI"),o=n("1DhI");function i(e,t){var n;a["a"]&&(Object(r["a"])(e)||console.error("useDebounceFn expected parameter is a function, got ".concat(typeof e)));var i=Object(c["a"])(e),s=null!==(n=null===t||void 0===t?void 0:t.wait)&&void 0!==n?n:1e3,b=Object(l["useMemo"])((()=>Object(u["a"])((function(){return i.current(...arguments)}),s,t)),[]);return Object(o["a"])((()=>{b.cancel()})),{run:b,cancel:b.cancel,flush:b.flush}}t["a"]=i},sJN1:function(e,t,n){"use strict";var a=n("ahKI");function r(e){var t=Object(a["useRef"])(e);return t.current=e,t}t["a"]=r},tHpm:function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("hsQr"),c=n("ahKI"),u=n.n(c);t["default"]=()=>{var e=Object(c["useState"])(0),t=Object(a["a"])(e,2),n=t[0],l=t[1],o=Object(r["a"])((()=>{l(n+1)}),{wait:500}),i=o.run;return u.a.createElement("div",null,u.a.createElement("p",{style:{marginTop:16}}," Clicked count: ",n," "),u.a.createElement("button",{type:"button",onClick:i},"Click fast!"))}},y7Gi:function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("1DhI"),c=n("CyT/"),u=n("BxQu"),l=n("ahKI"),o=n.n(l),i=()=>(Object(r["a"])((()=>{u["a"].info("unmount")})),o.a.createElement("p",null,"Hello World!"));t["default"]=()=>{var e=Object(c["a"])(!0),t=Object(a["a"])(e,2),n=t[0],r=t[1].toggle;return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{type:"button",onClick:r},n?"unmount":"mount"),n&&o.a.createElement(i,null))}},yoie:function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("ahKI"),c=n.n(r),u=n("CyT/");t["default"]=()=>{var e=Object(u["a"])(!0),t=Object(a["a"])(e,2),n=t[0],r=t[1],l=r.toggle,o=r.setTrue,i=r.setFalse;return c.a.createElement("div",null,c.a.createElement("p",null,"Effects\uff1a",JSON.stringify(n)),c.a.createElement("p",null,c.a.createElement("button",{type:"button",onClick:l},"Toggle"),c.a.createElement("button",{type:"button",onClick:i,style:{margin:"0 16px"}},"Set false"),c.a.createElement("button",{type:"button",onClick:o},"Set true")))}}}]);