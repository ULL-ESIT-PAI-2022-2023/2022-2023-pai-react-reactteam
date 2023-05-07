/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2022-2023
 *
 * @author Adal Díaz Fariña
 * @author Jorge Quintana García
 * @since Apr 27 2023
 * @desc GiftExpertApp page.tsx
 * 
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from '../components/GifExpertApp';
import '../../css/styles.css';

ReactDOM.createRoot( document.getElementById('root') as HTMLElement ).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
);