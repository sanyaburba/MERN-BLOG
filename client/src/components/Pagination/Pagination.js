import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {Box} from "@material-ui/core";
import {Pagination, Stack} from "@mui/material";
import {PaginationItem} from "@material-ui/lab";

import {getPosts} from "../../Redux/actions/posts";
import useStyles from './styles';


const Paginate = ({page}) => {

    const classes = useStyles();

    const dispatch = useDispatch();

    const {numberOfPages} = useSelector((state) => state.posts);

    useEffect(() => {
        if (page) dispatch(getPosts(page));
    }, [dispatch, page]);

    const renderIem = useCallback((item) => (
        <PaginationItem
            shape="rounded" {...item}
            component={Link}
            to={`/posts?page=${item.page}`}/>
    ), []);

    return (
        <Box my={4}
             className={classes.paginationContainer}>
            <Stack spacing={2}>
                <Pagination
                    count={numberOfPages}
                    page={+page || 1}
                    renderItem={renderIem}
                    shape="rounded"/>
            </Stack>
        </Box>
    );
};

Paginate.propTypes = {
    page: PropTypes.string.isRequired
};


export default Paginate;
