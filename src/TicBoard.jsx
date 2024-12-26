import React, { useState } from "react";

const TicBoard = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const calculateWinner = (squares) => {
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
    for (let line of lines) {
      const [a, b, c] = line;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      
      <div style={boardStyle}>
        {board.map((value, index) => (
          <button
            key={index}
            style={cellStyle}
            onClick={() => handleClick(index)}
          >
            {value}
          </button>
        ))}
      </div>
      <h2>
        {winner
          ? `Winner: ${winner}`
          : board.every((cell) => cell)
          ? "It's a draw!"
          : `Next Player: ${isXNext ? "X" : "O"}`}
      </h2>
    </div>
  );
};

const boardStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 100px)",
  gridGap: "5px",
  justifyContent: "center",
  margin: "20px auto",
};

const cellStyle = {
  width: "100px",
  height: "100px",
  fontSize: "24px",
  cursor: "pointer",
  textAlign: "center",
  backgroundColor: "#f0f0f0",
  border: "1px solid #ccc",
};

export default TicBoard;
