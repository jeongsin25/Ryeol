var product_ul = document.getElementsByClassName('product_ul')[0];
product_ul.addEventListener('click' , function(event){
    // 장바구니 클릭
    if(event.target.classList.contains('product_user_keep')){
        alert('장바구니에 담겼습니다.');
    }
    // 구매하기 클릭
    else if(event.target.classList.contains('product_user_buy')){
        if(confirm('구매하시겠습니까?')){
            alert('공식 브랜드 홈페이지 가셔서 구매 부탁드립니다.');
        }
    }
})