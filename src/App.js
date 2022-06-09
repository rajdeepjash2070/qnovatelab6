import React from "react";
import './App.css';
import { Route,Routes } from 'react-router';

import Home from "./Components/Home";
import About from "./Components/About"
import Ourprograms from "./Components/Ourprograms";
import Booksession from "./Components/Bookyourfreesession"
import Blog from "./Components/Blog";
import Registration from "./Components/Registration";


function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<Home/>}/>
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
