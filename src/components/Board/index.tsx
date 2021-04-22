import { useEffect, useState } from 'react';
import styled from 'styled-components';
import generateBoard from '../../utils';
import Cell from '../Cell';

const Container = styled.div``;

const Row = styled.div`
  display: flex;
`;

const Board = ({ mineCount, rows, cols }: BoardMeta) => {
  const [data, setData] = useState<Board | null>(null);

  useEffect(() => {
    const board = generateBoard({ mineCount, rows, cols });
    setData(board);
  }, [rows, cols, mineCount]);

  if (!data) return null;

  return (
    <Container>
      {data.map(row => (
        <Row>
          {row.map(cellData => (
            <Cell {...cellData} />
          ))}
        </Row>
      ))}
    </Container>
  )
};

export default Board;
