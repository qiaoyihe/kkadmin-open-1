var k=Object.defineProperty,P=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var I=(e,u,t)=>u in e?k(e,u,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[u]=t,b=(e,u)=>{for(var t in u||(u={}))T.call(u,t)&&I(e,t,u[t]);if(w)for(var t of w(u))M.call(u,t)&&I(e,t,u[t]);return e},C=(e,u)=>P(e,R(u));var g=(e,u,t)=>new Promise((r,n)=>{var h=a=>{try{s(t.next(a))}catch(p){n(p)}},i=a=>{try{s(t.throw(a))}catch(p){n(p)}},s=a=>a.done?r(a.value):Promise.resolve(a.value).then(h,i);s((t=t.apply(e,u)).next())});import{B as j,u as L}from"./useForm.7b212d4b.js";import{V as O,A as m,c1 as $,bd as D,B as V,r as v,u as E,j as W,a1 as _,D as G,a2 as N,a6 as U,w as z,a5 as H}from"./vendor.70c100c8.js";/* empty css               *//* empty css               */import{T as J}from"./index.09b92e6a.js";import{c as y,e as K,f as Q}from"./friend.56e3527d.js";import{G as X,_ as Y}from"./index.0790797b.js";import{B as Z,a as ee}from"./index.1c029dfb.js";const{permCodeList:A}=X(),fe=[{title:"\u540D\u79F0",dataIndex:"name"},{title:"\u5934\u50CF",dataIndex:"avatar",width:100,customRender:({record:e})=>m($,{src:e.avatar})},{title:"\u94FE\u63A5",dataIndex:"link",customRender:({record:e})=>m("a",{href:e.link,target:"target"},e.link)},{title:"\u6807\u7B7E",dataIndex:"tag",width:100,customRender:({record:e})=>{const u=e.tag;if(u.length>=0){const t=u[0].bgColor,r=u[0].name;return m(D,{color:t},()=>r)}else return""}},{title:"\u63CF\u8FF0",dataIndex:"description",width:150},{title:"to",dataIndex:"to",customRender:({record:e})=>m("a",{href:e.to[0].link,target:"target"},e.to[0].userName)},{title:"\u72B6\u6001",dataIndex:"status",width:80,customRender:({record:e})=>{const u=e.status;let t="",r="";return u==="0"?(t="green",r="\u542F\u7528"):u==="1"?(t="yellow",r="\u5F85\u5BA1\u6838"):u==="2"&&(t="red",r="\u5C4F\u853D"),m(D,{color:t},()=>r)}},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",width:180,customRender:({record:e})=>m(J,{value:e.createTime,mode:"date"})}],Fe=[{field:"name",label:"\u53CB\u94FE\u540D\u79F0",component:"Input",colProps:{span:6},labelWidth:"80px"},{field:"link",label:"\u94FE\u63A5",component:"Input",colProps:{span:6},labelWidth:"50px"},{field:"to",label:"\u53BB\u5F80",component:"Input",colProps:{span:6},labelWidth:"50px"},{field:"status",label:"\u72B6\u6001",component:"Select",componentProps:{options:[{label:"\u542F\u7528",value:"0"},{label:"\u5F85\u5BA1\u6838",value:"1"},{label:"\u5C4F\u853D",value:"2"}]},colProps:{span:6},labelWidth:"50px"}],te=[{field:"name",label:"\u53CB\u94FE\u540D\u79F0",component:"Input",required:!0},{field:"avatar",label:"\u5934\u50CF",component:"Input",required:!0},{field:"description",label:"\u63CF\u8FF0",component:"Input",required:!0},{field:"link",label:"\u5730\u5740",component:"Input",required:!0},{field:"tag",label:"\u6807\u7B7E",component:"Select",helpMessage:"\u8F93\u5165\u53BB\u5F80\u540E\u53EF\u663E\u793A\u5BF9\u65B9\u7684\u6807\u7B7E"},{field:"from",label:"\u6765\u81EA",component:"Input",required:!0,ifShow:A.includes("update:allFriendList")||A.includes("add:allFriendList")},{field:"to",label:"\u53BB\u5F80",component:"Input",required:!0,componentProps:({formActionType:e})=>({onChange:O(u=>g(void 0,null,function*(){const r=(yield y({userId:u.target.value})).map(n=>({label:n.name,value:n._id}));e.updateSchema({field:"tag",componentProps:{options:r}})}),500)})},{field:"theme.borderStyle",label:"\u8FB9\u6846\u6837\u5F0F",component:"Input",required:!1},{field:"theme.titleColor",label:"\u6587\u5B57\u989C\u8272",component:"Input",required:!1},{field:"theme.descriptionColor",label:"\u63CF\u8FF0\u989C\u8272",component:"Input",required:!1},{field:"theme.boderAnimation",label:"\u8FB9\u6846\u52A8\u753B",component:"Input",required:!1},{field:"theme.avatarAnimation",label:"\u5934\u50CF\u52A8\u753B",component:"Input",required:!1},{field:"theme.cardStyle",label:"\u5361\u7247\u6837\u5F0F",component:"Input",required:!1,helpMessage:"\u76EE\u524D\u53EA\u652F\u6301card\u548Citem\u54E6"},{field:"theme.variable",label:"\u5176\u4ED6\u53D8\u91CF",helpMessage:"\u4F8B\u5982 primary-color:#000;primary-two:2;",component:"InputTextArea",required:!1},{field:"theme.screenshot",label:"\u5C4F\u5E55\u622A\u56FE",component:"Input",required:!1}],ue=V({name:"MenuDrawer",components:{BasicDrawer:Z,BasicForm:j},emits:["success","register"],setup(e,{emit:u}){const t=v(!0),r=v(null),[n,{resetFields:h,setFieldsValue:i,validate:s,updateSchema:a}]=L({labelWidth:100,schemas:te,showActionButtonGroup:!1,baseColProps:{lg:12,md:24}}),[p,{setDrawerProps:B,closeDrawer:q}]=ee(o=>g(this,null,function*(){if(h(),B({confirmLoading:!1}),t.value=!!(o==null?void 0:o.isUpdate),t.value?r.value=o.record._id:r.value=null,E(t)){const c=o.record.theme;let f={};Object.keys(c).forEach(l=>{f["theme."+l]=c[l]}),y({userId:o.record.to[0]._id}).then(l=>{const d=l.map(F=>({label:F.name,value:F._id}));a({field:"tag",componentProps:{options:d}}),a({field:"to",dynamicDisabled:!0}),i(b(C(b({},o.record),{tag:o.record.tag[0]._id,from:o.record.from[0]._id,to:o.record.to[0]._id}),f))})}else a({field:"to",dynamicDisabled:!1}),i(b({},o.record))})),x=W(()=>E(t)?"\u7F16\u8F91\u53CB\u94FE":"\u6DFB\u52A0\u53CB\u94FE");function S(){return g(this,null,function*(){try{const o=yield s();B({confirmLoading:!0});const c=f=>{let l={_id:r.value,theme:{}};return Object.keys(f).forEach(d=>{const F=f[d];d.includes("theme")?l.theme[d.split(".")[1]]=F:l[d]=F}),l};r.value?yield K(c(o)):(c(o),yield Q(c(o))),q(),u("success")}finally{B({confirmLoading:!1})}})}return{registerDrawer:p,registerForm:n,getTitle:x,handleSubmit:S}}});function re(e,u,t,r,n,h){const i=_("BasicForm"),s=_("BasicDrawer");return G(),N(s,H(e.$attrs,{onRegister:e.registerDrawer,showFooter:"",title:e.getTitle,width:"50%",onOk:e.handleSubmit}),{default:U(()=>[z(i,{onRegister:e.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var oe=Y(ue,[["render",re]]),he=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:oe});export{oe as M,he as a,fe as c,Fe as s};
