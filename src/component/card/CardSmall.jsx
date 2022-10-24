import React from "react";
const CardSmall = ({day}) => {
  return (
    <div className="card ">
      {/* <p className='card__delete' onClick={()=>handleDelete(city)}><i class="fa-solid fa-xmark"></i></p> */}
      {/* <h2>{future.name}</h2> */}
      <div className="card__date">{`${day.date}`}</div>
      <picture className="card__picture">
        <img
          src={`http://openweathermap.org/img/w/${day.icon}.png`}
          alt=""
        />
      </picture>
      <p className="card__description">{`${day.description}`}</p>
      <div className="card__box">
        <div className="box">
          <div>{"دما"}</div>
          <div>{`${day.temp}ºC`}</div>
        </div>
        <div className="box">
          <div>{" ابری بودن"}</div>
          <div>{day.clouds}</div>
        </div>
        <div className="box">
          <div>{" سرعت باد"}</div>
          <div>{day.wind}</div>
        </div>
      </div>
      {/* <Link to={`city/${city.name}`}><button className='card__btn'>{"مشاهده 4 روز آینده"}</button></Link> */}
    </div>
  );
};

export default CardSmall;
