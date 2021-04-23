import React, { useEffect, useState } from 'react';
import Board from './board';
import SudokuCard from './sudokuCard';
import sudokuService, { EMPTY_START_BOARD, EMPTY_BOARD } from '../services/sudokuService';
import storageService from '../services/storageService';

function SudokuSolver() {
    const [startBoard, setStartBoard] = useState(EMPTY_START_BOARD);
    const [board, setBoard] = useState(EMPTY_BOARD);
    const [isSolving, setIsSolving] = useState(false);
    const [isSolved, setIsSolved] = useState(false);
    const [isBoardDisabled, setIsBoardDisabled] = useState(false);
    const [isShowProgressChecked, setIsShowProgressChecked] = useState(true);
    const progressSpeed = 5;

    useEffect(() => {
        const storageBoard = storageService.getBoard();
        if (storageBoard) {
            setBoard(storageBoard);
        }
    }, [])

    const handleValueChange = (e, id) => {
        const { value } = e.target;
        if ((value <= 9 && value > 0) || value === "") {
            const position = id.split(",");
            const newBoard = board.map((arr) => arr.slice());
            if (value === "") newBoard[position[0]][position[1]] = 0
            else newBoard[position[0]][position[1]] = Number(value);
            setBoard(newBoard);
            storageService.setBoard(newBoard);
        }

    }

    const handleSolveButtonClicked = () => {
        setIsSolving(true);
        setIsSolved(false);
        setStartBoard(board.map((arr) => arr.slice()));
        const progress = sudokuService.solveSudoku(board)
        if (isShowProgressChecked) {
            showProgress(progress);
        } else {
            setIsBoardDisabled(true);
            setBoard(progress[progress.length - 1]);
            setIsSolved(true);
            setIsSolving(false);
        }

    }

    const showProgress = async (progress) => {
        setIsBoardDisabled(true);
        for (const board of progress) {
            setBoard(board);
            await new Promise((resolve) => setTimeout(resolve, progressSpeed));
        }
        setIsSolved(true);
        setIsSolving(false);
    }

    const reset = () => {
        setBoard(EMPTY_BOARD);
        setStartBoard(EMPTY_START_BOARD);
        setIsBoardDisabled(false);
        setIsSolved(false);
        storageService.setBoard(EMPTY_BOARD());

    }

    const undo = () => {
        setIsBoardDisabled(false);
        setBoard(startBoard);
        setStartBoard(EMPTY_START_BOARD);
        setIsSolved(false);
    }

    return (
        <div className="row mt-4">
            <div className="col-8 mb-5">
                <Board
                    startBoard={startBoard}
                    board={board}
                    onChange={handleValueChange}
                    disabled={isBoardDisabled}
                />
            </div>
            <div className="col mb-5">
                <SudokuCard
                    onExample={() => {
                        reset();
                        const randomBoard = sudokuService.getRandomExample();
                        setBoard(randomBoard);
                        storageService.setBoard(randomBoard);
                    }}
                    handleSolve={handleSolveButtonClicked}
                    isSolving={isSolving}
                    onReset={reset}
                    undo={undo}
                    disabled={isSolving}
                    isSolved={isSolved}
                    processChecked={isShowProgressChecked}
                    onChange={(e) => setIsShowProgressChecked(e.target.checked)}
                />
            </div>
        </div>
    )
}

export default SudokuSolver;