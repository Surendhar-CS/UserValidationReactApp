import React,{useState} from 'react';
import { Container , Button, Form} from 'react-bootstrap';
import '../styles/Login.css';
import axios from 'axios';
import API_URL from '../../config/global';
import { useNavigate } from 'react-router-dom';
export const Login = () => {

    const [formData,setformData] = useState({
      
        email:"",
        password:"" 
    }
    );
    const navigate=useNavigate();
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

        try {
            e.preventDefault();
                const response=await axios.post(
                `${API_URL}/login`,formData
                )

        if(response.data==="Incorrect Username or Password")
        {
           alert("Invalid username or password");
        }
        else if(response.data=== "Server Busy")
        {
            alert("Check your usernamae")
        }
        else{
          localStorage.setItem("userInfo",JSON.stringify(response.data));
          navigate("/home");
          
    
        }
                console.log(response); 
                console.log(response.data.token) 

        }
         catch (error) {
            console.log(error);
        }



        
        console.log(formData);
    }


  return (
    <Container>
    <h1>
        Login
    </h1>
    
        <Form onSubmit={handleSubmit}>
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
       
        <Button type="submit" variant='primary'>Login</Button>
        {/* <p>Already have an account?</p><Link to="/Login"></Link> */}

        </Form>
</Container>

  )
}
