import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

function Studentdata() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/student/data');
        setUserData(response.data.Student);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col sm={12}>
          <table border={1} style={{width:'90%',marginLeft:'5vw'}}>
            <thead style={{border:'1px solid grey'}}>
              <tr style={{height:'8vh'}}>
                <th>Student Name</th>
                <th>Student Roll no</th>
                <th>Student Course</th>
                <th>Student Semester</th>
                <th>Student Branch</th>
              </tr>
            </thead>
            <tbody>
              {userData.map(student => (
                <tr key={student._id} style={{border:'1px solid grey',height:'7vh'}}>
                  <td>{student.name}</td>
                  <td>{student.rollno}</td>
                  <td>{student.course}</td>
                  <td>{student.semester}</td>
                  <td>{student.branch}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  );
}

export default Studentdata;
