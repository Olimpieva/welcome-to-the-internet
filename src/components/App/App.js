import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import MainPage from '../MainPage/MainPage';
import Games from '../Games/Games';

import './App.css';
import SnakeGame from '../Games/SnakeGame/SnakeGame';


function App() {

  const navigate = useNavigate();
  return (
    <div className="app">
      <header className="app-header">
      </header>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/snake" element={<SnakeGame navigate={navigate} />} />
      </Routes>
    </div>
  );
}

export default App;
