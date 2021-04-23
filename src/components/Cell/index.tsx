import { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

const StyledCell = styled.div`
  width: 40px;
  height: 40px;
  margin: 1px;
  border-radius: 4px;
  cursor: pointer;

  transition: all 0.1s ease;
  background-color: #00a6cb;
  :hover {
    background-color: #1f7eac;
  }
`;

const Cell = (
  { hasMine, surroundingMines, isClicked, ...props }:
  Cell & HTMLAttributes<HTMLElement>
) => {
  const getContent = (): ReactNode => {
    if (isClicked) {
      if (hasMine) return '\ud83d\udca3';
      return surroundingMines;
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
