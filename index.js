const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#ff5bab";

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left - 2}px`
  }
}

function moveDodgerRight() {
  var righttNumbers = dodger.style.right.replace('px', '');
  var right = parseInt(rightNumbers, 10);
 
  if (right <= 400) {
    dodger.style.right = `${right + 2}px`
  }
}

document.addEventListener("keydown", function(e) {
  if (e.which === 37) {
    moveDodgerLeft();
  }
})

document.addEventListener("keydown", function(e) {
  if (e.which === 39) {
    moveDodgerRight();
  }
})
