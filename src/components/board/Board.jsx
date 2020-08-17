import React, { useState } from 'react';
import './square.css';


function Board() {

    const [coordinates, setCoordinates] = useState([]);

    const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const rows = ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var arrSquare = Array.apply(null, { length: 10 }).map(Number.call, Number);

    const handleSelectLocation = (square, col) => {
        console.log(coordinates);
        let id = square + col;
        if (coordinates.find(place => place !== id)) {
            const position = [id, ...coordinates];
            setCoordinates(position);
            console.log(coordinates);
        } else
            return coordinates;

        console.log(coordinates);

        /*         let id = e.target.dataset.coordinate;
                const position = [id, ...coordinates];
                setCoordinates(position);
                console.log(position); */
    };

    return (
        <>
            <div className='board'>
                <table>
                    <thead>
                        <tr >
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
                                        <div className='square' onClick={() => { handleSelectLocation(col, (square + 1)); }} data-coordinate={`${col}${(square + 1)}`} ></div >
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