import React,{useState} from 'react';
import './header.style.scss';

const Header = (props) => {

    //console.log(cities)
    return ( 
    <header className='header'>
        {props.children}
     </header>
     );
}
 
export default Header;