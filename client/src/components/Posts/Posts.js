import React from 'react';
import {useSelector} from "react-redux";

import Post from "./Post/Post";
import useStyles from './styles';
import {CircularProgress, Grid} from "@material-ui/core";
import PropTypes from "prop-types";


const Posts = ({setCurrentId}) => {

    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    return (
        !posts.length ? <CircularProgress/> : (
            <Grid
                className={classes.mainContainer}
                container
                alignItems='stretch'
                spacing={3}>
                {posts.map((post) => (
                    <Grid
                        key={post.title}
                        item xs={12} sm={6}>
                        <Post
                            post={post}
                            setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
    );
};

Posts.propTypes = {
    setCurrentId: PropTypes.func.isRequired
};

export default Posts;
