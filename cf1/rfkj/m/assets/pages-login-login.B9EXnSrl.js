import{q as a,s as e,u as l,r as s,ad as o,a as u,c as n,b as t,i as d,o as r,d as i,e as c,O as p,_ as m,g,ae as f,af as _,ag as v,ab as h,h as b}from"./index-CcZ1s_RZ.js";import{_ as V}from"./uni-easyinput.DihjRpls.js";import{r as j}from"./uni-app.es.BELXb6AH.js";import{_ as y}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uni-icons.DhL5FtEU.js";const C=y({__name:"login",setup(y){const C=l(),w=s(""),x=s(""),k=s(!1),F=o((()=>""==w.value||""==x.value)),L=async()=>{if(console.log("onLogin:",k.value,F.value),!k.value)return void p({title:"请同意协议",icon:"none"});const l=await(s={username:w.value,userpwd:x.value},a({method:"POST",url:e+"/user/login",data:s}));var s;C.setProfile(l.data),console.log("onLogin:res=",C.profile.token),m({url:"/pages/home/home"})},O=a=>{const e=a.detail.value;k.value=0!=e.length,console.log("changeAgree:",k.value)};return(a,e)=>{const l=g,s=d,o=j(u("uni-easyinput"),V),p=f,m=_,y=v,C=h,k=b;return r(),n(s,{class:"login"},{default:t((()=>[i(s,{class:"title"},{default:t((()=>[i(l,null,{default:t((()=>[c("欢迎来到 仁发科技 交易平台")])),_:1})])),_:1}),i(s,{class:"input"},{default:t((()=>[i(o,{modelValue:w.value,"onUpdate:modelValue":e[0]||(e[0]=a=>w.value=a),placeholder:"请输入账号"},null,8,["modelValue"]),i(o,{modelValue:x.value,"onUpdate:modelValue":e[1]||(e[1]=a=>x.value=a),placeholder:"请输入密码",type:"password"},null,8,["modelValue"])])),_:1}),i(s,{class:"agreement"},{default:t((()=>[i(y,{onChange:O},{default:t((()=>[i(m,null,{default:t((()=>[i(p,{value:"agree",color:"#FFCC33",style:{transform:"scale(0.7)"}})])),_:1})])),_:1}),i(l,null,{default:t((()=>[c("已阅读并同意")])),_:1}),i(C,{url:"/pages/login/agreement"},{default:t((()=>[c(" 《用户协议》 ")])),_:1})])),_:1}),i(k,{onClick:L,disabled:F.value},{default:t((()=>[c("登录")])),_:1},8,["disabled"]),i(s,{class:"bottom"},{default:t((()=>[i(C,{url:"/pages/login/sms-login"},{default:t((()=>[i(l,{class:"customicons zhuanfa"}),i(l,null,{default:t((()=>[c("短信验证码登录")])),_:1})])),_:1})])),_:1})])),_:1})}}},[["__scopeId","data-v-3412b60e"]]);export{C as default};
