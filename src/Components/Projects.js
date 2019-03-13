import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb,Row, Col, Slider ,Timeline ,Anchor,Icon} from 'antd';
import poPanda4 from "./poPanda4.png";
import reactPng from "./react.png";
import d3 from "./d3.png";
import reduxPng from "./redux.png"

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

class Projects extends Component{

  render(){
    return(
      <Row style={{height:"880px",backgroundColor:"#395454",top:"-430px"}} id={"3"}>
      <Col span={10} style={{height:"100%",padding:"50px",paddingLeft:"230px"}} className={"grow"}>
      <h1 style={{paddingTop:"120px",color:"#f5a623"}}><Icon type="laptop" style={{fontSize:"50px"}}/> Projects</h1>
      <Row style={{paddingLeft:"20px"}}>
      <h1 style={{color:""}}><Icon type="robot" style={{fontSize:"30px"}}/> Chatbot</h1><p style={{color:"white"}}><span style={{color:"white"}}><span style={{fontSize:"20px"}}>
        I was responsible for developing the frontend of a Chatbot web application in Optomatica, connecting the backend with the frontend.
        I used React and Redux in this web application. In this application i used AntDesign as an UI library.
      </span>
      </span>
      <br />
      <img src={reactPng} width={"90px"}/>      <img src={reduxPng} width={"70px"}/>   <img src={d3}style={{paddingLeft:"10px"}} width={"70px"}/>
      </p>
      </Row>
      <Row style={{paddingLeft:"20px",paddingTop:"30px"}}>
      <h1 style={{color:""}}><Icon type="robot" style={{fontSize:"30px"}}/> MineSweeper App</h1><p style={{color:"white"}}><span style={{color:"white",fontSize:"20px"}}>
        I bulid this game app and it was a practicing for myself. The game is MineSweeper and the whole game and the alogorithm is written by me.In this application, I used d3 library (Radar Chart) to simulate the data from users.
        I used React and Redux in this web application. <a href={"https://github.com/MrOttimista/gameApp"}>click here to review it</a>
      </span>
      <img src={reactPng} width={"90px"}/>   <img src={d3}style={{paddingLeft:"10px"}} width={"70px"}/>
      </p>
      </Row>
      </Col>
      <Col className={"grow"} span={8} style={{height:"100%",paddingTop:"230px",paddingLeft:"220px"}}>
    <h1 style={{color:""}}><Icon type="robot" style={{fontSize:"30px"}}/> Protfolio App</h1> <p style={{color:"white"}}><span style={{color:"white",fontSize:"20px"}}>
        This app is developed through two phases: the first one was a draft for this app which has many bugs and errrors. the second phase is this app where I used React and Particles js to develop it...
          <a href={"https://github.com/MrOttimista/MrOttimista.github.io"}>click here to review it</a>
      </span>
      </p>
      </Col>
      </Row>
    )
  }
}

export default Projects
