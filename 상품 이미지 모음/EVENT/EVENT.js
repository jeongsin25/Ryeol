// footer_bottom_ul 홈페이지 링크 활성화
var footer_bottom_ul = document.getElementsByClassName('footer_bottom_ul')[0];
var header_middle = document.getElementsByClassName('header_middle')[0];
var home_link = header_middle.firstElementChild.getAttribute('href');
footer_bottom_ul.firstElementChild.firstElementChild.setAttribute('href' , home_link)

//footer_bottom_ul 고객센터 링크
var footer_bottom_ul = document.getElementsByClassName('footer_bottom_ul')[0];
var a2 = footer_bottom_ul.firstElementChild.nextElementSibling.firstElementChild.addEventListener('click' , function(){
    alert("궁금해서 눌러봤쥬~?");
})
// footer_bottom_ul 이용약관 링크
var a3 = footer_bottom_ul.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.addEventListener('click' , function(){
    alert("잼게 이용해요~~");
})
// footer_bottom_ul 이용약관 링크
var a4 = footer_bottom_ul.lastElementChild.firstElementChild.addEventListener('click' , function(){
    alert("개인정보 수집 안해요~");
})

// header_top_ul 회원가입 링크
var header_top_ul = document.getElementsByClassName('header_top_ul')[0];
header_top_ul.firstElementChild.nextElementSibling.firstElementChild.addEventListener('click' , function(){
    if(confirm('회원가입 하고 싶어유~?')){
        if(prompt('그럼 함 아이디 입력해봐유~')){
            if(prompt('비밀번호도 입력해봐유~~')){
                alert('개인정보ㄳ')
                alert('장난^^')
            }
        }
    }
})
// header_top_ul 고객센터 링크
header_top_ul.lastElementChild.firstElementChild.addEventListener('click' , function(){
    alert('저희는 고객센터 그런거 없어유~')
})