import axios from "axios";
import Header from './Header';
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
function Facultydata(){
    const[userData,setUserData]=useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await axios.get('http://localhost:3001/faculty/data');
                setUserData(response.data.Faculty);
            }
            catch(error){
                console.error(error);
            }
        };
         fetchData();
    },[])
    return(
         <Container fluid>
            <Row>
                <Header/>
            </Row><br/><br/>
            <Row>
                <Col sm={4}></Col>
                <Col sm={4}>
                    <h1>Faculty Information</h1><br/>
                   <table style={{fontSize:'19px'}}>
                    {userData.map(faculty=>(
                        <tbody>
                            <tr key={faculty._id}>
                                <th>Name :</th>
                              <td>{faculty.name}</td></tr>
                              <tr>
                               <th>Email :</th>
                              <td>{faculty.email}</td></tr>
                              <tr>
                                <th>Qulification :</th>
                              <td>{faculty.qulification}</td>
                            </tr>
                              <tr>
                                <th>Date of Birth :</th>
                              <td>{faculty.dob}</td>
                            </tr>
                            <tr>
                                <th>Contact :</th>
                              <td>{faculty.contact}</td>
                            </tr>
                            <tr>
                                <th>Password :</th>
                              <td>{faculty.password}</td>
                            </tr>
                        </tbody>
                    ))}
                   </table>
                </Col>
                <Col sm={4}></Col>
            </Row><br/><br/><br/>
            <Row>
               <Link to='/Student'><button className="backbtn">Back</button></Link> 
            </Row>
         </Container>
    )
}
export default Facultydata;