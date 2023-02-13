import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './core/components/app/App';
import { Header } from './core/components/header/header';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <Header></Header>
  </React.StrictMode>
);
