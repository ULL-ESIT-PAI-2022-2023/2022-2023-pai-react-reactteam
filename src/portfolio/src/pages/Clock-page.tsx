/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2022-2023
 *
 * @author Adal Díaz Fariña
 * @author Jorge Quintana García
 * @since Apr 27 2023
 * @desc Clock-page
 * In this page is render the clockApp
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../css/clock.css';
import { ClockApp } from '../components/ClockApp';

ReactDOM.createRoot( document.getElementById('root') as HTMLElement ).render(
  <React.StrictMode>
    <ClockApp />
  </React.StrictMode>
);