import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Minesweeper, RockPaperScissors } from 'games';
import { GamesPage } from 'pages';

const GamesRouter = () => (
  <Routes>
    <Route path="/" element={<GamesPage />} />
    <Route path="/minesweeper" element={<Minesweeper />} />
    <Route path="/rock-paper-scissors" element={<RockPaperScissors />} />
    <Route path="*" element={<Navigate to="/dashboard/games" />} />
  </Routes>
);

export default GamesRouter;
