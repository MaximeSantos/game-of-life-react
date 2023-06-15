import { useEffect, useState } from 'react';

import { countNbOfActiveNeighbours } from './utils/count';
import { nbRows, createEmptyBoard } from './utils/emptyBoard';

import Cell from './Cell';

/*
The goal is to create an app based on Conway's Game of Life
https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life

1. Create a basic X by X grid with a hardcoded two dimensional array as a state at first
2. Add the ability to click on a cell to change its state: active vs inactive
3. Create function to count number of active neighbours
4. Create conditions so that cells go active or inactive depending on the number of neighbours
  - If active cell has 2 or 3 active neighbours - it stays active
  - If inactive cell has 3 active neighbours - it becomes active
  - Otherwise, cell stays/becomes inactive
5. Make the app refresh on a timer
6. 
*/
// TODO Currently the game logic is not right since we only made a shallow clone of our board.
// TODO We probably needs to make a deep clone to pass to our countNbOfActiveNeighbours()
// TODO (or at least make sur the board we pass dont use the same reference as our state)

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [board, setBoard] = useState(createEmptyBoard);

  // creates a list of JSX elements according to the array stored in the board state
  const listOfCells = board.map((currentRow, rowIndex) => (
    <div className="row" key={rowIndex}>
      {currentRow.map((currentCell, cellIndex) => (
        <Cell
          board={board}
          setBoard={setBoard}
          rowIndex={rowIndex}
          cellIndex={cellIndex}
          currentCell={currentCell}
          key={cellIndex}
        />
      ))}
    </div>
  ));

  // when the app is running, makes the board evolve every interval
  useEffect(() => {
    if (isRunning) {
      const running = setInterval(() => {
        // console.log("On passe dans l'intervalle chaque seconde");
        const newBoard = [...board];

        board.forEach((row, rowIndex) => {
          // console.log('Row number', rowIndex, row);
          row.forEach((cell, cellIndex) => {
            // - If active cell does not have exactly 2 or 3 active neighbours - it becomes inactive
            if (cell === 'active') {
              // console.log('current cell is active');

              // count nbOfActiveNeigbours
              const nbOfActiveNeighbours = countNbOfActiveNeighbours(
                rowIndex,
                cellIndex,
                board
              );

              // Becomes inactive if nbOfActiveNeighbours is not 2 or 3
              if (nbOfActiveNeighbours !== 2 && nbOfActiveNeighbours !== 3) {
                newBoard[rowIndex][cellIndex] = '';
              }
            } else {
              // - If inactive cell has 3 active neighbours - it becomes active
              // count nbOfActiveNeigbours
              const nbOfActiveNeighbours = countNbOfActiveNeighbours(
                rowIndex,
                cellIndex,
                board
              );

              // Becomes active if nbOfActiveNeighbours is exactly 3
              if (nbOfActiveNeighbours === 3) {
                newBoard[rowIndex][cellIndex] = 'active';
              }
            }
          });

          // TODO make it so the app stops if there are no changes accross two renders
          // if (newBoard == board) {
          //   // console.log('STOP');
          //   setIsRunning(false);
          // }

          // new state
          setBoard(newBoard);
        });
      }, 500);
      return () => clearInterval(running);
    }
  }, [isRunning, board]);

  // allows the user to press 'spacebar' to start/stop the app
  useEffect(() => {
    const handleRunning = (e: KeyboardEvent): void => {
      if (e.key === ' ' || e.key === 'Spacebar') {
        setIsRunning(!isRunning);
      }
    };
    document.addEventListener('keydown', handleRunning);

    return () => document.removeEventListener('keydown', handleRunning);
  }, [isRunning]);

  return (
    <div className="container">
      <h1>
        <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">
          Conway's Game of Life
        </a>
        &nbsp;in React
      </h1>

      <div
        className="board"
        style={{
          display: 'grid',
          gridTemplateRows: `repeat(${nbRows}, 1fr)`,
          gap: '1px',
        }}
      >
        {listOfCells}
      </div>

      <div>
        {!isRunning && <button onClick={() => setIsRunning(true)}>Start</button>}
        {isRunning && <button onClick={() => setIsRunning(false)}>Stop</button>}

        <button
          onClick={() => {
            setIsRunning(false);
            setBoard(createEmptyBoard);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
