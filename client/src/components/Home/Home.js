import React, {useCallback, useEffect, useState} from 'react';
import {AppBar, Button, Container, Grid, Grow, Paper, TextField} from "@material-ui/core";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import useStyles from "./styles";
import {useDispatch, useSelector} from "react-redux";
import {getPosts, getPostsBySearch} from "../../Redux/actions/posts";
import Pagination from "../Pagination/Pagination";
import {useLocation, useNavigate} from "react-router-dom";
import ChipInput from "material-ui-chip-input";
import Search from "../Search/Search";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}


const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const query = useQuery();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');


    // const [searchTerm, setSearchTerm] = useState('');





    const classes = useStyles();

    const searchPost = useCallback(() => {
        if (search.trim() || tags ) {
            dispatch(getPostsBySearch({search, tags: tags.join(',') }));
            navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
        } else if (!search && !tags){
            navigate('/');
        } else {
            navigate('/');
        }
    }, [dispatch, tags, navigate,search]);


    const handleAdd = useCallback((tag) => setTags([...tags, tag]), [tags]);
    const handleDelete = useCallback((tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete)), [tags]);
    const onChangeSearch = useCallback((e) => {setSearch(e.target.value);}, []);


    const updateSearch = useCallback((newSearchTerm) => {
        setSearch(newSearchTerm);

    }, []);

    const handleKeyPress = useCallback((e) => {
        if (e.keyCode === 13) {
            searchPost();
        }
    }, [searchPost]);


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
                            {/*<TextField*/}
                            {/*    name="search"*/}
                            {/*    variant="outlined"*/}
                            {/*    label="Search"*/}
                            {/*    fullWidth*/}
                            {/*    value={search}*/}
                            {/*    onChange={onChangeSearch}*/}
                            {/*/>*/}
                            <Search refreshFunction={updateSearch} />
                            <ChipInput
                                style={{margin: "10px 0"}}
                                value={tags}
                                onAdd={handleAdd}
                                onDelete={handleDelete}
                                onKeyPress={handleKeyPress}
                                label="search tags"
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
                        <Form
                            currentId={currentId}
                            setCurrentId={setCurrentId}
                        />
                        {(!searchQuery && !tags.length) && (
                            <Paper elevation={6} className={classes.pagination}>
                                <Pagination page={page}/>
                            </Paper>
                        )}
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Home;
