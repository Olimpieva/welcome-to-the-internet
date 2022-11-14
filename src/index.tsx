import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/lib/locale/ru_RU';
import 'antd/dist/antd.min.css';

import Router from './router';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <ConfigProvider locale={ruRU}>
    <Router />
  </ConfigProvider>
);
