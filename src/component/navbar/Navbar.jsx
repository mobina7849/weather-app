import React from 'react';
import './navbar.style.scss'
const Navbar = () => {
    return ( 
        <nav className='navbar'>
            <div className='navbar__div'>
                <h1 className='nabar__header'>وضعیت آب و هوا</h1>
                <button className='navbar__btn'>burger</button>
            </div>

        </nav>
     );
}
 
export default Navbar;