import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import $ from "jquery";
import {} from "jquery.cookie";
import './Login.css';
const Login = () => 
{
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');

    const users = [
        { email: "a@naver.com", password: "123", name: "Jeon" },
        { email: "b@naver.com", password: "123", name: "Woong" },
        { email: "c@naver.com", password: "123", name: "Jae" }
    ];

  const  login = () => 
  {
    const send_param = 
    {
      email: email,
      password: password
    };

    let user;

    for(var i = 0 ; i < users.length ; i++)
    {
        if(users[i].email === send_param.email)
            if(users[i].password === send_param.password)
                user = i;            
    }
    
    console.log("email: "+ email + ", password : "+ password  + " , user : " + user );
    if (user  >= 0 ) 
    {
        $.cookie("login_email", users[user].email, { expires: 1 });
        $.cookie("login_name", users[user].name, { expires: 1 });
        console.log("login_email:" + users[user].email +", login_name:" + users[user].name);
        window.location.reload(); // 리로드 해줘야 설정됨
        alert("로그인 성공");
    } else 
    {
        if(email === "")
            alert("email을 입력해주세요");
        else if(password === "")
            alert("비밀번호를 입력해주세요");
        else
            alert("로그인 실패!");
    }

  };
  
    return(
        <div className = "OuterContainer">
            <div className = "InnerContainer">
                <h1 className= "heading">Login</h1>
                <div><input className = "joinInput" placeholder = "Email" type="email" onChange = {(e) => setEmail(e.target.value)} /></div>
                <div><input className = "joinInput mt-20" placeholder = "Password" type="password" onChange = {(e) => setPass(e.target.value)} /></div>
                <Button className = "button mt-20" type = "submit" onClick={login}>Sign In</Button>
            </div>
        </div>
    )
}

export default Login;