import React from 'react';
import moment from "moment";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import {Avatar, Box} from "@material-ui/core";

import useStyles from './styles';


const Messages = ({message, own}) => {

    const classes = useStyles();

    return (
        <Box className={own ? classes.authorOwn : classes.author}>
            {!own && <Avatar style={{height: '45px', width: '45px'}}>
                {/*{post.name.charAt(0)}*/}
                AG
            </Avatar>}
            <Box ml={2}>
                <Typography
                    gutterBottom
                    className={own ? classes.ownMessageText : classes.messageText}
                    variant="subtitle2"
                    component="p">
                    {message.text}
                </Typography>
                <Typography
                    gutterBottom
                    variant="subtitle2"
                    color="textSecondary"
                    className={own ? classes.ownTime : classes.time}
                    component="p">
                    {moment(message.createdAt).fromNow()}
                </Typography>
            </Box>
        </Box>
    );
};

Messages.propTypes = {
    message: PropTypes.object.isRequired,
    own: PropTypes.bool
};

Messages.defaultProps = {
    own: false
};

export default Messages;
