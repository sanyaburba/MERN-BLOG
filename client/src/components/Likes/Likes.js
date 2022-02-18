import React from 'react';
import {Favorite, FavoriteBorder} from "@material-ui/icons";
import PropTypes from 'prop-types';
import {Box, Typography} from "@material-ui/core";
import useStyles from './styles';

const Likes = ({post, user}) => {

    const classes = useStyles();

        if (post.likes.length > 0) {
            return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
                ? (
                        <Box  className={classes.box}>
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
                                <Favorite className={classes.favorite}/>
                            </Typography>
                        </Box>
                ) : (
                    <>
                {post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}
                        &nbsp;
                        <FavoriteBorder/>
            </>
                );
        }
        return <><FavoriteBorder/></>;
};

Likes.propTypes = {
    post: PropTypes.object.isRequired,
    user: PropTypes.object
};

Likes.defaultProps = {
    user: PropTypes.object
};

export default Likes;
