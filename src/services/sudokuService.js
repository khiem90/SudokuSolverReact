
class SudokuService {

    getRandomExample() {
        solvingProcess = [];

        const examples = [
            [
                [0, 0, 3, 0, 0, 0, 0, 0, 0],
                [5, 8, 0, 2, 0, 0, 3, 0, 9],
                [2, 0, 0, 4, 0, 5, 8, 7, 1],
                [3, 7, 0, 0, 1, 0, 5, 9, 0],
                [8, 0, 0, 7, 4, 0, 1, 3, 0],
                [0, 2, 9, 0, 0, 8, 0, 0, 0],
                [6, 0, 0, 1, 0, 3, 4, 0, 7],
                [4, 0, 2, 0, 6, 0, 0, 0, 0],
                [0, 0, 0, 5, 2, 4, 6, 8, 0],
            ],
            [
                [4, 0, 0, 0, 5, 0, 0, 3, 2],
                [0, 1, 0, 0, 9, 0, 7, 0, 5],
                [7, 5, 3, 0, 0, 4, 1, 9, 6],
                [0, 0, 1, 0, 7, 0, 0, 0, 0],
                [6, 0, 9, 0, 0, 1, 2, 5, 0],
                [0, 0, 0, 5, 0, 0, 6, 1, 3],
                [3, 0, 4, 0, 0, 8, 0, 0, 1],
                [0, 0, 0, 4, 0, 0, 0, 7, 8],
                [0, 0, 0, 7, 6, 3, 0, 2, 9],
            ],
            [
                [0, 0, 4, 2, 7, 6, 0, 3, 0],
                [0, 5, 7, 1, 0, 0, 0, 4, 9],
                [0, 0, 0, 9, 0, 0, 0, 0, 0],
                [3, 0, 0, 0, 0, 0, 9, 6, 0],
                [0, 0, 0, 0, 0, 7, 1, 8, 5],
                [0, 0, 0, 0, 2, 0, 3, 0, 4],
                [0, 0, 0, 7, 0, 1, 0, 9, 0],
                [0, 0, 0, 6, 0, 0, 2, 1, 0],
                [1, 0, 6, 0, 8, 0, 0, 0, 0],
            ],
        ];
        return examples[Math.floor(Math.random() * examples.length)];
    }

    findEmptySquare(board) {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++)
                if (board[i][j] === 0) {
                    return { i, j };
                }
        }
        return false
    }

    isValid(board, row, col, value) {
        for (let i = 0; i < board.length; i++) {
            if (board[row][i] === value && i !== row) {
                return false;
            }
            if (board[i][col] === value && i !== col) {
                return false;
            }
        }

        const x = Math.floor(row / 3) * 3;
        const y = Math.floor(col / 3) * 3;

        for (let i = 0; i < x + 3; i++) {
            for (let j = 0; j < y + 3; j++) {
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
            findEmptySquare = position;
        } else return true

        while (values.length !== 0) {
            const value = values[0];

            if (this.isValid(board, position.i, position.j, value)) {
                board[position.i][position.j] = Number(value);
                if (this.solveRecursive(board)) return true;
                board[position.i][position.j] = 0;

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

export default SudokuService;