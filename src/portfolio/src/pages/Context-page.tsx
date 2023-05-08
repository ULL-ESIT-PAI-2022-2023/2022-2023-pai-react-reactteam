/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2022-2023
 *
 * @author Adal Díaz Fariña
 * @author Jorge Quintana García
 * @since Apr 27 2023
 * @desc Context-page
 * In this page is render the Context App
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
// import { MyApp } from '../components/ContextApp.js';
import { MyAppV2 } from '../components/ContextAppV2.js';

ReactDOM.createRoot( document.getElementById('root') as HTMLElement ).render(
  <React.StrictMode>
    {/* <MyApp /> */}
    <MyAppV2 />
  </React.StrictMode>
);
