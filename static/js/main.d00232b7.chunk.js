(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n(38)},21:function(e,t,n){},24:function(e,t,n){},32:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(6),s=n.n(i),o=(n(21),n(2)),c=n.n(o),l=n(3),m=n(7),u=n(8),v=n(13),p=n(9),f=n(14),d=(n(24),n(10)),g=n.n(d),h=n(11),_=n.n(h);n(32);function E(e){var t=e.poster,n=e.alt;return r.a.createElement("img",{src:t,title:n,className:"Movie__Poster",alt:n})}function w(e){var t=e.genre;return r.a.createElement("span",{className:"Movie__Genre"},t," ")}var y=function(e){var t=e.title,n=e.poster,a=e.genres,i=e.summary,s=e.rating;return r.a.createElement("div",{className:"Movie"},r.a.createElement("div",{className:"Movie__Columns"},r.a.createElement(E,{poster:n,alt:t})),r.a.createElement("div",{className:"Movie__Columns"},r.a.createElement("h1",null,t),r.a.createElement("div",{className:"Movie__Rating"},r.a.createElement(g.a,{rating:s/2,starRatedColor:"#FFBA02",numberOfStars:5,starDimension:"20px",starSpacing:"2px"})),r.a.createElement("div",{className:"Movie__Genres"},a.map(function(e,t){return r.a.createElement(w,{genre:e,key:t})})),r.a.createElement("div",{className:"Movie__Summary"},r.a.createElement(_.a,{text:i,min:80,ideal:100}))))},M=n(12),b=n.n(M),k=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(n=Object(v.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={num:1,movies:[],maximumPage:100},n._renderMovies=function(){return n.state.movies.map(function(e){return r.a.createElement(y,{title:e.title_english,poster:e.medium_cover_image,key:e.id,genres:e.genres,rating:e.rating,summary:e.summary})})},n._firstPage=Object(l.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._callApi(1);case 2:t=e.sent,n.setState({movies:t});case 4:case"end":return e.stop()}},e)})),n._getMovies=function(){var e=Object(l.a)(c.a.mark(function e(t){var a,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.state.movies.slice(),e.next=3,n._callApi(t);case 3:r=e.sent,a=a.concat(r),n.setState({movies:a});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n._callApi=function(e){return fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating&limit=50&page="+e).then(function(e){return e.json()}).then(function(e){return e.data.movies}).catch(function(e){return console.log(e)})},n._loaditems=function(){n.state.num++,n._getMovies(n.state.num)},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this._firstPage()}},{key:"render",value:function(){var e=this;return console.log(this.state.movies.length),r.a.createElement("div",{className:0!==this.state.movies.length?"App":"App--loading"},0!==this.state.movies.length?this._renderMovies():"Loading...",r.a.createElement("div",null,this.state.num<3?r.a.createElement(b.a,{onVisited:function(){return e._loaditems()}}):r.a.createElement("p",null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,1,2]]]);
//# sourceMappingURL=main.d00232b7.chunk.js.map