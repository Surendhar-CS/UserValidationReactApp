import React, { useEffect , useState } from 'react'
import { Container,Button } from 'react-bootstrap'
import '../styles/Homepage.css';
import { Link } from 'react-router-dom';
import API_URL from '../../config/global';
import axios from 'axios';

export const Homepage = () => {
  const [res,setRes] =useState({});
  
  useEffect(
    ()=>{
        const user=JSON.parse(localStorage.getItem("userInfo"));
        if(user && user.token)
        {
          getData(user.token);
          
        }
      },[])

const getData = async(token) => {
  try {
    console.log("get data triggered"+token);
    const config ={
      headers:{
        Authorization:token
      }
    }
    const response=await axios.get(
      `${API_URL}/home`,config
    );
    if(response.data==="Invalid Token")
    {
      alert("login again");
    }
    else if(response.data==="Server Busy")
    {
      alert("Unauthorised Access");
    }
    else if(response?.status)
    {
      setRes(response.data);
    }
  } catch (error) {
    console.log(error);
  }
}

  return (
    <Container>
        <h1>Welcome to Our WebPage</h1>
        <p> we are here to serve you!  {res.name}</p>
        <Button type="submit" variant='primary'>Get started</Button>
        </Container>
  )
}
