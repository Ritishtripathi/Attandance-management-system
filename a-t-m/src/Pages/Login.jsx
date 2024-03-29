import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
const Login=()=>{
    const [data,setdata]=useState({
        email:'',
        password:''
    });
    const Navigate=useNavigate();
    const handlelogin=(e)=>{
        const {name,value}=e.target;
        setdata({...data,[name]:value});
    }
    
    const submitlogin=async(e)=>{
        e.preventDefault();
        try{
          const response=await axios.post('http://localhost:3001/login',data)
          if(response && response.data){
            console.log(response.data);

            localStorage.setItem('data',JSON.stringify(response.data.Faculty));    
            console.log("localstorage",localStorage);

            Swal.fire({
                icon:'success',
                title:'success',
                text:'Login Successfully!'
            })
            Navigate('/Student');
          }
        }
        catch(error){
            console.error(error);
        }
    }

    return(
                    <div className="form-container">
                       <center><h2>Sign in</h2></center>
                       <form className="form" onSubmit={submitlogin}>
                       <div className="form-group">
                       <label for="email">Email*</label>
                       <input type="email" id="email" placeholder="Email" name="email" value={data.email} onChange={handlelogin} required/>
                       </div>
                       <div className="form-group">
                       <label for="password">Password*</label>
                       <input type="password"  id="password" placeholder="Password" name="password" value={data.password} onChange={handlelogin} required/> 
                       </div>
                       <button type="submit" className="form-submit-btn">Login</button>
                       <Link to='/Signup'>Register here</Link>
                       </form>
                    </div>
    )
}
export default Login;