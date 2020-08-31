import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import './modal.css';
import useStyles from './stylesModal';

export default function ModalInstructions() {

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
            <Button onClick={handleClickOpen} className={classes.btn}>
                ?
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                classes={{
                    root: classes.root, paper: classes.paper,
                }}
            >
                <Button onClick={handleClose} color="primary" className={classes.closeIcon}> x</Button>
                <DialogContent className={classes.containerText}>
                    <DialogContentText id="alert-dialog-description" className={classes.text}>
                        <p className='text-instruction-modal'>Elige la posicion dentro del tablero y has click sobre la casilla, tienes 10 planeta para ubicarlos en la posición que tu elijas.</p>
                        <p className='text-instruction-modal'>¡Una vez que tienes tus planetas guarda el tablero y a jugar!</p>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}