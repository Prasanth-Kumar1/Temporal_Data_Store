import React from 'react';
import About from './About';
import { Select, FormControl, MenuItem } from '@material-ui/core';
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
        <FormControl className="sign">
            <Select variant="outlined">
                <MenuItem value="Worldwide">User Name</MenuItem>
                <MenuItem value="Worldwide">Logout</MenuItem>
            </Select>
      </FormControl>
            <Link to="/about">
                <li class="nav-item nav-link nav-about">
                    About Us
                </li>
            </Link>
        </ul>
        </div>

    </nav>
 );   
}

export default Header;