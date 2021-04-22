type Grid = {
  rows: number;
  cols: number;
}

type BoardMeta = Grid & {
  mineCount: number;
}

type Board = Cell[][];

type Cell = {
  hasMine: boolean;
  surroundingMines: number;
  isClicked: boolean;
}

type CellMeta = {
  row: number;
  col: number;
}
