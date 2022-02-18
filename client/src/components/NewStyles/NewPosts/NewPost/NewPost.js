import React, {useCallback} from 'react';
import {Avatar, Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import useStyles from './styles';
import moment from "moment";
import {useNavigate} from "react-router-dom";
import Likes from "../../../Likes/Likes";

const NewPost = ({post, setCurrentId}) => {

    const classes = useStyles();
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem('profile'));

    const openPost = useCallback(()=> {
        navigate(`/posts/${post._id}`);
    },[navigate, post._id]);

    return (
        <Card className={classes.card} raised elevation={7}>
            <CardActionArea onClick={openPost}>
                <CardMedia
                    className={classes.media}
                    component="img"
                    height="140"
                    image={post.file || 'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'}
                    alt={post.alt}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {post.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component='div' className={classes.message}>
                        {post.message}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                    <Avatar src="http://fullhdwallpapers.ru/image/nature/8814/techenie-v-lesu.jpg" />
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
                    <Likes post={post} user={user}/>
                </Box>
            </CardActions>
        </Card>
    );
};

export default NewPost;
