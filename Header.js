import React from 'react';
import {Link} from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div>
                <h1>
                    <Link to="/" className="logo">
                           Car On Rents
                    </Link>
                </h1>
            </div>
            <div className='header-Links'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/bookcars">Book Cars</Link>
                        
                    </li>
                </ul><ul>
                    <li>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                </ul><ul>
                    <li>
                        <Link to="/rentedcars" className='rentedcars'>Rented Cars</Link>
                    </li>
                </ul>

            </div>
        </header>
    )
}

export default Header;