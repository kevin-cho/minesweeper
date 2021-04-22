import styled from 'styled-components';

const StyledCell = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid black;
  background-color: teal;
`;

const Cell = ({ hasMine, surroundingMines, isClicked }: Cell) => {
  return (
    <StyledCell />
  )
};

export default Cell;
