import React from "react";
import { Col, Container,Row } from "react-bootstrap";
import Login from "./Login";
import Header from "./Header";
import logo from '../Images/a.jpg';
import Footer from './Footer';
function Home(){
    return(
        <Container fluid className="body-color">
            <Row>
                <Header/>
            </Row><br/><br/><br/><br/>
            <Row>
               <Col sm={4}>
                <img src={logo} className="img-pic"/>
                </Col>
               <Col sm={4}></Col>
               <Col sm={4} className="loginbox">
                <Login/>
               </Col>
               <Footer/>
            </Row>
        </Container>
    )
}
export default Home;