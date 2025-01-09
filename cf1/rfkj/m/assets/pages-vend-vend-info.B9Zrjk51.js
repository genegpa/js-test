import{T as e,U as l,V as t,C as s,W as i,X as a,o,c as r,b as u,j as n,F as d,k as c,m as p,d as h,Y as f,J as m,e as g,I as y,f as _,i as b,Z as v,l as F,t as x,_ as k,g as w,h as P,r as V,O as S,s as I,a as T,w as C,v as $,n as L,a0 as M,a1 as j,Q as U,a2 as E}from"./index-Bo2hzwx3.js";import{_ as O}from"./StatusBar.CmrGUv4z.js";import{r as q}from"./uni-icons.DEXW7Iqy.js";import{_ as B}from"./uni-steps.DVlfDtFo.js";import{e as D,_ as A}from"./gp-data-picker.BZuxUyKF.js";import{_ as z}from"./uni-easyinput.xDDQcpbr.js";import{_ as N}from"./_plugin-vue_export-helper.BCo6x5W8.js";const Q="chooseAndUploadFile:fail";function R(e,l){return e.tempFiles.forEach(((e,t)=>{e.name||(e.name=e.path.substring(e.path.lastIndexOf("/")+1)),l&&(e.fileType=l),e.cloudPath=Date.now()+"_"+t+e.name.substring(e.name.lastIndexOf("."))})),e.tempFilePaths||(e.tempFilePaths=e.tempFiles.map((e=>e.path))),e}function J(e,l=5,t){const s=(e=JSON.parse(JSON.stringify(e))).length;let i=0,a=this;return new Promise((o=>{for(;i<l;)r();function r(){let l=i++;if(l>=s)return void(!e.find((e=>!e.url&&!e.errMsg))&&o(e));const u=e[l],n=a.files.findIndex((e=>e.uuid===u.uuid));u.url="",delete u.errMsg,D.uploadFile({filePath:u.path,cloudPath:u.cloudPath,fileType:u.fileType,onUploadProgress:e=>{e.index=n,t&&t(e)}}).then((e=>{u.url=e.fileID,u.index=n,l<s&&r()})).catch((e=>{u.errMsg=e.errMsg||e.message,u.index=n,l<s&&r()}))}}))}function H(e,{onChooseFile:l,onUploadProgress:t}){return e.then((e=>{if(l){const t=l(e);if(void 0!==t)return Promise.resolve(t).then((l=>void 0===l?e:l))}return e})).then((e=>!1===e?{errMsg:"chooseAndUploadFile:ok",tempFilePaths:[],tempFiles:[]}:e))}function W(s={type:"all"}){return"image"===s.type?H(function(l){const{count:t,sizeType:s=["original","compressed"],sourceType:i,extension:a}=l;return new Promise(((l,o)=>{e({count:t,sizeType:s,sourceType:i,extension:a,success(e){l(R(e,"image"))},fail(e){o({errMsg:e.errMsg.replace("chooseImage:fail",Q)})}})}))}(s),s):"video"===s.type?H(function(e){const{count:t,camera:s,compressed:i,maxDuration:a,sourceType:o,extension:r}=e;return new Promise(((e,t)=>{l({camera:s,compressed:i,maxDuration:a,sourceType:o,extension:r,success(l){const{tempFilePath:t,duration:s,size:i,height:a,width:o}=l;e(R({errMsg:"chooseVideo:ok",tempFilePaths:[t],tempFiles:[{name:l.tempFile&&l.tempFile.name||"",path:t,size:i,type:l.tempFile&&l.tempFile.type||"",width:o,height:a,duration:s,fileType:"video",cloudPath:""}]},"video"))},fail(e){t({errMsg:e.errMsg.replace("chooseVideo:fail",Q)})}})}))}(s),s):H(function(e){const{count:l,extension:s}=e;return new Promise(((e,i)=>{let a=t;if("undefined"!=typeof wx&&"function"==typeof wx.chooseMessageFile&&(a=wx.chooseMessageFile),"function"!=typeof a)return i({errMsg:Q+" 请指定 type 类型，该平台仅支持选择 image 或 video。"});a({type:"all",count:l,extension:s,success(l){e(R(l))},fail(e){i({errMsg:e.errMsg.replace("chooseFile:fail",Q)})}})}))}(s),s)}const X=e=>{const l=e.lastIndexOf("."),t=e.length;return{name:e.substring(0,l),ext:e.substring(l+1,t)}},Y=e=>{if(Array.isArray(e))return e;return e.replace(/(\[|\])/g,"").split(",")},Z=async(e,l="image")=>{const t=X(e.name).ext.toLowerCase();let s={name:e.name,uuid:e.uuid,extname:t||"",cloudPath:e.cloudPath,fileType:e.fileType,thumbTempFilePath:e.thumbTempFilePath,url:e.path||e.path,size:e.size,image:{},path:e.path,video:{}};if("image"===l){const l=await(a=e.path,new Promise(((e,l)=>{i({src:a,success(l){e(l)},fail(e){l(e)}})})));delete s.video,s.image.width=l.width,s.image.height=l.height,s.image.location=l.path}else delete s.image;var a;return s};const G=N({name:"uniFilePicker",components:{uploadImage:N({name:"uploadImage",emits:["uploadFiles","choose","delFile"],props:{filesList:{type:Array,default:()=>[]},disabled:{type:Boolean,default:!1},disablePreview:{type:Boolean,default:!1},limit:{type:[Number,String],default:9},imageStyles:{type:Object,default:()=>({width:"auto",height:"auto",border:{}})},delIcon:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1}},computed:{styles(){return Object.assign({width:"auto",height:"auto",border:{}},this.imageStyles)},boxStyle(){const{width:e="auto",height:l="auto"}=this.styles;let t={};"auto"===l?"auto"!==e?(t.height=this.value2px(e),t["padding-top"]=0):t.height=0:(t.height=this.value2px(l),t["padding-top"]=0),t.width="auto"===e?"auto"!==l?this.value2px(l):"33.3%":this.value2px(e);let s="";for(let i in t)s+=`${i}:${t[i]};`;return s},borderStyle(){let{border:e}=this.styles,l={};if("boolean"==typeof e)l.border=e?"1px #eee solid":"none";else{let t=e&&e.width||1;t=this.value2px(t);let s=e&&e.radius||3;s=this.value2px(s),l={"border-width":t,"border-style":e&&e.style||"solid","border-color":e&&e.color||"#eee","border-radius":s}}let t="";for(let s in l)t+=`${s}:${l[s]};`;return t}},methods:{uploadFiles(e,l){this.$emit("uploadFiles",e)},choose(){this.$emit("choose")},delFile(e){this.$emit("delFile",e)},prviewImage(e,l){let t=[];1===Number(this.limit)&&this.disablePreview&&!this.disabled&&this.$emit("choose"),this.disablePreview||(this.filesList.forEach((e=>{t.push(e.url)})),a({urls:t,current:l}))},value2px:e=>("number"==typeof e?e+="px":-1===e.indexOf("%")&&(e=-1!==e.indexOf("px")?e:e+"px"),e)}},[["render",function(e,l,t,s,i,a){const F=_,x=b,k=v;return o(),r(x,{class:"uni-file-picker__container"},{default:u((()=>[(o(!0),n(d,null,c(t.filesList,((e,l)=>(o(),r(x,{class:"file-picker__box",key:l,style:p(a.boxStyle)},{default:u((()=>[h(x,{class:"file-picker__box-content",style:p(a.borderStyle)},{default:u((()=>[h(F,{class:"file-image",src:e.url,mode:"aspectFill",onClick:f((t=>a.prviewImage(e,l)),["stop"])},null,8,["src","onClick"]),t.delIcon&&!t.readonly?(o(),r(x,{key:0,class:"icon-del-box",onClick:f((e=>a.delFile(l)),["stop"])},{default:u((()=>[h(x,{class:"icon-del"}),h(x,{class:"icon-del rotate"})])),_:2},1032,["onClick"])):m("",!0),e.progress&&100!==e.progress||0===e.progress?(o(),r(x,{key:1,class:"file-picker__progress"},{default:u((()=>[h(k,{class:"file-picker__progress-item",percent:-1===e.progress?0:e.progress,"stroke-width":"4",backgroundColor:e.errMsg?"#ff5a5f":"#EBEBEB"},null,8,["percent","backgroundColor"])])),_:2},1024)):m("",!0),e.errMsg?(o(),r(x,{key:2,class:"file-picker__mask",onClick:f((t=>a.uploadFiles(e,l)),["stop"])},{default:u((()=>[g(" 点击重试 ")])),_:2},1032,["onClick"])):m("",!0)])),_:2},1032,["style"])])),_:2},1032,["style"])))),128)),t.filesList.length<t.limit&&!t.readonly?(o(),r(x,{key:0,class:"file-picker__box",style:p(a.boxStyle)},{default:u((()=>[h(x,{class:"file-picker__box-content is-add",style:p(a.borderStyle),onClick:a.choose},{default:u((()=>[y(e.$slots,"default",{},(()=>[h(x,{class:"icon-add"}),h(x,{class:"icon-add rotate"})]),!0)])),_:3},8,["style","onClick"])])),_:3},8,["style"])):m("",!0)])),_:3})}],["__scopeId","data-v-86b162f5"]]),uploadFile:N({name:"uploadFile",emits:["uploadFiles","choose","delFile"],props:{filesList:{type:Array,default:()=>[]},delIcon:{type:Boolean,default:!0},limit:{type:[Number,String],default:9},showType:{type:String,default:""},listStyles:{type:Object,default:()=>({border:!0,dividline:!0,borderStyle:{}})},readonly:{type:Boolean,default:!1}},computed:{list(){let e=[];return this.filesList.forEach((l=>{e.push(l)})),e},styles(){return Object.assign({border:!0,dividline:!0,"border-style":{}},this.listStyles)},borderStyle(){let{borderStyle:e,border:l}=this.styles,t={};if(l){let l=e&&e.width||1;l=this.value2px(l);let s=e&&e.radius||5;s=this.value2px(s),t={"border-width":l,"border-style":e&&e.style||"solid","border-color":e&&e.color||"#eee","border-radius":s}}else t.border="none";let s="";for(let i in t)s+=`${i}:${t[i]};`;return s},borderLineStyle(){let e={},{borderStyle:l}=this.styles;if(l&&l.color&&(e["border-color"]=l.color),l&&l.width){let t=l&&l.width||1,s=l&&l.style||0;"number"==typeof t?t+="px":t=t.indexOf("px")?t:t+"px",e["border-width"]=t,"number"==typeof s?s+="px":s=s.indexOf("px")?s:s+"px",e["border-top-style"]=s}let t="";for(let s in e)t+=`${s}:${e[s]};`;return t}},methods:{uploadFiles(e,l){this.$emit("uploadFiles",{item:e,index:l})},choose(){this.$emit("choose")},delFile(e){this.$emit("delFile",e)},value2px:e=>("number"==typeof e?e+="px":e=-1!==e.indexOf("px")?e:e+"px",e)}},[["render",function(e,l,t,s,i,a){const _=b,k=v;return o(),r(_,{class:"uni-file-picker__files"},{default:u((()=>[t.readonly?m("",!0):(o(),r(_,{key:0,class:"files-button",onClick:a.choose},{default:u((()=>[y(e.$slots,"default",{},void 0,!0)])),_:3},8,["onClick"])),a.list.length>0?(o(),r(_,{key:1,class:"uni-file-picker__lists is-text-box",style:p(a.borderStyle)},{default:u((()=>[(o(!0),n(d,null,c(a.list,((e,l)=>(o(),r(_,{class:F(["uni-file-picker__lists-box",{"files-border":0!==l&&a.styles.dividline}]),key:l,style:p(0!==l&&a.styles.dividline&&a.borderLineStyle)},{default:u((()=>[h(_,{class:"uni-file-picker__item"},{default:u((()=>[h(_,{class:"files__name"},{default:u((()=>[g(x(e.name),1)])),_:2},1024),t.delIcon&&!t.readonly?(o(),r(_,{key:0,class:"icon-del-box icon-files",onClick:e=>a.delFile(l)},{default:u((()=>[h(_,{class:"icon-del icon-files"}),h(_,{class:"icon-del rotate"})])),_:2},1032,["onClick"])):m("",!0)])),_:2},1024),e.progress&&100!==e.progress||0===e.progress?(o(),r(_,{key:0,class:"file-picker__progress"},{default:u((()=>[h(k,{class:"file-picker__progress-item",percent:-1===e.progress?0:e.progress,"stroke-width":"4",backgroundColor:e.errMsg?"#ff5a5f":"#EBEBEB"},null,8,["percent","backgroundColor"])])),_:2},1024)):m("",!0),"error"===e.status?(o(),r(_,{key:1,class:"file-picker__mask",onClick:f((t=>a.uploadFiles(e,l)),["stop"])},{default:u((()=>[g(" 点击重试 ")])),_:2},1032,["onClick"])):m("",!0)])),_:2},1032,["class","style"])))),128))])),_:1},8,["style"])):m("",!0)])),_:3})}],["__scopeId","data-v-5d376bd5"]])},options:{virtualHost:!0},emits:["select","success","fail","progress","delete","update:modelValue","input"],props:{modelValue:{type:[Array,Object],default:()=>[]},disabled:{type:Boolean,default:!1},disablePreview:{type:Boolean,default:!1},delIcon:{type:Boolean,default:!0},autoUpload:{type:Boolean,default:!0},limit:{type:[Number,String],default:9},mode:{type:String,default:"grid"},fileMediatype:{type:String,default:"image"},fileExtname:{type:[Array,String],default:()=>[]},title:{type:String,default:""},listStyles:{type:Object,default:()=>({border:!0,dividline:!0,borderStyle:{}})},imageStyles:{type:Object,default:()=>({width:"auto",height:"auto"})},readonly:{type:Boolean,default:!1},returnType:{type:String,default:"array"},sizeType:{type:Array,default:()=>["original","compressed"]},sourceType:{type:Array,default:()=>["album","camera"]},provider:{type:String,default:""}},data:()=>({files:[],localValue:[]}),watch:{modelValue:{handler(e,l){this.setValue(e,l)},immediate:!0}},computed:{filesList(){let e=[];return this.files.forEach((l=>{e.push(l)})),e},showType(){return"image"===this.fileMediatype?this.mode:"list"},limitLength(){return"object"===this.returnType?1:this.limit?this.limit>=9?9:this.limit:1}},created(){D.config&&D.config.provider||(this.noSpace=!0,D.chooseAndUploadFile=W),this.form=this.getForm("uniForms"),this.formItem=this.getForm("uniFormsItem"),this.form&&this.formItem&&this.formItem.name&&(this.rename=this.formItem.name,this.form.inputChildrens.push(this))},methods:{clearFiles(e){0===e||e?this.files.splice(e,1):(this.files=[],this.$nextTick((()=>{this.setEmit()}))),this.$nextTick((()=>{this.setEmit()}))},upload(){let e=[];return this.files.forEach(((l,t)=>{"ready"!==l.status&&"error"!==l.status||e.push(Object.assign({},l))})),this.uploadFiles(e)},async setValue(e,l){const t=async e=>{let l="";return l=e.fileID?e.fileID:e.url,/cloud:\/\/([\w.]+\/?)\S*/.test(l)&&(e.fileID=l,e.url=await this.getTempFileURL(l)),e.url&&(e.path=e.url),e};if("object"===this.returnType)e?await t(e):e={};else{e||(e=[]);for(let l=0;l<e.length;l++){let s=e[l];await t(s)}}this.localValue=e,this.form&&this.formItem&&!this.is_reset&&(this.is_reset=!1,this.formItem.setValue(this.localValue));let s=Object.keys(e).length>0?e:[];this.files=[].concat(s)},choose(){this.disabled||(this.files.length>=Number(this.limitLength)&&"grid"!==this.showType&&"array"===this.returnType?s({title:`您最多选择 ${this.limitLength} 个文件`,icon:"none"}):this.chooseFiles())},chooseFiles(){const e=Y(this.fileExtname);D.chooseAndUploadFile({type:this.fileMediatype,compressed:!1,sizeType:this.sizeType,sourceType:this.sourceType,extension:e.length>0?e:void 0,count:this.limitLength-this.files.length,onChooseFile:this.chooseFileCallback,onUploadProgress:e=>{this.setProgress(e,e.index)}}).then((e=>{this.setSuccessAndError(e.tempFiles)})).catch((e=>{console.log("选择失败",e)}))},async chooseFileCallback(e){const l=Y(this.fileExtname);(1===Number(this.limitLength)&&this.disablePreview&&!this.disabled||"object"===this.returnType)&&(this.files=[]);let{filePaths:t,files:i}=((e,l)=>{let t=[],i=[];return l&&0!==l.length?(e.tempFiles.forEach((e=>{const s=X(e.name).ext.toLowerCase();-1!==l.indexOf(s)&&(i.push(e),t.push(e.path))})),i.length!==e.tempFiles.length&&s({title:`当前选择了${e.tempFiles.length}个文件 ，${e.tempFiles.length-i.length} 个文件格式不正确`,icon:"none",duration:5e3}),{filePaths:t,files:i}):{filePaths:t,files:i}})(e,l);l&&l.length>0||(t=e.tempFilePaths,i=e.tempFiles);let a=[];for(let s=0;s<i.length&&!(this.limitLength-this.files.length<=0);s++){i[s].uuid=Date.now();let e=await Z(i[s],this.fileMediatype);e.progress=0,e.status="ready",this.files.push(e),a.push({...e,file:i[s]})}this.$emit("select",{tempFiles:a,tempFilePaths:t}),e.tempFiles=i,this.autoUpload&&!this.noSpace||(e.tempFiles=[]),e.tempFiles.forEach(((e,l)=>{this.provider&&(e.provider=this.provider);const t=e.name.split("."),s=t.pop(),i=t.join(".").replace(/[\s\/\?<>\\:\*\|":]/g,"_");e.cloudPath=i+"_"+Date.now()+"_"+l+"."+s}))},uploadFiles(e){return e=[].concat(e),J.call(this,e,5,(e=>{this.setProgress(e,e.index,!0)})).then((e=>(this.setSuccessAndError(e),e))).catch((e=>{console.log(e)}))},async setSuccessAndError(e,l){let t=[],s=[],i=[],a=[];for(let o=0;o<e.length;o++){const l=e[o],r=l.uuid?this.files.findIndex((e=>e.uuid===l.uuid)):l.index;if(-1===r||!this.files)break;if("request:fail"===l.errMsg)this.files[r].url=l.path,this.files[r].status="error",this.files[r].errMsg=l.errMsg,s.push(this.files[r]),a.push(this.files[r].url);else{this.files[r].errMsg="",this.files[r].fileID=l.url;/cloud:\/\/([\w.]+\/?)\S*/.test(l.url)?this.files[r].url=await this.getTempFileURL(l.url):this.files[r].url=l.url,this.files[r].status="success",this.files[r].progress+=1,t.push(this.files[r]),i.push(this.files[r].fileID)}}t.length>0&&(this.setEmit(),this.$emit("success",{tempFiles:this.backObject(t),tempFilePaths:i})),s.length>0&&this.$emit("fail",{tempFiles:this.backObject(s),tempFilePaths:a})},setProgress(e,l,t){this.files.length;const s=Math.round(100*e.loaded/e.total);let i=l;t||(i=this.files.findIndex((l=>l.uuid===e.tempFile.uuid))),-1!==i&&this.files[i]&&(this.files[i].progress=s-1,this.$emit("progress",{index:i,progress:parseInt(s),tempFile:this.files[i]}))},delFile(e){this.$emit("delete",{index:e,tempFile:this.files[e],tempFilePath:this.files[e].url}),this.files.splice(e,1),this.$nextTick((()=>{this.setEmit()}))},getFileExt(e){const l=e.lastIndexOf("."),t=e.length;return{name:e.substring(0,l),ext:e.substring(l+1,t)}},setEmit(){let e=[];"object"===this.returnType?(e=this.backObject(this.files)[0],this.localValue=e||null):(e=this.backObject(this.files),this.localValue||(this.localValue=[]),this.localValue=[...e]),this.$emit("update:modelValue",this.localValue)},backObject(e){let l=[];return e.forEach((e=>{l.push({extname:e.extname,fileType:e.fileType,image:e.image,name:e.name,path:e.path,size:e.size,fileID:e.fileID,url:e.url,uuid:e.uuid,status:e.status,cloudPath:e.cloudPath})})),l},async getTempFileURL(e){e={fileList:[].concat(e)};return(await D.getTempFileURL(e)).fileList[0].tempFileURL||""},getForm(e="uniForms"){let l=this.$parent,t=l.$options.name;for(;t!==e;){if(l=l.$parent,!l)return!1;t=l.$options.name}return l}}},[["render",function(e,l,t,s,i,a){const n=w,d=b,c=k("upload-image"),p=P,f=k("upload-file");return o(),r(d,{class:"uni-file-picker"},{default:u((()=>[t.title?(o(),r(d,{key:0,class:"uni-file-picker__header"},{default:u((()=>[h(n,{class:"file-title"},{default:u((()=>[g(x(t.title),1)])),_:1}),h(n,{class:"file-count"},{default:u((()=>[g(x(a.filesList.length)+"/"+x(a.limitLength),1)])),_:1})])),_:1})):m("",!0),"image"===t.fileMediatype&&"grid"===a.showType?(o(),r(c,{key:1,readonly:t.readonly,"image-styles":t.imageStyles,"files-list":a.filesList,limit:a.limitLength,disablePreview:t.disablePreview,delIcon:t.delIcon,onUploadFiles:a.uploadFiles,onChoose:a.choose,onDelFile:a.delFile},{default:u((()=>[y(e.$slots,"default",{},(()=>[h(d,{class:"is-add"},{default:u((()=>[h(d,{class:"icon-add"}),h(d,{class:"icon-add rotate"})])),_:1})]),!0)])),_:3},8,["readonly","image-styles","files-list","limit","disablePreview","delIcon","onUploadFiles","onChoose","onDelFile"])):m("",!0),"image"!==t.fileMediatype||"grid"!==a.showType?(o(),r(f,{key:2,readonly:t.readonly,"list-styles":t.listStyles,"files-list":a.filesList,showType:a.showType,delIcon:t.delIcon,onUploadFiles:a.uploadFiles,onChoose:a.choose,onDelFile:a.delFile},{default:u((()=>[y(e.$slots,"default",{},(()=>[h(p,{type:"primary",size:"mini"},{default:u((()=>[g("选择文件")])),_:1})]),!0)])),_:3},8,["readonly","list-styles","files-list","showType","delIcon","onUploadFiles","onChoose","onDelFile"])):m("",!0)])),_:3})}],["__scopeId","data-v-c3437fa4"]]),K=N({__name:"vend-info",props:["game","type","area","server"],setup(e){const l=e,t=new Date,i=V(""),a=V(""),r=V(""),c=V(0),p=V(1),f=[];let m="";const y=V(""),_=V(""),v=V(""),F=V(0),k=V(0),D={user_id:80128,status:1,game_id:147,game_name:l.game,area_id:1250,area_name:l.area,server_id:0,server_name:l.server,faction_id:0,title:"小号便宜甩了！",price:"100.00",goods_desc:"竞技用 圣光骑士；冒险用 黎明之光；",screenshot:"../../static/test/game/ssjj"+Math.floor(4*Math.random()+1)+".jpg",game_account:421789103,goods_source:"自己注册",number:1,remain_number:1,create_time:t.toLocaleString(),update_time:t.toLocaleString(),gno:t.getTime(),business_text:l.type,credit:"保障",phone:"13400786872",wechat:"wxid_8i2gnkfq22",qq:"",is_special:0,special_code:0},N=V(""),Q=V([{value:"1",text:"自己注册"},{value:"2",text:"仁发科技 平台购买"},{value:"3",text:"其他平台"}]),R=e=>{e.detail.value[0]?(N.value=e.detail.value[0].value,D.goods_source=e.detail.value[0].text):N.value="",console.log("selectSource:",1)},J=e=>{console.log("selectImg:",1),e.tempFiles.forEach((e=>f.push(e.file)))},H=e=>{console.log("deleteImg:",2);for(let l in f)if(f[l].uuid==e.tempFile.uuid){f.splice(l,1);break}},W=S((()=>.05*c.value)),X=e=>{m=e.detail.value,console.log("creditChange:",m)},Y=e=>{F.value=e.detail.value,console.log("specialChange:",F.value)},Z=I(),K=e=>{console.log("onPublic:",1),te()&&(ee()?le()&&(D.title=i.value,D.goods_desc=a.value,D.game_account=r.value,D.price=Number(c.value).toFixed(2),D.remain_number=p.value,D.credit=m,D.phone=y.value,D.wechat=_.value,D.qq=v.value,D.is_special=F.value,D.special_code=k.value,Z.gameList.push(D),console.log("onPublic:",Z.gameList.length,D),s({icon:"none",title:"发布成功！"}),L({url:"/pages/vend/vend-ok"})):s({icon:"none",title:"请填写相关信息"}))},ee=()=>F.value?k.value:N.value&&i.value&&a.value&&r.value&&y.value&&_.value,le=()=>!!f.length||(s({icon:"none",title:"请上传图片"}),!1),te=()=>c.value<=0?(s({icon:"none",title:"价格必须大于 0"}),!1):p.value<1?(s({icon:"none",title:"件数必须大于等于 1"}),!1):(p.value=Math.floor(p.value),console.log("validateNumber:",p.value),!0);return(l,t)=>{const s=q(T("StatusBar"),O),f=q(T("uni-steps"),B),m=b,V=q(T("gp-data-picker"),A),S=q(T("uni-easyinput"),z),I=M,L=q(T("uni-file-picker"),G),D=w,Z=j,ee=U,le=E,te=P;return o(),n(d,null,[h(s),h(f,{class:"steps",options:[{title:"选择商品分类"},{title:"填写商品信息"},{title:"完成商品发布"}],"active-color":"#ff8f02",active:1}),h(m,{class:"select"},{default:u((()=>[h(m,{class:"title"},{default:u((()=>[g(" 发布商品 ")])),_:1}),h(m,null,{default:u((()=>[g(x(e.game+" / "+e.area+" / "+e.server+" / "+e.type),1)])),_:1}),h(m,{class:"tip"},{default:u((()=>[h(m,null,{default:u((()=>[g("1.如您已出售的帐号出现找回情况，平台将把您在 仁发科技 的实名信息提供给买家，买家可在各大网站公布或向公安机关报案，平台尽全力配合公安机关进行立案调查。")])),_:1}),h(m,null,{default:u((()=>[g("2.近期有不法分子提供虚假支付成功的订单截图，凡是引导用户扫码或发送会话链接，让您联系客服交易的，都是诈骗！")])),_:1})])),_:1}),h(m,{class:"item"},{default:u((()=>[h(m,{class:"required"},{default:u((()=>[g(" 账号来源 ")])),_:1}),h(m,{class:"check no-border"},{default:u((()=>[h(V,{class:"picker",modelValue:N.value,"onUpdate:modelValue":t[0]||(t[0]=e=>N.value=e),localdata:Q.value,placeholder:"请选择来源","popup-title":"选择来源",onChange:R},null,8,["modelValue","localdata"])])),_:1})])),_:1}),h(m,{class:"item"},{default:u((()=>[h(m,{class:"required"},{default:u((()=>[g(" 商品标题 ")])),_:1}),h(m,{class:"check"},{default:u((()=>[h(S,{modelValue:i.value,"onUpdate:modelValue":t[1]||(t[1]=e=>i.value=e),placeholder:"请输入标题"},null,8,["modelValue"])])),_:1})])),_:1}),h(m,{class:"item"},{default:u((()=>[h(m,{class:"required"},{default:u((()=>[g(" 商品描述 ")])),_:1}),h(I,{modelValue:a.value,"onUpdate:modelValue":t[2]||(t[2]=e=>a.value=e),placeholder:"请勿填写与本商品无关的广告信息和联系方式等，否则您的账户将会被封禁"},null,8,["modelValue"])])),_:1}),h(m,{class:"item"},{default:u((()=>[h(m,{class:"required"},{default:u((()=>[g(" 商品图片 ")])),_:1}),h(m,{class:"check"},{default:u((()=>[h(L,{"auto-upload":!1,onSelect:J,onDelete:H,limit:"9",title:"图片不能超过3MB,最多上传9张"})])),_:1})])),_:1}),h(m,{class:"item"},{default:u((()=>[h(m,{class:"required"},{default:u((()=>[g(" 游戏账号 ")])),_:1}),h(m,{class:"check"},{default:u((()=>[h(S,{modelValue:r.value,"onUpdate:modelValue":t[3]||(t[3]=e=>r.value=e),placeholder:"请输入账号"},null,8,["modelValue"])])),_:1})])),_:1}),h(m,{class:"item"},{default:u((()=>[h(m,{class:"required"},{default:u((()=>[g(" 商品价格 ")])),_:1}),h(m,{class:"check price"},{default:u((()=>[h(m,{class:"number"},{default:u((()=>[h(S,{modelValue:c.value,"onUpdate:modelValue":t[4]||(t[4]=e=>c.value=e),type:"number",maxlength:"8",placeholder:"请输入价格(元)"},null,8,["modelValue"])])),_:1}),h(m,null,{default:u((()=>[h(D,null,{default:u((()=>[g("预计需要收取手续费：")])),_:1}),h(D,{class:"fee"},{default:u((()=>[g(x(W.value),1)])),_:1}),h(D,null,{default:u((()=>[g("元")])),_:1})])),_:1})])),_:1})])),_:1}),h(m,{class:"item"},{default:u((()=>[h(m,{class:"required"},{default:u((()=>[g(" 发布件数 ")])),_:1}),h(m,{class:"check"},{default:u((()=>[h(S,{modelValue:p.value,"onUpdate:modelValue":t[5]||(t[5]=e=>p.value=e),type:"number",placeholder:"请输入件数"},null,8,["modelValue"])])),_:1})])),_:1}),h(m,{class:"item"},{default:u((()=>[h(m,{class:"required"},{default:u((()=>[g(" 包赔服务 ")])),_:1}),h(m,{class:"check no-border credit-radios"},{default:u((()=>[h(le,{onChange:X},{default:u((()=>[h(ee,null,{default:u((()=>[h(Z,{color:"#fa7b2f",value:"credit1",checked:"true"}),h(m,{class:"desc"},{default:u((()=>[h(m,null,{default:u((()=>[g("南栀包赔服务费:10%+10元")])),_:1}),h(m,null,{default:u((()=>[g("不转手永久包赔，包赔比例 100%")])),_:1})])),_:1})])),_:1}),h(ee,null,{default:u((()=>[h(Z,{color:"#fa7b2f",value:"credit2"}),h(m,{class:"desc"},{default:u((()=>[h(m,null,{default:u((()=>[g("白情包赔服务费:10%+10元")])),_:1}),h(m,null,{default:u((()=>[g("不转手永久包赔，包赔比例 100%")])),_:1})])),_:1})])),_:1}),h(ee,null,{default:u((()=>[h(Z,{color:"#fa7b2f",value:"none"}),h(m,{class:"desc"},{default:u((()=>[h(m,null,{default:u((()=>[g("不需要保障")])),_:1}),h(m,null,{default:u((()=>[g("无保险赔付保障")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),h(m,{class:"item"},{default:u((()=>[h(m,{class:"required"},{default:u((()=>[g(" 手机号 ")])),_:1}),h(m,{class:"check"},{default:u((()=>[h(S,{modelValue:y.value,"onUpdate:modelValue":t[6]||(t[6]=e=>y.value=e),type:"number",placeholder:"请输入手机号"},null,8,["modelValue"])])),_:1})])),_:1}),h(m,{class:"item"},{default:u((()=>[h(m,{class:"required"},{default:u((()=>[g(" 微信号 ")])),_:1}),h(m,{class:"check"},{default:u((()=>[h(S,{modelValue:_.value,"onUpdate:modelValue":t[7]||(t[7]=e=>_.value=e),placeholder:"请输入微信号"},null,8,["modelValue"])])),_:1})])),_:1}),h(m,{class:"item"},{default:u((()=>[h(m,{class:"qq"},{default:u((()=>[g(" QQ号 ")])),_:1}),h(m,{class:"check"},{default:u((()=>[h(S,{modelValue:v.value,"onUpdate:modelValue":t[8]||(t[8]=e=>v.value=e),type:"number",placeholder:"请输入QQ号"},null,8,["modelValue"])])),_:1})])),_:1}),h(m,{class:"item"},{default:u((()=>[h(m,{class:"required"},{default:u((()=>[g(" 指定买家购买 ")])),_:1}),h(m,{class:"check no-border special-radios"},{default:u((()=>[h(le,{onChange:Y},{default:u((()=>[h(ee,null,{default:u((()=>[h(Z,{color:"#fa7b2f",value:"1"}),h(D,null,{default:u((()=>[g("是")])),_:1})])),_:1}),h(ee,null,{default:u((()=>[h(Z,{color:"#fa7b2f",value:"0",checked:"true"}),h(D,null,{default:u((()=>[g("否")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),C(h(m,{class:"item"},{default:u((()=>[h(m,{class:"required"},{default:u((()=>[g(" 交易暗码 ")])),_:1}),h(m,{class:"check"},{default:u((()=>[h(S,{modelValue:k.value,"onUpdate:modelValue":t[9]||(t[9]=e=>k.value=e),maxlength:"6",type:"number",placeholder:"最多输入6位数字"},null,8,["modelValue"])])),_:1})])),_:1},512),[[$,1==F.value]]),h(m,{class:"next"},{default:u((()=>[h(te,{onClick:K,size:"mini"},{default:u((()=>[g("确认无误，立即发布")])),_:1})])),_:1})])),_:1})],64)}}},[["__scopeId","data-v-4ad0d1b2"]]);export{K as default};
