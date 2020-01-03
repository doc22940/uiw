/*! For license information please see 44.0c2e0515.chunk.js.LICENSE */
(this.webpackJsonpuiw=this.webpackJsonpuiw||[]).push([[44],{110:function(e,t,n){},112:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(16),o=n(15),c=n(23),a=n(11),i=n(20),u=n(12),s=n(13),l=n(14),p=n(2),f=n.n(p),d=n(10),y=n.n(d),b=n(103),m=(n(110),function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).addonRef=f.a.createRef(),n.inputRef=f.a.createRef(),n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.computedInputPadding()}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){e!==this.props&&this.computedInputPadding()}},{key:"computedInputPadding",value:function(){if(this.addonRef.current&&this.inputRef.current){var e=window.getComputedStyle(this.addonRef.current,null);this.inputRef.current.style.paddingRight="".concat(this.addonRef.current.clientWidth+2*parseInt(e.right,10),"px")}}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,a=t.className,i=t.style,u=t.size,s=t.type,l=t.preIcon,p=t.addonAfter,d=Object(c.a)(t,["prefixCls","className","style","size","type","preIcon","addonAfter"]),m=y()(n,a,(e={},Object(o.a)(e,"".concat(n,"-").concat(u),u),Object(o.a)(e,"".concat(n,"-addon"),p),Object(o.a)(e,"disabled",this.props.disabled),e));return f.a.createElement("div",{className:m,style:i},f.a.createElement(b.a,{type:l}),f.a.createElement("input",Object(r.a)({ref:this.inputRef,type:s},d,{className:y()("".concat(n,"-inner"))})),p&&f.a.createElement("span",{className:"".concat(n,"-addon-after"),ref:this.addonRef},p))}}]),t}(f.a.Component));m.defaultProps={prefixCls:"w-input",preIcon:null,type:"text",size:"default"}},1138:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var r=n(103),o=n(754),c=n(134),a=n(112);function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,n,r,o,c,a){try{var i=e[c](a),u=i.value}catch(s){return void n(s)}i.done?t(u):Promise.resolve(u).then(r,o)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(){var e,n;s(this,t);for(var i=arguments.length,u=new Array(i),l=0;l<i;l++)u[l]=arguments[l];return(n=p(this,(e=f(t)).call.apply(e,[this].concat(u)))).path="src/colors/README.md",n.dependencies={Icon:r.a,CopyToClipboard:o.a,Notify:c.a,Input:a.a},n}var i,y,b;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),i=t,(y=[{key:"renderPage",value:function(){var e,t=(e=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(403).then(n.bind(null,1088));case 2:return t=e.sent,e.abrupt("return",t.default||t);case 4:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var c=e.apply(t,n);function a(e){u(c,r,o,a,i,"next",e)}function i(e){u(c,r,o,a,i,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}()}])&&l(i.prototype,y),b&&l(i,b),t}(n(104).a)},117:function(e,t,n){},134:function(e,t,n){"use strict";var r=n(15),o=n(2),c=n.n(o),a=n(17),i=n.n(a),u=n(10),s=n.n(u),l=n(16),p=n(23),f=n(11),d=n(20),y=n(12),b=n(13),m=n(14),h=n(128),O={},v={},j=function(e){function t(){var e,n;Object(f.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(n=Object(y.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).state={notifys:{}},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"create",value:function(e){var t=this,n=e.placement,r=e.key;O[n]||(O[n]={}),e.isOpen=!1,O[n][r]=e,e.duration&&(v[r]=setTimeout((function(){t.closed(r,n)}),e.duration)),this.setState({notifys:O,placement:n},(function(){O[n][r].isOpen=!0,t.setState({notifys:O})}))}},{key:"closed",value:function(e,t){if(e&&t&&O[t][e]){O[t][e].isOpen=!1;var n=O[t][e];this.setState({notifys:O},(function(){clearTimeout(v[e]),delete v[e],delete O[t][e],n&&n.willUnmount&&n.willUnmount(n,O)}))}}},{key:"render",value:function(){var e=this,t=this.props.prefixCls,n=this.state.placement;return c.a.createElement(c.a.Fragment,null,n&&Object.keys(this.state.notifys[n]).map((function(r){var o=e.state.notifys[n][r],a=o.description,i=o.isOpen,u=Object(p.a)(o,["description","isOpen"]);return"open"===u.type&&delete u.type,c.a.createElement(h.a,Object(l.a)({className:s()(t),key:r,useButton:!1,width:320},u,{usePortal:!1,hasBackdrop:!1,isOpen:i,content:a}))})))}}]),t}(c.a.Component);j.defaultProps={prefixCls:"w-notify",placement:"topRight"};n(117);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(){return parseInt(String(1e15*Math.random()),10).toString(36)}var P={},C={};function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"open";if(e.placement||(e.placement="topRight"),e.type=t,!e.icon&&null!==e.icon)switch(e.type){case"success":e.icon="circle-check";break;case"warning":e.icon="warning";break;case"info":e.icon="information";break;case"error":e.icon="circle-close"}switch(e.type){case"info":e.type="primary";break;case"error":e.type="danger"}if(e.placement&&!P[e.placement]){var n=document.createElement("div");document.body.appendChild(n),n.className=s()("w-notify-warpper",e.placement),C[e.placement]=n,P[e.placement]=i.a.render(c.a.createElement(j,null),n)}null!==e.duration&&(e.duration=1e3*(e.duration||4.5)),P[e.placement]&&P[e.placement].create(w({},e,{duration:e.duration,key:k(),willUnmount:function(t,n){t&&(t.onClose&&t.onClose(),0===Object.keys(n[e.placement]).length&&P[e.placement]&&(delete P[e.placement],C[e.placement]&&document.body.removeChild(C[e.placement])))}}))}["open","success","warning","info","error"].forEach((function(e){x[e]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return x(t,e)}}));t.a=x},257:function(e,t,n){e.exports=function(){"use strict";return function(e,t){const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly",""),n.style={position:"absolute",left:"-9999px"},document.body.appendChild(n);const r=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);n.select();try{const e=!!document.execCommand("copy");t&&t(e)}catch(o){t&&t(!1)}document.body.removeChild(n),r&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(r))}}()},258:function(e,t,n){},754:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(15),o=n(23),c=n(11),a=n(20),i=n(12),u=n(13),s=n(14),l=n(2),p=n.n(l),f=n(257),d=n.n(f);n(258);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var b=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(a.a)(t,[{key:"onClick",value:function(e){var t=this.props,n=t.onClick,r=t.text;if(!r)return n("",!1,e);d()(r,(function(t){n(r,t,e)}))}},{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.text,c=e.children,a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Object(o.a)(e,["prefixCls","text","children"]),{},{onClick:this.onClick.bind(this),className:t});return p.a.createElement("a",a,p.a.createElement("span",{className:"".concat(t,"-select")},n),c)}}]),t}(p.a.Component);b.defaultProps={text:"",prefixCls:"w-copy-to-clipboard",onClick:function(){return null}}}}]);