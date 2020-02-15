let container = document.getElementById("container");
let resetBtn = document.getElementById("reset");
let randomBtn = document.getElementById("random");
let sizeBtn = document.getElementById("size");
let currentColour = document.getElementById("current-colour");

let newColour = "#000";

function makeGrid(dimensions) {
  for (var i = 0; i < dimensions; i++) {
    for (var j = 0; j < dimensions; j++) {
      var div = document.createElement("div");
      container.appendChild(div);
      div.classList.add("row");
    }
    var nextRow = document.createElement("br");
    container.appendChild(nextRow);
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
  makeGrid(16);
});

randomBtn.addEventListener("click", (e) => {
    randomColour();
    currentColour.style.background = newColour;
});

sizeBtn.addEventListener("click", (e) => {
    resetGrid();
    makeGrid(prompt("What size would you like your grid to be? e.g, 2, 4, 8, 16, etc."));
});

makeGrid(16);
