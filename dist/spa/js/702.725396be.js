"use strict";(self["webpackChunkcrewrest"]=self["webpackChunkcrewrest"]||[]).push([[702],{1637:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={data(){return{tableGenerated:!1,starttime:"03:30",endtime:"06:00",timeBetween:"00:10",schedule:"",scheduleOptions:[{label:"3 Equal",value:"threeEqual"},{label:"4 Equal",value:"fourEqual"},{label:"SLLS",value:"slls"}],constraint:"",constraintOptions:["","Long Rest Equals","Short Rest Equals","Long Rest Max","Long Rest Min","Short Rest Max","Short Rest Min"],constraintValue:"",timeTable:[]}},methods:{generateTable(){let{startMinutes,endMinutes}=this.normalize(),totalTime=endMinutes-startMinutes;this.timeTable=eval("this."+this.schedule.value+"(totalTime, startMinutes)"),this.tableGenerated=!0},threeEqual(e,t){let i=this.toMinutes(this.timeStringToTime(this.timeBetween)),s=Math.floor((e-2*i)/3),l=this.timeToTimeString(t)+" - "+this.timeToTimeString(t+s);t+=s+i;let a=this.timeToTimeString(t)+" - "+this.timeToTimeString(t+s);t+=s+i;let n=this.timeToTimeString(t)+" - "+this.timeToTimeString(t+s),o=[l,a,n];return o},fourEqual(e,t){let i=this.toMinutes(this.timeStringToTime(this.timeBetween)),s=Math.floor((e-3*i)/4),l=this.timeToTimeString(t)+" - "+this.timeToTimeString(t+s);t+=s+i;let a=this.timeToTimeString(t)+" - "+this.timeToTimeString(t+s);t+=s+i;let n=this.timeToTimeString(t)+" - "+this.timeToTimeString(t+s);t+=s+i;let o=this.timeToTimeString(t)+" - "+this.timeToTimeString(t+s),r=[l,a,n,o];return r},slls(e,t){let i=this.toMinutes(this.timeStringToTime(this.timeBetween)),s=Math.floor((e-3*i)/6),l=Math.floor((e-3*i-2*s)/2),a=this.toMinutes(this.timeStringToTime(this.constraintValue));switch(console.log(this.constraintValue),console.log(a),this.constraint){case"Long Rest Equals":l=a,s=Math.floor(e-3*i-2*l)/2;break;case"Short Rest Equals":s=a,l=Math.floor((e-3*i-2*s)/2);break;case"Long Rest Max":l>a&&(l=a),s=Math.floor(e-3*i-2*l)/2;break;case"Short Rest Max":s>a&&(s=a),l=Math.floor((e-3*i-2*s)/2);break;case"Long Rest Min":l<a&&(l=a),s=Math.floor(e-3*i-2*l)/2;break;case"Short Rest Min":s<a&&(s=a),l=Math.floor((e-3*i-2*s)/2);break}let n=this.timeToTimeString(t)+" - "+this.timeToTimeString(t+s);t+=s+i;let o=this.timeToTimeString(t)+" - "+this.timeToTimeString(t+l);t+=l+i;let r=this.timeToTimeString(t)+" - "+this.timeToTimeString(t+l);t+=l+i;let m=this.timeToTimeString(t)+" - "+this.timeToTimeString(t+s),u=[n,o,r,m];return u},normalize(){let e=this.timeStringToTime(this.starttime),t=this.timeStringToTime(this.endtime);t.minutes<e.minutes&&(t.minutes+=60,t.hours-=1),t.hours<e.hours&&(t.hours+=24);let i=this.toMinutes(e),s=this.toMinutes(t);return{startMinutes:i,endMinutes:s}},toMinutes(e){return 60*e.hours+e.minutes},timeToTimeString(e){let t=Math.floor(e/60),i=e-60*t;t>23&&(t-=24);let s=t<10?"0"+t.toString():t.toString(),l=i<10?"0"+i.toString():i.toString();return s+":"+l},timeStringToTime(e){let t=e.split(":"),i=parseInt(t[0]),s=parseInt(t[1]);return{hours:i,minutes:s}}}}},2702:(e,t,i)=>{i.r(t),i.d(t,{default:()=>V});var s=i(3673),l=i(8880),a=i(2323);const n={class:"q-gutter-sm row"},o={class:"q-gutter-sm row"},r={class:"q-gutter-sm row"},m={class:"q-gutter-md row"},u={class:"q-gutter-lg row"},d={class:"q-gutter-sm row"},h={class:"q-gutter-sm row"},T={key:1,class:"q-pa-md"},c=(0,s._)("div",{class:"row"},[(0,s._)("div",{class:"col-6"},"Rest Period"),(0,s._)("div",{class:"col-6"},"Start - End")],-1),g={class:"col-6"},S={class:"col-6"};function _(e,t,i,_,b,p){const w=(0,s.up)("q-input"),M=(0,s.up)("q-select"),q=(0,s.up)("q-btn"),f=(0,s.up)("q-form"),k=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(k,{class:""},{default:(0,s.w5)((()=>[b.tableGenerated?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(f,{key:0,class:"q-pa-md",onSubmit:(0,l.iM)(p.generateTable,["prevent"])},{default:(0,s.w5)((()=>[(0,s._)("div",n,[(0,s.Wm)(w,{filled:"",standout:"",modelValue:b.starttime,"onUpdate:modelValue":t[0]||(t[0]=e=>b.starttime=e),mask:"time",label:"Start Time",rules:["time"],clearable:""},null,8,["modelValue"])]),(0,s._)("div",o,[(0,s.Wm)(w,{filled:"",standout:"",modelValue:b.endtime,"onUpdate:modelValue":t[1]||(t[1]=e=>b.endtime=e),mask:"time",label:"End Time",rules:["time"],clearable:""},null,8,["modelValue"])]),(0,s._)("div",r,[(0,s.Wm)(w,{filled:"",standout:"",modelValue:b.timeBetween,"onUpdate:modelValue":t[2]||(t[2]=e=>b.timeBetween=e),label:"Time Between",mask:"time",rules:["time"]},null,8,["modelValue"])]),(0,s._)("div",m,[(0,s.Wm)(M,{filled:"",standout:"",modelValue:b.schedule,"onUpdate:modelValue":t[3]||(t[3]=e=>b.schedule=e),label:"Rest Schedule",options:b.scheduleOptions,style:{width:"100%"},dense:"",behavior:"menu",rules:e=>e.length()>0||"Must Select a Schedule"},null,8,["modelValue","options","rules"])]),(0,s._)("div",u,[(0,s.Wm)(M,{filled:"",standout:"",modelValue:b.constraint,"onUpdate:modelValue":t[4]||(t[4]=e=>b.constraint=e),label:"Contraint",options:b.constraintOptions,style:{width:"100%"},dense:"",behavior:"menu"},null,8,["modelValue","options"])]),(0,s._)("div",d,[(0,s.Wm)(w,{filled:"",standout:"",modelValue:b.constraintValue,"onUpdate:modelValue":t[5]||(t[5]=e=>b.constraintValue=e),label:"Enter Time",mask:"time",clearable:""},null,8,["modelValue"])]),(0,s._)("div",h,[(0,s.Wm)(q,{primary:"",type:"submit",label:"Generate"})])])),_:1},8,["onSubmit"])),b.tableGenerated?((0,s.wg)(),(0,s.iD)("div",T,[c,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(b.timeTable,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"row",key:t},[(0,s._)("div",g,(0,a.zw)(t),1),(0,s._)("div",S,(0,a.zw)(e),1)])))),128)),(0,s.Wm)(q,{primary:"",onClick:t[6]||(t[6]=e=>b.tableGenerated=!1),label:"Back"})])):(0,s.kq)("",!0)])),_:1})}var b=i(1637),p=i(4379),w=i(8689),M=i(4842),q=i(8746),f=i(4607),k=i(7518),v=i.n(k);b.Z.render=_;const V=b.Z;v()(b.Z,"components",{QPage:p.Z,QForm:w.Z,QInput:M.Z,QSelect:q.Z,QBtn:f.Z})}}]);