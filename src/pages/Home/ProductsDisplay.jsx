import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFilter } from 'react-icons/fa';
import all_product from '../../assets/all_product';
import axios, { all } from 'axios';
import { useSelector } from 'react-redux';
function ProductsDisplay({ category }) {
const myState=useSelector((state)=>state.cart.items);
  const [products, setProducts] = useState(myState);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://127.0.0.1:8000/api/product/fetch');
  //       console.log('Response data:', response.data.Product); // Log the response data
  //       setProducts(response.data.Product);
  //     } catch (error) {
  //       console.error('Error fetching products:', error);
  //     }
  //   };
  
  //   fetchData();
  // }, []);

  // ... rest of your code ...

  return (
    <>
    

      <div className="grid xl:grid-cols-4 md:grid-cols-3 md:mt-60 md:px-10 md:mb-7 grid-cols-2 mt-[70px] items-center justify-center gap-12 shadow-sm">
        {products.map((item) => {
          if (item.category === category) {
            return (
              <div key={item.id}>
                <Link to={`/shop/${item.id}`}>
                  <img
                    src={item.image} 
                    alt={item.name}
                    className="mx-auto w-full hover:scale-105 transition-all duration-300"
                  />
                </Link>
                <div className="mt-4 px-4">
                  <h4 className="text-base font-semibold mb-2">{item.name}</h4>

                  <div className="flex justify-between">
                    <p className="text-black/50">{item.category}</p>
                    <p className="font-semibold">{item.price}</p>
                  </div>
                </div>
              </div>
            );
           } 

           return null; 
        })}
      </div>
    </>
  );
}

export default ProductsDisplay;
