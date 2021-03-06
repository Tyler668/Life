//Initialize the canvas via DOM selector
//Set variables for resolution and grid size

var canvas = document.querySelector('canvas');
if (canvas.getContext) {
  var context = canvas.getContext('2d');
}

var resolution = 10

canvas.width = 1000;
canvas.height = 1000;

const columns = canvas.width / resolution;
const rows = canvas.height / resolution;

// Calculate next generation of board based on rules of the game
export function nextGen(grid) {
  // generation++
  const newGen = grid.map(former => [...former]);

  for (let col = 0; col < grid.length; col++) {
    for (let row = 0; row < grid[col].length; row++) {
      const cell = grid[col][row];
      let neighbors = 0;
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          if (i === 0 && j === 0) {
            continue;
          }
          const xcell = col + i;
          const ycell = row + j;

          if(xcell >= 0 && ycell >= 0 && xcell < columns && ycell < rows){
            const neighbor = grid[col + i][row + j];
            neighbors += neighbor;
          }
        }
      }

      //Rules of survival
      if (cell === 1 && neighbors < 2) {
        newGen[col][row] = 0
      }
      else if (cell === 1 && neighbors > 3) {
        newGen[col][row] = 0
      }
      else if (cell === 0 && neighbors === 3) {
        newGen[col][row] = 1
      }

    }
  }
  // console.log('NEW GEN', newGen)
  return newGen
}

// Draw an initial starting board of random cells
export function drawBoard() {
  let grid = new Array(columns).fill(null)
    .map(() => new Array(rows).fill(null)
      .map(() => Math.floor(Math.random() * 2)));

  //Populating board
  return grid
}

// Render the current board array to a canvas
export function render(grid) {

  for (let col = 0; col < grid.length; col++) {
    for (let row = 0; row < grid[col].length; row++) {
      const cell = grid[col][row]

      context.beginPath();
      context.rect(col * resolution, row * resolution, resolution, resolution);
      context.fillStyle = cell === 1 ? `${getRandomColor()}` : 'black';
      // context.stroke();
      context.fill();
    }
  }
}

// Prepare an empty grid for custom layouts
export function emptyGrid(){
  let grid = new Array(columns).fill(null)
  .map(() => new Array(rows).fill(0))

  return grid
}

// Handle the clicking events and positional canvas rendering for custom squares
export function customRender(grid, clickX, clickY){
  const customLayout = grid.map(former => [...former]);

  let relativeCellX = Math.floor(clickX / resolution)
  let relativeCellY = Math.floor(clickY / resolution)
  
  console.log('Cell ', relativeCellX,',', relativeCellY)
  console.log('Relevant', customLayout[relativeCellX][relativeCellY])

  customLayout[relativeCellX][relativeCellY] = 1

    
    console.log('Custom layout:', customLayout)
    return(customLayout)
}

//Set squares to a random color for prettyfication
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
