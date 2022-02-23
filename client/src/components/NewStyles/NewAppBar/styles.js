import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    appBar: {
        backgroundColor: '#fff',
        padding: '0.3em 0'
    },
    userMenu: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    logoLink: {
        marginRight: "1em"
    }
}));