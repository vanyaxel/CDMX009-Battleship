import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './square.css';
import { coordinateCompared, planetAdded } from '../../store/planets';

const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const rows = ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Board() {
    const dispatch = useDispatch();
    const planetsPlaced = useSelector(state => state.entities.planets);

    console.log(planetsPlaced);
    /* const findPosition = (position) => coordenates.find(item => item.position === position);
    const positionSelected = position =>;
 */
    const arrSquare = Array.apply(null, { length: 10 }).map(Number.call, Number);

    const handleSelectCoordinate = (e) => {
        let coordinate = e.target.dataset.coordinate;
        console.log(coordinate);
        e.target.disabled = true;
        //deshabilitar botton // condicion si ya fue seleccionada ya no se dispara el dispatch
        dispatch(planetAdded(({ coordinate: coordinate })));
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
                                <td key={col}>{col}</td>
                                {arrSquare.map(square => (
                                    <td >
                                        <button
                                            className='square'
                                            /* className={findPosition(`${row}${col}`) ? 'active' : 'inactive'}
                                            onClick={findPosition(`${row}${col}`) ? handleSelectCoordinate : handleRemove} */
                                            onClick={handleSelectCoordinate}
                                            data-coordinate={`${col}${(square + 1)}`}
                                        ></button>
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
/* import React, { useState } from 'react';
import './square.css';

import Planet from '../General-Info/planet/Planet';

function Board() {

    const [coordinates, setCoordinates] = useState([]);

    const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const rows = ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var arrSquare = Array.apply(null, { length: 10 }).map(Number.call, Number);

    const handleSelectLocation = (e) => {
        let id = e.target.dataset.coordinate;
        const position = [id, ...coordinates];
        setCoordinates(position);
        console.log(position);
    };

    return (
        <>
            <div className='board'>
                <table>
                    <thead>
                        <tr>
                            {rows.map(row =>
                                <td>{row}</td>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {columns.map(col => (
                            <tr>
                                <td>{col}</td>
                                {arrSquare.map(square => (
                                    <td >
                                        <div className='square' onClick={handleSelectLocation} data-coordinate={`${col}${(square + 1)}`} ></div >
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


export default Board; */

/*
import React, { useState } from 'react';
import './square.css';

import Planet from '../General-Info/planet/Planet';

function Board() {

    const [coordinates, setCoordinates] = useState([]);

    const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const rows = ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var arrSquare = Array.apply(null, { length: 10 }).map(Number.call, Number);

    const handleSelectLocation = (e) => {
        let id = e.target.dataset.coordinate;
        console.log('hola', id);

        const addCoordinate = coordinates.map(coordinate => {
            if (coordinate !== id) {
                const position = [id, ...coordinates];
                setCoordinates(position);
                console.log(position);
            }
            else
                return coordinate;
        });
        console.log(coordinates);
        return addCoordinate;
    };

    console.log(coordinates);

    return (
        <>
            <div className='board'>
                <table>
                    <thead>
                        <tr>
                            {rows.map(row =>
                                <td>{row}</td>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {columns.map(col => (
                            <tr>
                                <td>{col}</td>
                                {arrSquare.map(square => (
                                    <td >
                                        <div className='square' onClick={handleSelectLocation} data-coordinate={`${col}${(square + 1)}`} ></div >
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>;
        </>
    );
}


export default Board;
 */