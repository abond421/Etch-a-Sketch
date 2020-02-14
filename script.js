function makeGrid(rows, columns) {
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            var div = document.createElement("div");
            document.getElementById("container").appendChild(div);
        }
        var nextRow = document.createElement("br");
        document.getElementById("container").appendChild(nextRow);
    }
}

makeGrid(16, 16);