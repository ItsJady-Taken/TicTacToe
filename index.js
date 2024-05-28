
const cells = document.querySelectorAll('.cell');

// create player and asign marker
const player = (name, marker) =>{
    return { name, marker };
}

// object gameBoard, manage the board
const gameBoard = {
    board: Array(9).fill(null),

    getBoard() {
        return this.board;
    },

    resetBoard() {
        this.board.fill(null);
    },

    update(index, marker){
        if(this.board[index] == null) {
            this.board[index] = marker;
            return true;
        }
        else {
            return false; 
        }
    }
}

// Control the game state
const DisplayController =( function() {
    const player1 = player('player1', 'X');
    const player2 = player('player2', 'O');
    let currentPlayer = player1;
    let gameActive = true;
    // all the winning combinations
    const winCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    const cellClick = (cell) => {
        const index = cell.target.getAttribute('data-index');
        cell.target.textContent = currentPlayer.marker;
        switchPlayer()
    }

    const switchPlayer = () => {
        if(currentPlayer == player1) {
            currentPlayer = player2;
        }
        else {
            currentPlayer = player1;
        }
    }

    cells.forEach((cell)=>{
        cell.addEventListener('click', cellClick)
    })
})();

