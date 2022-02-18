import {makeStyles} from '@material-ui/core/styles';

export default makeStyles({
    box: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    likesCount: {
        margin: 0,
        fontSize: '1.1rem',
    },
    favorite: {
        color: '#ff1455'
    }
});