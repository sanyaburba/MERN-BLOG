import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    card: {
        maxWidth: '100%',
        height: '30.5em'
    },
    media: {
        height: 240
    },
    cardActions: {
        display: 'flex',
        margin: '0 10px',
        justifyContent: 'space-between'
    },
    author: {
        display: 'flex'
    },
    message: {
        height: '100px',
        textOverflow: 'ellipsis',
        overflow: 'hidden'
    }
}));