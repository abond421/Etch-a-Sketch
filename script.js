let newColour;
let container = document.getElementById("container");

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

function sketch(colour) {
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

makeGrid(16, 16);
sketch();
