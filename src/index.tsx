import React from 'react';
import './index.css';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

const routerBasename =
  import.meta.env.BASE_URL.replace(/\/$/, '') || undefined;

render(
  <BrowserRouter basename={routerBasename}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);