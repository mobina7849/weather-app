import React from 'react';
import Card from '../card/Card';
import './card_list.style.scss';
import { useSelector } from 'react-redux';
const CardList = () => {
    const cities=useSelector(state=>state.cities)
    return ( 
        <div className='card-list'>
        {cities.map(city=>(
            <Card city={city}/>
        ))}
        </div>
     );
}
 
export default CardList;