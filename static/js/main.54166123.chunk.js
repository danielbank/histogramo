(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{202:function(e,t,n){e.exports=n(522)},207:function(e,t,n){},522:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(89),i=n.n(r),o=(n(207),n(6)),l=n(7),s=n(10),u=n(8),p=n(9),f=n(117),m=n(69),h={appBlack:"#222",diceRed:"#C23631",diceYellow:"#fce655",scientificGreen:"#779348",mercantileYellow:"#F6C55E",politicalBlue:"#0072BB",pirateBlack:"#222",beaurocraticGrey:"#ccc"},d=n(21),b=n(22);function v(){var e=Object(d.a)(["\n  font-size: smaller;\n"]);return v=function(){return e},e}function C(){var e=Object(d.a)(["\n  display: flex;\n  margin-top: 2.5rem;\n  margin-left: 1rem;\n  margin-right: 1rem;\n  justify-content: space-between\n"]);return C=function(){return e},e}function j(){var e=Object(d.a)(["\n  width: ","%;\n  display: ","\n"]);return j=function(){return e},e}function x(){var e=Object(d.a)(["\n  width: ","%;\n  display: ","\n"]);return x=function(){return e},e}function z(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n"]);return z=function(){return e},e}function O(){var e=Object(d.a)(["\n  background-color: ",";\n  color: white;\n  display: flex;\n  flex-direction: row;\n  justify-content: left;\n  flex-wrap: wrap;\n"]);return O=function(){return e},e}function g(){var e=Object(d.a)(["\n  text-align: center;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n"]);return g=function(){return e},e}var E=b.a.div(g()),w=b.a.header(O(),h.appBlack),L=b.a.div(z()),y=b.a.div(x(),function(e){return e.percentWidth},function(e){return e.percentWidth<30?"none":"block"}),k=b.a.div(j(),function(e){return e.percentWidth},function(e){return e.percentWidth<30?"none":"block"}),S=b.a.div(C()),M=b.a.a(v());function B(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n"]);return B=function(){return e},e}function R(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n"]);return R=function(){return e},e}function Y(){var e=Object(d.a)(["\n  display: ",";\n  flex-direction: row;\n  justify-content: center;\n  flex-wrap: wrap;\n\n  button {\n    flex-basis: 10%;\n  }\n\n  @media (max-width: 1024px) {\n  button {\n    flex-basis: 20%;\n  }\n"]);return Y=function(){return e},e}function Z(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n"]);return Z=function(){return e},e}var G=b.a.div(Z()),P=b.a.div(Y(),function(e){return e.hidden?"none":"flex"}),A=b.a.div(R()),D=b.a.div(B());function W(){var e=Object(d.a)(["\n  appearance: none;\n  opacity: 1;\n  cursor: pointer;\n  display: flex;\n  height: ",";\n  width: ",";\n  max-height: ","\n  max-width: ","\n  margin: 1rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  line-height: 0.88rem;\n  box-shadow: 0 0 0 rgba(0, 0, 0, 0);\n  border-radius: 8px;\n  border: 3px solid ",";\n  background-color: ",";\n  color: #222;\n\n  &:hover {\n    opacity: 0.70;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n  }\n\n  &:disabled {\n    opacity: 0.5;\n    pointer-events: none;\n  }\n\n  &:active {\n    border: 3px solid #ccc;\n    background-color: #444;\n  }\n"]);return W=function(){return e},e}var V=b.a.button(W(),function(e){return e.size},function(e){return e.size},function(e){return e.maxSize},function(e){return e.maxSize},function(e){return e.active?"#C23631":"#222"},function(e){return e.active?"#C09AA1":"#fcfcfc"}),H=function(e){function t(e){var n;Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).buttonRef=a.a.createRef();var c=e.onClick||function(){};return n.onClick=function(e){c(e),n.buttonRef.current.blur()}.bind(Object(m.a)(Object(m.a)(n))),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.icon,n=e.size,c=e.maxSize,r=e.active,i=e.disabled;return a.a.createElement(V,{type:"button",ref:this.buttonRef,size:n,maxSize:c,active:r,disabled:i,onClick:this.onClick},t)}}]),t}(c.Component);function I(){var e=Object(d.a)(["\n  display: inline-block;\n  fill: ",";\n  height ",";\n  width: ",";\n  user-select: none;\n  flex-shrink: 0;\n"]);return I=function(){return e},e}var U=b.a.svg(I(),function(e){return e.color||"white"},function(e){return e.size},function(e){return e.size}),F=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.size,n=e.viewBox,c=e.color;return a.a.createElement(U,{width:t||"1rem",height:t||"1rem",viewBox:n,color:c},this.props.children)}}]),t}(c.Component),J=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(F,Object.assign({},this.props,{x:"0px",y:"0px",viewBox:"0 0 100 100",fill:"#222"}),a.a.createElement("path",{d:"M78,12H22c-5.5,0-10,4.5-10,10v56c0,5.5,4.5,10,10,10h56c5.5,0,10-4.5,10-10V22C88,16.5,83.5,12,78,12z M50,56 c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S53.3,56,50,56z"}))}}]),t}(c.Component),N=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(F,Object.assign({},this.props,{x:"0px",y:"0px",viewBox:"0 0 100 100",fill:"#222"}),a.a.createElement("path",{d:"M78,12H22c-5.5,0-10,4.5-10,10v56c0,5.5,4.5,10,10,10h56c5.5,0,10-4.5,10-10V22C88,16.5,83.5,12,78,12z M34,72   c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S37.3,72,34,72z M66,40c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S69.3,40,66,40z"}))}}]),t}(c.Component),T=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(F,Object.assign({},this.props,{x:"0px",y:"0px",viewBox:"0 0 100 100",fill:"#222"}),a.a.createElement("path",{d:"M78,12H22c-5.5,0-10,4.5-10,10v56c0,5.5,4.5,10,10,10h56c5.5,0,10-4.5,10-10V22C88,16.5,83.5,12,78,12z M34,72   c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S37.3,72,34,72z M50,56c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S53.3,56,50,56z M66,40   c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S69.3,40,66,40z"}))}}]),t}(c.Component),Q=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(F,Object.assign({},this.props,{x:"0px",y:"0px",viewBox:"0 0 100 100",fill:"#222"}),a.a.createElement("path",{d:"M78,12H22c-5.5,0-10,4.5-10,10v56c0,5.5,4.5,10,10,10h56c5.5,0,10-4.5,10-10V22C88,16.5,83.5,12,78,12z M34,72   c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S37.3,72,34,72z M34,40c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S37.3,40,34,40z M66,72   c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S69.3,72,66,72z M66,40c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S69.3,40,66,40z"}))}}]),t}(c.Component),X=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(F,Object.assign({},this.props,{x:"0px",y:"0px",viewBox:"0 0 100 100",fill:"#222"}),a.a.createElement("path",{d:"M78,12H22c-5.5,0-10,4.5-10,10v56c0,5.5,4.5,10,10,10h56c5.5,0,10-4.5,10-10V22C88,16.5,83.5,12,78,12z M34,72   c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S37.3,72,34,72z M34,40c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S37.3,40,34,40z M50,56   c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S53.3,56,50,56z M66,72c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S69.3,72,66,72z M66,40   c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S69.3,40,66,40z"}))}}]),t}(c.Component),$=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(F,Object.assign({},this.props,{x:"0px",y:"0px",viewBox:"0 0 100 100",fill:"#222"}),a.a.createElement("path",{d:"M78,12H22c-5.5,0-10,4.5-10,10v56c0,5.5,4.5,10,10,10h56c5.5,0,10-4.5,10-10V22C88,16.5,83.5,12,78,12z M34,72   c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S37.3,72,34,72z M34,56c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S37.3,56,34,56z M34,40   c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S37.3,40,34,40z M66,72c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S69.3,72,66,72z M66,56   c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S69.3,56,66,56z M66,40c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S69.3,40,66,40z"}))}}]),t}(c.Component),q=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(F,Object.assign({},this.props,{x:"0px",y:"0px",viewBox:"0 0 100 100",fill:"#222"}),a.a.createElement("path",{d:"M78,12H22c-5.5,0-10,4.5-10,10v56c0,5.5,4.5,10,10,10h56c5.5,0,10-4.5,10-10V22C88,16.5,83.5,12,78,12z M34,72"}))}}]),t}(c.Component),K=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(F,Object.assign({},this.props,{x:"0px",y:"0px",viewBox:"50 50 950 950",fill:"#222"}),a.a.createElement("path",{d:"M588.5,913.8c44.4,0,88.9,0,133.3,0c18,0,36.1,0,54.1,0c11.6,0,23.1-1.9,34.6-3.5     c10.3-1.5,20.3-4.1,29.9-8.1c14.8-6,29.1-12,41.9-21.5c12.4-9.2,24.7-18.5,34.6-30.4c20-24.2,36.5-51.4,42.8-82.6     c3.1-15.2,4.8-30.8,4.8-46.3c0-20.5,0-40.9,0-61.4c0-47.9,0-95.8,0-143.7c0-50.2-19.5-99.2-55.2-134.8     c-35.2-35.2-83.9-55.1-133.6-55.2c-23.7,0-47.3,0-71,0c-50,0-100,0-150,0c-59.9,0-119.8,0-179.7,0c-52.3,0-104.6,0-156.9,0     c-28.3,0-56.7,0-85,0c-1.3,0-2.6,0-3.9,0c-18,0-36.8,7.8-49.5,20.5c-6.8,6.3-11.7,13.8-14.5,22.5c-4.4,8.3-6.4,17.3-6,27     c0.8,18.1,6.8,36.9,20.5,49.5c13.7,12.6,30.5,20.5,49.5,20.5c22,0,43.9,0,65.9,0c52.6,0,105.1,0,157.7,0c62.8,0,125.7,0,188.5,0     c53.8,0,107.6,0,161.4,0c24.5,0,48.9-0.1,73.4,0c5.2,0,10.4,0.3,15.6,1c-6.2-0.8-12.4-1.7-18.6-2.5c10.3,1.4,20.3,4.1,29.9,8.1     c-5.6-2.4-11.1-4.7-16.7-7.1c9.4,4,18.2,9.1,26.3,15.2c-4.7-3.6-9.4-7.3-14.2-10.9c8.4,6.5,15.8,13.9,22.3,22.3     c-3.6-4.7-7.3-9.4-10.9-14.2c6.1,8.1,11.2,16.9,15.2,26.3c-2.4-5.6-4.7-11.1-7.1-16.7c4,9.6,6.7,19.6,8.1,29.9     c-0.8-6.2-1.7-12.4-2.5-18.6c1.3,10.7,1,21.6,1,32.3c0,17.5,0,34.9,0,52.4c0,39.9,0,79.8,0,119.7c0,12.5,0.6,25.1-1,37.5     c0.8-6.2,1.7-12.4,2.5-18.6c-1.4,10.3-4.1,20.3-8.1,29.9c2.4-5.6,4.7-11.1,7.1-16.7c-4,9.4-9.1,18.2-15.2,26.3     c3.6-4.7,7.3-9.4,10.9-14.2c-6.5,8.4-13.9,15.8-22.3,22.3c4.7-3.6,9.4-7.3,14.2-10.9c-8.1,6.1-16.9,11.2-26.3,15.2     c5.6-2.4,11.1-4.7,16.7-7.1c-9.6,4-19.6,6.7-29.9,8.1c6.2-0.8,12.4-1.7,18.6-2.5c-9.6,1.2-19.2,1-28.8,1c-14.5,0-29,0-43.5,0     c-35.4,0-70.8,0-106.1,0c-8.3,0-16.6,0-24.9,0c-17.9,0-36.8,7.8-49.5,20.5c-6.8,6.3-11.7,13.8-14.5,22.5c-4.4,8.3-6.4,17.3-6,27     c0.8,18.1,6.8,36.9,20.5,49.5C552.7,905.8,569.6,913.8,588.5,913.8L588.5,913.8z"}),a.a.createElement("path",{d:"M296.1,130.8c-24.3,24.3-48.7,48.7-73,73c-38.8,38.8-77.6,77.6-116.4,116.4c-8.9,8.9-17.9,17.9-26.8,26.8     c-26.7,26.7-26.8,72.2,0,99c24.3,24.4,48.7,48.7,73,73.1c38.8,38.9,77.6,77.7,116.4,116.6c8.9,8.9,17.9,17.9,26.8,26.8     c12.7,12.7,31.6,20.5,49.5,20.5c17.2,0,37.7-7.6,49.5-20.5c12.2-13.3,21.3-30.9,20.5-49.5c-0.8-18.6-7.1-36.1-20.5-49.5     c-24.3-24.4-48.7-48.7-73-73.1c-38.8-38.9-77.6-77.7-116.4-116.6c-8.9-8.9-17.9-17.9-26.8-26.8c0,33,0,66,0,99     c24.3-24.3,48.7-48.7,73-73c38.8-38.8,77.6-77.6,116.4-116.4c8.9-8.9,17.9-17.9,26.8-26.8c12.7-12.7,20.5-31.5,20.5-49.5     c0-17.2-7.6-37.7-20.5-49.5c-13.3-12.2-30.9-21.3-49.5-20.5C327,111.1,309.5,117.4,296.1,130.8L296.1,130.8z"}))}}]),t}(c.Component),_={red:null,yellow:null,special:null},ee=function(e){function t(){var e,n;Object(o.a)(this,t);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state=_,n.setRed=function(e){return n.setState({red:parseInt(e,10)})},n.setYellow=function(e){return n.setState({yellow:parseInt(e,10)})},n.setSpecial=function(e){return n.setState({special:e})},n.submitRoll=function(){var e=n.props.hasSpecials?n.state.special:"black";n.props.submitRoll(n.state.red,n.state.yellow,e),n.setState(_)},n.undoLastSubmit=function(){var e=n.props.undoLastSubmit();n.setState(e)},n.getDie=function(e){var t="red"===e?h.diceRed:h.diceYellow;switch(n.state[e]){case 1:return a.a.createElement(J,{color:t,size:"33%"});case 2:return a.a.createElement(N,{color:t,size:"33%"});case 3:return a.a.createElement(T,{color:t,size:"33%"});case 4:return a.a.createElement(Q,{color:t,size:"33%"});case 5:return a.a.createElement(X,{color:t,size:"33%"});case 6:return a.a.createElement($,{color:t,size:"33%"});default:return null}},n.getSpecial=function(){if(!n.props.hasSpecials)return null;switch(n.state.special){case"green":return a.a.createElement(q,{color:h.scientificGreen,size:"33%"});case"yellow":return a.a.createElement(q,{color:h.mercantileYellow,size:"33%"});case"blue":return a.a.createElement(q,{color:h.politicalBlue,size:"33%"});case"black":return a.a.createElement(q,{color:h.pirateBlack,size:"33%"});default:return null}},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.undoable,c=t.hasSpecials,r=this.state,i=r.red,o=r.yellow,l=r.special,s=i&&o&&(!c||l),u=this.getDie("red"),p=this.getDie("yellow"),f=this.getSpecial();return a.a.createElement(G,null,a.a.createElement(P,null,a.a.createElement(H,{icon:a.a.createElement(J,{color:h.diceYellow,size:"100%"}),onClick:function(){return e.setYellow(1)},active:1===o,size:"10%",maxSize:"5rem"}),a.a.createElement(H,{icon:a.a.createElement(N,{color:h.diceYellow,size:"100%"}),onClick:function(){return e.setYellow(2)},active:2===o,size:"10%",maxSize:"5rem"}),a.a.createElement(H,{icon:a.a.createElement(T,{color:h.diceYellow,size:"100%"}),onClick:function(){return e.setYellow(3)},active:3===o,size:"10%",maxSize:"5rem"}),a.a.createElement(H,{icon:a.a.createElement(Q,{color:h.diceYellow,size:"100%"}),onClick:function(){return e.setYellow(4)},active:4===o,size:"10%",maxSize:"5rem"}),a.a.createElement(H,{icon:a.a.createElement(X,{color:h.diceYellow,size:"100%"}),onClick:function(){return e.setYellow(5)},active:5===o,size:"10%",maxSize:"5rem"}),a.a.createElement(H,{icon:a.a.createElement($,{color:h.diceYellow,size:"100%"}),onClick:function(){return e.setYellow(6)},active:6===o,size:"10%",maxSize:"5rem"})),a.a.createElement(P,null,a.a.createElement(H,{icon:a.a.createElement(J,{color:h.diceRed,size:"100%"}),onClick:function(){return e.setRed(1)},active:1===i,size:"10%",maxSize:"5rem"}),a.a.createElement(H,{icon:a.a.createElement(N,{color:h.diceRed,size:"100%"}),onClick:function(){return e.setRed(2)},active:2===i,size:"10%",maxSize:"5rem"}),a.a.createElement(H,{icon:a.a.createElement(T,{color:h.diceRed,size:"100%"}),onClick:function(){return e.setRed(3)},active:3===i,size:"10%",maxSize:"5rem"}),a.a.createElement(H,{icon:a.a.createElement(Q,{color:h.diceRed,size:"100%"}),onClick:function(){return e.setRed(4)},active:4===i,size:"10%",maxSize:"5rem"}),a.a.createElement(H,{icon:a.a.createElement(X,{color:h.diceRed,size:"100%"}),onClick:function(){return e.setRed(5)},active:5===i,size:"10%",maxSize:"5rem"}),a.a.createElement(H,{icon:a.a.createElement($,{color:h.diceRed,size:"100%"}),onClick:function(){return e.setRed(6)},active:6===i,size:"10%",maxSize:"5rem"})),a.a.createElement(P,{hidden:!c},a.a.createElement(H,{icon:a.a.createElement(q,{color:h.scientificGreen,size:"100%"}),onClick:function(){return e.setSpecial("green")},active:"green"===l,size:"10%",maxSize:"5rem"}),a.a.createElement(H,{icon:a.a.createElement(q,{color:h.mercantileYellow,size:"100%"}),onClick:function(){return e.setSpecial("yellow")},active:"yellow"===l,size:"10%",maxSize:"5rem"}),a.a.createElement(H,{icon:a.a.createElement(q,{color:h.politicalBlue,size:"100%"}),onClick:function(){return e.setSpecial("blue")},active:"blue"===l,size:"10%",maxSize:"5rem"}),a.a.createElement(H,{icon:a.a.createElement(q,{color:h.pirateBlack,size:"100%"}),onClick:function(){return e.setSpecial("black")},active:"black"===l,size:"10%",maxSize:"5rem"})),s&&a.a.createElement(A,null,a.a.createElement(H,{icon:a.a.createElement("div",null,p,u,f),size:"50%",onClick:function(){return e.submitRoll()}})),n?a.a.createElement(D,null,a.a.createElement(H,{icon:a.a.createElement(K,{color:h.pirateBlack,size:"100%"}),size:"25%",maxSize:"5rem",onClick:function(){return e.undoLastSubmit()}})):null)}}]),t}(c.Component),te=n(90),ne=n.n(te),ce=function(e){function t(){var e,n;Object(o.a)(this,t);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).getOption=function(e){return{tooltip:{formatter:function(e){return e.data}},xAxis:{data:["2","3","4","5","6","7","8","9","10","11","12"]},yAxis:{},series:[{name:"DiceRolls",type:"bar",data:e}]}},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.data;return a.a.createElement(ne.a,{option:this.getOption(e)})}}]),t}(c.Component),ae=function(e){function t(){var e,n;Object(o.a)(this,t);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).getOption=function(e){var t=e.reduce(function(e,t){return"green"===t.metacolor?e+1:e},0),n=e.reduce(function(e,t){return"yellow"===t.metacolor?e+1:e},0),c=e.reduce(function(e,t){return"blue"===t.metacolor?e+1:e},0),a=e.reduce(function(e,t){return"black"===t.metacolor?e+1:e},0);return{title:{text:"{green|".concat(t," Green} / {yellow|").concat(n," Yellow} / {blue|").concat(c," Blue} / {black|").concat(a," Black}"),textStyle:{formatter:["{green|1 Green}","{yellow|1 Yellow}","{blue|1 Blue}","{black|1 Black}"].join("\n"),rich:{green:{color:h.scientificGreen},yellow:{color:h.mercantileYellow},blue:{color:h.politicalBlue},black:{color:h.beaurocraticGrey}}}},tooltip:{formatter:function(e){var t=e.data||[0,0],n=t.metacolor[0].toUpperCase().concat(t.metacolor.slice(1));return"".concat(n," ").concat(t.value[1].toFixed(0))}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{min:0,max:e.length,type:"value",axisLine:{onZero:!0}},yAxis:{min:0,max:6,type:"value",axisLine:{onZero:!0}},series:[{id:"Special",type:"line",smooth:!1,symbolSize:5,data:e}]}},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.data;return e.isShown?a.a.createElement(ne.a,{option:this.getOption(t)}):null}}]),t}(c.Component),re=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(F,Object.assign({},this.props,{x:"0px",y:"0px",viewBox:"0 0 48 50",fill:"#222"}),a.a.createElement("g",null,a.a.createElement("path",{d:"M11.2,17H4.8C3.2,17,2,18.3,2,19.9v24.2C2,45.7,3.2,47,4.8,47h6.5c1.6,0,2.8-1.3,2.8-2.9V19.9C14,18.3,12.8,17,11.2,17z"}),a.a.createElement("path",{d:"M43.2,27h-6.5c-1.6,0-2.8,1.3-2.8,2.9v14.3c0,1.6,1.2,2.8,2.8,2.9h6.5c1.6,0,2.8-1.3,2.8-2.9V29.9C46,28.3,44.8,27,43.2,27   z"}),a.a.createElement("path",{d:"M27.2,1h-6.5c-1.6,0.1-2.8,1.4-2.8,3v40c-0.1,1.6,1.2,2.9,2.8,3h6.5c1.6-0.1,2.8-1.4,2.8-3V4C30.1,2.4,28.8,1.1,27.2,1z"})))}}]),t}(c.Component),ie=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(F,Object.assign({},this.props,{x:"0px",y:"0px",viewBox:"0 0 24 30",fill:"#222"}),a.a.createElement("path",{d:"M17,22 L21,22 L21,16 L17,16 L17,22 Z M13,11 C13,11.552 12.553,12 12,12 C11.447,12 11,11.552 11,11 L11,10 C11,9.447 11.447,9 12,9 C12.553,9 13,9.447 13,10 L13,11 Z M13,15 C13,15.552 12.553,16 12,16 C11.447,16 11,15.552 11,15 L11,14 C11,13.447 11.447,13 12,13 C12.553,13 13,13.447 13,14 L13,15 Z M3,22 L7,22 L7,16 L3,16 L3,22 Z M5,10.802 L7,13.802 L7,14 L2.868,14 L5,10.802 Z M19,10.802 L21.132,14 L17,14 L17,13.802 L19,10.802 Z M12,2.562 L14.865,6 L9.135,6 L12,2.562 Z M23.832,14.445 L19.832,8.445 C19.461,7.888 18.539,7.888 18.168,8.445 L17,10.197 L17,8 C17.388,8 17.741,7.775 17.905,7.424 C18.07,7.072 18.017,6.657 17.769,6.359 L12.769,0.359 C12.388,-0.097 11.612,-0.097 11.231,0.359 L6.231,6.359 C5.983,6.657 5.93,7.072 6.095,7.424 C6.259,7.775 6.612,8 7,8 L7,10.197 L5.832,8.445 C5.461,7.888 4.539,7.888 4.168,8.445 L0.168,14.445 C-0.036,14.752 -0.056,15.146 0.118,15.471 C0.292,15.796 0.631,16 1,16 L1,23 C1,23.552 1.447,24 2,24 L8,24 L11,24 L11,20 C11,19.447 11.447,19 12,19 C12.553,19 13,19.447 13,20 L13,24 L16,24 L22,24 C22.553,24 23,23.552 23,23 L23,16 C23.369,16 23.708,15.796 23.882,15.471 C24.056,15.146 24.036,14.752 23.832,14.445 L23.832,14.445 Z"}),a.a.createElement("path",{d:"M5,16.9996 C4.447,16.9996 4,17.4476 4,17.9996 L4,18.9996 C4,19.5516 4.447,19.9996 5,19.9996 C5.553,19.9996 6,19.5516 6,18.9996 L6,17.9996 C6,17.4476 5.553,16.9996 5,16.9996"}),a.a.createElement("path",{d:"M19,19.9996 C19.553,19.9996 20,19.5516 20,18.9996 L20,17.9996 C20,17.4476 19.553,16.9996 19,16.9996 C18.447,16.9996 18,17.4476 18,17.9996 L18,18.9996 C18,19.5516 18.447,19.9996 19,19.9996"}))}}]),t}(c.Component),oe=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(F,Object.assign({},this.props,{x:"0px",y:"0px",viewBox:"0 0 24 30",fill:"#222"}),a.a.createElement("path",{d:"M21.6124,2.9996 L21.2794,3.9996 L16.7204,3.9996 L16.3874,2.9996 L21.6124,2.9996 Z M20.0004,7.9996 L20.0004,8.9996 C20.0004,9.5516 19.5524,9.9996 19.0004,9.9996 C18.4474,9.9996 18.0004,9.5516 18.0004,8.9996 L18.0004,7.9996 C18.0004,7.4476 18.4474,6.9996 19.0004,6.9996 C19.5524,6.9996 20.0004,7.4476 20.0004,7.9996 L20.0004,7.9996 Z M20.3824,14.9996 L3.6184,14.9996 L2.6184,12.9996 L8.0004,12.9996 L16.0004,12.9996 L21.3824,12.9996 L20.3824,14.9996 Z M7.6124,2.9996 L7.2794,3.9996 L2.7204,3.9996 L2.3874,2.9996 L7.6124,2.9996 Z M6.0004,7.9996 L6.0004,8.9996 C6.0004,9.5516 5.5524,9.9996 5.0004,9.9996 C4.4474,9.9996 4.0004,9.5516 4.0004,8.9996 L4.0004,7.9996 C4.0004,7.4476 4.4474,6.9996 5.0004,6.9996 C5.5524,6.9996 6.0004,7.4476 6.0004,7.9996 L6.0004,7.9996 Z M24.0004,0.9996 C24.0004,0.4476 23.5524,-0.0004 23.0004,-0.0004 C22.4474,-0.0004 22.0004,0.4476 22.0004,0.9996 L20.0004,0.9996 C20.0004,0.4476 19.5524,-0.0004 19.0004,-0.0004 C18.4474,-0.0004 18.0004,0.4476 18.0004,0.9996 L16.0004,0.9996 C16.0004,0.4476 15.5524,-0.0004 15.0004,-0.0004 C14.4474,-0.0004 14.0004,0.4476 14.0004,0.9996 L14.0004,1.9996 C14.0004,2.0086 14.0054,2.0166 14.0054,2.0266 C14.0084,2.1236 14.0204,2.2216 14.0514,2.3156 L15.0004,5.1606 L15.0004,10.9996 L9.0004,10.9996 L9.0004,5.1606 L9.9484,2.3156 C9.9804,2.2216 9.9924,2.1236 9.9944,2.0266 C9.9954,2.0166 10.0004,2.0086 10.0004,1.9996 L10.0004,0.9996 C10.0004,0.4476 9.5524,-0.0004 9.0004,-0.0004 C8.4474,-0.0004 8.0004,0.4476 8.0004,0.9996 L6.0004,0.9996 C6.0004,0.4476 5.5524,-0.0004 5.0004,-0.0004 C4.4474,-0.0004 4.0004,0.4476 4.0004,0.9996 L2.0004,0.9996 C2.0004,0.4476 1.5524,-0.0004 1.0004,-0.0004 C0.4474,-0.0004 0.0004,0.4476 0.0004,0.9996 L0.0004,1.9996 C0.0004,2.0086 0.0054,2.0166 0.0054,2.0266 C0.0084,2.1236 0.0204,2.2216 0.0514,2.3156 L1.0004,5.1606 L1.0004,10.9996 C0.6534,10.9996 0.3324,11.1796 0.1494,11.4736 C-0.0336,11.7686 -0.0496,12.1366 0.1054,12.4466 L2.0004,16.2356 L2.0004,22.9996 C2.0004,23.5516 2.4474,23.9996 3.0004,23.9996 L9.0004,23.9996 L9.0004,20.9996 C9.0004,19.3456 10.3454,17.9996 12.0004,17.9996 C13.6544,17.9996 15.0004,19.3456 15.0004,20.9996 L15.0004,23.9996 L21.0004,23.9996 C21.5524,23.9996 22.0004,23.5516 22.0004,22.9996 L22.0004,16.2356 L23.8944,12.4466 C24.0504,12.1366 24.0334,11.7686 23.8504,11.4736 C23.6684,11.1796 23.3464,10.9996 23.0004,10.9996 L23.0004,5.1606 L23.9484,2.3156 C23.9804,2.2216 23.9924,2.1236 23.9944,2.0266 C23.9954,2.0166 24.0004,2.0086 24.0004,1.9996 L24.0004,0.9996 Z"}),a.a.createElement("path",{d:"M12.0001,19.9996 C11.4481,19.9996 11.0001,20.4486 11.0001,20.9996 L11.0001,23.9996 L13.0001,23.9996 L13.0001,20.9996 C13.0001,20.4486 12.5521,19.9996 12.0001,19.9996"}))}}]),t}(c.Component),le=function(e){function t(){var e,n;Object(o.a)(this,t);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={leftPercent:50,rolls:[],reds:[],specials:[],regularCatan:!1},n.expandLeftPanel=function(){return n.setState({leftPercent:Object(f.clamp)(n.state.leftPercent+10,80)})},n.expandRightPanel=function(){return n.setState({leftPercent:Object(f.clamp)(n.state.leftPercent-10,20,80)})},n.toggleRegularCatan=function(){return n.setState({regularCatan:!n.state.regularCatan})},n.submitRoll=function(e,t,c){var a=n.state,r=a.rolls,i=a.reds,o=a.specials;n.setState({rolls:r.concat(e+t),reds:i.concat(e),specials:o.concat(c)})},n.undoLastSubmit=function(){var e=n.state,t=e.rolls,c=e.reds,a=e.specials;if(!t.length)return!1;var r=t[t.length-1],i=c[c.length-1],o=r-i,l=a[a.length-1];return n.setState({rolls:t.slice(0,t.length-1),reds:c.slice(0,c.length-1),specials:a.slice(0,a.length-1)}),{red:i,yellow:o,special:l}},n.getRGB=function(e){switch(e){case"green":return h.scientificGreen;case"yellow":return h.mercantileYellow;case"blue":return h.politicalBlue;case"black":return h.beaurocraticGrey;default:return h.appBlack}},n.getRollData=function(){var e=n.state.rolls,t=[0,0,0,0,0,0,0,0,0,0,0,0];return e.forEach(function(e){t[e-2]=t[e-2]+1}),t},n.getSpecialData=function(){var e=n.state,t=e.reds,c=e.specials;return t.map(function(e,t){return{value:[t,e],itemStyle:{borderWidth:10,color:n.getRGB(c[t])},metacolor:c[t]}})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.regularCatan?a.a.createElement(oe,{color:h.appBlack,size:"100%"}):a.a.createElement(ie,{color:h.appBlack,size:"100%"});return a.a.createElement(E,null,a.a.createElement(w,null,a.a.createElement(H,{icon:a.a.createElement($,{color:h.appBlack,size:"100%"}),onClick:this.expandLeftPanel,size:"10%",maxSize:"5rem",disabled:this.state.leftPercent>70}),a.a.createElement(H,{icon:a.a.createElement(re,{color:h.appBlack,size:"100%"}),onClick:this.expandRightPanel,size:"10%",maxSize:"5rem",disabled:this.state.leftPercent<30}),a.a.createElement(H,{icon:e,onClick:this.toggleRegularCatan,size:"10%",maxSize:"5rem"})),a.a.createElement(L,null,a.a.createElement(y,{percentWidth:this.state.leftPercent},a.a.createElement(ee,{submitRoll:this.submitRoll,undoLastSubmit:this.undoLastSubmit,undoable:this.state.rolls.length,hasSpecials:!this.state.regularCatan})),a.a.createElement(k,{percentWidth:100-this.state.leftPercent},a.a.createElement(ce,{data:this.getRollData()}),a.a.createElement(ae,{data:this.getSpecialData(),isShown:!this.state.regularCatan}))),a.a.createElement(S,null,a.a.createElement(M,{href:"https://github.com/danielbank/histogramo"},"Code by Daniel Bank"),a.a.createElement(M,{href:"https://thenounproject.com/shalfdesign/collection/seo-internet-marketing"},"Dice Logo by Arafat Uddin"),a.a.createElement(M,{href:"https://thenounproject.com/danielaeapaim/collection/gambling"},"Gambling Icons by Daniela Paim"),a.a.createElement(M,{href:"https://thenounproject.com/rshashank19/collection/direction"},"Arrow Icons by Shashank Singh"),a.a.createElement(M,{href:"https://thenounproject.com/smashicons/collection/smashicons-medieval-md-solid"},"Castle Icons by Ben Davis"),a.a.createElement(M,{href:"https://thenounproject.com/xicons.co/collection/essential-solid-icons"},"Graph Icon by Xicons.co")))}}]),t}(c.Component),se=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ue(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(a.a.createElement(le,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");se?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ue(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):ue(e)})}}()}},[[202,2,1]]]);
//# sourceMappingURL=main.54166123.chunk.js.map