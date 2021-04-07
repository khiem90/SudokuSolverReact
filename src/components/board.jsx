import React from 'react';
import Square from './square';

function Board() {
    const renderSquare = () => {
        const squares = [];

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const index = `${i},${j}`;
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