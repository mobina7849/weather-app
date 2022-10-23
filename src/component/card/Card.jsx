import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeCity } from '../../redux/reducer/city.slice';
import './card.style.scss';
const Card = ({city}) => {
    const dispatch=useDispatch()
   const handleDelete=(name)=>{
    dispatch(removeCity(name))
   }
    return ( 
        <div className='card'>
            <p className='card__delete' onClick={()=>handleDelete(city)}><i className="fa-solid fa-xmark"></i></p>
            <h2>{city.name}</h2>
            <picture className='card__picture'>
            <img src={`http://openweathermap.org/img/w/${city.icon}.png`} alt="" />
            </picture>
            <p className='card__description'>{`${city.description}`}</p>
            <div className='card__box'>
                <div className='box' >
                    <div >{"temp "}</div>
                    <div>{`${city.temp}ºC`}</div>
                </div>
                <div className='box' >
                    <div>{" cloudes"}</div>
                    <div>{city.clouds}</div>
                </div>
                <div className='box'>
                    <div>{"wind speed"}</div>
                    <div>{city.wind}</div>
                </div>
            </div>
              <Link to={`city/${city.name}`}><button className='card__btn'>{" View 4 days from now "}</button></Link>


        </div>
     );
}
 
export default Card;