import Cell from './Cell';

/*
The goal is to create an app based on Conway's Game of Life
https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life

1. Create a basic X by X grid
2. Add the ability to click on a cell to change its state: active vs inactive
3. 

*/
function App() {
  const rows = 20;
  const cols = 20;

  const listOfCells = [];

  for (let i = 0; i < rows * cols; i++) {
    listOfCells.push(<Cell key={i} />);
  }

  return (
    <div className="container">
      <div
        className="board"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          gap: '1px',
        }}
      >
        {listOfCells}
      </div>
      <button onClick={() => console.log('start')}>Start</button>
    </div>
  );
}

export default App;
