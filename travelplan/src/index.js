import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom'; //router 처리할 범위 정해줌
import Header from "./components/Header";
import Body from "./components/Body";

ReactDOM.render(
  <HashRouter>
    <Header/>
    <Body/>
  </HashRouter>,
  document.querySelector("#root") 
);


