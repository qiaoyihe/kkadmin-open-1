import{a9 as s}from"./index.0790797b.js";const r=()=>s.get({url:"/user/getUserInfo"}),o=e=>s.request({url:"/user/update",method:"patch",data:e}),u=()=>s.get({url:"/user/token"}),a=e=>s.post({url:"/user/token/add",data:e}),d=e=>s.request({url:"/user/token/update",method:"patch",data:e}),n=e=>s.request({url:"/user/token/delete/"+e,method:"delete"}),p=e=>s.request({method:"patch",url:"/user/password",data:e});export{o as a,d as b,a as c,n as d,p as e,u as g,r as u};
