import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './square.css';
import { planetAddedP1, planetRemovedP1, coordinateComparedP1 } from '../../store/player1';
import { planetAddedP2, coordinateComparedP2 } from '../../store/player2';

const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const columns = ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Board() {

    const dispatch = useDispatch();

    const planetsPlacedPlayer2 = useSelector(state => state.entities.player2);

    const arrSquare = Array.apply(null, { length: 10 }).map(Number.call, Number);

    const getPlace = position => planetsPlacedPlayer2.find(place => place.position === position);

    const isPositionGuessed = position => planetsPlacedPlayer2.find(place => place.position === position && place.guessLocation) ? true : false;


    const comparePosition = (position) => {
        const place = getPlace(position);
        if (!place || place.guessLocation === true) {
            return;
        }
        dispatch(coordinateComparedP2({ position, guessLocation: true }));
    };

    return (
        <>
            <div className='board'>
                <table>
                    <thead>
                        <tr>
                            {columns.map(col =>
                                <td key={col}>{col}</td>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(row => (
                            <tr>
                                <td key={row} className='row'>{row}</td>
                                {arrSquare.map(square => (
                                    <td>
                                        <button
                                            className={isPositionGuessed(`${row}${(square + 1)}`) ? 'active-square' : 'inactive-square'}
                                            onClick={() => comparePosition(`${row}${(square + 1)}`)}
                                            data-coordinate={`${row}${(square + 1)}`}>
                                        </button>
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
