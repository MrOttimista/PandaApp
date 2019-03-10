import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb,Row, Col, Slider ,Anchor } from 'antd';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Footer1 from "./footer";

import 'antd/dist/antd.css';

const { Link } = Anchor;
const { Header, Content, Footer } = Layout;


class MainApp extends Component{

  render(){
    return(
      <Router>
      <Layout>
    <Header style={{ position: 'fixed', zIndex: "2", width: '100%', height:"80px",opsity:".25" }}>
      <Menu theme="dark" mode="horizontal" style={{ lineHeight: '80px'}} >
        <Menu.Item key="1"><a href="#1">Timeline</a></Menu.Item>
        <Menu.Item key="2"><a href="#2">Story</a></Menu.Item>
        <Menu.Item key="3"><a href="#3">Cards</a></Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 0', marginTop: 0, width:"100%",backgroundColor:"white"}}>
      <Home />
    </Content>
    <Footer style={{ textAlign: 'center' }}>
    <Footer1 />
    </Footer>
    </Layout>
    </Router>
    )
  }

}


export default MainApp
