import React, { useState } from "react";

function TicTacToe() {
  const [boardCells, setBoardCells] = useState(
    Array(9).fill("")
  );

  const [currentPlayer, setCurrentPlayer] =
    useState("X");

  const handleCellClick = (cellIndex) => {
    
    // Prevent replacing existing value

    if (boardCells[cellIndex] !== "") {
      return;
    }

    const updatedBoard = [...boardCells];

    updatedBoard[cellIndex] = currentPlayer;

    setBoardCells(updatedBoard);

    setCurrentPlayer(
      currentPlayer === "X" ? "O" : "X"
    );
  };

  const resetGameBoard = () => {
    setBoardCells(Array(9).fill(""));
    setCurrentPlayer("X");
  };

  return (
    <div className="game-container">
      
      <h1>XO Game</h1>

      <h2>
        Current Player : {currentPlayer}
      </h2>

      <div className="board-container">
        
        {boardCells.map(
          (singleCell, index) => (
            <button
              key={index}
              className="board-cell"
              onClick={() =>
                handleCellClick(index)
              }
            >
              {singleCell}
            </button>
          )
        )}

      </div>

      <button
        className="reset-button"
        onClick={resetGameBoard}
      >
        Restart Game
      </button>

    </div>
  );
}

export default TicTacToe;