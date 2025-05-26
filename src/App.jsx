import { useState } from "react";
function Square({ value, onSquareClick }) {
  return (
    <button
      onClick={onSquareClick}
      className="text-lg h-12 w-12 border border-gray-200 m-1"
    >
      {value}
    </button>
  );
}

export default function Board() {
  const [isXnext, setIsXnext] = useState(true);
  const [squares, setSqures] = useState(Array(9).fill(null));
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSqures = squares.slice();
    if (isXnext) {
      nextSqures[i] = "X";
    } else {
      nextSqures[i] = "O";
    }
    setSqures(nextSqures);
    setIsXnext(!isXnext);
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner is : " + winner;
  } else {
    status = "Next Player : " + (isXnext ? "X" : "O");
  }
  return (
    <>
      <h3> {status} </h3>
      <div className="flex">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="flex">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="flex">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 6],
    [0, 4, 8],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
