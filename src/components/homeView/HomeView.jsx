import React, { useState, useEffect } from 'react';
import './home-view.css';

import ovni1 from '../../images/ovni1.png';
import spaceShip from '../../images/spaceShip.png';
import Btn from '../button/Button';
import firebase from '../../firebase/firebaseConfig';
import { Link } from 'react-router-dom';

function useGame() {
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
            });
    }, []);
    return game;
}

function HomeView() {
    /*     const game = useGame();
        const [currentGame, setCurrentGame] = useState([]);
    
        const filterId = game.filter(doc => doc.id === currentGame);
    
        const currentId = filterId.map(id => id.id);
    
        const handleCreateNewGame = () => {
            firebase
                .firestore()
                .collection('game')
                .add({
                    board: [],
                    player1: '1',
                    player2: '2'
                })
                .then(res => setCurrentGame(res.id));
        }; */

    return (
        <>
            <div className='container-space-ship'>
                <img src={spaceShip} alt="space-ship" className='space-ship' />
            </div>
            <div className='text-home-view'>
                <div>
                    <p className='title-game'>CONQUERING PLANETS</p>
                </div>
                <Btn name='jugar' route='/general-info' classBtn='btn-play' classLink='route' />
                <Btn name='instrucciones' route='/instructions' classBtn='btn-play' classLink='route' />
            </div>
            <img className='img-ovni1' src={ovni1} alt="ovni1" />
        </>
    );
}

export default HomeView;