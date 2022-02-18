import {makeStyles} from "@material-ui/core/styles";


export default makeStyles((theme) => ({
    photoBox: {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('http://fullhdwallpapers.ru/image/nature/8838/krasivyy-zakat.jpg')`,
        height: '500px',
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