"use strict";(self.webpackChunkgoit_react_hw_05_movies_2=self.webpackChunkgoit_react_hw_05_movies_2||[]).push([[891],{52:function(n,t,e){e.d(t,{Hg:function(){return a},IQ:function(){return s},Jh:function(){return f},Op:function(){return c},s_:function(){return u}});var r=e(243),o="9f52e0996f349aa48758bcf925b4265a",i=r.Z.create({baseURL:"https://api.themoviedb.org/3/"}),a=function(){return i.get("trending/movie/day?api_key=".concat(o))},c=function(n){return i.get("search/movie?api_key=".concat(o,"&query=").concat(n))},u=function(n){return i.get("movie/".concat(n,"?api_key=").concat(o))},s=function(n){return i.get("movie/".concat(n,"/credits?api_key=").concat(o))},f=function(n){return i.get("movie/".concat(n,"/reviews?api_key=").concat(o))}},185:function(n,t,e){e.d(t,{H2:function(){return l},SR:function(){return d},rU:function(){return g},xv:function(){return p}});var r,o,i,a,c,u=e(168),s=e(444),f=e(87),p=s.ZP.h1(r||(r=(0,u.Z)(["\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 28px;\n  text-transform: uppercase;\n  text-shadow: 3px 5px 6px #f50808;\n  color: #ffffff;\n  text-align: center;\n  margin: 0;\n  padding: 20px;\n  background-image: url(https://blog.kniga.biz.ua/wp-content/uploads/2015/12/wallpaper-color-style-background-color-2015959044.jpg);\n"]))),l=s.ZP.li(o||(o=(0,u.Z)(["\n  list-style: none;\n  width: calc((100% - 20px) / 5);\n  border-radius: 5px;\n  border: 1px solid;\n  box-shadow: 0px 5px 10px #00ff62;\n  background-color: rgb(7 50 23);\n"]))),d=s.ZP.img(i||(i=(0,u.Z)(["\n  display: block;\n  width: 100%;\n"]))),g=(0,s.ZP)(f.OL)(a||(a=(0,u.Z)(["\n  display: block;\n  text-align: center;\n  font-weight: 700;\n  font-size: 22px;\n  color: #ffffff;\n  text-decoration: none;\n"])));s.ZP.p(c||(c=(0,u.Z)(["\n  margin: 0;\n  padding: 20px 10px;\n"])))},891:function(n,t,e){e.r(t),e.d(t,{default:function(){return p}});var r=e(439),o=e(52),i=e(457),a=e(689),c=e(185),u=e(184),s=function(n){var t=n.movies,e=(0,a.TH)();return t&&(0,u.jsxs)(i.x,{backgroundImage:"url(https://blog.kniga.biz.ua/wp-content/uploads/2015/12/wallpaper-color-style-background-color-2015959044.jpg)",children:[(0,u.jsx)(c.xv,{children:"Trending today"}),(0,u.jsx)(i.x,{display:"flex",flexWrap:"wrap",justifyContent:"center",gridGap:5,children:t.map((function(n){var t=n.id,r=n.title,o=n.original_name,i=n.poster_path;return(0,u.jsx)(c.H2,{children:(0,u.jsxs)(c.rU,{to:"/movies/".concat(t),state:{from:e},children:[(0,u.jsx)(c.SR,{src:i?"https://image.tmdb.org/t/p/w500/"+i:"https://svgsilh.com/svg_v2/1363011.svg",alt:"Foto"}),(0,u.jsx)("p",{children:null!==r&&void 0!==r?r:o})]})},t)}))})]})},f=e(791),p=function(){var n=(0,f.useState)([]),t=(0,r.Z)(n,2),e=t[0],i=t[1];return(0,f.useEffect)((function(){(0,o.Hg)().then((function(n){return i(n.data.results)}))}),[]),(0,u.jsx)(s,{movies:e})}}}]);
//# sourceMappingURL=891.131de837.chunk.js.map