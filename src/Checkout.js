import React from 'react'
import "./Checkout.css";
import Subtotal from './Subtotal';
import Banner1 from './banners/checkoutbanner2.jpg';
import { render } from '@testing-library/react';
import CheckoutProduct from './CheckoutProduct';
import {UseStateValue} from "./StateProvider";
import { auth } from './firebase';


function Checkout() {
    const [{basket, user }, dispatch] = UseStateValue();
    

    const useremailRender = () =>{
        if(user){
            return user.email;
        }
        else{
            return 'Guest';
        }
       }

  return (

    <div className='checkout'>
        
        <div className='checkout_left'>
            <img className='checkout_ad' 
                src={Banner1} alt='#' />

        <div>
            <h3>Hello, {useremailRender()}</h3>
            <h2 className='checkout_title'>
                Your Shopping Basket
            </h2>



            {basket.map(item => (
                <CheckoutProduct
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    />
            ))}

        </div>
        </div>
        
        <div className='checkout_right'>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout