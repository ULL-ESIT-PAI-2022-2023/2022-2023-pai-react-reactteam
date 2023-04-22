/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Quintana García, Adal Díaz Fariña
 * @since Apr 22, 2023.
 * @description Now we need access to those square states from the board, to manage the turns and the winner.
 * To do that we make an array of square inner values, filled with null at the start and passing the value
 *   to the square component as a prop.
 * Then we have to pass the handleClick function as a prop too and it will be called when the button is pressed.
 * 
 * We have to pass a function that calls the handleClick method with diferent index values
 *   to access the correct square data.
 * If we dont do it like this we will get an error caused by an infinite loop:
 *   Writing 'onSquareClick={handleClick(0)}' will call the function at this moment, not when the button is pressed.
 *   It change the state of the Board Component and it gets rendered again with the diferent values, making it call again this return
 *     that calls the handleClick method and like that over and over.
 */

import Square from './Square.tsx';
import { useState } from 'react';

export default function Board(): JSX.Element {
  const [squares, setSquares] = useState(Array(9).fill(null));

  /**
   * @description The function callback to the button onClick event
   * We make a copy of the state variable, change the value in index position and set the state variable again.
   * @param index The square index.
   */
  function handleClick(index: number): void {
    const nextSquares = squares.slice();
    nextSquares[index] = "X";
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </>
  );
}