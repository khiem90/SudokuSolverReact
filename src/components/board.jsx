import React from 'react';
import Square from './square';

function Board() {
    const renderSquare = () => {
        const squares = [];

        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                const index = `${row},${col}`;
                squares.push(
                    <Square
                        key={index}
                        id={index}
                    />
                )
            }
        }

        return squares;
    };

    return <div className="sudoku-grid shadow">{renderSquare()}</div>
}

export default Board;