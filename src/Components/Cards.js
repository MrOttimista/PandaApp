import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb,Row, Col, Slider ,Timeline ,Anchor,Icon,Card,Progress,Divider} from 'antd';
import {Animated} from "react-animated-css";
import ReactWOW from 'react-wow'
import WOW from 'wowjs';

const { Meta } = Card;

class Cards extends Component{

  componentDidMount() {
    new WOW.WOW().init();
  }
  render(){
    return(
      <Row style={{height:"950px",width:"50%",backgroundColor:"#bc9889",marginBottom:"-70px",left:"25%",top:"-370px",zIndex:10}}  justify={"center"} id={"4"} className={"First"}>
      <Row justify={"center"}>
          <h1 style={{fontSize:"40px",paddingLeft:"40%",paddingTop:"20px"}}> My Skills </h1>
        </Row>

      <Row style={{width:"80%"}} justify={"center"}>
        <Row><h1 style={{paddingLeft:"20px"}}>Programming Skills</h1></Row>
        <hr />
          <Row><Col span={4}> <h3 style={{paddingLeft:30}}>Html</h3></Col> <Col><Progress percent={94} status="active" style={{paddingLeft:30,width:600}} /></Col></Row>
          <Row><Col span={4}> <h3 style={{paddingLeft:30}}>Css</h3></Col> <Col><Progress percent={94} status="active" style={{paddingLeft:30,width:600}} /></Col></Row>
          <Row><Col span={4}> <h3 style={{paddingLeft:30}}>JavaScript</h3></Col> <Col><Progress percent={93} status="active" style={{paddingLeft:30,width:600}} /></Col></Row>
          <Row><Col span={4}> <h3 style={{paddingLeft:30}}>React</h3></Col> <Col><Progress percent={90} status="active" style={{paddingLeft:30,width:600}} /></Col></Row>
          <Row><Col span={4}> <h3 style={{paddingLeft:30}}>ReactNative</h3></Col> <Col><Progress percent={60} status="active" style={{paddingLeft:30,width:600}} /></Col></Row>
          <Row><Col span={4}> <h3 style={{paddingLeft:30}}>Redux</h3></Col> <Col><Progress percent={89} status="active" style={{paddingLeft:30,width:600}} /></Col></Row>
          <Row><Col span={4}> <h3 style={{paddingLeft:30}}>Bootstap</h3></Col> <Col><Progress percent={90} status="active" style={{paddingLeft:30,width:600}} /></Col></Row>
          <Row><Col span={4}> <h3 style={{paddingLeft:30}}>C++</h3></Col> <Col><Progress percent={80} status="active" style={{paddingLeft:30,width:600}} /></Col></Row>
          <Row><Col span={4}> <h3 style={{paddingLeft:30}}>Python</h3></Col> <Col><Progress percent={89} status="active" style={{paddingLeft:30,width:600}} /></Col></Row>
          <Row><Col span={4}> <h3 style={{paddingLeft:30}}>Matlab</h3></Col> <Col><Progress percent={80} status="active" style={{paddingLeft:30,width:600}} /></Col></Row>
      </Row>
      <Row><Divider orientation="left" style={{marginTop:"100px"}}><h2 >Personal Skills</h2></Divider></Row>
      <Row>
      <Col span={8} >
      <h3 style={{paddingLeft:"90px",fontSize:"20px"}}>Commitment</h3><Progress type="circle" percent={95} width={120} status="active" strokeColor={"green"} style={{paddingLeft:"80px"}}/>
      </Col>
      <Col span={8} justify={"left"}>
      <h3 style={{paddingLeft:"90px",fontSize:"20px"}}>Organized</h3><Progress type="circle" percent={95} width={120} status="active" strokeColor={"green"} style={{paddingLeft:"80px"}}/>
      </Col>
      <Col span={8} justify={"left"}>
      <h3 style={{paddingLeft:"90px",fontSize:"20px"}}>Team Work</h3><Progress type="circle" percent={93} width={120} status="active" strokeColor={"green"} style={{paddingLeft:"80px"}}/>
      </Col>
      </Row>
      </Row>

    )
  }
}

export default Cards
