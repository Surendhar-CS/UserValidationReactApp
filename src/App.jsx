import { useState } from 'react';

import './App.css';
import { Login } from './pages/Login';
import Signup from './pages/Signup';
import {Route,Routes} from 'react-router-dom'
import { Homepage } from './pages/Homepage';

 function App() {
 
    return <>
  {/* <Signup/> */}
  <Routes>
    <Route path="/" element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/home" element={<Homepage/>}/>
    
      
    
  </Routes>
  

  
    </>
}


export default App;