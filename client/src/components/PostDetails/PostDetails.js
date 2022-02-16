import React, {useCallback, useEffect} from 'react';
import useStyles from './styles';
import {CircularProgress, Divider, Paper, Typography} from "@material-ui/core";
import moment from "moment";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {getPost, getPostsBySearch} from "../../Redux/actions/posts";
import {FavoriteBorder} from "@material-ui/icons";
import RecommendedPosts from "./RecommendedPosts";


const PostDetails = () => {

    const {post, posts, isLoading} = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();
    const classes = useStyles();

    useEffect(() => {dispatch(getPost(id));}, [dispatch, id]);
    

    
    // useEffect(() => {
    //     if(post){
    //         dispatch(getPostsBySearch({search: 'none', tags: post?.tags.join(',') }));
    //     }
    // }, [post, dispatch]);


    const openPost = (_id) => navigate(`/posts/${_id}`);
    if(!post) return null;

    if(isLoading) {
        return <Paper elevation={6} className={classes.loadingPaper}>
            <CircularProgress size="7em" />
        </Paper>;
    }

    const recommendedPosts = posts.filter(({_id}) => _id !== post._id);

    return (
        <Paper style={{padding: '20px', borderRadius: '15px' }} elevation={6}>
            <div className={classes.card}>
                <div className={classes.section}>
                    <Typography variant="h3" component="h2">{post.title}</Typography>
                    <Typography gutterBottom variant="h6" color="textSecondary"
                                component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
                    <Typography gutterBottom variant="body1" component="p">{post.message}</Typography>
                    <Typography variant="h6">Created by: {post.name}</Typography>
                    <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
                    <Divider style={{margin: '20px 0'}}/>
                    <Typography variant="body1"><strong>Comments</strong></Typography>
                    <Divider style={{margin: '20px 0'}}/>
                </div>
                <div className={classes.imageSection}>
                    <img className={classes.media}
                         src={post.file || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}
                         alt={post.title}/>
                </div>
            </div>
            {recommendedPosts.length && (
                <div className={classes.section}>
                    <Typography
                        gutterBottom
                        variant="h5"
                        >
                        Check other posts:
                    </Typography>
                    <Divider />
                    <div className={classes.recommendedPosts}>
                        {recommendedPosts.map(({title, message, name, likes, file, _id}) => (
                            <RecommendedPosts
                                title={title}
                                message={message}
                                name={name}
                                likes={likes}
                                file={file}
                                _id={_id}
                            />
                        ))}
                    </div>
                </div>
            )}
        </Paper>
    );
};

export default PostDetails;
