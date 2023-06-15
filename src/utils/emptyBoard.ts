export const nbRows = 5;
export const nbCols = 5;

export const createEmptyBoard = () => {
  const board = [];
  for(let row = 0; row < nbRows; row++){
    const currentRow = [];

    for(let col = 0; col < nbCols; col++){
      currentRow.push('');
    }

    board.push(currentRow)
  }
  return board;
}
