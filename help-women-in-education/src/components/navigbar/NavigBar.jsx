import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import "./navigBar.css"
const NavigBar = () => {
  return (
   <Container>
    <Navbar className = "color-nav" variant="light">
        
          <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        
        
    </Navbar>
   </Container>
  )
}

export default NavigBar