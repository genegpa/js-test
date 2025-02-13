import{h as e,a as t,b as s,c as i,w as l,e as n,n as o,d as c,F as a,k as r,l as u,g as _,t as p,s as d,i as m}from"./index-CKt6jF3p.js";import{r as f,_ as y}from"./uni-icons.irkbJs4x.js";import{_ as v}from"./_plugin-vue_export-helper.BCo6x5W8.js";const h=v({name:"UniSteps",props:{direction:{type:String,default:"row"},activeColor:{type:String,default:"#2979FF"},deactiveColor:{type:String,default:"#B7BDC6"},active:{type:Number,default:0},activeIcon:{type:String,default:"checkbox-filled"},options:{type:Array,default:()=>[]}},data:()=>({heightArr:[]}),mounted(){if("column"===this.direction){let t=this;e().in(this).selectAll(".uni-steps__column-text").boundingClientRect((e=>{t.heightArr=e.map((e=>e.height+1))})).exec()}}},[["render",function(e,v,h,g,C,w){const x=d,k=m,b=f(t("uni-icons"),y);return s(),i(k,{class:"uni-steps"},{default:l((()=>[n(k,{class:o(["column"===h.direction?"uni-steps__column":"uni-steps__row"])},{default:l((()=>[n(k,{class:o(["column"===h.direction?"uni-steps__column-text-container":"uni-steps__row-text-container"])},{default:l((()=>[(s(!0),c(a,null,r(h.options,((e,t)=>(s(),i(k,{key:t,class:o(["column"===h.direction?"uni-steps__column-text":"uni-steps__row-text"])},{default:l((()=>[n(x,{style:u({color:t===h.active?h.activeColor:h.deactiveColor}),class:o(["column"===h.direction?"uni-steps__column-title":"uni-steps__row-title"])},{default:l((()=>[_(p(e.title),1)])),_:2},1032,["style","class"]),n(x,{style:u({color:h.deactiveColor}),class:o(["column"===h.direction?"uni-steps__column-desc":"uni-steps__row-desc"])},{default:l((()=>[_(p(e.desc),1)])),_:2},1032,["style","class"])])),_:2},1032,["class"])))),128))])),_:1},8,["class"]),n(k,{class:o(["column"===h.direction?"uni-steps__column-container":"uni-steps__row-container"])},{default:l((()=>[(s(!0),c(a,null,r(h.options,((e,t)=>(s(),i(k,{class:o(["column"===h.direction?"uni-steps__column-line-item":"uni-steps__row-line-item"]),key:t,style:u({height:"column"===h.direction?C.heightArr[t]+"px":"14px"})},{default:l((()=>[n(k,{class:o(["column"===h.direction?"uni-steps__column-line":"uni-steps__row-line","column"===h.direction?"uni-steps__column-line--before":"uni-steps__row-line--before"]),style:u({backgroundColor:t<=h.active&&0!==t?h.activeColor:0===t?"transparent":h.deactiveColor})},null,8,["class","style"]),t===h.active?(s(),i(k,{key:0,class:o(["column"===h.direction?"uni-steps__column-check":"uni-steps__row-check"])},{default:l((()=>[n(b,{color:h.activeColor,type:h.activeIcon,size:"14"},null,8,["color","type"])])),_:1},8,["class"])):(s(),i(k,{key:1,class:o(["column"===h.direction?"uni-steps__column-circle":"uni-steps__row-circle"]),style:u({backgroundColor:t<h.active?h.activeColor:h.deactiveColor})},null,8,["class","style"])),n(k,{class:o(["column"===h.direction?"uni-steps__column-line":"uni-steps__row-line","column"===h.direction?"uni-steps__column-line--after":"uni-steps__row-line--after"]),style:u({backgroundColor:t<h.active&&t!==h.options.length-1?h.activeColor:t===h.options.length-1?"transparent":h.deactiveColor})},null,8,["class","style"])])),_:2},1032,["class","style"])))),128))])),_:1},8,["class"])])),_:1},8,["class"])])),_:1})}],["__scopeId","data-v-3c69c4c5"]]);export{h as _};
