(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{36:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return s});var i=n(6),o=n(7),c=n(9),a=n(8),r=n(10),u=n(0),l=n.n(u),s=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(a.a)(t).call(this,e))).clickA=function(e){e.preventDefault(),alert("\u4f60\u590d\u5236\u4e86\uff1a"+window.getSelection(0).toString()+"\uff0c\u5373\u5c06\u6253\u5f00\u5fae\u4fe1\u53bb\u6dfb\u52a0\u597d\u53cb"),n.myRef.current.click()},n.historyState=function(){n.count&&(window.history.pushState({page:3},"title 3","/#/item/7"),alert(--n.count+"\u6b21"))},n.myRef=l.a.createRef(),n}return Object(r.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.count=4,document.addEventListener("copy",this.clickA),window.addEventListener("popstate",this.historyState),window.history.pushState({page:3},"title 3","/#/item/7")}},{key:"componentWillUnmount",value:function(){document.removeEventListener("copy",this.clickA),window.removeEventListener("popstate",this.historyState)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"\u590d\u5236\u4e0b\u9762\u6587\u5b57\u8bd5\u8bd5"),l.a.createElement("h3",{style:{color:"red"}},"\u4e0a\u5c71\u6253\u8001\u864e"),l.a.createElement("a",{style:{display:"none"},ref:this.myRef,href:"weixin://"},"\u6253\u5f00\u5fae\u4fe1"))}}]),t}(u.Component)}}]);