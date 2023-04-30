import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
   const [category, setCategory] = useState([])
   useEffect(() => {
      fetch('http://localhost:5000/categories')
         .then(response => response.json())
         .then(data => setCategory(data))
         .catch(error => console.error(error))
   }, [])
   return (
      <div>
         <h3>All Category News</h3>
         <div className='py-2'>
            {
               category.map(item => <p key={item.id}>
                  <Link to={`/category/${item.id}`} className='text-decoration-none '>{item.name}</Link>
               </p>)
            }
         </div>
      </div>
   );
};

export default LeftNav;