import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { BeersContextProvider } from './beers/context/beers.context.provider';

import App from './core/components/app/App';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BeersContextProvider>
      <Router>
        <App />
      </Router>
    </BeersContextProvider>
  </React.StrictMode>
);
