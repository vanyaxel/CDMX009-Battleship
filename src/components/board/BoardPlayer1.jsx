/* import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './square.css';
import { planetAddedP1, planetRemovedP1 } from '../../store/player1';
import { planetAddedP2 } from '../../store/player2';
import { userAdded } from '../../store/user';
import FiberManualRecord from '@material-ui/icons/FiberManualRecord';

const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const rows = ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Board() {

    const dispatch = useDispatch();

    const planetsPlacedPlayer1 = useSelector(state => state.entities.player1);

    function getInfoLocalStorage() {
        let user = JSON.parse(localStorage.getItem('userPlayer1'));
        let player1 = JSON.parse(localStorage.getItem('player1'));

        let name = user[0].name;
        dispatch(userAdded({ name: name }));

        console.log(player1);

        player1.forEach(location => {
            dispatch(planetAddedP1({ position: location.position }));
        });
    }

    const checkPosition = (position) =>
        planetsPlacedPlayer1.some(place => place.position === position);

    const arrSquare = Array.apply(null, { length: 10 }).map(Number.call, Number);

    return (
        <>
            <div className='board'>
                <button onClick={getInfoLocalStorage}>data</button>
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
                                                className='square-div'
                                                data-coordinate={`${col}${(square + 1)}`}><FiberManualRecord className='MuiIcon-colorPrimary' /></div>
                                        ) : (
                                                <div
                                                    className='square-div'
                                                    data-coordinate={`${col}${(square + 1)}`}></div>
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
 */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './square.css';
import { planetAddedP1 } from '../../store/player1';
import { planetAddedP2 } from '../../store/player2';
import FiberManualRecord from '@material-ui/icons/FiberManualRecord';

const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const rows = ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Board() {

    const dispatch = useDispatch();

    const planetsPlacedPlayer1 = useSelector(state => state.entities.player1);

    useEffect(() => {
        let player1 = JSON.parse(localStorage.getItem('player1'));

        player1.forEach(location => {
            dispatch(planetAddedP1({ position: location.position }));
        });
    }, []);

    const checkPosition = (position) =>
        planetsPlacedPlayer1.some(place => place.position === position);

    const arrSquare = Array.apply(null, { length: 10 }).map(Number.call, Number);





    /*  const getPlace = position => planetsPlacedPlayer2.find(place => place.position === position);
 
 
     const isPositionGuessed = position => planetsPlacedPlayer2.find(place => place.position === position && place.guessLocation) ? true : false;
 
     const comparePosition = (position) => {
         const place = getPlace(position);
         if (!place || place.guessLocation === true) {
             setTimeout(() => {
                 oponentPositions();
             }, 1000);
             return;
         } else {
             dispatch(coordinateComparedP2({ position, guessLocation: true }));
             setTimeout(() => {
                 console.log('atinaste');
             }, 1000);
             return;
         }
     }; */

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
                                                className='square-div'
                                                data-coordinate={`${col}${(square + 1)}`}>
                                                <FiberManualRecord className='MuiIcon-colorPrimary' />
                                            </div>
                                        ) : (
                                                <div
                                                    className='square-div'
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
