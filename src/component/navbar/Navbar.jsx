import React from 'react';
import './navbar.style.scss'
const Navbar = () => {
    return ( 
        <nav className='navbar'>
            <div className='navbar__div'>
                <h1 className='nabar__header'> Weather App </h1>
                <button className='navbar__btn'><i className="fa-solid fa-cloud-sun fa-2xl" style={{color:"white",}}></i></button>
            </div>

        </nav>
     );
}
 
export default Navbar;