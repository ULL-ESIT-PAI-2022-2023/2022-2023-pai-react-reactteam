/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Quintana García, Adal Díaz Fariña
 * @since Apr 22, 2023.
 * @description TODO
 */

import Board from './Board.tsx';
import { useState } from 'react';

/**
 * @description TODO
 * @returns 
 */
export default function Game(): JSX.Element {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext: boolean = currentMove % 2 === 0;
  const currentSquares: string[] = history[currentMove];

  /**
   * @description TODO
   * @param nextSquares 
   */
  function handlePlay(nextSquares: string[]): void {
    const nextHistory: string[][] = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  /**
   * @description TODO
   * @param nextMove 
   */
  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  const moves: JSX.Element[] = history.map((_squares: string[], move: number) => {
    let description: string;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}