import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { MainPage } from '../pages';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
