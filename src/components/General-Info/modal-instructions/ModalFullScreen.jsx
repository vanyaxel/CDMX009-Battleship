import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import './modal.css';

import useStyles from './stylesModal';
import bubble from './images/bubble.png';
import arrow from './images/arrow.svg';
import ovni3 from './images/ovni3.png';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalFullScreen() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen} className={classes.btnModal}>
                ?
        </Button>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} classes={{
                paper: classes.dialogProps
            }}>
                <div className='close-icon-modal'>
                    <CloseIcon className={classes.closeIcon} onClick={handleClose} />
                </div>
                <div>
                    <img src={arrow} alt="arrow" className='arrow1' />
                    <img src={arrow} alt="arrow" className='arrow2' />
                    <div className='square-example-red'></div>
                    <div className='square-example-white'></div>
                    <img src={ovni3} alt="ovni3" className='ovni3' />
                    <img src={bubble} alt="bubble" className='bubble' />
                </div>
            </Dialog>
        </div>
    );
}
