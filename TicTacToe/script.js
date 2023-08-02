// GameBoard module
const gameBoard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];

  const getBoard = () => board;
  const isCellEmpty = (index) => board[index] === "";
  const placeMark = (index, mark) => {
    if (isCellEmpty(index)) {
      board[index] = mark;
      return true;
    }
    return false;
  };
  const clearBoard = () => {
    board = ["", "", "", "", "", "", "", "", ""];
  };

  return { getBoard, placeMark, clearBoard };
})();

// Player factory
const createPlayer = (name, mark) => {
  return { name, mark };
};

// Game flow module
const game = (() => {
  const player1 = createPlayer("Player X", "X");
  const player2 = createPlayer("Player O", "O");
  let currentPlayer = player1;

  const cells = document.querySelectorAll(".grid div");
  const message = document.getElementById("message");
  const restartBtn = document.getElementById("restartBtn");

  const switchPlayer = () => {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
    message.textContent = `${currentPlayer.name}'s turn`;
  };

  const checkWin = (mark) => {
    const board = gameBoard.getBoard();
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    return winPatterns.some((pattern) =>
      pattern.every((index) => board[index] === mark)
    );
  };

  const checkTie = () => {
    const board = gameBoard.getBoard();
    return board.every((cell) => cell !== "");
  };

  const handleCellClick = (index) => {
    if (gameBoard.placeMark(index, currentPlayer.mark)) {
      cells[index].textContent = currentPlayer.mark;
      if (checkWin(currentPlayer.mark)) {
        message.textContent = `${currentPlayer.name} wins!`;
        cells.forEach((cell) => cell.removeEventListener("click", handleClick));
      } else if (checkTie()) {
        message.textContent = "It's a tie!";
      } else {
        switchPlayer();
      }
    }
  };

  const handleClick = (e) => {
    const index = Array.from(cells).indexOf(e.target);
    handleCellClick(index);
  };

  cells.forEach((cell) => cell.addEventListener("click", handleClick));

  restartBtn.addEventListener("click", () => {
    gameBoard.clearBoard();
    cells.forEach((cell) => {
      cell.textContent = "";
      cell.addEventListener("click", handleClick);
    });
    currentPlayer = player1;
    message.textContent = `${currentPlayer.name}'s turn`;
  });
})();
