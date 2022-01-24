import React from 'react';

interface IProps {
    tableData: string[][],
    dispatch: any;
}

const Table = (props: IProps) => {
    const { tableData, dispatch } = props;
    const array = 0;

    return (
        <table>
            <tbody>
            </tbody>
        </table>
    )
}