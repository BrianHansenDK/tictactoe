import React, { useState } from 'react';
import Board from './components/Board';
import History from './components/History';
import { calculateWinner } from './helpers';
import './styles/root.css';

const App = () => {
  const [history, setHistory] = useState([{ board: Array(9).fill(null) }]);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];
  console.log(history);

  const winner = calculateWinner(current.board);
  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${current.isXNext ? 'X' : 'O'}`;

  const handleSquareClick = position => {
    if (current.board[position] || winner) {
      return;
    }

    setHistory(previousSate => {
      const last = previousSate[previousSate.length - 1];

      const newBoard = last.board.map((Square, pos) => {
        if (pos === position) {
          return last.isXNext ? 'X' : 'O';
        }

        return Square;
      });

      return previousSate.concat({ board: newBoard, isXNext: !last.isXNext });
    });

    setCurrentMove(previousSate => previousSate + 1);
  };

  const moveTo = move => {
    setCurrentMove(move);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board board={current.board} handleSquareClick={handleSquareClick} />
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};

export default App;
