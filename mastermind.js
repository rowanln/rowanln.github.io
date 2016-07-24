function changeColor(element) {
  element.style.backgroundColor = randomColor();
}

var colors = ["red", "green", "purple", "blue", "yellow", "orange"];
var game = initializeGame(4, 12);

function randomColor() {
 var index = Math.floor(Math.random() * colors.length);
 return colors[index];
}

function drawPallete() {
  var palette = document.getElementById("palette");
  var paletteColor = palette.children[0];
  for(var i = 0; i < colors.length; i++) {
    var clone = paletteColor.cloneNode(true);
    clone.style.backgroundColor = colors[i];
    palette.appendChild(clone);
  }
  palette.removeChild(paletteColor);
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

function initializeGame(width, height) {
  var game = new Object();
  game.width = width;
  game.height = height;
  game.guessNumber = 0;
  game.selected = 0;
  game.secret = [];
  game.currentGuess = [];
  game.checkCurrent = function(){};
  game.draw = function() {
    drawPalette();
    console.log(game);
  };
  return game;
}
