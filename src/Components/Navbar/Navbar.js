import './Navbar.css';
import React, { useState } from 'react';
// import Content from './Content/Content';
import more from '../../images/more.png';
import Products from './Products/Products';
import Hamburger from './Hamburger/Hamburger';
import algoLogo from '../../images/algoLogo.png';
import New_Content_Navbar from './New_Content_Navbar/New_Content_Navbar';

function Navbar() {

    const [productHover, setProductHover] = useState(false);
    const [contentHover, setContentHover] = useState(false);
    const [display, setDisplay] = useState(false);

    return (
        <nav className='navbar'>
            <a
                id='hamburger'
                href='#'
                onClick={() => setDisplay(true)}
            >
                <img src={more} />
            </a>

            <Hamburger customStyleMethod={setDisplay} customStyle={display} />

            <a href='#' id='logo'>
                <div id='upper'>
                    <div id='logoImg'>
                        <img src={algoLogo} />
                    </div>
                    <p id='logoText'>
                        AlgoExpert
                    </p>
                </div>
                <div id='lower'>
                    <p>Ace the Technical Interviews</p>
                </div>
            </a>
            <div className='navbarComponent'>
                <ul className='navbarList'>
                    <li
                        onMouseEnter={() => setProductHover(true)}
                        onMouseLeave={() => setProductHover(false)}
                    >Products
                        <Products value={productHover} />
                    </li>
                    <li
                        onMouseEnter={() => setContentHover(true)}
                        onMouseLeave={() => setContentHover(false)}
                    >Content
                        {/* <Content value={contentHover} /> */}
                        <New_Content_Navbar value={contentHover} />
                    </li>
                    <li>Team</li>
                    <li><i>Purchase</i></li>
                </ul>
            </div>
            <a href='#' id='login'>Log In</a>
        </nav>
    );
}

export default Navbar;
