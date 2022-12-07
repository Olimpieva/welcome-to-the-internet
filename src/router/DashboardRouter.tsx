import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { MainPage, MemesPage } from 'pages';
import GamesRouter from './GamesRouter';

const DashboardRouter = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/memes" element={<MemesPage />} />
    <Route path="/games/*" element={<GamesRouter />} />
    <Route path="*" element={<Navigate to="" />} />
  </Routes>
);

export default DashboardRouter;
