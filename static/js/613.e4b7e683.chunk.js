"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[613],{454:function(n,e,t){t.d(e,{Z:function(){return u}});t(791);var r,a=t(168),i=t(444).ZP.div(r||(r=(0,a.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(185, 228, 201, 0.2);\n"]))),o=t(985),c=t.n(o),s=t(184),u=function(){return(0,s.jsx)(i,{children:(0,s.jsx)(c(),{color:"#36d7b7",size:150,css:{position:"absolute",top:"25%",left:"45%"}})})}},761:function(n,e,t){t.d(e,{s:function(){return x}});t(791);var r,a,i,o=t(689),c=t(87),s=t(168),u=t(444),l=u.ZP.li(r||(r=(0,s.Z)(["\n  padding: 8px;\n  max-width: 100%;\n  width: 260px;\n  height: 100%;\n\n  img {\n    display: block;\n    min-height: 100%;\n    height: 420px;\n    width: 100%;\n\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n    transition: transform 250ms linear;\n    transform: scale(1);\n\n    object-fit: cover;\n    object-position: center;\n\n    &:hover {\n      transform: scale(1.1);\n    }\n  }\n"]))),p=u.ZP.h2(a||(a=(0,s.Z)(["\n  padding: 8px;\n  max-width: 100%;\n\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  text-align: center;\n  font-size: 14px;\n  font-weight: 700;\n"]))),f=t(184),h=function(n){var e=n.movie,t=(e.poster_path,e.id),r=e.title,a=(0,o.TH)();return(0,f.jsx)(l,{children:(0,f.jsx)(c.rU,{to:"/movies/".concat(t),state:{from:a},children:(0,f.jsx)(p,{children:r})})})},d=u.ZP.ul(i||(i=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  max-width: calc(100vw - 48px);\n  list-style-type: none;\n  padding: 12px;\n"]))),x=function(n){var e=n.movies,t=(0,o.TH)();return(0,f.jsx)(d,{children:e.map((function(n){return(0,f.jsx)(h,{movie:n,state:{from:t}},n.id)}))})}},884:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,a=t(861),i=t(439),o=t(757),c=t.n(o),s=t(168),u=t(87),l=t(444),p=t(184),f=(0,l.ZP)(u.rU)(r||(r=(0,s.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: orangered;\n  }\n"]))),h=function(n){var e=n.to,t=n.children;return(0,p.jsx)(f,{to:e,children:t})},d=t(454),x=t(761),m=t(705),v=function(n){var e=n.onSubmit;return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(m.J9,{initialValues:{query:" "},onSubmit:function(n,t){var r=t.resetForm;e(n.query.trim()),r()},children:(0,p.jsxs)(m.l0,{children:[(0,p.jsx)(m.gN,{as:"input",autoComplete:"off",placeholder:"Search movie...",name:"query",autoFocus:!0}),(0,p.jsx)("button",{type:"submit",children:"Search"})]})})})},g=t(791),b=t(689),w=t(43),y=function(){var n,e,t=(0,g.useState)(!1),r=(0,i.Z)(t,2),o=r[0],s=r[1],l=(0,g.useState)(null),f=(0,i.Z)(l,2),m=f[0],y=f[1],j=(0,g.useState)([]),Z=(0,i.Z)(j,2),k=Z[0],S=Z[1],_=(0,u.lr)(),P=(0,i.Z)(_,2),q=P[0],F=P[1],T=q.get("query")||"";console.log(T);var z=(0,b.TH)(),C=(0,g.useRef)(null!==(n=null===(e=z.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");(0,g.useEffect)((function(){(0,a.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,""!==T){n.next=3;break}return n.abrupt("return");case 3:return s(!0),y(null),n.next=7,(0,w.Ph)(T);case 7:if(0!==(e=n.sent).total_results){n.next=11;break}return alert("Sorry, there are no images matching your search query '".concat(T,"'. Please try again.")),n.abrupt("return");case 11:S(e.results),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(0),y(n.t0.message);case 17:return n.prev=17,s(!1),n.finish(17);case 20:case"end":return n.stop()}}),n,null,[[0,14,17,20]])})))()}),[T,z.search]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(h,{to:C.current,children:"Go back"}),(0,p.jsx)(v,{onSubmit:function(n){""!==n?(F({query:n}),S([])):F({})}}),o&&(0,p.jsx)(d.Z,{}),m&&!o&&(0,p.jsx)("h2",{style:{textAlign:"center"},children:"Try again. Something went wrong!"}),!m&&!o&&k.length>0&&(0,p.jsx)(x.s,{movies:k,state:{from:z}})]})}},43:function(n,e,t){t.d(e,{Df:function(){return s},Ph:function(){return l}});var r=t(861),a=t(757),i=t.n(a),o=t(243),c="a7b06e7a05ba5e2eb883b74f2a4c575a";function s(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(c,"&include_adult=false"));case 3:return e=n.sent,t=e.data,n.abrupt("return",t);case 8:n.prev=8,n.t0=n.catch(0),console.log("Error: ",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function l(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("https://api.themoviedb.org/3/search/movie?api_key".concat(c,"&query=").concat(e,"&page=1&include_adult=false"));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.log("Error: ",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=613.e4b7e683.chunk.js.map