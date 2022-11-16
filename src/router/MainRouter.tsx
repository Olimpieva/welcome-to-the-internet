import { WelcomePage } from 'pages';
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { selectIsAuthorized } from 'redux/user/selectors';
import { useAppSelector } from 'utils/hooks';
import DashboardRouter from './DashboardRouter';
import { MainLayout } from './layouts';
import RequireAuth from './RequireAuth';

const Router = () => {
  const isAuthorized = useAppSelector(selectIsAuthorized);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="welcome" element={!isAuthorized ? <WelcomePage /> : <Navigate to="/dashboard" />} />

          <Route
            path="dashboard/*"
            element={
              <RequireAuth>
                <DashboardRouter />
              </RequireAuth>
            }
          />

          <Route path="*" element={<Navigate to="/welcome" />} />
        </Route>
        <Route path="*" element={<Navigate to="/welcome" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
