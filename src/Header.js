import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className='header'>
            <Link to="/">
            <img className="header_logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>
            

            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon"/>
            </div>

            <div className='header_nav'>
                <div className="header_option">
                    <span className='header_optionLineOne'>Hello Guest</span>
                    <sapn className='header_optionLineTwo'>Sign In</sapn>
                </div>

                <div className="header_option">
                <span className='header_optionLineOne'>Returns</span>
                <sapn className='header_optionLineTwo'>& Orders</sapn>
                </div>

                <div className="header_option">
                <span className='header_optionLineOne'>Your</span>
                <sapn className='header_optionLineTwo'>Prime</sapn>
                </div>

                <div className="header_optionBasket">
                    <Link to="/checkout">
                    <ShoppingBasketIcon style={{color: "white"}}/>
                    <span className="header_optionLineTwo header_basketCount">0</span>
                    </Link>
                    
                </div>

            </div>
        </div>
        
    )
}

export default Header
