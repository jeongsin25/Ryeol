var id0 = document.getElementsByClassName('id')[0];
var id_input0 = id0.getElementsByTagName('input')[0];
var pw0 = document.getElementsByClassName('pw')[0];
var pw_input0 = pw0.getElementsByTagName('input')[0];
var submit0 = document.getElementsByClassName('submit')[0];
var submit_input0 = submit0.getElementsByTagName('input')[0];
//var g = document.forms.login.id.value;
//var h = document.forms.login.pw.value;




submit_input0.addEventListener('click' , function(){
    var er_id = document.getElementById('error_id');
    var er_pw_false = document.getElementById('error_pw&false');
    
    
    if(id_input0.value.length === 0){
        er_id.innerText = "아이디를 입력해주세요.";
        er_pw_false.innerText = "";
        
    }
    else if(pw_input0.value.length === 0){
        er_id.innerText = "";
        er_pw_false.innerText = "비밀번호를 입력해주세요."
    }
    else{
        if(id_input0.value === "hello" && pw_input0.value === "9999"){
            er_id.innerText = "";
            er_pw_false.innerText = "";
            alert('로그인에 성공하셨습니다!')
            location.href="index.html"
        }
        else{
            er_id.innerText = "";
            er_pw_false.innerText = "가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.";
        }
        
    }
})



var z = document.getElementsByClassName('login')[0];
z.addEventListener('submit' , function(event){
    if(id_input0.value !== "jeongsin" || pw_input0.value !== "111111"){
        event.preventDefault();
    }
})

var id_find = document.getElementsByClassName('id_find')[0];
var pw_find = document.getElementsByClassName('pw_find')[0];
var sign_up = document.getElementsByClassName('sign_up')[0];

id_find.addEventListener('click' , function(){
    alert('서바가 없어 임시 아이디를 발급해드리겠습니다\n아이디: hello 비밀번호: 9999')
})
pw_find.addEventListener('click' , function(){
    alert('서바가 없어 임시 아이디를 발급해드리겠습니다\n아이디: hello 비밀번호: 9999')
})
sign_up.addEventListener('click' , function(){
    alert('서바가 없어 임시 아이디를 발급해드리겠습니다\n아이디: hello 비밀번호: 9999')
})



















