import React, { useState } from 'react';
import { Container , Button, Form} from 'react-bootstrap';
import '../styles/Signup.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import API_URL from '../../config/global';







 const Signup = () => {
    const [formData,setformData] = useState({
        name:"",
        email:"",
        password:"" 
    }
    );
    const handleChange=(e) =>{
        const{name,value}=e.target;
        setformData(
            {
            ...formData,
            [name]:value
            }
        );

    };

    const handleSubmit=async(e)=>{
        e.preventDefault();

        try {
            const response=await axios.post(
            `${API_URL}/signup/verify`,formData
            )
            if(response.data===true)
            {
                alert("Confimation link sent to mail");
            }
            else  if(response.data===false)
            {
                alert("user already exists");
            }
            console.log(response);
        } catch (e) {
          console.log(e);  
        }
    }

  return (
    <Container>
        <h1>
            Registeration form
        </h1>
        <Form onSubmit={handleSubmit}> 
            
            <Form.Group>
                <Form.Label>
                    Name
                </Form.Label>
                <Form.Control type="text" name="name" onChange={handleChange} value={formData.name} required />
                
            </Form.Group>
            
            <Form.Group>
                <Form.Label>
                    Email
                </Form.Label>
                <Form.Control type="email" name="email" onChange={handleChange} value={formData.email} required />
                
            </Form.Group>
           
            
            <Form.Group>
                <Form.Label>
                    Password
                </Form.Label>
                <Form.Control type="password" name="password" onChange={handleChange} value={formData.password} required />
                
            </Form.Group>
           
            <Button type="submit" variant='primary'>Register</Button>
            <p>Already have an account? <Link to="/Login">Login</Link></p>
            </Form>
        
    </Container>
  );
};
 export default Signup;