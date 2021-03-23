
// 사이드바 + 만들기
var product_wrap_menu = document.querySelectorAll('.product_wrap_menu');
for(var i = 0 ; i < product_wrap_menu.length ; i++){
    var button = document.createElement('button');
    var plus = document.createTextNode('+');
    button.appendChild(plus);
    product_wrap_menu[i].insertBefore(button , document.querySelectorAll('.product_wrap_menu > a')[i])
}










var product_wrap = document.querySelector('.product_wrap');
var product_wrap_menu_button = document.querySelectorAll('.product_wrap_menu > button');

// 사이드바 +/- 설정
product_wrap.addEventListener('click' , function(event){
    // 버튼클릭(+/- 클릭)
    if(event.target = product_wrap_menu_button){
        // + 클릭
        if(event.target.innerText === "+"){
            event.target.innerText = "-"
            // 메뉴에 있는 제목 (의류,신발 등등..)
            var sub_nav_ul_div_li_a = document.querySelectorAll('.sub_nav_ul > div > li > a');
            // 메뉴에 있는 성별 (MEN,WOMEN 등등..)
            var header_bottom_ul_li_a = document.querySelectorAll('.header_bottom_ul > li > a');
            // 사이드 메뉴 대제목 (MEN , WOMEN 등등..)
            var product_wrap_title_a = document.querySelector('.product_wrap_title > a');
            for(var j = 0 ; j < header_bottom_ul_li_a.length ; j++){
                // 성별 구분
                if(product_wrap_title_a.innerText === header_bottom_ul_li_a[j].innerText){
                    var ul = document.createElement('ul');
                    for(var i = 0 ; i < header_bottom_ul_li_a[j].nextElementSibling.firstElementChild.childElementCount ; i++){
                        // 메인 분류 (의류,신발 등등..)
                        if(event.target.nextElementSibling.innerText === sub_nav_ul_div_li_a[i].innerText){
                            for(var h = 0 ; h < header_bottom_ul_li_a[j].nextElementSibling.querySelectorAll('.sub_nav_ul > div > li > a')[i].nextElementSibling.childElementCount ; h++){
                                var sub_nav_list_li_a = header_bottom_ul_li_a[j].nextElementSibling.querySelectorAll('.sub_nav_ul > div > li > a')[i].nextElementSibling.querySelectorAll('.sub_nav_list > li > a');
                                var list = sub_nav_list_li_a[h].firstChild;
                                var list_clone = list.cloneNode(true);
                                var li = document.createElement('li');
                                var a = document.createElement('a');
                                var href = sub_nav_list_li_a[h].getAttribute('href');
                                a.setAttribute('href' , href)
                                a.appendChild(list_clone);
                                li.appendChild(a);
                                ul.appendChild(li);
                                event.target.parentElement.appendChild(ul);
                            }
                        }
                    }
                }
            }
            
        }
        // - 클릭
        else if (event.target.innerText === "-"){
            event.target.innerText = "+"
            event.target.parentElement.removeChild(event.target.nextElementSibling.nextElementSibling);
            
        }
    }
})











//scroll 맨 위로 올리기
var a = document.createElement('a')
a.setAttribute('href' , '#top');
a.classList = 'top_button';
a.style.opacity = 0;
a.style.display = 'none';
var container = document.getElementsByClassName('container')[0];
container.appendChild(a);
document.addEventListener('scroll' , function(){
    if(window.pageYOffset < 300){
        a.style.opacity = 0;
        a.style.display = 'none';
    }
    else if(window.pageYOffset > 300){
        a.style.opacity = 1;
        a.style.display = "";
    }
})






// 장바구니 클릭
var product_user_keep = document.getElementsByClassName('product_user_keep')[0];
product_user_keep.addEventListener('click' , function(){
    alert('장바구니에 담겼습니다.')
})
// 구매하기 클릭
var product_user_buy = document.getElementsByClassName('product_user_buy')[0];
product_user_buy.addEventListener('click' , function(){
    if(confirm('구매하시겠습니까?')){
        alert('공식 브랜드 홈페이지 가셔서 구매 부탁드립니다.')
    }
})




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
















