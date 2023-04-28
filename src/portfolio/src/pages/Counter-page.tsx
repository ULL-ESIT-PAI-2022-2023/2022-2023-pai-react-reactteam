import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from '../components/CounterApp';
import '../../css/counter.css';

ReactDOM.createRoot( document.getElementById('root') as HTMLElement ).render(
    <React.StrictMode>
        <CounterApp value={ 20 } />
    </React.StrictMode>
);


