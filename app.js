let count = 0;

let xo = document.querySelectorAll('.row div');

xo.forEach(function (xo) {
    xo.addEventListener("click", xoClicked)
});

function xoClicked(e) {
    if (count % 2 == 0) {
        e.target.textContent = 'X';
        count++;
    } else {
        e.target.textContent = 'O';
        count++;
    }
}
