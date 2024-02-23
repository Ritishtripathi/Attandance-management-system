import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

function Studentdata() {
  const [userData, setUserData] = useState([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/student/${userId}`);
        setUserData(response.data.Student);
      } 
      catch(error){
        console.error('Error fetching student data:', error);
      }
    };

    if (userId) {
      fetchData();
    }

  }, [userId]);

  useEffect(() => {
    const userdata = localStorage.getItem('data');
    if (userdata) {
      const userData = JSON.parse(userdata);
      setUserId(userData._id);
    } else {
      console.log('User data not found in localStorage');
    }
  }, []);
  

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/student/${id}`);
      setUserData(userData.filter(student => student._id !== id));
      alert('Student deleted successfully!');
    } catch (error) {
      console.error('Error deleting student:', error);
      alert('Failed to delete student!');
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col sm={12}>
          {userData.length === 0 ? (
            <p>No student data available.</p>
          ) : (
            <table border={1} style={{ width: '80%', marginLeft: '9vw' }}>
              <thead style={{ border: '1px solid grey' }}>
                <tr style={{ height: '8vh' }}>
                  <th>Sr No</th>
                  <th>Student Name</th>
                  <th>Student Roll no</th>
                  <th>Student Course</th>
                  <th>Student Semester</th>
                  <th>Student Branch</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((student, index) => (
                  <tr key={student._id} style={{ border: '1px solid grey', height: '7vh' }}>
                    <td>{index + 1}</td>
                    <td>{student.name}</td>
                    <td>{student.rollno}</td>
                    <td>{student.course}</td>
                    <td>{student.semester}</td>
                    <td>{student.branch}</td>
                    <td>
                      <button style={{ background: 'red', border: 'none', borderRadius: '3px', color: "#fff" }} onClick={() => deleteStudent(student._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Studentdata;
