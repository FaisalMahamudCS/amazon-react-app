import React, { useState ,useEffect} from 'react';
import { addToDb,getStoredCart } from '../../utilities/fakedb';

import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'
const Shop = () => {
    const [products,setProducts]=useState([])
   const [cart,setCart]=useState([]);
    useEffect(()=>{
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
    .then(response=>response.json())
    .then(data=>setProducts(data))

    },[])
    useEffect(() => {
       const storedCart=getStoredCart();
       for(const id in storedCart){
          const addedProduct=products.find(product=>product.id===id) 
           console.log(addedProduct);
       }
    },[products])
    const handleAddToCart=(product)=>{
        console.log(product)

     const newCart=[...cart,product]
     setCart(newCart);
     addToDb(product.id);
          }
    return (
      
        
                  <div className='shop-container'>
                   
         <div className="product-container">
         {
            products.map(product =><Products handleAddToCart={handleAddToCart} key={product.id} product={product}></Products>)
        }
         </div>
         <div className="cart-container">
           <Cart cart={cart}></Cart>
         </div>
         </div>

           
        
    );
};

export default Shop;