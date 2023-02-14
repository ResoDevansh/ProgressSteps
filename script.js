let pathArray = document.getElementsByClassName('path');
let n = pathArray.length;
let isTraversed = Array(n).fill(false);
// console.log(pathArray);
document.getElementById('next').addEventListener('click', () => {
    let ptr = 0;
    for (let i = 0; i < n; i++){
        if (isTraversed[i]) {
            ptr = i;
            break;
        }
    }
    if (ptr == n-1) {
        return;
    }
    pathArray[ptr].classList.add('traverse');
})