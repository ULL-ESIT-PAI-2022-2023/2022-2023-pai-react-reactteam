/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2022-2023
 *
 * @author Adal Díaz Fariña
 * @author Jorge Quintana García
 * @since Apr 26 2023
 * @desc ClockApp.tsx
 * This component have the logic of the clock. It's in charge of refresh the time
 * each second
 */

import { useState, useEffect } from 'react';
import { Clock } from './Clock';

export const ClockApp = (): JSX.Element => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }), [hour, minute, second];
  
  const refreshClock = () => {
    const date = new Date();
    setHour(date.getHours() / 12);
    setMinute(date.getMinutes() / 60);
    setSecond(date.getSeconds() / 60);
  }

  return (
    <Clock 
      hour = { hour }
      minute = { minute }
      second = { second } 
    />
  );
}