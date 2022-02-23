import {makeStyles} from "@material-ui/core/styles";
import photoBox from '../../../images/photoBox.jpg';


export default makeStyles((theme) => ({
    photoBox: {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${photoBox})`,
        height: '10em',
        backgroundPosition: "center",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: '4rem',
        fontFamily: 'Arial',
        [theme.breakpoints.down('sm')]: {
            height: 300,
            fontSize: '3em'
        }
    }
}));