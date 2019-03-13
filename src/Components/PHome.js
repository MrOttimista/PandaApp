import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb,Row, Col, Slider ,Timeline ,Anchor,Icon,Carousel} from 'antd';

class PHome extends Component{

  render(){
    return(
      <Row style={{height:"10px",marginBottom:"20px",top:"-90px",backgroundColor: "transparent",marginTop:"100px",pointerEvents:"none"}} id={"2"} >
      <Carousel vertical style={{height:"100%",zIndex:"10",pointerEvents:"none",}} effect={""} autoplay>
         <div style={{fontColor:"white",pointerEvents:"none"}}><h1 style={{color:"white",pointerEvents:"none"}}>Front End developer and React developer intern in OPTOMATICA</h1></div>
         <div ><h1 style={{color:"white",pointerEvents:"none"}}>Junior Student @ Nile University </h1></div>
         <div><h1 style={{color:"white",pointerEvents:"none"}}>JavaScript Developer</h1></div>
         <div><h1 style={{color:"white",pointerEvents:"none"}}>Fix Bugs</h1></div>
       </Carousel>
      </Row>
    )
  }
}

export default PHome
