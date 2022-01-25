import * as React from 'react';
import { Dispatch, useMemo } from "react";
import Tr from "./Tr";

interface IProps {
    tableData: string[][];
    dispatch: Dispatch<any>;
    onClick: () => void;
}

const Table = (props: IProps) => {
    return (
        <table>
            {Array.from({length: 3}).map((ele, i) => (
                useMemo(
                    () => (
                        <Tr
                            key={i}
                            dispatch={props.dispatch}
                            rowIndex={i}
                            rowData={props.tableData[i]}
                        />
                    ), [props.tableData[i]]
                )
            ))}
        </table>
    )
}

export default Table;