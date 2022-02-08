import React from 'react';
import useStyles from './styles';
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import moment from "moment";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import DeleteIcon from "@material-ui/icons/Delete";
import {useDispatch} from "react-redux";
import {deletePost, likePost} from "../../../Redux/actions/posts";
import PropTypes from "prop-types";

const Post = ({post, setCurrentId}) => {


    const classes = useStyles();
    const dispatch = useDispatch();

    const editButtonClick = () => {
        return () => setCurrentId(post._id);
    };

    const otherButtonClick = (action) => {
        return () => dispatch(action(post._id));
    };


    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={post.selectedFile}
                title={post.title}
                alt={post.alt}
                component="div"
            />
            <div className={classes.overlay}>
                <Typography variant='h6'>{post.name}</Typography>
                <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button
                    style={{color: 'white'}}
                    size="small"
                    onClick={editButtonClick()}>
                    <MoreHorizIcon fontSize="medium"/>
                </Button>
            </div>
            <div className={classes.details}>
                <Typography
                    variant='body2'
                    color='textSecondary'>{post.tags.map((tag) => `#${tag}`)}
                </Typography>
            </div>
            <Typography
                className={classes.title}
                variant='h5'
                gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography
                    variant='body2'
                    color='textSecondary'
                    component="p">{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button
                    size="small"
                    color="primary"
                    onClick={otherButtonClick(likePost)}>
                    <ThumbUpAltIcon fontSize="small"/>
                    &nbsp; Like &nbsp;
                    {post.likes}
                </Button>
                <Button
                    size="small"
                    color="primary"
                    onClick={otherButtonClick(deletePost)}>
                    <DeleteIcon fontSize="small"/>
                    delete
                </Button>
            </CardActions>
        </Card>
    );
};

Post.propTypes = {
    setCurrentId: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
};


export default Post;
