import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { MainPage, MemesPage } from '../pages';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/memes" element={<MemesPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
