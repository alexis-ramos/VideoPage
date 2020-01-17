import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import useInitialState from "../hooks/useInitialState";
import "../assets/styles/App.scss";

// const API = "http://localhost:3000/initalState";

const Home = ({ mylist, trends, originals }) => {
  // const initialState = useInitialState(API);
  return (
    // NOTA: otra forma de llamar react.fragmen es dejando bacio los pico parentecis
    <>
      <Search />

      <Categories title='Mi lista'>
        <Carousel>
          {mylist.map(item => (
            <CarouselItem key={item.id} {...item} isList />
          ))}
        </Carousel>
      </Categories>

      <Categories title='Tendencias'>
        <Carousel>
          {trends.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title='Originales de platzi video'>
        <Carousel>
          {originals.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = state => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals
  };
};

//export default Home;
// Componente conectado al provider
export default connect(mapStateToProps, null)(Home);
