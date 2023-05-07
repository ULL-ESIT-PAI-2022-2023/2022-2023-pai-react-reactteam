/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2022-2023
 *
 * @author Adal Díaz Fariña
 * @author Jorge Quintana García
 * @since Apr 23 2023
 * @desc CounterApp.tsx
 * 
 */

import { useState } from 'react';

type CounterAppProps = {
  value: number
}

export const CounterApp: React.FunctionComponent<CounterAppProps> = ({value = 20}: CounterAppProps) :JSX.Element => {

  const [ counter, setCounter ] = useState( value );

  const handleIncrement = () => setCounter( counter + 1 );
  const handleDecrement = () => setCounter( counter - 1 );
  const handleReset = () => setCounter( value );

  return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>

      <button onClick={ handleIncrement }> +1 </button>
      <button onClick={ handleDecrement }> -1 </button>
      <button aria-label="btn-reset" onClick={ handleReset }> Reset </button>
    </>
  );
}


