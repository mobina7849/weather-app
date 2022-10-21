import React,{useState} from 'react';
import{useDispatch,useSelector} from 'react-redux'
import { addCity } from '../../redux/reducer/city.slice';
import axios from 'axios'
const HeaderForm = () => {
    const [value,setValue]=useState('')
    const cities=useSelector(state=>state.cities)
    const dispatch=useDispatch()
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${value}&lang=fa&units=metric&appid=6793aa18d1e5e9cb69cb53d946d089c1`
    const options=[
        {
            id:0,
            pName:"تهران",
            eName:"tehran"
        },
        {
            id:1,
            pName:"قم",
            eName:"qom"
        },
        {
            id:2,
            pName:"مشهد",
            eName:"mashhad"
        },
        {
            id:3,
            pName:"تبریز",
            eName:""
        },
        {
            id:4,
            pName:"مازندران",
            eName:""
        },
        {
            id:5,
            pName:"گیلان",
            eName:""
        },
        {
            id:6,
            pName:"یزد",
            eName:""
        },
        {
            id:7,
            pName:"اصفهان",
            eName:""
        },
        {
            id:8,
            pName:"بندر عباس",
            eName:""
        },
        {
            id:9,
            pName:"کرمان",
            eName:""
        },
        {
            id:10,
            pName:"کرمانشاه",
            eName:""
        },
        {
            id:11,
            pName:"ایلام",
            eName:""
        },
        {
            id:12,
            pName:"ارومیه",
            eName:""
        },
        {
            id:0,
            pName:"",
            eName:""
        },
        {
            id:0,
            pName:"",
            eName:""
        },
        {
            id:0,
            pName:"",
            eName:""
        },
        {
            id:0,
            pName:"",
            eName:""
        },
        {
            id:0,
            pName:"",
            eName:""
        },
        {
            id:0,
            pName:"",
            eName:""
        },
        {
            id:0,
            pName:"",
            eName:""
        },
    ]
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
            console.log(res.data.clouds.all)
            console.log(res.data.name)
            console.log(res.data.main.temp)
            console.log(res.data.weather[0].description)
            console.log(res.data.weather[0].icon)
            console.log(res.data)
            console.log(res.data.wind.speed)
        })
    }
    const h=()=>{
        axios.get("https://api.openweathermap.org/data/2.5/forecast?q=qom&appid=6793aa18d1e5e9cb69cb53d946d089c1").then((res)=>{
            console.log(res.data)
        })
    }
    return ( 
    <div className='header__section'>
        <h1 onClick={h}>{"وضعیت آب و هوای شهر ها"}</h1>
        <h3>{"شهر مورد نظر خود را انتخاب کنید"}</h3>
        <form >
           <select name="cities" id="cities" onChange={handleOption}>
              {/* <optgroup label={'شهرها'}> */}
                 {options.map(option=>(
                      <option value={option.pName}>{option.pName}</option>
                 ))}
               

              {/* </optgroup> */}
           </select>
           <input type="submit" value={'اضافه کردن'} onClick={handleAdd}/>
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