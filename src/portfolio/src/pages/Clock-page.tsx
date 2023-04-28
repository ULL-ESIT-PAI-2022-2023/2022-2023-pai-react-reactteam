import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../css/clock.css';
import { ClockApp } from '../components/ClockApp';

ReactDOM.createRoot( document.getElementById('root') as HTMLElement ).render(
    <React.StrictMode>
        <ClockApp />
    </React.StrictMode>
);