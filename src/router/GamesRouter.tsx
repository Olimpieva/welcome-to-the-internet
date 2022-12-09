import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { MinesweeperPage, ChromeDinoGamePage, GamesPage, RockPaperScissorsPage } from 'pages';

const GamesRouter = () => (
  <Routes>
    <Route path="/" element={<GamesPage />} />
    <Route path="/minesweeper" element={<MinesweeperPage />} />
    <Route path="/rock-paper-scissors" element={<RockPaperScissorsPage />} />
    <Route path="/chrome-dino" element={<ChromeDinoGamePage />} />
    <Route path="*" element={<Navigate to="/dashboard/games" />} />
  </Routes>
);

export default GamesRouter;
