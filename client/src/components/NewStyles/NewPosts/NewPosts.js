import React from 'react';
import {CircularProgress, Container, Grid} from "@material-ui/core";
import useStyles from './styles';
import NewPost from "./NewPost/NewPost";
import {useSelector} from "react-redux";

const NewPosts = ({setCurrentId}) => {

    const classes = useStyles();
    const {posts, isLoading} = useSelector((state) => state.posts);

    if(!posts?.length && !isLoading) return <h1>No posts</h1>;

    return (
        isLoading ? <CircularProgress/> : (
            <Container
                maxWidth='lg'
                className={classes.postsContainer}
            >
                <Grid container spacing={3}>
                    {posts.map((post) => (
                        <Grid item xs={12} sm={6} md={4} key={post._id}>
                            <NewPost post={post} setCurrentId={setCurrentId}/>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        )
    );
};

export default NewPosts;