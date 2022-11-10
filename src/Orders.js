import React, { useEffect, useState } from 'react'
import { db } from './firebase';
import './Orders.css'
import {UseStateValue} from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';

function Orders() {

    const[{basket, user }, dispatch] = UseStateValue();
    const[orders, setOrders] = useState([]);

/*    useEffect(() => {       
        setOrders([])
    }, [user])
*/
  return (
    <div className='orders'>
        <h1>Your Order has been placed Succesfully</h1>
        <p>order details will be upadatd soon...</p>
        <Link to="/"><button className='btn11'>Go to Home</button></Link>
        
    </div>
  )
}

export default Orders