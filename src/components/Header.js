import React from 'react';

import './Header.css'

import Navigation from './Navigation';

const Header = (props) => {

    return(
        <header class="header-content" >
            <div class="header-title" >
                <p class="header-text-title" > SID-Tutorial </p>
            </div>
            <Navigation/>
        </header>
    )

};


export default Header;