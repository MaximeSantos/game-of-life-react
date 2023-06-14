// import { useState } from 'react';

const Cell = ({ boardCells, setBoardCells, rowIndex, cellIndex, currentCell }: any) => {
  // const [active, setActive] = useState(false);

  const handleClickCell = () => {
    const newBoardCells = [...boardCells];

    console.log('on passe dans le handleClickCell', newBoardCells);

    if (newBoardCells[rowIndex][cellIndex] === '') {
      newBoardCells[rowIndex][cellIndex] = 'active';
    } else if (newBoardCells[rowIndex][cellIndex] === 'active') {
      newBoardCells[rowIndex][cellIndex] = '';
    }

    setBoardCells(newBoardCells);
  };

  return (
    <div
      className={`cell ${currentCell == 'active' ? 'active' : ''}`}
      onClick={handleClickCell}
    />
  );
};

export default Cell;
