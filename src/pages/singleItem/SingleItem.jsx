import React from "react";
import Header from "../../component/header/Header";
import Navbar from "../../component/navbar/Navbar";
import "./single-item.style.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import HeaderSingle from "../../component/header/HeaderSingle";
import Container from "../../component/container/Container";
import SliderSection from "../../component/slider-section/SliderSection";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SingleItem = () => {
  const [future, setFuture] = useState("");
  const [futureDays, setFutureDays] = useState([]);
  const cities = useSelector((state) => state.cities);
  const { cityID } = useParams();
  const navigate=useNavigate()
  const [pending,setPending]=useState(true)
  useEffect(() => {
   
    setFuture(cities.filter((city) => city.name === cityID)[0]);
   
  }, [cities,cityID]);
  const url=`https://api.openweathermap.org/data/2.5/forecast?q=${cityID}&lang=fa&units=metric&appid=6793aa18d1e5e9cb69cb53d946d089c1`
  const handleGetData=async()=>{
   const data = await axios(url).then(res=>res.data)
   if(data.cod==='200'){
      setFutureDays(data)
   }
    
  }
  //update
  useEffect(()=>{
    if(futureDays?.list?.length){
      setPending(false)
      
    }
  },[futureDays])

  useEffect(()=>{
    handleGetData()
},[])
  
 const handleBack=()=>{
  navigate('/')
 }
  if(pending){
    return <div>...pending</div>
  }
  return (
    <>
      <Container>
        <Navbar></Navbar>
      </Container>
      <Header>
        <Container>
          <HeaderSingle future={future} handleBack={handleBack}/>
        </Container>
      </Header>
      <Container>
        <SliderSection future={future} futureDays={futureDays} setFutureDays={setFutureDays}/>
      </Container>
    </>
  );
};

export default SingleItem;
