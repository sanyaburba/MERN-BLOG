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
        backgroundColor: 'rgb(251,251,255)',
        position: 'sticky'
    },
    sideBarBox: {
        width: '100%',
        height: '91vh',
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
    },
    userAvatar: {
        border: '0.3rem solid #58ebdf',
        marginRight: '2rem',
    },
    adminAvatar: {
        border: '0.3rem solid #e33d91',
        marginRight: '2rem',
    },
    userRole: {
        margin: '0 0.5rem',
        fontWeight: 'bold',
        color: '#58ebdf',
        alignItems: 'center'
    },
    adminRole: {
        margin: '0 0.5rem',
        fontWeight: 'bold',
        color: '#e33d91',
        alignItems: 'center'
    },
    dashboardContainer: {
        position: 'fixed',
        width: '17%'
    }

});