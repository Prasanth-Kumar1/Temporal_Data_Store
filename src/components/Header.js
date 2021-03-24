import React from 'react';
import About from './About';
import Signup from './Signup';
import { Link } from 'react-router-dom';


function Header(){
 return(
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">TDS</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Togglenavigation">
             <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class=" navbar-nav ml-auto">
            <Link to="/signup">
                <li class="nav-item active nav-link">
                    Signup
                </li>
            </Link>
            <Link to="/about">
                <li class="nav-item nav-link">
                    About Us
                </li>
            </Link>
            <Link to="/contact">
                <li class="nav-item nav-link">
                    Contact
                </li>
            </Link>
        </ul>
        </div>

    </nav>
 );   
}

export default Header;