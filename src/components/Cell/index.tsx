import { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

type CellProps = Cell & HTMLAttributes<HTMLElement>;

const StyledCell = styled.div`
  width: 40px;
  height: 40px;
  margin: 1px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;

  transition: all 0.1s ease;
  background-color: #00a6cb;
  :hover {
    background-color: #1f7eac;
  }

  ${(props: Cell) => props.isClicked && `
    background-color: #1f7eac;
    cursor: default;
  `}
  ${(props: Cell) => props.isClicked && props.hasMine && `
    background-color: #e53935;
    :hover {
      background-color: #e53935;
    }
  `}
`;

const Cell = (props: CellProps) => {
  const { hasMine, surroundingMines, isClicked } = props;
  const getContent = (): ReactNode => {
    if (isClicked) {
      if (hasMine) return '\ud83d\udca3';
      if (surroundingMines) return surroundingMines;
    }
    return null;
  };

  return (
    <StyledCell {...props}>
      {getContent()}
    </StyledCell>
  )
};

export default Cell;
