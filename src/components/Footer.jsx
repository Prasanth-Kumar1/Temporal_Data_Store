import React from 'react';
import ReactDom from 'react-dom';

const date = new Date();
let year = date.getFullYear();

function Footer(){
    return(<footer><p>Copyright ©️ {year} Temporal Data Store.</p></footer>);
}

export default Footer;