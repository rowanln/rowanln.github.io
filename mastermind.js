function changeColor(element) {
  element.style.backgroundColor = randomColor();
}

var colors = ["red", "green", "purple", "blue", "yellow", "orange"];
var game = initializeGame(4, 12);

function randomColor() {
 var index = Math.floor(Math.random() * colors.length);
 return colors[index];
}

function drawPalette() {
  var palette = document.getElementById("palette");
  var paletteColor = palette.children[0];
  for(var i = 0; i < colors.length; i++) {
    var clone = paletteColor.cloneNode(true);
    clone.style.backgroundColor = colors[i];
    clone.selectionColor = i;
    palette.appendChild(clone);
  }
  palette.removeChild(paletteColor);
  changePaletteSelection(palette.children[0]);
}

function changePaletteSelection(element) {
  for(var i = 0; i < element.parentNode.childElementCount; i++) {
    var color = element.parentNode.children[i];
    if (color == element) {
      color.classList.add("selected");
    } else {
      color.classList.remove("selected")
    }
  }
  game.selected = element.selectionColor;
  console.log(game);
}

function initializeGame(width, height) {
  var game = new Object();
  game.width = width;
  game.height = height;
  game.guessNumber = 0;
  game.selected = 0;
  game.secret = createSecret(width);
  game.currentGuess = [];
  game.checkCurrent = function(){};
  game.draw = function() {
    drawPalette();
    drawSecret(this.secret);
    drawRows(width, height);
    console.log(game);
  };
  return game;
}

function createSecret(width) {
  var secret = [];
  for (var i = 0; i<width; i++) {
    secret.push(randomColor());
  }
  return secret;
}
function drawRows(width, height) {
  
}
function drawSecret(secret) {
  var secret = document.getElementById("secret");
  var secretColor = secret.children[0];
  for(var i = 0; i < secret.length; i++) {
    var clone = secretColor.cloneNode(true);
    clone.style.backgroundColor = secret[i];
    secret.appendChild(clone);
  }
  secret.removeChild(secretColor);
}
