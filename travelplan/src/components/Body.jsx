//BODY 페이지 (페이지의 전반적 이동만)
import React, { Component } from "react";
import Login from "./Login/Login";
import Board from "./Board/Board";

import { Route } from "react-router-dom";
import $ from "jquery";
import {} from "jquery.cookie";

class Body extends Component {
  render() {
    let resultForm;
    function getResultForm() {
       console.log($.cookie("login_name"));
      if ($.cookie("login_name")) // 쿠키의 login_id 키값에 값이 있다면 == login 성공  
      {
        resultForm = <Route exact path="/" component={Board}></Route>; //게시판 페이지로..
        return resultForm;
      } else //로그인 실패면 그냥 로그인 페이지로
      {
        resultForm = <Route exact path="/" component={Login}></Route>;
        return resultForm;
      }
    }
    getResultForm();
    return (
      <div>
        {resultForm}
      </div>
    );
  }
}

export default Body;
