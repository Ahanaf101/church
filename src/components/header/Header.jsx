import { Container,Navbar,NavDropdown,Nav } from 'react-bootstrap'
import React from 'react'
import "./header.css"
import logo from "../../assets/pol.png"
function Header() {
  return (
    <Navbar className='bg-black' expand="lg">
    <Container>
      <Navbar.Brand className='pr-[70px]' href="#home"><img src={logo} alt="" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto ">
          <Nav.Link className='!pr-9 text-white' href="#home">HOME</Nav.Link>
          <Nav.Link className='!pr-9 text-white' href="#link">ABOUT US</Nav.Link>
          <Nav.Link className='!pr-9 text-white' href="#link">SERMON</Nav.Link>
          <Nav.Link className='!pr-9 text-white' href="#link">BLOG</Nav.Link>
       
        </Nav>
      </Navbar.Collapse>
      <div className="button pt-[20px] pb-[20px] ">
        <a className='jj no-underline text-black py-[20px] px-[48px] rounded-[20px] bg-' href="#">CONTACT US</a>
      </div>
    </Container>
  </Navbar>
  )
}

export default Header