import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../card/Card';
const HeaderSingle = ({future}) => {
    //const cities=useSelector(state=>state.cities)
    return ( 
        <div className='headerSingle'>
            <h1>{future.name}</h1>
            <h3>Weather for the next 7 days</h3>

        </div>
     );
}
 
export default HeaderSingle;