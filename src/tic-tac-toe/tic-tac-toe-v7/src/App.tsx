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
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares: string[] = history[history.length - 1];

  /**
   * @description Method used at the end of a button click.
   * @param nextSquares The new current squares states.
   */
  function handlePlay(nextSquares: string[]): void {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}