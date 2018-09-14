// window.onload=function(){
//     let banner=document.querySelectorAll(".banner .imgqw");
//     let dot=document.querySelectorAll(".banner li");
//     let but=document.querySelector(".banner .leftmini");
//     let but2=document.querySelector(".banner .rightmini");
//     let father=document.querySelector(".banners");
//     banner[0].style.opacity=1;
//     dot[0].classList.add("hots");
//     let next=0;
//     let now=0;
//     let cv=setInterval(move23,2000);
//     let flag=true;
//     function move23(){
//         next++;
//         if(next==banner.length){
//             next=0;
//         }
//        banner[now].style.opacity=0;
//         animate(banner[next],{opacity:1},function(){
//             flag=true;
//         });
//         dot[now].classList.remove("hots");
//         dot[next].classList.add("hots");
//         now=next;
//     }
//     function moveL(){
//         next--;
//         if(next==-1){
//             next=banner.length-1;
//         }
//         banner[now].style.opacity=0;
//         animate(banner[next],{opacity:1},function(){
//             flag=true;
//         });
//         dot[now].classList.remove("hots");
//         dot[next].classList.add("hots");
//         now=next;
//     }
// for(let i=0;i<dot.length;i++){
//         dot[i].onmouseenter=function(){
//             clearInterval(cv);
//             for(let j=0;j<dot.length;j++){
//                 dot[j].classList.remove("hots");
//                 banner[j].style.opacity=0;
//             }
//             dot[i].classList.add("hots");
//             banner[i].style.opacity=1;
//             now=i;
//             next=i;
//
//         }
// }
//
// but.onclick=function(){
//         if(!flag){
//             return;
//         }
//         flag=false;
//         moveL();
// }
//     but2.onclick=function(){
//         if(!flag){
//             return;
//         }
//         flag=false;
//         move23();
//     }
// father.onmouseenter=function () {
//     clearInterval(cv);
// }
// father.onmouseleave=function () {
//     cv=setInterval(move23,2000);
//     }
//
//
//     let looks=document.querySelectorAll(".looks");
//     let dots=document.querySelectorAll(".dot31");
//     let dots1=document.querySelector(".cbox .but1");
//     let dots23=document.querySelector(".cbox .but2");
//
//
//     let smallbanner=function(looks,dots,dots1,dots23){
//         looks[0].style.left=0;
//         dots[0].classList.add("hot");
//         let next1=0;
//         let now1=0;
//         let flagg=true;
//         function move1(){
//             next1++;
//             if(next1==looks.length){
//                 next1=0;
//             }
//             looks[next1].style.left="288px";
//             animate(looks[now1],{left:-288},function(){
//                 flagg=true;
//             });
//             animate(looks[next1],{left:0});
//             dots[now1].classList.remove("hot");
//             dots[next1].classList.add("hot");
//             now1=next1;
//         }
//         function moveL1(){
//             next1--;
//             if(next1<0){
//                 next1=looks.length-1;
//             }
//             looks[next1].style.left="-288px";
//             animate(looks[now1],{left:288},function(){
//                 flagg=true;});
//             animate(looks[next1],{left:0});
//             dots[now1].classList.remove("hot");
//             dots[next1].classList.add("hot");
//             now1=next1;
//         }
//         for(let i=0;i<dots.length;i++){
//             dots[i].onclick=function(){
//                 if(i==now1){
//                     return;
//                 }
//                 else if(i>now1){
//                     looks[i].style.left="288px";
//                     animate(looks[now1],{left:-288});
//                     animate(looks[i],{left:0});
//                     dots[now1].classList.remove("hot");
//                     dots[i].classList.add("hot");
//                 }
//                 else if(i<now1){
//                     looks[i].style.left="-288px";
//                     animate(looks[now1],{left:288});
//                     animate(looks[i],{left:0});
//                     dots[now1].classList.remove("hot");
//                     dots[i].classList.add("hot");
//                 }
//                 now1=i;
//                 next1=now1;
//             }
//         }
//         dots1.onclick=function(){
//             if(!flagg){
//                 return;
//             }
//             flagg=false;
//             if(next1==0){
//                 flagg=true;
//                 return;
//             }
//             moveL1();
//         }
//         dots23.onclick=function(){
//             if(!flagg){
//                 return;
//             }
//             flagg=false;
//             if(next1==looks.length-1){
//                 flagg=true;
//                 return;
//             }
//             move1();
//         }
//     }
//     smallbanner(looks,dots,dots1,dots23);
//     let view1=document.querySelectorAll(".lookq");
//     let doot1=document.querySelectorAll(".dot32");
//     let buut1=document.querySelector(".but3");
//     let buut2=document.querySelector(".but4");
//     smallbanner(view1,doot1,buut1,buut2);
//     let view2=document.querySelectorAll(".lookw");
//     let doot2=document.querySelectorAll(".dot33");
//     let buut3=document.querySelector(".but5");
//     let buut4=document.querySelector(".but6");
//     smallbanner(view2,doot2,buut3,buut4);
//     let view3=document.querySelectorAll(".looke");
//     let doot3=document.querySelectorAll(".dot34");
//     let buut5=document.querySelector(".but7");
//     let buut6=document.querySelector(".but8");
//     smallbanner(view3,doot3,buut5,buut6);
//
//
//
//
// //    *************
// //    左右点击
//     let fcenter=document.querySelector(".bigfter");
//     let lllft=document.querySelector(".lllft");
//     let rrrit=document.querySelector(".rrrit");
//     let w=parseInt(getComputedStyle(fcenter,null).width)/3;
//     function leftRight(fcenter,lllft,rrrit,w,num){
//         let times=0;
//         rrrit.onclick=function(){
//             times++;
//             if(times==num){
//                 times=num-1;
//             }
//             fcenter.style.transform=`translate(${-w*times}px)`
//         }
//         lllft.onclick=function(){
//             times--;
//             if(times==-1){
//                 times=0;
//             }
//             fcenter.style.transform=`translate(${-w*times}px)`
//         }
//     }
//     leftRight(fcenter,lllft,rrrit,w,3);
//     let bg=document.querySelector(".bbigg");
//     let Leftt=document.querySelector(".Leftt");
//     let Rightt=document.querySelector(".Rightt");
//     let q=parseInt(getComputedStyle(bg,null).width)/2;
//     leftRight(bg,Leftt,Rightt,q,2);
// //******************
//     let blook=document.querySelectorAll(".hcenter");
//     let pointer=document.querySelectorAll(".hotqwe a");
//     blook[0].style.display="block";
//     pointer[0].classList.add("active");
//     for(let i=0;i<pointer.length;i++){
//         pointer[i].onmouseover=function(){
//             for(let q=0;q<blook.length;q++){
//                 pointer[q].classList.remove("active");
//                 blook[q].style.display="none";
//             }
//             pointer[i].classList.add("active");
//             blook[i].style.display="block";
//         }
//     }
//     let back=document.querySelector(".backtop");
//     document.onscroll=function(){
//         if(document.body.scrollTop || document.documentElement.scrollTop>=900){
//             back.style.display="block";
//         }else{
//             back.style.display="none";
//         }
//     }
//     back.onclick=function(){
//         animate(document.body,{scrollTop:0});
//         animate(document.documentElement,{scrollTop:0});
//     }
//
// //    ***************
// //    选项卡
//     let leftjpg=document.querySelectorAll(".leftjpg a");
//     let amaz=document.querySelectorAll(".amaz");
//     for(let i=0;i<leftjpg.length;i++){
//         leftjpg[i].onmouseover=function () {
//             for(let j=0;j<leftjpg.length;j++){
//                 amaz[j].style.display="none";
//             }
//             amaz[i].style.display="flex";
//         }
//         leftjpg[i].onmouseout=function () {
//             amaz[i].style.display="none";
//         }
//     }
// //    *****
// //    下拉选项卡
//     let phone=document.querySelectorAll(".bbgg");
//     let xiala=document.querySelectorAll(".downla");
//     console.log(phone);
//     for(let i=0;i<phone.length;i++){
//         phone[i].onmouseover=function() {
//             for (let j = 0; j < xiala.length; j++) {
//                 xiala[j].style.height ="230px";
//                 xiala[j].style.zIndex = 1;
//             }
//             xiala[i].style.height = "230px";
//             xiala[i].style.zIndex = 999;
//         }
//         phone[i].onmouseout=function(){
//             for (let j=0;j<phone.length;j++){
//                 xiala[j].style.height=0;
//                 xiala[j].style.zIndex = 1;
//
//             }
//
//         }
//         }
// }

