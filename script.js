const container = document.getElementById("container");
const resetBtn = document.getElementById("reset");
const randomBtn = document.getElementById("random");
const sizeBtn = document.getElementById("size");
const maxSize = 64;
const minSize = 4;


let currentColour = document.getElementById("current-colour");
let currentDimensions = 16;
let newColour = "#000";



function makeGrid(dimensions) {
  container.style.setProperty("--rowAmount" , dimensions);
  for (var i = 0; i < dimensions; i++) {
    for (var j = 0; j < dimensions; j++) {
      var div = document.createElement("div");
      container.appendChild(div);
      div.classList.add("row");
    }
  }
  sketch();
}

function resetGrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function randomColour() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  newColour = `rgb(${r}, ${g}, ${b})`;

}

function sketch() {
  const rowList = document.querySelectorAll(".row");
  currentColour.style.background = newColour;
  rowList.forEach(row => {
    row.addEventListener("mouseover", e => {
      e.target.style.background = newColour;
    });
  });
}

resetBtn.addEventListener("click", e => {
  resetGrid();
  makeGrid(currentDimensions);
});

randomBtn.addEventListener("click", (e) => {
    randomColour();
    currentColour.style.background = newColour;
});

sizeBtn.addEventListener("click", (e) => {
    resetGrid();
    currentDimensions = prompt("What size would you like your grid to be? e.g, 4, 8, 16, etc. \n2 - 64 is the limit.");
    makeGrid(currentDimensions);
});

makeGrid(16);
