import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { planetAddedP2 } from '../../../store/player2';
import { userAdded } from '../../../store/user';

import Btn from '../../button/Button';
import PlanetsToPlace from '../planet/PlanetsToPlace';
import ModalInstructions from '../modal-instructions/ModalInstructions';

import './info-game.css';

const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function InfoGame() {

    const dispatch = useDispatch();

    const planetsPlacedPlayer1 = useSelector(state => state.entities.player1);
    const planetsPlacedPlayer2 = useSelector(state => state.entities.player2);
    const user = useSelector(state => state.entities.user);

    let name;
    const nombre = text => {
        name = text;
    };

    const oponentPositions = () => {

        dispatch(userAdded({ name: name }));

        let arrPositions = [];
        for (let paso = 0; paso < 10; paso++) {
            let letter = columns[Math.floor(Math.random() * (columns.length))];
            let number = rows[Math.floor(Math.random() * (rows.length))];

            let position = letter + number;
            dispatch(planetAddedP2({ position: position }));
        };
        return arrPositions;
    };

    const saveLocalStorage = () => {
        localStorage.setItem('userPlayer1', JSON.stringify(user));
        localStorage.setItem('player1', JSON.stringify(planetsPlacedPlayer1));
        localStorage.setItem('player2', JSON.stringify(planetsPlacedPlayer2));
    };

    return (
        <div className='container-user-info'>
            <div className='name-user-selected'>
                <p className='text-general-info'>Elige tu nombre</p>
                <input type='text' className='input-name-user-selected' placeholder='Nombre aqui' onChange={e => { nombre(e.target.value); }} />
                <div className='line-name-user-selected'></div>
            </div>
            <div className='container-place-planets'>
                <div className='text-place-planet planets'>
                    <p className='text-general-info'>Acomoda tus planetas en el tablero</p>
                    <ModalInstructions />
                </div>
                <div className='container-planets'>
                    <PlanetsToPlace />
                </div>
                <Btn name='Generar oponente' classBtn='btn-play oponent' click={oponentPositions} />
            </div>
            <Btn name='Guardar tablero' route='/game' classBtn='btn-play oponent' classLink='route' click={saveLocalStorage} />
        </div>
    );
}

export default InfoGame;