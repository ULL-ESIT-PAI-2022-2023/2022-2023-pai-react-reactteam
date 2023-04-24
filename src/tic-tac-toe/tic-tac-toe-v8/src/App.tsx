/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Quintana García, Adal Díaz Fariña
 * @since Apr 22, 2023.
 * @description We create a new father component and we lift the states to it.
 */

import Board from './Board.tsx';
import { useState } from 'react';

/**
 * @description Game Component that have the squares states, the history of moves and the turn.
 * @returns The Tic-Tac-Toe Game component.
 */
export default function Game(): JSX.Element {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext: boolean = currentMove % 2 === 0;
  const currentSquares: string[] = history[currentMove];

  /**
   * @description Method used at the end of a button click.
   * @param nextSquares The new current squares states.
   */
  function handlePlay(nextSquares: string[]): void {
    const nextHistory: string[][] = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  /**
   * @description Method used to jump at specific time line.
   * @param nextMove The move to jump to.
   */
  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  /**
   * @description The history components.
   */
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