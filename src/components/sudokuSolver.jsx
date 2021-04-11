import React, { Component } from 'react';
import Board from './board';
import SudokuCard from './sudokuCard';

class SudokuSolver extends Component {
    render() {
        return (
            <div className="row mt-4">
                <div className="col-8 mb-5">
                    <Board />
                </div>
                <div className="col mb-5">
                    <SudokuCard />
                </div>
            </div>
        )
    }
}

export default SudokuSolver;