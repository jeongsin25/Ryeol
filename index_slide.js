var slide = document.querySelectorAll('.slidelist li');
var totalSlide = slide.length;
var slideIndex = 0;

var slideWrap = document.getElementsByClassName('container_slidewrap')[0];
var slideList = document.getElementsByClassName('slidelist')[0]

slideWrap.addEventListener('mouseover' , function(){
    clearInterval(autoSlide)
})
slideWrap.addEventListener('mouseout' , function(){
    autoSlide = setInterval(function(){
        plusSlide(1);
    } , 5000)
})

var button_left = document.getElementsByClassName('button_left')[0];
var button_right = document.getElementsByClassName('button_right')[0];

button_left.addEventListener('click' , function(){
    plusSlide(-1);
})
button_right.addEventListener('click' , function(){
    plusSlide(1);
})


function plusSlide(n){
    showSlide(slideIndex += n);
}

function showSlide(n){
    slideIndex = n;
    if(slideIndex === -1){
       slideIndex = totalSlide - 1;
    }
    else if(slideIndex === totalSlide){
        slideIndex = 0;
    }
//    slideList.style.marginLeft = -1200 * slideIndex + "px";
    slideList.style.transform = "translate(" + -1200 * slideIndex + "px)"
    
}

autoSlide = setInterval(function(){
    plusSlide(1);
} , 5000)

