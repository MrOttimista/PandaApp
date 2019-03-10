import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb,Row, Col, Slider ,Timeline ,Anchor,Icon,Carousel} from 'antd';

class PHome extends Component{

  render(){
    return(
      <Row style={{height:"10px",width:"100%",marginBottom:"20px",top:"-90px",backgroundColor: "transparent",marginTop:"100px",pointerEvents:"none"}} id={"2"} >
      <Carousel vertical style={{height:"100%",zIndex:"10",pointerEvents:"none",}} effect={""} autoplay>
         <div style={{fontColor:"white",pointerEvents:"none"}}><p><h1 style={{color:"white",pointerEvents:"none"}}>Front End developer and React developer intern in OPTOMATICA</h1></p></div>
         <div ><h1 style={{color:"white",pointerEvents:"none"}}>Never Say</h1></div>
         <div><h1 style={{color:"white",pointerEvents:"none"}}>That They Can't</h1></div>
         <div><h1 style={{color:"white",pointerEvents:"none"}}>They are strong</h1></div>
       </Carousel>
      </Row>
    )
  }
}

export default PHome
