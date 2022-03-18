import React, {useCallback} from 'react';
import PropTypes from "prop-types";
import {
    Avatar,
    Button, Card, CardActions, CardContent,
    CardMedia, Divider,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {ReadMore} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {deletePost} from "../../../Redux/actions/posts";
import {useDispatch} from "react-redux";
import useStyles from '../styles';
import noPhoto from '../../../images/noPostPhoto.jpg';
import {CSSTransition, TransitionGroup} from "react-transition-group";

const AdminPost = ({post}) => {

    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const deletePostButtonClick = useCallback(() => dispatch(deletePost(post._id)), [dispatch, post._id]);
    const openPostButtonClick = useCallback(() => navigate(`/posts/${post._id}`), [navigate, post._id]);

    console.log(post);
    return (
        // <div className={classes.postItem}>
        //     <List>
        //         <ListItem secondaryAction={
        //             <IconButton
        //                 edge="end"
        //                 aria-label="delete"
        //                 onClick={deletePostButtonClick}>
        //                 <DeleteIcon/>
        //             </IconButton>
        //         }
        //         >
        //             <ListItemAvatar
        //                 style={{cursor: 'pointer'}}
        //                 onClick={openPostButtonClick}>
        //                 <Avatar>
        //                     <ReadMore/>
        //                 </Avatar>
        //             </ListItemAvatar>
        //             <ListItemText
        //                 primary={post.title}
        //                 secondary={post.name}
        //             />
        //         </ListItem>
        //     </List>
        // </div>
        <TransitionGroup>
            <CSSTransition

                    timeout={500}
                    classNames="post"
                >
        <Card sx={{ width: 400, margin: '2rem 0'}} elevation={16}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="250"
                image={post.file || noPhoto}
            />
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    height="4rem"
                    color='primary'
                    style={{textOverflow: 'ellipsis', overflow: 'hidden'}}
                >
                    <span style={{fontSize: '1rem', color: 'black'}}>Post Name:</span> {post.title}
                </Typography>
                <Divider style={{marginBottom: '1rem'}}/>
                <Typography variant="body2" color="secondary">
                    Creator Name: {post.name}
                </Typography>
            </CardContent>
            <CardActions style={{display: 'flex', justifyContent: 'space-between'}}>
                <IconButton size="small" onClick={deletePostButtonClick}><DeleteIcon color="error"/> </IconButton>
                <Button size="small" onClick={openPostButtonClick}>Open Post</Button>
            </CardActions>
        </Card>
            </CSSTransition>
        </TransitionGroup>
    );
};

AdminPost.propTypes = {
    post: PropTypes.object.isRequired
};

export default AdminPost;
