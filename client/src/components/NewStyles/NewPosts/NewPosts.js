import React from 'react';
import {useSelector} from "react-redux";
import PropTypes from "prop-types";
import {CircularProgress, Container, Grid} from "@material-ui/core";
import NewPost from "./NewPost/NewPost";
import useStyles from './styles';

const NewPosts = ({setCurrentId}) => {

    const classes = useStyles();
    const {posts, isLoading} = useSelector((state) => state.posts);

    return (
        isLoading ?
            <Container
                maxWidth='lg'
                className={classes.postsContainer}>
                <CircularProgress size="7em"/>
            </Container>
            : (
                <Container
                    maxWidth='lg'
                    className={classes.postsContainer}>
                    {(!posts?.length && !isLoading) ? (
                        <h1>No posts</h1>
                    ) : (
                        <Grid
                            container
                            spacing={3}>
                            {posts.map((post) => (
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    md={4}
                                    key={post._id}>
                                    <NewPost
                                        post={post}
                                        setCurrentId={setCurrentId}/>
                                </Grid>
                            ))}
                        </Grid>
                    )}

                </Container>
            )
    );
};

NewPosts.propTypes = {
    setCurrentId: PropTypes.func.isRequired
};

export default NewPosts;