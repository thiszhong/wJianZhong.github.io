(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e4b0c"],{"90fe":function(t,e,a){"use strict";a.r(e);var n=a("7a23"),c={class:"app-container"},l=Object(n["m"])("i",{class:"el-icon-time"},null,-1);function i(t,e,a,i,r,b){var u=Object(n["M"])("el-table-column"),s=Object(n["M"])("el-tag"),o=Object(n["M"])("el-table"),d=Object(n["N"])("loading");return Object(n["D"])(),Object(n["i"])("div",c,[Object(n["bb"])(Object(n["m"])(o,{data:r.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""},{default:Object(n["ab"])((function(){return[Object(n["m"])(u,{align:"center",label:"ID",width:"95"},{default:Object(n["ab"])((function(t){return[Object(n["l"])(Object(n["Q"])(t.$index),1)]})),_:1}),Object(n["m"])(u,{label:"Title"},{default:Object(n["ab"])((function(t){return[Object(n["l"])(Object(n["Q"])(t.row.title),1)]})),_:1}),Object(n["m"])(u,{label:"Author",width:"110",align:"center"},{default:Object(n["ab"])((function(t){return[Object(n["m"])("span",null,Object(n["Q"])(t.row.author),1)]})),_:1}),Object(n["m"])(u,{label:"Pageviews",width:"110",align:"center"},{default:Object(n["ab"])((function(t){return[Object(n["l"])(Object(n["Q"])(t.row.pageviews),1)]})),_:1}),Object(n["m"])(u,{"class-name":"status-col",label:"Status",width:"110",align:"center"},{default:Object(n["ab"])((function(t){return[Object(n["m"])(s,{type:b.statusFilter(t.row.status)},{default:Object(n["ab"])((function(){return[Object(n["l"])(Object(n["Q"])(t.row.status),1)]})),_:2},1032,["type"])]})),_:1}),Object(n["m"])(u,{align:"center",prop:"created_at",label:"Display_time",width:"200"},{default:Object(n["ab"])((function(t){return[l,Object(n["m"])("span",null,Object(n["Q"])(t.row.display_time),1)]})),_:1})]})),_:1},8,["data"]),[[d,r.listLoading]])])}var r=a("b775");function b(t){return Object(r["a"])({url:"/vue-admin-template-plus/table/list",method:"get",params:t})}var u={data:function(){return{list:null,listLoading:!0}},created:function(){this.fetchData()},methods:{statusFilter:function(t){var e={published:"success",draft:"gray",deleted:"danger"};return e[t]},fetchData:function(){var t=this;this.listLoading=!0,b().then((function(e){t.list=e.data.items,t.listLoading=!1}))}}};u.render=i;e["default"]=u}}]);