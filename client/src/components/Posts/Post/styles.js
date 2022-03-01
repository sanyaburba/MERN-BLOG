import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    card: {
        maxWidth: '100%',
        height: '32.5em'
    },
    media: {
        height: 240
    },
    cardActions: {
        display: 'flex',
        margin: '0 0.5em',
        justifyContent: 'space-between'
    },
    author: {
        display: 'flex'
    },
    message: {
        height: '7.3em',
        textOverflow: 'ellipsis',
        overflow: 'hidden'
    },
    titleMessage: {
        height: '1.5em',
        textOverflow: 'ellipsis',
        overflow: 'hidden'
    },
    tags: {
        marginBottom: '0.3rem',
        height: '1.5em',
        textOverflow: 'ellipsis',
        overflow: 'hidden'
    }
}));