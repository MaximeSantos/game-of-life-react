import React from 'react';

interface Cell {
  board: string[][];
  setBoard: React.Dispatch<React.SetStateAction<string[][]>>;
  rowIndex: number;
  cellIndex: number;
  currentCell: string;
  isDragging: boolean;
}

const Cell: React.FC<Cell> = ({
  board,
  setBoard,
  rowIndex,
  cellIndex,
  currentCell,
  isDragging,
}) => {
  const handleMouseOverCell = () => {
    if (isDragging) {
      const newBoardCells = [...board];

      if (newBoardCells[rowIndex][cellIndex] === '') {
        newBoardCells[rowIndex][cellIndex] = 'active';
      } else if (newBoardCells[rowIndex][cellIndex] === 'active') {
        newBoardCells[rowIndex][cellIndex] = '';
      }
      setBoard(newBoardCells);
    }
  };
  const handleClickCell = () => {
    const newBoardCells = [...board];

    if (newBoardCells[rowIndex][cellIndex] === '') {
      newBoardCells[rowIndex][cellIndex] = 'active';
    } else if (newBoardCells[rowIndex][cellIndex] === 'active') {
      newBoardCells[rowIndex][cellIndex] = '';
    }
    setBoard(newBoardCells);
  };
  return (
    <div
      className={`cell ${currentCell == 'active' ? 'active' : ''}`}
      onMouseOver={handleMouseOverCell}
      onMouseDown={handleClickCell}
    />
  );
};

export default Cell;
