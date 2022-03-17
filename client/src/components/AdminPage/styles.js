import {makeStyles} from "@material-ui/core/styles";

export default makeStyles( {
    postItem: {
        backgroundColor: '#f8f8ff',
        margin: '1rem 0',
        borderRadius: '0.3rem'
    },
    circular: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '25rem'
    },
    sideBarMenu: {
        backgroundColor: 'rgb(251,251,255)'
    },
    sideBarBox: {
        width: '100%',
        padding: '2em'
    },
    sideBarTitle: {
        color: 'lightgray',
        fontSize: '1.3rem',
        fontWeight: 'bold'
    },
    sideBarList: {
        listStyle: 'none',
        padding: '0.4rem'
    },
    sideBarListItem: {
        padding: '0.5rem',
        cursor:'pointer',
        display: 'flex',
        alignItems: 'center',
        fontSize: '1.2rem',
        color: 'gray',
        borderRadius: '0.6rem',
        '&:hover': {
            backgroundColor: 'rgb(228,228,250)'
        }
    },
    sideBarListItemActive: {
        backgroundColor: 'rgb(228,228,250)'
    },
    totalTitle: {
        fontSize: '2.5rem',
        color: 'darkblue',
        fontWeight: '600'
    }

});