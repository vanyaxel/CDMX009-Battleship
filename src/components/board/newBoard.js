import React from 'react';
import './square.css';

import Square from './Square';

function Board() {

    var arrSquare = Array.apply(null, { length: 100 }).map(Number.call, Number);

    console.log(arrSquare);

    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const i = 0;
    return (
        <>
            <div className='board'>
                <table>
                    <thead>
                        <tr>
                            <td></td>
                            <td>A</td>
                            <td>B</td>
                            <td>C</td>
                            <td>D</td>
                            <td>E</td>
                            <td>F</td>
                            <td>G</td>
                            <td>H</td>
                            <td>I</td>
                            <td>J</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='letter'>1</td>
                            <td><Square value='1' /></td>
                            <td><Square value='1' /></td>
                            <td><Square value='1' /></td>
                            <td><Square value='1' /></td>
                            <td><Square value='1' /></td>
                            <td><Square value='1' /></td>
                            <td><Square value='1' /></td>
                            <td><Square value='1' /></td>
                            <td><Square value='1' /></td>
                            <td><Square value='1' /></td>
                            <td><Square value='1' /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}


export default Board;

//sirve
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
                        <td><Square /></td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
</div>;


import React from 'react';
import './square.css';

import Square from './Square';

const rows = ['A', 'B'];
const columns = [1, 2, 3,];
/* {
    arrSquare.map(square => (
        rows.map(row => (
            <tr>{columns.map(col => (
                <td data-position={`${row}${col + 1}`}>{}</td>
            ))}</tr>
        )); */


function Board() {
    const rows = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const columns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var arrSquare = Array.apply(null, { length: 10 }).map(Number.call, Number);

    const handleSelectLocation = (e) => {
        let id = e.target.dataset.mydatafield");;
        console.log(id);
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
                                        <button className='square' onClick={handleSelectLocation} data-mydatafield='p'></button >
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