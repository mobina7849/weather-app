import React from 'react';
import Header from '../../component/header/Header';
import Navbar from '../../component/navbar/Navbar';
import './single-item.style.scss';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState,useEffect } from 'react';
import HeaderSingle from '../../component/header/HeaderSingle';
import CardSingle from '../../component/card/CardSingle';
const SingleItem = () => {
    const [future,setFuture]=useState('')
    const cities=useSelector(state=>state.cities)
    const {cityID}=useParams()
    useEffect(() => {
        setFuture(cities.filter((city) => city.name === cityID)[0]);
        console.log(cities)
       
      }, []);
      console.log(future)
    return ( 
        <>
         <Navbar></Navbar>
         <Header ><HeaderSingle future={future}/>
          <CardSingle future={future}/>
         </Header>
        </>
    
     );
}
 
export default SingleItem;