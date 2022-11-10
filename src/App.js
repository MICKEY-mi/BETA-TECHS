/*import { ProductionQuantityLimits } from "@mui/icons-material";*/
import React, { useEffect } from "react";

import './App.css';
import Header from './Header'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout'
import Login from "./Login";
import Payment from "./payment";
import Orders from "./Orders";
import Gpass from "./Gpass1";
import History from "./History";


import { auth } from './firebase';
import { UseStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

 
const promise = loadStripe(
  "pk_test_51M1UcXSDhZafkFR4aGkycRaKUnyZpC2aiQZqmZhTowRaVc4wSHXdnrnXuL8xVewCXNTtnx5pbNqWHKr4uWIw9qDh0056ubhbrz"
);

function App() {

  const [{}, dispatch] = UseStateValue();

  useEffect(() => {
      //will only run once when app component loads

      auth.onAuthStateChanged(authUser => {
        console.log('The user is  >>> ', authUser);

        if(authUser){
          //The user just logged in / was logged in
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
        }
        else{
          //the user is logged out
          dispatch({
            type: 'SET_USER',
            user: null
          })
        }
      })
  } , [])

  return (
    //BEM
   <Router>
    <div className="app">
    
    <Switch>

   <Route path="/History">
      <Header />                          
        <History />
      </Route>
    


    <Route path="/Gpass">
      <Header />                          
        <Gpass />
      </Route>
    

      <Route path="/orders">
      <Header />
        <Orders />
      </Route>
    
    
      <Route path="/login">
        <Login />
      </Route>

      <Route path="/checkout">
      <Header />
        <Checkout />
      </Route>

      <Route path="/payment">
      <Header />
      <Elements stripe={promise}>
      <Payment />
      </Elements>
      </Route>

{/*default route should be at end*/}
      <Route path="/">
      <Header />
        <Home/>
      </Route>

  </Switch>
    </div>
    </Router>
  );
}

export default App;
