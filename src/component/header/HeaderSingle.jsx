import React from 'react';
import './header.style.scss'
const HeaderSingle = ({future,handleBack}) => {
    return ( 
        <div className='headerSingle '>
            <h1>{future.name}</h1>
            <h3>{"آب و هوای چند ساعت آینده"}</h3>
            <button className='headerSingle__btn' onClick={handleBack}>{"بازگشت به صفحه اصلی"}</button>

        </div>
     );
}
 
export default HeaderSingle;