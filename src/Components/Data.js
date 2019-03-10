import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb,Row, Col, Slider ,Timeline ,Anchor,Icon} from 'antd';

import poPanda4 from "./poPanda4.png";

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

class Data extends Component{

  render(){
    return(
      <Row style={{height:"600px",backgroundColor:"#395454",width:"100%",top:"-180px"}} id={"3"}>
      <Col span={10} style={{height:"100%",padding:"50px",paddingLeft:"230px"}} className={"grow"}>
      <h1 style={{top:"54px",color:"#f5a623"}}><Icon type="user" style={{fontSize:"50px"}}/> About Me</h1>
      <p style={{width:"400px",fontSize:"18px"}}>I am a passionate User Experience Developer who has been practicing and training in this field for more than 14 months now.I am a Junior Computer Engineering student at Nile University
 I love my major as a computer engineering student. If you have an idea let's turn it into reality </p>
      </Col>

      <Col className={"grow"} span={8} style={{height:"100%"}}>
      <img  src={poPanda4} width={"60%"} height={"100%"}/>
      </Col>
      <Col span={6} style={{height:"100%",paddingTop:"50px"}} >
      <h1 style={{top:"54px",color:"#f5a623"}}><Icon type="user-add" style={{fontSize:"50px"}}/> Experience</h1>
      <p style={{width:"400px",fontSize:"18px"}}>I got two internships in Optomatica for 4 months where I started my journey in web development. Then I got a certificate from CodeCamp in JavaScript and datastructure and algorithms. I started to learn on my own and build some web apps as projects </p>
      <h1 style={{paddingTop:"50px",color:"#f5a623"}}><Icon type="message" style={{fontSize:"50px"}}/> Contact</h1>

        <a href={"https://github.com/MrOttimista"}><Icon type="github" style={{fontSize:"50px",color:"black"}} /></a>
        <a href={"https://www.facebook.com/adel.emad.3954"}><Icon type="facebook" style={{fontSize:"50px",color:"black",marginLeft:"10px"}} /></a>
        <a href={"https://www.linkedin.com/in/adel-emad-615422154"}><Icon type="linkedin" style={{fontSize:"50px",color:"black",marginLeft:"10px"}} /></a>

      <p style={{width:"400px",fontSize:"18px"}}></p>

      </Col>
      </Row>
    )
  }
}

export default Data
