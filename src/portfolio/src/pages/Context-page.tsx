import React from 'react';
import ReactDOM from 'react-dom/client';
import { MyApp } from '../components/ContextApp.js';
import '../../css/counter.css';

ReactDOM.createRoot( document.getElementById('root') as HTMLElement ).render(
    <React.StrictMode>
        <MyApp />
    </React.StrictMode>
);
