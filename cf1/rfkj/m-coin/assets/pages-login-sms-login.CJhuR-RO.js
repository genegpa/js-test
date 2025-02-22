import{ag as t,b as e,c as s,w as o,m as n,h as a,t as l,x as u,e as i,D as d,i as c,r,B as h,a as m,g as f,v as y,C as p,ad as _,ae as w,af as g,ac as v,a6 as S}from"./index-D2stlVAZ.js";import{_ as b}from"./uni-easyinput.BtZkK2D6.js";import{r as x}from"./uni-icons.CKTOq7Jq.js";import{_ as C}from"./_plugin-vue_export-helper.BCo6x5W8.js";const k={en:{"uni-countdown.day":"day","uni-countdown.h":"h","uni-countdown.m":"m","uni-countdown.s":"s"},"zh-Hans":{"uni-countdown.day":"天","uni-countdown.h":"时","uni-countdown.m":"分","uni-countdown.s":"秒"},"zh-Hant":{"uni-countdown.day":"天","uni-countdown.h":"時","uni-countdown.m":"分","uni-countdown.s":"秒"}},{t:D}=t(k);const T=C({name:"UniCountdown",emits:["timeup"],props:{showDay:{type:Boolean,default:!0},showHour:{type:Boolean,default:!0},showMinute:{type:Boolean,default:!0},showColon:{type:Boolean,default:!0},start:{type:Boolean,default:!0},backgroundColor:{type:String,default:""},color:{type:String,default:"#333"},fontSize:{type:Number,default:14},splitorColor:{type:String,default:"#333"},day:{type:Number,default:0},hour:{type:Number,default:0},minute:{type:Number,default:0},second:{type:Number,default:0},timestamp:{type:Number,default:0}},data:()=>({timer:null,syncFlag:!1,d:"00",h:"00",i:"00",s:"00",leftTime:0,seconds:0}),computed:{dayText:()=>D("uni-countdown.day"),hourText:t=>D("uni-countdown.h"),minuteText:t=>D("uni-countdown.m"),secondText:t=>D("uni-countdown.s"),timeStyle(){const{color:t,backgroundColor:e,fontSize:s}=this;return{color:t,backgroundColor:e,fontSize:`${s}px`,width:22*s/14+"px",lineHeight:20*s/14+"px",borderRadius:3*s/14+"px"}},splitorStyle(){const{splitorColor:t,fontSize:e,backgroundColor:s}=this;return{color:t,fontSize:12*e/14+"px",margin:s?4*e/14+"px":""}}},watch:{day(t){this.changeFlag()},hour(t){this.changeFlag()},minute(t){this.changeFlag()},second(t){this.changeFlag()},start:{immediate:!0,handler(t,e){if(t)this.startData();else{if(!e)return;clearInterval(this.timer)}}}},created:function(t){this.seconds=this.toSeconds(this.timestamp,this.day,this.hour,this.minute,this.second),this.countDown()},unmounted(){clearInterval(this.timer)},methods:{toSeconds:(t,e,s,o,n)=>t?t-parseInt((new Date).getTime()/1e3,10):60*e*60*24+60*s*60+60*o+n,timeUp(){clearInterval(this.timer),this.$emit("timeup")},countDown(){let t=this.seconds,[e,s,o,n]=[0,0,0,0];t>0?(e=Math.floor(t/86400),s=Math.floor(t/3600)-24*e,o=Math.floor(t/60)-24*e*60-60*s,n=Math.floor(t)-24*e*60*60-60*s*60-60*o):this.timeUp(),e<10&&(e="0"+e),s<10&&(s="0"+s),o<10&&(o="0"+o),n<10&&(n="0"+n),this.d=e,this.h=s,this.i=o,this.s=n},startData(){if(this.seconds=this.toSeconds(this.timestamp,this.day,this.hour,this.minute,this.second),this.seconds<=0)return this.seconds=this.toSeconds(0,0,0,0,0),void this.countDown();clearInterval(this.timer),this.countDown(),this.timer=setInterval((()=>{this.seconds--,this.seconds<0?this.timeUp():this.countDown()}),1e3)},update(){this.startData()},changeFlag(){this.syncFlag||(this.seconds=this.toSeconds(this.timestamp,this.day,this.hour,this.minute,this.second),this.startData(),this.syncFlag=!0)}}},[["render",function(t,r,h,m,f,y){const p=d,_=c;return e(),s(_,{class:"uni-countdown"},{default:o((()=>[h.showDay?(e(),s(p,{key:0,style:n([y.timeStyle]),class:"uni-countdown__number"},{default:o((()=>[a(l(f.d),1)])),_:1},8,["style"])):u("",!0),h.showDay?(e(),s(p,{key:1,style:n([y.splitorStyle]),class:"uni-countdown__splitor"},{default:o((()=>[a(l(y.dayText),1)])),_:1},8,["style"])):u("",!0),h.showHour?(e(),s(p,{key:2,style:n([y.timeStyle]),class:"uni-countdown__number"},{default:o((()=>[a(l(f.h),1)])),_:1},8,["style"])):u("",!0),h.showHour?(e(),s(p,{key:3,style:n([y.splitorStyle]),class:"uni-countdown__splitor"},{default:o((()=>[a(l(h.showColon?":":y.hourText),1)])),_:1},8,["style"])):u("",!0),h.showMinute?(e(),s(p,{key:4,style:n([y.timeStyle]),class:"uni-countdown__number"},{default:o((()=>[a(l(f.i),1)])),_:1},8,["style"])):u("",!0),h.showMinute?(e(),s(p,{key:5,style:n([y.splitorStyle]),class:"uni-countdown__splitor"},{default:o((()=>[a(l(h.showColon?":":y.minuteText),1)])),_:1},8,["style"])):u("",!0),i(p,{style:n([y.timeStyle]),class:"uni-countdown__number"},{default:o((()=>[a(l(f.s),1)])),_:1},8,["style"]),h.showColon?u("",!0):(e(),s(p,{key:6,style:n([y.splitorStyle]),class:"uni-countdown__splitor"},{default:o((()=>[a(l(y.secondText),1)])),_:1},8,["style"]))])),_:1})}],["__scopeId","data-v-8f544fc2"]]),F=C({__name:"sms-login",setup(t){const n=r(!1),l=r(6),u=()=>{n.value=!1,console.log("smsTimeup:")},C=()=>{n.value=!0,console.log("getSms:")},k=r(""),D=r(""),F=r(!1),z=h((()=>""==k.value||""==D.value)),I=()=>{console.log("onLogin:",F.value,z.value),F.value||p({title:"请同意协议",icon:"none"})},M=t=>{const e=t.detail.value;F.value=0!=e.length,console.log("changeAgree:",F.value)};return(t,r)=>{const h=d,p=c,F=x(m("uni-easyinput"),b),j=x(m("uni-countdown"),T),B=_,H=w,N=g,U=v,V=S;return e(),s(p,{class:"login"},{default:o((()=>[i(p,{class:"title"},{default:o((()=>[i(h,null,{default:o((()=>[a("欢迎来到rfkj交易平台")])),_:1})])),_:1}),i(p,{class:"input"},{default:o((()=>[i(p,null,{default:o((()=>[i(F,{modelValue:k.value,"onUpdate:modelValue":r[0]||(r[0]=t=>k.value=t),placeholder:"请输入手机号"},null,8,["modelValue"])])),_:1}),i(p,null,{default:o((()=>[i(F,{modelValue:D.value,"onUpdate:modelValue":r[1]||(r[1]=t=>D.value=t),placeholder:"请输入验证码"},null,8,["modelValue"]),i(p,{class:"sms"},{default:o((()=>[f(i(p,null,{default:o((()=>[i(j,{class:"cd",start:n.value,second:l.value,onTimeup:u,color:"#00a3ff","show-day":!1,"show-hour":!1,"show-minute":!1},null,8,["start","second"]),i(p,null,{default:o((()=>[a("s")])),_:1})])),_:1},512),[[y,n.value]]),f(i(h,{onClick:C},{default:o((()=>[a("获取验证码")])),_:1},512),[[y,!n.value]])])),_:1})])),_:1})])),_:1}),i(p,{class:"agreement"},{default:o((()=>[i(N,{onChange:M},{default:o((()=>[i(H,null,{default:o((()=>[i(B,{value:"agree",color:"#FFCC33",style:{transform:"scale(0.7)"}})])),_:1})])),_:1}),i(h,null,{default:o((()=>[a("已阅读并同意")])),_:1}),i(U,{url:"/pages/login/agreement"},{default:o((()=>[a(" 《用户协议》 ")])),_:1})])),_:1}),i(V,{onClick:I,disabled:z.value},{default:o((()=>[a("登录")])),_:1},8,["disabled"]),i(p,{class:"bottom"},{default:o((()=>[i(U,{url:"/pages/login/login"},{default:o((()=>[i(h,{class:"customicons zhuanfa"}),i(h,null,{default:o((()=>[a("账号密码登录")])),_:1})])),_:1})])),_:1})])),_:1})}}},[["__scopeId","data-v-aa0a9c99"]]);export{F as default};
