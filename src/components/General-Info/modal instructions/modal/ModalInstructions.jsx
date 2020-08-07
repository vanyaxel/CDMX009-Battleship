import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import './modal-instructions.css';

function ModalInstructions() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen} className='instructions-place-planets'>
                ?
            </Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >

                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        X
                </Button>
                </DialogActions>
                <DialogContent className='background-modal'>
                    <DialogContentText className='container-instruction-planet'>
                        <p className='txt-instructions-planet'>Selecciona el planeta &#40;circulo&#41; que quieres poner en el tablero dando un click sobre el y posteriormente da click en la posición en la que lo deseas colocar dentro del tablero.</p>
                        <p className='txt-instructions-planet'>¡Una vez que tienes tus planetas guarda el tablero y a jugar!</p>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default ModalInstructions;