import React, {useEffect} from 'react';
import useStyles from './styles';
import {Pagination, PaginationItem} from "@material-ui/lab";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../Redux/actions/posts";


const Paginate = ({page}) => {

    const {numberOfPages} = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        if(page) dispatch(getPosts(page));
    },[dispatch, page]);

    const classes = useStyles();

    return (
        <Pagination
            classes={{ul: classes.ul}}
            count={numberOfPages}
            page={+page || 1}
            variant="outlined"
            color="primary"
            renderItem={(item) => (
                <PaginationItem {...item} component={Link} to={`/posts?page=${item.page}`}/>
            )}
        />
    );
};

export default Paginate;
