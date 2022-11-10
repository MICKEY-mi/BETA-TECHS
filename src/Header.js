/* will contain navbar*/
import React from 'react'
import companylogo from "./logo/companylogo.png";
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { UseStateValue } from './StateProvider';
import { auth } from './firebase';


function header() {
 const [{basket , user}, dispatch] = UseStateValue(); 
 const handleAuthentication = () =>{
  if(user){
      auth.signOut();
  }
 }

  return (

    <div className='header'>


      <Link to="/">
      <img className='header_logo'
        src={companylogo} alt='logo' />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className='header_searchIcon'/>
      </div>

      
      <div className="header_nav">
        <Link to='/login'>
        <div onClick = {handleAuthentication} className="header_option">
          {/* */}
          <span className='header_optionLineOne'>HELLO {!user ? 'Chief' : user.email}</span>
          <span className='header_optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
        </div>
        </Link>

        <Link to='/History'>
        <div className="header_option">
          <span className='header_optionLineOne'>REVIEW</span>
          <span className='header_optionLineTwo'>Beta-techs</span>
        </div>
        </Link>

        <Link to='/Gpass'>
        <div className="header_option">
          <span className='header_optionLineOne'>Your</span>
          <span className='header_optionLineTwo'>GPASS</span>
        </div>
        </Link>


        <Link to="/checkout">
        <div className='header_optionBasket'>
          <ShoppingCartIcon/>
          <span className='header_optionLineTwo header_basketCount'>{basket.length}</span>  
        </div>
        </Link>

      </div>
    </div> 

  )
}

export default header