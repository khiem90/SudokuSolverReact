import React from 'react';

function SudokuCard({ onExample, isSolving, handleSolve, onReset, undo, isSolved, processChecked, onChange }) {
    return (
        <div className="card shadow">
            <div className="card-body">
                <button
                    className='btn btn-dark'
                    onClick={onExample}
                    disabled={isSolving}
                >
                    Example Board
                </button>
                <br />
                {isSolving ? (
                    <button
                        className="btn btn-dark mt-3"
                        onClick={() => window.location.reload()}
                    >
                        Stop
                    </button>
                ) : (
                    <button
                        className="btn btn-dark mt-3"
                        onClick={handleSolve}
                    >
                        Solve
                    </button>
                )}
                <div className="form-check mt-3">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="solvingProcess"
                        style={{ width: "auto" }}
                        disabled={isSolving}
                        checked={processChecked}
                        onChange={onChange}
                    />
                    <label className="form-check-label" htmlFor="solvingProcess">
                        Show Solving Process
                    </label>
                </div>
                <br />
                <button
                    className="btn btn-dark mt-3 mr-1"
                    onClick={onReset}
                    disabled={isSolving}
                >
                    Clear
                </button>
                <button
                    className="btn btn-dark mt-3 ml-1"
                    onClick={undo}
                    disabled={!isSolved}
                >
                    <i className="fa fa-undo"></i>
                </button>
            </div>
        </div>
    )
}

export default SudokuCard;