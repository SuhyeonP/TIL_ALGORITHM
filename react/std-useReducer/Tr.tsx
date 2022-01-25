import * as React from 'react';
import { Dispatch, FunctionComponent, memo, useMemo } from 'react';
import Td from "./Td";

interface IProps {
    rowData: string[];
    rowIndex: number;
    dispatch: Dispatch<any>;
}

const Tr = (props: IProps) => {
    return (
        <tr>
            {Array.from({length: 3}).map((td, i) => (
                useMemo(() => (
                    <Td
                        key={i}
                        dispatch={props.dispatch}
                        rowIndex={props.rowIndex}
                        cellIndex={i}
                        cellData={props.rowData[i]}
                    >{''}</Td>
                ), [props.rowData[i]])
            ))}
        </tr>
    )
}

export default Tr;