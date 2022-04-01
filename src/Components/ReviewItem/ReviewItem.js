import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'
const ReviewItem = (props) => {
    const {product,handleRemoveProduct}=props;
    const {name,price,img,shipping,quantity}=props.product;
    return (
        <div className='review-item'>
           
            <div>
                <img className='img' src={img} alt="" srcset="" />
            </div>
            <div className="review-item-details-container">
                <div className="review-item-details">
                    <p className='product-name'>{name}</p>
                    {name.length >20?name.slice(0,20):name}
                    <p>Price <small className='orange-color'>{price}</small></p>
                    <p><small>Quantity:{quantity}</small></p>
              
            </div>
               
                <div className="delete-container">
                <button onClick={()=>handleRemoveProduct(product)} className='delete-button'>
                    <FontAwesomeIcon  className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
         
            </div>
        </div>
    );
};

export default ReviewItem;