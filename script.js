let pathArray = document.getElementsByClassName("path");
let steps = document.getElementsByClassName("steps");
let n = pathArray.length;
let isTraversed = Array(n).fill(false);
console.log(steps);
let ptr;
document.getElementById("next").addEventListener("click", () => {
  for (let i = 0; i < n; i++) {
    if (!isTraversed[i]) {
      ptr = i;
      break;
    }
  }
  isTraversed[ptr] = true;
  pathArray[ptr].classList.add("traverse");
  steps[ptr + 1].classList.add("enhanced-step");
  if (ptr >= 0) {
    document.getElementById("prev").classList.remove("not-allowed-prev");
  }
  if (ptr == n - 1) {
    document.getElementById("next").classList.add("not-allowed-next");
  }
});
document.getElementById("prev").addEventListener("click", () => {
  for (let i = n - 1; i >= 0; i--) {
    if (isTraversed[i]) {
      ptr = i;
      break;
    }
  }
  isTraversed[ptr] = false;
  pathArray[ptr].classList.remove("traverse");
  steps[ptr + 1].classList.remove("enhanced-step");
  if (ptr == 0) {
    document.getElementById("prev").classList.add("not-allowed-prev");
  }
  if (ptr <= n - 1) {
    document.getElementById("next").classList.remove("not-allowed-next");
  }
});
