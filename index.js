const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#ff5bab";

var leftNumbers = dodger.style.left.replace('px', '');
var left = parseInt(leftNumbers, 10);

function moveDodgerLeft() {
  if (left > 0) {
    dodger.style.left = `${left - 2}px`
  }
}

function moveDodgerRight() {
  var leftNumbers = dodger.style.right.replace('px', '');
  var left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.right = `${left + 2}px`;
  }
}

document.addEventListener("keydown", function(e) {
  if (e.which === 37) {
    moveDodgerLeft();
    if (e.which === 39) {
      moveDodgerRight;
    }
  }
})
