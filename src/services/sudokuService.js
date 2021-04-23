import { makepuzzle } from 'sudoku';

export const EMPTY_START_BOARD = () =>
    new Array(9).fill(null).map(() => new Array(9));
export const EMPTY_BOARD = () =>
    new Array(9).fill(null).map(() => new Array(9).fill(0));



class SudokuService {
    solvingProcess = [];

    getRandomExample() {

        const raw = makepuzzle();
        const result = []
        for (let i = 0; i < 9; i++) {
            const row = []
            for (let j = 0; j < 9; j++) {
                let value = raw[i * 9 + j];
                let col = value;
                value === 0 ? col = null : col = value;
                row.push(col);
            }

            result.push(row);
        }
        return result;
    }

    findEmptySquare(board) {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++)
                if (board[i][j] === null) {
                    return { i, j };
                }
        }
        return false
    }

    isValid(board, row, col, value) {
        for (let i = 0; i < board.length; i++) {
            if (board[i][col] === value && i !== row) return false;
            if (board[row][i] === value && i !== col) return false;
        }

        const x = Math.floor(row / 3) * 3;
        const y = Math.floor(col / 3) * 3;

        for (let i = x; i < x + 3; i++) {
            for (let j = y; j < y + 3; j++) {
                if (board[i][j] === value && i !== row && j !== col) {
                    return false
                }
            }
        }

        return true
    }

    solveRecursive(board) {
        this.solvingProcess.push(board.map((arr) => arr.slice()));
        let findEmptySquare = this.findEmptySquare(board);
        let position;
        const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        if (findEmptySquare) {
            position = findEmptySquare;
        } else return true

        while (values.length !== 0) {
            const value = values[0];

            if (this.isValid(board, position.i, position.j, value)) {
                board[position.i][position.j] = Number(value);
                if (this.solveRecursive(board)) return true;
                board[position.i][position.j] = null;

            }
            values.shift();
        }

        return false;
    }

    solveSudoku(board) {
        this.solvingProcess = [];
        this.solveRecursive(board);
        return this.solvingProcess;
    }

}

export default new SudokuService();