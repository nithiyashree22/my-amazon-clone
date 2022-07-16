import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
import React from 'react';
import './Header.css';
// import { Link } from '@mui/material';
import { Link } from "react-router-dom";
import{useStateValue} from "./StateProvider";
// import Link from react-router-dom;
// import SearchIcon from "@material-ui/icons/Search";
// import AddIcCallIcon from '@mui/icons-material/AddIcCall';
function Header() {
  const [{basket},dispatch]=useStateValue();
  return (
    <div className="header">
        <Link to="/">
        <img 
              className='header__logo'
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
           />
        </Link>
        
       
         

         <div  className='header__search'>
              <input className="header__searchInput" 
                        type="text"/>
                  <SearchIcon className="header__searchIcon"  />
             { /*Logo */}
        
          </div> 

        <div className='header__nav'>
          <Link to ="/login">
            <div className='header__option'>
                  <span className='header__optionLineOne'>Hello</span>
                  <span className='header__optionLineTwo'>Sign in</span>
              </div>
              </Link>
            <div className="header__option">
                    <span className='header__optionLineOne'>Your</span>
                     <span className='header__optionLineTwo'>Prime</span>
                </div>

            <div className="header__option">
                    <span className='header__optionLineOne'>Returns</span>
                     <span className='header__optionLineTwo'>& Orders</span>
               </div>

        </div>
      <Link to ="/checkout">
      <div className='header__optionBasket'>

            <ShoppingBasket />
             <span className='header__optionLineTwo header__basketCount '>{basket.length}</span>
          </div>
      </Link>
          
    </div>
  );
}
 
export default Header