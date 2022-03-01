import React, {useCallback, useRef, useState} from 'react';
import useStyles from './styles';
import {Button, TextField, Typography} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {commentPost} from "../../Redux/actions/posts";
import PropTypes from "prop-types";

const Comments = ({post}) => {

    const classes = useStyles();
    const [comments, setComments] = useState(post?.comments);
    const [comment, setComment] = useState('');
    const user = JSON.parse(localStorage.getItem('profile'));
    const dispatch = useDispatch();
    const commentsRef = useRef();

    const handleClick = useCallback(async () => {
        const finalComment = `${user?.result.name}: ${comment}`;
        const newComments = await dispatch(commentPost(finalComment, post._id));
        setComments(newComments);
        setComment('');

        commentsRef.current.scrollIntoView({behavior: 'smooth'});
    }, [comment, dispatch, post._id, user?.result.name]);

    const onChangeCommentField = useCallback( (e) => setComment(e.target.value), []);

    return (
        <div>
            <div className={classes.commentsOuterContainer}>
                <div className={classes.commentsInnerContainer}>
                    <Typography
                        variant='h6'
                        gutterBottom>
                        Comments
                    </Typography>
                    {comments.map((c, i) => (
                        <Typography
                            key={i}
                            gutterBottom
                            variant='subtitle1'>
                           <strong>{c.split(': ')[0]}:</strong>
                            {c.split(':')[1]}
                        </Typography>
                    ))}
                    <div ref={commentsRef} />
                </div>
                {user?.result?.name && (
                    <div style={{width: '70%'}}>
                        <Typography
                            gutterBottom
                            variant='h6'>
                            Write a comment
                        </Typography>
                        <TextField
                            fullWidth
                            rows={4}
                            variant='outlined'
                            label='Comments'
                            multiline
                            value={comment}
                            onChange={onChangeCommentField}/>
                        <Button
                            style={{marginTop: '10px'}}
                            fullWidth
                            disabled={!comment}
                            variant="contained"
                            onClick={handleClick}>
                            Send Comment
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

Comments.propTypes = {
    post: PropTypes.object.isRequired
};

export default Comments;
