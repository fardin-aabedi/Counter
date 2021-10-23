const h=document.querySelector(".hour");
const m=document.querySelector(".miniute");
const s=document.querySelector(".secound");
document.querySelector(".startbtn");
const countainer =document.querySelector(".counter")
let hh=0;let mm=0;let ss=0;let interval;
function stop(){
   clearInterval(interval);
   countainer.style.animationPlayState="pause";

}
function less10(val,elm){
    if (val < 10)
        elm.innerHTML="0"+val;
    else
        elm.innerHTML=val;
}
function start(){
    interval=setInterval(function (){
        countainer.style.animationPlayState="running"
        if(ss<59){
            ss +=1 ;
            less10(ss,s);
        }
        else{ ss=0
        if (mm<59){
        mm+=1;
        less10(mm,m);
    }
    else{
        hh +=1
        less10(hh,h);
    }
}
},1000)}