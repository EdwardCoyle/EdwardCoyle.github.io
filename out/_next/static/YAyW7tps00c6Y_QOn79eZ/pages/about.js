(window.webpackJsonp=window.webpackJsonp||[]).push([["e6cc"],{"9Jkg":function(e,t,n){e.exports=n("oh+g")},Juyh:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=(n("+EN/"),n("m/Pd")),l=n.n(o),i=n("YFqc"),s=n.n(i);t.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.a,null,a.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Quicksand:400,700&display=swap",rel:"stylesheet"}),a.a.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=UA-18393322-3"}),a.a.createElement("script",{src:"/static/js/ga.js"}),a.a.createElement("title",null,"EdwardCoyle.dev | Coming Soon")),a.a.createElement("section",{id:"main",className:"main"},a.a.createElement("nav",{className:"temp-links"},a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(s.a,{href:"/"},a.a.createElement("a",null,"Home"))),a.a.createElement("li",null,a.a.createElement("a",null,"About"))))))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("KI45"),a=r(n("9Jkg")),o=r(n("/HRN")),l=r(n("WaGi")),i=r(n("ZDA2")),s=r(n("/+P4")),u=r(n("N9n2")),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},f=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var p=n("CxY0"),h=c(n("q1tI")),d=(f(n("17x9")),c(n("nOHt"))),m=n("Bu4q");function v(e){return e&&"object"==typeof e?m.formatWithValidation(e):e}var y=function(e){function t(){var e,n,r,a,l;return(0,o.default)(this,t),(e=(0,i.default)(this,(0,s.default)(t).apply(this,arguments))).formatUrls=(n=function(e,t){return{href:v(e),as:v(t)}},r=null,a=null,l=null,function(e,t){if(e===r&&t===a)return l;var o=n(e,t);return r=e,a=t,l=o,o}),e.linkClicked=function(t){var n=t.currentTarget,r=n.nodeName,a=n.target;if("A"!==r||!(a&&"_self"!==a||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var o=e.formatUrls(e.props.href,e.props.as),l=o.href,i=o.as;if(function(e){var t=p.parse(e,!1,!0),n=p.parse(m.getLocationOrigin(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(l)){var s=window.location.pathname;l=p.resolve(s,l),i=i?p.resolve(s,i):l,t.preventDefault();var u=e.props.scroll;null==u&&(u=i.indexOf("#")<0),d.default[e.props.replace?"replace":"push"](l,i,{shallow:e.props.shallow}).then(function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,u.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,a.default)(this.props.href)!==(0,a.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=p.resolve(e,t);d.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,a=n.as;"string"==typeof t&&(t=h.default.createElement("a",null,t));var o=h.Children.only(t),l={onClick:function(t){o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(l.href=a||r),l.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(l.href=d.Router._rewriteUrlForNextExport(l.href)),h.default.cloneElement(o,l)}}]),t}(h.Component);t.default=y},"oh+g":function(e,t,n){var r=n("WEpk"),a=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}},rB5V:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){var e=n("Juyh");return{page:e.default||e}}])}},[["rB5V","5d41","9da1"]]]);