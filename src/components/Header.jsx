import React from 'react';
import Logo from '../assets/images/logo.png'
import { Container } from 'react-bootstrap';
import moment from 'moment';

const Header = () => {
   return (
      <Container className='text-center mt-2'>
         <img src={Logo} alt="" />
         <p>Journalism Without Fear or Favour</p>
         <p><strong>{moment().format("dddd, MMMM Do YYYY")}</strong></p>
      </Container >
   );
};

export default Header;