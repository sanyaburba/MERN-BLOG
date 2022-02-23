import React, {useCallback} from 'react';
import {Favorite, FavoriteBorder} from "@material-ui/icons";
import PropTypes from 'prop-types';
import {Box, Typography} from "@material-ui/core";
import useStyles from './styles';
import {likePost} from "../../Redux/actions/posts";
import {useDispatch} from "react-redux";

const Likes = ({post, user}) => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const likeButtonClick = useCallback(() => {
        dispatch(likePost(post._id,));
    }, [dispatch, post._id]);

    if (post.likes.length > 0) {
        return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
            ? (
                <Box className={classes.box}>
                    <Typography
                        className={classes.likesCount}
                        gutterBottom
                        variant="subtitle2"
                        component="p">
                        {`${post.likes.length}`}
                    </Typography>
                    <Typography
                        gutterBottom
                        component="p">
                        <Favorite
                            disabled={!user?.result}
                            onClick={likeButtonClick}
                            className={classes.favorite}/>
                    </Typography>
                </Box>
            ) : (
                <Box className={classes.box}>
                    <Typography
                        className={classes.likesCount}
                        gutterBottom
                        variant="subtitle2"
                        component="p">
                        {`${post.likes.length}`}
                    </Typography>
                    <Typography
                        gutterBottom
                        component="p">
                        <FavoriteBorder
                            className={classes.likeHover}
                            disabled={!user?.result}
                            onClick={likeButtonClick}/>
                    </Typography>
                </Box>
            );
    }
    return <>
        <FavoriteBorder
            className={classes.likeHover}
            disabled={!user?.result}
            onClick={likeButtonClick}/>
    </>;
};

Likes.propTypes = {
    post: PropTypes.object.isRequired,
    user: PropTypes.object
};

Likes.defaultProps = {
    user: PropTypes.object
};

export default Likes;
