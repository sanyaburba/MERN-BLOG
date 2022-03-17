import React, {useCallback} from 'react';
import {useNavigate} from "react-router-dom";
import moment from "moment";
import PropTypes from "prop-types";
import {Avatar, Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";

import Likes from "../../Likes/Likes";
import noPostPhoto from '../../../images/noPostPhoto.jpg';
import useStyles from './styles';

const Post = ({post}) => {

    const classes = useStyles();
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem('profile'));


    const openPost = useCallback(() => {
        navigate(`/posts/${post._id}`);
    }, [navigate, post._id]);


    return (
        <Card
            className={classes.card}
            raised
            elevation={7}>
            <CardActionArea onClick={openPost}>
                <CardMedia
                    className={classes.media}
                    component="img"
                    height="140"
                    image={post.file || `${noPostPhoto}`}
                    alt={post.alt}
                />
                <CardContent>
                    <Typography
                        className={classes.titleMessage}
                        gutterBottom
                        variant="h5"
                        component="div">
                        {post.title}
                    </Typography>
                    <Typography
                        variant='body2'
                        className={classes.tags}>
                        {post.tags.map((tag) => `#${tag}`)}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component='div'
                        className={classes.message}>
                        {post.message}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                    <Avatar>
                        {post.name.charAt(0)}
                    </Avatar>
                    <Box ml={2}>
                        <Typography
                            gutterBottom
                            variant="subtitle2"
                            component="p">
                            {post.name}
                        </Typography>
                        <Typography
                            gutterBottom
                            variant="subtitle2"
                            color="textSecondary"
                            component="p">
                            {moment(post.createdAt).fromNow()}
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Likes
                        post={post}
                        user={user}
                    />
                </Box>
            </CardActions>
        </Card>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired
};

export default Post;
