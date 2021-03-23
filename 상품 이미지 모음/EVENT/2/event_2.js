// 장바구니 클릭
var product_user_keep = document.getElementsByClassName('product_user_keep')[0];
product_user_keep.addEventListener('click' , function(){
    alert('장바구니에 담겼습니다.');
})
// 구매하기 클릭
var product_user_buy = document.getElementsByClassName('product_user_buy')[0];
product_user_buy.addEventListener('click' , function(){
    if(confirm('구매하시겠습니까?')){
        alert('공식 브랜드 홈페이지 가셔서 구매 부탁드립니다.');
    }
})