import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb,Row, Col, Slider ,Timeline ,Anchor,BackTop} from 'antd';
import Particles from 'react-particles-js';
import panda1 from "./Adel.png";
import poooPanda from "./poooPanda.png";
import PHome from "./PHome";
import Footer from "./footer";
import Cards from "./Cards";
import Projects from "./Projects";
import Data from "./Data.js";
import space from "./Space.png";
import Tools from "./tools.js"

const { Link } = Anchor;


class Home extends Component{

  render(){
    return(

      <div style={{width:"100%"}}>

      <div style={{position:"absolute",top:"30%",textAlign:"center",zIndex:"150",width:"100%",display:"block",transform:"translateY(-43%)",pointerEvents:"none"}}>
      <img src={panda1} width={"220px"} height={210} style={{textAlign:"center",borderRadius:"50%"}} />
      <h1 style={{color: "white",fontSize:"60px",textAlign:"center"}}> Adel Emad</h1>
      <h3 style={{color: "white",fontSize:"30px",textAlign:"center"}}> Welcome to my portfolio</h3>
        <PHome />
      </div>

      <div
        style={{
      display:"inline-block",

      backgroundColor: "#683939",
      width: "100%",
      height: "100vh",
      position: "relative",
      zIndex:"100"
        }}
      >
        <Particles   params={{
                "particles": {
                    "number": {
                        "value": 250,
                        "density": {
                            "enable": true,
                            "value_area": 1808.4120608655228
                        }
                    },

                    "color": {
                        "value": "#6c6877"
                    }
                  },
                  "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    }
                  }

                }} />

      </div>

      <Row style={{height:"850px",Color:"white",zIndex:"1000",width:"50%",left:"25%",top:"-140px",backgroundImage: `url(${space})`}} id={"1"} className={"First"}>
      <Col span={12}>

      <div style={{position: "absolute",top: "15%",left: "23%",marginTop:"100px",zIndex:"1",color:"white"}}>
      <h1 style={{fontSize:"40px",lineHeight:"100px",color:"white"}}>My Timeline</h1>
      <Timeline >
          <Timeline.Item style={{fontSize:"20px",color:"white"}}>Volunteer in Resala 2014</Timeline.Item>
          <Timeline.Item style={{fontSize:"20px",color:"white"}}>Leader of Training Team in Conversation Cafe 2016</Timeline.Item>
          <Timeline.Item style={{fontSize:"20px",color:"white"}}>internship as Front-End developer in Optomatica 2017</Timeline.Item>
          <Timeline.Item style={{fontSize:"20px",color:"white"}}>Junior Teaching Assistant in Nile University 2017</Timeline.Item>
          <Timeline.Item style={{fontSize:"20px",color:"white"}}>internship as React developer in Optomatica 2018</Timeline.Item>
      </Timeline>
      </div>
      </Col>
      <Col span={12} type={"flex"} justify={"center"} align={"middle"} >
        <div style={{width:"100%",textAlign:"center"}}>
          <img style={{color: "white",paddingTop:"23%"}} src={poooPanda} width={"300px"}/>
        </div>

      </Col>
      </Row>

      <Data />
      <PHome />
      <Cards />
      <Projects />
      <BackTop />

    </div>
    )
  }

}

export default Home
