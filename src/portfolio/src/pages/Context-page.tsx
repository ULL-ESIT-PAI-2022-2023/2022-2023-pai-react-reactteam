import React from 'react';
import ReactDOM from 'react-dom/client';
import { MyApp } from '../components/ContextApp.js';
import { MyAppV2 } from '../components/ContextAppV2.js';

ReactDOM.createRoot( document.getElementById('root') as HTMLElement ).render(
  <React.StrictMode>
    {/* <MyApp /> */}
    <MyAppV2 />
  </React.StrictMode>
);
