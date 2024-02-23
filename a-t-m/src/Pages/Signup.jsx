import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from './Header';
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import { Link } from "react-router-dom";
const Signup=()=>{
    const [data ,setdata]=useState({
      name:'',
      email:'',
      qulification:'',
      dob:'',
      contact:'',
      password:''
    });
   const Navigate=useNavigate();
    const facultyhandle=(e)=>{
        const{name,value}=e.target;
        setdata({...data,[name]:value});
    }
    
    const handlesubmit=async(e)=>{
        e.preventDefault();
        try{
         const response=await axios.post('http://localhost:3001/faculty',data);
         if(response && response.data){
            console.log(response.data);
            Swal.fire({
                icon:'success',
                title:'success',
                text:'registration successfully'
            });
            Navigate('/Home');
         }
         else{
            console.log('error during register');
         }
        }
        catch(error){
            console.error(error);
        }
    }



    return(
        <Container fluid>
            <Row>
                <Header/>
            </Row><br/>
            <Row>
                <Col sm={9}></Col>
                <Col sm={3}>
                <Link to='/Home'><button className="backbtn">Back</button></Link> 
                </Col> 
            </Row>
            <br/>
        <Row>
            <Col sm={3}></Col>
            <Col sm={6}>
                <div className="signup-container">
                    <center><h2 className="heading-signup">Faculty Registration</h2></center><br/>
                    <form onSubmit={handlesubmit}>
                        <input type='text' placeholder="Name" className="signup-input" name="name" value={data.name} onChange={facultyhandle} required/>
                        <input type='email' placeholder="Email" className="signup-input" name="email" value={data.email} onChange={facultyhandle}  required/>
                        <input type='text' placeholder="Qulification" className="signup-input" name="qulification" value={data.qulification} onChange={facultyhandle}  required/>
                        <input type='date' placeholder="DOB" className="signup-input" name="dob" value={data.dob} onChange={facultyhandle}  required/>
                        <input type='number' placeholder="Contact" className="signup-input" name="contact" value={data.contact} onChange={facultyhandle}  required/>
                        <input type='password' placeholder="Password" className="signup-input" name="password" value={data.password} onChange={facultyhandle}  required/>
                        <button className="btn-register" type="submit">Register</button>
                    </form>
                </div>
            </Col>
            <Col sm={3}></Col>
        </Row>
        <Row>
            <Footer/>
        </Row>
    </Container>
    )
}
export default Signup;