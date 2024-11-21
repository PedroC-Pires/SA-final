import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Register from './pages/register/register';
import Home from './pages/home/home';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}