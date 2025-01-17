import React, { useContext } from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import Departments from "../components/Departments";
import Oursrvies from "../components/Oursrvies";
import Questions from "../components/Questions";
import Video from "../components/Video";
const Home = () => {
  return (
    <>
      <Hero />
        <Oursrvies />
      <Biography imageUrl={"/about.png"} />
      <Departments />
      <Questions/> 
    </>
  );
};

export default Home;
