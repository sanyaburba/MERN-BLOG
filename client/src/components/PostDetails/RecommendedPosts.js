import React, {useCallback} from 'react';
import {Avatar, Box, Card, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import {Favorite} from "@material-ui/icons";
import useStyles from "./styles";
import {useNavigate} from "react-router-dom";
import moment from "moment";
import PropTypes from "prop-types";
import noPostPhoto from "../../images/noPostPhoto.jpg";

const RecommendedPosts = ({file, name, likes, title, _id, createdAt}) => {

    const classes = useStyles();
    const navigate = useNavigate();
    
    const openPost = useCallback(() => navigate(`/posts/${_id}`), [_id, navigate] );


    return (
    <Card style={{ width: '20rem', height:'15rem', margin: '1em', flexWrap: 'wrap' }} elevation={6}>
        <CardMedia
            component="img"
            alt={name}
            height="100"
            image={file}
            onClick={openPost}
            style={{cursor: 'pointer'}}
            key={_id}
        />
        <CardContent>
            <Typography className={classes.titleMessage} gutterBottom variant="h5" component="div">
                {title}
            </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
            <Box className={classes.author}>
                <Avatar>
                    {name.charAt(0)}
                </Avatar>
                <Box ml={2}>
                    <Typography
                        gutterBottom
                        variant="subtitle2"
                        component="p">
                        {name}
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="subtitle2"
                        color="textSecondary"
                        component="p">
                        {moment(createdAt).fromNow()}
                    </Typography>
                </Box>
            </Box>
            <Box className={classes.likesBox}>
                <Typography
                    gutterBottom
                    className={classes.likesCount}
                    variant="subtitle2"
                    component="p">
                    {likes.length}
                </Typography>
                <Typography
                    gutterBottom
                    component="p">
                    <Favorite/>
                </Typography>
            </Box>
        </CardActions>
    </Card>
    );
};

RecommendedPosts.propTypes = {
    file: PropTypes.string,
    name: PropTypes.string.isRequired,
    likes: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired
};

RecommendedPosts.defaultProps = {
    file: noPostPhoto
};

export default RecommendedPosts;
