(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{34:function(t,e,r){"use strict";r.r(e),r.d(e,"default",function(){return c});var n=r(6),a=r(7),i=r(9),o=r(8),s=r(10),l=r(0),u=r.n(l),c=(r(60),function(t){function e(t){var r;return Object(n.a)(this,e),(r=Object(i.a)(this,Object(o.a)(e).call(this,t))).timer=null,r.transform=function(t){var e=t.target.value;r.timer&&clearTimeout(r.timer),r.timer=setTimeout(function(){r.setState({retInput:JSON.stringify(r.paramsTransform(e))})},500)},r.state={retUrl:"",retInput:""},r}return Object(s.a)(e,t),Object(a.a)(e,[{key:"componentDidMount",value:function(){this.setState({retUrl:JSON.stringify(this.paramsTransform(window.location.href))})}},{key:"componentWillUnmount",value:function(){this.timer&&clearTimeout(this.timer)}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("p",null,"\u5f53\u524d\u9875\u9762url\u53c2\u6570\uff1a",this.state.retUrl),u.a.createElement("input",{onKeyUp:this.transform,style:{width:"90%",marginLeft:"32px"},type:"text",placeholder:"\u8f93\u5165url\u8fdb\u884c\u6d4b\u8bd5"}),u.a.createElement("p",null,"\u6d4b\u8bd5\u7ed3\u679c\uff1a",this.state.retInput),u.a.createElement("h4",null,"\u4ee3\u7801\uff1a",u.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/thiszhong/utils/blob/master/Javascript/formatTransform.js"},"https://github.com/thiszhong/utils/blob/master/Javascript/formatTransform.js")))}},{key:"paramsTransform",value:function(t){var e,r={};if(!t||"string"!==typeof t)return r;for(var n=0,a=(e=(t.indexOf("?")>-1?t.substring(t.indexOf("?")+1):t).split("&")).length;n<a;n++)e[n].indexOf("=")>-1&&(e[e[n]]=e[n].split("="),r[e[e[n]][0]]=e[e[n]][1]);return r}}]),e}(l.Component))},60:function(t,e,r){}}]);