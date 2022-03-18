import React from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import AdminPost from "./AdminPost";
import Typography from "@material-ui/core/Typography";
import useStyles from '../styles';

const AdminPosts = ({posts}) => {

    const totalPosts = posts?.length;
    const classes = useStyles();

    return (
        <>
            <span className={classes.totalTitle}>Total posts: {totalPosts}</span>
            {!posts ? <Typography variant='h4'>No posts yet</Typography> :
                // <TransitionGroup>
                    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                        {posts?.map((post) => (
                            // <CSSTransition
                            //     key={post._id}
                            //     timeout={500}
                            //     classNames="post"
                            // >
                                <AdminPost key={post._id} post={post}/>
                        ))}
                            {/*</CSSTransition>*/}
                    </div>
                // </TransitionGroup>
}
        </>
    );
};

export default AdminPosts;
