const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#ff5bab";

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

document.addEventListener("keydown", function(e) {
  if (e.which === 37) {
    moveDodgerLeft();
  }
})

