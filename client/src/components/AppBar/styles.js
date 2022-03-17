import {makeStyles} from "@material-ui/core/styles";

export default makeStyles({
    appBar: {
        backgroundColor: '#fff',
        padding: '0.5em 0',
        boxShadow: 'none'
    },
    userMenu: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    logoLink: {
        marginRight: "1em",
        textDecoration: 'none'
    },
    logoText: {
        fontWeight: 'bold',
        fontSize: '3rem',
        color:'darkblue',
    }
});