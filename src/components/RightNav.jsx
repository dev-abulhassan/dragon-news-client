import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';



const RightNav = () => {
   return (
      <div>
         <div >
            <h3>Social Login</h3>
            <Button variant="outline-primary">Google</Button>

            <Button variant="outline-secondary">Github</Button>
         </div>
         <div>
            <h3>Find us</h3>
            <ListGroup>
               <ListGroup.Item>Facebook</ListGroup.Item>
               <ListGroup.Item>Twitter</ListGroup.Item>
               <ListGroup.Item>Pintarest</ListGroup.Item>
               <ListGroup.Item>Instagram</ListGroup.Item>
               <ListGroup.Item>Tiktok</ListGroup.Item>
            </ListGroup>
         </div>
      </div>
   );
};

export default RightNav;