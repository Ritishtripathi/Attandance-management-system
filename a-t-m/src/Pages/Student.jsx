import React, { useState } from "react";
import { Col, Container ,Row} from "react-bootstrap";
import Header from './Header';
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Studentdata from './Studentdata';
import Footer from './Footer';
const Student=()=>{

  const[Data,setdata]=useState({
    name:'',
    rollno:'',
    course:'',
    semester:'',
    branch:''
  });

  const handlechage=(e)=>{
    const {name,value}=e.target;
    setdata({...Data,[name]:value});
  }

  const handlesubmit=async(e)=>{
    e.preventDefault();
    try{
      const response=await axios.post('http://localhost:3001/student',Data);
      if(response && response.data){
        console.log(response.data);
        Swal.fire({
          icon:'success',
          title:'success',
          text:'student added!'
        });
        
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
            </Row><br></br>
            <Row>
              <Col sm={8}></Col>
              <Col sm={2}> <Link to='/Facultydata'> <button className="logout-btn">Faculty Information</button></Link></Col>
              <Col sm={2}> <Link to='/Home'> <button className="logout-btn">Logout</button></Link></Col>
            </Row>
            <br/><br/><br/>

            <Row>
                <Col sm={12}>
                    <div className="add-student">
                        <h2 className="heading-title">Add new student</h2><br/>
                        <form onSubmit={handlesubmit}>
                          <input type="text" name="name" placeholder="Student Name" className="text-feild-student" value={Data.name} onChange={handlechage} required/>
                          <input type="text" name="rollno" placeholder="Student Roll No" className="text-feild-student1" value={Data.rollno} onChange={handlechage} required/><br/>
                          <select className="student-select" name='course' value={Data.course} onChange={handlechage}>
                            <option>Course</option>
                            <option>B.TECH</option>
                            <option>M.TECH</option>
                            <option>BCA</option>
                            <option>MCA</option>
                            <option>DIPLOMA</option>
                            <option>B.COM</option>
                            <option>B.SC</option>
                          </select>

                          <select className="student-select" name='semester' value={Data.semester} onChange={handlechage}>
                            <option>Semester</option>
                            <option>1st semester</option>
                            <option>2nd semester</option>
                            <option>3rd semester</option>
                            <option>4th semester</option>
                            <option>5th semester</option>
                            <option>6th semester</option>
                            <option>7th semester</option>
                            <option>8th semester</option>
                          </select>

                          <select className="student-select" name='branch' value={Data.branch} onChange={handlechage}>
                            <option>Branch</option>
                            <option>Computer Science</option>
                            <option>Information Technology</option>
                            <option>Machanical Engineering</option>
                            <option>Other</option>
                          </select><br/>
                          <button type="submit" className="add-student-btn">Add Student</button>
                          
                        </form>
                    </div>
                </Col>
            </Row><br/><br/>
            <Row>
              <center><h1>Students List</h1></center>
              <Studentdata/>
            </Row><br/><br/><br/><br/>
            <Row>
              <Footer/>
            </Row>
        </Container>
    )
}
export default Student;