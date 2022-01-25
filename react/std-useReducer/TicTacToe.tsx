import * as React from 'react';
import { useEffect, useCallback, useReducer, Reducer} from "react";
import Table from "./Table";

export type ITurn = 'O' | 'X';

interface ReducerState {
    winner: ITurn | '';
    turn: ITurn;
    tableData: string[][];
    recentCell: [number, number];
}

interface IWinnerAction {
    type: typeof SET_WINNER;
    winner: ITurn;
}

interface IClickCellAction {
    type: typeof CLICK_CELL;
    row: number;
    cell: number;
}

interface IChangeTurnAction {
    type: typeof CHANGE_TURN;
}

interface IResetGameAction {
    type: typeof RESET_GAME;
}

type ReducerActions = IWinnerAction | IClickCellAction | IChangeTurnAction | IResetGameAction;

const initialState: ReducerState = {
    winner: '',
    turn: 'O',
    tableData: [
        ['','',''],
        ['','',''],
        ['','','']
    ],
    recentCell: [-1, -1]
}

export const SET_WINNER = 'SET_WINNER' as const;
export const CLICK_CELL = 'CLICK_CELL' as const;
export const CHANGE_TURN = 'CHANGE_TURN' as const;
export const RESET_GAME = 'RESET_GAME' as const;

const setWinner = (winner: ITurn): IWinnerAction => {
    return { type: SET_WINNER, winner};
}

const clickCell = (row: number, cell: number): IClickCellAction => {
    return { type: CLICK_CELL, row, cell};
}

const reducer = (state: ReducerState, action: ReducerActions): ReducerState => {
    switch (action.type) {
        case SET_WINNER:
            return {
                ...state,
                winner: action.winner
            }
        case CLICK_CELL: {
            const tableData = [...state.tableData];
            tableData[action.row] = [...tableData[action.row]];
            tableData[action.row][action.cell] = state.turn;
            return {
                ...state,
                tableData,
                recentCell: [action.row, action.cell]
            }
        }
        case CHANGE_TURN:
            return {
                ...state,
                turn: state.turn === 'O' ? 'X' : 'O'
            }
        case RESET_GAME:
            return {
                ...state,
                turn: 'O',
                recentCell: [-1, -1],
                tableData: [
                    ['','',''],
                    ['','',''],
                    ['','','']
                ]
            }
        default:
            return state;
    }
}

const TicTacToe = () => {
    const [state, dispatch] = useReducer<Reducer<ReducerState, ReducerActions>>(reducer, initialState);
    const { tableData, turn, recentCell, winner } = state;

    const onClickTable = useCallback(() => {
        dispatch(setWinner('O'));
    },[]);

    const checkWinner = (table: string[], turn: string) => {
        return table.every((item) => item === turn);
    };

    useEffect(() => {
        const [row, cell] = recentCell;

        if (row < 0) {
            return;
        }

        let win = false;

        if (checkWinner(tableData[row], turn)) {
            win = true;
        }
        if (checkWinner(tableData.map((ele) => ele[cell]), turn)) {
            win = true;
        }
        if (checkWinner([tableData[0][0], tableData[1][1], tableData[2][2]], turn)) {
            win = true;
        }
        if (checkWinner([tableData[0][2], tableData[1][1], tableData[2][0]], turn)) {
            win = true;
        }

        if (win) {
            dispatch({ type: SET_WINNER, winner: turn});
            dispatch({ type: RESET_GAME});
        } else {
            let all = true; // all 이 true 면 무승부

            tableData.forEach((row) => {
                if(row.some(item => !item)) {
                    all = false;
                    return;
                }
            });

            if (all) {
                dispatch({type: RESET_GAME});
            } else {
                dispatch({ type: CHANGE_TURN});
            }
        }
    },[recentCell])

    return (
        <>
            <Table tableData={tableData} dispatch={dispatch} onClick={onClickTable} />
            {winner && <div>{winner}is winner</div>}
        </>
    )
}

export default TicTacToe