import{m as e,U as a,r as l,J as s,a as o,c as u,w as t,i as n,b as r,e as d,g as i,A as c,D as m,s as p,K as f,L as g,M as _,z as v,x as h}from"./index-CKt6jF3p.js";import{_ as j}from"./uni-easyinput.2tw6L01w.js";import{r as V}from"./uni-icons.irkbJs4x.js";import{h as b}from"./http.ByV_j1wa.js";import{_ as y}from"./_plugin-vue_export-helper.BCo6x5W8.js";const w=y({__name:"login",setup(y){const w=a(),x=l(""),C=l(""),k=l(!1),L=s((()=>""==x.value||""==C.value)),U=async()=>{if(console.log("onLogin:",k.value,L.value),!k.value)return void c({title:"请同意协议",icon:"none"});const a=await(l={username:x.value,userpwd:C.value},b({method:"POST",url:e+"/user/login",data:l}));var l;w.setProfile(a.data),console.log("onLogin:res=",w.profile.token),m({url:"/pages/home/home"}),c({icon:"none",title:"已成功登录！"})},z=e=>{const a=e.detail.value;k.value=0!=a.length,console.log("changeAgree:",k.value)};return(e,a)=>{const l=p,s=n,c=V(o("uni-easyinput"),j),m=f,b=g,y=_,w=v,k=h;return r(),u(s,{class:"login"},{default:t((()=>[d(s,{class:"title"},{default:t((()=>[d(l,null,{default:t((()=>[i("欢迎来到 仁发科技 交易平台")])),_:1})])),_:1}),d(s,{class:"input"},{default:t((()=>[d(c,{modelValue:x.value,"onUpdate:modelValue":a[0]||(a[0]=e=>x.value=e),placeholder:"请输入账号"},null,8,["modelValue"]),d(c,{modelValue:C.value,"onUpdate:modelValue":a[1]||(a[1]=e=>C.value=e),placeholder:"请输入密码",type:"password"},null,8,["modelValue"])])),_:1}),d(s,{class:"agreement"},{default:t((()=>[d(y,{onChange:z},{default:t((()=>[d(b,null,{default:t((()=>[d(m,{value:"agree",color:"#FFCC33",style:{transform:"scale(0.7)"}})])),_:1})])),_:1}),d(l,null,{default:t((()=>[i("已阅读并同意")])),_:1}),d(w,{url:"/pages/login/agreement"},{default:t((()=>[i(" 《用户协议》 ")])),_:1})])),_:1}),d(k,{onClick:U,disabled:L.value},{default:t((()=>[i("登录")])),_:1},8,["disabled"]),d(s,{class:"bottom"},{default:t((()=>[d(w,{url:"/pages/login/sms-login"},{default:t((()=>[d(l,{class:"customicons zhuanfa"}),d(l,null,{default:t((()=>[i("短信验证码登录")])),_:1})])),_:1})])),_:1})])),_:1})}}},[["__scopeId","data-v-060b3dc2"]]);export{w as default};
