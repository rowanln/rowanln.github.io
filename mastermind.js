function changeColor(element) {
  element.style.backgroundColor = randomColor():
}

var colors = ["red", "green", "pink", "purple", "blue", "yellow", "orange"];

function randomColor() {
 var index = Math.floor(Math.random() * colors.length);
 return colors[index];
}
