import React from 'react';
import Board from './board/Board';

function UserInfo() {
    return (
        <>
            <div>
                <div>
                    <p>Elige tu nombre</p>
                    <p>Vanya Xel</p>
                    <div>----------------</div>
                </div>
                <div>
                    <button>Generar código</button>
                    <button>Ingresar código</button>
                    <div>----------------</div>
                </div>
                <div>
                    <p>Acomoda tus planetas en el tablero</p>
                    <button>?</button>
                    <p>OOOOOOOOO</p>
                </div>
                <div>
                    <button>Guardar tablero</button>
                </div>
            </div>
            <div>
                <Board />
            </div>
        </>
    );
}

export default UserInfo;