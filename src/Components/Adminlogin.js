import React from 'react'
import { useState } from 'react'
import "./Adminlogin.css"
import { useNavigate } from 'react-router-dom'
const Adminlogin = () => {
  const history=useNavigate();
  const [inputs,setInputs]=useState({

adminusername:"",
id:"",
password:"",

  });
  const handleChange=(e)=>{
    setInputs((prevState)=>({
...prevState,
[e.target.name]:e.target.value
    }))
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if((inputs.adminusername==="rajdeep@2003") && (inputs.password==="password@1234")){
   
   history('/adminpasswordusername6237ef9dc7e813318033b1249883');
    }
    else{
        alert("You are fake You are not an admin of this Website");
    }
    
  }

  return (
    <div>
    <form className='p-4' onSubmit={handleSubmit}>
    <div class="col-md-12">
    <label for="validationDefault01" class="form-label"> Admin UserName</label>
    <input type="text" class="form-control" id="validationDefault01" value={inputs.adminusername} onChange={handleChange} name='adminusername' required/>
  </div>

  <div class="col-md-12">
    <label for="validationDefault01" class="form-label">Password</label>
    <input type="text" class="form-control" id="validationDefault01" value={inputs.password} onChange={handleChange} name='password' required/>
  </div>
  <button type="submit" class="btn btn-warning m-2">Login</button>
    </form>
    
    </div>
  )
}

export default Adminlogin