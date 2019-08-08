let cells = document.querySelectorAll('.row>div');
let banner = document.querySelector('#banner');
let currentPlayer = 'X';
let moveCount = 0;
let gameOver = false

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

function cellClicked(e) {

    if (gameOver === true){
        for (let i = 0; i < cells.length; i++){
            cells[i].textContent=''
        }
        banner.textContent = ''
        gameOver = false
        moveCount = 0
        return
    }

    if (e.target.textContent === 'X' || e.target.textContent === 'O') {
        return
    }

    e.target.textContent = currentPlayer;

    checkForWinner();

    moveCount++
    if (moveCount === 9){
        banner.textContent = 'Draw!'
        gameOver = true;
    }

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
    if (checkTopX() || checkTopO()) {
        banner.textContent = 'Winner!'
        gameOver = true 
     } else if (checkMiddleX() || checkMiddleO()){
        console.log('Winner!')
     } else if (checkBottomX() || checkBottomO()){
        console.log('Winner!')
     } else if (checkRightX() || checkRightO()){
        console.log('Winner!')
     } else if (checkCenterX() || checkCenterO()){
         console.log('Winner!')
     } else if (checkLeftX() || checkLeftO()){
        console.log('Winner!')
     } else if (checkDiagLeftX() || checkDiagLeftO()){
        console.log('Winner!')
     } else if (checkDiagRightX() || checkDiagLeftO()){
        console.log('Winner!')
     } 
}

function checkTopX() {
    if (cells[0].textContent === 'X' && cells[1].textContent === 'X' && cells[2].textContent === 'X') {
        return true;
    } else {
        return false;
    }

}

function checkTopO() {
    if (cells[0].textContent === 'O' && cells[1].textContent === 'O' && cells[2].textContent === 'O') {
        return true;
    } else {
        return false;
    }
}
function checkMiddleO() {
    if (cells[3].textContent === 'O' && cells[4].textContent === 'O' && cells[5].textContent === 'O') {
        return true;
    } else {
        return false;
    }
}
function checkMiddleX() {
    if (cells[3].textContent === 'X' && cells[4].textContent === 'X' && cells[5].textContent === 'X') {
        return true;
    } else {
        return false;
    }
}
function checkBottomO() {
    if (cells[6].textContent === 'O' && cells[7].textContent === 'O' && cells[8].textContent === 'O') {
        return true;
    } else {
        return false;
    }
}
function checkBottomX() {
    if (cells[6].textContent === 'X' && cells[7].textContent === 'X' && cells[8].textContent === 'X') {
        return true;
    } else {
        return false;
    }
}
function checkRightO() {
    if (cells[2].textContent === 'O' && cells[5].textContent === 'O' && cells[8].textContent === 'O') {
        return true;
    } else {
        return false;
    }
}
function checkRightX() {
    if (cells[2].textContent === 'X' && cells[5].textContent === 'X' && cells[8].textContent === 'X') {
        return true;
    } else {
        return false;
    }
}
function checkCenterX() {
    if (cells[1].textContent === 'X' && cells[4].textContent === 'X' && cells[7].textContent === 'X') {
        return true;
    } else {
        return false;
    }
}
function checkCenterO() {
    if (cells[1].textContent === 'O' && cells[4].textContent === 'O' && cells[7].textContent === 'O') {
        return true;
    } else {
        return false;
    }
}
function checkLeftX() {
    if (cells[0].textContent === 'X' && cells[3].textContent === 'X' && cells[6].textContent === 'X') {
        return true;
    } else {
        return false;
    }
}
function checkLeftO() {
    if (cells[0].textContent === 'O' && cells[3].textContent === 'O' && cells[6].textContent === 'O') {
        return true;
    } else {
        return false;
    }
}
function checkDiagLeftX() {
    if (cells[0].textContent === 'X' && cells[4].textContent === 'X' && cells[8].textContent === 'X') {
        return true;
    } else {
        return false;
    }
}
function checkDiagLeftO() {
    if (cells[0].textContent === 'O' && cells[4].textContent === 'O' && cells[8].textContent === 'O') {
        return true;
    } else {
        return false;
    }
}
function checkDiagRightX() {
    if (cells[2].textContent === 'X' && cells[4].textContent === 'X' && cells[6].textContent === 'X') {
        return true;
    } else {
        return false;
    }
}
function checkDiagRightO() {
    if (cells[2].textContent === 'O' && cells[4].textContent === 'O' && cells[6].textContent === 'O') {
        return true;
    } else {
        return false;
    }
}


