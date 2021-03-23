var nav_name = document.getElementsByClassName('nav_name')[0];
var product_ul = document.getElementsByClassName('product_ul')[0];
var imgs = product_ul.getElementsByTagName('img');
nav_name.innerText = "남성 전체보기 - (" + (imgs.length + (20*0)) + ")";