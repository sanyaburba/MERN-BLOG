import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    media: {
        borderRadius: '0.3em',
        objectFit: 'cover',
        width: '100%',
        maxHeight: '40em',
    },
    card: {
        display: 'flex',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            flexWrap: 'wrap',
            flexDirection: 'column',
        },
    },
    section: {
        borderRadius: '1.5em',
        margin: '0.8em',
        flex: 1,
    },
    imageSection: {
        marginLeft: '1.5em',
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
        },
    },
    recommendedPosts: {
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    recommendations: {
        margin: '1.7em',
        maxWidth: '20em',
        cursor: "pointer",
        overflow: 'hidden'
    },
    loadingPaper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1.8em',
        borderRadius: '1.2em',
        height: '39vh',
    },
    actions: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cardActions: {
        display: 'flex',
        margin: '0 0.5em',
        justifyContent: 'space-between'
    },
    author: {
        display: 'flex'
    },
    likesBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    likesCount: {
        margin: 0,
        fontSize: '1.1rem',
    },
    titleMessage: {
        height: '1.2em',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        textAlign: 'center'
    },
    commentsOuterContainer: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    commentsInnerContainer: {
        height: '15em',
        overflow: 'auto',
        marginBottom: '2em'
    }
}));