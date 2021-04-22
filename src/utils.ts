const initializeBoard = ({ rows, cols }: Grid): Board => {
  let board: Board = [];

  for (let row = 0; row < rows; row++) {
    board[row] = [];
    for (let col = 0; col < cols; col++) {
      board[row][col] = {
        hasMine: false,
        surroundingMines: 0,
        isClicked: false
      }
    }
  }

  return board;
};

const placeMines = ({
  board,
  mineCount
}: {
  board: Board;
  mineCount: number;
}): void => {
  let minesLeft = mineCount;
  while (minesLeft > 0) {
    const row = Math.floor(Math.random() * board.length);
    const col = Math.floor(Math.random() * board[0].length);
    if (!board[row][col].hasMine) {
      board[row][col].hasMine = true;
      minesLeft--;
    }
  }
};

const calculateNeighbours = (
  { board, rows, cols }:
  { board: Board } & Grid
): void => {
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      board[row][col].surroundingMines = countNeighbours({
        board,
        row,
        col,
        rows,
        cols,
      });
    }
  }
};

const countNeighbours = (
  { board, row, col, rows, cols }:
  { board: Board } & CellMeta & Grid
): number => {
  let count = 0;
  for (let i = row - 1; i <= row + 1; i++) {
    for (let j = col - 1; j <= col + 1; j++) {
      if (
        i >= 0 &&
        i < rows &&
        j >= 0 &&
        j < cols &&
        !(i === row && j === col) &&
        board[i][j].hasMine
      ) {
        count++;
      }
    }
  }
  return count;
};

const generateBoard = ({ rows, cols, mineCount }: BoardMeta): Board => {
  const board = initializeBoard({ rows, cols });
  placeMines({ board, mineCount });
  calculateNeighbours({ board, rows, cols })

  return board;
};

export default generateBoard;
