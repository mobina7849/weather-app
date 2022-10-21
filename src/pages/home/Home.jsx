import React from 'react';
import './home.style.scss';
import Container from '../../component/container/Container'
import Header from '../../component/header/Header';
import Navbar from '../../component/navbar/Navbar';
import CardList from '../../component/card_list/CardList';
import HeaderForm from '../../component/header/HeaderForm';
const Home = () => {
    return ( 
        <>
          <Navbar/>
          <Header><HeaderForm/></Header>
          <Container>
            <CardList/>
          </Container>
      

        </>

     );
}
 
export default Home;