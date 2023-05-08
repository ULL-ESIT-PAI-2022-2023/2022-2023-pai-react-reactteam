/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2022-2023
 *
 * @author Adal Díaz Fariña
 * @author Jorge Quintana García
 * @since Apr 27 2023
 * @desc Counter-page
 * In this page is render the Counter app
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from '../components/CounterApp';
import { Counter } from '../components/CounterAppClassComponent';
import '../../css/counter.css';

ReactDOM.createRoot( document.getElementById('root') as HTMLElement ).render(
  <React.StrictMode>
    <CounterApp value = {20} />
    <Counter startedValue = {20} />
  </React.StrictMode>
);


