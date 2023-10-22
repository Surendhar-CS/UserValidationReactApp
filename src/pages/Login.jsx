import React,{useState} from 'react';
import { Container , Button, Form} from 'react-bootstrap';
import '../styles/Login.css';

export const Login = () => {

    const [formData,setformData] = useState({
      
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

    const handleSubmit=(e)=>{
        e.preventDefault();
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
