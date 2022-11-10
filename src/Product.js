import React from'react'
import { UseStateValue } from './StateProvider';
import "./Product.css";

function Product({id ,title,image,price,rating}) {
    const [{basket},dispatch] = UseStateValue();
    
    
    const addToBasket=()=>{
        //dispatch the item in data layer
        dispatch({
            type : "ADD_TO_BASKET",
            item :{
                id: id,
                title: title,
                image: image,
                price : price,
                rating: rating,
            },
        });
    };

    return(
         <div className="product">
        <div className="product_info">
            <p className='to_bold'> {title}</p>
            
            <p className="product_price">
            <small>$</small>
        <strong>{price}</strong>
        </p>
        <div className='product_rating'>
           { Array(rating).fill().map((_, i) => (
                  <p>🌟</p>
        ))} 
    
        </div>
        </div>
        <img src={image} alt='#' placeholder='product'/>

        <button onClick={addToBasket}>Add to Basket</button>
    </div>
    );
}
export default Product