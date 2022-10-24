import React from 'react';
import './card.style.scss';
const CardSingle = ({future}) => {
    return ( 
        <div className='card card__single '>
            {/* <p className='card__delete' onClick={()=>handleDelete(city)}><i class="fa-solid fa-xmark"></i></p> */}
            <h2>{future.name}</h2>
            <picture className='card__picture'>
            <img src={`http://openweathermap.org/img/w/${future.icon}.png`} alt="" />
            </picture>
            <p className='card__description'>{`${future.description}`}</p>
            <div className='card__box'>
                <div className='box' >
                    <div >{"دما"}</div>
                    <div>{`${future.temp}ºC`}</div>
                </div>
                <div className='box' >
                    <div>{" ابری بودن"}</div>
                    <div>{future.clouds}</div>
                </div>
                <div className='box'>
                    <div>{" سرعت باد"}</div>
                    <div>{future.wind}</div>
                </div>
            </div>
              {/* <Link to={`city/${city.name}`}><button className='card__btn'>{"مشاهده 4 روز آینده"}</button></Link> */}


        </div>
     );
}
 
export default CardSingle;