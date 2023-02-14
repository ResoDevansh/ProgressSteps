let pathArray = document.getElementsByClassName('path');
let steps = document.getElementsByClassName('steps');
let n = pathArray.length;
let isTraversed = Array(n).fill(false);
console.log(steps);
document.getElementById('next').addEventListener('click', () => {
    let ptr = 0;
    for (let i = 0; i < n; i++){
        if (!isTraversed[i]) {
            ptr = i;
            break;
        }
    }
    isTraversed[ptr] = true;
    pathArray[ptr].classList.add('traverse');
    steps[ptr + 1].classList.add('enhanced-step');
})