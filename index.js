
const cells = document.querySelectorAll('.cell');

const player = (name, marker) =>{
    return { name, marker };
}
console.log(player('Jady', 'X'))
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
console.log(gameBoard.getBoard)
// Control the game state

const DisplayController = {

}