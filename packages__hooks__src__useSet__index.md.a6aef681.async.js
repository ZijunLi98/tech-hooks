(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[41],{MZF8:function(e,t,n){"use strict";var a=n("ogwx");n.d(t,"a",(function(){return a["b"]}));n("VCU9")},TXco:function(e,t,n){"use strict";n.r(t);var a=n("ahKI"),l=n.n(a),r=n("Y5pD"),c=n("vlId"),o=n("AVpQ"),u=n("hPU5"),i=l.a.memo((e=>{var t=e.demos,n=t["useset-demo1"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"useset"},l.a.createElement(r["AnchorLink"],{to:"#useset","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"useSet"),l.a.createElement("p",null,"\u7ba1\u7406 Set \u7c7b\u578b\u72b6\u6001\u7684 Hook\u3002"),l.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},l.a.createElement(r["AnchorLink"],{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a")),l.a.createElement(c["default"],t["useset-demo1"].previewerProps,l.a.createElement(n,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"api"},l.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement(o["a"],{code:"const [\n  set,\n  {\n    add,\n    remove,\n    reset\n  }\n] = useSet<K>(initialValue);",lang:"typescript"}),l.a.createElement("h3",{id:"result"},l.a.createElement(r["AnchorLink"],{to:"#result","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Result"),l.a.createElement(u["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"set"),l.a.createElement("td",null,"Set \u5bf9\u8c61"),l.a.createElement("td",null,l.a.createElement("code",null,"Set<K>"))),l.a.createElement("tr",null,l.a.createElement("td",null,"add"),l.a.createElement("td",null,"\u6dfb\u52a0\u5143\u7d20"),l.a.createElement("td",null,l.a.createElement("code",null,"(key: K) => void"))),l.a.createElement("tr",null,l.a.createElement("td",null,"remove"),l.a.createElement("td",null,"\u79fb\u9664\u5143\u7d20"),l.a.createElement("td",null,l.a.createElement("code",null,"(key: K) => void"))),l.a.createElement("tr",null,l.a.createElement("td",null,"reset"),l.a.createElement("td",null,"\u91cd\u7f6e\u4e3a\u9ed8\u8ba4\u503c"),l.a.createElement("td",null,l.a.createElement("code",null,"() => void"))))),l.a.createElement("h3",{id:"params"},l.a.createElement(r["AnchorLink"],{to:"#params","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Params"),l.a.createElement(u["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"initialValue"),l.a.createElement("td",null,"\u53ef\u9009\u9879\uff0c\u4f20\u5165\u9ed8\u8ba4\u7684 Set \u53c2\u6570"),l.a.createElement("td",null,l.a.createElement("code",null,"Iterable<K>")),l.a.createElement("td",null,"-")))))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),n=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(i,{demos:n})}},hPU5:function(e,t,n){"use strict";var a=n("ahKI"),l=n.n(a),r=n("bIC1"),c=n.n(r);n("nxnQ");function o(e,t){return s(e)||d(e,t)||i(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function d(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,l,r=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(a=n.next()).done);c=!0)if(r.push(a.value),t&&r.length===t)break}catch(u){o=!0,l=u}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw l}}return r}}function s(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,n=Object(a["useRef"])(),r=Object(a["useState"])(!1),u=o(r,2),i=u[0],m=u[1],d=Object(a["useState"])(!1),s=o(d,2),E=s[0],h=s[1];return Object(a["useEffect"])((function(){var e=n.current,t=c()((function(){m(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":i||void 0,"data-right-folded":E||void 0},l.a.createElement("table",null,t)))};t["a"]=E},nxnQ:function(e,t,n){}}]);