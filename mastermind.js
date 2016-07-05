function changeColor(element) {
  element.style.backgroundColor = randomColor();
}

var colors = ["red", "green", "purple", "blue", "yellow", "orange"];

function randomColor() {
 var index = Math.floor(Math.random() * colors.length);
 return colors[index];
}
function buildpalette() {
  var palette = document.getElementById(palette);
  var paletteColor = palette.children[0];
  for(var i=0; i<colors.length; i++) {
    var clone = paletteColor.cloneNode(true);
    clone.style.backgroundColor = colors[i];
    palette.appendChild(clone);
  }
}
