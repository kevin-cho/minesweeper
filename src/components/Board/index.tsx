import { useEffect, useState } from 'react';
import styled from 'styled-components';
import generateBoard from '../../utils';
import Cell from '../Cell';

const Container = styled.div`
  display: inline-block;
  margin-top: 10%;
`;

const Row = styled.div`
  display: flex;
`;

const Board = ({ mineCount, rows, cols }: BoardMeta) => {
  const [boardData, setBoardData] = useState<Board | null>(null);

  useEffect(() => {
    const board = generateBoard({ mineCount, rows, cols });
    setBoardData(board);
  }, [rows, cols, mineCount]);

  const revealBoard = () => {
    if (!boardData) return;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        boardData[row][col].isClicked = true;
      }
    }

    setBoardData([...boardData]);
  }

  const onClick = (row: number, col: number) => {
    if (!boardData) return;

    const cell = boardData[row][col];
    if (cell.isFlagged) return;
    cell.isClicked = true;

    if (cell.hasMine) {
      revealBoard();
    }

    // Rule: When a cell has 0 surrounding mines, reveal neighbours and repeat
    if (cell.surroundingMines === 0) {
      for (let i = row - 1; i <= row + 1; i++) {
        for (let j = col - 1; j <= col + 1; j++) {
          if (
            i >= 0 &&
            i < rows &&
            j >= 0 &&
            j < cols &&
            !(i === row && j === col) &&
            !boardData[i][j].isClicked
          ) {
            onClick(i, j);
          }
        }
      }
    }

    setBoardData([...boardData]);
  };

  const onRightClick = (row: number, col: number) => {
    if (!boardData) return;
    boardData[row][col].isFlagged = !boardData[row][col].isFlagged;
    setBoardData([...boardData]);
  }

  if (!boardData) return null;

  return (
    <Container>
      {boardData.map((rowData, rowIdx) => (
        <Row>
          {rowData.map((cellData, colIdx) => (
            <Cell
              {...cellData}
              onClick={() => onClick(rowIdx, colIdx)}
              onContextMenu={e => {
                e.preventDefault();
                onRightClick(rowIdx, colIdx);
              }}
            />
          ))}
        </Row>
      ))}
    </Container>
  )
};

export default Board;
