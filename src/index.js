import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // React Query Setting
import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ConfigProvider>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </QueryClientProvider>
);
