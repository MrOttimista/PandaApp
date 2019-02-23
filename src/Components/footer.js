import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb,Row, Col, Slider ,Timeline ,Anchor,Icon} from 'antd';
import po from "./panda.png";
import sunGlasses from "./sunGlasses.png";
import poPanda4 from "./poPanda4.png";

class Footer extends Component{

  render(){
    return(
      <Row style={{height:"100px",backgroundColor:"grey"}} gutter={8} align={"center"} justify={"center"} >
      <h2 style={{position:"relative",fontSize:"20px"}}>Adel Emad ©2018 </h2>
      </Row>
    )
  }
}

export default Footer
