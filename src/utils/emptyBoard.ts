export const nbRows = 40;
export const nbCols = 40;

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
