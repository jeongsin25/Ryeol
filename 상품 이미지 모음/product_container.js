var product_user = document.getElementsByClassName('product_user')[0];
var product_brand = document.getElementsByClassName('product_brand')[0];
var product_name = document.getElementsByClassName('product_name')[0];
var product_size_ul = document.getElementsByClassName('product_size_ul')[0];
var product_size_ul_li = product_size_ul.querySelectorAll('li');
var product_buy = document.getElementsByClassName('product_buy');
var product_buy_size = document.getElementsByClassName('product_buy_size');
var product_buy_delete = document.getElementsByClassName('product_buy_delete');
var product_table_td = document.getElementsByClassName('product_table')[0].getElementsByTagName('td')
var input = document.getElementsByClassName('product_buy_add_input');



//복사
var product_price_cost = document.getElementsByClassName('product_price_cost')[0];
var product_price_cost_clone = product_price_cost.firstChild.cloneNode();

//붙여넣기
var product_buy_cost = document.getElementsByClassName('product_buy_cost');
product_buy_cost[0].appendChild(product_price_cost_clone);

var product_totalprice_cost = document.getElementsByClassName('product_totalprice_cost')[0];
product_totalprice_cost.innerText = 0;

var product_buy_clone_1 = product_buy[0].cloneNode(true);


var product_brand_clone = product_brand.firstChild.cloneNode();
var product_name_clone = product_name.firstChild.cloneNode();





// 상세페이지에 브랜드명 삽입
product_table_td[1].appendChild(product_brand_clone);

// 상세페이지에 상품명 삽입
product_table_td[0].appendChild(product_name_clone);


// 상세페이지에 사이즈 삽입
for(var i = 0 ; i < product_size_ul_li.length ; i++){
    var div = document.createElement('div');
    var product_size_clone = product_size_ul_li[i].firstChild.cloneNode();
    div.appendChild(product_size_clone);
    product_table_td[2].appendChild(div);
    
    if(i === product_size_ul_li.length - 1){
       break;
    }
    var div_1 = product_table_td[2].querySelectorAll('div');
    div_1[i].appendChild(document.createTextNode("/"));
}

//숫자 3자리마다 콤마
function addComma(num) {
  var regexp = /\B(?=(\d{3})+(?!\d))/g;
  return num.toString().replace(regexp, ',');
}










