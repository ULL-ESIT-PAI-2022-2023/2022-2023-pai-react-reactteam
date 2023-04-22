/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Quintana García, Adal Díaz Fariña
 * @since Apr 22, 2023.
 * @description We import a function called useState that remember the state of a variable to be used in the future.
 */

import { useState } from 'react';

/**
 * @description We define a type to the state variable
 */
type valueType = string | null;

/**
 * @description We want the Square to 'remember' when it was clicked and fill it whit a X.
 *  To do that we use the useState function. It 'remember' the button state when pressed using a state variable.
 *  It also give a function to change the value of that state because state variable are inmutables.
 * 
 *  Also to make the button do something when clicked we create a function to handle it and
 *  We give the function hadleClick as a funtion callback to the button onClick event.
 * @returns The JSX Element that represent a Square.
 */
export default function Square(): JSX.Element {
  const [value, setValue] = useState(null as valueType);

  /**
   * @description The funtion callback to the button onClick event.
   */
  function handleClick(): void {
    setValue('X');
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}