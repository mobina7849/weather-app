import React from "react";
import Header from "../../component/header/Header";
import Navbar from "../../component/navbar/Navbar";
import "./single-item.style.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import HeaderSingle from "../../component/header/HeaderSingle";
import CardSingle from "../../component/card/CardSingle";
import Container from "../../component/container/Container";
import SliderSection from "../../component/slider-section/SliderSection";
import axios from "axios";
import api from "../../api/api";
const SingleItem = () => {
  const [future, setFuture] = useState("");
  const [futureDays, setFutureDays] = useState([]);
  const cities = useSelector((state) => state.cities);
  const { cityID } = useParams();

  useEffect(() => {
   
    setFuture(cities.filter((city) => city.name === cityID)[0]);
    //console.log(cities)
   
  }, []);
  const url=`https://api.openweathermap.org/data/2.5/forecast?q=${future.name}&lang=fa&units=metric&appid=6793aa18d1e5e9cb69cb53d946d089c1`
  const handleGetData=async()=>{
    const data = await axios.get(url)
    setFutureDays(data)
  }

  useEffect(()=>{
    handleGetData()
  },[])
  //console.log(futureDays);
  //console.log(future);
 // console.log(url)
  
  return (
    <>
      <Container>
        <Navbar></Navbar>
      </Container>
      <Header>
        <Container>
          <HeaderSingle future={future} />
        </Container>
      </Header>
      <Container>
        <SliderSection future={future} futureDays={futureDays} setFutureDays={setFutureDays}/>
      </Container>
    </>
  );
};

export default SingleItem;
