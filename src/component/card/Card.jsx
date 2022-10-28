import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeCity } from '../../redux/reducer/city.slice';
import './card.style.scss';
import '../header/header.style.scss'
const Card = ({city}) => {
    const [status,setStatus]=useState(false)
    const dispatch=useDispatch()
   const handleDelete=(name)=>{
    dispatch(removeCity(name))
   }
   const handleStatus=()=>{
    setStatus(!status)
   }
    return ( 
        <div className='card'>
            <div className='card__items card__btn' onClick={handleStatus} ><i className="fa-solid fa-ellipsis-vertical"></i><div  style={{marginRight:'2px',fontSize:'12px'}}>{"جزیيات بیشتر"}</div></div>
           {status? <div className='items'  >
           <div onClick={handleStatus} ><i className="fa-solid fa-xmark cursor"></i></div>
           <Link className='item__link' to={`city/${city.name}`}> <div className="item">{"مشاهده بیشتر"}</div></Link>
                <div className="item"  onClick={()=>handleDelete(city.name)}>{"پاک کردن"}</div>
            </div>:null
             }
            <h2>{city.name}</h2>
            <picture className='card__picture'>
            <img src={`http://openweathermap.org/img/w/${city.icon}.png`} alt="" />
            </picture>
            <p className='card__description'>{`${city.description}`}</p>
            <div className='card__box'>
                <div className='box' >
                    <div >{"دما"}</div>
                    <div>{`${city.temp}ºC`}</div>
                </div>
                <div className='box' >
                    <div>{" ابری بودن"}</div>
                    <div>{city.clouds}</div>
                </div>
                <div className='box'>
                    <div>{"سرعت باد"}</div>
                    <div>{city.wind}</div>
                </div>
            </div>

        </div>
     );
}
 
export default Card;