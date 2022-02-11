import './home.css'
import React from 'react';
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import Slider from './Slider'
import Categories from './Categories'
import Products from '../../components/Products/Products'
const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <Categories />
      <Products />
      <NavBar />
      
    </>
  );
};

export default Home;
