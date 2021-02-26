$(document).ready(function (){
    
    $("#page_top").click(function (){
        $('html, body').animate({
            scrollTop: $("#Top").offset().top-100
        }, 2000);
    });

    $("#NAVsupecorbe").click(function (){
        $('html, body').animate({
            scrollTop: $("#supecorbe").offset().top
        }, 2000);
    });

    $("#NAVobrok").click(function (){
        $('html, body').animate({
            scrollTop: $("#obrok").offset().top
        }, 2000);
    });

    $("#NAVjelanameru").click(function (){
        $('html, body').animate({
            scrollTop: $("#jelanameru").offset().top
        }, 2000);
    });

    $("#NAVkontakt").click(function (){
        $('html, body').animate({
            scrollTop: $("#kontakt").offset().top
        }, 2000);
    });

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("page_top").style.display = "block";
        } else {
          document.getElementById("page_top").style.display = "none";
        }
      }

    window.onscroll = function() {scrollFunction()};
});

var p1 = [];
var p2 = [];
var p3 = [];
p1 = document.getElementById('meni1').getElementsByTagName("div");
p2 = document.getElementById('meni2').getElementsByTagName("div");
p3 = document.getElementById('meni3').getElementsByTagName("div");
var i1;
var i2;
var i3;

var mql = window.matchMedia("(max-width: 768px)");
if(mql.matches){
    for (i1 = 0; i1 < p1.length; i1++) {
        p1[i1].classList.add("col-6");
        p1[i1].classList.remove("col-4");
    } 
}
else{
    for (i1 = 0; i1 < p1.length; i1++) {
        p1[i1].classList.add("col-4");
        p1[i1].classList.remove("col-6");
    }
}
mql.addEventListener("change", (e)=>{
    if(e.matches){
        for (i1 = 0; i1 < p1.length; i1++) {
            p1[i1].classList.add("col-6");
            p1[i1].classList.remove("col-4");
        } 
    }
    else{
        for (i1 = 0; i1 < p1.length; i1++) {
            p1[i1].classList.add("col-4");
            p1[i1].classList.remove("col-6");
        }
    }
})

if(mql.matches){
    for (i2 = 0; i2 < p2.length; i2++) {
        p2[i2].classList.add("col-6");
        p2[i2].classList.remove("col-4");
    } 
}
else{
    for (i2 = 0; i2 < p2.length; i2++) {
        p2[i2].classList.add("col-4");
        p2[i2].classList.remove("col-6");
    }
}
mql.addEventListener("change", (e)=>{
    if(e.matches){
        for (i2 = 0; i2 < p2.length; i2++) {
            p2[i2].classList.add("col-6");
            p2[i2].classList.remove("col-4");
        } 
    }
    else{
        for (i2 = 0; i2 < p2.length; i2++) {
            p2[i2].classList.add("col-4");
            p2[i2].classList.remove("col-6");
        }
    }
})

if(mql.matches){
    for (i3 = 0; i3 < p3.length; i3++) {
        p3[i3].classList.add("col-6");
        p3[i3].classList.remove("col-4");
    } 
}
else{
    for (i3 = 0; i3 < p3.length; i3++) {
        p3[i3].classList.add("col-4");
        p3[i3].classList.remove("col-6");
    }
}
mql.addEventListener("change", (e)=>{
    if(e.matches){
        for (i3 = 0; i3 < p3.length; i3++) {
            p3[i3].classList.add("col-6");
            p3[i3].classList.remove("col-4");
        } 
    }
    else{
        for (i3 = 0; i3 < p3.length; i3++) {
            p3[i3].classList.add("col-4");
            p3[i3].classList.remove("col-6");
        }
    }
})