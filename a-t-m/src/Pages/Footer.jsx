import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer style={{ background: "#f8f9fa", padding: "20px", marginTop: "20px" }}>
      <Container fluid>
       
        
            {/* <h4>Contact Us</h4>
            <p>Email: ritishtripathi123@gmail.com</p>
            <p>Phone: +91 9794087143</p> */}
         
        <Row>
          <Col xs={12}>
            <p style={{ textAlign: "center", marginTop: "20px" }}>
              &copy; 2023 All rights reserved by <span style={{color:'green',fontWeight:'bold'}}>&copy; Ritish tripathi .</span><a href="https://www.google.com/search?q=ritish+tripathi&rlz=1C1GCEA_enIN1079IN1079&oq=Ritish+tr&gs_lcrp=EgZjaHJvbWUqBggCEEUYOzIGCAAQRRg5MgYIARBFGDsyBggCEEUYOzIGCAMQRRg8MgYIBBBFGDwyBggFEEUYPNIBCDU1MzBqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8">more</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
