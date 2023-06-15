import React from 'react';

interface Cell {
  board: string[][];
  setBoard: React.Dispatch<React.SetStateAction<string[][]>>;
  rowIndex: number;
  cellIndex: number;
  currentCell: string;
}

const Cell: React.FC<Cell> = ({ board, setBoard, rowIndex, cellIndex, currentCell }) => {
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
      onClick={handleClickCell}
    />
  );
};

export default Cell;
