import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Hero from '../pages/hero/Hero';
import Test from '../pages/Test'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Register from '../pages/Register'



const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="test" element={<Test/>} />
      <Route path="zikr" element={<About />} />
      <Route path="register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default Router;
