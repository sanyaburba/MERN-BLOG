import React, {useCallback, useEffect, useState} from 'react';
import {
    Box, CircularProgress, Grid,
} from "@mui/material";
import Typography from "@material-ui/core/Typography";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllPostsForAdmin} from "../../Redux/actions/posts";
import useStyles from './styles';
import {getUsersForAdmin} from "../../Redux/actions/users";
import {DynamicFeed, Group} from "@material-ui/icons";
import AdminPosts from "./AdminPosts/AdminPosts";
import AdminUsers from "./AdminUsers/AdminUsers";

const AdminPage = () => {

    const dispatch = useDispatch();
    const classes = useStyles();
    const {posts, isLoading} = useSelector((state) => state.posts);

    const {users} = useSelector((state) => state.user);
    console.log(users);

    const [page, setPage] = useState('posts'); // constant TODO

    useEffect(() => {
        dispatch(getUsersForAdmin());
    }, [dispatch]); //TODO dispatch

    useEffect(() => {
        dispatch(fetchAllPostsForAdmin()); //TODO использовать эффет только при условии если нет первый раз то выводить
    }, [dispatch]);


    const onUsersClick = useCallback(() => setPage('users'), []);
    const onPostsClick = useCallback(() => setPage('posts'), []);


    return (<>
            {isLoading ? <div className={classes.circular}>
                <CircularProgress
                    size='10em'
                    color="error"/>
            </div> : <div>
                {/*<AppBar/>*/}
                <Grid container>
                    <Grid
                        item
                        xs={6}
                        md={2.5}
                        className={classes.sideBarMenu}>
                        <Box
                            className={classes.sideBarBox}
                        >
                            <div className={classes.dashboardContainer}>
                            <Typography
                                variant='h3'
                                className={classes.sideBarTitle}
                            >
                                Dashboard
                            </Typography>
                            <ul className={classes.sideBarList}>
                                <li className={classes.sideBarListItem}
                                    onClick={onPostsClick}>
                                    <DynamicFeed style={{marginRight: '0.5rem'}}/>
                                    Posts
                                </li>
                                <li className={classes.sideBarListItem}
                                    onClick={onUsersClick}>
                                    <Group style={{marginRight: '0.5rem'}}/>
                                    Users
                                </li>
                            </ul>
                            </div>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        md={9.5}
                        style={{padding: '0 1rem'}}>
                        {page === 'users' && <AdminUsers users={users}/>}
                        {page === 'posts' && <AdminPosts posts={posts}/>}
                    </Grid>
                </Grid>
            </div>}
        </>);
};

export default AdminPage;
