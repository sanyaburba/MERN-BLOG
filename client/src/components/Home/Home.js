import React, {useCallback, useState} from 'react';
import {AppBar, Button, Container, Grid, Grow, Paper, TextField} from "@material-ui/core";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import useStyles from "./styles";
import {useDispatch} from "react-redux";
import Pagination from "../Pagination/Pagination";
import {useLocation, useNavigate} from "react-router-dom";
import ChipInput from "material-ui-chip-input";
import {getPostsBySearch} from "../../Redux/actions/posts";
import NewPosts from "../NewStyles/NewPosts/NewPosts";


function useQuery() {
    return new URLSearchParams(useLocation().search);
}


const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const query = useQuery();
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);
    // const searchQuery = query.get('searchQuery');
    const page = query.get('page') || 1;


    const searchPost = useCallback(() =>{
        if(search.trim() || tags){
            dispatch(getPostsBySearch({search, tags: tags.join(',') }));
            navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
        } else {
            navigate('/');
        }
    }, [dispatch, navigate, search, tags]);


    const handleKeyPress = useCallback((e) => {
        if (e.keyCode === 13) {
            searchPost();
        }
    }, [searchPost]);

    const onChangeSearchField = useCallback((e) => setSearch(e.target.value), [setSearch]);
    const handleAdd = useCallback((tag) => setTags([...tags, tag]), [tags]);
    const handleDelete = useCallback((tagToDelete) => setTags(tags.filter((tag)=> tag !== tagToDelete)), [tags]);


    return (
        <Grow in>
            <Container maxWidth="xl">
                <Grid
                    container
                    className={classes.gridContainer}
                    justifyContent="space-between"
                    alignItems="stretch"
                    spacing={3}
                >
                    <Grid item xs={12} sm={6} md={9}>
                        <Posts setCurrentId={setCurrentId}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppBar
                            className={classes.appBarSearch}
                            position="static"
                            color="inherit"
                        >
                            <TextField
                                variant="outlined"
                                label="Search"
                                name="search"
                                fullWidth
                                value={search}
                                onKeyPress={handleKeyPress}
                                onChange={onChangeSearchField}
                            />
                            <ChipInput
                                style={{margin: '10px 0'}}
                                value={tags}
                                onAdd={handleAdd}
                                onDelete={handleDelete}
                                label="Search tags"
                                variant="outlined"
                                />
                            <Button
                                onClick={searchPost}
                                className={classes.searchButton}
                                color="primary"
                                variant="contained"
                                >
                                Search
                            </Button>
                        </AppBar>
                        <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        <Paper className={classes.pagination} elevation={6}>
                            <Pagination page={page}/>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Home;
