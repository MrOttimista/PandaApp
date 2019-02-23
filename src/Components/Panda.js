import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb,Row, Col, Slider ,Timeline ,Anchor,Icon,Carousel} from 'antd';
import po from "./panda.png";
import sunGlasses from "./sunGlasses.png";
import poPanda4 from "./poPanda4.png";
import poPanda3 from "./poPanda3.png";
import poPanda5 from "./poPanda5.png";
import space from "./Space.png";

class Panda extends Component{

  render(){
    return(
      <Row style={{height:"550px",width:"100%",marginBottom:"20px",top:"-90px",backgroundColor: "#8e45ae"}} id={"2"} >
      <Carousel vertical style={{height:"100%"}}>
         <div style={{backgroundImage: `url(${space})`}}><h1>A real Panda</h1></div>
         <div><h1>Never Say</h1></div>
         <div><h1>That They Can't</h1></div>
         <div><h1>They are strong</h1></div>
       </Carousel>
      </Row>
    )
  }
}

export default Panda
