import React from "react";
import './App.css';
import { Route,Routes } from 'react-router';

import Home from "./Components/Home";
import About from "./Components/About"
import Ourprograms from "./Components/Ourprograms";
import Booksession from "./Components/Bookyourfreesession"
import Blog from "./Components/Blog";
import Registration from "./Components/Registration";
import Admin from "./Components/Admin";
import Adminlogin from "./Components/Adminlogin";
import Adminbuisness from "./Components/Adminbuisness";


function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/buisnessdatapasswordusername6237ef9dc7e813318033b1249883" element={<Adminbuisness/>}/>
    <Route path="/adminpasswordusername6237ef9dc7e813318033b1249883" element={<Admin/>}/>
    <Route path="/f2893482e839i" element={<Adminlogin/>}/>
    <Route path="/about" element={<About/>}/>
   <Route path="/ourprograms" element={<Ourprograms/>}/>
   <Route path="/bookyourfreesession" element={<Booksession/>}/>
   <Route path="/blog" element={<Blog/>}/>
   <Route path="/collaborate" element={<Registration/>}/>
    </Routes>
    </div>
  );
}

export default App;
