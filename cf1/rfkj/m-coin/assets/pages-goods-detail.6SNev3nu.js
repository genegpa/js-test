import{b as e,c as l,w as a,e as u,m as t,f as s,h as i,s as d,i as n,T as o,P as c,r,a as m,d as f,F as p,t as _,u as h,l as v,A as g,O as b,k as V,L as y,V as x,K as k,M as S,z as w,W as F}from"./index-B55G5URM.js";import{_ as B}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{r as N}from"./uni-icons.ou8sTe52.js";import{_ as U}from"./uni-easyinput.HRb2run9.js";const $=B({name:"UniNumberBox",emits:["change","input","update:modelValue","blur","focus"],props:{value:{type:[Number,String],default:1},modelValue:{type:[Number,String],default:1},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},background:{type:String,default:"#f5f5f5"},color:{type:String,default:"#333"},disabled:{type:Boolean,default:!1},width:{type:Number,default:40}},data:()=>({inputValue:0}),watch:{value(e){this.inputValue=+e},modelValue(e){this.inputValue=+e}},computed:{widthWithPx(){return this.width+"px"}},created(){1===this.value&&(this.inputValue=+this.modelValue),1===this.modelValue&&(this.inputValue=+this.value)},methods:{_calcValue(e){if(this.disabled)return;const l=this._getDecimalScale();let a=this.inputValue*l,u=this.step*l;if("minus"===e){if(a-=u,a<this.min*l)return;a>this.max*l&&(a=this.max*l)}if("plus"===e){if(a+=u,a>this.max*l)return;a<this.min*l&&(a=this.min*l)}this.inputValue=(a/l).toFixed(String(l).length-1),this.$emit("input",+this.inputValue),this.$emit("update:modelValue",+this.inputValue),this.$emit("change",+this.inputValue)},_getDecimalScale(){let e=1;return~~this.step!==this.step&&(e=Math.pow(10,String(this.step).split(".")[1].length)),e},_onBlur(e){this.$emit("blur",e);let l=e.detail.value;if(isNaN(l))return void(this.inputValue=this.value);l=+l,l>this.max?l=this.max:l<this.min&&(l=this.min);const a=this._getDecimalScale();this.inputValue=l.toFixed(String(a).length-1),this.$emit("input",+this.inputValue),this.$emit("update:modelValue",+this.inputValue),this.$emit("change",+this.inputValue)},_onFocus(e){this.$emit("focus",e)}}},[["render",function(c,r,m,f,p,_){const h=d,v=n,g=o;return e(),l(v,{class:"uni-numbox"},{default:a((()=>[u(v,{onClick:r[0]||(r[0]=e=>_._calcValue("minus")),class:"uni-numbox__minus uni-numbox-btns",style:t({background:m.background})},{default:a((()=>[u(h,{class:s(["uni-numbox--text",{"uni-numbox--disabled":p.inputValue<=m.min||m.disabled}]),style:t({color:m.color})},{default:a((()=>[i("-")])),_:1},8,["class","style"])])),_:1},8,["style"]),u(g,{disabled:m.disabled,onFocus:_._onFocus,onBlur:_._onBlur,class:"uni-numbox__value",type:m.step<1?"digit":"number",modelValue:p.inputValue,"onUpdate:modelValue":r[1]||(r[1]=e=>p.inputValue=e),style:t({background:m.background,color:m.color,width:_.widthWithPx})},null,8,["disabled","onFocus","onBlur","type","modelValue","style"]),u(v,{onClick:r[2]||(r[2]=e=>_._calcValue("plus")),class:"uni-numbox__plus uni-numbox-btns",style:t({background:m.background})},{default:a((()=>[u(h,{class:s(["uni-numbox--text",{"uni-numbox--disabled":p.inputValue>=m.max||m.disabled}]),style:t({color:m.color})},{default:a((()=>[i("+")])),_:1},8,["class","style"])])),_:1},8,["style"])])),_:1})}],["__scopeId","data-v-91750ff9"]]),j=B({__name:"detail",props:["gid"],setup(t){const s=t;let o=(new c).goodsList.find((e=>e.gid==s.gid));console.log("goodsStore:",o.gid);const B=r("0"),j=e=>{B.value=e.detail.value,console.log("changeSpec:",e.detail.value)},q=r(1),C=r(""),D=r(""),I=r(""),P=r(""),W=r(""),A=r(""),K=r(!1),L=e=>{const l=e.detail.value;K.value=0!=l.length,console.log("changeAgree:",K.value)},M=e=>{C.value&&D.value&&I.value&&P.value&&W.value?K.value?(o.specs[B.value].stock-=q.value,console.log("onBuy:",o.specs[B.value].stock),g({title:"购买成功！",icon:"none"}),b()):g({title:"请同意协议",icon:"none"}):g({icon:"none",title:"请填写相关信息"})};return(t,s)=>{const c=n,r=d,g=V,b=F,K=y,Q=x,Z=N(m("uni-number-box"),$),z=N(m("uni-easyinput"),U),O=k,T=S,E=w;return e(),f(p,null,[u(c,{class:"goods-info"},{default:a((()=>[u(c,{class:"left"},{default:a((()=>[u(c,{class:"title"},{default:a((()=>[i(_(h(o).title),1)])),_:1}),u(c,{class:"desc"},{default:a((()=>[i(_(h(o).specs[B.value].desc),1)])),_:1}),u(c,{class:"desc"},{default:a((()=>[i(_(h(o).region),1)])),_:1})])),_:1}),u(c,{class:"right"},{default:a((()=>[u(c,{class:"price"},{default:a((()=>[u(r,{class:"flag"},{default:a((()=>[i("￥")])),_:1}),i(_(h(o).specs[B.value].price),1)])),_:1}),u(c,{class:"type"},{default:a((()=>[i(" 当面交易 ")])),_:1}),u(c,{class:"stock"},{default:a((()=>[i(" 库存："+_(h(o).specs[B.value].stock)+"件 ",1)])),_:1})])),_:1})])),_:1}),u(c,{class:"seller-info"},{default:a((()=>[u(g,{class:"header",mode:"aspectFill",src:"/cf1/rfkj/m-coin/assets/wow-hZejZKdI.png"}),u(c,{class:"right"},{default:a((()=>[u(c,{class:"up"},{default:a((()=>[u(c,{class:"name"},{default:a((()=>[i(" 飓风网游 ")])),_:1}),u(c,{class:"score"},{default:a((()=>[i(" 综合评分：4.95 ")])),_:1})])),_:1}),u(c,{class:"down"},{default:a((()=>[u(r,null,{default:a((()=>[i("成交率：97.80%｜")])),_:1}),u(r,null,{default:a((()=>[i("发货速度：3分钟｜")])),_:1}),u(r,null,{default:a((()=>[i("成交单数：6654笔")])),_:1})])),_:1})])),_:1})])),_:1}),u(c,{class:"buy-info"},{default:a((()=>[u(c,{class:"title"},{default:a((()=>[i(" 购买信息 ")])),_:1}),u(c,{class:"spec line"},{default:a((()=>[u(c,{class:"left"},{default:a((()=>[i(" 商品规格 ")])),_:1}),u(Q,{class:"right",onChange:j},{default:a((()=>[(e(!0),f(p,null,v(h(o).specs,((t,s)=>(e(),l(K,{class:"item",key:s},{default:a((()=>[u(b,{class:"circle",color:"#F5173B",value:s.toString(),checked:0==s},null,8,["value","checked"]),u(r,null,{default:a((()=>[i(_(t.coin+"金"+t.price+"元"),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1}),u(c,{class:"buy-item line"},{default:a((()=>[u(c,null,{default:a((()=>[i(" 购买件数 ")])),_:1}),u(c,{class:"right"},{default:a((()=>[u(Z,{class:"number",modelValue:q.value,"onUpdate:modelValue":s[0]||(s[0]=e=>q.value=e),min:1,max:h(o).specs[B.value].stock,color:"#F5173B"},null,8,["modelValue","max"]),i("可购件数"+_(h(o).specs[B.value].stock)+"件 ",1)])),_:1})])),_:1}),u(c,{class:"buy-item line"},{default:a((()=>[u(c,null,{default:a((()=>[i(" 购买数量 ")])),_:1}),u(c,null,{default:a((()=>[i(_(q.value*h(o).specs[B.value].coin)+"金 ",1)])),_:1})])),_:1}),u(c,{class:"buy-item"},{default:a((()=>[u(c,null,{default:a((()=>[i(" 金额 ")])),_:1}),u(c,null,{default:a((()=>[i(_(q.value*h(o).specs[B.value].price)+"元 ",1)])),_:1})])),_:1})])),_:1}),u(c,{class:"address-info"},{default:a((()=>[u(c,{class:"title"},{default:a((()=>[i(" 收货信息 ")])),_:1}),u(c,{class:"item line"},{default:a((()=>[u(c,{class:"head required"},{default:a((()=>[i(" 收货角色 ")])),_:1}),u(c,{class:"value"},{default:a((()=>[u(z,{modelValue:C.value,"onUpdate:modelValue":s[1]||(s[1]=e=>C.value=e),placeholder:"请填写收货角色职业"},null,8,["modelValue"])])),_:1})])),_:1}),u(c,{class:"item line"},{default:a((()=>[u(c,{class:"head required"},{default:a((()=>[i(" 收货角色昵称 ")])),_:1}),u(c,{class:"value"},{default:a((()=>[u(z,{modelValue:D.value,"onUpdate:modelValue":s[2]||(s[2]=e=>D.value=e),placeholder:"请填写收货角色昵称"},null,8,["modelValue"])])),_:1})])),_:1}),u(c,{class:"item line"},{default:a((()=>[u(c,{class:"head required"},{default:a((()=>[i(" 收货角色等级 ")])),_:1}),u(c,{class:"value"},{default:a((()=>[u(z,{modelValue:I.value,"onUpdate:modelValue":s[3]||(s[3]=e=>I.value=e),type:"number",placeholder:"请填写收货角色等级"},null,8,["modelValue"])])),_:1})])),_:1}),u(c,{class:"item line"},{default:a((()=>[u(c,{class:"head required"},{default:a((()=>[i(" 联系电话 ")])),_:1}),u(c,{class:"value"},{default:a((()=>[u(z,{modelValue:P.value,"onUpdate:modelValue":s[4]||(s[4]=e=>P.value=e),type:"number",placeholder:"请输入手机号"},null,8,["modelValue"])])),_:1})])),_:1}),u(c,{class:"item line"},{default:a((()=>[u(c,{class:"head required"},{default:a((()=>[i(" QQ号 ")])),_:1}),u(c,{class:"value"},{default:a((()=>[u(z,{modelValue:W.value,"onUpdate:modelValue":s[5]||(s[5]=e=>W.value=e),type:"number",placeholder:"请输入手机号"},null,8,["modelValue"])])),_:1})])),_:1}),u(c,{class:"item"},{default:a((()=>[u(c,{class:"head"},{default:a((()=>[i(" 备注 ")])),_:1}),u(c,{class:"value"},{default:a((()=>[u(z,{modelValue:A.value,"onUpdate:modelValue":s[6]||(s[6]=e=>A.value=e),placeholder:"请填写留言"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),u(c,{class:"bottom"}),u(c,{class:"bottom-buy"},{default:a((()=>[u(c,{class:"agreement"},{default:a((()=>[u(T,{onChange:L},{default:a((()=>[u(K,null,{default:a((()=>[u(O,{value:"agree",style:{transform:"scale(0.7)"}})])),_:1})])),_:1}),u(r,null,{default:a((()=>[i("已阅读并同意")])),_:1}),u(E,{url:"/pages/login/agreement"},{default:a((()=>[i(" 《用户协议》 ")])),_:1})])),_:1}),u(c,{class:"buy"},{default:a((()=>[u(c,{class:"price"},{default:a((()=>[u(r,{class:"flag"},{default:a((()=>[i("￥")])),_:1}),i(_(q.value*h(o).specs[B.value].price),1)])),_:1}),u(c,{class:"btn",onClick:M},{default:a((()=>[i("立即购买")])),_:1})])),_:1})])),_:1})],64)}}},[["__scopeId","data-v-fc7c9988"]]);export{j as default};
