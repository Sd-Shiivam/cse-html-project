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

function contact_save(){
    let name=document.getElementsByClassName('con-inp')[0].value;
    let email=document.getElementsByClassName('con-inp')[1].value;
    let number=document.getElementsByClassName('con-inp')[2].value;
    let msg=document.getElementsByClassName('con-inp')[3].value;
    if(name==''){
        document.getElementById('war-con').style.display='block';
    }
    else{
        console.log(name,email,number,msg);
        document.getElementById('contact-form').innerHTML ='<span style="display: block;color: white;font-size: 25px;margin-top: 120px;margin-left: -100px;text-shadow: -1px 5px 7px rebeccapurple;">Thanks For contacting Us! <br> We will get back to you soon.</span>';
    }
}