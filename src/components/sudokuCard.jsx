import React from 'react';

function SudokuCard() {
    return (
        <div className="card shadow">
            <div className="card-body">
                <button className='btn btn-dark'>
                    Example Board
                </button>
                <br />
                <button className="btn btn-dark mt-3">
                    Solve
                </button>
                <br />
                <button className="btn btn-dark mt-3 mr-1">
                    Clear
                </button>
                <button className="btn btn-dark mt-3 ml-1">
                    <i className="fa fa-undo"></i>
                </button>
            </div>
        </div>
    )
}

export default SudokuCard;