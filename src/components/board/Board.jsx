import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { planetAddedP1, planetRemovedP1 } from '../../store/player1';

import FiberManualRecord from '@material-ui/icons/FiberManualRecord';
import './square.css';

const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const rows = ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Board() {

    const dispatch = useDispatch();
    const planetsPlacedPlayer1 = useSelector(state => state.entities.player1);

    const checkPosition = (position) => planetsPlacedPlayer1.some(place => place.position === position);

    const arrSquare = Array.apply(null, { length: 10 }).map(Number.call, Number);

    const handleAddPosition = e => {
        let coordinate = e.target.dataset.coordinate;
        dispatch(planetAddedP1({ position: coordinate }));
    };

    const handleRemovePosition = e => {
        let coordinate = e.target.dataset.coordinate;
        dispatch(planetRemovedP1({ position: coordinate }));
    };

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
                                <td key={col} className='row'>{col}</td>
                                {arrSquare.map(square => (
                                    <td>
                                        {checkPosition(`${col}${(square + 1)}`) ? (
                                            <button
                                                className='square'
                                                onClick={handleRemovePosition}
                                                data-coordinate={`${col}${(square + 1)}`}><FiberManualRecord className='MuiIcon-colorPrimary' /></button>
                                        ) : (
                                                <button
                                                    className='square'
                                                    onClick={handleAddPosition}
                                                    data-coordinate={`${col}${(square + 1)}`}></button>
                                            )}
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
