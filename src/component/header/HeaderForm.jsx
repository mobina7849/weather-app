import React,{useState} from 'react';
import{useDispatch} from 'react-redux'
import { addCity } from '../../redux/reducer/city.slice';
import axios from 'axios';
import {options} from '../../data/dataSelectbox'
const HeaderForm = () => {
    const [value,setValue]=useState('')
    const dispatch=useDispatch()
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${value}&lang=fa&units=metric&appid=6793aa18d1e5e9cb69cb53d946d089c1`
  
    const handleOption=(e)=>{
        setValue(e.target.value)
        
    }

    const handleAdd=(e)=>{
        e.preventDefault()
        axios.get(url).then((res)=>{
                dispatch(addCity({name:res.data.name,description:res.data.weather[0].description,temp:res.data.main.temp,clouds:res.data.clouds.all,wind:res.data.wind.speed,icon:res.data.weather[0].icon}))


        }).catch( (error) =>{
           alert('Network error! please turn on vpn or check your network')
        });
    }
 

    return ( 
    <div className='header__section'>
        <h1 >{"شهرهای ایران"}</h1>
        <h3>{" شهرهای مورد نظر خود را انتخاب کنید!"}</h3>
        <form >
        <input type="submit" value={'+ اضافه کردن شهر'} onClick={handleAdd} className='form__btn'/>
           <select className='header__select' name="cities" id="cities" onChange={handleOption}>
                <option  disabled selected={'selected'} >{"انتخاب شهر"}</option>
                 {options.map(option=>(
                      <option key={option.id} value={option.eName}>{option.pName}</option>
                 ))}

           </select>
         </form>

     </div>
     );
}
 
export default HeaderForm;