// 담아놓은 상품 삭제
product_user.addEventListener('click' , function(event){
    // 판매가 콤마 없애기
    product_price_cost.innerText = product_price_cost.innerText.replace(/,/g, "");
    
    // 총 금액 콤마 없애기
    product_totalprice_cost.innerText = product_totalprice_cost.innerText.replace(/,/g, "")
    
    // 사이즈별 상품 담기
    if(event.target.classList.contains('product_size_ul_li')){
        
        //각 상품 금액 콤마 없애기
        for(var i = 0 ; i < product_buy.length ; i++){
            if(event.target.innerText === product_buy[i].firstElementChild.innerText){
                product_buy[i].lastElementChild.previousElementSibling.firstElementChild.innerText = product_buy[i].lastElementChild.previousElementSibling.firstElementChild.innerText.replace(/,/g, "");
            }
        }
        
        
        /* 상품 모두 삭제 후 다시 담을때
        (기존에 있던 상품까지 삭제시키면 복사해서 사용할 수 없기 때문에 새롭게 만들어 줘야한다) */
        if(document.getElementsByClassName('product_size')[0] === document.getElementsByClassName('product_totalprice')[0].previousElementSibling){
            var product_user = document.getElementsByClassName('product_user')[0];
            var product_totalprice = document.getElementsByClassName('product_totalprice')[0];
            // 스타일 없애기
            product_user.insertBefore(product_buy_clone_1 , product_totalprice.previousSibling);
            product_buy[0].removeAttribute('style');
            
            // 사이즈 교체
            product_totalprice.previousElementSibling.firstChild.nextSibling.innerText = event.target.innerText;
            
            // 수량 1부터 시작하기
            product_totalprice.previousElementSibling.firstElementChild.nextElementSibling.firstElementChild.value = 1;
            
            // 상품 초기 금액
            product_buy_cost[0].innerText = product_price_cost.innerText;
            
            // 총 합계 금액 넣기
            product_totalprice_cost.innerText = product_price_cost.innerText;
        }
        // 그 외에
        else{
            // 처음에만 실행
            if(product_buy[0].style.display==="none"){
                // 각 상품 금액 콤마 없애기
                event.target.parentElement.parentElement.nextElementSibling.lastElementChild.previousElementSibling.firstElementChild.innerText = event.target.parentElement.parentElement.nextElementSibling.lastElementChild.previousElementSibling.firstElementChild.innerText.replace(/,/g, "");
                product_buy[0].removeAttribute('style');
                
                // 클릭한 사이즈 넣기
                product_buy_size[0].appendChild(document.createTextNode(event.target.innerText));
                
                // 수량(+1) 증가
                var input_value = input[0].value;
                var input_value_1 = 1;
                input[0].value = (+input_value+input_value_1);
                
                // 총 합계 금액 넣기
                product_totalprice_cost.innerText = product_buy_cost[0].innerText;
            }
            else if(product_buy[0].style.display!=="none"){
                for(var i = 0 ; i < product_buy_size.length ; i++){
                    // 이미 상품 있을경우 실행
                    if(event.target.innerText === product_buy_size[i].innerText){
                        // 수량(+1) 증가
                        var input_value = input[i].value;
                        var input_value_1 = 1;
                        input[i].value = (+input_value+input_value_1);
                        
                        // 상품 금액 증가
                        var cost = Number(product_buy_cost[i].innerText);
                        var cost_1 = Number(product_price_cost.innerText);
                        product_buy_cost[i].innerText = (cost+cost_1);
                        
                        // 총합 금액 증가
                        var total_cost = Number(product_totalprice_cost.innerText);
                        var total_cost_1 = Number(product_price_cost.innerText);
                        product_totalprice_cost.innerText = (total_cost+total_cost_1);
                        break;
                    }   
                    // 상품이 없을경우 실행 - 생성(복사)합니다.
                    else if(event.target.innerText !== product_buy_size[i].innerText){
                        // 새로운 창 복사 후 생성 (사이즈, 수량 등등 그대로 복사)
                        var product_buy_clone = product_buy[0].cloneNode(true);
                        var product_user = document.getElementsByClassName('product_user')[0];
                        var product_totalprice = document.getElementsByClassName('product_totalprice')[0];
                        product_user.insertBefore(product_buy_clone , product_totalprice.previousSibling);

                        // 사이즈 교체
                        product_totalprice.previousElementSibling.firstChild.nextSibling.innerText = event.target.innerText;

                        // 수량 1부터 시작하기
                        product_totalprice.previousElementSibling.firstElementChild.nextElementSibling.firstElementChild.value = 0;

                        // 금액 기본으로 맞추기
                        product_totalprice.previousElementSibling.lastElementChild.previousElementSibling.firstElementChild.innerText = 0;

                        //사이즈 중복 삭제

                        for(var j = 0 ; j < product_buy.length ; j++){
                            if(event.target.innerText === product_buy_size[j].innerText){
                                var test = product_buy.length - (j+1);
                                if(test !== 0){
                                    product_buy[j].parentNode.removeChild(product_buy[j + test]);
                                    continue;
                                }
                            }
                        }
                    }
                }
            }
        }
        // 각 금액 콤마 넣기
        for(var i = 0 ; i < product_buy.length ; i++){
            if(event.target.innerText === product_buy[i].firstElementChild.innerText){
                product_buy[i].lastElementChild.previousElementSibling.firstElementChild.innerText = addComma(product_buy[i].lastElementChild.previousElementSibling.firstElementChild.innerText);
            }
        }
    }
    
    // 담아놓은 상품 삭제
    else if(event.target.classList.contains('product_buy_delete')){
        // 각 상품 금액 콤마 없애기
        event.target.previousElementSibling.firstElementChild.innerText = event.target.previousElementSibling.firstElementChild.innerText.replace(/,/g, "");
        
        event.target.parentNode.parentNode.removeChild(event.target.parentNode);
        // 총 금액 차감
        var total_minus = Number(product_totalprice_cost.innerText);
        var total_minus_1 = Number(event.target.previousElementSibling.firstElementChild.innerText);
        
        product_totalprice_cost.innerText = total_minus - total_minus_1;
    }
    
    // +버튼(수량 1개 늘리기)
    else if(event.target.classList.contains('product_buy_plus')){
        // 각 상품 금액 콤마 없애기
        event.target.parentElement.nextElementSibling.firstElementChild.innerText = event.target.parentElement.nextElementSibling.firstElementChild.innerText.replace(/,/g, "");
        
        // 수량(+1) 증가
        var input_value = event.target.previousElementSibling.value;
        var input_value_1 = 1;
        event.target.previousElementSibling.value = (+input_value+input_value_1);
        
        // 각 상품 금액 증가
        var cost_plus = Number(event.target.parentElement.nextElementSibling.firstElementChild.innerText);
        var cost_plus_1 = Number(product_price_cost.innerText);
        event.target.parentElement.nextElementSibling.firstElementChild.innerText = cost_plus+cost_plus_1;
        
        // 총 합계 금액 증가
        var total_cost = Number(product_totalprice_cost.innerText);
        var total_cost_1 = Number(product_price_cost.innerText);
        product_totalprice_cost.innerText = (total_cost+total_cost_1);
        
        // 각 상품 금액 콤마 없애기
        event.target.parentElement.nextElementSibling.firstElementChild.innerText = addComma(event.target.parentElement.nextElementSibling.firstElementChild.innerText);
    }
    
    // -버튼(수량 1개 줄이기)
    else if(event.target.classList.contains('product_buy_minus')){
        // 각 상품 금액 콤마 없애기
        event.target.parentElement.nextElementSibling.firstElementChild.innerText = event.target.parentElement.nextElementSibling.firstElementChild.innerText.replace(/,/g, "");
        if(event.target.previousElementSibling.previousElementSibling.value > 1){
            // 수량(-1) 감소
            var input_value = event.target.previousElementSibling.previousElementSibling.value;
            var input_value_1 = 1;
            event.target.previousElementSibling.previousElementSibling.value = Number(input_value - input_value_1);

            // 각 상품 금액 감소
            var cost_minus = event.target.parentElement.nextElementSibling.firstElementChild.innerText;
            var cost_minus_1 = product_price_cost.innerText;
            event.target.parentElement.nextElementSibling.firstElementChild.innerText = Number(cost_minus - cost_minus_1);

            // 총 합계 금액 감소
            var total_cost = product_totalprice_cost.innerText;
            var total_cost_1 = product_price_cost.innerText;
            product_totalprice_cost.innerText = Number(total_cost - total_cost_1);
        }
        // 각 상품 금액 콤마 없애기
        event.target.parentElement.nextElementSibling.firstElementChild.innerText = addComma(event.target.parentElement.nextElementSibling.firstElementChild.innerText);
    }
    
    // 판매가 콤마 넣기
    product_price_cost.innerText = addComma(product_price_cost.innerText);
    
    // 총 금액 콤마 넣기
    product_totalprice_cost.innerText = addComma(product_totalprice_cost.innerText);
})



