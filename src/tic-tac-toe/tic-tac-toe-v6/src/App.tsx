/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Quintana García, Adal Díaz Fariña
 * @since Apr 22, 2023.
 * @description We create a state variable to 'remember' the current turn.
 */

import Square from './Square.tsx';
import { useState } from 'react';

/**
 * @description The Board JSX Element.
 * We add a div with the status in it.
 * @returns The JSX Element that represent a Board.
 */
export default function Board(): JSX.Element {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  /**
   * @description If the square have been clicked we dont change the state variable.
   * Otherwise we create a copy of the array and: 
   *   Based on the index passed and on the state variable xIsNext, we write 'X' or 'O'.
   * Then we override the state values to render again with the new values.
   * @param index The square index.
   */
  function handleClick(index: number): void {
    if (calculateWinner(squares) || squares[index]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[index] = 'X';
    } else {
      nextSquares[index] = 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  /**
   * @description This gets called every render, so it looks at the squares Array to see who is the winner.
   */
  const winner = calculateWinner(squares);
  let status: string;
  if (winner) {
    status = 'Ganador: ' + winner;
  } else {
    status = 'Siguiente jugador: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
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

/**
 * @description Method used to calculate the winner, it returns 'X', 'O' or null.
 * @param squares The current game status of the squares.
 * @returns The winner as 'X' or 'O'. If there is no winner it returns null.
 */
function calculateWinner(squares: string[]): string | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}