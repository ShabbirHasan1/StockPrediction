(this["webpackJsonpstockpre-web"]=this["webpackJsonpstockpre-web"]||[]).push([[0],{17:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),s=n(10),r=n.n(s),i=(n(17),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),s(e),r(e)}))}),a=(n(18),n(1)),u=n(12),l=n(4),j=n(2);function d(e,t,n,c){var o;c&&(o=JSON.stringify(c));var s=new XMLHttpRequest,r="http://127.0.0.1:8000/api".concat(t);s.responseType="json";var i=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),c=0;c<n.length;c++){var o=n[c].trim();if(o.substring(0,e.length+1)===e+"="){t=decodeURIComponent(o.substring(e.length+1));break}}return t}("csrftoken");s.open(e,r),s.setRequestHeader("Content-Type","application/json"),i&&(s.setRequestHeader("X-Requested-With","XMLHttpRequest"),s.setRequestHeader("X-CSRFToken",i)),s.onload=function(){403===s.status&&("Authentication credentials were not provided."===s.response.detail&&-1===window.location.href.indexOf("login")&&(window.location.href="/login?showLoginRequired=true"));n(s.response,s.status)},s.onerror=function(e){n({message:"Request was an error"},400)},s.send(o)}function f(e){var t=e.stock;return Object(a.jsx)("div",{children:t.ticker})}function b(e){var t=Object(c.useState)([]),n=Object(j.a)(t,2),o=n[0],s=n[1],r=Object(c.useState)([]),i=Object(j.a)(r,2),u=i[0],f=i[1],b=Object(c.useState)(!1),O=Object(j.a)(b,2),h=O[0],v=O[1];return Object(c.useEffect)((function(){var t=Object(l.a)(e.newStocks).concat(o);t.length!==u.length&&f(t)}),[e.newStocks,u,o]),Object(c.useEffect)((function(){if(!1===h){d("POST","/stocks/",(function(e,t){200===t&&(s(Object(l.a)(e)),v(!0))}))}}),[o,h,v]),Object(a.jsxs)("div",{children:["List will turn into list of widgets",null!==u&&u.map((function(e,t){return Object(a.jsx)(k,{stock:e},t)}))]})}function O(e){var t=e.ticker,n=e.isTracking,c=e.handleActionBackend,o=!0===n?"Remove":"Add";return Object(a.jsxs)("button",{onClick:function(e){e.preventDefault(),function(e,t){d("POST","/stocks/".concat(e,"/action"),t)}(t,c)},children:[" ",o," "]})}function k(e){var t=e.stock;return Object(a.jsx)("div",{onClick:function(e){e.preventDefault(),window.location.href="/stocks/".concat(t.ticker)},children:t.ticker})}function h(e){var t=e.ticker,n=Object(c.useState)(!1),o=Object(j.a)(n,2),s=o[0],r=o[1],i=Object(c.useState)(null),u=Object(j.a)(i,2),l=u[0],b=u[1],k=function(e,t){200===t?(console.log(e),b(e)):alert("Error finding stock")};return Object(c.useEffect)((function(){!1===s&&(!function(e,t){d("GET","/stocks/".concat(e),t)}(t,k),r(!0))}),[t,s,r]),null===l?null:Object(a.jsxs)("div",{children:[Object(a.jsx)(f,{stock:l,className:e.className}),Object(a.jsx)(O,{ticker:l.ticker,isTracking:l.is_tracking,handleActionBackend:function(e,t){200===t?b(e):alert("cant add/remove")}})]})}var v=n(22),p=n(23),g=n(24);function x(e){var t=e.stock;return Object(a.jsxs)("span",{onClick:function(e){e.preventDefault(),window.location.href="/stocks/".concat(t.ticker)},children:[t.ticker," "]})}function w(e){return Object(a.jsx)("span",{onClick:function(e){e.preventDefault(),window.location.href="/stocks/"},children:"HomeLink"})}function m(e){return Object(a.jsx)("span",{children:"ProfileLink"})}function S(e){var t=Object(c.useState)(""),n=Object(j.a)(t,2),o=n[0],s=n[1],r=Object(c.useState)([]),i=Object(j.a)(r,2),u=i[0],f=i[1];return Object(c.useEffect)((function(){!function(e,t){d("POST","/stocks/search",t,{searchTerm:e})}(o,(function(e,t){200===t?f(Object(l.a)(e)):alert("Error finding stock")}))}),[o]),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"text",placeholder:"Search",value:o,onChange:function(e){s(e.target.value)}}),""!==o&&Object(a.jsx)("ul",{children:u.map((function(e,t){return Object(a.jsx)("li",{children:Object(a.jsx)(x,{stock:e},e.id)})}))})]})}var T=o.a.createElement,C=document.getElementById("stocks-list");C&&r.a.render(T((function(e){var t=Object(c.useState)([]),n=Object(j.a)(t,2),o=n[0];return n[1],Object(a.jsx)("div",{className:e.className,children:Object(a.jsx)(b,Object(u.a)({newStocks:o},e))})}),C.dataset),C);var E=document.getElementById("navbar");E&&r.a.render(T((function(e){return Object(a.jsx)(v.a,{children:Object(a.jsxs)(p.a,{children:[Object(a.jsxs)(g.a,{children:[" ",Object(a.jsx)(S,{})," "]}),Object(a.jsxs)(g.a,{children:[" ",Object(a.jsx)(w,{})," "]}),Object(a.jsxs)(g.a,{children:[" ",Object(a.jsx)(m,{}),"  "]})]})})}),E.dataset),E),document.querySelectorAll(".stock-detail").forEach((function(e){r.a.render(T(h,e.dataset),e)})),i()}},[[20,1,2]]]);
//# sourceMappingURL=main.18e189a8.chunk.js.map