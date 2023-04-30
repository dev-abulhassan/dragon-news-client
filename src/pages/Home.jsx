import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";

const Home = () => {
   return (
      <Navbar expand="lg" >
         <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="mx-auto ">
                  <Link to={'/'} className='text-decoration-none me-2'>Home</Link>
                  <Link className='text-decoration-none me-2'>About</Link>
                  <Link className='text-decoration-none me-2'>Career</Link>
               </Nav>
            </Navbar.Collapse>

            <div className='d-flex gap-2 align-items-center'>
               <FaUserAlt></FaUserAlt>
               <Link to={'/login'} className='bg-dark bg-gradient text-white border px-4 py-2 text-decoration-none'>Login</Link>
            </div>
         </Container>
      </Navbar>
   );
};

export default Home;