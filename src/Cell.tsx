import React from 'react';

interface Cell {
  board: string[][];
  setBoard: React.Dispatch<React.SetStateAction<string[][]>>;
  rowIndex: number;
  cellIndex: number;
  currentCell: string;
  isDragging: boolean;
  startDraggingOn: string;
}

const Cell: React.FC<Cell> = ({
  board,
  setBoard,
  rowIndex,
  cellIndex,
  currentCell,
  isDragging,
  startDraggingOn,
}) => {
  // if user is dragging, will only adapt to the first cell clicked
  const handleMouseOverCell = () => {
    if (isDragging) {
      const newBoardCells = [...board];
      if (startDraggingOn === '') {
        newBoardCells[rowIndex][cellIndex] = 'active';
      } else if (startDraggingOn === 'active') {
        newBoardCells[rowIndex][cellIndex] = '';
      }
      setBoard(newBoardCells);
    }
  };
  const handleMouseDownCell = () => {
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
      onMouseDown={handleMouseDownCell}
    />
  );
};

export default Cell;
