const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#ff5bab";

document.addEventListener("keydown", function(e) {
  if (e.which || e.detail === 37) {
    var leftNumbers = dodger.style.left.replace("px","")
    var left = parseInt(leftNumbers, 10)
    dodger.style.left = `${left - 1}px`
  }
})