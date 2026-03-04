import './App.css'

function App() {
  return (
    <>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to your dashboard!</h1>

        <h3 className="text-3xl font-bold underline">
          Coming{" "}
          <span className="relative inline-block group">
            <span className="underline group-hover:opacity-0">
              soon
            </span>
            <span className="absolute left-0 top-0 underline hover:scale-900 hover:text-[oklch(70.4%_0.191_22.216)] opacity-0 group-hover:opacity-100">
              Kessaya
            </span>
          </span>
          ..
        </h3>
        <p>Hello world</p>
        <TicTacToe />
      </div>
    </>
  )
}

function TicTacToe() {
  const [board, setBoard] = React.useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = React.useState(true);

  const handleClick = (i) => {
    const newBoard = board.slice();
    if (calculateWinner(newBoard) || newBoard[i]) {
      return;
    }
    newBoard[i] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const renderSquare = (i) => {
    return (
      <button className="square" onClick={() => handleClick(i)}>
        {board[i]}
      </button>
    );
  };

  const winner = calculateWinner(board);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else if (board.every(square => square)) {
    status = 'Draw';
  } else {
    status = 'Next player: ' + (isXNext ? 'X' : 'O');
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

function calculateWinner(squares) {
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

export default App;
