let count = 0;
let gameOver = false;
let currentPlayer = "X";
let results = document.getElementById("Results")

let xo = document.querySelectorAll('.row div');
console.log(xo);

var win = [];

xo.forEach(function (xo) {
    xo.addEventListener("click", xoClicked)
});

//main game function
function xoClicked(e) {
    if (gameOver === true) {
        //reset the board, show a winner, etc
    }

    //check if a space is taken
    if (e.target.innerHTML !== "") {
        return;
    }

    //main move
    e.target.innerHTML = currentPlayer;
    togglePlayer();
    checkGameWinDrawOrContinue();
}

//helper funcitons
function togglePlayer() {
    if (currentPlayer === "X") {
        currentPlayer = "O"
    } else {
        currentPlayer = "X"
    }
};

function isEmpty(cell1, cell2, cell3) {
    if (xo[cell1].innerHTML === "" || xo[cell2].innerHTML === "" || xo[cell3].innerHTML === "") {
        return true;
    }
    return false;
};

function isWin(cell1, cell2, cell3) {
    if (xo[cell1].innerHTML === xo[cell2].innerHTML && xo[cell1].innerHTML === xo[cell3].innerHTML) {
        results.innerHTML = xo[cell1].innerHTML + ' is the winner!';
        return true;
    } else {
        results.innerHTML = "No one is the winner!"
    }
    //return false;
};

function checkGameWinDrawOrContinue() {
    //chekc the top, middle, bottom, diagonal
    if (checkTop() || checkMiddleHor() || checkMiddleVert() || checkBottom() || checkDiagonalPos() || checkDiagonalNeg() || checkLeft() || checkRight()) {
        gameOver = true;
    }
};

function checkTop() {
    if (isWin(0, 1, 2) && !isEmpty(0, 1, 2)) {
        return true;
    }
    return false;
};

function checkMiddleHor() {
    if (isWin(3, 4, 5) && !isEmpty(3, 4, 5)) {
        return true;
    }
    return false;
};

function checkMiddleVert() {
    if (isWin(1, 4, 7) && !isEmpty(1, 4, 7)) {
        return true;
    }
    return false;
};

function checkBottom() {
    if (isWin(6, 7, 8) && !isEmpty(6, 7, 8)) {
        return true;
    }
    return false;
};

function checkDiagonalNeg() {
    if (isWin(0, 4, 8) && !isEmpty(0, 4, 8)) {
        return true;
    }
    return false;
};

function checkDiagonalPos() {
    if (isWin(6, 4, 2) && !isEmpty(6, 4, 2)) {
        return true;
    }
    return false;
};

function checkLeft() {
    if (isWin(0, 3, 6) && !isEmpty(0, 3, 6)) {
        return true;
    }
    return false;
};

function checkRight() {
    if (isWin(2, 5, 8) && !isEmpty(2, 5, 8)) {
        return true;
    }
    return false;
};