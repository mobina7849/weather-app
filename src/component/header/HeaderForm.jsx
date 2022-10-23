import React,{useState} from 'react';
import{useDispatch,useSelector} from 'react-redux'
import { addCity } from '../../redux/reducer/city.slice';
import axios from 'axios';
import {options} from '../../data/dataSelectbox'
import { useEffect } from 'react';
const HeaderForm = () => {
    const [value,setValue]=useState('')
    //const cities=useSelector(state=>state.cities)
    const dispatch=useDispatch()
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${value}&lang=fa&units=metric&appid=6793aa18d1e5e9cb69cb53d946d089c1`
  
    const handleOption=(e)=>{
        setValue(e.target.value)
        
    }
    //to_fa_numbers <- function(x) {
       // persian <- "\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u06F0\u06F1\u06F2\u06F3\u06F4\u06F5\u06F6\u06F7\u06F8\u06F9"
       // english <- "\U0030\U0031\U0032\U0033\U0034\U0035\U0036\U0037\U0038\U0039\U0030\U0031\U0032\U0033\U0034\U0035\U0036\U0037\U0038\U0039"
       // return(chartr(english,persian, x))
   // }
    const handleAdd=(e)=>{
        e.preventDefault()
        axios.get(url).then((res)=>{
                dispatch(addCity({name:res.data.name,description:res.data.weather[0].description,temp:res.data.main.temp,clouds:res.data.clouds.all,wind:res.data.wind.speed,icon:res.data.weather[0].icon}))


        }).catch( (error) =>{
            console.error(error);
        });
    }

    return ( 
    <div className='header__section'>
        <h1 >{"Tracked Cities"}</h1>
        <h3>{" All the cities you are saved to see the weather!"}</h3>
        <form >
        <input type="submit" value={'+ Add City'} onClick={handleAdd} className='form__btn'/>
           <select className='header__select' name="cities" id="cities" onChange={handleOption}>
              {/* <optgroup label={'شهرها'}> */}
                <option value='' disabled selected>select city</option>
                 {options.map(option=>(
                      <option value={option.eName}>{option.eName}</option>
                 ))}
               

              {/* </optgroup> */}
           </select>
         </form>
         {/* <div className='wrapper'>
            <div className='cube'>
                <div className="slide back"></div>
                <div className="slide left"></div>
                <div className="slide right"></div>
                <div className="slide top"></div>
                <div className="slide bottom"></div>
                <div className="slide front"></div>
            </div>
         </div> */}
     </div>
     );
}
 
export default HeaderForm;