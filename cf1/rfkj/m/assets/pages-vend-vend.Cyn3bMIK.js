import{_ as e}from"./StatusBar.NfvTx3fl.js";import{B as l,a as t,o as a,c as s,b as o,d as c,l as n,j as u,F as i,k as r,m as d,e as p,t as _,g as m,i as v,r as f,h}from"./index-Bta6_aer.js";import{r as x}from"./uni-app.es.Co1SIHr6.js";import{_ as g}from"./uni-icons.jxeB0Nw7.js";import{_ as y}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{_ as C}from"./gp-data-picker.Bu02smCi.js";const k=y({name:"UniSteps",props:{direction:{type:String,default:"row"},activeColor:{type:String,default:"#2979FF"},deactiveColor:{type:String,default:"#B7BDC6"},active:{type:Number,default:0},activeIcon:{type:String,default:"checkbox-filled"},options:{type:Array,default:()=>[]}},data:()=>({heightArr:[]}),mounted(){if("column"===this.direction){let e=this;l().in(this).selectAll(".uni-steps__column-text").boundingClientRect((l=>{e.heightArr=l.map((e=>e.height+1))})).exec()}}},[["render",function(e,l,f,h,y,C){const k=m,w=v,V=x(t("uni-icons"),g);return a(),s(w,{class:"uni-steps"},{default:o((()=>[c(w,{class:n(["column"===f.direction?"uni-steps__column":"uni-steps__row"])},{default:o((()=>[c(w,{class:n(["column"===f.direction?"uni-steps__column-text-container":"uni-steps__row-text-container"])},{default:o((()=>[(a(!0),u(i,null,r(f.options,((e,l)=>(a(),s(w,{key:l,class:n(["column"===f.direction?"uni-steps__column-text":"uni-steps__row-text"])},{default:o((()=>[c(k,{style:d({color:l===f.active?f.activeColor:f.deactiveColor}),class:n(["column"===f.direction?"uni-steps__column-title":"uni-steps__row-title"])},{default:o((()=>[p(_(e.title),1)])),_:2},1032,["style","class"]),c(k,{style:d({color:f.deactiveColor}),class:n(["column"===f.direction?"uni-steps__column-desc":"uni-steps__row-desc"])},{default:o((()=>[p(_(e.desc),1)])),_:2},1032,["style","class"])])),_:2},1032,["class"])))),128))])),_:1},8,["class"]),c(w,{class:n(["column"===f.direction?"uni-steps__column-container":"uni-steps__row-container"])},{default:o((()=>[(a(!0),u(i,null,r(f.options,((e,l)=>(a(),s(w,{class:n(["column"===f.direction?"uni-steps__column-line-item":"uni-steps__row-line-item"]),key:l,style:d({height:"column"===f.direction?y.heightArr[l]+"px":"14px"})},{default:o((()=>[c(w,{class:n(["column"===f.direction?"uni-steps__column-line":"uni-steps__row-line","column"===f.direction?"uni-steps__column-line--before":"uni-steps__row-line--before"]),style:d({backgroundColor:l<=f.active&&0!==l?f.activeColor:0===l?"transparent":f.deactiveColor})},null,8,["class","style"]),l===f.active?(a(),s(w,{key:0,class:n(["column"===f.direction?"uni-steps__column-check":"uni-steps__row-check"])},{default:o((()=>[c(V,{color:f.activeColor,type:f.activeIcon,size:"14"},null,8,["color","type"])])),_:1},8,["class"])):(a(),s(w,{key:1,class:n(["column"===f.direction?"uni-steps__column-circle":"uni-steps__row-circle"]),style:d({backgroundColor:l<f.active?f.activeColor:f.deactiveColor})},null,8,["class","style"])),c(w,{class:n(["column"===f.direction?"uni-steps__column-line":"uni-steps__row-line","column"===f.direction?"uni-steps__column-line--after":"uni-steps__row-line--after"]),style:d({backgroundColor:l<f.active&&l!==f.options.length-1?f.activeColor:l===f.options.length-1?"transparent":f.deactiveColor})},null,8,["class","style"])])),_:2},1032,["class","style"])))),128))])),_:1},8,["class"])])),_:1},8,["class"])])),_:1})}],["__scopeId","data-v-3c69c4c5"]]),w=y({__name:"vend",setup(l){const s=f(""),n=f([{value:"1",text:"魔兽世界"},{value:"2",text:"穿越火线"},{value:"3",text:"魔域"},{value:"4",text:"斗战神"},{value:"5",text:"斗战神5"},{value:"6",text:"斗战神6"},{value:"7",text:"斗战神7"}]),r=e=>{console.log("selectGame:",e.detail.value[0],s.value)},d=f(""),_=f([{value:"1",text:"账号"},{value:"2",text:"精粹号"},{value:"3",text:"开局号"},{value:"4",text:"搬砖号"}]),m=e=>{console.log("selectType:",e.detail.value[0])},g=f(""),y=f([{value:"1",text:"全区"},{value:"2",text:"一区"},{value:"3",text:"二区"},{value:"4",text:"三区"}]),w=e=>{console.log("selectRegion:")},V=f(""),b=f([{value:"1",text:"全服"},{value:"2",text:"一区"},{value:"3",text:"二区"},{value:"4",text:"三区"}]),S=e=>{console.log("selectServer:")},j=e=>{console.log("onNext:")};return(l,f)=>{const A=x(t("StatusBar"),e),B=x(t("uni-steps"),k),U=v,I=x(t("gp-data-picker"),C),F=h;return a(),u(i,null,[c(A),c(B,{class:"steps",options:[{title:"选择商品分类"},{title:"填写商品信息"},{title:"完成商品发布"}],"active-color":"#ff8f02",active:0}),c(U,{class:"select"},{default:o((()=>[c(U,{class:"title"},{default:o((()=>[p(" 请选择商品分类 ")])),_:1}),c(U,{class:"list"},{default:o((()=>[c(U,{class:"item"},{default:o((()=>[c(U,{class:"name"},{default:o((()=>[p(" 游戏名称 ")])),_:1}),c(U,{class:"check"},{default:o((()=>[c(I,{class:"",modelValue:s.value,"onUpdate:modelValue":f[0]||(f[0]=e=>s.value=e),isSearch:"",localdata:n.value,placeholder:"游戏名","popup-title":"选择游戏",onChange:r},null,8,["modelValue","localdata"])])),_:1})])),_:1}),c(U,{class:"item"},{default:o((()=>[c(U,{class:"name"},{default:o((()=>[p(" 账号类型 ")])),_:1}),c(U,{class:"check"},{default:o((()=>[c(I,{modelValue:d.value,"onUpdate:modelValue":f[1]||(f[1]=e=>d.value=e),localdata:_.value,placeholder:"类型","popup-title":"选择类型",onChange:m},null,8,["modelValue","localdata"])])),_:1})])),_:1}),c(U,{class:"item"},{default:o((()=>[c(U,{class:"name"},{default:o((()=>[p(" 所在区 ")])),_:1}),c(U,{class:"check"},{default:o((()=>[c(I,{modelValue:g.value,"onUpdate:modelValue":f[2]||(f[2]=e=>g.value=e),localdata:y.value,placeholder:"区服","popup-title":"选择区服",onChange:w},null,8,["modelValue","localdata"])])),_:1})])),_:1}),c(U,{class:"item"},{default:o((()=>[c(U,{class:"name"},{default:o((()=>[p(" 所在服 ")])),_:1}),c(U,{class:"check"},{default:o((()=>[c(I,{modelValue:V.value,"onUpdate:modelValue":f[3]||(f[3]=e=>V.value=e),localdata:b.value,placeholder:"服务器","popup-title":"选择服务器",onChange:S},null,8,["modelValue","localdata"])])),_:1})])),_:1})])),_:1}),c(U,{class:"next"},{default:o((()=>[c(F,{onClick:j,size:"mini"},{default:o((()=>[p("下一步")])),_:1})])),_:1})])),_:1})],64)}}},[["__scopeId","data-v-b5500a59"]]);export{w as default};