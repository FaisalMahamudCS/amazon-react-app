import React, { useState ,useEffect} from 'react';
import { addToDb,getStoredCart } from '../../utilities/fakedb';

import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import useProducts from '../../Hooks/useProducts';

import './Shop.css'
const Shop = () => {
const [products,setProducts]=useProducts();

   const [cart,setCart]=useState([]);

    useEffect(()=>{
        const storedCart=getStoredCart();
        const savedCart=[];
        for(const id in storedCart){
            const addedProduct=products.find(product=>product.id===id);
          if(addedProduct){

            const quantity=storedCart[id];
            addedProduct.quantity=quantity;
              savedCart.push(addedProduct);
          }
        }
        setCart(savedCart)
    },[products])
    const handleAddToCart=(selectedProduct)=>{
        let newCart=[];
        const exists=cart.find(product=>product.id===selectedProduct.id);
        if(!exists){
            selectedProduct.quantity=1;
            newCart=[...cart,selectedProduct]
        }
        else{
         const rest=cart.filter(product=>product.id !== selectedProduct.id);
         exists.quantity=exists.quantity + 1;
         newCart=[...rest,exists];
        }

    
     setCart(newCart);
     addToDb(selectedProduct.id);
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