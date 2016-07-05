function changeColor(element) {
  element.style.backgroundColor = randomColor();
}

var colors = ["red", "green", "purple", "blue", "yellow", "orange"];

function randomColor() {
 var index = Math.floor(Math.random() * colors.length);
 return colors[index];
}

function buildPalette() {
  var palette = document.getElementById("palette");
  var paletteColor = palette.children[0];
  for(var i = 0; i < colors.length; i++) {
    var clone = paletteColor.cloneNode(true);
    clone.style.backgroundColor = colors[i];
    palette.appendChild(clone);
  }
  palette.removeChild(paletteColor);
}

function buildPage() {
  buildPalette();
}

function changePaletteSelection(element) {
  for(var i = 0; i < element.parentNode.childElementCount; i++) {
    var color = element.parentNode.children[i];
    if (color == element) {
      color.classList.add("selected");
    } else {
      color.classList.remove("selected");
    }
  }
}
