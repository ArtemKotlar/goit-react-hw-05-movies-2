"use strict";(self.webpackChunkgoit_react_hw_05_movies_2=self.webpackChunkgoit_react_hw_05_movies_2||[]).push([[477],{52:function(e,n,t){t.d(n,{Hg:function(){return o},IQ:function(){return u},Jh:function(){return d},Op:function(){return s},s_:function(){return a}});var i=t(243),r="9f52e0996f349aa48758bcf925b4265a",c=i.Z.create({baseURL:"https://api.themoviedb.org/3/"}),o=function(){return c.get("trending/movie/day?api_key=".concat(r))},s=function(e){return c.get("search/movie?api_key=".concat(r,"&query=").concat(e))},a=function(e){return c.get("movie/".concat(e,"?api_key=").concat(r))},u=function(e){return c.get("movie/".concat(e,"/credits?api_key=").concat(r))},d=function(e){return c.get("movie/".concat(e,"/reviews?api_key=").concat(r))}},477:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var i,r,c=t(439),o=t(457),s=t(184),a=function(e){var n=e.movie,t=n.poster_path,i=n.title,r=n.release_date,c=n.vote_average,a=n.overview,u=n.genres,d="https://image.tmdb.org/t/p/w500/".concat(t),l=r.slice(0,4),f=c.toFixed(1),h=u.map((function(e){return e.name})).join(", ");return(0,s.jsxs)(o.x,{display:"flex",gridGap:6,children:[(0,s.jsx)("div",{children:(0,s.jsx)("img",{src:d,alt:i,width:"350"})}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("h2",{children:[i," ",(0,s.jsxs)("span",{children:["(",l,")"]})]}),(0,s.jsxs)("p",{children:["User score: ",f]}),(0,s.jsx)("h3",{children:"Overview"}),(0,s.jsx)("p",{children:a}),(0,s.jsx)("h3",{children:"Genres:"}),(0,s.jsx)("p",{children:h})]})]})},u=t(52),d=t(791),l=t(689),f=t(168),h=t(444),v=t(87),x=h.ZP.div(i||(i=(0,f.Z)(["\n  margin: 0 auto;\n  max-width: 1200px;\n"]))),p=(0,h.ZP)(v.OL)(r||(r=(0,f.Z)(["\n  display: block;\n  margin: 30px 0;\n  color: #083ff5;\n  text-decoration: none;\n  font-weight: 700;\n  font-size: 22px;\n"]))),m=function(){var e,n,t=(0,d.useState)(null),i=(0,c.Z)(t,2),r=i[0],o=i[1],f=(0,l.UO)().movieId,h=(0,l.TH)();if((0,d.useEffect)((function(){(0,u.s_)(f).then((function(e){return o(e.data)}))}),[f]),!r)return null;var v=null!==(e=null===(n=h.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(x,{children:[(0,s.jsx)(p,{to:v,children:"\u2190 Go back"}),(0,s.jsx)(a,{movie:r})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(p,{to:"cast",state:{from:v},children:"Cast"}),(0,s.jsx)(p,{to:"reviews",state:{from:v},children:"Reviews"})]}),(0,s.jsx)(l.j3,{})]})}}}]);
//# sourceMappingURL=477.571db64f.chunk.js.map