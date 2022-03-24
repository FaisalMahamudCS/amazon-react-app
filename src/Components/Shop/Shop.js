import React, { useState ,useEffect} from 'react';
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
    const handleAddToCart=(product)=>{
        console.log(product)

     const newCart=[...cart,product]
     setCart(newCart);
          }
    return (
      
        
                  <div className='shop-container'>
                   
         <div className="product-container">
         {
            products.map(product =><Products handleAddToCart={handleAddToCart} key={product.id} product={product}></Products>)
        }
         </div>
         <div className="cart-container">
             <h4>Order Summary</h4>
             <p>Selected Item:{cart.length}</p>
         </div>
         </div>

           
        
    );
};

export default Shop;