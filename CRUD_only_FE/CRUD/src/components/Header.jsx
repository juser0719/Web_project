import React, { Component } from "react";
import { Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";
import $ from "jquery";
import {} from "jquery.cookie";

class Header extends Component 
{

  state = {
    buttonDisplay: "none"
  };

  componentDidMount() 
  {
    if ($.cookie("login_name")) 
    {
      this.setState({
        buttonDisplay: "block" // login cookie가 존재한다면 로그아웃, 글목록, 글쓰기 버튼을 보이게 함
      });
    } else 
    {
      this.setState({
        buttonDisplay: "none" // login cookie가 존재하지 않는다면, 로그아웃, 글목록, 글쓰기 버튼을 보이지 않게 함
      });
    }
  }

  logout = () => 
  {
    $.removeCookie("login_name"); //쿠키 삭제
    alert("로그아웃 되었습니다!");
    window.location.href = "/";// 홈 화면(BODY)으로 돌아감
  };

  render() {
    const buttonStyle = {
      margin: "0px 5px 0px 10px",
      display: this.state.buttonDisplay
    };

    return (
      <div>
        <Navbar>

          <Navbar.Collapse className="justify-content-end">
            <Button style={buttonStyle} variant="dark">
              welcome! {$.cookie("login_name")}
            </Button>
            <Button style={buttonStyle} onClick={this.logout} variant="primary">
              로그아웃
            </Button>
            
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
