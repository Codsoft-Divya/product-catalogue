import React from "react";
import './Header.css'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { IconButton } from "@mui/material";
library.add(faCoffee);


function Header () {
    return (
        <div className="main-container-head">
            <div className="main-container-banner">
                <h6>Black Friday Banner</h6>
            </div>
            <div className="main-container-navbar">
                <div className="main-container-navbar-left">
                    <h4>WELCOME TO SHOPPING MART!</h4>
                </div>
                <div className="main-container-navbar-right">
                    <div className='main-container-navbar-right-home'>Home</div>
                    <div className='main-container-navbar-right-Products'>Products</div>
                    <div className='main-container-navbar-right-Categories'>Categories</div>
                    <div className='main-container-navbar-right-Brands'>Brands</div>
                    <div className='main-container-navbar-right-Shop'>Shop</div>
                    <div className='main-container-navbar-right-About'>About</div>
                </div>
            </div>
            <div className="main-container-logo">
                <div className="main-container-logo-one">
                    <h3>LOGO</h3>
                </div>
                <div className="main-container-logo-two">
                    <h5>Contact Us</h5>
                    <h6>+000000000</h6>
                </div>
                <div className="main-container-logo-three">
                    <input className="input-header" placeholder='Search latest Styles' />
                    <button className="btn-search">Search</button>
                </div>
                <div className="main-container-logo-four">
                    <i className="fa-solid fa-heart"></i>
                    <div className="hello">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <Badge badgeContent={4} color="primary" />
                        
                        {/* <IconButton aria-label="cart">
                        <StyledBadge badgeContent={4} color="secondary">
                            <ShoppingCartIcon />
                        </StyledBadge>
                        </IconButton> */}
                    </div>
                    <i className="fa-solid fa-user"></i>
                </div>
            </div>
        </div>
    )
}

export default Header;