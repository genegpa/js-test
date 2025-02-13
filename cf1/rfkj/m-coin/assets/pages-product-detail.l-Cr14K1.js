import{b as e,c as l,w as t,d as s,F as a,k as n,n as c,l as u,e as o,g as r,t as i,s as d,i as f,U as _,G as p,r as m,a as y,u as g,f as x,v,q as C,A as h,ak as k,al as I,x as b,af as z,j as T,am as w}from"./index-CKt6jF3p.js";import{r as F,_ as A}from"./uni-icons.irkbJs4x.js";import{_ as S}from"./_plugin-vue_export-helper.BCo6x5W8.js";const j=S({name:"UniSegmentedControl",emits:["clickItem"],props:{current:{type:Number,default:0},values:{type:Array,default:()=>[]},activeColor:{type:String,default:"#2979FF"},inActiveColor:{type:String,default:"transparent"},styleType:{type:String,default:"button"}},data:()=>({currentIndex:0}),watch:{current(e){e!==this.currentIndex&&(this.currentIndex=e)}},computed:{},created(){this.currentIndex=this.current},methods:{_onClick(e){this.currentIndex!==e&&(this.currentIndex=e,this.$emit("clickItem",{currentIndex:e}))}}},[["render",function(_,p,m,y,g,x){const v=d,C=f;return e(),l(C,{class:c([["text"===m.styleType?"segmented-control--text":"segmented-control--button"],"segmented-control"]),style:u({borderColor:"text"===m.styleType?"":m.activeColor})},{default:t((()=>[(e(!0),s(a,null,n(m.values,((s,a)=>(e(),l(C,{class:c([["text"===m.styleType?"":"segmented-control__item--button",0===a&&"button"===m.styleType?"segmented-control__item--button--first":"",a===m.values.length-1&&"button"===m.styleType?"segmented-control__item--button--last":""],"segmented-control__item"]),key:a,style:u({backgroundColor:a===g.currentIndex&&"button"===m.styleType?m.activeColor:"button"===m.styleType?m.inActiveColor:"transparent",borderColor:a===g.currentIndex&&"text"===m.styleType||"button"===m.styleType?m.activeColor:m.inActiveColor}),onClick:e=>x._onClick(a)},{default:t((()=>[o(C,null,{default:t((()=>[o(v,{style:u({color:a===g.currentIndex?"text"===m.styleType?m.activeColor:"#fff":"text"===m.styleType?"#000":m.activeColor}),class:c(["segmented-control__text","text"===m.styleType&&a===g.currentIndex?"segmented-control__item--text":""])},{default:t((()=>[r(i(s),1)])),_:2},1032,["style","class"])])),_:2},1024)])),_:2},1032,["class","style","onClick"])))),128))])),_:1},8,["class","style"])}],["__scopeId","data-v-754001e5"]]),L=S({__name:"detail",props:["itemCode"],setup(u){const S=new _,L=u,U=new p,q=U.gameList.find((e=>e.gno==L.itemCode));console.log("detail:",L.itemCode);const B=m(0),D=e=>{B.value=e.detail.current,console.log("changeImg:",B.value)},G=e=>{console.log("previewImage:",e),z({current:e,urls:q.screenshot})},N=m(0),$=m(["账号详情","交易须知"]),E=e=>{N.value!==e.currentIndex&&(N.value=e.currentIndex),console.log("tapDetailItem:",N.value)},H=()=>{console.log("onStoreIn:")},J=()=>{if(console.log("onBuy:"),!S.profile.token)return void C({url:"/pages/login/login"});const e=U.gameList.findIndex((e=>e.gno==L.itemCode));U.gameList.splice(e,1),h({icon:"none",title:"购买成功！"}),k()};return(u,_)=>{const p=T,m=w,C=I,h=f,k=d,z=F(y("uni-icons"),A),S=F(y("uni-segmented-control"),j),L=b;return e(),s(a,null,[o(h,{class:"product"},{default:t((()=>[o(C,{current:B.value,onChange:D,circular:""},{default:t((()=>[(e(!0),s(a,null,n(g(q).screenshot,((s,a)=>(e(),l(m,{key:a},{default:t((()=>[o(p,{onClick:e=>G(a),mode:"aspectFill",src:s},null,8,["onClick","src"])])),_:2},1024)))),128))])),_:1},8,["current"]),o(h,{class:"thumb"},{default:t((()=>[(e(!0),s(a,null,n(g(q).screenshot,((t,s)=>(e(),l(p,{mode:"aspectFill",onClick:e=>B.value=s,key:s,src:t,class:c(s==B.value?" active":"")},null,8,["onClick","src","class"])))),128))])),_:1}),o(h,{class:"price"},{default:t((()=>[o(k,null,{default:t((()=>[r("￥")])),_:1}),o(k,null,{default:t((()=>[r(i(g(q).price),1)])),_:1})])),_:1}),o(h,{class:"title"},{default:t((()=>[o(k,null,{default:t((()=>[r(i(g(q).title),1)])),_:1})])),_:1})])),_:1}),o(h,{class:"account"},{default:t((()=>[o(h,{class:"title"},{default:t((()=>[o(k,null,{default:t((()=>[r("仁发科技 帐号购买流程（含包赔服务）")])),_:1}),o(z,{type:"right",size:"28rpx",color:"#000"})])),_:1}),o(h,{class:"info"},{default:t((()=>[o(h,{class:"info-item"},{default:t((()=>[o(k,null,{default:t((()=>[r("商品编号：")])),_:1}),o(k,null,{default:t((()=>[r(i(g(q).gno),1)])),_:1})])),_:1}),o(h,{class:"info-item"},{default:t((()=>[o(k,null,{default:t((()=>[r("游戏大区：")])),_:1}),o(k,null,{default:t((()=>[r(i(g(q).game_name+"/"+g(q).area_name+"/"+g(q).server_name),1)])),_:1})])),_:1}),o(h,{class:"info-item"},{default:t((()=>[o(k,null,{default:t((()=>[r("账号来源：")])),_:1}),o(k,null,{default:t((()=>[r(i(g(q).goods_source),1)])),_:1})])),_:1}),o(h,{class:"info-item"},{default:t((()=>[o(k,null,{default:t((()=>[r("发布时间：")])),_:1}),o(k,null,{default:t((()=>[r(i(g(q).create_time),1)])),_:1})])),_:1}),o(h,{class:"info-item"},{default:t((()=>[o(k,null,{default:t((()=>[r("商品库存：")])),_:1}),o(k,null,{default:t((()=>[r(i(g(q).remain_number),1)])),_:1})])),_:1})])),_:1})])),_:1}),o(h,{class:"detail"},{default:t((()=>[o(S,{current:N.value,values:$.value,onClickItem:E,"style-type":"text","active-color":"#f9a138"},null,8,["current","values"]),x(o(h,{class:"imgs"},{default:t((()=>[(e(!0),s(a,null,n(g(q).screenshot,((t,s)=>(e(),l(p,{onClick:e=>G(s),mode:"aspectFill",key:s,src:t},null,8,["onClick","src"])))),128))])),_:1},512),[[v,0==N.value]]),x(o(h,{class:"guide"},{default:t((()=>[o(h,{class:"title"},{default:t((()=>[r(" 交易流程 ")])),_:1}),o(h,{class:"process"},{default:t((()=>[o(h,{class:"step"},{default:t((()=>[o(k,null,{default:t((()=>[r("1")])),_:1}),o(k,null,{default:t((()=>[r("选择商品")])),_:1}),o(z,{type:"arrow-right",size:"28rpx",color:"#000"})])),_:1}),o(h,{class:"step"},{default:t((()=>[o(k,null,{default:t((()=>[r("2")])),_:1}),o(k,null,{default:t((()=>[r("进行付款")])),_:1}),o(z,{type:"arrow-right",size:"28rpx",color:"#000"})])),_:1}),o(h,{class:"step"},{default:t((()=>[o(k,null,{default:t((()=>[r("3")])),_:1}),o(k,null,{default:t((()=>[r("联系商家进行验号")])),_:1}),o(z,{type:"arrow-right",size:"28rpx",color:"#000"})])),_:1}),o(h,{class:"step"},{default:t((()=>[o(k,null,{default:t((()=>[r("4")])),_:1}),o(k,null,{default:t((()=>[r("协商好进行帐号信息绑定")])),_:1}),o(z,{type:"arrow-right",size:"28rpx",color:"#000"})])),_:1}),o(h,{class:"step"},{default:t((()=>[o(k,null,{default:t((()=>[r("5")])),_:1}),o(k,null,{default:t((()=>[r("完成收货")])),_:1})])),_:1})])),_:1}),o(h,{class:"title"},{default:t((()=>[r(" 交易须知 ")])),_:1}),o(h,{class:"tip"},{default:t((()=>[o(h,{class:"item"},{default:t((()=>[o(z,{type:"smallcircle-filled",size:"28rpx",color:"#f75c04"}),o(k,null,{default:t((()=>[r("请确保您拥有所交易游戏帐号的合法所有权，并已获得所有必要的授权。")])),_:1})])),_:1}),o(h,{class:"item"},{default:t((()=>[o(z,{type:"smallcircle-filled",size:"28rpx",color:"#f75c04"}),o(k,null,{default:t((()=>[r("请确保您提供的所有帐号信息真实、准确，包括帐号等级、装备、游戏货币等。")])),_:1})])),_:1}),o(h,{class:"item"},{default:t((()=>[o(z,{type:"smallcircle-filled",size:"28rpx",color:"#f75c04"}),o(k,null,{default:t((()=>[r("为保障交易安全，建议您仅通过 仁发科技 官方平台进行交易。")])),_:1})])),_:1}),o(h,{class:"item"},{default:t((()=>[o(z,{type:"smallcircle-filled",size:"28rpx",color:"#f75c04"}),o(k,null,{default:t((()=>[r("如遇交易纠纷，请立即通过平台内置的投诉系统向我们报告。")])),_:1})])),_:1}),o(h,{class:"item"},{default:t((()=>[o(z,{type:"smallcircle-filled",size:"28rpx",color:"#f75c04"}),o(k,null,{default:t((()=>[r("严禁任何形式的非法交易行为，包括但不限于使用外挂、盗号、欺诈等。")])),_:1})])),_:1}),o(h,{class:"item"},{default:t((()=>[o(z,{type:"smallcircle-filled",size:"28rpx",color:"#f75c04"}),o(k,null,{default:t((()=>[r("若帐号在交易后被非法找回，我们将协助您进行处理，但请您提供必要的证明材料。")])),_:1})])),_:1}),o(h,{class:"item"},{default:t((()=>[o(z,{type:"smallcircle-filled",size:"28rpx",color:"#f75c04"}),o(k,null,{default:t((()=>[r("我们重视每一位用户的反馈，如有任何建议或问题，欢迎通过平台客服系统与我们联系。")])),_:1})])),_:1}),o(h,{class:"item"},{default:t((()=>[o(z,{type:"smallcircle-filled",size:"28rpx",color:"#f75c04"}),o(k,null,{default:t((()=>[r("仁发科技 不承担因用户违反游戏规则或平台规则导致的任何损失或责任。")])),_:1})])),_:1})])),_:1})])),_:1},512),[[v,1==N.value]])])),_:1}),o(h,{class:"bottom"}),o(h,{class:"account-btns"},{default:t((()=>[o(L,{class:"complaint",onClick:H,size:"mini"},{default:t((()=>[r("投诉")])),_:1}),o(L,{class:"fav",onClick:H,size:"mini"},{default:t((()=>[o(z,{type:"star",size:"28rpx"},{default:t((()=>[r("收藏商品")])),_:1})])),_:1}),o(L,{class:"chat",onClick:H,size:"mini"},{default:t((()=>[o(z,{type:"chat",size:"28rpx",color:"#fff"},{default:t((()=>[r("聊一聊")])),_:1})])),_:1}),o(L,{class:"chat",onClick:J,size:"mini"},{default:t((()=>[r("立即购买")])),_:1})])),_:1})],64)}}},[["__scopeId","data-v-0ccd3db7"]]);export{L as default};
