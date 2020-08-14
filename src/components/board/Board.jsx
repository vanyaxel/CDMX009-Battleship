import React from 'react';
import './square.css';

import Square from './Square';

const rows = ['A', 'B', ...]
const columns  = [1, 2, 3, ]

function Board() {

    rows.map(row => (
    <tr>{ columns.map(col => (
        <td data-position={`${row}${col+1}`}>{}</td>
    ))}</tr>
    ))

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
                        <tr>
                            <td className='letter'>2</td>
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
                        <tr>
                            <td className='letter'>3</td>
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
                        <tr>
                            <td className='letter'>3</td>
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
                        <tr>
                            <td className='letter'>4</td>
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
                        <tr>
                            <td className='letter'>5</td>
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
                        <tr>
                            <td className='letter'>6</td>
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
                        <tr>
                            <td className='letter'>7</td>
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
                        <tr>
                            <td className='letter'>8</td>
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
                        <tr>
                            <td className='letter'>9</td>
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
                        <tr>
                            <td className='letter'>10</td>
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