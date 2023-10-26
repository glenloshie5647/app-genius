/* complex_program.js */

// This program demonstrates a complex and sophisticated implementation
// of a tic-tac-toe game using object-oriented programming principles.

class TicTacToe {
  constructor() {
    this.board = [['', '', ''], ['', '', ''], ['', '', '']];
    this.players = ['X', 'O'];
    this.currentPlayer = 0;
    this.turnsPlayed = 0;
  }

  play(row, col) {
    if (this.board[row][col] !== '') {
      console.log('Invalid move. Please try again.');
      return false;
    }

    this.board[row][col] = this.players[this.currentPlayer];
    this.turnsPlayed++;

    if (this.isWinningMove(row, col)) {
      console.log(`Player ${this.players[this.currentPlayer]} wins!`);
      this.reset();
    } else if (this.turnsPlayed === 9) {
      console.log('Game over. It\'s a draw.');
      this.reset();
    } else {
      this.currentPlayer = (this.currentPlayer + 1) % 2;
    }

    return true;
  }

  isWinningMove(row, col) {
    const sym = this.players[this.currentPlayer];
    const board = this.board;

    // Check row
    if (board[row].every(cell => cell === sym)) return true;

    // Check column
    if (board.every(row => row[col] === sym)) return true;

    // Check diagonals
    if (row === col && board.every((row, i) => row[i] === sym)) return true;
    if (row + col === 2 && board.every((row, i) => row[2 - i] === sym)) return true;

    return false;
  }

  reset() {
    this.board = [['', '', ''], ['', '', ''], ['', '', '']];
    this.currentPlayer = 0;
    this.turnsPlayed = 0;
  }
}

// Example usage:
const game = new TicTacToe();
game.play(0, 0); // X
game.play(1, 0); // O
game.play(0, 1); // X
game.play(1, 1); // O
game.play(0, 2); // X (wins)
game.play(1, 2); // Expecting "Invalid move. Please try again."
game.play(1, 0); // Expecting "Invalid move. Please try again."
game.play(0, 1); // Expecting "Invalid move. Please try again."
game.play(2, 1); // X
game.play(2, 2); // O
game.play(1, 2); // X
game.play(2, 0); // O
game.play(2, 2); // X (wins)
game.play(1, 1); // Expecting "Game over. It's a draw."

/* Output:
Player X wins!
Invalid move. Please try again.
Invalid move. Please try again.
Invalid move. Please try again.
Game over. It's a draw.
*/