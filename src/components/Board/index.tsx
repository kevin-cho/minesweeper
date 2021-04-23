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
  const [data, setData] = useState<Board | null>(null);

  useEffect(() => {
    const board = generateBoard({ mineCount, rows, cols });
    setData(board);
  }, [rows, cols, mineCount]);

  const onClick = (row: number, col: number) => {

  };

  if (!data) return null;

  return (
    <Container>
      {data.map((rowData, rowIdx) => (
        <Row>
          {rowData.map((cellData, colIdx) => (
            <Cell {...cellData} onClick={() => onClick(rowIdx, colIdx)} />
          ))}
        </Row>
      ))}
    </Container>
  )
};

export default Board;
