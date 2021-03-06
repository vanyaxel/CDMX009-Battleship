import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { coordinateComparedP1 } from '../../store/player1';
import { planetAddedP2, coordinateComparedP2 } from '../../store/player2';
import { locationAdded } from '../../store/randomLocation';

import './square.css';

const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const columns = ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const columnsRandom = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Board() {

    const dispatch = useDispatch();

    useEffect(() => {
        let player2 = JSON.parse(localStorage.getItem('player2'));

        player2.forEach(location => {
            dispatch(planetAddedP2({ position: location.position }));
        });
    }, []);

    const planetsPlacedPlayer1 = useSelector(state => state.entities.player1);
    const planetsPlacedPlayer2 = useSelector(state => state.entities.player2);

    const arrSquare = Array.apply(null, { length: 10 }).map(Number.call, Number);

    const getPlace = position => planetsPlacedPlayer2.find(place => place.position === position);

    const isPositionGuessed = position => planetsPlacedPlayer2.find(place => place.position === position && place.guessLocation) ? true : false;

    const oponentPositions = () => {

        let number = columnsRandom[Math.floor(Math.random() * (columnsRandom.length))];
        let letter = rows[Math.floor(Math.random() * (rows.length))];
        let position = (letter + number);

        const getPlacePlayer1 = position => planetsPlacedPlayer1.find(place => place.position === position);

        let prueba = getPlacePlayer1(position);

        if (prueba === undefined) {
            dispatch(locationAdded({ position: position }));
        } else (
            dispatch(coordinateComparedP1({ position, guessLocation: true }))
        );
        return position;
    };

    const comparePosition = e => {
        let position = e.target.dataset.coordinate;
        const place = getPlace(position);
        e.target.disabled = true;

        if (!place || place.guessLocation === true) {
            setTimeout(() => {
                oponentPositions();
            }, 1500);
            return;
        } else {
            dispatch(coordinateComparedP2({ position, guessLocation: true }));
            setTimeout(() => {
                oponentPositions();

            }, 1500);
            return;
        }
    };

    return (
        <>
            <div className='board1'>
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
                                            className={isPositionGuessed(`${row}${(square + 1)}`) ? 'guess-square' : 'square'}
                                            onClick={e => comparePosition(e)}
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
