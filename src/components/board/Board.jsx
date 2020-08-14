import React, { useState } from 'react';
import './square.css';
import Planet from '../General-Info/planet/Planet';

function Board() {

    const [planet, setPlanet] = useState({
        value: '',
    });

    const [coordinates, setCoordinates] = useState([]);

    const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const rows = ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var arrSquare = Array.apply(null, { length: 10 }).map(Number.call, Number);

    const handleSelectLocation = (e) => {
        let id = e.target.dataset.mydatafield;
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
                                        <button className='square' onClick={handleSelectLocation} data-mydatafield={`${col}${(square + 1)}`} >{planet.value}</button >
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