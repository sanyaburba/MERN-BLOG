import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import moment from "moment";
import {CircularProgress, Divider, IconButton, Paper, Typography} from "@material-ui/core";
import {ArrowBack, DeleteForever, Edit, Home} from "@material-ui/icons";

import {deletePost, getPost, getPostsBySearch} from "../../Redux/actions/posts";
import RecommendedPosts from "./RecommendedPosts";
import noPostPhoto from '../../images/noPostPhoto.jpg';
import CreateEditPostModal from "../Modals/CreateEditPostModal";
import Comments from "./Comments";
import useStyles from './styles';


const PostDetails = () => {

    const {post, posts, isLoading} = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const {id} = useParams();
    const classes = useStyles();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('profile'));
    const admin = user?.result.role === 'ADMIN';

    console.log(post);
    const [currId, setCurrId] = useState('');

    const [open, setOpen] = React.useState(false);

    const handleOpen = useCallback(() => setOpen(true), []);
    const handleClose = useCallback(() => setOpen(false), []);

    const editButtonClick = useCallback(() => {
        setCurrId(id);
        handleOpen();
    }, [handleOpen, id]);

    const deleteButtonClick = useCallback(() => {
        dispatch(deletePost(id));
        navigate('/');
    }, [navigate, dispatch, id]);


    useEffect(() => {
        dispatch(getPost(id));
    }, [dispatch, id]);


    useEffect(() => {
        if (post) {
            dispatch(getPostsBySearch({search: 'g', tags: post?.tags.join(',')}));
        }
    }, [post, dispatch]);


    const page = localStorage.getItem('currentPage');
    const backButtonClick = useCallback(() => navigate(-1), [navigate]);
    const homeButtonClick = useCallback(() => navigate(`/posts?page=${page}`), [navigate, page]);

    if (!post) return null;

    if (isLoading) {
        return <Paper elevation={6} className={classes.loadingPaper}>
            <CircularProgress size="7em"/>
        </Paper>;
    }

    const recommendedPosts = posts?.filter(({_id}) => _id !== post._id).slice(0, 3);

    return (

        <Paper style={{padding: '0.5em'}}
               elevation={6}>
            <div className={classes.card}>
                <div className={classes.section}>
                    <div className={classes.actions}>
                        <IconButton onClick={backButtonClick}>
                            <ArrowBack style={{fontSize: 30}}/>
                        </IconButton>
                        <IconButton onClick={homeButtonClick}>
                            <Home style={{fontSize: 30}}/>
                        </IconButton>
                        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator || admin) && (
                            <div>
                                <IconButton
                                    color="primary"
                                    onClick={deleteButtonClick}>
                                    <DeleteForever
                                        style={{fontSize: 30}}
                                        color="secondary"/>
                                </IconButton>
                                <IconButton
                                    color="primary"
                                    onClick={editButtonClick}>
                                    <Edit style={{fontSize: 30, color: 'black'}}/>
                                </IconButton>
                            </div>
                        )}
                    </div>
                    <CreateEditPostModal
                        open={open}
                        onClose={handleClose}
                        currentId={currId}
                        setCurrentId={setCurrId}/>
                    <Typography
                        variant="h3"
                        component="h2">{post.title}</Typography>
                    <Typography
                        gutterBottom
                        variant="h6"
                        color="textSecondary"
                        component="h2">
                        {post.tags.map((tag) => `#${tag} `)}
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="body1"
                        component="p">
                        {post.message}
                    </Typography>
                    {post.updatedAt && post.updatedAt === post.createdAt ? <>
                        <Typography variant="h6">Created by: {post.name}</Typography>
                        <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
                    </> : <>
                        <Typography variant="h6">Updated by: {post.name}</Typography>
                        <Typography variant="body1">{moment(post.updatedAt).fromNow()}</Typography>
                    </>}

                    <Divider style={{margin: '2em 0'}}/>
                    <Comments post={post}/>
                    <Divider style={{margin: '2em 0'}}/>
                </div>
                <div className={classes.imageSection}>
                    <img className={classes.media}
                         src={post.file || `${noPostPhoto}`}
                         alt={post.title}/>
                </div>
            </div>
            {recommendedPosts.length && (<div className={classes.section}>
                <Typography
                    gutterBottom
                    variant="h5">
                    Check other posts:
                </Typography>
                <Divider style={{marginBottom: '1em'}}/>
                <div className={classes.recommendedPosts}>
                    {recommendedPosts.map(({title, name, likes, file, _id, createdAt}) => (<RecommendedPosts
                        title={title}
                        name={name}
                        likes={likes}
                        file={file}
                        _id={_id}
                        key={_id}
                        createdAt={createdAt}
                    />))}
                </div>
            </div>)}
        </Paper>
    );
};

export default PostDetails;
