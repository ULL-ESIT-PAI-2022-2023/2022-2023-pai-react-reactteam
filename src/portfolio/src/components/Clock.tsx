/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2022-2023
 *
 * @author Adal Díaz Fariña
 * @author Jorge Quintana García
 * @since Apr 26 2023
 * @desc Clock.tsx
 * 
 */

import * as React from 'react';

interface ClockProps {
  hour: number,
  minute: number,
  second: number
}

export const Clock: React.FunctionComponent<ClockProps> = ({hour, minute, second}: ClockProps): JSX.Element => {
  return (
    <div className="clock">
      <div className="hand hour" style={{transform:`translate(-50%) rotate(${hour * 360}deg)`}}></div>
      <div className="hand minute" style={{transform:`translate(-50%) rotate(${minute * 360}deg)`}}></div>
      <div className="hand second" style={{transform:`translate(-50%) rotate(${second * 360}deg)`}}></div>

      <div className="number number1">
        <div>1</div>
      </div>
      <div className="number number2">
        <div>2</div>
      </div>
      <div className="number number3">
        <div>3</div>
        
      </div>
      <div className="number number4">
        <div>4</div>
      </div>
      <div className="number number5">
        <div>5</div>
      </div>
      <div className="number number6">
        <div>6</div>
      </div>
      <div className="number number7">
        <div>7</div>
      </div>
      <div className="number number8">
        <div>8</div>
      </div>
      <div className="number number9">
        <div>9</div>
      </div>
      <div className="number number10">
        <div>10</div>
      </div>
      <div className="number number11">
        <div>11</div>
      </div>
      <div className="number number12">
        <div>12</div>
      </div>
    </div>
  );  
}