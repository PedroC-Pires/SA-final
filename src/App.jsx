import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import './app.css'

import Login from './pages/login/login';
import Home from './pages/home/homeN';
import HomeL from './pages/home/homeL';
import Cadastro from './pages/cadastro/cadastro';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<HomeL />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </div>
  );
}