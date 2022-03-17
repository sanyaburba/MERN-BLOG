import {makeStyles} from "@material-ui/core/styles";

export default makeStyles ({
    author: {
        display: 'flex',
        margin: '1rem'
        // justifyContent: 'flex-end'
    },
    messageText: {
        padding: '0.8rem',
        borderRadius: '1rem',
        backgroundColor: 'black',
        fontSize: '1rem',
        color: 'white',
        maxWidth: '24rem',
        boxShadow: '0.1rem 0.1rem 0.5rem gray'
    },
    authorOwn: {
        margin: '1rem',
        display: 'flex',
        justifyContent: 'flex-end'
    },
    ownMessageText: {
        padding: '0.8rem',
        borderRadius: '1rem',
        backgroundColor: 'lightgray',
        color: 'black',
        maxWidth: '24rem',
        fontSize: '1rem',
        boxShadow: '0.1rem 0.1rem 0.5rem gray'
    },
    ownTime: {
        textAlign: 'right'
    },
    time: {
        textAlign: 'left'
    }
});