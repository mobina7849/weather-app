import React from 'react';
import './header.style.scss';

const Header = (props) => {

    return ( 
    <header className='header'>
        {props.children}
     </header>
     );
}
 
export default Header;