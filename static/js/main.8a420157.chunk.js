(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,n){e.exports=n(189)},110:function(e,t,n){},189:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),c=n.n(o),s=(n(110),n(23)),i=n(24),l=n(26),u=n(25),h=n(27),d=n(70),p=n.n(d),g=n(96),f=n(15),v=n.n(f),m=n(31),w="https://api.chucknorris.io/jokes",b={getCategories:function(){var e=Object(m.a)(v.a.mark(function e(){var t,n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(w,"/categories"));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",[]);case 13:case"end":return e.stop()}},e,this,[[0,10]])}));return function(){return e.apply(this,arguments)}}(),getRandomJoke:function(e){var t="".concat(w,"/random").concat(e?"?category=".concat(e):"");return Object(m.a)(v.a.mark(function e(){var n,a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return");case 13:case"end":return e.stop()}},e,this,[[0,10]])}))}},k=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={list:Object(g.a)(),category:void 0},n.getCategories=b.getCategories,n.getRandomJoke=b.getRandomJoke(),n.getJokes=function(){return n.state.list},n.setJokes=function(e){return n.setState(function(t){return{list:e(t.list)}})},n.getCategory=function(){return n.state.category},n.setCategory=function(e){n.state.category!==e&&(n.getRandomJoke=b.getRandomJoke(e),n.setState(function(t){return console.log("setCategory",e),{list:t.list.clear(),category:e}}))},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.getCategory,t=this.setCategory,n=this.getJokes,a=this.setJokes,r=this.getCategories,o=this.getRandomJoke;return this.props.children({getCategory:e,setCategory:t,getCategories:r,getJokes:n,setJokes:a,getRandomJoke:o})}}]),t}(a.Component),C=n(52),y=n(104),O=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={categories:[]},n.componentDidMount=Object(m.a)(v.a.mark(function e(){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.props.getCategories();case 2:t=e.sent,n.setState({categories:t});case 4:case"end":return e.stop()}},e,this)})),n.handleChange=function(e){return n.props.handleChange(e.value)},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.selectedOption;return r.a.createElement(y.a,{placeholder:"Categories...",value:e&&{value:e,label:e.toUpperCase()},onChange:this.handleChange,options:[{label:"ALL"}].concat(Object(C.a)(this.state.categories.sort().map(function(e){return{value:e,label:e.toUpperCase()}})))})}}]),t}(a.PureComponent),j=n(71),x=n(34),R=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).cache=new x.c({defaultHeight:90,minHeight:90,fixedWidth:!0}),n._getNRandomJoke=function(){var e=Object(m.a)(v.a.mark(function e(t){var a,r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("_getNRandomJoke",t),a=[];case 2:if(!t){e.next=10;break}return e.next=5,n.props.getJoke();case 5:r=e.sent,a.push(r),t--,e.next=2;break;case 10:return e.abrupt("return",a);case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n._isRowLoaded=function(e){var t=e.index;return!!n.props.list[t]},n._loadMoreRows=function(e){var t=e.startIndex,a=e.stopIndex,r=n.props,o=r.list,c=r.onChangeList,s=a-o.size-1;if(console.log({list:o,startIndex:t,stopIndex:a,increment:s}),!(o[a]||o[t]||s<1))return console.log({name:"wohooooooo"}),c(function(e){return e.concat(Array(s).fill({id:0,value:"Loading..."}))}),n._getNRandomJoke(s).then(function(e){return c(function(t){return t.splice.apply(t,[o.size,s].concat(Object(C.a)(e)))})})},n._rowRenderer=function(e){var t=e.index,a=e.key,o=e.parent,c=e.style,s=n.props.list.get(t),i={backgroundColor:"#fff",color:"#333",display:"flex",justifyContent:"center",flexDirection:"column",paddingLeft:"10px"};if(t%2&&(i=Object(j.a)({},i,{backgroundColor:"#333",color:"#fff"})),s)return r.a.createElement(x.b,{cache:n.cache,columnIndex:0,key:a,parent:o,rowIndex:t},r.a.createElement("div",{key:a,style:Object(j.a)({},c,i)},n.props.children(s)))},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.list.size+10;return r.a.createElement(x.d,{isRowLoaded:this._isRowLoaded,loadMoreRows:this._loadMoreRows,rowCount:t},function(n){var a=n.onRowsRendered,o=n.registerChild;return r.a.createElement(x.a,{disableHeight:!0},function(n){var c=n.width;return r.a.createElement(x.e,{ref:o,width:c,height:780,onRowsRendered:a,rowCount:t,deferredMeasurementCache:e.cache,rowHeight:e.cache.rowHeight,rowRenderer:e._rowRenderer})})})}}]),t}(a.PureComponent);p.a.setAppElement("#root");var J=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showModal:!1,contentLabel:void 0},n._handleOpenModal=function(e){window.location.hash="#".concat(e.id),window.onpopstate=function(){n._handleCloseModal()},n.setState({showModal:!0,contentLabel:e.value})},n._locationBack=function(){window.history.back()},n._handleCloseModal=function(){n.setState({showModal:!1})},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(a.Fragment,null,r.a.createElement(k,null,function(t){var n=t.getCategory,a=t.setCategory,o=t.getCategories,c=t.getJokes,s=t.setJokes,i=t.getRandomJoke;return r.a.createElement("main",null,r.a.createElement(O,{getCategories:o,handleChange:a,selectedOption:n()}),r.a.createElement(R,{list:c(),onChangeList:s,getJoke:i},function(t){return r.a.createElement("div",{key:"joke-".concat(t.id),onClick:function(){return 0!==t.id&&e._handleOpenModal(t)}},t.value)}))}),r.a.createElement(p.a,{shouldCloseOnOverlayClick:!0,isOpen:this.state.showModal,onRequestClose:this._locationBack,contentLabel:this.state.contentLabel},r.a.createElement("h2",null,"Fact"),r.a.createElement("p",null,this.state.contentLabel),r.a.createElement("button",{onClick:this._locationBack},"Close Modal")))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[105,2,1]]]);
//# sourceMappingURL=main.8a420157.chunk.js.map