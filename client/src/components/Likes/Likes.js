import React from 'react';
import {Favorite, FavoriteBorder} from "@material-ui/icons";
import PropTypes from 'prop-types';

const styles = {

};

const Likes = ({post, user}) => {
        if (post.likes.length > 0) {
            return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
                ? (
                    <>
                        <Favorite
                            fontSize='small'
                            style={{color:'#ff1556', fontSize: '2rem', cursor: 'pointer'}}
                        />
                        &nbsp;
                        {post.likes.length > 2 ? `You and ${post.likes.length - 1} others`
                        : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}
                    </>
                ) : (
                    <><FavoriteBorder
                        fontSize="small"
                        style={{color:'#000000', fontSize: '2rem', cursor: 'pointer'}}
                    />
                        &nbsp;
                        {post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}
                    </>
                );
        }
        return <><FavoriteBorder fontSize='small' style={{color:'#000000', fontSize: '2rem', cursor: 'pointer'}}/> &nbsp;Like</>;
};

Likes.propTypes = {
    post: PropTypes.object.isRequired,
    user: PropTypes.object
};

Likes.defaultProps = {
    user: PropTypes.object
};

export default Likes;
