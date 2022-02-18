import React, {useCallback} from 'react';
import useStyles from './styles';
import {Button, ButtonBase, Card, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import moment from "moment";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import DeleteIcon from "@material-ui/icons/Delete";
import {useDispatch} from "react-redux";
import {deletePost, likePost} from "../../../Redux/actions/posts";
import PropTypes from "prop-types";
import Likes from "../../Likes/Likes";
import {useNavigate} from "react-router-dom";

const Post = ({post, setCurrentId}) => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('profile'));

    const editButtonClick = useCallback(()=> {
        setCurrentId(post._id);
    }, [post._id, setCurrentId]);

    const likeButtonClick = useCallback(()=> {
        dispatch(likePost(post._id,));
    },[dispatch, post._id]);

    const deleteButtonClick = useCallback(()=> {
        dispatch(deletePost(post._id,));
    },[dispatch, post._id]);

    const openPost = useCallback(()=> {
        navigate(`/posts/${post._id}`);
    },[navigate, post._id]);


    return (
        <Card className={classes.card} raised elevation={7}>
            <CardMedia
                className={classes.media}
                image={post.file}
                title={post.title}
                alt={post.alt}
                component="div"
            />
            <div className={classes.overlay}>
                <ButtonBase
                    className={classes.cardAction}
                    onClick={openPost}
                    >
                    <Typography variant='h6'>{post.name}</Typography>
                </ButtonBase>
                <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
            </div>
            {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
            <div className={classes.overlay2}>
                <Button
                    style={{color: 'white'}}
                    size="small"
                    onClick={editButtonClick}>
                    <MoreHorizIcon fontSize="medium"/>
                </Button>
            </div>
            )}
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
                    style={{height: '150px', overflow: 'hidden'}}
                    component="p">{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button
                    size="small"
                    color="primary"
                    disabled={!user?.result}
                    onClick={likeButtonClick}>
                    <Likes
                        post={post}
                        user={user}
                    />
                </Button>
                {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                    <Button
                        size="small"
                        color="primary"
                        onClick={deleteButtonClick}>
                        <DeleteIcon fontSize="small"/>
                        delete
                    </Button>
                )}
            </CardActions>
        </Card>
    );
};

Post.propTypes = {
    setCurrentId: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
};


export default Post;
