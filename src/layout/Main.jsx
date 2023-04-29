import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../components/LeftNav';
import RightNav from '../components/RightNav';

const Main = () => {
   return (
      <div>
         <Header></Header>
         <Container>
            <Row>
               <Col lg={3}>
                  <LeftNav></LeftNav>
               </Col>
               <Col lg={6}>
                 
               </Col>
               <Col lg={3}>
                  <RightNav></RightNav>
               </Col>
            </Row>

         </Container>
         <Footer></Footer>
      </div>
   );
};

export default Main;

