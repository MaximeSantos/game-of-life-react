import { nbRows, nbCols } from "./emptyBoard";

// TODO Replace board.length by correct row & col length
// TODO Refactor this function
export const countNbOfActiveNeighbours = (
  currentRow: number,
  currentCol: number,
  board: string[][],
) => {
  let nbOfActiveNeighbours = 0;

  // check if we're not on first row of array
  if (currentRow > 0 ) {
    // cell top left
    if (currentCol > 0 && board[currentRow - 1][currentCol - 1] === 'active') {
      nbOfActiveNeighbours++;
    }
    // cell top
    if (board[currentRow - 1][currentCol] === 'active') {
      nbOfActiveNeighbours++;
    }
    // cell top right
    if (currentCol < (nbCols - 1) && board[currentRow - 1][currentCol + 1] === 'active') {
      nbOfActiveNeighbours++;
    }
  }

  // cell left
  if (currentCol > 0 && board[currentRow][currentCol - 1] === 'active') {
    nbOfActiveNeighbours++;
  }
  // cell right
  if (currentCol < (nbCols - 1) && board[currentRow][currentCol + 1] === 'active') {
    nbOfActiveNeighbours++;
  }

  // check if we're not on last row of array
  if (currentRow < (nbRows - 1)) {
    // cell bottom left
    if (currentCol > 0 && board[currentRow + 1][currentCol - 1] === 'active') {
      nbOfActiveNeighbours++;
    }
    // cell bottom
    if (board[currentRow + 1][currentCol] === 'active') {
      nbOfActiveNeighbours++;
    }
    // cell bottom right
    if (currentCol < (nbCols - 1) && board[currentRow + 1][currentCol + 1] === 'active') {
      nbOfActiveNeighbours++;
    }
  }

  // console.log(currentRow, currentCol,`There are ${nbOfActiveNeighbours} neighbours`);
  return nbOfActiveNeighbours;
};
