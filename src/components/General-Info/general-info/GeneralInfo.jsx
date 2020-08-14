import React, { useState, useEffect } from 'react';
import './general-info.css';
import firebase from '../../../firebase/firebaseConfig';

import InfoGame from '../info-game/InfoGame';
import Board from '../../board/Board';

/* firebase.firestore().collection('game').add({
    board: [],
    player1: '',
    player2: ''
}); */

/* function useGame() {
    const [game, setGame] = useState([]);

    useEffect(() => {
        firebase
            .firestore()
            .collection('game')
            .onSnapshot((snapshot) => {
                const newGame = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setGame(newGame);
            })
            .then(res => console.log(res.id));
    }, []);
    return game;
} */

function GeneralInfo({ currentGame }) {
    /*     const gameInfo = useGame();
        console.log(gameInfo); */

    return (
        <>
            <div className='general-info-view'>
                <InfoGame />
                <Board />
            </div>
        </>
    );
}

export default GeneralInfo;