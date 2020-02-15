let newColour;
let container = document.getElementById("container");
let resetBtn = document.getElementById("reset");

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
}

function resetGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function sketch() {
  const rowList = document.querySelectorAll(".row");
  rowList.forEach(row => {
    row.addEventListener("mouseover", e => {
      e.target.style.background = '#000';
    });
  });
}

function randomColour() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  newColour = "rgb(" + r + ", " + g + ", " + b + ")";
}

resetBtn.addEventListener('click', (e) => {
    resetGrid();
    makeGrid(16, 16);
    sketch();
});

makeGrid(16, 16);
sketch();
