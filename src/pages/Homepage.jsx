import React from 'react'
import { Container,Button } from 'react-bootstrap'
import '../styles/Homepage.css';
import { Link } from 'react-router-dom';

export const Homepage = () => {
  return (
    <Container>
        <h1>Welcome to Our WebPage</h1>
        <p> we are here to serve you!</p>
        <Button type="submit" variant='primary'>Get started</Button>
        </Container>
  )
}
