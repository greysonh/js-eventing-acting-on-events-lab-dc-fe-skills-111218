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
  var leftNumbers = dodger.style.right.replace('px', '');
  var left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.right = `${left + 2}px`
  }
  console.log("right arrow was pushed");
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