product_user.addEventListener('change' , function(event){
    
    // 판매가 콤마 없애기
    product_price_cost.innerText = product_price_cost.innerText.replace(/,/g, "");
    
    // 각 상품 금액 콤마 없애기
    event.target.parentElement.nextElementSibling.firstElementChild.innerText = event.target.parentElement.nextElementSibling.firstElementChild.innerText.replace(/,/g, "");
    
    // 총 금액 콤마 없애기
    product_totalprice_cost.innerText = product_totalprice_cost.innerText.replace(/,/g, "")
    
    // input값 변경했을때
    if(event.target.classList.contains('product_buy_add_input')){
        // input값이 1이상 일때   
        if(event.target.value > 0){
            // 총 합계에서 현 상품 금액 뺀 값 (총 합계 금액 변동 에서 사용)    
            var total_1 = Number(product_totalprice_cost.innerText - event.target.parentElement.nextElementSibling.firstElementChild.innerText);

            // 각 상품 금액 변동
            var input_value = event.target.value;
            var input_value_1 = product_price_cost.innerText;
            event.target.parentElement.nextElementSibling.firstElementChild.innerText = Number(input_value * input_value_1);

            // 총 합계 금액 변동
            var total = product_totalprice_cost.innerText;
            product_totalprice_cost.innerText = Number(total_1 + (input_value * input_value_1));
        }
        // input값이 1 밑으로 변경했을때
        else{
            // 총 합계에서 현 상품 금액 뺀 값 (총 합계 금액 변동 에서 사용)
            var total_1 = Number(product_totalprice_cost.innerText - event.target.parentElement.nextElementSibling.firstElementChild.innerText);
            
            // 상품 수량 초기화
            event.target.value = 1;
            
            // 상품 금액 초기화
            event.target.parentElement.nextElementSibling.firstElementChild.innerText = product_price_cost.innerText;
            
            // 총 합계 금액 변동
            product_totalprice_cost.innerText = Number(total_1 + Number(event.target.parentElement.nextElementSibling.firstElementChild.innerText));
        }
        
        // 판매가 콤마 넣기
        product_price_cost.innerText = addComma(product_price_cost.innerText);
        
        // 각 상품 금액 콤마 없애기
        event.target.parentElement.nextElementSibling.firstElementChild.innerText = addComma(event.target.parentElement.nextElementSibling.firstElementChild.innerText);

        // 총 금액 콤마 넣기
        product_totalprice_cost.innerText = addComma(product_totalprice_cost.innerText);
    }
})


// 판매가 콤마 넣기
product_price_cost.innerText = addComma(product_price_cost.innerText);

// 총 금액 콤마 넣기
product_totalprice_cost.innerText = addComma(product_totalprice_cost.innerText);






// 구매하기 버튼 클릭
var product_buybutton_center = document.getElementsByClassName('product_buybutton_center')[0];
product_buybutton_center.addEventListener('click' , function(){
    var product_size = document.getElementsByClassName('product_size')[0];
    var product_totalprice = document.getElementsByClassName('product_totalprice')[0];
    if(product_size.nextElementSibling === product_totalprice || product_buy[0].style.display === "none"){
        alert('사이즈를 선택해주세요.')
    }
    else{
        if(confirm('구매하시겠습니까?')){
            alert('공식 브랜드 홈페이지 가셔서 구매 부탁드립니다.')
        }
    }
})



// footer_bottom_ul 홈페이지 링크 활성화
var footer_bottom_ul = document.getElementsByClassName('footer_bottom_ul')[0];
var header_middle = document.getElementsByClassName('header_middle')[0];
var home_link = header_middle.firstElementChild.getAttribute('href');
footer_bottom_ul.firstElementChild.firstElementChild.setAttribute('href' , home_link)
console.log(footer_bottom_ul.firstElementChild.firstElementChild)

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











