import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
function Header(){
    return(
        <Container fluid>
            <Row>
                    <div className="header">
                         <h1 className="header-text">Attendance Management System</h1>
                    </div>
            </Row>
        </Container>
    
    )
}
export default Header;