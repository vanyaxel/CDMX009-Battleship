import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './square.css';
import { planetAdded, planetRemoved } from '../../store/planets';

const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const rows = ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Board() {

    const arrSquare = Array.apply(null, { length: 10 }).map(Number.call, Number);

    return (
        <>
            <div className='board'>
                <table>
                    <thead>
                        <tr>
                            {rows.map(row =>
                                <td key={row}>{row}</td>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {columns.map(col => (
                            <tr>
                                <td key={col}>{col}</td>
                                {arrSquare.map(square => (
                                    <td>oo
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </>
    );
}

export default Board;
