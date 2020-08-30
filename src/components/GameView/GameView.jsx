import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Board from '../board/BoardPlayer1';
import BoardPlayer2 from '../board/BoardPlayer2';
import Btn from '../../components/button/Button';
import { planetAddedP2 } from '../../store/player2';


import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './game-view.css';

import BoardPlayer1 from '../board/Board';
import ModalFullScreen from '../General-Info/modal-instructions/ModalFullScreen';

import { userAdded } from '../../store/user';

const useStyles = makeStyles({
    nameText: {
        color: 'white',
        fontFamily: ['Atma',
            'cursive'].join(', '),
        position: 'relative',
        top: 35,
    },
    nameTextOpponent: {
        color: 'white',
        fontFamily: ['Atma',
            'cursive'].join(', '),
        position: 'relative',
        top: 35,
        textAlign: 'right'
    }
});

function GameView() {
    const classes = useStyles();

    const dispatch = useDispatch();

    const user = useSelector(state => state.entities.user);

    let userLS = JSON.parse(localStorage.getItem('userPlayer1'));

    let namePlayer1 = userLS[0].name;

    return (
        <>
            <div className='game-view'>
                <div className='game-boards'>
                    <Typography variant="h4" className={classes.nameText}
                        gutterBottom>
                        {namePlayer1}
                    </Typography>
                    <Board />
                </div>
                <div className='game-boards'>
                    <Typography variant="h4" className={classes.nameTextOpponent} gutterBottom>
                        Oponente
                    </Typography>
                    <BoardPlayer2 />
                </div>
                {/* <div>
                        <Typography variant="h4" className={classes.nameTextOpponent} gutterBottom>
                            Oponente
                    </Typography>
                        <Board />
                    </div> */}
            </div>
            <ModalFullScreen />
        </>
    );
}

export default GameView;