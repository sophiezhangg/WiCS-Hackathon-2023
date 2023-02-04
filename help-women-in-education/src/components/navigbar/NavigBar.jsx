import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import "./navigBar.css"
const NavigBar = () => {
  return (
   <Container>
    <Navbar className = "color-nav" variant="light">
        <Container>
          <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        </Container>
        
    </Navbar>
   </Container>
  )
}

export default NavigBar