import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    //modal interrogación
    paper: {
        width: 600,
        height: 400,
        background: '#000000b7',
        borderRadius: 50,
        border: 'solid 10px #7F00FF',
        boxShadow: '0px 0px 15px 5px #7F00FF',
        paddingLeft: 10,
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'lighter',
        fontFamily: ['Atma',
            'cursive'].join(', ')
    },
    containerText: {
        paddingLeft: 38,
        paddingRight: 38,
        display: 'flex',
        alignItems: 'center',
    },
    closeIcon: {
        display: 'flex',
        justifyContent: 'flex-end',
        color: 'white',
        position: 'relative',
        top: 15,
        right: 35,
        fontFamily: ['Atma',
            'cursive'].join(', '),
        fontSize: 20,
    },
    btn: {
        border: 'solid white 1px',
        borderRadius: 50,
        background: '#00000086',
        color: 'white',
        minWidth: 20,
        height: 20,
        padding: 0,
    },
    //modal instrucciones
    btnModal: {
        borderRadius: 40,
        border: 'solid 7px #00FFFF',
        boxShadow: '0px 0px 9px 3px #00FFFF',
        background: 'none',
        width: 40,
        height: 50,
        fontFamily: ['Atma',
            'cursive'].join(', '),
        fontSize: 25,
        color: '#ffff',
        fontWeight: '500',
        textTransform: 'lowercase',
        margin: 20,
        '&:hover': {
            border: 'solid 7px #00FFFF',
            boxShadow: '0px 0px 9px 3px #00FFFF',
            background: '#00FFFF',
            color: '#ffff',
            fontWeight: '600',
        }
    },
    dialogProps: {
        backgroundColor: 'rgba(0, 0, 0, 0.20)'
    }
});

export default useStyles;