let cells = document.querySelectorAll('.row>div');
let currentPlayer = 'X';

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

function cellClicked(e) {

    if (e.target.textContent === 'X' || e.target.textContent === 'O') {
        return
    }

    e.target.textContent = currentPlayer;

    checkForWinner();

    togglePlayer();

}

function togglePlayer() {
    if (currentPlayer === 'X') {
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X';
    }
}

function checkForWinner() {
    if (checkTop()) {
        console.log('Winner!')
    } else if (checkMiddle()){
        console.log('Winner!')
    } else if (checkBottom()){
        console.log('Winner!')
    } else if (checkRight()){
        console.log('Winner!')
    } else if (checkCenter()){
        console.log('Winner!')
    } else if (checkLeft()){
        console.log('Winner!')
    } else if (checkDiagLeft()){
        console.log('Winner!')
    } else if (checkDiagRight()){
        console.log('Winner!')
    }
}

function checkTop() {
    if (cells[0].textContent === 'X' && cells[1].textContent === 'X' && cells[2].textContent === 'X') {
        return true;
    } else {
        return false;
    }

}

function checkTop() {
    if (cells[0].textContent === 'O' && cells[1].textContent === 'O' && cells[2].textContent === 'O') {
        return true;
    } else {
        return false;
    }
}
function checkMiddle() {
    if (cells[3].textContent === 'O' && cells[4].textContent === 'O' && cells[5].textContent === 'O') {
        return true;
    } else {
        return false;
    }
}
function checkMiddle() {
    if (cells[3].textContent === 'X' && cells[4].textContent === 'X' && cells[5].textContent === 'X') {
        return true;
    } else {
        return false;
    }
}
function checkBottom() {
    if (cells[6].textContent === 'O' && cells[7].textContent === 'O' && cells[8].textContent === 'O') {
        return true;
    } else {
        return false;
    }
}
function checkBottom() {
    if (cells[6].textContent === 'X' && cells[7].textContent === 'X' && cells[8].textContent === 'X') {
        return true;
    } else {
        return false;
    }
}
function checkRight() {
    if (cells[2].textContent === 'O' && cells[5].textContent === 'O' && cells[8].textContent === 'O') {
        return true;
    } else {
        return false;
    }
}
function checkRight() {
    if (cells[2].textContent === 'X' && cells[5].textContent === 'X' && cells[8].textContent === 'X') {
        return true;
    } else {
        return false;
    }
}
function checkCenter() {
    if (cells[1].textContent === 'X' && cells[4].textContent === 'X' && cells[7].textContent === 'X') {
        return true;
    } else {
        return false;
    }
}
function checkCenter() {
    if (cells[1].textContent === 'O' && cells[4].textContent === 'O' && cells[7].textContent === 'O') {
        return true;
    } else {
        return false;
    }
}
function checkLeft() {
    if (cells[0].textContent === 'X' && cells[3].textContent === 'X' && cells[6].textContent === 'X') {
        return true;
    } else {
        return false;
    }
}
function checkLeft() {
    if (cells[0].textContent === 'O' && cells[3].textContent === 'O' && cells[6].textContent === 'O') {
        return true;
    } else {
        return false;
    }
}
function checkDiagLeft() {
    if (cells[0].textContent === 'X' && cells[4].textContent === 'X' && cells[8].textContent === 'X') {
        return true;
    } else {
        return false;
    }
}
function checkDiagLeft() {
    if (cells[0].textContent === 'O' && cells[4].textContent === 'O' && cells[8].textContent === 'O') {
        return true;
    } else {
        return false;
    }
}
function checkDiagRight() {
    if (cells[2].textContent === 'X' && cells[4].textContent === 'X' && cells[6].textContent === 'X') {
        return true;
    } else {
        return false;
    }
}
function checkDiagRight() {
    if (cells[2].textContent === 'O' && cells[4].textContent === 'O' && cells[6].textContent === 'O') {
        return true;
    } else {
        return false;
    }
}


