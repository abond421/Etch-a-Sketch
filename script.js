const container = document.getElementById("container");
const resetBtn = document.getElementById("reset");
const randomBtn = document.getElementById("random");
const sizeBtn = document.getElementById("size");
const rainBtn = document.getElementById("rainbow");

const maxSize = 64;
const minSize = 4;

let currentColour = document.getElementById("current-colour");
let currentDimensions = 16;
let newColour = "#000";
let rainbow = false;

function makeGrid(dimensions) {
  if (dimensions < minSize) {
    dimensions = 4;
  }

  if (dimensions > maxSize) {
    dimensions = 64;
  }

  container.style.setProperty("--rowAmount", dimensions);
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
      if (!rainbow) {
        e.target.style.background = newColour;
      } else {
        randomColour();
        e.target.style.background = newColour;
        currentColour.style.background = newColour;
      }
    });
  });
}

resetBtn.addEventListener("click", e => {
  resetGrid();
  makeGrid(currentDimensions);
});

randomBtn.addEventListener("click", e => {
  randomColour();
  currentColour.style.background = newColour;
  if (rainbow) {
    rainbow = false;
    rainBtn.innerHTML = "Rainbow: OFF!";
  }
});

sizeBtn.addEventListener("click", e => {
  currentDimensions = prompt(
    "What size would you like your grid to be? e.g, 4, 8, 16, etc. \n4 - 64 is the limit."
  );
  if (currentDimensions == null) {
    return;
  }

  resetGrid();
  makeGrid(currentDimensions);
});

rainBtn.addEventListener("click", e => {
  if (!rainbow) {
    rainbow = true;
    rainBtn.innerHTML = "Rainbow: ON!";
  } else {
    rainbow = false;
    rainBtn.innerHTML = "Rainbow: OFF!";
  }
});

makeGrid(16);
