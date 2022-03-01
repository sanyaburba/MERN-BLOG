import React, {useCallback, useState} from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Box, Button, Modal, TextField} from "@material-ui/core";
import ChipInput from "material-ui-chip-input";
import useStyles from './styles';
import {getPostsBySearch} from "../../Redux/actions/posts";
import PropTypes from "prop-types";

const SearchModal = ({open, closeModal}) => {

    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);

    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const searchPost = useCallback(() => {
        if (search.trim() || tags) {
            dispatch(getPostsBySearch({search, tags: tags.join(',')}));
            navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
        } else {
            navigate('/');
        }
    }, [dispatch, navigate, search, tags]);

    const handleKeyPress = useCallback((e) => {
        if (e.keyCode === 13) {
            searchPost();
        }
    }, [searchPost]);

    const onChangeSearchField = useCallback((e) => setSearch(e.target.value), [setSearch]);
    const handleAdd = useCallback((tag) => setTags([...tags, tag]), [tags]);
    const handleDelete = useCallback((tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete)), [tags]);


    return (
        <Modal
            open={open}
            onClose={closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box className={classes.modal}>
                <TextField
                    variant="standard"
                    label="Search"
                    name="search"
                    fullWidth
                    className={classes.input}
                    value={search}
                    onKeyPress={handleKeyPress}
                    onChange={onChangeSearchField}/>
                <ChipInput
                    style={{margin: '0.8em 0'}}
                    value={tags}
                    onAdd={handleAdd}
                    onDelete={handleDelete}
                    label="Search tags"
                    variant="standard"
                    className={classes.input}
                    fullWidth/>
                <Button
                    className={classes.buttonSubmit}
                    variant='contained'
                    size='large'
                    type='submit'
                    onClick={searchPost}>
                    Search
                </Button>
            </Box>
        </Modal>
    );
};

SearchModal.propTypes = {
    open: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired
};

export default SearchModal;
