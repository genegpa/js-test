import{b as e,c as s,w as t,e as a,h as l,t as i,k as c,i as n,a as d,d as o,F as r,l as p,m,p as u,q as _}from"./index-B55G5URM.js";import{_ as f}from"./uni-easyinput.HRb2run9.js";import{r as x}from"./uni-icons.ou8sTe52.js";import{_ as y}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{h}from"./http.CKGFPW2h.js";const k=y({__name:"gp-indexed-list-item",props:["item"],setup:d=>(o,r)=>{const p=c,m=n;return e(),s(m,{class:"item"},{default:t((()=>[a(p,{class:"icon",src:d.item.icon,mode:"aspectFill"},null,8,["src"]),a(m,{class:"text"},{default:t((()=>[l(i(d.item.name),1)])),_:1})])),_:1})}},[["__scopeId","data-v-d1c399d3"]]),g=y({__name:"gp-indexed-list",props:{list:{type:Array},mytop:{type:String,default:"0px"}},emits:["search","selected"],setup:c=>(_,y)=>{const h=x(d("uni-easyinput"),f),g=n;return e(),s(g,{class:"gp-indexed-list"},{default:t((()=>[a(g,{class:"search"},{default:t((()=>[a(h,{prefixIcon:"search","confirm-type":"search",onConfirm:y[0]||(y[0]=e=>_.$emit("search",e)),placeholder:"请输入关键字"})])),_:1}),a(g,{class:"content"},{default:t((()=>[a(g,{class:"groups"},{default:t((()=>[(e(!0),o(r,null,p(c.list,((c,n)=>(e(),s(g,{class:"group",id:"index_"+c.index,key:n},{default:t((()=>[a(g,{class:"title"},{default:t((()=>[l(i(c.title),1)])),_:2},1024),a(g,{class:"list"},{default:t((()=>[(e(!0),o(r,null,p(c.list,((t,a)=>(e(),s(k,{onClick:e=>_.$emit("selected",t),item:t,key:a},null,8,["onClick","item"])))),128))])),_:2},1024)])),_:2},1032,["id"])))),128))])),_:1}),a(g,{class:"indices",style:m({"--mytop":c.mytop})},{default:t((()=>[(e(!0),o(r,null,p(c.list,((a,c)=>(e(),s(g,{onClick:e=>(e=>{console.log("clickIndex:",e),u({duration:100,selector:`#index_${e}`})})(a.index),class:"index",key:c},{default:t((()=>[l(i(a.index),1)])),_:2},1032,["onClick"])))),128))])),_:1},8,["style"])])),_:1})])),_:1})}},[["__scopeId","data-v-3d804cc0"]]),j=(e=1)=>h({method:"POST",url:_+"/game/itemlist",data:{key:e}});export{g as _,j as r};
