import React, { useEffect, useState } from 'react'
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  let heroData = [
    {text1:"Dive into",text2:"what you love"},
    {text1:"Indulge",text2:"your passions"},
    {text1:"Give in to",text2:"your passions"},
  ]
  const [heroCount, setHeroCount
  ] = useState(0);
  const [playStatus,setPlayStatus] = useState(false);

  useEffect(()=>{
    const interval = setInterval(() => {
      setHeroCount((count)=>{return count===2?0:count+1})
    }, 7000); 
    return () => clearInterval(interval);
  },[])

  return (
    <>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar />

      <Routes>
        <Route path="/" element={
          <Hero
            setPlayStatus={setPlayStatus}
            heroData={heroData[heroCount]}
            heroCount={heroCount}
            setHeroCount={setHeroCount}
            playStatus={playStatus}
          />
        } />
        <Route path="/explore" element={<Explore />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App