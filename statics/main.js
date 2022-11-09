function logbox(ids){
    var s1=document.getElementById('login-div').style.display;
    var s2=document.getElementById('register-div').style.display;
    if(ids.id == 'login'){
        if(s1 == 'none'){
            document.getElementById('login-div').style.display = 'block';
            document.getElementById('register-div').style.display = 'none';
        }
    }else{
        if(s2 == 'none'){
            document.getElementById('login-div').style.display = 'none';
            document.getElementById('register-div').style.display = 'block';
        }
    }
}