import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from '../components/FirstApp';
import '../../css/counter.css';
import { HelloWorldApp } from '../components/HelloWorldApp';

ReactDOM.createRoot( document.getElementById('root') as HTMLElement ).render(
  <React.StrictMode>
    <HelloWorldApp />
    {/* <FirstApp title='There is a title' /> */}
  </React.StrictMode>
);
