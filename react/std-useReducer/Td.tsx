import * as React from 'react';
import { useCallback, Dispatch } from 'react';
import {CLICK_CELL} from "./TicTacToe";

interface IProps {
    rowIndex: number;
    cellIndex: number;
    dispatch: Dispatch<any>;
    cellData: string;
    children: string;
}

const Td = (props: IProps) => {
    const { dispatch, cellData, cellIndex, rowIndex } = props;
    const onClickTd = useCallback(() => {
        if (props.cellData) {
            return;
        }
        dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex})
    },[cellData]);

    return (
        <td onClick={onClickTd}>{cellData}</td>
    )
}

export default Td;