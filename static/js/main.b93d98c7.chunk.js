(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{1331:function(t,e,n){"use strict";n.r(e);var r,c=n(0),s=n.n(c),i=n(30),o=n.n(i),a=n(25),j=n(26),u=n(28),l=n(27),b=n(17),d=n(40),h=n(121),p=n.n(h),O=n(122),f=n.n(O),x=n(54),g=n.n(x),m=n(123),v=n.n(m),y=n(2),P=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c)))._handleClick=function(){var e=t.props.history,n=e.goBack,r=e.length,c=e.push;r<4?c("/"):n()},t}return Object(j.a)(n,[{key:"render",value:function(){var t=-1!==this.props.location.pathname.indexOf("/posts/");return Object(y.jsx)(f.a,{title:"ACME CORP BLOG",iconElementLeft:t?Object(y.jsx)(g.a,{onClick:this._handleClick,children:Object(y.jsx)(v.a,{})}):null,showMenuIconButton:t,style:{textAlign:"center"}})}}]),n}(c.PureComponent),k=Object(b.f)(P),C=n(61),w=n.n(C),A=function(t){return t?t[0].toUpperCase()+t.slice(1):t},_=function(t){var e=t.split(" ");return 1===e.length?A(t):e.reduce((function(t,e){return t?e?"".concat(t," ").concat(A(e)):t:A(e)}),"")},T=function(t,e){if("string"!==typeof t)return"";t.length>e&&(t=t.substring(0,e));var n=t.lastIndexOf(" ");return-1!==n&&(t=t.substring(0,n)),t.replace(/[\s.]+$/g,"")},E=w.a.date,L=E.past,F=E.recent,D=w.a.lorem,H=D.paragraph,I=D.paragraphs,S=D.slug,z=D.words,B=w.a.random.uuid,M="FETCH_POSTS",J="RECEIVE_POSTS",N=Array(50).fill().map((function(){return F()})).sort((function(t,e){return t>e?1:t<e?-1:0})),R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Array(t).fill().map((function(){var t=H();return{id:e.id||B().split("-")[0],title:_(z()),summary:t,content:"".concat(t,"\n").concat(I()),date:N.pop()||L(),slug:e.slug||S()}}));return{type:J,posts:n}},G=n(124),U=n.n(G),V=n(59),Y=n.n(V),$=n(60),q=n.n($),K=n(45),Q=n.n(K),W=n(84),X=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var t=this.props,e=t.fetchPosts,n=t.isLoading,r=t.posts;return Object(y.jsxs)("div",{children:[r.map((function(t,e){var n=t.id,r=t.title,c=t.summary,s=t.date,i=t.slug;return Object(y.jsxs)(W.List,{children:[Object(y.jsx)(b.b,{to:"/posts/".concat(n,"/").concat(i),style:{textDecoration:"none"},children:Object(y.jsx)(W.ListItem,{children:Object(y.jsxs)("article",{style:{lineHeight:1.35},children:[Object(y.jsx)("h2",{children:Object(y.jsx)("strong",{children:r})}),Object(y.jsxs)("p",{children:[T(c,150),"\u2026"]}),Object(y.jsx)("div",{style:{textAlign:"right"},children:Object(y.jsx)("time",{dateTime:s,children:Y()(s).fromNow()})})]})})}),Object(y.jsx)(Q.a,{})]},e)})),!n&&Object(y.jsx)(U.a,{onEnter:e}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)("div",{style:{textAlign:"center"},children:Object(y.jsx)(q.a,{size:80,thickness:6})}),Object(y.jsx)("br",{})]})}}]),n}(c.PureComponent),Z=Object(d.b)((function(t){var e=t.posts;return{isLoading:e.isFetching,posts:e.items}}),(function(t){return{fetchPosts:function(){return t((function(t){setTimeout((function(){return t(R(10))}),1e3)}))}}}))(X),tt=n(125),et=n(85),nt=n(58),rt=n.n(nt),ct={minHeight:"calc(100vh - ".concat(114,"px)")},st={padding:16},it=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c)))._renderProgress=function(){return Object(y.jsxs)("div",{style:Object(et.a)(Object(et.a)({},st),{},{textAlign:"center"}),children:[Object(y.jsx)("br",{}),Object(y.jsx)(q.a,{size:80,thickness:6})]})},t._renderPost=function(){var e=t.props.post,n=e.title,r=e.date,c=e.content;return Object(y.jsx)(rt.a,{zDepth:0,style:st,children:Object(y.jsxs)("article",{children:[Object(y.jsx)("h1",{children:n}),Object(y.jsx)("time",{dateTime:r,children:Y()(r).fromNow()}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)(Q.a,{}),c&&c.split("\n").map((function(t,e){return Object(y.jsx)("p",{children:t},e)}))]})})},t}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var t=this.props,e=t.fetchPost,n=t.id,r=t.post,c=t.slug;r||e(n,c)}},{key:"render",value:function(){return Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{style:ct,children:this.props.post?this._renderPost():this._renderProgress()}),Object(y.jsx)(Q.a,{}),Object(y.jsx)(rt.a,{zDepth:0,style:st,children:Object(y.jsxs)("footer",{children:["Copyright ",(r||(r=(new Date).getFullYear()),r)," Acme Corp."]})})]})}}]),n}(c.PureComponent),ot=Object(d.b)((function(t,e){var n=e.match.params,r=n.id,c=n.slug;return{id:r,post:Object(tt.find)(t.posts.items,{id:r}),slug:c}}),(function(t){return{fetchPost:function(e,n){return t(function(t,e){return function(n){setTimeout((function(){return n(R(1,{id:t,slug:e}))}),1e3)}}(e,n))}}}))(it),at=n(31),jt=n(126),ut=n.n(jt),lt=n(127),bt={isFetching:!1,items:[]},dt=Object(at.c)({posts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case M:return Object.assign({},t,{isFetching:!0});case J:return Object.assign({},t,{isFetching:!1,items:t.items.concat(e.posts)});default:return t}}}),ht=Object(at.d)(dt,Object(at.a)(ut.a,Object(lt.createLogger)())),pt=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"_redirectToHome",value:function(){return Object(y.jsx)(b.c,{to:"/"})}},{key:"render",value:function(){return Object(y.jsx)(d.a,{store:ht,children:Object(y.jsx)(p.a,{children:Object(y.jsx)(b.a,{children:Object(y.jsxs)("div",{children:[Object(y.jsx)(k,{}),Object(y.jsxs)(b.e,{children:[Object(y.jsx)(b.d,{exact:!0,path:"/",component:Z}),Object(y.jsx)(b.d,{path:"/posts/:id/:slug",component:ot}),Object(y.jsx)(b.d,{render:this._redirectToHome})]})]})})})})}}]),n}(c.PureComponent);o.a.render(Object(y.jsx)(s.a.StrictMode,{children:Object(y.jsx)(pt,{})}),document.getElementById("root"))}},[[1331,1,2]]]);
//# sourceMappingURL=main.b93d98c7.chunk.js.map