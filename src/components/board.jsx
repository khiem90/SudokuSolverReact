import React from 'react';
import Square from './square';

function Board({ startBoard, board, onChange, disabled }) {
    const renderSquare = () => {
        const squares = [];

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const index = `${i},${j}`;
                squares.push(
                    <Square
                        key={index}
                        id={index}
                        onChange={onChange}
                        value={board[i][j] === null ? "" : board[i][j]}
                        style={startBoard[i][j] === null ? { color: "red" } : { color: "black" }}
                        disabled={disabled}

                    />
                )
            }
        }

        return squares;
    };

    return <div className="sudoku-grid shadow">{renderSquare()}</div>
}

export default Board;