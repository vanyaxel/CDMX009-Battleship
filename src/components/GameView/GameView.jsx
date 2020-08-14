import React from 'react';
import Board from '../board/Board';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './game-view.css';

import ModalFullScreen from '../General-Info/modal-instructions/ModalFullScreen';


const nameStyle = makeStyles({
    color: 'white',
    fontFamily: ['Atma',
        'cursive'].join(', '),
    position: 'relative',
    top: 35,
});

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

    return (
        <>
            <div className='game-view'>
                <div className='game-boards'>
                    <div>
                        <Typography variant="h4" className={classes.nameText}
                            gutterBottom>
                            Vanya Xel
                    </Typography>
                        <Board />
                    </div>
                    <div>
                        <Typography variant="h4" className={classes.nameTextOpponent} gutterBottom>
                            Oponente
                    </Typography>
                        <Board />
                    </div>
                </div>
                <ModalFullScreen />

            </div>
        </>
    );
}

export default GameView;