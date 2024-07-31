import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Test from '../pages/Test';
import About from '../pages/About';
import Register from '../pages/Register';
import Contact from '../pages/Contact';
import Hero from '../pages/hero/Hero';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/test" element={<Test />} />
      <Route path="/about" element={<About />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default Router;
