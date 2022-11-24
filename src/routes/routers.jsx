import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Pokemon from '../pages/Pokemon';
import Pokedex from '../pages/Pokedex';
import Home from '../pages/Home';

export default function Routers() {
  return <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokedex" element={<Pokedex />} />
      <Route path="/pokedex/:id" element={<Pokemon />} />
    </Routes>
  </>
}