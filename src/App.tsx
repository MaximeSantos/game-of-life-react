/*
The goal is to create an app based on Conway's Game of Life
https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life

1. Create a basic X by X grid
2. Add the ability to click on a cell to change its state: active vs inactive
3. 

*/
import listOfCells from './utils/board.tsx';

function App() {
  return (
    <div className="board">
      {listOfCells}
    </div>
  )
}

export default App
