import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from '../MainPage/MainPage';
import SnakeGame from '../Games/SnakeGame/SnakeGame';

import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
      </header>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/games/snake" element={<SnakeGame />} />
      </Routes>
    </div>
  );
}

export default App;
