import React from 'react';

const StatusMessage = ({ winner, current }) => {
  //  const message = winner
  //    ? `Winner is ${winner}`

  const noMovesLeft = current.board.every(el => el !== null);

  return (
    <div className="status-message">
      <h2>
        {winner && (
          <>
            Winner is{' '}
            <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
              {winner}
            </span>
          </>
        )}
        {!winner && !noMovesLeft && (
          <>
            Next player is{' '}
            <span className={current.isXNext ? 'text-green' : 'text-orange'}>
              {' '}
              {current.isXNext ? 'X' : 'O'}
            </span>{' '}
          </>
        )}
        {!winner && noMovesLeft && (
          <>
            <span className="text-green">X</span> and{' '}
            <span className="text-orange">O</span> tied
          </>
        )}
      </h2>
    </div>
  );
};

export default StatusMessage;
