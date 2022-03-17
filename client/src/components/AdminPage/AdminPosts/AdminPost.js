import React, {useCallback} from 'react';
import PropTypes from "prop-types";
import {Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {ReadMore} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {deletePost} from "../../../Redux/actions/posts";
import {useDispatch} from "react-redux";
import useStyles from '../styles';

const AdminPost = ({post}) => {

    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const deletePostButtonClick = useCallback(() => dispatch(deletePost(post._id)), [dispatch, post._id]);
    const openPostButtonClick = useCallback(() => navigate(`/posts/${post._id}`), [navigate, post._id]);

    return (
        <div className={classes.postItem}>
            <List>
                <ListItem secondaryAction={
                    <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={deletePostButtonClick}>
                        <DeleteIcon/>
                    </IconButton>
                }
                >
                    <ListItemAvatar
                        style={{cursor: 'pointer'}}
                        onClick={openPostButtonClick}>
                        <Avatar>
                            <ReadMore/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={post.title}
                        secondary={post.name}
                    />
                </ListItem>
            </List>
        </div>
    );
};

AdminPost.propTypes = {
    post: PropTypes.object.isRequired
};

export default AdminPost;
