(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t){},24:function(e,t,a){e.exports=a(54)},30:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(13),c=a.n(r),o=a(57),i=a(56),s=(a(30),a(7)),m=a(8),p=a(10),u=a(9),d=a(11),h=a(55),v=a(5),E=a.n(v),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(p.a)(this,Object(u.a)(t).call(this,e))).state={movies:[]},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("/movies").then(function(t){e.setState({movies:t.data}),console.log(e.state.movies)})}},{key:"render",value:function(){return l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"panel panel-default"},l.a.createElement("div",{class:"panel-heading"},l.a.createElement("h3",{class:"panel-title"},"MOVIE LIST")),l.a.createElement("div",{class:"panel-body"},l.a.createElement("h4",null,l.a.createElement(h.a,{to:"/create"},l.a.createElement("span",{class:"glyphicon glyphicon-plus-sign","aria-hidden":"true"})," Add Movie")),l.a.createElement("table",{class:"table table-stripe"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Title"),l.a.createElement("th",null,"Type"))),l.a.createElement("tbody",null,this.state.movies.map(function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(h.a,{to:"/show/".concat(e.id)},e.title)),l.a.createElement("td",null,e.type))}))))))}}]),t}(n.Component),b=(a(52),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(p.a)(this,Object(u.a)(t).call(this,e))).onChange=function(e){var t=a.state.movie;t[e.target.name]=e.target.value,a.setState({movie:t})},a.onSubmit=function(e){e.preventDefault();var t=a.state.movie,n=t.title,l=t.type,r=t.description,c=t.actors,o=t.director;E.a.put("/movies/"+a.props.match.params.id,{title:n,type:l,description:r,actors:c,director:o}).then(function(e){a.props.history.push("/show/"+a.props.match.params.id)})},a.state={movie:{}},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("/movies/"+this.props.match.params.id).then(function(t){e.setState({movie:t.data}),console.log(e.state.movie)})}},{key:"render",value:function(){return l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"panel panel-default"},l.a.createElement("div",{class:"panel-heading"},l.a.createElement("h3",{class:"panel-title"},"EDIT Movie")),l.a.createElement("div",{class:"panel-body"},l.a.createElement("h4",null,l.a.createElement(h.a,{to:"/show/".concat(this.state.movie.id)},l.a.createElement("span",{class:"glyphicon glyphicon-eye-open","aria-hidden":"true"})," Movie List")),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"name"},"Title:"),l.a.createElement("input",{type:"text",class:"form-control",name:"title",value:this.state.movie.title,onChange:this.onChange,placeholder:"Title"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"title"},"Type:"),l.a.createElement("input",{type:"text",class:"form-control",name:"type",value:this.state.movie.type,onChange:this.onChange,placeholder:"Type"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"author"},"Description:"),l.a.createElement("input",{type:"text",class:"form-control",name:"description",value:this.state.movie.description,onChange:this.onChange,placeholder:"Description"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"published_date"},"Actors:"),l.a.createElement("input",{type:"text",class:"form-control",name:"actors",value:this.state.movie.actors,onChange:this.onChange,placeholder:"Actors"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"description"},"Director:"),l.a.createElement("input",{type:"text",class:"form-control",name:"director",value:this.state.movie.director,onChange:this.onChange,placeholder:"Director"})),l.a.createElement("button",{type:"submit",class:"btn btn-default"},"Update")))))}}]),t}(n.Component)),g=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(p.a)(this,Object(u.a)(t).call(this))).onChange=function(t){var a=e.state;a[t.target.name]=t.target.value,e.setState(a)},e.onSubmit=function(t){t.preventDefault();var a=e.state,n=a.title,l=a.type,r=a.description,c=a.actors,o=a.director;E.a.post("/movies",{title:n,type:l,description:r,actors:c,director:o}).then(function(t){e.props.history.push("/")})},e.state={title:"",type:"",description:"",actors:"",director:""},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.type,n=e.description,r=e.actors,c=e.director;return l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"panel panel-default"},l.a.createElement("div",{class:"panel-heading"},l.a.createElement("h3",{class:"panel-title"},"ADD MOVIE")),l.a.createElement("div",{class:"panel-body"},l.a.createElement("h4",null,l.a.createElement(h.a,{to:"/"},l.a.createElement("span",{class:"glyphicon glyphicon-th-list","aria-hidden":"true"})," Movie List")),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"isbn"},"Title:"),l.a.createElement("input",{type:"text",class:"form-control",name:"title",value:t,onChange:this.onChange,placeholder:"Title"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"title"},"Type:"),l.a.createElement("input",{type:"text",class:"form-control",name:"type",value:a,onChange:this.onChange,placeholder:"Type"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"author"},"Description:"),l.a.createElement("input",{type:"text",class:"form-control",name:"description",value:n,onChange:this.onChange,placeholder:"Description"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"published_date"},"Actors:"),l.a.createElement("input",{type:"text",class:"form-control",name:"actors",value:r,onChange:this.onChange,placeholder:"Actors"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"publisher"},"Director:"),l.a.createElement("input",{type:"text",class:"form-control",name:"director",value:c,onChange:this.onChange,placeholder:"Director"})),l.a.createElement("button",{type:"submit",class:"btn btn-default"},"Submit")))))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(p.a)(this,Object(u.a)(t).call(this,e))).state={movie:{}},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("/movies/"+this.props.match.params.id).then(function(t){e.setState({movie:t.data}),console.log(e.state.movie)})}},{key:"delete",value:function(e){var t=this;console.log(e),E.a.delete("/movie/"+e).then(function(e){t.props.history.push("/")})}},{key:"render",value:function(){return l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"panel panel-default"},l.a.createElement("div",{class:"panel-heading"},l.a.createElement("h3",{class:"panel-title"},"Movie Details")),l.a.createElement("div",{class:"panel-body"},l.a.createElement("h4",null,l.a.createElement(h.a,{to:"/"},l.a.createElement("span",{class:"glyphicon glyphicon-th-list","aria-hidden":"true"})," Movie List")),l.a.createElement("dl",null,l.a.createElement("dt",null,"Title:"),l.a.createElement("dd",null,this.state.movie.title),l.a.createElement("dt",null,"Type:"),l.a.createElement("dd",null,this.state.movie.type),l.a.createElement("dt",null,"Description:"),l.a.createElement("dd",null,this.state.movie.description),l.a.createElement("dt",null,"Actors:"),l.a.createElement("dd",null,this.state.movie.actors),l.a.createElement("dt",null,"Director:"),l.a.createElement("dd",null,this.state.movie.director)),l.a.createElement(h.a,{to:"/edit/".concat(this.state.movie.id),class:"btn btn-success"},"Edit"),"\xa0",l.a.createElement("button",{onClick:this.delete.bind(this,this.state.movie.id),class:"btn btn-danger"},"Delete"))))}}]),t}(n.Component),C=a(22),O=a.n(C);c.a.render(l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(i.a,{exact:!0,path:"/",component:f}),l.a.createElement(i.a,{path:"/edit/:id",component:b}),l.a.createElement(i.a,{path:"/create",component:g}),l.a.createElement(i.a,{path:"/show/:id",component:y}),l.a.createElement(i.a,{path:"/delete/:id",component:O.a}))),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.f6201d06.chunk.js.map