import React from 'react';
import {Paper, Typography} from "@material-ui/core";
import {FavoriteBorder} from "@material-ui/icons";
import useStyles from "./styles";
import {useNavigate} from "react-router-dom";

const RecommendedPosts = ({file, name, likes,title, _id}) => {

    const classes = useStyles();
    const navigate = useNavigate();

    const openPost = (_id) => navigate(`/posts/${_id}`);

    return (
        <Paper elevation={5} className={classes.recommendations} onClick={()=>openPost(_id)} key={_id} >
            <Typography gutterBottom variant="h6">{title}</Typography>
            <Typography gutterBottom variant="subtitle2">{name}</Typography>
            <img src={file} alt={name} width="100%"/>
            <Typography gutterBottom variant="subtitle1"><FavoriteBorder/> {likes.length}</Typography>
        </Paper>
    );
};

export default RecommendedPosts;
