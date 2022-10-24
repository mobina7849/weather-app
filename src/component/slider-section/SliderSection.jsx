import axios from 'axios';
import React,{useState} from 'react';
import { useEffect } from 'react';
import CardSingle from '../card/CardSingle';
import CardSmall from '../card/CardSmall';
import '../card/card.style.scss'
import './slider.style.scss'
const SliderSection = ({future,futureDays,setFutureDays}) => {
    const counter=[
        0,1,2,3,4
    ]
   
    const [forcast,setForcast]=useState([



    ])
    const handleHour=(futureDays,forcast)=>{
        //let content = [];
        for (let i = 0; i <5; i++) {
          const item = futureDays.list[i];
          forcast.push({date:item.dt_txt,icon:item.weather[0].icon,description:item.weather[0].description,clouds:item.clouds.all,wind:item.wind.speed,temp:item.main.temp});
          
        }
        return forcast;
    }
    useEffect(()=>{
      //  setForcast([...forcast,{counter.map(c=>)}])
      handleHour(futureDays,forcast)
    },[futureDays,forcast])
    const [currentIndex,setCurrentIndex]=useState(0)

    const left={
        position:"absolute",
        top:"50%",
        transform:"translate(0,-50%)",
        left:"32px",
        fontSize:"45px",
        color:"#fff",
        zIndex:1,
        cursor:"pointer"

    };
    const right={
        position:"absolute",
        top:"50%",
        transform:"translate(0,-50%)",
        right:"32px",
        fontSize:"45px",
        color:"#fff",
        zIndex:1,
        cursor:"pointer"

    };
    const goToPrev=()=>{
        const isFirstSlide=currentIndex===0;
        const newIndex=isFirstSlide?counter.length-1 : currentIndex-1;
        setCurrentIndex(newIndex)
    }
    const goToNext=()=>{
        const isLastSlide=currentIndex===counter.length-1;
        const newIndex=isLastSlide?0: currentIndex+1;
        setCurrentIndex(newIndex);
    }
    //console.log(currentIndex)
    //console.log(currentIndex)

   // console.log(futureDays)
    return ( 
        <div className='slide__setion'>
          <div><CardSingle future={future} className="card-s"/></div>
          <div  style={{position:"relative"}}>
            <div style={left} className="hover" onClick={goToPrev}>{">"}</div>
           {forcast.filter((item,index)=>(index===currentIndex)).map((day)=>(
                      <CardSmall day={day} />
                     //<div style={{textAlign:"center"}}>{day.temp }</div>
                     //<div>hii</div>
          ))}
          <div style={right}  className="hover" onClick={goToNext}>{"<"}</div>
          </div>
        </div>
     );
}
 
export default SliderSection;