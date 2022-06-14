(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var s=c(8),i=c.n(s),a=(c(14),c(4)),n=c(1),r=(c(15),c(16),c(17),c(0)),l=function(e){var t=e.movie;return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"card-image","data-cy":"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{src:t.Poster,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8","data-cy":"movie-title",children:t.Title})})]}),Object(r.jsxs)("div",{className:"content","data-cy":"content",children:[t.Plot,Object(r.jsx)("br",{})]})]})]})},o=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(l,{movie:e},e.imdbID)}))})},j=c(9),d=c(6),m=c(2),b=c.n(m),u="http://www.omdbapi.com/?apikey=2d2038e9&?";function v(e){return h.apply(this,arguments)}function h(){return(h=Object(d.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"&t=").concat(t));case 2:return e.next=4,e.sent.json();case 4:return c=e.sent,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c(20);var O=function(e){var t=e.callbackForMovies,c=e.moviesPrev,s=Object(n.useState)(""),i=Object(a.a)(s,2),o=i[0],m=i[1],u=Object(n.useState)(),h=Object(a.a)(u,2),O=h[0],x=h[1];function p(){return(p=Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(o.toLowerCase());case 2:t=e.sent,x(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{className:"find-movie",children:[Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input is-danger",onChange:function(e){m(e.target.value)}})}),Object(r.jsx)("p",{className:"help is-danger",children:"Can't find a movie with such a title"})]}),Object(r.jsxs)("div",{className:"field is-grouped",children:[Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"button",className:"button is-light",onClick:function(){!function(){p.apply(this,arguments)}()},children:"Find a movie"})}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"button",className:"button is-primary",onClick:function(){O&&(c.find((function(e){return e.imdbID===O.imdbID}))||(t([].concat(Object(j.a)(c),[O])),x(void 0)))},children:"Add to the list"})})]})]}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h2",{className:"title",children:"Preview"}),O&&Object(r.jsx)(l,{movie:O})]})]})},x=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),c=t[0],s=t[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(o,{movies:c})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(O,{callbackForMovies:s,moviesPrev:c})})]})};i.a.render(Object(r.jsx)(x,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.480f90ea.chunk.js.map