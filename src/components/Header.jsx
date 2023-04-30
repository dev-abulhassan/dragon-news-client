import React from 'react';
import Logo from '../assets/images/logo.png'
import { Container } from 'react-bootstrap';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";

const Header = () => {
   return (
      <Container>
         <div className=' text-center mt-3'>
            <Link to={'/'}> <img src={Logo} alt="" /></Link>
            <p>Journalism Without Fear or Favour</p>
            <p><strong>{moment().format("dddd, MMMM Do YYYY")}</strong></p>

         </div>
         <div className='bg-light p-2 d-flex'>
            <button className='bg-danger bg-gradient text-white border p-2 '>Latest</button>
            <Marquee pauseOnHover={true} speed={60}>
               <Link to={'/login'} className='text-decoration-none text-muted'>I can be a React component, multiple React components, or just some text.</Link>
            </Marquee>
         </div>
      </Container>
   );
};

export default Header;