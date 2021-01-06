import React from "react";
import logo from '../logo.svg';
import shoppingCartImg from  '../shopping-cart.svg';
import {Link} from "react-router-dom";


export default function Header(){

    const navStyle = {
        color: 'black'
        
    }
    


    return (
        <div>
            <header>
                <nav>
                    <ul className="nav-links">
                        <Link style={navStyle} to="/">
                            <li>Home</li>
                        </Link>
                        <Link style={navStyle} to="/shop">
                            <li>Shop</li>
                        </Link>
                        <Link style={navStyle} to="/about">
                            <li>About</li>
                        </Link>
                        <Link style={navStyle} to="/cart">
                            <li><img src={shoppingCartImg} width="20px" height="20px" /></li>
                        </Link>
                    </ul>
                </nav>
            </header>
        </div>
    )
}