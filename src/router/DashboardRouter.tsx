import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { GamesPage, MainPage, MemesPage } from 'pages';

const DashboardRouter = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/memes" element={<MemesPage />} />
    <Route path="/games" element={<GamesPage />} />
    <Route path="*" element={<Navigate to="" />} />
  </Routes>
);

export default DashboardRouter;
