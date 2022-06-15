import React from 'react'
import axios from "axios"
import { useEffect,useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
const url="http://localhost:8000/strongbuisness";

 const fetchHandler= async()=>{

     return await axios.get(url).then((res)=>res.data)

 }
const Adminbuisness = () => {
    const [buisnesses,setBuisnesses]=useState();
    const [searchtext,setSearchtext]=useState('')
  
      
      useEffect(() => {
        fetchHandler().then(data=>setBuisnesses(data.buisnesses))
       
       
      },[]);
     
      

  return (
    <div>
    <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/adminpasswordusernamef2893482e839i">Student Data</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/buisnessdatapasswordusername6237ef9dc7e813318033b1249883">Buisness Data</a>
          </li>
       
        </ul>
      </div>
    </div>
  </nav>
    <h1 className='text-center'>Buisness Data</h1>
  
    <table class="table table-bordered">
        <thead class="thead-dark" style={{backgroundColor:"rgb(84, 0, 180)"}}>
            <tr class="success">
                <th scope="col" style={{color:"white"}}>Sl no.</th>
                <th scope="col" style={{color:"white"}}>First Name</th>
                <th scope="col" style={{color:"white"}}>Last Name</th>
                <th scope="col" style={{color:"white"}}>Contact Number</th>
                <th scope="col" style={{color:"white"}}>Email id</th>
                <th scope="col" style={{color:"white"}}>city</th>
                <th scope="col" style={{color:"white"}}>Pincode</th>
                <th scope="col" style={{color:"white"}}>Purpose</th>
                <th scope="col" style={{color:"white"}}>Address</th>
                <th scope="col" style={{color:"white"}}>Message</th>
               
            </tr>
        </thead>


        
            {
                buisnesses && buisnesses.map((buisness,i)=>(
                    
        <tbody key={i}>
       
                    <tr>

        <td scope='col'>{i+1}</td>
        <td scope='col'>{buisness.fname}</td>

      
        <td scope='col'> {buisness.lname}</td>
         <td scope='col'>{buisness.phoneno}</td>
         <td scope='col'>{buisness.emailid}</td>
         <td scope='col'>{buisness.city}</td>
         <td scope='col'>{buisness.pincode}</td>
         <td scope='col'>{buisness.purpose}</td>
         <td scope='col'>{buisness.address}</td>
         <td scope='col'>{buisness.message}</td>
       
       
         </tr>
         
        </tbody>
       
                ))
            }
       
    </table>
   

    </div>
  )
}

export default Adminbuisness