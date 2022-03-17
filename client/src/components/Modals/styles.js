import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '30em',
        backgroundColor: 'white',
        border: '0.2em solid #000',
        borderRadius: '0.5rem',
        boxShadow: '5em',
        padding: theme.spacing(2),
    },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    paper: {
        padding: theme.spacing(2),
    },
    form: {
        display: 'flex',
        flexDirection: 'column'
    },
    fileInput: {
        width: '97%',
        margin: '1em 0',
        padding: '0 0.4em',
    },
    buttonSubmit: {
        margin: '1em 0',
        width: '9em',
        alignSelf: 'flex-end',
        '&:hover': {
            backgroundColor: '#000',
            color: 'white'
        }
    },
    buttonFile: {
        padding: '1em',
        backgroundColor: 'red',
        color: 'red'
    },
    modalButton: {
        position: 'fixed',
        bottom: '4%',
        right: '2%'
    },
    inputFile: {
        fontSize: '16px',
        fontFamily: 'inherit',
        padding: '0.25em 0.5em',
        backgroundColor: '#fff',
        border: '2px solid',
        borderRadius: '4px',
    }
}));