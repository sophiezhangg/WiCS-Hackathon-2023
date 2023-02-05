import React from 'react'
import { Link } from "react-router-dom"

import './Footer.css'

const MenuBar = () => {
    return (
        <footer >
            <div className="footer">
                <ul>
                    <li><Link to="/Start">Start</Link></li>
                    <li><Link to="/AboutUs">About Us</Link></li>
                    
                </ul>

                <p>&copy; WiCE. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default MenuBar;