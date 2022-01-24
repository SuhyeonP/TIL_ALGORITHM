import React, { useReducer, useCallback, useEffect } from 'react';

const initialState = {
    winner: '',
    turn: 'O',
    tableData: [
        ['','',''],
        ['','',''],
        ['','','']
    ],
    recentCell: [-1,-1]
}

export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';
export const RESET_GAME = 'RESET_GAME';

const reducer = (state, action) => {
    switch (action.type) {
        case SET_WINNER:
            return {
                ...state,
                winner: action.winner
            };
        case CLICK_CELL:
            const tableData = [...state.tableData];
            tableData[action.row] = [...tableData[action.row]];
            tableData[action.row][action.cell] = state.turn;
            return {
                ...state,
                tableData,
                recentCell: [action.row, action.cell]
            };
        case CHANGE_TURN:
            return {
                ...state,
                turn: state.turn === 'O' ? 'X' : 'O'
            };
        case RESET_GAME:
            return {
                ...state,
                turn: 'O',
                tableData: [
                    ['','',''],
                    ['','',''],
                    ['','','']
                ],
                recentCell: [-1, -1]
            }
        default:
            return state;
    }
}

const checkSuccess = (lineArray: string[], turn: 'O' | 'X'): boolean => {
    return lineArray.filter((line: string) => line === turn).length === 3;
}

const TicTacToe = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { tableData, turn, winner, recentCell } = state;

    const onClickTable = useCallback(() => {
        dispatch({ type: SET_WINNER, winner: 'O'});
    }, [])

    useEffect(() => {
        const [row, cell] = recentCell;

        if (row < 0) {
            return;
        }

        let win = false;

        if (checkSuccess(tableData[row], turn)){
            // 가로
            win = true;
        }

        if (checkSuccess([tableData[0][cell], tableData[1][cell], tableData[2][cell]], turn)) {
            // 세로
            win = true;
        }

        if (checkSuccess([tableData[0][0], tableData[1][1], tableData[2][2]], turn)) {
            // 대각선
            win = true;
        }

        if (checkSuccess([tableData[0][2], tableData[1][1], tableData[2][0]], turn)) {
            win = true;
        }

        if (win) {
            dispatch({type: SET_WINNER, winner: turn});
            dispatch({type: RESET_GAME})
        } else {
            let all = true;
            tableData.forEach((row) => {
                if (row.some(cell => cell === '')) {
                    all = false;
                    dispatch({ type: SET_WINNER, winner: null});
                    dispatch({ type: RESET_GAME})
                    return;
                }
            });
            if (all) {
               dispatch({ type: CHANGE_TURN })
            }
        }

    },[recentCell])

    return (
        <>

        </>
    )
}

export default TicTacToe;