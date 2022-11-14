import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/lib/locale/ru_RU';
import 'antd/dist/antd.min.css';

import store from './redux/store';
import Router from './router';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <ConfigProvider locale={ruRU}>
      <Router />
    </ConfigProvider>
  </Provider>
);
