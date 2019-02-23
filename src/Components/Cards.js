import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb,Row, Col, Slider ,Timeline ,Anchor,Icon,Card} from 'antd';
import {Animated} from "react-animated-css";
import po from "./panda.png";
import sunGlasses from "./sunGlasses.png";
import poPanda4 from "./poPanda4.png";
import poPanda3 from "./poPanda3.png";
import poPanda5 from "./poPanda5.png";
import SpaceF from "./SpaceF.png";
import ReactWOW from 'react-wow'
import WOW from 'wowjs';

const { Meta } = Card;

class Cards extends Component{

  componentDidMount() {
    new WOW.WOW().init();
  }
  render(){
    return(
      <Row style={{height:"1060px",width:"50%",backgroundColor:"#683939",marginBottom:"20px",left:"25%",top:"-180px"}}  justify={"center"} id={"4"} className={"First"}>
      <Col span={8}>
      <Card hoverable style={{ width: 300 }} cover={<img alt="example" src={poPanda4}  width={"300px"} height={"400px"}/>}>
     <Meta title="Panda" description="Po Panda"/>
        </Card>
      </Col>
      <Col span={16}>
         <Card hoverable style={{ width: 300 }} cover={<img alt="example" src={poPanda4}  width={"300px"} height={"400px"}/>}>
        <Meta title="Panda" description="Po Panda"/>
           </Card>
        </Col>
        <Col span={4}>
        <Card hoverable style={{ width: 300 }} cover={<img alt="example" src={poPanda4}  width={"300px"} height={"400px"}/>}>
       <Meta title="Panda" description="Po Panda"/>
          </Card>
        </Col>
      </Row>

    )
  }
}

export default Cards
