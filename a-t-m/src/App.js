import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import React from 'react';
import './App.css'
import Home from './Pages/Home';
import Header from './Pages/Header';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Student from './Pages/Student';
import Studentdata from './Pages/Studentdata';
import Facultydata from './Pages/Facultydata';
import Footer from './Pages/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Header' element={<Header/>}/>
        <Route path='/Student' element={<Student/>}/>
        <Route path='/Studentdata' element={<Studentdata/>}/>
        <Route path='/Facultydata' element={<Facultydata/>}/>
        <Route path='/Footer' element={<Footer/>}/>
      </Routes>
    </Router>
  );
}

export default App;
