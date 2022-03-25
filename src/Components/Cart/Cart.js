import React from 'react';
import './Cart.css'
const Cart = (props) => {
const {cart}=props;

let total=0;
let shipping=0;
let tax=0;
let fulltotal;
let quantity=0;

for(const product of cart){
    quantity=quantity+product.quantity;
    total=total+product.price;
    shipping=shipping+product.shipping; 
    tax=parseFloat((total*0.1).toFixed(2));
   fulltotal=total+shipping+tax;
}


    return (
        <div className='cart'>
              <h4>Order Summary</h4>
             
             <p>Selected Item:{quantity}</p>
             <p>Price:${total}</p>
             <p>Total Shipping:${shipping}</p>
             
             <p>Tax:{tax}</p>
            
             <p>Grand Total:{fulltotal}</p>
        
        </div>
    );
};

export default Cart;