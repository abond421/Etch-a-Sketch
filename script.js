let container = document.getElementById("container");
let resetBtn = document.getElementById("reset");
let randomBtn = document.getElementById("random");
let newColour = "#000";

function makeGrid(rows, columns) {
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < columns; j++) {
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
  rowList.forEach(row => {
    row.addEventListener("mouseover", e => {
      e.target.style.background = newColour;
    });
  });
}

resetBtn.addEventListener("click", e => {
  resetGrid();
  makeGrid(16, 16);
});

randomBtn.addEventListener("click", (e) => {
    randomColour();
});

makeGrid(16, 16);
