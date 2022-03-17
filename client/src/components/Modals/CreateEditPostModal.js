import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import FileBase from "react-file-base64";
import PropTypes from "prop-types";
import {Box, Button, Modal, TextField, Typography} from "@material-ui/core";

import {createPost, updatePost} from "../../Redux/actions/posts";
import useStyles from "./styles";


const CreateEditPostModal = ({open, onClose, currentId}) => {

    const classes = useStyles();
    const [postData, setPostData] = useState({
        title: '', message: '', tags: '', selectedFile: ''
    });
    const post = useSelector((state) => currentId ? state.posts.posts.find((p) => p._id === currentId) : null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('profile'));
    const {register, handleSubmit, formState: {errors}} = useForm();

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const onSubmit = useCallback(async () => {
        if (currentId === '') {
            dispatch(createPost({...postData, name: user?.result?.name}, navigate));
        } else {
            dispatch(updatePost(currentId, {...postData, name: post?.name}, navigate));
        }
        onClose();
    }, [currentId, dispatch, navigate, onClose, post?.name, postData, user?.result?.name]);


    const onChangeTitle = useCallback((event) => {
        setPostData({...postData, title: event.target.value});
    }, [postData]);
    const onChangeMessage = useCallback((event) => {
        setPostData({...postData, message: event.target.value});
    }, [postData]);
    const onChangeTags = useCallback((event) => {
        setPostData({...postData, tags: event.target.value.split(',')});
    }, [postData]);
    const onDoneFile = useCallback(({base64}) => {
        setPostData({...postData, file: base64});
    }, [postData]);

    return (

            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box className={classes.modal}>
                    <form
                        autoComplete='off'
                        noValidate
                        className={`${classes.root} ${classes.form}`}
                        onSubmit={handleSubmit(onSubmit)}>
                        <Typography
                            variant='h6'>{currentId ? 'Editing the post' : 'Creating a post'}
                        </Typography>
                        <TextField
                            name="title"
                            variant='filled'
                            label='Title'
                            required
                            {...register('title', {required: 'title is required'})}
                            error={Boolean(errors.title)}
                            helperText={errors.title?.message}
                            value={postData.title}
                            onChange={onChangeTitle}/>
                        <TextField
                            name="message"
                            variant='filled'
                            label='Message'
                            required
                            {...register('message', {required: 'message is required'})}
                            error={Boolean(errors.message)}
                            helperText={errors.message?.message}
                            multiline
                            rows={10}
                            value={postData.message}
                            onChange={onChangeMessage}/>
                        <TextField
                            name="Tags"
                            variant='filled'
                            label='Tags'
                            value={postData.tags}
                            onChange={onChangeTags}/>
                        <div className={classes.fileInput}>
                            <FileBase
                                type='file'
                                multiple={false}
                                onDone={onDoneFile}/>
                        </div>
                        {/*<input onChange={onDoneFile} type="file" accept=".jpg, .jpeg, .png" className={classes.inputFile}/>*/}
                        <Button
                            className={classes.buttonSubmit}
                            variant='contained'
                            size='large'
                            type='submit'>
                            submit
                        </Button>
                    </form>
                </Box>
            </Modal>

    );
};

CreateEditPostModal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    currentId: PropTypes.string.isRequired,
};

export default CreateEditPostModal;
