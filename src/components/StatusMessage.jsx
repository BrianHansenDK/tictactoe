import React from 'react';

const StatusMessage = ({ winner, current }) => {
  //  const message = winner
  //    ? `Winner is ${winner}`

  const noMovesLeft = current.board.every(el => el !== null);

  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner &&
        !noMovesLeft &&
        `Next player is ${current.isXNext ? 'X' : 'O'}`}
      {!winner && noMovesLeft && 'x and O tied'}
    </h2>
  );
};

export default StatusMessage;
