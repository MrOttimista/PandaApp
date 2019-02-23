import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb,Row, Col, Slider ,Timeline ,Anchor,Icon} from 'antd';
import po from "./panda.png";
import poPanda3 from "./poPanda3.png";
import poPanda4 from "./poPanda4.png";

class Home1 extends Component{

  render(){
    return(
      <Row style={{height:"600px",backgroundColor:"white",width:"100%",top:"-110px"}} id={"3"}>
      <Col span={10} style={{height:"100%",padding:"50px",paddingLeft:"230px"}} className={"grow"}>
      <h1 style={{top:"54px",color:"#f5a623"}}><Icon type="user" style={{fontSize:"50px"}}/> About Me</h1>
      <p style={{width:"400px",fontSize:"18px"}}>I am a passionate User Experience and User Interface Designer who has been working in this field for more than 3 years now.
You have an idea, you need someone to bring it ot life. Or you already have a product that needs to be redined to meet the demand of 2017 users!. This is where i come in! With my knowledge and creativity. I can take your idea, your product to the next level. Let's have a chat and discuss your idea!</p>
      </Col>
      <Col className={"grow"} span={8} style={{height:"100%"}}>
      <img  src={poPanda4} width={"60%"} height={"100%"}/>
      </Col>
      <Col span={6} style={{height:"100%",paddingTop:"50px"}} >
      <h1 style={{top:"54px",color:"#f5a623"}}><Icon type="user" style={{fontSize:"50px"}}/> About Me</h1>
      <p style={{width:"400px",fontSize:"18px"}}>I am a passionate User Experience and User Interface Designer who has been working in this field for more than 3 years now.
You have an idea, you need someone to bring it ot life. Or you already have a product that needs to be redined to meet the demand of 2017 users!. This is where i come in! With my knowledge and creativity. I can take your idea, your product to the next level. Let's have a chat and discuss your idea!</p>

      </Col>
      </Row>
    )
  }
}

export default Home1
