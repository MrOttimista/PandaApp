import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb,Row, Col, Slider ,Timeline ,Anchor,Icon} from 'antd';
import reactPng from "./react.png";
import reduxPng from "./redux.png"


class Tools extends Component{
render(){
  return(
    <Row style={{height:"400px"}}>
    <img src={reactPng} width={"250px"} height={210} style={{textAlign:"center",borderRadius:"50%"}} />
    <img src={reduxPng} width={"250px"} height={210} style={{textAlign:"center",borderRadius:"50%"}} />

    </Row>
  )
}
}

export default Tools