window.onload=function(){
    //购物车
    $(".toptext .rights").mouseenter(function(){
        $(".toptext .rights .hidden").clearQueue().slideDown();
    })
    $(".toptext .rights").mouseleave(function(){
        $(".toptext .rights .hidden").clearQueue().slideUp();
    })



//    轮播图
    let dot=$(".banners .dot ul li");
    let img=$(".banner .imgqw");
    let butL=$(".banner .banners .leftmini");
    let butR=$(".banner .banners .rightmini");
    let now=0;
    let t=setInterval( move,1000);
    function move() {
        now++;
        if(now==5){
            now=0;
        }
        img.css("z-index",5).eq(now).css("z-index",10);
        dot.removeClass("hots").eq(now).addClass("hots");
    }
    function moveL(){
        now--;
        if (now<0){
            now=4;
        }
        img.css("z-index",5).eq(now).css("z-index",10);
        dot.removeClass("hots").eq(now).addClass("hots");
    }
    dot.click(function () {
        let i=$(this).index();
        clearInterval(t);
        img.css("z-index",5).eq(i).css("z-index",10);
        dot.removeClass("hots").eq(i).addClass("hots");
    })

    butL.click(function () {
        clearInterval(t);
        moveL();
    })
    butR.click(function () {
        clearInterval(t);
        move();
    })
    $(".banners").mouseenter(function () {
        clearInterval(t);
    })
    $(".banners").mouseleave(function () {
        setInterval( move,1000);
    })



//侧边选项卡
let ru=$(".leftjpg a");
    let chu=$(".leftjpg a .amaz");
   ru.mouseenter(function () {
       chu.css("display","none");
       $(this).children(".amaz").css("display","flex");
   })
    ru.mouseleave(function () {
        chu.css("display","none");
    })
//小米闪购
    let you=$(".imgbox .Rightt");
   let zuo=$(".imgbox .Leftt");
    let big=$(".bbigg");
    you.click(function () {
        big.css("left","-957px");
    })
    zuo.click(function () {
        big.css("left",0);
    })

//热门
 let four=$(".hotqwe a");
let center=$(".hcenter");
    console.log(four);
    four.mouseenter(function () {
        let i=$(this).index();
        center.css("display","none").eq(i).css("display","block");
        four.removeClass("active");
        $(this).addClass("active");
    })
    four.triggerHandler("mouseenter");

//为你推荐
    let rit=$(".rrrit");
    let lft=$(".lllft");
    let bigbig=$(".bigfter");
    let times=0;
    rit.click(function () {
        times++;
        if(times==1){
            bigbig.css("left","-1200px");
        }else if(times==2){
            bigbig.css("left","-2400px");
        }else if(times>=3){
            times=2;
        }
    })
    lft.click(function () {
        times--;
        if(times==1){
            bigbig.css("left","-1200px");
        }else if(times==0){
            bigbig.css("left",0);
        }else if(times<0){
            times=0;
        }

    })




}



