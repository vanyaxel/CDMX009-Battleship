import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { planetAddedP1 } from '../../store/player1';

import FiberManualRecord from '@material-ui/icons/FiberManualRecord';
import './square.css';

const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const rows = ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Board() {

    const dispatch = useDispatch();

    const planetsPlacedPlayer1 = useSelector(state => state.entities.player1);
    const locationNotGuessed = useSelector(state => state.entities.randomLocation);

    useEffect(() => {
        let player1 = JSON.parse(localStorage.getItem('player1'));

        player1.forEach(location => {
            dispatch(planetAddedP1({ position: location.position }));
        });
    }, []);

    const checkPosition = (position) => planetsPlacedPlayer1.some(place => place.position === position);

    const isPositionGuessed = position => planetsPlacedPlayer1.find(place => (place.position === position && place.guessLocation) ? true : false);

    const isPositionNotGuessed = position => locationNotGuessed.find(place => place.position === position) ? true : false;

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
                                <td key={col} className='row'>{col}</td>
                                {arrSquare.map(square => (
                                    <td>
                                        {checkPosition(`${col}${(square + 1)}`) ? (
                                            <div
                                                className={isPositionGuessed(`${col}${(square + 1)}`) ? 'guess-square' : 'square'}
                                                data-coordinate={`${col}${(square + 1)}`}>
                                                <FiberManualRecord className='MuiIcon-colorPrimary' />
                                            </div>
                                        ) : (
                                                <div
                                                    className={isPositionNotGuessed(`${col}${(square + 1)}`) ? 'failed-guess-square' : 'square'}
                                                    data-coordinate={`${col}${(square + 1)}`}>
                                                </div>
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
};

export default Board;