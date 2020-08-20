import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './square.css';
import { planetAddedP1, planetRemovedP1 } from '../../store/player1';
import { planetAddedP2 } from '../../store/player2';

const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const rows = ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Board() {
    const dispatch = useDispatch();
    const planetsPlacedPlayer1 = useSelector(state => state.entities.player1);
    const planetsPlacedPlayer2 = useSelector(state => state.entities.player2);

    /**
     * Returns tru or false if the position exists in the store
     * @param {string} position
     * @returns boolean
     */
    const checkPosition = (position) =>
        planetsPlacedPlayer1.some(place => place.position === position);

    const arrSquare = Array.apply(null, { length: 10 }).map(Number.call, Number);

    const handleAddPosition = e => {
        let coordinate = e.target.dataset.coordinate;
        dispatch(planetAddedP1({ position: coordinate }));

        /*         setTimeout(() => {
                    const botPosition = generateRandomPosition(min, max);
                    dispatch(planetAdded({ position: botPosition, board: 'bot' }));
                }, 3000); */
    };

    const handleRemovePosition = e => {
        let coordinate = e.target.dataset.coordinate;
        dispatch(planetRemovedP1({ position: coordinate }));
    };

    //Random number and letter ---> location bot 
    function randomPosition() {
        let rowArr = rows.shift();
        let letter = columns[Math.floor(Math.random() * (columns.length))];
        let number = rows[Math.floor(Math.random() * (rows.length))];

        return letter + number;
    }

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
                                    <td>
                                        {checkPosition(`${col}${(square + 1)}`) ? (
                                            <button
                                                className='active-square'
                                                onClick={handleRemovePosition}
                                                data-coordinate={`${col}${(square + 1)}`}></button>
                                        ) : (
                                                <button
                                                    className='inactive-square'
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
