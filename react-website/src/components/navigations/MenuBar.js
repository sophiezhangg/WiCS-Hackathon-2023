import React from 'react'

import './MenuBar.css'
import logo from '../../images/logo.png'
const MenuBar = () => {

    return (
        <nav className="header">
            <div className="nav-wrapper">
                <a className="logo" href='/'><img src = {logo} width={120} height={50}></img></a>
                <input className="menu-btn" type="checkbox" id="menu-btn"/>
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>

                <ul className="menu">
                    <li><a href="/Start">Start</a></li>
                    <li><a href="/AboutUs">About Us</a></li>
                    <li><a href="/SignUp">Sign Up</a></li>                
                </ul>
            </div>
        </nav>
    )
}

export default MenuBar;