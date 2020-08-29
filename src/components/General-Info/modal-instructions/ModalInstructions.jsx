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
                        <p className='text-instruction-modal'>Selecciona el planeta &#40;circulo&#41; que quieres poner en el tablero dando un click sobre el y posteriormente da click en la posición en la que lo deseas colocar dentro del tablero.</p>
                        <p className='text-instruction-modal'>¡Una vez que tienes tus planetas guarda el tablero y a jugar!</p>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}
