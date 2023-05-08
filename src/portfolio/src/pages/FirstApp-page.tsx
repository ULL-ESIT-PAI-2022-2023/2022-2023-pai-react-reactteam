/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2022-2023
 *
 * @author Adal Díaz Fariña
 * @author Jorge Quintana García
 * @since Apr 27 2023
 * @desc FirstApp-page
 * In this page is render the Hello World and the First App
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from '../components/FirstApp';
import '../../css/counter.css';
import { HelloWorldApp } from '../components/HelloWorldApp';

ReactDOM.createRoot( document.getElementById('root') as HTMLElement ).render(
  <React.StrictMode>
    <HelloWorldApp />
    <FirstApp title='There is a title' />
  </React.StrictMode>
);
